import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, radius, shadow, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { EmptyState, List, ListRow, QuickTile, Segmented } from '../../components/ui';
import { ChapterRow } from '../../components/ChapterCard';
import { useApp } from '../../store/AppProvider';
import { formProgress } from '../../store/selectors';
import { getChaptersByForm } from '../../data/syllabus';
import { searchContent } from '../../utils/search';
import type { Form } from '../../types/content';

export default function NotesScreen() {
  const { state } = useApp();
  const params = useLocalSearchParams<{ t?: string }>();
  const [form, setForm] = useState<Form>(state.profile.form);
  const [query, setQuery] = useState('');

  // Deep link from the home screen: /nota?t=5
  useEffect(() => {
    if (params.t === '4' || params.t === '5') setForm(Number(params.t) as Form);
  }, [params.t]);

  const list = getChaptersByForm(form);
  const results = useMemo(() => searchContent(query), [query]);
  const searching = query.trim().length >= 2;
  const p = formProgress(state, form);

  return (
    <Screen tabbed>
      <PageTitle
        eyebrow="Sejarah KSSM"
        title="Nota"
        subtitle="Nota ringkas mengikut susunan buku teks"
      />

      <View style={styles.search}>
        <Ionicons name="search" size={18} color={colors.textSubtle} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Cari bab, topik atau istilah"
          placeholderTextColor={colors.textSubtle}
          style={styles.searchInput}
          returnKeyType="search"
          accessibilityLabel="Cari nota"
        />
        {query ? (
          <Pressable onPress={() => setQuery('')} hitSlop={10} accessibilityLabel="Kosongkan carian">
            <Ionicons name="close-circle" size={18} color={colors.textSubtle} />
          </Pressable>
        ) : null}
      </View>

      {!searching ? (
        <View style={styles.tools}>
          <QuickTile icon="git-commit" tone="solid" label="Garis masa" onPress={() => router.push('/garis-masa')} />
          <QuickTile icon="text" tone="gold" label="Glosari" onPress={() => router.push('/glosari')} />
          <QuickTile icon="albums" tone="red" label="Kad imbas" onPress={() => router.push('/kad')} />
          <QuickTile icon="bookmark" tone="navy" label="Simpanan" onPress={() => router.push('/simpanan')} />
        </View>
      ) : null}

      {searching ? (
        <View style={{ gap: spacing.md }}>
          <Text style={type.caption}>{results.length} hasil</Text>
          {results.length === 0 ? (
            <EmptyState title="Tiada hasil" message="Cuba kata kunci lain, contohnya Bendahara atau kedaulatan." />
          ) : (
            <List>
              {results.map((r, i) => (
                <ListRow
                  key={`${r.chapter.id}-${r.subtopic?.id ?? 'bab'}-${i}`}
                  lead={r.subtopic ? r.subtopic.code : String(r.chapter.number)}
                  title={r.subtopic ? r.subtopic.title : r.chapter.title}
                  subtitle={`Tingkatan ${r.chapter.form}, Bab ${r.chapter.number}. ${r.snippet}`}
                  onPress={() => router.push(r.subtopic ? `/baca/${r.subtopic.id}` : `/bab/${r.chapter.id}`)}
                />
              ))}
            </List>
          )}
        </View>
      ) : (
        <>
          <Segmented
            value={form}
            onChange={setForm}
            options={[
              { value: 4, label: 'Tingkatan 4' },
              { value: 5, label: 'Tingkatan 5' },
            ]}
          />
          <Text style={[type.small, styles.formMeta]}>
            {list.length} bab, {Math.round(p * 100)}% sudah diulang kaji
          </Text>
          <List>
            {list.map((c) => (
              <ChapterRow key={c.id} chapter={c} />
            ))}
          </List>
          <Text style={styles.footer}>Susunan bab mengikut Buku Teks Sejarah KSSM. Sentiasa rujuk buku teks dan guru anda.</Text>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    height: 52,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    backgroundColor: brand.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cardEdge,
    marginBottom: spacing.xl,
    ...shadow.soft,
  },
  tools: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xxl },
  searchInput: { flex: 1, fontSize: 15, color: brand.navy, height: '100%' },
  formMeta: { marginTop: spacing.md, marginBottom: spacing.md },
  footer: { ...type.small, fontSize: 12, textAlign: 'center', marginTop: spacing.xl, paddingHorizontal: spacing.lg },
});
