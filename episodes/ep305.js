// BAB 3 · EPISOD 05 – Subtopik 3.4: Perang Dunia Kedua di Asia Pasifik (≈ 4 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 64–67 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, kesimpulan, END, plane, flagJP, soldier, quizScenes } from './bab3.js';

const AS = [[94, -8], [146, 47]];
const K = { tokyo: [139.7, 35.7], korea: [127.0, 37.5], manchuria: [125.3, 43.9], china: [116.4, 39.9], indochina: [105.8, 21.0], kotabharu: [102.24, 6.13], singgora: [100.6, 7.2], filipina: [121.0, 14.6], hongkong: [114.17, 22.3] };

function clock(h, m, label) {
  const ah = ((h % 12) + m / 60) * 30 * Math.PI / 180, am = m * 6 * Math.PI / 180;
  const hx = 100 + 46 * Math.sin(ah), hy = 100 - 46 * Math.cos(ah), mx = 100 + 70 * Math.sin(am), my = 100 - 70 * Math.cos(am);
  const ticks = Array.from({ length: 12 }, (_, i) => { const a = i * 30 * Math.PI / 180; return `<line x1="${100 + 80 * Math.sin(a)}" y1="${100 - 80 * Math.cos(a)}" x2="${100 + 90 * Math.sin(a)}" y2="${100 - 90 * Math.cos(a)}" stroke="#172C63" stroke-width="${i % 3 ? 3 : 7}"/>`; }).join('');
  return `<svg viewBox="0 0 200 250"><circle cx="100" cy="100" r="94" fill="#FFFDF7" stroke="#172C63" stroke-width="8"/>${ticks}<line x1="100" y1="100" x2="${hx}" y2="${hy}" stroke="#172C63" stroke-width="10" stroke-linecap="round"/><line x1="100" y1="100" x2="${mx}" y2="${my}" stroke="#C93436" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="100" r="9" fill="#C93436"/><text x="100" y="236" font-family="Marker" font-size="44" fill="#172C63" text-anchor="middle">${label}</text></svg>`;
}

