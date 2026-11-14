#!/usr/bin/env python3
"""Titik Sejarah – audio mixer.

Builds the full soundtrack for one episode:
  * narration clips placed on the timeline
  * original procedurally generated background music (royalty-free by construction), ducked under speech
  * procedurally generated sound effects (pencil, paper, pop, whoosh, ding, stamp) and brand stings

Usage: python3 engine/audio.py job.json   ->  writes job["out"] (44.1 kHz stereo WAV)
"""
import json, sys, wave
import numpy as np

SR = 44100
rng = np.random.default_rng(7)


def band(x, lo, hi):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    X[(f < lo) | (f > hi)] = 0
    return np.fft.irfft(X, n=len(x))


def env_adsr(n, a=0.005, d=0.3, curve=6.0):
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4)) * np.exp(-t * curve / max(d, 1e-3))
    return e


def midi(m):
    return 440.0 * 2 ** ((m - 69) / 12)


# ---------------- instruments ----------------
def pluck(freq, dur=0.5, vel=1.0):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.sin(2 * np.pi * freq * t) + 0.35 * np.sin(2 * np.pi * freq * 4 * t) * np.exp(-t * 18) + 0.12 * np.sin(2 * np.pi * freq * 2 * t)
    return vel * s * env_adsr(n, 0.004, dur, 5.0)


def pad(freqs, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.zeros(n)
    for f in freqs:
        for det in (-0.6, 0.6):
            s += np.sin(2 * np.pi * (f + det) * t + 0.3 * np.sin(2 * np.pi * 0.25 * t))
    a = np.minimum(1, t / 0.6) * np.minimum(1, (dur - t) / 0.6)
    return s * a / (2 * len(freqs))


def bass(freq, dur=0.5):
    n = int(dur * SR)
    t = np.arange(n) / SR
    return (np.sin(2 * np.pi * freq * t) + 0.25 * np.sin(4 * np.pi * freq * t)) * env_adsr(n, 0.01, dur, 3.0)


def kick():
    n = int(0.18 * SR)
    t = np.arange(n) / SR
    f = 50 + 70 * np.exp(-t * 30)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t * 22)


def shaker():
    n = int(0.06 * SR)
    x = band(rng.standard_normal(n), 5000, 12000)
    return x * env_adsr(n, 0.003, 0.05, 4.0) * 0.6


# ---------------- music ----------------
PROG = [(0, [0, 4, 7]), (-3, [0, 3, 7]), (-7, [0, 4, 7]), (-5, [0, 4, 7])]  # I vi IV V (relative semitones)


def music(duration, key=60, bpm=100, variant=0):
    beat = 60 / bpm
    bar = beat * 4
    n = int((duration + 2) * SR)
    out = np.zeros(n)
    patt = [[0, 1, 2, 3, 2, 1, 2, 1], [0, 2, 1, 3, 1, 2, 3, 2], [0, 1, 2, 1, 3, 2, 1, 2]][variant % 3]
    cache = {}

    def add(sig, t, g=1.0):
        i = int(t * SR)
        if i >= n:
            return
        m = min(len(sig), n - i)
        out[i:i + m] += g * sig[:m]

    nb = int(duration / bar) + 2
    for b in range(nb):
        t0 = b * bar
        rootoff, triad = PROG[b % 4]
        root = key + rootoff
        if root < key - 4:
            root += 12
        tones = [root + x for x in triad] + [root + 12]
        add(pad([midi(m - 12) for m in tones[:3]], bar + 0.3), t0, 0.16)
        add(bass(midi(root - 24), beat * 1.8), t0, 0.32)
        add(bass(midi(root - 24), beat * 1.8), t0 + 2 * beat, 0.26)
        for k in range(8):
            m = tones[patt[k]] + 12
            if (b % 8) >= 4 and k == 7:
                m = tones[3] + 12
            key_ = (m,)
            if key_ not in cache:
                cache[key_] = pluck(midi(m), 0.45)
            add(cache[key_], t0 + k * beat / 2, 0.20 if k % 2 == 0 else 0.13)
        for k in (0, 2):
            add(kick(), t0 + k * beat, 0.30)
        for k in range(8):
            add(shaker(), t0 + k * beat / 2 + beat / 4, 0.10)
    return out[: int(duration * SR)]


def piano(freq, dur=2.2, vel=1.0):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = sum(a * np.sin(2 * np.pi * freq * k * t + k) * np.exp(-t * (1.6 + 1.2 * k)) for k, a in [(1, 1.0), (2, 0.45), (3, 0.18), (4, 0.08)])
    return vel * s * np.minimum(1, t / 0.004)


