import type { SubtopicNote } from '../../types/content';
import { packs } from '../packs';
import { parseNoteMarkdown } from '../md';
import { subtopicIdFor } from '../syllabus';
import { t4Bab1Notes } from './t4-bab1';
import { t5Bab1Notes } from './t5-bab1';

/** Notes from chapter packs (Markdown) plus the two hand-built Bab 1 note files. */
const packNotes: SubtopicNote[] = packs.flatMap((p) =>
  (p.subtopics ?? []).map((s) => ({
    subtopicId: subtopicIdFor(p.id, s.code),
    source: { status: 'nota' as const, label: p.source },
    summary: s.summary,
    keywords: s.keywords?.split(',').map((k) => k.trim()).filter(Boolean),
    blocks: parseNoteMarkdown(s.md),
  })),
);

export const allNotes: SubtopicNote[] = [...t4Bab1Notes, ...t5Bab1Notes, ...packNotes];

const byId = new Map(allNotes.map((n) => [n.subtopicId, n]));

export function getNote(subtopicId: string): SubtopicNote | undefined {
  return byId.get(subtopicId);
}

export function hasNote(subtopicId: string): boolean {
  return byId.has(subtopicId);
}
