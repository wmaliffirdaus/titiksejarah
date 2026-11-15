# TitikSejarah – project memory

Malaysian history TikTok channel (Bahasa Melayu), KSSM Sejarah Tingkatan 4. Tagline: "Kenali sejarah, fahami masa kini."

## BRAND RULE (user instruction, highest priority)
- Keep the original Titik Sejarah brand identity, colour palette, visual theme and design concept.
- Palette ONLY: navy `#172C63`, golden yellow `#F5C928`, heritage red `#C93436`, vintage cream `#F3EBDD` (plus white/black text shadows).
- Do NOT introduce new colours, alternative styles or unrelated design elements. Only change the design when the user specifically asks.
- Note: the experimental documentary theme added for the EP4 draft (`theme: 'doc'` in engine/player.html, runtime.js) uses off-palette colours
  (#0d0e12, #1b2a55, #14203d, #cdbb8c, #E0574F, Playfair/Source Sans/Cormorant fonts). It must NOT be used as-is. Ask the user before using or
  adapting it; any adaptation must stay within the brand palette and established look.

## VISUAL STYLE RULE (user instruction, 15 Nov 2026)
- The user wants **all videos to follow the Chapter 1 & 2 style and theme**: the notebook/doodle look of EP1–EP3
  (paper backgrounds, rough.js doodles, cards, stamps, pills, Marker titles, Baloo captions, compact DP end card),
  Do NOT use the documentary look/theme unless the user asks.
- **Pacing = Chapter 1** (user, 15 Nov 2026: EP3 short-form pace was too fast). Use `CH1` from `episodes/bab3.js`:
  voice `style 0.3, stability 0.45, speed 1.0, tempo 1.06, maxpause 0.24`, music `key 60, bpm 104, variant 0`,
  `lead 0.55, gap 0.4, tail 0.45`, `paper` transitions. Templates: `episodes/ep07.js`, `episodes/ep08.js`.
- **Natural, fluent voice:** write full connected sentences (commas, not "…"), one flowing line per scene, no word-by-word
  fragments. `maxpause` trims mid-sentence hesitations to 0.24 s (sentence ends 0.42 s) in post — 0 credits.
  ~85 spoken words (years count as their spoken words) ≈ 50 s; split the subtopic if it needs more.

## (Superseded) documentary direction → `docs/STYLE_GUIDE.md`
- **Style:** historical documentary · **Mood:** serious + emotional + nostalgic
- **Visual:** archival photographs + historical maps + timeline animation · **Pacing:** moderate + suspense-driven
- Superseded by the visual style rule above; kept only for reference.

## Non-negotiables
- Facts must match the KSSM Sejarah textbook; follow chapter/subtopic order. If the next topic is unclear, ask the user; don't guess.
- 35–60 s per episode; split long subtopics.
- Frame 1 is a complete, striking image with hook text; voice starts within ~0.2 s; hook within 3 s; no greeting or channel intro first.
- Closing card shows the **official profile picture unaltered** (`assets/brand/titik-sejarah-dp-square.jpg`) + TITIK SEJARAH + tagline + "Follow untuk lebih banyak ilmu sejarah.", with the closing question spoken over it.
- Voice: ElevenLabs "Asyraf" (voice id `NHFTLozDZneDWyQjRGAO`), model `eleven_multilingual_v2` (v3 drifts Indonesian). Key is a network secret for api.elevenlabs.io. Per-episode settings go in the episode's `voice` field.
- Music ~20–25 dB under the voice; final mix −14 LUFS, ≤ −1 dBTP.
- Only use images whose licence is verified; credit them on screen.

## Status (Chapter 3 in production)
- The user has released all Chapter 1 and Chapter 2 videos themselves.
- DONE: **3.1 in two parts** — EP07 "Penjara kerana Menulis?" (3.1A: Enakmen 1904, Uthmaniyah, Tok Janggut, 0:50) and
  EP08 "Burung dalam Sangkar Emas" (3.1B: akhbar, undang-undang penerbitan, Cerita Tekukur, 0:47).
- NEXT: **3.2 Latar Belakang Perang Dunia** (textbook p.54–57; facts in the Drive notes). Likely needs 2 parts
  (faktor PD1 + pakatan/kronologi; tamat PD1 + kesan). Number episodes ep09, ep10, ...
- Voice lines from abandoned EP07 drafts (documentary, fast short-form) are stored in `voice/` (paid; reusable only with those exact settings).
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
