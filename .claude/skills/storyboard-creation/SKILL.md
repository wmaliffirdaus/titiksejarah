---
name: storyboard-creation
description: Turns an approved TitikSejarah narration script into a scene-by-scene storyboard, encodes it as an engine episode (episodes/ep<id>.js) and builds it, covering visuals (archival photos, maps, timeline), on-screen text, motion, music, SFX, transitions, pacing and the brand closing card. For long 16:9 documentaries it writes a timecoded edit plan instead. Use after a script passes fact-check, or when asked for "storyboard", "papan cerita", "arahan visual", "pelan suntingan", "edit plan", "shot list", "bina episod" or "render video".
argument-hint: "[slug] [storyboard|bina|pelan-suntingan]"
---

# Storyboard and Video Direction

The script says *what is told*. This skill decides *what is seen and heard, and when*, then turns that into a rendered video through the project engine. Visual style comes from `docs/STYLE_GUIDE.md` (historical documentary: archival photos, historical maps, timeline animation, slow push-ins, serious and nostalgic mood). Retention rules come from `docs/Retention_Analysis_EP1_and_Plan.md`. Do not restate them; apply them.

Inputs: the approved script `output/scripts/<slug>.md` (fact-checked) and, when available, `output/videos/<slug>/sumber-visual.md`.
Outputs: `output/storyboards/<slug>.md` (Part A); `episodes/ep<id>.js`, then the engine build (Part B); `output/videos/<slug>/pelan-suntingan.md` for 16:9 long-form only (Part C).

## Responsibilities

- Break the script into scenes and shots whose timing fits narration and the 35–60 s budget.
- Specify per scene: visual, on-screen text, motion, audio, transition.
- Issue the visual requirement list for `visual-source-research`.
- Encode the storyboard into the engine episode format and build, check and iterate.
- Guard visual honesty: labelled illustrations only, and no image used for a different event.

## Workflow

Three parts, in order: **A** storyboard (always) → **B** encode and build with the engine (9:16 episodes) → **C** timecoded edit plan (16:9 long-form only).

## Part A — Storyboard

1. **Structure (short episodes):** 0–3 s hook → 3–10 s context → story → takeaway or reveal → closing question spoken over the brand card. Scene changes every 3–7 s, following story beats.
2. **Frame 1 is complete.** The hook headline and visual are fully on screen at 0:00 (no draw-on), with a slow camera push-in. The voice starts within ~0.2 s. No greeting or channel intro.
3. **Assign visuals by priority:** (1) verified archival photo, artefact or document of *this* event (from `sumber-visual.md`); (2) map with territory, route or pin (engine `S.map`/`S.pin`, Natural Earth data); (3) timeline marker for the year or century; (4) related-context photo, captioned honestly (never presented as the event itself); (5) labelled illustration (`S.illus()`, "ILUSTRASI"); (6) typographic card or stamp for a key term.
4. **On-screen text:** key terms (`**keyword**` in narration becomes a gold highlight), names with titles on first mention, dates, and the central question. Keep text inside the safe zone: main content y≈280–1360 px, captions y≈1370–1500 px, right edge clear for TikTok buttons.
5. **Audio:** music mood per section (cinematic and nostalgic: soft piano, strings, pads, low drums for tension, a swell at reveals), always about **20–25 dB under the voice**. Realistic, subtle SFX (paper, wind, crowd, low hits); no cartoon pops on serious topics. Purposeful short silences before reveals.
6. **Closing card:** official DP unaltered + "TITIK SEJARAH" + tagline + "Follow untuk lebih banyak ilmu sejarah." while the closing question is spoken (engine `S.endCard`).
7. **Visual requirement list:** V01, V02, … each with the ledger IDs it must match, priority (wajib/pilihan) and fallback.

Storyboard table (`output/storyboards/<slug>.md`), using the same fields the engine stores in each scene's `board`:

