import { Platform } from 'react-native';
import { Redirect } from 'expo-router';
import { Tabs } from 'expo-router/js-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { alpha, brand, colors, fonts } from '../../constants/theme';
import { useApp } from '../../store/AppProvider';
import type { IconName } from '../../components/ui';

const tabs: { name: string; title: string; icon: IconName; iconActive: IconName }[] = [
  { name: 'index', title: 'Utama', icon: 'home-outline', iconActive: 'home' },
  { name: 'nota', title: 'Nota', icon: 'book-outline', iconActive: 'book' },
  { name: 'latihan', title: 'Latihan', icon: 'create-outline', iconActive: 'create' },
  { name: 'kemajuan', title: 'Kemajuan', icon: 'stats-chart-outline', iconActive: 'stats-chart' },
  { name: 'profil', title: 'Profil', icon: 'person-circle-outline', iconActive: 'person-circle' },
];

export default function TabsLayout() {
  const { state } = useApp();
  const insets = useSafeAreaInsets();
  if (!state.profile.onboarded) return <Redirect href="/selamat-datang" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: brand.navy,
        tabBarInactiveTintColor: alpha(brand.navy, 0.42),
        tabBarHideOnKeyboard: true,
        sceneStyle: { backgroundColor: colors.background },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.borderStrong,
          elevation: 0,
          height: 62 + insets.bottom,
          paddingTop: 6,
          paddingBottom: Math.max(insets.bottom, Platform.OS === 'android' ? 8 : 6),
        },
        tabBarLabelStyle: { fontFamily: fonts.sansMedium, fontSize: 11, fontWeight: '600' },
      }}
    >
      {tabs.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            tabBarAccessibilityLabel: t.title,
            tabBarIcon: ({ color, focused, size }) => <Ionicons name={focused ? t.iconActive : t.icon} size={size ?? 24} color={color as string} />,
          }}
        />
      ))}
    </Tabs>
  );
}
