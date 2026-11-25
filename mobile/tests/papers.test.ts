import { test } from 'node:test';
import assert from 'node:assert/strict';
import { papers, getPaper } from '../src/data/papers';
import { k2Sets } from '../src/data/k2';
import { k2Items } from '../src/data/k2/k2';
import { spmItems, spmItemsFor } from '../src/data/spm';
import { chapters, getChapter } from '../src/data/syllabus';
import { parseQuestionText } from '../src/utils/questionText';
import { createInitialState, migrate, reducer } from '../src/store/reducer';
import { exportBackup, parseBackup } from '../src/utils/backup';
import { allDates, dateSortKey, glossary } from '../src/data/extras';
import { clock, displayName } from '../src/utils/date';

/* ───────── Kertas 1 papers ───────── */

test('every Kertas 1 paper has 40 well-formed questions linked to real subtopics', () => {
  assert.ok(papers.length >= 2);
  const ids = new Set<string>();
  for (const p of papers) {
    assert.ok(!ids.has(p.id), `duplicate paper ${p.id}`);
    ids.add(p.id);
    assert.equal(p.q.length, 40, `${p.id} should have 40 questions`);
    assert.equal(p.minutes, 60);
    p.q.forEach((q, i) => {
      const where = `${p.id} soalan ${i + 1}`;
      assert.equal(q.o.length, 4, where);
      assert.equal(new Set(q.o).size, 4, `${where} has duplicate options`);
      assert.ok(q.a >= 0 && q.a <= 3, where);
      assert.ok(q.e.length > 30, `${where} needs the scheme explanation`);
      assert.ok([1, 2, 3].includes(q.lv), where);
      const ch = getChapter(q.c);
      assert.ok(ch, `${where} unknown chapter ${q.c}`);
      if (p.scope === 'T4') assert.equal(ch!.form, 4, `${where} is outside Tingkatan 4`);
      assert.ok(ch!.subtopics.some((s) => s.code === q.t), `${where} unknown subtopic ${q.t} in ${q.c}`);
      assert.ok(parseQuestionText(q.s).length >= 1, where);
    });
  }
  assert.equal(getPaper('nope'), undefined);
});

test('answer keys match the Skema Jawapan for the imported sets', () => {
  const key = (id: string) => getPaper(id)!.q.map((q) => 'ABCD'[q.a]).join('');
  assert.equal(key('k1-t4-01'), 'ABCDBACDACBDCABDCBADBCADCBDACBADBCDABCDA');
  assert.equal(key('k1-t4-03'), 'BDACCBADBACBADDCABCDABCDACBADBCADCBDABDC');
  assert.equal(key('k1-penuh-01'), 'BCADABDCABDCBACDABCDADBCADBCABDCBADCBDAC');
  assert.equal(key('k1-penuh-02'), 'ACBBDACDBACDBADCABDCBADCBADCBACDABDCADBC');
  assert.equal(key('k1-t4-02'), 'CAADBCBDACDBBACDABDCBADCBADCBACDBDACBADC');
  assert.equal(key('k1-t4-04'), 'DBBACADCBDACABDCBADCABCDADBCABDCABCDACBD');
  assert.equal(key('k1-t4-05'), 'ACDBDCBACADBCDADBCABCDBACBDADABCADBCDBCA');
  assert.equal(key('k1-t4-06'), 'BACDABCDCABDADCBDACBACDBADCBDACBADCBACDB');
  assert.equal(key('k1-t4-07'), 'CBBDACADBCCADBDACBADCBDACDBACBADACBDACBD');
  assert.equal(key('k1-t4-08'), 'DACBCDADBCABDCABDACABDCBACDBACBBDACDBCAD');
  assert.equal(key('k1-t4-09'), 'ADBCCADBDACBADBCADBCDABCADBCDABCDACBADBC');
  assert.equal(key('k1-t4-10'), 'CADBACBDACDBADCBACDBADCBADCBDACBADBCDABC');
  assert.equal(key('k1-penuh-03'), 'BDACCADBACCDBADBCADBCADBACBDACBDACBDCADB');
  assert.equal(key('k1-penuh-04'), 'DACBADCBADBCADBCADCBACDBCADBCADBCABDCABD');
  assert.equal(key('k1-penuh-05'), 'CBADBCADBCADCBADCBADBACDBACDABDCABCDACBD');
  assert.equal(key('k1-penuh-06'), 'ACDBACBDACDBCADBACDBCABDCABDCADBCDABCDAB');
  assert.equal(key('k1-penuh-07'), 'BCADCBDABCADBCADBACDABCDABCDABCDABCDABCD');
  assert.equal(key('k1-penuh-08'), 'CABDBCADCBADCBADBCADCBDACDBADCBACDABCDBA');
  assert.equal(key('k1-penuh-09'), 'BDACBADCABDCBADCABDCBACDBACDBACDABCDBACD');
});

