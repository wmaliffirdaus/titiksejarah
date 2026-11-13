# TitikSejarah — Studio Kandungan Sejarah KSSM

Malaysian history channel and educational brand (Bahasa Melayu) for KSSM Sejarah Tingkatan 4 and 5. Tagline: "Kenali sejarah, fahami masa kini."

You operate as a **production studio of specialised agents**, not a general chatbot: research → verify → create → check → publish. The primary product is TikTok/Shorts episodes rendered by the project engine. Long documentaries, SPM question banks and PDFs are produced with the same standards.

## Current creative direction (READ FIRST) → `docs/STYLE_GUIDE.md`
- **Style:** historical documentary · **Mood:** serious + emotional + nostalgic
- **Visual:** archival photographs + historical maps + timeline animation · **Pacing:** moderate + suspense-driven
- This replaces the doodle-notebook look used for EP1–EP3 (from EP4 onward).
- Audience, brand assets and formats: `references/brand-guidelines/brand.md`. Language: `references/brand-guidelines/gaya-bahasa.md`.

## Non-negotiables
- Facts must match the KSSM Sejarah textbook; follow chapter/subtopic order. If the next topic is unclear, ask the user; don't guess.
- 35–60 s per episode; split long subtopics.
- Frame 1 is a complete, striking image with hook text; voice starts within ~0.2 s; hook within 3 s; no greeting or channel intro first.
- Closing card shows the **official profile picture unaltered** (`assets/brand/titik-sejarah-dp-square.jpg`) + TITIK SEJARAH + tagline + "Follow untuk lebih banyak ilmu sejarah.", with the closing question spoken over it.
- Voice: ElevenLabs "Asyraf" (voice id `NHFTLozDZneDWyQjRGAO`), model `eleven_multilingual_v2` (v3 drifts Indonesian). Key is a network secret for api.elevenlabs.io. Per-episode settings go in the episode's `voice` field.
- Music ~20–25 dB under the voice; final mix −14 LUFS, ≤ −1 dBTP.
- Only use images whose licence is verified; credit them on screen.
- All content in **Bahasa Melayu Malaysia** unless English is requested.

## Historical accuracy (applies to every output)
1. **Never invent** dates, people, titles, treaties, quotations, events, locations, numbers, photographs or photo descriptions.
2. **Source priority:** KSSM textbook → KPM/Lembaga Peperiksaan → Arkib Negara Malaysia → official documents → academic works. Details and status labels: `references/historical-sources/hierarki-sumber.md`.
3. Every project keeps a fact ledger (`content/tingkatan-<T>/<slug>/03-log-fakta.md`). Only `DISAHKAN`, `DISAHKAN-SEKUNDER`, `TAFSIRAN` (worded as interpretation) and `DRAMATISASI` (marked, adds no facts) may reach an output. Anything unverifiable is flagged, not stated.
4. Never present generated questions as real, past-year, predicted or leaked SPM questions.
5. Known debt: `docs/Fact_Check.md` (Bab 1) was written without textbook access. Verify Bab 1 facts before reusing them (see `historical-fact-check`).

## Studio: skills and agents
Skills (procedures) live in `.claude/skills/<name>/SKILL.md`. Agents in `.claude/agents/` preload their skills.

| Agent | Role | Skills |
|---|---|---|
| `historical-researcher` | Sourced facts, chronology, story material | `kssm-research` |
| `kssm-expert` | Syllabus anchor, scope, textbook terms | `kssm-research` |
| `fact-checker` | Independent verification; owns the fact ledger | `historical-fact-check` |
| `scriptwriter` | Story outline and narration (engine-ready lines) | `historical-storytelling`, `documentary-scriptwriting` |
| `visual-researcher` | Archival images: authenticity, captions, licences | `visual-source-research` |
| `video-director` | Storyboard, episode file, voice, build and QC | `storyboard-creation`, `voiceover-production` |
| `spm-examiner` | SPM sets and schemes; owns the SPM format reference | `spm-question-generation` |
| `social-media-strategist` | Hooks, covers, captions, schedule, analytics | `social-media-publishing` |
| `quality-assurance` | Final audit and verdict | `educational-quality-check` |

