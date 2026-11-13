# Retention Analysis – EP1 & the new short-form format

## 1. What the EP1 numbers say

| Metric | EP1 | What it means |
|---|---|---|
| Views | 3,113 (95.6% For You) | TikTok *did* push the video, so the topic and account are fine |
| Likes | 418 = **13.4% of views** | Very high (around 3–5% is common). People who actually watched liked it: **the content is not the problem** |
| Saves | 47 (1.5%) | Good study value for those who stayed |
| Average watch time | **4.6 s of 71 s (7%)** | The video loses people almost immediately |
| Watched full video | 0.69% | Few reached the end |
| Drop-off point | **0:01** | The first second decides everything |

**Conclusion:** EP1 has a *first-second problem*, not a content problem.

## 2. Diagnosis – what viewers saw in the first second

Frames pulled from the EP1 file:

| Time | On screen | Audio |
|---|---|---|
| 0.0 s | **Blank notebook page** | Soft jingle |
| 0.5 s | **Still blank** | "Betul ke…" (voice started at 0.4 s) |
| 1.0 s | Headline half-written, palace half-drawn | "…kerajaan Melayu…" |
| 2.0 s | First complete picture | "…sudah mempunyai…" |

Root causes:
1. **Empty first frame.** Everything used "draw-on" animation from nothing. On the For You page the video starts at frame 1, not at the cover, so viewers saw an empty page and scrolled. The cover only appears in the profile grid.
2. **Slow, long opening line:** a 5.6-second question in a calm voice, with the "answer" only at 6 s.
3. **Classroom interruption at 0:10:** a channel/chapter title card ("Ini Titik Sejarah! Bab 1…").
4. **An overview, not a story.** 71 s describing what the chapter contains, with no surprising fact to pay off the hook.
5. **Narration pace:** 13.75 characters/s with a cautious delivery.

## 3. What changed for the new episodes (built into the engine)

| Rule | How it is implemented |
|---|---|
| **Frame 1 is complete** | Hook headline and visuals are fully on screen at 0:00 (no draw-on in the hook); a slow camera push-in adds motion |
| **Voice from 0.05 s** | No opening jingle; a short whoosh, then the hook line immediately |
| **Hook ≤ 3 s, curiosity-first** | A short question or a contrast ("Siapa lebih dulu? Eropah… atau Alam Melayu?") |
| **No channel intro, no title card** | Branding moves to the final card only |
| **Visual change every 3–5 s** | A fast "punch" cut (0.22 s) between scenes, plus element pops on keywords within scenes |
| **Short spoken sentences** | One idea per sentence, conversational Malay ("dah", "Jadi…", "Tapi…") with textbook-accurate facts |
| **35–50 s per episode** | Long subtopics are split into several episodes (plan below) |
| **Memorable ending** | A curiosity question spoken over the brand card, answered in the next episode (an episode-to-episode chain) |
| **Strategic sound** | Swish on cuts, stamp on dates and numbers, ding on ticks and answers; music about 23 dB under the voice |

### Voice (Asyraf, ElevenLabs Multilingual v2, Malaysian accent kept)
- Speed: ElevenLabs speed 1.08 plus a 1.08 time-stretch → **15.4 chars/s = 1.12× the previous narration** (target 1.10–1.15×). Most of the speed-up comes from the model's own speed setting, so pronunciation stays clean.
- Energy: style 0.55 (was 0.35) and stability 0.28 (was 0.35), for a more expressive, storyteller delivery.
- Emphasis: short sentences, "!" and "?" placement, and "…" for dramatic pauses guide the intonation. Keywords are also highlighted on screen.
- Accent: Multilingual v2 kept, because v3 measurably drifted to an Indonesian final "-a".

## 4. Next episode – EP2 "Siapa Lebih Dulu?" (1.1 Part A)

`output/02_Bab1_1.1A_Siapa_Lebih_Dulu.mp4` · cover `output/covers/02_Bab1_1.1A_Siapa_Lebih_Dulu_cover.jpg`

| Measure | EP1 | **EP2** |
|---|---|---|
| Frame 1 | Blank page | **Full hook visual + headline** |
| First spoken word | 0.4 s | **0.05 s** |
| Hook line | 5.6 s, statement-style | **≈3.5 s question with contrast** |
| Length | 71 s | **46.6 s** |
| Narration pace | 13.75 chars/s | **15.4 chars/s (1.12×)** |
| Scene changes | ~10 s apart | **every 3–7 s, with pops in between** |
| Ending | 4.6 s silent brand card | **Teaser question spoken over the brand card** |

