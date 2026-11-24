import type { Question } from '../../types/content';
import { packs } from '../packs';
import { chapters, subtopicIdFor } from '../syllabus';
import { t4Bab1Questions } from './t4-bab1';
import { t5Bab1Questions } from './t5-bab1';

/** Questions from chapter packs, converted to the full Question shape. */
const packQuestions: Question[] = packs.flatMap((p) => {
  const ch = chapters.find((c) => c.id === p.id)!;
  return (p.questions ?? []).map(([code, prompt, options, answer, explanation, kbat], i) => ({
    id: `q-${p.id}-${String(i + 1).padStart(2, '0')}`,
    form: ch.form,
    chapterId: p.id,
    subtopicId: subtopicIdFor(p.id, code),
    prompt,
    options,
    answer,
    explanation,
    source: 'nota' as const,
    kbat: kbat === 1 || undefined,
  }));
});

/**
 * All questions. The quiz engine picks them up automatically for chapter, subtopic,
 * Tingkatan, daily, KBAT and SPM Kertas 1 modes.
 */
export const allQuestions: Question[] = [...t4Bab1Questions, ...t5Bab1Questions, ...packQuestions];

const byId = new Map(allQuestions.map((q) => [q.id, q]));

export function getQuestion(id: string): Question | undefined {
  return byId.get(id);
}
