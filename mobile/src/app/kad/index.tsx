import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, fonts, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { Card, ProgressBar, Segmented } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { getChaptersByForm } from '../../data/syllabus';
import { flashcardsFor } from '../../data/extras';
import type { Form } from '../../types/content';

export default function FlashcardDecks() {
  const { state } = useApp();
  const [form, setForm] = useState<Form>(state.profile.form);
  const decks = getChaptersByForm(form).map((c) => {
    const cards = flashcardsFor(c.id);
    return { chapter: c, total: cards.length, known: cards.filter((k) => state.knownCards[k.id]).length };
  });

  return (
    <Screen header={<StackHeader title="Kad Imbas" subtitle="Istilah · Tokoh · Tarikh" />}>
      <Text style={[type.small, { marginBottom: spacing.lg }]}>
        Uji ingatan anda tentang kata kunci, tokoh dan tarikh penting setiap bab. Tekan kad untuk melihat jawapan.
      </Text>
      <Segmented
        value={form}
        onChange={setForm}
        options={[
          { value: 4, label: 'Tingkatan 4' },
          { value: 5, label: 'Tingkatan 5' },
        ]}
        style={{ marginBottom: spacing.md }}
      />
      <View style={{ gap: spacing.sm }}>
        {decks.map(({ chapter, total, known }) => (
          <Card
            key={chapter.id}
            onPress={total ? () => router.push(`/kad/${chapter.id}`) : undefined}
            style={[styles.row, !total && { opacity: 0.55 }]}
            accessibilityLabel={`Kad imbas Bab ${chapter.number}`}
          >
            <Text style={styles.num}>{chapter.number}</Text>
            <View style={{ flex: 1, gap: 6 }}>
              <Text style={type.subheading} numberOfLines={2}>
                {chapter.title}
              </Text>
              {total ? (
                <View style={styles.progressRow}>
                  <ProgressBar value={known / total} height={5} style={{ flex: 1 }} />
                  <Text style={styles.count}>
                    {known}/{total}
                  </Text>
                </View>
              ) : (
                <Text style={[type.small, { fontSize: 12 }]}>Kad akan ditambah</Text>
              )}
            </View>
            {total ? <Ionicons name="chevron-forward" size={18} color={colors.textSubtle} /> : null}
          </Card>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md },
  num: { fontFamily: fonts.serif, fontSize: 22, fontWeight: '700', color: brand.red, width: 30, textAlign: 'center' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  count: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '700', color: colors.textMuted, minWidth: 38, textAlign: 'right' },
});
