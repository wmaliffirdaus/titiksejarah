import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import type { Chapter } from '../types/content';
import { brand, colors, fonts, spacing } from '../constants/theme';
import { useApp } from '../store/AppProvider';
import { chapterProgress, isChapterComplete } from '../store/selectors';
import { ListRow, ProgressBar } from './ui';

/** One chapter in a table-of-contents list. Place inside <List>. */
export function ChapterRow({ chapter }: { chapter: Chapter }) {
  const { state } = useApp();
  const progress = chapterProgress(state, chapter);
  const done = isChapterComplete(state, chapter.id) || progress >= 1;
  const read = chapter.subtopics.filter((s) => state.readSubtopics[s.id]).length;

  return (
    <ListRow
      lead={
        <View style={styles.lead}>
          <Text style={[styles.num, done && { color: brand.navy }]}>{chapter.number}</Text>
        </View>
      }
      title={chapter.title}
      subtitle={done ? 'Selesai diulang kaji' : `${chapter.subtopics.length} subtopik${read ? `, ${read} dibaca` : ''}`}
      value={progress > 0 && !done ? `${Math.round(progress * 100)}%` : done ? 'Selesai' : undefined}
      onPress={() => router.push(`/bab/${chapter.id}`)}
      accessibilityLabel={`Bab ${chapter.number}: ${chapter.title}`}
    >
      {progress > 0 && !done ? <ProgressBar value={progress} style={{ marginTop: spacing.sm }} /> : null}
    </ListRow>
  );
}

/** Kept for callers that render a single chapter outside a list. */
export const ChapterCard = ChapterRow;

const styles = StyleSheet.create({
  lead: { width: 30, alignItems: 'center', alignSelf: 'flex-start', paddingTop: 1 },
  num: { fontFamily: fonts.serif, fontSize: 24, lineHeight: 26, fontWeight: '700', color: brand.red },
  muted: { color: colors.textSubtle },
});
