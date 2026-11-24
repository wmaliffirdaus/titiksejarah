import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../../constants/theme';
import { Screen, StackHeader } from '../../../components/layout';
import { Badge, Button, Card, EmptyState, IconButton } from '../../../components/ui';
import { useBookmark } from '../../../hooks/useBookmark';
import { getSpmItem, spmCategories } from '../../../data/spm';
import { getChapter } from '../../../data/syllabus';

/**
 * SPM structured / essay / KBAT item. Students write their answer on paper (or in their head),
 * reveal the suggested points, then tick the points they covered to self-mark.
 */
export default function SpmItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: string }>();
  const item = getSpmItem(String(itemId));
  const bookmark = useBookmark('soalan', String(itemId));
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [ticked, setTicked] = useState<Record<string, boolean>>({});

  if (!item) {
    return (
      <Screen header={<StackHeader title="Soalan" />}>
        <EmptyState icon="alert-circle-outline" title="Soalan tidak dijumpai" message="Soalan ini mungkin telah dikemas kini." action="Ke Latihan SPM" onAction={() => router.replace('/spm')} />
      </Screen>
    );
  }

  const cat = spmCategories.find((c) => c.id === item.category);
  const ch = getChapter(item.chapterId);
  const totalMarks = item.parts.reduce((s, p) => s + p.marks, 0);
  // Self-marking: 1 mark per point ticked, capped at each part's marks.
  const selfScore = item.parts.reduce((sum, p, pi) => {
    const got = p.points.filter((_, i) => ticked[`${pi}-${i}`]).length;
    return sum + Math.min(got, p.marks);
  }, 0);
  const anyRevealed = Object.values(revealed).some(Boolean);

  return (
    <Screen
      header={
        <StackHeader
          title={item.title}
          subtitle={`${cat?.title ?? 'SPM'} · ${cat?.short ?? ''}`}
          right={
            <IconButton
              icon="bookmark-outline"
              activeIcon="bookmark"
              active={bookmark.saved}
              color={bookmark.saved ? brand.red : brand.navy}
              label={bookmark.saved ? 'Buang soalan daripada simpanan' : 'Simpan soalan'}
              onPress={bookmark.toggle}
            />
          }
        />
      }
    >
      <View style={styles.metaRow}>
        <Badge label={`Tingkatan ${item.form}`} tone="navy" />
        {ch ? <Badge label={`Bab ${ch.number}`} tone="navy" /> : null}
        <Badge label={`${totalMarks} markah`} tone="gold" />
      </View>
      <View style={styles.sampleNote}>
        <Ionicons name="alert-circle-outline" size={16} color={brand.red} />
        <Text style={[type.small, { flex: 1, fontSize: 12 }]}>{item.source.label}</Text>
      </View>

      {item.stimulus ? (
        <View style={styles.stimulus}>
          <Text style={[type.caption, { marginBottom: 6 }]}>SUMBER</Text>
          <Text style={[type.body, { fontStyle: 'italic' }]}>{item.stimulus}</Text>
        </View>
      ) : null}

      <View style={{ gap: spacing.lg, marginTop: spacing.lg }}>
        {item.parts.map((p, pi) => {
          const open = !!revealed[pi];
          return (
            <Card key={pi} style={{ gap: spacing.md }}>
              <View style={styles.partHead}>
                {p.label ? <Text style={styles.partLabel}>{p.label}</Text> : null}
                <Text style={[type.body, { flex: 1, fontWeight: '600' }]}>{p.question}</Text>
                <Text style={styles.marks}>[{p.marks}]</Text>
              </View>
              {open ? (
                <View style={styles.scheme}>
                  <Text style={[type.caption, { color: brand.navy }]}>SKEMA CADANGAN · TANDA ISI YANG ANDA TULIS</Text>
                  {p.points.map((pt, i) => {
                    const k = `${pi}-${i}`;
                    const on = !!ticked[k];
                    return (
                      <Pressable
                        key={k}
                        onPress={() => setTicked((t) => ({ ...t, [k]: !on }))}
                        style={styles.point}
                        accessibilityRole="checkbox"
                        accessibilityState={{ checked: on }}
                      >
                        <Ionicons name={on ? 'checkbox' : 'square-outline'} size={20} color={on ? brand.navy : colors.textSubtle} />
                        <Text style={[type.body, { flex: 1, fontSize: 14.5 }]}>{pt}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              ) : (
                <Button
                  label="Tunjuk skema jawapan"
                  icon="eye-outline"
                  variant="secondary"
                  small
                  onPress={() => setRevealed((r) => ({ ...r, [pi]: true }))}
                />
              )}
            </Card>
          );
        })}
      </View>

      {anyRevealed ? (
        <Card tone="navy" style={styles.scoreCard}>
          <Text style={[type.caption, { color: brand.gold }]}>MARKAH ANGGARAN SENDIRI</Text>
          <Text style={styles.score}>
            {selfScore} / {totalMarks}
          </Text>
          <Text style={[type.small, { color: alpha(brand.white, 0.8), textAlign: 'center' }]}>
            1 markah bagi setiap isi yang betul, dihadkan kepada markah setiap bahagian.
          </Text>
        </Card>
      ) : (
        <Text style={[type.small, { textAlign: 'center', marginTop: spacing.xl }]}>
          Tulis jawapan anda dahulu, kemudian buka skema untuk menyemak.
        </Text>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  metaRow: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap' },
  sampleNote: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md, alignItems: 'flex-start' },
  stimulus: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    backgroundColor: alpha(brand.white, 0.7),
    borderRadius: radius.md,
    borderLeftWidth: 4,
    borderLeftColor: brand.navy,
  },
  partHead: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start' },
  partLabel: { fontFamily: fonts.serif, fontWeight: '700', color: brand.red, fontSize: 16 },
  marks: { fontFamily: fonts.sansMedium, fontWeight: '700', color: colors.textMuted },
  scheme: { gap: spacing.sm, backgroundColor: colors.goldSoft, borderRadius: radius.md, padding: spacing.md },
  point: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start', paddingVertical: 4 },
  scoreCard: { marginTop: spacing.xl, alignItems: 'center', gap: spacing.xs },
  score: { fontFamily: fonts.serif, fontSize: 34, fontWeight: '700', color: brand.white },
});
