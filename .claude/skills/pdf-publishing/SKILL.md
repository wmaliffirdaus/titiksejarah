---
name: pdf-publishing
description: Produces print-ready, branded A4 PDFs for TitikSejarah. Covers chapter revision notes (one chapter = one PDF, via the existing sejarah-spm builder), SPM question sets with separate answer schemes, and worksheets. Applies the shared palette and fonts, verifies the text layer, fonts, page numbering and layout, and handles file naming and Google Drive upload. Use when asked to "jana PDF", "terbitkan nota", "buat PDF soalan", "susun atur PDF", "muat naik ke Drive", or to rebuild or fix an existing PDF.
argument-hint: "[nota T B | soalan <slug> | dokumen <fail.html>]"
---

# Educational PDF and Publishing Production

Content is written and checked by other skills. This skill turns approved content into a professional, consistent PDF and gets it to the right place. Two builders exist. Both use the same TrueType Inter fonts and the renderer of the notes project, which lives in the separate repository `wmaliffirdaus/digitalproducts` (`sejarah-spm/`). Clone it next to this repository (`../digitalproducts`) or set `SEJARAH_SPM_DIR`. The generic builder recolours output with the TitikSejarah palette. The chapter notes keep their own "Digital Products" palette unless the user decides to rebrand them.

## Responsibilities

- Build chapter notes PDFs with the proven `sejarah-spm` pipeline.
- Build question sets (student copy and answer scheme as separate PDFs) and other documents with the generic builder.
- Run automated checks and a visual check before delivery.
- Name files consistently and upload to the correct Google Drive folder without overwriting or deleting existing files unless the user approved replacement.

## Builders

| Deliverable | Builder | Command (from repo root) |
|---|---|---|
| Chapter notes (sections A–G) | `../digitalproducts/sejarah-spm/scripts/build.py` | `python3 ../digitalproducts/sejarah-spm/scripts/build.py <T> <bab>` |
| Question set, scheme, worksheet, any document | `scripts/build_doc_pdf.py` | `python3 scripts/build_doc_pdf.py <fragment.html> <out.pdf> --title "…" --kicker "…"` |
| Any PDF check | `scripts/check_pdf.py` | `python3 scripts/check_pdf.py <file.pdf> [--require "teks"]… [--forbid "teks"]…` |

Prerequisites (same as the notes project): Node with Playwright and Chromium; pip `jinja2 pypdf fonttools pillow`; the Inter font package `fonts-inter`. Fonts are converted once by `../digitalproducts/sejarah-spm/scripts/setup_fonts.py`; both builders call it if needed.

## Workflow

1. **Precondition:** the content has QA verdict `LULUS` (`educational-quality-check`). Do not publish drafts.
2. **Chapter notes:** follow `../digitalproducts/sejarah-spm/README.md`. Content goes in `../digitalproducts/sejarah-spm/content/t<T>/bab<NN>.html` using `<part letter="B">`/`<sub no="x.y">` tags. `build.py` fails if a subtopic is missing, the contents-page numbers are wrong, a section B–G is missing, fonts are Type 3, or the text layer has unmapped characters.
3. **Question sets:**
   - Convert `03-soalan.md` into an HTML fragment (headings, `<ol>`, tables for combination items). Remove all `<!-- meta -->` lines and anything from the scheme.
   - Build the student copy: `--title "Set Latihan Kertas 1 — T5 Bab 5" --kicker "Soalan latihan asli TitikSejarah. Bukan soalan peperiksaan sebenar."`. If the format reference is still unverified, add the format disclaimer to the kicker or first paragraph.
   - Build the scheme separately from `04-skema.md`, saved as `<slug>-skema.pdf`.
   - Check the student copy: `check_pdf.py out.pdf --require "Bukan soalan peperiksaan sebenar" --forbid "Skema" --forbid "meta:"`.
4. **Answer options:** lay out MCQ options with `<table class="t keep opsyen">`. The notes stylesheet bolds the first table column, which would make options A and C look emphasised; `opsyen` neutralises it.
5. **Use the available styling classes** (`../digitalproducts/sejarah-spm/templates/style.css`): `table.t` (+ `keep` to avoid splitting), `.box def|info|ingat|fokus|nilai`, `.timeline`, `.flow`, `.cards`, `dl.kw`, `ul.check`, `.k` (key term), `.date`, `.who`. Do not add inline colours outside the palette.
6. **Visual check:** render page previews (`python3 ../digitalproducts/sejarah-spm/scripts/preview.py <pdf> <out_dir>`) and inspect: no cut-off text, no heading stranded at a page bottom, tables not split without headers, readable on A4 print.
7. **Name and place files:**
   - Notes: `Bab NN - <Tajuk Rasmi Bab>.pdf` → Drive `Digital Products/Nota Sejarah SPM/Tingkatan <T>/`.
   - Question sets: `output/pdf/soalan/<slug>.pdf` and `<slug>-skema.pdf`.
8. **Upload (when Google Drive is connected):** search the target folder first to avoid duplicates; upload as PDF without conversion; record the file ID. Replacing an existing file (trashing the old copy) requires the user's explicit approval. If Drive is unavailable, say so plainly and leave the files ready. Never report an upload that did not happen.

## Output format

- PDF(s) in the paths above.
- A short delivery note: file names, page counts, checks passed, Drive IDs (or "belum dimuat naik — sebab").

## Quality standards

- Automated checks pass: no Type 3 fonts, no private-use characters, required disclaimers present, forbidden strings absent.
- Consistent brand palette and fonts; cover and footer on every document.
- Student copies never contain answers or hidden metadata.

## Example of correct usage

"Terbitkan set soalan `soalan-t5-b05-k1`." → Check `06-laporan-qa.md` = LULUS → write `soalan.html` and `skema.html` fragments → build both PDFs → `check_pdf.py` on both (student copy with `--forbid "Skema"`) → previews → save to `output/pdf/soalan/` → if Drive is connected and the user wants it there, upload and report IDs.

## Common mistakes to avoid

- Editing `../digitalproducts/sejarah-spm/templates/style.css` for one document. That changes every notes PDF (in the other repository); add a local `<style>` block in the fragment instead.
- Publishing a question set with the scheme appended to the student copy.
- Using system OTF fonts directly (Chromium embeds them as Type 3, which breaks search and copy). Use the converted fonts.
- Uploading a duplicate instead of checking the folder first, or trashing an old file without approval.
- Claiming upload success when the connector failed.
