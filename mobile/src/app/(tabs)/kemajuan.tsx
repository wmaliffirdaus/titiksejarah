import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { Badge, Card, EmptyState, ProgressBar, SectionHeader, StatCard } from '../../components/ui';
import { Legend, ScoreBars, WeekStrip } from '../../components/charts';
import { useApp } from '../../store/AppProvider';
import {
  chapterProgress,
  chapterQuizAverage,
  chaptersCompletedCount,
  formProgress,
  overallProgress,
  quizStats,
  streakInfo,
} from '../../store/selectors';
import { chapters, forms } from '../../data/syllabus';
import { dayKey, lastNDays, relativeTime } from '../../utils/date';
import { scorePercent } from '../../utils/quiz';

export default function ProgressScreen() {
  const { state } = useApp();
  const overall = overallProgress(state);
  const stats = quizStats(state);
  const streak = streakInfo(state);
  const today = dayKey();
  const week = lastNDays(7).map((d) => ({ ...d, count: state.activity[d.key] ?? 0, isToday: d.key === today }));
  const recentScores = state.attempts
    .slice(0, 7)
    .reverse()
    .map((a, i) => ({ label: `#${state.attempts.length - Math.min(7, state.attempts.length) + i + 1}`, value: scorePercent(a.score, a.total) }));
  const tracked = chapters.filter((c) => c.subtopics.length > 0 || c.id in state.completedChapters);

  return (
    <Screen>
      <PageTitle eyebrow="Prestasi anda" title="Kemajuan" subtitle="Pantau ulang kaji, skor kuiz dan konsistensi" />

      <Card tone="navy" style={styles.hero}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <View>
            <Text style={[type.caption, { color: brand.gold }]}>KESELURUHAN SILIBUS</Text>
            <Text style={styles.heroPct}>{Math.round(overall * 100)}%</Text>
          </View>
          <Text style={[type.small, { color: alpha(brand.white, 0.75), textAlign: 'right' }]}>
            {chaptersCompletedCount(state)} daripada {chapters.length} bab{'\n'}selesai diulang kaji
          </Text>
        </View>
        <ProgressBar value={overall} track={alpha(brand.white, 0.18)} height={10} style={{ marginTop: spacing.md }} />
        <View style={{ gap: spacing.md, marginTop: spacing.lg }}>
          {forms.map((f) => {
            const p = formProgress(state, f.form);
            return (
              <View key={f.form} style={{ gap: 6 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={[type.small, { color: brand.white }]}>{f.label}</Text>
                  <Text style={[type.small, { color: brand.gold, fontWeight: '700' }]}>{Math.round(p * 100)}%</Text>
                </View>
                <ProgressBar value={p} height={6} track={alpha(brand.white, 0.15)} />
              </View>
            );
          })}
        </View>
      </Card>

      <View style={styles.statRow}>
        <StatCard icon="checkmark-done-outline" value={`${chaptersCompletedCount(state)}`} label="Bab selesai" />
        <StatCard icon="document-text-outline" value={Object.keys(state.readSubtopics).length} label="Subtopik dibaca" />
      </View>
      <View style={styles.statRow}>
        <StatCard icon="help-circle-outline" value={stats.total} label="Kuiz dicuba" />
        <StatCard icon="trophy-outline" value={stats.total ? `${stats.average}%` : '–'} label="Purata skor" />
        <StatCard icon="ribbon-outline" value={stats.total ? `${stats.best}%` : '–'} label="Skor terbaik" />
      </View>

      <SectionHeader title="Streak pembelajaran" style={styles.section} />
      <Card style={{ gap: spacing.lg }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
          <View style={styles.flame}>
            <Ionicons name="flame" size={26} color={brand.red} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.streakNum}>{streak.current} hari</Text>
            <Text style={type.small}>Rekod terpanjang: {streak.longest} hari</Text>
          </View>
        </View>
        <WeekStrip days={week} />
        <Text style={[type.small, { fontSize: 12 }]}>
          Satu aktiviti = satu subtopik ditanda dibaca atau satu kuiz diselesaikan.
        </Text>
      </Card>

      <SectionHeader title="Skor kuiz terkini" style={styles.section} />
      <Card>
        {recentScores.length ? (
          <>
            <ScoreBars data={recentScores} />
            <Legend
              items={[
                { color: brand.navy, label: '≥ 70%' },
                { color: brand.gold, label: '50–69%' },
                { color: brand.red, label: '< 50%' },
              ]}
            />
          </>
        ) : (
          <EmptyState icon="bar-chart-outline" title="Belum ada skor" message="Selesaikan kuiz pertama untuk melihat carta skor anda." action="Mula kuiz" onAction={() => router.push('/latihan')} />
        )}
      </Card>

      <SectionHeader title="Kemajuan mengikut bab" style={styles.section} />
      <View style={{ gap: spacing.sm }}>
        {tracked.map((c) => {
          const p = chapterProgress(state, c);
          const avg = chapterQuizAverage(state, c.id);
          return (
            <Card key={c.id} onPress={() => router.push(`/bab/${c.id}`)} style={{ padding: spacing.md, gap: spacing.sm }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
                <Text style={type.caption}>
                  T{c.form} · BAB {c.number}
                </Text>
                <View style={{ flex: 1 }} />
                {avg !== null ? <Badge label={`Kuiz ${avg}%`} tone={avg >= 70 ? 'gold' : 'red'} /> : null}
              </View>
              <Text style={type.subheading} numberOfLines={1}>
                {c.title}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
                <ProgressBar value={p} height={6} style={{ flex: 1 }} />
                <Text style={styles.pct}>{Math.round(p * 100)}%</Text>
              </View>
            </Card>
          );
        })}
      </View>

      <SectionHeader title="Sejarah kuiz" style={styles.section} />
      {state.attempts.length ? (
        <Card style={{ paddingVertical: spacing.xs }}>
          {state.attempts.slice(0, 12).map((a, i) => {
            const pct = scorePercent(a.score, a.total);
            return (
              <View key={a.id} style={[styles.histRow, i > 0 && styles.histBorder]}>
                <View style={[styles.histScore, { backgroundColor: pct >= 70 ? colors.goldSoft : colors.redSoft }]}>
                  <Text style={[styles.histPct, { color: pct >= 70 ? brand.navy : brand.red }]}>{pct}%</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={type.subheading} numberOfLines={1}>
                    {a.title}
                  </Text>
                  <Text style={[type.small, { fontSize: 12 }]}>
                    {a.score}/{a.total} betul · {relativeTime(a.at)}
                  </Text>
                </View>
              </View>
            );
          })}
        </Card>
      ) : (
        <Card tone="muted">
          <Text style={type.small}>Sejarah kuiz anda akan dipaparkan di sini.</Text>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { padding: spacing.xl },
  heroPct: { fontFamily: fonts.serif, fontSize: 44, fontWeight: '700', color: brand.white, lineHeight: 50 },
  statRow: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.md },
  section: { marginTop: spacing.xxl },
  flame: { width: 52, height: 52, borderRadius: 26, backgroundColor: colors.redSoft, alignItems: 'center', justifyContent: 'center' },
  streakNum: { fontFamily: fonts.serif, fontSize: 24, fontWeight: '700', color: brand.navy },
  pct: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '700', color: colors.textMuted, minWidth: 34, textAlign: 'right' },
  histRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md },
  histBorder: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.borderStrong },
  histScore: { width: 54, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  histPct: { fontFamily: fonts.sansMedium, fontWeight: '700', fontSize: 14 },
});
