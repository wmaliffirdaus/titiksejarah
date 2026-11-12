// BAB 2 · EPISOD 06 – Subtopik 2.5: Kesedaran Nasionalisme di Negara Kita (≈ 4 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, who, MY } from './lib2.js';

const P = {
  melaka: [102.25, 2.2], kedah: [100.37, 6.12], naning: [102.33, 2.45], perak: [100.98, 4.15], pahang: [102.4, 3.7],
  kelantan: [102.41, 5.83], terengganu: [103.0, 5.15], sarawak: [111.9, 1.6], sabah: [116.36, 5.67],
};

export default {
  id: '06',
  file: '06_Bab2_Subtopik_2.5',
  title: 'Kesedaran Nasionalisme di Negara Kita',
  header: { chip: 'BAB 2 • 2.5', sub: 'Kesedaran Nasionalisme' },
  src: SRC,
  music: { key: 57, bpm: 98, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Adakah semangat nasionalisme di negara kita hanya bermula pada abad ke-20?', pause: 0.5 },
        'Sebenarnya, semangat ini sudah wujud sejak zaman **Kesultanan Melayu Melaka**!',
      ],
      board: {
        name: 'Hook – sejak bila?',
        visual: 'Kalendar "abad ke-20" dengan tanda soal; anak panah undur masa ke istana Melaka; cop "SEJAK ZAMAN MELAKA!".',
        doodle: 'Kad tarikh, tanda soal merah, anak panah melengkung, istana Melayu, cop merah.',
        text: '"Abad ke-20?" ➜ "SEJAK ZAMAN MELAKA!"',
        anim: 'Kad abad ke-20 pop; tanda soal; anak panah dilukis ke belakang; istana dilukis; cop dihentak.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h2" style="text-align:center">Abad ke-20?</div>', { anim: 'pop', x: 470, y: 330, w: 540, at: 0, d: 0.4, rot: 3 });
        S.add(D.question(), { anim: 'pop', x: 900, y: 470, w: 90, at: 0, d: 1.6, out: 1 });
        S.arrow(600, 520, 420, 640, { at: 1, d: -0.3, color: RED, bend: 0.3 });
        S.svg(D.palace(), { x: 70, y: 560, w: 520, at: 1, d: 0 });
        S.text('Kesultanan Melayu Melaka', { size: 'label', x: 70, y: 960, w: 520, align: 'center', at: 1, d: 0.6 });
        S.stamp('SEJAK ZAMAN MELAKA!', { x: 120, y: 1080, w: 840, at: 1, d: 1.6, fs: 64, style: 'text-align:center' });
      },
    },
    titleScene('2.5', 'Kesedaran<br><span class="red">Nasionalisme</span><br>di Negara Kita', 'Ini Titik Sejarah, Subtopik 2.5: **Kesedaran Nasionalisme di Negara Kita**.', { uy: 690, my: 760 }),
    {
      id: 'melaka', transition: 'paper',
      lines: [
        'Kesedaran nasionalisme bermula dengan perjuangan **Sultan Mahmud Syah** dan rakyat Melaka menentang **Portugis**, selepas Melaka ditawan pada tahun 1511.',
        'Baginda berusaha mendapatkan semula Melaka, walaupun usaha itu tidak berjaya.',
        'Perjuangan diteruskan oleh **Sultan Abdullah Mukarram Shah**, Sultan Kedah, yang menentang **Syarikat Hindia Timur Inggeris**, atau SHTI.',
      ],
      board: {
        name: 'Permulaan: Melaka & Kedah',
        visual: 'Peta Semenanjung mini dengan penanda Melaka dan Kedah; watak Sultan (generik) dengan tag; kapal Portugis; kad SHTI.',
        doodle: 'Peta lakaran, watak sultan bermahkota, kapal layar Barat, keris, kad nota.',
        text: 'Sultan Mahmud Syah & rakyat Melaka tentang Portugis (Melaka ditawan 1511) · Sultan Abdullah Mukarram Shah (Kedah) tentang SHTI',
        anim: 'Peta dilukis; penanda Melaka pop; kapal meluncur; watak Sultan dilukis; penanda Kedah & kad SHTI pada ayat ketiga.',
      },
      draw(S, { D }) {
        const at = S.map({ bounds: [[99.5, 0.8], [104.6, 6.9]], w: 380 }, { x: 640, y: 290, w: 380, at: 0, d: -0.3, dur: 1.2 });
        S.pin(at, ...P.melaka, 'Melaka', { at: 0, d: 0.6, color: RED, left: true, fs: 34 });
        S.pin(at, ...P.kedah, 'Kedah', { at: 2, d: 0.2, color: GOLD, fs: 34 });
        S.stamp('1511', { x: 80, y: 300, w: 220, at: 0, d: 5.0, fs: 64 });
        who(S, D.sultan({ pose: 'point', prop: 'keris' }), 'Sultan Mahmud Syah', 'Melaka', { x: 80, y: 430, w: 160, at: 0, d: 0.4, ty: 220, tw: 300 });
        S.add(D.ship({ hull: '#172C63', sail: '#F3EBDD' }), { anim: 'slideR', x: 320, y: 470, w: 280, at: 0, d: 2.4 });
        S.text('Portugis', { size: 'note', x: 360, y: 720, w: 200, align: 'center', at: 0, d: 2.8 });
        S.card('<div class="t-body" style="font-size:38px">Usaha mendapatkan semula Melaka <span class="red">tidak berjaya</span>, tetapi semangatnya <span class="hl">diwarisi</span></div>', { anim: 'slideU', x: 60, y: 790, w: 960, at: 1, d: 0.2 });
        who(S, D.sultan({ pose: 'present', cape: '#172C63' }), 'Sultan Abdullah Mukarram Shah', 'Kedah', { x: 80, y: 950, w: 120, at: 2, d: -0.2, ty: 10, tx: 150, tw: 700 });
        S.card('<div class="t-body" style="font-size:36px">menentang <b>Syarikat Hindia Timur Inggeris (SHTI)</b></div>', { color: 'gold', anim: 'slideR', x: 230, y: 1085, w: 790, at: 2, d: 2.6 });
      },
    },
    {
      id: 'pejuang', bg: 'lined', transition: 'zoom', gap: 0.3,
      lines: [
        { text: 'Pada penghujung abad ke-19 hingga awal abad ke-20, muncul ramai pejuang tempatan.', pause: 0.3 },
        '**Penghulu Dol Said** di Naning, dan **Dato\' Maharaja Lela** di Perak.',
        '**Dato\' Bahaman** di Pahang, **Tok Janggut** di Kelantan, dan **Haji Abdul Rahman Limbong** di Terengganu.',
        'Di Borneo pula, **Rentap** di Sarawak, dan **Mat Salleh** di Sabah.',
      ],
      board: {
        name: 'Peta pejuang tempatan',
        visual: 'Peta Malaysia (Semenanjung, Sarawak, Sabah) lakaran; penanda bagi setiap pejuang dengan tag nama di bawah peta.',
        doodle: 'Peta Natural Earth, penanda merah/kuning/navy, tag nama kuning.',
        text: 'Penghulu Dol Said (Naning) · Dato\' Maharaja Lela (Perak) · Dato\' Bahaman (Pahang) · Tok Janggut (Kelantan) · Haji Abdul Rahman Limbong (Terengganu) · Rentap (Sarawak) · Mat Salleh (Sabah)',
        anim: 'Peta dilukis; penanda & tag nama pop berkumpulan mengikut narasi.',
      },
      draw(S) {
        const at = S.map({ bounds: MY, w: 960, labels: [{ lon: 108, lat: 5.6, text: 'Laut China Selatan', size: 30 }] }, { x: 60, y: 300, w: 960, at: 0, d: -0.3, dur: 1.6 });
        const pins = [
          ['naning', 1, 0, RED], ['perak', 1, 1.8, NAVY], ['pahang', 2, 0, GOLD], ['kelantan', 2, 1.4, RED], ['terengganu', 2, 2.6, NAVY], ['sarawak', 3, 1.0, GOLD], ['sabah', 3, 2.6, RED],
        ];
        pins.forEach(([k, l, d, c]) => S.pin(at, ...P[k], '', { at: l, d, color: c, size: 0.8 }));
        const tags = [
          ['Penghulu Dol Said', 'Naning', 1, 0], ["Dato' Maharaja Lela", 'Perak', 1, 1.8],
          ["Dato' Bahaman", 'Pahang', 2, 0], ['Tok Janggut', 'Kelantan', 2, 1.4],
          ['Haji Abdul Rahman Limbong', 'Terengganu', 2, 2.6], ['Rentap', 'Sarawak', 3, 1.0], ['Mat Salleh', 'Sabah', 3, 2.6],
        ];
        tags.forEach(([n, p, l, d], i) => S.tag(n, p, { x: 60 + (i % 2) * 490, y: 720 + Math.floor(i / 2) * 120, w: 470, at: l, d: d + 0.2 }));
      },
    },
    {
      id: 'sifat', transition: 'flip',
      lines: [
        'Perjuangan mereka bertujuan **menuntut kebebasan daripada ancaman luar**, dan **mendaulatkan wilayah** masing-masing.',
        'Namun, perjuangan ini bersifat **setempat**, dan mendapat tindak balas yang keras daripada penjajah.',
      ],
      board: {
        name: 'Ciri perjuangan awal',
        visual: 'Dua kad matlamat dengan ikon perisai dan peta; kad "SETEMPAT" dengan titik-titik terpisah di peta; tip SPM.',
        doodle: 'Perisai, keris, titik terpisah (tidak bersambung), lencana TIP SPM.',
        text: 'Matlamat: tuntut kebebasan daripada ancaman luar · daulatkan wilayah · Sifat: setempat · tindak balas keras penjajah',
        anim: 'Kad matlamat meluncur masuk; titik-titik terpisah pop; cop SETEMPAT; tip SPM meluncur naik.',
      },
      draw(S, { D }) {
        S.text('Ciri perjuangan <span class="hl">awal</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        S.svg(D.shield(), { x: 80, y: 410, w: 160, at: 0, d: 0.2 });
        S.card('<div class="t-body" style="font-size:42px">Tuntut <span class="hl">kebebasan daripada ancaman luar</span></div>', { anim: 'slideR', x: 270, y: 410, w: 750, at: 0, d: 0.6 });
        S.svg(D.keris(), { x: 120, y: 600, w: 80, at: 0, d: 2.6 });
        S.card('<div class="t-body" style="font-size:42px"><span class="hl">Mendaulatkan wilayah</span> masing-masing</div>', { anim: 'slideR', x: 270, y: 610, w: 750, at: 0, d: 3.0 });
        ['', '', '', ''].forEach((_, i) => S.add(`<div style="width:56px;height:56px;border-radius:50%;background:${[RED, GOLD, NAVY, RED][i]};border:5px solid #172C63"></div>`, { anim: 'pop', x: 110 + i * 140, y: 860 + (i % 2) * 40, w: 56, at: 1, d: 0.4 + i * 0.2 }));
        S.stamp('SETEMPAT', { x: 680, y: 850, w: 330, at: 1, d: 1.2, fs: 52 });
        examTip(S, 'Perjuangan awal: <span class="hl">bersenjata</span> & <span class="hl">setempat</span> — tidak bersatu di peringkat negara.', 1, { d: 3.4, y: 1030, fs: 38 });
      },
    },
    {
      id: 'abad20', transition: 'paper',
      lines: [
        { text: 'Memasuki awal abad ke-20, cara perjuangan mula berubah: daripada senjata, kepada **pemikiran, pena dan pendidikan**.', pause: 0.3 },
        'Golongan agama memperjuangkannya melalui **Gerakan Islah**, dipelopori oleh **Sheikh Muhammad Tahir Jalaluddin**, **Haji Abbas Mohd Taha** dan **Syed Sheikh al-Hadi**.',
      ],
      board: {
        name: 'Abad ke-20: daripada senjata kepada pena',
        visual: 'Persamaan visual: keris ➜ pena bulu + buku; tiga tokoh Gerakan Islah (generik, berserban/berkopiah) dengan tag nama.',
        doodle: 'Keris, anak panah, pena bulu & dakwat, buku, tiga watak ulama generik.',
        text: 'Senjata ➜ pemikiran, pena & pendidikan · Gerakan Islah: Sheikh Muhammad Tahir Jalaluddin · Haji Abbas Mohd Taha · Syed Sheikh al-Hadi',
        anim: 'Keris dilukis; anak panah; pena & buku pop; tiga watak dilukis mengikut nama.',
      },
      draw(S, { D }) {
        S.svg(D.keris(), { x: 140, y: 300, w: 90, at: 0, d: 0 });
        S.arrow(260, 430, 420, 430, { at: 0, d: 1.4, color: RED, bend: -0.2 });
        S.svg(D.quill(), { x: 450, y: 310, w: 160, at: 0, d: 2.0 });
        S.svg(D.book('ILMU', '#172C63', { size: 36, y: 145 }), { x: 640, y: 320, w: 170, at: 0, d: 2.6 });
        S.svg(D.school('', '#C93436'), { x: 820, y: 360, w: 200, at: 0, d: 3.2 });
        S.add('<span class="pill">Gerakan Islah</span>', { anim: 'pop', x: 60, y: 690, w: 400, at: 1, d: 0.3 });
        const islah = [['Sheikh Muhammad Tahir Jalaluddin', '#172C63', 2.4], ['Haji Abbas Mohd Taha', '#C93436', 4.6], ['Syed Sheikh al-Hadi', '#3F5DA8', 6.2]];
        islah.forEach(([n, c, d], i) => who(S, D.pedagang({ shirt: c, pose: 'present', prop: i === 2 ? 'book' : 'scroll' }), n, 'Gerakan Islah', { x: 90 + i * 320, y: 780, w: 140, at: 1, d, ty: 180, tw: 300, tx: -40, sfx: i ? false : 'pencil' }));
      },
    },
    {
      id: 'penulis', transition: 'slideUp',
      lines: [
        'Perjuangan diteruskan melalui penulisan kreatif dan akhbar, oleh tokoh seperti **Za\'ba**, **Muhammad Rakawi Yusuf**, **Abdul Rahim Kajai**, **Ibu Zain** dan **Fatimah Yaakub**.',
        'Golongan berpendidikan Melayu pula, seperti **Ibrahim Haji Yaacob**, **Ishak Haji Muhammad**, **Ahmad Boestamam** dan **Dr. Burhanuddin al-Helmy**, turut bangkit memperjuangkan nasib bangsa.',
      ],
      board: {
        name: 'Penulis, wartawan & golongan berpendidikan Melayu',
        visual: 'Dinding nota: dua kumpulan tag nama — "Penulisan kreatif & akhbar" (5 nama) dan "Berpendidikan Melayu" (4 nama); akhbar & pena di sudut.',
        doodle: 'Tag nama kuning, akhbar, pena bulu.',
        text: "Penulisan & akhbar: Za'ba · Muhammad Rakawi Yusuf · Abdul Rahim Kajai · Ibu Zain · Fatimah Yaakub · Berpendidikan Melayu: Ibrahim Haji Yaacob · Ishak Haji Muhammad · Ahmad Boestamam · Dr. Burhanuddin al-Helmy",
        anim: 'Tag nama ditampal satu demi satu serentak dengan sebutan.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">Penulisan kreatif & akhbar</span>', { anim: 'pop', x: 60, y: 300, w: 700, at: 0, d: 0 });
        S.svg(D.newspaper('AKHBAR', { ts: 30 }), { x: 850, y: 290, w: 150, at: 0, d: 0.4 });
        const a = [["Za'ba", 4.8], ['Muhammad Rakawi Yusuf', 5.6], ['Abdul Rahim Kajai', 7.2], ['Ibu Zain', 8.6], ['Fatimah Yaakub', 9.4]];
        a.forEach(([n, d], i) => S.tag(n, '', { x: 60 + (i % 2) * 400, y: 390 + Math.floor(i / 2) * 95, w: 380, at: 0, d, sfx: 'pop' }));
        S.add('<span class="pill" style="background:#FFFDF7">Berpendidikan Melayu</span>', { anim: 'pop', x: 60, y: 720, w: 700, at: 1, d: 0 });
        const b = [['Ibrahim Haji Yaacob', 2.4], ['Ishak Haji Muhammad', 3.6], ['Ahmad Boestamam', 4.8], ['Dr. Burhanuddin al-Helmy', 5.8]];
        b.forEach(([n, d], i) => S.tag(n, '', { x: 60 + (i % 2) * 480, y: 810 + Math.floor(i / 2) * 95, w: 460, at: 1, d, sfx: 'pop' }));
        S.svg(D.quill(), { x: 860, y: 990, w: 130, at: 1, d: 6.5 });
      },
    },
    {
      id: 'banding', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Jom bandingkan dua tahap ini.', pause: 0.2 },
        'Pada peringkat awal, perjuangan berbentuk penentangan bersenjata yang bersifat setempat.',
        'Menjelang abad ke-20, perjuangan bergerak melalui agama, penulisan, akhbar, pendidikan dan persatuan.',
      ],
      board: {
        name: 'Perbandingan: peringkat awal vs abad ke-20',
        visual: 'Peta i-THINK "buih berganda": dua lajur (DAHULU vs ABAD KE-20) dengan ikon dan kata kunci.',
        doodle: 'Keris & perisai (dahulu); pena, akhbar, sekolah & orang ramai (abad ke-20).',
        text: 'DAHULU: penentangan bersenjata, setempat · ABAD KE-20: agama, penulisan, akhbar, pendidikan, persatuan',
        anim: 'Lajur kiri muncul pada ayat kedua; lajur kanan pada ayat ketiga; ikon pop.',
      },
      draw(S, { D }) {
        S.text('DAHULU <span class="red">vs</span> ABAD KE-20', { size: 'h2', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">DAHULU</div><div class="t-body" style="font-size:40px;color:#F3EBDD;text-align:center">Penentangan <b>bersenjata</b><br>bersifat <b>setempat</b></div>', { color: 'navy', anim: 'slideL', x: 60, y: 420, w: 450, at: 1, d: 0 });
        S.svg(D.keris(), { x: 130, y: 720, w: 90, at: 1, d: 0.6 });
        S.svg(D.shield(), { x: 260, y: 760, w: 170, at: 1, d: 0.9 });
        S.card('<div class="t-h3" style="text-align:center;color:#C93436">ABAD KE-20</div><div class="t-body" style="font-size:40px;text-align:center">Agama · Penulisan · Akhbar · Pendidikan · <span class="hl">Persatuan</span></div>', { color: 'gold', anim: 'slideR', x: 570, y: 420, w: 450, at: 2, d: 0 });
        S.svg(D.quill(), { x: 600, y: 760, w: 110, at: 2, d: 1.0 });
        S.svg(D.newspaper('AKHBAR', { ts: 26 }), { x: 730, y: 740, w: 130, at: 2, d: 1.6 });
        S.svg(D.school('', '#C93436'), { x: 870, y: 790, w: 150, at: 2, d: 2.4 });
        S.svg(D.crowd(5), { x: 640, y: 1000, w: 360, at: 2, d: 4.4 });
      },
    },
    nilaiScene([
      { text: 'Iktibarnya: pentingnya **organisasi** dalam membangunkan negara.', pause: 0.3 },
      'Perjuangan yang tersusun dalam pertubuhan lebih kuat dan lebih berkesan berbanding perjuangan secara bersendirian.',
    ], 'Kepentingan organisasi dalam membangunkan negara', (D) => D.crowd(5), { iw: 420, ix: 330, iy: 430, note: 'Perjuangan <span class="hl">tersusun</span> dalam pertubuhan ➜ lebih <span class="hl">kuat</span> & <span class="hl">berkesan</span>.', doodle: 'Orang ramai bersatu (organisasi), bintang.' }),
    closingScene([
      { text: 'Ringkasnya, kesedaran nasionalisme di negara kita bermula sejak zaman Melaka, diteruskan oleh pejuang tempatan, dan berkembang melalui golongan agama, penulis dan intelektual.', pause: 0.3 },
      'Tetapi apakah yang mencetuskan gerakan baharu ini? Jom kenali enam faktornya dalam episod seterusnya!',
    ], 'Episod seterusnya', '2.6 Faktor Kemunculan Gerakan Nasionalisme', { summary: 'Melaka ➜ pejuang tempatan ➜ <span class="hl">golongan agama, penulis & intelektual</span> (abad ke-20).' }),
    endScene(),
  ],
};
