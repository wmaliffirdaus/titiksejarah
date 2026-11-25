import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AppState as RNAppState, Pressable, ScrollView, type ScrollViewInstance, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, shadow, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { Button, Card, EmptyState, IconButton, List, ListRow, ProgressBar, Segmented, Stat, TickRing } from '../../components/ui';
import { OptionText, QuestionText } from '../../components/QuestionText';
import { useApp } from '../../store/AppProvider';
import { getPaper, paperTitle } from '../../data/papers';
import { PAPER_SOURCE, type Paper } from '../../data/papers/paper';
import { getChapter } from '../../data/syllabus';
import { clock, shortDate } from '../../utils/date';
import type { PaperAttempt } from '../../types/state';

type Phase = 'intro' | 'exam' | 'result' | 'review';
const LETTERS = ['A', 'B', 'C', 'D'];
const LEVELS = ['', 'Mudah', 'Sederhana', 'Sukar'];

export default function PaperScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const paper = getPaper(String(id));
  if (!paper) {
    return (
      <Screen header={<StackHeader title="Kertas 1" />}>
        <EmptyState title="Kertas tidak dijumpai" message="Kertas ini mungkin telah dikemas kini." action="Senarai kertas" onAction={() => router.replace('/kertas')} />
      </Screen>
    );
  }
  return <PaperRunner paper={paper} />;
}

