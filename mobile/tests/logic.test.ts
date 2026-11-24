import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chapters, getSubtopic } from '../src/data/syllabus';
import { allNotes, getNote } from '../src/data/notes';
import { allQuestions } from '../src/data/quiz';
import { spmItems } from '../src/data/spm';
import { featuredFacts } from '../src/data/featured';
import { buildQuiz, DAILY_SIZE, type QuizContext } from '../src/utils/quiz';
import { computeStreak, dayKey, longestStreak } from '../src/utils/date';
import { searchContent } from '../src/utils/search';
import { createInitialState, migrate, reducer } from '../src/store/reducer';
import { chapterProgress, formProgress, recommendation } from '../src/store/selectors';
import { mulberry32 } from '../src/utils/random';

const ctx: QuizContext = { form: 4, perQuiz: 10, shuffleOptions: true, wrongIds: [], savedIds: [], today: '2026-11-24' };

/* ───────── Content integrity: catches broken data when new content is added ───────── */

test('syllabus has 10 chapters per Tingkatan with unique ids', () => {
  assert.equal(chapters.filter((c) => c.form === 4).length, 10);
  assert.equal(chapters.filter((c) => c.form === 5).length, 10);
  const ids = chapters.flatMap((c) => [c.id, ...c.subtopics.map((s) => s.id)]);
  assert.equal(new Set(ids).size, ids.length);
});

test('every note belongs to a known subtopic and has a source', () => {
  for (const n of allNotes) {
    assert.ok(getSubtopic(n.subtopicId), `note ${n.subtopicId} has no subtopic`);
    assert.ok(n.source.label.length > 10);
    assert.ok(n.blocks.length > 0);
  }
});

test('every question is well-formed', () => {
  const ids = new Set<string>();
  for (const q of allQuestions) {
    assert.ok(!ids.has(q.id), `duplicate question id ${q.id}`);
    ids.add(q.id);
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options).size, 4, `${q.id} has duplicate options`);
    assert.ok(q.answer >= 0 && q.answer <= 3, q.id);
    assert.ok(q.explanation.length > 10, q.id);
    const ch = chapters.find((c) => c.id === q.chapterId);
    assert.ok(ch, `${q.id} unknown chapter`);
    assert.equal(ch!.form, q.form, `${q.id} form mismatch`);
    if (q.subtopicId) assert.equal(getSubtopic(q.subtopicId)?.chapter.id, q.chapterId, `${q.id} subtopic mismatch`);
  }
});

test('SPM items and featured facts point to real chapters, SPM items are labelled as samples', () => {
  for (const it of spmItems) {
    assert.ok(chapters.some((c) => c.id === it.chapterId), it.id);
    assert.equal(it.source.status, 'contoh', `${it.id} must be labelled as sample content`);
    for (const p of it.parts) assert.ok(p.points.length >= 1 && p.marks > 0, it.id);
  }
  for (const f of featuredFacts) {
    assert.ok(chapters.some((c) => c.id === f.chapterId), f.id);
    if (f.subtopicId) assert.ok(getNote(f.subtopicId), `${f.id} links to a subtopic without notes`);
  }
});

/* ───────── Quiz engine ───────── */

test('chapter quiz keeps the correct answer mapped after shuffling options', () => {
  const quiz = buildQuiz('bab-t4-b1', ctx, mulberry32(42));
  assert.ok(quiz);
  assert.equal(quiz!.questions.length, 10);
  for (const pq of quiz!.questions) {
    assert.equal(pq.order[pq.correctIndex], pq.question.answer);
    assert.deepEqual([...pq.order].sort(), [0, 1, 2, 3]);
  }
});

test('daily quiz is stable within a day and has the daily size', () => {
  const a = buildQuiz('harian', ctx)!;
  const b = buildQuiz('harian', ctx)!;
  assert.equal(a.questions.length, DAILY_SIZE);
  assert.deepEqual(
    a.questions.map((q) => q.question.id),
    b.questions.map((q) => q.question.id),
  );
  const other = buildQuiz('harian', { ...ctx, today: '2026-11-25' })!;
  assert.notDeepEqual(
    a.questions.map((q) => q.question.id),
    other.questions.map((q) => q.question.id),
  );
});

test('special quiz modes', () => {
  assert.equal(buildQuiz('kesilapan', ctx), null, 'no wrong answers → no quiz');
  const wrong = buildQuiz('kesilapan', { ...ctx, wrongIds: ['q-t4b1-01', 'q-t5b1-02'] })!;
  assert.equal(wrong.questions.length, 2);
  assert.equal(buildQuiz('bab-t4-b2', ctx), null, 'chapter without questions → null');
  assert.equal(buildQuiz('nonsense', ctx), null);
  assert.ok(buildQuiz('topik-t5-b1-1', ctx)!.questions.every((q) => q.question.subtopicId === 't5-b1-1'));
  assert.ok(buildQuiz('kbat', ctx)!.questions.every((q) => q.question.kbat));
});

