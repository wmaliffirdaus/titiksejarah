// BAB 4 · EPISOD 01 – Pengenalan Bab 4: Era Peralihan Kuasa British di Negara Kita (≈ 70–80 s)
// Chapter 1 series template (episodes/ep01.js): same structure, pace, transitions and end card.
// Fact source: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 92–93 (Sinopsis, Inti Pati Pembelajaran, Elemen Kewarganegaraan, garis masa).
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436';

export default {
  id: 'b4_01',
  file: '01_Bab4_Pengenalan',
  title: 'Bab 4 – Era Peralihan Kuasa British di Negara Kita',
  header: { chip: 'BAB 4 • INTRO', sub: 'Era Peralihan Kuasa British' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4',
  music: { key: 60, bpm: 104, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Perang Dunia Kedua tamat. Jepun menyerah kalah… tapi **siapa** yang memerintah negara kita selepas itu?', pause: 0.5 },
        'Jawapannya: **British** kembali! Jom lihat apa yang berlaku.',
      ],
      board: {
        name: 'Hook – siapa memerintah selepas Jepun?',
        visual: 'Tajuk "Selepas Jepun menyerah kalah…"; peta lakaran Tanah Melayu, Sarawak & Sabah; tanda soal merah; kapal British meluncur masuk; cop merah "BRITISH KEMBALI!".',
        doodle: 'Peta Semenanjung + Borneo, tanda soal, kapal layar; cop.',
        text: '"Selepas Jepun menyerah kalah…" · "SIAPA MEMERINTAH?" · "BRITISH KEMBALI!"',
        anim: 'Tajuk ditulis; peta dilakar; tanda soal pop; kapal meluncur masuk; cop dihentak pada "British".',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Selepas Jepun <span class="red">menyerah kalah</span>…', { size: 'h2', x: 70, y: 300, w: 940, anim: 'none', at: 'start', d: -0.35, align: 'center' });
        S.map({ bounds: [[99.2, 0.6], [119.6, 7.6]], w: 900 }, { x: 90, y: 440, w: 900, anim: 'none', at: 'start', d: -0.35 });
        S.add(D.question(), { anim: 'none', x: 480, y: 560, w: 110, at: 'start', d: -0.35, out: 1 });
        S.text('SIAPA <span class="red">MEMERINTAH?</span>', { size: 'h2', x: 70, y: 800, w: 940, align: 'center', anim: 'none', at: 'start', d: -0.35 });
        S.add(D.ship({ hull: NAVY, sail: '#F3EBDD' }), { anim: 'slideR', x: 620, y: 930, w: 340, at: 1, d: 0 });
        S.card('<div class="t-h2" style="color:#FFFDF7;text-align:center">BRITISH<br><span style="font-size:44px">KEMBALI!</span></div>', { color: 'red', anim: 'stamp', x: 110, y: 950, w: 400, rot: -6, at: 1, d: 0.25 });
      },
    },
    {
      id: 'title', transition: 'wipe',
      lines: ['Ini **Titik Sejarah**! Bab 4 Sejarah Tingkatan 4: **Era Peralihan Kuasa British di Negara Kita**.'],
      board: {
        name: 'Tajuk bab & maskot',
        visual: 'Kad tajuk bab gaya buku nota; maskot rasmi Titik Sejarah muncul sebagai penyampai dengan belon kata.',
        doodle: 'Pil "BAB 4", garis bawah merah tulisan tangan, pelekat maskot (imej asal tanpa diubah).',
        text: 'BAB 4 · ERA PERALIHAN KUASA BRITISH DI NEGARA KITA · Sejarah Tingkatan 4 KSSM',
        anim: 'Tajuk ditulis (wipe), garis bawah dilukis, maskot pop, belon kata pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">BAB 4</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0 });
        S.text('ERA PERALIHAN<br>KUASA <span class="red">BRITISH</span><br>DI NEGARA KITA', { size: 'title', x: 40, y: 430, w: 1000, align: 'center', at: 0, d: 0.4, dur: 1.2, style: 'font-size:78px' });
        S.svg(D.underline(560), { x: 260, y: 715, w: 560, at: 0, d: 1.4, dur: 0.6 });
        S.text('Sejarah Tingkatan 4 • KSSM', { size: 'label', x: 60, y: 760, w: 960, align: 'center', at: 0.4 });
        S.mascot({ x: 110, y: 850, w: 330, at: 0.5, say: 'Jom kenali era <b class="red">penting</b> sebelum merdeka!', bx: 470, by: 900, bw: 480 });
      },
    },
    {
      id: 'tiga-wilayah', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Selepas perang, British kembali menguasai **Tanah Melayu**, **Sarawak** dan **Sabah**.', pause: 0.4 },
        '**Malayan Union** ditentang hebat. Majoriti rakyat **Sarawak** menentang penyerahan… tetapi di **Sabah**, tiada penentangan.',
      ],
      board: {
        name: 'Tiga wilayah, tiga reaksi',
        visual: 'Peta lakaran Tanah Melayu + Borneo; penanda pada Tanah Melayu, Sarawak dan Sabah; tiga label reaksi muncul ikut narasi.',
        doodle: 'Peta, penanda merah/emas, cop kecil.',
        text: 'TANAH MELAYU – Malayan Union ditentang hebat · SARAWAK – majoriti menentang penyerahan · SABAH – tiada penentangan',
        anim: 'Peta dilakar; penanda pop tepat pada nama wilayah; label reaksi meluncur masuk pada baris kedua.',
      },
      draw(S) {
        const at = S.map({ bounds: [[99.2, 0.6], [119.6, 7.6]], w: 940 }, { x: 70, y: 320, w: 940, at: 0, d: -0.2, dur: 1.0 });
        S.pin(at, 101.9, 3.9, '<b>Tanah Melayu</b>', { at: 0.25, color: RED, size: 1.0, fs: 40 });
        S.pin(at, 112.6, 2.4, '<b>Sarawak</b>', { at: 0.62, color: RED, size: 1.0, fs: 40, left: true });
        S.pin(at, 116.9, 5.4, '<b>Sabah</b>', { at: 0.8, color: GOLD, size: 1.0, fs: 40, left: true });
        const r = [['TANAH MELAYU', 'Malayan Union <span class="hl">ditentang hebat</span>', 1.02, RED], ['SARAWAK', 'Majoriti <span class="hl">menentang</span> penyerahan', 1.35, RED], ['SABAH', '<span class="hl">Tiada</span> penentangan', 1.85, NAVY]];
        r.forEach(([n, t, f, c], i) => S.card(`<div style="display:flex;align-items:center;gap:18px"><div style="font-family:Marker;font-size:36px;color:${c};width:250px;flex:none">${n}</div><div class="t-body" style="font-size:42px">${t}</div></div>`, { anim: 'slideL', x: 70, y: 770 + i * 170, w: 940, at: f, d: -0.1, pad: '14px 22px' }));
      },
    },
    {
      id: 'garis-masa', transition: 'flip', gap: 0.25,
      lines: [
        '**September 1945**, BMA dilaksanakan.',
        '**April 1946**, Malayan Union diperkenalkan.',
        '**Julai 1946**, Sarawak dan Sabah diserahkan kepada British.',
      ],
      board: {
        name: 'Garis masa bab',
        visual: 'Garis masa mendatar merah dengan tiga hentian bertarikh; setiap hentian ada ikon dan kad penerangan.',
        doodle: 'Kapal (BMA), skrol (Malayan Union), peta Borneo kecil / dokumen penyerahan.',
        text: 'Sept 1945 – BMA dilaksanakan · April 1946 – Malayan Union diperkenalkan · Julai 1946 – Sarawak & Sabah diserahkan kepada British',
        anim: 'Garis masa dilukis dari kiri; setiap hentian pop tepat pada tarikh yang disebut.',
      },
      draw(S, { D }) {
        S.text('GARIS <span class="hl">MASA</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
        S.add('<svg viewBox="0 0 940 40"><path d="M10 20 H900" stroke="#C93436" stroke-width="10" stroke-linecap="round"/><path d="M890 4 L930 20 L890 36 Z" fill="#C93436"/></svg>', { anim: 'wipe', x: 70, y: 640, w: 940, at: 0, d: 0, dur: 1.2, sfx: false });
        const stops = [['SEPT 1945', 'BMA dilaksanakan', D.ship({ hull: NAVY, waves: false }), 0], ['APRIL 1946', 'Malayan Union diperkenalkan', D.scroll('MU', { ts: 46 }), 1], ['JULAI 1946', 'Sarawak & Sabah diserahkan', D.treaty('1946'), 2]];
        stops.forEach(([d, t, ic, k], i) => {
          const x = 90 + i * 310;
          S.add(`<div style="width:44px;height:44px;border-radius:50%;background:${GOLD};border:5px solid ${NAVY}"></div>`, { anim: 'pop', x: x + 118, y: 638, w: 44, at: k, sfx: 'pop' });
          S.add(`<div style="text-align:center"><span class="pill" style="font-size:30px;padding:4px 16px">${d}</span></div>`, { anim: 'pop', x, y: 540, w: 280, at: k, d: 0.05, sfx: false });
          S.svg(ic, { x: x + 30, y: 730, w: 220, at: k, d: 0.15, dur: 0.8, sfx: false });
          S.card(`<div class="t-body" style="font-size:44px;text-align:center">${t}</div>`, { anim: 'slideU', x, y: 1010, w: 280, at: k, d: 0.3, pad: '12px 14px', rot: i % 2 ? 1 : -1 });
        });
      },
    },
    {
      id: 'penting', transition: 'paper',
      lines: [
        { text: 'Kenapa penting? Kita belajar **mempertahankan maruah bangsa**, sentiasa **berwaspada**,', pause: 0.15 },
        { text: 'dan menghargai **kepimpinan tokoh terdahulu**. Topik ini juga penting untuk **SPM**!' },
      ],
      board: {
        name: 'Kenapa bab ini penting?',
        visual: 'Tiga kad bernombor disusun menurun seperti nota ulang kaji; mentol idea di penjuru.',
        doodle: 'Mentol kuning, bintang emas.',
        text: '1 Mempertahankan maruah bangsa · 2 Sentiasa berwaspada · 3 Menghargai kepimpinan tokoh terdahulu · SPM',
        anim: 'Mentol pop; kad masuk satu demi satu mengikut narasi; bintang berdenyut pada perkataan SPM.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">PENTING</span>?', { size: 'title', x: 80, y: 320, w: 700, at: 0 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 190, at: 0, d: 0.4 });
        const card = (n, txt, y, at, color) => S.card(`<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:96px;color:${color}">${n}</div><div class="t-body">${txt}</div></div>`, { anim: 'slideL', x: 90, y, w: 880, at });
        card(1, 'Mempertahankan <span class="hl">maruah bangsa</span>', 520, 0.3, RED);
        card(2, 'Sentiasa <span class="hl">berwaspada</span>', 760, 0.75, NAVY);
        card(3, 'Menghargai <span class="hl">tokoh terdahulu</span>', 1000, 1.25, RED);
        S.add(D.star(), { anim: 'pop', x: 830, y: 990, w: 120, at: 1.8, pulse: [1.9] });
      },
    },
    {
      id: 'peta-siri', bg: 'grid', transition: 'slideUp', gap: 0.2,
      lines: [
        'Ada tujuh subtopik:',
        '4.1, British Military Administration.',
        '4.2, gagasan Malayan Union.',
        '4.3, reaksi penduduk tempatan terhadap Malayan Union.',
        '4.4, penyerahan Sarawak kepada British.',
        '4.5, reaksi penduduk tempatan terhadap penyerahan Sarawak.',
        '4.6, penyerahan Sabah kepada British.',
        '4.7, reaksi penduduk tempatan terhadap penyerahan Sabah.',
      ],
      board: {
        name: 'Peta siri – tujuh subtopik',
        visual: 'Laluan bertitik menurun dengan tujuh hentian bernombor; kad teks setiap subtopik.',
        doodle: 'Bulatan bernombor, laluan bertitik.',
        text: '4.1 BMA · 4.2 Gagasan Malayan Union · 4.3 Reaksi terhadap Malayan Union · 4.4 Penyerahan Sarawak · 4.5 Reaksi terhadap penyerahan Sarawak · 4.6 Penyerahan Sabah · 4.7 Reaksi terhadap penyerahan Sabah',
        anim: 'Setiap hentian pop dan kad teks meluncur masuk tepat ketika subtopik disebut.',
      },
      draw(S) {
        S.text('7 SUBTOPIK', { size: 'h2', x: 80, y: 290, w: 900, at: 0 });
        S.add('<svg viewBox="0 0 40 1000"><path d="M20 0 V1000" stroke="#172C63" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/></svg>', { anim: 'wipeD', x: 108, y: 380, w: 40, at: 0, d: 0.5, dur: 1.5, sfx: false, h: 960 });
        const rows = ['British Military Administration (BMA)', 'Gagasan Malayan Union', 'Reaksi terhadap Malayan Union', 'Penyerahan Sarawak kepada British', 'Reaksi terhadap penyerahan Sarawak', 'Penyerahan Sabah kepada British', 'Reaksi terhadap penyerahan Sabah'];
        rows.forEach((t, i) => {
          const y = 380 + i * 138, c = i % 2 ? NAVY : RED;
          S.add(`<div style="width:92px;height:92px;border-radius:50%;background:${c};border:5px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:34px;color:#F5C928">4.${i + 1}</div>`, { anim: 'pop', x: 82, y, w: 92, at: i + 1 });
          S.card(`<div class="t-body" style="font-size:40px">${t}</div>`, { anim: 'slideR', x: 200, y: y - 2, w: 800, at: i + 1, d: 0.12, pad: '12px 22px', notape: true });
        });
      },
    },
    {
      id: 'penutup', transition: 'paper',
      lines: [{ text: 'Jom kita mulakan dengan **BMA**, pentadbiran tentera British selepas perang!', pause: 0.2 }],
      tail: 0.9,
      board: {
        name: 'Penutup & seruan',
        visual: 'Maskot rasmi menunjuk ke arah kad "Episod seterusnya".',
        doodle: 'Pelekat maskot, anak panah melengkung, kad episod seterusnya.',
        text: 'Jom mulakan! · Seterusnya: 4.1 British Military Administration',
        anim: 'Maskot pop, anak panah dilukis, kad pop.',
      },
      draw(S) {
        S.text('Jom <span class="hl">mulakan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Episod seterusnya</div><div class="t-h3">4.1 British Military Administration</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin, latar sinar kuning.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Imej DP fade + zoom-in lembut; nama jenama pop; slogan ditulis; butang follow pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
