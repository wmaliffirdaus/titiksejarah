import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { brand, colors, fonts, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { Card, EmptyState, List, ListRow, ProgressBar, SectionHeader, Segmented, Stat } from '../../components/ui';
import { Legend, ScoreBars, WeekStrip } from '../../components/charts';
import { useApp } from '../../store/AppProvider';
import { chapterProgress, chapterQuizAverage, chaptersCompletedCount, formProgress, overallProgress, quizStats, streakInfo } from '../../store/selectors';
import { chapters, forms, getChaptersByForm } from '../../data/syllabus';
import { getPaper, paperTitle } from '../../data/papers';
import { dayKey, lastNDays, relativeTime, shortDate } from '../../utils/date';
import { scorePercent } from '../../utils/quiz';
import { useState } from 'react';
import type { Form } from '../../types/content';

export default function ProgressScreen() {
  const { state } = useApp();
  const [form, setForm] = useState<Form>(state.profile.form);
  const overall = overallProgress(state);
  const stats = quizStats(state);
  const streak = streakInfo(state);
  const today = dayKey();
  const week = lastNDays(7).map((d) => ({ ...d, count: state.activity[d.key] ?? 0, isToday: d.key === today }));
  const recentScores = state.attempts
    .slice(0, 7)
    .reverse()
    .map((a, i) => ({ label: `${state.attempts.length - Math.min(7, state.attempts.length) + i + 1}`, value: scorePercent(a.score, a.total) }));
  const bestPaper = state.paperAttempts.length ? Math.max(...state.paperAttempts.map((a) => scorePercent(a.score, a.total))) : null;

  return (
    <Screen>
      <PageTitle eyebrow="Rekod ulang kaji" title="Kemajuan" />

      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <Text style={styles.big}>{Math.round(overall * 100)}%</Text>
          <Text style={type.small}>
            silibus diulang kaji. {chaptersCompletedCount(state)} daripada {chapters.length} bab selesai.
          </Text>
        </View>
      </View>
      <ProgressBar value={overall} height={6} style={{ marginTop: spacing.md }} />
      <View style={styles.forms}>
        {forms.map((f) => {
          const p = formProgress(state, f.form);
          return (
            <View key={f.form} style={{ flex: 1, gap: 6 }}>
              <Text style={type.caption}>
                {f.label}, {Math.round(p * 100)}%
              </Text>
              <ProgressBar value={p} />
            </View>
          );
        })}
      </View>

      <View style={styles.ledger}>
        <Stat value={Object.keys(state.readSubtopics).length} label="subtopik dibaca" />
        <Stat value={stats.total} label="kuiz dijawab" />
        <Stat value={stats.total ? `${stats.average}%` : '0'} label="purata kuiz" />
        <Stat value={bestPaper !== null ? `${bestPaper}%` : '0'} label="kertas 1 terbaik" />
      </View>

      <SectionHeader title="Rentak belajar" style={styles.section} />
      <Card style={{ gap: spacing.lg }}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: spacing.sm }}>
          <Text style={styles.streakNum}>{streak.current}</Text>
          <Text style={type.body}>hari berturut-turut</Text>
          <View style={{ flex: 1 }} />
          <Text style={type.caption}>Rekod {streak.longest} hari</Text>
        </View>
        <WeekStrip days={week} />
        <Text style={[type.small, { fontSize: 12 }]}>Satu aktiviti ialah satu subtopik dibaca, satu kuiz, satu kertas atau satu set kad imbas.</Text>
      </Card>

      <SectionHeader title="Skor kuiz terkini" style={styles.section} />
      <Card>
        {recentScores.length ? (
          <>
            <ScoreBars data={recentScores} />
            <Legend
              items={[
                { color: brand.navy, label: '70% ke atas' },
                { color: brand.gold, label: '50 hingga 69%' },
                { color: brand.red, label: 'bawah 50%' },
              ]}
            />
          </>
        ) : (
          <EmptyState title="Belum ada skor" message="Jawab satu kuiz untuk melihat carta skor anda di sini." action="Pergi ke latihan" onAction={() => router.push('/latihan')} />
        )}
      </Card>

      {state.paperAttempts.length ? (
        <>
          <SectionHeader title="Kertas 1" style={styles.section} />
          <List>
            {state.paperAttempts.slice(0, 6).map((a) => {
              const p = getPaper(a.paperId);
              return (
                <ListRow
                  key={a.id}
                  title={p ? paperTitle(p) : a.paperId}
                  subtitle={`${a.score}/${a.total} betul, ${shortDate(a.at)}`}
                  value={`${scorePercent(a.score, a.total)}%`}
                  onPress={() => router.push(`/kertas/${a.paperId}`)}
                />
              );
            })}
          </List>
        </>
      ) : null}

      <SectionHeader title="Mengikut bab" style={styles.section} />
      <Segmented
        value={form}
        onChange={setForm}
        options={[
          { value: 4, label: 'Tingkatan 4' },
          { value: 5, label: 'Tingkatan 5' },
        ]}
        style={{ marginBottom: spacing.md }}
      />
      <List>
        {getChaptersByForm(form).map((c) => {
          const p = chapterProgress(state, c);
          const avg = chapterQuizAverage(state, c.id);
          return (
            <ListRow
              key={c.id}
              lead={String(c.number)}
              title={c.title}
              subtitle={avg !== null ? `Purata kuiz ${avg}%` : undefined}
              value={`${Math.round(p * 100)}%`}
              onPress={() => router.push(`/bab/${c.id}`)}
            >
              <ProgressBar value={p} style={{ marginTop: 6 }} />
            </ListRow>
          );
        })}
      </List>

      <SectionHeader title="Sejarah kuiz" style={styles.section} />
      {state.attempts.length ? (
        <List>
          {state.attempts.slice(0, 12).map((a) => {
            const pct = scorePercent(a.score, a.total);
            return (
              <ListRow
                key={a.id}
                title={a.title}
                subtitle={`${a.score}/${a.total} betul, ${relativeTime(a.at)}`}
                value={`${pct}%`}
                numberOfLines={1}
              />
            );
          })}
        </List>
      ) : (
        <Text style={type.small}>Kuiz yang anda jawab akan disenaraikan di sini.</Text>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'flex-end' },
  big: { fontFamily: fonts.serif, fontSize: 56, lineHeight: 60, fontWeight: '700', color: brand.navy },
  forms: { flexDirection: 'row', gap: spacing.xl, marginTop: spacing.lg },
  ledger: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderStrong,
  },
  section: { marginTop: spacing.xxl },
  streakNum: { fontFamily: fonts.serif, fontSize: 36, lineHeight: 40, fontWeight: '700', color: brand.red },
});