**Script (storytelling)**
1. "Siapa lebih dulu ada negara yang tersusun? Eropah… atau Alam Melayu?"
2. "Di Eropah, konsep negara bangsa moden dikaitkan dengan Perjanjian Westphalia, tahun 1648."
3. "Tapi di Alam Melayu? Funan dah wujud sejak abad pertama Masihi!"
4. "Maksudnya, lebih seribu tahun lebih awal!"
5. "Jadi, apa yang buat sebuah kerajaan layak dipanggil negara bangsa?"
6. "Ada pemerintah yang berdaulat. Ada wilayah. Ada rakyat."
7. "Ada sistem pentadbiran, undang-undang, dan hubungan luar dengan China dan India."
8. "Dan semua ciri ini… dah ada pada kerajaan awal Alam Melayu!"
9. "Soalan: kerajaan mana yang ukir amaran kepada penderhaka pada batu bersurat? Jawapannya, episod seterusnya!" *(answer: Srivijaya, Kota Kapur inscription, 686 M → EP3)*

**Quality check (the 8 questions)**

| # | Question | Verdict |
|---|---|---|
| 1 | Would someone stop scrolling within 2 s? | ✅ Frame 1 shows a bold question + Europe-vs-Malay contrast; voice starts at 0.05 s |
| 2 | Does the opening create curiosity? | ✅ "Siapa lebih dulu?" invites a guess; the answer arrives at 12 s |
| 3 | Does the voice sound human and energetic? | ✅ Asyraf with higher expressiveness. You are the final judge by ear |
| 4 | Is the narration slightly faster than before? | ✅ 1.12× (measured) |
| 5 | Is every sentence necessary? | ✅ 9 sentences: hook, 3 facts, 1 bridge question, 3 feature lines, teaser |
| 6 | Are the facts accurate? | ✅ Westphalia 1648 (modern European concept), Funan 1st century CE, ">1,000 years earlier", features of a nation-state, Kota Kapur warning to rebels (686 M) for the teaser |
| 7 | Does it keep visual interest? | ✅ Scene cut every 3–7 s, camera motion, pops and stamps on keywords |
| 8 | Is there a reason to watch to the end? | ✅ The payoff ("1,000+ tahun") at 15 s, the "SUDAH ADA!" stamp, then a quiz question |

## 5. New series plan (35–50 s each, every episode ends with a question answered in the next)

| EP | Subtopic | Title / hook | Ending question (answered next) |
|---|---|---|---|
| 1 | Intro | *(posted)* | – |
| **2** | 1.1 A | **Siapa lebih dulu? Eropah vs Alam Melayu** ✅ | Kerajaan mana ukir amaran pada batu? |
| 3 | 1.1 B | Batu yang memberi amaran – **Srivijaya** (Kedukan Bukit 683 M, Kota Kapur 686 M, Selat Melaka, I-Ching) | Kerajaan tertua di Tanah Melayu ada di negeri mana? |
| 4 | 1.1 C | Rahsia **Lembah Bujang** – Kedah Tua & Gangga Nagara | Bahasa siapa serumpun dengan Melayu di Vietnam? |
| 5 | 1.1 D | Jiran serumpun – **Funan & Champa** (Oc Eo, 192 M, bahasa Cham) | Raja mana dianggap dewa? |
| 6 | 1.1 E | Raja dianggap dewa? – **Angkor & Majapahit** (dewaraja, Angkor Wat, Sumpah Palapa) | Bagaimana kampung kecil jadi empayar? |
| 7 | 1.2 A | Kampung kecil jadi empayar – **wilayah pengaruh & kedaulatan** (daulat, derhaka, Siam dipatahkan) | Kenapa rakyat tak boleh pakai kuning? |
| 8 | 1.2 B | Kenapa rakyat tak boleh pakai kuning? – **lambang kebesaran, undang-undang, rakyat, kerajaan** | Siapa orang paling berkuasa selepas Sultan? |
| 9 | 1.3 A | Orang kanan Sultan – **Pembesar Empat Lipatan, Bendahara (Tun Perak), Penghulu Bendahari** | Siapa "polis" zaman Melaka? |
| 10 | 1.3 B | Polis & tentera laut Melaka – **Temenggung, Laksamana (Hang Tuah), Syahbandar** | Siapa "raja di laut"? |
| 11 | 1.3 C | Undang-undang Melaka – **Hukum Kanun & Undang-Undang Laut** (nakhoda = raja di laut) | Boleh tak rakyat lawan raja zalim? |
| 12 | 1.4 | Raja zalim? Rakyat derhaka? – **waadat & timbal balik** | (quiz teaser) |
| 13 | Revision | **Kuiz pantas Bab 1** – 5 soalan dalam 45 s | Next chapter teaser |

The existing long versions (3–5 min) remain useful as **full-lesson revision videos** (for example, YouTube or a pinned "full lesson" playlist).

## 6. What to watch in TikTok analytics for EP2

| Metric | EP1 | Target for EP2 |
|---|---|---|
| Retention at 0:03 | ~10% | **≥ 50%** |
| Average watch time | 4.6 s | **≥ 15 s** (a third of the video) |
| Watched full video | 0.69% | **≥ 10%** |
| Drop-off point | 0:01 | after the "1,000+ TAHUN" payoff (~15 s) |

If 0:03 retention is still low, the next lever is the **first line itself**: test an even shorter opener (e.g. "Eropah 1648. Melayu? Lebih awal!") or a 0.5 s "punch" zoom on the VS badge.
