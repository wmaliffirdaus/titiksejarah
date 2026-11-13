# Aliran Kerja Bank Soalan SPM

Canonical pipeline for producing SPM Sejarah question sets (Kertas 1 / Kertas 2) with answer schemes, published as PDF.

## Konvensyen projek

- **Slug:** `soalan-t<T>-b<NN>-<jenis>`, e.g. `soalan-t4-b07-k1` (Kertas 1 for one chapter), `soalan-t5-b01-b05-k2` (Kertas 2 across chapters), `soalan-set-percubaan-01` (full set).
- **Working materials:** `content/tingkatan-<T>/<slug>/` (or `content/gabungan/<slug>/` for cross-form sets)
- **Final PDF:** `output/pdf/soalan/<slug>.pdf` and `output/pdf/soalan/<slug>-skema.pdf` (the answer scheme is a separate file so teachers can withhold it)

## Peringkat

| # | Peringkat | Agent | Skill | Output | Gate |
|---|---|---|---|---|---|
| 1 | SYLLABUS ANALYSIS | `kssm-expert` | `kssm-research` | `01-analisis-sukatan.md` — chapters/subtopics covered, KPS and Elemen Kewarganegaraan per chapter | Scope fits the user's request and is within the syllabus |
| 2 | TOPIC MAPPING | `spm-examiner` | `spm-question-generation` (blueprint) | `02-jadual-spesifikasi.md` (JSU: topic × level × item type × marks) | Level distribution follows the configuration in `references/syllabus/format-spm-sejarah-1249.md`. Unconfirmed values (⚠) are confirmed with the user or labelled |
| 3 | QUESTION GENERATION | `spm-examiner` | `spm-question-generation` | `03-soalan.md` | Every item maps to a JSU cell and a textbook page. Original wording, not copied |
| 4 | ANSWER SCHEME | `spm-examiner` | `spm-question-generation` (scheme) | `04-skema.md` | Every item has an answer; MCQ distractors are explained; Paper 2 lists more accepted answers than the maximum marks |
| 5 | MARKING VERIFICATION | `fact-checker` + `spm-examiner` | `historical-fact-check` + `spm-question-generation` (verification) | `05-semakan-markah.md` | Every fact in questions and scheme is `DISAHKAN` against the textbook. Marks add up. Exactly one correct MCQ answer |
| 6 | QUALITY ASSURANCE | `quality-assurance` | `educational-quality-check` | `06-laporan-qa.md` | Verdict `LULUS` |
| 7 | PDF PUBLICATION | main session | `pdf-publishing` | `output/pdf/soalan/*.pdf` | PDF passes automated checks (fonts, text layer, page numbers); answer key not in the student copy |

## Peraturan

1. **Never** label a set as a "real SPM question", "past-year question" or "leaked paper". Every PDF carries the statement: *"Soalan latihan asli TitikSejarah. Bukan soalan peperiksaan sebenar."*
2. Out-of-syllabus questions: label `[LUAR SUKATAN — PENGAYAAN]` and keep them out of the main set.
3. Stimulus material (source excerpts, photos) must come from a `DISAHKAN` source and carry a source line. Do not invent "source excerpts" in quotation marks. Reword the passage as a stimulus text and label it "Petikan diadaptasi daripada <sumber>", or quote it exactly with a reference.
4. Format version: the PDF footer records the version of `format-spm-sejarah-1249.md` used. If its status is still "BELUM DISAHKAN", show the disclaimer on the cover.
