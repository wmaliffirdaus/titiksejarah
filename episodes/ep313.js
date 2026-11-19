// EPISOD KHAS – Analisis Topik Keutamaan SPM 2026 Sejarah (KSSM Tingkatan 4 & 5) (≈ 5.5 min)
// Posted after Bab 3 · Subtopik 3.1, before 3.2. Special episode: no subtopic quiz.
// Source: the user's "SPM 2026 Sejarah: Topic Priority Analysis (KSSM Tingkatan 4 & 5)" (19 Nov 2026), built from real Kertas 2
// papers SPM 2022–2024, the KSSM chapter list and the examiner reports (Kupasan Mutu Jawapan). Analysis, NOT an official prediction.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END } from './bab3.js';

const GREEN = '#3A8A4A';
const tier = (label, color, txt = '#FFFDF7') => `<span class="pill" style="font-size:34px;background:${color};color:${txt}">${label}</span>`;

// Doodle bar chart: how many of SPM 2022–2024 each chapter appeared in Kertas 2.
function bars(S, items, o = {}) {
  const x0 = 330, unit = o.unit ?? 200, y0 = o.y0 ?? 420, gap = o.gap ?? 112;
  items.forEach(([name, n, at, col], i) => {
    const y = y0 + i * gap;
    S.add(`<div class="t-body" style="font-size:34px;line-height:1.05;text-align:right">${name}</div>`, { anim: 'fade', x: 40, y: y + 6, w: 270, at, d: 0, sfx: false });
    S.add(`<div style="height:74px;width:${Math.max(8, n * unit)}px;background:${col || (n === 3 ? RED : n === 2 ? GOLD : '#DCE3EE')};border:5px solid ${NAVY};border-radius:12px;box-sizing:border-box"></div>`, { anim: 'wipe', x: x0, y, w: Math.max(8, n * unit), at, d: 0.1, dur: 0.6, sfx: false });
    S.add(`<div style="font-family:Marker;font-size:46px;color:${NAVY}">${n}/3</div>`, { anim: 'pop', x: x0 + n * unit + 18, y: y + 6, w: 120, at, d: 0.5, sfx: i ? false : 'pop' });
  });
}

