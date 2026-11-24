import type { Chapter, Form, NoteBlock, SubtopicMeta } from '../types/content';
import { chapters } from '../data/syllabus';
import { getNote } from '../data/notes';

export interface SearchResult {
  kind: 'bab' | 'subtopik';
  chapter: Chapter;
  subtopic?: SubtopicMeta;
  /** Short context line shown under the title. */
  snippet: string;
  score: number;
}

export function normalise(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\*\*/g, '')
    .replace(/[^a-z0-9\s.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function blockText(b: NoteBlock): string {
  switch (b.type) {
    case 'heading':
    case 'para':
      return b.text;
    case 'callout':
      return `${b.title ?? ''} ${b.text}`;
    case 'list':
      return b.items.join(' ');
    case 'table':
      return [...b.columns, ...b.rows.flat()].join(' ');
    case 'timeline':
      return b.items.map((i) => `${i.when} ${i.what}`).join(' ');
  }
}

function snippetAround(text: string, q: string): string {
  const clean = text.replace(/\*\*/g, '');
  const idx = normalise(clean).indexOf(q);
  if (idx < 0) return clean.slice(0, 90);
  const start = Math.max(0, idx - 30);
  return `${start > 0 ? '...' : ''}${clean.slice(start, start + 100).trim()}...`;
}

/** Search chapter titles, subtopic titles, codes, keywords and note bodies. */
export function searchContent(query: string, form?: Form): SearchResult[] {
  const q = normalise(query);
  if (q.length < 2) return [];
  const terms = q.split(' ');
  const results: SearchResult[] = [];

  for (const c of chapters) {
    if (form && c.form !== form) continue;
    const chHay = normalise(`bab ${c.number} ${c.title} tingkatan ${c.form}`);
    if (terms.every((t) => chHay.includes(t))) {
      results.push({ kind: 'bab', chapter: c, snippet: `Tingkatan ${c.form} · ${c.subtopics.length || 'tiada'} subtopik`, score: 3 });
    }
    for (const s of c.subtopics) {
      const note = getNote(s.id);
      const titleHay = normalise(`${s.code} ${s.title}`);
      const keyHay = normalise((note?.keywords ?? []).join(' '));
      const bodyText = note ? note.blocks.map(blockText).join(' ') : '';
      const bodyHay = normalise(bodyText);
      let score = 0;
      if (terms.every((t) => titleHay.includes(t))) score = 3;
      else if (terms.every((t) => keyHay.includes(t) || titleHay.includes(t))) score = 2;
      else if (terms.every((t) => bodyHay.includes(t))) score = 1;
      if (score > 0) {
        const snippet = score === 1 ? snippetAround(bodyText, terms[0]) : note?.summary ?? 'Nota akan ditambah';
        results.push({ kind: 'subtopik', chapter: c, subtopic: s, snippet, score });
      }
    }
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 40);
}
