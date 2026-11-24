import type { Chapter, Form } from '../types/content';
import type { AppState, BookmarkType } from '../types/state';
import { chapters, getChaptersByForm } from '../data/syllabus';
import { hasNote } from '../data/notes';
import { questionsForChapter, scorePercent } from '../utils/quiz';
import { computeStreak, dayKey, longestStreak } from '../utils/date';

export function isRead(state: AppState, subtopicId: string): boolean {
  return subtopicId in state.readSubtopics;
}

export function isBookmarked(state: AppState, type: BookmarkType, refId: string): boolean {
  return state.bookmarks.some((b) => b.type === type && b.refId === refId);
}

export function isChapterComplete(state: AppState, chapterId: string): boolean {
  return chapterId in state.completedChapters;
}

/** 0–1. A chapter marked complete counts as 1; otherwise share of subtopics read. */
export function chapterProgress(state: AppState, chapter: Chapter): number {
  if (isChapterComplete(state, chapter.id)) return 1;
  if (chapter.subtopics.length === 0) return 0;
  const read = chapter.subtopics.filter((s) => isRead(state, s.id)).length;
  return read / chapter.subtopics.length;
}

export function formProgress(state: AppState, form: Form): number {
  const list = getChaptersByForm(form);
  return list.reduce((sum, c) => sum + chapterProgress(state, c), 0) / list.length;
}

export function overallProgress(state: AppState): number {
  return chapters.reduce((sum, c) => sum + chapterProgress(state, c), 0) / chapters.length;
}

export function chaptersCompletedCount(state: AppState, form?: Form): number {
  return chapters.filter((c) => (form ? c.form === form : true) && chapterProgress(state, c) >= 1).length;
}

export function quizStats(state: AppState) {
  const attempts = state.attempts;
  const total = attempts.length;
  const percents = attempts.map((a) => scorePercent(a.score, a.total));
  const average = total ? Math.round(percents.reduce((a, b) => a + b, 0) / total) : 0;
  const best = total ? Math.max(...percents) : 0;
  const questionsAnswered = attempts.reduce((s, a) => s + a.total, 0);
  const correctAnswers = attempts.reduce((s, a) => s + a.score, 0);
  return { total, average, best, questionsAnswered, correctAnswers };
}

/** Average % for quizzes tied to a chapter (null if never attempted). */
export function chapterQuizAverage(state: AppState, chapterId: string): number | null {
  const list = state.attempts.filter((a) => a.chapterId === chapterId);
  if (!list.length) return null;
  return Math.round(list.reduce((s, a) => s + scorePercent(a.score, a.total), 0) / list.length);
}

export function streakInfo(state: AppState, today: Date = new Date()) {
  const days = Object.keys(state.activity).filter((k) => state.activity[k] > 0);
  return {
    current: computeStreak(days, today),
    longest: longestStreak(days),
    todayCount: state.activity[dayKey(today)] ?? 0,
  };
}

export function dailyChallengeDone(state: AppState, today: Date = new Date()): { done: boolean; score?: number; total?: number } {
  const k = dayKey(today);
  const hit = state.attempts.find((a) => a.key === 'harian' && dayKey(new Date(a.at)) === k);
  return hit ? { done: true, score: hit.score, total: hit.total } : { done: false };
}

export type Recommendation =
  | { kind: 'read'; chapter: Chapter; subtopicId: string; subtopicCode: string; subtopicTitle: string }
  | { kind: 'quiz'; chapter: Chapter; average: number }
  | { kind: 'daily' };

/**
 * Daily recommendation:
 *   1. next unread subtopic (with notes) in the student's Tingkatan, in syllabus order;
 *   2. otherwise the weakest chapter quiz (< 80 %), or a chapter quiz never attempted;
 *   3. otherwise the daily challenge.
 */
export function recommendation(state: AppState): Recommendation {
  const list = getChaptersByForm(state.profile.form);
  for (const c of list) {
    if (isChapterComplete(state, c.id)) continue;
    const next = c.subtopics.find((s) => hasNote(s.id) && !isRead(state, s.id));
    if (next) return { kind: 'read', chapter: c, subtopicId: next.id, subtopicCode: next.code, subtopicTitle: next.title };
  }
  let weakest: { chapter: Chapter; average: number } | null = null;
  for (const c of list) {
    if (!questionsForChapter(c.id).length) continue;
    const avg = chapterQuizAverage(state, c.id);
    const value = avg ?? -1;
    if (value < 80 && (!weakest || value < weakest.average)) weakest = { chapter: c, average: value };
  }
  if (weakest) return { kind: 'quiz', chapter: weakest.chapter, average: weakest.average };
  return { kind: 'daily' };
}

export function wrongIds(state: AppState): string[] {
  return Object.keys(state.wrongBank);
}

export function savedQuestionIds(state: AppState): string[] {
  return state.bookmarks.filter((b) => b.type === 'soalan').map((b) => b.refId);
}
