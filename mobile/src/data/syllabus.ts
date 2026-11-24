import type { Chapter, Form } from '../types/content';

/**
 * KSSM Sejarah chapter registry.
 *
 * Chapter titles: taken from the Titik Sejarah revision-note set (Nota / Peta Minda T4 & T5),
 * which follows the KSSM textbook chapter order.
 * Subtopics: only filled in where they were read from the notes. Chapters with an empty
 * list show "Nota akan ditambah" in the app — add the subtopics here when the notes are ready.
 *
 * To add a chapter's content:
 *   1. Fill `subtopics` below.
 *   2. Add a notes file in src/data/notes/ and register it in src/data/notes/index.ts.
 *   3. Add a question file in src/data/quiz/ and register it in src/data/quiz/index.ts.
 */

const NOTA_T4 = 'Nota Titik Sejarah T4 (rujukan: Buku Teks Sejarah Tingkatan 4 KSSM)';
const NOTA_T5 = 'Nota Titik Sejarah T5 (rujukan: Buku Teks Sejarah Tingkatan 5 KSSM)';

export const chapters: Chapter[] = [
  // ───────────── Tingkatan 4 ─────────────
  {
    id: 't4-b1',
    form: 4,
    number: 1,
    title: 'Warisan Negara Bangsa',
    intro:
      'Asas negara bangsa di negara kita telah wujud sebelum kedatangan kuasa Barat. Ciri-cirinya bermula dengan kerajaan awal Alam Melayu seperti Funan dan Champa, diwarisi Srivijaya, kemudian Kesultanan Melayu Melaka dan diteruskan oleh Kesultanan Johor-Riau.',
    subtopics: [
      { id: 't4-b1-1', code: '1.1', title: 'Latar Belakang Negara Bangsa Sebelum Kedatangan Barat' },
      { id: 't4-b1-2', code: '1.2', title: 'Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka' },
      { id: 't4-b1-3', code: '1.3', title: 'Keunggulan Sistem Pentadbiran dan Undang-undang' },
      { id: 't4-b1-4', code: '1.4', title: 'Peranan Pemerintah dan Rakyat' },
    ],
    outlineSource: NOTA_T4,
  },
  { id: 't4-b2', form: 4, number: 2, title: 'Kebangkitan Nasionalisme', subtopics: [], outlineSource: NOTA_T4 },
  {
    id: 't4-b3',
    form: 4,
    number: 3,
    title: 'Konflik Dunia dan Pendudukan Jepun di Negara Kita',
    subtopics: [
      { id: 't4-b3-1', code: '3.1', title: 'Nasionalisme sebelum Perang Dunia' },
      { id: 't4-b3-2', code: '3.2', title: 'Latar Belakang Perang Dunia' },
      { id: 't4-b3-3', code: '3.3', title: 'Perang Dunia Kedua' },
      { id: 't4-b3-4', code: '3.4', title: 'Perang Dunia Kedua di Asia Pasifik' },
      { id: 't4-b3-5', code: '3.5', title: 'Faktor Kedatangan Jepun' },
      { id: 't4-b3-6', code: '3.6', title: 'Dasar Pendudukan Jepun' },
      { id: 't4-b3-7', code: '3.7', title: 'Perjuangan Rakyat Menentang Jepun' },
      { id: 't4-b3-8', code: '3.8', title: 'Nasionalisme Tempatan dan Pendudukan Jepun' },
      { id: 't4-b3-9', code: '3.9', title: 'Keadaan selepas Kekalahan Jepun' },
    ],
    // Subtopic titles as listed in the Titik Sejarah Bab 3 notes (short form); confirm against the textbook.
    outlineSource: NOTA_T4,
  },
  { id: 't4-b4', form: 4, number: 4, title: 'Era Peralihan Kuasa British di Negara Kita', subtopics: [], outlineSource: NOTA_T4 },
  { id: 't4-b5', form: 4, number: 5, title: 'Persekutuan Tanah Melayu 1948', subtopics: [], outlineSource: NOTA_T4 },
  { id: 't4-b6', form: 4, number: 6, title: 'Ancaman Komunis dan Perisytiharan Darurat', subtopics: [], outlineSource: NOTA_T4 },
  { id: 't4-b7', form: 4, number: 7, title: 'Usaha ke Arah Kemerdekaan', subtopics: [], outlineSource: NOTA_T4 },
  { id: 't4-b8', form: 4, number: 8, title: 'Pilihan Raya', subtopics: [], outlineSource: NOTA_T4 },
  { id: 't4-b9', form: 4, number: 9, title: 'Perlembagaan Persekutuan Tanah Melayu 1957', subtopics: [], outlineSource: NOTA_T4 },
  { id: 't4-b10', form: 4, number: 10, title: 'Pemasyhuran Kemerdekaan', subtopics: [], outlineSource: NOTA_T4 },

  // ───────────── Tingkatan 5 ─────────────
  {
    id: 't5-b1',
    form: 5,
    number: 1,
    title: 'Kedaulatan Negara',
    intro:
      'Kedaulatan ialah konsep kenegaraan yang diamalkan sejak zaman tamadun Yunani dan tafsirannya berubah mengikut zaman. Negara berdaulat mempunyai ciri tertentu, dan pemerintah serta rakyat bertanggungjawab mempertahankannya.',
    subtopics: [
      { id: 't5-b1-1', code: '1.1', title: 'Konsep Kedaulatan' },
      { id: 't5-b1-2', code: '1.2', title: 'Ciri Negara yang Berdaulat' },
      { id: 't5-b1-3', code: '1.3', title: 'Kepentingan Mewujudkan Negara Berdaulat' },
      { id: 't5-b1-4', code: '1.4', title: 'Langkah Mempertahankan Kedaulatan' },
    ],
    outlineSource: NOTA_T5,
  },
  { id: 't5-b2', form: 5, number: 2, title: 'Perlembagaan Persekutuan', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b3', form: 5, number: 3, title: 'Raja Berperlembagaan dan Demokrasi Berparlimen', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b4', form: 5, number: 4, title: 'Sistem Persekutuan', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b5', form: 5, number: 5, title: 'Pembentukan Malaysia', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b6', form: 5, number: 6, title: 'Cabaran Selepas Pembentukan Malaysia', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b7', form: 5, number: 7, title: 'Membina Kesejahteraan Negara', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b8', form: 5, number: 8, title: 'Membina Kemakmuran Negara', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b9', form: 5, number: 9, title: 'Dasar Luar Malaysia', subtopics: [], outlineSource: NOTA_T5 },
  { id: 't5-b10', form: 5, number: 10, title: 'Kecemerlangan Malaysia di Persada Dunia', subtopics: [], outlineSource: NOTA_T5 },
];

const byId = new Map(chapters.map((c) => [c.id, c]));
const subtopicIndex = new Map<string, { chapter: Chapter; index: number }>();
for (const c of chapters) c.subtopics.forEach((s, index) => subtopicIndex.set(s.id, { chapter: c, index }));

export const forms: { form: Form; label: string; short: string; tagline: string }[] = [
  { form: 4, label: 'Tingkatan 4', short: 'T4', tagline: 'Warisan negara bangsa hingga kemerdekaan' },
  { form: 5, label: 'Tingkatan 5', short: 'T5', tagline: 'Kedaulatan, perlembagaan & Malaysia moden' },
];

export function getChapter(id: string): Chapter | undefined {
  return byId.get(id);
}

export function getChaptersByForm(form: Form): Chapter[] {
  return chapters.filter((c) => c.form === form);
}

export function getSubtopic(id: string) {
  const hit = subtopicIndex.get(id);
  if (!hit) return undefined;
  const { chapter, index } = hit;
  return {
    chapter,
    subtopic: chapter.subtopics[index],
    prev: chapter.subtopics[index - 1],
    next: chapter.subtopics[index + 1],
  };
}

export function chapterLabel(c: Chapter): string {
  return `T${c.form} · Bab ${c.number}`;
}
