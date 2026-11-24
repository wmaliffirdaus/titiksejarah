import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, fonts, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { Button, Card, EmptyState, IconButton, List, ListRow, ProgressBar, SectionHeader, Touchable } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { chapterProgress, chapterQuizAverage, isChapterComplete, isRead } from '../../store/selectors';
import { useBookmark } from '../../hooks/useBookmark';
import { getChapter } from '../../data/syllabus';
import { getNote } from '../../data/notes';
import { countFor } from '../../utils/quiz';
import { flashcardsFor, getExtras } from '../../data/extras';
import { NoteBlocks } from '../../components/NoteBlocks';

export default function ChapterScreen() {
  const { chapterId } = useLocalSearchParams<{ chapterId: string }>();
  const chapter = getChapter(String(chapterId));
  const { state, dispatch } = useApp();
  const bookmark = useBookmark('topik', String(chapterId));

  const id = chapter?.id;
  useEffect(() => {
    if (id) dispatch({ type: 'visit', chapterId: id });
  }, [id, dispatch]);

  if (!chapter) {
    return (
      <Screen header={<StackHeader title="Bab tidak dijumpai" />}>
        <EmptyState title="Bab tidak dijumpai" message="Pautan ini mungkin sudah lapuk." action="Ke senarai nota" onAction={() => router.replace('/nota')} />
      </Screen>
    );
  }

  const progress = chapterProgress(state, chapter);
  const extras = getExtras(chapter.id);
  const cards = flashcardsFor(chapter.id);
  const knownCards = cards.filter((c) => state.knownCards[c.id]).length;
  const focusDone = extras.focus.filter((_, i) => state.focusChecks[`${chapter.id}:${i}`]).length;
  const complete = isChapterComplete(state, chapter.id);
  const quizCount = countFor(`bab-${chapter.id}`);
  const avg = chapterQuizAverage(state, chapter.id);
  const hasAnyNotes = chapter.subtopics.some((s) => getNote(s.id));
  const readCount = chapter.subtopics.filter((s) => isRead(state, s.id)).length;

  return (
    <Screen
      header={
        <StackHeader
          title={`Bab ${chapter.number}`}
          subtitle={`Tingkatan ${chapter.form}`}
          right={
            <IconButton
              icon="bookmark-outline"
              activeIcon="bookmark"
              active={bookmark.saved}
              color={bookmark.saved ? brand.red : brand.navy}
              label={bookmark.saved ? 'Buang daripada simpanan' : 'Simpan topik untuk ulang kaji'}
              onPress={bookmark.toggle}
            />
          }
        />
      }
    >
      <Text style={styles.eyebrow}>
        Tingkatan {chapter.form}, bab {chapter.number}
      </Text>
      <Text style={styles.title}>{chapter.title}</Text>
      {chapter.intro ? <Text style={styles.intro}>{chapter.intro}</Text> : null}
      {chapter.subtopics.length ? (
        <View style={styles.progressLine}>
          <ProgressBar value={progress} style={{ flex: 1 }} />
          <Text style={type.caption}>
            {readCount}/{chapter.subtopics.length} dibaca{avg !== null ? `, kuiz ${avg}%` : ''}
          </Text>
        </View>
      ) : null}

      {chapter.subtopics.length === 0 ? (
        <EmptyState title="Nota sedang disediakan" message="Bab ini sudah tersenarai dalam silibus. Nota dan kuiz akan ditambah kemudian." />
      ) : (
        <>
          <SectionHeader title="Subtopik" style={{ marginTop: spacing.xxl }} />
          <List>
            {chapter.subtopics.map((s) => {
              const note = getNote(s.id);
              const read = isRead(state, s.id);
              return (
                <ListRow
                  key={s.id}
                  lead={
                    <View style={styles.codeCol}>
                      <Text style={[styles.code, read && styles.codeRead]}>{s.code}</Text>
                    </View>
                  }
                  title={s.title}
                  subtitle={note ? note.summary : 'Nota akan ditambah'}
                  value={read ? 'Dibaca' : undefined}
                  onPress={note ? () => router.push(`/baca/${s.id}`) : undefined}
                  accessibilityLabel={`${s.code} ${s.title}${read ? ', sudah dibaca' : ''}`}
                />
              );
            })}
          </List>
          {!hasAnyNotes ? <Text style={[type.small, { marginTop: spacing.md }]}>Kandungan nota akan menyusul.</Text> : null}
        </>
      )}

      <SectionHeader title="Latih diri" style={{ marginTop: spacing.xxl }} />
      <List>
        {quizCount > 0 ? (
          <ListRow
            title={`Kuiz bab ${chapter.number}`}
            subtitle={`${Math.min(quizCount, state.prefs.perQuiz)} soalan dipilih daripada ${quizCount}, dengan penerangan.`}
            value={avg !== null ? `${avg}%` : undefined}
            onPress={() => router.push(`/kuiz/bab-${chapter.id}`)}
          />
        ) : null}
        {cards.length > 0 ? (
          <ListRow
            title="Kad imbas"
            subtitle="Istilah, tokoh dan tarikh penting bab ini."
            value={`${knownCards}/${cards.length}`}
            onPress={() => router.push(`/kad/${chapter.id}`)}
          />
        ) : null}
      </List>
      <Button
        label={complete ? 'Bab ini ditanda selesai. Batal' : 'Tanda bab ini selesai'}
        icon={complete ? 'checkmark-circle' : 'checkmark-circle-outline'}
        variant={complete ? 'gold' : 'secondary'}
        onPress={() => dispatch({ type: 'markChapter', chapterId: chapter.id, done: !complete })}
        style={{ marginTop: spacing.md }}
      />

      {extras.rumusan.length ? (
        <>
          <SectionHeader title="Rumusan bab" style={{ marginTop: spacing.xxl }} />
          <NoteBlocks blocks={[{ type: 'list', items: extras.rumusan, ordered: true }]} />
        </>
      ) : null}

      {extras.dates.length ? (
        <>
          <SectionHeader title="Tarikh penting" style={{ marginTop: spacing.xxl }} />
          <Card>
            <NoteBlocks blocks={[{ type: 'timeline', items: extras.dates.map(([when, what]) => ({ when, what })) }]} />
          </Card>
        </>
      ) : null}

      {extras.focus.length ? (
        <>
          <SectionHeader title="Fokus ulang kaji SPM" style={{ marginTop: spacing.xxl }} />
          <Card style={{ gap: spacing.xs }}>
            <View style={styles.focusHead}>
              <Text style={[type.small, { flex: 1 }]}>Tanda setiap perkara yang anda sudah kuasai.</Text>
              <Text style={styles.focusCount}>
                {focusDone}/{extras.focus.length}
              </Text>
            </View>
            <ProgressBar value={focusDone / extras.focus.length} style={{ marginBottom: spacing.sm }} />
            {extras.focus.map((item, i) => {
              const key = `${chapter.id}:${i}`;
              const on = !!state.focusChecks[key];
              return (
                <Touchable
                  key={key}
                  onPress={() => dispatch({ type: 'toggleFocus', key })}
                  style={styles.focusRow}
                  scaleTo={0.99}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: on }}
                  accessibilityLabel={item}
                >
                  <Ionicons name={on ? 'checkbox' : 'square-outline'} size={22} color={on ? brand.navy : colors.textSubtle} />
                  <Text style={[type.body, { flex: 1, fontSize: 14.5, lineHeight: 21 }, on && { color: colors.textMuted }]}>{item}</Text>
                </Touchable>
              );
            })}
          </Card>
        </>
      ) : null}

      <Text style={styles.source}>Sumber: {chapter.outlineSource}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  eyebrow: { ...type.caption, color: brand.red },
  title: { ...type.display, marginTop: 4 },
  intro: { ...type.body, marginTop: spacing.md, color: colors.textMuted },
  progressLine: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginTop: spacing.lg },
  codeCol: { width: 34, alignSelf: 'flex-start', paddingTop: 1 },
  code: { fontFamily: fonts.serif, fontWeight: '700', color: brand.red, fontSize: 15 },
  codeRead: { color: colors.textSubtle },
  focusHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  focusCount: { fontFamily: fonts.sansMedium, fontWeight: '700', color: brand.navy },
  focusRow: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start', paddingVertical: spacing.sm },
  source: { ...type.small, fontSize: 12, marginTop: spacing.xl },
});
