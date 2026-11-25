import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { alpha, brand, fonts, radius, shadow, spacing } from '../constants/theme';
import type { IconName } from './ui';

export type TabSpec = { name: string; title: string; icon: IconName; iconActive: IconName };

/** Height of the bar itself, without the bottom inset. Screens pad their content by this much. */
export const TAB_BAR_HEIGHT = 64;
export const TAB_BAR_GAP = 12;

/**
 * Floating navy bar. The current tab opens into a gold pill with its name;
 * the others show only their icon, so five tabs fit on a narrow phone.
 */
export function FloatingTabBar({ state, descriptors, emitter, navigateToTab, insets, tabs }: BottomTabBarProps & { tabs: TabSpec[] }) {
  return (
    <View pointerEvents="box-none" style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, spacing.sm) + 4 }]}>
      <View style={styles.bar} accessibilityRole="tablist">
        {state.routes.map((route, index) => {
          const focused = index === state.index;
          const spec = tabs.find((t) => t.name === route.name);
          const title = spec?.title ?? descriptors[route.key]?.options.title ?? route.name;
          const onPress = () => {
            const event = emitter.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!focused && !event.defaultPrevented) navigateToTab(route.key);
          };
          return (
            <TabItem
              key={route.key}
              focused={focused}
              title={title}
              icon={(focused ? spec?.iconActive : spec?.icon) ?? 'ellipse-outline'}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
}

function TabItem({ focused, title, icon, onPress }: { focused: boolean; title: string; icon: IconName; onPress: () => void }) {
  const grow = useRef(new Animated.Value(focused ? 1 : 0)).current;
  useEffect(() => {
    Animated.spring(grow, { toValue: focused ? 1 : 0, useNativeDriver: false, speed: 18, bounciness: 4 }).start();
  }, [focused, grow]);
  const flex = grow.interpolate({ inputRange: [0, 1], outputRange: [1, 2.4] });
  return (
    <Animated.View style={{ flex }}>
      <Pressable
        onPress={onPress}
        accessibilityRole="tab"
        accessibilityState={{ selected: focused }}
        accessibilityLabel={title}
        style={[styles.item, focused && styles.itemActive]}
        hitSlop={4}
      >
        <Ionicons name={icon} size={21} color={focused ? brand.navy : alpha(brand.white, 0.66)} />
        {focused ? (
          <Text style={styles.label} numberOfLines={1}>
            {title}
          </Text>
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: spacing.lg },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: TAB_BAR_HEIGHT,
    paddingHorizontal: 8,
    gap: 2,
    borderRadius: radius.pill,
    backgroundColor: brand.navy,
    ...shadow.raised,
  },
  item: {
    height: 48,
    borderRadius: radius.pill,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 10,
  },
  itemActive: { backgroundColor: brand.gold },
  label: { fontFamily: fonts.sansMedium, fontSize: 13, fontWeight: '700', color: brand.navy, flexShrink: 1 },
});
