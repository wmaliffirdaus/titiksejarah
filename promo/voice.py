#!/usr/bin/env python3
"""Promo voiceover: ElevenLabs "Asyraf" (multilingual v2) via engine/tts.py.

Every ElevenLabs reply is stored in voice/eleven/ (same credit protection as the episodes), so re-runs cost 0 credits
unless a line's text or the voice settings change.
Output: build/promo/voice/<id>.wav (44.1 kHz mono) + build/promo/voice.json {id: {dur, words:[start seconds]}}.
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
job = json.load(open(os.path.join(ROOT, "promo", "script.json")))
v = job["voice"]
os.environ.update({"TS_ELEVEN_STABILITY": str(v["stability"]), "TS_ELEVEN_STYLE": str(v["style"]),
                   "TS_ELEVEN_SPEED": str(v["speed"]), "TS_ELEVEN_TEMPO": str(v["tempo"])})
sys.path.insert(0, os.path.join(ROOT, "engine"))
import tts  # noqa: E402

out = os.path.join(ROOT, "build", "promo", "voice")
os.makedirs(out, exist_ok=True)
lines = job["lines"]
say = [l.get("say", l["text"]) for l in lines]
res = {}
for i, l in enumerate(lines):
    raw = os.path.join(out, l["id"] + ".mp3")
    wav = os.path.join(out, l["id"] + ".wav")
    times = tts.synth_eleven(say[i], raw, say[i - 1] if i else "", say[i + 1] if i + 1 < len(lines) else "")
    dur, trim = tts.finish(raw, wav)
    res[l["id"]] = {"dur": round(dur, 3), "words": [round(max(0.0, t - trim), 3) for t in times]}
    print(l["id"], f"{dur:.2f}s", file=sys.stderr)
json.dump(res, open(os.path.join(ROOT, "build", "promo", "voice.json"), "w"), indent=1)
print("total speech", round(sum(r["dur"] for r in res.values()), 2), "s", file=sys.stderr)
