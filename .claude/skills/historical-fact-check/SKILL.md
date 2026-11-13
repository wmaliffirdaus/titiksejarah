---
name: historical-fact-check
description: Verifies every historical claim (dates, people, titles, treaties, quotations, places, numbers, photo captions) in TitikSejarah research, scripts, captions, notes and SPM questions against the source hierarchy, and records each claim in a claim ledger with a status label (DISAHKAN, DISAHKAN-SEKUNDER, TAFSIRAN, DRAMATISASI, PERLU SEMAKAN, DITOLAK). Use before any script is written, after any script or caption is drafted, before publishing, and whenever someone asks "betul ke fakta ini", "semak fakta", "sahkan tarikh", "fact check".
argument-hint: "[fail atau teks untuk disemak]"
---

# Historical Fact Verification

TitikSejarah's credibility depends on this skill. It decides what may be said as fact. Its single output, the **claim ledger** (`03-log-fakta.md`), is the only source of facts that downstream stages may use.

Canonical rules: `references/historical-sources/hierarki-sumber.md` (source tiers, status labels, the never-invent list, citation format). Read it before the first check in a session.

**Legacy note:** `docs/Fact_Check.md` (Bab 1, EP1–EP6) was written before this skill existed. By its own statement, those facts came from general knowledge because the textbook was unreachable. Its "Fakta umum" rows are **not** `DISAHKAN`. When an episode touches Bab 1, verify against `../digitalproducts/sejarah-spm/content/t4/bab01.html` (notes checked against the textbook) and the textbook pages, then record the result in the episode's ledger.

## Responsibilities

- Break text into atomic, checkable claims.
- Verify each claim against the highest available source tier, citing page or document.
- Assign exactly one status label per claim.
- Detect fabricated or distorted quotations, anachronisms, wrong titles and wrong number formats.
- Separate interpretation and dramatisation from fact, and require the correct wording for each.
- Return fixes. Never silently rewrite creative text.

## Workflow

1. **Extract claims.** Go sentence by sentence. Each date, name, title, number, place, cause–effect statement and quotation becomes its own claim with an ID (`F001`, `F002`, …). A sentence such as "Pada 9 Julai 1963, Perjanjian Malaysia ditandatangani di London" yields 3 claims: date, document name, place.
2. **Classify.** Mark each claim as *fakta* (checkable), *tafsiran* (analysis/evaluation) or *dramatisasi* (creative atmosphere).
3. **Verify facts** in tier order:
   - Tier 1: textbook. Start from `../digitalproducts/sejarah-spm/content/t<T>/bab<NN>.html` to locate the passage, then confirm on the textbook page image for dates, numbers and quotations. Record `BT T<T> hlm. N`.
   - Tiers 2–6 only when the textbook is silent. Record the full citation and access date.
   - If no source can be reached in this session (network limits), the status is `PERLU SEMAKAN`, never `DISAHKAN`.
4. **Check quotations strictly.** A quotation is `DISAHKAN` only if the exact words appear in a cited source. Paraphrases must lose the quotation marks. Translated quotations are labelled "terjemahan" and cite the original.
5. **Check interpretation wording.** `TAFSIRAN` claims must be phrased as interpretation ("Hal ini menunjukkan…", "Buku teks menyifatkan…"), not as bare fact.
6. **Check dramatisation boundaries.** `DRAMATISASI` may add atmosphere and emotion only. It must not introduce a date, name, number, quotation or event. Flag any that do.
7. **Check context errors:** anachronisms (e.g. "Malaysia" before 16 September 1963; "Kota Kinabalu" for 1963 events, when the textbook name is *Jesselton*), wrong titles (Tunku as "Perdana Menteri Malaysia" in 1957 → *Ketua Menteri* / *Perdana Menteri Persekutuan Tanah Melayu*), wrong order of events.
8. **Write the ledger** (template: `ledger-template.md` in this skill folder) and a summary: counts per status, plus a fix list for the author.
9. **Gate decision:** the material passes only when no `PERLU SEMAKAN` or `DITOLAK` claim remains in it.

