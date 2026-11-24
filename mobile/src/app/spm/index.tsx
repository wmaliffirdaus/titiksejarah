import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { List, ListRow } from '../../components/ui';
import { spmItemsFor } from '../../data/spm';
import { papers } from '../../data/papers';
import { PAPER_SOURCE } from '../../data/papers/paper';
import { countFor } from '../../utils/quiz';

export default function SpmHub() {
  return (
    <Screen header={<StackHeader title="Latihan SPM" subtitle="Sejarah 1249" />}>
      <Text style={type.body}>
        Kertas 1 ada 40 soalan objektif dalam 1 jam. Kertas 2 ada empat soalan struktur dan lima soalan esei, dan calon menjawab tiga
        soalan esei.
      </Text>
      <List style={{ marginTop: spacing.xl }}>
        <ListRow lead="1" title="Kertas 1 penuh" subtitle={`${papers.length} set, dengan masa dan semakan.`} onPress={() => router.push('/kertas')} />
        <ListRow lead="1" title="Kertas 1 latihan pantas" subtitle={`${countFor('spm-k1')} soalan dalam bank, jawapan disemak serta-merta.`} onPress={() => router.push('/kuiz/spm-k1')} />
        <ListRow lead="2" title="Kertas 2 struktur" subtitle={`${spmItemsFor('k2-struktur').length} soalan, 10 markah setiap satu.`} onPress={() => router.push('/spm/k2-struktur')} />
        <ListRow lead="2" title="Kertas 2 esei" subtitle={`${spmItemsFor('k2-esei').length} soalan, 20 markah setiap satu.`} onPress={() => router.push('/spm/k2-esei')} />
        <ListRow lead="K" title="KBAT" subtitle={`${spmItemsFor('kbat').length} soalan pendapat dengan rubrik.`} onPress={() => router.push('/spm/kbat')} />
      </List>
      <Text style={styles.note}>{PAPER_SOURCE}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  note: { ...type.small, fontSize: 12, marginTop: spacing.xl },
});
