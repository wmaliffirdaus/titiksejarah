// BAB 2 · EPISOD 09 – Subtopik 2.8: Kesan Perkembangan Nasionalisme (≈ 3–4 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, who } from './lib2.js';

const aspect = (S, n, name, color) => S.add(`<div style="display:flex;align-items:center;gap:16px"><div style="width:96px;height:96px;border-radius:50%;background:${color};border:5px solid #172C63;color:#F5C928;font-family:Marker;font-size:44px;display:flex;align-items:center;justify-content:center">${n}</div><div class="t-h2" style="font-size:58px">${name}</div></div>`, { anim: 'pop', x: 60, y: 295, w: 960, at: 0, d: -0.3 });

export default {
  id: '09',
  file: '09_Bab2_Subtopik_2.8',
  title: 'Kesan Perkembangan Nasionalisme',
  header: { chip: 'BAB 2 • 2.8', sub: 'Kesan Nasionalisme' },
  src: SRC,
  music: { key: 64, bpm: 100, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Akhbar, persatuan, karya dan tuntutan rakyat. Adakah semua perjuangan ini membuahkan hasil?', pause: 0.5 },
        'Ya! Kesannya dirasai dalam **politik**, **ekonomi** dan **sosial**.',
      ],
      board: {
        name: 'Hook – adakah ia berhasil?',
        visual: 'Pokok doodle tumbuh dari benih "perjuangan"; tiga buah berlabel POLITIK, EKONOMI, SOSIAL muncul.',
        doodle: 'Pokok (batang navy, daun kuning), tiga buah merah berlabel, tanda soal.',
        text: 'Berhasilkah perjuangan? ➜ POLITIK · EKONOMI · SOSIAL',
        anim: 'Pokok dilukis; tanda soal pop; tiga buah pop serentak dengan kata kunci.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Ada <span class="red">hasilnya</span>?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        const R = D.R;
        let tree = R.rect(170, 260, 60, 220, { fill: '#7A4A2A' }) + R.ellipse(200, 190, 380, 280, { fill: '#8FA77A' }) + R.line(0, 480, 400, 480, { strokeWidth: 3 });
        S.svg(`<svg viewBox="0 0 400 490" xmlns="http://www.w3.org/2000/svg">${tree}</svg>`, { x: 320, y: 450, w: 440, at: 0, d: 0.6, dur: 1.4 });
        S.add(D.question(), { anim: 'pop', x: 820, y: 470, w: 100, at: 0, d: 3.0, out: 1 });
        [['POLITIK', 350, 560, 0.4], ['EKONOMI', 560, 520, 1.2], ['SOSIAL', 450, 700, 2.0]].forEach(([t, x, y, d]) => S.card(`<div class="t-h3" style="color:#FFFDF7;text-align:center;font-size:36px">${t}</div>`, { color: 'red', anim: 'pop', x, y, w: 220, at: 1, d, pad: '8px 6px', notape: true }));
        S.text('benih perjuangan', { size: 'note', x: 340, y: 1010, w: 400, align: 'center', at: 0, d: 1.6 });
      },
    },
    titleScene('2.8', 'Kesan<br><span class="red">Perkembangan</span><br>Nasionalisme', 'Ini Titik Sejarah, Subtopik 2.8: **Kesan Perkembangan Nasionalisme**.', { uy: 690, my: 760 }),
    {
      id: 'politik', transition: 'paper',
      lines: [
        'Dari segi **politik**, perjuangan orang Melayu menuntut hak menyebabkan British memperkenalkan **dasar desentralisasi**, iaitu mengembalikan sebahagian kuasa kepada kerajaan negeri.',
        'Dalam kalangan orang Cina, golongan revolusi memberikan perhatian kepada **pendidikan** masyarakat Cina.',
        'Orang India pula berusaha membentuk **identiti sendiri**, dan mementingkan **perpaduan**.',
      ],
      board: {
        name: 'Kesan politik',
        visual: 'Bangunan pentadbiran pusat dengan anak panah kuasa mengalir ke tiga bangunan negeri (desentralisasi); dua kad untuk masyarakat Cina & India.',
        doodle: 'Bangunan parlimen besar, tiga istana kecil, anak panah, sekolah, orang ramai berpimpin.',
        text: 'Melayu tuntut hak ➜ British perkenal dasar desentralisasi · Cina: golongan revolusi beri perhatian kepada pendidikan · India: bentuk identiti sendiri & pentingkan perpaduan',
        anim: 'Bangunan dilukis; anak panah kuasa dilukis ke negeri; kad Cina & India meluncur masuk.',
      },
      draw(S, { D }) {
        aspect(S, 1, 'Politik', RED);
        S.svg(D.parliament(), { x: 380, y: 410, w: 320, at: 0, d: 0.4 });
        [[90, 730], [430, 760], [770, 730]].forEach(([x, y], i) => {
          S.svg(D.palace(), { x, y, w: 220, at: 0, d: 4.2 + i * 0.3, sfx: i ? false : 'pencil' });
          S.arrow(540, 640, x + 110, y + 20, { at: 0, d: 4.0 + i * 0.3, color: RED, bend: 0.1 });
        });
        S.card('<div class="t-label" style="color:#C93436">Melayu tuntut hak ➜</div><div class="t-h3" style="font-size:40px">Dasar desentralisasi</div><div class="t-body" style="font-size:32px">kembalikan sebahagian kuasa kepada negeri</div>', { color: 'gold', anim: 'pop', x: 60, y: 420, w: 330, at: 0, d: 2.2, pad: '10px 14px', rot: -2 });
        S.card('<div class="t-label" style="color:#C93436">Masyarakat Cina</div><div class="t-body" style="font-size:36px">Golongan revolusi beri perhatian kepada <span class="hl">pendidikan</span></div>', { anim: 'slideL', x: 60, y: 990, w: 470, at: 1, d: 0.3, pad: '10px 18px' });
        S.card('<div class="t-label" style="color:#C93436">Masyarakat India</div><div class="t-body" style="font-size:36px">Bentuk <span class="hl">identiti sendiri</span> & pentingkan <span class="hl">perpaduan</span></div>', { anim: 'slideR', x: 550, y: 990, w: 470, at: 2, d: 0.2, pad: '10px 18px' });
      },
    },
    {
      id: 'ekonomi', transition: 'slideUp',
      lines: [
        'Dari segi **ekonomi**, nasionalisme membangkitkan semangat orang Melayu untuk **berniaga**.',
        'Dana juga diwujudkan untuk membantu orang Melayu **melanjutkan pelajaran ke luar negara**.',
      ],
      board: {
        name: 'Kesan ekonomi',
        visual: 'Gerai/kedai doodle dengan watak peniaga Melayu; tabung dana bersyiling dengan anak panah ke kapal terbang/buku "luar negara".',
        doodle: 'Gerai pasar, watak peniaga, timbunan syiling, glob, buku.',
        text: 'Semangat orang Melayu untuk berniaga · dana bantu orang Melayu sambung belajar ke luar negara',
        anim: 'Gerai dilukis; watak pop; syiling pop; anak panah ke glob dilukis.',
      },
      draw(S, { D }) {
        aspect(S, 2, 'Ekonomi', NAVY);
        S.svg(D.market(), { x: 70, y: 430, w: 440, at: 0, d: 0.6 });
        S.svg(D.rakyat({ pose: 'present', prop: 'coins' }), { x: 600, y: 420, w: 200, at: 0, d: 1.4 });
        S.card('<div class="t-body" style="font-size:42px">Semangat orang Melayu untuk <span class="hl">berniaga</span></div>', { anim: 'slideR', x: 60, y: 760, w: 960, at: 0, d: 2.4 });
        S.svg(D.coins(), { x: 90, y: 940, w: 220, at: 1, d: 0.2 });
        S.arrow(330, 1040, 470, 1040, { at: 1, d: 1.2, color: RED, bend: -0.2 });
        S.svg(D.globe(), { x: 490, y: 930, w: 190, at: 1, d: 1.6 });
        S.card('<div class="t-body" style="font-size:36px"><b>Dana</b> ➜ sambung belajar <span class="hl">ke luar negara</span></div>', { color: 'gold', anim: 'pop', x: 700, y: 940, w: 320, at: 1, d: 2.6, pad: '10px 14px' });
      },
    },
    {
      id: 'sosial', transition: 'paper',
      lines: [
        'Dari segi **sosial**, tuntutan pendidikan membolehkan ramai orang Melayu melanjutkan pelajaran di **SITC**, dan menjadi guru.',
        '**Ibu Zain**, penggerak majalah **Bulan Melayu**, tidak putus-putus mengingatkan kaum wanita supaya mendapat pendidikan.',
        'Masyarakat India dan Cina juga mula menjaga kebajikan masyarakat masing-masing.',
      ],
      board: {
        name: 'Kesan sosial',
        visual: 'Maktab SITC dengan barisan guru; watak Ibu Zain (generik, bertudung) dengan majalah Bulan Melayu; kad kebajikan masyarakat.',
        doodle: 'Bangunan SITC, watak guru, watak wanita bertudung, majalah, hati.',
        text: 'Ramai orang Melayu belajar di SITC ➜ jadi guru · Ibu Zain (Bulan Melayu) – pendidikan wanita · masyarakat India & Cina jaga kebajikan masing-masing',
        anim: 'SITC dilukis; guru pop; watak Ibu Zain dilukis; majalah pop; kad akhir meluncur.',
      },
      draw(S, { D }) {
        aspect(S, 3, 'Sosial', '#3A8A4A');
        S.svg(D.school('SITC', RED), { x: 60, y: 420, w: 320, at: 0, d: 0.6 });
        [0, 1, 2].forEach((i) => S.svg(D.rakyat({ pose: 'hold', prop: 'book', shirt: ['#3F5DA8', '#C93436', '#172C63'][i] }), { x: 420 + i * 150, y: 430, w: 130, at: 0, d: 3.2 + i * 0.3, dur: 0.7, sfx: i ? false : 'pencil' }));
        S.card('<div class="t-body" style="font-size:36px">Ramai belajar di SITC ➜ <span class="hl">jadi guru</span></div>', { anim: 'pop', x: 420, y: 620, w: 600, at: 0, d: 4.6, pad: '10px 18px' });
        who(S, D.wanita({ pose: 'present', prop: 'book' }), 'Ibu Zain', 'pendidikan wanita', { x: 90, y: 760, w: 150, at: 1, d: 0, ty: 190, tw: 250 });
        S.svg(D.newspaper('Bulan Melayu', { ts: 24, color: '#C9A000' }), { x: 320, y: 770, w: 170, at: 1, d: 1.6 });
        S.card('<div class="t-body" style="font-size:36px">Ingatkan kaum wanita supaya <span class="hl">mendapat pendidikan</span></div>', { anim: 'slideR', x: 520, y: 800, w: 500, at: 1, d: 2.6, pad: '10px 18px' });
        S.card('<div class="t-body" style="font-size:36px">Masyarakat <b>India & Cina</b> mula menjaga <span class="hl">kebajikan</span> masyarakat masing-masing</div>', { color: 'gold', anim: 'slideU', x: 60, y: 1080, w: 960, at: 2, d: 0.2, pad: '10px 22px' });
      },
    },
    {
      id: 'kaitan', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Jadi, apakah maksud semua ini untuk negara kita?', pause: 0.3 },
        'Menjelang Perang Dunia Kedua, rakyat sudah mempunyai **pemimpin**, **akhbar** dan **persatuan**.',
        'Inilah asas penting yang kemudiannya menyumbang kepada perjuangan menuntut **kemerdekaan** tanah air.',
      ],
      board: {
        name: 'Kaitan: asas ke arah kemerdekaan',
        visual: 'Tiga tiang (PEMIMPIN · AKHBAR · PERSATUAN) menyokong jalan yang menuju papan tanda "KEMERDEKAAN"; tag KAITAN.',
        doodle: 'Tiga tiang bangunan berlabel, jalan berliku, papan tanda, bintang.',
        text: 'KAITAN · Menjelang PD2: pemimpin + akhbar + persatuan ➜ asas perjuangan kemerdekaan',
        anim: 'Tiang naik satu demi satu; jalan dilakar; papan tanda pop; bintang berdenyut.',
      },
      draw(S, { D }) {
        S.add('<span class="twtag">KAITAN</span>', { anim: 'fade', x: 60, y: 300, at: 0, sfx: false });
        S.text('Asas ke arah <span class="hl">kemerdekaan</span>', { size: 'h2', x: 60, y: 350, w: 960, align: 'center', at: 0, d: 0.2 });
        [['PEMIMPIN', D.rakyat({ pose: 'up' })], ['AKHBAR', D.newspaper('AKHBAR', { ts: 30 })], ['PERSATUAN', D.crowd(3)]].forEach(([t, icon], i) => {
          S.svg(icon, { x: 90 + i * 320, y: 480, w: i === 2 ? 260 : 180, at: 1, d: 0.6 + i * 0.9, dur: 0.8 });
          S.card(`<div class="t-h3" style="text-align:center;font-size:40px">${t}</div>`, { color: i === 1 ? 'gold' : '', anim: 'slideU', x: 70 + i * 320, y: 760, w: 300, at: 1, d: 0.8 + i * 0.9, notape: true });
        });
        S.add(`<svg viewBox="0 0 960 120"><path d="M20 90 Q240 20 480 70 T940 40" stroke="#172C63" stroke-width="10" fill="none" stroke-dasharray="26 18" stroke-linecap="round"/></svg>`, { anim: 'wipe', x: 60, y: 880, w: 960, at: 2, d: 0, dur: 1.6 });
        S.card('<div class="t-h2" style="text-align:center;color:#FFFDF7">KEMERDEKAAN</div>', { color: 'red', anim: 'stamp', x: 260, y: 1030, w: 560, at: 2, d: 2.4, rot: -2 });
        S.add(D.star(), { anim: 'pop', x: 850, y: 1020, w: 120, at: 2, d: 3.0, pulse: [{ at: 2, d: 3.8 }] });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Recap kesan perkembangan nasionalisme!', pause: 0.2 },
        'Politik: dasar desentralisasi.',
        'Ekonomi: semangat berniaga, dan dana pendidikan ke luar negara.',
        'Sosial: ramai menjadi guru, dan pendidikan wanita digalakkan.',
      ],
      board: {
        name: 'Recap tiga aspek + tip SPM',
        visual: 'Tiga lajur berwarna (politik · ekonomi · sosial) dengan kata kunci; tip SPM tentang susunan jawapan.',
        doodle: 'Ikon parlimen, syiling, sekolah; lencana TIP SPM.',
        text: 'POLITIK: desentralisasi · EKONOMI: berniaga, dana belajar ke luar negara · SOSIAL: guru lepasan SITC, pendidikan wanita · TIP SPM: susun jawapan ikut aspek',
        anim: 'Lajur pop satu demi satu; tip SPM meluncur naik.',
      },
      draw(S, { D }) {
        S.text('RECAP <span class="hl">KESAN</span>', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        [['POLITIK', 'Dasar desentralisasi', D.parliament(), 'red'], ['EKONOMI', 'Semangat berniaga · dana belajar ke luar negara', D.coins(), 'navy'], ['SOSIAL', 'Guru lepasan SITC · pendidikan wanita', D.school('', RED), 'gold']].forEach(([t, b, icon, c], i) => {
          S.card(`<div class="t-h3" style="text-align:center;color:${c === 'gold' ? '#C93436' : '#F5C928'}">${t}</div><div style="height:170px"></div><div class="t-body" style="font-size:34px;text-align:center;${c === 'gold' ? '' : 'color:#F3EBDD'}">${b}</div>`, { color: c, anim: 'pop', x: 60 + i * 330, y: 410, w: 300, at: i + 1, pad: '14px 12px' });
          S.svg(icon, { x: 100 + i * 330, y: 490, w: 220, at: i + 1, d: 0.2, sfx: false });
        });
        examTip(S, 'Soalan kesan: susun jawapan ikut <span class="hl">politik, ekonomi, sosial</span>.', 3, { d: 2.4, y: 1030 });
      },
    },
    nilaiScene([
      { text: 'Iktibarnya: pentingnya **memanfaatkan media massa** untuk kedaulatan negara.', pause: 0.3 },
      'Dahulu, akhbar menyatukan rakyat menentang penjajah. Hari ini, gunakan media secara bijak: sebarkan maklumat yang benar, dan elakkan berita palsu.',
    ], 'Manfaatkan media massa untuk kedaulatan negara', (D) => D.newspaper('MEDIA', { ts: 34 }), { iw: 220, ix: 430, note: 'Dahulu akhbar menyatukan rakyat. Kini: sebar <span class="hl">maklumat benar</span>, elak <span class="hl">berita palsu</span>.', doodle: 'Akhbar "MEDIA", bintang.' }),
    closingScene([
      { text: 'Ringkasnya, perkembangan nasionalisme membawa perubahan dalam politik, ekonomi dan sosial negara kita.', pause: 0.3 },
      'Tahniah, anda sudah menamatkan semua subtopik Bab 2! Jom uji kefahaman anda dalam episod ulang kaji!',
    ], 'Episod seterusnya', 'Ulang Kaji Bab 2 + Kuiz', { summary: 'Kesan nasionalisme: <span class="hl">politik</span> · <span class="hl">ekonomi</span> · <span class="hl">sosial</span>.' }),
    endScene(),
  ],
};
