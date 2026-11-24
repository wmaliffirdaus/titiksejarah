# TIPS SPM #1 – Production Sheet: "Macam Mana Nak Belajar Sejarah dalam Masa Singkat?"

**Video:** `output/T01_Tips_Belajar_Sejarah_Masa_Singkat.mp4` · **Cover:** `output/covers/T01_Tips_Belajar_Sejarah_Masa_Singkat_cover.jpg`
**Subtitles:** `output/subtitles/T01_Tips_Belajar_Sejarah_Masa_Singkat.srt` · **Storyboard:** `docs/storyboard/EPtips01_storyboard.md`
**Voice:** Asyraf (ElevenLabs Multilingual v2), santai delivery at normal pace (no extra time-stretch) · **Length:** 59.5 s (max 60) · 1080×1920 · −14.8 LUFS / −1.6 dBTP (QC ✅)
**Source file:** `episodes/eptips01.js` · build: `TS_TTS=eleven node engine/build.mjs tips01` (voice now cached, re-renders cost 0 credits)

## 0. Format decisions
- **Type:** a standalone study-skills video (not a textbook subtopic), so it does not change the Chapter 3 order.
- **Look:** the established Titik Sejarah notebook look in the brand palette only (navy / gold / red / cream). A notebook fits a
  study-tips topic, and the off-palette documentary theme was not used (CLAUDE.md brand rule).
- **Tone:** santai, "korang", short sentences, as requested. The style guide's serious documentary mood is for history storytelling.
- **Examples:** every technique uses a Form 4 **Bab 1** example the channel has already covered (ciri-ciri negara bangsa,
  Pembesar Empat Lipatan, Hukum Kanun Melaka), so the facts are textbook-safe.

## 0b. Pace (revised after user feedback "terlalu laju")
- First cut: ElevenLabs speed 1.08 × local time-stretch 1.10 ≈ **1.19×** natural speed, 0.14 s pauses → 52.5 s, felt rushed.
- Now: time-stretch removed (`tempo: 1.0`, ≈1.08× natural, within the style guide's 1.0–1.05× range plus the voice's own
  setting) and longer pauses (0.32 s before each scene, 0.26 s between lines) → 59.5 s. Re-render cost **0 credits** (cached voice).
- Slowing further would push the video over 60 s; the next step would be to split it into two parts (techniques 1–2 / 3–4 + routine).

## 1. Script (Bahasa Melayu)

| Time | Section | Line |
|---|---|---|
| 0.05 | Hook (0–3 s) | Baca nota berjam-jam… tapi masuk dewan, otak **kosong**? |
| 4.7 | Why | Kajian dapati, baca semula dan **highlight** antara cara paling **kurang berkesan**. |
| 10.1 | Promise | Ni **empat teknik** yang jimat masa. |
| 12.6 | Teknik 1 | Satu, **Active Recall**. Tutup buku, tanya diri: apa ciri-ciri **negara bangsa** Melaka? Jawab dulu, baru semak. |
| 21.5 | Teknik 2 | Dua, **Blurting**. Atas kertas kosong, tulis semua pasal **Pembesar Empat Lipatan**. Semak nota, tambah yang tertinggal guna **pen merah**. |
| 32.2 | Teknik 3 | Tiga, **Teknik Feynman**. Terangkan **Hukum Kanun Melaka** macam ajar adik. Tersekat? Situlah yang belum faham. |
| 39.4 | Teknik 4 | Empat, **Spaced Repetition**. Ulang topik sama hari **1**, **3** dan **7**. Sikit-sikit, tapi melekat lama. |
| 48.1 | Rutin | Rutin harian: **25 minit**, satu subtopik. Baca, blurting, semak, terangkan. Esok, ulang. |
| 55.4 | Closing card | Teknik mana korang nak cuba dulu malam ni? Komen kat bawah! |

On screen the routine is broken down: **10 min BACA · 5 min BLURTING · 5 min SEMAK (pen merah) · 5 min TERANGKAN (Feynman) · Esok: ulang ➜ hari 1 · 3 · 7.**

## 2. Retention checklist
- Frame 1 is complete (headline, sad student with book, empty thought bubble, clock); voice starts at 0.05 s; "OTAK KOSONG?" stamp lands at ≈3.2 s.
- No greeting or channel intro; one promise ("4 teknik jimat masa") at 10.1 s, then a numbered payoff every 7–11 s.
- Every keyword pops on the exact spoken word (calendar rings on 1 / 3 / 7, the red-pen line on "pen merah", routine rows on each step).
- Closing card: official DP (unaltered) + TITIK SEJARAH + tagline + "Follow untuk lebih banyak ilmu sejarah." while the closing question is spoken.

## 3. Evidence check (why these techniques, not just memorising tips)

| Claim in the video | Evidence | Verdict |
|---|---|---|
| Rereading and highlighting are among the least effective methods | Dunlosky et al. (2013), *Psychological Science in the Public Interest* 14(1): both rated **low utility** among 10 techniques | ✅ |
| Active Recall works | Same review: **practice testing** = high utility. Roediger & Karpicke (2006), *Psychological Science* 17(3): after 1 week, repeated recall beat repeated study (≈61% vs 40% in the press summary) | ✅ |
| Blurting works | Blurting is free recall on blank paper, the same kind of retrieval test used by Roediger & Karpicke (2006); checking notes afterwards adds feedback | ✅ (form of retrieval practice) |
| Feynman Technique shows what you don't understand | Explaining in simple words is a form of **self-explanation** (moderate utility in Dunlosky et al.); getting stuck reveals gaps | ✅ (worded modestly; no extra claim) |
| Spaced Repetition makes it stick longer | **Distributed practice** = high utility (Dunlosky et al., 2013). Days 1 · 3 · 7 is an example schedule, not a fixed rule | ✅ |

Textbook examples used: ciri-ciri negara bangsa (1.2), Pembesar Empat Lipatan: Bendahara, Penghulu Bendahari, Temenggung, Laksamana (1.3),
Hukum Kanun Melaka (1.3).

**References**
- Dunlosky, J. et al. (2013). Improving Students' Learning With Effective Learning Techniques. https://www.aft.org/ae/fall2013/dunlosky (teacher-friendly summary)
- Roediger, H. L. & Karpicke, J. D. (2006). Test-Enhanced Learning. https://pubmed.ncbi.nlm.nih.gov/16507066/

## 4. Things to check by ear before posting
- English terms (**Active Recall, Blurting, Spaced Repetition, highlight**) are read by the Malay voice. "Feynman" is respelled
  "Fainmen" for the voice; the subtitle keeps the correct spelling. If any term sounds off, change only that line's `say` text
  (only that line costs credits).
