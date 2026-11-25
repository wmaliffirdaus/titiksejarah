# Titik Sejarah, aplikasi mudah alih

Aplikasi ulang kaji **Sejarah KSSM Tingkatan 4 & 5** untuk calon SPM.
*Kenali sejarah, fahami masa kini.*

React Native + Expo SDK 58 · TypeScript · Expo Router · AsyncStorage. Tiada akaun diperlukan; semua data disimpan dalam peranti.

---

## 1. Install on an Android phone (no computer needed)

Every push to the repository builds an APK on GitHub Actions (`.github/workflows/android-apk.yml`) and publishes it as
the latest GitHub release. The newest build is always at:

https://github.com/wmaliffirdaus/titiksejarah/releases/latest/download/TitikSejarah.apk

Open the link on the phone (signed in to GitHub, because the repository is private), open the download and allow
"Install unknown apps" when Android asks. Installing a newer APK over the old one keeps all progress. Raise `version`
and `android.versionCode` in `app.json` for each release. Inside the app, Profil > Muat turun versi terkini opens the
releases page.

For development on a computer, `npm install` then `npx expo start` and scan the QR code with Expo Go (SDK 58).

Useful scripts:

| Command | What it does |
|---|---|
| `npm start` | Start the dev server (QR code for Expo Go) |
| `npm run web` | Preview in a browser |
| `npm test` | Unit tests: content integrity, quiz engine, streaks, search, storage |
| `npm run typecheck` | TypeScript strict check |

## 2. Features

| Screen | What it does |
|---|---|
| **Utama** (Home) | Greeting, "continue from here" card, today's goal, daily challenge, resume an unfinished paper, a fact from the notes, both forms, recently read |
| **Nota** | Table of contents for T4 and T5, search across all notes, shortcuts to the timeline, glossary and flashcards |
| **Bab** (chapter) | Subtopics, chapter quiz, flashcards, chapter summary, key dates and the SPM focus checklist |
| **Baca** (reader) | Note text with tables, callouts and timelines, text size, bookmark, mark as read, previous and next, subtopic quiz |
| **Latihan** | SPM formats (Kertas 1 papers, Kertas 2 struktur, esei, KBAT), quick quizzes, retry mistakes, saved questions, quiz by chapter |
| **Kertas 1 penuh** | 40 questions in 60 minutes with an OMR-style answer sheet; resumes after leaving the app; auto-submits when time runs out; results by chapter and difficulty with next focus areas; review with the scheme explanation and textbook page |
| **Kertas 2** | Source-based struktur and esei questions; open the scheme per part, tick points covered, KBAT essays marked with the Aras 1 to 4 rubric; marks are saved |
| **Kad imbas** | Index-card flashcards for terms, people and dates per chapter |
| **Garis masa** | All 218 key dates from every chapter in order, grouped by era |
| **Glosari** | All terms and people, A to Z, searchable |
| **Kemajuan** | Syllabus progress, ledger of totals, study streak, quiz score chart, Kertas 1 history, progress by chapter, quiz history |
| **Profil** | Name, form, daily goal, quiz length, text size, shuffle options, daily reminder, backup and restore, latest version link, reset |

Backup and restore: Profil > Buat salinan data shares a text code (via WhatsApp, Notes, Drive). Pasting it into
Pulihkan daripada salinan restores everything, for example after reinstalling or on a new phone.

## 3. Content status (read this before publishing)

Every note, question and SPM item carries a source label that is shown in the app:

- **Nota Titik Sejarah** (`source: 'nota'`): written from the Titik Sejarah SPM revision notes (Google Drive), which
  summarise the KSSM textbook. All 20 chapters (T4 and T5, Bab 1 to 10) have notes, quiz questions, flashcards,
  a summary and the SPM focus checklist.
- **Bank Soalan Titik Sejarah** (`source: 'bank'`): transcribed from the Bank Soalan PDFs in Drive with their
  Skema Jawapan Cadangan. Every Kertas 1 set in Drive is imported: Tingkatan 4 sets 1 to 10 and Format Penuh
  sets 1 to 10 (20 papers, 800 questions, each with its skema explanation, subtopic, level and textbook page).
  Every Kertas 2 set is imported too: Tingkatan 4 sets 1 to 10 and Format Penuh sets 1 to 10 (180 questions:
  80 struktur, 100 esei, 180 KBAT parts, each with its full skema). Kertas 1 text sets live in
  `src/data/papers/sets/` (compact format in `papers/parse.ts`, register with `node scripts/gen-k1.mjs`).
- Chapter quiz questions are original questions written from the notes. None of the content is past-year or
  predicted SPM material.

## 4. Project structure

