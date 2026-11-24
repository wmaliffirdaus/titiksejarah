import type { SourceRef, SpmCategory, SpmItem } from '../types/content';

/**
 * SPM practice items (Kertas 2 struktur, Kertas 2 esei, KBAT).
 * Kertas 1 (objektif) reuses the question bank via the `spm-k1` quiz key.
 *
 * IMPORTANT: these are SAMPLE practice items written by Titik Sejarah to show the format.
 * They are NOT past-year SPM questions. Suggested answer points come from the Titik Sejarah notes.
 * Replace / extend with verified practice material (e.g. the Bank Soalan SPM set) when ready.
 */
const sampleT4: SourceRef = {
  status: 'contoh',
  label: 'Soalan contoh Titik Sejarah (bukan soalan SPM sebenar) · skema daripada Nota T4 Bab 1',
};
const sampleT5: SourceRef = {
  status: 'contoh',
  label: 'Soalan contoh Titik Sejarah (bukan soalan SPM sebenar) · skema daripada Nota T5 Bab 1',
};

export const spmCategories: {
  id: SpmCategory;
  title: string;
  short: string;
  description: string;
  icon: 'list' | 'create' | 'document-text' | 'bulb';
}[] = [
  { id: 'k1', title: 'Kertas 1', short: 'Objektif', description: 'Soalan aneka pilihan dengan maklum balas segera.', icon: 'list' },
  { id: 'k2-struktur', title: 'Kertas 2', short: 'Struktur', description: 'Soalan berpandukan sumber dengan jawapan ringkas.', icon: 'create' },
  { id: 'k2-esei', title: 'Kertas 2', short: 'Esei', description: 'Soalan huraian panjang dengan skema cadangan.', icon: 'document-text' },
  { id: 'kbat', title: 'KBAT', short: 'Aras Tinggi', description: 'Soalan pendapat dan kaitan dengan masa kini.', icon: 'bulb' },
];

