import { useMemo, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, shadow, spacing, type } from '../../constants/theme';
import { StackHeader } from '../../components/layout';
import { Badge, Button, EmptyState, ProgressBar, Segmented } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { getChapter } from '../../data/syllabus';
import { flashcardsFor, type CardKind, type Flashcard } from '../../data/extras';
import { shuffle } from '../../utils/random';

const KIND_LABEL: Record<CardKind, { label: string; hint: string }> = {
  istilah: { label: 'Istilah', hint: 'Apakah maksud istilah ini?' },
  tokoh: { label: 'Tokoh', hint: 'Apakah peranan tokoh ini?' },
  tarikh: { label: 'Tarikh', hint: 'Apakah peristiwa pada tarikh ini?' },
};

type Mode = 'belum' | 'semua';

export default function FlashcardsScreen() {
  const { chapterId } = useLocalSearchParams<{ chapterId: string }>();
  const id = String(chapterId);
  const chapter = getChapter(id);
  const { state, dispatch } = useApp();
  const insets = useSafeAreaInsets();
  const all = useMemo(() => flashcardsFor(id), [id]);
  const knownCount = all.filter((c) => state.knownCards[c.id]).length;

  const build = (m: Mode) => shuffle(m === 'belum' ? all.filter((c) => !state.knownCards[c.id]) : all);
  const [mode, setMode] = useState<Mode>(() => (knownCount < all.length ? 'belum' : 'semua'));
  const [queue, setQueue] = useState<Flashcard[]>(() => build(knownCount < all.length ? 'belum' : 'semua'));
  const [roundSize, setRoundSize] = useState(queue.length);
  const [flipped, setFlipped] = useState(false);
  const [logged, setLogged] = useState(false);
  const flip = useRef(new Animated.Value(0)).current;

  const restart = (m: Mode) => {
    const q = build(m);
    setMode(m);
    setQueue(q);
    setRoundSize(q.length);
    setFlipped(false);
    flip.setValue(0);
    setLogged(false);
  };

  if (!chapter || all.length === 0) {
    return (
      <View style={styles.root}>
        <StackHeader title="Kad Imbas" />
        <EmptyState icon="albums-outline" title="Tiada kad lagi" message="Kad imbas untuk bab ini akan ditambah bersama nota." action="Kembali" onAction={() => router.back()} />
      </View>
    );
  }

  const current = queue[0];
  const doneThisRound = roundSize - queue.length;

  const toggleFlip = () => {
    Animated.spring(flip, { toValue: flipped ? 0 : 1, useNativeDriver: true, friction: 8, tension: 60 }).start();
    setFlipped(!flipped);
  };

  const answer = (known: boolean) => {
    if (!current) return;
    dispatch({ type: 'setCardKnown', cardId: current.id, known });
    const rest = queue.slice(1);
    // "Belum tahu" cards come back at the end of the round.
    const next = known ? rest : [...rest, current];
    setQueue(next);
    setFlipped(false);
    flip.setValue(0);
    if (next.length === 0 && !logged) {
      dispatch({ type: 'logActivity' });
      setLogged(true);
    }
  };

  const frontRotate = flip.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate = flip.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  return (
    <View style={styles.root}>
      <StackHeader title="Kad Imbas" subtitle={`T${chapter.form} · Bab ${chapter.number}`} />
      <View style={[styles.body, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Segmented
          value={mode}
          onChange={restart}
          options={[
            { value: 'belum', label: `Belum dikuasai (${all.length - knownCount})` },
            { value: 'semua', label: `Semua (${all.length})` },
          ]}
        />
        <View style={styles.progressRow}>
          <ProgressBar value={knownCount / all.length} style={{ flex: 1 }} />
          <Text style={styles.progressText}>
            {knownCount}/{all.length} dikuasai
          </Text>
        </View>

        {!current ? (
          <View style={styles.done}>
            <View style={styles.doneIcon}>
              <Ionicons name="trophy" size={34} color={brand.navy} />
            </View>
            <Text style={[type.title, { textAlign: 'center' }]}>
              {knownCount === all.length ? 'Semua kad dikuasai!' : 'Pusingan selesai!'}
            </Text>
            <Text style={[type.small, { textAlign: 'center', marginTop: spacing.xs }]}>
              {knownCount}/{all.length} kad bab ini sudah anda tanda "Saya tahu".
            </Text>
            <View style={{ gap: spacing.md, marginTop: spacing.xl, alignSelf: 'stretch' }}>
              {knownCount < all.length ? <Button label="Ulang kad belum dikuasai" icon="repeat" onPress={() => restart('belum')} /> : null}
              <Button label="Ulang semua kad" icon="refresh" variant="secondary" onPress={() => restart('semua')} />
              <Button
                label="Set semula kemajuan kad"
                variant="ghost"
                small
                onPress={() => {
                  dispatch({ type: 'resetCards', chapterId: id });
                  // State in this render still has the old known cards, so rebuild from all cards directly.
                  const q = shuffle(all);
                  setMode('belum');
                  setQueue(q);
                  setRoundSize(q.length);
                  setFlipped(false);
                  flip.setValue(0);
                  setLogged(false);
                }}
              />
            </View>
          </View>
        ) : (
          <>
            <Text style={[type.caption, { textAlign: 'center', marginTop: spacing.lg }]}>
              KAD {doneThisRound + 1} · {queue.length} LAGI DALAM PUSINGAN INI
            </Text>
            <Pressable onPress={toggleFlip} style={styles.cardWrap} accessibilityRole="button" accessibilityLabel={flipped ? `Jawapan: ${current.back}` : `${current.front}. Tekan untuk lihat jawapan`}>
              <Animated.View style={[styles.card, styles.cardFront, { transform: [{ perspective: 1000 }, { rotateY: frontRotate }] }]}>
                <Badge label={KIND_LABEL[current.kind].label} tone="gold" />
                <Text style={styles.front}>{current.front}</Text>
                <Text style={[type.small, { textAlign: 'center' }]}>{KIND_LABEL[current.kind].hint}</Text>
                <View style={styles.tapHint}>
                  <Ionicons name="sync-outline" size={14} color={colors.textSubtle} />
                  <Text style={type.caption}>TEKAN UNTUK LIHAT JAWAPAN</Text>
                </View>
              </Animated.View>
              <Animated.View style={[styles.card, styles.cardBack, { transform: [{ perspective: 1000 }, { rotateY: backRotate }] }]}>
                <Text style={[type.caption, { color: brand.gold }]}>{current.front.toUpperCase()}</Text>
                <Text style={styles.back}>{current.back}</Text>
              </Animated.View>
            </Pressable>
            <View style={styles.actions}>
              <Button label="Belum tahu" icon="close" variant="danger" onPress={() => answer(false)} style={{ flex: 1 }} />
              <Button label="Saya tahu" icon="checkmark" variant="gold" onPress={() => answer(true)} style={{ flex: 1 }} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  body: { flex: 1, padding: spacing.lg },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginTop: spacing.md },
  progressText: { fontFamily: fonts.sansMedium, fontSize: 12, fontWeight: '700', color: colors.textMuted },
  cardWrap: { flex: 1, marginVertical: spacing.lg, minHeight: 260 },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    backfaceVisibility: 'hidden',
    ...shadow.raised,
  },
  cardFront: { backgroundColor: brand.white, borderWidth: 1, borderColor: colors.border },
  cardBack: { backgroundColor: brand.navy },
  front: { fontFamily: fonts.serif, fontSize: 26, lineHeight: 34, fontWeight: '700', color: brand.navy, textAlign: 'center' },
  back: { fontFamily: fonts.sans, fontSize: 18, lineHeight: 28, color: brand.white, textAlign: 'center' },
  tapHint: { position: 'absolute', bottom: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: 6 },
  actions: { flexDirection: 'row', gap: spacing.md },
  done: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.lg },
  doneIcon: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: alpha(brand.gold, 0.35),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
});
