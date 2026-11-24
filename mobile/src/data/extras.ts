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
