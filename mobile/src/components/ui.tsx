import { Children, Fragment, isValidElement, useEffect, useRef } from 'react';
import type React from 'react';
import {
  ActivityIndicator,
  Animated,
  Pressable,
  type PressableProps,
  StyleSheet,
  Switch,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import type { SourceStatus } from '../types/content';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

/*
 * Titik Sejarah UI kit.
 * The look is a well-kept revision book: cream paper, navy ink, ruled lines, serif headings,
 * red numerals and a gold highlighter. Surfaces are flat (hairline borders, no drop shadows),
 * labels are sentence case, and icons appear only where they do a job.
 */

/* ───────────────────────── Pressable with a light press response ───────────────────────── */

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Touchable({
  style,
  children,
  scaleTo = 0.985,
  ...rest
}: Omit<PressableProps, 'style'> & { style?: StyleProp<ViewStyle>; children: React.ReactNode; scaleTo?: number }) {
  const scale = useRef(new Animated.Value(1)).current;
  const to = (v: number) => Animated.spring(scale, { toValue: v, useNativeDriver: true, speed: 50, bounciness: 0 }).start();
  return (
    <AnimatedPressable
      onPressIn={() => to(scaleTo)}
      onPressOut={() => to(1)}
      accessibilityRole="button"
      {...rest}
      style={[style, { transform: [{ scale }] }]}
    >
      {children}
    </AnimatedPressable>
  );
}

/* ───────────────────────── Card (a sheet of paper) ───────────────────────── */

export function Card({
  children,
  style,
  onPress,
  tone = 'default',
  accessibilityLabel,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  tone?: 'default' | 'navy' | 'gold' | 'muted';
  accessibilityLabel?: string;
}) {
  const toneStyle =
    tone === 'navy' ? styles.cardNavy : tone === 'gold' ? styles.cardGold : tone === 'muted' ? styles.cardMuted : null;
  const content = [styles.card, toneStyle, style];
  if (onPress) {
    return (
      <Touchable style={content} onPress={onPress} accessibilityLabel={accessibilityLabel}>
        {children}
      </Touchable>
    );
  }
  return <View style={content}>{children}</View>;
}

/* ───────────────────────── Ruled list (replaces icon-tile grids) ───────────────────────── */

/** A white sheet whose rows are separated by ruled lines. */
export function List({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  const rows = Children.toArray(children).filter(isValidElement);
  return (
    <View style={[styles.list, style]}>
      {rows.map((row, i) => (
        <Fragment key={i}>
          {i > 0 ? <View style={styles.rule} /> : null}
          {row}
        </Fragment>
      ))}
    </View>
  );
}

export function ListRow({
  title,
  subtitle,
  lead,
  value,
  onPress,
  chevron = !!onPress,
  tone = 'default',
  accessibilityLabel,
  children,
  numberOfLines = 2,
}: {
  title: string;
  subtitle?: string;
  /** Left column: a number, a short code or an element. */
  lead?: React.ReactNode;
  /** Right column text, e.g. "3/9" or "80%". */
  value?: string;
  onPress?: () => void;
  chevron?: boolean;
  tone?: 'default' | 'danger';
  accessibilityLabel?: string;
  /** Extra content under the subtitle (e.g. a progress bar). */
  children?: React.ReactNode;
  numberOfLines?: number;
}) {
  const body = (
    <View style={styles.row}>
      {lead !== undefined ? (
        typeof lead === 'string' || typeof lead === 'number' ? (
          <Text style={styles.rowLead}>{lead}</Text>
        ) : (
          lead
        )
      ) : null}
      <View style={{ flex: 1 }}>
        <Text style={[styles.rowTitle, tone === 'danger' && { color: brand.red }]} numberOfLines={numberOfLines}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.rowSub} numberOfLines={2}>
            {subtitle}
          </Text>
        ) : null}
        {children}
      </View>
      {value ? <Text style={styles.rowValue}>{value}</Text> : null}
      {chevron ? <Ionicons name="chevron-forward" size={16} color={colors.textSubtle} /> : null}
    </View>
  );
  if (!onPress) return body;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      style={({ pressed }) => pressed && { backgroundColor: alpha(brand.navy, 0.04) }}
    >
      {body}
    </Pressable>
  );
}

