import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { brand, colors, fonts, spacing, type } from '../constants/theme';
import { Screen, StackHeader } from '../components/layout';
import { Segmented } from '../components/ui';
import { allDates } from '../data/extras';
import { getChapter } from '../data/syllabus';

type Filter = 'semua' | 't4' | 't5';

/** Era heading for a sort key: century before 1800, then by decade. */
function eraOf(key: number): string {
  const y = Math.floor(key / 10000);
  if (y > 9999) return 'Lain-lain';
  if (y < 1800) return `Abad ke-${Math.floor(y / 100) + 1}`;
  return `${Math.floor(y / 10) * 10}-an`;
}

export default function TimelineScreen() {
  const [filter, setFilter] = useState<Filter>('semua');
  const entries = useMemo(() => allDates().filter((e) => filter === 'semua' || e.chapterId.startsWith(filter)), [filter]);

  let lastEra = '';
  return (
    <Screen header={<StackHeader title="Garis masa" subtitle="Semua tarikh penting" />}>
      <Text style={type.body}>Tarikh penting daripada semua bab, disusun dari yang paling awal. Ketik satu peristiwa untuk membuka babnya.</Text>
      <Segmented
        value={filter}
        onChange={setFilter}
        options={[
          { value: 'semua', label: `Semua (${allDates().length})` },
          { value: 't4', label: 'Tingkatan 4' },
          { value: 't5', label: 'Tingkatan 5' },
        ]}
        style={{ marginVertical: spacing.lg }}
      />
      {entries.map((e, i) => {
        const era = eraOf(e.key);
        const showEra = era !== lastEra && era !== e.when;
        lastEra = era;
        const ch = getChapter(e.chapterId);
        return (
          <View key={`${e.chapterId}-${i}`}>
            {showEra ? <Text style={styles.era}>{era}</Text> : null}
            <Pressable
              onPress={() => router.push(`/bab/${e.chapterId}`)}
              style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}
              accessibilityRole="button"
              accessibilityLabel={`${e.when}. ${e.what}`}
            >
              <View style={styles.rail}>
                <View style={styles.dot} />
                <View style={styles.line} />
              </View>
              <View style={{ flex: 1, paddingBottom: spacing.lg }}>
                <Text style={styles.when}>{e.when}</Text>
                <Text style={type.body}>{e.what}</Text>
                {ch ? (
                  <Text style={[type.caption, { marginTop: 2 }]}>
                    Tingkatan {ch.form}, bab {ch.number}
                  </Text>
                ) : null}
              </View>
            </Pressable>
          </View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  era: { fontFamily: fonts.serif, fontSize: 20, fontWeight: '700', color: brand.navy, marginTop: spacing.md, marginBottom: spacing.md },
  row: { flexDirection: 'row', gap: spacing.md },
  rail: { width: 14, alignItems: 'center' },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: brand.gold, borderWidth: 2, borderColor: brand.navy, marginTop: 5 },
  line: { flex: 1, width: 1.5, backgroundColor: colors.borderStrong, marginTop: 2 },
  when: { fontFamily: fonts.serif, fontWeight: '700', fontSize: 15, color: brand.red },
});
