import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import type { Chapter } from '../types/content';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { useApp } from '../store/AppProvider';
import { chapterProgress, isChapterComplete } from '../store/selectors';
import { hasNote } from '../data/notes';
import { Badge, Card, ProgressBar } from './ui';

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const { state } = useApp();
  const progress = chapterProgress(state, chapter);
  const done = isChapterComplete(state, chapter.id) || progress >= 1;
  const notesReady = chapter.subtopics.some((s) => hasNote(s.id));

  return (
    <Card
      onPress={() => router.push(`/bab/${chapter.id}`)}
      accessibilityLabel={`Bab ${chapter.number}: ${chapter.title}`}
      style={styles.card}
    >
      <View style={styles.row}>
        <View style={[styles.num, done && styles.numDone]}>
          {done ? (
            <Ionicons name="checkmark" size={22} color={brand.navy} />
          ) : (
            <Text style={styles.numText}>{chapter.number}</Text>
          )}
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <Text style={type.caption}>BAB {chapter.number}</Text>
          <Text style={styles.title} numberOfLines={2}>
            {chapter.title}
          </Text>
          <View style={styles.metaRow}>
            {notesReady ? (
              <Badge label={`${chapter.subtopics.length} subtopik`} tone="navy" icon="document-text-outline" />
            ) : (
              <Badge label="Nota akan ditambah" tone="muted" icon="time-outline" />
            )}
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textSubtle} />
      </View>
      {notesReady ? (
        <View style={styles.progressRow}>
          <ProgressBar value={progress} height={6} style={{ flex: 1 }} />
          <Text style={styles.pct}>{Math.round(progress * 100)}%</Text>
        </View>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { padding: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  num: {
    width: 46,
    height: 46,
    borderRadius: radius.md,
    backgroundColor: brand.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numDone: { backgroundColor: brand.gold },
  numText: { fontFamily: fonts.serif, fontSize: 20, fontWeight: '700', color: brand.gold },
  title: { ...type.subheading, fontSize: 15.5, lineHeight: 21 },
  metaRow: { flexDirection: 'row', gap: spacing.sm, marginTop: 2 },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.md, paddingLeft: 58 },
  pct: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '700', color: alpha(brand.navy, 0.7), minWidth: 34, textAlign: 'right' },
});