test('question text parser recognises boxes, tables and statements', () => {
  const blocks = parseQuestionText('Intro\n> a\n> b\n| H1 | H2\n| x | y\nI satu\nII dua\nAkhir');
  assert.deepEqual(
    blocks.map((b) => b.kind),
    ['para', 'box', 'table', 'items', 'para'],
  );
  const box = blocks[1];
  assert.equal(box.kind === 'box' ? box.lines.length : 0, 2);
  const table = blocks[2];
  assert.deepEqual(table.kind === 'table' ? table.rows[1] : [], ['x', 'y']);
});

/* ───────── Kertas 2 ───────── */

test('Kertas 2 sets turn into struktur, esei and KBAT items with marks that add up', () => {
  for (const s of k2Sets) {
    const a = s.questions.filter((q) => q.section === 'A');
    const b = s.questions.filter((q) => q.section === 'B');
    const marks = (qs: typeof a) => qs.reduce((n, q) => n + q.parts.reduce((m, p) => m + p.marks, 0), 0);
    assert.equal(marks(a), 40, `${s.id} section A should total 40`);
    assert.equal(marks(b), 20 * b.length, `${s.id} each essay should total 20`);
    for (const q of s.questions) {
      assert.ok(chapters.some((c) => c.id === q.chapterId), `${s.id} q${q.n}`);
      for (const p of q.parts) {
        assert.ok(p.points.length >= p.marks || p.rubric, `${s.id} q${q.n} ${p.label} has too few points`);
        if (p.rubric) assert.ok(p.kbat, `${s.id} q${q.n} rubric parts are KBAT`);
      }
    }
    assert.equal(s.questions.length, 9, `${s.id} should have 9 questions`);
    assert.deepEqual(s.questions.map((q) => q.n), [1, 2, 3, 4, 5, 6, 7, 8, 9], `${s.id} question numbers`);
    for (const q of s.questions) assert.equal(q.section, q.n <= 4 ? 'A' : 'B', `${s.id} q${q.n} section`);
    for (const q of b) assert.ok(q.parts.some((p) => p.rubric), `${s.id} q${q.n} essay needs a rubric KBAT part`);
    for (const q of a) assert.ok(q.parts.some((p) => p.kbat), `${s.id} q${q.n} needs a KBAT part`);
    const items = k2Items(s);
    assert.equal(items.filter((i) => i.category === 'k2-struktur').length, a.length);
    assert.equal(items.filter((i) => i.category === 'k2-esei').length, b.length);
  }
  // Every Kertas 2 set in the Drive Bank Soalan is imported: Tingkatan 4 sets 1 to 10 and Format Penuh sets 1 to 10.
  const ids = k2Sets.map((s) => s.id).sort();
  const want = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].flatMap((n) => [`k2-penuh-${String(n).padStart(2, '0')}`, `k2-t4-${String(n).padStart(2, '0')}`]).sort();
  assert.deepEqual(ids, want, 'all 20 Kertas 2 sets are present');
  assert.equal(spmItemsFor('k2-struktur').length, 80);
  assert.equal(spmItemsFor('k2-esei').length, 100);
  assert.equal(spmItemsFor('kbat').length, 180, 'one KBAT item per struktur and esei question');
  assert.equal(new Set(spmItems.map((i) => i.id)).size, spmItems.length, 'SPM item ids are unique');
  assert.ok(spmItems.every((i) => i.source.status === 'bank'));
});

