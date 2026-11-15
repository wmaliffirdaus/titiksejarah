// BAB 3 · EPISOD 03 – Subtopik 3.2: Latar Belakang Perang Dunia (≈ 4.5–5 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 54–57 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END, tank, plane, bomb } from './bab3.js';

const EU = [[-11, 35], [45, 61]];
const P = { berlin: [13.4, 52.5], wien: [16.37, 48.2], london: [-0.13, 51.5], paris: [2.35, 48.86], moskva: [37.6, 55.75], beograd: [20.46, 44.8], istanbul: [28.98, 41.0], sofia: [23.3, 42.7], roma: [12.5, 41.9] };

function factory(D) {
  const R = D.R;
  let s = R.rect(20, 90, 260, 110, { fill: '#E2D7C0' }) + R.poly([[20, 90], [80, 50], [80, 90], [140, 50], [140, 90], [200, 50], [200, 90]], { fill: '#C93436' });
  s += R.rect(220, 10, 34, 80, { fill: '#172C63' }) + R.circle(250, 0, 30, { fill: '#DCE3EE', strokeWidth: 2 }) + R.circle(280, -24, 40, { fill: '#DCE3EE', strokeWidth: 2 });
  for (const x of [50, 110, 170]) s += R.rect(x, 130, 34, 40, { fill: '#F5C928', strokeWidth: 2 });
  return `<svg viewBox="0 -70 330 280" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

export default {
  id: '303',
  file: '03_Bab3_Subtopik_3.2',
  title: 'Latar Belakang Perang Dunia',
  header: { chip: 'BAB 3 • 3.2', sub: 'Latar Belakang Perang Dunia' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.2), ms. 54–57',
  ...CH1,
  music: { key: 62, bpm: 102, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Pembunuhan seorang putera mahkota mencetuskan perang yang menggegarkan dunia!', pause: 0.4 },
        'Bagaimana satu peristiwa boleh membawa kepada **Perang Dunia Pertama**?',
      ],
      board: { name: 'Hook – putera mahkota dibunuh', visual: 'Frame pertama lengkap: tajuk "1914: PUTERA MAHKOTA DIBUNUH!", mahkota, kereta kebal & kapal terbang; cop "PERANG DUNIA PERTAMA" pada ayat kedua.', doodle: 'Mahkota, kereta kebal, kapal terbang, cop.', text: '1914 · PUTERA MAHKOTA DIBUNUH! · PERANG DUNIA PERTAMA', anim: 'Elemen utama pada 0:00; cop pop pada ayat kedua.', music: 'Whoosh pembuka; muzik bermula.' },
      draw(S, { D }) {
        S.add(BIG('<span class="red">1914</span><br>PUTERA MAHKOTA<br>DIBUNUH!', { fs: 96 }), { ...NOW, x: 20, y: 280, w: 1040 });
        S.add(D.crown(), { ...NOW, x: 420, y: 640, w: 240, rot: -14 });
        S.add(tank(D), { ...NOW, x: 70, y: 880, w: 420 });
        S.add(plane(D), { ...NOW, x: 600, y: 860, w: 400, rot: -8 });
        S.stamp('PERANG DUNIA PERTAMA', { x: 60, y: 1110, w: 960, at: 1, d: 0.6, fs: 62, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.2: **Latar Belakang Perang Dunia**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.2", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.2 · Latar Belakang Perang Dunia', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.2', 'Latar Belakang<br><span class="red">Perang Dunia</span>', { fs: 84, uy: 650, my: 720 }); },
    },
    {
      id: 'dua-perang', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Perang dunia berpunca daripada semangat **nasionalisme** dalam kalangan negara Eropah, yang membawa kepada persaingan kuasa imperialis.', pause: 0.3 },
        'Ia berlaku dua kali: **Perang Dunia Pertama**, 1914 hingga 1918, dan **Perang Dunia Kedua**, 1939 hingga 1945.',
      ],
      board: { name: 'Dua perang dunia', visual: 'Rantai sebab: NASIONALISME EROPAH ➜ PERSAINGAN KUASA IMPERIALIS ➜ PERANG DUNIA; dua kad PD1 & PD2.', doodle: 'Anak panah, kad.', text: 'Nasionalisme Eropah ➜ persaingan kuasa imperialis ➜ perang dunia · PD1 1914–1918 · PD2 1939–1945', anim: 'Rantai muncul; kad PD1/PD2 meluncur pada ayat kedua.' },
      draw(S, { D }) {
        head(S, 'Dari Mana <span class="hl">Bermula?</span>');
        S.card('<div class="t-h3" style="text-align:center">Nasionalisme Eropah</div>', { anim: 'pop', x: 210, y: 400, w: 660, at: 0, d: 0.6 });
        S.arrow(540, 500, 540, 570, { at: 0, d: 1.6, color: RED });
        S.card('<div class="t-h3" style="text-align:center">Persaingan <span class="red">kuasa imperialis</span></div>', { anim: 'pop', x: 140, y: 580, w: 800, at: 0, d: 2.4 });
        duo(S, ['PD1', '<div style="text-align:center;font-family:Marker;font-size:56px">1914–1918</div>', 1], ['PD2', '<div style="text-align:center;font-family:Marker;font-size:56px">1939–1945</div>', 1.5], { y: 820 });
      },
    },
    {
      id: 'faktor1', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Faktor pertama, **persaingan kuasa imperialis**.', pause: 0.3 },
        { text: 'Revolusi Industri mendorong negara Eropah merebut tanah jajahan, untuk mendapatkan bahan mentah seperti arang batu, petroleum dan bijih timah, serta pasaran.', pause: 0.25 },
        'Permusuhan turut wujud, seperti antara **Perancis** dengan **Jerman**.',
      ],
      board: { name: 'Faktor 1: persaingan kuasa imperialis', visual: 'Pil FAKTOR 1; kilang (Revolusi Industri); ikon bahan mentah; kad PASARAN; Perancis VS Jerman.', doodle: 'Kilang berasap, arang batu, tong minyak, bijih timah, lencana VS.', text: 'FAKTOR 1 · PERSAINGAN KUASA IMPERIALIS · Revolusi Industri ➜ tanah jajahan: bahan mentah (arang batu, petroleum, bijih timah) & pasaran · Perancis VS Jerman', anim: 'Kilang dilukis; ikon pop mengikut sebutan; VS pop.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 1</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Persaingan <span class="hl">Kuasa Imperialis</span>', { size: 'h2', x: 70, y: 380, w: 940, at: 0, d: 0 });
        S.svg(factory(D), { x: 70, y: 500, w: 330, at: 1, d: 0 });
        S.text('Revolusi Industri', { size: 'label', x: 70, y: 770, w: 330, align: 'center', at: 1, d: 0.4 });
        const mats = [['Arang batu', '#172C63'], ['Petroleum', '#C93436'], ['Bijih timah', '#8A93A6']];
        mats.forEach(([n, c], i) => S.card(`<div style="display:flex;align-items:center;gap:14px"><div style="width:46px;height:46px;border-radius:50%;background:${c};border:4px solid #172C63"></div><div class="t-body" style="font-size:38px">${n}</div></div>`, { anim: 'slideR', x: 450, y: 500 + i * 100, w: 380, at: 1, d: 3.0 + i * 0.6, pad: '8px 18px', rot: i % 2 ? 1 : -1, sfx: 'swish' }));
        S.card('<div class="t-h3" style="text-align:center">+ PASARAN</div>', { color: 'gold', anim: 'pop', x: 450, y: 810, w: 380, at: 1, d: 5.2 });
        S.text('PERANCIS', { size: 'h3', x: 70, y: 1010, w: 380, align: 'center', at: 2, d: 0.6 });
        S.add(D.vs(), { anim: 'pop', x: 460, y: 970, w: 150, at: 2, d: 0.9 });
        S.text('JERMAN', { size: 'h3', x: 620, y: 1010, w: 380, align: 'center', at: 2, d: 1.2 });
      },
    },
    {
      id: 'faktor2', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Faktor kedua, **pakatan ketenteraan**.', pause: 0.3 },
        'Pembentukan **Kuasa Tengah** dan **Pakatan Bertiga** menyebabkan politik Eropah tidak stabil, dan mencetuskan **perlumbaan senjata moden**.',
      ],
      board: { name: 'Faktor 2: pakatan ketenteraan', visual: 'Pil FAKTOR 2; dua kad pakatan berhadapan; kereta kebal & bom; cop "PERLUMBAAN SENJATA".', doodle: 'Kereta kebal, bom, kad.', text: 'FAKTOR 2 · PAKATAN KETENTERAAN · Kuasa Tengah ✕ Pakatan Bertiga · politik Eropah tidak stabil · perlumbaan senjata moden', anim: 'Kad meluncur dari kiri & kanan; senjata pop; cop pada hujung ayat.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 2</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Pakatan <span class="hl">Ketenteraan</span>', { size: 'h2', x: 70, y: 380, w: 940, at: 0, d: 0 });
        S.card('<div class="t-h3" style="text-align:center">KUASA<br>TENGAH</div>', { color: 'gold', anim: 'slideL', x: 70, y: 500, w: 400, at: 1, d: 0.2, rot: -2 });
        S.add(D.vs(), { anim: 'pop', x: 465, y: 530, w: 150, at: 1, d: 0.8 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">PAKATAN<br>BERTIGA</div>', { color: 'red', anim: 'slideR', x: 610, y: 500, w: 400, at: 1, d: 0.8, rot: 2 });
        S.text('politik Eropah <span class="red">tidak stabil</span>', { size: 'h3', x: 70, y: 720, w: 940, align: 'center', at: 1, d: 2.6 });
        S.add(tank(D), { anim: 'slideL', x: 90, y: 830, w: 360, at: 1, d: 3.6, sfx: 'swish' });
        S.add(bomb(D), { anim: 'pop', x: 500, y: 810, w: 110, at: 1, d: 3.9 });
        S.add(plane(D), { anim: 'slideR', x: 640, y: 840, w: 360, at: 1, d: 4.1, sfx: 'whoosh' });
        S.stamp('PERLUMBAAN SENJATA', { x: 80, y: 1060, w: 920, at: 1.78, fs: 74, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'faktor3', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Faktor ketiga, **krisis di rantau Balkan**, iaitu permusuhan antara Austria-Hungary dengan Serbia.', pause: 0.3 },
        'Kemuncaknya, Putera Mahkota Austria-Hungary, **Archduke Ferdinand**, dan isterinya Sophie, dibunuh oleh seorang pemuda Serbia.',
      ],
      board: { name: 'Faktor 3: krisis Balkan', visual: 'Pil FAKTOR 3; peta Eropah dengan penanda Austria-Hungary & Serbia; kad Archduke Ferdinand & Sophie; cop DIBUNUH.', doodle: 'Peta, mahkota, cop.', text: 'FAKTOR 3 · KRISIS BALKAN · Austria-Hungary ✕ Serbia · Archduke Ferdinand & Sophie dibunuh oleh pemuda Serbia', anim: 'Peta dilakar; penanda pop; kad & cop pada ayat kedua.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 3</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Krisis <span class="hl">Balkan</span>', { size: 'h2', x: 470, y: 300, w: 540, at: 0, d: 0 });
        const at = S.map({ bounds: [[5, 38], [32, 52]], w: 640 }, { x: 60, y: 400, w: 640, at: 0, d: 0.2, dur: 1.0 });
        S.pin(at, ...P.wien, '<b>Austria-Hungary</b>', { at: 0, d: 2.2, color: GOLD, size: 1, fs: 34 });
        S.pin(at, ...P.beograd, '<b>Serbia</b>', { at: 0, d: 3.2, color: RED, size: 1, fs: 34 });
        S.svg(D.crown(), { x: 760, y: 450, w: 220, at: 1, d: 0 });
        S.card('<div class="t-label red">Putera Mahkota Austria-Hungary</div><div class="t-h3" style="font-size:44px">Archduke Ferdinand &amp; Sophie</div>', { anim: 'slideU', x: 70, y: 960, w: 940, at: 1, d: 0.6 });
        S.stamp('DIBUNUH PEMUDA SERBIA', { x: 80, y: 1170, w: 920, at: 1.75, fs: 62, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'pihak', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Siapa yang berperang? **Kuasa Tengah** terdiri daripada Jerman dan Austria-Hungary, kemudian disertai Bulgaria dan empayar Uthmaniyah.', pause: 0.3 },
        '**Pakatan Bertiga** pula terdiri daripada Britain, Perancis dan Rusia, disokong oleh Serbia, Itali, Romania, Portugal dan Greece.',
      ],
      board: { name: 'Pihak yang berperang', visual: 'Peta Eropah: penanda kuning Kuasa Tengah, merah Pakatan Bertiga; dua kad senarai negara.', doodle: 'Peta tulisan tangan, penanda.', text: 'KUASA TENGAH: Jerman, Austria-Hungary (+ Bulgaria, Uthmaniyah) · PAKATAN BERTIGA: Britain, Perancis, Rusia (+ Serbia, Itali, Romania, Portugal, Greece)', anim: 'Penanda pop mengikut sebutan; kad meluncur.' },
      draw(S) {
        const at = S.map({ bounds: EU, w: 760 }, { x: 160, y: 290, w: 760, at: 0, d: -0.2, dur: 1.2 });
        [['berlin', 'Jerman', 0.25], ['wien', 'A-Hungary', 0.35], ['sofia', 'Bulgaria', 0.55], ['istanbul', 'Uthmaniyah', 0.65]].forEach(([k, n, f]) => S.pin(at, ...P[k], `<b>${n}</b>`, { at: f, color: GOLD, size: 0.8, fs: 28 }));
        [['london', 'Britain', 1.2], ['paris', 'Perancis', 1.25], ['moskva', 'Rusia', 1.3]].forEach(([k, n, f]) => S.pin(at, ...P[k], `<b>${n}</b>`, { at: f, color: RED, size: 0.8, fs: 28, left: k !== 'moskva' }));
        S.card('<div class="t-h3" style="font-size:40px">KUASA TENGAH</div><div class="t-body" style="font-size:32px;line-height:1.15">Jerman, Austria-Hungary<br><span class="red">+ Bulgaria, Uthmaniyah</span></div>', { color: 'gold', anim: 'slideL', x: 50, y: 890, w: 480, at: 0, d: 0.4, rot: -1 });
        S.card('<div class="t-h3" style="font-size:40px;color:#FFFDF7">PAKATAN BERTIGA</div><div class="t-body" style="font-size:32px;line-height:1.15;color:#FFFDF7">Britain, Perancis, Rusia<br><span style="color:#F5C928">+ Serbia, Itali, Romania, Portugal, Greece</span></div>', { color: 'red', anim: 'slideR', x: 550, y: 890, w: 480, at: 1, d: 0, rot: 1 });
      },
    },
    {
      id: 'kronologi1', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Pada 28 Julai 1914, Austria-Hungary, dengan sokongan Jerman, mengisytiharkan perang terhadap Serbia.', pause: 0.25 },
        { text: 'Rusia membantu Serbia, lalu Jerman mengisytiharkan perang terhadap Rusia dan Perancis, serta menceroboh Belgium.', pause: 0.25 },
        'Pada 4 Ogos 1914, Britain menyertai Rusia dan Perancis memerangi Jerman.',
      ],
      board: { name: 'Kronologi 1914', visual: 'Garis masa bertarikh: 28 Julai, 30 Julai, 1 & 3 Ogos, 4 Ogos 1914.', doodle: 'Pil tarikh, kad.', text: '28 Jul 1914 A-H isytihar perang ke atas Serbia · 30 Jul Rusia bantu Serbia · 1 Ogos Jerman ✕ Rusia · 3 Ogos Jerman ✕ Perancis, ceroboh Belgium · 4 Ogos Britain sertai', anim: 'Baris muncul mengikut narasi.' },
      draw(S) {
        head(S, 'Kronologi <span class="hl">1914</span>');
        rows(S, [
          ['28 JULAI', 'Austria-Hungary (+ Jerman) isytihar perang ke atas **Serbia**', 0.1],
          ['30 JULAI', '**Rusia** beri bantuan tentera kepada Serbia', 1],
          ['1 OGOS', 'Jerman isytihar perang ke atas **Rusia**', 1.45],
          ['3 OGOS', 'Jerman ✕ **Perancis**; ceroboh **Belgium**', 1.7],
          ['4 OGOS', '**Britain** sertai Rusia &amp; Perancis', 2.1],
        ], { bw: 230, gap: 180, fs: 38 });
      },
    },
    {
      id: 'kronologi2', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Pada Oktober 1914, empayar Uthmaniyah memihak kepada Kuasa Tengah.', pause: 0.2 },
        { text: 'Itali menyertai Pakatan Bertiga pada Mac 1915, diikuti Amerika Syarikat pada April 1917.', pause: 0.25 },
        'Akhirnya, pada tahun 1918, Pakatan Bertiga menang, dan Jerman menandatangani **gencatan senjata**.',
      ],
      board: { name: 'Kronologi 1914–1918', visual: 'Garis masa: Okt 1914, Mac 1915, Apr 1917, 1918; cop GENCATAN SENJATA.', doodle: 'Pil tarikh, kad, cop.', text: 'Okt 1914 Uthmaniyah ➜ Kuasa Tengah · Mac 1915 Itali ➜ Pakatan Bertiga · Apr 1917 Amerika Syarikat sertai · 1918 Pakatan Bertiga menang; Jerman gencatan senjata', anim: 'Baris muncul mengikut narasi; cop pada akhir.' },
      draw(S) {
        head(S, 'Kronologi <span class="hl">1914–1918</span>');
        rows(S, [
          ['OKT 1914', 'Uthmaniyah memihak **Kuasa Tengah**', 0.2],
          ['MAC 1915', '**Itali** sertai Pakatan Bertiga', 1.1],
          ['APR 1917', '**Amerika Syarikat** sertai Pakatan Bertiga', 1.6],
          ['1918', 'Pakatan Bertiga **menang**', 2.3],
        ], { bw: 230, gap: 175, fs: 40 });
        S.stamp('GENCATAN SENJATA', { x: 90, y: 1130, w: 900, at: 2.75, fs: 76, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'paris', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Penglibatan Amerika Syarikat membawa kemenangan kepada Pakatan Bertiga, dan Amerika Syarikat diiktiraf sebagai **kuasa besar dunia**.', pause: 0.3 },
        { text: '**Persidangan Damai Paris** pada 18 Januari 1919 melahirkan **Deklarasi 14 Perkara Woodrow Wilson**,', pause: 0.15 },
        'iaitu penentuan nasib negara oleh rakyat sendiri, dan sempadan negara berasaskan bangsa.',
      ],
      board: { name: 'Persidangan Damai Paris & Deklarasi 14 Perkara', visual: 'Bintang "AS = KUASA BESAR DUNIA"; dokumen "14 PERKARA"; dua kad prinsip.', doodle: 'Bintang, dokumen perjanjian, kad.', text: 'AS = kuasa besar dunia · Persidangan Damai Paris 18 Jan 1919 · Deklarasi 14 Perkara Woodrow Wilson: (1) penentuan nasib oleh rakyat sendiri (2) sempadan berasaskan bangsa', anim: 'Bintang pop; dokumen dilukis; prinsip meluncur.' },
      draw(S, { D }) {
        S.add(D.star(), { anim: 'pop', x: 80, y: 300, w: 130, at: 0, d: 0.5 });
        S.text('Amerika Syarikat = <span class="hl">kuasa besar dunia</span>', { size: 'h3', x: 230, y: 320, w: 790, at: 0, d: 2.2 });
        S.svg(D.treaty('1919'), { x: 80, y: 480, w: 250, at: 1, d: 0 });
        S.card('<div class="t-label red">Persidangan Damai Paris · 18 Jan 1919</div><div class="t-h3" style="font-size:46px">Deklarasi <span class="hl">14 Perkara</span> Woodrow Wilson</div>', { anim: 'slideR', x: 370, y: 500, w: 640, at: 1, d: 0.6, rot: 1 });
        rows(S, [['1', 'Penentuan nasib negara oleh **rakyat sendiri**', 2.05], ['2', 'Sempadan negara **berasaskan bangsa**', 2.55]], { y0: 900, gap: 170, bw: 110, fs: 40 });
      },
    },
    {
      id: 'versailles', bg: 'grid', transition: 'paper',
      lines: [
        { text: '**Perjanjian Versailles** ditandatangani pada 28 Jun 1919.', pause: 0.25 },
        { text: 'Jerman dikehendaki bertanggungjawab atas kemusnahan perang, membayar pampasan, mengehadkan saiz tentera, dan menyerahkan wilayah serta tanah jajahan.', pause: 0.3 },
        'Perjanjian ini juga menubuhkan **Liga Bangsa-Bangsa**.',
      ],
      board: { name: 'Perjanjian Versailles (28 Jun 1919)', visual: 'Dokumen Versailles; 4 kad syarat ke atas Jerman; kad navy LIGA BANGSA-BANGSA.', doodle: 'Dokumen bercop, kad bernombor, glob.', text: 'PERJANJIAN VERSAILLES 28 Jun 1919 · Jerman: tanggung kemusnahan · bayar pampasan · hadkan tentera · serah wilayah & tanah jajahan · tubuh LIGA BANGSA-BANGSA', anim: 'Kad syarat muncul satu demi satu; kad Liga dicop.' },
      draw(S, { D }) {
        head(S, 'Perjanjian <span class="hl">Versailles</span>');
        S.text('28 Jun 1919', { size: 'label', x: 70, y: 380, w: 500, at: 0, d: 0.6 });
        S.svg(D.treaty('1919'), { x: 790, y: 290, w: 200, at: 0, d: 0.3 });
        [['Tanggung kemusnahan perang', 0.12], ['Bayar pampasan', 0.4], ['Hadkan saiz tentera', 0.58], ['Serah wilayah &amp; tanah jajahan', 0.75]].forEach(([t, f], i) => S.card(`<div class="t-body" style="font-size:38px"><b class="red">${i + 1}.</b> ${t}</div>`, { anim: i % 2 ? 'slideR' : 'slideL', x: i % 2 ? 550 : 60, y: 560 + Math.floor(i / 2) * 190, w: 470, at: 1 + f, rot: i % 2 ? 1 : -1, pad: '14px 20px', sfx: 'swish' }));
        S.text('JERMAN dikehendaki:', { size: 'h3', x: 70, y: 470, w: 700, at: 1, d: 0 });
        S.svg(D.globe(), { x: 80, y: 960, w: 170, at: 2, d: 0 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">LIGA BANGSA-BANGSA</div>', { color: 'navy', anim: 'stamp', x: 280, y: 1000, w: 720, at: 2, d: 0.4 });
      },
    },
    {
      id: 'kesan-beraja', bg: 'dots', transition: 'flip',
      lines: [
        { text: 'Apakah kesannya? Pertama, **runtuhnya pemerintahan beraja**.', pause: 0.3 },
        { text: 'Di Jerman, Kaiser Wilhelm II turun takhta. Di Austria-Hungary, Dinasti Habsburg berakhir.', say: 'Di Jerman, Kaiser Wilhelm Kedua turun takhta. Di Austria-Hungary, Dinasti Habsburg berakhir.', pause: 0.25 },
        { text: 'Di Rusia, revolusi menumbangkan Tsar Nicholas II, lalu lahir kerajaan komunis pertama di dunia, pimpinan Vladimir Lenin.', say: 'Di Rusia, revolusi menumbangkan Tsar Nicholas Kedua, lalu lahir kerajaan komunis pertama di dunia, pimpinan Vladimir Lenin.', pause: 0.25 },
        { text: 'Sultan Mehmed VI pula digulingkan, dan lahirlah Republik Turki pimpinan Mustafa Kemal Ataturk.', say: 'Sultan Mehmed Keenam pula digulingkan, dan lahirlah Republik Turki pimpinan Mustafa Kemal Ataturk.' },
      ],
      board: { name: 'Kesan 1: runtuhnya pemerintahan beraja', visual: 'Mahkota jatuh; empat kad negara: Jerman, Austria-Hungary, Rusia, Uthmaniyah.', doodle: 'Mahkota terbalik, palang merah, kad.', text: 'KESAN 1 · Jerman: Kaiser Wilhelm II turun takhta ➜ Republik Jerman · A-H: Dinasti Habsburg berakhir · Rusia: Tsar Nicholas II tumbang ➜ kerajaan komunis pertama (Lenin) · Uthmaniyah: Sultan Mehmed VI digulingkan ➜ Republik Turki (Mustafa Kemal Ataturk)', anim: 'Mahkota pop & condong; kad muncul mengikut negara.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">KESAN 1</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Runtuhnya <span class="hl">Pemerintahan Beraja</span>', { size: 'h3', x: 70, y: 380, w: 760, at: 0, d: 1.2, style: 'font-size:50px' });
        S.add(D.crown(), { anim: 'pop', x: 850, y: 300, w: 170, rot: 160, at: 0, d: 1.6 });
        const C4 = [['JERMAN', 'Kaiser Wilhelm II turun takhta ➜ Republik', 1], ['AUSTRIA-HUNGARY', 'Dinasti Habsburg berakhir', 1.6], ['RUSIA', 'Tsar Nicholas II tumbang ➜ komunis (Lenin)', 2], ['UTHMANIYAH', 'Sultan Mehmed VI ➜ Republik Turki (Ataturk)', 3]];
        C4.forEach(([n, t, at], i) => S.card(`<div class="t-label red" style="font-size:36px">${n}</div><div class="t-body" style="font-size:34px;line-height:1.12">${t}</div>`, { anim: i % 2 ? 'slideR' : 'slideL', x: i % 2 ? 550 : 60, y: 540 + Math.floor(i / 2) * 290, w: 470, at, rot: i % 2 ? 1 : -1, pad: '14px 20px', sfx: 'swish' }));
      },
    },
    {
      id: 'negara-baharu', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Kedua, **munculnya negara baharu**:', pause: 0.2 },
        { text: 'Austria, Hungary, Czechoslovakia dan Yugoslavia daripada Austria-Hungary;', pause: 0.15 },
        { text: 'Poland, Estonia, Latvia dan Lithuania daripada Rusia;', pause: 0.15 },
        'serta Lubnan, Syria dan Iraq daripada empayar Uthmaniyah.',
      ],
      board: { name: 'Kesan 2: negara baharu', visual: 'Tiga kumpulan kad: dari Austria-Hungary, dari Rusia, dari Uthmaniyah.', doodle: 'Bendera kecil, kad.', text: 'KESAN 2 · Austria-Hungary ➜ Austria, Hungary, Czechoslovakia, Yugoslavia · Rusia ➜ Poland, Estonia, Latvia, Lithuania · Uthmaniyah ➜ Lubnan, Syria, Iraq', anim: 'Kumpulan muncul mengikut narasi.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">KESAN 2</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Munculnya <span class="hl">Negara Baharu</span>', { size: 'h2', x: 70, y: 380, w: 940, at: 0, d: 0.6 });
        rows(S, [
          ['DARI A-H', 'Austria · Hungary · Czechoslovakia · Yugoslavia', 1],
          ['DARI RUSIA', 'Poland · Estonia · Latvia · Lithuania', 2],
          ['DARI UTHMANIYAH', 'Lubnan · Syria · Iraq', 3],
        ], { y0: 520, gap: 230, bw: 250, fs: 40 });
      },
    },
    {
      id: 'negara-kita', bg: 'grid', transition: 'zoom',
      lines: [
        { text: 'Bagaimana pula dengan negara kita?', pause: 0.25 },
        { text: 'Raja-raja Melayu diminta menandatangani perisytiharan perang, sebagai tanda sokongan dan **taat setia kepada British**.', pause: 0.25 },
        { text: 'Undang-undang perang diluluskan, seperti **Trading With Enemy Enactment 1914**.', pause: 0.25 },
        'Hasil **bijih timah** dan **getah** pula digunakan untuk membiayai operasi perang British.',
      ],
      board: { name: 'Kesan terhadap negara kita', visual: 'Peta kecil Tanah Melayu; tiga kad: perisytiharan perang Raja-raja Melayu, undang-undang perang (Trading With Enemy Enactment 1914), bijih timah & getah biayai perang.', doodle: 'Skrol, peta, ikon bijih timah & getah.', text: 'Raja-raja Melayu tandatangan perisytiharan perang (sokong & taat setia kepada British) · undang-undang tentera: Trading With Enemy Enactment 1914 · bijih timah & getah biayai perang British', anim: 'Kad muncul mengikut narasi.' },
      draw(S, { D }) {
        head(S, 'Kesan ke atas <span class="hl">Negara Kita</span>');
        rows(S, [
          ['1', 'Raja-raja Melayu tandatangan **perisytiharan perang**: sokong &amp; taat setia kepada British', 1],
          ['2', 'Undang-undang perang: **Trading With Enemy Enactment 1914**', 2],
          ['3', '**Bijih timah** &amp; **getah** biayai operasi perang British', 3],
        ], { y0: 420, gap: 240, bw: 110, fs: 40 });
        S.svg(D.coins(), { x: 820, y: 1100, w: 160, at: 3, d: 1.2 });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, Perang Dunia Pertama berpunca daripada persaingan imperialis, pakatan ketenteraan dan krisis Balkan.', pause: 0.25 },
        { text: 'Ia berakhir dengan **Perjanjian Versailles**, yang meruntuhkan pemerintahan beraja dan melahirkan negara baharu.', pause: 0.35 },
        'Seterusnya, kita kaji **Perang Dunia Kedua**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.3.', doodle: 'Pil, maskot.', text: 'Imperialis · Pakatan · Balkan · Versailles · Liga Bangsa-Bangsa · Seterusnya: 3.3 Perang Dunia Kedua', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Imperialis', 0.4], ['Pakatan', 0.6], ['Krisis Balkan', 0.8], ['Versailles', 1.1], ['Beraja runtuh', 1.6], ['Negara baharu', 1.8]],
          ['PERANG DUNIA PERTAMA 1914–1918', 1.3], ['3.3 Perang Dunia Kedua', 2]);
      },
    },
    END,
  ],
};
