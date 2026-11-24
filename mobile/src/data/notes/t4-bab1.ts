import type { SourceRef, SubtopicNote } from '../../types/content';

/**
 * Tingkatan 4 · Bab 1: Warisan Negara Bangsa
 * Source: "Nota T4 – Bab 01 – Warisan Negara Bangsa" (Titik Sejarah revision notes),
 * which summarise Buku Teks Sejarah Tingkatan 4 KSSM (KPM/DBP, 2019).
 * Content below is transcribed from those notes — do not add facts that are not in the notes.
 */
const source: SourceRef = {
  status: 'nota',
  label: 'Nota Titik Sejarah T4 Bab 1 · rujukan Buku Teks Sejarah Tingkatan 4 KSSM (KPM/DBP, 2019)',
};

export const t4Bab1Notes: SubtopicNote[] = [
  {
    subtopicId: 't4-b1-1',
    source,
    summary: 'Kerajaan Alam Melayu awal membuktikan asas negara bangsa wujud sebelum kedatangan Barat.',
    keywords: ['Funan', 'Champa', 'Srivijaya', 'Telaga Batu', 'Alam Melayu', 'negara bangsa', 'Majapahit', 'Kutara Manawa'],
    blocks: [
      {
        type: 'para',
        text: 'Kemunculan dan kemasyhuran kerajaan Alam Melayu membuktikan **asas negara bangsa** telah bermula **sebelum kedatangan Barat**. Proses pembentukannya mengambil masa yang lama dan melalui beberapa tahap mengikut kerajaan yang memerintah.',
      },
      {
        type: 'para',
        text: 'Kehebatan kerajaan seperti **Funan, Champa, Kedah Tua, Gangga Nagara, Srivijaya, Angkor dan Majapahit** menunjukkan ciri-ciri negara bangsa berkembang dan diwarisi oleh kerajaan selepasnya.',
      },
      { type: 'heading', text: 'Empat ciri negara bangsa kerajaan Alam Melayu' },
      {
        type: 'table',
        columns: ['Ciri', 'Huraian', 'Contoh'],
        rows: [
          ['Raja', 'Tonggak utama kerajaan; dibantu pembesar. Raja ditaati dan dianggap suci.', 'Raja Champa dianggap suci dan dikaitkan dengan Dewa Siva.'],
          ['Undang-undang', 'Menjamin kesejahteraan kerajaan; terpakai di seluruh wilayah pengaruh.', 'Majapahit mengamalkan undang-undang Kutara Manawa.'],
          ['Wilayah pengaruh', 'Kawasan yang rakyatnya menerima dan memperakui pemerintahan raja.', 'Funan: Sungai Mekong, Teluk Cam Ranh, selatan Myanmar, Segenting Kra.'],
          ['Rakyat', 'Penduduk yang setia kepada raja dan tidak menderhaka.', 'Rakyat Srivijaya melafazkan kesetiaan dan meminum air sumpah.'],
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Inskripsi Telaga Batu',
        text: 'Digunakan dalam upacara persetiaan Srivijaya. Air dituang ke atas inskripsi, mengalir melalui corong, lalu ditadah dan diminum oleh rakyat sebagai tanda setia kepada pemerintah. Nama Srivijaya berasal daripada bahasa Sanskrit: sri = bercahaya, vijaya = kemenangan.',
      },
      { type: 'heading', text: 'Kesinambungan ciri-ciri negara bangsa' },
      {
        type: 'timeline',
        items: [
          { when: 'Abad ke-1', what: 'Funan, mengasaskan ciri-ciri negara bangsa' },
          { when: 'Abad ke-2', what: 'Champa, raja dianggap suci (Dewa Siva)' },
          { when: 'Abad ke-7', what: 'Srivijaya (Palembang), meneruskan ciri-ciri, muncul sebagai empayar terkenal' },
          { when: 'Abad ke-15', what: 'Kesultanan Melayu Melaka, mewarisi dan menambah ciri baharu' },
          { when: 'Abad ke-16', what: 'Kesultanan Johor-Riau, meneruskan ciri-ciri dengan menekankan Islam' },
        ],
      },
      {
        type: 'callout',
        variant: 'ingat',
        text: 'Kutara Manawa ialah undang-undang **Majapahit**, bukan Melaka.',
      },
    ],
  },
  {
    subtopicId: 't4-b1-2',
    source,
    summary: 'Enam ciri negara bangsa Kesultanan Melayu Melaka: kerajaan, rakyat, kedaulatan, wilayah pengaruh, undang-undang, lambang kebesaran.',
    keywords: ['kedaulatan', 'wilayah taklukan', 'wilayah naungan', 'Siantan', 'Cheng Ho', 'Dinasti Ming', 'cap mohor', 'nobat', 'regalia', 'lambang kebesaran'],
    blocks: [
      {
        type: 'para',
        text: 'Kesultanan Melayu Melaka mempunyai sistem pentadbiran, peraturan, masyarakat yang tersusun dan corak politik tersendiri. Terdapat **enam ciri negara bangsa**.',
      },
      { type: 'heading', text: '1. Kerajaan' },
      {
        type: 'list',
        items: [
          'Kerajaan muncul kerana adanya raja, pemerintah tertinggi yang dibantu pembesar.',
          'Diperkukuh oleh **Sistem Pembesar Empat Lipatan**, tonggak pentadbiran Melaka.',
          'Selepas kedatangan Islam, pemerintah Melaka mula menggunakan gelaran **sultan**.',
        ],
      },
      { type: 'heading', text: '2. Rakyat' },
      {
        type: 'list',
        items: [
          'Rakyat menumpahkan taat setia kepada Sultan Melaka dan mematuhi undang-undang.',
          'Terdiri daripada orang Melayu dan Orang Laut; golongan diperintah merangkumi golongan merdeka dan hamba.',
          'Hubungan timbal balik: sultan menjamin kesejahteraan rakyat; rakyat mengakui kekuasaan sultan.',
        ],
      },
      { type: 'heading', text: '3. Kedaulatan' },
      {
        type: 'para',
        text: 'Lambang kekuasaan tertinggi sultan, hak mutlak untuk mengawal rakyat dan wilayah. Kedaulatan Melaka diakui kerajaan lain dan bebas daripada campur tangan asing.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Kedaulatan Melaka diiktiraf oleh **Dinasti Ming (China)**, yang menghantar beberapa utusan termasuk yang diketuai **Laksamana Cheng Ho**.',
      },
      { type: 'heading', text: '4. Wilayah pengaruh' },
      {
        type: 'para',
        text: 'Wilayah pengaruh Melaka merangkumi keseluruhan Semenanjung Tanah Melayu dan pantai timur Sumatera, bukti kewibawaan pemerintah Melaka.',
      },
      {
        type: 'table',
        columns: ['Cara', 'Maksud', 'Contoh'],
        rows: [
          ['Penaklukan', 'Diperoleh melalui peperangan', 'Pahang, Kuala Linggi, Kelantan, Rokan, Inderagiri, Kampar'],
          ['Naungan', 'Menerima ketuanan Melaka melalui perkahwinan atau persahabatan', 'Lingga, Patani, Kedah'],
          ['Perkahwinan', 'Hasil ikatan perkahwinan diraja', 'Siantan dihadiahkan Majapahit kepada Sultan Mansur Shah'],
        ],
      },
      { type: 'heading', text: '5. Undang-undang' },
      {
        type: 'para',
        text: 'Melaka mempunyai dua undang-undang bertulis: **Hukum Kanun Melaka** dan **Undang-Undang Laut Melaka**. Tujuannya mengukuhkan kerajaan dan melindungi rakyat.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Undang-undang Melaka turut mempengaruhi negeri lain, contohnya Undang-Undang Pahang dan Undang-Undang 99 Perak.',
      },
      { type: 'heading', text: '6. Lambang kebesaran' },
      {
        type: 'para',
        text: 'Identiti kerajaan dan simbol kedaulatan sultan: adat istiadat, penggunaan warna, nobat, regalia dan **cap mohor** (untuk mengesahkan arahan sultan).',
      },
      {
        type: 'callout',
        variant: 'ingat',
        title: 'Ingat',
        text: 'Alam Melayu awal: **4 ciri** (raja, undang-undang, wilayah pengaruh, rakyat). Kesultanan Melayu Melaka: **6 ciri**, kedaulatan dan lambang kebesaran ialah ciri tambahan Melaka.',
      },
    ],
  },
  {
    subtopicId: 't4-b1-3',
    source,
    summary: 'Sistem Pembesar Empat Lipatan, pentadbiran dua peringkat, Hukum Kanun Melaka dan Undang-Undang Laut Melaka.',
    keywords: ['Bendahara', 'Temenggung', 'Laksamana', 'Penghulu Bendahari', 'Syahbandar', 'Tun Perak', 'Hukum Kanun Melaka', 'Undang-Undang Laut Melaka', 'nakhoda', 'malim', 'fasal'],
    blocks: [
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Keunggulan',
        text: 'Kesempurnaan dan keistimewaan yang dimiliki oleh sesebuah kerajaan.',
      },
      { type: 'heading', text: 'A. Sistem pentadbiran' },
      {
        type: 'para',
        text: 'Dikenali sebagai **Sistem Pembesar Empat Lipatan**. Sultan berkuasa dalam pemerintahan, peperangan, hubungan diplomatik dan agama, serta mengurniakan **kawasan pegangan** kepada Pembesar Berempat.',
      },
      {
        type: 'table',
        columns: ['Pembesar', 'Peranan'],
        rows: [
          ['Bendahara', 'Ketua pentadbir dan ketua turus angkatan tentera; penasihat sultan; pemangku sultan'],
          ['Penghulu Bendahari', 'Menguruskan perbendaharaan (kewangan) kerajaan'],
          ['Temenggung', 'Menjaga keselamatan kota Melaka (darat)'],
          ['Laksamana', 'Panglima angkatan laut Melaka'],
          ['Syahbandar', 'Mengutip cukai di pelabuhan'],
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        text: '**Bendahara Tun Perak** ialah bendahara paling lama berkhidmat, di bawah empat sultan: Sultan Muzaffar Shah, Sultan Mansur Shah, Sultan Alauddin Riayat Shah dan Sultan Mahmud Shah.',
      },
      { type: 'heading', text: 'Dua peringkat pentadbiran' },
      {
        type: 'list',
        items: [
          '**Pusat**. Pembesar Berempat. Permuafakatan sultan–pembesar mengelakkan tindakan sewenang-wenangnya.',
          '**Jajahan**, pembesar di daerah dan kampung, dilantik oleh sultan dan Pembesar Berempat; menjaga keamanan dan dibenarkan mengutip cukai.',
        ],
      },
      { type: 'heading', text: 'Sistem kewangan & keselamatan' },
      {
        type: 'list',
        items: [
          'Sumber pendapatan: perdagangan, pelbagai cukai dan **ufti** daripada wilayah taklukan dan naungan.',
          'Hasil digunakan untuk kepentingan kerajaan seperti membeli senjata dan membina istana.',
          'Keselamatan: Temenggung menjaga kota; Laksamana mengetuai angkatan laut.',
        ],
      },
      { type: 'heading', text: 'B. Undang-undang' },
      {
        type: 'para',
        text: 'Kedua-dua undang-undang Melaka berasaskan **syariah** dan **hukum adat**.',
      },
      {
        type: 'table',
        columns: ['Hukum Kanun Melaka (44 fasal)', 'Contoh'],
        rows: [
          ['Jenayah', 'Fasal 5.1: membunuh tanpa pengetahuan raja/pembesar, dihukum bunuh'],
          ['Peranan sultan & pembesar', 'Fasal 1: tugas sultan, Bendahara, Temenggung, Penghulu Bendahari'],
          ['Kekeluargaan', 'Fasal 26: pernikahan memerlukan empat saksi (memadai dua jika tidak cukup)'],
          ['Ekonomi', 'Fasal 30: riba diharamkan; peniaga mesti akil baligh dan siuman'],
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Perkataan **titah, murka, kurnia dan anugerah** hanya boleh digunakan oleh raja.',
      },
      {
        type: 'para',
        text: '**Undang-Undang Laut Melaka** diusahakan oleh Nakhoda Jenal, Nakhoda Diri dan Nakhoda Sahak, dan diperkenan oleh **Sultan Mahmud Shah**. Kandungannya: peranan nakhoda, pelayaran, jenayah di atas kapal dan percukaian.',
      },
      {
        type: 'list',
        items: [
          'Fasal 13.1: nakhoda diberi keutamaan berniaga selama empat hari.',
          'Fasal 9: malim mesti arif tentang ilmu pelayaran (ombak, arus, bulan dan bintang).',
          'Fasal 5: membunuh di atas kapal dikenakan hukuman mati.',
          'Fasal 6.3: cukai penumpang ialah satu persepuluh daripada hasil penumpang yang turun sebelum tempoh janji.',
        ],
      },
      {
        type: 'callout',
        variant: 'ingat',
        text: 'Penghulu Bendahari **mengurus perbendaharaan**; Syahbandar **mengutip cukai di pelabuhan**. Temenggung menjaga **darat**; Laksamana mengetuai **laut**.',
      },
    ],
  },
  {
    subtopicId: 't4-b1-4',
    source,
    summary: 'Waadat Sang Sapurba–Demang Lebar Daun dan hubungan timbal balik antara pemerintah dengan rakyat.',
    keywords: ['waadat', 'Sang Sapurba', 'Demang Lebar Daun', 'tulah', 'derhaka', 'kerah', 'serah', 'Rukun Negara'],
    blocks: [
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Waadat',
        text: 'Perjanjian antara **Demang Lebar Daun** (golongan diperintah) dengan **Sang Sapurba** (golongan pemerintah).',
      },
      {
        type: 'table',
        columns: ['Pihak', 'Isi perjanjian (rumusan)'],
        rows: [
          ['Sang Sapurba (pemerintah)', 'Rakyat tidak boleh menderhaka kepada anak cucu baginda walaupun raja bersalah atau zalim.'],
          ['Demang Lebar Daun (diperintah)', 'Bersetuju dengan syarat raja tidak terlebih dahulu melanggar perjanjian.'],
        ],
      },
      { type: 'heading', text: 'Golongan masyarakat Melaka' },
      {
        type: 'list',
        items: [
          '**Pemerintah:** sultan, pembesar, kerabat raja dan ulama.',
          '**Diperintah:** rakyat (peniaga, petani, tukang, nelayan) dan hamba (hamba raja, hamba berhutang, hamba biasa).',
        ],
      },
      { type: 'heading', text: 'Peranan setiap golongan' },
      {
        type: 'table',
        columns: ['Golongan', 'Peranan'],
        rows: [
          ['Sultan', 'Menaungi rakyat, mewujudkan perpaduan, menjamin kemakmuran, memperkenalkan undang-undang'],
          ['Pembesar', 'Memelihara keamanan dan kebajikan; perantara sultan–rakyat; mengutip hasil (serah) dan membekalkan tentera (kerah)'],
          ['Rakyat', 'Taat setia; tidak menderhaka kerana takut tulah; menjadi tentera dan pendayung; bergotong-royong; tenaga kerah'],
        ],
      },
      {
        type: 'callout',
        variant: 'definisi',
        title: 'Tulah',
        text: 'Kecelakaan yang menimpa seseorang kerana melanggar larangan atau titah raja dan menderhaka kepada raja.',
      },
      {
        type: 'callout',
        variant: 'iktibar',
        title: 'Kaitan masa kini',
        text: 'Sejarah Melayu mengibaratkan rakyat sebagai **akar** dan raja sebagai **pohon**. Hubungan baik ini selaras dengan prinsip kedua Rukun Negara, **Kesetiaan kepada Raja dan Negara**.',
      },
    ],
  },
];
