import type { Form, Question } from '../types/content';
import { allQuestions } from '../data/quiz';
import { chapters, getChapter, getSubtopic } from '../data/syllabus';
import { hashString, mulberry32, shuffle } from './random';

/**
 * Quiz keys (used in the route /kuiz/[key]):
 *   bab-<chapterId>        all questions of a chapter          e.g. bab-t4-b1
 *   topik-<subtopicId>     questions of one subtopic           e.g. topik-t4-b1-3
 *   tingkatan-4 | -5       mixed questions for a Tingkatan
 *   harian                 daily challenge (same set all day)
 *   kbat                   KBAT-tagged questions
 *   spm-k1                 Kertas 1 style mixed practice (T4 + T5)
 *   kesilapan              questions answered wrongly before
 *   simpanan               bookmarked questions
 */
export interface QuizContext {
  form: Form;
  perQuiz: number;
  shuffleOptions: boolean;
  wrongIds: string[];
  savedIds: string[];
  today: string; // YYYY-MM-DD
}

export interface PreparedQuestion {
  question: Question;
  /** order[displayIndex] = original option index */
  order: number[];
  correctIndex: number;
}

export interface QuizSet {
  key: string;
  title: string;
  subtitle: string;
  chapterId?: string;
  form?: Form;
  questions: PreparedQuestion[];
}

export const DAILY_SIZE = 5;

function prepare(qs: Question[], ctx: QuizContext, rand: () => number): PreparedQuestion[] {
  return qs.map((question) => {
    const base = [0, 1, 2, 3];
    const order = ctx.shuffleOptions ? shuffle(base, rand) : base;
    return { question, order, correctIndex: order.indexOf(question.answer) };
  });
}

export function questionsForChapter(chapterId: string): Question[] {
  return allQuestions.filter((q) => q.chapterId === chapterId);
}

export function questionsForSubtopic(subtopicId: string): Question[] {
  return allQuestions.filter((q) => q.subtopicId === subtopicId);
}

export function questionsForForm(form: Form): Question[] {
  return allQuestions.filter((q) => q.form === form);
}

export function buildQuiz(key: string, ctx: QuizContext, rand: () => number = Math.random): QuizSet | null {
  let pool: Question[] = [];
  let title = '';
  let subtitle = '';
  let chapterId: string | undefined;
  let form: Form | undefined;
  let limit = ctx.perQuiz;
  let r = rand;
  let keepOrder = false;

  if (key.startsWith('bab-')) {
    const ch = getChapter(key.slice(4));
    if (!ch) return null;
    pool = questionsForChapter(ch.id);
    title = `Kuiz Bab ${ch.number}`;
    subtitle = ch.title;
    chapterId = ch.id;
    form = ch.form;
  } else if (key.startsWith('topik-')) {
    const hit = getSubtopic(key.slice(6));
    if (!hit) return null;
    pool = questionsForSubtopic(hit.subtopic.id);
    title = `Kuiz Subtopik ${hit.subtopic.code}`;
    subtitle = hit.subtopic.title;
    chapterId = hit.chapter.id;
    form = hit.chapter.form;
  } else if (key === 'tingkatan-4' || key === 'tingkatan-5') {
    form = key.endsWith('4') ? 4 : 5;
    pool = questionsForForm(form);
    title = `Kuiz Tingkatan ${form}`;
    subtitle = 'Campuran soalan semua bab yang tersedia';
  } else if (key === 'harian') {
    const preferred = questionsForForm(ctx.form);
    pool = preferred.length >= DAILY_SIZE ? preferred : allQuestions;
    r = mulberry32(hashString(`harian-${ctx.today}-${ctx.form}`));
    limit = DAILY_SIZE;
    title = 'Cabaran Harian';
    subtitle = `${DAILY_SIZE} soalan · set baharu setiap hari`;
    form = ctx.form;
  } else if (key === 'kbat') {
    pool = allQuestions.filter((q) => q.kbat);
    title = 'Soalan KBAT';
    subtitle = 'Kemahiran Berfikir Aras Tinggi';
  } else if (key === 'spm-k1') {
    pool = allQuestions;
    title = 'Kertas 1 · Latihan Objektif';
    subtitle = 'Campuran T4 & T5 · format aneka pilihan';
    limit = Math.max(ctx.perQuiz, 10);
  } else if (key === 'kesilapan') {
    const wrong = new Set(ctx.wrongIds);
    pool = allQuestions.filter((q) => wrong.has(q.id));
    title = 'Ulang Kaji Kesilapan';
    subtitle = 'Soalan yang pernah dijawab salah';
    limit = pool.length;
  } else if (key === 'simpanan') {
    const order = new Map(ctx.savedIds.map((id, i) => [id, i]));
    pool = allQuestions.filter((q) => order.has(q.id)).sort((a, b) => order.get(a.id)! - order.get(b.id)!);
    title = 'Soalan Disimpan';
    subtitle = 'Soalan yang anda tanda untuk ulang kaji';
    limit = pool.length;
    keepOrder = true;
  } else {
    return null;
  }

  if (pool.length === 0) return null;
  const picked = (keepOrder ? pool : shuffle(pool, r)).slice(0, Math.max(1, limit));
  return { key, title, subtitle, chapterId, form, questions: prepare(picked, ctx, r) };
}

/** Number of questions available for a quiz key (for disabling empty quiz cards). */
export function countFor(key: string): number {
  if (key.startsWith('bab-')) return questionsForChapter(key.slice(4)).length;
  if (key.startsWith('topik-')) return questionsForSubtopic(key.slice(6)).length;
  if (key === 'tingkatan-4') return questionsForForm(4).length;
  if (key === 'tingkatan-5') return questionsForForm(5).length;
  if (key === 'kbat') return allQuestions.filter((q) => q.kbat).length;
  return allQuestions.length;
}

export function chaptersWithQuestions(form?: Form) {
  return chapters.filter((c) => (form ? c.form === form : true) && questionsForChapter(c.id).length > 0);
}

export function scorePercent(score: number, total: number): number {
  return total === 0 ? 0 : Math.round((score / total) * 100);
}

export function gradeFor(percent: number): { label: string; message: string } {
  if (percent >= 90) return { label: 'Cemerlang', message: 'Penguasaan yang sangat baik. Teruskan!' };
  if (percent >= 70) return { label: 'Kepujian', message: 'Bagus! Ulang kaji fakta yang tersilap untuk sempurna.' };
  if (percent >= 50) return { label: 'Lulus', message: 'Asas sudah ada. Baca semula nota dan cuba lagi.' };
  return { label: 'Perlu usaha', message: 'Jangan putus asa — baca nota subtopik, kemudian cuba semula.' };
}