export const spmItems: SpmItem[] = [
  {
    id: 'spm-s-t4b1-01',
    category: 'k2-struktur',
    form: 4,
    chapterId: 't4-b1',
    title: 'Ciri-ciri negara bangsa Kesultanan Melayu Melaka',
    stimulus:
      'Kesultanan Melayu Melaka mempunyai sistem pentadbiran, peraturan, masyarakat yang tersusun dan corak politik tersendiri.',
    source: sampleT4,
    parts: [
      {
        label: '(a)',
        question: 'Nyatakan dua ciri negara bangsa Kesultanan Melayu Melaka.',
        marks: 2,
        points: ['Kerajaan', 'Rakyat', 'Kedaulatan', 'Wilayah pengaruh', 'Undang-undang', 'Lambang kebesaran'],
      },
      {
        label: '(b)',
        question: 'Berikan dua contoh lambang kebesaran Kesultanan Melayu Melaka.',
        marks: 2,
        points: ['Adat istiadat', 'Penggunaan warna', 'Nobat', 'Regalia', 'Cap mohor'],
      },
      {
        label: '(c)',
        question: 'Bagaimanakah Melaka memperoleh wilayah pengaruh?',
        marks: 3,
        points: [
          'Penaklukan melalui peperangan — contoh Pahang, Kampar',
          'Naungan melalui perkahwinan atau persahabatan — contoh Lingga, Patani, Kedah',
          'Perkahwinan diraja — Siantan dihadiahkan Majapahit kepada Sultan Mansur Shah',
        ],
      },
    ],
  },
  {
    id: 'spm-s-t5b1-01',
    category: 'k2-struktur',
    form: 5,
    chapterId: 't5-b1',
    title: 'Konsep kedaulatan',
    stimulus: 'Kedaulatan negara kita diperkukuh oleh kemerdekaan pada 31 Ogos 1957 dan pembentukan Malaysia pada 16 September 1963.',
    source: sampleT5,
    parts: [
      {
        label: '(a)',
        question: 'Apakah maksud kedaulatan?',
        marks: 2,
        points: ['Kekuasaan tertinggi dan kewibawaan sesebuah negara yang bebas', 'Mempunyai hak melaksanakan pemerintahan dan pentadbiran negara'],
      },
      {
        label: '(b)',
        question: 'Nyatakan dua ciri negara yang berdaulat.',
        marks: 2,
        points: ['Mempunyai pemerintahan', 'Mempunyai sempadan', 'Mempunyai perundangan', 'Mempunyai rakyat'],
      },
      {
        label: '(c)',
        question: 'Jelaskan kedaulatan antarabangsa dengan satu contoh.',
        marks: 2,
        points: [
          'Pengiktirafan PBB terhadap negara yang tidak boleh dicabuli negara lain',
          'Persekutuan Tanah Melayu menjadi anggota PBB ke-82 pada 17 September 1957',
        ],
      },
    ],
  },
  {
    id: 'spm-e-t4b1-01',
    category: 'k2-esei',
    form: 4,
    chapterId: 't4-b1',
    title: 'Keunggulan sistem pentadbiran Kesultanan Melayu Melaka',
    source: sampleT4,
    parts: [
      {
        label: '(a)',
        question: 'Huraikan peranan Pembesar Berempat dalam pentadbiran Kesultanan Melayu Melaka.',
        marks: 8,
        points: [
          'Bendahara — ketua pentadbir dan ketua turus angkatan tentera',
          'Bendahara — menasihati sultan dan menjadi pemangku sultan',
          'Penghulu Bendahari — menguruskan perbendaharaan kerajaan',
          'Temenggung — menjaga keselamatan kota Melaka (darat)',
          'Laksamana — panglima angkatan laut',
          'Dibantu Syahbandar yang mengutip cukai di pelabuhan',
        ],
      },
      {
        label: '(b)',
        question: 'Mengapakah sistem pentadbiran yang tersusun penting kepada kegemilangan Melaka?',
        marks: 4,
        points: [
          'Menjamin pemerintahan yang lancar dan cekap',
          'Permuafakatan sultan–pembesar mengelakkan tindakan sewenang-wenangnya',
          'Kebijaksanaan mengurus perbendaharaan menjadikan Melaka maju dan makmur',
          'Sistem keselamatan darat dan laut menjadi teras kemasyhuran',
        ],
      },
    ],
  },
  {
    id: 'spm-e-t5b1-01',
    category: 'k2-esei',
    form: 5,
    chapterId: 't5-b1',
    title: 'Langkah mempertahankan kedaulatan',
    source: sampleT5,
    parts: [
      {
        label: '(a)',
        question: 'Huraikan langkah-langkah pemerintah untuk mempertahankan kedaulatan negara.',
        marks: 8,
        points: [
          'Pentadbiran yang cekap dan mengelakkan rasuah',
          'Agihan kekayaan secara adil melalui dasar ekonomi',
          'Menggubal dasar perpaduan; dasar bahasa, pendidikan dan kebudayaan',
          'Sambutan Hari Kebangsaan dan Hari Pahlawan',
          'Mewajibkan Sejarah sebagai mata pelajaran teras',
          'Perjanjian pertahanan dan latihan ketenteraan bersama',
          'Memodenkan aset ketenteraan',
        ],
      },
      {
        label: '(b)',
        question: 'Sebagai pelajar, bagaimanakah anda boleh menyumbang kepada kedaulatan negara?',
        marks: 4,
        points: [
          'Menggunakan bahasa kebangsaan dan menghayati Rukun Negara',
          'Menghormati agama dan budaya kaum lain',
          'Menghormati Jalur Gemilang, Jata Negara dan Negaraku',
          'Melakar kejayaan dalam pendidikan dan sukan',
        ],
      },
    ],
  },
  {
    id: 'spm-k-t4b1-01',
    category: 'kbat',
    form: 4,
    chapterId: 't4-b1',
    title: 'Pematuhan undang-undang',
    stimulus: 'Hukum Kanun Melaka dan Undang-Undang Laut Melaka diperkenalkan untuk menjamin kemakmuran dan kesejahteraan Melaka.',
    source: sampleT4,
    parts: [
      {
        label: '',
        question: 'Pada pendapat anda, mengapakah rakyat perlu mematuhi undang-undang negara pada hari ini? Berikan alasan anda.',
        marks: 4,
        points: [
          'Mewujudkan keharmonian dan kesejahteraan masyarakat',
          'Menjamin keselamatan dan keamanan negara',
          'Melahirkan rakyat berdisiplin dan bertanggungjawab',
          'Selaras dengan prinsip Kedaulatan Undang-undang dalam Rukun Negara',
          'Terima jawapan munasabah lain yang berkaitan',
        ],
      },
    ],
  },
  {
    id: 'spm-k-t5b1-01',
    category: 'kbat',
    form: 5,
    chapterId: 't5-b1',
    title: 'Perpaduan dan kedaulatan',
    stimulus: '"Kedaulatan negara bergantung pada warganya yang bersatu." — titah Sultan Nazrin Muizzuddin Shah, Sultan Perak',
    source: sampleT5,
    parts: [
      {
        label: '',
        question: 'Berdasarkan petikan, jelaskan cara generasi muda boleh mengukuhkan perpaduan demi kedaulatan negara.',
        marks: 4,
        points: [
          'Menghormati kepelbagaian budaya dan agama',
          'Bertoleransi dan saling menghormati',
          'Menyertai program kemasyarakatan',
          'Menggunakan bahasa kebangsaan sebagai bahasa perpaduan',
          'Terima jawapan munasabah lain yang berkaitan',
        ],
      },
    ],
  },
];

export function getSpmItem(id: string): SpmItem | undefined {
  return spmItems.find((i) => i.id === id);
}

export function spmItemsFor(category: SpmCategory): SpmItem[] {
  return spmItems.filter((i) => i.category === category);
}