/* ───────────────────────── Buttons ───────────────────────── */

export function Button({
  label,
  onPress,
  variant = 'primary',
  icon,
  disabled,
  loading,
  style,
  small,
}: {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'gold' | 'secondary' | 'ghost' | 'danger' | 'light';
  icon?: IconName;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  small?: boolean;
}) {
  const v = buttonVariants[variant];
  return (
    <Touchable
      onPress={disabled || loading ? undefined : onPress}
      disabled={disabled || loading}
      accessibilityState={{ disabled: !!disabled }}
      accessibilityLabel={label}
      style={[styles.btn, small && styles.btnSmall, v.container, (disabled || loading) && styles.btnDisabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={v.text.color} />
      ) : (
        <>
          {icon ? <Ionicons name={icon} size={small ? 15 : 17} color={v.text.color as string} /> : null}
          <Text style={[styles.btnText, small && styles.btnTextSmall, v.text]}>{label}</Text>
        </>
      )}
    </Touchable>
  );
}

const buttonVariants: Record<string, { container: ViewStyle; text: TextStyle }> = {
  primary: { container: { backgroundColor: brand.navy }, text: { color: brand.white } },
  gold: { container: { backgroundColor: brand.gold }, text: { color: brand.navy } },
  secondary: { container: { backgroundColor: brand.white, borderWidth: 1, borderColor: colors.borderStrong }, text: { color: brand.navy } },
  ghost: { container: { backgroundColor: 'transparent', paddingHorizontal: spacing.sm }, text: { color: brand.navy } },
  danger: { container: { backgroundColor: 'transparent', borderWidth: 1, borderColor: alpha(brand.red, 0.4) }, text: { color: brand.red } },
  light: { container: { backgroundColor: 'transparent', borderWidth: 1, borderColor: alpha(brand.white, 0.35) }, text: { color: brand.white } },
};

export function IconButton({
  icon,
  onPress,
  label,
  color = brand.navy,
  active,
  activeIcon,
  size = 22,
  style,
}: {
  icon: IconName;
  activeIcon?: IconName;
  onPress: () => void;
  label: string;
  color?: string;
  active?: boolean;
  size?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Touchable onPress={onPress} accessibilityLabel={label} style={[styles.iconBtn, style]} scaleTo={0.9} hitSlop={8}>
      <Ionicons name={active && activeIcon ? activeIcon : icon} size={size} color={color} />
    </Touchable>
  );
}

/** Text link in heritage red, used for "see all" style actions. */
export function TextLink({ label, onPress, color = brand.red }: { label: string; onPress: () => void; color?: string }) {
  return (
    <Pressable onPress={onPress} hitSlop={10} accessibilityRole="link">
      <Text style={[styles.link, { color }]}>{label}</Text>
    </Pressable>
  );
}

/* ───────────────────────── Progress ───────────────────────── */

export function ProgressBar({
  value,
  height = 4,
  color = brand.gold,
  track = colors.track,
  style,
}: {
  value: number; // 0 to 1
  height?: number;
  color?: string;
  track?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const clamped = Math.max(0, Math.min(1, value || 0));
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, { toValue: clamped, duration: 500, useNativeDriver: false }).start();
  }, [clamped, anim]);
  const width = anim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });
  return (
    <View
      style={[{ height, borderRadius: height, backgroundColor: track, overflow: 'hidden' }, style]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(clamped * 100) }}
    >
      <Animated.View style={{ width, height, borderRadius: height, backgroundColor: color }} />
    </View>
  );
}

/* ───────────────────────── Text helpers ───────────────────────── */

export function SectionHeader({
  title,
  action,
  onAction,
  style,
  note,
}: {
  title: string;
  action?: string;
  onAction?: () => void;
  style?: StyleProp<ViewStyle>;
  /** Small text under the title. */
  note?: string;
}) {
  return (
    <View style={[styles.sectionHeader, style]}>
      <View style={{ flex: 1 }}>
        <Text style={type.heading} accessibilityRole="header">
          {title}
        </Text>
        {note ? <Text style={[type.small, { marginTop: 2 }]}>{note}</Text> : null}
      </View>
      {action && onAction ? <TextLink label={action} onPress={onAction} /> : null}
    </View>
  );
}

