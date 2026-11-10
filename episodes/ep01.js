// EPISOD 01 – Pengenalan Bab 1: Warisan Negara Bangsa (≈ 45–60 s)
export default {
  id: '01',
  file: '01_Bab1_Introduction',
  title: 'Bab 1 – Warisan Negara Bangsa',
  header: { chip: 'BAB 1 • INTRO', sub: 'Warisan Negara Bangsa' },
  music: { key: 60, bpm: 104, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Betul ke kerajaan Melayu sudah mempunyai **sistem pemerintahan** sebelum kedatangan kuasa Barat?', pause: 0.5 },
        'Jawapannya: ya! Jom lihat buktinya.',
      ],
      board: {
        name: 'Hook – soalan cepu emas',
        visual: 'Istana Melayu dilukis di tengah, kapal layar Barat menghampiri dari kanan bawah, tanda soal merah besar.',
        doodle: 'Istana bertingkat (bumbung navy-merah), kapal layar, tanda soal; cop merah "YA!".',
        text: '"Sebelum kuasa BARAT datang…" · "YA! SUDAH ADA"',
        anim: 'Istana dilukis garis demi garis; tanda soal pop; kapal meluncur masuk; cop "YA!" dihentak.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Sebelum kuasa <span class="red">BARAT</span> datang…', { size: 'h2', x: 70, y: 300, w: 940, at: 0, d: 0.1, align: 'center' });
        S.svg(D.palace(), { x: 120, y: 520, w: 640, at: 0, d: 0.3, dur: 1.6 });
        S.text('Kerajaan Melayu', { size: 'label', x: 240, y: 960, w: 400, at: 0.45, align: 'center' });
        S.add(D.question(), { anim: 'pop', x: 820, y: 500, w: 130, at: 0.5, out: 1 });
        S.add(D.ship({ hull: '#172C63', sail: '#F3EBDD' }), { anim: 'slideR', x: 610, y: 1040, w: 360, at: 0.7 });
        S.text('Kapal Barat', { size: 'note', x: 690, y: 1290, w: 300, at: 0.8 });
        S.card('<div class="t-h2" style="color:#FFFDF7;text-align:center">YA!<br><span style="font-size:40px">SUDAH ADA</span></div>', { color: 'red', anim: 'stamp', x: 650, y: 480, w: 340, rot: -7, at: 1, d: 0.2 });
      },
    },
    {
      id: 'title', transition: 'wipe',
      lines: ['Ini **Titik Sejarah**! Bab 1 Sejarah Tingkatan 4: **Warisan Negara Bangsa**.'],
      board: {
        name: 'Tajuk bab & maskot',
        visual: 'Kad tajuk bab gaya buku nota; maskot rasmi Titik Sejarah muncul sebagai penyampai dengan belon kata.',
        doodle: 'Pil "BAB 1", garis bawah merah tulisan tangan, pelekat maskot (imej asal tanpa diubah).',
        text: 'BAB 1 · WARISAN NEGARA BANGSA · Sejarah Tingkatan 4 KSSM',
        anim: 'Tajuk ditulis (wipe), garis bawah dilukis, maskot pop, belon kata pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">BAB 1</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0 });
        S.text('WARISAN<br>NEGARA <span class="red">BANGSA</span>', { size: 'title', x: 60, y: 430, w: 960, align: 'center', at: 0, d: 0.4, dur: 1.2 });
        S.svg(D.underline(560), { x: 260, y: 630, w: 560, at: 0, d: 1.4, dur: 0.6 });
        S.text('Sejarah Tingkatan 4 • KSSM', { size: 'label', x: 60, y: 680, w: 960, align: 'center', at: 0.4 });
        S.mascot({ x: 110, y: 780, w: 330, at: 0.5, say: 'Jom belajar sejarah dengan cara yang <b class="red">mudah</b> & seronok!', bx: 470, by: 830, bw: 480 });
      },
    },
    {
      id: 'maksud', bg: 'grid', transition: 'paper',
      lines: [
        { text: '**Negara bangsa** ialah negara yang berdaulat, mempunyai wilayah, rakyat dan kerajaan sendiri.', pause: 0.5 },
        'Ciri-ciri ini sudah wujud dalam kerajaan Alam Melayu sejak dahulu. Itulah **warisan** kita hingga hari ini.',
      ],
      board: {
        name: 'Apa itu Warisan Negara Bangsa?',
        visual: 'Peta minda: hab "NEGARA BANGSA" di tengah dengan empat cabang ciri utama.',
        doodle: 'Mahkota (berdaulat), glob (wilayah), dua watak rakyat, istana (kerajaan); anak panah melengkung.',
        text: 'NEGARA BANGSA · Berdaulat · Wilayah · Rakyat · Kerajaan · "Dahulu ➜ Kini = WARISAN"',
        anim: 'Hab pop; setiap cabang muncul serentak dengan kata kunci dalam narasi; sepanduk akhir meluncur naik.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">NEGARA<br>BANGSA</div>', { color: 'navy', x: 350, y: 620, w: 380, at: 0, d: 0.1 });
        S.arrow(470, 615, 330, 545, { at: 0.3, color: '#C93436' });
        S.svg(D.crown(), { x: 90, y: 320, w: 200, at: 0.3 });
        S.text('Berdaulat', { size: 'label', x: 70, y: 470, w: 240, align: 'center', at: 0.32 });
        S.arrow(610, 615, 780, 520, { at: 0.48, color: '#C93436' });
        S.svg(D.globe(), { x: 760, y: 300, w: 190, at: 0.48 });
        S.text('Wilayah', { size: 'label', x: 730, y: 495, w: 250, align: 'center', at: 0.5 });
        S.arrow(450, 780, 290, 880, { at: 0.62, color: '#C93436' });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 60, y: 860, w: 140, at: 0.62, dur: 0.9 });
        S.svg(D.wanita({ pose: 'down' }), { x: 190, y: 860, w: 140, at: 0.66, dur: 0.9 });
        S.text('Rakyat', { size: 'label', x: 90, y: 1050, w: 240, align: 'center', at: 0.68 });
        S.arrow(630, 780, 760, 880, { at: 0.76, color: '#C93436' });
        S.svg(D.palace(), { x: 620, y: 880, w: 340, at: 0.76 });
        S.text('Kerajaan', { size: 'label', x: 660, y: 1150, w: 260, align: 'center', at: 0.8 });
        S.card('<div class="t-body" style="text-align:center"><b>Dahulu ➜ Kini</b> = <span class="hl">WARISAN</span></div>', { color: 'gold', anim: 'slideU', x: 220, y: 1210, w: 640, at: 1, d: 0.3 });
      },
    },
    {
      id: 'penting', transition: 'flip',
      lines: [
        { text: 'Kenapa penting? Ia bukti kita sudah ada **sistem pemerintahan yang tersusun**,', pause: 0.15 },
        { text: 'menjadi **asas** negara kita hari ini, dan kerap diuji dalam **SPM**!' },
      ],
      board: {
        name: 'Kenapa bab ini penting?',
        visual: 'Tiga kad bernombor disusun menurun seperti nota ulang kaji; mentol idea di penjuru.',
        doodle: 'Mentol kuning, tanda semak hijau, bintang emas.',
        text: '1 Sistem pemerintahan tersusun · 2 Asas negara hari ini · 3 Kerap diuji dalam SPM',
        anim: 'Mentol pop; kad masuk satu demi satu mengikut narasi; bintang berdenyut pada perkataan SPM.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">PENTING</span>?', { size: 'title', x: 80, y: 320, w: 700, at: 0 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 190, at: 0, d: 0.4 });
        const card = (n, txt, y, at, color) => S.card(`<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:96px;color:${color}">${n}</div><div class="t-body">${txt}</div></div>`, { anim: 'slideL', x: 90, y, w: 880, at });
        card(1, 'Masyarakat kita sudah ada <span class="hl">sistem pemerintahan tersusun</span>', 520, 0.25, '#C93436');
        card(2, 'Menjadi <span class="hl">asas</span> kepada negara kita hari ini', 760, 1.0, '#172C63');
        card(3, 'Kerap diuji dalam <span class="hl">SPM</span>!', 1000, 1.6, '#C93436');
        S.add(D.star(), { anim: 'pop', x: 830, y: 990, w: 120, at: 1.75, pulse: [1.85] });
      },
    },
    {
      id: 'peta-siri', bg: 'grid', transition: 'slideUp', gap: 0.2,
      lines: [
        'Ada empat subtopik:',
        '1.1, latar belakang negara bangsa sebelum kedatangan Barat.',
        '1.2, ciri-ciri negara bangsa Kesultanan Melayu Melaka.',
        '1.3, sistem pentadbiran dan undang-undang.',
        '1.4, peranan pemerintah dan rakyat.',
      ],
      board: {
        name: 'Peta siri – empat subtopik',
        visual: 'Laluan bertitik (dotted path) menurun dengan empat hentian bernombor, setiap satu dengan ikon.',
        doodle: 'Peta mini, istana, neraca keadilan, watak sultan & rakyat.',
        text: '1.1 Latar Belakang Negara Bangsa Sebelum Kedatangan Barat · 1.2 Ciri-ciri Negara Bangsa KMM · 1.3 Keunggulan Sistem Pentadbiran & Undang-undang · 1.4 Peranan Pemerintah & Rakyat',
        anim: 'Setiap hentian pop dan kad teks meluncur masuk tepat ketika subtopik disebut.',
      },
      draw(S, { D }) {
        S.text('4 SUBTOPIK', { size: 'h2', x: 80, y: 300, w: 900, at: 0 });
        S.add('<svg viewBox="0 0 40 1000"><path d="M20 0 V1000" stroke="#172C63" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/></svg>', { anim: 'wipeD', x: 140, y: 410, w: 40, at: 0, d: 0.5, dur: 1.5, sfx: false });
        const rows = [
          ['1.1', 'Latar Belakang Negara Bangsa Sebelum Kedatangan Barat', D.globe(), '#C93436'],
          ['1.2', 'Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka', D.palace(), '#172C63'],
          ['1.3', 'Keunggulan Sistem Pentadbiran & Undang-undang', D.scales(), '#C93436'],
          ['1.4', 'Peranan Pemerintah & Rakyat', D.cycle(), '#172C63'],
        ];
        rows.forEach(([n, t, icon, c], i) => {
          const y = 410 + i * 235;
          S.add(`<div style="width:120px;height:120px;border-radius:50%;background:${c};border:5px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:42px;color:#F5C928">${n}</div>`, { anim: 'pop', x: 100, y, w: 120, at: i + 1 });
          S.card(`<div class="t-body" style="font-size:44px">${t}</div>`, { anim: 'slideR', x: 250, y: y - 4, w: 540, at: i + 1, d: 0.15, pad: '16px 24px' });
          S.svg(icon, { x: 815, y: y, w: 160, at: i + 1, d: 0.3, dur: 0.9, sfx: false });
        });
      },
    },
    {
      id: 'penutup', transition: 'paper',
      lines: [{ text: 'Jom kita fahami bagaimana **warisan negara bangsa** bermula!', pause: 0.2 }],
      tail: 0.9,
      board: {
        name: 'Penutup & seruan',
        visual: 'Maskot rasmi menunjuk ke arah kad "Episod seterusnya".',
        doodle: 'Pelekat maskot, anak panah melengkung, kad episod seterusnya.',
        text: 'Jom mulakan! · Seterusnya: 1.1 Latar Belakang Negara Bangsa',
        anim: 'Maskot pop, anak panah dilukis, kad pop.',
      },
      draw(S, { D }) {
        S.text('Jom <span class="hl">mulakan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: '#C93436', bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Episod seterusnya</div><div class="t-h3">1.1 Latar Belakang Negara Bangsa</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin, latar sinar kuning.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Imej DP fade + zoom-in lembut; nama jenama pop; slogan ditulis; butang follow pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
