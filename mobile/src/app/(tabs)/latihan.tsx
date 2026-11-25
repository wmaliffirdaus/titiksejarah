import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { alpha, brand, colors, fonts, radius, shadow, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { ArrowButton, IconTile, List, ListRow, SectionHeader, Segmented, TickRing, Touchable, type IconName, type TileTone } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { chapterQuizAverage, dailyChallengeDone, savedQuestionIds, wrongIds } from '../../store/selectors';
import { getChaptersByForm } from '../../data/syllabus';
import { papers } from '../../data/papers';
import { spmItemsFor } from '../../data/spm';
import { countFor, DAILY_SIZE } from '../../utils/quiz';
import type { Form } from '../../types/content';

export default function PracticeScreen() {
  const { state } = useApp();
  const [form, setForm] = useState<Form>(state.profile.form);
  const daily = dailyChallengeDone(state);
  const wrong = wrongIds(state).length;
  const saved = savedQuestionIds(state).length;
  const bestScore = state.paperAttempts.length ? Math.max(...state.paperAttempts.map((a) => a.score)) : null;
  const draft = state.paperDraft;
  const draftAnswered = draft ? draft.answers.filter((a) => a >= 0).length : 0;
  const tried = new Set(state.paperAttempts.map((a) => a.paperId)).size;
  const marked = (cat: 'k2-struktur' | 'k2-esei' | 'kbat') => spmItemsFor(cat).filter((i) => state.k2Marks[i.id]).length;

  const ringValue = draft ? draftAnswered : (bestScore ?? 0);

  return (
    <Screen tabbed>
      <PageTitle eyebrow="Kuiz dan peperiksaan" title="Latihan" />

      {/* Kertas 1 */}
      <View style={styles.paper}>
        <View style={{ flex: 1, gap: 4 }}>
          <Text style={styles.paperLabel}>Kertas 1 penuh</Text>
          <Text style={styles.paperTitle}>40 soalan, 1 jam</Text>
          <Text style={styles.paperSub}>
            {draft
              ? `Ada kertas belum siap. ${draftAnswered} soalan dijawab.`
              : `${papers.length} set. ${tried ? `${tried} sudah dicuba.` : 'Mula dengan set pertama.'}`}
          </Text>
          <View style={{ height: spacing.md }} />
          <ArrowButton label={draft ? 'Sambung' : 'Pilih kertas'} onPress={() => router.push(draft ? `/kertas/${draft.paperId}` : '/kertas')} />
        </View>
        <TickRing value={ringValue} total={40} size={118} track={alpha(brand.white, 0.16)}>
          <Text style={styles.ringValue}>{draft ? draftAnswered : bestScore !== null ? bestScore : '0'}</Text>
          <Text style={styles.ringLabel}>{draft ? 'dijawab' : 'skor terbaik'}</Text>
        </TickRing>
      </View>

      {/* Kertas 2 */}
      <SectionHeader title="Kertas 2" note="Jawab sendiri, kemudian tanda dengan skema." style={styles.section} />
      <View style={styles.grid}>
        <PaperTile
          icon="reader"
          tone="gold"
          title="Struktur"
          sub={`Bahagian A, ${spmItemsFor('k2-struktur').length} soalan`}
          marked={marked('k2-struktur')}
          onPress={() => router.push('/spm/k2-struktur')}
        />
        <PaperTile
          icon="newspaper"
          tone="navy"
          title="Esei"
          sub={`Bahagian B, ${spmItemsFor('k2-esei').length} soalan`}
          marked={marked('k2-esei')}
          onPress={() => router.push('/spm/k2-esei')}
        />
      </View>
      <List style={{ marginTop: spacing.md }}>
        <ListRow
          icon="bulb"
          iconTone="red"
          title="KBAT"
          subtitle={`Soalan pendapat dengan rubrik aras. ${spmItemsFor('kbat').length} soalan.`}
          value={marked('kbat') ? `${marked('kbat')} ditanda` : undefined}
          onPress={() => router.push('/spm/kbat')}
        />
      </List>

      {/* Quick quizzes */}
      <SectionHeader title="Kuiz pantas" note="Penerangan selepas setiap soalan." style={styles.section} />
      <List>
        <ListRow
          icon="flash"
          iconTone="gold"
          title="Cabaran harian"
          subtitle={daily.done ? `Selesai hari ini, skor ${daily.score}/${daily.total}.` : `${DAILY_SIZE} soalan baharu setiap hari.`}
          value={daily.done ? 'Selesai' : undefined}
          onPress={() => router.push('/kuiz/harian')}
        />
        <ListRow icon="layers" title="Semua bab Tingkatan 4" value={`${countFor('tingkatan-4')}`} onPress={() => router.push('/kuiz/tingkatan-4')} />
        <ListRow icon="layers" title="Semua bab Tingkatan 5" value={`${countFor('tingkatan-5')}`} onPress={() => router.push('/kuiz/tingkatan-5')} />
        <ListRow icon="bulb-outline" iconTone="red" title="Soalan KBAT objektif" value={`${countFor('kbat')}`} onPress={() => router.push('/kuiz/kbat')} />
        <ListRow
          icon="refresh"
          iconTone="red"
          title="Ulang kesilapan"
          subtitle={wrong ? 'Soalan yang anda salah jawab sebelum ini.' : 'Tiada soalan salah buat masa ini.'}
          value={wrong ? `${wrong}` : undefined}
          onPress={() => router.push('/kuiz/kesilapan')}
        />
        <ListRow icon="bookmark" title="Soalan disimpan" value={saved ? `${saved}` : undefined} onPress={() => router.push('/kuiz/simpanan')} />
        <ListRow
          icon="albums"
          iconTone="gold"
          title="Kad imbas"
          subtitle="Istilah, tokoh dan tarikh."
          value={`${Object.keys(state.knownCards).length} dikuasai`}
          onPress={() => router.push('/kad')}
        />
      </List>

      {/* By chapter */}
      <SectionHeader title="Kuiz mengikut bab" style={styles.section} />
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
          const n = countFor(`bab-${c.id}`);
          const avg = chapterQuizAverage(state, c.id);
          return (
            <ListRow
              key={c.id}
              lead={String(c.number)}
              title={c.title}
              subtitle={n ? `${n} soalan${avg !== null ? `, purata ${avg}%` : ''}` : 'Soalan akan ditambah'}
              value={avg !== null ? `${avg}%` : undefined}
              onPress={n ? () => router.push(`/kuiz/bab-${c.id}`) : undefined}
            />
          );
        })}
      </List>
      <Text style={styles.note}>
        Soalan latihan ialah soalan asli Titik Sejarah berdasarkan buku teks. Soalan ini bukan soalan SPM sebenar.
      </Text>
    </Screen>
  );
}

