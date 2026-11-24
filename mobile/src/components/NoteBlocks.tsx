import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { CalloutVariant, NoteBlock } from '../types/content';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { RichText } from './ui';

const calloutStyle: Record<CalloutVariant, { bg: string; bar: string; label: string; labelColor: string }> = {
  definisi: { bg: brand.white, bar: brand.navy, label: 'Definisi', labelColor: brand.navy },
  info: { bg: alpha(brand.gold, 0.16), bar: brand.gold, label: 'Info buku teks', labelColor: brand.navy },
  ingat: { bg: alpha(brand.red, 0.06), bar: brand.red, label: 'Ingat', labelColor: brand.red },
  iktibar: { bg: brand.white, bar: brand.gold, label: 'Iktibar', labelColor: brand.navy },
  tip: { bg: alpha(brand.navy, 0.05), bar: brand.navy, label: 'Tip menjawab', labelColor: brand.navy },
};

/** Renders structured note content. `scale` comes from the reader text-size preference. */
export function NoteBlocks({ blocks, scale = 1 }: { blocks: NoteBlock[]; scale?: number }) {
  const body = { ...type.body, fontSize: 15.5 * scale, lineHeight: 25 * scale };
  const small = { ...type.body, fontSize: 13.5 * scale, lineHeight: 20 * scale };

  return (
    <View style={{ gap: spacing.lg }}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'heading':
            return (
              <Text key={i} style={[type.heading, { fontSize: 18 * scale, lineHeight: 24 * scale, marginTop: spacing.sm }]} accessibilityRole="header">
                {b.text}
              </Text>
            );
          case 'para':
            return <RichText key={i} text={b.text} style={body} />;
          case 'list':
            return (
              <View key={i} style={{ gap: spacing.sm }}>
                {b.items.map((item, j) => (
                  <View key={j} style={styles.listRow}>
                    {b.ordered ? (
                      <Text style={[styles.listNum, { fontSize: 14 * scale }]}>{j + 1}.</Text>
                    ) : (
                      <View style={[styles.bullet, { marginTop: 10 * scale }]} />
                    )}
                    <RichText text={item} style={[body, { flex: 1 }]} />
                  </View>
                ))}
              </View>
            );
          case 'callout': {
            const c = calloutStyle[b.variant];
            return (
              <View key={i} style={[styles.callout, { backgroundColor: c.bg, borderLeftColor: c.bar }]}>
                <Text style={[styles.calloutLabel, { color: c.labelColor }]}>{b.title ?? c.label}</Text>
                <RichText text={b.text} style={body} />
              </View>
            );
          }
          case 'table':
            return <NoteTable key={i} columns={b.columns} rows={b.rows} textStyle={small} />;
          case 'timeline':
            return (
              <View key={i} style={styles.timeline}>
                {b.items.map((t, j) => (
                  <View key={j} style={styles.tlRow}>
                    <View style={styles.tlRail}>
                      <View style={styles.tlDot} />
                      {j < b.items.length - 1 ? <View style={styles.tlLine} /> : null}
                    </View>
                    <View style={{ flex: 1, paddingBottom: spacing.md }}>
                      <Text style={[styles.tlWhen, { fontSize: 12 * scale }]}>{t.when}</Text>
                      <RichText text={t.what} style={small} />
                    </View>
                  </View>
                ))}
              </View>
            );
          default:
            return null;
        }
      })}
    </View>
  );
}

/** Tables scroll horizontally when they have 3+ columns, so phones never squash them. */
function NoteTable({ columns, rows, textStyle }: { columns: string[]; rows: string[][]; textStyle: object }) {
  const wide = columns.length >= 3;
  const colWidth = wide ? 180 : undefined;
  const table = (
    <View style={styles.table}>
      <View style={[styles.tr, styles.thead]}>
        {columns.map((c, i) => (
          <Text key={i} style={[styles.th, colWidth ? { width: colWidth } : { flex: i === 0 ? 0.8 : 1.6 }]}>
            {c}
          </Text>
        ))}
      </View>
      {rows.map((r, ri) => (
        <View key={ri} style={[styles.tr, ri % 2 === 1 && styles.trAlt]}>
          {r.map((cell, ci) => (
            <RichText
              key={ci}
              text={cell}
              style={[textStyle, styles.td, ci === 0 && styles.tdFirst, colWidth ? { width: colWidth } : { flex: ci === 0 ? 0.8 : 1.6 }]}
            />
          ))}
        </View>
      ))}
    </View>
  );
  if (!wide) return table;
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {table}
      </ScrollView>
      <Text style={[type.caption, { marginTop: 6 }]}>Leret ke kiri untuk melihat semua lajur</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listRow: { flexDirection: 'row', gap: spacing.md },
  bullet: { width: 6, height: 6, borderRadius: 3, backgroundColor: brand.red },
  listNum: { fontFamily: fonts.serif, fontWeight: '700', color: brand.red, minWidth: 18, marginTop: 2 },
  callout: { borderLeftWidth: 3, borderRadius: radius.sm, paddingVertical: spacing.md, paddingHorizontal: spacing.lg, gap: 4 },
  calloutLabel: { fontFamily: fonts.serif, fontSize: 15, fontWeight: '700' },
  table: { borderWidth: 1, borderColor: colors.borderStrong, borderRadius: radius.md, overflow: 'hidden', backgroundColor: colors.surface },
  tr: { flexDirection: 'row' },
  trAlt: { backgroundColor: alpha(brand.cream, 0.55) },
  thead: { backgroundColor: brand.navy },
  th: { color: brand.white, fontFamily: fonts.sansMedium, fontWeight: '600', fontSize: 12.5, padding: spacing.sm },
  td: { padding: spacing.sm, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.borderStrong },
  tdFirst: { fontWeight: '700' },
  timeline: { paddingLeft: spacing.xs },
  tlRow: { flexDirection: 'row', gap: spacing.md },
  tlRail: { alignItems: 'center', width: 14 },
  tlDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: brand.gold, borderWidth: 2, borderColor: brand.navy, marginTop: 4 },
  tlLine: { flex: 1, width: 2, backgroundColor: colors.borderStrong, marginTop: 2 },
  tlWhen: { fontFamily: fonts.serif, fontWeight: '700', color: brand.red },
});
