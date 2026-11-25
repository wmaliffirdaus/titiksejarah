import { Image, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, shadow, spacing, type } from '../../constants/theme';
import { Screen } from '../../components/layout';
import { ArrowButton, IconTile, List, ListRow, ProgressBar, QuickTile, SectionHeader, TextLink, Touchable } from '../../components/ui';
import { currentWeek, WeekDays } from '../../components/charts';
import { useApp } from '../../store/AppProvider';
import { chapterProgress, dailyChallengeDone, formProgress, recommendation, streakInfo } from '../../store/selectors';
import { forms, getChapter, getSubtopic } from '../../data/syllabus';
import { factOfTheDay } from '../../data/featured';
import { displayName, greeting, longDate, relativeTime } from '../../utils/date';

export default function Home() {
  const { state } = useApp();
  const streak = streakInfo(state);
  const rec = recommendation(state);
  const daily = dailyChallengeDone(state);
  const fact = factOfTheDay();
  const goal = state.prefs.dailyGoal;
  const done = Math.min(streak.todayCount, goal);
  const name = displayName(state.profile.name) || 'pelajar';
  const draft = state.paperDraft;
  const week = currentWeek(state.activity);

  return (
    <Screen tabbed>
      {/* Top bar */}
      <View style={styles.top}>
        <Touchable onPress={() => router.push('/profil')} accessibilityLabel="Profil" scaleTo={0.92}>
          <Image source={require('../../../assets/images/brand-dp.jpg')} style={styles.avatar} />
        </Touchable>
        <View style={{ flex: 1 }}>
          <Text style={type.small}>{greeting()},</Text>
          <Text style={styles.hello} numberOfLines={1}>
            {name}
          </Text>
        </View>
        <Touchable onPress={() => router.push('/kemajuan')} accessibilityLabel={`${streak.current} hari berturut-turut`} style={styles.streak} scaleTo={0.94}>
          <Ionicons name="flame" size={16} color={brand.gold} />
          <Text style={styles.streakText}>{streak.current}</Text>
        </Touchable>
      </View>

      {/* This week */}
      <View style={styles.weekHead}>
        <Text style={type.subheading}>{longDate()}</Text>
        <Text style={type.caption}>Rekod {streak.longest} hari</Text>
      </View>
      <WeekDays days={week} />

      {/* Continue */}
      <View style={styles.hero}>
        <View style={styles.heroDotLarge} pointerEvents="none" />
        <View style={styles.heroDotSmall} pointerEvents="none" />
        {rec.kind === 'read' ? (
          <>
            <Text style={styles.heroLabel}>Sambung dari sini</Text>
            <Text style={styles.heroTitle} numberOfLines={3}>
              {rec.subtopicCode} {rec.subtopicTitle}
            </Text>
            <Text style={styles.heroSub} numberOfLines={2}>
              Tingkatan {rec.chapter.form}, Bab {rec.chapter.number}. {rec.chapter.title}
            </Text>
            <HeroProgress value={chapterProgress(state, rec.chapter)} label="bab ini" />
            <ArrowButton label="Baca nota" onPress={() => router.push(`/baca/${rec.subtopicId}`)} />
          </>
        ) : rec.kind === 'quiz' ? (
          <>
            <Text style={styles.heroLabel}>Uji ingatan</Text>
            <Text style={styles.heroTitle} numberOfLines={3}>
              Kuiz Bab {rec.chapter.number}. {rec.chapter.title}
            </Text>
            <Text style={styles.heroSub}>
              {rec.average < 0 ? 'Anda belum mencuba kuiz bab ini.' : `Purata skor anda ${rec.average}%. Sasaran ialah 80%.`}
            </Text>
            <HeroProgress value={rec.average < 0 ? 0 : rec.average / 100} label="purata kuiz" />
            <ArrowButton label="Mula kuiz" onPress={() => router.push(`/kuiz/bab-${rec.chapter.id}`)} />
          </>
        ) : (
          <>
            <Text style={styles.heroLabel}>Semua nota sudah dibaca</Text>
            <Text style={styles.heroTitle}>Masa untuk kertas penuh</Text>
            <Text style={styles.heroSub}>Jawab 40 soalan dalam satu jam, sama seperti peperiksaan sebenar.</Text>
            <View style={{ height: spacing.md }} />
            <ArrowButton label="Pilih kertas" onPress={() => router.push('/kertas')} />
          </>
        )}
      </View>

      {/* Quick practice */}
      <SectionHeader title="Latihan pantas" style={styles.section} />
      <View style={styles.quickRow}>
        <QuickTile
          icon="flash"
          tone="gold"
          label="Cabaran harian"
          badge={daily.done ? 'checkmark' : undefined}
          onPress={() => router.push('/kuiz/harian')}
        />
        <QuickTile icon="document-text" tone="solid" label="Kertas 1" onPress={() => router.push(draft ? `/kertas/${draft.paperId}` : '/kertas')} />
        <QuickTile icon="albums" tone="red" label="Kad imbas" onPress={() => router.push('/kad')} />
        <QuickTile icon="git-commit" tone="navy" label="Garis masa" onPress={() => router.push('/garis-masa')} />
      </View>

      {/* Today's goal */}
      <View style={[styles.card, styles.goal]}>
        <IconTile icon="locate" tone={done >= goal ? 'gold' : 'navy'} size={44} />
        <View style={{ flex: 1 }}>
          <View style={styles.goalHead}>
            <Text style={type.subheading}>Sasaran hari ini</Text>
            <Text style={styles.goalCount}>
              {done}
              <Text style={styles.goalOf}>/{goal}</Text>
            </Text>
          </View>
          <Text style={[type.small, { fontSize: 12 }]} numberOfLines={2}>
            {done >= goal ? 'Tercapai. Rehat sekejap, kemudian sambung jika mahu.' : 'Baca satu subtopik atau jawab satu kuiz.'}
          </Text>
          <ProgressBar value={done / goal} height={6} style={{ marginTop: spacing.sm }} />
        </View>
      </View>

      {draft ? (
        <List style={{ marginTop: spacing.md }}>
          <ListRow
            icon="time"
            iconTone="red"
            title="Sambung kertas 1"
            subtitle={`${draft.answers.filter((a) => a >= 0).length} daripada 40 soalan sudah dijawab.`}
            onPress={() => router.push(`/kertas/${draft.paperId}`)}
          />
        </List>
      ) : null}

      {/* Notes by form */}
      <SectionHeader title="Nota mengikut tingkatan" action="Semua nota" onAction={() => router.push('/nota')} style={styles.section} />
      <View style={styles.forms}>
        {forms.map((f) => {
          const p = formProgress(state, f.form);
          const dark = f.form === 4;
          return (
            <Touchable
              key={f.form}
              style={[styles.formCard, dark ? styles.formNavy : styles.formGold]}
              onPress={() => router.push({ pathname: '/nota', params: { t: String(f.form) } })}
              accessibilityLabel={f.label}
            >
              <View style={[styles.formTag, dark ? { backgroundColor: alpha(brand.white, 0.14) } : { backgroundColor: alpha(brand.navy, 0.1) }]}>
                <Text style={[styles.formTagText, { color: dark ? brand.gold : brand.navy }]}>
                  {state.profile.form === f.form ? 'Tingkatan anda' : f.label}
                </Text>
              </View>
              <Text style={[styles.formNum, { color: dark ? brand.white : brand.navy }]}>{f.form}</Text>
              <Text style={[styles.formTagline, { color: dark ? alpha(brand.white, 0.72) : alpha(brand.navy, 0.75) }]} numberOfLines={2}>
                {f.tagline}
              </Text>
              <ProgressBar
                value={p}
                height={5}
                color={dark ? brand.gold : brand.navy}
                track={dark ? alpha(brand.white, 0.16) : alpha(brand.navy, 0.14)}
                style={{ marginTop: spacing.md }}
              />
              <Text style={[styles.formPct, { color: dark ? brand.white : brand.navy }]}>{Math.round(p * 100)}% dibaca</Text>
            </Touchable>
          );
        })}
      </View>

      {/* Did you know */}
      <View style={styles.fact}>
        <Text style={styles.factMark}>“</Text>
        <Text style={[type.caption, { color: brand.red }]}>Tahukah anda?</Text>
        <Text style={styles.factTitle}>{fact.title}</Text>
        <Text style={styles.factText}>{fact.text}</Text>
        {fact.subtopicId ? (
          <View style={{ marginTop: spacing.md }}>
            <TextLink label="Baca nota penuh" onPress={() => router.push(`/baca/${fact.subtopicId}`)} />
          </View>
        ) : null}
      </View>

      {/* Recent */}
      {state.recent.length ? (
        <>
          <SectionHeader title="Baru dibaca" style={styles.section} />
          <List>
            {state.recent.slice(0, 4).map((r) => {
              const ch = getChapter(r.chapterId);
              const sub = r.subtopicId ? getSubtopic(r.subtopicId)?.subtopic : undefined;
              if (!ch) return null;
              return (
                <ListRow
                  key={`${r.chapterId}-${r.subtopicId ?? ''}`}
                  lead={<CodeTile code={sub ? sub.code : String(ch.number)} />}
                  title={sub ? sub.title : ch.title}
                  subtitle={`Tingkatan ${ch.form}, Bab ${ch.number}. ${relativeTime(r.at)}`}
                  onPress={() => router.push(sub ? `/baca/${sub.id}` : `/bab/${ch.id}`)}
                  numberOfLines={1}
                />
              );
            })}
          </List>
        </>
      ) : null}
    </Screen>
  );
}

