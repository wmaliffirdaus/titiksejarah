// EPISOD KHAS – Anggaran Markah & Gred SPM Sejarah 2026 (≈ 5 min). Posted between Bab 3 · 3.6 and 3.7. Special episode: no subtopic quiz.
// Facts used:
//  - Sejarah 1249: Kertas 1 = 40 markah (40 objektif); Kertas 2 = 100 markah (Bahagian A 4 × 10, Bahagian B 3 × 20) → jumlah 140.
//  - Percentage estimate = (K1 + K2) ÷ 140 × 100.
//  - Reference grade scale widely used (incl. SPM 2024 tables reported by third parties): A+ 90–100, A 80–89, A- 70–79, B+ 65–69,
//    B 60–64, C+ 55–59, C 50–54, D 45–49, E 40–44, G 0–39.
//  - Lembaga Peperiksaan does NOT publish fixed SPM cut-offs; they change every year with overall candidate performance → ALWAYS
//    present the numbers as an ESTIMATE ("anggaran"), never as official.
//  - Sejarah is a compulsory pass subject for the SPM certificate (minimum grade E).
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END } from './bab3.js';

const GREEN = '#3A8A4A';
const GRADES = [['A+', 90, 126, RED], ['A', 80, 112, RED], ['A-', 70, 98, RED], ['B+', 65, 91, GOLD], ['B', 60, 84, GOLD], ['C+', 55, 77, GOLD], ['C', 50, 70, GOLD], ['D', 45, 63, '#3F5DA8'], ['E', 40, 56, GREEN], ['G', 0, 0, '#8A93A6']];

