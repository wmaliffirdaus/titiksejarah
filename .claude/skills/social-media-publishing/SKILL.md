---
name: social-media-publishing
description: Optimises and packages TitikSejarah videos for TikTok (primary), YouTube Shorts, Instagram Reels and YouTube. Covers series planning in textbook order, hook variants, retention structure, covers, titles, captions, hashtags, pinned questions, posting schedule and analytics review, all without clickbait or unverified claims. Use when asked to "buat versi TikTok", "Shorts", "Reels", "kapsyen", "hashtag", "tajuk", "cover", "jadual post", "analitik", "retention", or to publish a finished episode.
argument-hint: "[slug] [rancang|pakej|jadual|analitik]"
---

# TikTok and YouTube Shorts Optimisation and Publishing

The goal is reach *and* learning: viewers stop scrolling, watch to the end, and leave with one correct fact and why it matters. Titles, captions, covers and pinned comments are factual claims too, so they pass `historical-fact-check` (publishing mode).

Project evidence to apply, not repeat: `docs/Retention_Analysis_EP1_and_Plan.md` (what lost viewers at 0:01, and the episode rules that followed), `docs/STYLE_GUIDE.md` §6 (retention rules), `docs/TikTok_Publishing_Kit.md` (caption format and history). Platform numbers: `platform-specs.md` (this folder).

## Responsibilities

- Plan the series in KSSM textbook order (one subtopic or part per episode, 35–60 s, each ending with a question answered next time).
- Write 3 hook variants per episode and recommend one (supported by `DISAHKAN` claims).
- Package each episode: cover headline, caption, hashtags, pinned question, and a cross-post version for Shorts/Reels.
- Keep `docs/TikTok_Publishing_Kit.md` up to date (append the new episode's block).
- Read analytics the user shares and turn them into the next experiment.

## Workflow

1. **Precondition:** the episode's QA verdict is `LULUS` and the ledger `03-log-fakta.md` is available. Use no facts outside it.
2. **Series fit:** confirm the episode follows the previous one in textbook order and that its closing question is answered next. Do not repeat earlier episodes except as a bridge.
3. **Hooks:** three options (question / contrast / surprising true fact), with strengths and weaknesses, in the style of `docs/EP03_Production.md` §2. The hook must work on frame 1 with the voice starting at once.
4. **Cover:** produced by `node engine/covers.mjs` from the episode. The headline is at most about 6 words in capitals and sits inside the middle 3:4 area (that part shows in the profile grid). It must be true; no fake "shocked" faces on real people.
5. **Caption** (copy-paste block, same style as the kit):
   - Line 1: the hook question or contrast (with at most 1–2 emoji, as in existing captions).
   - Line 2: what the episode covers + part number + call to save or follow.
   - Hashtags: `#TitikSejarah #SejarahSPM #SejarahTingkatan4` (or `5`) + `#SPM<year>` + 1–2 topic tags (e.g. `#PembentukanMalaysia`). Use 3–6 in total, all relevant.
   - Source line: "Sumber: Buku Teks Sejarah Tingkatan <T> KSSM" (+ image credits if not on screen).
6. **Pinned comment:** a quiz question about the episode (answer in the next episode or in replies).
7. **Fact-check the package:** send cover headline, caption and pinned question to `historical-fact-check` (publishing mode).
8. **Write** `output/videos/<slug>/terbitan.md` and append the caption block to `docs/TikTok_Publishing_Kit.md`. Posting is done by the user.
9. **Schedule:** a consistent cadence; heavier revision content in the months before SPM (check the current year's SPM timetable). Never promise exam outcomes.
10. **Analytics loop:** when the user shares numbers (views, average watch time, retention at 0:03, completion, drop-off point, likes, saves), compare them with the targets in the retention analysis, separate "data shows" from "hypothesis", and propose one change to test. Never invent benchmarks or numbers.

## Output format (`terbitan.md`)

```markdown
# Pakej Terbitan — EP<id> <tajuk>
- Fail: output/<file>.mp4 (<tempoh>) · Cover: output/covers/<file>_cover.jpg
## Hook (3 pilihan → dipilih)
## Tajuk cover
## Kapsyen TikTok (salin-tampal)
## Versi YouTube Shorts / Reels (tajuk + penerangan + hashtag)
## Komen disematkan (soalan kuiz)
## Semakan fakta pakej: LULUS (ID log: F…)
## Jadual: <tarikh, masa>
## Metrik untuk dipantau: pengekalan 0:03, purata masa tonton, % tonton penuh, titik keciciran
```

## Quality standards

- Hook and cover supported by `DISAHKAN` claims; no clickbait the video doesn't deliver.
- Captions error-free (DBP spelling); hashtags relevant; source acknowledged.
- The episode respects 35–60 s and ends with the brand card and a question.

## Example of correct usage

Episode on the delayed formation of Malaysia (T5 5.5). Hooks: (A) "Malaysia sepatutnya lahir 31 Ogos 1963. Kenapa ditangguh?" (B) "16 September 1963 — kenapa bukan 31 Ogos?" (C) "Satu laporan PBB yang mengubah tarikh lahir Malaysia." Choose A: a contradiction that creates a "kenapa?" gap, true per BT T5 hlm. 103–104. Cover: "TARIKH LAHIR MALAYSIA DITANGGUH?". Pinned question: "Apakah nama misi PBB yang meninjau Sarawak dan Sabah pada 1963?"

## Common mistakes to avoid

- A slow or overview-style first line (EP1's 0:01 drop-off).
- Long lecture episodes (EP2 at 311 s had 0% completion). Split instead.
- Exaggerated hooks ("Sejarah yang disorok!"), trending sounds on tragic topics, unrelated trending hashtags.
- A cover that says something the video doesn't prove.
- Posting before QA and the publishing fact-check.
