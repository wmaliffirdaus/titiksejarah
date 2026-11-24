import { StyleSheet, Text, View } from 'react-native';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { parseQuestionText } from '../utils/questionText';

export { parseQuestionText };

export function QuestionText({ text, scale = 1 }: { text: string; scale?: number }) {
  const blocks = parseQuestionText(text);
  const body = { ...type.body, fontSize: 16 * scale, lineHeight: 24 * scale };
  return (
    <View style={{ gap: spacing.md }}>
      {blocks.map((b, i) => {
        if (b.kind === 'para') return <Text key={i} style={body}>{b.text}</Text>;
        if (b.kind === 'box')
          return (
            <View key={i} style={styles.box}>
              {b.lines.map((l, j) => (
                <Text key={j} style={[body, { fontSize: 15 * scale }]}>
                  {l}
                </Text>
              ))}
            </View>
          );
        if (b.kind === 'items')
          return (
            <View key={i} style={{ gap: 6 }}>
              {b.items.map((it) => (
                <View key={it.label} style={styles.item}>
                  <Text style={[styles.itemLabel, { fontSize: 15 * scale }]}>{it.label}</Text>
                  <Text style={[body, { flex: 1, fontSize: 15 * scale, lineHeight: 22 * scale }]}>{it.text}</Text>
                </View>
              ))}
            </View>
          );
        const [head, ...rows] = b.rows;
        return (
          <View key={i} style={styles.table}>
            <View style={[styles.tr, styles.th]}>
              {head.map((c, j) => (
                <Text key={j} style={[styles.thText, { flex: j === 0 && head.length > 1 ? 0.8 : 1 }]}>
                  {c}
                </Text>
              ))}
            </View>
            {rows.map((r, ri) => (
              <View key={ri} style={[styles.tr, ri > 0 && styles.trRule]}>
                {r.map((c, j) => (
                  <Text key={j} style={[styles.td, { flex: j === 0 && r.length > 1 ? 0.8 : 1 }, j === 0 && { fontWeight: '600' }]}>
                    {c}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
}

/** Option text; "a | b" (pairing questions) shows as two parts. */
export function OptionText({ text, color = brand.navy }: { text: string; color?: string }) {
  const [a, b] = text.split(' | ');
  if (b === undefined) return <Text style={[styles.option, { color }]}>{text}</Text>;
  return (
    <Text style={[styles.option, { color }]}>
      <Text style={{ fontWeight: '700' }}>{a}</Text>
      {'\n'}
      {b}
    </Text>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: colors.borderStrong,
    borderRadius: radius.sm,
    padding: spacing.md,
    gap: 4,
    backgroundColor: alpha(brand.white, 0.7),
  },
  item: { flexDirection: 'row', gap: spacing.sm },
  itemLabel: { fontFamily: fonts.serif, fontWeight: '700', color: brand.red, width: 30 },
  table: { borderWidth: 1, borderColor: colors.borderStrong, borderRadius: radius.sm, overflow: 'hidden', backgroundColor: brand.white },
  tr: { flexDirection: 'row', gap: spacing.sm, paddingHorizontal: spacing.md, paddingVertical: 8 },
  trRule: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.borderStrong },
  th: { backgroundColor: alpha(brand.navy, 0.06), borderBottomWidth: 1, borderBottomColor: colors.borderStrong },
  thText: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '700', color: brand.navy },
  td: { fontFamily: fonts.sans, fontSize: 14, lineHeight: 20, color: brand.navy },
  option: { fontFamily: fonts.sans, fontSize: 15, lineHeight: 21, flex: 1 },
});
