#!/usr/bin/env python3
"""Titik Sejarah – text-to-speech for Bahasa Melayu narration.

Usage:  python3 engine/tts.py job.json      (job = {"engine":..., "items":[{"key","text"}], "outdir":...})
Prints a JSON map {key: duration_seconds}. Output: 44.1 kHz mono 16-bit WAV per item, cached by key.

Engines (env TS_TTS or job["engine"]):
  mbrola  – DEFAULT. Offline Malaysian Malay voice: own Malaysian G2P + teacher-style prosody driving the
            MBROLA "ma1" Malay female voice (recorded at MIMOS, Kuala Lumpur). See engine/malay_tts.py.
            Needs: apt-get install mbrola mbrola-ma1
  azure   – Microsoft Azure AI Speech neural voices made for Malaysia: ms-MY-YasminNeural (female, default)
            / ms-MY-OsmanNeural (male). Most natural option. Key: env AZURE_SPEECH_KEY, or a network secret
            (header Ocp-Apim-Subscription-Key) saved for <region>.tts.speech.microsoft.com in the cloud
            environment. Region: env AZURE_SPEECH_REGION (default southeastasia). Word timings come from
            engine/align.py (Malay duration model anchored to the real pauses in the audio).
  eleven  – ElevenLabs (your own / library voice, e.g. "Asyraf"). Set TS_ELEVEN_VOICE=<voice_id>;
            model TS_ELEVEN_MODEL (default eleven_multilingual_v2). Key: env ELEVENLABS_API_KEY or a network
            secret (header xi-api-key) for api.elevenlabs.io. Exact word timings from the character-level
            timestamps; neighbouring lines are sent as context for natural flow between lines.
  human   – YOUR OWN RECORDINGS. One audio file per narration line in recordings/epXX/<line code>.<ext>
            (codes are listed in docs/Skrip_Rakaman_Suara.md, e.g. recordings/ep02/02-06-2.m4a; any of
            wav/m4a/mp3/aac/ogg/flac/mp4/mov). Cleaned (rumble filter, gentle noise reduction, de-click,
            light compression), trimmed and levelled; word timings via engine/align.py. Missing lines fall
            back to the mbrola voice and are listed so you can see what is still to record.
  espeak  – offline, bundled espeak-ng (PyPI: espeakng-loader). Robotic fallback.
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
WORDS = []  # (text_position, seconds) from the last synthesis


def _espeak():
    global _esp
    if _esp:
        return _esp
    import espeakng_loader as E
    lib = ctypes.cdll.LoadLibrary(E.get_library_path())

    class EV(ctypes.Structure):
        _fields_ = [("type", ctypes.c_int), ("uid", ctypes.c_uint), ("text_position", ctypes.c_int),
                    ("length", ctypes.c_int), ("audio_position", ctypes.c_int), ("sample", ctypes.c_int),
                    ("user_data", ctypes.c_void_p), ("id", ctypes.c_char * 8)]

    CB = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.POINTER(ctypes.c_short), ctypes.c_int, ctypes.POINTER(EV))
    buf = []
    WORDS.clear()

    def cb(wav, n, ev):
        if wav and n > 0:
            buf.append(ctypes.string_at(wav, n * 2))
        i = 0
        while ev and ev[i].type != 0:
            if ev[i].type == 1:  # espeakEVENT_WORD
                WORDS.append((ev[i].text_position, ev[i].audio_position / 1000.0))
            i += 1
        return 0

    cbf = CB(cb)
    sr = lib.espeak_Initialize(2, 0, E.get_data_path().encode(), 0)
    lib.espeak_SetSynthCallback(cbf)
    lib.espeak_SetVoiceByName(ESPEAK_VOICE.encode())
    lib.espeak_SetParameter(1, ESPEAK_RATE, 0)
    lib.espeak_SetParameter(3, ESPEAK_PITCH, 0)
    _esp = (lib, buf, cbf, sr)
    return _esp


def word_spans(text):
    spans, pos = [], 0
    for w in text.split():
        i = text.index(w, pos)
        spans.append((i, i + len(w)))
        pos = i + len(w)
    return spans


def synth_espeak(text, out_raw):
    """Returns the start time (s) of every whitespace-separated word of `text`."""
    lib, buf, _, sr = _espeak()
    buf.clear()
    WORDS.clear()
    t = text.encode("utf-8")
    lib.espeak_Synth(t, len(t) + 1, 0, 0, 0, 0x01, None, None)
    lib.espeak_Synchronize()
    with wave.open(out_raw, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(b"".join(buf))
    spans = word_spans(text)
    times = [None] * len(spans)
    for pos, t in WORDS:
        for k, (a, b) in enumerate(spans):
            if a <= pos - 1 < b and times[k] is None:
                times[k] = t
                break
    return times


AZ_VOICE = os.environ.get("TS_AZURE_VOICE", "ms-MY-YasminNeural")
AZ_REGION = os.environ.get("AZURE_SPEECH_REGION", "southeastasia")
AZ_RATE = os.environ.get("TS_AZURE_RATE", "-3%")


def _azure_ssml(text):
    import re
    from xml.sax.saxutils import escape
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import malay_tts as M
    t = text.replace("**", "")
    t = re.sub(r"\b(\d+)\.(\d+)\b", lambda m: M.num_words(m.group(1)) + " titik " + M.num_words(m.group(2)), t)
    t = re.sub(r"\bke-(\d+)\b", lambda m: "ke" + M.num_words(m.group(1)).replace(" ", " ", 1), t)
    return ('<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="ms-MY">'
            f'<voice name="{AZ_VOICE}"><prosody rate="{AZ_RATE}">{escape(t)}</prosody></voice></speak>')


def azure_request(ssml):
    import urllib.request
    key = os.environ.get("AZURE_SPEECH_KEY", "set-by-network-secret")   # the proxy replaces this header
    req = urllib.request.Request(
        f"https://{AZ_REGION}.tts.speech.microsoft.com/cognitiveservices/v1", data=ssml.encode("utf-8"), method="POST",
        headers={"Ocp-Apim-Subscription-Key": key, "Content-Type": "application/ssml+xml",
                 "X-Microsoft-OutputFormat": "riff-24khz-16bit-mono-pcm", "User-Agent": "titik-sejarah-builder"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def synth_azure(text, out_raw):
    """Azure neural TTS; returns aligned start time of each whitespace token of `text`."""
    import time
    for attempt in range(4):
        try:
            audio = azure_request(_azure_ssml(text))
            break
        except Exception as e:
            if attempt == 3:
                raise RuntimeError(f"Azure TTS failed: {e}")
            time.sleep(2 ** attempt)
    open(out_raw, "wb").write(audio)
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import align
    pcm = subprocess.run(["ffmpeg", "-v", "error", "-i", out_raw, "-ac", "1", "-ar", "16000", "-f", "s16le", "-"],
                         check=True, capture_output=True).stdout
    x = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768.0
    return align.align(text, x, 16000)


async def _edge(text, out_mp3):
    import edge_tts
    bounds = []
    with open(out_mp3, "wb") as f:
        async for ch in edge_tts.Communicate(text, EDGE_VOICE, rate=EDGE_RATE).stream():
            if ch["type"] == "audio":
                f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                bounds.append(ch["offset"] / 1e7)
    return bounds


def synth_edge(text, out_raw):
    b = asyncio.run(_edge(text, out_raw))
    n = len(text.split())
    return b if len(b) == n else [None] * n


def finish(raw, out):
    """Resample to 44.1k mono, trim leading/trailing silence, normalise."""
    pcm = subprocess.run(["ffmpeg", "-v", "error", "-i", raw, "-ac", "1", "-ar", str(SR), "-f", "s16le", "-"],
                         check=True, capture_output=True).stdout
    x = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768.0
    thr = 0.02 * (np.abs(x).max() + 1e-9)
    idx = np.where(np.abs(x) > thr)[0]
    a = 0
    if len(idx):
        a = max(0, idx[0] - int(0.02 * SR))
        b = min(len(x), idx[-1] + int(0.06 * SR))
        x = x[a:b]
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
    return len(x) / SR, a / SR


EL_VOICE = os.environ.get("TS_ELEVEN_VOICE", "NHFTLozDZneDWyQjRGAO")   # "Asyraf"
EL_MODEL = os.environ.get("TS_ELEVEN_MODEL", "eleven_multilingual_v2")  # keeps Asyraf's Malaysian accent (v3 drifts Indonesian)
EL_TAG = os.environ.get("TS_ELEVEN_TAG", "[friendly]")              # v3 audio tag ("mesra" delivery)
EL_TEMPO = float(os.environ.get("TS_ELEVEN_TEMPO", "1.10"))         # time-stretch (pitch kept)
if EL_MODEL == "eleven_v3":
    EL_SETTINGS = {"stability": float(os.environ.get("TS_ELEVEN_STABILITY", "0.5")), "similarity_boost": 0.8}
else:
    EL_SETTINGS = {"stability": float(os.environ.get("TS_ELEVEN_STABILITY", "0.35")), "similarity_boost": 0.85,
                   "style": float(os.environ.get("TS_ELEVEN_STYLE", "0.35")), "use_speaker_boost": True,
                   "speed": float(os.environ.get("TS_ELEVEN_SPEED", "1.0"))}


def tighten(path, meta, text, maxp, max_end=0.42, floor_db=-40.0):
    """Fluency fix, 0 credits: shorten hesitation pauses inside a narration line.
    A pause after a word ending in . ? ! is capped at max_end; every other internal pause at maxp.
    Writes <path>.t<maxp>.wav and returns {file, dur, words} with word times shifted to match."""
    out = f"{path[:-4]}.t{maxp:g}.wav"
    with wave.open(path) as w:
        sr, n = w.getframerate(), w.getnframes()
        x = np.frombuffer(w.readframes(n), dtype=np.int16).astype(np.float32)
    hop = int(sr * 0.01)
    nf = len(x) // hop
    rms = np.sqrt(np.mean(x[: nf * hop].reshape(nf, hop) ** 2, axis=1) + 1e-9) / 32768.0
    silent = 20 * np.log10(rms + 1e-9) < floor_db
    toks = text.replace("**", "").replace("~~", "").split()
    words = meta["words"]
    runs, i = [], 0
    while i < nf:
        if silent[i]:
            j = i
            while j < nf and silent[j]:
                j += 1
            if i > 0 and j < nf:                      # internal pauses only
                runs.append((i * hop / sr, j * hop / sr))
            i = j
        else:
            i += 1
    cuts = []                                         # (start_s, removed_s)
    for a, b in runs:
        prev = [k for k, t in enumerate(words) if t is not None and t <= a + 0.01]
        k = prev[-1] if prev else 0
        cap = max_end if (k < len(toks) and toks[k].rstrip('”"\')').endswith(('.', '?', '!'))) else maxp
        if b - a > cap + 0.02:
            keep = cap / 2
            cuts.append((a + keep, (b - a) - cap))
    if not cuts:
        return {"file": path, "dur": meta["dur"], "words": words}
    pieces, pos, fade = [], 0, int(sr * 0.008)
    for s, r in cuts:
        s0, s1 = int(s * sr), int((s + r) * sr)
        seg = x[pos:s0].copy()
        if len(seg) > fade:
            seg[-fade:] *= np.linspace(1, 0, fade)
        pieces.append(seg)
        pos = s1
    tail = x[pos:].copy()
    if len(tail) > fade:
        tail[:fade] *= np.linspace(0, 1, fade)
    pieces.append(tail)
    y = np.concatenate(pieces)
    with wave.open(out, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr)
        w.writeframes(np.clip(y, -32768, 32767).astype(np.int16).tobytes())

    def shift(t):
        if t is None:
            return None
        d = 0.0
        for s, r in cuts:
            if t >= s + r:
                d += r
            elif t > s:
                d += t - s
        return round(t - d, 3)
    return {"file": out, "dur": len(y) / sr, "words": [shift(t) for t in words]}


def eleven_text(text):
    """Spoken text for ElevenLabs + char offset of every whitespace token. Numbers/acronyms are spelled out
    in Malay so the voice never switches to English or Indonesian readings."""
    import re
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import malay_tts as M
    spoken, offs = "", []
    for tok in text.split():
        raw = tok.replace("**", "").replace("~~", "")
        core = raw.strip('“”"\'()[]').rstrip('.,!?:;…')
        lead = raw[: len(raw) - len(raw.lstrip('“”"\'(['))]
        trail = raw[len(lead) + len(core):] if core else raw[len(lead):]
        if re.fullmatch(r"ke-\d+|\d+(\.\d+)?|\d{1,3}(,\d{3})+|[A-Z]{2,5}|M|SM", core):
            words = M.normalise_token(core)
            words = [w.replace("é", "e") for w in words]
            if re.fullmatch(r"[A-Z]{2,5}", core):
                words = [core]            # acronyms: let the voice read the letters (SPM, KSSM)
            core = " ".join(words)
        if core == "&":
            core = "dan"
        offs.append(len(spoken) + (1 if spoken else 0))
        spoken += (" " if spoken else "") + lead + core + trail
    return spoken, offs


def eleven_request(text, prev_text="", next_text=""):
    import urllib.request, base64
    if not EL_VOICE:
        raise RuntimeError("Set TS_ELEVEN_VOICE to the ElevenLabs voice ID")
    body = {"text": text, "model_id": EL_MODEL, "voice_settings": EL_SETTINGS}
    if EL_MODEL != "eleven_v3":          # v3 takes its context from audio tags instead
        if prev_text:
            body["previous_text"] = prev_text
        if next_text:
            body["next_text"] = next_text
    if EL_MODEL in ("eleven_flash_v2_5", "eleven_turbo_v2_5", "eleven_v3"):
        body["language_code"] = "ms"
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{EL_VOICE}/with-timestamps?output_format=mp3_44100_128",
        data=json.dumps(body).encode(), method="POST",
        headers={"xi-api-key": os.environ.get("ELEVENLABS_API_KEY", "proxy-injected"), "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        d = json.loads(r.read())
    return base64.b64decode(d["audio_base64"]), d.get("alignment") or d.get("normalized_alignment")


def synth_eleven(text, out_raw, prev_text="", next_text=""):
    import time, urllib.error
    spoken, offs = eleven_text(text)
    tag = (EL_TAG + " ") if (EL_MODEL == "eleven_v3" and EL_TAG) else ""
    spoken, offs = tag + spoken, [o + len(tag) for o in offs]
    prev_s = eleven_text(prev_text)[0] if prev_text else ""
    next_s = eleven_text(next_text)[0] if next_text else ""
    # Credit protection: every ElevenLabs reply is stored permanently in the repo (voice/eleven/).
    # The key covers everything ElevenLabs receives, but NOT the local tempo, so speed tweaks are free.
    import hashlib
    sent = {"text": spoken, "prev": prev_s if EL_MODEL != "eleven_v3" else "", "next": next_s if EL_MODEL != "eleven_v3" else "",
            "voice": EL_VOICE, "model": EL_MODEL, "settings": EL_SETTINGS, "lang": EL_MODEL in ("eleven_flash_v2_5", "eleven_turbo_v2_5", "eleven_v3")}
    rkey = hashlib.sha1(json.dumps(sent, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:20]
    rdir = os.path.join(VOICE_STORE, "eleven")
    os.makedirs(rdir, exist_ok=True)
    rmp3, rjs = os.path.join(rdir, rkey + ".mp3"), os.path.join(rdir, rkey + ".json")
    if os.path.exists(rmp3) and os.path.exists(rjs):
        audio, al = open(rmp3, "rb").read(), json.load(open(rjs))["alignment"]
        print(f"[voice store] reused {rkey} (0 credits)", file=sys.stderr)
    for attempt in range(5 if not os.path.exists(rmp3) else 0):
        try:
            audio, al = eleven_request(spoken, prev_s, next_s)
            open(rmp3, "wb").write(audio)
            json.dump({"sent": sent, "alignment": al}, open(rjs, "w"), ensure_ascii=False)
            break
        except urllib.error.HTTPError as e:
            msg = e.read().decode("utf-8", "ignore")[:300]
            if e.code in (429, 500, 502, 503) and attempt < 4:
                time.sleep(3 * (attempt + 1))
                continue
            raise RuntimeError(f"ElevenLabs error {e.code}: {msg}")
        except (urllib.error.URLError, ConnectionError, TimeoutError, OSError) as e:
            if attempt < 4:          # dropped connection / timeout: retry with back-off
                time.sleep(3 * (attempt + 1))
                continue
            raise RuntimeError(f"ElevenLabs connection failed: {e}")
    open(out_raw, "wb").write(audio)
    starts = al["character_start_times_seconds"]
    times = [float(starts[min(o, len(starts) - 1)]) for o in offs]
    if abs(EL_TEMPO - 1.0) > 1e-3:      # faster delivery, same pitch; timings scale with it
        tmp = out_raw + ".t.wav"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", out_raw, "-af", f"atempo={EL_TEMPO}", tmp], check=True)
        os.replace(tmp, out_raw)
        times = [t / EL_TEMPO for t in times]
    return times


VOICE_STORE = os.environ.get("TS_VOICE_STORE", os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "voice"))


def store_line(eng, key, out, meta):
    """Keep a durable copy (FLAC) of every finished voice line in voice/lines/, so a fresh session re-renders for free."""
    d = os.path.join(VOICE_STORE, "lines")
    os.makedirs(d, exist_ok=True)
    f = os.path.join(d, f"{eng}_{key}.flac")
    if not os.path.exists(f):
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", out, "-c:a", "flac", "-compression_level", "8", f], check=True)
        json.dump(json.load(open(meta)), open(f[:-5] + ".json", "w"))


def restore_line(eng, key, out, meta):
    f = os.path.join(VOICE_STORE, "lines", f"{eng}_{key}.flac")
    if os.path.exists(f) and os.path.exists(f[:-5] + ".json"):
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", f, "-ar", str(SR), "-ac", "1", "-c:a", "pcm_s16le", out], check=True)
        json.dump(json.load(open(f[:-5] + ".json")), open(meta, "w"))
        return True
    return False


REC_EXT = ("wav", "m4a", "mp3", "aac", "ogg", "flac", "mp4", "mov", "webm", "opus")


def find_recording(root, line_id):
    ep = "ep" + line_id.split("-")[0]
    for folder in (os.path.join(root, ep), root):
        for ext in REC_EXT:
            for name in (line_id, line_id.replace("-", "_")):
                f = os.path.join(folder, f"{name}.{ext}")
                if os.path.exists(f):
                    return f
    return None


def prepare_human(src, out_raw, text):
    """Clean a human recording and return aligned word start times."""
    af = ("highpass=f=80,afftdn=nr=10:nf=-45,adeclick,"
          "equalizer=f=250:t=q:w=1:g=-1.5,equalizer=f=3500:t=q:w=1.2:g=1.5,"
          "acompressor=threshold=-20dB:ratio=2.5:attack=8:release=120:makeup=2")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", src, "-vn", "-af", af, "-ac", "1", "-ar", str(SR), out_raw], check=True)
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import align
    pcm = subprocess.run(["ffmpeg", "-v", "error", "-i", out_raw, "-ac", "1", "-ar", "16000", "-f", "s16le", "-"],
                         check=True, capture_output=True).stdout
    x = np.frombuffer(pcm, dtype=np.int16).astype(np.float32) / 32768.0
    return align.align(text, x, 16000)


def main():
    if sys.argv[1] == "--check-azure":
        try:
            n = len(azure_request(_azure_ssml("Selamat datang ke Titik Sejarah.")))
            print(f"Azure OK: {AZ_VOICE} @ {AZ_REGION}, {n} bytes of audio")
        except Exception as e:
            print(f"Azure NOT ready ({AZ_REGION}): {e}")
            sys.exit(1)
        return
    job = json.load(open(sys.argv[1]))
    engine = os.environ.get("TS_TTS", job.get("engine", "mbrola"))
    outdir = job["outdir"]
    os.makedirs(outdir, exist_ok=True)
    res = {}
    missing = []
    for it in job["items"]:
        eng = engine
        if engine == "human":
            rec = find_recording(job.get("recordings", "recordings"), it["id"])
            if not rec:
                missing.append(it["id"])
                eng = "mbrola"
        out = os.path.join(outdir, f"{eng}_{it['key']}.wav")
        meta = out + ".json"
        if eng in ("eleven", "azure") and not (os.path.exists(out) and os.path.exists(meta)):
            restore_line(eng, it["key"], out, meta)          # durable copy in the repo -> 0 credits
        if eng == "human" or not (os.path.exists(out) and os.path.exists(meta)):
            raw = out + (".mp3" if engine in ("edge", "eleven") else ".raw.wav")
            if eng == "eleven":
                times = synth_eleven(it["text"], raw, it.get("prev", ""), it.get("next", ""))
            elif eng == "human":
                times = prepare_human(rec, raw, it["text"])
            elif eng == "azure":
                times = synth_azure(it["text"], raw)
            elif eng == "mbrola":
                sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
                import malay_tts
                times, _ = malay_tts.synth(it["text"], raw)       # keeps **keyword** markup for emphasis
            else:
                plain = it["text"].replace("**", "")
                times = (synth_edge if engine == "edge" else synth_espeak)(plain, raw)
            dur, off = finish(raw, out)
            os.remove(raw)
            words = [None if t is None else round(max(0.0, min(dur, t - off)), 3) for t in times]
            json.dump({"dur": dur, "words": words}, open(meta, "w"))
            if eng in ("eleven", "azure"):
                store_line(eng, it["key"], out, meta)
        m = json.load(open(meta))
        res[it["key"]] = {"file": out, "dur": m["dur"], "words": m["words"]}
        maxp = float(os.environ.get("TS_ELEVEN_MAXPAUSE", "0") or 0)
        if maxp > 0 and eng != "espeak":
            res[it["key"]] = tighten(out, m, it["text"], maxp)
    if missing:
        print(f"[human voice] {len(missing)} line(s) not recorded yet, using the synthetic voice for: "
              + ", ".join(missing), file=sys.stderr)
    print(json.dumps(res))


if __name__ == "__main__":
    main()
