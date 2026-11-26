// BAB 5 · EPISOD 05 – Subtopik 5.4: Kesan Penubuhan Persekutuan Tanah Melayu 1948 (≈ 2–2.5 min, + kuiz mini)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 136–137.
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, NOW, numCard, iconRow, quizScene, END } from './b4lib.js';

export default {
  id: 'b5_05',
  file: '05_Bab5_Subtopik_5.4',
  title: 'Kesan Penubuhan Persekutuan Tanah Melayu 1948',
  header: { chip: 'BAB 5 • 5.4', sub: 'Kesan Penubuhan' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5 (5.4)',
  music: { key: 62, bpm: 100, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Dari 1948… ke **kemerdekaan 1957**! Bagaimana Persekutuan Tanah Melayu membuka jalannya?', pause: 0.4 },
      ],
      board: {
        name: 'Hook – jalan ke kemerdekaan',
        visual: 'Frame pertama lengkap: tangga doodle bertanda "1948" di bawah dan "1957 MERDEKA" di puncak dengan bintang; tanda soal.',
        doodle: 'Tangga, bintang, tanda soal.',
        text: '1948 ➜ 1957 · jalan ke kemerdekaan',
        anim: 'Semua kelihatan pada 0:00; bintang berdenyut.',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.text('1948 <span class="red">➜</span> <span class="hl">1957</span>', { size: 'title', x: 60, y: 290, w: 960, align: 'center', ...NOW, style: 'font-size:120px' });
        S.add(`<svg viewBox="0 0 600 420">${D.R.path('M20 400 L20 330 L140 330 L140 250 L260 250 L260 170 L380 170 L380 90 L500 90 L500 400 Z', { fill: GOLD })}</svg>`, { ...NOW, x: 120, y: 520, w: 560 });
        S.text('1948', { size: 'h2', x: 60, y: 900, w: 200, align: 'center', ...NOW });
        S.add(D.star(), { ...NOW, x: 470, y: 440, w: 130, pulse: [{ at: 0, d: 1.5 }] });
        S.text('1957<br>MERDEKA!', { size: 'h2', x: 660, y: 500, w: 380, ...NOW, style: 'color:#C93436' });
        S.add(D.question(), { ...NOW, x: 470, y: 1000, w: 90 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 5.4: **Kesan penubuhan** Persekutuan Tanah Melayu 1948.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 5.4"; tajuk; bintang.', doodle: 'Bintang.', text: 'SUBTOPIK 5.4 · Kesan Penubuhan PTM 1948', anim: 'Tajuk ditulis; bintang pop.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 5.4</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Kesan <span class="red">Penubuhan</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.add(D.star(), { anim: 'pop', x: 440, y: 560, w: 200, at: 0, d: 0.6 });
      },
    },
    {
      id: 'raja-melayu', bg: 'grid', transition: 'paper',
      lines: [
        'Kesan pertama: **kedudukan Raja-raja Melayu dikembalikan**. Majlis Raja-Raja dipengerusikan oleh seorang daripada Raja-raja Melayu.',
        'Kesan kedua: **kedudukan istimewa orang Melayu** diiktiraf, bersama kepentingan sah kaum lain.',
      ],
      board: { name: 'Kesan 1 & 2', visual: 'Kad bernombor 1 dengan mahkota & 9 mahkota kecil (Majlis Raja-Raja); kad bernombor 2 dengan watak Melayu & kaum lain.', doodle: 'Mahkota, watak pelbagai kaum.', text: '1 Kedudukan Raja-raja Melayu dikembalikan · Majlis Raja-Raja dipengerusikan seorang Raja Melayu · 2 Kedudukan istimewa orang Melayu + kepentingan sah kaum lain', anim: 'Kad meluncur; mahkota pop; watak pop.' },
      draw(S, { D }) {
        S.card(numCard(1, 'Kedudukan <span class="hl">Raja-raja Melayu</span> dikembalikan', RED, 44), { anim: 'slideL', x: 60, y: 300, w: 960, at: 0, d: 0.1 });
        for (let i = 0; i < 9; i++) S.add(D.crown(), { anim: 'pop', x: 70 + i * 105, y: 500, w: 90, at: 0, d: 2.2 + i * 0.08, sfx: i ? false : 'pop' });
        S.text('Majlis Raja-Raja · dipengerusikan seorang Raja Melayu', { size: 'label', x: 40, y: 600, w: 1000, align: 'center', at: 0, d: 2.6 });
        S.card(numCard(2, '<span class="hl">Kedudukan istimewa</span> orang Melayu + kepentingan sah kaum lain', NAVY, 42), { anim: 'slideL', x: 60, y: 720, w: 960, at: 1, d: 0 });
        [[D.rakyat({ pose: 'cheer' }), 230], [D.pedagang(), 450], [D.wanita({ pose: 'cheer' }), 670]].forEach(([sv, x], i) => S.svg(sv, { x, y: 960, w: 160, at: 1, d: 0.6 + i * 0.15, dur: 0.6, sfx: false }));
      },
    },
    {
      id: 'warga-kaum', transition: 'flip',
      lines: [
        'Kesan ketiga: **membuka ruang kewarganegaraan** kepada orang bukan Melayu.',
        'Kesan keempat: **kerjasama kaum**, melalui Jawatankuasa Hubungan Antara Kaum, atau **CLC**, yang memupuk persefahaman pemimpin pelbagai kaum.',
        'Akhirnya, Persekutuan 1948 merintis **Perlembagaan 1957**, yang membawa **kemerdekaan**!',
      ],
      board: { name: 'Kesan 3 & 4 + asas kemerdekaan', visual: 'Kad bernombor 3 (kewarganegaraan); kad bernombor 4 dengan tangan berjabat "CLC"; anak panah ke cop "PERLEMBAGAAN 1957 ➜ MERDEKA".', doodle: 'Watak berjabat tangan, bintang, cop.', text: '3 Ruang kewarganegaraan untuk bukan Melayu · 4 Kerjasama kaum – CLC (Communities Liaison Committee) · merintis Perlembagaan 1957 ➜ kemerdekaan', anim: 'Kad meluncur; CLC pop; cop dihentak pada "kemerdekaan".' },
      draw(S, { D }) {
        S.card(numCard(3, 'Buka ruang <span class="hl">kewarganegaraan</span>', RED, 44), { anim: 'slideL', x: 60, y: 300, w: 960, at: 0, d: 0.1 });
        S.card(numCard(4, '<span class="hl">Kerjasama kaum</span> · CLC', NAVY, 44), { anim: 'slideL', x: 60, y: 500, w: 960, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:36px;text-align:center"><b>CLC</b> = Communities Liaison Committee<br>(Jawatankuasa Hubungan Antara Kaum)</div>', { tear: true, anim: 'slideU', x: 60, y: 700, w: 960, at: 1, d: 0.45 });
        S.stamp('PERLEMBAGAAN 1957 ➜ MERDEKA!', { x: 30, y: 1010, w: 1020, at: 2, d: 0.4, fs: 50, style: 'text-align:center;white-space:nowrap' });
        S.add(D.star(), { anim: 'pop', x: 470, y: 1140, w: 120, at: 2, d: 0.9, pulse: [{ at: 2, d: 1.3 }] });
      },
    },
    {
      id: 'iktibar', bg: 'grid', transition: 'slideUp',
      lines: ['Iktibarnya: gabungan **Raja-raja, pemimpin dan rakyat** berjaya mengatasi rancangan British. **Tolak ansur** antara kaum juga penting!'],
      board: { name: 'Iktibar', visual: 'Tiga watak (Sultan, pemimpin, rakyat) bergandingan; kad koyak "tolak ansur antara kaum".', doodle: 'Sultan, watak, mentol.', text: 'IKTIBAR · Raja-raja + pemimpin + rakyat · tolak ansur antara kaum', anim: 'Watak pop; kad naik.' },
      draw(S, { D }) {
        S.text('<span class="hl">Iktibar</span>', { size: 'title', x: 60, y: 300, w: 700, at: 0, d: -0.3 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 170, at: 0, d: 0.2 });
        [[D.sultan(), 'Raja-raja', 150], [D.rakyat({ hat: 'songkok', pose: 'present' }), 'Pemimpin', 430], [D.petani({ pose: 'cheer' }), 'Rakyat', 710]].forEach(([sv, l, x], i) => {
          S.svg(sv, { x, y: 440, w: 200, at: 0, d: 0.15 + i * 0.12, dur: 0.6, sfx: i ? false : 'pop' });
          S.text(l, { size: 'label', x: x - 40, y: 760, w: 280, align: 'center', at: 0, d: 0.25 + i * 0.12 });
        });
        S.card('<div class="t-body" style="font-size:48px;text-align:center"><span class="hl">Tolak ansur</span> antara kaum</div>', { tear: true, anim: 'slideU', x: 90, y: 880, w: 900, at: 0, d: 0.8 });
      },
    },
    quizScene('kuiz1', 1, 'Apakah jawatankuasa yang memupuk kerjasama kaum?', 'CLC', ['CLC', 'AMCJA', 'PUTERA'], 'Jawapannya: CLC, Jawatankuasa Hubungan Antara Kaum!'),
    quizScene('kuiz2', 2, 'Siapakah yang mempengerusikan Majlis Raja-Raja?', 'Seorang Raja Melayu', ['Pesuruhjaya Tinggi British', 'Seorang Raja Melayu', "Dato' Onn Jaafar"], 'Jawapannya: seorang daripada Raja-raja Melayu! Berapa markah anda?'),
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: ['Seterusnya: **Ulang Kaji Bab 5**, semua subtopik dalam satu video!'],
      tail: 0.8,
      board: { name: 'Episod seterusnya', visual: 'Maskot dan kad episod seterusnya.', doodle: 'Pelekat maskot.', text: 'Seterusnya: Ulang Kaji Bab 5', anim: 'Maskot pop; kad pop.' },
      draw(S) {
        S.text('Jom <span class="hl">ulang kaji!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">Ulang Kaji Bab 5</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
