import { useEffect, useRef } from 'react';
import type React from 'react';
import {
  ActivityIndicator,
  Animated,
  Pressable,
  type PressableProps,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, shadow, spacing, type } from '../constants/theme';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

/* ───────────────────────── Pressable with a subtle press animation ───────────────────────── */

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Touchable({
  style,
  children,
  scaleTo = 0.98,
  ...rest
}: Omit<PressableProps, 'style'> & { style?: StyleProp<ViewStyle>; children: React.ReactNode; scaleTo?: number }) {
  const scale = useRef(new Animated.Value(1)).current;
  const to = (v: number) => Animated.spring(scale, { toValue: v, useNativeDriver: true, speed: 40, bounciness: 4 }).start();
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

/* ───────────────────────── Card ───────────────────────── */

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
  variant?: 'primary' | 'gold' | 'secondary' | 'ghost' | 'danger';
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
          {icon ? <Ionicons name={icon} size={small ? 16 : 18} color={v.text.color as string} /> : null}
          <Text style={[styles.btnText, small && styles.btnTextSmall, v.text]}>{label}</Text>
        </>
      )}
    </Touchable>
  );
}

const buttonVariants: Record<string, { container: ViewStyle; text: TextStyle }> = {
  primary: { container: { backgroundColor: brand.navy }, text: { color: brand.white } },
  gold: { container: { backgroundColor: brand.gold }, text: { color: brand.navy } },
  secondary: { container: { backgroundColor: brand.white, borderWidth: 1.5, borderColor: colors.borderStrong }, text: { color: brand.navy } },
  ghost: { container: { backgroundColor: 'transparent' }, text: { color: brand.navy } },
  danger: { container: { backgroundColor: colors.redSoft }, text: { color: brand.red } },
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

/* ───────────────────────── Progress ───────────────────────── */

export function ProgressBar({
  value,
  height = 8,
  color = brand.gold,
  track = colors.track,
  style,
}: {
  value: number; // 0–1
  height?: number;
  color?: string;
  track?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const clamped = Math.max(0, Math.min(1, value || 0));
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, { toValue: clamped, duration: 600, useNativeDriver: false }).start();
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
}: {
  title: string;
  action?: string;
  onAction?: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.sectionHeader, style]}>
      <Text style={type.heading} accessibilityRole="header">
        {title}
      </Text>
      {action && onAction ? (
        <Pressable onPress={onAction} hitSlop={10} accessibilityRole="link">
          <Text style={styles.sectionAction}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export function Eyebrow({ children, color = colors.textSubtle }: { children: React.ReactNode; color?: string }) {
  return <Text style={[type.caption, { color, textTransform: 'uppercase' }]}>{children}</Text>;
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

/* ───────────────────────── Chips & segmented control ───────────────────────── */

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
      scaleTo={0.95}
      accessibilityState={{ selected: !!active }}
      style={[styles.chip, active && styles.chipActive, style]}
    >
      {icon ? <Ionicons name={icon} size={14} color={active ? brand.white : brand.navy} /> : null}
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Touchable>
  );
}

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

/* ───────────────────────── Badges ───────────────────────── */

export function Badge({ label, tone = 'navy', icon }: { label: string; tone?: 'navy' | 'gold' | 'red' | 'muted'; icon?: IconName }) {
  const t = {
    navy: { bg: colors.navySoft, fg: brand.navy },
    gold: { bg: colors.goldSoft, fg: brand.navy },
    red: { bg: colors.redSoft, fg: brand.red },
    muted: { bg: alpha(brand.navy, 0.05), fg: colors.textMuted },
  }[tone];
  return (
    <View style={[styles.badge, { backgroundColor: t.bg }]}>
      {icon ? <Ionicons name={icon} size={11} color={t.fg} /> : null}
      <Text style={[styles.badgeText, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

/** Shows where content came from: Titik Sejarah notes vs sample content. */
export function SourceBadge({ status }: { status: 'nota' | 'contoh' }) {
  return status === 'nota' ? (
    <Badge label="Nota Titik Sejarah" tone="navy" icon="book-outline" />
  ) : (
    <Badge label="Kandungan contoh" tone="red" icon="alert-circle-outline" />
  );
}

/* ───────────────────────── Stat card & empty state ───────────────────────── */

export function StatCard({
  icon,
  value,
  label,
  tone = 'default',
  style,
}: {
  icon: IconName;
  value: string | number;
  label: string;
  tone?: 'default' | 'navy';
  style?: StyleProp<ViewStyle>;
}) {
  const dark = tone === 'navy';
  return (
    <View style={[styles.card, styles.stat, dark && styles.cardNavy, style]}>
      <View style={[styles.statIcon, { backgroundColor: dark ? alpha(brand.gold, 0.2) : colors.goldSoft }]}>
        <Ionicons name={icon} size={18} color={dark ? brand.gold : brand.navy} />
      </View>
      <Text style={[styles.statValue, dark && { color: brand.white }]}>{value}</Text>
      <Text style={[type.small, dark && { color: alpha(brand.white, 0.75) }]} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

export function EmptyState({
  icon,
  title,
  message,
  action,
  onAction,
}: {
  icon: IconName;
  title: string;
  message: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <View style={styles.empty}>
      <View style={styles.emptyIcon}>
        <Ionicons name={icon} size={28} color={brand.navy} />
      </View>
      <Text style={[type.heading, { textAlign: 'center' }]}>{title}</Text>
      <Text style={[type.small, { textAlign: 'center', marginTop: spacing.xs }]}>{message}</Text>
      {action && onAction ? <Button label={action} onPress={onAction} style={{ marginTop: spacing.lg }} small /> : null}
    </View>
  );
}

export function Divider({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[{ height: StyleSheet.hairlineWidth, backgroundColor: colors.borderStrong }, style]} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  cardNavy: { backgroundColor: brand.navy, borderColor: brand.navy },
  cardGold: { backgroundColor: brand.gold, borderColor: brand.gold },
  cardMuted: { backgroundColor: alpha(brand.white, 0.6), borderColor: colors.border, elevation: 0, shadowOpacity: 0 },
  btn: {
    minHeight: 50,
    borderRadius: radius.md,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  btnSmall: { minHeight: 40, paddingHorizontal: spacing.lg, borderRadius: radius.sm },
  btnDisabled: { opacity: 0.45 },
  btnText: { fontFamily: fonts.sansMedium, fontSize: 15, fontWeight: '600', letterSpacing: 0.2 },
  btnTextSmall: { fontSize: 14 },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  sectionAction: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: brand.red },
  bold: { fontWeight: '700' },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderStrong,
  },
  chipActive: { backgroundColor: brand.navy, borderColor: brand.navy },
  chipText: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '600', color: brand.navy },
  chipTextActive: { color: brand.white },
  segmented: {
    flexDirection: 'row',
    backgroundColor: alpha(brand.navy, 0.07),
    borderRadius: radius.md,
    padding: 4,
  },
  segment: { flex: 1, height: 40, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  segmentActive: { backgroundColor: brand.white, ...shadow.card },
  segmentText: { fontFamily: fonts.sansMedium, fontSize: 14, fontWeight: '600', color: colors.textMuted },
  segmentTextActive: { color: brand.navy },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  badgeText: { fontFamily: fonts.sansMedium, fontSize: 11, fontWeight: '600' },
  stat: { flex: 1, padding: spacing.md, gap: 4, minHeight: 112 },
  statIcon: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  statValue: { fontFamily: fonts.serif, fontSize: 24, fontWeight: '700', color: brand.navy },
  empty: { alignItems: 'center', paddingVertical: spacing.xxxl, paddingHorizontal: spacing.xl },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
});