export default {
  id: '305',
  file: '05_Bab3_Subtopik_3.4',
  title: 'Perang Dunia Kedua di Asia Pasifik',
  header: { chip: 'BAB 3 • 3.4', sub: 'PD2 di Asia Pasifik' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.4)',
  ...CH1,
  music: { key: 60, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Tahukah anda? Perang Dunia Kedua di Asia Pasifik bermula di negara kita, lebih sejam sebelum serangan ke atas **Pearl Harbour**!', pause: 0.4 },
        'Di manakah tempatnya?',
      ],
      board: { name: 'Hook – lebih awal daripada Pearl Harbour', visual: 'Frame pertama lengkap: dua jam (2.15 pagi KOTA BHARU vs 3.25 pagi PEARL HARBOUR), tajuk "SIAPA DISERANG DULU?"; tanda soal pada ayat kedua.', doodle: 'Dua jam dinding, tanda soal, kapal terbang.', text: 'SIAPA DISERANG DULU? · 2.15 pagi · 3.25 pagi · Pearl Harbour', anim: 'Elemen utama pada 0:00; tanda soal pop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('SIAPA DISERANG<br><span class="red">DULU?</span>', { fs: 104 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(clock(2, 15, '2.15'), { ...NOW, x: 120, y: 560, w: 300 });
        S.add(clock(3, 25, '3.25'), { ...NOW, x: 660, y: 560, w: 300 });
        S.add(D.vs(), { ...NOW, x: 470, y: 660, w: 140 });
        S.text('? ? ?', { ...NOW, size: 'h2', x: 60, y: 950, w: 420, align: 'center' });
        S.text('Pearl Harbour', { ...NOW, size: 'h3', x: 600, y: 950, w: 420, align: 'center' });
        S.add(plane(D), { ...NOW, x: 300, y: 1070, w: 480, rot: -6 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.4: **Perang Dunia Kedua di Asia Pasifik**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.4", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.4 · Perang Dunia Kedua di Asia Pasifik', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.4', 'Perang Dunia Kedua<br>di <span class="red">Asia Pasifik</span>', { fs: 80, uy: 650, my: 720 }); },
    },
    {
      id: 'perang-pasifik', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Perang Dunia Kedua di Asia Pasifik, dari 1941 hingga 1945, juga dikenali sebagai **Perang Pasifik**.', pause: 0.3 },
        'Ia berpunca daripada kemunculan Jepun sebagai **kuasa tentera** yang menjalankan dasar imperialisme.',
      ],
      board: { name: 'Perang Pasifik', visual: 'Kad "PERANG PASIFIK 1941–1945"; bendera Jepun; askar; cop "IMPERIALISME".', doodle: 'Bendera Jepun, askar, cop.', text: 'PERANG PASIFIK 1941–1945 · Jepun = kuasa tentera · IMPERIALISME', anim: 'Kad pop; bendera & askar; cop pada ayat kedua.' },
      draw(S, { D }) {
        S.card('<div class="t-label red" style="text-align:center">1941 – 1945</div><div class="t-h2" style="text-align:center">PERANG PASIFIK</div>', { anim: 'pop', x: 140, y: 320, w: 800, at: 0, d: 2.0 });
        S.add(flagJP(D), { anim: 'pop', x: 140, y: 620, w: 300, at: 1, d: 0, rot: -4 });
        S.svg(soldier(D), { x: 520, y: 560, w: 240, at: 1, d: 0.3 });
        S.svg(soldier(D), { x: 740, y: 580, w: 220, at: 1, d: 0.5, sfx: false });
        S.stamp('IMPERIALISME', { x: 140, y: 1060, w: 800, at: 1.75, fs: 90, style: 'text-align:center' });
      },
    },
    {
      id: 'faktor', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Mengapa Jepun meluaskan kuasa? Pertama, **keperluan perindustrian**. Jepun mahu mengurangkan pergantungan kepada Barat, dan memerlukan wilayah pembekal bahan mentah serta pasaran.', pause: 0.3 },
        { text: 'Kedua, **pengaruh golongan tentera**. Sejak tahun 1932, tentera menguasai politik Jepun, dan pada Oktober 1941, Jeneral Hideki Tojo menjadi Perdana Menteri.', pause: 0.3 },
        'Ketiga, **Orde Baharu Asia**: menyatukan Jepun, Korea, China dan Manchuria dalam satu blok ekonomi, kemudian diperluas ke seluruh Asia, dan menyingkirkan imperialis Barat.',
      ],
      board: { name: 'Faktor peluasan kuasa Jepun', visual: 'Tiga kad bernombor besar mengikut narasi.', doodle: 'Kad bernombor.', text: '1 Keperluan perindustrian: kurang bergantung kepada Barat; bahan mentah & pasaran · 2 Pengaruh tentera: kuasai politik (1932); Jeneral Hideki Tojo PM (Okt 1941) · 3 Orde Baharu Asia: Jepun + Korea + China + Manchuria ➜ seluruh Asia; singkir imperialis Barat', anim: 'Kad meluncur masuk satu demi satu.' },
      draw(S) {
        head(S, 'Faktor <span class="hl">Peluasan Kuasa</span>');
        const card = (n, h, b, y, at, color) => S.card(`<div style="display:flex;align-items:flex-start;gap:20px"><div class="t-big" style="font-size:90px;color:${color}">${n}</div><div><div class="t-h3" style="font-size:44px">${h}</div><div class="t-body" style="font-size:34px;line-height:1.15">${b}</div></div></div>`, { anim: 'slideL', x: 60, y, w: 960, at, pad: '14px 24px' });
        card(1, 'Keperluan perindustrian', 'Kurang bergantung kepada Barat; perlu bahan mentah &amp; pasaran', 410, 0.1, RED);
        card(2, 'Pengaruh golongan tentera', 'Kuasai politik (1932) · Jeneral <b>Hideki Tojo</b> PM (Okt 1941)', 700, 1, NAVY);
        card(3, 'Orde Baharu Asia', 'Jepun + Korea + China + Manchuria ➜ seluruh Asia · singkir imperialis Barat', 990, 2, RED);
      },
    },
    {
      id: 'peluasan', bg: 'dots', transition: 'zoom',
      lines: ['Langkah demi langkah, Jepun menguasai **Korea** pada tahun 1910, **Manchuria** pada 1932, **China** pada 1937, dan **Indochina** pada 1941.'],
      board: { name: 'Peluasan kuasa Jepun 1910–1941', visual: 'Peta Asia Timur: penanda Jepun; penanda merah Korea 1910, Manchuria 1932, China 1937, Indochina 1941 muncul mengikut sebutan.', doodle: 'Peta tulisan tangan, penanda, anak panah.', text: '1910 Korea · 1932 Manchuria · 1937 China · 1941 Indochina', anim: 'Penanda pop tepat pada sebutan.' },
      draw(S) {
        const at = S.map({ bounds: AS, w: 820 }, { x: 130, y: 290, w: 820, at: 0, d: -0.3, dur: 1.0 });
        S.pin(at, ...K.tokyo, '<b>JEPUN</b>', { at: 0, d: -0.1, color: GOLD, size: 1, fs: 36, left: true });
        [['korea', 'Korea 1910', 0.12], ['manchuria', 'Manchuria 1932', 0.38], ['china', 'China 1937', 0.62], ['indochina', 'Indochina 1941', 0.84]].forEach(([k, n, f]) => S.pin(at, ...K[k], `<b>${n}</b>`, { at: f, color: RED, size: 0.95, fs: 34, left: k === 'china' || k === 'indochina' }));
      },
    },
    {
      id: 'sekatan', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Sebagai tindak balas, Amerika Syarikat, British dan Belanda mengenakan **sekatan ekonomi**: menghentikan perdagangan dan membekukan harta Jepun.', pause: 0.3 },
        'Jepun lalu merancang untuk menguasai **Asia Tenggara**, yang kaya dengan bijih timah, getah, bauksit dan petroleum.',
      ],
      board: { name: 'Sekatan ekonomi & sasaran Asia Tenggara', visual: 'Tiga kad negara (AS, British, Belanda) ➜ cop SEKATAN EKONOMI; anak panah ke kad Asia Tenggara dengan 4 sumber.', doodle: 'Kad, cop, ikon sumber.', text: 'AS + British + Belanda ➜ SEKATAN EKONOMI (henti perdagangan, beku harta Jepun) · Jepun sasar Asia Tenggara: bijih timah, getah, bauksit, petroleum', anim: 'Kad negara pop; cop; sumber muncul mengikut sebutan.' },
      draw(S) {
        ['Amerika Syarikat', 'British', 'Belanda'].forEach((n, i) => S.card(`<div class="t-h3" style="font-size:40px;text-align:center">${n}</div>`, { anim: 'pop', x: 50 + i * 335, y: 300, w: 310, at: 0, d: 0.4 + i * 0.5, rot: i === 1 ? 0 : (i ? 1.5 : -1.5) }));
        S.stamp('SEKATAN EKONOMI', { x: 90, y: 470, w: 900, at: 0.5, fs: 80, style: 'text-align:center;white-space:nowrap' });
        S.text('henti perdagangan · beku harta Jepun', { size: 'label', x: 60, y: 600, w: 960, align: 'center', at: 0.7 });
        S.arrow(540, 670, 540, 740, { at: 1, d: 0, color: RED });
        S.card('<div class="t-h3" style="text-align:center">Sasaran: <span class="hl">ASIA TENGGARA</span></div>', { color: 'gold', anim: 'slideU', x: 90, y: 750, w: 900, at: 1, d: 0.6 });
        [['Bijih timah', '#8A93A6'], ['Getah', '#3A8A4A'], ['Bauksit', '#C27B3A'], ['Petroleum', '#172C63']].forEach(([n, c], i) => S.card(`<div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:50%;background:${c};border:4px solid #172C63"></div><div class="t-body" style="font-size:38px">${n}</div></div>`, { anim: 'pop', x: 70 + (i % 2) * 480, y: 920 + Math.floor(i / 2) * 120, w: 460, at: 1, d: 3.0 + i * 0.5, pad: '8px 18px' }));
      },
    },
    {
      id: 'pakatan', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Pada tahun 1940, Jepun memeterai **Pakatan Tiga Negara** dengan Jerman dan Itali, lalu menjadi sebahagian daripada Kuasa Paksi.', pause: 0.3 },
        'Apabila rundingan untuk menamatkan sekatan ekonomi menemui **jalan buntu**, Jepun mengarahkan serangan serentak pada Disember 1941.',
      ],
      board: { name: 'Pakatan Tiga Negara & jalan buntu', visual: 'Tiga kad (Jepun, Jerman, Itali) disambung = KUASA PAKSI 1940; kad rundingan dengan palang merah; cop SERANGAN SERENTAK · DIS 1941.', doodle: 'Kad, rantai, palang, cop.', text: '1940 Pakatan Tiga Negara: Jepun + Jerman + Itali = Kuasa Paksi (Jerman hantar pakar ke Jepun) · rundingan buntu ➜ serangan serentak (Dis 1941)', anim: 'Kad bersambung; palang; cop pada akhir ayat.' },
      draw(S, { D }) {
        S.text('Pakatan <span class="hl">Tiga Negara</span> · 1940', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: -0.2, style: 'font-size:56px' });
        ['JEPUN', 'JERMAN', 'ITALI'].forEach((n, i) => S.card(`<div class="t-h3" style="text-align:center">${n}</div>`, { color: i ? '' : 'gold', anim: 'pop', x: 60 + i * 335, y: 410, w: 300, at: 0, d: 0.8 + i * 0.4 }));
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">= KUASA PAKSI</div>', { color: 'navy', anim: 'stamp', x: 240, y: 560, w: 600, at: 0.85 });
        S.card('<div class="t-body" style="font-size:40px;text-align:center">Rundingan tamatkan sekatan ekonomi</div>', { anim: 'slideU', x: 120, y: 770, w: 840, at: 1, d: 0 });
        S.add(D.cross(), { anim: 'stamp', x: 470, y: 760, w: 140, at: 1, d: 2.0, sfx: 'stamp' });
        S.stamp('SERANGAN SERENTAK · DIS 1941', { x: 40, y: 1000, w: 1000, at: 1.75, fs: 52, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'lapan-dis', bg: 'grid', transition: 'zoom',
      lines: [
        { text: 'Mengikut waktu Tokyo, pada 8 Disember 1941:', pause: 0.25 },
        { text: 'pukul 2.15 pagi, Jepun mendarat di Pantai Kuala Pak Amat, Kota Bharu;', say: 'pukul dua lima belas pagi, Jepun mendarat di Pantai Kuala Pak Amat, Kota Bharu;', pause: 0.2 },
        { text: 'pukul 3.25 pagi, Jepun menyerang Pearl Harbour di Hawaii, pangkalan tentera laut Amerika Syarikat;', say: 'pukul tiga dua puluh lima pagi, Jepun menyerang Pearl Harbour di Hawaii, pangkalan tentera laut Amerika Syarikat;', pause: 0.2 },
        { text: 'dan pukul 4.00 pagi, Jepun mendarat di Singgora, Thailand.', say: 'dan pukul empat pagi, Jepun mendarat di Singgora, Thailand.', pause: 0.35 },
        'Maka, perang di Asia Pasifik **bermula di Kota Bharu**!',
      ],
      board: { name: '8 Disember 1941 (waktu Tokyo)', visual: 'Tiga jam + kad: 2.15 Kota Bharu, 3.25 Pearl Harbour, 4.00 Singgora; cop besar "BERMULA DI KOTA BHARU!".', doodle: 'Jam dinding, kad, cop.', text: '8 DIS 1941 (waktu Tokyo) · 2.15 pagi Pantai Kuala Pak Amat, Kota Bharu · 3.25 pagi Pearl Harbour, Hawaii (pangkalan tentera laut AS) · 4.00 pagi Singgora, Thailand · BERMULA DI KOTA BHARU', anim: 'Setiap baris muncul tepat pada sebutan; cop pada ayat akhir.' },
      draw(S) {
        S.text('8 DIS 1941 · <span class="red">waktu Tokyo</span>', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: -0.2, style: 'font-size:56px' });
        const R3 = [[2, 15, '2.15', '<b>Pantai Kuala Pak Amat</b>, Kota Bharu', 1, RED], [3, 25, '3.25', '<b>Pearl Harbour</b>, Hawaii (pangkalan tentera laut AS)', 2, NAVY], [4, 0, '4.00', '<b>Singgora</b>, Thailand', 3, NAVY]];
        R3.forEach(([h, m, l, t, at, c], i) => {
          const y = 400 + i * 225;
          S.add(clock(h, m, l), { anim: 'pop', x: 60, y, w: 160, at });
          S.card(`<div class="t-body" style="font-size:40px;line-height:1.15">${t}</div>`, { color: i ? '' : 'gold', anim: 'slideR', x: 250, y: y + 20, w: 770, at, d: 0.2, rot: i % 2 ? 1 : -1, pad: '14px 22px', sfx: 'swish' });
        });
        S.stamp('BERMULA DI KOTA BHARU!', { x: 40, y: 1090, w: 1000, at: 4, d: 0.6, fs: 60, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'empayar', bg: 'dots', transition: 'paper',
      lines: [
        { text: 'Serangan ke atas Pearl Harbour bertujuan **melumpuhkan armada** Amerika Syarikat.', pause: 0.25 },
        { text: 'Jepun turut menyerang Filipina, Hong Kong, Guam dan Pulau Wake, lalu Amerika Syarikat mengisytiharkan perang terhadap Jepun.', pause: 0.25 },
        'Menjelang April 1942, Jepun telah membentuk **empayar yang luas** di Asia Pasifik.',
      ],
      board: { name: 'Serangan meluas & empayar Jepun', visual: 'Peta Asia: penanda Filipina & Hong Kong; kad Guam & Pulau Wake; kad AS isytihar perang; cop EMPAYAR LUAS · APR 1942.', doodle: 'Peta, penanda, kad, cop.', text: 'Pearl Harbour: lumpuhkan armada AS · Filipina, Hong Kong, Guam, Pulau Wake diserang · AS isytihar perang ke atas Jepun · Apr 1942: empayar luas Jepun', anim: 'Penanda pop mengikut sebutan; cop akhir.' },
      draw(S) {
        S.card('<div class="t-body" style="font-size:40px;text-align:center">Pearl Harbour ➜ <span class="hl">lumpuhkan armada AS</span></div>', { anim: 'slideU', x: 60, y: 290, w: 960, at: 0, d: 0.3 });
        const at = S.map({ bounds: [[94, -8], [146, 40]], w: 700 }, { x: 60, y: 430, w: 700, at: 0, d: 1.2, dur: 1.0 });
        S.pin(at, ...K.filipina, '<b>Filipina</b>', { at: 1, d: 3.6, color: RED, size: 0.9, fs: 32 });
        S.pin(at, ...K.hongkong, '<b>Hong Kong</b>', { at: 1, d: 4.3, color: RED, size: 0.9, fs: 32, left: true });
        S.card('<div class="t-h3" style="font-size:40px">Guam</div>', { anim: 'pop', x: 790, y: 470, w: 230, at: 1, d: 5.0, pad: '10px 18px' });
        S.card('<div class="t-h3" style="font-size:40px">Pulau Wake</div>', { anim: 'pop', x: 790, y: 590, w: 230, at: 1, d: 5.6, pad: '10px 18px' });
        S.card('<div class="t-body" style="font-size:34px;color:#FFFDF7">AS isytihar perang ke atas Jepun</div>', { color: 'red', anim: 'slideR', x: 790, y: 720, w: 230, at: 1, d: 6.8, pad: '10px 16px' });
        S.stamp('EMPAYAR LUAS · APR 1942', { x: 40, y: 1120, w: 1000, at: 2, d: 0.8, fs: 70, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'korban', bg: 'lined', transition: 'zoom',
      lines: ['Secara keseluruhan, Perang Dunia Kedua mengorbankan hampir **75 juta nyawa**.'],
      board: { name: 'Korban Perang Dunia Kedua', visual: 'Angka besar "≈ 75 JUTA NYAWA" di tengah, deretan ikon manusia kecil.', doodle: 'Ikon manusia, angka besar.', text: 'PD2: hampir 75 JUTA nyawa terkorban', anim: 'Angka ditulis; ikon muncul berderet.' },
      draw(S) {
        S.add(BIG('hampir', { fs: 60, color: RED }), { anim: 'pop', x: 40, y: 380, w: 1000, at: 0, d: 0.4 });
        S.add(BIG('<span class="hl">75 JUTA</span><br>NYAWA', { fs: 150 }), { anim: 'stamp', x: 20, y: 470, w: 1040, at: 0.55, sfx: 'stamp' });
        S.add('<svg viewBox="0 0 960 120">' + Array.from({ length: 12 }, (_, i) => `<g transform="translate(${40 + i * 78} 10)"><circle cx="20" cy="18" r="16" fill="#172C63"/><path d="M0 100 Q20 30 40 100 Z" fill="#172C63"/></g>`).join('') + '</svg>', { anim: 'wipe', x: 60, y: 900, w: 960, at: 0.7, dur: 1.2, sfx: false });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, Perang Pasifik tercetus akibat peluasan kuasa Jepun dan sekatan ekonomi kuasa Barat, dan ia **bermula di Kota Bharu** pada 8 Disember 1941.', pause: 0.35 },
        'Seterusnya, kita kaji **faktor kedatangan Jepun ke negara kita**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.5.', doodle: 'Pil, maskot.', text: 'Perindustrian · Tentera · Orde Baharu Asia · Sekatan ekonomi · Pakatan Tiga Negara · Kota Bharu 8 Dis 1941 · Seterusnya: 3.5 Faktor Kedatangan Jepun', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Perindustrian', 0.15], ['Golongan tentera', 0.2], ['Orde Baharu Asia', 0.25], ['Sekatan ekonomi', 0.4], ['Pakatan Tiga Negara', 0.5], ['Kota Bharu', 0.7]],
          ['BERMULA DI KOTA BHARU · 8 DIS 1941', 0.85], ['3.5 Faktor Kedatangan Jepun', 1]);
      },
    },
    // End-of-episode quiz on this subtopic (rule: every subtopic episode ends with a quiz).
    ...quizScenes([
      { q: "Siapakah yang menjadi Perdana Menteri Jepun pada Oktober 1941?", opts: ["Jeneral Hideki Tojo", "Maharaja Hirohito", "Jeneral Douglas MacArthur"], a: "Jeneral Hideki Tojo" },
      { q: "Mengikut waktu Tokyo, di manakah serangan Jepun pada 8 Disember 1941 bermula?", opts: ["Pearl Harbour", "Kota Bharu", "Singgora"], a: "Kota Bharu" },
      { q: "Pakatan Tiga Negara pada tahun 1940 melibatkan Jepun bersama negara apa?", opts: ["Britain dan Perancis", "Amerika Syarikat dan Rusia", "Jerman dan Itali"], a: "Jerman dan Itali" },
    ]),
    END,
  ],
};