/* ───────── Dates & streaks ───────── */

test('streak counts consecutive days and tolerates no activity yet today', () => {
  const today = new Date('2026-11-24T10:00:00');
  assert.equal(computeStreak(['2026-11-22', '2026-11-23', '2026-11-24'], today), 3);
  assert.equal(computeStreak(['2026-11-22', '2026-11-23'], today), 2);
  assert.equal(computeStreak(['2026-11-20', '2026-11-22'], today), 0);
  assert.equal(longestStreak(['2026-10-30', '2026-10-31', '2026-11-01', '2026-11-05']), 3);
  assert.equal(dayKey(today), '2026-11-24');
});

/* ───────── Search ───────── */

test('search finds subtopics by keyword and body text, case/accent insensitive', () => {
  assert.ok(searchContent('bendahara').some((r) => r.subtopic?.id === 't4-b1-3'));
  assert.ok(searchContent('KEDAULATAN').some((r) => r.chapter.id === 't5-b1'));
  assert.ok(searchContent('Telaga Batu').some((r) => r.subtopic?.id === 't4-b1-1'));
  assert.equal(searchContent('a').length, 0);
});

/* ───────── State ───────── */

test('reducer: read, bookmark, attempts, wrong bank and reset', () => {
  let s = createInitialState(0);
  s = reducer(s, { type: 'onboard', name: '  Aisyah ', form: 5 });
  assert.equal(s.profile.name, 'Aisyah');
  assert.equal(s.profile.form, 5);

  s = reducer(s, { type: 'markRead', subtopicId: 't4-b1-1', read: true, at: new Date('2026-11-24T09:00:00').getTime() });
  s = reducer(s, { type: 'markRead', subtopicId: 't4-b1-1', read: true }); // idempotent
  assert.equal(s.activity['2026-11-24'], 1);
  assert.equal(chapterProgress(s, chapters[0]), 0.25);

  s = reducer(s, { type: 'toggleBookmark', bookmarkType: 'nota', refId: 't4-b1-1' });
  assert.equal(s.bookmarks.length, 1);
  s = reducer(s, { type: 'toggleBookmark', bookmarkType: 'nota', refId: 't4-b1-1' });
  assert.equal(s.bookmarks.length, 0);

  const base = { id: 'a', key: 'bab-t4-b1', title: 'x', durationSec: 10, at: Date.now() };
  s = reducer(s, { type: 'recordAttempt', attempt: { ...base, score: 1, total: 2, wrongIds: ['q1'], correctIds: ['q2'] } });
  assert.deepEqual(Object.keys(s.wrongBank), ['q1']);
  s = reducer(s, { type: 'recordAttempt', attempt: { ...base, id: 'b', score: 1, total: 1, wrongIds: [], correctIds: ['q1'] } });
  assert.deepEqual(Object.keys(s.wrongBank), [], 'answering correctly later clears the mistake');

  s = reducer(s, { type: 'markChapter', chapterId: 't4-b2', done: true });
  assert.ok(formProgress(s, 4) > 0);
  s = reducer(s, { type: 'resetProgress' });
  assert.equal(s.attempts.length, 0);
  assert.equal(s.profile.name, 'Aisyah', 'reset progress keeps the profile');
});

test('migrate tolerates missing, partial and corrupt saved data', () => {
  assert.equal(migrate(null).profile.form, 4);
  const partial = migrate({ profile: { name: 'Ali', form: 5, onboarded: true }, prefs: { perQuiz: 5 } });
  assert.equal(partial.profile.name, 'Ali');
  assert.equal(partial.prefs.perQuiz, 5);
  assert.equal(partial.prefs.fontScale, 'sederhana', 'new prefs get defaults');
  assert.deepEqual(migrate({ bookmarks: 'oops' }).bookmarks, []);
});

test('recommendation walks the syllabus in order', () => {
  let s = reducer(createInitialState(0), { type: 'onboard', name: '', form: 4 });
  let r = recommendation(s);
  assert.equal(r.kind, 'read');
  assert.equal(r.kind === 'read' && r.subtopicId, 't4-b1-1');
  for (const id of ['t4-b1-1', 't4-b1-2', 't4-b1-3', 't4-b1-4']) s = reducer(s, { type: 'markRead', subtopicId: id, read: true });
  r = recommendation(s);
  assert.equal(r.kind, 'quiz', 'after reading all notes, suggest the chapter quiz');
});
