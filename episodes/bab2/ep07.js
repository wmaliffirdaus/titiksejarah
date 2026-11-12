// BAB 2 · EPISOD 07 – Subtopik 2.6: Faktor Kemunculan Gerakan Nasionalisme (≈ 5 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, who } from './lib2.js';

const FACTORS = [
  ['Peranan agama', (D) => D.mosque()],
  ['Penulisan kreatif', (D) => D.quill()],
  ['Media cetak', (D) => D.newspaper('AKHBAR', { ts: 30 })],
  ['Sistem pendidikan', (D) => D.school('', RED)],
  ['Golongan intelektual', (D) => D.bulb()],
  ['Pengaruh luar & serantau', (D) => D.globe()],
];
// Small "faktor N/6" badge used on every factor scene.
const badge = (S, n, name) => {
  S.add(`<div style="display:flex;align-items:center;gap:16px"><div style="width:96px;height:96px;border-radius:50%;background:#C93436;border:5px solid #172C63;color:#F5C928;font-family:Marker;font-size:44px;display:flex;align-items:center;justify-content:center">${n}</div><div class="t-h2" style="font-size:54px">${name}</div></div>`, { anim: 'pop', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
};

export default {
  id: '07',
  file: '07_Bab2_Subtopik_2.6',
  title: 'Faktor Kemunculan Gerakan Nasionalisme',
  header: { chip: 'BAB 2 • 2.6', sub: 'Faktor Kemunculan Gerakan' },
  src: SRC,
  music: { key: 62, bpm: 104, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Apa kaitan pelajar di Mesir, sebuah akhbar, dan sebuah maktab perguruan dengan kebangkitan nasionalisme?', pause: 0.5 },
        'Semuanya ialah **faktor** yang membangkitkan semangat rakyat kita!',
      ],
      board: {
        name: 'Hook – tiga petunjuk',
        visual: 'Tiga ikon misteri dalam bingkai (masjid berkubah, akhbar, sekolah) dihubungkan oleh tanda soal ke obor; cop "FAKTOR!".',
        doodle: 'Masjid, akhbar, sekolah, tanda soal, obor menyala, cop merah.',
        text: 'Mesir? Akhbar? Maktab? ➜ FAKTOR kebangkitan nasionalisme',
        anim: 'Tiga ikon pop berturut-turut; tanda soal; obor dilukis; cop dihentak.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Apa <span class="red">kaitannya</span>?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        [[D.mosque(), 'Mesir', 0.8], [D.newspaper('AKHBAR', { ts: 30 }), 'Akhbar', 2.2], [D.school('', RED), 'Maktab', 3.4]].forEach(([svg, n, d], i) => {
          S.svg(svg, { x: 80 + i * 320, y: 480, w: 260, at: 0, d });
          S.text(n, { size: 'label', x: 80 + i * 320, y: 800, w: 260, align: 'center', at: 0, d: d + 0.4 });
        });
        S.add(D.question(), { anim: 'pop', x: 490, y: 880, w: 100, at: 0, d: 4.6, out: 1 });
        S.svg(D.torch(), { x: 140, y: 900, w: 160, at: 1, d: 0 });
        S.stamp('FAKTOR!', { x: 380, y: 1010, w: 560, at: 1, d: 1.2, fs: 90, style: 'text-align:center' });
      },
    },
    titleScene('2.6', 'Faktor Kemunculan<br><span class="red">Gerakan</span><br><span class="red">Nasionalisme</span>', 'Ini Titik Sejarah, Subtopik 2.6: **Faktor Kemunculan Gerakan Nasionalisme**.', { uy: 690, my: 760 }),
    {
      id: 'enam', bg: 'grid', transition: 'paper', gap: 0.25,
      lines: [
        { text: 'Ada **enam faktor** utama.', pause: 0.25 },
        'Peranan agama, penulisan kreatif, dan media cetak.',
        'Sistem pendidikan, kemunculan golongan intelektual, serta pengaruh luar dan serantau.',
      ],
      board: {
        name: 'Enam faktor – gambaran keseluruhan',
        visual: 'Grid 2×3 kad bergambar bernombor 1–6.',
        doodle: 'Masjid, pena bulu, akhbar, sekolah, mentol, glob.',
        text: '1 Peranan agama · 2 Penulisan kreatif · 3 Media cetak · 4 Sistem pendidikan · 5 Golongan intelektual · 6 Pengaruh luar & serantau',
        anim: 'Kad pop satu demi satu serentak dengan narasi.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">6 FAKTOR</span> utama', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        FACTORS.forEach(([name, icon], i) => {
          const x = 60 + (i % 2) * 490, y = 400 + Math.floor(i / 2) * 300;
          const at = i < 3 ? 1 : 2, d = (i % 3) * 1.1;
          S.card('<div style="height:240px"></div>', { anim: 'pop', x, y, w: 470, at, d, sfx: 'pop' });
          S.svg(icon(D), { x: x + 20, y: y + 40, w: 170, at, d: d + 0.1, dur: 0.8, sfx: false });
          S.add(`<div style="font-family:Marker;font-size:56px;color:#C93436;line-height:1">${i + 1}</div>`, { anim: 'pop', x: x + 210, y: y + 30, w: 80, at, d: d + 0.15, sfx: false });
          S.text(name, { size: 'body', x: x + 210, y: y + 100, w: 240, at, d: d + 0.2, style: 'font-size:40px' });
        });
      },
    },
    {
      id: 'agama', transition: 'flip',
      lines: [
        'Faktor pertama, **peranan agama**. Pelajar yang melanjutkan pelajaran di **Mesir** terdedah kepada falsafah perjuangan Gerakan Islah, pimpinan Sayyid Jamal al-Din al-Afghani, Sheikh Muhammad Abduh dan **Rashid Rida**.',
        'Apabila pulang, mereka menggerakkan **Gerakan Islah** di negara kita, yang berjuang ke arah pentafsiran Islam yang sebenar.',
      ],
      board: {
        name: 'Faktor 1: Peranan agama',
        visual: 'Peta mini Mesir ➜ Tanah Melayu dengan anak panah; watak pelajar (generik) membawa buku; masjid; tiga nama tokoh Islah Mesir.',
        doodle: 'Peta Asia Barat–Asia Tenggara, anak panah merah, watak pelajar, masjid, tag nama.',
        text: 'Pelajar di Mesir ➜ terdedah kepada Gerakan Islah (al-Afghani, Muhammad Abduh, Rashid Rida) ➜ pulang, gerakkan Gerakan Islah: pentafsiran Islam yang sebenar',
        anim: 'Peta dilukis; anak panah Mesir ➜ Tanah Melayu dilukis; watak dilukis; tag nama pop.',
      },
      draw(S, { D }) {
        badge(S, 1, 'Peranan agama');
        const at = S.map({ bounds: [[22, -8], [110, 38]], w: 960 }, { x: 60, y: 420, w: 960, at: 0, d: 0.2, dur: 1.4 });
        S.pin(at, 31.2, 30, 'Mesir', { at: 0, d: 1.4, color: RED, fs: 36 });
        S.pin(at, 101.7, 3.1, 'Tanah Melayu', { at: 1, d: 0, color: GOLD, left: true, fs: 36 });
        const [mx, my] = at(31.2, 30), [tx, ty] = at(101.7, 3.1);
        S.arrow(mx + 30, my + 10, tx - 30, ty - 30, { at: 1, d: 0.3, color: RED, bend: 0.2, sw: 7 });
        ['Sayyid Jamal al-Din al-Afghani', 'Sheikh Muhammad Abduh', 'Rashid Rida'].forEach((n, i) => S.tag(n, 'Islah, Mesir', { x: 60 + (i % 2) * 490, y: 900 + Math.floor(i / 2) * 105, w: 470, at: 0, d: 6.0 + i * 1.2 }));
        S.card('<div class="t-body" style="font-size:38px">Pulang ➜ <span class="hl">Gerakan Islah</span>: pentafsiran Islam yang sebenar</div>', { color: 'gold', anim: 'slideU', x: 550, y: 1010, w: 470, at: 1, d: 2.6, pad: '10px 18px' });
      },
    },
    {
      id: 'kreatif', transition: 'paper',
      lines: [
        'Faktor kedua, **penulisan kreatif**. Novel, cerpen dan puisi menjadi wadah untuk membangkitkan semangat rakyat.',
        'Contohnya, novel **Melor Kuala Lumpur** oleh Harun Aminurrashid, dan cerpen **Cerita Awang Putat** oleh Abdul Rahim Kajai, yang mengungkapkan keperitan hidup bangsa yang dijajah.',
        'Novel **Putera Gunung Tahan** karya Ishak Haji Muhammad, atau Pak Sako, menyindir penjajah. Puisi **Serunai Pujangga** oleh Abdul Samad Ahmad pula bertemakan cinta akan negara.',
      ],
      board: {
        name: 'Faktor 2: Penulisan kreatif',
        visual: 'Rak buku doodle: empat karya berwarna dengan nama penulis; pena bulu.',
        doodle: 'Empat buku (merah, navy, emas, merah) bertajuk, pena bulu, tag penulis.',
        text: 'Novel, cerpen, puisi · Melor Kuala Lumpur – Harun Aminurrashid · Cerita Awang Putat – Abdul Rahim Kajai · Putera Gunung Tahan – Ishak Haji Muhammad (Pak Sako) · Serunai Pujangga – Abdul Samad Ahmad',
        anim: 'Setiap buku dilukis dan tag penulis pop serentak dengan sebutan.',
      },
      draw(S, { D }) {
        badge(S, 2, 'Penulisan kreatif');
        S.add('<span class="pill" style="font-size:30px">novel</span> <span class="pill" style="font-size:30px;background:#FFFDF7">cerpen</span> <span class="pill" style="font-size:30px">puisi</span>', { anim: 'pop', x: 60, y: 420, w: 700, at: 0, d: 1.6 });
        S.svg(D.quill(), { x: 860, y: 400, w: 130, at: 0, d: 0.6 });
        const works = [
          ['Melor|Kuala|Lumpur', '#C93436', 'Harun Aminurrashid', 'novel', 1, 0.6],
          ['Cerita|Awang|Putat', '#172C63', 'Abdul Rahim Kajai', 'cerpen', 1, 3.2],
          ['Putera|Gunung|Tahan', '#C93436', 'Ishak Haji Muhammad', 'novel · Pak Sako', 2, 0.4],
          ['Serunai|Pujangga', '#172C63', 'Abdul Samad Ahmad', 'puisi', 2, 5.6],
        ];
        works.forEach(([t, c, a, k, at, d], i) => {
          S.svg(D.book(t, c, { size: 22, y: 112 }), { x: 60 + i * 245, y: 540, w: 200, at, d });
          S.tag(a, k, { x: 50 + i * 245, y: 800, w: 230, at, d: d + 0.5 });
        });
        S.card('<div class="t-body" style="font-size:38px">Ungkap <span class="hl">keperitan hidup</span> bangsa dijajah · <span class="hl">sindir penjajah</span> · <span class="hl">cinta akan negara</span></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1010, w: 960, at: 2, d: 7.4, pad: '12px 22px' });
      },
    },
    {
      id: 'media', transition: 'slideUp',
      lines: [
        'Faktor ketiga, **media cetak**. Akhbar dan majalah menjadi bahan untuk menyebarkan idea nasionalisme.',
        'Akhbar **Jawi Peranakan** menegur campur tangan British dalam hal ehwal agama Islam di Singapura, dan membangkitkan isu bahasa Melayu. Akhbar **Sekolah Melayu** pula menjadi bahan bacaan di sekolah Melayu.',
        'Majalah **Al-Imam**, **Neracha** dan **Pengasuh** memuatkan idea pembaharuan.',
        'Di Sarawak, akhbar **Fajar Sarawak** mengkritik dasar pemerintahan Brooke yang mengabaikan hak dan kepentingan bumiputera Sarawak.',
      ],
      board: {
        name: 'Faktor 3: Media cetak',
        visual: 'Timbunan akhbar & majalah doodle bertajuk, setiap satu dengan kad fungsi ringkas.',
        doodle: 'Enam akhbar/majalah bermastad berwarna (Jawi Peranakan, Sekolah Melayu, Al-Imam, Neracha, Pengasuh, Fajar Sarawak).',
        text: 'Jawi Peranakan – tegur campur tangan British dalam hal Islam di Singapura, isu bahasa Melayu · Sekolah Melayu – bahan bacaan sekolah Melayu · Al-Imam, Neracha, Pengasuh – idea pembaharuan · Fajar Sarawak – kritik dasar Brooke',
        anim: 'Akhbar meluncur masuk satu demi satu mengikut narasi; kad fungsi pop.',
      },
      draw(S, { D }) {
        badge(S, 3, 'Media cetak');
        const paper = (t, c, x, y, at, d, r) => S.svg(D.newspaper(t, { ts: t.length > 10 ? 22 : 30, color: c }), { x, y, w: 170, at, d, rot: r, sfx: 'paper' });
        paper('Jawi Peranakan', NAVY, 60, 420, 1, 0.2, -3);
        paper('Sekolah Melayu', '#3F5DA8', 390, 420, 1, 7.4, 3);
        paper('Fajar Sarawak', '#3A8A4A', 720, 420, 3, 0.6, -2);
        S.card('<div class="t-body" style="font-size:32px"><b>Jawi Peranakan</b>: tegur campur tangan British dalam hal Islam (Singapura) · isu bahasa Melayu</div>', { anim: 'slideU', x: 60, y: 650, w: 960, at: 1, d: 1.2, pad: '8px 18px', notape: true });
        S.card('<div class="t-body" style="font-size:32px"><b>Sekolah Melayu</b>: bahan bacaan di sekolah Melayu</div>', { anim: 'slideU', x: 60, y: 775, w: 960, at: 1, d: 8.0, pad: '8px 18px', notape: true });
        paper('Al-Imam', RED, 60, 870, 2, 0.2, 2);
        paper('Neracha', NAVY, 390, 870, 2, 1.0, -2);
        paper('Pengasuh', RED, 720, 870, 2, 1.8, 3);
        S.card('<div class="t-body" style="font-size:32px"><b>Al-Imam · Neracha · Pengasuh</b>: idea pembaharuan</div>', { color: 'gold', anim: 'slideU', x: 60, y: 1088, w: 960, at: 2, d: 2.4, pad: '8px 18px', notape: true });
        S.card('<div class="t-body" style="font-size:32px"><b>Fajar Sarawak</b>: kritik dasar <span class="red">Brooke</span> yang abaikan hak bumiputera Sarawak</div>', { anim: 'slideU', x: 60, y: 1192, w: 960, at: 3, d: 1.6, pad: '8px 18px', notape: true });
      },
    },
    {
      id: 'pendidikan', transition: 'paper',
      lines: [
        'Faktor keempat, **sistem pendidikan**. Madrasah seperti **Madrasah al-Attas** di Johor Bahru, **Madrasah al-Masyhur** di Pulau Pinang, dan **Madrasah al-Idrisiah** di Kuala Kangsar menyebarkan idea pembaharuan.',
        '**Maktab Melayu Kuala Kangsar**, atau MCKK, melahirkan golongan intelektual berpendidikan Inggeris.',
        '**Maktab Perguruan Sultan Idris**, atau SITC, pula melahirkan guru yang menulis karya tentang nasionalisme.',
      ],
      board: {
        name: 'Faktor 4: Sistem pendidikan',
        visual: 'Tiga bangunan madrasah kecil sebaris dengan label lokasi; dua bangunan maktab besar (MCKK & SITC) dengan kad hasil.',
        doodle: 'Bangunan sekolah/madrasah berbumbung, bendera kecil, label tulisan tangan.',
        text: 'Madrasah al-Attas (Johor Bahru) · Madrasah al-Masyhur (Pulau Pinang) · Madrasah al-Idrisiah (Kuala Kangsar) – idea pembaharuan · MCKK – intelektual berpendidikan Inggeris · SITC – guru penulis karya nasionalisme',
        anim: 'Madrasah dilukis satu demi satu; MCKK & SITC dilukis; kad hasil meluncur masuk.',
      },
      draw(S, { D }) {
        badge(S, 4, 'Sistem pendidikan');
        [['al-Attas', 'Johor Bahru', 1.2], ['al-Masyhur', 'Pulau Pinang', 3.8], ['al-Idrisiah', 'Kuala Kangsar', 6.2]].forEach(([n, p, d], i) => {
          S.svg(D.school('', '#3A8A4A'), { x: 70 + i * 320, y: 420, w: 260, at: 0, d });
          S.tag(`Madrasah ${n}`, p, { x: 60 + i * 320, y: 630, w: 300, at: 0, d: d + 0.4 });
        });
        S.svg(D.school('MCKK', NAVY), { x: 70, y: 800, w: 280, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:36px">Lahirkan intelektual <span class="hl">berpendidikan Inggeris</span></div>', { anim: 'slideR', x: 380, y: 830, w: 640, at: 1, d: 0.8, pad: '10px 20px' });
        S.svg(D.school('SITC', RED), { x: 70, y: 1050, w: 280, at: 2, d: 0 });
        S.card('<div class="t-body" style="font-size:36px">Lahirkan <span class="hl">guru</span> yang menulis karya <b>nasionalisme</b></div>', { color: 'gold', anim: 'slideR', x: 380, y: 1080, w: 640, at: 2, d: 0.8, pad: '10px 20px' });
      },
    },
    {
      id: 'intelektual', transition: 'flip',
      lines: [
        'Faktor kelima, **kemunculan golongan intelektual**.',
        'Antaranya **Syed Sheikh al-Hadi**, **Abdul Kadir Adabi**, **Dato\' Undang Rembau Abdullah Haji Dahan**, **Mohammad Eunos Abdullah**, **Abu Bakar al-Baqir**, dan **Ibrahim Haji Yaacob**.',
        'Mereka menggunakan ilmu, penulisan dan pengaruh untuk menyedarkan masyarakat.',
      ],
      board: {
        name: 'Faktor 5: Golongan intelektual',
        visual: 'Galeri enam tag nama tokoh dengan mentol idea di tengah.',
        doodle: 'Mentol kuning bersinar, tag nama, bintang.',
        text: "Syed Sheikh al-Hadi · Abdul Kadir Adabi · Dato' Undang Rembau Abdullah Haji Dahan · Mohammad Eunos Abdullah · Abu Bakar al-Baqir · Ibrahim Haji Yaacob",
        anim: 'Mentol pop; tag nama ditampal serentak dengan sebutan; kad akhir meluncur naik.',
      },
      draw(S, { D }) {
        badge(S, 5, 'Golongan intelektual');
        S.add(D.bulb(), { anim: 'pop', x: 430, y: 420, w: 220, at: 0, d: 0.6, pulse: [{ at: 2, d: 0.2 }] });
        const names = [['Syed Sheikh al-Hadi', 0.6], ['Abdul Kadir Adabi', 2.0], ["Dato' Undang Rembau Abdullah Haji Dahan", 3.2], ['Mohammad Eunos Abdullah', 6.0], ['Abu Bakar al-Baqir', 7.6], ['Ibrahim Haji Yaacob', 9.0]];
        names.forEach(([n, d], i) => S.tag(n, '', { x: 60 + (i % 2) * 490, y: 700 + Math.floor(i / 2) * 110, w: 470, at: 1, d, sfx: 'pop' }));
        S.card('<div class="t-body" style="font-size:40px;text-align:center">Ilmu + penulisan + pengaruh ➜ <span class="hl">sedarkan masyarakat</span></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1060, w: 960, at: 2, d: 0.2 });
      },
    },
    {
      id: 'luar', bg: 'lined', transition: 'zoom',
      lines: [
        'Faktor keenam, **pengaruh luar dan serantau**.',
        'Gerakan Islah di Mesir, **kemenangan Jepun ke atas Rusia** pada tahun 1905, dan perjuangan **Dr. Sun Yat Sen** di China membuktikan bahawa bangsa Asia juga mampu bangkit!',
      ],
      board: {
        name: 'Faktor 6: Pengaruh luar & serantau',
        visual: 'Peta Asia; tiga anak panah dari Mesir, Jepun dan China menuju Tanah Melayu, setiap satu berlabel.',
        doodle: 'Peta Asia lakaran, anak panah merah/navy/emas, ikon masjid, torii, penanda.',
        text: 'Gerakan Islah (Mesir) · Kemenangan Jepun ke atas Rusia 1905 · Perjuangan Dr. Sun Yat Sen (China) ➜ Tanah Melayu',
        anim: 'Peta dilukis; tiga anak panah dilukis satu demi satu menuju Tanah Melayu; kad label pop.',
      },
      draw(S, { D }) {
        badge(S, 6, 'Pengaruh luar & serantau');
        const at = S.map({ bounds: [[25, -8], [146, 48]], w: 960 }, { x: 60, y: 420, w: 960, at: 0, d: 0.2, dur: 1.4 });
        const tm = at(101.7, 3.1);
        S.pin(at, 101.7, 3.1, 'Tanah Melayu', { at: 0, d: 1.2, color: GOLD, fs: 32 });
        [[31.2, 30, RED, 0.6, 'Islah (Mesir)'], [139.7, 35.7, NAVY, 3.2, 'Jepun menang ke atas Rusia 1905'], [110, 33, GOLD, 6.8, 'Dr. Sun Yat Sen (China)']].forEach(([lo, la, c, d, label], i) => {
          const [x, y] = at(lo, la);
          S.pin(at, lo, la, '', { at: 1, d: d - 0.3, color: c, size: 0.7 });
          S.arrow(x, y + 10, tm[0] + (i - 1) * 20, tm[1] - 30, { at: 1, d, color: c === GOLD ? '#C9A000' : c, bend: i === 1 ? -0.2 : 0.2, sw: 6 });
          S.card(`<div class="t-body" style="font-size:36px">${label}</div>`, { color: i === 1 ? 'gold' : '', anim: 'pop', x: 60 + i * 330, y: 1000 + (i % 2) * 20, w: 310, at: 1, d: d + 0.3, pad: '10px 16px', notape: true });
        });
        S.text('Bangsa Asia juga <span class="red">mampu bangkit!</span>', { size: 'h3', x: 60, y: 1200, w: 960, align: 'center', at: 1, d: 9.0 });
      },
    },
    {
      id: 'petua', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Petua mudah untuk ingat enam faktor ini:', pause: 0.2 },
        { text: 'Aku Perlu Membaca Pelbagai Ilmu Luar!', pause: 0.3 },
        'Huruf pertama setiap perkataan mewakili satu faktor: Agama, Penulisan kreatif, Media cetak, Pendidikan, Intelektual dan Luar.',
      ],
      board: {
        name: 'Petua ingat – akronim A-P-M-P-I-L',
        visual: 'Enam huruf besar A-P-M-P-I-L dalam bulatan; ayat petua di bawah; setiap huruf dipadankan dengan faktor; tip SPM.',
        doodle: 'Bulatan huruf berwarna, garis penghubung, lencana TIP SPM.',
        text: '"Aku Perlu Membaca Pelbagai Ilmu Luar" = Agama · Penulisan kreatif · Media cetak · Pendidikan · Intelektual · Luar & serantau (petua ingatan, bukan dari buku teks)',
        anim: 'Huruf pop satu demi satu; ayat petua ditulis; label faktor muncul di bawah setiap huruf; tip SPM meluncur naik.',
      },
      draw(S) {
        S.text('Petua <span class="hl">ingat</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        S.add('<span class="twtag">PETUA INGATAN</span>', { anim: 'fade', x: 760, y: 320, w: 260, at: 0, sfx: false });
        const L = [['A', 'Aku', 'Agama'], ['P', 'Perlu', 'Penulisan kreatif'], ['M', 'Membaca', 'Media cetak'], ['P', 'Pelbagai', 'Pendidikan'], ['I', 'Ilmu', 'Intelektual'], ['L', 'Luar', 'Luar & serantau']];
        L.forEach(([c, w, f], i) => {
          const x = 60 + i * 162;
          S.add(`<div style="width:140px;height:140px;border-radius:50%;background:${i % 2 ? '#172C63' : '#C93436'};border:5px solid #172C63;color:#F5C928;font-family:Marker;font-size:80px;display:flex;align-items:center;justify-content:center">${c}</div>`, { anim: 'pop', x, y: 420, w: 140, at: 1, d: 0.1 + i * 0.35 });
          S.text(w, { size: 'label', x: x - 10, y: 575, w: 160, align: 'center', at: 1, d: 0.3 + i * 0.35, style: 'font-size:38px' });
          S.card(`<div class="t-body" style="font-size:30px;text-align:center;line-height:1.05">${f}</div>`, { anim: 'slideU', x: x - 8, y: 660, w: 156, at: 2, d: 3.4 + i * 0.75, pad: '8px 4px', notape: true, color: i % 2 ? 'gold' : '' });
        });
        examTip(S, 'Soalan <span class="hl">faktor kemunculan</span> sangat popular. Nyatakan faktor <b>+ contoh</b>!', 2, { d: 8.4, y: 960 });
      },
    },
    nilaiScene([
      { text: 'Iktibarnya: **semangat cinta akan negara**.', pause: 0.3 },
      'Kita boleh menunjukkannya dengan menghormati lagu dan bendera kebangsaan, menggunakan bahasa kebangsaan, dan menjaga keharmonian negara.',
    ], 'Semangat cinta akan negara', (D) => D.heart(), { iw: 260, ix: 410, note: 'Hormati <span class="hl">lagu & bendera kebangsaan</span> · guna <span class="hl">bahasa kebangsaan</span> · jaga <span class="hl">keharmonian</span>.', doodle: 'Hati merah, bintang.' }),
    closingScene([
      { text: 'Ringkasnya, enam faktor ini membangkitkan kesedaran rakyat: agama, penulisan kreatif, media cetak, pendidikan, golongan intelektual, serta pengaruh luar.', pause: 0.3 },
      'Seterusnya, bagaimana golongan intelektual, akhbar dan persatuan menggerakkan perjuangan? Jom tonton episod 2.7!',
    ], 'Episod seterusnya', '2.7 Perkembangan Nasionalisme', { summary: '6 faktor: <span class="hl">A</span>gama · <span class="hl">P</span>enulisan · <span class="hl">M</span>edia · <span class="hl">P</span>endidikan · <span class="hl">I</span>ntelektual · <span class="hl">L</span>uar' }),
    endScene(),
  ],
};
