#!/usr/bin/env python3
"""Titik Sejarah – text-to-speech for Bahasa Melayu narration.

Usage:  python3 engine/tts.py job.json      (job = {"engine":..., "items":[{"key","text"}], "outdir":...})
Prints a JSON map {key: duration_seconds}. Output: 44.1 kHz mono 16-bit WAV per item, cached by key.

Engines (env TS_TTS or job["engine"]):
  espeak  – offline, bundled espeak-ng (PyPI: espeakng-loader). Robotic but works anywhere.
  edge    – Microsoft Edge neural voices (PyPI: edge-tts). Natural Malaysian voices
            ms-MY-YasminNeural (female) / ms-MY-OsmanNeural (male). Needs internet access to
            speech.platform.bing.com.
"""
import ctypes, json, os, subprocess, sys, wave, asyncio
import numpy as np

ESPEAK_VOICE = os.environ.get("TS_ESPEAK_VOICE", "ms")
ESPEAK_RATE = int(os.environ.get("TS_ESPEAK_RATE", "163"))
ESPEAK_PITCH = int(os.environ.get("TS_ESPEAK_PITCH", "52"))
EDGE_VOICE = os.environ.get("TS_EDGE_VOICE", "ms-MY-YasminNeural")
EDGE_RATE = os.environ.get("TS_EDGE_RATE", "+4%")
SR = 44100

_esp = None


def _espeak():
    global _esp
    if _esp:
        return _esp
    import espeakng_loader as E
    lib = ctypes.cdll.LoadLibrary(E.get_library_path())
    CB = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.POINTER(ctypes.c_short), ctypes.c_int, ctypes.c_void_p)
    buf = []

    def cb(wav, n, ev):
        if wav and n > 0:
            buf.append(ctypes.string_at(wav, n * 2))
        return 0

    cbf = CB(cb)
    sr = lib.espeak_Initialize(2, 0, E.get_data_path().encode(), 0)
    lib.espeak_SetSynthCallback(cbf)
    lib.espeak_SetVoiceByName(ESPEAK_VOICE.encode())
    lib.espeak_SetParameter(1, ESPEAK_RATE, 0)
    lib.espeak_SetParameter(3, ESPEAK_PITCH, 0)
    _esp = (lib, buf, cbf, sr)
    return _esp


def synth_espeak(text, out_raw):
    lib, buf, _, sr = _espeak()
    buf.clear()
    t = text.encode("utf-8")
    lib.espeak_Synth(t, len(t) + 1, 0, 0, 0, 0x01, None, None)
    lib.espeak_Synchronize()
    with wave.open(out_raw, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(b"".join(buf))


async def _edge(text, out_mp3):
    import edge_tts
    await edge_tts.Communicate(text, EDGE_VOICE, rate=EDGE_RATE).save(out_mp3)


def synth_edge(text, out_raw):
    asyncio.run(_edge(text, out_raw))


def finish(raw, out):
    """Resample to 44.1k mono, trim leading/trailing silence, normalise."""
    pcm = subprocess.run(["ffmpeg", "-v", "error", "-i", raw, "-ac", "1", "-ar", str(SR), "-f", "s16le", "-"],
                         check=True, capture_output=True).stdout
    x = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768.0
    thr = 0.02 * (np.abs(x).max() + 1e-9)
    idx = np.where(np.abs(x) > thr)[0]
    if len(idx):
        a = max(0, idx[0] - int(0.02 * SR))
        b = min(len(x), idx[-1] + int(0.06 * SR))
        x = x[a:b]
    # gentle presence: slight warmth via short smoothing blended with dry signal
    k = np.ones(3) / 3
    x = 0.75 * x + 0.25 * np.convolve(x, k, mode="same")
    rms = np.sqrt(np.mean(x ** 2)) + 1e-9
    x = x * (0.12 / rms)
    peak = np.abs(x).max()
    if peak > 0.95:
        x = x * (0.95 / peak)
    with wave.open(out, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((x * 32767).astype(np.int16).tobytes())
    return len(x) / SR


def main():
    job = json.load(open(sys.argv[1]))
    engine = os.environ.get("TS_TTS", job.get("engine", "espeak"))
    outdir = job["outdir"]
    os.makedirs(outdir, exist_ok=True)
    res = {}
    for it in job["items"]:
        out = os.path.join(outdir, f"{engine}_{it['key']}.wav")
        if not os.path.exists(out):
            raw = out + (".mp3" if engine == "edge" else ".raw.wav")
            (synth_edge if engine == "edge" else synth_espeak)(it["text"], raw)
            finish(raw, out)
            os.remove(raw)
        with wave.open(out) as w:
            res[it["key"]] = {"file": out, "dur": w.getnframes() / w.getframerate()}
    print(json.dumps(res))


if __name__ == "__main__":
    main()
