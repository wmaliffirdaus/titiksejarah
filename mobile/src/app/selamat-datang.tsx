import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { useApp } from '../store/AppProvider';
import { Button, Touchable } from '../components/ui';
import type { Form } from '../types/content';

export default function Welcome() {
  const { dispatch } = useApp();
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [form, setForm] = useState<Form>(4);

  const start = () => {
    dispatch({ type: 'onboard', name, form });
    router.replace('/');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: brand.navy }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingTop: insets.top + spacing.xxl, paddingBottom: insets.bottom + spacing.xl }]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.hero}>
          <View style={styles.logoRing}>
            <Image source={require('../../assets/images/brand-dp.jpg')} style={styles.logo} accessibilityLabel="Logo Titik Sejarah" />
          </View>
          <Text style={styles.brand}>TITIK SEJARAH</Text>
          <Text style={styles.tagline}>Kenali sejarah, fahami masa kini.</Text>
        </View>

        <View style={styles.sheet}>
          <Text style={type.title}>Selamat datang</Text>
          <Text style={[type.small, { marginTop: 4 }]}>
            Nota, kuiz dan kertas latihan Sejarah KSSM Tingkatan 4 dan 5. Tiada pendaftaran. Kemajuan anda disimpan dalam telefon ini.
          </Text>

          <Text style={styles.label}>Nama anda, jika mahu</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Contoh: Aisyah"
            placeholderTextColor={colors.textSubtle}
            style={styles.input}
            maxLength={40}
            autoCapitalize="words"
            returnKeyType="done"
            accessibilityLabel="Nama panggilan"
          />

          <Text style={styles.label}>Saya sedang belajar</Text>
          <View style={styles.formRow}>
            {([4, 5] as Form[]).map((f) => {
              const active = f === form;
              return (
                <Touchable
                  key={f}
                  onPress={() => setForm(f)}
                  style={[styles.formCard, active && styles.formCardActive]}
                  accessibilityState={{ selected: active }}
                  accessibilityLabel={`Tingkatan ${f}`}
                >
                  <Text style={[styles.formNum, active && { color: brand.gold }]}>{f}</Text>
                  <Text style={[styles.formLabel, active && { color: brand.white }]}>Tingkatan {f}</Text>
                  {active ? <Ionicons name="checkmark-circle" size={20} color={brand.gold} style={styles.check} /> : null}
                </Touchable>
              );
            })}
          </View>

          <Button label="Mula belajar" variant="primary" onPress={start} style={{ marginTop: spacing.xl }} />
          <Text style={styles.disclaimer}>
            Nota disediakan berdasarkan Buku Teks Sejarah KSSM. Sentiasa rujuk buku teks dan guru anda.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'space-between' },
  hero: { alignItems: 'center', paddingHorizontal: spacing.xl, paddingBottom: spacing.xxl },
  logoRing: { padding: 5, borderRadius: 80, backgroundColor: brand.gold },
  logo: { width: 128, height: 128, borderRadius: 64, backgroundColor: brand.white },
  brand: { marginTop: spacing.lg, fontFamily: fonts.serif, fontWeight: '700', fontSize: 26, letterSpacing: 4, color: brand.white },
  tagline: { marginTop: 6, fontFamily: fonts.serif, fontStyle: 'italic', fontSize: 15, color: brand.gold },
  sheet: {
    backgroundColor: brand.cream,
    marginHorizontal: spacing.md,
    borderRadius: radius.xl,
    padding: spacing.xl,
  },
  label: { ...type.caption, marginTop: spacing.xl, marginBottom: spacing.sm, color: colors.textMuted },
  input: {
    height: 52,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: brand.navy,
  },
  formRow: { flexDirection: 'row', gap: spacing.md },
  formCard: {
    flex: 1,
    borderRadius: radius.lg,
    padding: spacing.lg,
    backgroundColor: brand.white,
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
  },
  formCardActive: { backgroundColor: brand.navy, borderColor: brand.navy },
  formNum: { fontFamily: fonts.serif, fontSize: 32, lineHeight: 36, fontWeight: '700', color: brand.red },
  formLabel: { ...type.small, marginTop: 2 },
  check: { position: 'absolute', top: 10, right: 10 },
  disclaimer: { ...type.small, fontSize: 12, textAlign: 'center', marginTop: spacing.lg, color: alpha(brand.navy, 0.55) },
});
