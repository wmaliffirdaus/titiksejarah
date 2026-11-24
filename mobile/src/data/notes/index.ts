import type { SubtopicNote } from '../../types/content';
import { t4Bab1Notes } from './t4-bab1';
import { t5Bab1Notes } from './t5-bab1';

/**
 * Register every notes file here. Adding a new chapter = create the file, spread it below.
 */
export const allNotes: SubtopicNote[] = [...t4Bab1Notes, ...t5Bab1Notes];

const byId = new Map(allNotes.map((n) => [n.subtopicId, n]));

export function getNote(subtopicId: string): SubtopicNote | undefined {
  return byId.get(subtopicId);
}

export function hasNote(subtopicId: string): boolean {
  return byId.has(subtopicId);
}
