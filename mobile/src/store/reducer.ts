import type { Form } from '../types/content';
import type { AppState, Bookmark, BookmarkType, Preferences, QuizAttempt } from '../types/state';
import { dayKey } from '../utils/date';

export const MAX_ATTEMPTS = 200;
export const MAX_RECENT = 8;

export function createInitialState(now: number = Date.now()): AppState {
  return {
    version: 1,
    profile: { name: '', form: 4, onboarded: false, createdAt: now },
    prefs: { fontScale: 'sederhana', perQuiz: 10, shuffleOptions: true, dailyGoal: 2 },
    readSubtopics: {},
    completedChapters: {},
    bookmarks: [],
    attempts: [],
    recent: [],
    activity: {},
    wrongBank: {},
  };
}

export type Action =
  | { type: 'hydrate'; state: AppState }
  | { type: 'onboard'; name: string; form: Form }
  | { type: 'setName'; name: string }
  | { type: 'setForm'; form: Form }
  | { type: 'setPrefs'; prefs: Partial<Preferences> }
  | { type: 'visit'; chapterId: string; subtopicId?: string; at?: number }
  | { type: 'markRead'; subtopicId: string; read: boolean; at?: number }
  | { type: 'markChapter'; chapterId: string; done: boolean; at?: number }
  | { type: 'toggleBookmark'; bookmarkType: BookmarkType; refId: string; at?: number }
  | { type: 'removeBookmark'; bookmarkType: BookmarkType; refId: string }
  | { type: 'recordAttempt'; attempt: QuizAttempt }
  | { type: 'resetProgress' }
  | { type: 'resetAll' };

function bumpActivity(activity: Record<string, number>, at: number): Record<string, number> {
  const k = dayKey(new Date(at));
  return { ...activity, [k]: (activity[k] ?? 0) + 1 };
}

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'hydrate':
      return action.state;

    case 'onboard':
      return { ...state, profile: { ...state.profile, name: action.name.trim(), form: action.form, onboarded: true } };

    case 'setName':
      return { ...state, profile: { ...state.profile, name: action.name.trim() } };

    case 'setForm':
      return { ...state, profile: { ...state.profile, form: action.form } };

    case 'setPrefs':
      return { ...state, prefs: { ...state.prefs, ...action.prefs } };

    case 'visit': {
      const at = action.at ?? Date.now();
      const rest = state.recent.filter((r) => !(r.chapterId === action.chapterId && r.subtopicId === action.subtopicId));
      const recent = [{ chapterId: action.chapterId, subtopicId: action.subtopicId, at }, ...rest].slice(0, MAX_RECENT);
      return { ...state, recent };
    }

    case 'markRead': {
      const at = action.at ?? Date.now();
      const already = action.subtopicId in state.readSubtopics;
      if (action.read && already) return state;
      if (!action.read && !already) return state;
      const readSubtopics = { ...state.readSubtopics };
      if (action.read) readSubtopics[action.subtopicId] = at;
      else delete readSubtopics[action.subtopicId];
      return { ...state, readSubtopics, activity: action.read ? bumpActivity(state.activity, at) : state.activity };
    }

    case 'markChapter': {
      const at = action.at ?? Date.now();
      const completedChapters = { ...state.completedChapters };
      if (action.done) completedChapters[action.chapterId] = at;
      else delete completedChapters[action.chapterId];
      return { ...state, completedChapters };
    }

    case 'toggleBookmark': {
      const exists = state.bookmarks.some((b) => b.type === action.bookmarkType && b.refId === action.refId);
      const bookmarks: Bookmark[] = exists
        ? state.bookmarks.filter((b) => !(b.type === action.bookmarkType && b.refId === action.refId))
        : [{ type: action.bookmarkType, refId: action.refId, createdAt: action.at ?? Date.now() }, ...state.bookmarks];
      return { ...state, bookmarks };
    }

    case 'removeBookmark':
      return {
        ...state,
        bookmarks: state.bookmarks.filter((b) => !(b.type === action.bookmarkType && b.refId === action.refId)),
      };

    case 'recordAttempt': {
      const a = action.attempt;
      const wrongBank = { ...state.wrongBank };
      for (const id of a.correctIds) delete wrongBank[id];
      for (const id of a.wrongIds) wrongBank[id] = true;
      return {
        ...state,
        attempts: [a, ...state.attempts].slice(0, MAX_ATTEMPTS),
        wrongBank,
        activity: bumpActivity(state.activity, a.at),
      };
    }

    case 'resetProgress':
      return {
        ...state,
        readSubtopics: {},
        completedChapters: {},
        attempts: [],
        recent: [],
        activity: {},
        wrongBank: {},
      };

    case 'resetAll':
      return createInitialState();

    default:
      return state;
  }
}

/**
 * Merge stored JSON with defaults so older/partial saves never crash the app
 * (e.g. after adding a new preference in a future version).
 */
export function migrate(raw: unknown): AppState {
  const base = createInitialState();
  if (!raw || typeof raw !== 'object') return base;
  const s = raw as Partial<AppState>;
  const form: Form = s.profile?.form === 5 ? 5 : 4;
  return {
    ...base,
    ...s,
    version: 1,
    profile: { ...base.profile, ...(s.profile ?? {}), form },
    prefs: { ...base.prefs, ...(s.prefs ?? {}) },
    readSubtopics: s.readSubtopics ?? {},
    completedChapters: s.completedChapters ?? {},
    bookmarks: Array.isArray(s.bookmarks) ? s.bookmarks : [],
    attempts: Array.isArray(s.attempts) ? s.attempts : [],
    recent: Array.isArray(s.recent) ? s.recent : [],
    activity: s.activity ?? {},
    wrongBank: s.wrongBank ?? {},
  };
}