export default {
  id: '313',
  file: '02B_Episod_Khas_Analisis_Topik_SPM2026_Sejarah',
  title: 'Episod Khas – Analisis Topik Keutamaan SPM 2026 Sejarah (Tingkatan 4 & 5)',
  header: { chip: 'EPISOD KHAS • SPM 2026', sub: 'Analisis Topik' },
  src: 'Analisis: Kertas 2 SPM 2022–2024, senarai bab KSSM & laporan pemeriksa · bukan ramalan rasmi',
  ...CH1,
  music: { key: 62, bpm: 104, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'SPM Sejarah pada 30 November 2026 makin dekat. Ada dua puluh bab, tapi masa ulang kaji makin suntuk.', pause: 0.4 },
        'Bab mana yang patut anda ulang kaji **dahulu**?',
      ],
      board: { name: 'Hook – 20 bab, masa suntuk', visual: 'Frame pertama lengkap: tajuk "SPM SEJARAH: BAB MANA DULU?", kalendar 30 NOV, timbunan 20 buku; tanda soal pada ayat kedua.', doodle: 'Kalendar, timbunan buku, tanda soal.', text: 'SPM SEJARAH · 30 NOV 2026 · 20 BAB · BAB MANA DULU?', anim: 'Elemen utama pada 0:00; tanda soal pop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('SPM SEJARAH:<br><span class="hl">BAB MANA DULU?</span>', { fs: 104 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(`<div style="width:300px;background:#FFFDF7;border:6px solid ${NAVY};border-radius:18px;box-shadow:8px 9px 0 ${NAVY};text-align:center;overflow:hidden"><div style="background:${RED};color:#FFFDF7;font-family:Marker;font-size:44px;padding:8px">NOV 2026</div><div style="font-family:Marker;font-size:150px;line-height:1.1;color:${NAVY}">30</div></div>`, { ...NOW, x: 90, y: 620, w: 300, rot: -4 });
        [0, 1, 2, 3, 4].forEach((i) => S.add(D.book(i === 4 ? '20 BAB' : '', [RED, GOLD, NAVY, '#3F5DA8', RED][i], { size: 34 }), { ...NOW, x: 560 + (i % 2) * 30, y: 980 - i * 80, w: 330, rot: (i % 2 ? 3 : -3) }));
        S.add(D.question(), { anim: 'pop', x: 900, y: 600, w: 120, at: 1, d: 0.2, rot: 10 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Episod Khas: **Analisis Topik Keutamaan SPM 2026**, Tingkatan 4 dan 5.'],
      board: { name: 'Kad tajuk episod khas', visual: 'Pil "EPISOD KHAS · SPM 2026", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'EPISOD KHAS · Analisis Topik Keutamaan SPM 2026 · Tingkatan 4 & 5', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'EPISOD KHAS · SPM 2026', 'Analisis Topik<br><span class="red">Keutamaan</span><br>Tingkatan 4 &amp; 5', { fs: 76, uy: 730, my: 800 }); },
    },
    {
      id: 'sumber', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Analisis ini berdasarkan Kertas 2 sebenar SPM 2022, 2023 dan 2024, senarai bab KSSM, serta laporan pemeriksa.', pause: 0.3 },
        'Ingat, ini **bukan ramalan rasmi**. Mana-mana bab boleh keluar, jadi tetap ulang kaji semua bab.',
      ],
      board: { name: 'Sumber analisis & penafian', visual: 'Tiga kertas peperiksaan (2022, 2023, 2024), buku KSSM, laporan pemeriksa; cop merah "BUKAN RAMALAN RASMI".', doodle: 'Kertas peperiksaan, buku, kanta pembesar, cop.', text: 'Sumber: Kertas 2 SPM 2022 · 2023 · 2024 + senarai bab KSSM + laporan pemeriksa · BUKAN RAMALAN RASMI · ulang kaji semua bab', anim: 'Kertas pop satu demi satu; cop pada ayat kedua.' },
      draw(S, { D }) {
        head(S, 'Dari Mana <span class="hl">Analisis Ini?</span>');
        ['2022', '2023', '2024'].forEach((y, i) => S.card(`<div class="tw red" style="font-size:24px;text-align:center">KERTAS 2</div><div style="font-family:Marker;font-size:64px;text-align:center">SPM ${y}</div>`, { anim: 'pop', x: 60 + i * 330, y: 410, w: 300, at: 0, d: 1.2 + i * 0.5, rot: (i - 1) * 2 }));
        S.card('<div class="t-body" style="font-size:38px;text-align:center">+ senarai bab <b>KSSM</b> &nbsp;+&nbsp; <b>laporan pemeriksa</b></div>', { anim: 'slideU', x: 80, y: 650, w: 920, at: 0, d: 4.4 });
        S.add(D.magnifier(), { anim: 'pop', x: 880, y: 1080, w: 130, at: 0, d: 5.0 });
        S.stamp('BUKAN RAMALAN RASMI', { x: 60, y: 900, w: 960, at: 1, d: 0.3, fs: 66, style: 'text-align:center;white-space:nowrap' });
        S.text('Tetap ulang kaji <span class="hl">SEMUA</span> bab!', { size: 'h3', x: 60, y: 1110, w: 960, align: 'center', at: 1, d: 2.6 });
      },
    },
    {
      id: 'format', bg: 'lined', transition: 'flip',
      lines: [
        { text: '**Kertas 1** pukul 8.15 pagi: empat puluh soalan objektif dalam satu jam.', say: 'Kertas satu pukul lapan lima belas pagi: empat puluh soalan objektif dalam satu jam.', pause: 0.3 },
        '**Kertas 2** pukul 10.30 pagi, selama dua jam tiga puluh minit. Bahagian A, empat soalan wajib bernilai sepuluh markah. Bahagian B, pilih tiga daripada lima esei bernilai dua puluh markah.',
      ],
      board: { name: 'Format peperiksaan Sejarah 1249', visual: 'Dua kad: KERTAS 1 (8.15 pagi, 40 objektif, 1 jam, 40 markah) & KERTAS 2 (10.30 pagi, 2 jam 30 min; A: 4 × 10 wajib; B: pilih 3 daripada 5 × 20).', doodle: 'Jam, kad.', text: 'Isnin 30 Nov 2026 · KERTAS 1: 8.15 pagi · 40 objektif · 1 jam · KERTAS 2: 10.30 pagi · 2 jam 30 min · A: 4 soalan wajib × 10 markah · B: pilih 3 daripada 5 × 20 markah', anim: 'Kad muncul mengikut sebutan.' },
      draw(S) {
        head(S, 'Format <span class="hl">Sejarah 1249</span>');
        duo(S, ['KERTAS 1', '<b class="red">8.15 pagi</b><br>40 soalan objektif<br>1 jam · 40 markah', 0.1],
          ['KERTAS 2', '<b class="red">10.30 pagi</b><br>2 jam 30 minit<br>100 markah', 1.0], { y: 400, fs: 40 });
        S.card('<div class="t-h3" style="font-size:44px">Bahagian A</div><div class="t-body" style="font-size:38px">4 soalan <b>wajib</b> × 10 markah</div>', { anim: 'slideL', x: 60, y: 790, w: 960, at: 1, d: 3.2, pad: '12px 22px' });
        S.card('<div class="t-h3" style="font-size:44px">Bahagian B</div><div class="t-body" style="font-size:38px">pilih <span class="hl">3 daripada 5</span> esei × 20 markah</div>', { color: 'gold', anim: 'slideR', x: 60, y: 1000, w: 960, at: 1, d: 5.6, pad: '12px 22px' });
      },
    },
    {
      id: 'tiga-tahun', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Tiga bab muncul dalam Kertas 2 **setiap tahun**, dari 2022 hingga 2024:', pause: 0.25 },
        { text: 'Tingkatan 5 Bab 9, Dasar Luar Malaysia; Tingkatan 5 Bab 7, Membina Kesejahteraan Negara;', pause: 0.15 },
        'dan Tingkatan 4 Bab 3, **Konflik Dunia dan Pendudukan Jepun**, bab yang sedang kita pelajari sekarang!',
      ],
      board: { name: 'Bab yang muncul setiap tahun (2022–2024)', visual: 'Carta palang doodle: T5 Bab 9, T5 Bab 7, T4 Bab 3 = 3/3 (merah); beberapa bab 2/3 (kuning) sebagai perbandingan; cop "BAB 3 KITA!".', doodle: 'Carta palang tangan, cop.', text: '3/3 tahun: T5 Bab 9 Dasar Luar · T5 Bab 7 Kesejahteraan · T4 Bab 3 Konflik Dunia & Jepun · 2/3: T4 Bab 2, T5 Bab 2, T5 Bab 5', anim: 'Palang dilukis mengikut sebutan; cop pada ayat akhir.' },
      draw(S) {
        head(S, 'Muncul <span class="hl">Setiap Tahun</span>');
        bars(S, [['T5 Bab 9<br>Dasar Luar', 3, 1.1], ['T5 Bab 7<br>Kesejahteraan', 3, 1.6], ['T4 Bab 3<br>Konflik &amp; Jepun', 3, 2.2], ['T4 Bab 2<br>Nasionalisme', 2, 2.7, GOLD], ['T5 Bab 2<br>Perlembagaan', 2, 2.8, GOLD], ['T5 Bab 5<br>Malaysia', 2, 2.9, GOLD]], { y0: 410, gap: 118 });
        S.stamp('BAB 3 KITA!', { x: 560, y: 1150, w: 460, at: 2.75, fs: 66, rot: -5, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tinggi1', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Jadi, inilah **enam keutamaan tinggi**.', pause: 0.25 },
        { text: 'Satu: Dasar Luar Malaysia, bersama Bab 10. Soalan 9 Bahagian B tentang dasar luar keluar setiap tahun.', pause: 0.2 },
        { text: 'Dua: Membina Kesejahteraan Negara, satu-satunya bab dalam Bahagian A ketiga-tiga tahun.', pause: 0.2 },
        'Tiga: Konflik Dunia dan Pendudukan Jepun. Pada 2024, ramai calon hanya beri tiga fakta tentang kerjasama Bersekutu, sedangkan enam diperlukan.',
      ],
      board: { name: 'Keutamaan tinggi 1–3', visual: 'Pil "KEUTAMAAN TINGGI" merah; tiga baris bernombor dengan sebab ringkas.', doodle: 'Pil, kad bernombor, bintang.', text: '1 T5 Bab 9 (+Bab 10) Dasar Luar – Soalan 9 Bahagian B setiap tahun · 2 T5 Bab 7 Kesejahteraan – Bahagian A 3 tahun berturut · 3 T4 Bab 3 Konflik Dunia & Jepun – kerjasama Bersekutu: 3 fakta diberi, 6 diperlukan', anim: 'Baris muncul mengikut sebutan.' },
      draw(S) {
        S.add(tier('KEUTAMAAN TINGGI', RED), { anim: 'pop', x: 60, y: 290, w: 480, at: 0, d: -0.2 });
        S.text('6 bab <span class="hl">wajib kuasai</span>', { size: 'h2', x: 60, y: 370, w: 960, at: 0, d: 0.3 });
        rows(S, [
          ['1', '<b>T5 Bab 9 Dasar Luar</b> (+ Bab 10) · Soalan 9 Bahagian B <span class="hl">setiap tahun</span>', 1],
          ['2', '<b>T5 Bab 7 Kesejahteraan</b> · Bahagian A <span class="hl">3 tahun berturut</span>', 2],
          ['3', '<b>T4 Bab 3 Konflik Dunia &amp; Jepun</b> · kerjasama Bersekutu: <span class="hl">6 fakta</span>, bukan 3', 3],
        ], { y0: 500, gap: 230, bw: 110, fs: 38 });
      },
    },
    {
      id: 'tinggi2', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Empat: Perlembagaan Persekutuan. Esei dua puluh markah pada 2022 dan 2024, dan ramai calon tertinggal sejarah penggubalannya.', pause: 0.2 },
        { text: 'Lima: Kebangkitan Nasionalisme, Tingkatan 4 Bab 2. Kesan politik dan ekonomi nasionalisme sering dijawab dengan lemah.', pause: 0.2 },
        'Enam: Pembentukan Malaysia serta Cabaran Selepas Pembentukan. Ulang kaji kedua-duanya sebagai **satu blok**.',
      ],
      board: { name: 'Keutamaan tinggi 4–6', visual: 'Tiga baris bernombor lagi; kad "satu blok" untuk T5 Bab 5 & 6.', doodle: 'Kad bernombor.', text: '4 T5 Bab 2 Perlembagaan – esei 2022 & 2024; sejarah penggubalan · 5 T4 Bab 2 Nasionalisme – kesan politik & ekonomi lemah · 6 T5 Bab 5 & 6 Pembentukan Malaysia + Cabaran – satu blok', anim: 'Baris muncul mengikut sebutan.' },
      draw(S) {
        S.add(tier('KEUTAMAAN TINGGI', RED), { anim: 'pop', x: 60, y: 290, w: 480, at: 0, d: -0.2 });
        rows(S, [
          ['4', '<b>T5 Bab 2 Perlembagaan</b> · esei 2022 &amp; 2024 · jangan tinggal <span class="hl">sejarah penggubalan</span>', 0.1],
          ['5', '<b>T4 Bab 2 Nasionalisme</b> · kesan <span class="hl">politik &amp; ekonomi</span>', 1.1],
          ['6', '<b>T5 Bab 5 &amp; 6</b> Pembentukan Malaysia + Cabaran · <span class="hl">satu blok</span>', 2.1],
        ], { y0: 410, gap: 260, bw: 110, fs: 38 });
      },
    },
    {
      id: 'corak', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Ada dua corak menarik. Pertama, soalan 9 Bahagian B sentiasa tentang dasar luar atau peranan antarabangsa Malaysia.', pause: 0.25 },
        'Kedua, soalan awal menguji isi Tingkatan 4, manakala soalan kemudian menguji isi Tingkatan 5.',
      ],
      board: { name: 'Dua corak kertas 2022–2024', visual: 'Kad besar "SOALAN 9 = DASAR LUAR" dengan glob; anak panah "Soalan awal: Tingkatan 4 ➜ soalan akhir: Tingkatan 5".', doodle: 'Glob, anak panah, kad.', text: 'Corak 1: Soalan 9 Bahagian B = dasar luar / peranan antarabangsa Malaysia (2022, 2023, 2024) · Corak 2: isi Tingkatan 4 dahulu, Tingkatan 5 kemudian', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        head(S, '2 Corak <span class="hl">Menarik</span>');
        S.svg(D.globe(), { x: 80, y: 410, w: 220, at: 0, d: 0.6 });
        S.card('<div class="tw red" style="font-size:28px">CORAK 1</div><div class="t-h2" style="font-size:56px">SOALAN 9 = DASAR LUAR</div><div class="t-body" style="font-size:34px">2022 · 2023 · 2024</div>', { anim: 'slideR', x: 330, y: 400, w: 690, at: 0, d: 1.6 });
        S.card('<div class="tw red" style="font-size:28px">CORAK 2</div><div class="t-body" style="font-size:40px">Soalan awal: <b>Tingkatan 4</b> ➜ soalan akhir: <b>Tingkatan 5</b></div>', { color: 'gold', anim: 'slideU', x: 60, y: 780, w: 960, at: 1, d: 0.2 });
        S.text('(corak pemerhatian, bukan peraturan)', { size: 'label', x: 60, y: 1010, w: 960, align: 'center', at: 1, d: 3.0 });
      },
    },
    {
      id: 'sederhana', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Seterusnya, **keutamaan sederhana**. Bab-bab ini kerap keluar sebagai soalan berstruktur sepuluh markah.', pause: 0.25 },
        'Antaranya Era Peralihan Kuasa British, Usaha ke Arah Kemerdekaan, Raja Berperlembagaan, Perlembagaan 1957 dan Pemasyhuran Kemerdekaan, Membina Kemakmuran Negara, Sistem Persekutuan, Ancaman Komunis, dan Warisan Negara Bangsa.',
      ],
      board: { name: 'Keutamaan sederhana (8 kawasan)', visual: 'Pil kuning "KEUTAMAAN SEDERHANA"; lapan pil bab muncul satu demi satu.', doodle: 'Pil.', text: 'T4 Bab 4 · T4 Bab 7 · T5 Bab 3 · T4 Bab 9 & 10 · T5 Bab 8 · T5 Bab 4 · T4 Bab 6 · T4 Bab 1 – kerap sebagai soalan berstruktur 10 markah', anim: 'Pil pop mengikut sebutan.' },
      draw(S) {
        S.add(tier('KEUTAMAAN SEDERHANA', GOLD, NAVY), { anim: 'pop', x: 60, y: 290, w: 560, at: 0, d: -0.2 });
        S.text('kerap: soalan <span class="hl">berstruktur 10 markah</span>', { size: 'h3', x: 60, y: 380, w: 960, at: 0, d: 2.0 });
        const P = [['T4 Bab 4', 'Peralihan Kuasa British'], ['T4 Bab 7', 'Ke Arah Kemerdekaan'], ['T5 Bab 3', 'Raja Berperlembagaan'], ['T4 Bab 9 &amp; 10', '1957 &amp; Merdeka'], ['T5 Bab 8', 'Kemakmuran Negara'], ['T5 Bab 4', 'Sistem Persekutuan'], ['T4 Bab 6', 'Ancaman Komunis'], ['T4 Bab 1', 'Warisan Negara Bangsa']];
        P.forEach(([b, n], i) => S.card(`<div class="tw red" style="font-size:24px">${b}</div><div class="t-body" style="font-size:32px;line-height:1.1">${n}</div>`, { anim: 'pop', x: 60 + (i % 2) * 490, y: 480 + Math.floor(i / 2) * 170, w: 470, at: 1, d: 0.3 + i * 1.3, pad: '10px 18px', rot: i % 2 ? 1 : -1, sfx: 'pop' }));
      },
    },
    {
      id: 'rendah', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Akhir sekali, **keutamaan rendah**: Persekutuan Tanah Melayu 1948, Kecemerlangan Malaysia di Persada Dunia, Pilihan Raya, dan Kedaulatan Negara.', pause: 0.3 },
        'Tetapi **jangan langkau**! Kertas 1 menguji kesemua dua puluh bab, kira-kira dua soalan bagi setiap bab.',
      ],
      board: { name: 'Keutamaan rendah: ulang kaji ringkas, jangan langkau', visual: 'Pil navy "KEUTAMAAN RENDAH"; empat kad bab; cop merah "JANGAN LANGKAU!"; kad "Kertas 1: ±2 soalan setiap bab".', doodle: 'Kad, cop.', text: 'T4 Bab 5 Persekutuan 1948 · T5 Bab 10 Kecemerlangan · T4 Bab 8 Pilihan Raya · T5 Bab 1 Kedaulatan · JANGAN LANGKAU · Kertas 1 menguji 20 bab (±2 soalan setiap bab)', anim: 'Kad pop; cop pada ayat kedua.' },
      draw(S) {
        S.add(tier('KEUTAMAAN RENDAH', NAVY, GOLD), { anim: 'pop', x: 60, y: 290, w: 500, at: 0, d: -0.2 });
        [['T4 Bab 5', 'Persekutuan 1948'], ['T5 Bab 10', 'Kecemerlangan Malaysia'], ['T4 Bab 8', 'Pilihan Raya'], ['T5 Bab 1', 'Kedaulatan Negara']].forEach(([b, n], i) => S.card(`<div class="tw red" style="font-size:24px">${b}</div><div class="t-body" style="font-size:34px">${n}</div>`, { anim: 'pop', x: 60 + (i % 2) * 490, y: 390 + Math.floor(i / 2) * 170, w: 470, at: 0, d: 2.0 + i * 1.2, pad: '10px 18px' }));
        S.stamp('JANGAN LANGKAU!', { x: 140, y: 760, w: 800, at: 1, d: 0, fs: 84, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Kertas 1: 20 bab · ±2 soalan setiap bab</div>', { color: 'navy', anim: 'slideU', x: 80, y: 960, w: 920, at: 1, d: 1.6 });
      },
    },
    {
      id: 'markah-hilang', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Di mana calon paling banyak hilang markah? Pertama, senarai fakta yang tidak cukup, contohnya beri satu fakta sedangkan soalan minta dua.', pause: 0.25 },
        'Kedua, jawapan KBAT yang guna logik sahaja, **tanpa fakta sejarah**.',
      ],
      board: { name: 'Di mana markah hilang', visual: 'Dua kad merah dengan palang: "fakta tidak cukup (1 diberi, 2 diminta)" & "KBAT: logik tanpa fakta sejarah".', doodle: 'Palang merah, kad.', text: 'Markah hilang: (1) fakta tidak cukup – 1 fakta bila diminta 2 · (2) KBAT guna logik tanpa fakta sejarah', anim: 'Kad muncul mengikut sebutan; palang dicop.' },
      draw(S, { D }) {
        head(S, 'Di Mana Markah <span class="red">Hilang?</span>');
        duo(S, ['FAKTA KURANG', 'beri <b>1 fakta</b>, soalan minta <b>2</b>', 0.55], ['KBAT KOSONG', 'logik sahaja, <b>tanpa fakta sejarah</b>', 1.1], { y: 430, fs: 40 });
        S.add(D.cross(), { anim: 'stamp', x: 220, y: 680, w: 110, at: 0.9, sfx: 'stamp' });
        S.add(D.cross(), { anim: 'stamp', x: 730, y: 680, w: 110, at: 1.6, sfx: 'stamp' });
      },
    },
    {
      id: 'teknik', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Tipnya: kira bilangan isi yang diminta, beri tepat sebanyak itu, dan huraikan setiap isi.', pause: 0.25 },
        { text: 'Untuk KBAT, gunakan formula ini: nyatakan **idea**, sokong dengan **fakta sejarah**, kemudian **jelaskan** kaitannya dengan soalan.', pause: 0.25 },
        'Untuk esei Bahagian B, bahagian (a) paling berat. Calon cemerlang memberi lima hingga sembilan isi.',
      ],
      board: { name: 'Teknik menjawab', visual: 'Tiga kad formula: IDEA ➜ FAKTA ➜ HURAIAN; nota "kira isi"; kad "Bahagian B (a): 5–9 isi".', doodle: 'Anak panah, kad, tanda semak.', text: 'Kira bilangan isi & huraikan setiap isi · KBAT: IDEA ➜ FAKTA SEJARAH ➜ JELASKAN · Bahagian B (a): calon cemerlang beri 5–9 isi', anim: 'Kad formula muncul mengikut sebutan.' },
      draw(S, { D }) {
        head(S, 'Teknik <span class="hl">Menjawab</span>');
        S.card('<div class="t-body" style="font-size:38px">✓ Kira isi yang diminta · ✓ beri tepat · ✓ <b>huraikan</b> setiap isi</div>', { anim: 'slideU', x: 60, y: 400, w: 960, at: 0, d: 0.5, pad: '12px 22px' });
        S.text('Formula KBAT', { size: 'h3', x: 60, y: 580, w: 960, at: 1, d: 0.4 });
        [['IDEA', GOLD, NAVY, 0.5], ['FAKTA', RED, '#FFFDF7', 0.68], ['JELASKAN', NAVY, GOLD, 0.85]].forEach(([t, bg, fg, f], i) => {
          S.add(`<div style="height:130px;background:${bg};border:5px solid ${NAVY};border-radius:20px;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:48px;color:${fg}">${t}</div>`, { anim: 'pop', x: 60 + i * 340, y: 660, w: 280, at: 1 + f });
          if (i < 2) S.arrow(345 + i * 340, 725, 395 + i * 340, 725, { at: 1 + f, d: 0.3, color: RED });
        });
        S.card('<div class="t-h3" style="text-align:center">Bahagian B (a): <span class="hl">5–9 isi</span></div>', { color: 'gold', anim: 'stamp', x: 160, y: 900, w: 760, at: 2, d: 1.8 });
      },
    },
    {
      id: 'esei-masa', bg: 'dots', transition: 'paper',
      lines: [
        { text: 'Sediakan esei untuk sekurang-kurangnya dua bab Tingkatan 4, iaitu Bab 3 dan Bab 2, serta tiga bab Tingkatan 5, iaitu Bab 9, Bab 2 atau Bab 7, dan Bab 5 dengan Bab 6.', pause: 0.3 },
        'Agihkan masa Kertas 2: kira-kira lima belas minit bagi setiap soalan Bahagian A, dua puluh tujuh minit bagi setiap esei, dan sembilan minit terakhir untuk menyemak.',
      ],
      board: { name: 'Persediaan esei & agihan masa Kertas 2', visual: 'Dua lajur esei (T4: Bab 3, Bab 2 · T5: Bab 9, Bab 2/7, Bab 5 & 6); jam dengan tiga segmen: A 4 × 15 min, B 3 × 27 min, 9 min semak.', doodle: 'Jam, kad.', text: 'Sedia esei: T4 Bab 3, Bab 2 · T5 Bab 9, Bab 2 atau 7, Bab 5 & 6 · Masa: A ≈ 15 min × 4 · B ≈ 27 min × 3 · 9 min semak', anim: 'Lajur esei meluncur; segmen masa muncul mengikut sebutan.' },
      draw(S) {
        head(S, 'Esei &amp; <span class="hl">Masa</span>');
        duo(S, ['T4', 'Bab 3<br>Bab 2', 0.2], ['T5', 'Bab 9<br>Bab 2 / Bab 7<br>Bab 5 &amp; 6', 0.55], { y: 400, fs: 42 });
        [['A: 4 × 15 min', GOLD, NAVY, 0.15], ['B: 3 × 27 min', RED, '#FFFDF7', 0.55], ['Semak: 9 min', NAVY, GOLD, 0.85]].forEach(([t, bg, fg, f], i) => S.add(`<div style="height:120px;background:${bg};border:5px solid ${NAVY};border-radius:20px;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:40px;color:${fg}">${t}</div>`, { anim: 'pop', x: 60 + i * 335, y: 870, w: 310, at: 1 + f }));
        S.text('2 jam 30 minit', { size: 'label', x: 60, y: 1010, w: 960, align: 'center', at: 1, d: 0.3 });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, mulakan dengan enam keutamaan tinggi, kemudian bab sederhana, dan baca semua bab sekurang-kurangnya sekali.', pause: 0.25 },
        { text: 'Gunakan analisis ini untuk menyusun keutamaan, bukan untuk meninggalkan bab.', pause: 0.35 },
        'Seterusnya, kita sambung Bab 3 dengan **Subtopik 3.2, Latar Belakang Perang Dunia**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci (Tinggi, Sederhana, Rendah, Kertas 1, KBAT, Masa); kad navy; maskot; kad seterusnya 3.2.', doodle: 'Pil, maskot.', text: 'Tinggi ➜ Sederhana ➜ Rendah · semua bab sekali · susun keutamaan, jangan tinggal bab · Seterusnya: 3.2 Latar Belakang Perang Dunia', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['6 Tinggi', 0.2], ['8 Sederhana', 0.45], ['4 Rendah', 0.7], ['Kertas 1: 20 bab', 0.85], ['KBAT + fakta', 1.0], ['Urus masa', 1.2]],
          ['SUSUN KEUTAMAAN, JANGAN TINGGAL BAB', 1.3], ['3.2 Latar Belakang Perang Dunia', 2]);
      },
    },
    END,
  ],
};
