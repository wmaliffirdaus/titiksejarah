import type { CalloutVariant, NoteBlock } from '../types/content';

/**
 * Tiny Markdown dialect for notes → NoteBlock[]:
 *
 *   ## Heading
 *   Plain lines form a paragraph (blank line ends it). **bold** is kept for RichText.
 *   - bullet item            1. numbered item
 *   | Col A | Col B |        first table row = column headers
 *   @ 1946 | Event           timeline row
 *   > [ingat] text           callout; variants: definisi, info, ingat, iktibar, tip
 *   > [definisi: Title] text callout with a custom title
 */
const VARIANTS: CalloutVariant[] = ['definisi', 'info', 'ingat', 'iktibar', 'tip'];

export function parseNoteMarkdown(src: string): NoteBlock[] {
  const blocks: NoteBlock[] = [];
  const lines = src.replace(/\r/g, '').split('\n');
  let para: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let table: string[][] | null = null;
  let timeline: { when: string; what: string }[] | null = null;

  const flush = () => {
    if (para.length) blocks.push({ type: 'para', text: para.join(' ') });
    if (list) blocks.push({ type: 'list', items: list.items, ordered: list.ordered || undefined });
    if (table && table.length) {
      const [columns, ...rows] = table;
      blocks.push({ type: 'table', columns, rows: rows.map((r) => columns.map((_, i) => r[i] ?? '')) });
    }
    if (timeline) blocks.push({ type: 'timeline', items: timeline });
    para = [];
    list = null;
    table = null;
    timeline = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    let m: RegExpMatchArray | null;
    if ((m = line.match(/^##\s+(.*)$/))) {
      flush();
      blocks.push({ type: 'heading', text: m[1] });
    } else if ((m = line.match(/^>\s*\[(\w+)(?::\s*([^\]]+))?\]\s*(.*)$/))) {
      flush();
      const variant = (VARIANTS as string[]).includes(m[1]) ? (m[1] as CalloutVariant) : 'info';
      blocks.push({ type: 'callout', variant, title: m[2]?.trim() || undefined, text: m[3] });
    } else if (line.startsWith('|')) {
      if (!table) flush();
      const cells = line.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue; // markdown separator row
      table = table ?? [];
      table.push(cells);
    } else if ((m = line.match(/^@\s*([^|]+)\|\s*(.*)$/))) {
      if (!timeline) flush();
      timeline = timeline ?? [];
      timeline.push({ when: m[1].trim(), what: m[2].trim() });
    } else if ((m = line.match(/^(-|\d+\.)\s+(.*)$/))) {
      const ordered = m[1] !== '-';
      if (!list || list.ordered !== ordered) flush();
      list = list ?? { ordered, items: [] };
      list.items.push(m[2]);
    } else {
      if (list || table || timeline) flush();
      para.push(line);
    }
  }
  flush();
  return blocks;
}
