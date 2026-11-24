import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { brand, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { List, ListRow, SectionHeader } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { papers, paperTitle } from '../../data/papers';
import { PAPER_SOURCE } from '../../data/papers/paper';
import { shortDate } from '../../utils/date';

export default function PaperList() {
  const { state } = useApp();
  const groups = [
    { title: 'Format penuh', note: 'Tingkatan 4 dan 5, seperti SPM sebenar.', items: papers.filter((p) => p.scope === 'T4T5') },
    { title: 'Tingkatan 4', note: 'Bab 1 hingga 10 Tingkatan 4 sahaja.', items: papers.filter((p) => p.scope === 'T4') },
  ].filter((g) => g.items.length);

  return (
    <Screen header={<StackHeader title="Kertas 1 penuh" subtitle="Latihan SPM" />}>
      <Text style={type.body}>
        Setiap kertas ada 40 soalan objektif dan masa 1 jam. Jawapan hanya disemak selepas anda hantar, sama seperti di dewan
        peperiksaan. Anda boleh keluar dan sambung semula kemudian.
      </Text>

      {groups.map((g) => (
        <View key={g.title} style={{ marginTop: spacing.xxl }}>
          <SectionHeader title={g.title} note={g.note} />
          <List>
            {g.items.map((p) => {
              const tries = state.paperAttempts.filter((a) => a.paperId === p.id);
              const best = tries.reduce((m, a) => Math.max(m, a.score), -1);
              const inProgress = state.paperDraft?.paperId === p.id;
              const sub = inProgress
                ? 'Sedang dijawab. Ketik untuk sambung.'
                : tries.length
                  ? `Skor terbaik ${best}/${p.q.length}. Cubaan terakhir ${shortDate(tries[0].at)}.`
                  : 'Belum dicuba.';
              return (
                <ListRow
                  key={p.id}
                  lead={String(p.set)}
                  title={paperTitle(p)}
                  subtitle={sub}
                  value={best >= 0 ? `${Math.round((best / p.q.length) * 100)}%` : undefined}
                  onPress={() => router.push(`/kertas/${p.id}`)}
                />
              );
            })}
          </List>
        </View>
      ))}

      <Text style={styles.note}>{PAPER_SOURCE}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  note: { ...type.small, fontSize: 12, marginTop: spacing.xl, color: brand.navy, opacity: 0.6 },
});
