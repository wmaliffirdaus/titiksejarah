# ElevenLabs — Rujukan Projek

> **Status:** values below are taken from the project's working code (`engine/tts.py`, `engine/build.mjs`), from `README.md` and `docs/STYLE_GUIDE.md`, and from measured results on EP1–EP3. They describe how *this project* uses ElevenLabs successfully. General API capabilities beyond this (new models, new parameters) were not checked against elevenlabs.io in the build session (the host was blocked there). Check the official docs before adopting anything new.

## Suara dan model

| Perkara | Nilai | Sumber |
|---|---|---|
| Suara | "Asyraf", voice ID `NHFTLozDZneDWyQjRGAO` | `engine/tts.py` (`TS_ELEVEN_VOICE`) |
| Model | `eleven_multilingual_v2` | `engine/tts.py` (`TS_ELEVEN_MODEL`) |
| Sebab model | v2 keeps the Malaysian final schwa (*Melakə, kitə*); `eleven_v3` drifted to the Indonesian full [a] (measured) | README, CLAUDE.md |
| Endpoint | `POST https://api.elevenlabs.io/v1/text-to-speech/{voice}/with-timestamps?output_format=mp3_44100_128` | `engine/tts.py` |
| Konteks antara ayat | `previous_text` / `next_text` (v2 only; v3 uses audio tags instead) | `engine/tts.py` |
| `language_code: "ms"` | Sent only for `eleven_flash_v2_5`, `eleven_turbo_v2_5`, `eleven_v3` | `engine/tts.py` |
| Masa perkataan | From the response `alignment` (character timestamps) and used for word-synced captions | `engine/tts.py` |

## Tetapan

| Tetapan | Lalai enjin (v2) | EP3 (short-form, energetic) | Episod dokumentari (EP4+) |
|---|---|---|---|
| `stability` | 0.35 | 0.28 | Slightly higher than EP3 (start ~0.40–0.45) |
| `similarity_boost` | 0.85 | 0.85 | 0.85 |
| `style` | 0.35 | 0.6 | Lower than EP3 (start ~0.25–0.35) |
| `use_speaker_boost` | true | true | true |
| `speed` (API) | 1.0 | 1.08 | 1.0–1.05 |
| `tempo` (engine time-stretch, pitch kept) | 1.10 (`TS_ELEVEN_TEMPO`) | 1.11 | ~1.0–1.05 for moderate documentary pacing |

The documentary column applies `docs/STYLE_GUIDE.md` §5 as starting points. Tune by ear on a still-free check first, and record the final values.

Per-episode values go in the episode's `voice` field (e.g. `voice: { style: 0.3, stability: 0.42, speed: 1.02, tempo: 1.03 }`). Environment overrides: `TS_ELEVEN_STYLE`, `TS_ELEVEN_STABILITY`, `TS_ELEVEN_SPEED`, `TS_ELEVEN_TEMPO`, `TS_ELEVEN_VOICE`, `TS_ELEVEN_MODEL`.

## Akses dan kos

- API key: a network secret for host `api.elevenlabs.io` (header `xi-api-key`) in cloud sessions, or `ELEVENLABS_API_KEY` locally. It needs the *Text to Speech* permission. Never write the key into files.
- Usage reference: the whole Bab 1 series (6 videos) used about 15,700 characters. A 45–55 s episode is roughly 700–900 characters.
- Always show the character count and get the user's approval before a generating build. TTS results are cached in `build/tts-cache/`, so unchanged lines are not regenerated.

## Bacaan nombor dan akronim (automatik)

`eleven_text()` uses `malay_tts.normalise_token` to spell numbers in Malay (*683* → *enam ratus lapan puluh tiga*, *ke-15* → *kelima belas*, decimals such as *1.1* → *satu titik satu*). Acronyms of 2–5 capitals are left for the voice to read letter by letter (*SPM*, *KSSM*). Keep numbers as digits in `lines`.

## Had yang diketahui

- No separate spoken-text override per line: captions and speech share the same `lines`. A per-line `say` field would be an engine improvement (see `voiceover-production`, step 5).