| Babak (`id`) | Masa | Narasi (`lines`) | `visual` | `text` | `anim` | `music` | Aset (V##) |
|---|---|---|---|---|---|---|---|
| hook | 0–3 s | "Malaysia sepatutnya lahir pada **31 Ogos 1963**…" | Kalendar 31 OGOS 1963, coretan merah | 31 OGOS 1963 → ? | Lengkap pada 0:00; tolak masuk 1.00→1.08 | Tiada sting; hit rendah | — |

## Part B — Encode and build (engine)

1. **Copy the structure of a recent episode** (`episodes/ep03s.js` shows the short-form pattern): `id`, `file`, `title`, `header`, `music`, `voice`, `scenes[]` with `id`, `lines` (the exact approved narration, with `**keyword**` markup), `board` (name, visual, text, anim, music) and `draw(S, { D })`.
2. **Use the engine primitives:** `S.add`, `S.text`, `S.card`, `S.img` (photos from `output/videos/<slug>/aset/`, credited), `S.map` + `S.pin`, `S.arrow`, `S.stamp`, `S.tag` (name tags), `S.illus` (ILUSTRASI label), `S.endCard`; per-scene `cam: [from, to]` for push-ins. Shared helpers are in `episodes/lib.js`.
3. **Quick design check without spending voice credits:** `node engine/build.mjs <id> --stills scenes` (PNG per scene in `build/stills/`). Review frame 1, the safe zones and text legibility.
4. **Build after the voiceover approval gate:** `TS_TTS=eleven node engine/build.mjs <id>`. This writes the MP4, SRT and `docs/storyboard/EP<id>_storyboard.md` with real timings. Covers: `node engine/covers.mjs` (headline inside the middle 3:4 area).
5. **Technical QC:** `python3 engine/qc.py` (updates `docs/QC_Report.md`): 1080×1920, 30 fps, −14 ±1.5 LUFS, ≤ −1 dBTP, full decode, SRT present. Then confirm the duration is 35–60 s.
6. **Script fidelity:** the scenes' `lines` must equal the approved script. If you need wording changes, ask `scriptwriter`; fact changes go through `fact-checker`.

**Missing engine capability (documentary style):** the engine currently has no dedicated full-frame archival photo layer with Ken Burns motion, no recurring timeline bar, and no sepia or film-grain treatment (these were added to the style guide from EP4). Until they exist, use `S.img` with scene `cam` push-ins and a typographic year card, and tell the user that engine work is needed for the full look.

## Part C — Long-form 16:9 edit plan (when no engine render)

`pelan-suntingan.md`: timecoded tracks (V1 visuals, V2 text, A1 voice, A2 music, A3 SFX, subtitles) from the real voiceover timecodes; asset file names with in/out points; motion keyframes; transitions (mostly cuts, dissolves for time jumps); export 1920×1080, 30 fps, −14 LUFS, ≤ −1 dBTP; source-credit list for the end card.

## Quality standards

- Duration 35–60 s for episodes (ideal 45–55 s); storyboard timing within ±5% of the script estimate, and the final value comes from the build.
- Frame 1 complete; hook within 3 s; closing card present.
- Every historical image captioned or credited on screen; every illustration tagged ILUSTRASI.
- Every on-screen date or name matches the fact ledger.
- `engine/qc.py` LULUS.

## Example of correct usage

Script line: "Pada 9 Julai 1963, Perjanjian Malaysia ditandatangani di London." [F001–F002]. Scene: if `sumber-visual.md` has a verified, licence-cleared photo of the signing, use `S.img` with a push-in, the name tag "LONDON · 9 JULAI 1963" and a credit line. If not, use `S.map` with a pin on London and a stamp "PERJANJIAN MALAYSIA". Never use a generic 1960s meeting photo as "the signing".

## Common mistakes to avoid

- A blank or draw-on first frame (EP1 lost viewers at 0:01 this way).
- Using the 31 Ogos 1957 Stadium Merdeka photo for 16 September 1963 (same place, different events).
- Editing the generated `docs/storyboard/EP<id>_storyboard.md` by hand. It is regenerated on every build; change the episode file.
- Rendering with ElevenLabs before the voiceover approval gate. Use `--stills` for design checks.
- Music louder than about −20 dB under the voice, or hype music on sensitive topics.
- AI-generated "historical photos". Not allowed, even if labelled.