/* ───────── State: papers, marks, backup ───────── */

test('paper drafts resume, and finishing a paper clears the draft and counts as activity', () => {
  let s = createInitialState();
  const answers = Array(40).fill(-1);
  answers[0] = 2;
  s = reducer(s, { type: 'savePaperDraft', draft: { paperId: 'k1-t4-03', answers, elapsedSec: 120, updatedAt: 1 } });
  assert.equal(s.paperDraft?.answers[0], 2);
  const at = new Date('2026-11-24T10:00:00').getTime();
  s = reducer(s, { type: 'recordPaper', attempt: { id: 'x', paperId: 'k1-t4-03', answers, score: 1, total: 40, durationSec: 300, at } });
  assert.equal(s.paperDraft, null);
  assert.equal(s.paperAttempts.length, 1);
  assert.equal(s.activity['2026-11-24'], 1);
  s = reducer(s, { type: 'saveK2Mark', itemId: 'k2-t4-01-s1', mark: { score: 7, total: 10, at } });
  s = reducer(s, { type: 'saveK2Mark', itemId: 'k2-t4-01-s1', mark: { score: 8, total: 10, at } });
  assert.equal(s.k2Marks['k2-t4-01-s1'].score, 8);
  assert.equal(s.activity['2026-11-24'], 2, 'only the first mark of an item counts as new activity');
  s = reducer(s, { type: 'resetProgress' });
  assert.equal(s.paperAttempts.length, 0);
  assert.deepEqual(s.k2Marks, {});
});

test('old saves gain the new fields, and a backup restores the same progress', () => {
  const old = migrate({ profile: { name: 'Aisyah', form: 5, onboarded: true, createdAt: 1 }, readSubtopics: { 't5-b1-1': 5 } });
  assert.deepEqual(old.paperAttempts, []);
  assert.equal(old.paperDraft, null);
  assert.deepEqual(old.k2Marks, {});

  const text = exportBackup(old);
  const back = parseBackup(`Salinan saya:\n${text}\n`);
  assert.ok(back.ok);
  if (back.ok) {
    assert.equal(back.state.profile.name, 'Aisyah');
    assert.equal(back.state.readSubtopics['t5-b1-1'], 5);
  }
  assert.equal(parseBackup('hello').ok, false);
  assert.equal(parseBackup(text.slice(0, 40)).ok, false);
});

/* ───────── Timeline, glossary, helpers ───────── */

test('timeline is in date order and every entry is dated', () => {
  assert.ok(dateSortKey('Abad ke-1') < dateSortKey('424 M'));
  assert.ok(dateSortKey('424 M') < dateSortKey('1511'));
  assert.ok(dateSortKey('16 Jun 1948') < dateSortKey('18 Jun 1948'));
  assert.ok(dateSortKey('Jun 1948') < dateSortKey('Okt 1948'));
  const d = allDates();
  assert.ok(d.length > 150);
  for (let i = 1; i < d.length; i++) assert.ok(d[i - 1].key <= d[i].key);
  assert.ok(d.every((e) => e.key < Number.MAX_SAFE_INTEGER), 'every date has a year or century');
  assert.ok(glossary().length > 300);
});

test('display name drops bin/binti and the clock formats exam time', () => {
  assert.equal(displayName('Nur Aisyah Binti Abdullah'), 'Nur Aisyah');
  assert.equal(displayName('Muhammad Hafiz bin Ali'), 'Muhammad Hafiz');
  assert.equal(displayName('  Ravi a/l Kumar '), 'Ravi');
  assert.equal(displayName('Mei Ling'), 'Mei Ling');
  assert.equal(clock(3600), '1:00:00');
  assert.equal(clock(59 * 60 + 5), '59:05');
});
