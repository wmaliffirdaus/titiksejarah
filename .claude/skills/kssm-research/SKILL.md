---
name: kssm-research
description: Maps any TitikSejarah topic to the official KSSM Sejarah syllabus (Tingkatan 4 and 5) and locates the exact textbook chapter, subtopic and pages, plus the chapter's Kemahiran Pemikiran Sejarah and Elemen Kewarganegaraan. Use at the start of every video, note or SPM question task, or whenever someone asks "bab mana", "subtopik apa", "adakah ini dalam sukatan", "KSSM", "DSKP", "buku teks halaman berapa", or needs syllabus alignment for content.
argument-hint: "[topik atau peristiwa] [tingkatan?]"
---

# KSSM Curriculum Research

Turn a topic idea into a precise syllabus anchor: form, chapter, subtopic, textbook pages, learning elements and scope limits. Every later stage (research, script, questions) builds on this anchor, so it must be exact.

## Responsibilities

- Find the official chapter and subtopic (textbook wording) for a topic.
- Give the textbook page range to read for the topic.
- List what the textbook covers, and what it does not cover, for that topic.
- Extract the chapter's *Kemahiran Pemikiran Sejarah (KPS)* and *Elemen Kewarganegaraan dan Nilai Sivik* from the chapter opening page.
- Flag topics or angles that fall outside the syllabus.

Fact verification belongs to `historical-fact-check`. This skill locates and scopes; it does not certify facts.

## Workflow

1. **Normalise the request.** Identify the event, person or concept. Keywords may be informal ("Tunku baca merdeka" → *Pemasyhuran Kemerdekaan*).
2. **Search the curriculum map.** Read `references/syllabus/peta-kurikulum-t4-t5.md` and find candidate chapters and subtopics. A topic can span several (e.g. *Perjanjian Malaysia 1963* → T5 Bab 5.5; constitutional angle → T5 Bab 2; Sabah/Sarawak safeguards → T5 Bab 4).
3. **Open the chapter notes** for orientation: `../digitalproducts/sejarah-spm/content/t<T>/bab<NN>.html`. Find the paragraph or table that covers the topic.
4. **Confirm against the textbook pages** (see `references/textbooks/README.md`). Record the printed page numbers that cover the topic. If you cannot access the textbook images, say so and mark the pages `perlu disahkan`.
5. **Extract the chapter elements** from the chapter opening page: *Inti Pati Pembelajaran*, *Elemen Kewarganegaraan dan Nilai Sivik*, *Kemahiran Pemikiran Sejarah*. They feed the storytelling angle, the iktibar and the KBAT questions.
6. **Define scope.** Write "Dalam sukatan" (what the textbook says) and "Luar sukatan / pengayaan" (detail the textbook omits). Out-of-syllabus material is allowed in documentaries if labelled, but never in SPM questions.
7. **Write the output** in the format below and save it as `content/tingkatan-<T>/<slug>/02-padanan-kssm.md` (or `01-analisis-sukatan.md` for question banks).

## Specific instructions

- Use the **exact official titles** from the curriculum map. Do not paraphrase subtopic names.
- Cite printed page numbers (`BT T5 hlm. 103`), never flipbook numbers.
- When a topic sits in both T4 and T5 (e.g. *Perlembagaan Persekutuan Tanah Melayu 1957* in T4 Bab 9 vs *Perlembagaan Persekutuan* in T5 Bab 2), list both and state which one is primary for this task.
- Note related known issues from `../digitalproducts/sejarah-spm/CHECKLIST.md` → "Isu" (e.g. textbook spelling variants, internal textbook inconsistencies).
- Report the **exam relevance** neutrally ("subtopik ini mempunyai banyak fakta bertarikh yang sesuai untuk soalan objektif"). Never predict that a topic "will come out" in SPM.

## Output format

```markdown
# Padanan KSSM — <tajuk>
- Slug: <slug> | Tarikh: <YYYY-MM-DD> | Status: DRAF

## Sauh sukatan
| Tingkatan | Bab | Subtopik | Halaman buku teks | Peranan |
|---|---|---|---|---|
| 5 | 5 Pembentukan Malaysia | 5.5 Perjanjian Julai 1963 dan Peristiwa Pengisytiharan Malaysia | 103–105 | Utama |

## Kandungan dalam sukatan (ringkas, ikut buku teks)
- …

## Luar sukatan / pengayaan (jika digunakan, mesti dilabel)
- …

## Elemen bab
- Kemahiran Pemikiran Sejarah: …
- Elemen Kewarganegaraan dan Nilai Sivik: …

## Isu diketahui
- … (rujuk CHECKLIST Isu #n)

## Nota untuk peringkat seterusnya
- Penyelidik: halaman yang mesti dibaca …
- Penggubal soalan: kata kunci/tarikh yang sesuai …
```

## Quality standards

- 100% of subtopic titles match the curriculum map character-for-character.
- Page ranges are given for every subtopic listed.
- "Luar sukatan" is never empty by omission: write "Tiada" explicitly if nothing applies.

## Example

**Input:** "Buat video pasal kenapa Singapura keluar Malaysia."

**Correct anchor:** T5 Bab 6 *Cabaran Selepas Pembentukan Malaysia* → 6.2 *Pemisahan Singapura* (BT T5 hlm. 119–120). Supporting context: T5 Bab 5.3 (Singapore reactions, hlm. 97). In syllabus: political factors (PAP–Perikatan conflict, *Malaysian Malaysia*), economic factors (common market, tax, RM150 juta loan), racial riots of 21 Julai 1964, the chronology 29 Jun – 9 Ogos 1965. Out of syllabus: Singapore's internal politics after 1965.

## Common mistakes

- Matching by keyword alone. "Perlembagaan" appears in T4 Bab 9, T5 Bab 2 and T5 Bab 3, so check the angle.
- Inventing a subtopic title that "sounds right".
- Quoting flipbook page numbers.
- Treating the chapter notes as the final source for exact quotations. Confirm against the textbook page.
- Labelling enrichment material as "dalam sukatan".