function PaperRunner({ paper }: { paper: Paper }) {
  const { state, dispatch } = useApp();
  const insets = useSafeAreaInsets();
  const total = paper.q.length;
  const limit = paper.minutes * 60;
  const draft = state.paperDraft;
  const myDraft = draft?.paperId === paper.id ? draft : null;
  const otherDraft = draft && draft.paperId !== paper.id ? draft : null;
  const attempts = state.paperAttempts.filter((a) => a.paperId === paper.id);

  const [phase, setPhase] = useState<Phase>('intro');
  const [answers, setAnswers] = useState<number[]>(() => Array(total).fill(-1));
  const [idx, setIdx] = useState(0);
  const [base, setBase] = useState(0);
  const sessionStart = useRef(Date.now());
  const [now, setNow] = useState(Date.now());
  const [sheet, setSheet] = useState(false);
  const [confirm, setConfirm] = useState<null | 'submit' | 'quit'>(null);
  const [result, setResult] = useState<PaperAttempt | null>(null);
  const [wrongOnly, setWrongOnly] = useState<'all' | 'wrong'>('wrong');
  const scrollRef = useRef<ScrollViewInstance>(null);

  const elapsedNow = useCallback(() => base + Math.floor((Date.now() - sessionStart.current) / 1000), [base]);
  const elapsed = phase === 'exam' ? base + Math.floor((now - sessionStart.current) / 1000) : base;
  const remaining = limit - elapsed;
  const answered = answers.filter((a) => a >= 0).length;

  const saveDraft = useCallback(
    (next: number[]) => dispatch({ type: 'savePaperDraft', draft: { paperId: paper.id, answers: next, elapsedSec: elapsedNow(), updatedAt: Date.now() } }),
    [dispatch, paper.id, elapsedNow],
  );

  function start(resume: boolean) {
    if (resume && myDraft) {
      setAnswers(myDraft.answers.length === total ? myDraft.answers : Array(total).fill(-1));
      setBase(myDraft.elapsedSec);
      const first = myDraft.answers.findIndex((a) => a < 0);
      setIdx(first >= 0 ? first : 0);
    } else {
      const fresh = Array(total).fill(-1);
      setAnswers(fresh);
      setBase(0);
      setIdx(0);
      dispatch({ type: 'savePaperDraft', draft: { paperId: paper.id, answers: fresh, elapsedSec: 0, updatedAt: Date.now() } });
    }
    sessionStart.current = Date.now();
    setNow(Date.now());
    setPhase('exam');
  }

  // Clock
  useEffect(() => {
    if (phase !== 'exam') return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  // Keep the draft when the app goes to the background.
  const answersRef = useRef(answers);
  answersRef.current = answers;
  useEffect(() => {
    if (phase !== 'exam') return;
    const sub = RNAppState.addEventListener('change', (s) => {
      if (s !== 'active') saveDraft(answersRef.current);
    });
    return () => sub.remove();
  }, [phase, saveDraft]);

  const submit = useCallback(() => {
    const final = answersRef.current;
    const score = final.reduce((s, a, i) => s + (a === paper.q[i].a ? 1 : 0), 0);
    const attempt: PaperAttempt = {
      id: `${paper.id}-${Date.now()}`,
      paperId: paper.id,
      answers: final,
      score,
      total,
      durationSec: Math.min(limit, elapsedNow()),
      at: Date.now(),
    };
    dispatch({ type: 'recordPaper', attempt });
    setResult(attempt);
    setBase(attempt.durationSec);
    setConfirm(null);
    setSheet(false);
    setPhase('result');
  }, [dispatch, paper, total, limit, elapsedNow]);

  // Time is up: hand in automatically.
  useEffect(() => {
    if (phase === 'exam' && remaining <= 0) submit();
  }, [phase, remaining, submit]);

  function choose(option: number) {
    const next = [...answers];
    next[idx] = next[idx] === option ? -1 : option;
    setAnswers(next);
    saveDraft(next);
  }

  function go(i: number) {
    setIdx(Math.max(0, Math.min(total - 1, i)));
    setSheet(false);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  function quit() {
    saveDraft(answers);
    setConfirm(null);
    if (router.canGoBack()) router.back();
    else router.replace('/kertas');
  }

  /* ───────────── Intro ───────────── */
  if (phase === 'intro') {
    const last = attempts[0];
    return (
      <Screen header={<StackHeader title={paperTitle(paper)} subtitle="Kertas 1 · objektif" />}>
        <Text style={type.display}>Kertas 1</Text>
        <Text style={[type.body, { marginTop: spacing.xs }]}>
          {paper.scope === 'T4' ? 'Skop Tingkatan 4, bab 1 hingga 10.' : 'Format penuh SPM, Tingkatan 4 dan 5.'}
        </Text>
        <View style={styles.introStats}>
          <Stat value={total} label="soalan" />
          <Stat value={`${paper.minutes} min`} label="masa" />
          <Stat value={attempts.length} label="cubaan" />
        </View>

        <Card style={{ marginTop: spacing.xl, gap: spacing.sm }}>
          <Text style={type.subheading}>Peraturan</Text>
          <Text style={type.small}>1. Jawab semua soalan. Setiap soalan ada satu jawapan sahaja.</Text>
          <Text style={type.small}>2. Jawapan tidak ditanda semasa menjawab. Semakan dibuat selepas anda hantar.</Text>
          <Text style={type.small}>3. Kertas dihantar secara automatik apabila masa tamat.</Text>
          <Text style={type.small}>4. Jika anda keluar, jawapan dan masa disimpan untuk disambung.</Text>
        </Card>

        {otherDraft ? (
          <Text style={[type.small, { color: brand.red, marginTop: spacing.lg }]}>
            Ada kertas lain yang belum siap. Jika anda mula kertas ini, jawapan kertas itu akan dibuang.
          </Text>
        ) : null}

        <View style={{ gap: spacing.sm, marginTop: spacing.xl }}>
          {myDraft ? (
            <>
              <Button
                label={`Sambung (${myDraft.answers.filter((a) => a >= 0).length}/${total} dijawab, baki ${clock(limit - myDraft.elapsedSec)})`}
                onPress={() => start(true)}
              />
              <Button label="Mula semula dari awal" variant="secondary" onPress={() => start(false)} />
            </>
          ) : (
            <Button label="Mula menjawab" onPress={() => start(false)} />
          )}
          {last ? (
            <Button
              label={`Semak cubaan terakhir (${last.score}/${last.total}, ${shortDate(last.at)})`}
              variant="ghost"
              onPress={() => {
                setResult(last);
                setAnswers(last.answers);
                setBase(last.durationSec);
                setPhase('result');
              }}
            />
          ) : null}
        </View>
        <Text style={styles.source}>{PAPER_SOURCE}</Text>
      </Screen>
    );
  }

  /* ───────────── Result ───────────── */
  if (phase === 'result' && result) {
    return <PaperResult paper={paper} attempt={result} onReview={() => setPhase('review')} onRetry={() => start(false)} />;
  }

  /* ───────────── Review ───────────── */
  if (phase === 'review' && result) {
    const list = paper.q.map((q, i) => ({ q, i, mine: result.answers[i] ?? -1 })).filter((x) => wrongOnly === 'all' || x.mine !== x.q.a);
    return (
      <Screen header={<StackHeader title="Semakan jawapan" subtitle={paperTitle(paper)} onBack={() => setPhase('result')} />}>
        <Segmented
          options={[
            { value: 'wrong', label: `Salah dan kosong (${total - result.score})` },
            { value: 'all', label: `Semua (${total})` },
          ]}
          value={wrongOnly}
          onChange={setWrongOnly}
        />
        {list.length === 0 ? (
          <EmptyState title="Semua betul" message="Tiada jawapan salah dalam cubaan ini." />
        ) : (
          list.map(({ q, i, mine }) => {
            const ch = getChapter(q.c);
            const right = mine === q.a;
            return (
              <View key={i} style={styles.reviewItem}>
                <View style={styles.reviewHead}>
                  <Text style={styles.qNum}>{i + 1}</Text>
                  <Text style={[type.caption, { flex: 1 }]}>
                    {ch ? `Tingkatan ${ch.form}, Bab ${ch.number}` : ''} · {q.t} · {LEVELS[q.lv]}
                  </Text>
                  <Text style={[styles.verdict, { color: right ? brand.navy : brand.red }]}>{right ? 'Betul' : mine < 0 ? 'Kosong' : 'Salah'}</Text>
                </View>
                <QuestionText text={q.s} scale={0.94} />
                <View style={{ gap: 6, marginTop: spacing.md }}>
                  {q.o.map((o, oi) => {
                    const isAns = oi === q.a;
                    const isMine = oi === mine;
                    return (
                      <View key={oi} style={[styles.revOpt, isAns && styles.revOptRight, isMine && !isAns && styles.revOptWrong]}>
                        <Text style={[styles.revLetter, isMine && !isAns && { color: brand.red }]}>{LETTERS[oi]}</Text>
                        <OptionText text={o} color={isMine && !isAns ? brand.red : brand.navy} />
                        {isAns ? <Ionicons name="checkmark" size={18} color={brand.navy} /> : isMine ? <Ionicons name="close" size={18} color={brand.red} /> : null}
                      </View>
                    );
                  })}
                </View>
                <View style={styles.explain}>
                  <Text style={type.body}>{q.e}</Text>
                  {q.p ? (
                    <Text style={[type.caption, { marginTop: 6 }]}>
                      Buku teks Tingkatan {ch?.form ?? ''}, halaman {q.p}
                    </Text>
                  ) : null}
                </View>
              </View>
            );
          })
        )}
      </Screen>
    );
  }

  /* ───────────── Exam ───────────── */
  const q = paper.q[idx];
  const low = remaining <= 300;
  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.examBar}>
        <IconButton icon="close" label="Keluar" onPress={() => setConfirm('quit')} />
        <View style={{ flex: 1 }}>
          <Text style={type.caption}>
            Soalan {idx + 1} daripada {total}
          </Text>
          <ProgressBar value={answered / total} style={{ marginTop: 6 }} />
        </View>
        <View style={[styles.timer, low && styles.timerLow]} accessibilityLabel={`Baki masa ${clock(remaining)}`}>
          <Ionicons name="time-outline" size={15} color={low ? brand.red : brand.navy} />
          <Text style={[styles.timerText, low && { color: brand.red }]}>{clock(remaining)}</Text>
        </View>
        <IconButton icon="grid-outline" label="Kertas jawapan" onPress={() => setSheet(true)} />
      </View>

      <ScrollView ref={scrollRef} contentContainerStyle={{ padding: spacing.lg, paddingBottom: spacing.xxxl }}>
        <Text style={styles.bigNum}>{idx + 1}</Text>
        <QuestionText text={q.s} />
        <View style={{ gap: spacing.sm, marginTop: spacing.xl }}>
          {q.o.map((o, oi) => {
            const sel = answers[idx] === oi;
            return (
              <Pressable
                key={oi}
                onPress={() => choose(oi)}
                style={[styles.opt, sel && styles.optSel]}
                accessibilityRole="radio"
                accessibilityState={{ selected: sel }}
                accessibilityLabel={`Pilihan ${LETTERS[oi]}`}
              >
                <View style={[styles.bubble, sel && styles.bubbleSel]}>
                  <Text style={[styles.bubbleText, sel && { color: brand.white }]}>{LETTERS[oi]}</Text>
                </View>
                <OptionText text={o} />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={[styles.examFoot, { paddingBottom: insets.bottom + spacing.md }]}>
        <Button label="Sebelum" variant="secondary" onPress={() => go(idx - 1)} disabled={idx === 0} style={{ flex: 1 }} />
        {idx < total - 1 ? (
          <Button label="Seterusnya" onPress={() => go(idx + 1)} style={{ flex: 1 }} />
        ) : (
          <Button label="Hantar kertas" variant="gold" onPress={() => setConfirm('submit')} style={{ flex: 1 }} />
        )}
      </View>

      {sheet ? (
        <View style={styles.overlay}>
          <View style={[styles.sheet, { paddingBottom: insets.bottom + spacing.lg }]}>
            <View style={styles.sheetHead}>
              <Text style={type.heading}>Kertas jawapan</Text>
              <IconButton icon="close" label="Tutup" onPress={() => setSheet(false)} />
            </View>
            <Text style={type.small}>
              {answered} dijawab, {total - answered} kosong. Ketik nombor untuk ke soalan itu.
            </Text>
            <View style={styles.grid}>
              {answers.map((a, i) => (
                <Pressable key={i} onPress={() => go(i)} style={[styles.cell, a >= 0 && styles.cellDone, i === idx && styles.cellNow]} accessibilityLabel={`Soalan ${i + 1}`}>
                  <Text style={[styles.cellNum, a >= 0 && { color: brand.white }]}>{i + 1}</Text>
                  <Text style={[styles.cellAns, a >= 0 && { color: brand.gold }]}>{a >= 0 ? LETTERS[a] : '·'}</Text>
                </Pressable>
              ))}
            </View>
            <Button label="Hantar kertas" variant="gold" onPress={() => setConfirm('submit')} style={{ marginTop: spacing.lg }} />
          </View>
        </View>
      ) : null}

      {confirm ? (
        <View style={[styles.overlay, { justifyContent: 'center', padding: spacing.xl }]}>
          <Card style={{ gap: spacing.md }}>
            {confirm === 'submit' ? (
              <>
                <Text style={type.heading}>Hantar kertas?</Text>
                <Text style={type.body}>
                  {total - answered > 0
                    ? `${total - answered} soalan masih kosong. Soalan kosong dikira salah.`
                    : 'Semua soalan sudah dijawab. Anda tidak boleh mengubah jawapan selepas menghantar.'}
                </Text>
                <Button label="Hantar sekarang" variant="gold" onPress={submit} />
                <Button label="Semak semula dahulu" variant="secondary" onPress={() => setConfirm(null)} />
              </>
            ) : (
              <>
                <Text style={type.heading}>Keluar dahulu?</Text>
                <Text style={type.body}>Jawapan dan baki masa disimpan. Anda boleh sambung bila-bila masa dari senarai kertas.</Text>
                <Button label="Simpan dan keluar" onPress={quit} />
                <Button label="Teruskan menjawab" variant="secondary" onPress={() => setConfirm(null)} />
              </>
            )}
          </Card>
        </View>
      ) : null}
    </View>
  );
}

function PaperResult({ paper, attempt, onReview, onRetry }: { paper: Paper; attempt: PaperAttempt; onReview: () => void; onRetry: () => void }) {
  const pct = Math.round((attempt.score / attempt.total) * 100);
  const blank = attempt.answers.filter((a) => a < 0).length;

  const byChapter = useMemo(() => {
    const m = new Map<string, { right: number; total: number }>();
    paper.q.forEach((q, i) => {
      const e = m.get(q.c) ?? { right: 0, total: 0 };
      e.total++;
      if (attempt.answers[i] === q.a) e.right++;
      m.set(q.c, e);
    });
    return [...m.entries()];
  }, [paper, attempt]);

  const byLevel = [1, 2, 3].map((lv) => {
    const qs = paper.q.map((q, i) => ({ q, i })).filter((x) => x.q.lv === lv);
    return { lv, total: qs.length, right: qs.filter((x) => attempt.answers[x.i] === x.q.a).length };
  });

  const weakest = byChapter
    .map(([c, v]) => ({ c, ...v, r: v.right / v.total }))
    .filter((x) => x.r < 0.6)
    .sort((a, b) => a.r - b.r)
    .slice(0, 3);

  const verdict =
    pct >= 80 ? 'Cemerlang. Kekalkan dengan satu kertas setiap minggu.' : pct >= 60 ? 'Baik. Ulang kaji bab yang lemah di bawah.' : pct >= 40 ? 'Sederhana. Baca semula nota bab yang lemah, kemudian cuba lagi.' : 'Perlu usaha lagi. Mulakan dengan nota dan kuiz bab sebelum mencuba kertas penuh.';

  return (
    <Screen header={<StackHeader title="Keputusan" subtitle={paperTitle(paper)} />}>
      <View style={styles.scoreBlock}>
        <TickRing value={attempt.score} total={attempt.total} size={168} track={alpha(brand.white, 0.16)}>
          <Text style={styles.score}>
            {attempt.score}
            <Text style={styles.scoreOf}>/{attempt.total}</Text>
          </Text>
          <Text style={[type.subheading, { color: brand.gold }]}>{pct}%</Text>
        </TickRing>
        <Text style={[type.body, { textAlign: 'center', marginTop: spacing.lg, color: brand.white }]}>{verdict}</Text>
        <Text style={[type.small, { marginTop: spacing.sm, color: alpha(brand.white, 0.7) }]}>
          Masa {clock(attempt.durationSec)}
          {blank ? `, ${blank} soalan kosong` : ''}
        </Text>
      </View>

      <View style={{ gap: spacing.sm, marginTop: spacing.xl }}>
        <Button label="Semak jawapan dan penerangan" onPress={onReview} />
        <Button label="Cuba kertas ini sekali lagi" variant="secondary" onPress={onRetry} />
      </View>

      {weakest.length ? (
        <>
          <Text style={[type.heading, { marginTop: spacing.xxl, marginBottom: spacing.md }]}>Fokus seterusnya</Text>
          <List>
            {weakest.map((w) => {
              const ch = getChapter(w.c);
              return (
                <ListRow
                  key={w.c}
                  lead={String(ch?.number ?? '')}
                  title={ch?.title ?? w.c}
                  subtitle={`Tingkatan ${ch?.form}. Betul ${w.right} daripada ${w.total}.`}
                  onPress={() => router.push(`/bab/${w.c}`)}
                />
              );
            })}
          </List>
        </>
      ) : null}

      <Text style={[type.heading, { marginTop: spacing.xxl, marginBottom: spacing.md }]}>Mengikut aras</Text>
      <View style={styles.levelRow}>
        {byLevel.map((l) => (
          <Stat key={l.lv} value={`${l.right}/${l.total}`} label={LEVELS[l.lv]} />
        ))}
      </View>

      <Text style={[type.heading, { marginTop: spacing.xxl, marginBottom: spacing.md }]}>Mengikut bab</Text>
      <List>
        {byChapter.map(([c, v]) => {
          const ch = getChapter(c);
          return (
            <ListRow key={c} title={`T${ch?.form} Bab ${ch?.number}. ${ch?.title ?? ''}`} value={`${v.right}/${v.total}`} numberOfLines={1}>
              <ProgressBar value={v.right / v.total} color={v.right / v.total < 0.5 ? brand.red : brand.gold} style={{ marginTop: 6 }} />
            </ListRow>
          );
        })}
      </List>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  source: { ...type.small, fontSize: 12, marginTop: spacing.xl, opacity: 0.75 },
  introStats: {
    flexDirection: 'row',
    marginTop: spacing.xl,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: brand.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cardEdge,
    ...shadow.card,
  },
  examBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  timer: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, height: 32, borderRadius: radius.pill, backgroundColor: brand.white, ...shadow.soft },
  timerLow: { borderColor: brand.red, backgroundColor: colors.redSoft },
  timerText: { fontFamily: fonts.sansMedium, fontWeight: '700', fontSize: 14, color: brand.navy, fontVariant: ['tabular-nums'] },
  bigNum: { fontFamily: fonts.serif, fontSize: 34, lineHeight: 38, fontWeight: '700', color: brand.red, marginBottom: spacing.sm },
  opt: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    minHeight: 58,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: brand.white,
  },
  optSel: { borderColor: brand.navy, backgroundColor: alpha(brand.gold, 0.14) },
  bubble: { width: 32, height: 32, borderRadius: 11, borderWidth: 1.5, borderColor: alpha(brand.navy, 0.45), alignItems: 'center', justifyContent: 'center' },
  bubbleSel: { backgroundColor: brand.navy, borderColor: brand.navy },
  bubbleText: { fontFamily: fonts.sansMedium, fontWeight: '700', fontSize: 13, color: brand.navy },
  examFoot: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    backgroundColor: colors.background,
  },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: alpha(brand.black, 0.45), justifyContent: 'flex-end' },
  sheet: { backgroundColor: colors.background, borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl, padding: spacing.lg, gap: spacing.sm },
  sheetHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: spacing.sm },
  cell: {
    width: '18.4%',
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: brand.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellDone: { backgroundColor: brand.navy, borderColor: brand.navy },
  cellNow: { borderColor: brand.red, borderWidth: 2 },
  cellNum: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '600', color: colors.textMuted },
  cellAns: { fontFamily: fonts.serif, fontSize: 15, fontWeight: '700', color: colors.textSubtle },
  scoreBlock: { alignItems: 'center', padding: spacing.xl, borderRadius: radius.xl, backgroundColor: brand.navy, ...shadow.raised },
  score: { fontFamily: fonts.serif, fontSize: 44, lineHeight: 50, fontWeight: '700', color: brand.white },
  scoreOf: { fontSize: 20, color: alpha(brand.white, 0.6) },
  levelRow: { flexDirection: 'row', padding: spacing.md, borderRadius: radius.lg, backgroundColor: brand.white, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.cardEdge },
  reviewItem: { marginTop: spacing.xl, paddingBottom: spacing.xl, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.borderStrong },
  reviewHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  qNum: { fontFamily: fonts.serif, fontSize: 22, fontWeight: '700', color: brand.red, minWidth: 28 },
  verdict: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '700' },
  revOpt: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: 8, paddingHorizontal: spacing.md, borderRadius: 10 },
  revOptRight: { backgroundColor: colors.highlight },
  revOptWrong: { backgroundColor: colors.redSoft },
  revLetter: { fontFamily: fonts.serif, fontWeight: '700', fontSize: 15, color: brand.navy, width: 18 },
  explain: { marginTop: spacing.md, padding: spacing.md, borderLeftWidth: 3, borderLeftColor: brand.gold, backgroundColor: brand.white, borderRadius: 12 },
});
