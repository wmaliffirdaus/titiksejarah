// BAB 5 · EPISOD 01 – Pengenalan Bab 5: Persekutuan Tanah Melayu 1948 (≈ 1–1.5 min)
// Chapter 1 series template (ep01). Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 124–125 (Sinopsis, Inti Pati, Elemen Kewarganegaraan, garis masa).
import { NAVY, GOLD, RED, MALAYA, NOW, END } from './b4lib.js';

export default {
  id: 'b5_01',
  file: '01_Bab5_Pengenalan',
  title: 'Bab 5 – Persekutuan Tanah Melayu 1948',
  header: { chip: 'BAB 5 • INTRO', sub: 'PTM 1948' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5',
  music: { key: 60, bpm: 104, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Malayan Union ditolak! Jadi… apakah **pengganti**nya?', pause: 0.45 },
        'Jawapannya: **Persekutuan Tanah Melayu 1948**!',
      ],
      board: {
        name: 'Hook – pengganti Malayan Union',
        visual: 'Frame pertama lengkap: kad "MALAYAN UNION" dipangkah merah, anak panah ke kotak tanda soal; kemudian cop "PERSEKUTUAN TANAH MELAYU 1948".',
        doodle: 'Kad, pangkah, anak panah, tanda soal, cop.',
        text: 'MALAYAN UNION ✗ ➜ ? ➜ PERSEKUTUAN TANAH MELAYU 1948',
        anim: 'Kad & pangkah kelihatan pada 0:00; tanda soal pop; cop dihentak pada baris kedua.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Apakah <span class="red">penggantinya?</span>', { size: 'title', x: 40, y: 290, w: 1000, align: 'center', ...NOW, style: 'font-size:84px' });
        S.card('<div class="t-h2" style="text-align:center">MALAYAN UNION</div>', { ...NOW, notape: true, x: 140, y: 470, w: 800 });
        S.add(D.cross(), { ...NOW, x: 470, y: 440, w: 140 });
        S.add(D.arrow(60, 10, 60, 170, { w: 120, h: 190, color: RED, sw: 12, bend: 0.2 }), { ...NOW, x: 480, y: 640, w: 120 });
        S.add(D.question(), { ...NOW, x: 495, y: 850, w: 90 });
        S.stamp('PERSEKUTUAN TANAH MELAYU 1948', { x: 40, y: 1050, w: 1000, at: 1, d: 0.3, fs: 50, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'title', transition: 'wipe',
      lines: ['Ini **Titik Sejarah**! Bab 5 Sejarah Tingkatan 4: **Persekutuan Tanah Melayu 1948**.'],
      board: {
        name: 'Tajuk bab & maskot',
        visual: 'Kad tajuk bab gaya buku nota; maskot rasmi dengan belon kata.',
        doodle: 'Pil "BAB 5", garis bawah merah, pelekat maskot (imej asal).',
        text: 'BAB 5 · PERSEKUTUAN TANAH MELAYU 1948 · Sejarah Tingkatan 4 KSSM',
        anim: 'Tajuk ditulis; garis bawah dilukis; maskot & belon pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">BAB 5</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0 });
        S.text('PERSEKUTUAN<br>TANAH MELAYU <span class="red">1948</span>', { size: 'title', x: 40, y: 430, w: 1000, align: 'center', at: 0, d: 0.4, dur: 1.2, style: 'font-size:84px' });
        S.svg(D.underline(560), { x: 260, y: 640, w: 560, at: 0, d: 1.4, dur: 0.6 });
        S.text('Sejarah Tingkatan 4 • KSSM', { size: 'label', x: 60, y: 690, w: 960, align: 'center', at: 0.4 });
        S.mascot({ x: 110, y: 790, w: 330, at: 0.5, say: 'Langkah <b class="red">penting</b> ke arah kemerdekaan!', bx: 470, by: 840, bw: 480 });
      },
    },
    {
      id: 'garis-masa', bg: 'grid', transition: 'paper', gap: 0.25,
      lines: [
        '**April 1946**: orang Melayu menentang Malayan Union. **Julai 1946**: Jawatankuasa Kerja ditubuhkan.',
        '**Julai 1947**: Perlembagaan Rakyat dicadangkan. **Februari 1948**: Persekutuan Tanah Melayu ditubuhkan!',
      ],
      board: {
        name: 'Garis masa bab',
        visual: 'Garis masa merah dengan empat hentian bertarikh dan kad penerangan.',
        doodle: 'Garis masa, bulatan, kad.',
        text: 'Apr 1946 – penentangan Malayan Union · Jul 1946 – Jawatankuasa Kerja · Jul 1947 – Perlembagaan Rakyat · Feb 1948 – Persekutuan Tanah Melayu ditubuhkan',
        anim: 'Garis masa dilukis; hentian pop tepat pada tarikh.',
      },
      draw(S) {
        S.text('GARIS <span class="hl">MASA</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
        S.add('<svg viewBox="0 0 40 1000"><path d="M20 0 V1000" stroke="#C93436" stroke-width="10" stroke-linecap="round"/></svg>', { anim: 'wipeD', x: 120, y: 440, w: 40, h: 820, at: 0, d: 0, dur: 1.2, sfx: false });
        const st = [['APR 1946', 'Penentangan <b>Malayan Union</b>', 0, 0.02], ['JUL 1946', '<b>Jawatankuasa Kerja</b> ditubuhkan', 0, 0.55], ['JUL 1947', '<b>Perlembagaan Rakyat</b> dicadangkan', 1, 0.02], ['FEB 1948', '<span class="hl">Persekutuan Tanah Melayu</span> ditubuhkan', 1, 0.5]];
        st.forEach(([d, t, k, f], i) => {
          const y = 440 + i * 205;
          S.add(`<div style="text-align:center"><span class="pill" style="font-size:28px;padding:4px 14px">${d}</span></div>`, { anim: 'pop', x: 30, y: y + 10, w: 220, at: k + f });
          S.card(`<div class="t-body" style="font-size:44px">${t}</div>`, { anim: 'slideR', x: 270, y, w: 750, at: k + f, d: 0.15, pad: '14px 20px', color: i === 3 ? 'gold' : '' });
        });
      },
    },
    {
      id: 'penting', transition: 'flip',
      lines: [
        { text: 'Kenapa penting? Kita belajar **mempertahankan kedaulatan negara**, dan bersemangat **waja** dalam perjuangan.', pause: 0.15 },
        'Topik ini juga penting untuk **SPM**!',
      ],
      board: {
        name: 'Kenapa bab ini penting?',
        visual: 'Tiga kad bernombor menurun; mentol idea di penjuru; bintang pada SPM.',
        doodle: 'Mentol, bintang.',
        text: '1 Pertahankan kedaulatan negara · 2 Semangat waja dalam perjuangan · 3 Penting untuk SPM',
        anim: 'Mentol pop; kad masuk mengikut narasi; bintang berdenyut pada SPM.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">PENTING</span>?', { size: 'title', x: 80, y: 320, w: 700, at: 0 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 190, at: 0, d: 0.4 });
        const card = (n, txt, y, at, color) => S.card(`<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:96px;color:${color}">${n}</div><div class="t-body">${txt}</div></div>`, { anim: 'slideL', x: 90, y, w: 880, at });
        card(1, 'Pertahankan <span class="hl">kedaulatan negara</span>', 520, 0.3, RED);
        card(2, 'Semangat <span class="hl">waja</span> dalam perjuangan', 760, 0.75, NAVY);
        card(3, 'Penting untuk <span class="hl">SPM</span>!', 1000, 1, RED);
        S.add(D.star(), { anim: 'pop', x: 830, y: 990, w: 120, at: 1, d: 0.3, pulse: [{ at: 1, d: 0.5 }] });
      },
    },
    {
      id: 'peta-siri', bg: 'grid', transition: 'slideUp', gap: 0.2,
      lines: [
        'Ada empat subtopik:',
        '5.1, latar belakang penubuhan.',
        '5.2, faktor penubuhan.',
        '5.3, ciri-ciri Persekutuan Tanah Melayu 1948.',
        '5.4, kesan penubuhannya. Setiap episod ada **kuiz mini**!',
      ],
      board: {
        name: 'Peta siri – empat subtopik',
        visual: 'Laluan bertitik dengan empat hentian bernombor dan ikon; cop "+ KUIZ MINI".',
        doodle: 'Skrol, mentol, istana, bintang; cop.',
        text: '5.1 Latar belakang · 5.2 Faktor penubuhan · 5.3 Ciri-ciri · 5.4 Kesan · + kuiz mini setiap episod',
        anim: 'Setiap hentian pop tepat ketika subtopik disebut; cop kuiz dihentak di akhir.',
      },
      draw(S, { D }) {
        S.text('4 SUBTOPIK', { size: 'h2', x: 80, y: 300, w: 900, at: 0 });
        S.add('<svg viewBox="0 0 40 1000"><path d="M20 0 V1000" stroke="#172C63" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/></svg>', { anim: 'wipeD', x: 140, y: 410, w: 40, at: 0, d: 0.5, dur: 1.5, sfx: false });
        const rows = [['5.1', 'Latar belakang penubuhan', D.scroll('', { color: GOLD }), RED], ['5.2', 'Faktor penubuhan', D.bulb(), NAVY], ['5.3', 'Ciri-ciri PTM 1948', D.palace(), RED], ['5.4', 'Kesan penubuhan', D.star(), NAVY]];
        rows.forEach(([n, t, icon, c], i) => {
          const y = 410 + i * 210;
          S.add(`<div style="width:120px;height:120px;border-radius:50%;background:${c};border:5px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:42px;color:#F5C928">${n}</div>`, { anim: 'pop', x: 100, y, w: 120, at: i + 1 });
          S.card(`<div class="t-body" style="font-size:46px">${t}</div>`, { anim: 'slideR', x: 250, y: y - 4, w: 540, at: i + 1, d: 0.15, pad: '16px 24px' });
          S.svg(icon, { x: 815, y: y, w: 150, at: i + 1, d: 0.3, dur: 0.9, sfx: false });
        });
        S.stamp('+ KUIZ MINI', { x: 260, y: 1210, w: 560, at: 4, d: 0.75, fs: 60, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'penutup', transition: 'paper',
      lines: [{ text: 'Jom mulakan dengan **latar belakang** penubuhan Persekutuan Tanah Melayu 1948!', pause: 0.2 }],
      tail: 0.9,
      board: {
        name: 'Penutup & seruan',
        visual: 'Maskot rasmi menunjuk ke kad "Episod seterusnya".',
        doodle: 'Pelekat maskot, anak panah, kad.',
        text: 'Jom mulakan! · Seterusnya: 5.1 Latar Belakang Penubuhan',
        anim: 'Maskot pop, anak panah dilukis, kad pop.',
      },
      draw(S) {
        S.text('Jom <span class="hl">mulakan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Episod seterusnya</div><div class="t-h3">5.1 Latar Belakang Penubuhan</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
