# TitikSejarah – project memory

Malaysian history TikTok channel (Bahasa Melayu), KSSM Sejarah Tingkatan 4. Tagline: "Kenali sejarah, fahami masa kini."

## BRAND RULE (user instruction, highest priority)
- Keep the original Titik Sejarah brand identity, colour palette, visual theme and design concept.
- Palette ONLY: navy `#172C63`, golden yellow `#F5C928`, heritage red `#C93436`, vintage cream `#F3EBDD` (plus white/black text shadows).
- Do NOT introduce new colours, alternative styles or unrelated design elements. Only change the design when the user specifically asks.
- Note: the experimental documentary theme added for the EP4 draft (`theme: 'doc'` in engine/player.html, runtime.js) uses off-palette colours
  (#0d0e12, #1b2a55, #14203d, #cdbb8c, #E0574F, Playfair/Source Sans/Cormorant fonts). It must NOT be used as-is. Ask the user before using or
  adapting it; any adaptation must stay within the brand palette and established look.

## Current creative direction → `docs/STYLE_GUIDE.md`
- **Style:** historical documentary · **Mood:** serious + emotional + nostalgic
- **Visual:** archival photographs + historical maps + timeline animation · **Pacing:** moderate + suspense-driven
- This replaces the doodle-notebook look used for EP1–EP3 (from EP4 onward).

## Non-negotiables
- Facts must match the KSSM Sejarah textbook; follow chapter/subtopic order. If the next topic is unclear, ask the user; don't guess.
- 35–60 s per episode; split long subtopics.
- Frame 1 is a complete, striking image with hook text; voice starts within ~0.2 s; hook within 3 s; no greeting or channel intro first.
- Closing card shows the **official profile picture unaltered** (`assets/brand/titik-sejarah-dp-square.jpg`) + TITIK SEJARAH + tagline + "Follow untuk lebih banyak ilmu sejarah.", with the closing question spoken over it.
- Voice: ElevenLabs "Asyraf" (voice id `NHFTLozDZneDWyQjRGAO`), model `eleven_multilingual_v2` (v3 drifts Indonesian). Key is a network secret for api.elevenlabs.io. Per-episode settings go in the episode's `voice` field.
- Music ~20–25 dB under the voice; final mix −14 LUFS, ≤ −1 dBTP.
- Only use images whose licence is verified; credit them on screen.

## Status (production PAUSED by the user to save ElevenLabs credits)
- The user has released all Chapter 1 and Chapter 2 videos themselves.
- NEXT: **Chapter 3** — wait for the user to resume. Before scripting, get the Chapter 3 contents/subtopic list from the user
  (textbook pages are not reachable from this environment); do not guess topics.
- Unfinished draft: `episodes/ep04d.js` (1.2 Part 2 documentary draft) — superseded; voice lines already paid and stored in `voice/`.
- Credit protection: every ElevenLabs reply is stored in `voice/eleven/`, every finished line in `voice/lines/` — re-renders cost 0 credits;
  only new/changed narration costs credits.
- Archival photos: Wikimedia Commons is allowed but its image server (upload.wikimedia.org) returned 429 to this cloud IP; licences for
  EP4 candidates are recorded in `assets/archive/ep04/SOURCES.json`. User-supplied photos are the reliable route.

## Promo videos (digital products)
- PROMO01 (`episodes/eppromo.js` → `output/PROMO01_Bahan_Ulang_Kaji_Sejarah_SPM.mp4`, 45 s) built WITHOUT voice (`TS_TTS=silent`);
  add Asyraf later with `TS_TTS=eleven node engine/build.mjs promo` (~480 chars). Details/price check: `docs/PROMO01_Production.md`.
- Product posters: `assets/promo/posters/` (cropped from the user's contact sheet); prices from `assets/promo/source/pakej-comparison-table.png`.

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