/** Small sentence-case label above a title. */
export function Eyebrow({ children, color = brand.red }: { children: React.ReactNode; color?: string }) {
  return <Text style={[type.caption, { color }]}>{children}</Text>;
}

/** Renders text with **bold** segments. */
export function RichText({ text, style, boldStyle }: { text: string; style?: StyleProp<TextStyle>; boldStyle?: StyleProp<TextStyle> }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <Text style={style}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <Text key={i} style={[styles.bold, boldStyle]}>
            {p.slice(2, -2)}
          </Text>
        ) : (
          <Text key={i}>{p}</Text>
        ),
      )}
    </Text>
  );
}

/** Word(s) marked with a gold highlighter stroke. */
export function Highlight({ children, style }: { children: React.ReactNode; style?: StyleProp<TextStyle> }) {
  return <Text style={[styles.highlight, style]}>{children}</Text>;
}

/** Bookmark ribbon that hangs from the top edge of a card. */
export function Ribbon({ color = brand.red, style }: { color?: string; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[styles.ribbon, style]} pointerEvents="none">
      <View style={[styles.ribbonBody, { backgroundColor: color }]} />
      <View style={styles.ribbonTail}>
        <View style={[styles.ribbonHalf, { borderTopColor: color, borderRightColor: 'transparent' }]} />
        <View style={[styles.ribbonHalf, { borderTopColor: color, borderLeftColor: 'transparent' }]} />
      </View>
    </View>
  );
}

/* ───────────────────────── Chips, segmented control, switch ───────────────────────── */

export function Chip({
  label,
  active,
  onPress,
  icon,
  style,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
  icon?: IconName;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Touchable
      onPress={onPress}
      scaleTo={0.96}
      accessibilityState={{ selected: !!active }}
      style={[styles.chip, active && styles.chipActive, style]}
    >
      {icon ? <Ionicons name={icon} size={13} color={active ? brand.white : brand.navy} /> : null}
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Touchable>
  );
}

/** Tabs drawn as text with an underline, like section tabs in a binder. */
export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  style,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.segmented, style]} accessibilityRole="tablist">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <Pressable
            key={String(o.value)}
            onPress={() => onChange(o.value)}
            style={[styles.segment, active && styles.segmentActive]}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
          >
            <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function BrandSwitch({ value, onValueChange, label }: { value: boolean; onValueChange: (v: boolean) => void; label: string }) {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      accessibilityLabel={label}
      trackColor={{ false: alpha(brand.navy, 0.18), true: brand.navy }}
      thumbColor={value ? brand.gold : brand.white}
      // Web renders the active track with this prop.
      {...({ activeThumbColor: brand.gold } as object)}
    />
  );
}

/* ───────────────────────── Badges ───────────────────────── */

