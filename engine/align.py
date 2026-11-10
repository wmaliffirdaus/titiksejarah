#!/usr/bin/env python3
"""Word-timing aligner for TTS engines that return audio without word boundaries (e.g. Azure REST).

Predicts each token's relative timing with the Malaysian Malay duration model (malay_tts.build), then
anchors the prediction to the real audio: speech start/end and the pauses that follow punctuation are
matched to silences detected in the waveform, and token starts are mapped piecewise-linearly between anchors.
"""
import numpy as np
import malay_tts as M


def silences(x, sr, min_len=0.09):
    hop = int(0.01 * sr)
    n = len(x) // hop
    rms = np.sqrt(np.mean(x[: n * hop].reshape(n, hop) ** 2, axis=1) + 1e-12)
    voiced = rms[rms > np.percentile(rms, 30)]
    thr = max(1e-4, 0.08 * (np.median(voiced) if len(voiced) else rms.max()))
    sil = rms < thr
    idx = np.where(~sil)[0]
    if not len(idx):
        return 0.0, len(x) / sr, []
    start, end = idx[0] * 0.01, (idx[-1] + 1) * 0.01
    runs, k = [], idx[0]
    while k <= idx[-1]:
        if sil[k]:
            j = k
            while j <= idx[-1] and sil[j]:
                j += 1
            if (j - k) * 0.01 >= min_len:
                runs.append((k * 0.01, j * 0.01))
            k = j
        else:
            k += 1
    return start, end, runs


def align(text, x, sr):
    """Return the start time (s) of each whitespace token of `text` in audio x."""
    toks, seg, contours, tok_start, total = M.build(text)
    n = len(toks)
    pred = [tok_start.get(i) for i in range(n)]
    for i in range(n - 1, -1, -1):
        if pred[i] is None:
            pred[i] = pred[i + 1] if i + 1 < n else total
    # predicted pause centres after punctuation tokens
    p_speech_end = max(s.get('t', 0) + s['d'] for s in seg if s['p'] != '_') if any(s['p'] != '_' for s in seg) else total
    p0 = pred[0]
    bounds = []
    for i, t in enumerate(toks[:-1]):
        if t['punct']:
            bounds.append((i + 1, pred[i + 1]))
    a0, a1, runs = silences(x, sr)
    scale = (a1 - a0) / max(1e-3, p_speech_end - p0)
    anchors = [(p0, a0)]
    used = -1
    for ti, pt in bounds:
        guess = a0 + (pt - p0) * scale
        best, bd = None, 0.7
        for k, (s, e) in enumerate(runs):
            if k <= used:
                continue
            d = abs(e - guess)
            if d < bd:
                best, bd = k, d
        if best is not None:
            used = best
            anchors.append((pt, runs[best][1]))
    anchors.append((p_speech_end, a1))
    anchors.sort()
    px = [a for a, _ in anchors]
    ax = [b for _, b in anchors]
    for i in range(1, len(ax)):
        ax[i] = max(ax[i], ax[i - 1] + 1e-3)
    return [float(np.interp(t, px, ax)) for t in pred]
