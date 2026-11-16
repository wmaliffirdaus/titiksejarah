// BAB 4 · EPISOD 04 – Subtopik 4.3: Reaksi Penduduk Tempatan terhadap Malayan Union (≈ 5–6 min)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 100–106 (+ Sinopsis ms. 92).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, MALAYA, NOW, officer, iconRow, numCard, banner, END } from './b4lib.js';

// songkok with a white band of mourning
const songkokPutih = (D) => `<svg viewBox="0 0 200 120">${D.R.path('M30 100 L36 30 Q100 12 164 30 L170 100 Q100 116 30 100 Z', { fill: NAVY })}${D.R.path('M33 60 Q100 76 167 60 L171 98 Q100 116 29 98 Z', { fill: PAPER, stroke: RED, strokeWidth: 4 })}</svg>`;
const newspaper = (D, name) => `<svg viewBox="0 0 260 200">${D.R.rect(10, 10, 240, 180, { fill: PAPER })}<text x="130" y="58" font-family="Marker" font-size="${name.length > 10 ? 26 : 34}" fill="${NAVY}" text-anchor="middle">${name}</text>${D.R.line(24, 72, 236, 72, { strokeWidth: 3 })}${D.R.rect(24, 86, 96, 86, { fill: '#DCE3EE', strokeWidth: 2 })}${[96, 116, 136, 156].map((y) => D.R.line(134, y, 236, y, { strokeWidth: 2 })).join('')}</svg>`;

