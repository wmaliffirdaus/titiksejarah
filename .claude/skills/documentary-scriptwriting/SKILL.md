---
name: documentary-scriptwriting
description: Writes timed Bahasa Melayu narration scripts for TitikSejarah episodes (35–60 s TikTok/Shorts, the main format) and long documentaries (6–15 min YouTube) from a verified fact log and a story outline, with a hook, scene blocks, on-screen text, fact IDs and marked dramatisation. Use when asked to "tulis skrip", "skrip dokumentari", "naskhah narasi", "skrip video", "voiceover script", or to revise a script after fact-check or QA feedback.
argument-hint: "[slug atau topik] [dokumentari|pendek] [tempoh]"
---

# Documentary Scriptwriting

Converts verified facts and a story outline into a narration script that a voice actor or ElevenLabs can read and a director can storyboard. The story's *design* (angle, arc, tension) comes from `historical-storytelling`. This skill handles the *writing*: sentences, timing, structure and fact traceability.

Inputs required before writing:
1. `content/tingkatan-<T>/<slug>/03-log-fakta.md` with gate **LULUS**. No log means no script: ask for `historical-fact-check` first.
2. A story outline from `historical-storytelling`. If none exists, run that skill first, or write a brief outline at the top of the script.
3. `02-padanan-kssm.md` for scope, textbook terms and the chapter's iktibar.

Language and voice: `references/brand-guidelines/gaya-bahasa.md` (canonical). Brand tone: `references/brand-guidelines/brand.md`.

## Responsibilities

- Write narration in natural, spoken Bahasa Melayu Malaysia that is accurate and engaging.
- Structure the script into timed scenes that match the target length.
- Tag every factual sentence with its ledger ID; mark dramatisation.
- Supply on-screen text (key terms, dates, names) and visual intent per scene for the director.
- Revise according to fact-check and QA feedback without introducing new facts.

## Workflow