def strings(freqs, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.zeros(n)
    for f in freqs:
        for det in (-1.1, 0, 1.2):
            ff = f + det
            for k, a in [(1, 1), (2, 0.35), (3, 0.18), (4, 0.08)]:
                s += a * np.sin(2 * np.pi * ff * k * t + 0.4 * np.sin(2 * np.pi * 5.2 * t) * 0.02 * k)
    env = np.minimum(1, t / 1.4) * np.minimum(1, (dur - t) / 1.2)
    return s * env / (len(freqs) * 3 * 1.6)


def cinematic(duration, key=57, bpm=72):
    """Nostalgic documentary bed: minor i-VI-III-VII, slow piano, strings, low drums."""
    beat = 60 / bpm
    bar = beat * 4
    n = int((duration + 3) * SR)
    out = np.zeros(n)
    prog = [(0, [0, 3, 7]), (-4, [0, 4, 7]), (3, [0, 4, 7]), (-2, [0, 4, 7])]   # Am F C G (relative to key)

    def add(sig, t, g=1.0):
        i = int(t * SR)
        if i >= n:
            return
        m = min(len(sig), n - i)
        out[i:i + m] += g * sig[:m]

    nb = int(duration / bar) + 2
    for b in range(nb):
        t0 = b * bar
        off, tri = prog[b % 4]
        root = key + off
        tones = [root + x for x in tri]
        add(strings([midi(m - 12) for m in tones] + [midi(root - 24)], bar + 1.2), t0, 0.55)
        add(bass(midi(root - 24), bar), t0, 0.30)
        for k, idx in enumerate([0, 2, 1, 2]):          # slow broken chord, one note per beat
            add(piano(midi(tones[idx] + 12), 2.4), t0 + k * beat, 0.22 if k == 0 else 0.15)
        if b % 2 == 1:                                    # soft low drum for tension
            add(kick() * 0.8, t0 + 3 * beat, 0.35)
    return out[: int(duration * SR)]


# ---------------- sfx ----------------
def sfx(kind):
    if kind == 'pencil' or kind == 'scribble':
        dur = 0.75 if kind == 'pencil' else 0.45
        n = int(dur * SR)
        t = np.arange(n) / SR
        x = band(rng.standard_normal(n), 1800, 7000)
        strokes = np.abs(np.sin(2 * np.pi * (9 + 3 * np.sin(2 * np.pi * 1.3 * t)) * t)) ** 1.5
        e = np.minimum(1, t / 0.03) * np.minimum(1, (dur - t) / 0.08)
        return x * strokes * e * (0.16 if kind == 'pencil' else 0.11)
    if kind == 'pop':
        n = int(0.12 * SR)
        t = np.arange(n) / SR
        f = 480 + 900 * (t / 0.12)
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 38) * 0.32
    if kind in ('paper', 'page'):
        dur = 0.45 if kind == 'paper' else 0.6
        n = int(dur * SR)
        t = np.arange(n) / SR
        x = rng.standard_normal(n)
        lo = band(x, 600, 2500)
        hi = band(x, 2500, 9000)
        mix = np.where(t < dur * 0.5, lo, hi)
        e = np.sin(np.pi * t / dur) ** 2
        crackle = 1 + 0.6 * (rng.random(n) > 0.997)
        return mix * e * crackle * (0.22 if kind == 'paper' else 0.26)
    if kind in ('whoosh', 'swish'):
        dur = 0.55 if kind == 'whoosh' else 0.3
        n = int(dur * SR)
        t = np.arange(n) / SR
        x = band(rng.standard_normal(n), 300, 4000)
        e = np.sin(np.pi * t / dur) ** 3
        return x * e * (0.22 if kind == 'whoosh' else 0.1)
    if kind == 'ding':
        n = int(1.1 * SR)
        t = np.arange(n) / SR
        f = 1318.5
        s = sum(a * np.sin(2 * np.pi * f * r * t) * np.exp(-t * d) for r, a, d in [(1, 1, 4), (2.0, 0.4, 6), (3.01, 0.25, 9), (4.2, 0.12, 12)])
        return s * 0.09
    if kind == 'boom':                 # cinematic low impact
        n = int(1.6 * SR)
        t = np.arange(n) / SR
        th = np.sin(2 * np.pi * (38 + 40 * np.exp(-t * 9)) * t) * np.exp(-t * 2.6)
        nz = band(rng.standard_normal(n), 60, 900) * np.exp(-t * 7)
        return (th * 0.75 + nz * 0.25) * 0.75
    if kind == 'riser':                # tension build before a reveal (1.4 s)
        dur = 1.4
        n = int(dur * SR)
        t = np.arange(n) / SR
        x = rng.standard_normal(n)
        lo = band(x, 300, 1500) * (1 - t / dur)
        hi = band(x, 1500, 8000) * (t / dur)
        tone = np.sin(2 * np.pi * np.cumsum(220 + 440 * (t / dur) ** 2) / SR) * 0.25
        return (lo + hi + tone) * (t / dur) ** 2 * 0.22
    if kind == 'airy':                 # soft dissolve whoosh
        dur = 0.9
        n = int(dur * SR)
        t = np.arange(n) / SR
        return band(rng.standard_normal(n), 400, 3000) * np.sin(np.pi * t / dur) ** 2 * 0.08
    if kind == 'stamp':
        n = int(0.3 * SR)
        t = np.arange(n) / SR
        th = np.sin(2 * np.pi * (60 + 60 * np.exp(-t * 25)) * t) * np.exp(-t * 16)
        nz = band(rng.standard_normal(n), 200, 3000) * np.exp(-t * 40)
        return (th * 0.5 + nz * 0.3) * 0.8
    if kind in ('intro', 'outro'):
        notes = [72, 76, 79, 84] if kind == 'intro' else [67, 72, 76, 79, 84]
        dur = 2.2
        out = np.zeros(int(dur * SR))
        for i, m in enumerate(notes):
            s = pluck(midi(m), 1.2) * 0.35
            i0 = int(i * 0.11 * SR)
            out[i0:i0 + len(s)] += s[: len(out) - i0]
        ch = pad([midi(60), midi(64), midi(67)], 1.6) * 0.35
        i0 = int(0.45 * SR)
        out[i0:i0 + len(ch)] += ch[: len(out) - i0]
        dg = sfx('ding') * 1.4
        i0 = int(0.45 * SR)
        out[i0:i0 + len(dg)] += dg[: len(out) - i0]
        return out
    return np.zeros(1)


