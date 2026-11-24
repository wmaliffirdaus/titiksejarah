import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider, useApp } from '../store/AppProvider';
import { brand, colors, fonts } from '../constants/theme';

function RootNavigator() {
  const { hydrated } = useApp();
  if (!hydrated) {
    return (
      <View style={styles.loading}>
        <Image source={require('../../assets/images/brand-dp.jpg')} style={styles.logo} accessibilityLabel="Logo Titik Sejarah" />
        <Text style={styles.brand}>TITIK SEJARAH</Text>
        <ActivityIndicator color={brand.navy} style={{ marginTop: 24 }} />
      </View>
    );
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="selamat-datang" options={{ animation: 'fade', gestureEnabled: false }} />
      <Stack.Screen name="kuiz/[key]" options={{ animation: 'slide_from_bottom', gestureEnabled: false }} />
      <Stack.Screen name="kertas/[id]" options={{ animation: 'slide_from_bottom', gestureEnabled: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: brand.white },
  logo: { width: 140, height: 140, borderRadius: 70 },
  brand: { marginTop: 16, fontFamily: fonts.serif, fontWeight: '700', fontSize: 20, letterSpacing: 3, color: brand.navy },
});
