import type { Form } from './content';

export type FontScale = 'kecil' | 'sederhana' | 'besar';

export type BookmarkType = 'nota' | 'soalan' | 'topik';

export interface Bookmark {
  type: BookmarkType;
  /** subtopicId for 'nota', questionId for 'soalan', chapterId for 'topik'. */
  refId: string;
  createdAt: number;
}

export interface QuizAttempt {
  id: string;
  key: string;
  title: string;
  form?: Form;
  chapterId?: string;
  score: number;
  total: number;
  wrongIds: string[];
  correctIds: string[];
  durationSec: number;
  at: number;
}

export interface RecentItem {
  chapterId: string;
  subtopicId?: string;
  at: number;
}

export interface Profile {
  name: string;
  form: Form;
  onboarded: boolean;
  createdAt: number;
}

export interface Preferences {
  fontScale: FontScale;
  perQuiz: 5 | 10 | 15;
  shuffleOptions: boolean;
  /** Daily goal in "activities" (subtopics read + quizzes finished). */
  dailyGoal: 1 | 2 | 3 | 5;
  /** Daily study reminder (local notification). */
  reminder: { enabled: boolean; hour: number; minute: number };
}

export interface AppState {
  version: 1;
  profile: Profile;
  prefs: Preferences;
  /** subtopicId → timestamp first marked as read */
  readSubtopics: Record<string, number>;
  /** chapterId → timestamp marked complete */
  completedChapters: Record<string, number>;
  bookmarks: Bookmark[];
  attempts: QuizAttempt[];
  recent: RecentItem[];
  /** YYYY-MM-DD → number of learning activities that day */
  activity: Record<string, number>;
  /** questionId → true while it is still "wrong" (cleared when answered correctly later) */
  wrongBank: Record<string, true>;
  /** flashcard id → timestamp marked "Saya tahu" */
  knownCards: Record<string, number>;
  /** "<chapterId>:<index>" → ticked in the Fokus Ulang Kaji SPM checklist */
  focusChecks: Record<string, true>;
}
