import { packs } from './packs';
import type { ChapterPack } from './packs/pack';

export type CardKind = 'istilah' | 'tokoh' | 'tarikh';

export interface Flashcard {
  id: string;
  chapterId: string;
  kind: CardKind;
  front: string;
  back: string;
}

const byChapter = new Map<string, ChapterPack>(packs.map((p) => [p.id, p]));

export function getExtras(chapterId: string) {
  const p = byChapter.get(chapterId);
  return {
    terms: p?.terms ?? [],
    people: p?.people ?? [],
    dates: p?.dates ?? [],
    focus: p?.focus ?? [],
    rumusan: p?.rumusan ?? [],
    source: p?.source,
  };
}

/** Flashcards for a chapter: key terms, figures and dates (front = prompt, back = answer). */
export function flashcardsFor(chapterId: string): Flashcard[] {
  const p = byChapter.get(chapterId);
  if (!p) return [];
  const make = (kind: CardKind, rows: [string, string][] | undefined): Flashcard[] =>
    (rows ?? []).map(([front, back], i) => ({ id: `${chapterId}:${kind}:${i}`, chapterId, kind, front, back }));
  return [...make('istilah', p.terms), ...make('tokoh', p.people), ...make('tarikh', p.dates)];
}

export function chaptersWithFlashcards(): string[] {
  return packs.filter((p) => (p.terms?.length ?? 0) + (p.people?.length ?? 0) + (p.dates?.length ?? 0) > 0).map((p) => p.id);
}

/* ───────────── All-chapter indexes (timeline and glossary) ───────────── */

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mac: 3, apr: 4, mei: 5, jun: 6, jul: 7, ogo: 8, ogos: 8, sep: 9, sept: 9, okt: 10, nov: 11, dis: 12,
};

/** Sort key for a free-form date such as "12 Okt 1957", "1997–1998", "424 M" or "Abad ke-15". */
export function dateSortKey(when: string): number {
  const w = when.toLowerCase();
  const year = /(\d{3,4})/.exec(w);
  if (!year) {
    const century = /abad\s*ke-?(\d{1,2})/.exec(w);
    return century ? (Number(century[1]) - 1) * 100 * 10000 : Number.MAX_SAFE_INTEGER;
  }
  const y = Number(year[1]);
  const mon = /\b(jan|feb|mac|apr|mei|jun|jul|ogos|ogo|sept|sep|okt|nov|dis)[a-z]*\b/.exec(w);
  const m = mon ? MONTHS[mon[1]] ?? 0 : 0;
  const day = /^(\d{1,2})\s+[a-z]/.exec(w);
  return y * 10000 + m * 100 + (day ? Number(day[1]) : 0);
}

export interface TimelineEntry {
  when: string;
  what: string;
  chapterId: string;
  key: number;
}

/** Every "Tarikh penting" entry from every chapter, oldest first. */
export function allDates(): TimelineEntry[] {
  return packs
    .flatMap((p) => (p.dates ?? []).map(([when, what]) => ({ when, what, chapterId: p.id, key: dateSortKey(when) })))
    .sort((a, b) => a.key - b.key);
}

export interface GlossaryEntry {
  term: string;
  meaning: string;
  kind: 'istilah' | 'tokoh';
  chapterId: string;
}

/** Every key term and figure from every chapter, A to Z. */
export function glossary(): GlossaryEntry[] {
  return packs
    .flatMap((p) => [
      ...(p.terms ?? []).map(([term, meaning]) => ({ term, meaning, kind: 'istilah' as const, chapterId: p.id })),
      ...(p.people ?? []).map(([term, meaning]) => ({ term, meaning, kind: 'tokoh' as const, chapterId: p.id })),
    ])
    .sort((a, b) => a.term.replace(/^[^A-Za-z0-9]+/, '').localeCompare(b.term.replace(/^[^A-Za-z0-9]+/, ''), 'ms', { sensitivity: 'base' }));
}
