import { Image, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { Screen, StackHeader } from '../components/layout';
import { Card, SourceBadge } from '../components/ui';
import { chapters } from '../data/syllabus';
import { allNotes } from '../data/notes';
import { allQuestions } from '../data/quiz';

export default function AboutScreen() {
  const version = Constants.expoConfig?.version ?? '1.0.0';
  const chaptersWithNotes = new Set(allNotes.map((n) => n.subtopicId.split('-').slice(0, 2).join('-'))).size;

  return (
    <Screen header={<StackHeader title="Tentang" />}>
      <View style={styles.hero}>
        <Image source={require('../../assets/images/brand-dp.jpg')} style={styles.logo} accessibilityLabel="Logo Titik Sejarah" />
        <Text style={styles.brand}>TITIK SEJARAH</Text>
        <Text style={styles.tagline}>Kenali sejarah, fahami masa kini.</Text>
        <Text style={[type.small, { marginTop: spacing.xs }]}>Versi {version}</Text>
      </View>

      <Card style={{ gap: spacing.sm }}>
        <Text style={type.heading}>Misi kami</Text>
        <Text style={type.body}>
          Titik Sejarah membantu pelajar Tingkatan 4 dan 5 mengulang kaji Sejarah KSSM dengan nota yang tersusun, kuiz interaktif dan latihan
          format SPM — supaya sejarah lebih mudah difahami dan diingati.
        </Text>
      </Card>

      <Card style={{ gap: spacing.md, marginTop: spacing.md }}>
        <Text style={type.heading}>Sumber kandungan</Text>
        <View style={styles.sourceRow}>
          <SourceBadge status="nota" />
          <Text style={[type.small, { flex: 1 }]}>
            Diambil daripada Nota Ulang Kaji SPM Titik Sejarah, yang merumuskan Buku Teks Sejarah KSSM Tingkatan 4 dan 5 (KPM/DBP).
          </Text>
        </View>
        <View style={styles.sourceRow}>
          <SourceBadge status="contoh" />
          <Text style={[type.small, { flex: 1 }]}>
            Kandungan contoh untuk menunjukkan format (contohnya soalan SPM contoh). Bukan soalan peperiksaan sebenar dan belum disahkan.
          </Text>
        </View>
        <View style={styles.stats}>
          <Stat value={`${chapters.length}`} label="bab dalam silibus" />
          <Stat value={`${chaptersWithNotes}`} label="bab dengan nota" />
          <Stat value={`${allQuestions.length}`} label="soalan latihan" />
        </View>
      </Card>

      <View style={styles.disclaimer}>
        <Ionicons name="alert-circle-outline" size={18} color={brand.red} />
        <Text style={[type.small, { flex: 1 }]}>
          Aplikasi ini ialah bahan ulang kaji tambahan dan bukan penerbitan rasmi Kementerian Pendidikan Malaysia. Sentiasa rujuk buku teks
          dan guru anda. Soalan latihan bukan ramalan soalan SPM.
        </Text>
      </View>
    </Screen>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={[type.small, { fontSize: 11, textAlign: 'center' }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', paddingVertical: spacing.xl },
  logo: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: brand.gold, backgroundColor: brand.white },
  brand: { marginTop: spacing.lg, fontFamily: fonts.serif, fontWeight: '700', fontSize: 22, letterSpacing: 3, color: brand.navy },
  tagline: { fontFamily: fonts.serif, fontStyle: 'italic', color: brand.red, marginTop: 4 },
  sourceRow: { gap: 6 },
  stats: { flexDirection: 'row', paddingTop: spacing.md, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.borderStrong },
  statValue: { fontFamily: fonts.serif, fontSize: 22, fontWeight: '700', color: brand.navy },
  disclaimer: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg, padding: spacing.md, borderRadius: radius.md, backgroundColor: colors.redSoft },
});