function HeroProgress({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.heroProgress}>
      <ProgressBar value={value} height={6} color={brand.gold} track={alpha(brand.white, 0.16)} style={{ flex: 1 }} />
      <Text style={styles.heroPct}>
        {Math.round(value * 100)}% {label}
      </Text>
    </View>
  );
}

/** Subtopic code in a small cream tile, e.g. 3.4 */
function CodeTile({ code }: { code: string }) {
  return (
    <View style={styles.codeTile}>
      <Text style={styles.codeText} numberOfLines={1} adjustsFontSizeToFit>
        {code}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  avatar: { width: 46, height: 46, borderRadius: 23, borderWidth: 2, borderColor: brand.gold, backgroundColor: brand.white },
  hello: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 26, fontWeight: '700', color: brand.navy },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 38,
    paddingHorizontal: 14,
    borderRadius: radius.pill,
    backgroundColor: brand.navy,
  },
  streakText: { fontFamily: fonts.sansMedium, fontSize: 15, fontWeight: '700', color: brand.white },
  weekHead: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: spacing.sm },
  hero: {
    marginTop: spacing.xl,
    backgroundColor: brand.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    gap: 6,
    overflow: 'hidden',
    ...shadow.raised,
  },
  // "Titik" means dot: two quiet gold circles sit behind the card text.
  heroDotLarge: { position: 'absolute', width: 190, height: 190, borderRadius: 95, right: -60, top: -70, borderWidth: 26, borderColor: alpha(brand.gold, 0.1) },
  heroDotSmall: { position: 'absolute', width: 18, height: 18, borderRadius: 9, right: 34, top: 30, backgroundColor: brand.gold },
  heroLabel: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: brand.gold },
  heroTitle: { fontFamily: fonts.serif, fontSize: 22, lineHeight: 28, fontWeight: '700', color: brand.white, paddingRight: spacing.xxxl },
  heroSub: { ...type.small, color: alpha(brand.white, 0.72) },
  heroProgress: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginTop: spacing.sm, marginBottom: spacing.md },
  heroPct: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '600', color: alpha(brand.white, 0.8) },
  section: { marginTop: spacing.xxl },
  quickRow: { flexDirection: 'row', gap: spacing.sm },
  card: {
    backgroundColor: brand.white,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cardEdge,
    ...shadow.card,
  },
  goal: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.lg, marginTop: spacing.xl },
  goalHead: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 2 },
  goalCount: { fontFamily: fonts.serif, fontSize: 20, fontWeight: '700', color: brand.red },
  goalOf: { fontSize: 14, color: colors.textSubtle },
  forms: { flexDirection: 'row', gap: spacing.md },
  formCard: { flex: 1, borderRadius: radius.xl, padding: spacing.lg, minHeight: 200, ...shadow.card },
  formNavy: { backgroundColor: brand.navy },
  formGold: { backgroundColor: brand.gold },
  formTag: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.pill },
  formTagText: { fontFamily: fonts.sansMedium, fontSize: 11, fontWeight: '700' },
  formNum: { fontFamily: fonts.serif, fontSize: 52, lineHeight: 58, fontWeight: '700', marginTop: spacing.sm },
  formTagline: { fontFamily: fonts.sans, fontSize: 12, lineHeight: 16 },
  formPct: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '600', marginTop: 6 },
  fact: {
    marginTop: spacing.xxl,
    padding: spacing.xl,
    borderRadius: radius.xl,
    backgroundColor: alpha(brand.navy, 0.06),
    overflow: 'hidden',
  },
  factMark: { position: 'absolute', right: 14, top: -14, fontFamily: fonts.serif, fontSize: 110, lineHeight: 120, color: alpha(brand.gold, 0.55) },
  factTitle: { ...type.heading, marginTop: 4, paddingRight: spacing.xxl },
  factText: { fontFamily: fonts.serif, fontSize: 16, lineHeight: 25, fontStyle: 'italic', color: brand.navy, marginTop: 6 },
  codeTile: { width: 40, height: 40, borderRadius: 13, backgroundColor: alpha(brand.gold, 0.28), alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3 },
  codeText: { fontFamily: fonts.serif, fontSize: 14, fontWeight: '700', color: brand.navy },
});
