---
name: spm-question-generation
description: Generates original SPM Sejarah practice questions for Kertas 1 (1249/1, objective) and Kertas 2 (1249/2, structured, source-based and essay) from the KSSM Tingkatan 4–5 syllabus, with a specification table (JSU), balanced difficulty (fakta, kefahaman, aplikasi, KBAT), accurate answer schemes and verified marking. Use when asked for "soalan SPM", "bank soalan", "soalan objektif", "soalan struktur", "soalan esei", "KBAT", "skema jawapan", "set percubaan", "latihan Kertas 1/Kertas 2".
argument-hint: "[tingkatan] [bab] [kertas1|kertas2|set-penuh] [bilangan]"
---

# SPM Paper 1 and Paper 2 Question Generation

Produces exam-quality practice material that a teacher would trust. Questions are original, within syllabus, unambiguous, and backed by a scheme whose every answer is in the textbook.

**Format configuration:** `references/syllabus/format-spm-sejarah-1249.md` holds paper structure, item counts, marks and time. Read it every time and never hard-code these values here. If it still shows ⚠ (unverified) items, tell the user, use the working values or a structure the user gives, and label the set accordingly.

Item templates and scheme conventions: `templat-item.md` (this folder). Pipeline and gates: `references/workflows/bank-soalan-spm.md`.

## Responsibilities

- Build a specification table (JSU) before writing any item.
- Write original Paper 1 items (single, combination I–IV and stimulus-based) with exactly one correct answer and plausible distractors.
- Write Paper 2 structured and source-based items and essay items with clear command words and mark allocations.
- Write answer schemes: keys with explanations (Paper 1); point-based and level-based schemes (Paper 2).
- Verify items and schemes with `historical-fact-check` (SPM mode) and check the arithmetic of marks.

## Workflow

1. **Scope.** Take the syllabus analysis (`01-analisis-sukatan.md` from `kssm-research`). Note each chapter's KPS and *Elemen Kewarganegaraan*; they drive KBAT and nilai items.
2. **JSU (blueprint).** Rows = subtopics; columns = levels (Pengetahuan, Kefahaman, Aplikasi, KBAT) and item types; cells = item count and marks. Working distribution for a balanced set: about 40% pengetahuan, 30% kefahaman, 15% aplikasi, 15% KBAT. Adjust to the confirmed official format. Save `02-jadual-spesifikasi.md`.
3. **Collect facts.** For each JSU cell, list the textbook facts (with `BT T<T> hlm.`) the item will test. Use only textbook content for SPM items. Enrichment items are labelled `[LUAR SUKATAN — PENGAYAAN]` and kept separate.
4. **Write items** using `templat-item.md`:
   - **Stem first, options after.** The stem must be answerable without the options for single-answer items.
   - **Distractors:** same category as the key (all dates, all people of similar role, all treaties), each wrong for a reason a teacher can state, and none partly correct.
   - **Combination items (I, II, III, IV):** every statement checked individually; the key combination is unique.
   - **Stimulus items:** passage, table, photo or timeline built from verified facts with a source line. Reproduce real quotations exactly, or label the text as adapted.
   - **Paper 2:** command word fits the marks (e.g. *Nyatakan* for 1 mark per fact; *Jelaskan/Huraikan* for fact + elaboration; *Pada pendapat anda* / *Wajarkan* for level-based KBAT).
5. **Write the scheme** (`04-skema.md`): MCQ key + why each distractor is wrong + page reference; Paper 2 point lists (F/H), with more accepted points than the maximum marks, plus level descriptors for KBAT and nilai items.
6. **Verify** (`05-semakan-markah.md`): send items and scheme to `historical-fact-check` (SPM mode); check uniqueness of MCQ keys; check that marks per item and per section match the JSU and the format configuration; check the answer-key distribution (no long runs of the same letter; roughly balanced A/B/C/D).
7. Hand over to `educational-quality-check`, then `pdf-publishing`.

## Output format

`03-soalan.md`: items numbered as in the paper, with section headers and marks in brackets. `04-skema.md`: the scheme in the same numbering. Each item carries a hidden metadata line (removed in the student PDF):

`<!-- meta: T5 B5.4 | aras: Kefahaman | jenis: K1-gabungan | sumber: BT T5 hlm. 100 | JSU: R3C2 -->`

## Quality standards

- 100% of items map to a JSU cell and a textbook page.
- Exactly one defensible answer per MCQ; no "semua di atas" / "tiada di atas".
- No negative stems without emphasis (**BUKAN**, bold and capitals) and none with double negatives.
- Language: exam register, DBP spelling, command words from the format reference.
- Original wording. No copying of past-year SPM papers, trial papers or commercial books.
- Every set carries: *"Soalan latihan asli TitikSejarah. Bukan soalan peperiksaan sebenar."*

## Examples of correct usage

**Kertas 1 (single item, Pengetahuan)**
> Siapakah yang dilantik sebagai pengerusi Suruhanjaya Cobbold?
> A. Lord Reid  B. Lord Cobbold  C. Lord Lansdowne  D. Sir Malcolm MacDonald
> **Skema:** B (BT T5 hlm. 100). A chaired Suruhanjaya Reid, which drafted the Perlembagaan Persekutuan Tanah Melayu 1957 (BT T4 Bab 9); C chaired the Jawatankuasa Antara Kerajaan (JAK); D proposed uniting the British territories in 1951.

**Kertas 2 (source-based, Kefahaman, 4 markah)**
> Rangsangan: "Suruhanjaya Cobbold mendapati dua pertiga penduduk menyokong pembentukan Malaysia." (Diadaptasi daripada Buku Teks Sejarah Tingkatan 5)
> (a) Nyatakan dua syor Suruhanjaya Cobbold selain dapatan di atas. [2 markah]
> **Skema (mana-mana dua, 1 markah setiap satu):** Perlembagaan Persekutuan Tanah Melayu 1957 dijadikan asas perlembagaan baharu; kuasa autonomi dan jaminan khas untuk Sarawak dan Sabah yang tidak boleh dipinda tanpa persetujuan Kerajaan Negeri (BT T5 hlm. 100).

## Common mistakes to avoid

- Writing items before the JSU, which produces 30 date questions and no KBAT.
- Distractors that are also correct in some reading (e.g. two options both "faktor ekonomi").
- KBAT questions that are just recall with "pada pendapat anda" in front.
- Schemes listing exactly as many points as marks (examiners need alternatives).
- Using facts that are only in reference books or online, not in the textbook.
- Claiming or implying "soalan ramalan", "soalan bocor", "keluar SPM".