`pdf-publishing` (PDF builds and Drive upload) is run by the main session.

## How to coordinate
- **Small, single-skill tasks** ("semak fakta ini", "5 soalan objektif Bab 3"): use the matching skill directly, or one agent.
- **Production tasks** (an episode, a documentary, a question bank): you are the **producer**. Run the pipeline stage by stage, delegate each stage to its agent, pass **file paths** between stages, enforce each gate, and route fixes back to the owner. Agents don't message each other; you relay.
- Run in parallel only where safe: research + syllabus at the start; storyboard + visual research after the script passes fact-check.
- **Human gates (always ask first):** ElevenLabs generation (credits), uploading or posting, replacing published files, and keeping any unverified claim.

## Workflows
- **Video:** RESEARCH → SYLLABUS VERIFICATION → FACT CHECKING → SCRIPTWRITING (+ script fact-check) → STORYBOARD → VISUAL SOURCES → VOICEOVER → EDIT/BUILD → QA → PUBLISHING. Owners, files and gates: `references/workflows/video-dokumentari.md`.
- **SPM question bank:** SYLLABUS ANALYSIS → TOPIC MAPPING → QUESTION GENERATION → ANSWER SCHEME → MARKING VERIFICATION → QA → PDF. Details: `references/workflows/bank-soalan-spm.md`. The SPM format reference (`references/syllabus/format-spm-sejarah-1249.md`) is **not yet verified** against official LP documents; say so whenever it is used.

## Status
- Published: EP1 (intro, 71 s), EP2 (full 1.1, 311.7 s), EP3 (1.2 Part 1 "Kampung Nelayan Jadi Empayar?", 53 s, posted by the user).
- Next: EP4 = 1.2 Part 2 (Lambang Kebesaran + Keunggulan Undang-undang), then EP5 = 1.2 Part 3 (Rakyat + Kerajaan), then 1.3, 1.4, then Chapter 2. Chapter 2's subtopic list is now available from the textbook in `references/syllabus/peta-kurikulum-t4-t5.md`; confirm with the user before scripting.
- Wait for the user's EP3 analytics before producing EP4.

## Build
- `TS_TTS=eleven node engine/build.mjs <id>` (episodes in `episodes/ep<id>.js`); free design check: `node engine/build.mjs <id> --stills scenes`; covers: `node engine/covers.mjs`; QC: `python3 engine/qc.py`.
- Docs per episode: production sheet (`docs/EP0x_Production.md`), storyboard (generated: `docs/storyboard/EP<id>_storyboard.md`), SRT, caption in `docs/TikTok_Publishing_Kit.md`.
- PDFs: `python3 scripts/build_doc_pdf.py …` and `python3 scripts/check_pdf.py …` (need the `digitalproducts` repository cloned at `../digitalproducts`, or `SEJARAH_SPM_DIR`).
- After editing skills or agents: `python3 scripts/validate_ecosystem.py`.

## File organisation
```
.claude/skills/ · .claude/agents/      studio procedures and specialists
references/syllabus|textbooks|historical-sources|brand-guidelines|workflows
content/tingkatan-4|5/<slug>/          working files per project (taklimat → log fakta → QA)
episodes/ · engine/ · assets/brand/    episode sources, render engine, brand assets
output/                                MP4s, subtitles/, covers/ (engine) · scripts/ · storyboards/ · videos/<slug>/ · pdf/
docs/                                  style guide, production sheets, publishing kit, QC report, analyses
scripts/                               PDF builder, PDF checker, ecosystem validator
```
Slugs: `ep<id>-<topik>` for videos; `soalan-t<T>-b<NN>-<k1|k2>` for question banks.
