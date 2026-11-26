# TitikSejarah – project memory

Malaysian history TikTok channel (Bahasa Melayu), KSSM Sejarah Tingkatan 4. Tagline: "Kenali sejarah, fahami masa kini."

## BRAND RULE (user instruction, highest priority)
- Keep the original Titik Sejarah brand identity, colour palette, visual theme and design concept.
- Palette ONLY: navy `#172C63`, golden yellow `#F5C928`, heritage red `#C93436`, vintage cream `#F3EBDD` (plus white/black text shadows).
- Do NOT introduce new colours, alternative styles or unrelated design elements. Only change the design when the user specifically asks.
- Note: the experimental documentary theme added for the EP4 draft (`theme: 'doc'` in engine/player.html, runtime.js) uses off-palette colours
  (#0d0e12, #1b2a55, #14203d, #cdbb8c, #E0574F, Playfair/Source Sans/Cormorant fonts). It must NOT be used as-is. Ask the user before using or
  adapting it; any adaptation must stay within the brand palette and established look.

## Current creative direction (user instruction, 2026-11-16) — DOODLE STYLE ONLY
- **Always follow the doodle-notebook template used for Chapters 1, 2 and 3** (Chapter 1 series `episodes/ep01.js`–`ep06.js`, default
  `notebook` theme in engine/player.html — paper background, Marker/Hand/Caveat fonts, rough.js doodles, cards, stamps, brand captions).
- **Do NOT use the documentary theme** (`theme: 'doc'`, archival-photo/Ken Burns look). The user rejected it for Chapter 4 EP1.
  `docs/STYLE_GUIDE.md` sections on "historical documentary" are superseded by this rule; keep only its retention/audio rules.
- **Chapter structure = Chapter 1 series (user instruction 2026-11-16):** every chapter gets
  **EP01 Pengenalan Bab** (like `episodes/ep01.js`) → **one episode per subtopic in textbook order** (like `ep02.js`–`ep05.js`) →
  **final Ulang Kaji Bab / Complete Revision** (like `ep06.js`). File names: `01_Bab4_Pengenalan`, `02_Bab4_Subtopik_4.1`, … `NN_Bab4_Ulang_Kaji`.
- **Pace = Chapter 1 series, NOT the fast short-form clips.** The user said the EP3-style pace (`ep03s.js`/`ep02a.js`: 114 BPM, punch cuts,
  voice speed 1.08/style 0.6) is **too fast**. Use the ep01–ep06 settings: no fast `voice` override (engine defaults: style 0.35,
  stability 0.35, speed 1.0), music ~98–106 BPM (`{ key, bpm: 100, variant }`), default lead 0.7 / gap 0.36 / tail 0.4,
  `transition: 'wipe'` for the title and `'paper'` between pages, brand intro/outro stings, full `S.endCard()`.
- **Mini quiz in EVERY subtopic episode (user instruction 2026-11-26, from Chapter 5 on):** before the "kini/seterusnya" scene, add a
  "KUIZ MINI" with 2 questions in the Ulang Kaji quiz format (tear card question, 3 options A/B/C, 3-2-1 countdown during a 3.4 s pause,
  tick + "JAWAPAN:" stamp) — helper `quiz()` in `episodes/b4lib.js`. Questions must come straight from that subtopic's textbook facts.
- Visual style: doodle notebook exactly as Chapter 1 (paper/lined/grid/dots backgrounds, Marker titles, cards, stamps, rough.js doodles,
  map pins, header chip + progress bar), every element appearing on its spoken word.

## Delivery rule (user instruction, 2026-11-16) — after making every video
- **Always give the user the THUMBNAIL and the CAPTION** together with each finished video, without being asked:
  1. Thumbnail = cover in the Chapter 1 cover style (`engine/cover.html` entry + `engine/covers.mjs` name map → `output/covers/<file>_cover.jpg`).
  2. Caption = TikTok caption (hook line + 1–2 lines of content + "Teka/komen" prompt + hashtags incl. #TitikSejarah #SejarahSPM #SejarahTingkatan4).
  3. Record both in `docs/TikTok_Publishing_Kit.md` AND a per-chapter ready-to-post file (e.g. `docs/Bab4_Thumbnail_Caption.md`).
  4. Send the video + thumbnail + caption file to the user (SendUserFile), and paste the caption text in the reply.

## Non-negotiables
- Facts must match the KSSM Sejarah textbook; follow chapter/subtopic order. If the next topic is unclear, ask the user; don't guess.
- Length: follow the Chapter 1 series (Pengenalan ~1 min, subtopic episodes ~3–5 min, Ulang Kaji ~3 min) unless the user says otherwise.
- Frame 1 is a complete, striking image with hook text; voice starts within ~0.2 s; hook within 3 s; no greeting or channel intro first.
- Closing card shows the **official profile picture unaltered** (`assets/brand/titik-sejarah-dp-square.jpg`) + TITIK SEJARAH + tagline + "Follow untuk lebih banyak ilmu sejarah.", with the closing question spoken over it.
- Voice: ElevenLabs "Asyraf" (voice id `NHFTLozDZneDWyQjRGAO`), model `eleven_multilingual_v2` (v3 drifts Indonesian). Key is a network secret for api.elevenlabs.io. Per-episode settings go in the episode's `voice` field.
- Music ~20–25 dB under the voice; final mix −14 LUFS, ≤ −1 dBTP.
- Only use images whose licence is verified; credit them on screen.

## Status
- **Chapter 4 (Form 4) started at the user's request (Chapter 3 skipped for now).** Series of 9 (user chose full length like Chapter 1):
  01 Pengenalan · 02–08 Subtopik 4.1–4.7 (~3–5 min each) · 09 Ulang Kaji.
  - **ALL 9 DONE (2026-11-16)** — episodes `episodes/epb4_01.js`…`epb4_09.js` (+ shared doodles `episodes/b4lib.js`), outputs
    `output/0N_Bab4_*.mp4`, covers (`engine/cover.html` ids b4_01…b4_09), SRTs, storyboards, captions in docs/TikTok_Publishing_Kit.md.
    Lengths: 01 1:43 · 02 3:31 · 03 5:12 · 04 4:59 · 05 3:32 · 06 5:14 · 07 2:37 · 08 2:54 · 09 3:45. QC pass.
  - Facts checked against textbook pages p.92–118 (online 100–126). Textbook wording wins over the Drive notes (e.g. PKML = Parti Kebangsaan Melayu Labuan;
    Majlis Eksekutif & Perundangan MU under Pesuruhjaya Tinggi British).
  - NEXT: wait for the user (Chapter 3, or Chapter 5 onward). Same template: copy the Bab 4 files.
  - Credits: ~28k characters planned for the series; check `account_get_usage` before each episode.
- **Chapter 5 (Form 4) DONE (2026-11-26)** — 6 episodes `episodes/epb5_01.js`…`epb5_06.js`, each subtopic with a 2-question KUIZ MINI.
  Lengths: 01 1:31 · 02 2:33 · 03 2:09 · 04 2:20 · 05 1:56 · 06 2:10. Scripts kept tight because ElevenLabs credits were low
  (~2.5k left of 40k until the monthly reset). Covers b5_01…b5_06, captions in docs/Bab5_Thumbnail_Caption.md.
  NEXT: wait for the user (Chapter 3 or Chapter 6). Check credits first — a full chapter needs ~5–8k characters.
- **EPISOD KHAS Kertas 1 DONE (2026-11-26)** — `episodes/epkhas_k1.js` → `output/00_Episod_Khas_Kertas1_Wajib_30plus.mp4` (2:52, QC pass),
  cover id `khas_k1`, caption in docs/Episod_Khas_Kertas1_Thumbnail_Caption.md. Standalone SPM-strategy episode, posted BEFORE Bab 5 Pengenalan.
  Kertas 1 format used: 40 soalan objektif, 4 pilihan A–D, 40 markah, 1 jam. ElevenLabs credits nearly used up (~650 left) until reset 15 Dec 2026.
- Bab 4 order: 4.1 BMA · 4.2 Gagasan Malayan Union · 4.3 Reaksi MU · 4.4 Penyerahan Sarawak · 4.5 Reaksi Sarawak · 4.6 Penyerahan Sabah · 4.7 Reaksi Sabah.
## Earlier status notes
- The user has released all Chapter 1 and Chapter 2 videos themselves.
- NEXT: **Chapter 3** — wait for the user to resume. Before scripting, get the Chapter 3 contents/subtopic list from the user
  (textbook pages are not reachable from this environment); do not guess topics.
- Unfinished draft: `episodes/ep04d.js` (1.2 Part 2 documentary draft) — superseded; voice lines already paid and stored in `voice/`.
- Credit protection: every ElevenLabs reply is stored in `voice/eleven/`, every finished line in `voice/lines/` — re-renders cost 0 credits;
  only new/changed narration costs credits.
- Archival photos: Wikimedia Commons is allowed but its image server (upload.wikimedia.org) returned 429 to this cloud IP; licences for
  EP4 candidates are recorded in `assets/archive/ep04/SOURCES.json`. User-supplied photos are the reliable route.

## KSSM textbook (Form 4) — READABLE
- Hosts online.fliphtml5.com / static.fliphtml5.com are allowed on the `titiksejarah` environment (approved by the user).
- Page images: `https://online.fliphtml5.com/faksy/uqki/files/large/<N>.webp` (1204×1600). **Online page N = printed page + 8.**
- Contents: Bab 1 p.2 · Bab 2 p.20 · **Bab 3 p.50–91 (online 58–99)**: 3.1 p.52 · 3.2 p.54 · 3.3 p.58 · 3.4 p.64 · 3.5 p.68 · 3.6 p.70 ·
  3.7 p.74 · 3.8 p.80 · 3.9 p.82 · Bab 4 p.92 · Bab 5 p.124 · Bab 6 p.144 · Bab 7 p.170 · Bab 8 p.194 · Bab 9 p.214 · Bab 10 p.232.
- Textbook photos are copyright KPM/DBP: use them as visual reference only, not inside videos.
- Form 5 textbook: https://online.fliphtml5.com/llasu/dxpb/ (offset not yet checked).

## Reference material (user's Google Drive, readable via the Google Drive connector)
- Folder "Digital Products": `1WGLCfnZNNM1edEErQYApSTbli6l815Ci` → `Nota Sejarah SPM/Tingkatan 4` and `Tingkatan 5` hold the user's own
  chapter-by-chapter revision notes (PDF, written from the KSSM textbook) — use these as the fact source for scripts.
- Tingkatan 4 Bab 3 notes: "Bab 03 - Konflik Dunia dan Pendudukan Jepun di Negara Kita.pdf" (file id `1auFM9EP9B6ph3imqsSqNy6kOAZ38hb-b`).
  Subtopics: 3.1 Nasionalisme sebelum Perang Dunia · 3.2 Latar Belakang Perang Dunia · 3.3 Perang Dunia Kedua · 3.4 PD2 di Asia Pasifik ·
  3.5 Faktor kedatangan Jepun · 3.6 Dasar pendudukan Jepun · 3.7 Perjuangan rakyat menentang Jepun · 3.8 Nasionalisme tempatan &
  pendudukan Jepun · 3.9 Keadaan selepas kekalahan Jepun.
- Also there: Bank Soalan SPM Sejarah (Tingkatan 4/5, Paper 1/2), Master Documents (Syllabus Coverage Matrix, Production Checklist).

## Build
- `TS_TTS=eleven node engine/build.mjs <id>` (episodes in `episodes/ep<id>.js`), covers: `node engine/covers.mjs`, QC: `python3 engine/qc.py`.
- Docs per episode: production sheet (`docs/EP0x_Production.md`), storyboard, SRT, caption in `docs/TikTok_Publishing_Kit.md`.
