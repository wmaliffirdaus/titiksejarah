import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { Card } from '../../components/ui';
import { spmCategories, spmItemsFor } from '../../data/spm';
import { countFor } from '../../utils/quiz';

export default function SpmHub() {
  return (
    <Screen header={<StackHeader title="Latihan SPM" subtitle="Sejarah SPM" />}>
      <Card tone="navy" style={styles.hero}>
        <Text style={[type.caption, { color: brand.gold }]}>PERSEDIAAN SPM</Text>
        <Text style={styles.heroTitle}>Latih format soalan sebenar peperiksaan</Text>
        <Text style={[type.small, { color: alpha(brand.white, 0.8) }]}>
          Pilih kertas dan jenis soalan. Bandingkan jawapan anda dengan skema cadangan dan tanda markah sendiri.
        </Text>
      </Card>

      <View style={{ gap: spacing.md, marginTop: spacing.xl }}>
        {spmCategories.map((c) => {
          const n = c.id === 'k1' ? countFor('spm-k1') : spmItemsFor(c.id).length;
          return (
            <Card key={c.id} onPress={() => router.push(`/spm/${c.id}`)} style={styles.row} accessibilityLabel={`${c.title} ${c.short}`}>
              <View style={[styles.icon, c.id === 'kbat' && { backgroundColor: brand.gold }]}>
                <Ionicons name={c.icon} size={22} color={c.id === 'kbat' ? brand.navy : brand.white} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={type.caption}>{c.title.toUpperCase()}</Text>
                <Text style={type.heading}>{c.short}</Text>
                <Text style={[type.small, { fontSize: 12.5 }]}>{c.description}</Text>
                <Text style={styles.count}>{n} {c.id === 'k1' ? 'soalan dalam bank' : 'set soalan contoh'}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textSubtle} />
            </Card>
          );
        })}
      </View>

      <View style={styles.notice}>
        <Ionicons name="alert-circle-outline" size={18} color={brand.red} />
        <Text style={[type.small, { flex: 1 }]}>
          Bahagian ini mengandungi <Text style={{ fontWeight: '700' }}>soalan contoh</Text> untuk menunjukkan format latihan. Ia bukan soalan
          SPM sebenar dan bukan ramalan soalan. Bahan latihan tambahan akan dimasukkan kemudian.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { padding: spacing.xl, gap: spacing.sm },
  heroTitle: { fontFamily: fonts.serif, fontSize: 21, lineHeight: 27, fontWeight: '700', color: brand.white },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  icon: { width: 50, height: 50, borderRadius: 15, backgroundColor: brand.navy, alignItems: 'center', justifyContent: 'center' },
  count: { ...type.caption, color: brand.red, marginTop: 6 },
  notice: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.redSoft,
  },
});
