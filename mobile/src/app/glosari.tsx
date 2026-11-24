import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../constants/theme';
import { Screen, StackHeader } from '../components/layout';
import { EmptyState, Segmented } from '../components/ui';
import { glossary } from '../data/extras';
import { getChapter } from '../data/syllabus';

type Kind = 'istilah' | 'tokoh';

export default function GlossaryScreen() {
  const [kind, setKind] = useState<Kind>('istilah');
  const [q, setQ] = useState('');
  const all = useMemo(() => glossary(), []);
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return all.filter((g) => g.kind === kind && (!needle || g.term.toLowerCase().includes(needle) || g.meaning.toLowerCase().includes(needle)));
  }, [all, kind, q]);

  let lastLetter = '';
  return (
    <Screen header={<StackHeader title="Glosari" subtitle="Istilah dan tokoh, A hingga Z" />}>
      <View style={styles.search}>
        <Ionicons name="search" size={18} color={colors.textSubtle} />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder={kind === 'istilah' ? 'Cari istilah, contohnya jus soli' : 'Cari tokoh'}
          placeholderTextColor={colors.textSubtle}
          style={styles.input}
          accessibilityLabel="Cari dalam glosari"
        />
      </View>
      <Segmented
        value={kind}
        onChange={setKind}
        options={[
          { value: 'istilah', label: `Istilah (${all.filter((g) => g.kind === 'istilah').length})` },
          { value: 'tokoh', label: `Tokoh (${all.filter((g) => g.kind === 'tokoh').length})` },
        ]}
        style={{ marginBottom: spacing.md }}
      />
      {list.length === 0 ? (
        <EmptyState title="Tiada padanan" message="Cuba ejaan lain atau kata yang lebih pendek." />
      ) : (
        list.map((g, i) => {
          const letter = (g.term.match(/[A-Za-z0-9]/)?.[0] ?? '#').toUpperCase();
          const head = letter !== lastLetter && !q;
          lastLetter = letter;
          const ch = getChapter(g.chapterId);
          return (
            <View key={`${g.chapterId}-${g.term}-${i}`}>
              {head ? <Text style={styles.letter}>{letter}</Text> : null}
              <Pressable
                onPress={() => router.push(`/bab/${g.chapterId}`)}
                style={({ pressed }) => [styles.row, pressed && { backgroundColor: alpha(brand.navy, 0.04) }]}
                accessibilityRole="button"
              >
                <Text style={styles.term}>{g.term}</Text>
                <Text style={type.body}>{g.meaning}</Text>
                {ch ? (
                  <Text style={[type.caption, { marginTop: 2 }]}>
                    Tingkatan {ch.form}, bab {ch.number}
                  </Text>
                ) : null}
              </Pressable>
            </View>
          );
        })
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    height: 48,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
    marginBottom: spacing.md,
  },
  input: { flex: 1, fontSize: 15, color: brand.navy, height: '100%' },
  letter: { fontFamily: fonts.serif, fontSize: 24, fontWeight: '700', color: brand.red, marginTop: spacing.lg, marginBottom: spacing.xs },
  row: { paddingVertical: spacing.md, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.borderStrong },
  term: { fontFamily: fonts.serif, fontSize: 16, fontWeight: '700', color: brand.navy, marginBottom: 2 },
});
