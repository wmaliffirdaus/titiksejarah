import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { Screen, StackHeader } from '../../components/layout';
import { Badge, Button, Card, EmptyState, IconButton, ProgressBar, SectionHeader, Touchable } from '../../components/ui';
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
        <EmptyState icon="alert-circle-outline" title="Bab tidak dijumpai" message="Pautan ini mungkin sudah lapuk." action="Ke senarai nota" onAction={() => router.replace('/nota')} />
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
      <Card tone="navy" style={styles.hero}>
        <Text style={styles.heroEyebrow}>
          TINGKATAN {chapter.form} · BAB {chapter.number}
        </Text>
        <Text style={styles.heroTitle}>{chapter.title}</Text>
        {chapter.intro ? <Text style={styles.heroIntro}>{chapter.intro}</Text> : null}
        {chapter.subtopics.length ? (
          <View style={{ marginTop: spacing.lg, gap: 6 }}>
            <ProgressBar value={progress} track={alpha(brand.white, 0.18)} />
            <Text style={styles.heroMeta}>
              {readCount}/{chapter.subtopics.length} subtopik dibaca{avg !== null ? ` · purata kuiz ${avg}%` : ''}
            </Text>
          </View>
        ) : null}
      </Card>

      {chapter.subtopics.length === 0 ? (
        <EmptyState
          icon="hourglass-outline"
          title="Nota sedang disediakan"
          message="Bab ini sudah tersenarai dalam silibus. Nota dan kuiz akan ditambah dalam kemas kini akan datang."
        />
      ) : (
        <>
          <SectionHeader title="Subtopik" style={{ marginTop: spacing.xxl }} />
          <View style={{ gap: spacing.sm }}>
            {chapter.subtopics.map((s) => {
              const note = getNote(s.id);
              const read = isRead(state, s.id);
              return (
                <Touchable
                  key={s.id}
                  disabled={!note}
                  onPress={() => router.push(`/baca/${s.id}`)}
                  style={[styles.subRow, !note && { opacity: 0.6 }]}
                  accessibilityLabel={`${s.code} ${s.title}${read ? ', sudah dibaca' : ''}`}
                >
                  <View style={[styles.code, read && styles.codeRead]}>
                    {read ? <Ionicons name="checkmark" size={18} color={brand.navy} /> : <Text style={styles.codeText}>{s.code}</Text>}
                  </View>
                  <View style={{ flex: 1, gap: 2 }}>
                    <Text style={type.subheading}>{s.title}</Text>
                    {note ? (
                      <Text style={[type.small, { fontSize: 12.5 }]} numberOfLines={2}>
                        {note.summary}
                      </Text>
                    ) : (
                      <Text style={[type.small, { fontSize: 12.5 }]}>Nota akan ditambah</Text>
                    )}
                  </View>
                  {note ? <Ionicons name="chevron-forward" size={18} color={colors.textSubtle} /> : null}
                </Touchable>
              );
            })}
          </View>
          {!hasAnyNotes ? (
            <Text style={[type.small, { marginTop: spacing.md }]}>
              Senarai subtopik ini sudah tersedia; kandungan nota akan menyusul.
            </Text>
          ) : null}
        </>
      )}

      <View style={{ gap: spacing.md, marginTop: spacing.xxl }}>
        {cards.length > 0 ? (
          <Button
            label={`Kad Imbas · ${knownCards}/${cards.length} dikuasai`}
            icon="albums-outline"
            variant="gold"
            onPress={() => router.push(`/kad/${chapter.id}`)}
          />
        ) : null}
        {quizCount > 0 ? (
          <Button label={`Kuiz Bab ${chapter.number} · ${quizCount} soalan`} icon="play" onPress={() => router.push(`/kuiz/bab-${chapter.id}`)} />
        ) : (
          <Card tone="muted">
            <View style={{ flexDirection: 'row', gap: spacing.sm, alignItems: 'center' }}>
              <Ionicons name="time-outline" size={18} color={colors.textMuted} />
              <Text style={[type.small, { flex: 1 }]}>Kuiz untuk bab ini akan ditambah.</Text>
            </View>
          </Card>
        )}
        <Button
          label={complete ? 'Ditanda selesai · batal' : 'Tanda bab ini selesai'}
          icon={complete ? 'checkmark-circle' : 'checkmark-circle-outline'}
          variant={complete ? 'gold' : 'secondary'}
          onPress={() => dispatch({ type: 'markChapter', chapterId: chapter.id, done: !complete })}
        />
      </View>

      {extras.rumusan.length ? (
        <>
          <SectionHeader title="Rumusan bab" style={{ marginTop: spacing.xxl }} />
          <Card>
            <NoteBlocks blocks={[{ type: 'list', items: extras.rumusan }]} />
          </Card>
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
          <SectionHeader title="Fokus Ulang Kaji SPM" style={{ marginTop: spacing.xxl }} />
          <Card style={{ gap: spacing.xs }}>
            <View style={styles.focusHead}>
              <Text style={[type.small, { flex: 1 }]}>Tandakan apabila anda sudah menguasainya.</Text>
              <Text style={styles.focusCount}>
                {focusDone}/{extras.focus.length}
              </Text>
            </View>
            <ProgressBar value={focusDone / extras.focus.length} height={5} style={{ marginBottom: spacing.sm }} />
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

      <View style={styles.sourceRow}>
        <Badge label="Sumber" tone="muted" icon="library-outline" />
        <Text style={[type.small, { flex: 1, fontSize: 12 }]}>{chapter.outlineSource}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  focusHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  focusCount: { fontFamily: fonts.sansMedium, fontWeight: '700', color: brand.navy },
  focusRow: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start', paddingVertical: spacing.sm },
  hero: { padding: spacing.xl, gap: spacing.sm },
  heroEyebrow: { ...type.caption, color: brand.gold },
  heroTitle: { fontFamily: fonts.serif, fontSize: 24, lineHeight: 30, fontWeight: '700', color: brand.white },
  heroIntro: { ...type.small, color: alpha(brand.white, 0.82), lineHeight: 20 },
  heroMeta: { ...type.small, fontSize: 12, color: alpha(brand.white, 0.75) },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    backgroundColor: brand.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  code: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.navySoft, alignItems: 'center', justifyContent: 'center' },
  codeRead: { backgroundColor: brand.gold },
  codeText: { fontFamily: fonts.serif, fontWeight: '700', color: brand.navy, fontSize: 14 },
  sourceRow: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center', marginTop: spacing.xl },
});
