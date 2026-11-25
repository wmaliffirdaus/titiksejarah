import type { Paper, PaperQuestion } from './paper';

/**
 * Compact text format for Kertas 1 papers (one file per set in ./sets). Example:
 *
 *   SET k1-t4-02 T4 2 60                  <- id, scope (T4 | T4T5), set number, minutes
 *   # 1 C t4-b1 1.2 2 6                    <- number, answer, chapter, subtopic, level (1-3), textbook page (- if none; "24-25" or "24,30")
 *   Maklumat berikut berkaitan ...         <- question lines (QuestionText format: "> " box, "| " table, I-IV / P-S items)
 *   > Dinasti Ming menghantar ...
 *   A wilayah pengaruh                     <- the four options, last four lines before "="
 *   B undang-undang                           (pairing options use "left | right")
 *   C kedaulatan
 *   D lambang kebesaran
 *   = Kedaulatan Melaka diakui ...          <- explanation from the Skema Jawapan
 */
export function parsePaper(src: string): Paper {
  const lines = src.split('\n').map((l) => l.trim()).filter(Boolean);
  const head = /^SET (\S+) (T4|T4T5) (\d+) (\d+)$/.exec(lines[0] ?? '');
  if (!head) throw new Error(`K1 set header missing: ${lines[0]}`);
  const paper: Paper = { id: head[1], scope: head[2] as Paper['scope'], set: Number(head[3]), minutes: Number(head[4]), q: [] };
  const blocks: string[][] = [];
  for (const line of lines.slice(1)) {
    if (line.startsWith('# ')) blocks.push([line]);
    else if (!blocks.length) throw new Error(`${paper.id}: text before first question: ${line}`);
    else blocks[blocks.length - 1].push(line);
  }
  blocks.forEach((b, i) => {
    const hm = /^# (\d+) ([ABCD]) (t[45]-b\d+) (\d+\.\d+) ([123]) (\S+)$/.exec(b[0]);
    if (!hm) throw new Error(`${paper.id}: bad question header: ${b[0]}`);
    const n = Number(hm[1]);
    if (n !== i + 1) throw new Error(`${paper.id}: question ${n} out of order`);
    const eIdx = b.length - 1;
    if (!b[eIdx].startsWith('= ')) throw new Error(`${paper.id} q${n}: explanation line missing`);
    const opts = b.slice(eIdx - 4, eIdx);
    opts.forEach((o, k) => {
      if (!o.startsWith(`${'ABCD'[k]} `)) throw new Error(`${paper.id} q${n}: option ${'ABCD'[k]} missing: ${o}`);
    });
    const stem = b.slice(1, eIdx - 4);
    if (!stem.length) throw new Error(`${paper.id} q${n}: question text missing`);
    const q: PaperQuestion = {
      s: stem.join('\n'),
      o: opts.map((o) => o.slice(2)) as PaperQuestion['o'],
      a: 'ABCD'.indexOf(hm[2]) as PaperQuestion['a'],
      e: b[eIdx].slice(2),
      c: hm[3],
      t: hm[4],
      lv: Number(hm[5]) as PaperQuestion['lv'],
      ...(hm[6] !== '-' ? { p: hm[6].replace(/,/g, ', ') } : {}),
    };
    paper.q.push(q);
  });
  return paper;
}
