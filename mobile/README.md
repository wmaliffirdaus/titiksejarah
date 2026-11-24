# Titik Sejarah — Aplikasi Mudah Alih

Aplikasi ulang kaji **Sejarah KSSM Tingkatan 4 & 5** untuk calon SPM.
*Kenali sejarah, fahami masa kini.*

React Native + Expo SDK 58 · TypeScript · Expo Router · AsyncStorage. Tiada akaun diperlukan; semua data disimpan dalam peranti.

---

## 1. Run it on your Android phone (Expo Go)

1. Install **Expo Go** from the Google Play Store (it must support **SDK 58**; update it if it says the project is incompatible).
2. On your computer (Node.js 20+):
   ```bash
   cd mobile
   npm install
   npx expo start
   ```
3. Scan the QR code shown in the terminal with Expo Go. Phone and computer must be on the same Wi-Fi.
   If your network blocks this, use `npx expo start --tunnel`.

Useful scripts:

| Command | What it does |
|---|---|
| `npm start` | Start the dev server (QR code for Expo Go) |
| `npm run web` | Preview in a browser |
| `npm test` | Unit tests: content integrity, quiz engine, streaks, search, storage |
| `npm run typecheck` | TypeScript strict check |

## 2. Features

| Tab / screen | What works |
|---|---|
| **Utama** (Home) | Greeting, daily recommendation (next unread subtopic → weakest quiz → daily challenge), daily goal, daily challenge, T4/T5 quick access, progress snapshot, recently studied, "Tahukah anda?" fact, shortcuts |
| **Nota** | T4/T5 switch, search across chapters/subtopics/note text, chapter list with progress → chapter page → note reader (text size, bookmark, mark as read, prev/next, subtopic quiz) |
| **Latihan** | Daily challenge, Tingkatan quizzes, KBAT, retry mistakes, saved questions, chapter and subtopic quizzes |
| **Latihan SPM** | Kertas 1 (objective quiz), Kertas 2 Struktur, Kertas 2 Esei, KBAT, with an answer-scheme reveal and self-marking |
| **Kuiz** | 4 options, instant feedback, explanations, score, progress bar, results, answer review, retry, retry mistakes, save a question |
| **Kemajuan** | Overall/T4/T5 progress, chapters completed, subtopics read, quizzes attempted, average/best score, streak + 7-day strip, score chart, per-chapter progress, quiz history |
| **Simpanan** | Saved notes, questions (incl. SPM items) and topics; remove; practise saved questions |
| **Bab** (chapter page) | Subtopic list, chapter quiz, **Rumusan bab**, **Tarikh penting** timeline, tickable **Fokus Ulang Kaji SPM** checklist |
| **Kad Imbas** (flashcards) | Per chapter: key terms, people and dates; flip card, "Saya tahu" / "Belum tahu" (re-queued), "Belum dikuasai" mode, progress per chapter |
| **Profil** | Nickname, Tingkatan, daily goal, questions per quiz, text size, shuffle answers, **daily study reminder** (local notification, choice of time), reset progress / delete all data, About |

## 3. Content status — read this before publishing

Every note, question and SPM item carries a source label that is shown in the app:

- **Nota Titik Sejarah** (`source: 'nota'`): written from the Titik Sejarah SPM revision notes (Google Drive), which
  summarise the KSSM textbook. **All 20 chapters (T4 Bab 1–10, T5 Bab 1–10)** now have full subtopic notes, practice
  questions, flashcards (terms, people, dates), a chapter summary and the SPM focus checklist.
- **Kandungan contoh** (`source: 'contoh'`): the 6 SPM Kertas 2 / KBAT items are *sample* questions showing the format.
  Their answer points come from the notes, but the questions are **not** past-year SPM questions.
- Practice MCQs are original questions written from the notes, not past-year SPM questions.
- Next content step: import the Bank Soalan SPM sets (Drive) as verified practice items.

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
│  ├─ data/                      Content: syllabus, packs/ (one file per chapter), notes/, quiz/, extras, spm.ts, featured.ts
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

Brand palette only: navy `#172C63`, gold `#F5C928`, heritage red `#C93436`, cream `#F3EBDD` (+ white/black).
Tints are opacity variants of these. Correct answers are shown in **gold**, wrong ones in **red** (there is no green).
Headings use the system serif font and body text the system sans-serif, so no font packages are needed.
