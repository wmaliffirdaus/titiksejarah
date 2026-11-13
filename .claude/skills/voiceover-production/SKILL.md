---
name: voiceover-production
description: Prepares and produces Bahasa Melayu narration for TitikSejarah videos with the project's ElevenLabs voice "Asyraf" (via engine/tts.py), a human recording, or the offline fallback. Builds the pronunciation guide, sets per-episode voice settings, gets approval before spending credits, and checks the rendered audio for pronunciation, accent drift, pacing and tone. Use when asked for "voiceover", "VO", "suara latar", "ElevenLabs", "Asyraf", "rakam suara", "sebutan nama", or when narration sounds wrong.
argument-hint: "[slug] [sedia|jana|semak-audio]"
---

# Voiceover and ElevenLabs Production

A mispronounced name (*Temenggong Jugah*, *U Thant*, *Zhou Enlai*) damages credibility as much as a wrong date, and an Indonesian-sounding accent loses Malaysian viewers. This skill takes an approved script to checked narration using the project engine.

Project-verified settings and API details: `elevenlabs-rujukan.md` (this folder). Voice style for documentary episodes: `docs/STYLE_GUIDE.md` §5.

## Responsibilities

- Prepare the narration so the engine reads it correctly (numbers, acronyms, names).
- Build and check a pronunciation guide for every proper noun.
- Set the episode's `voice` field (style, stability, speed, tempo) for the episode's mood.
- Get the user's approval before ElevenLabs generation (it costs credits).
- QA the rendered audio and fix the failing lines only.

## Workflow

1. **Precondition:** the script status is `LULUS` (fact-check passed; QA passed for the script). Never voice a draft.
2. **Narration = the episode's `lines`.** The same text becomes captions, SRT and storyboard, so keep it as the viewer should read it. The engine (`engine/tts.py` → `eleven_text`) automatically spells numbers in Malay (e.g. *1963* → *seribu sembilan ratus enam puluh tiga*, *ke-15* → *kelima belas*) and lets the voice read acronyms letter by letter (*SPM*, *KSSM*). Do not pre-spell numbers in `lines`.
3. **Mark emphasis** with `**keyword**` on names, dates and turning points (gold highlight on screen as well). Keep it to 1–2 per sentence.
4. **Pronunciation guide** `output/videos/<slug>/voiceover/sebutan.md`: every person, place, organisation and foreign term, with a Malay phonetic respelling and a status. Royal titles, Arabic-derived, Chinese and Indian names must be checked, never guessed.
5. **Fixing a mispronounced name:** the engine has no separate "spoken text" for ElevenLabs (captions and speech use the same `lines`). Options in order: (a) rephrase so the name is preceded by its title or context, which often fixes stress; (b) with the user's agreement, use the textbook's alternative spelling if one exists; (c) record that line by hand (`TS_TTS=human` mode, see below); (d) request an engine feature, a per-line `say` override. Never change a historical name's spelling on screen to force a pronunciation.
6. **Set voice settings** in the episode's `voice` field. Documentary episodes (from EP4): lower style than EP3, slightly higher stability, speed about 1.0–1.05. Start from the values in the reference file and record the final values in `tetapan.md`.
7. **Approval gate:** report the character count of the episode's lines and the settings, and wait for the user's approval. Use `node engine/build.mjs <id> --stills scenes` (no voice cost) for visual checks in the meantime.
8. **Render:** `TS_TTS=eleven node engine/build.mjs <id>`. The engine sends each line with the previous and next lines as context, time-stretches by `TS_ELEVEN_TEMPO`, and takes exact word timings from the character timestamps for captions. Results are cached in `build/tts-cache/`.
9. **Audio QA** (checklist below). To redo a line, change it or its settings and rebuild (only changed lines are regenerated).
10. **Record** `tetapan.md`: voice ID, model, `voice` field values, environment overrides, character count, final duration, date.

## Alternatives

| Mode | Command | When |
|---|---|---|
| ElevenLabs "Asyraf" (default for publishing) | `TS_TTS=eleven node engine/build.mjs <id>` | Normal production |
| Human recording | Record lines from `docs/Skrip_Rakaman_Suara.md` (one file per line code, e.g. `recordings/ep02/02-06-2.m4a`), then `TS_TTS=human node engine/build.mjs <id>` | Problem names, or the user's own voice |
| Azure / Edge Malaysian neural voices | `TS_TTS=azure …` / `TS_TTS=edge …` | Fallback (see README; check terms for commercial use) |
| Offline MBROLA MA1 | `node engine/build.mjs <id>` (default engine) | Drafts without internet or credits |

## Output format

`output/videos/<slug>/voiceover/`: `sebutan.md` (`Perkataan | Sebutan | Nota | Status`), `tetapan.md` (settings and run record) and `semakan-audio.md` (QA per line: OK / masalah / tindakan). Audio itself is produced by the engine build.

## Quality standards (audio QA checklist)

- [ ] Every name and place in `sebutan.md` sounds correct.
- [ ] Malaysian accent kept: final *-a* as schwa (*Melakə*), no Indonesian full [a] or Indonesian vocabulary sound.
- [ ] Numbers and years spoken in Malay, as intended.
- [ ] Pacing moderate and deliberate (STYLE_GUIDE); pauses before reveals; no rushed final line.
- [ ] No clipped words, repeated syllables, odd pitch jumps between lines.
- [ ] Tone matches the content (serious and warm; never cheerful on sensitive events).
- [ ] Episode duration 35–60 s after the build; `engine/qc.py` loudness and true peak pass.

## Example of correct usage

Line: "Pada **16 September 1963**, Malaysia diisytiharkan." [F020]. Keep it exactly like that in `lines`; the engine speaks "enam belas September seribu sembilan ratus enam puluh tiga". In `sebutan.md`: *Datu Mustapha Datu Harun* → "da-tu mus-ta-fa da-tu ha-run", status `PERLU SEMAKAN` until the user confirms by ear.

## Common mistakes to avoid

- Switching to `eleven_v3`: it was measured to drift to an Indonesian accent for Asyraf. Stay on `eleven_multilingual_v2` unless the user asks for a new test.
- Pre-spelling numbers in `lines` (it breaks captions and the engine already spells them).
- Respelling a historical name on screen to fix pronunciation.
- Rendering before the approval gate, or before the fact-check gate.
- Cloning anyone's voice (including historical figures) without consent.
