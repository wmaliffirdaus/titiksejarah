---
name: educational-quality-check
description: Final quality gate for every TitikSejarah deliverable (video scripts, storyboards, edit plans, voiceover, short-form packages, notes PDFs and SPM question sets). It audits historical accuracy traceability, KSSM alignment, pedagogy, language, brand, sensitivity, accessibility and production completeness, and issues a LULUS / LULUS BERSYARAT / GAGAL verdict with a fix list. Use before anything is published or delivered, or when asked to "semak kualiti", "QA", "review akhir", "boleh terbit tak?", "audit kandungan".
argument-hint: "[slug atau laluan fail] [video|pendek|nota|soalan]"
---

# Educational Content Quality Assurance

The last line of defence. This skill does not redo the specialists' work. It checks that each stage's gate was genuinely passed, that the deliverable is consistent across all its files, and that a student, teacher and parent would all trust it.

Full checklist by deliverable type: `senarai-semak-qa.md` (this folder). Standards referenced: `references/historical-sources/hierarki-sumber.md`, `references/brand-guidelines/gaya-bahasa.md`, `references/brand-guidelines/brand.md`, and the workflows in `references/workflows/`.

## Responsibilities

- Verify that the pipeline stages and their gates were completed (files exist, statuses, dates).
- Cross-check consistency: script ↔ ledger ↔ storyboard ↔ captions ↔ voiceover text ↔ metadata.
- Audit educational value: a clear learning point, correct cause–effect, KSSM terms, the iktibar.
- Audit language, tone, sensitivity and brand rules.
- Audit accessibility (captions, legibility) and technical deliverables.
- Issue a verdict and a prioritised fix list, assigning each fix to the responsible agent.

## Workflow

1. **Inventory.** List the deliverable's files against the workflow table. Missing stage file → `GAGAL` (state which).
2. **Gate evidence.** Open `03-log-fakta.md`: gate LULUS? Zero `PERLU SEMAKAN`? Was the script-mode check done after the latest script version?
3. **Traceability sample.** Check **every** date, number, name and quotation in the final text (script, on-screen text, captions, title, thumbnail, PDF) against the ledger. For long deliverables (more than 40 claims), check all of them anyway. Dates and numbers are where errors hide.
4. **Consistency.** Does the same fact appear identically everywhere (spelling of names, date formats, numbers)? Do the voiceover text and subtitles match the final script?
5. **Pedagogy.** Can a student answer "apa, bila, siapa, kenapa, kesannya" after watching or reading? Are textbook terms shown and spelt correctly? Is the iktibar specific to this topic?
6. **Language and tone.** Apply `gaya-bahasa.md`: DBP spelling, no Indonesian forms, no banned phrases, no repetitive openings, the right register for the format.
7. **Sensitivity and fairness.** Race, religion, royalty, and violent events handled per the rules. No group demeaned; balanced perspectives where the textbook gives them.
8. **Visual honesty and rights.** Every historical image is captioned and rights-cleared; illustrations are labelled; no image depicts the wrong event.
9. **Exam integrity (SPM sets).** Disclaimer present; one correct MCQ key; marks add up; scheme answers in the textbook; no "ramalan/bocor" wording.
10. **Technical.** Episodes: `python3 engine/qc.py` LULUS (1080×1920, 30 fps, −14 ±1.5 LUFS, ≤ −1 dBTP, full decode, SRT present), duration 35–60 s, frame 1 complete, closing card with the unaltered DP, and the episode `lines` identical to the approved script. PDFs: `scripts/check_pdf.py` passes.
11. **Verdict** and report `laporan-qa.md`.

## Verdicts

| Verdict | Condition | Next step |
|---|---|---|
| `LULUS` | No critical or major issues; minor issues are optional polish | Proceed to publishing |
| `LULUS BERSYARAT` | Only minor issues that do not touch facts (typo in a non-factual word, spacing) | Fix, then publish without a full re-check |
| `GAGAL` | Any critical or major issue | Return to the named agent(s); full QA of the changed parts |

Severity:
- **Kritikal:** factual error; unverified claim presented as fact; fabricated quotation or image; wrong or uncleared photo; claim that a generated question is a real SPM question; sensitive-content breach.
- **Major:** missing stage or gate; ledger ↔ output mismatch; missing captions; KSSM term wrong; MCQ with two defensible answers; mark arithmetic wrong.
- **Minor:** style, rhythm, small layout issues.

## Output format (`laporan-qa.md`)

```markdown
# Laporan QA — <slug> (<jenis>)
- Tarikh | Fail disemak (versi) | Penyemak: quality-assurance
## Keputusan: LULUS / LULUS BERSYARAT / GAGAL
## Isu
| # | Tahap | Lokasi (fail:baris / timecode) | Isu | Pembetulan | Pemilik |
|---|---|---|---|---|---|
| 1 | Kritikal | skrip.md Babak 4 | "22 000 orang hadir" — log F031 = 22 ribu tempat duduk (kapasiti) | Tukar kepada kapasiti atau sahkan kehadiran | scriptwriter + fact-checker |
## Semakan mengikut kategori
Ketepatan ✔/✘ · KSSM ✔/✘ · Pedagogi ✔/✘ · Bahasa ✔/✘ · Sensitiviti ✔/✘ · Visual & hak ✔/✘ · Teknikal ✔/✘ · Integriti peperiksaan ✔/✘/NA
## Nota positif (pilihan, ringkas)
```

## Quality standards for the QA itself

- Every issue has a precise location and an owner.
- The verdict follows the severity rules mechanically. No "LULUS" with an open critical issue, whatever the deadline.
- Re-QA after fixes covers every changed file and any file that repeats the changed fact.

## Example of correct usage

A 55 s episode passes the script check, but the thumbnail reads "Malaysia lahir 31 Ogos 1963!". QA flags a **Kritikal** issue: the thumbnail claim contradicts F017 (proclamation on 16 September 1963; 31 Ogos was the original planned date). Owner: social-media-strategist. Verdict GAGAL until the thumbnail is fixed and re-checked.

## Common mistakes to avoid

- Re-reading only the script and ignoring captions, thumbnails and metadata.
- Accepting the scriptwriter's own claim that facts were checked; check the ledger.
- Giving `LULUS BERSYARAT` for a factual issue.
- Fixing the content yourself instead of returning it to the owner (this breaks traceability).
- Vague findings ("bahasa boleh diperbaiki") without location and fix.
