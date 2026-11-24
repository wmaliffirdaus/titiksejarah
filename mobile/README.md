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
| **Profil** | Nickname, Tingkatan, daily goal, questions per quiz, text size, shuffle answers, reset progress / delete all data, About |

## 3. Content status — read this before publishing

Every note, question and SPM item carries a source label that is shown in the app:

- **Nota Titik Sejarah** (`source: 'nota'`): transcribed from the Titik Sejarah SPM revision notes, which summarise the KSSM textbook.
  These are currently available for **T4 Bab 1** and **T5 Bab 1** (all subtopics), plus 31 practice questions written from those notes.
- **Kandungan contoh** (`source: 'contoh'`): the 6 SPM Kertas 2 / KBAT items are *sample* questions showing the format.
  Their answer points come from the notes, but the questions are **not** past-year SPM questions.
- **All 20 chapter titles** come from the note set. The **T4 Bab 3** subtopic list is in place, but its notes are not yet.
  The other chapters show "Nota akan ditambah".

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
│  ├─ data/                      Content: syllabus, notes/, quiz/, spm.ts, featured.ts
│  ├─ hooks/                     useBookmark, useFontScale, useQuizContext
│  ├─ store/                     AppProvider (AsyncStorage), reducer, selectors
│  ├─ types/                     Content + state types
│  └─ utils/                     quiz engine, dates/streaks, search, seeded random
└─ tests/logic.test.ts           Unit tests
```

> Note: the note reader lives at `/baca/…`, not `/nota/…`. A stack route under the same path as the `nota` tab
> made the navigator loop ("Maximum update depth exceeded"). Keep stack routes off tab paths.

## 5. Adding content (no UI changes needed)

1. **Subtopics**: fill `subtopics` for the chapter in `src/data/syllabus.ts`.
2. **Notes**: create `src/data/notes/t4-bab2.ts`, exporting a `SubtopicNote[]` (blocks: `heading`, `para`, `list`, `table`,
   `callout` (definisi/info/ingat/iktibar/tip), `timeline`; `**bold**` works in text). Register it in `src/data/notes/index.ts`.
3. **Questions**: create `src/data/quiz/t4-bab2.ts`, exporting a `Question[]`. Register it in `src/data/quiz/index.ts`.
   Chapter, subtopic, Tingkatan, daily, KBAT (`kbat: true`) and Kertas 1 quizzes pick them up automatically.
4. **SPM items**: add to `spmItems` in `src/data/spm.ts`. Use `status: 'contoh'` unless the item is verified practice material.
5. Run `npm test`. The content-integrity tests catch duplicate IDs, wrong chapter links, bad answer indexes and so on.

## 6. Building for Google Play

Expo Go is for development only. For a real install or the Play Store, use EAS Build (cloud; no Android Studio needed):

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview      # installable .apk for testing on phones
eas build -p android --profile production   # .aab for the Play Store
```

Before each release, raise `version` and `android.versionCode` in `app.json`.
Docs: <https://docs.expo.dev/build/setup/> · <https://docs.expo.dev/submit/android/>

## 7. Design rules

Brand palette only: navy `#172C63`, gold `#F5C928`, heritage red `#C93436`, cream `#F3EBDD` (+ white/black).
Tints are opacity variants of these. Correct answers are shown in **gold**, wrong ones in **red** (there is no green).
Headings use the system serif font and body text the system sans-serif, so no font packages are needed.
