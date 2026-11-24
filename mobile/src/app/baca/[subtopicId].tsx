import { useEffect, useRef } from 'react';
import { ScrollView, type ScrollViewInstance, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { StackHeader } from '../../components/layout';
import { Button, EmptyState, IconButton, SourceBadge, Touchable } from '../../components/ui';
import { NoteBlocks } from '../../components/NoteBlocks';
import { useApp } from '../../store/AppProvider';
import { isRead } from '../../store/selectors';
import { useBookmark } from '../../hooks/useBookmark';
import { useFontScale } from '../../hooks/useFontScale';
import { getSubtopic } from '../../data/syllabus';
import { getNote } from '../../data/notes';
import { countFor } from '../../utils/quiz';
import type { FontScale } from '../../types/state';

const nextScale: Record<FontScale, FontScale> = { kecil: 'sederhana', sederhana: 'besar', besar: 'kecil' };

export default function NoteReader() {
  const { subtopicId } = useLocalSearchParams<{ subtopicId: string }>();
  const id = String(subtopicId);
  const hit = getSubtopic(id);
  const note = getNote(id);
  const { state, dispatch } = useApp();
  const bookmark = useBookmark('nota', id);
  const scale = useFontScale();
  const insets = useSafeAreaInsets();
  const scroller = useRef<ScrollViewInstance>(null);

  // Depend on stable ids only: getSubtopic() returns a new object each render,
  // and recording the visit updates state, so depending on `hit` would loop forever.
  const chapterId = hit?.chapter.id;
  useEffect(() => {
    if (chapterId) dispatch({ type: 'visit', chapterId, subtopicId: id });
    scroller.current?.scrollTo({ y: 0, animated: false });
  }, [id, chapterId, dispatch]);

  if (!hit || !note) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StackHeader title="Nota" />
        <EmptyState
          icon="hourglass-outline"
          title="Nota belum tersedia"
          message="Nota untuk subtopik ini sedang disediakan."
          action="Kembali ke bab"
          onAction={() => (hit ? router.replace(`/bab/${hit.chapter.id}`) : router.replace('/nota'))}
        />
      </View>
    );
  }

  const { chapter, subtopic, prev, next } = hit;
  const read = isRead(state, id);
  const quizCount = countFor(`topik-${id}`);
  const goTo = (sid: string) => router.replace(`/baca/${sid}`);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StackHeader
        title={`${subtopic.code} ${subtopic.title}`}
        subtitle={`Tingkatan ${chapter.form}, bab ${chapter.number}`}
        right={
          <>
            <IconButton
              icon="text"
              label={`Saiz teks: ${state.prefs.fontScale}. Tekan untuk tukar`}
              onPress={() => dispatch({ type: 'setPrefs', prefs: { fontScale: nextScale[state.prefs.fontScale] } })}
              size={20}
            />
            <IconButton
              icon="bookmark-outline"
              activeIcon="bookmark"
              active={bookmark.saved}
              color={bookmark.saved ? brand.red : brand.navy}
              label={bookmark.saved ? 'Buang daripada simpanan' : 'Simpan nota'}
              onPress={bookmark.toggle}
            />
          </>
        }
      />
      <ScrollView ref={scroller} contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + spacing.xxxl }]}>
        <Text style={styles.code}>Subtopik {subtopic.code}</Text>
        <Text style={[type.title, { fontSize: 24 * scale, lineHeight: 30 * scale }]}>{subtopic.title}</Text>
        <View style={styles.metaRow}>
          <SourceBadge status={note.source.status} />
          {read ? (
            <View style={styles.readPill}>
              <Ionicons name="checkmark-circle" size={13} color={brand.navy} />
              <Text style={styles.readPillText}>Sudah dibaca</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.summary}>
          <Text style={[type.body, { fontSize: 14.5 * scale, lineHeight: 22 * scale, fontStyle: 'italic' }]}>{note.summary}</Text>
        </View>

        <NoteBlocks blocks={note.blocks} scale={scale} />

        <View style={styles.sourceBox}>
          <Ionicons name="library-outline" size={16} color={colors.textMuted} />
          <Text style={[type.small, { flex: 1, fontSize: 12 }]}>
            {note.source.label}. Sentiasa semak dengan buku teks dan guru anda.
          </Text>
        </View>

        <Button
          label={read ? 'Sudah dibaca. Batal' : 'Tanda sudah dibaca'}
          icon={read ? 'checkmark-circle' : 'checkmark-circle-outline'}
          variant={read ? 'gold' : 'primary'}
          onPress={() => dispatch({ type: 'markRead', subtopicId: id, read: !read })}
          style={{ marginTop: spacing.xl }}
        />
        {quizCount > 0 ? (
          <Button
            label={`Uji diri dengan ${quizCount} soalan`}
            icon="help-circle-outline"
            variant="secondary"
            onPress={() => router.push(`/kuiz/topik-${id}`)}
            style={{ marginTop: spacing.md }}
          />
        ) : null}

        <View style={styles.pager}>
          <PagerButton dir="prev" code={prev?.code} title={prev?.title} onPress={prev ? () => goTo(prev.id) : undefined} />
          <PagerButton
            dir="next"
            code={next?.code}
            title={next?.title ?? 'Kembali ke bab'}
            onPress={() => {
              dispatch({ type: 'markRead', subtopicId: id, read: true });
              if (next) goTo(next.id);
              else router.replace(`/bab/${chapter.id}`);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function PagerButton({ dir, code, title, onPress }: { dir: 'prev' | 'next'; code?: string; title?: string; onPress?: () => void }) {
  if (!onPress || !title) return <View style={{ flex: 1 }} />;
  const isNext = dir === 'next';
  return (
    <Touchable onPress={onPress} style={[styles.pagerBtn, isNext && styles.pagerNext]} accessibilityLabel={isNext ? `Seterusnya: ${title}` : `Sebelum: ${title}`}>
      <Text style={[type.caption, isNext && { color: brand.gold }, { textAlign: isNext ? 'right' : 'left' }]}>
        {isNext ? (code ? 'Seterusnya' : 'Selesai bab') : 'Sebelum'}
      </Text>
      <Text style={[styles.pagerTitle, isNext && { color: brand.white, textAlign: 'right' }]} numberOfLines={2}>
        {code ? `${code} ${title}` : title}
      </Text>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.lg, paddingTop: spacing.xl },
  code: { ...type.caption, color: brand.red, marginBottom: 6 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.md, flexWrap: 'wrap' },
  readPill: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  readPillText: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '600', color: brand.navy },
  summary: {
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderLeftWidth: 3,
    borderLeftColor: brand.gold,
    backgroundColor: alpha(brand.white, 0.6),
    borderRadius: radius.sm,
  },
  sourceBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xxl,
    padding: spacing.md,
    borderRadius: radius.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderStrong,
  },
  pager: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.xxl },
  pagerBtn: {
    flex: 1,
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
    gap: 4,
    minHeight: 76,
  },
  pagerNext: { backgroundColor: brand.navy, borderColor: brand.navy },
  pagerTitle: { ...type.subheading, fontSize: 13.5, lineHeight: 18 },
});
