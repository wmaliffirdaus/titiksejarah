import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import { Animated, BackHandler, Modal, ScrollView, type ScrollViewInstance, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, shadow, spacing, type } from '../../constants/theme';
import { Badge, Button, Card, EmptyState, IconButton, ProgressBar, SourceBadge, Touchable } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { savedQuestionIds, wrongIds } from '../../store/selectors';
import { buildQuiz, gradeFor, scorePercent, type QuizContext, type QuizSet } from '../../utils/quiz';
import { dayKey } from '../../utils/date';
import { useBookmark } from '../../hooks/useBookmark';
import type { AppState } from '../../types/state';

const LETTERS = ['A', 'B', 'C', 'D'];

interface Answer {
  questionId: string;
  chosen: number; // display index
  correct: boolean;
}

function contextFrom(state: AppState): QuizContext {
  return {
    form: state.profile.form,
    perQuiz: state.prefs.perQuiz,
    shuffleOptions: state.prefs.shuffleOptions,
    wrongIds: wrongIds(state),
    savedIds: savedQuestionIds(state),
    today: dayKey(),
  };
}

export default function QuizScreen() {
  const { key } = useLocalSearchParams<{ key: string }>();
  const quizKey = String(key);
  const { state, dispatch } = useApp();
  const insets = useSafeAreaInsets();

  const [quiz, setQuiz] = useState<QuizSet | null>(() => buildQuiz(quizKey, contextFrom(state)));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finished, setFinished] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const startedAt = useRef(Date.now());
  const [duration, setDuration] = useState(0);
  const feedback = useRef(new Animated.Value(0)).current;
  const scroller = useRef<ScrollViewInstance>(null);

  const inProgress = !finished && answers.length > 0;
  const exit = useCallback(() => (router.canGoBack() ? router.back() : router.replace('/latihan')), []);
  const requestExit = useCallback(() => (inProgress ? setConfirmExit(true) : exit()), [inProgress, exit]);

  // Android hardware back: confirm before abandoning a quiz in progress.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (inProgress) {
        setConfirmExit(true);
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [inProgress]);

  if (!quiz) {
    return (
      <View style={[styles.root, { paddingTop: insets.top }]}>
        <View style={styles.topBar}>
          <IconButton icon="close" label="Tutup" onPress={exit} />
        </View>
        <EmptyState
          icon={quizKey === 'kesilapan' ? 'happy-outline' : 'hourglass-outline'}
          title={quizKey === 'kesilapan' ? 'Tiada kesilapan untuk diulang' : quizKey === 'simpanan' ? 'Tiada soalan disimpan' : 'Soalan belum tersedia'}
          message={
            quizKey === 'kesilapan'
              ? 'Hebat! Soalan yang anda jawab salah akan muncul di sini untuk latihan semula.'
              : quizKey === 'simpanan'
                ? 'Tekan ikon penanda semasa kuiz untuk menyimpan soalan.'
                : 'Soalan untuk bahagian ini akan ditambah dalam kemas kini akan datang.'
          }
          action="Kembali"
          onAction={exit}
        />
      </View>
    );
  }

  const total = quiz.questions.length;
  const current = quiz.questions[index];
  const answered = selected !== null;
  const score = answers.filter((a) => a.correct).length;

  const choose = (displayIndex: number) => {
    if (answered) return;
    const correct = displayIndex === current.correctIndex;
    setSelected(displayIndex);
    setAnswers((prev) => [...prev, { questionId: current.question.id, chosen: displayIndex, correct }]);
    feedback.setValue(0);
    Animated.timing(feedback, { toValue: 1, duration: 260, useNativeDriver: true }).start();
    setTimeout(() => scroller.current?.scrollToEnd({ animated: true }), 120);
  };

  const finish = (all: Answer[]) => {
    const secs = Math.round((Date.now() - startedAt.current) / 1000);
    setDuration(secs);
    setFinished(true);
    dispatch({
      type: 'recordAttempt',
      attempt: {
        id: `${quiz.key}-${Date.now()}`,
        key: quiz.key,
        title: quiz.title,
        form: quiz.form,
        chapterId: quiz.chapterId,
        score: all.filter((a) => a.correct).length,
        total: all.length,
        wrongIds: all.filter((a) => !a.correct).map((a) => a.questionId),
        correctIds: all.filter((a) => a.correct).map((a) => a.questionId),
        durationSec: secs,
        at: Date.now(),
      },
    });
  };

  const nextQuestion = () => {
    if (index + 1 >= total) {
      finish(answers);
      return;
    }
    setIndex(index + 1);
    setSelected(null);
    scroller.current?.scrollTo({ y: 0, animated: false });
  };

  const retry = (k: string = quiz.key) => {
    const fresh = buildQuiz(k, contextFrom(state));
    if (!fresh) return;
    setQuiz(fresh);
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
    startedAt.current = Date.now();
  };

  /* ───────────────────────── Results ───────────────────────── */
  if (finished) {
    const pct = scorePercent(score, total);
    const grade = gradeFor(pct);
    const wrongCount = total - score;
    return (
      <View style={styles.root}>
        <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingTop: insets.top + spacing.lg, paddingBottom: insets.bottom + spacing.xxxl }}>
          <View style={styles.resultHero}>
            <Text style={[type.caption, { color: brand.gold }]}>KEPUTUSAN · {quiz.title.toUpperCase()}</Text>
            <View style={styles.scoreCircle}>
              <Text style={styles.scorePct}>{pct}%</Text>
              <Text style={styles.scoreRaw}>
                {score}/{total} betul
              </Text>
            </View>
            <Text style={styles.gradeLabel}>{grade.label}</Text>
            <Text style={styles.gradeMsg}>{grade.message}</Text>
          </View>

          <View style={styles.resultStats}>
            <ResultStat icon="checkmark-circle" label="Betul" value={score} color={brand.navy} />
            <ResultStat icon="close-circle" label="Salah" value={wrongCount} color={brand.red} />
            <ResultStat icon="time-outline" label="Masa" value={formatDuration(duration)} color={brand.navy} />
          </View>

          <View style={{ gap: spacing.md, marginTop: spacing.xl }}>
            <Button label="Cuba semula" icon="refresh" onPress={() => retry()} />
            {wrongCount > 0 ? (
              <Button label={`Ulang kaji ${wrongCount} kesilapan`} icon="repeat" variant="gold" onPress={() => retry('kesilapan')} />
            ) : null}
            <Button label="Selesai" variant="secondary" onPress={exit} />
          </View>

          <Text style={[type.heading, { marginTop: spacing.xxl, marginBottom: spacing.md }]}>Semakan jawapan</Text>
          <View style={{ gap: spacing.md }}>
            {quiz.questions.map((pq, i) => {
              const a = answers.find((x) => x.questionId === pq.question.id);
              const ok = a?.correct;
              return (
                <Card key={pq.question.id} style={{ padding: spacing.md, gap: spacing.sm }}>
                  <View style={{ flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start' }}>
                    <Ionicons name={ok ? 'checkmark-circle' : 'close-circle'} size={20} color={ok ? brand.navy : brand.red} />
                    <Text style={[type.subheading, { flex: 1 }]}>
                      {i + 1}. {pq.question.prompt}
                    </Text>
                  </View>
                  {!ok && a ? (
                    <Text style={[type.small, { color: brand.red }]}>Jawapan anda: {pq.question.options[pq.order[a.chosen]]}</Text>
                  ) : null}
                  <Text style={[type.small, { color: brand.navy, fontWeight: '700' }]}>Jawapan betul: {pq.question.options[pq.question.answer]}</Text>
                  <Text style={type.small}>{pq.question.explanation}</Text>
                </Card>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

  /* ───────────────────────── Playing ───────────────────────── */
  const isCorrect = answered && selected === current.correctIndex;
  return (
    <View style={styles.root}>
      <View style={[styles.topBar, { paddingTop: insets.top + spacing.xs }]}>
        <IconButton icon="close" label="Tutup kuiz" onPress={requestExit} />
        <View style={{ flex: 1, gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={type.caption} numberOfLines={1}>
              {quiz.title.toUpperCase()}
            </Text>
            <Text style={[type.caption, { color: brand.navy }]}>
              {index + 1}/{total}
            </Text>
          </View>
          <ProgressBar value={(index + (answered ? 1 : 0)) / total} height={6} />
        </View>
        <SaveQuestionButton id={current.question.id} />
      </View>

      <ScrollView ref={scroller} contentContainerStyle={{ padding: spacing.lg, paddingBottom: insets.bottom + 120 }}>
        <View style={styles.qMeta}>
          <Badge label={`Soalan ${index + 1}`} tone="navy" />
          {current.question.kbat ? <Badge label="KBAT" tone="gold" icon="bulb-outline" /> : null}
          <Badge label={`Skor ${score}`} tone="muted" icon="star-outline" />
        </View>
        <Text style={styles.prompt}>{current.question.prompt}</Text>

        <View style={{ gap: spacing.md }}>
          {current.order.map((orig, di) => {
            const isAnswer = di === current.correctIndex;
            const isChosen = di === selected;
            const state =
              !answered ? 'idle' : isAnswer ? 'correct' : isChosen ? 'wrong' : 'dim';
            return (
              <Touchable
                key={di}
                onPress={() => choose(di)}
                disabled={answered}
                style={[styles.option, optionStyles[state]]}
                accessibilityLabel={`Pilihan ${LETTERS[di]}: ${current.question.options[orig]}`}
                accessibilityState={{ selected: isChosen, disabled: answered }}
              >
                <View style={[styles.letter, letterStyles[state]]}>
                  {state === 'correct' ? (
                    <Ionicons name="checkmark" size={18} color={brand.navy} />
                  ) : state === 'wrong' ? (
                    <Ionicons name="close" size={18} color={brand.white} />
                  ) : (
                    <Text style={[styles.letterText, state === 'dim' && { opacity: 0.5 }]}>{LETTERS[di]}</Text>
                  )}
                </View>
                <Text style={[styles.optionText, state === 'dim' && { opacity: 0.55 }]}>{current.question.options[orig]}</Text>
              </Touchable>
            );
          })}
        </View>

        {answered ? (
          <Animated.View
            style={[
              styles.feedback,
              isCorrect ? styles.feedbackOk : styles.feedbackBad,
              { opacity: feedback, transform: [{ translateY: feedback.interpolate({ inputRange: [0, 1], outputRange: [12, 0] }) }] },
            ]}
            accessibilityLiveRegion="polite"
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
              <Ionicons name={isCorrect ? 'checkmark-circle' : 'information-circle'} size={22} color={isCorrect ? brand.navy : brand.red} />
              <Text style={[styles.feedbackTitle, { color: isCorrect ? brand.navy : brand.red }]}>{isCorrect ? 'Betul!' : 'Kurang tepat'}</Text>
            </View>
            {!isCorrect ? (
              <Text style={[type.small, { color: brand.navy, fontWeight: '700' }]}>
                Jawapan: {LETTERS[current.correctIndex]}. {current.question.options[current.question.answer]}
              </Text>
            ) : null}
            <Text style={type.body}>{current.question.explanation}</Text>
            <SourceBadge status={current.question.source} />
          </Animated.View>
        ) : null}
      </ScrollView>

      {answered ? (
        <View style={[styles.bottomBar, { paddingBottom: insets.bottom + spacing.md }]}>
          <Button label={index + 1 >= total ? 'Lihat keputusan' : 'Soalan seterusnya'} icon={index + 1 >= total ? 'trophy' : 'arrow-forward'} onPress={nextQuestion} />
        </View>
      ) : null}

      <Modal visible={confirmExit} transparent animationType="fade" onRequestClose={() => setConfirmExit(false)}>
        <View style={styles.modalBg}>
          <View style={styles.modal}>
            <Text style={type.heading}>Tinggalkan kuiz?</Text>
            <Text style={[type.small, { marginTop: spacing.sm }]}>Jawapan untuk kuiz ini tidak akan disimpan.</Text>
            <View style={{ flexDirection: 'row', gap: spacing.md, marginTop: spacing.xl }}>
              <Button label="Teruskan" variant="secondary" onPress={() => setConfirmExit(false)} style={{ flex: 1 }} small />
              <Button
                label="Keluar"
                variant="danger"
                onPress={() => {
                  setConfirmExit(false);
                  exit();
                }}
                style={{ flex: 1 }}
                small
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function SaveQuestionButton({ id }: { id: string }) {
  const b = useBookmark('soalan', id);
  return (
    <IconButton
      icon="bookmark-outline"
      activeIcon="bookmark"
      active={b.saved}
      color={b.saved ? brand.red : brand.navy}
      label={b.saved ? 'Buang soalan daripada simpanan' : 'Simpan soalan ini'}
      onPress={b.toggle}
    />
  );
}

function ResultStat({ icon, label, value, color }: { icon: React.ComponentProps<typeof Ionicons>['name']; label: string; value: string | number; color: string }) {
  return (
    <View style={styles.resultStat}>
      <Ionicons name={icon} size={20} color={color} />
      <Text style={styles.resultStatValue}>{value}</Text>
      <Text style={type.small}>{label}</Text>
    </View>
  );
}

function formatDuration(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m ? `${m}m ${sec}s` : `${sec}s`;
}

const optionStyles = StyleSheet.create({
  idle: {},
  correct: { backgroundColor: alpha(brand.gold, 0.28), borderColor: brand.gold },
  wrong: { backgroundColor: colors.redSoft, borderColor: brand.red },
  dim: { backgroundColor: alpha(brand.white, 0.7) },
});

const letterStyles = StyleSheet.create({
  idle: {},
  correct: { backgroundColor: brand.gold },
  wrong: { backgroundColor: brand.red },
  dim: {},
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderStrong,
  },
  qMeta: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm, flexWrap: 'wrap' },
  prompt: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 29, fontWeight: '700', color: brand.navy, marginTop: spacing.lg, marginBottom: spacing.xl },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    minHeight: 60,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
  },
  letter: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.navySoft, alignItems: 'center', justifyContent: 'center' },
  letterText: { fontFamily: fonts.sansMedium, fontWeight: '700', color: brand.navy },
  optionText: { ...type.body, flex: 1, fontSize: 15 },
  feedback: { marginTop: spacing.xl, padding: spacing.lg, borderRadius: radius.lg, gap: spacing.sm, borderWidth: 1 },
  feedbackOk: { backgroundColor: alpha(brand.gold, 0.16), borderColor: alpha(brand.gold, 0.8) },
  feedbackBad: { backgroundColor: alpha(brand.red, 0.06), borderColor: alpha(brand.red, 0.35) },
  feedbackTitle: { fontFamily: fonts.serif, fontSize: 18, fontWeight: '700' },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    backgroundColor: colors.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.borderStrong,
  },
  resultHero: { backgroundColor: brand.navy, borderRadius: radius.xl, padding: spacing.xl, alignItems: 'center', ...shadow.raised },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: brand.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xl,
  },
  scorePct: { fontFamily: fonts.serif, fontSize: 40, fontWeight: '700', color: brand.white },
  scoreRaw: { ...type.small, color: alpha(brand.white, 0.75) },
  gradeLabel: { fontFamily: fonts.serif, fontSize: 24, fontWeight: '700', color: brand.gold },
  gradeMsg: { ...type.small, color: alpha(brand.white, 0.85), textAlign: 'center', marginTop: 4 },
  resultStats: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.lg },
  resultStat: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    backgroundColor: brand.white,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  resultStatValue: { fontFamily: fonts.serif, fontSize: 22, fontWeight: '700', color: brand.navy },
  modalBg: { flex: 1, backgroundColor: colors.overlay, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  modal: { width: '100%', maxWidth: 360, backgroundColor: brand.cream, borderRadius: radius.xl, padding: spacing.xl },
});
