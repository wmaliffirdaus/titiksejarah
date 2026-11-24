import type { SourceRef, SubtopicNote } from '../../types/content';

/**
 * Tingkatan 5 · Bab 1: Kedaulatan Negara
 * Source: "Nota T5 – Bab 01 – Kedaulatan Negara" (Titik Sejarah revision notes),
 * which summarise Buku Teks Sejarah Tingkatan 5 KSSM (KPM/DBP, 2020).
 * Content below is transcribed from those notes — do not add facts that are not in the notes.
 */
const source: SourceRef = {
  status: 'nota',
  label: 'Nota Titik Sejarah T5 Bab 1 · rujukan Buku Teks Sejarah Tingkatan 5 KSSM (KPM/DBP, 2020)',
};

export const t5Bab1Notes: SubtopicNote[] = [
  {
    subtopicId: 't5-b1-1',
    source,
    summary: 'Takrif kedaulatan dalam empat bahasa, pandangan lima tokoh dan empat jenis kedaulatan.',
    keywords: ['kedaulatan', 'daulat', 'daulah', 'sovereignty', 'supernuus', 'Aristotle', 'Ibnu Khaldun', 'Jean Bodin', 'PBB', 'anggota ke-82'],
    blocks: [
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Kedaulatan',
        text: 'Kekuasaan tertinggi dan kewibawaan sesebuah negara yang bebas serta mempunyai hak untuk melaksanakan pemerintahan dan pentadbiran negara.',
      },
      {
        type: 'para',
        text: 'Kedaulatan negara kita jelas sejak zaman **Kesultanan Melayu Melaka**, dan diperkukuh oleh kemerdekaan (**31 Ogos 1957**) dan pembentukan Malaysia (**16 September 1963**).',
      },
      { type: 'heading', text: 'Takrif mengikut bahasa' },
      {
        type: 'table',
        columns: ['Bahasa', 'Takrif'],
        rows: [
          ['Yunani', 'Supernuus / superanus: agung atau tertinggi'],
          ['Inggeris', 'Sovereignty: kuasa penuh terhadap pemerintahan'],
          ['Arab', 'Daulah: kuasa pemerintahan sesebuah kerajaan'],
          ['Melayu', 'Daulat: kekuasaan tertinggi terhadap pemerintahan negara'],
        ],
      },
      { type: 'heading', text: 'Pandangan tokoh' },
      {
        type: 'table',
        columns: ['Tokoh', 'Pandangan'],
        rows: [
          ['Aristotle', 'Kuasa tertinggi; kerajaan terikat oleh undang-undang'],
          ['Ibnu Khaldun', 'Kekuatan negara berasaskan semangat kekitaan bangsa'],
          ['Jean Bodin', 'Kuasa tertinggi yang kekal dan tidak terbatas untuk membuat, mentafsir dan melaksanakan undang-undang'],
          ['Tunku Abdul Rahman', 'Berdasarkan prinsip kebebasan dan keadilan demi kesejahteraan rakyat'],
          ['Tun Dr. Mohamed Salleh Abas', 'Hak mengatur urusan dalam negeri tanpa telunjuk asing'],
        ],
      },
      { type: 'heading', text: 'Jenis kedaulatan' },
      {
        type: 'list',
        items: [
          '**Tradisional** — berpaksi pada kedaulatan Raja-raja Melayu; diperkukuh taat setia rakyat.',
          '**Moden** — negara bangsa dengan hak rakyat dan kerajaan berperlembagaan (Persekutuan Tanah Melayu 1957, Malaysia 1963).',
          '**Undang-undang** — kerajaan dan rakyat terikat oleh undang-undang; prinsip keempat Rukun Negara.',
          '**Antarabangsa** — pengiktirafan PBB; Persekutuan Tanah Melayu menjadi anggota PBB ke-82 pada **17 September 1957**.',
        ],
      },
      {
        type: 'callout',
        variant: 'ingat',
        text: '**Daulah** (Arab) = kuasa pemerintahan kerajaan; **daulat** (Melayu) = kekuasaan tertinggi.',
      },
    ],
  },
  {
    subtopicId: 't5-b1-2',
    source,
    summary: 'Empat ciri negara berdaulat: pemerintahan, sempadan, perundangan dan rakyat.',
    keywords: ['ciri negara berdaulat', 'sempadan', 'Raja Berperlembagaan', 'Demokrasi Berparlimen', 'Yang di-Pertuan Agong', 'Perdana Menteri'],
    blocks: [
      {
        type: 'table',
        columns: ['Ciri', 'Huraian'],
        rows: [
          ['Pemerintahan', 'Menjaga kestabilan politik, keamanan, pertahanan dan ekonomi. Malaysia mengamalkan Raja Berperlembagaan dan Demokrasi Berparlimen.'],
          ['Sempadan', 'Garis pemisah antara negeri atau negara; Malaysia berkongsi sempadan dengan Singapura, Thailand, Indonesia, Brunei dan Filipina.'],
          ['Perundangan', 'Berpandukan Perlembagaan Persekutuan; Parlimen menggubal undang-undang.'],
          ['Rakyat', 'Penduduk berbilang kaum yang terikat kepada undang-undang dan disatukan melalui bahasa, kebudayaan dan Rukun Negara.'],
        ],
      },
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Raja Berperlembagaan',
        text: 'Pemerintahan beraja mengikut peruntukan Perlembagaan Persekutuan. Tiga institusi: Yang di-Pertuan Agong, Institusi Beraja (negeri) dan Majlis Raja-Raja.',
      },
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Demokrasi Berparlimen',
        text: 'Demokrasi yang dijalankan secara perwakilan melalui proses pilihan raya.',
      },
      {
        type: 'callout',
        variant: 'ingat',
        text: 'Ketua Utama Negara = **Yang di-Pertuan Agong**; Ketua Kerajaan = **Perdana Menteri**.',
      },
    ],
  },
  {
    subtopicId: 't5-b1-3',
    source,
    summary: 'Kepentingan negara berdaulat: pentadbiran berkesan, kemakmuran ekonomi, kesejahteraan sosial, hubungan luar.',
    keywords: ['kepentingan kedaulatan', 'Jemaah Menteri', 'Tun Abdul Razak', 'Tun Hussein Onn', 'Sukan Olimpik 1972', 'Anwar Sadat'],
    blocks: [
      {
        type: 'table',
        columns: ['Kepentingan', 'Contoh'],
        rows: [
          ['Keberkesanan pentadbiran', 'Dasar dilaksanakan melalui Jemaah Menteri; Mesyuarat Jemaah Menteri (1990) dipengerusikan Tun Dr. Mahathir'],
          ['Kemakmuran ekonomi', 'Tun Abdul Razak memantau program pertanian luar bandar'],
          ['Kesejahteraan sosial', 'Pasukan bola sepak berbilang kaum layak ke Sukan Olimpik 1972'],
          ['Kecemerlangan hubungan luar', 'Tun Hussein Onn bertemu Presiden Mesir, Anwar Sadat (1977)'],
        ],
      },
      {
        type: 'para',
        text: 'Hasilnya, Malaysia diiktiraf **setaraf dengan negara lain**.',
      },
    ],
  },
  {
    subtopicId: 't5-b1-4',
    source,
    summary: 'Empat langkah mempertahankan kedaulatan melalui kerjasama pemerintah dan rakyat.',
    keywords: ['mempertahankan kedaulatan', 'patriotisme', 'perpaduan', 'pertahanan', 'Hari Pahlawan', 'Jalur Gemilang'],
    blocks: [
      {
        type: 'table',
        columns: ['Langkah', 'Pemerintah', 'Rakyat'],
        rows: [
          ['Kestabilan politik & ekonomi', 'Pentadbiran cekap, elak rasuah, agihan kekayaan adil', 'Setia kepada raja dan negara; patuhi undang-undang'],
          ['Perpaduan kaum', 'Dasar bahasa, pendidikan dan kebudayaan; kempen perpaduan', 'Guna bahasa kebangsaan; hormati agama dan budaya lain'],
          ['Patriotisme', 'Hari Kebangsaan, Hari Pahlawan; Sejarah mata pelajaran teras', 'Hormati Jalur Gemilang, Jata Negara dan Negaraku'],
          ['Pertahanan', 'Dasar keselamatan; latihan bersama; modenkan aset', 'Laporkan pencerobohan; sertai pasukan keselamatan'],
        ],
      },
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Patriotisme',
        text: 'Perasaan cinta yang mendalam terhadap negara serta sanggup mempertahankan sejarah, bahasa, undang-undang, warisan dan budaya.',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Tip menjawab',
        text: 'Untuk soalan langkah mempertahankan kedaulatan, **asingkan** jawapan kepada peranan pemerintah dan peranan rakyat.',
      },
      {
        type: 'callout',
        variant: 'iktibar',
        title: 'Iktibar',
        text: '"Kedaulatan negara bergantung pada warganya yang bersatu" — titah Sultan Nazrin Muizzuddin Shah, Sultan Perak.',
      },
    ],
  },
];
