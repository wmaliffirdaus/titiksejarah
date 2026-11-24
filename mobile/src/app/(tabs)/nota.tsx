import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, radius, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { Card, EmptyState, IconButton, Segmented } from '../../components/ui';
import { ChapterCard } from '../../components/ChapterCard';
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
    <Screen>
      <PageTitle
        eyebrow="Sejarah KSSM"
        title="Nota"
        subtitle="Nota ringkas mengikut bab dan subtopik"
        right={<IconButton icon="bookmark-outline" label="Simpanan" onPress={() => router.push('/simpanan')} />}
      />

      <View style={styles.search}>
        <Ionicons name="search" size={18} color={colors.textSubtle} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Cari bab, topik atau istilah…"
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

      {searching ? (
        <View style={{ gap: spacing.md }}>
          <Text style={type.caption}>{results.length} HASIL CARIAN</Text>
          {results.length === 0 ? (
            <EmptyState icon="search-outline" title="Tiada hasil" message="Cuba kata kunci lain, contohnya “Bendahara” atau “kedaulatan”." />
          ) : (
            results.map((r, i) => (
              <Card
                key={`${r.chapter.id}-${r.subtopic?.id ?? 'bab'}-${i}`}
                onPress={() => router.push(r.subtopic ? `/baca/${r.subtopic.id}` : `/bab/${r.chapter.id}`)}
                style={{ padding: spacing.md }}
              >
                <Text style={type.caption}>
                  T{r.chapter.form} · BAB {r.chapter.number}
                  {r.subtopic ? ` · ${r.subtopic.code}` : ''}
                </Text>
                <Text style={[type.subheading, { marginTop: 4 }]}>{r.subtopic ? r.subtopic.title : r.chapter.title}</Text>
                <Text style={[type.small, { marginTop: 4 }]} numberOfLines={2}>
                  {r.snippet}
                </Text>
              </Card>
            ))
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
            {list.length} bab · {Math.round(p * 100)}% diulang kaji
          </Text>
          <View style={{ gap: spacing.md }}>
            {list.map((c) => (
              <ChapterCard key={c.id} chapter={c} />
            ))}
          </View>
          <Text style={styles.footer}>
            Tajuk bab mengikut susunan Buku Teks Sejarah KSSM. Nota bab lain akan ditambah secara berperingkat.
          </Text>
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
    height: 50,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    marginBottom: spacing.lg,
  },
  searchInput: { flex: 1, fontSize: 15, color: brand.navy, height: '100%' },
  formMeta: { marginTop: spacing.md, marginBottom: spacing.md },
  footer: { ...type.small, fontSize: 12, textAlign: 'center', marginTop: spacing.xl, paddingHorizontal: spacing.lg },
});