export default {
  id: 'b4_04',
  file: '04_Bab4_Subtopik_4.3',
  title: 'Reaksi Penduduk Tempatan terhadap Malayan Union',
  header: { chip: 'BAB 4 • 4.3', sub: 'Reaksi terhadap Malayan Union' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.3)',
  music: { key: 60, bpm: 98, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Ribuan orang Melayu berhimpun, memakai lilitan **kain putih** di songkok… sebagai tanda **berkabung**.', pause: 0.45 },
        'Apa yang mereka tangisi? Kelahiran **Malayan Union**!',
      ],
      board: {
        name: 'Hook – "Hari Kematian"',
        visual: 'Frame pertama lengkap: barisan rakyat bersongkok berlilit kain putih, tajuk "BERKABUNG?"; kemudian cop merah "HARI KEMATIAN" dan label "1 APRIL 1946 · MALAYAN UNION".',
        doodle: 'Songkok berlilit kain putih, barisan watak rakyat, cop.',
        text: 'BERKABUNG? · HARI KEMATIAN · Malayan Union (1 April 1946)',
        anim: 'Watak & tajuk kelihatan pada 0:00; songkok besar pop; cop dihentak pada "Malayan Union".',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="red">berkabung?</span>', { size: 'title', x: 60, y: 290, w: 960, align: 'center', ...NOW });
        S.add(songkokPutih(D), { ...NOW, x: 390, y: 440, w: 300 });
        [[60, 'rakyat'], [270, 'petani'], [700, 'rakyat'], [880, 'pedagang']].forEach(([x, k], i) => S.svg(D[k]({ mood: 'sad', ...(k === 'rakyat' ? { hat: 'songkok' } : {}) }), { ...NOW, x, y: 650, w: 170 }));
        S.text('kain putih = tanda berkabung', { size: 'note', x: 340, y: 640, w: 400, align: 'center', ...NOW });
        S.stamp('HARI KEMATIAN', { x: 190, y: 1000, w: 700, at: 1, d: 0.6, fs: 84, style: 'text-align:center;white-space:nowrap' });
        S.add('<div style="text-align:center"><span class="pill">1 APRIL 1946 · MALAYAN UNION</span></div>', { anim: 'pop', x: 40, y: 1160, w: 1000, at: 1, d: 1.0 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.3: **Reaksi penduduk tempatan** terhadap Malayan Union.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.3"; tajuk; sepanduk bantahan doodle "TOLAK MALAYAN UNION".',
        doodle: 'Sepanduk, watak rakyat bersorak.',
        text: 'SUBTOPIK 4.3 · Reaksi penduduk tempatan terhadap Malayan Union',
        anim: 'Tajuk ditulis; sepanduk & watak pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.3</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Reaksi terhadap<br><span class="red">Malayan Union</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.add(banner(D, 'TOLAK MALAYAN UNION!', GOLD), { anim: 'pop', x: 290, y: 680, w: 500, at: 0, d: 0.7 });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 110, y: 760, w: 170, at: 0, d: 0.9, dur: 0.6, sfx: false });
        S.svg(D.wanita({ pose: 'cheer' }), { x: 800, y: 760, w: 170, at: 0, d: 1.0, dur: 0.6, sfx: false });
      },
    },
    {
      id: 'sebab', bg: 'grid', transition: 'paper',
      lines: [
        'Malayan Union ditentang oleh **Raja-raja Melayu**, **orang Melayu** dan **bekas pegawai British**.',
        'Mengapa? Malayan Union dianggap **penjajahan secara mutlak**.',
        'Sultan kehilangan **kedaulatan** dan **kuasa politik**. Syarat kewarganegaraan **jus soli** pula dianggap terlalu longgar.',
        'Cara MacMichael mendapatkan tandatangan juga dianggap **tidak sah**.',
      ],
      board: {
        name: 'Siapa menentang & mengapa',
        visual: 'Tiga watak penentang (Sultan, rakyat, pegawai British); empat kad sebab bernombor.',
        doodle: 'Sultan, rakyat, pegawai (ILUSTRASI), cop kecil.',
        text: 'Penentang: Raja-raja Melayu · Orang Melayu · Bekas pegawai British · Sebab: 1 Penjajahan mutlak · 2 Sultan hilang kedaulatan & kuasa politik · 3 Jus soli terlalu longgar · 4 Cara MacMichael tidak sah',
        anim: 'Watak pop mengikut sebutan; kad sebab meluncur masuk satu demi satu.',
      },
      draw(S, { D }) {
        S.text('Siapa & <span class="red">Mengapa?</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        [[D.sultan(), 'Raja-raja Melayu', 0.1], [D.rakyat({ pose: 'cheer' }), 'Orang Melayu', 0.32], [officer(D), 'Bekas pegawai British', 0.62]].forEach(([sv, l, f], i) => {
          S.svg(sv, { x: 110 + i * 320, y: 380, w: 150, at: f, dur: 0.6, sfx: 'pop' });
          S.text(l, { size: 'label', x: 40 + i * 320, y: 590, w: 300, align: 'center', at: f, d: 0.2, style: 'font-size:38px' });
        });
        const c = [['Penjajahan <b>secara mutlak</b>', 1, 0.3], ['Sultan hilang <span class="hl">kedaulatan</span> & kuasa politik', 2, 0.05], ['<i>Jus soli</i> <span class="hl">terlalu longgar</span>', 2, 0.6], ['Cara MacMichael <span class="hl">tidak sah</span>', 3, 0.3]];
        c.forEach(([t, k, f], i) => S.card(numCard(i + 1, t, i % 2 ? NAVY : RED, 38), { anim: 'slideL', x: 60 + (i % 2) * 490, y: 680 + Math.floor(i / 2) * 230, w: 470, at: k + f, pad: '8px 18px', notape: true }));
      },
    },
    {
      id: 'raja1', transition: 'flip',
      lines: [
        'Bagaimana Raja-raja Melayu menentang? Pertama, membawa kes ke **Mahkamah Tinggi England**.',
        'Persidangan Raja-raja Melayu di **Istana Iskandariah, Kuala Kangsar**, pada April 1946, memutuskan untuk membantah melalui mahkamah.',
        'Kedua, menghantar **surat bantahan** ke London. Sultan Kedah, Perak dan Johor mendakwa baginda **diperdaya** oleh MacMichael.',
        'Raja Perlis pula menghantar **telegram**, kerana tidak diberi peluang mendapatkan nasihat pembesar negeri.',
      ],
      board: {
        name: 'Bantahan Raja-raja Melayu (1 & 2)',
        visual: 'Dua kad bernombor: (1) neraca mahkamah + istana "Istana Iskandariah, Kuala Kangsar · April 1946"; (2) sampul surat ke London + telegram Raja Perlis.',
        doodle: 'Neraca, istana, sampul surat, kertas telegram.',
        text: '1 Kes ke Mahkamah Tinggi England (Persidangan Raja-raja, Istana Iskandariah, Kuala Kangsar, April 1946) · 2 Surat bantahan ke London: Sultan Kedah, Perak, Johor – diperdaya MacMichael · Raja Perlis – telegram',
        anim: 'Kad 1 pop dengan ikon neraca dilukis; kad 2 pop; sampul surat meluncur ke kanan "➜ LONDON".',
      },
      draw(S, { D }) {
        S.text('Bantahan <span class="hl">Raja-raja Melayu</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card(numCard(1, 'Kes ke <span class="hl">Mahkamah Tinggi England</span>', RED, 42), { anim: 'slideL', x: 60, y: 400, w: 720, at: 0, d: 0.6 });
        S.svg(D.scales(), { x: 810, y: 390, w: 200, at: 0, d: 1.0 });
        S.svg(D.palace(), { x: 70, y: 580, w: 260, at: 1, d: 0, dur: 0.8 });
        S.text('Istana Iskandariah,<br>Kuala Kangsar · April 1946', { size: 'label', x: 350, y: 610, w: 660, at: 1, d: 0.1, style: 'font-size:42px' });
        S.card(numCard(2, '<span class="hl">Surat bantahan</span> ke London', NAVY, 42), { anim: 'slideL', x: 60, y: 820, w: 720, at: 2, d: 0 });
        S.add(`<svg viewBox="0 0 220 150">${D.R.rect(10, 10, 200, 130, { fill: PAPER })}${D.R.path('M10 12 L110 82 L210 12', { strokeWidth: 3 })}</svg>`, { anim: 'slideR', x: 820, y: 820, w: 190, at: 2, d: 0.2 });
        S.text('Sultan Kedah, Perak & Johor: <b class="red">"diperdaya MacMichael"</b>', { size: 'body', x: 60, y: 1010, w: 960, at: 2, d: 0.55, style: 'font-size:40px' });
        S.text('Raja Perlis: <b>telegram</b> · tiada peluang dapatkan nasihat pembesar', { size: 'body', x: 60, y: 1100, w: 960, at: 3, d: 0, style: 'font-size:38px' });
      },
    },
    {
      id: 'raja2', bg: 'grid', transition: 'paper',
      lines: [
        'Ketiga, menyokong **Kongres Melayu**. Sultan Selangor menderma **15 ribu dolar**, dan merasmikan Kongres Melayu Pertama.',
        'Keempat, Permaisuri Perak, **Raja Perempuan Kelsom**, mengetuai perarakan wanita di Kuala Kangsar pada **28 Mei 1946**.',
        'Kelima, Raja-raja Melayu **memulaukan** upacara pelantikan Gabenor Malayan Union, **Sir Edward Gent**.',
        'Ribuan orang Melayu di Hotel Station melaungkan "**Daulat Tuanku!**" dan "**Hidup Melayu!**"',
      ],
      board: {
        name: 'Bantahan Raja-raja Melayu (3–5)',
        visual: 'Tiga kad bernombor bertindan dengan ikon: syiling "$15 ribu"; watak wanita bertudung memimpin perarakan; kerusi Gabenor dipangkah "BOIKOT"; belon laungan.',
        doodle: 'Syiling, watak permaisuri & wanita, pangkah merah, belon kata.',
        text: '3 Sokong Kongres Melayu – Sultan Selangor derma $15 ribu & rasmikan · 4 Raja Perempuan Kelsom ketuai perarakan wanita, Kuala Kangsar, 28 Mei 1946 · 5 Pulau pelantikan Gabenor Sir Edward Gent · "Daulat Tuanku!" "Hidup Melayu!"',
        anim: 'Kad meluncur masuk mengikut nombor; cop BOIKOT; belon laungan pop pada baris terakhir.',
      },
      draw(S, { D }) {
        S.text('Bantahan Raja-raja <span class="red">(3–5)</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card(numCard(3, 'Sokong <span class="hl">Kongres Melayu</span> · Sultan Selangor derma <b>$15 ribu</b>', RED, 38), { anim: 'slideL', x: 60, y: 400, w: 730, at: 0, d: 0.1 });
        S.add(D.coins(), { anim: 'pop', x: 820, y: 400, w: 190, at: 0, d: 0.75 });
        S.card(numCard(4, '<span class="hl">Raja Perempuan Kelsom</span> ketuai perarakan wanita · 28 Mei 1946', NAVY, 38), { anim: 'slideL', x: 60, y: 610, w: 730, at: 1, d: 0 });
        S.svg(D.wanita({ pose: 'up', tudung: GOLD, shirt: RED }), { x: 830, y: 590, w: 160, at: 1, d: 0.2, dur: 0.6, sfx: false });
        S.card(numCard(5, '<span class="hl">Pulau</span> pelantikan Gabenor <b>Sir Edward Gent</b>', RED, 38), { anim: 'slideL', x: 60, y: 830, w: 730, at: 2, d: 0 });
        S.stamp('BOIKOT', { x: 790, y: 840, w: 240, at: 2, d: 0.35, fs: 52, style: 'text-align:center' });
        S.add('<div class="bubble" style="font-size:52px;text-align:center">"Daulat Tuanku!" · <b class="red">"Hidup Melayu!"</b></div>', { anim: 'pop', x: 120, y: 1050, w: 840, at: 3, d: 0.2, sfx: 'ding' });
      },
    },
    {
      id: 'akhbar', transition: 'slideUp',
      lines: [
        'Rakyat pula bangkit! Akhbar **Majlis** menyiarkan berita Malayan Union pada **12 Oktober 1945**, sehari selepas MacMichael tiba.',
        'Akhbar **Utusan Melayu**, **Majlis** dan **Warta Negara** mengecam Malayan Union, menyeru orang Melayu berhimpun menentangnya, dan melaporkan perkembangan penentangan.',
      ],
      board: {
        name: 'Bantahan rakyat (1): akhbar Melayu',
        visual: 'Tiga akhbar doodle bertindan: Utusan Melayu (Singapura), Majlis (Kuala Lumpur), Warta Negara (Pulau Pinang); pil tarikh 12 Okt 1945.',
        doodle: 'Tiga muka depan akhbar, pembesar suara.',
        text: 'Majlis siar berita MU – 12 Okt 1945 · Utusan Melayu (Singapura) · Majlis (Kuala Lumpur) · Warta Negara (Pulau Pinang) · kecam MU · seru perhimpunan · lapor perkembangan',
        anim: 'Pil tarikh pop; setiap akhbar meluncur masuk tepat pada namanya.',
      },
      draw(S, { D }) {
        S.text('Bantahan <span class="red">Rakyat</span>: Akhbar', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add('<div style="text-align:center"><span class="pill">MAJLIS · 12 OKTOBER 1945</span></div>', { anim: 'pop', x: 40, y: 410, w: 1000, at: 0, d: 0.5 });
        [['UTUSAN MELAYU', 'Singapura', 0.12], ['MAJLIS', 'Kuala Lumpur', 0.22], ['WARTA NEGARA', 'Pulau Pinang', 0.32]].forEach(([n, p, f], i) => {
          S.add(newspaper(D, n), { anim: 'slideU', x: 60 + i * 330, y: 540, w: 300, at: 1 + f, rot: [-3, 2, -1][i], sfx: 'swish' });
          S.text(p, { size: 'label', x: 60 + i * 330, y: 790, w: 300, align: 'center', at: 1 + f, d: 0.2 });
        });
        [['Kecam MU', 0.55], ['Seru perhimpunan', 0.72], ['Lapor perkembangan', 0.88]].forEach(([t, f], i) => S.card(`<div class="t-h3" style="font-size:38px;text-align:center">${t}</div>`, { anim: 'pop', x: 60 + i * 330, y: 900, w: 300, at: 1 + f, pad: '12px 10px', notape: true, color: i === 0 ? 'gold' : '' }));
      },
    },
    {
      id: 'tokoh', bg: 'grid', transition: 'paper',
      lines: [
        'Cendekiawan dan pemimpin seperti **Dato\' Onn Jaafar**, **Za\'ba** dan **Dato\' Nik Ahmad Kamil** menggerakkan orang Melayu menentang Malayan Union.',
        'Tokoh wanita seperti **Cikgu Zaharah Abdullah** dan **Halimahton Abd Majid** menjadi benteng barisan hadapan.',
        'Persatuan Melayu seperti **SABERKAS**, Persatuan Melayu Kedah dan Persatuan Melayu Selangor pula menghimpunkan orang Melayu dalam rapat umum.',
      ],
      board: {
        name: 'Bantahan rakyat (2): cendekiawan, wanita, persatuan',
        visual: 'Tiga lajur: CENDEKIAWAN (tag nama), WANITA (tag nama), PERSATUAN (sepanduk) – watak doodle generik berlabel ILUSTRASI.',
        doodle: 'Watak bersongkok, watak wanita bertudung, sepanduk persatuan.',
        text: 'Cendekiawan: Dato\' Onn Jaafar · Za\'ba · Dato\' Nik Ahmad Kamil · Wanita: Cikgu Zaharah Abdullah · Halimahton Abd Majid · Persatuan: SABERKAS · Persatuan Melayu Kedah · Persatuan Melayu Selangor',
        anim: 'Setiap lajur muncul pada barisnya; tag nama pop tepat pada nama.',
      },
      draw(S, { D }) {
        S.text('Tokoh & <span class="hl">Persatuan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.illus({ x: 870, y: 300, at: 0, d: 0 });
        S.svg(D.rakyat({ hat: 'songkok', pose: 'point' }), { x: 60, y: 400, w: 170, at: 0, d: 0, dur: 0.6 });
        [['DATO\' ONN JAAFAR', 0.15], ['ZA\'BA', 0.28], ['DATO\' NIK AHMAD KAMIL', 0.4]].forEach(([n, f], i) => S.tag(n, '', { x: 250, y: 400 + i * 80, w: 520, at: f }));
        S.svg(D.wanita({ pose: 'up' }), { x: 60, y: 690, w: 170, at: 1, d: 0, dur: 0.6 });
        [['CIKGU ZAHARAH ABDULLAH', 0.2], ['HALIMAHTON ABD MAJID', 0.5]].forEach(([n, f], i) => S.tag(n, i ? 'Rembau' : 'Batu Pahat', { x: 250, y: 700 + i * 110, w: 520, at: 1 + f }));
        S.add(banner(D, 'SABERKAS'), { anim: 'pop', x: 60, y: 960, w: 280, at: 2, d: 0.2 });
        S.add(banner(D, 'P.M. KEDAH', GOLD), { anim: 'pop', x: 380, y: 960, w: 280, at: 2, d: 0.45, sfx: false });
        S.add(banner(D, 'P.M. SELANGOR', GOLD), { anim: 'pop', x: 700, y: 960, w: 300, at: 2, d: 0.6, sfx: false });
      },
    },
    {
      id: 'negeri', transition: 'flip',
      lines: [
        'Bantahan tercetus di negeri-negeri. Di **Kota Bharu**, **10 ribu** orang berhimpun pada **15 Disember 1945**.',
        'Di **Alor Setar**, ribuan orang Melayu berarak pada **19 Januari 1946**.',
        'Di **Batu Pahat**, **20 ribu** orang berhimpun pada **10 Februari 1946**, di bawah pimpinan Dato\' Onn Jaafar.',
      ],
      board: {
        name: 'Bantahan di Kelantan, Kedah & Johor',
        visual: 'Peta Tanah Melayu dengan tiga penanda besar; kad bilangan & tarikh di sebelah setiap penanda.',
        doodle: 'Peta, penanda, kumpulan watak kecil.',
        text: 'Kota Bharu – 10 ribu – 15 Dis 1945 · Alor Setar – ribuan berarak – 19 Jan 1946 · Batu Pahat – 20 ribu – 10 Feb 1946 (Dato\' Onn Jaafar)',
        anim: 'Peta dilakar; penanda & kad pop tepat pada nama bandar.',
      },
      draw(S) {
        S.text('Bantahan di <span class="red">Negeri</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const at = S.map({ bounds: MALAYA, w: 520 }, { x: 40, y: 390, w: 540, at: 0, d: -0.2, dur: 0.9 });
        S.pin(at, 102.24, 6.12, '<b>1</b>', { at: 0, d: 0.9, color: RED, fs: 44 });
        S.pin(at, 100.37, 6.12, '<b>2</b>', { at: 1, d: 0.1, color: RED, fs: 44 });
        S.pin(at, 102.93, 1.85, '<b>3</b>', { at: 2, d: 0.1, color: RED, fs: 44 });
        [['KOTA BHARU', '10 ribu orang', '15 Dis 1945', 0, 0.55], ['ALOR SETAR', 'ribuan berarak', '19 Jan 1946', 1, 0.3], ['BATU PAHAT', '20 ribu orang', '10 Feb 1946', 2, 0.3]].forEach(([n, c, d, k, f], i) =>
          S.card(`<div class="t-h3" style="font-size:36px">${i + 1} · ${n}</div><div class="t-body" style="font-size:40px"><span class="hl">${c}</span></div><div class="tw red" style="font-size:24px">${d}</div>`, { anim: 'slideR', x: 610, y: 400 + i * 260, w: 410, at: k + f, pad: '10px 18px' }));
      },
    },
    {
      id: 'kongres', bg: 'grid', transition: 'paper',
      lines: [
        'Perjuangan ini berkembang ke peringkat kebangsaan. **Kongres Melayu Pertama** diadakan di Kelab Sultan Sulaiman, Kampung Baru, Kuala Lumpur, dari **1 hingga 4 Mac 1946**.',
        'Sebanyak **41 pertubuhan Melayu** hadir, dan bersetuju menubuhkan sebuah badan induk.',
        'Pada **11 Mei 1946**, **UMNO** ditubuhkan di Istana Besar Johor Bahru.',
      ],
      board: {
        name: 'Kongres Melayu & penubuhan UMNO',
        visual: 'Bangunan Kelab Sultan Sulaiman (doodle istana kecil); kaunter "41 PERTUBUHAN"; kad besar "UMNO · 11 MEI 1946 · Istana Besar Johor Bahru".',
        doodle: 'Bangunan, kumpulan watak, cop.',
        text: 'Kongres Melayu Pertama · Kelab Sultan Sulaiman, Kampung Baru, KL · 1–4 Mac 1946 · 41 pertubuhan · UMNO ditubuhkan 11 Mei 1946, Istana Besar Johor Bahru',
        anim: 'Bangunan dilukis; kaunter 41 pop; cop UMNO dihentak pada tarikh.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">Kongres Melayu</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.palace(), { x: 60, y: 390, w: 380, at: 0, d: 0.3 });
        S.card('<div class="t-h3" style="font-size:40px">Kelab Sultan Sulaiman</div><div class="t-body" style="font-size:38px">Kampung Baru, Kuala Lumpur</div><div class="tw red" style="font-size:26px">1–4 MAC 1946</div>', { anim: 'slideR', x: 470, y: 400, w: 550, at: 0, d: 0.5 });
        S.card('<div style="display:flex;align-items:center;gap:20px"><div class="t-big" style="font-size:110px;color:#C93436">41</div><div class="t-body" style="font-size:44px">pertubuhan Melayu · setuju tubuh <span class="hl">badan induk</span></div></div>', { color: 'gold', anim: 'pop', x: 60, y: 700, w: 960, at: 1, d: 0.1 });
        S.stamp('UMNO', { x: 60, y: 950, w: 340, at: 2, d: 0.35, fs: 110, style: 'text-align:center' });
        S.card('<div class="t-h3" style="font-size:40px">11 MEI 1946</div><div class="t-body" style="font-size:40px">Istana Besar Johor Bahru</div>', { anim: 'slideR', x: 440, y: 960, w: 580, at: 2, d: 0.2 });
      },
    },
    {
      id: 'umno', transition: 'slideUp',
      lines: [
        'UMNO menganjurkan bantahan besar-besaran semasa lawatan Ahli Parlimen British, **Gammans** dan **Rees Williams**.',
        'Di Alor Setar, **50 ribu** orang menyertai rapat umum. Di Ipoh, sepanduk berbunyi: "**Kami Berkehendak Naungan, Bukan Penaklukan**".',
        'Hari lahirnya Malayan Union dianggap "**Hari Kematian**". Orang Melayu memakai lilitan **kain putih** di songkok sebagai tanda berkabung.',
      ],
      board: {
        name: 'UMNO anjur bantahan besar-besaran',
        visual: 'Dua tag Ahli Parlimen British (ILUSTRASI); kaunter "50 RIBU · Alor Setar"; sepanduk besar Ipoh; songkok berlilit kain putih + cop "HARI KEMATIAN".',
        doodle: 'Sepanduk, kumpulan rakyat, songkok berlilit kain putih.',
        text: 'Lawatan L.D. Gammans & David Rees Williams · Alor Setar 50 ribu · Ipoh: "Kami Berkehendak Naungan, Bukan Penaklukan" · "Hari Kematian" · kain putih di songkok',
        anim: 'Tag pop; kaunter pop; sepanduk dibentang; cop dihentak.',
      },
      draw(S, { D }) {
        S.text('UMNO: <span class="red">Bantahan Besar</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.tag('L.D. GAMMANS', 'Ahli Parlimen British', { x: 60, y: 400, w: 440, at: 0, d: 0.6 });
        S.tag('DAVID REES WILLIAMS', 'Ahli Parlimen British', { x: 540, y: 400, w: 480, at: 0, d: 0.75 });
        S.card('<div style="display:flex;align-items:center;gap:20px"><div class="t-big" style="font-size:80px;color:#C93436;white-space:nowrap">50 ribu</div><div class="t-body" style="font-size:42px">rapat umum<br><b>Alor Setar</b></div></div>', { anim: 'pop', x: 60, y: 540, w: 560, at: 1, d: 0.05, notape: true });
        S.card('<div class="t-h3" style="font-size:40px;text-align:center">"Kami Berkehendak <span class="red">Naungan</span>, Bukan <span class="red">Penaklukan</span>"</div>', { color: 'gold', anim: 'pop', x: 650, y: 530, w: 370, at: 1, d: 0.5, rot: 2 });
        S.text('sepanduk di Ipoh', { size: 'label', x: 650, y: 800, w: 370, align: 'center', at: 1, d: 0.6 });
        S.add(songkokPutih(D), { anim: 'pop', x: 100, y: 870, w: 260, at: 2, d: 0.6 });
        S.stamp('HARI KEMATIAN', { x: 400, y: 900, w: 620, at: 2, d: 0.2, fs: 70, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'hasil', bg: 'grid', transition: 'paper',
      lines: [
        'Bekas pegawai British seperti **Frank Swettenham** dan **Richard Winstedt** turut mengkritik Malayan Union.',
        'Gammans dan Rees Williams melaporkan bahawa sultan **tidak menyedari akibat** perjanjian itu, dan menyokong cadangan penubuhan **Persekutuan Tanah Melayu**.',
        { text: 'Akhirnya, Malayan Union digantikan dengan **Persekutuan Tanah Melayu 1948**!', pause: 0.3 },
      ],
      board: {
        name: 'Hasil penentangan',
        visual: 'Dua tag bekas pegawai British (ILUSTRASI); laporan Gammans & Rees Williams; anak panah "MALAYAN UNION ➜ PERSEKUTUAN TANAH MELAYU 1948" dengan cop BERJAYA.',
        doodle: 'Watak pegawai, dokumen laporan, anak panah tebal, cop.',
        text: 'Bekas pegawai British: Frank Swettenham · Richard Winstedt (dll.) · Laporan: sultan tidak sedar akibat · sokong Persekutuan Tanah Melayu · MU ➜ PTM 1948 – BERJAYA',
        anim: 'Tag pop; dokumen dilukis; anak panah dilukis; cop BERJAYA dihentak pada "1948".',
      },
      draw(S, { D }) {
        S.text('Hasilnya?', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.illus({ x: 870, y: 300, at: 0, d: 0 });
        S.svg(officer(D, { pose: 'point' }), { x: 60, y: 390, w: 150, at: 0, d: 0, dur: 0.6 });
        S.tag('FRANK SWETTENHAM', 'bekas pegawai British', { x: 230, y: 410, w: 420, at: 0, d: 0.25 });
        S.tag('RICHARD WINSTEDT', 'bekas pegawai British', { x: 230, y: 520, w: 420, at: 0, d: 0.5 });
        S.svg(D.scroll('LAPORAN', { ts: 34 }), { x: 720, y: 390, w: 230, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:40px">Sultan <span class="hl">tidak menyedari akibat</span> · sokong <b>Persekutuan Tanah Melayu</b></div>', { tear: true, anim: 'slideU', x: 60, y: 690, w: 960, at: 1, d: 0.4 });
        S.card('<div class="t-h3" style="text-align:center">MALAYAN UNION</div>', { anim: 'pop', x: 60, y: 960, w: 400, at: 2, d: 0, notape: true });
        S.arrow(470, 1010, 580, 1010, { at: 2, d: 0.3, color: RED, sw: 10, bend: 0 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">PERSEKUTUAN TANAH MELAYU 1948</div>', { color: 'navy', anim: 'pop', x: 590, y: 930, w: 430, at: 2, d: 0.45 });
        S.stamp('BERJAYA!', { x: 300, y: 1130, w: 480, at: 2, d: 0.85, fs: 80, style: 'text-align:center' });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Penentangan ini memperlihatkan **penyatuan orang Melayu** buat pertama kali, dan semangat sanggup berkorban demi **maruah bangsa** dan negara.',
        'Kenali sejarah, fahami masa kini. Seterusnya, kita ke Borneo: **penyerahan Sarawak** kepada British!',
      ],
      tail: 0.8,
      board: {
        name: 'Iktibar & episod seterusnya',
        visual: 'Barisan watak berpegangan tangan "BERSATU"; kad koyak iktibar; maskot dan kad episod seterusnya.',
        doodle: 'Watak rakyat bersorak, mentol, pelekat maskot.',
        text: 'IKTIBAR: penyatuan orang Melayu buat pertama kali · sanggup berkorban demi maruah bangsa & negara · Seterusnya: 4.4 Penyerahan Sarawak',
        anim: 'Watak pop; kad naik; maskot & kad seterusnya pop.',
      },
      draw(S, { D }) {
        [[D.rakyat({ pose: 'cheer' }), 120], [D.wanita({ pose: 'cheer' }), 320], [D.petani({ pose: 'cheer' }), 520], [D.pedagang({ pose: 'cheer' }), 720]].forEach(([sv, x], i) => S.svg(sv, { x, y: 300, w: 160, at: 0, d: i * 0.12, dur: 0.6, sfx: i ? false : 'pop' }));
        S.card('<div class="t-body" style="font-size:44px;text-align:center"><span class="hl">Penyatuan orang Melayu</span> buat pertama kali · sanggup berkorban demi <span class="hl">maruah bangsa</span></div>', { tear: true, anim: 'slideU', x: 70, y: 580, w: 940, at: 0, d: 0.5 });
        S.mascot({ x: 80, y: 900, w: 260, at: 1, d: 0.2 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">4.4 Penyerahan Sarawak</div>', { x: 380, y: 960, w: 600, at: 1, d: 1.3 });
      },
    },
    END,
  ],
};
