# TITIK SEJARAH – Siri TikTok Sejarah Tingkatan 4 · Bab 1: Warisan Negara Bangsa

> *"Kenali sejarah, fahami masa kini."*

Six standalone, connected TikTok explainer videos (Bahasa Melayu, 1080×1920, 9:16) covering all four subtopics of KSSM Form 4 Sejarah Chapter 1. They're drawn in the official Titik Sejarah **hand-drawn doodle-notebook infographic** style and end with the official profile picture.

## Deliverables

| # | File | Contents | Duration |
|---|---|---|---|
| 1 | `output/01_Bab1_Introduction.mp4` | Chapter introduction | 1:13 |
| 2 | `output/02_Bab1_Subtopik_1.1.mp4` | 1.1 Background: Funan, Champa, Srivijaya, Angkor, Majapahit, Kedah Tua, Gangga Nagara | 5:00 |
| 3 | `output/03_Bab1_Subtopik_1.2.mp4` | 1.2 Six characteristics of the Melaka nation-state | 3:35 |
| 4 | `output/04_Bab1_Subtopik_1.3.mp4` | 1.3 Sultan, Pembesar Empat Lipatan, Hukum Kanun & Undang-Undang Laut Melaka | 5:03 |
| 5 | `output/05_Bab1_Subtopik_1.4.mp4` | 1.4 Roles of rulers & people, waadat, reciprocal relationship | 3:01 |
| 6 | `output/06_Bab1_Complete_Revision.mp4` | Full revision + mind map + 3 quiz questions | 2:44 |

Other files:
- `output/subtitles/*.srt` – sentence-level Bahasa Melayu subtitles, synced to the narration.
- `docs/storyboard/EP0x_storyboard.md` – scene-by-scene storyboard with all 10 required fields (narration, real timings, visuals, doodle instructions, on-screen text, animation, transition, SFX, music). Generated from the same data that renders the video, so it always matches.
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
- **Voiceover (current videos): Titik Sejarah Malaysian voice engine** (`engine/malay_tts.py`), fully offline:
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
- **Most human-like option (internet needed): Microsoft neural voices** `ms-MY-YasminNeural` (female) or `ms-MY-OsmanNeural` (male). One command re-renders all six episodes:
  ```bash
  TS_TTS=edge node engine/build.mjs all                    # Yasmin (default)
  TS_TTS=edge TS_EDGE_VOICE=ms-MY-OsmanNeural node engine/build.mjs all
  ```
  Timings, animations, captions, subtitles and storyboards re-sync to the new voice automatically. Note that `edge-tts` uses Microsoft Edge's online read-aloud service; for commercial use, check its terms or use Azure AI Speech (same `ms-MY` voices) under a paid plan.
- **Music & SFX:** original, generated in code (`engine/audio.py`): soft marimba/pad educational loop, automatically ducked under the voice, plus pencil, paper, pop, whoosh, ding and stamp effects. Royalty-free by construction.
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