function PaperTile({
  icon,
  tone,
  title,
  sub,
  marked,
  onPress,
}: {
  icon: IconName;
  tone: TileTone;
  title: string;
  sub: string;
  marked: number;
  onPress: () => void;
}) {
  return (
    <Touchable style={styles.tile} onPress={onPress} accessibilityLabel={`Kertas 2 ${title}`}>
      <IconTile icon={icon} tone={tone} size={42} />
      <Text style={styles.tileTitle}>{title}</Text>
      <Text style={[type.small, { fontSize: 12 }]} numberOfLines={2}>
        {sub}
      </Text>
      <Text style={styles.tileMeta}>{marked ? `${marked} ditanda` : 'Belum ditanda'}</Text>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: spacing.xxl },
  paper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: brand.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    ...shadow.raised,
  },
  paperLabel: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: brand.gold },
  paperTitle: { fontFamily: fonts.serif, fontSize: 22, lineHeight: 28, fontWeight: '700', color: brand.white },
  paperSub: { ...type.small, color: alpha(brand.white, 0.72) },
  ringValue: { fontFamily: fonts.serif, fontSize: 30, lineHeight: 34, fontWeight: '700', color: brand.white },
  ringLabel: { fontFamily: fonts.sans, fontSize: 11, color: alpha(brand.white, 0.7) },
  grid: { flexDirection: 'row', gap: spacing.md },
  tile: {
    flex: 1,
    backgroundColor: brand.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cardEdge,
    ...shadow.card,
  },
  tileTitle: { ...type.heading, marginTop: spacing.sm },
  tileMeta: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '600', color: brand.red, marginTop: spacing.sm },
  note: { ...type.small, fontSize: 12, marginTop: spacing.xl },
});
