---
name: historical-storytelling
description: Designs the narrative for a TitikSejarah history video or lesson. Chooses the angle, central question, story structure, protagonists, tension and turning points, and the closing iktibar, using only verified facts. Output is a story outline (garis cerita) that the scriptwriter turns into narration. Use before scriptwriting, or when someone asks "macam mana nak jadikan topik ini menarik", "sudut cerita", "story angle", "naratif", "jalan cerita", or says a script feels like a dry list of facts.
argument-hint: "[slug atau topik] [dokumentari|pendek]"
---

# Historical Storytelling and Narrative Development

Students remember stories, not lists. This skill finds the story that already exists in the verified facts (people with goals, obstacles, decisions and consequences) and shapes it into a structure. It never invents events to make a story work.

Inputs: the fact ledger `03-log-fakta.md` (gate LULUS) and the syllabus anchor `02-padanan-kssm.md`.
Output: `content/tingkatan-<T>/<slug>/04a-garis-cerita.md`, consumed by `documentary-scriptwriting`.

## Responsibilities

- Find a specific angle and one central question per video.
- Choose a narrative structure that fits the facts and the length.
- Identify the story's real actors, their goals and the obstacles they faced, as recorded in sources.
- Place verified turning points in an order that builds tension and understanding of cause and effect.
- Define the payoff: the answer to the central question plus the KSSM iktibar.
- Separate verified story beats from permitted dramatisation.

## Workflow

1. **Mine the ledger for story material.** Collect: actors (people, groups), goals, obstacles, decisions, turning points (dated), consequences, and surprising true details. Note the ledger ID of each.
2. **Find the angle.** Ask: what would make a 16-year-old ask "kenapa?" Candidates include a contradiction, a decision under pressure, an underdog, a near-failure, a "what was at stake", or a link to the present. Choose one angle and write the **central question** in one sentence.
3. **Choose a structure** (table below) that fits the facts. Do not force a structure the facts cannot support.
4. **Lay out the beats.** 4–6 beats for a 35–60 s episode (hook → context → story → reveal → closing question), 6–10 for long documentaries. **Series continuity:** the closing question is answered by the next episode in textbook order; note it for the producer. Each beat lists: purpose, ledger IDs and the emotional or cognitive effect (curiosity, tension, relief, understanding).
5. **Plan dramatisation explicitly.** List any reconstructed atmosphere ("suasana di Lancaster House…") and confirm that it adds no facts. Mark it `DRAMATISASI`.
6. **Define the payoff.** Answer the central question, then the iktibar from the chapter's *Elemen Kewarganegaraan dan Nilai Sivik* (from `02-padanan-kssm.md`), phrased concretely, not as a slogan.
7. **Check balance and sensitivity.** Is any group portrayed unfairly? Are perspectives from the textbook represented (e.g. local and neighbouring-country reactions in the formation of Malaysia)? See the sensitivity rules in `gaya-bahasa.md`.
8. Write the outline and hand it to the scriptwriter.

## Structures

| Structure | Best for | Beats |
|---|---|---|
| **Soalan → Penyiasatan → Jawapan** | "Why" topics (causes of an event) | Question; clue 1, 2, 3 (causes, each verified); answer; significance |
| **Krisis → Keputusan → Akibat** | Turning points (Malayan Union, pemisahan Singapura) | Normal state; crisis; options; decision; consequences; lesson |
| **Perjalanan tokoh** | A figure's role (Dato' Onn, Tunku, Tun Abdul Razak) | Who and context; goal; obstacles; key action; outcome; legacy *as stated in sources* |
| **Garis masa berdebar** | Sequences with deadlines (31 Ogos → 16 September 1963) | Deadline set; complication; race; resolution |
| **Dulu vs Kini** | Policies and institutions (DEB, Rukun Negara) | Problem then; policy response; evidence of results (with data); relevance now |
| **Satu objek / satu dokumen** | Shorts on an artefact or document | Show object; what it is; why it mattered; one surprising true detail |

## Output format

```markdown
# Garis Cerita — <tajuk>
- Slug | Format | Tempoh sasaran | Struktur: <nama>
- Sudut: <satu ayat>
- Soalan utama: <satu ayat yang dijawab di akhir video>

| # | Babak / beat | Tujuan | ID fakta | Kesan kepada penonton |
|---|---|---|---|---|
| 1 | Hook: tarikh asal 31 Ogos 1963 | Cipta percanggahan | F003 | Ingin tahu |

## Dramatisasi yang dirancang
- Babak 2: suasana menunggu laporan PBB (emosi sahaja, tiada fakta baharu)

## Ganjaran (payoff)
- Jawapan: …
- Iktibar (Elemen Kewarganegaraan bab ini): …

## Semakan keseimbangan
- Perspektif yang diwakili: …
```

## Quality standards

- One central question, answered explicitly in the final beat.
- Every beat other than declared dramatisation references at least one ledger ID.
- Cause-and-effect links are explicit (the student can say *why*, not just *what*).
- The iktibar comes from the chapter's official elements, not a generic moral.

## Example of correct usage

Topic: *Pemisahan Singapura* (T5 6.2). Angle: "Sebuah negara yang baru dua tahun bersatu — kenapa berpisah?" Structure: Krisis → Keputusan → Akibat. Beats: political conflict (PAP vs Perikatan, *Malaysian Malaysia*) → economic disputes (common market, tax, the RM150 juta loan) → racial riots of 21 Julai 1964 → failed talks on 29 Jun 1965 → agreement signed 7 Ogos 1965 → Parliament on 9 Ogos 1965. Payoff: separation through negotiation, not violence. The textbook iktibar is *kepentingan menyelesaikan konflik secara rundingan*.

## Common mistakes to avoid

- Inventing a villain or hero framing the sources do not support.
- A "mystery" hook whose answer the sources do not actually give.
- Giving fictional inner thoughts to real people ("Tunku berasa kecewa dan marah…") without a source. Use "Bayangkan…" framing for atmosphere instead, and keep it fact-free.
- Too many threads: one video, one question.
- Ending with a generic moral ("Kita mesti menghargai sejarah") instead of the specific lesson of this event.
