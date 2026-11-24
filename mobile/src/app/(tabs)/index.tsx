import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { Screen } from '../../components/layout';
import { Badge, Button, Card, Eyebrow, ProgressBar, SectionHeader, SourceBadge, Touchable, type IconName } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import {
  chaptersCompletedCount,
  dailyChallengeDone,
  formProgress,
  overallProgress,
  quizStats,
  recommendation,
  streakInfo,
} from '../../store/selectors';
import { forms, getChapter, getSubtopic } from '../../data/syllabus';
import { factOfTheDay } from '../../data/featured';
import { greeting, relativeTime } from '../../utils/date';
import { DAILY_SIZE } from '../../utils/quiz';

export default function Home() {
  const { state } = useApp();
  const streak = streakInfo(state);
  const rec = recommendation(state);
  const daily = dailyChallengeDone(state);
  const overall = overallProgress(state);
  const stats = quizStats(state);
  const fact = factOfTheDay();
  const goal = state.prefs.dailyGoal;
  const goalPct = Math.min(1, streak.todayCount / goal);
  const name = state.profile.name || 'Pelajar';

  return (
    <Screen>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={type.small}>{greeting()},</Text>
          <Text style={type.display} numberOfLines={1}>
            {name}
          </Text>
        </View>
        <View style={styles.streakPill} accessibilityLabel={`Streak ${streak.current} hari`}>
          <Ionicons name="flame" size={16} color={brand.red} />
          <Text style={styles.streakText}>{streak.current}</Text>
        </View>
        <Touchable onPress={() => router.push('/profil')} accessibilityLabel="Profil" scaleTo={0.92}>
          <Image source={require('../../../assets/images/brand-dp.jpg')} style={styles.avatar} />
        </Touchable>
      </View>

      {/* Recommendation */}
      <Card tone="navy" style={styles.hero}>
        <Eyebrow color={brand.gold}>Cadangan hari ini</Eyebrow>
        {rec.kind === 'read' ? (
          <>
            <Text style={styles.heroTitle}>
              {rec.subtopicCode} {rec.subtopicTitle}
            </Text>
            <Text style={styles.heroSub}>
              T{rec.chapter.form} · Bab {rec.chapter.number}: {rec.chapter.title}
            </Text>
            <Button label="Teruskan membaca" icon="book" variant="gold" onPress={() => router.push(`/baca/${rec.subtopicId}`)} style={styles.heroBtn} />
          </>
        ) : rec.kind === 'quiz' ? (
          <>
            <Text style={styles.heroTitle}>Uji kefahaman Bab {rec.chapter.number}</Text>
            <Text style={styles.heroSub}>
              {rec.average < 0 ? 'Anda belum mencuba kuiz bab ini.' : `Purata skor anda ${rec.average}%. Cuba capai 80%!`}
            </Text>
            <Button label="Mula kuiz" icon="play" variant="gold" onPress={() => router.push(`/kuiz/bab-${rec.chapter.id}`)} style={styles.heroBtn} />
          </>
        ) : (
          <>
            <Text style={styles.heroTitle}>Semua nota tersedia telah dibaca!</Text>
            <Text style={styles.heroSub}>Kekalkan ingatan dengan cabaran harian.</Text>
            <Button label="Cabaran harian" icon="flash" variant="gold" onPress={() => router.push('/kuiz/harian')} style={styles.heroBtn} />
          </>
        )}
      </Card>

      {/* Daily goal + challenge */}
      <View style={styles.row}>
        <Card style={[styles.half, { gap: spacing.sm }]}>
          <View style={styles.iconBadge}>
            <Ionicons name="flag" size={18} color={brand.navy} />
          </View>
          <Text style={type.caption}>SASARAN HARIAN</Text>
          <Text style={styles.bigNum}>
            {Math.min(streak.todayCount, goal)}/{goal}
          </Text>
          <ProgressBar value={goalPct} height={6} />
          <Text style={[type.small, { fontSize: 12 }]}>{goalPct >= 1 ? 'Sasaran tercapai!' : 'aktiviti hari ini'}</Text>
        </Card>
        <Card
          tone="gold"
          style={[styles.half, { gap: spacing.sm }]}
          onPress={() => router.push('/kuiz/harian')}
          accessibilityLabel="Cabaran harian"
        >
          <View style={[styles.iconBadge, { backgroundColor: alpha(brand.navy, 0.12) }]}>
            <Ionicons name={daily.done ? 'checkmark-done' : 'flash'} size={18} color={brand.navy} />
          </View>
          <Text style={[type.caption, { color: brand.navy }]}>CABARAN HARIAN</Text>
          <Text style={styles.bigNum}>{daily.done ? `${daily.score}/${daily.total}` : `${DAILY_SIZE} soalan`}</Text>
          <Text style={[type.small, { fontSize: 12, color: brand.navy }]}>{daily.done ? 'Selesai · cuba lagi?' : 'Set baharu setiap hari'}</Text>
        </Card>
      </View>

      {/* Quick access */}
      <SectionHeader title="Pilih tingkatan" style={styles.section} />
      <View style={styles.row}>
        {forms.map((f) => {
          const p = formProgress(state, f.form);
          return (
            <Card
              key={f.form}
              style={styles.half}
              onPress={() => router.push({ pathname: '/nota', params: { t: String(f.form) } })}
              accessibilityLabel={f.label}
            >
              <View style={styles.formHead}>
                <Text style={styles.formShort}>{f.short}</Text>
                {state.profile.form === f.form ? <Badge label="Anda" tone="gold" /> : null}
              </View>
              <Text style={type.subheading}>{f.label}</Text>
              <Text style={[type.small, { fontSize: 12, marginTop: 2 }]} numberOfLines={2}>
                {f.tagline}
              </Text>
              <ProgressBar value={p} height={5} style={{ marginTop: spacing.md }} />
              <Text style={[type.caption, { marginTop: 6 }]}>{Math.round(p * 100)}% SELESAI</Text>
            </Card>
          );
        })}
      </View>

      {/* Progress snapshot */}
      <Card style={styles.section} onPress={() => router.push('/kemajuan')} accessibilityLabel="Lihat kemajuan">
        <View style={styles.progressHead}>
          <View>
            <Text style={type.caption}>KEMAJUAN ULANG KAJI</Text>
            <Text style={styles.progressPct}>{Math.round(overall * 100)}%</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSubtle} />
        </View>
        <ProgressBar value={overall} height={10} />
        <View style={styles.miniStats}>
          <MiniStat icon="checkmark-circle-outline" label="Bab selesai" value={`${chaptersCompletedCount(state)}/20`} />
          <MiniStat icon="help-circle-outline" label="Kuiz dicuba" value={String(stats.total)} />
          <MiniStat icon="trophy-outline" label="Purata skor" value={stats.total ? `${stats.average}%` : '–'} />
        </View>
      </Card>

      {/* Recent */}
      <SectionHeader title="Baru dipelajari" action={state.recent.length ? 'Semua nota' : undefined} onAction={() => router.push('/nota')} style={styles.section} />
      {state.recent.length ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing.md, paddingRight: spacing.lg }} style={styles.bleed}>
          {state.recent.map((r) => {
            const ch = getChapter(r.chapterId);
            const sub = r.subtopicId ? getSubtopic(r.subtopicId)?.subtopic : undefined;
            if (!ch) return null;
            return (
              <Card
                key={`${r.chapterId}-${r.subtopicId ?? ''}`}
                style={styles.recentCard}
                onPress={() => router.push(sub ? `/baca/${sub.id}` : `/bab/${ch.id}`)}
              >
                <Text style={type.caption}>
                  T{ch.form} · BAB {ch.number}
                  {sub ? ` · ${sub.code}` : ''}
                </Text>
                <Text style={[type.subheading, { marginTop: 6 }]} numberOfLines={3}>
                  {sub ? sub.title : ch.title}
                </Text>
                <Text style={[type.small, { fontSize: 12, marginTop: 'auto' }]}>{relativeTime(r.at)}</Text>
              </Card>
            );
          })}
        </ScrollView>
      ) : (
        <Card tone="muted">
          <Text style={type.small}>Belum ada bab dibaca. Mulakan dengan cadangan di atas atau pilih tingkatan.</Text>
        </Card>
      )}

      {/* Featured */}
      <SectionHeader title="Tahukah anda?" style={styles.section} />
      <Card onPress={() => fact.subtopicId && router.push(`/baca/${fact.subtopicId}`)} style={styles.factCard}>
        <View style={styles.factBar} />
        <View style={{ flex: 1, gap: 6 }}>
          <Text style={type.heading}>{fact.title}</Text>
          <Text style={type.body}>{fact.text}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
            <SourceBadge status={fact.source} />
            <Text style={styles.link}>Baca nota →</Text>
          </View>
        </View>
      </Card>

      {/* Explore */}
      <SectionHeader title="Terokai" style={styles.section} />
      <View style={styles.grid}>
        <Shortcut icon="book-outline" label="Nota Sejarah" onPress={() => router.push('/nota')} />
        <Shortcut icon="help-circle-outline" label="Kuiz Topikal" onPress={() => router.push('/latihan')} />
        <Shortcut icon="school-outline" label="Latihan SPM" onPress={() => router.push('/spm')} />
        <Shortcut icon="bookmark-outline" label="Simpanan" onPress={() => router.push('/simpanan')} />
        <Shortcut icon="albums-outline" label="Kad Imbas" onPress={() => router.push('/kad')} />
        <Shortcut icon="stats-chart-outline" label="Kemajuan" onPress={() => router.push('/kemajuan')} />
      </View>
    </Screen>
  );
}

