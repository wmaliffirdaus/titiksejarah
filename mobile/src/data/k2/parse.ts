import type { K2Part, K2Question, K2Set } from './k2';

/**
 * Compact text format for Kertas 2 sets (one file per set in ./sets). Example:
 *
 *   SET k2-t4-02 T4 2
 *   Q 1 A t4-b3 | Permulaan Perang Dunia Kedua di Asia Pasifik
 *   Infografik berikut berkaitan dengan ...        <- stimulus lines (QuestionText format: "> " box, "| " table)
 *   | Masa | Peristiwa
 *   P (a) 2 - 3.4 · hlm. 64 | Nyatakan dua faktor peluasan kuasa Jepun.
 *   - Keperluan perindustrian ...                  <- answer points from the Skema
 *   P (d) 4 K 3.5 | Pada pendapat anda, ...         <- K = KBAT marked per point
 *   P (c) 8 R 1.3 | Pada pendapat anda, ...         <- R = KBAT essay marked with the Aras rubric
 */
export function parseK2(src: string): K2Set {
  const lines = src.split('\n').map((l) => l.trim()).filter(Boolean);
  const head = /^SET (\S+) (T4|T4T5) (\d+)$/.exec(lines[0] ?? '');
  if (!head) throw new Error(`K2 set header missing: ${lines[0]}`);
  const set: K2Set = { id: head[1], scope: head[2] as K2Set['scope'], set: Number(head[3]), questions: [] };
  let q: (K2Question & { stim: string[] }) | null = null;
  let part: K2Part | null = null;

  const closeQuestion = () => {
    if (!q) return;
    const { stim, ...rest } = q;
    set.questions.push({ ...rest, stimulus: stim.length ? stim.join('\n') : undefined });
  };

  for (const line of lines.slice(1)) {
    const qm = /^Q (\d+) (A|B) (t[45]-b\d+) \| (.+)$/.exec(line);
    if (qm) {
      closeQuestion();
      q = { n: Number(qm[1]), section: qm[2] as 'A' | 'B', chapterId: qm[3], title: qm[4], parts: [], stim: [] };
      part = null;
      continue;
    }
    if (!q) throw new Error(`${set.id}: text before first question: ${line}`);
    const pm = /^P (\(\w+\)(?:\(\w+\))?) (\d+) ([-KR]) (.+?) \| (.+)$/.exec(line);
    if (pm) {
      part = {
        label: pm[1],
        marks: Number(pm[2]),
        ref: pm[4],
        question: pm[5],
        points: [],
        ...(pm[3] !== '-' ? { kbat: true } : {}),
        ...(pm[3] === 'R' ? { rubric: true } : {}),
      };
      q.parts.push(part);
      continue;
    }
    if (line.startsWith('- ')) {
      if (!part) throw new Error(`${set.id} q${q.n}: answer point before any part: ${line}`);
      part.points.push(line.slice(2));
      continue;
    }
    if (part) throw new Error(`${set.id} q${q.n}: unexpected line after parts: ${line}`);
    q.stim.push(line);
  }
  closeQuestion();
  return set;
}
