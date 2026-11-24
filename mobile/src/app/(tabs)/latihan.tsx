import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { List, ListRow, SectionHeader, Segmented } from '../../components/ui';
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
  const best = state.paperAttempts.length ? Math.max(...state.paperAttempts.map((a) => Math.round((a.score / a.total) * 100))) : null;
  const marked = (cat: 'k2-struktur' | 'k2-esei' | 'kbat') => spmItemsFor(cat).filter((i) => state.k2Marks[i.id]).length;

  return (
    <Screen>
      <PageTitle eyebrow="Kuiz dan peperiksaan" title="Latihan" subtitle="Latih ingatan dahulu, kemudian uji diri dengan format SPM." />

      <SectionHeader title="Format SPM" />
      <List>
        <ListRow
          lead="1"
          title="Kertas 1 penuh"
          subtitle={`40 soalan objektif dalam 1 jam. ${papers.length} set.${state.paperDraft ? ' Ada kertas belum siap.' : ''}`}
          value={best !== null ? `${best}%` : undefined}
          onPress={() => router.push('/kertas')}
        />
        <ListRow
          lead="2"
          title="Kertas 2 struktur"
          subtitle={`Bahagian A, berpandukan sumber. ${spmItemsFor('k2-struktur').length} soalan.`}
          value={marked('k2-struktur') ? `${marked('k2-struktur')} ditanda` : undefined}
          onPress={() => router.push('/spm/k2-struktur')}
        />
        <ListRow
          lead="2"
          title="Kertas 2 esei"
          subtitle={`Bahagian B, huraian 20 markah. ${spmItemsFor('k2-esei').length} soalan.`}
          value={marked('k2-esei') ? `${marked('k2-esei')} ditanda` : undefined}
          onPress={() => router.push('/spm/k2-esei')}
        />
        <ListRow
          lead="K"
          title="KBAT"
          subtitle={`Soalan pendapat dengan rubrik aras. ${spmItemsFor('kbat').length} soalan.`}
          onPress={() => router.push('/spm/kbat')}
        />
      </List>

      <SectionHeader title="Kuiz pantas" style={styles.section} note="Maklum balas dan penerangan selepas setiap soalan." />
      <List>
        <ListRow
          title="Cabaran harian"
          subtitle={daily.done ? `Selesai hari ini, skor ${daily.score}/${daily.total}.` : `${DAILY_SIZE} soalan baharu setiap hari.`}
          onPress={() => router.push('/kuiz/harian')}
        />
        <ListRow title="Semua bab Tingkatan 4" value={`${countFor('tingkatan-4')}`} onPress={() => router.push('/kuiz/tingkatan-4')} />
        <ListRow title="Semua bab Tingkatan 5" value={`${countFor('tingkatan-5')}`} onPress={() => router.push('/kuiz/tingkatan-5')} />
        <ListRow title="Soalan KBAT objektif" value={`${countFor('kbat')}`} onPress={() => router.push('/kuiz/kbat')} />
        <ListRow
          title="Ulang kesilapan"
          subtitle={wrong ? 'Soalan yang anda salah jawab sebelum ini.' : 'Tiada soalan salah buat masa ini.'}
          value={wrong ? `${wrong}` : undefined}
          onPress={() => router.push('/kuiz/kesilapan')}
        />
        <ListRow title="Soalan disimpan" value={saved ? `${saved}` : undefined} onPress={() => router.push('/kuiz/simpanan')} />
        <ListRow title="Kad imbas" subtitle="Istilah, tokoh dan tarikh." value={`${Object.keys(state.knownCards).length} dikuasai`} onPress={() => router.push('/kad')} />
      </List>

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

const styles = StyleSheet.create({
  section: { marginTop: spacing.xxl },
  note: { ...type.small, fontSize: 12, marginTop: spacing.xl },
});
