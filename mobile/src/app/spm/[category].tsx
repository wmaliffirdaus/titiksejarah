import { StyleSheet, Text, View } from 'react-native';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { EmptyState, List, ListRow, SectionHeader } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { spmCategories, spmItemsFor } from '../../data/spm';
import { PAPER_SOURCE } from '../../data/papers/paper';
import { getChapter } from '../../data/syllabus';
import type { SpmCategory, SpmItem } from '../../types/content';

export default function SpmCategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const { state } = useApp();
  const cat = spmCategories.find((c) => c.id === category);
  if (cat?.id === 'k1') return <Redirect href="/kertas" />;
  if (!cat) {
    return (
      <Screen header={<StackHeader title="Latihan SPM" />}>
        <EmptyState title="Kategori tidak dijumpai" message="Sila pilih semula daripada senarai." action="Kembali" onAction={() => router.replace('/spm')} />
      </Screen>
    );
  }

  const items = spmItemsFor(cat.id as SpmCategory);
  // Group by paper set, e.g. "Tingkatan 4, set 1".
  const groups = new Map<string, SpmItem[]>();
  for (const it of items) {
    const key = it.paper ? it.paper.replace(/, soalan \d+$/, '') : 'Lain-lain';
    groups.set(key, [...(groups.get(key) ?? []), it]);
  }

  return (
    <Screen header={<StackHeader title={cat.id === 'kbat' ? 'KBAT' : `${cat.title} ${cat.short.toLowerCase()}`} subtitle="Latihan SPM" />}>
      <Text style={type.body}>{cat.description} Tulis jawapan di atas kertas, kemudian buka skema dan tanda markah sendiri.</Text>
      {items.length === 0 ? (
        <EmptyState title="Akan ditambah" message="Soalan untuk bahagian ini sedang disediakan." />
      ) : (
        [...groups.entries()].map(([g, list]) => (
          <View key={g} style={{ marginTop: spacing.xl }}>
            <SectionHeader title={g.charAt(0).toUpperCase() + g.slice(1)} />
            <List>
              {list.map((it) => {
                const ch = getChapter(it.chapterId);
                const marks = it.parts.reduce((s, p) => s + p.marks, 0);
                const mark = state.k2Marks[it.id];
                const n = it.paper?.match(/soalan (\d+)$/)?.[1];
                return (
                  <ListRow
                    key={it.id}
                    lead={n ?? ''}
                    title={cat.id === 'kbat' ? it.parts[0].question : it.title}
                    subtitle={`Tingkatan ${it.form}${ch ? `, Bab ${ch.number}` : ''}. ${marks} markah.`}
                    value={mark ? `${mark.score}/${mark.total}` : undefined}
                    onPress={() => router.push(`/spm/soalan/${it.id}`)}
                    numberOfLines={cat.id === 'kbat' ? 3 : 2}
                  />
                );
              })}
            </List>
          </View>
        ))
      )}
      <Text style={styles.note}>{PAPER_SOURCE}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  note: { ...type.small, fontSize: 12, marginTop: spacing.xl },
});
