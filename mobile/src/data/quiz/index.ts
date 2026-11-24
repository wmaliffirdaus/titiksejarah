import type { Question } from '../../types/content';
import { t4Bab1Questions } from './t4-bab1';
import { t5Bab1Questions } from './t5-bab1';

/**
 * Register every question file here. The quiz engine picks questions up automatically
 * for chapter, subtopic, Tingkatan, daily, KBAT and SPM Kertas 1 modes.
 */
export const allQuestions: Question[] = [...t4Bab1Questions, ...t5Bab1Questions];

const byId = new Map(allQuestions.map((q) => [q.id, q]));

export function getQuestion(id: string): Question | undefined {
  return byId.get(id);
}
