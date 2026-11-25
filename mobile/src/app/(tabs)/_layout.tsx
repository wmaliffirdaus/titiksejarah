import { Redirect } from 'expo-router';
import { Tabs } from 'expo-router/js-tabs';
import { colors } from '../../constants/theme';
import { useApp } from '../../store/AppProvider';
import { FloatingTabBar, type TabSpec } from '../../components/TabBar';

const tabs: TabSpec[] = [
  { name: 'index', title: 'Utama', icon: 'home-outline', iconActive: 'home' },
  { name: 'nota', title: 'Nota', icon: 'book-outline', iconActive: 'book' },
  { name: 'latihan', title: 'Latihan', icon: 'create-outline', iconActive: 'create' },
  { name: 'kemajuan', title: 'Kemajuan', icon: 'stats-chart-outline', iconActive: 'stats-chart' },
  { name: 'profil', title: 'Profil', icon: 'person-outline', iconActive: 'person' },
];

export default function TabsLayout() {
  const { state } = useApp();
  if (!state.profile.onboarded) return <Redirect href="/selamat-datang" />;

  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} tabs={tabs} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      {tabs.map((t) => (
        <Tabs.Screen key={t.name} name={t.name} options={{ title: t.title, tabBarAccessibilityLabel: t.title }} />
      ))}
    </Tabs>
  );
}