export function Badge({ label, tone = 'navy', icon }: { label: string; tone?: 'navy' | 'gold' | 'red' | 'muted'; icon?: IconName }) {
  const t = {
    navy: { bg: colors.navySoft, fg: brand.navy },
    gold: { bg: colors.goldSoft, fg: brand.navy },
    red: { bg: colors.redSoft, fg: brand.red },
    muted: { bg: 'transparent', fg: colors.textMuted },
  }[tone];
  return (
    <View style={[styles.badge, { backgroundColor: t.bg }, tone === 'muted' && styles.badgeMuted]}>
      {icon ? <Ionicons name={icon} size={11} color={t.fg} /> : null}
      <Text style={[styles.badgeText, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

const sourceLabels: Record<SourceStatus, string> = {
  nota: 'Nota Titik Sejarah',
  bank: 'Bank Soalan Titik Sejarah',
  contoh: 'Kandungan contoh',
};

/** Shows where content came from. */
export function SourceBadge({ status }: { status: SourceStatus }) {
  return <Badge label={sourceLabels[status]} tone={status === 'contoh' ? 'red' : 'muted'} />;
}

/* ───────────────────────── Figures & empty state ───────────────────────── */

/** A figure with its label underneath. Used in ruled stat rows. */
export function Stat({ value, label, style, light }: { value: string | number; label: string; style?: StyleProp<ViewStyle>; light?: boolean }) {
  return (
    <View style={[{ flex: 1 }, style]}>
      <Text style={[styles.statValue, light && { color: brand.white }]}>{value}</Text>
      <Text style={[type.small, { fontSize: 12 }, light && { color: alpha(brand.white, 0.72) }]} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

/** Kept for older screens: a stat in a bordered box. */
export function StatCard({ value, label, style }: { icon?: IconName; value: string | number; label: string; tone?: 'default' | 'navy'; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[styles.card, { flex: 1, padding: spacing.md }, style]}>
      <Stat value={value} label={label} />
    </View>
  );
}

export function EmptyState({
  title,
  message,
  action,
  onAction,
}: {
  icon?: IconName;
  title: string;
  message: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <View style={styles.empty}>
      <View style={styles.emptyRule} />
      <Text style={[type.heading, { textAlign: 'center' }]}>{title}</Text>
      <Text style={[type.small, { textAlign: 'center', marginTop: spacing.xs, maxWidth: 300 }]}>{message}</Text>
      {action && onAction ? <Button label={action} onPress={onAction} variant="secondary" style={{ marginTop: spacing.lg }} small /> : null}
    </View>
  );
}

export function Divider({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.rule, style]} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
  },
  cardNavy: { backgroundColor: brand.navy, borderColor: brand.navy },
  cardGold: { backgroundColor: brand.gold, borderColor: brand.gold },
  cardMuted: { backgroundColor: 'transparent', borderColor: colors.borderStrong, borderStyle: 'dashed' },
  list: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
    overflow: 'hidden',
  },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: colors.borderStrong },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: 14,
    minHeight: 52,
  },
  rowLead: { fontFamily: fonts.serif, fontSize: 20, fontWeight: '700', color: brand.red, minWidth: 26, textAlign: 'center' },
  rowTitle: { fontFamily: fonts.sansMedium, fontSize: 15, lineHeight: 20, fontWeight: '600', color: brand.navy },
  rowSub: { ...type.small, marginTop: 2 },
  rowValue: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: colors.textMuted },
  btn: {
    minHeight: 48,
    borderRadius: radius.md,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  btnSmall: { minHeight: 38, paddingHorizontal: spacing.lg, borderRadius: radius.sm },
  btnDisabled: { opacity: 0.4 },
  btnText: { fontFamily: fonts.sansMedium, fontSize: 15, fontWeight: '600' },
  btnTextSmall: { fontSize: 14 },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: { fontFamily: fonts.sansMedium, fontSize: 14, fontWeight: '600' },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  bold: { fontWeight: '700' },
  highlight: { backgroundColor: colors.highlight },
  ribbon: { position: 'absolute', top: -1, width: 18, alignItems: 'center' },
  ribbonBody: { width: 18, height: 30 },
  ribbonTail: { flexDirection: 'row' },
  ribbonHalf: { width: 0, height: 0, borderTopWidth: 8, borderLeftWidth: 9, borderRightWidth: 9, borderLeftColor: 'transparent', borderRightColor: 'transparent', marginHorizontal: -4.5 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    height: 34,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
  },
  chipActive: { backgroundColor: brand.navy, borderColor: brand.navy },
  chipText: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: brand.navy },
  chipTextActive: { color: brand.white },
  segmented: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderStrong,
  },
  segment: { flex: 1, height: 42, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2.5, borderBottomColor: 'transparent', marginBottom: -StyleSheet.hairlineWidth },
  segmentActive: { borderBottomColor: brand.red },
  segmentText: { fontFamily: fonts.sansMedium, fontSize: 14, fontWeight: '600', color: colors.textSubtle },
  segmentTextActive: { color: brand.navy },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeMuted: { paddingHorizontal: 0 },
  badgeText: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '600' },
  statValue: { fontFamily: fonts.serif, fontSize: 24, lineHeight: 28, fontWeight: '700', color: brand.navy },
  empty: { alignItems: 'center', paddingVertical: spacing.xxxl, paddingHorizontal: spacing.xl },
  emptyRule: { width: 36, height: 3, borderRadius: 2, backgroundColor: brand.gold, marginBottom: spacing.lg },
});
