import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { Badge, Button, Card, EmptyState, SourceBadge } from '../../components/ui';
import { spmCategories, spmItemsFor } from '../../data/spm';
import { getChapter } from '../../data/syllabus';
import type { SpmCategory } from '../../types/content';

export default function SpmCategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const cat = spmCategories.find((c) => c.id === category);
  if (!cat) {
    return (
      <Screen header={<StackHeader title="Latihan SPM" />}>
        <EmptyState icon="alert-circle-outline" title="Kategori tidak dijumpai" message="Sila pilih semula daripada senarai." action="Kembali" onAction={() => router.replace('/spm')} />
      </Screen>
    );
  }

  if (cat.id === 'k1') {
    return (
      <Screen header={<StackHeader title="Kertas 1 · Objektif" subtitle="Latihan SPM" />}>
        <Card style={{ gap: spacing.md }}>
          <Text style={type.heading}>Format aneka pilihan</Text>
          <Text style={type.body}>
            Soalan objektif dengan empat pilihan jawapan. Jawapan anda disemak serta-merta, disertai penerangan jawapan betul.
          </Text>
          <View style={{ gap: spacing.sm }}>
            <Tip text="Baca setiap pilihan sebelum menjawab — kenal pasti pilihan yang hampir sama." />
            <Tip text="Perhatikan kata kunci seperti BUKAN, UTAMA dan PALING." />
            <Tip text="Soalan yang tersilap akan disimpan untuk mod Ulang Kesilapan." />
          </View>
          <Button label="Mula latihan objektif" icon="play" onPress={() => router.push('/kuiz/spm-k1')} />
        </Card>
        <View style={{ flexDirection: 'row', gap: spacing.md, marginTop: spacing.md }}>
          <Button label="Tingkatan 4" variant="secondary" small style={{ flex: 1 }} onPress={() => router.push('/kuiz/tingkatan-4')} />
          <Button label="Tingkatan 5" variant="secondary" small style={{ flex: 1 }} onPress={() => router.push('/kuiz/tingkatan-5')} />
        </View>
        <Text style={[type.small, { textAlign: 'center', marginTop: spacing.xl, fontSize: 12 }]}>
          Soalan latihan Titik Sejarah berdasarkan nota — bukan soalan SPM sebenar.
        </Text>
      </Screen>
    );
  }

  const items = spmItemsFor(cat.id as SpmCategory);
  return (
    <Screen header={<StackHeader title={`${cat.title} · ${cat.short}`} subtitle="Latihan SPM" />}>
      <Text style={[type.small, { marginBottom: spacing.lg }]}>{cat.description}</Text>
      {items.length === 0 ? (
        <EmptyState icon="hourglass-outline" title="Akan ditambah" message="Soalan untuk kategori ini sedang disediakan." />
      ) : (
        <View style={{ gap: spacing.md }}>
          {items.map((it) => {
            const ch = getChapter(it.chapterId);
            const marks = it.parts.reduce((s, p) => s + p.marks, 0);
            return (
              <Card key={it.id} onPress={() => router.push(`/spm/soalan/${it.id}`)} style={{ gap: spacing.sm }}>
                <View style={styles.metaRow}>
                  <Badge label={`T${it.form}${ch ? ` · Bab ${ch.number}` : ''}`} tone="navy" />
                  <Badge label={`${marks} markah`} tone="gold" />
                </View>
                <Text style={type.subheading}>{it.title}</Text>
                <Text style={[type.small, { fontSize: 12.5 }]}>
                  {it.parts.length} bahagian{ch ? ` · ${ch.title}` : ''}
                </Text>
                <View style={[styles.metaRow, { justifyContent: 'space-between' }]}>
                  <SourceBadge status={it.source.status} />
                  <Ionicons name="arrow-forward" size={18} color={brand.navy} />
                </View>
              </Card>
            );
          })}
        </View>
      )}
    </Screen>
  );
}

function Tip({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: 'row', gap: spacing.sm }}>
      <Ionicons name="checkmark-circle-outline" size={18} color={brand.red} />
      <Text style={[type.small, { flex: 1, color: colors.text }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  metaRow: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
});