```
mobile/
├─ app.json, eas.json            App + build config (package: com.titiksejarah.app)
├─ assets/                       Icon, adaptive icon, splash, brand logo (official DP, unaltered)
├─ src/
│  ├─ app/                       Screens (Expo Router: every file is a route)
│  │  ├─ _layout.tsx             Root: state provider, loading gate, stack
│  │  ├─ (tabs)/                 Bottom tabs: index (Utama), nota, latihan, kemajuan, profil
│  │  ├─ bab/[chapterId].tsx     Chapter page
│  │  ├─ baca/[subtopicId].tsx   Note reader
│  │  ├─ kuiz/[key].tsx          Quiz player + results
│  │  ├─ spm/…                   SPM hub, category list, item view
│  │  ├─ simpanan.tsx, tentang.tsx, selamat-datang.tsx
│  ├─ components/                UI kit (ui.tsx), layout, NoteBlocks, charts, ChapterCard
│  ├─ constants/theme.ts         Brand tokens (navy / gold / red / cream only)
│  ├─ app/kad/                   Flashcards: deck picker + flashcard player
│  ├─ app/kertas/                Kertas 1 papers: list + timed paper, results and review
│  ├─ app/garis-masa.tsx, glosari.tsx   All-chapter timeline and glossary
│  ├─ data/                      Content: syllabus, packs/ (one file per chapter), papers/ (Kertas 1), k2/ (Kertas 2), notes/, quiz/, extras, spm.ts
│  ├─ hooks/                     useBookmark, useFontScale, useQuizContext
│  ├─ store/                     AppProvider (AsyncStorage), reducer, selectors
│  ├─ types/                     Content + state types
│  └─ utils/                     quiz engine, dates/streaks, search, seeded random, reminders
├─ scripts/gen-packs.mjs         Regenerates src/data/packs/index.ts
└─ tests/                        Unit tests (logic + content integrity)
```

> Note: the note reader lives at `/baca/…`, not `/nota/…`. A stack route under the same path as the `nota` tab
> made the navigator loop ("Maximum update depth exceeded"). Keep stack routes off tab paths.

## 5. Adding content (no UI changes needed)

Each chapter is one **chapter pack**: `src/data/packs/t4-b2.ts`, `t5-b10.ts`, … (type in `pack.ts`).

1. Copy an existing pack and change `id` to the chapter id (e.g. `t4-b2`).
2. `subtopics`: `code`, `title`, `summary`, `keywords` (for search) and `md`, the note text in a small Markdown dialect:
   - `## Heading`, plain paragraphs, `- bullets`, `1. numbered`, `**bold**`
   - tables: `| Header | Header |` then `| cell | cell |` rows
   - timeline: `@ 1946 | Malayan Union diperkenalkan`
   - callouts: `> [definisi: Istilah] text`, also `info`, `ingat`, `iktibar`, `tip`
3. `questions`: `[code, prompt, [A, B, C, D], answerIndex, explanation]`; add a 6th element `1` for KBAT.
4. `terms`, `people`, `dates` (each `[front, back]`) feed the flashcards and the chapter timeline;
   `focus` is the SPM checklist; `rumusan` the chapter summary.
5. Run `node scripts/gen-packs.mjs` (registers the pack), then `npx tsc --noEmit` and `npm test`.
   The content tests catch broken Markdown, duplicate IDs, bad answer indexes and so on.
6. SPM items: add to `spmItems` in `src/data/spm.ts`. Use `status: 'contoh'` unless the item is verified practice material.


**Kertas 1 paper** (`src/data/papers/`, format documented in `paper.ts`): one file per set with 40 questions. Each
question has the text (`s`, with `> ` boxes, `| ` table rows and I to IV or P to S statements on their own lines),
options (`o`, use `a | b` for pairing questions), answer index (`a`), the scheme explanation (`e`), chapter (`c`),
subtopic code (`t`), difficulty 1 to 3 (`lv`) and textbook page (`p`). Register it in `papers/index.ts` and add its
answer key to `tests/papers.test.ts`, which checks it against the scheme.

**Kertas 2 set** (`src/data/k2/sets/`): one text file per set in the compact format described in `k2/parse.ts`
(`SET`, `Q` and `P` lines, stimulus lines, `- ` answer points; flag `K` marks a KBAT part, `R` a KBAT essay judged by
the Aras rubric). Run `node scripts/gen-k2.mjs` to register it, then `npm test`.

## 6. Building for Google Play

Expo Go is for development only. For a real install or the Play Store, use EAS Build (cloud; no Android Studio needed):

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview      # installable .apk for testing on phones
eas build -p android --profile production   # .aab for the Play Store
```

Before each release, raise `version` and `android.versionCode` in `app.json`.
Without a computer: pushing to the repo runs `.github/workflows/android-apk.yml`, which builds an installable APK and
publishes it as a GitHub release (`apk-build-N`).
Docs: <https://docs.expo.dev/build/setup/> · <https://docs.expo.dev/submit/android/>

## 7. Design rules

Brand palette only: navy `#172C63`, gold `#F5C928`, heritage red `#C93436`, cream `#F3EBDD` (plus white and black).
Cream page with white cards that lift slightly off it (navy-tinted shadow), soft pill controls, a floating navy tab
bar whose current tab opens into a gold pill, small tinted icon tiles on list rows, navy hero cards, quick-action
tiles, a week strip of day capsules and a tick ring (one tick per question) for scores. Serif headings and red serif
numerals keep the heritage feel; gold is the accent and progress colour. Two quiet gold circles on hero cards nod to
the name "titik" (dot).
Labels are sentence case. UI text follows the unslop rules: no dashes as punctuation, no arrows, no exclamation
filler, plain words. Headings use the system serif font and body text the system sans-serif.
