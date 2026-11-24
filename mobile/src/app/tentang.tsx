import { Image, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { brand, colors, fonts, spacing, type } from '../constants/theme';
import { Screen, StackHeader } from '../components/layout';
import { Card, SourceBadge } from '../components/ui';
import { chapters } from '../data/syllabus';
import { allNotes } from '../data/notes';
import { allQuestions } from '../data/quiz';
import { papers } from '../data/papers';
import { k2Sets } from '../data/k2';

export default function AboutScreen() {
  const version = Constants.expoConfig?.version ?? '';
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
          Titik Sejarah membantu pelajar Tingkatan 4 dan 5 mengulang kaji Sejarah KSSM. Aplikasi ini ada nota ringkas mengikut buku teks,
          kuiz dengan penerangan, kad imbas, dan kertas latihan format SPM dengan skema jawapan.
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
          <SourceBadge status="bank" />
          <Text style={[type.small, { flex: 1 }]}>
            Kertas latihan Kertas 1 dan Kertas 2 dengan Skema Jawapan Cadangan. Soalan asli Titik Sejarah, bukan soalan sebenar atau ramalan SPM.
          </Text>
        </View>
        <View style={styles.stats}>
          <Stat value={`${chapters.length}`} label="bab dalam silibus" />
          <Stat value={`${chaptersWithNotes}`} label="bab dengan nota" />
          <Stat value={`${allQuestions.length + papers.reduce((n, p) => n + p.q.length, 0)}`} label="soalan objektif" />
          <Stat value={`${papers.length + k2Sets.length}`} label="kertas latihan" />
        </View>
      </Card>

      <View style={styles.disclaimer}>
        <Text style={[type.small, { flex: 1, color: brand.navy }]}>
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
  disclaimer: { marginTop: spacing.lg, paddingVertical: spacing.sm, paddingLeft: spacing.md, borderLeftWidth: 3, borderLeftColor: brand.red },
});
