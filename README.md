# TITIK SEJARAH – Siri TikTok Sejarah Tingkatan 4

> *"Kenali sejarah, fahami masa kini."*

| Bab | Episodes | Folder |
|---|---|---|
| Bab 1 · Warisan Negara Bangsa | 6 | `output/` (details below) |
| **Bab 2 · Kebangkitan Nasionalisme** | 10 + 1 extra (Latihan KBAT) | `output/bab2/` (see [Bab 2](#bab-2--kebangkitan-nasionalisme)) |

## Bab 2 · Kebangkitan Nasionalisme

Ten connected explainer videos (Bahasa Melayu, 1080×1920, 9:16, MP4), one per **textbook** subtopic, plus an introduction and a revision/quiz episode. They use the same doodle style, palette, typography, mascot, end card and narrator (Asyraf, ElevenLabs) as Bab 1.

| # | File | Contents |
|---|---|---|
| 1 | `output/bab2/01_Bab2_Introduction.mp4` | Chapter hook, meaning in one line, journey map (Barat ➜ Asia ➜ Asia Tenggara ➜ negara kita), 8-subtopic map |
| 2 | `output/bab2/02_Bab2_Subtopik_2.1.mp4` | 2.1 Maksud Nasionalisme: definition, analogy, views of 7 figures/scholars |
| 3 | `output/bab2/03_Bab2_Subtopik_2.2.mp4` | 2.2 Barat: John Locke, Revolusi Keagungan 1688, Revolusi Amerika 1776, Revolusi Perancis 1789 |
| 4 | `output/bab2/04_Bab2_Subtopik_2.3.mp4` | 2.3 Asia: India, China, Uthmaniyah & Mesir (Islah, Pan-Islamisme), Jepun (Meiji, Bushido) |
| 5 | `output/bab2/05_Bab2_Subtopik_2.4.mp4` | 2.4 Asia Tenggara: Filipina, Burma, Vietnam, Indonesia, Thailand |
| 6 | `output/bab2/06_Bab2_Subtopik_2.5.mp4` | 2.5 Kesedaran Nasionalisme di Negara Kita: Melaka ➜ local fighters ➜ 20th-century religious, literary & intellectual groups |
| 7 | `output/bab2/07_Bab2_Subtopik_2.6.mp4` | 2.6 Six factors + memory aid A-P-M-P-I-L |
| 8 | `output/bab2/08_Bab2_Subtopik_2.7.mp4` | 2.7 Three intellectual groups, writing, associations (KMS 1926, PASPAM 1934, KMM 1938, SCBA, MIA) |
| 9 | `output/bab2/09_Bab2_Subtopik_2.8.mp4` | 2.8 Political, economic and social effects + link to independence |
| 10 | `output/bab2/10_Bab2_Complete_Revision.mp4` | Revision of 2.1–2.8, key-word wall, 3-question quiz, bridge to Bab 3 |
| Extra | `output/bab2/11_Bab2_Latihan_KBAT.mp4` | Latihan KBAT: question stems, the I-H-C answering formula, mark counting, 4 worked Kertas 2-style practice questions (weak vs strong answers, full model answers), 5 common mistakes, bonus question |

Every subtopic episode follows the same arc: **hook question ➜ title card ➜ story scenes ➜ recap + "TIP SPM" ➜ "Nilai & Iktibar" (DSKP value) ➜ summary + next-episode card ➜ brand end card**.

**Why 8 subtopics, not 5:** the KSSM textbook/DSKP (Tajuk 9, "Nasionalisme di Malaysia *Sebelum* Perang Dunia Kedua") splits Bab 2 into 2.1–2.8, and post-war nationalism belongs to Bab 3–5. The series follows the textbook numbering so students can match pages. See `docs/bab2/Fact_Check.md`.

Other Bab 2 files:
- `output/bab2/subtitles/*.srt` · `output/bab2/covers/*_cover.jpg`
- `docs/bab2/storyboard/EPxx_storyboard.md`: scene-by-scene storyboard generated from the render
- `docs/bab2/Skrip_Narasi.md` (full narration) · `docs/bab2/Skrip_Rakaman_Suara.md` (voice-actor script, line codes `B2-xx-yy-z`)
- `docs/bab2/Fact_Check.md`: sources, fact table with ⚠️ flags, pronunciation QC · `docs/bab2/TikTok_Publishing_Kit.md` · `docs/bab2/QC_Report.md`

Build commands (Bab 2):
```bash
TS_TTS=eleven node engine/build.mjs --bab 2 all          # all ten MP4s + SRT + storyboards
TS_TTS=eleven node engine/build.mjs --bab 2 05           # one episode
TS_TTS=eleven node engine/build.mjs --bab 2 05 --stills scenes   # quick design check (build/stills/b2_*)
node engine/covers.mjs --bab 2                           # TikTok covers
node engine/script_doc.mjs --bab 2 && node engine/recording_script.mjs --bab 2
python3 engine/qc.py --bab 2                             # technical QC
```
Episode sources live in `episodes/bab2/ep01.js … ep10.js`, with shared Bab 2 scene builders in `episodes/bab2/lib2.js`.

---

# Bab 1 · Warisan Negara Bangsa

Six standalone, connected TikTok explainer videos (Bahasa Melayu, 1080×1920, 9:16) covering all four subtopics of KSSM Form 4 Sejarah Chapter 1. They're drawn in the official Titik Sejarah **hand-drawn doodle-notebook infographic** style and end with the official profile picture.

## Deliverables

| # | File | Contents | Duration |
|---|---|---|---|
| 1 | `output/01_Bab1_Introduction.mp4` | Chapter introduction | 1:11 |
| 2 | `output/02_Bab1_Subtopik_1.1.mp4` | 1.1 Background: Funan, Champa, Srivijaya, Angkor, Majapahit, Kedah Tua, Gangga Nagara | 5:11 |
| 3 | `output/03_Bab1_Subtopik_1.2.mp4` | 1.2 Six characteristics of the Melaka nation-state | 3:51 |
| 4 | `output/04_Bab1_Subtopik_1.3.mp4` | 1.3 Sultan, Pembesar Empat Lipatan, Hukum Kanun & Undang-Undang Laut Melaka | 5:15 |
| 5 | `output/05_Bab1_Subtopik_1.4.mp4` | 1.4 Roles of rulers & people, waadat, reciprocal relationship | 3:00 |
| 6 | `output/06_Bab1_Complete_Revision.mp4` | Full revision + mind map + 3 quiz questions | 2:51 |

Other files:
- `output/subtitles/*.srt` – sentence-level Bahasa Melayu subtitles, synced to the narration.
- `docs/storyboard/EP0x_storyboard.md` – scene-by-scene storyboard with all 10 required fields (narration, real timings, visuals, doodle instructions, on-screen text, animation, transition, SFX, music). Generated from the same data that renders the video, so it always matches.
- `docs/Skrip_Rakaman_Suara.md` – **voice-actor recording script**: line codes (= file names), current timing per line, emphasis, pause cues, pronunciation guide and recording tips.
- `docs/Skrip_Narasi.md` – the full narration script for all six episodes (for a human voiceover or another TTS).
- `docs/TikTok_Publishing_Kit.md` – titles, captions, hashtags, cover text, publishing order.
- `docs/Fact_Check.md` – fact table, textbook facts vs storytelling, pronunciation notes. **Check against the textbook before publishing.**
- `docs/QC_Report.md` – automatic technical QC (resolution, fps, loudness, true peak, full decode).

## Visual identity

| Element | Implementation |
|---|---|
| Palette | Navy `#172C63` · Golden Yellow `#F5C928` · Heritage Red `#C93436` · Vintage Cream `#F3EBDD` |
| Style | Paper notebook background (lines/grid/dots), sketchy *rough.js* outlines drawn line by line, handwritten labels, curved arrows, maps drawn from real coastline data (Natural Earth via `world-atlas`) |
| Typography | Permanent Marker (headings) · Patrick Hand (body) · Caveat (annotations) · Baloo 2 ExtraBold (captions) · Special Elite (source line / tags) |
| Captions | Word-synced 1–2 word chunks (timings come from the TTS engine itself), cream with a navy outline; keywords in gold |
| Reference-video adaptations | Washi-tape cards, torn-paper "DEFINISI" cards, typewriter source line, "ILUSTRASI" tags on dramatised scenes, red rubber-stamp keywords, character name tags |
| Mascot / DP | The official square profile picture (`assets/brand/titik-sejarah-dp-square.jpg`) is shown **unaltered** (no crop, no recolouring, no redraw). It's a sticker in some scenes and the closing card of every episode, with a fade + gentle zoom-in, "TITIK SEJARAH", the tagline and "Follow untuk lebih banyak ilmu sejarah." held for 4.6–5 s. |
| TikTok safe zone | Main content between y≈280–1360 px; captions at y≈1370–1500; right edge kept clear for TikTok buttons |

## Audio
- **Voiceover (current videos): "Asyraf" (ElevenLabs).** Model **eleven_multilingual_v2**, which keeps Asyraf's Malaysian accent: the Malaysian final schwa (*Melakə, kitə*) was measured on v2, while v3 drifted to the Indonesian full [a]. Settings: stability 0.35, style 0.35, similarity 0.85, previous and next lines sent as context, time-stretched 10% faster with pitch kept, numbers spelled out in Malay, exact word timings from the character timestamps. Build: `TS_TTS=eleven node engine/build.mjs all`. Key: network secret for `api.elevenlabs.io` (header `xi-api-key`) or `ELEVENLABS_API_KEY`, with the *Text to Speech* permission. Tuning: `TS_ELEVEN_TEMPO`, `TS_ELEVEN_STYLE`, `TS_ELEVEN_STABILITY`, `TS_ELEVEN_VOICE`, `TS_ELEVEN_MODEL`. The whole series uses about 15,700 characters.
- **Offline fallback: Titik Sejarah Malaysian voice engine** (`engine/malay_tts.py`), fully offline:
  - **Voice:** MBROLA **MA1**, a Malay female voice built from recordings of a Malaysian speaker (MIMOS Berhad, Kuala Lumpur). It is far more human than the earlier formant voice.
  - **Malaysian pronunciation (own rules + lexicon):**
    - pepet /ə/ vs taling /e/ (e.g. *Temenggung*, *Kedah* with /ə/; *tentera*, *Perak*, *boleh* with /e/)
    - final *-a* as schwa (*apə*, *kitə*)
    - i/u lowered in closed final syllables (*penting* → penténg, *masuk* → maso')
    - final *-k* as a glottal stop and soft final *-r*
    - glides between vowels (*setia* → sətija, *kedua* → kəduwə)
    - glottal onsets (*keadilan* → kə'adilan)
    - Malay number reading (*683* → enam ratus lapan puluh tiga, *ke-15* → kelima belas, *1.1* → satu titik satu)
    - acronyms with Malay letter names (*SPM* → és pi ém)
    - name respellings (Srivijaya → Sriwijaya, Westphalia → Wéstfalia)
  - **Teacher-style prosody:**
    - a gentle fall in pitch through each phrase, with emphasis on content words
    - stronger emphasis and slower pace on every `**keyword**` in the script
    - a rise before commas (continuation)
    - a fall on statements, a high start on *apa/kenapa/siapa* questions, a rise on yes/no questions
    - lengthening at the end of phrases
    - pauses: 0.24 s at commas, 0.4 s between sentences, short breaths before *dan / yang / iaitu…* in long sentences
  - **Pace:** about 5 syllables per second (comfortable for learners), with light EQ, gentle compression and a small-room ambience.
  - **Tuning:** `TS_MS_RATE=1.08` (slower) or `0.95` (faster); `TS_MS_PITCH=0.95` (lower) or `1.05` (higher).
  - **Requirements:** `sudo apt-get install mbrola mbrola-ma1`.
  - **Comparison:** `output/voice_samples/` has an old-vs-new comparison clip.
- **Your own voice (recommended):** record each line from `docs/Skrip_Rakaman_Suara.md` (one file per line, named by its code, e.g. `recordings/ep02/02-06-2.m4a`; any of m4a/mp3/wav), then `TS_TTS=human node engine/build.mjs all`. The recordings are cleaned (rumble filter, gentle noise reduction, de-click, light compression), trimmed and levelled; word timings for captions come from `engine/align.py`; animations re-time to your pace. Lines not recorded yet use the synthetic voice and are listed.
- **Azure AI Speech (official, recommended for publishing):** genuine Malaysian neural voices `ms-MY-YasminNeural` / `ms-MY-OsmanNeural`, free tier 0.5M characters/month (the whole series is ~20k). Create an Azure *Speech* resource (region **Southeast Asia**, tier **Free F0**), then either `export AZURE_SPEECH_KEY=...` locally, or in a cloud session save it as a network secret (host `southeastasia.tts.speech.microsoft.com`, header `Ocp-Apim-Subscription-Key`). Check with `python3 engine/tts.py --check-azure`, then build with `TS_TTS=azure node engine/build.mjs all` (male voice: `TS_AZURE_VOICE=ms-MY-OsmanNeural`; other region: `AZURE_SPEECH_REGION=...`). Caption word timings come from `engine/align.py`.
- **Most human-like option (internet needed): Microsoft neural voices** `ms-MY-YasminNeural` (female) or `ms-MY-OsmanNeural` (male). One command re-renders all six episodes:
  ```bash
  TS_TTS=edge node engine/build.mjs all                    # Yasmin (default)
  TS_TTS=edge TS_EDGE_VOICE=ms-MY-OsmanNeural node engine/build.mjs all
  ```
  Timings, animations, captions, subtitles and storyboards re-sync to the new voice automatically. Note that `edge-tts` uses Microsoft Edge's online read-aloud service; for commercial use, check its terms or use Azure AI Speech (same `ms-MY` voices) under a paid plan.
- **Music & SFX:** original, generated in code (`engine/audio.py`): soft marimba/pad educational loop sitting about 23 dB under the voice while it speaks (65% ducking plus a 1–4 kHz speech-band dip), plus pencil, paper, pop, whoosh, ding and stamp effects. Royalty-free by construction.
- **Mastering:** −14 LUFS integrated, ≤ −1 dBTP (TikTok/streaming standard).

## Rebuilding / editing

Requirements: Node 18+, Python 3.10+, ffmpeg, Chromium + Playwright (`npm i playwright` then `npx playwright install chromium` if not present).

```bash
npm install                                   # roughjs, d3-geo, topojson, world-atlas
sudo apt-get install mbrola mbrola-ma1        # Malaysian voice (default engine)
pip install numpy espeakng-loader edge-tts    # audio + fallback/neural engines
node engine/build.mjs all                     # build all six MP4s (+ SRT + storyboards)
node engine/build.mjs 04                      # build one episode
node engine/build.mjs 03 --stills scenes      # quick design check: one PNG per scene in build/stills/
python3 engine/qc.py                          # technical QC report
```

To change a fact or a sentence, edit the line in `episodes/epXX.js` and rebuild. Narration, captions, animation timing (cued to sentences), SRT and storyboard all update together.

## Project structure

```
episodes/   ep01.js … ep06.js – script, storyboard fields and visuals per scene; lib.js – shared layouts
engine/     build.mjs (pipeline) · runtime.js (deterministic animation) · doodles.js (illustrations)
            player.html (stage & styles) · tts.py · audio.py · qc.py · fonts/
assets/     brand/ – official profile picture & mascot reference
output/     final MP4s + subtitles/
docs/       storyboards, publishing kit, fact check, QC report
```

## Licences & credits
- Fonts: Google Fonts (SIL Open Font License). Map data: Natural Earth (public domain) via `world-atlas`. Illustration engine: rough.js (MIT).
- The original full-length mascot artwork carries the credit "Graphic by: Tinloy Chuo". Make sure Titik Sejarah has permission to use it commercially.