1. **Set the budget.** Project measurement: EP3 used **98 words in 53 s** (about 110 words per minute at the engine's tempo). For a 45–55 s documentary-style episode, plan **85–110 words**, about 8–11 sentences. Long documentaries: about 120–140 words per minute at a moderate pace. The hard limit for episodes is 60 s including the closing card. If the topic doesn't fit, split it into parts (e.g. 1.2 Bahagian 1/2/3).
2. **Pick facts from the ledger only.** List the ledger IDs you will use per scene before writing prose. If the story needs a fact not in the ledger, stop and request verification. Do not write it "temporarily".
3. **Write the hook** (see the hook rules below).
4. **Write the scenes** following the outline. Each scene: one main idea, 2–6 sentences, a visual intent and its fact IDs.
5. **Write the conclusion:** answer the question opened by the hook, give the significance or iktibar (from the chapter's *Elemen Kewarganegaraan*), then end with the **closing question** that is spoken over the brand card and answered in the next episode (series continuity, as in EP2–EP3).
6. **Read-aloud pass.** Read every sentence as speech. Split sentences longer than about 20 words. Remove tongue-twisters and consecutive identical sentence openings. Make sure names are pronounceable; add pronunciation notes for `voiceover-production`.
7. **Trace pass.** Every factual sentence ends with `[F###]`. Dramatisation lines start with `[DRAMATISASI]`. Interpretation lines carry `[TAFSIRAN F###]`.
8. **Time it.** Count words per scene and estimate durations; total within ±10% of the target.
9. **Engine-ready lines:** write one sentence per line exactly as it will appear in the episode's `lines` array: `**keyword**` for emphasis (gold on screen), numbers as digits (the engine spells them in Malay), no ledger tags inside the line text (keep tags in the script file's margin column).
10. Save to `output/scripts/<slug>.md` using `script-template.md` from this folder. Status `DRAF`, then send to `fact-checker` (script mode).

## Hook rules

| Format | Hook length | Must contain | Must not contain |
|---|---|---|---|
| Episode (35–60 s) | Spoken within the first 3 s; voice starts at about 0.2 s; frame 1 already shows the hook | A surprising true fact, a question, or a contrast that the episode then answers | Greeting, channel intro, "Hari ini kita akan belajar…", a slow overview line |
| Documentary | ≤ 20 s | A specific moment (date, place, person) or an open question the video answers | Generic "Sejarah sangat penting…" |

Strong hook patterns (each must be supported by `DISAHKAN` claims):
- **Moment drop:** "Malaysia sepatutnya lahir pada 31 Ogos 1963. Tetapi tarikh itu terpaksa ditangguhkan." [F0xx, F0yy]
- **Question:** "Kenapa Perjanjian Malaysia ditandatangani di London, bukan di Kuala Lumpur?"
- **Contrast:** "Dalam satu dekad, Tanah Melayu bertukar daripada tanah jajahan kepada sebuah negara merdeka."

## Writing rules

- **Short sentences, active voice, concrete nouns.** "Suruhanjaya Cobbold melawat 35 pusat di Sarawak dan Sabah", not "Pelbagai usaha telah dijalankan oleh pihak berkenaan".
- **One number per sentence** at most; round only if the source rounds.
- **Name people with their textbook title** on first mention.
- **Vary sentence openings.** Do not start three sentences in a row with "Pada…" or "Selain itu…".
- **Signpost causes and effects** ("Akibatnya…", "Inilah sebabnya…"). Students need the logic, not a list.
- **Use the textbook's key terms** (e.g. *serampang dua mata*, *kontrak sosial*) and show them on screen.
- **Use no banned phrases** from `gaya-bahasa.md`.
- Dramatisation stays sensory and emotional ("Bayangkan suasana di bilik mesyuarat itu…") and adds no new facts.

## Output format

See `script-template.md` (same folder). Each scene block:

```markdown
### Babak 3 — Misi PBB (00:58–01:25, ~65 patah perkataan)
**Narasi:**
Indonesia membantah. [F014] Maka Setiausaha Agung PBB, U Thant, menghantar satu misi untuk meninjau pandangan rakyat Sarawak dan Sabah. [F015] Laporannya hanya siap pada 14 September 1963 [F017] — dua minggu selepas tarikh asal pembentukan Malaysia. [TAFSIRAN F016,F017]
**Teks skrin:** "UNMM — Misi PBB 1963" · "14 September 1963"
**Niat visual:** Foto arkib delegasi PBB / dokumen laporan; peta Sarawak & Sabah.
**Sebutan:** U Thant = "u tan"
```

## Quality standards

- 100% of factual sentences carry a ledger ID. Zero facts are absent from the ledger.
- Hook within the limits above; the conclusion answers the hook.
- Word count within ±10% of the budget.
- No sentence over about 25 words; no banned phrases.
- Textbook terms are used and spelt as in the textbook.

## Example of correct usage

Request: "Tulis skrip episod (≈50 s) tentang kenapa Malaysia lahir 16 September, bukan 31 Ogos."
→ Check `03-log-fakta.md` for: original date 31 Ogos 1963 (Perjanjian Malaysia), Indonesia's objection at the UN, UNMM set up on 12 Ogos 1963, report finished 14 September 1963, proclamation 16 September 1963 (BT T5 hlm. 103–104). Write about 95 words: hook (date contradiction), 3 beats (agreement → objection and UN mission → report and proclamation), takeaway, then a closing question for the next episode (e.g. who opposed the formation and why), without saying anything "will come out" in SPM.

## Common mistakes to avoid

- Writing first and fact-checking later. Facts come from the ledger, before prose.
- An encyclopaedic tone ("Malaysia telah dibentuk pada…") with no tension or question.
- Overloading: eight dates in 60 seconds. Episodes carry one idea and at most 2–3 numbers.
- Lecture lists instead of story (EP2: 311 s, 0% completion).
- Putting invented dialogue in quotation marks for real people.
- Translating English idioms literally ("membuat keputusan yang besar" is fine; "pada penghujung hari" for "at the end of the day" is not).
- Forgetting on-screen text. Students watch muted.
