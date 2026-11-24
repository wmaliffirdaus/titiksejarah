import { StyleSheet, Text, View } from 'react-native';
import { alpha, brand, colors, fonts, spacing, type } from '../constants/theme';

/** Simple vertical bar chart (no chart library needed). Values 0–100. */
export function ScoreBars({ data, height = 120 }: { data: { label: string; value: number }[]; height?: number }) {
  if (!data.length) return null;
  return (
    <View style={[styles.bars, { height: height + 36 }]} accessibilityLabel={`Carta skor ${data.length} kuiz terakhir`}>
      {data.map((d, i) => {
        const h = Math.max(4, (d.value / 100) * height);
        const strong = d.value >= 70;
        return (
          <View key={i} style={styles.barCol}>
            <Text style={styles.barValue}>{d.value}</Text>
            <View style={[styles.barTrack, { height }]}>
              <View style={[styles.bar, { height: h, backgroundColor: strong ? brand.navy : d.value >= 50 ? brand.gold : brand.red }]} />
            </View>
            <Text style={styles.barLabel} numberOfLines={1}>
              {d.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

/** 7-day activity strip used for the learning streak. */
export function WeekStrip({ days }: { days: { key: string; label: string; count: number; isToday: boolean }[] }) {
  return (
    <View style={styles.week}>
      {days.map((d) => {
        const active = d.count > 0;
        return (
          <View key={d.key} style={styles.dayCol} accessibilityLabel={`${d.label}: ${d.count} aktiviti`}>
            <View style={[styles.dayDot, active && styles.dayDotActive, d.isToday && styles.dayToday]}>
              {active ? <Text style={styles.dayCount}>{d.count}</Text> : null}
            </View>
            <Text style={[styles.dayLabel, d.isToday && { color: brand.navy, fontWeight: '700' }]}>{d.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

/** Legend item for charts. */
export function Legend({ items }: { items: { color: string; label: string }[] }) {
  return (
    <View style={styles.legend}>
      {items.map((it) => (
        <View key={it.label} style={styles.legendItem}>
          <View style={[styles.legendSwatch, { backgroundColor: it.color }]} />
          <Text style={type.small}>{it.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bars: { flexDirection: 'row', alignItems: 'flex-end', gap: spacing.sm },
  barCol: { flex: 1, alignItems: 'center', gap: 4 },
  barTrack: { width: '100%', maxWidth: 28, justifyContent: 'flex-end', backgroundColor: colors.track, borderRadius: 6, overflow: 'hidden' },
  bar: { width: '100%', borderRadius: 6 },
  barValue: { fontFamily: fonts.sansMedium, fontSize: 11, fontWeight: '700', color: brand.navy },
  barLabel: { fontSize: 10, color: colors.textSubtle },
  week: { flexDirection: 'row', justifyContent: 'space-between' },
  dayCol: { alignItems: 'center', gap: 6 },
  dayDot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: alpha(brand.navy, 0.06),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayDotActive: { backgroundColor: brand.gold },
  dayToday: { borderWidth: 2, borderColor: brand.navy },
  dayCount: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '700', color: brand.navy },
  dayLabel: { fontSize: 11, color: colors.textSubtle },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginTop: spacing.md },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendSwatch: { width: 10, height: 10, borderRadius: 3 },
});
