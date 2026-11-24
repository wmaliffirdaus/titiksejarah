import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { Badge, Card, Chip, SectionHeader, Segmented, Touchable, type IconName } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { chapterQuizAverage, dailyChallengeDone, savedQuestionIds, wrongIds } from '../../store/selectors';
import { getChaptersByForm } from '../../data/syllabus';
import { countFor, DAILY_SIZE, questionsForSubtopic } from '../../utils/quiz';
import type { Form } from '../../types/content';

export default function PracticeScreen() {
  const { state } = useApp();
  const [form, setForm] = useState<Form>(state.profile.form);
  const daily = dailyChallengeDone(state);
  const wrong = wrongIds(state).length;
  const saved = savedQuestionIds(state).length;

  return (
    <Screen>
      <PageTitle eyebrow="Kuiz & Latihan" title="Latihan" subtitle="Uji kefahaman anda dengan maklum balas segera" />

      <Card tone="navy" onPress={() => router.push('/kuiz/harian')} style={styles.daily} accessibilityLabel="Cabaran harian">
        <View style={styles.dailyIcon}>
          <Ionicons name={daily.done ? 'checkmark-done' : 'flash'} size={26} color={brand.navy} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[type.caption, { color: brand.gold }]}>CABARAN HARIAN</Text>
          <Text style={styles.dailyTitle}>{daily.done ? `Selesai: ${daily.score}/${daily.total}` : `${DAILY_SIZE} soalan hari ini`}</Text>
          <Text style={[type.small, { color: alpha(brand.white, 0.75) }]}>
            {daily.done ? 'Cuba lagi untuk skor lebih baik' : 'Kekalkan streak pembelajaran anda'}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color={brand.gold} />
      </Card>

      <Card onPress={() => router.push('/spm')} style={styles.spm} accessibilityLabel="Latihan SPM">
        <View style={styles.spmBadge}>
          <Text style={styles.spmText}>SPM</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={type.subheading}>Latihan SPM Sejarah</Text>
          <Text style={[type.small, { fontSize: 12.5 }]}>Kertas 1 · Kertas 2 Struktur · Esei · KBAT</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textSubtle} />
      </Card>

      <SectionHeader title="Mod latihan" style={{ marginTop: spacing.xxl }} />
      <View style={styles.grid}>
        <Mode icon="layers-outline" title="Tingkatan 4" meta={`${countFor('tingkatan-4')} soalan`} onPress={() => router.push('/kuiz/tingkatan-4')} />
        <Mode icon="layers-outline" title="Tingkatan 5" meta={`${countFor('tingkatan-5')} soalan`} onPress={() => router.push('/kuiz/tingkatan-5')} />
        <Mode icon="bulb-outline" title="Soalan KBAT" meta={`${countFor('kbat')} soalan`} onPress={() => router.push('/kuiz/kbat')} />
        <Mode icon="repeat-outline" title="Ulang kesilapan" meta={wrong ? `${wrong} soalan` : 'Tiada lagi'} onPress={() => router.push('/kuiz/kesilapan')} highlight={wrong > 0} />
        <Mode icon="bookmark-outline" title="Soalan disimpan" meta={saved ? `${saved} soalan` : 'Tiada lagi'} onPress={() => router.push('/kuiz/simpanan')} />
        <Mode icon="time-outline" title="Sejarah kuiz" meta={`${state.attempts.length} percubaan`} onPress={() => router.push('/kemajuan')} />
      </View>

      <SectionHeader title="Kuiz mengikut bab" style={{ marginTop: spacing.xxl }} />
      <Segmented
        value={form}
        onChange={setForm}
        options={[
          { value: 4, label: 'Tingkatan 4' },
          { value: 5, label: 'Tingkatan 5' },
        ]}
        style={{ marginBottom: spacing.md }}
      />
      <View style={{ gap: spacing.sm }}>
        {getChaptersByForm(form).map((c) => {
          const n = countFor(`bab-${c.id}`);
          const avg = chapterQuizAverage(state, c.id);
          const topicQuizzes = c.subtopics.filter((s) => questionsForSubtopic(s.id).length > 0);
          return (
            <Card key={c.id} style={[styles.chRow, !n && { opacity: 0.6 }]}>
              {/* Header and topic chips are sibling pressables (never nested). */}
              <Touchable
                style={styles.chHead}
                disabled={!n}
                onPress={() => router.push(`/kuiz/bab-${c.id}`)}
                accessibilityLabel={`Kuiz Bab ${c.number}`}
              >
                <Text style={styles.chNum}>{c.number}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={type.subheading} numberOfLines={2}>
                    {c.title}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: spacing.sm, marginTop: 4 }}>
                    {n ? <Badge label={`${n} soalan`} tone="navy" /> : <Badge label="Akan ditambah" tone="muted" />}
                    {avg !== null ? <Badge label={`Purata ${avg}%`} tone={avg >= 70 ? 'gold' : 'red'} /> : null}
                  </View>
                </View>
                {n ? <Ionicons name="play-circle" size={30} color={brand.navy} /> : null}
              </Touchable>
              {topicQuizzes.length ? (
                <View style={styles.topicChips}>
                  {topicQuizzes.map((s) => (
                    <Chip key={s.id} label={`Topik ${s.code}`} onPress={() => router.push(`/kuiz/topik-${s.id}`)} />
                  ))}
                </View>
              ) : null}
            </Card>
          );
        })}
      </View>
      <Text style={styles.note}>Soalan latihan disediakan oleh Titik Sejarah berdasarkan nota — bukan soalan SPM sebenar.</Text>
    </Screen>
  );
}

function Mode({ icon, title, meta, onPress, highlight }: { icon: IconName; title: string; meta: string; onPress: () => void; highlight?: boolean }) {
  return (
    <Card onPress={onPress} style={styles.mode} accessibilityLabel={title}>
      <View style={[styles.modeIcon, highlight && { backgroundColor: colors.redSoft }]}>
        <Ionicons name={icon} size={20} color={highlight ? brand.red : brand.navy} />
      </View>
      <Text style={[type.subheading, { fontSize: 14 }]}>{title}</Text>
      <Text style={[type.small, { fontSize: 12 }]}>{meta}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  daily: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.lg },
  dailyIcon: { width: 52, height: 52, borderRadius: 16, backgroundColor: brand.gold, alignItems: 'center', justifyContent: 'center' },
  dailyTitle: { fontFamily: fonts.serif, fontSize: 19, fontWeight: '700', color: brand.white, marginVertical: 2 },
  spm: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginTop: spacing.md },
  spmBadge: { width: 52, height: 52, borderRadius: 16, backgroundColor: brand.red, alignItems: 'center', justifyContent: 'center' },
  spmText: { fontFamily: fonts.serif, fontWeight: '700', color: brand.white, fontSize: 16, letterSpacing: 1 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  mode: { width: '30%', flexGrow: 1, padding: spacing.md, gap: 4, minWidth: 100 },
  modeIcon: { width: 38, height: 38, borderRadius: 11, backgroundColor: colors.goldSoft, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  chRow: { padding: spacing.md },
  chHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  chNum: { fontFamily: fonts.serif, fontSize: 22, fontWeight: '700', color: brand.red, width: 30, textAlign: 'center' },
  topicChips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.md, paddingLeft: 42 },
  note: { ...type.small, fontSize: 12, textAlign: 'center', marginTop: spacing.xl, paddingHorizontal: spacing.lg },
});
