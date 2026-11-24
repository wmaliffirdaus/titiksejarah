export type QuestionBlock =
  | { kind: 'para'; text: string }
  | { kind: 'box'; lines: string[] }
  | { kind: 'table'; rows: string[][] }
  | { kind: 'items'; items: { label: string; text: string }[] };

const ITEM = /^(I{1,3}|IV|[PQRS])\s+(.+)$/;

/** Parses the question line format described in data/papers/paper.ts. */
export function parseQuestionText(src: string): QuestionBlock[] {
  const out: QuestionBlock[] = [];
  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const last = out[out.length - 1];
    if (line.startsWith('> ')) {
      if (last?.kind === 'box') last.lines.push(line.slice(2));
      else out.push({ kind: 'box', lines: [line.slice(2)] });
      continue;
    }
    if (line.startsWith('| ')) {
      const cells = line.slice(2).split(' | ').map((c) => c.trim());
      if (last?.kind === 'table') last.rows.push(cells);
      else out.push({ kind: 'table', rows: [cells] });
      continue;
    }
    const m = ITEM.exec(line);
    if (m) {
      if (last?.kind === 'items') last.items.push({ label: m[1], text: m[2] });
      else out.push({ kind: 'items', items: [{ label: m[1], text: m[2] }] });
      continue;
    }
    out.push({ kind: 'para', text: line });
  }
  return out;
}

