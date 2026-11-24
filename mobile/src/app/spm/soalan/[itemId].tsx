import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../../constants/theme';
import { Screen, StackHeader } from '../../../components/layout';
import { Badge, Button, Card, EmptyState, IconButton, Segmented } from '../../../components/ui';
import { QuestionText } from '../../../components/QuestionText';
import { useBookmark } from '../../../hooks/useBookmark';
import { useApp } from '../../../store/AppProvider';
import { getSpmItem } from '../../../data/spm';
import { KBAT_RUBRIC } from '../../../data/k2/k2';
import { getChapter } from '../../../data/syllabus';
import { shortDate } from '../../../utils/date';

/** Marks for a rubric level, using the top of each band (Aras 4 = 8, Aras 3 = 6, ...). */
const ARAS_MARKS = [0, 2, 4, 6, 8];

/**
 * Kertas 2 struktur, esei or KBAT item. The student writes on paper, opens the scheme for each part,
 * ticks the points they covered (or picks a rubric level for KBAT essays), then saves the mark.
 */
export default function SpmItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: string }>();
  const item = getSpmItem(String(itemId));
  const { state, dispatch } = useApp();
  const bookmark = useBookmark('soalan', String(itemId));
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [ticked, setTicked] = useState<Record<string, boolean>>({});
  const [aras, setAras] = useState<Record<number, number>>({});
  const [saved, setSaved] = useState(false);

  if (!item) {
    return (
      <Screen header={<StackHeader title="Soalan" />}>
        <EmptyState title="Soalan tidak dijumpai" message="Soalan ini mungkin telah dikemas kini." action="Ke latihan SPM" onAction={() => router.replace('/spm')} />
      </Screen>
    );
  }

  const ch = getChapter(item.chapterId);
  const totalMarks = item.parts.reduce((s, p) => s + p.marks, 0);
  const partScore = (pi: number) => {
    const p = item.parts[pi];
    if (p.rubric) return Math.min(p.marks, ARAS_MARKS[aras[pi] ?? 0]);
    return Math.min(p.marks, p.points.filter((_, i) => ticked[`${pi}-${i}`]).length);
  };
  const selfScore = item.parts.reduce((s, _, pi) => s + partScore(pi), 0);
  const allRevealed = item.parts.every((_, pi) => revealed[pi]);
  const last = state.k2Marks[item.id];
  const n = item.paper?.match(/soalan (\d+)$/)?.[1];

  function save() {
    dispatch({ type: 'saveK2Mark', itemId: item!.id, mark: { score: selfScore, total: totalMarks, at: Date.now() } });
    setSaved(true);
  }

  return (
    <Screen
      header={
        <StackHeader
          title={n ? `Soalan ${n}` : 'Soalan'}
          subtitle={item.category === 'k2-struktur' ? 'Kertas 2 struktur' : item.category === 'k2-esei' ? 'Kertas 2 esei' : 'KBAT'}
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
      <Text style={type.caption}>
        Tingkatan {item.form}
        {ch ? `, Bab ${ch.number}. ${ch.title}` : ''}
      </Text>
      <Text style={[type.title, { marginTop: 4 }]}>{item.title}</Text>
      <Text style={[type.small, { marginTop: 4 }]}>
        {totalMarks} markah. {item.paper ? `${item.paper.charAt(0).toUpperCase()}${item.paper.slice(1)}.` : ''}
        {last ? ` Markah terakhir ${last.score}/${last.total} pada ${shortDate(last.at)}.` : ''}
      </Text>

      {item.stimulus ? (
        <View style={styles.stimulus}>
          <QuestionText text={item.stimulus} />
        </View>
      ) : null}

      <View style={{ gap: spacing.xl, marginTop: spacing.xl }}>
        {item.parts.map((p, pi) => {
          const open = !!revealed[pi];
          return (
            <View key={pi} style={styles.part}>
              <View style={styles.partHead}>
                <Text style={styles.partLabel}>{p.label}</Text>
                <View style={{ flex: 1, gap: 6 }}>
                  <Text style={[type.body, { fontWeight: '600' }]}>{p.question}</Text>
                  <View style={{ flexDirection: 'row', gap: spacing.sm }}>
                    <Badge label={`${p.marks} markah`} tone="muted" />
                    {p.kbat ? <Badge label="KBAT" tone="red" /> : null}
                  </View>
                </View>
              </View>

              {!open ? (
                <Button label="Buka skema" variant="secondary" small onPress={() => setRevealed((r) => ({ ...r, [pi]: true }))} style={{ alignSelf: 'flex-start', marginTop: spacing.md }} />
              ) : (
                <View style={styles.scheme}>
                  {p.rubric ? (
                    <>
                      <Text style={type.subheading}>Rubrik penilaian</Text>
                      {KBAT_RUBRIC.map((r) => (
                        <View key={r.level} style={styles.rubricRow}>
                          <Text style={styles.rubricLevel}>
                            {r.level}
                            {'\n'}
                            <Text style={styles.rubricMarks}>{r.marks} m</Text>
                          </Text>
                          <Text style={[type.small, { flex: 1, color: brand.navy }]}>{r.text}</Text>
                        </View>
                      ))}
                      <Text style={[type.subheading, { marginTop: spacing.md }]}>Contoh isi jawapan</Text>
                      {p.points.map((pt, i) => (
                        <Text key={i} style={[type.body, { fontSize: 14.5 }]}>
                          {i + 1}. {pt}
                        </Text>
                      ))}
                      <Text style={[type.subheading, { marginTop: spacing.md }]}>Aras jawapan anda</Text>
                      <Segmented
                        options={[1, 2, 3, 4].map((a) => ({ value: a, label: `Aras ${a}` }))}
                        value={aras[pi] ?? 0}
                        onChange={(v) => setAras((s) => ({ ...s, [pi]: v }))}
                      />
                    </>
                  ) : (
                    <>
                      <Text style={type.caption}>
                        Mana-mana {p.marks} isi, 1 markah setiap satu. Tanda isi yang anda tulis.
                      </Text>
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
                            <Text style={[type.body, { flex: 1, fontSize: 14.5, lineHeight: 21 }]}>{pt}</Text>
                          </Pressable>
                        );
                      })}
                    </>
                  )}
                  <View style={styles.partFoot}>
                    <Text style={type.caption}>{p.ref ? `Subtopik ${p.ref.replace('hlm.', 'halaman')}` : ''}</Text>
                    <Text style={styles.partScore}>
                      {partScore(pi)}/{p.marks}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </View>

      <Card tone="navy" style={styles.scoreCard}>
        <Text style={[type.caption, { color: brand.gold }]}>Markah anggaran sendiri</Text>
        <Text style={styles.score}>
          {selfScore}
          <Text style={styles.scoreOf}>/{totalMarks}</Text>
        </Text>
        <Text style={[type.small, { color: alpha(brand.white, 0.78), textAlign: 'center' }]}>
          {allRevealed ? 'Semua skema sudah dibuka.' : 'Buka skema setiap ceraian selepas anda menulis jawapan.'}
        </Text>
        <Button
          label={saved ? 'Markah disimpan' : 'Simpan markah'}
          variant="gold"
          icon={saved ? 'checkmark' : undefined}
          onPress={save}
          disabled={!Object.keys(revealed).length}
          style={{ alignSelf: 'stretch', marginTop: spacing.sm }}
        />
      </Card>
      <Text style={styles.source}>{item.source.label}. Skema cadangan, bukan skema pemarkahan rasmi. Jawapan lain yang tepat dan munasabah wajar diterima.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  stimulus: { marginTop: spacing.lg, padding: spacing.lg, backgroundColor: brand.white, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.borderStrong },
  part: { paddingBottom: spacing.xl, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.borderStrong },
  partHead: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start' },
  partLabel: { fontFamily: fonts.serif, fontWeight: '700', color: brand.red, fontSize: 17, minWidth: 28 },
  scheme: { gap: spacing.sm, marginTop: spacing.md, padding: spacing.md, borderRadius: radius.md, backgroundColor: brand.white, borderLeftWidth: 3, borderLeftColor: brand.gold },
  point: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start', paddingVertical: 4 },
  rubricRow: { flexDirection: 'row', gap: spacing.md, paddingVertical: 6, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.borderStrong },
  rubricLevel: { fontFamily: fonts.serif, fontWeight: '700', color: brand.navy, width: 64, fontSize: 14 },
  rubricMarks: { fontFamily: fonts.sans, fontWeight: '400', fontSize: 12, color: brand.red },
  partFoot: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.sm },
  partScore: { fontFamily: fonts.serif, fontWeight: '700', fontSize: 17, color: brand.navy },
  scoreCard: { marginTop: spacing.xl, alignItems: 'center', gap: spacing.xs },
  score: { fontFamily: fonts.serif, fontSize: 40, fontWeight: '700', color: brand.white },
  scoreOf: { fontSize: 20, color: alpha(brand.white, 0.6) },
  source: { ...type.small, fontSize: 12, marginTop: spacing.lg },
});
