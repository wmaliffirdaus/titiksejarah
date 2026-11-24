import { useState } from 'react';
import { Text } from 'react-native';
import { router } from 'expo-router';
import { spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { List, ListRow, ProgressBar, Segmented } from '../../components/ui';
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
    <Screen header={<StackHeader title="Kad imbas" subtitle="Istilah, tokoh dan tarikh" />}>
      <Text style={[type.body, { marginBottom: spacing.lg }]}>
        Setiap bab ada satu set kad. Baca bahagian depan, cuba ingat jawapannya, kemudian ketik kad untuk menyemak.
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
      <List>
        {decks.map(({ chapter, total, known }) => (
          <ListRow
            key={chapter.id}
            lead={String(chapter.number)}
            title={chapter.title}
            subtitle={total ? `${total} kad` : 'Kad akan ditambah'}
            value={total ? `${known}/${total}` : undefined}
            onPress={total ? () => router.push(`/kad/${chapter.id}`) : undefined}
            accessibilityLabel={`Kad imbas Bab ${chapter.number}`}
          >
            {known ? <ProgressBar value={known / total} style={{ marginTop: spacing.sm }} /> : null}
          </ListRow>
        ))}
      </List>
    </Screen>
  );
}
