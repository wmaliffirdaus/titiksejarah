import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseNoteMarkdown } from '../src/data/md';
import { packs } from '../src/data/packs';
import { chapters, getSubtopic, subtopicIdFor } from '../src/data/syllabus';
import { getNote } from '../src/data/notes';
import { allQuestions } from '../src/data/quiz';
import { flashcardsFor, getExtras } from '../src/data/extras';
import { createInitialState, migrate, reducer } from '../src/store/reducer';

test('markdown dialect parses every block type', () => {
  const blocks = parseNoteMarkdown(`
Para line one
continues **here**.

## Heading
- a
- b
1. first
| Col A | Col B |
|---|---|
| x | y |
@ 1946 | Malayan Union
@ 1948 | Persekutuan
> [ingat] Remember this
> [definisi: Istilah] Maksud
> [unknown] falls back to info
`);
  assert.deepEqual(blocks.map((b) => b.type), ['para', 'heading', 'list', 'list', 'table', 'timeline', 'callout', 'callout', 'callout']);
  assert.equal(blocks[0].type === 'para' && blocks[0].text, 'Para line one continues **here**.');
  const t = blocks[4];
  assert.ok(t.type === 'table' && t.columns.length === 2 && t.rows[0][1] === 'y');
  const c = blocks[7];
  assert.ok(c.type === 'callout' && c.variant === 'definisi' && c.title === 'Istilah');
  const f = blocks[8];
  assert.ok(f.type === 'callout' && f.variant === 'info');
});

test('every chapter pack is valid', () => {
  const ids = new Set<string>();
  for (const p of packs) {
    assert.ok(!ids.has(p.id), `duplicate pack ${p.id}`);
    ids.add(p.id);
    const ch = chapters.find((c) => c.id === p.id);
    assert.ok(ch, `pack ${p.id} has no chapter`);
    assert.ok(p.source.length > 10, `${p.id} needs a source`);
    const codes = new Set<string>();
    for (const s of p.subtopics ?? []) {
      assert.match(s.code, new RegExp(`^${ch!.number}\\.\\d+$`), `${p.id} bad code ${s.code}`);
      assert.ok(!codes.has(s.code), `${p.id} duplicate code ${s.code}`);
      codes.add(s.code);
      const id = subtopicIdFor(p.id, s.code);
      assert.ok(getSubtopic(id), `${id} missing from syllabus`);
      const note = getNote(id);
      assert.ok(note && note.blocks.length >= 1, `${id} has no content`);
      assert.ok(s.summary.length > 15, `${id} needs a summary`);
    }
    for (const q of p.questions ?? []) {
      assert.ok(p.subtopics?.some((s) => s.code === q[0]) || ch!.subtopics.some((s) => s.code === q[0]), `${p.id} question links to unknown subtopic ${q[0]}`);
    }
    for (const [a, b] of [...(p.terms ?? []), ...(p.people ?? []), ...(p.dates ?? [])]) assert.ok(a && b, `${p.id} empty card`);
  }
});

test('pack questions are converted with unique ids and correct chapter', () => {
  const ids = allQuestions.map((q) => q.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const q of allQuestions) assert.ok(chapters.some((c) => c.id === q.chapterId && c.form === q.form), q.id);
});

test('extras and flashcards for Bab 1', () => {
  assert.ok(flashcardsFor('t4-b1').length >= 20);
  assert.equal(getExtras('t4-b1').focus.length, 12);
  assert.deepEqual(flashcardsFor('nope'), []);
  const ids = flashcardsFor('t5-b1').map((c) => c.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('reducer: flashcards, focus checklist, activity and migration of new fields', () => {
  let s = createInitialState(0);
  s = reducer(s, { type: 'setCardKnown', cardId: 't4-b1:istilah:0', known: true });
  s = reducer(s, { type: 'setCardKnown', cardId: 't5-b1:istilah:0', known: true });
  s = reducer(s, { type: 'resetCards', chapterId: 't4-b1' });
  assert.deepEqual(Object.keys(s.knownCards), ['t5-b1:istilah:0']);
  s = reducer(s, { type: 'toggleFocus', key: 't4-b1:0' });
  assert.ok(s.focusChecks['t4-b1:0']);
  s = reducer(s, { type: 'toggleFocus', key: 't4-b1:0' });
  assert.equal(s.focusChecks['t4-b1:0'], undefined);
  s = reducer(s, { type: 'logActivity', at: new Date('2026-11-24T10:00:00').getTime() });
  assert.equal(s.activity['2026-11-24'], 1);
  // Saved data from the first APK (no new fields) must still load.
  const old = migrate({ profile: { name: 'A', form: 4, onboarded: true }, prefs: { perQuiz: 5 } });
  assert.deepEqual(old.knownCards, {});
  assert.equal(old.prefs.reminder.enabled, false);
  assert.equal(old.prefs.reminder.hour, 20);
});