## Modes

| Mode | Input | Extra checks |
|---|---|---|
| Research | `01-penyelidikan.md` | Source tier of every fact; textbook pages present |
| Script | `output/scripts/<slug>.md` | Every factual sentence carries a ledger ID; no new unverified claim; dramatisation is marked |
| Visual | `sumber-visual.md` | Photo captions: who, what, where, when — each verified; "foto sebenar" vs "ilustrasi" |
| SPM | questions + scheme | Exactly one correct MCQ answer; distractors definitely wrong; scheme answers in the textbook |
| Publishing | title, caption, thumbnail text | Superlatives ("pertama", "satu-satunya", "terbesar") verified; no clickbait claims |

## Output format

The ledger table, using the columns from `ledger-template.md`:

| ID | Dakwaan | Jenis | Status | Sumber | Catatan / pembetulan |
|---|---|---|---|---|---|
| F001 | Perjanjian Malaysia ditandatangani pada 9 Julai 1963 | fakta | DISAHKAN | BT T5 hlm. 103 | — |
| F002 | Ditandatangani di London | fakta | DISAHKAN | BT T5 hlm. 103 | — |
| F003 | "Tunku berkata: 'Inilah hari paling bahagia'" | petikan | DITOLAK | tiada sumber | Buang tanda petik atau cari petikan sebenar |

Followed by:

```markdown
## Ringkasan
DISAHKAN: n | DISAHKAN-SEKUNDER: n | TAFSIRAN: n | DRAMATISASI: n | PERLU SEMAKAN: n | DITOLAK: n
Keputusan gate: LULUS / TIDAK LULUS

## Pembetulan untuk penulis
1. [F003] …
```

## Quality standards

- Zero claims marked `DISAHKAN` without a specific page or document reference.
- Zero quotations accepted without exact source wording.
- Every number checked digit by digit, including currency and units (e.g. *RM150 juta*, *24 kerusi*).
- The ledger states the textbook editions used.

## Examples

**Correct:**
- Script: "Lebih 22 000 orang memenuhi Stadium Merdeka." The textbook (T4 Bab 10) gives **22 ribu tempat duduk**, which is seating capacity, not attendance → `DITOLAK` as worded. Fix: "Stadium Merdeka, yang mempunyai 22 ribu tempat duduk…" (`DISAHKAN`, with page), or cite a source for the attendance figure.
- Script: "Tunku melaungkan 'Merdeka!' tujuh kali." The T4 textbook (Bab 10) records the seven cries on 31 Ogos 1957 → `DISAHKAN` with page. The T5 textbook (hlm. 89 caption) records seven cries again at the *Pengisytiharan Malaysia* (16 September 1963). Same act, two events: the ledger must name which event the script means.
- Dramatisation: "Bayangkan debaran di dada ribuan rakyat…" → `DRAMATISASI`, acceptable. "Bayangkan Tunku, yang tidak tidur semalaman…" → introduces an unverified fact. Reject it, or source it.

**Incorrect:**
- Marking a claim `DISAHKAN` because "it is well known".
- Using Wikipedia as the source for a date.
- Accepting a date that is consistent across ten websites that all copy each other.

## Common mistakes to avoid

- Checking only dates and ignoring titles, places and numbers.
- Checking the research file and then not re-checking the script. New claims enter during writing.
- Confusing similar events: Pemasyhuran Kemerdekaan (31 Ogos 1957) vs Pengisytiharan Malaysia (16 September 1963); Perjanjian Persekutuan Tanah Melayu 1948 vs Perlembagaan 1957.
- Rewriting the author's narrative yourself. Return fixes. The scriptwriter owns the wording.
- Letting a `PERLU SEMAKAN` claim through because the deadline is near.
