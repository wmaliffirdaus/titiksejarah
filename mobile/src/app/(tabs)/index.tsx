import { Image, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { Screen } from '../../components/layout';
import { Button, List, ListRow, ProgressBar, Ribbon, SectionHeader, TextLink, Touchable } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { dailyChallengeDone, formProgress, recommendation, streakInfo } from '../../store/selectors';
import { forms, getChapter, getSubtopic } from '../../data/syllabus';
import { factOfTheDay } from '../../data/featured';
import { papers } from '../../data/papers';
import { displayName, greeting, longDate, relativeTime } from '../../utils/date';
import { DAILY_SIZE } from '../../utils/quiz';

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

  const streakLine =
    streak.current > 1
      ? `${streak.current} hari berturut-turut`
      : streak.current === 1
        ? 'Hari pertama. Datang lagi esok.'
        : 'Mulakan rentak belajar hari ini.';

  return (
    <Screen>
      {/* Greeting */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={type.caption}>{longDate()}</Text>
          <Text style={styles.hello} numberOfLines={2}>
            {greeting()}, {name}
          </Text>
          <Text style={[type.small, { marginTop: 2 }]}>{streakLine}</Text>
        </View>
        <Touchable onPress={() => router.push('/profil')} accessibilityLabel="Profil" scaleTo={0.92}>
          <Image source={require('../../../assets/images/brand-dp.jpg')} style={styles.avatar} />
        </Touchable>
      </View>

      {/* Continue */}
      <View style={styles.hero}>
        <Ribbon style={{ right: spacing.xl }} />
        {rec.kind === 'read' ? (
          <>
            <Text style={styles.heroLabel}>Sambung dari sini</Text>
            <Text style={styles.heroTitle}>
              {rec.subtopicCode} {rec.subtopicTitle}
            </Text>
            <Text style={styles.heroSub}>
              Tingkatan {rec.chapter.form}, Bab {rec.chapter.number}. {rec.chapter.title}
            </Text>
            <Button label="Baca nota" variant="gold" onPress={() => router.push(`/baca/${rec.subtopicId}`)} style={styles.heroBtn} />
          </>
        ) : rec.kind === 'quiz' ? (
          <>
            <Text style={styles.heroLabel}>Uji ingatan</Text>
            <Text style={styles.heroTitle}>Kuiz Bab {rec.chapter.number}. {rec.chapter.title}</Text>
            <Text style={styles.heroSub}>
              {rec.average < 0 ? 'Anda belum mencuba kuiz bab ini.' : `Purata skor anda ${rec.average}%. Sasaran ialah 80%.`}
            </Text>
            <Button label="Mula kuiz" variant="gold" onPress={() => router.push(`/kuiz/bab-${rec.chapter.id}`)} style={styles.heroBtn} />
          </>
        ) : (
          <>
            <Text style={styles.heroLabel}>Semua nota sudah dibaca</Text>
            <Text style={styles.heroTitle}>Masa untuk kertas penuh</Text>
            <Text style={styles.heroSub}>Jawab 40 soalan dalam satu jam, sama seperti peperiksaan sebenar.</Text>
            <Button label="Pilih kertas" variant="gold" onPress={() => router.push('/kertas')} style={styles.heroBtn} />
          </>
        )}
      </View>

      {/* Today */}
      <SectionHeader title="Hari ini" style={styles.section} />
      <List>
        <ListRow
          title="Sasaran harian"
          subtitle={done >= goal ? 'Tercapai. Bagus.' : `${done} daripada ${goal} aktiviti. Baca satu subtopik atau jawab satu kuiz.`}
          value={`${done}/${goal}`}
          onPress={() => router.push('/kemajuan')}
          chevron={false}
        >
          <ProgressBar value={done / goal} style={{ marginTop: spacing.sm }} />
        </ListRow>
        <ListRow
          title="Cabaran harian"
          subtitle={daily.done ? `Selesai, skor ${daily.score}/${daily.total}. Boleh cuba lagi.` : `${DAILY_SIZE} soalan baharu setiap hari.`}
          value={daily.done ? 'Selesai' : undefined}
          onPress={() => router.push('/kuiz/harian')}
        />
        {draft ? (
          <ListRow
            title="Sambung kertas 1"
            subtitle={`${draft.answers.filter((a) => a >= 0).length} daripada 40 soalan sudah dijawab.`}
            onPress={() => router.push(`/kertas/${draft.paperId}`)}
          />
        ) : (
          <ListRow
            title="Kertas 1 penuh"
            subtitle={`40 soalan, 1 jam. ${papers.length} set tersedia.`}
            onPress={() => router.push('/kertas')}
          />
        )}
      </List>

      {/* Did you know */}
      <View style={styles.quote}>
        <Text style={styles.quoteMark}>“</Text>
        <Text style={type.caption}>Tahukah anda?</Text>
        <Text style={styles.quoteTitle}>{fact.title}</Text>
        <Text style={styles.quoteText}>{fact.text}</Text>
        {fact.subtopicId ? (
          <View style={{ marginTop: spacing.sm }}>
            <TextLink label="Baca nota penuh" onPress={() => router.push(`/baca/${fact.subtopicId}`)} />
          </View>
        ) : null}
      </View>

      {/* Forms */}
      <SectionHeader title="Nota mengikut tingkatan" style={styles.section} />
      <View style={styles.forms}>
        {forms.map((f) => {
          const p = formProgress(state, f.form);
          const mine = state.profile.form === f.form;
          return (
            <Touchable
              key={f.form}
              style={styles.formCard}
              onPress={() => router.push({ pathname: '/nota', params: { t: String(f.form) } })}
              accessibilityLabel={f.label}
            >
              <Text style={styles.formNum}>{f.form}</Text>
              <Text style={type.subheading}>{f.label}</Text>
              <Text style={[type.small, { fontSize: 12, marginTop: 2 }]} numberOfLines={2}>
                {f.tagline}
              </Text>
              <ProgressBar value={p} style={{ marginTop: spacing.md }} />
              <Text style={[type.caption, { marginTop: 6 }]}>
                {Math.round(p * 100)}% dibaca{mine ? ', tingkatan anda' : ''}
              </Text>
            </Touchable>
          );
        })}
      </View>

      {/* Recent */}
      {state.recent.length ? (
        <>
          <SectionHeader title="Baru dibaca" action="Semua nota" onAction={() => router.push('/nota')} style={styles.section} />
          <List>
            {state.recent.slice(0, 4).map((r) => {
              const ch = getChapter(r.chapterId);
              const sub = r.subtopicId ? getSubtopic(r.subtopicId)?.subtopic : undefined;
              if (!ch) return null;
              return (
                <ListRow
                  key={`${r.chapterId}-${r.subtopicId ?? ''}`}
                  lead={sub ? sub.code : String(ch.number)}
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

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  hello: { fontFamily: fonts.serif, fontSize: 20, lineHeight: 26, fontWeight: '700', color: brand.navy, marginTop: 2 },
  avatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 1.5, borderColor: brand.gold, backgroundColor: brand.white },
  hero: {
    backgroundColor: brand.navy,
    borderRadius: radius.lg,
    padding: spacing.xl,
    paddingTop: spacing.xl + 2,
    paddingRight: spacing.xxxl + spacing.md,
    gap: 6,
  },
  heroLabel: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: brand.gold },
  heroTitle: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 27, fontWeight: '700', color: brand.white },
  heroSub: { ...type.small, color: alpha(brand.white, 0.75) },
  heroBtn: { marginTop: spacing.md, alignSelf: 'flex-start' },
  section: { marginTop: spacing.xxl },
  quote: {
    marginTop: spacing.xxl,
    paddingLeft: spacing.lg,
    borderLeftWidth: 3,
    borderLeftColor: brand.gold,
  },
  quoteMark: { position: 'absolute', right: 0, top: -18, fontFamily: fonts.serif, fontSize: 72, lineHeight: 80, color: alpha(brand.navy, 0.08) },
  quoteTitle: { ...type.heading, marginTop: 4 },
  quoteText: { fontFamily: fonts.serif, fontSize: 16, lineHeight: 25, fontStyle: 'italic', color: brand.navy, marginTop: 6 },
  forms: { flexDirection: 'row', gap: spacing.md },
  formCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
    padding: spacing.lg,
  },
  formNum: { fontFamily: fonts.serif, fontSize: 40, lineHeight: 44, fontWeight: '700', color: brand.red },
});
