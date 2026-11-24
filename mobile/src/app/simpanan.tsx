import { useState } from 'react';
import type React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { brand, colors, spacing, type } from '../constants/theme';
import { Screen, StackHeader } from '../components/layout';
import { Badge, Button, Card, EmptyState, IconButton, Segmented, Touchable } from '../components/ui';
import { useApp } from '../store/AppProvider';
import { getChapter, getSubtopic } from '../data/syllabus';
import { getQuestion } from '../data/quiz';
import { getSpmItem } from '../data/spm';
import { relativeTime } from '../utils/date';
import type { Bookmark, BookmarkType } from '../types/state';

export default function BookmarksScreen() {
  const { state, dispatch } = useApp();
  const [tab, setTab] = useState<BookmarkType>('nota');
  const [open, setOpen] = useState<string | null>(null);
  const list = state.bookmarks.filter((b) => b.type === tab);
  const counts = {
    nota: state.bookmarks.filter((b) => b.type === 'nota').length,
    soalan: state.bookmarks.filter((b) => b.type === 'soalan').length,
    topik: state.bookmarks.filter((b) => b.type === 'topik').length,
  };
  const bankQuestionCount = state.bookmarks.filter((b) => b.type === 'soalan' && getQuestion(b.refId)).length;
  const remove = (b: Bookmark) => dispatch({ type: 'removeBookmark', bookmarkType: b.type, refId: b.refId });

  return (
    <Screen header={<StackHeader title="Simpanan" subtitle="Bahan ulang kaji anda" />}>
      <Segmented
        value={tab}
        onChange={(v) => {
          setTab(v);
          setOpen(null);
        }}
        options={[
          { value: 'nota', label: `Nota (${counts.nota})` },
          { value: 'soalan', label: `Soalan (${counts.soalan})` },
          { value: 'topik', label: `Topik (${counts.topik})` },
        ]}
        style={{ marginBottom: spacing.lg }}
      />

      {tab === 'soalan' && bankQuestionCount > 0 ? (
        <Button label={`Latih ${bankQuestionCount} soalan objektif disimpan`} icon="play" onPress={() => router.push('/kuiz/simpanan')} style={{ marginBottom: spacing.lg }} />
      ) : null}

      {list.length === 0 ? (
        <EmptyState
          icon="bookmark-outline"
          title="Belum ada simpanan"
          message={
            tab === 'nota'
              ? 'Tekan ikon penanda semasa membaca nota untuk menyimpannya di sini.'
              : tab === 'soalan'
                ? 'Simpan soalan semasa kuiz atau latihan SPM untuk diulang kaji kemudian.'
                : 'Simpan bab yang ingin anda ulang kaji daripada halaman bab.'
          }
          action={tab === 'soalan' ? 'Ke Latihan' : 'Ke Nota'}
          onAction={() => router.push(tab === 'soalan' ? '/latihan' : '/nota')}
        />
      ) : (
        <View style={{ gap: spacing.md }}>
          {list.map((b) => {
            const key = `${b.type}-${b.refId}`;
            if (b.type === 'nota') {
              const hit = getSubtopic(b.refId);
              if (!hit) return null;
              return (
                <Row
                  key={key}
                  eyebrow={`Tingkatan ${hit.chapter.form}, bab ${hit.chapter.number}, subtopik ${hit.subtopic.code}`}
                  title={hit.subtopic.title}
                  meta={`Disimpan ${relativeTime(b.createdAt)}`}
                  icon="document-text-outline"
                  onPress={() => router.push(`/baca/${b.refId}`)}
                  onRemove={() => remove(b)}
                />
              );
            }
            if (b.type === 'topik') {
              const ch = getChapter(b.refId);
              if (!ch) return null;
              return (
                <Row
                  key={key}
                  eyebrow={`Tingkatan ${ch.form}, bab ${ch.number}`}
                  title={ch.title}
                  meta={`Disimpan ${relativeTime(b.createdAt)}`}
                  icon="albums-outline"
                  onPress={() => router.push(`/bab/${ch.id}`)}
                  onRemove={() => remove(b)}
                />
              );
            }
            const spm = getSpmItem(b.refId);
            if (spm) {
              return (
                <Row
                  key={key}
                  eyebrow={`Latihan SPM, ${spm.paper ?? `Tingkatan ${spm.form}`}`}
                  title={spm.title}
                  meta={`Disimpan ${relativeTime(b.createdAt)}`}
                  icon="school-outline"
                  onPress={() => router.push(`/spm/soalan/${spm.id}`)}
                  onRemove={() => remove(b)}
                />
              );
            }
            const q = getQuestion(b.refId);
            if (!q) return null;
            const expanded = open === key;
            return (
              <Card key={key} style={{ gap: spacing.sm }}>
                <View style={styles.qHead}>
                  <Badge label={`Tingkatan ${q.form}, bab ${getChapter(q.chapterId)?.number ?? ''}`} tone="muted" />
                  {q.kbat ? <Badge label="KBAT" tone="red" /> : null}
                  <View style={{ flex: 1 }} />
                  <IconButton icon="trash-outline" label="Buang daripada simpanan" color={brand.red} onPress={() => remove(b)} size={18} />
                </View>
                <Touchable onPress={() => setOpen(expanded ? null : key)} style={{ gap: spacing.sm }} accessibilityLabel={expanded ? 'Sembunyi jawapan' : 'Lihat jawapan'}>
                <Text style={type.subheading}>{q.prompt}</Text>
                {expanded ? (
                  <View style={styles.answer}>
                    <Text style={[type.small, { color: brand.navy, fontWeight: '700' }]}>Jawapan: {q.options[q.answer]}</Text>
                    <Text style={type.small}>{q.explanation}</Text>
                  </View>
                ) : (
                  <Text style={[type.small, { color: brand.red, fontWeight: '600' }]}>Ketik untuk melihat jawapan</Text>
                )}
                </Touchable>
              </Card>
            );
          })}
        </View>
      )}
    </Screen>
  );
}

function Row({
  eyebrow,
  title,
  meta,
  icon,
  onPress,
  onRemove,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  onPress: () => void;
  onRemove: () => void;
}) {
  return (
    <Card style={styles.row}>
      <Touchable onPress={onPress} style={styles.rowMain} accessibilityLabel={title}>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={type.caption}>{eyebrow}</Text>
          <Text style={type.subheading} numberOfLines={2}>
            {title}
          </Text>
          <Text style={[type.small, { fontSize: 12 }]}>{meta}</Text>
        </View>
      </Touchable>
      <IconButton icon="trash-outline" label="Buang daripada simpanan" color={brand.red} onPress={onRemove} size={18} />
    </Card>
  );
}

const styles = StyleSheet.create({
  qHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  answer: { gap: 4, backgroundColor: brand.white, borderLeftWidth: 3, borderLeftColor: brand.gold, padding: spacing.md, borderRadius: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.md },
  rowMain: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  rowIcon: { width: 42, height: 42, borderRadius: 12, backgroundColor: colors.goldSoft, alignItems: 'center', justifyContent: 'center' },
});
