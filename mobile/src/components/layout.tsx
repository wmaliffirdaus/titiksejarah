import type React from 'react';
import { ScrollView, type ScrollViewProps, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { brand, colors, fonts, shadow, spacing, type } from '../constants/theme';
import { TAB_BAR_GAP, TAB_BAR_HEIGHT } from './TabBar';
import { IconButton } from './ui';

/** Scrollable screen with cream background and safe-area padding. */
export function Screen({
  children,
  header,
  contentStyle,
  withTopInset = true,
  tabbed = false,
  ...rest
}: ScrollViewProps & {
  children: React.ReactNode;
  header?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  withTopInset?: boolean;
  /** Tab screens leave room for the floating tab bar. */
  tabbed?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.root}>
      {header}
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: withTopInset && !header ? insets.top + spacing.lg : spacing.lg, paddingBottom: insets.bottom + spacing.xxxl + (tabbed ? TAB_BAR_HEIGHT + TAB_BAR_GAP : 0) },
          contentStyle,
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        {...rest}
      >
        {children}
      </ScrollView>
    </View>
  );
}

/** Header for stacked (non-tab) screens with a back button. */
export function StackHeader({
  title,
  subtitle,
  right,
  onBack,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  onBack?: () => void;
}) {
  const insets = useSafeAreaInsets();
  const back = onBack ?? (() => (router.canGoBack() ? router.back() : router.replace('/')));
  return (
    <View style={[styles.header, { paddingTop: insets.top + spacing.xs }]}>
      <IconButton icon="chevron-back" label="Kembali" onPress={back} style={styles.back} size={20} />
      <View style={styles.headerText}>
        {subtitle ? (
          <Text style={type.caption} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}
        <Text style={styles.headerTitle} numberOfLines={1} accessibilityRole="header">
          {title}
        </Text>
      </View>
      <View style={styles.headerRight}>{right}</View>
    </View>
  );
}

/** Page title block for tab screens. */
export function PageTitle({ eyebrow, title, subtitle, right }: { eyebrow?: string; title: string; subtitle?: string; right?: React.ReactNode }) {
  return (
    <View style={styles.pageTitle}>
      <View style={{ flex: 1 }}>
        {eyebrow ? <Text style={[type.caption, { color: brand.red, marginBottom: 2 }]}>{eyebrow}</Text> : null}
        <Text style={styles.pageTitleText} accessibilityRole="header">
          {title}
        </Text>
        {subtitle ? <Text style={[type.small, { marginTop: 4 }]}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
    backgroundColor: colors.background,
    gap: spacing.md,
  },
  back: { backgroundColor: brand.white, ...shadow.soft },
  headerText: { flex: 1 },
  headerTitle: { ...type.heading, fontSize: 17 },
  headerRight: { flexDirection: 'row', alignItems: 'center', minWidth: 40, justifyContent: 'flex-end' },
  pageTitle: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xl, gap: spacing.md },
  pageTitleText: { fontFamily: fonts.serif, fontSize: 30, lineHeight: 36, fontWeight: '700', color: brand.navy },
});