function MiniStat({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <View style={styles.miniStat}>
      <Ionicons name={icon} size={16} color={brand.red} />
      <Text style={styles.miniValue}>{value}</Text>
      <Text style={[type.small, { fontSize: 11 }]}>{label}</Text>
    </View>
  );
}

function Shortcut({ icon, label, onPress }: { icon: IconName; label: string; onPress: () => void }) {
  return (
    <Card style={styles.shortcut} onPress={onPress} accessibilityLabel={label}>
      <View style={styles.shortcutIcon}>
        <Ionicons name={icon} size={22} color={brand.navy} />
      </View>
      <Text style={[type.subheading, { fontSize: 14 }]}>{label}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: brand.gold, backgroundColor: brand.white },
  streakPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    height: 34,
    borderRadius: radius.pill,
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  streakText: { fontFamily: fonts.sansMedium, fontWeight: '700', color: brand.navy, fontSize: 14 },
  hero: { padding: spacing.xl, gap: spacing.sm },
  heroTitle: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 27, fontWeight: '700', color: brand.white },
  heroSub: { ...type.small, color: alpha(brand.white, 0.78) },
  heroBtn: { marginTop: spacing.md, alignSelf: 'flex-start' },
  row: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.md },
  half: { flex: 1 },
  iconBadge: { width: 34, height: 34, borderRadius: 10, backgroundColor: colors.goldSoft, alignItems: 'center', justifyContent: 'center' },
  bigNum: { fontFamily: fonts.serif, fontSize: 24, fontWeight: '700', color: brand.navy },
  section: { marginTop: spacing.xxl },
  formHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  formShort: { fontFamily: fonts.serif, fontSize: 30, fontWeight: '700', color: brand.red },
  progressHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  progressPct: { fontFamily: fonts.serif, fontSize: 32, fontWeight: '700', color: brand.navy },
  miniStats: { flexDirection: 'row', marginTop: spacing.lg, gap: spacing.sm },
  miniStat: { flex: 1, gap: 2 },
  miniValue: { fontFamily: fonts.serif, fontSize: 18, fontWeight: '700', color: brand.navy },
  bleed: { marginRight: -spacing.lg },
  recentCard: { width: 200, minHeight: 130, gap: 2 },
  factCard: { flexDirection: 'row', gap: spacing.md },
  factBar: { width: 4, borderRadius: 2, backgroundColor: brand.gold },
  link: { fontFamily: fonts.sansMedium, fontWeight: '600', color: brand.red, fontSize: 13 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  shortcut: { width: '47.5%', flexGrow: 1, gap: spacing.sm, paddingVertical: spacing.lg },
  shortcutIcon: { width: 42, height: 42, borderRadius: 12, backgroundColor: colors.goldSoft, alignItems: 'center', justifyContent: 'center' },
});
