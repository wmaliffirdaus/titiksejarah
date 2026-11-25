import { StyleSheet, Text, View } from 'react-native';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { addDays, dayKey } from '../utils/date';

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

const DAY_NAMES = ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'];

/** Monday to Sunday of the current week, with the activity count for each day. */
export function currentWeek(activity: Record<string, number>, today: Date = new Date()) {
  const offset = (today.getDay() + 6) % 7; // days since Monday
  const monday = addDays(today, -offset);
  const todayKey = dayKey(today);
  return Array.from({ length: 7 }, (_, i) => {
    const d = addDays(monday, i);
    const key = dayKey(d);
    return { key, label: DAY_NAMES[d.getDay()], date: d.getDate(), count: activity[key] ?? 0, isToday: key === todayKey, future: key > todayKey };
  });
}

/** Row of day capsules: today in navy, days with study marked by a gold dot. */
export function WeekDays({ days }: { days: ReturnType<typeof currentWeek> }) {
  return (
    <View style={styles.weekDays} accessibilityLabel="Aktiviti minggu ini">
      {days.map((d) => {
        const active = d.count > 0;
        return (
          <View
            key={d.key}
            style={[styles.capsule, d.isToday && styles.capsuleToday, d.future && { opacity: 0.55 }]}
            accessible
            accessibilityLabel={`${d.label} ${d.date}: ${d.count} aktiviti`}
          >
            <View style={[styles.capsuleDot, active && { backgroundColor: d.isToday ? brand.gold : brand.red }]} />
            <Text style={[styles.capsuleDay, d.isToday && { color: alpha(brand.white, 0.75) }]}>{d.label}</Text>
            <Text style={[styles.capsuleDate, d.isToday && { color: brand.white }]}>{d.date}</Text>
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
  weekDays: { flexDirection: 'row', gap: 6 },
  capsule: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 9,
    gap: 2,
    borderRadius: radius.pill,
    backgroundColor: brand.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  capsuleToday: { backgroundColor: brand.navy, borderColor: brand.navy },
  capsuleDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: 'transparent', marginBottom: 2 },
  capsuleDay: { fontFamily: fonts.sans, fontSize: 11, color: colors.textSubtle },
  capsuleDate: { fontFamily: fonts.serif, fontSize: 17, lineHeight: 21, fontWeight: '700', color: brand.navy },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginTop: spacing.md },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendSwatch: { width: 10, height: 10, borderRadius: 3 },
});
