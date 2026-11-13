# Aliran Kerja Produksi Video

Canonical pipeline for every TitikSejarah video. The main Claude session is the **producer**: it delegates each stage to the named agent, passes **file paths** (not pasted content) between stages, and does not advance until the stage's gate passes.

The primary format is the **TikTok/Shorts episode (9:16, 35–60 s)** rendered by the project engine (`engine/build.mjs`). Long YouTube documentaries (16:9) use the same stages up to the storyboard; see "Format panjang" below.

## Konvensyen

- **Episode ID:** next free number after the existing episodes (`episodes/ep<id>.js`; parts use a letter, e.g. `03s`, `02a`). The engine's `file` name follows the existing pattern `<NN>_Bab<N>_<Subtopik/Tajuk>`.
- **Slug:** `ep<id>-<topik-ringkas>`, e.g. `ep07-wilayah-pengaruh`.
- **Working files:** `content/tingkatan-<T>/<slug>/` (00-taklimat … 03-log-fakta, 04a-garis-cerita).
- **Deliverables:** `output/scripts/<slug>.md`, `output/storyboards/<slug>.md`, `output/videos/<slug>/` (sumber-visual, aset/, voiceover/, laporan-qa, terbitan).
- **Engine artefacts (written by the engine; do not hand-edit):** `output/<file>.mp4`, `output/subtitles/<file>.srt`, `output/covers/<file>_cover.jpg`, `docs/storyboard/EP<id>_storyboard.md` (real timings), `docs/QC_Report.md`.
- **Human-facing summary:** `docs/EP<id>_Production.md` (existing convention: why this topic, hook options, selected hook, VO table, and links to the stage files) and the caption block in `docs/TikTok_Publishing_Kit.md`.

## Sebelum mula (peraturan siri)

1. Follow the KSSM textbook order of chapters and subtopics (`references/syllabus/peta-kurikulum-t4-t5.md`). If the next topic is unclear, ask the user. Do not guess.
2. Check the latest analytics the user shared (`docs/Retention_Analysis_*.md`). If the project memory says to wait for analytics before the next episode, ask the user first.
3. Do not repeat content from published episodes except as a one-line bridge.

## Peringkat

| # | Peringkat | Agent | Skill | Output | Gate |
|---|---|---|---|---|---|
| 0 | Taklimat | producer | — | `00-taklimat.md` (topic, episode ID, part n of m, platform, target length) | Topic follows textbook order; analytics rule respected |
| 1 | RESEARCH | `historical-researcher` | (own method) + `kssm-research` | `01-penyelidikan.md` | Every fact has a source and page |
| 2 | SYLLABUS VERIFICATION | `kssm-expert` | `kssm-research` | `02-padanan-kssm.md` | Anchored to chapter/subtopic/pages; enrichment labelled |
| 3 | HISTORICAL FACT CHECKING | `fact-checker` | `historical-fact-check` | `03-log-fakta.md` | `PERLU SEMAKAN` = 0 in material passed on |
| 4 | SCRIPTWRITING | `scriptwriter` | `historical-storytelling`, `documentary-scriptwriting` | `04a-garis-cerita.md`, `output/scripts/<slug>.md` | Hook ≤ 3 s; 35–60 s; every factual sentence has a ledger ID |
| 4b | SCRIPT FACT CHECK | `fact-checker` | `historical-fact-check` (script) | append to `03-log-fakta.md` | No new unverified claim |
| 5 | STORYBOARD | `video-director` | `storyboard-creation` | `output/storyboards/<slug>.md` + visual requirement list | Frame 1 complete; every scene has visual, text, motion, audio |
| 6 | VISUAL SOURCE COLLECTION | `visual-researcher` | `visual-source-research` | `output/videos/<slug>/sumber-visual.md`, `aset/` | Every image authenticated, captioned and licence-verified; illustrations labelled |
| 7 | VOICEOVER | `video-director` | `voiceover-production` | `output/videos/<slug>/voiceover/` + `voice` settings in the episode | Pronunciation guide checked; user approved ElevenLabs spend |
| 8 | VIDEO EDITING PLAN → BUILD | `video-director` | `storyboard-creation` (encode + build) | `episodes/ep<id>.js` → engine build → MP4, SRT, storyboard doc, cover; `python3 engine/qc.py` | Builds; QC LULUS (1080×1920, −14 LUFS ±1.5, ≤ −1 dBTP, full decode, SRT present); duration 35–60 s |
| 9 | QUALITY ASSURANCE | `quality-assurance` | `educational-quality-check` | `output/videos/<slug>/laporan-qa.md` | Verdict `LULUS` |
| 10 | PUBLISHING | `social-media-strategist` | `social-media-publishing` | `output/videos/<slug>/terbitan.md` + caption block in `docs/TikTok_Publishing_Kit.md` + `docs/EP<id>_Production.md` | Package fact-checked; the user uploads |

Stages 5 and 6 may run in parallel after 4b. The engine renders the voice during the build, so stage 7 prepares the text and settings and the paid generation happens in stage 8 after approval.

## Peraturan

1. **Never skip stage 3 or 4b**, even for a 35-second video.
2. **Changes propagate:** a factual fix goes back to stage 3, then script → episode file → rebuild → QA re-check.
3. **One source of truth for facts:** `03-log-fakta.md`. The episode file's `lines` must match the approved script word for word (the engine generates subtitles and the storyboard from them).
4. **Human gates:** ElevenLabs generation (credits), uploading or posting, replacing published files, and keeping any `PERLU SEMAKAN` claim.
5. **Cut-downs** from a verified long video reuse its ledger: run stages 4, 5, 8, 9 and 10 only.

## Format panjang (YouTube 16:9, 6–15 min)

Stages 1–6, 7 (narration) and 9–10 are the same. Stage 8 is different: the engine renders 9:16 only. Either a human editor works from `output/videos/<slug>/pelan-suntingan.md` (a timecoded edit plan, see `storyboard-creation` Part B), or the engine is extended with a 16:9 stage. Ask the user which before starting stage 8.

## Hutang kualiti yang diketahui

`docs/Fact_Check.md` (Bab 1, EP1–EP6) states that those facts were written from general knowledge because the textbook was not reachable at the time. Before any re-cut or re-upload of Bab 1 material, run `historical-fact-check` against the textbook-verified notes (`../digitalproducts/sejarah-spm/content/t4/bab01.html`) and the textbook pages.