function calc(D) {   // calculator doodle
  const R = D.R;
  let s = R.rect(20, 10, 220, 300, { fill: NAVY }) + R.rect(40, 30, 180, 70, { fill: '#DCE3EE', strokeWidth: 3 });
  s += D.txt(205, 80, '140', { font: 'Marker', weight: 400, size: 44, color: NAVY, anchor: 'end' });
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) s += R.rect(44 + c * 60, 120 + r * 46, 48, 36, { fill: r === 3 && c === 2 ? RED : GOLD, strokeWidth: 2.5 });
  return `<svg viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}
const box = (html, bg, fg, fs = 46) => `<div style="background:${bg};color:${fg};border:5px solid ${NAVY};border-radius:20px;padding:14px 10px;text-align:center;font-family:Marker;font-size:${fs}px;line-height:1.08">${html}</div>`;
const sum = (k1, k2, tot, pct, grade, col) => `<div style="font-family:Marker;font-size:46px;text-align:center;line-height:1.3">${k1} <span class="red">+</span> ${k2} = <span class="hl">${tot}</span><br><span style="font-size:38px">${tot} ÷ 140 × 100 ≈ ${pct}%</span><br><span style="display:inline-block;background:${col};color:#FFFDF7;border:5px solid ${NAVY};border-radius:16px;padding:2px 26px;margin-top:6px">${grade}</span></div>`;

export default {
  id: '314',
  file: '07B_Episod_Khas_Anggaran_Markah_Gred_SPM2026_Sejarah',
  title: 'Episod Khas – Anggaran Markah & Gred SPM Sejarah 2026 (A+, A, A-, Lulus)',
  header: { chip: 'EPISOD KHAS • SPM 2026', sub: 'Kira Gred SPM' },
  src: 'Anggaran berdasarkan skala gred lazim · julat rasmi ditetapkan Lembaga Peperiksaan setiap tahun',
  ...CH1,
  music: { key: 60, bpm: 104, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Kertas 1 dapat 32, Kertas 2 dapat 70. Agak-agak, dapat gred apa dalam SPM Sejarah?', say: 'Kertas satu dapat tiga puluh dua, Kertas dua dapat tujuh puluh. Agak-agak, dapat gred apa dalam SPM Sejarah?', pause: 0.4 },
        'Jom belajar cara **kira markah** anda sendiri!',
      ],
      board: { name: 'Hook – dapat gred apa?', visual: 'Frame pertama lengkap: tajuk "DAPAT GRED APA?", kalkulator doodle, dua kad markah (K1 32/40, K2 70/100), tanda soal; pil "JOM KIRA!" pada ayat kedua.', doodle: 'Kalkulator, kad markah, tanda soal.', text: 'K1 32/40 · K2 70/100 · DAPAT GRED APA? · JOM KIRA!', anim: 'Elemen utama pada 0:00; pil pop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('DAPAT GRED<br><span class="red">APA?</span>', { fs: 124 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(calc(D), { ...NOW, x: 90, y: 620, w: 280, rot: -5 });
        S.card('<div class="tw red" style="font-size:26px">KERTAS 1</div><div style="font-family:Marker;font-size:72px">32<span style="font-size:40px">/40</span></div>', { ...NOW, anim: 'none', x: 450, y: 640, w: 270, rot: -3 });
        S.card('<div class="tw red" style="font-size:26px">KERTAS 2</div><div style="font-family:Marker;font-size:72px">70<span style="font-size:40px">/100</span></div>', { ...NOW, anim: 'none', x: 740, y: 680, w: 290, rot: 3 });
        S.add(D.question(), { ...NOW, x: 640, y: 930, w: 110 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:56px;background:#C93436;color:#FFFDF7">JOM KIRA!</span></div>', { anim: 'pop', x: 40, y: 1120, w: 1000, at: 1, d: 0.2 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Episod Khas: **Anggaran Markah dan Gred SPM Sejarah 2026**.'],
      board: { name: 'Kad tajuk episod khas', visual: 'Pil "EPISOD KHAS · SPM 2026", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'EPISOD KHAS · Anggaran Markah & Gred SPM Sejarah 2026', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'EPISOD KHAS · SPM 2026', 'Anggaran Markah<br>&amp; <span class="red">Gred</span><br>SPM Sejarah', { fs: 80, uy: 730, my: 800 }); },
    },
    {
      id: 'penting', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Sebelum kita mula, ingat satu perkara penting. Lembaga Peperiksaan **tidak menerbitkan** julat gred rasmi yang tetap.', pause: 0.25 },
        'Julat sebenar boleh berubah setiap tahun, mengikut prestasi keseluruhan calon. Jadi, nombor dalam video ini ialah **anggaran**, berdasarkan skala gred yang lazim digunakan.',
      ],
      board: { name: 'Penafian: anggaran, bukan julat rasmi', visual: 'Cop merah "ANGGARAN SAHAJA"; kad: julat rasmi tidak diterbitkan, boleh berubah setiap tahun ikut prestasi calon.', doodle: 'Cop, kad, tanda seru.', text: 'Lembaga Peperiksaan tidak terbitkan julat gred tetap · boleh berubah setiap tahun ikut prestasi calon · ANGGARAN berdasarkan skala gred lazim', anim: 'Kad muncul; cop pada ayat kedua.' },
      draw(S) {
        head(S, 'Ingat <span class="hl">Dulu!</span>');
        S.card('<div class="t-body" style="font-size:40px">Lembaga Peperiksaan <b>tidak menerbitkan</b> julat gred rasmi yang tetap</div>', { anim: 'slideL', x: 60, y: 410, w: 960, at: 0, d: 2.0, pad: '14px 22px' });
        S.card('<div class="t-body" style="font-size:40px">Julat sebenar <span class="hl">boleh berubah setiap tahun</span>, ikut prestasi calon</div>', { anim: 'slideR', x: 60, y: 620, w: 960, at: 1, d: 0, pad: '14px 22px' });
        S.stamp('ANGGARAN SAHAJA', { x: 140, y: 880, w: 800, at: 1.55, fs: 70, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'jumlah', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Langkah pertama, tahu jumlah markah. Kertas 1 bernilai empat puluh markah, dan Kertas 2 bernilai seratus markah.', pause: 0.25 },
        'Jadi, jumlah penuh SPM Sejarah ialah **seratus empat puluh** markah.',
      ],
      board: { name: 'Jumlah markah: 40 + 100 = 140', visual: 'Persamaan besar: kad K1 40 + kad K2 100 (A 40 + B 60) = 140.', doodle: 'Kad, tanda tambah & sama dengan.', text: 'KERTAS 1 = 40 · KERTAS 2 = 100 (Bahagian A 40 + Bahagian B 60) · JUMLAH = 140', anim: 'Kad muncul mengikut sebutan; jumlah dicop.' },
      draw(S) {
        head(S, 'Langkah 1: <span class="hl">Jumlah Markah</span>');
        S.add(box('KERTAS 1<br><span style="font-size:96px">40</span>', '#FFFDF7', NAVY, 44), { anim: 'pop', x: 60, y: 420, w: 380, at: 0, d: 1.8 });
        S.add('<div class="t-big" style="font-size:110px;text-align:center;color:#C93436">+</div>', { anim: 'pop', x: 440, y: 470, w: 120, at: 0, d: 3.0 });
        S.add(box('KERTAS 2<br><span style="font-size:96px">100</span>', '#FFFDF7', NAVY, 44), { anim: 'pop', x: 560, y: 420, w: 460, at: 0, d: 3.6 });
        S.text('Bahagian A 40 + Bahagian B 60', { size: 'label', x: 560, y: 700, w: 460, align: 'center', at: 0, d: 4.4 });
        S.add(box('JUMLAH = <span style="font-size:120px">140</span>', GOLD, NAVY, 60), { anim: 'stamp', x: 160, y: 820, w: 760, at: 1, d: 0.8, sfx: 'stamp' });
      },
    },
    {
      id: 'formula', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Langkah kedua, tukar kepada peratus. Campurkan markah Kertas 1 dan Kertas 2, bahagi dengan seratus empat puluh, kemudian darab dengan seratus.', pause: 0.3 },
        { text: 'Tip cepat: setiap satu markah bersamaan kira-kira **0.7 peratus**.', say: 'Tip cepat: setiap satu markah bersamaan kira-kira kosong perpuluhan tujuh peratus.' },
      ],
      board: { name: 'Formula peratus', visual: 'Kad formula besar: (K1 + K2) ÷ 140 × 100 = %; kalkulator; kad tip: 1 markah ≈ 0.7%.', doodle: 'Kalkulator, kad.', text: 'PERATUS = (K1 + K2) ÷ 140 × 100 · Tip: 1 markah ≈ 0.7%', anim: 'Formula ditulis; tip pop.' },
      draw(S, { D }) {
        head(S, 'Langkah 2: <span class="hl">Formula</span>');
        S.card('<div style="font-family:Marker;font-size:64px;text-align:center;line-height:1.3">( K1 <span class="red">+</span> K2 ) <span class="red">÷</span> 140<br><span class="red">×</span> 100 = <span class="hl">%</span></div>', { color: '', anim: 'stamp', x: 80, y: 410, w: 920, at: 0, d: 2.0 });
        S.add(calc(D), { anim: 'pop', x: 80, y: 800, w: 240, at: 1, d: 0, rot: -5 });
        S.card('<div class="tw red" style="font-size:28px">TIP CEPAT</div><div class="t-h3" style="font-size:52px">1 markah ≈ <span class="hl">0.7%</span></div>', { color: 'gold', anim: 'slideR', x: 360, y: 840, w: 660, at: 1, d: 0.3 });
      },
    },
    {
      id: 'skala', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Berdasarkan skala gred yang lazim digunakan:', pause: 0.2 },
        { text: 'gred A+ bermula pada sembilan puluh peratus, gred A pada lapan puluh peratus, dan gred A- pada tujuh puluh peratus.', say: 'gred A plus bermula pada sembilan puluh peratus, gred A pada lapan puluh peratus, dan gred A minus pada tujuh puluh peratus.', pause: 0.25 },
        'Manakala gred E, iaitu **lulus**, bermula pada empat puluh peratus. Di bawah itu ialah gred G, iaitu gagal.',
      ],
      board: { name: 'Skala gred lazim (anggaran)', visual: 'Tangga gred berwarna: A+ 90, A 80, A- 70, B+ 65, B 60, C+ 55, C 50, D 45, E 40 (lulus, hijau), G 0–39 (kelabu); tanda "ANGGARAN".', doodle: 'Tangga gred, bintang.', text: 'A+ 90–100 · A 80–89 · A- 70–79 · B+ 65–69 · B 60–64 · C+ 55–59 · C 50–54 · D 45–49 · E 40–44 (LULUS) · G 0–39 (GAGAL) · anggaran', anim: 'Anak tangga pop mengikut sebutan.' },
      draw(S) {
        head(S, 'Skala Gred <span class="hl">(Anggaran)</span>');
        GRADES.forEach(([g, p, , col], i) => {
          const at = i < 3 ? 1 + i * 0.32 : i === 8 ? 2.15 : i === 9 ? 2.7 : 1.95;
          S.add(`<div style="display:flex;align-items:center;gap:16px"><div style="width:120px;height:72px;border-radius:14px;background:${col};border:4px solid ${NAVY};display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:44px;color:#FFFDF7">${g}</div><div style="font-family:Marker;font-size:${g === 'E' || g === 'G' ? 32 : 40}px;white-space:nowrap;color:${NAVY}">${g === 'G' ? '0–39% · GAGAL' : p + '%' + (i ? ' – ' + (GRADES[i - 1][1] - 1) + '%' : ' – 100%') + (g === 'E' ? ' · LULUS' : '')}</div></div>`, { anim: 'slideL', x: 80 + (i >= 5 ? 470 : 0), y: 420 + (i % 5) * 112, w: 470, at, sfx: i < 3 || i >= 8 ? 'swish' : false });
        });
      },
    },
    {
      id: 'sasaran', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Jadi, berapa markah daripada seratus empat puluh yang anda perlukan?', pause: 0.25 },
        { text: 'Untuk A+, kira-kira 126 markah. Untuk A, 112 markah. Untuk A-, 98 markah.', say: 'Untuk A plus, kira-kira seratus dua puluh enam markah. Untuk A, seratus dua belas markah. Untuk A minus, sembilan puluh lapan markah.', pause: 0.25 },
        'Dan untuk lulus, iaitu gred E, kira-kira **56 markah** sahaja.',
      ],
      board: { name: 'Sasaran markah daripada 140', visual: 'Empat kad sasaran besar: A+ 126 · A 112 · A- 98 · E (lulus) 56, setiap satu dengan bar kemajuan /140.', doodle: 'Kad, bar kemajuan.', text: 'Daripada 140: A+ ≈ 126 · A ≈ 112 · A- ≈ 98 · LULUS (E) ≈ 56', anim: 'Kad muncul mengikut sebutan.' },
      draw(S) {
        head(S, 'Sasaran <span class="hl">/140</span>');
        [['A+', 126, RED, 1.15], ['A', 112, RED, 1.5], ['A-', 98, RED, 1.8], ['E · LULUS', 56, GREEN, 2.3]].forEach(([g, m, col, at], i) => {
          const y = 410 + i * 200;
          S.add(`<div style="display:flex;align-items:center;gap:20px"><div style="width:220px;height:130px;border-radius:20px;background:${col};border:5px solid ${NAVY};display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:${g.length > 3 ? 38 : 64}px;color:#FFFDF7;text-align:center;line-height:1">${g}</div><div style="flex:1"><div style="font-family:Marker;font-size:72px;color:${NAVY};line-height:1">${m}<span style="font-size:40px">/140</span></div><div style="height:28px;border:4px solid ${NAVY};border-radius:14px;background:#FFFDF7;margin-top:8px;overflow:hidden"><div style="height:100%;width:${(m / 140 * 100).toFixed(1)}%;background:${col}"></div></div></div></div>`, { anim: 'slideL', x: 60, y, w: 960, at, sfx: 'swish' });
        });
      },
    },
    {
      id: 'contoh1', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Contoh pertama: Aina. Kertas 1 dapat 35, Kertas 2 dapat 80. Jumlahnya 115 markah.', say: 'Contoh pertama: Aina. Kertas satu dapat tiga puluh lima, Kertas dua dapat lapan puluh. Jumlahnya seratus lima belas markah.', pause: 0.25 },
        'Bahagi dengan seratus empat puluh, darab seratus, kira-kira lapan puluh dua peratus. Tahniah, anggaran **gred A**!',
      ],
      board: { name: 'Contoh 1: Aina → A', visual: 'Watak pelajar (tudung); kiraan langkah demi langkah: 35 + 80 = 115 · 115 ÷ 140 × 100 ≈ 82% · cop gred A.', doodle: 'Watak, kad kiraan.', text: 'AINA · K1 35 + K2 80 = 115 · 115 ÷ 140 × 100 ≈ 82% · GRED A (anggaran)', anim: 'Kiraan ditulis mengikut sebutan; gred dicop.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px">CONTOH 1</span>', { anim: 'pop', x: 60, y: 290, w: 300, at: 0, d: -0.2 });
        S.svg(D.wanita({ pose: 'cheer' }), { x: 80, y: 400, w: 250, at: 0, d: 0.3 });
        S.text('Aina', { size: 'h3', x: 80, y: 820, w: 250, align: 'center', at: 0, d: 0.5 });
        S.card(sum(35, 80, 115, 82, 'GRED A', RED), { anim: 'slideR', x: 370, y: 430, w: 650, at: 0, d: 2.0 });
      },
    },
    {
      id: 'contoh2', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Contoh kedua: Hafiz. Kertas 1 dapat 30, Kertas 2 dapat 65. Jumlahnya 95, kira-kira enam puluh lapan peratus, iaitu gred B+.', say: 'Contoh kedua: Hafiz. Kertas satu dapat tiga puluh, Kertas dua dapat enam puluh lima. Jumlahnya sembilan puluh lima, kira-kira enam puluh lapan peratus, iaitu gred B plus.', pause: 0.25 },
        { text: 'Tapi lihat, Hafiz hanya perlukan **tiga markah lagi** untuk mencapai 98 markah, iaitu gred A-!', say: 'Tapi lihat, Hafiz hanya perlukan tiga markah lagi untuk mencapai sembilan puluh lapan markah, iaitu gred A minus!' },
      ],
      board: { name: 'Contoh 2: Hafiz → B+, 3 markah lagi ke A-', visual: 'Watak pelajar (songkok); kiraan 30 + 65 = 95 ≈ 68% → B+; bar kemajuan 95/98 dengan label "+3 markah = A-".', doodle: 'Watak, kad kiraan, bar.', text: 'HAFIZ · 30 + 65 = 95 · ≈ 68% · B+ · hanya +3 markah ke 98 = A-', anim: 'Kiraan; bar & label pada ayat kedua.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px">CONTOH 2</span>', { anim: 'pop', x: 60, y: 290, w: 300, at: 0, d: -0.2 });
        S.svg(D.rakyat({ pose: 'point' }), { x: 80, y: 400, w: 250, at: 0, d: 0.3 });
        S.text('Hafiz', { size: 'h3', x: 80, y: 820, w: 250, align: 'center', at: 0, d: 0.5 });
        S.card(sum(30, 65, 95, 68, 'GRED B+', GOLD), { anim: 'slideR', x: 370, y: 430, w: 650, at: 0, d: 2.0 });
        S.card('<div style="font-family:Marker;font-size:44px;text-align:center">95 ➜ 98 = <span class="red">+3 markah</span> = <span class="hl">A-</span></div><div style="height:30px;border:4px solid #172C63;border-radius:14px;background:#FFFDF7;margin-top:12px;overflow:hidden"><div style="height:100%;width:97%;background:#C93436"></div></div>', { color: 'gold', anim: 'stamp', x: 80, y: 960, w: 920, at: 1, d: 0.4 });
      },
    },
    {
      id: 'contoh3', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Contoh ketiga, **lulus atas pagar**. Kertas 1 dapat 20, Kertas 2 dapat 36. Jumlahnya 56, tepat empat puluh peratus.', say: 'Contoh ketiga, lulus atas pagar. Kertas satu dapat dua puluh, Kertas dua dapat tiga puluh enam. Jumlahnya lima puluh enam, tepat empat puluh peratus.', pause: 0.25 },
        'Ingat, Sejarah ialah subjek **wajib lulus** untuk mendapat sijil SPM. Jadi, setiap markah sangat bernilai!',
      ],
      board: { name: 'Contoh 3: lulus atas pagar (56/140 = 40%)', visual: 'Pagar doodle dengan watak di atasnya; kiraan 20 + 36 = 56 = 40% → E (LULUS); cop merah "WAJIB LULUS".', doodle: 'Pagar, watak, cop.', text: 'LULUS ATAS PAGAR · 20 + 36 = 56 · 56 ÷ 140 × 100 = 40% · GRED E · Sejarah WAJIB LULUS untuk sijil SPM', anim: 'Pagar dilukis; kiraan; cop pada ayat kedua.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px;background:#3A8A4A;color:#FFFDF7">LULUS ATAS PAGAR</span>', { anim: 'pop', x: 60, y: 290, w: 520, at: 0, d: -0.2 });
        S.add(`<svg viewBox="0 0 300 160"><path d="M10 150 H290 M10 90 H290" stroke="${NAVY}" stroke-width="8"/>${[20, 80, 140, 200, 260].map((x) => `<path d="M${x} 160 V40 L${x + 15} 20 L${x + 30} 40 V160" fill="#C27B3A" stroke="${NAVY}" stroke-width="5"/>`).join('')}</svg>`, { anim: 'fade', x: 70, y: 620, w: 300, at: 0, d: 0.2, sfx: false });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 130, y: 400, w: 180, at: 0, d: 0.5 });
        S.card(sum(20, 36, 56, 40, 'GRED E · LULUS', GREEN), { anim: 'slideR', x: 400, y: 430, w: 620, at: 0, d: 2.2 });
        S.stamp('SEJARAH WAJIB LULUS', { x: 100, y: 960, w: 880, at: 1, d: 0.4, fs: 70, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'kertas1-dulu', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Inilah trik paling berguna. Selepas Kertas 1, anda boleh anggarkan markahnya dahulu, kemudian kira berapa yang **diperlukan** dalam Kertas 2.', pause: 0.25 },
        'Formulanya mudah: markah sasaran, tolak markah Kertas 1.',
      ],
      board: { name: 'Trik: kira sasaran Kertas 2', visual: 'Kad formula: SASARAN − K1 = K2 YANG DIPERLUKAN; mentol.', doodle: 'Mentol, kad.', text: 'Trik: anggar K1 dahulu ➜ K2 diperlukan = SASARAN − K1', anim: 'Mentol pop; formula dicop.' },
      draw(S, { D }) {
        S.text('<span class="hl">TRIK</span> PALING BERGUNA', { size: 'title', x: 70, y: 310, w: 760, at: 0, d: -0.2, style: 'font-size:72px' });
        S.add(D.bulb(), { anim: 'pop', x: 830, y: 290, w: 170, at: 0, d: 0.4 });
        S.card('<div class="t-body" style="font-size:40px">Selepas Kertas 1, anggar markah ➜ kira <b>keperluan Kertas 2</b></div>', { anim: 'slideU', x: 60, y: 520, w: 960, at: 0, d: 3.0, pad: '14px 22px' });
        S.card('<div style="font-family:Marker;font-size:60px;text-align:center;line-height:1.25">K2 diperlukan =<br><span class="red">SASARAN</span> − <span class="hl">K1</span></div>', { color: 'gold', anim: 'stamp', x: 120, y: 780, w: 840, at: 1, d: 0.2 });
      },
    },
    {
      id: 'jadual', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Contohnya, Kertas 1 dapat 32. Untuk A, perlukan 112 tolak 32, iaitu **80** dalam Kertas 2.', say: 'Contohnya, Kertas satu dapat tiga puluh dua. Untuk A, perlukan seratus dua belas tolak tiga puluh dua, iaitu lapan puluh dalam Kertas dua.', pause: 0.25 },
        { text: 'Untuk A-, perlukan 66. Untuk lulus, cukup 24 sahaja.', say: 'Untuk A minus, perlukan enam puluh enam. Untuk lulus, cukup dua puluh empat sahaja.', pause: 0.3 },
        'Sekarang, kembali kepada soalan awal tadi: 32 tambah 70 ialah 102, kira-kira tujuh puluh tiga peratus, iaitu **gred A-**!',
      ],
      board: { name: 'Jadual keperluan Kertas 2 (K1 = 32) + jawapan hook', visual: 'Kad "K1 = 32"; tiga baris: A ➜ 112 − 32 = 80 · A- ➜ 98 − 32 = 66 · Lulus ➜ 56 − 32 = 24; kad akhir: 32 + 70 = 102 ≈ 73% → A-.', doodle: 'Kad, baris berwarna.', text: 'K1 = 32 · A: 112 − 32 = 80 · A-: 98 − 32 = 66 · LULUS: 56 − 32 = 24 · Hook: 32 + 70 = 102 ≈ 73% = A-', anim: 'Baris muncul mengikut sebutan; jawapan hook dicop.' },
      draw(S) {
        S.add(box('K1 = 32', NAVY, GOLD, 52), { anim: 'pop', x: 60, y: 300, w: 360, at: 0, d: 0.4 });
        S.text('Kertas 2 diperlukan:', { size: 'h3', x: 450, y: 320, w: 570, at: 0, d: 0.8 });
        rows(S, [['A', '112 − 32 = <b class="red">80</b>', 0.45, RED], ['A-', '98 − 32 = <b class="red">66</b>', 1.1, RED], ['LULUS', '56 − 32 = <b class="red">24</b>', 1.55, GREEN]], { y0: 440, gap: 150, bw: 180, fs: 46 });
        S.card(sum(32, 70, 102, 73, 'GRED A-', RED), { color: 'gold', anim: 'stamp', x: 140, y: 900, w: 800, at: 2, d: 0.6 });
      },
    },
    {
      id: 'tip-markah', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Tip akhir: dalam Kertas 1, setiap jawapan betul ialah satu markah, jadi jawab **semua** soalan.', pause: 0.25 },
        'Dalam Kertas 2, kira bilangan isi yang diminta dan huraikan setiap isi. Satu isi tambahan mungkin cukup untuk menaikkan gred anda!',
      ],
      board: { name: 'Tip menambah markah', visual: 'Dua kad: K1 – jawab semua (1 betul = 1 markah) · K2 – kira isi & huraikan; anak panah naik "+1 isi = naik gred?".', doodle: 'Tanda semak, anak panah naik.', text: 'K1: jawab SEMUA soalan (1 betul = 1 markah) · K2: kira isi diminta & huraikan setiap isi · +1 isi boleh naikkan gred', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        head(S, 'Tip <span class="hl">Tambah Markah</span>');
        duo(S, ['KERTAS 1', 'Jawab <span class="hl">SEMUA</span> soalan<br>1 betul = 1 markah', 0.2], ['KERTAS 2', 'Kira isi diminta<br>&amp; <span class="hl">huraikan</span> setiap isi', 1.0], { y: 410, fs: 40 });
        S.add(D.arrow(20, 200, 220, 20, { w: 240, h: 220, color: RED, sw: 14, bend: -0.15 }), { anim: 'pop', x: 120, y: 820, w: 220, at: 1, d: 2.6 });
        S.card('<div class="t-h3" style="text-align:center">+1 isi = <span class="hl">naik gred?</span></div>', { color: 'gold', anim: 'stamp', x: 380, y: 880, w: 600, at: 1, d: 3.0 });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya: campurkan markah dua kertas, bahagi seratus empat puluh, darab seratus. Sasarkan 126 untuk A+, 112 untuk A, 98 untuk A-, dan sekurang-kurangnya 56 untuk lulus.', say: 'Kesimpulannya: campurkan markah dua kertas, bahagi seratus empat puluh, darab seratus. Sasarkan seratus dua puluh enam untuk A plus, seratus dua belas untuk A, sembilan puluh lapan untuk A minus, dan sekurang-kurangnya lima puluh enam untuk lulus.', pause: 0.25 },
        { text: 'Ingat, ini anggaran sahaja. Yang paling penting, buat yang terbaik dalam setiap soalan.', pause: 0.35 },
        'Seterusnya, kita sambung Bab 3 dengan **Subtopik 3.7, Perjuangan Rakyat Menentang Pendudukan Jepun**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil sasaran (A+ 126, A 112, A- 98, Lulus 56, ÷140 ×100, Anggaran); kad navy; maskot; kad seterusnya 3.7.', doodle: 'Pil, maskot.', text: '(K1 + K2) ÷ 140 × 100 · A+ 126 · A 112 · A- 98 · LULUS 56 · anggaran sahaja · Seterusnya: 3.7 Perjuangan Rakyat Menentang Jepun', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['A+ · 126', 0.45], ['A · 112', 0.55], ['A- · 98', 0.65], ['Lulus · 56', 0.8], ['÷ 140 × 100', 0.2], ['Anggaran', 1.1]],
          ['BUAT YANG TERBAIK!', 1.5], ['3.7 Perjuangan Menentang Jepun', 2]);
      },
    },
    END,
  ],
};
