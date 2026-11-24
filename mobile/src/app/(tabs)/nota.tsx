import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, radius, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { Chip, EmptyState, IconButton, List, ListRow, Segmented } from '../../components/ui';
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
    <Screen>
      <PageTitle
        eyebrow="Sejarah KSSM"
        title="Nota"
        subtitle="Nota ringkas mengikut susunan buku teks"
        right={<IconButton icon="bookmark-outline" label="Simpanan" onPress={() => router.push('/simpanan')} />}
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
          <Chip label="Garis masa" icon="git-commit-outline" onPress={() => router.push('/garis-masa')} />
          <Chip label="Glosari" icon="text-outline" onPress={() => router.push('/glosari')} />
          <Chip label="Kad imbas" icon="albums-outline" onPress={() => router.push('/kad')} />
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
    height: 50,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderStrong,
    marginBottom: spacing.md,
  },
  tools: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg, flexWrap: 'wrap' },
  searchInput: { flex: 1, fontSize: 15, color: brand.navy, height: '100%' },
  formMeta: { marginTop: spacing.md, marginBottom: spacing.md },
  footer: { ...type.small, fontSize: 12, textAlign: 'center', marginTop: spacing.xl, paddingHorizontal: spacing.lg },
});