def read_wav(path):
    with wave.open(path) as w:
        x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768.0
    return x


def main():
    job = json.load(open(sys.argv[1]))
    dur = job["duration"]
    n = int(dur * SR) + SR
    voice = np.zeros(n)
    speech_mask = np.zeros(n)
    for c in job["narration"]:
        x = read_wav(c["file"])
        i = int(c["t"] * SR)
        m = min(len(x), n - i)
        voice[i:i + m] += x[:m]
        speech_mask[i:i + m] = 1
    # ducking envelope (smoothed)
    k = int(0.25 * SR)
    smooth = np.convolve(speech_mask, np.ones(k) / k, mode="same")
    duck = 1.0 - job.get("duckDepth", 0.65) * np.clip(smooth * 1.5, 0, 1)
    if job.get("style") == "cinematic":
        mus = cinematic(dur, key=job.get("key", 57), bpm=job.get("bpm", 72))
    else:
        mus = music(dur, key=job.get("key", 60), bpm=job.get("bpm", 100), variant=job.get("variant", 0))
    mus = np.pad(mus, (0, n - len(mus)))
    # carve a gentle dip in the speech band (1-4 kHz) so the music never masks the narration
    M = np.fft.rfft(mus)
    f = np.fft.rfftfreq(len(mus), 1 / SR)
    M *= 1 - 0.45 * np.exp(-((np.log2(np.maximum(f, 1) / 2000.0)) ** 2) / (2 * 0.6 ** 2))
    mus = np.fft.irfft(M, n=len(mus))
    t = np.arange(n) / SR
    fade = np.minimum(1, t / 1.2) * np.clip((dur - t) / 2.0, 0, 1)
    mus = mus * duck * fade * job.get("musicGain", 0.22)
    fx = np.zeros(n)
    last = {}
    for ev in job["events"]:
        kind = ev["sfx"]
        if kind in last and ev["t"] - last[kind] < 0.35:
            continue
        if any(abs(ev["t"] - v) < 0.12 for v in last.values()):
            continue
        last[kind] = ev["t"]
        s = sfx(kind) * job.get("sfxGain", 0.6)
        i = int(ev["t"] * SR)
        if i >= n:
            continue
        m = min(len(s), n - i)
        fx[i:i + m] += s[:m]
    L = voice + mus * 1.0 + fx * 0.9
    R = voice + mus * 0.92 + fx * 1.0
    st = np.stack([L, R], axis=1)
    peak = np.abs(st).max()
    if peak > 0.98:
        st *= 0.98 / peak
    st = st[: int(dur * SR)]
    with wave.open(job["out"], "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((st * 32767).astype(np.int16).tobytes())


if __name__ == "__main__":
    main()
