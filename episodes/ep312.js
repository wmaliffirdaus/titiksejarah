// BAB 3 · EPISOD TAMBAHAN (selepas Subtopik 3.3) – Bila Patriotisme Bertukar Menjadi Rasisme dan Fasisme (≈ 5 min)
// Special discussion episode. NOT a new chapter and NOT Subtopik 3.4.
// Script: the user's own answer (meaning, arguments, examples and closing preserved; English phrases rendered in Malay so the
// Asyraf voice stays consistent). Historical anchors from KSSM 3.3 (Fasisme: Mussolini 1922; Nazisme: Hitler 1933).
// Sensitivity rules: no swastika or other hate symbols; Palestine shown only as civilian/humanitarian illustration;
// a clear on-screen distinction between a government's actions and any race or religion.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, END } from './bab3.js';

const sv = (vb, s) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
function house(D, cracked) {
  const R = D.R;
  let s = R.rect(30, 110, 200, 150, { fill: '#E2D7C0' }) + R.poly([[16, 116], [130, 30], [244, 116]], { fill: cracked ? '#8A93A6' : RED });
  s += R.rect(110, 180, 40, 80, { fill: NAVY }) + R.rect(52, 140, 40, 36, { fill: '#DCE3EE', strokeWidth: 2 }) + R.rect(168, 140, 40, 36, { fill: '#DCE3EE', strokeWidth: 2 });
  if (cracked) {
    s += R.path('M140 116 L128 150 L146 176 L132 210', { strokeWidth: 4 }) + R.path('M60 200 L80 220 L72 250', { strokeWidth: 3 });
    s += R.ellipse(40, 268, 60, 22, { fill: '#8A93A6' }) + R.ellipse(220, 270, 70, 24, { fill: '#8A93A6' }) + R.ellipse(190, 262, 30, 14, { fill: '#C4CAD6' });
  }
  return sv('0 0 260 290', s);
}
function tent(D, color) {
  const R = D.R;
  return sv('0 0 220 170', R.poly([[10, 160], [110, 20], [210, 160]], { fill: color }) + R.poly([[90, 160], [110, 90], [130, 160]], { fill: NAVY }) + R.line(0, 162, 220, 162, { strokeWidth: 4 }));
}
function candles(n = 5) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = 30 + i * 80;
    s += `<rect x="${x}" y="70" width="34" height="80" rx="4" fill="#FFFDF7" stroke="${NAVY}" stroke-width="4"/>`;
    s += `<path d="M${x + 17} 66 Q${x + 2} 46 ${x + 17} 18 Q${x + 32} 46 ${x + 17} 66 Z" fill="${GOLD}" stroke="${RED}" stroke-width="3"/>`;
  }
  return sv(`0 0 ${n * 80 + 20} 160`, s);
}
// Cikgu (lelaki): kemeja putih, seluar navy, misai, memegang buku catatan.
const cikgu = (D, o = {}) => D.person({ hat: 'hair', shirt: '#FFFDF7', pants: NAVY, beard: true, prop: 'scroll', pose: 'present', ...o });
function blindfolded(D) {   // person with a navy blindfold (blinded by ideology)
  return D.person({ hat: 'songkok', shirt: '#3F5DA8', samping: GOLD, pose: 'point' }).replace(/<\/svg>$/, `<path d="M14 72 Q100 60 186 72 L186 96 Q100 84 14 96 Z" fill="${NAVY}"/><path d="M186 80 L222 70 M186 88 L220 98" stroke="${NAVY}" stroke-width="7" stroke-linecap="round"/></svg>`);
}
const redLine = (S, y, at, d = 0, label = 'GARISAN MERAH') => {
  S.add(`<svg viewBox="0 0 960 40"><line x1="10" y1="20" x2="950" y2="20" stroke="${RED}" stroke-width="8" stroke-dasharray="26 16" stroke-linecap="round"/></svg>`, { anim: 'wipe', x: 60, y, w: 960, at, d, dur: 0.8, sfx: 'pencil' });
  if (label) S.add(`<span class="pill" style="font-size:30px;background:${RED};color:#FFFDF7">${label}</span>`, { anim: 'pop', x: 380, y: y - 22, w: 360, at, d: d + 0.5, align: 'center' });
};

export default {
  id: '312',
  file: '04B_Bab3_Episod_Tambahan_Patriotisme_Rasisme_Fasisme',
  title: 'Bila Patriotisme Bertukar Menjadi Rasisme dan Fasisme – Bab 3, Episod Tambahan (selepas Subtopik 3.3)',
  header: { chip: 'BAB 3 • TAMBAHAN', sub: 'Patriotisme vs Fasisme' },
  src: 'Bab 3 · Episod Tambahan (selepas 3.3) · Rujukan: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.3)',
  ...CH1,
  music: { key: 57, bpm: 96, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: '“Cikgu, apa jadi kalau seseorang tu terlalu sayangkan negara dan bangsa dia sendiri?', pause: 0.3 },
        'Bila sebenarnya sifat **patriotisme** itu bertukar menjadi **rasisme** dan **fasisme**?”',
      ],
      board: { name: 'Hook – soalan pelajar', visual: 'Frame pertama lengkap: tajuk "BILA PATRIOTISME JADI RASISME & FASISME?", pelajar mengangkat tangan dengan belon kata, tanda soal; cikgu muncul pada ayat kedua.', doodle: 'Pelajar (songkok, angkat tangan), cikgu (lelaki, kemeja putih, misai), belon kata, tanda soal.', text: 'BILA PATRIOTISME JADI RASISME & FASISME?', anim: 'Elemen utama kelihatan pada 0:00; cikgu pop pada ayat kedua.', music: 'Whoosh pembuka; muzik reflektif bermula perlahan.' },
      draw(S, { D }) {
        S.add(BIG('BILA <span class="hl">PATRIOTISME</span><br>JADI <span class="red">RASISME</span><br>&amp; <span class="red">FASISME</span>?', { fs: 88 }), { ...NOW, x: 20, y: 280, w: 1040 });
        S.add(D.rakyat({ pose: 'up', mood: 'talk' }), { ...NOW, x: 60, y: 700, w: 300 });
        S.add('<div class="bubble" style="font-size:40px">“Cikgu, bila sayang negara jadi <b class="red">bahaya</b>?”</div>', { ...NOW, x: 340, y: 680, w: 440 });
        S.add(D.question(), { ...NOW, x: 820, y: 640, w: 110, rot: 10 });
        S.add(cikgu(D), { anim: 'pop', x: 760, y: 800, w: 280, at: 1, d: 0.2 });
        S.text('Cikgu', { size: 'label', x: 760, y: 1210, w: 260, align: 'center', at: 1, d: 0.4 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Bab 3, Episod Tambahan selepas Subtopik 3.3: **Bila Patriotisme Bertukar Menjadi Rasisme dan Fasisme**.'],
      board: { name: 'Kad tajuk episod tambahan', visual: 'Pil "BAB 3 · EPISOD TAMBAHAN", label "selepas Subtopik 3.3", tajuk, maskot rasmi.', doodle: 'Pil, garis bawah, pelekat maskot.', text: 'BAB 3 · EPISOD TAMBAHAN (selepas Subtopik 3.3) · Bila Patriotisme Bertukar Menjadi Rasisme dan Fasisme', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) {
        titleCard(S, D, 'BAB 3 · EPISOD TAMBAHAN', 'Bila Patriotisme<br>Bertukar Menjadi<br><span class="red">Rasisme &amp; Fasisme</span>', { fs: 70, uy: 730, my: 820 });
        S.text('selepas Subtopik 3.3 · bukan subtopik baharu', { size: 'label', x: 60, y: 760, w: 960, align: 'center', at: 0, d: 0.9, style: 'font-size:38px' });
      },
    },
    {
      id: 'imbas', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Masih ingat Subtopik 3.3? Kita belajar tentang **Fasisme** di Itali, di bawah Benito Mussolini, dan **Nazisme** di Jerman, di bawah Adolf Hitler.', pause: 0.3 },
        'Kedua-dua ideologi ini mengagungkan negara dan bangsa sendiri secara melampau, lalu menindas sesiapa yang dianggap berbeza.',
      ],
      board: { name: 'Imbas kembali 3.3: Fasisme & Nazisme', visual: 'Pil IMBAS KEMBALI 3.3; dua kad: FASISME (Itali, Mussolini 1922) & NAZISME (Jerman, Hitler 1933); cop "MELAMPAU". Tiada simbol kebencian.', doodle: 'Kad, cop.', text: 'FASISME · Itali · Mussolini (1922) · NAZISME · Jerman · Hitler (1933) · agungkan negara & bangsa secara melampau · tindas yang dianggap berbeza', anim: 'Kad meluncur mengikut sebutan; cop pada ayat kedua.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:38px">IMBAS KEMBALI · 3.3</span>', { anim: 'pop', x: 70, y: 290, w: 520, at: 0, d: -0.2 });
        duo(S, ['FASISME', '<b class="red">Itali</b><br>Benito Mussolini<br>berkuasa 1922', 0.3], ['NAZISME', '<b class="red">Jerman</b><br>Adolf Hitler<br>kerajaan 1933', 0.62], { y: 400, fs: 40 });
        S.stamp('MELAMPAU', { x: 290, y: 820, w: 500, at: 1, d: 1.2, fs: 96, style: 'text-align:center' });
        S.card('<div class="t-body" style="font-size:40px;text-align:center">agungkan negara &amp; bangsa sendiri ➜ <span class="hl">tindas yang dianggap berbeza</span></div>', { anim: 'slideU', x: 80, y: 1010, w: 920, at: 1, d: 2.6 });
      },
    },
    {
      id: 'beza', bg: 'lined', transition: 'flip', gap: 0.3,
      lines: [
        { text: 'Cikgu tersenyum, lalu menjawab. Sebelum itu, kita perlu bezakan empat perkara.', pause: 0.3 },
        '**Patriotisme** ialah rasa sayang dan bangga terhadap negara, sambil tetap menghormati orang lain.',
        '**Nasionalisme melampau** pula meletakkan bangsa atau negara sendiri di atas segala-galanya.',
        '**Rasisme** ialah kepercayaan bahawa sesuatu bangsa lebih tinggi daripada bangsa lain, sehingga berlaku diskriminasi.',
        '**Fasisme** pula ialah ideologi politik yang mengagungkan negara dan bangsa, memerintah secara autoritarian, dan menindas sesiapa yang menentang.',
      ],
      board: { name: 'Bezakan empat perkara', visual: 'Tajuk "4 PERKARA BERBEZA"; kad PATRIOTISME (navy, tanda semak) di atas, garisan merah putus-putus, kemudian tiga baris merah: NASIONALISME MELAMPAU, RASISME, FASISME.', doodle: 'Kad, tanda semak, garisan merah, hati.', text: 'PATRIOTISME = sayang & bangga akan negara + hormat orang lain ✓ · NASIONALISME MELAMPAU = bangsa/negara sendiri di atas segala-galanya · RASISME = bangsa sendiri lebih tinggi ➜ diskriminasi · FASISME = ideologi politik: agungkan negara & bangsa, autoritarian, tindas penentang', anim: 'Setiap baris muncul tepat pada sebutan; garisan merah dilukis sebelum nasionalisme melampau.' },
      draw(S, { D }) {
        head(S, '4 Perkara <span class="hl">Berbeza</span>');
        S.card(`<div style="display:flex;align-items:center;gap:20px"><div style="width:120px;flex:none">${D.heart(RED)}</div><div><div class="t-h3">PATRIOTISME</div><div class="t-body" style="font-size:36px">sayang &amp; bangga akan negara + <span class="hl">hormat orang lain</span></div></div></div>`, { anim: 'slideL', x: 60, y: 400, w: 960, at: 1, d: 0, pad: '14px 22px' });
        S.add(D.check(), { anim: 'pop', x: 920, y: 400, w: 90, at: 1, d: 1.6, sfx: 'ding' });
        redLine(S, 640, 2, -0.3);
        rows(S, [
          ['NASIONALISME MELAMPAU', 'bangsa / negara sendiri <b>di atas segala-galanya</b>', 2, RED],
          ['RASISME', 'bangsa sendiri “lebih tinggi” ➜ <b>diskriminasi</b>', 3, RED],
          ['FASISME', 'ideologi politik: agungkan negara &amp; bangsa · autoritarian · <b>tindas penentang</b>', 4, RED],
        ], { y0: 710, gap: 200, bw: 290, fs: 36 });
      },
    },
    {
      id: 'bermula', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Ingat, patriotisme yang sihat **tidak semestinya** membawa kepada fasisme.', pause: 0.3 },
        'Masalahnya bermula bila rasa sayang terhadap bangsa sendiri bertukar menjadi **kebencian**, **diskriminasi**, dan kepercayaan bahawa bangsa sendiri lebih mulia daripada bangsa lain.',
      ],
      board: { name: 'Bila sayang bertukar menjadi benci', visual: 'Hati merah + kad "Patriotisme sihat ≠ fasisme"; garisan merah; tiga kad: KEBENCIAN, DISKRIMINASI, "BANGSA AKU LEBIH MULIA".', doodle: 'Hati, garisan merah, kad.', text: 'Patriotisme sihat TIDAK SEMESTINYA membawa kepada fasisme · masalah bermula: KEBENCIAN · DISKRIMINASI · "bangsa aku lebih mulia"', anim: 'Hati pop; garisan dilukis; kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.add(D.heart(RED), { anim: 'pop', x: 80, y: 310, w: 200, at: 0, d: 0.2 });
        S.card('<div class="t-h3" style="font-size:44px">Patriotisme sihat</div><div class="t-body" style="font-size:38px"><span class="hl">tidak semestinya</span> membawa kepada fasisme</div>', { anim: 'slideR', x: 310, y: 310, w: 710, at: 0, d: 0.6 });
        redLine(S, 640, 1, 0, 'BILA MASALAH BERMULA');
        [['KEBENCIAN', 0.3], ['DISKRIMINASI', 0.4], ['“BANGSA AKU LEBIH MULIA”', 0.62]].forEach(([t, f], i) => S.card(`<div class="t-h3" style="text-align:center;color:#FFFDF7;font-size:${i === 2 ? 42 : 52}px">${t}</div>`, { color: 'red', anim: 'stamp', x: 90 + (i % 2) * (i === 2 ? 0 : 470), y: 740 + Math.floor(i / 2) * 200, w: i === 2 ? 900 : 430, at: 1, d: 0, style: '', rot: i % 2 ? 2 : -2, ...{ at: 1 + f } }));
      },
    },
    {
      id: 'maruah', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Bila dah sampai tahap itu, orang akan mula hilang rasa hormat terhadap orang lain, sebagai manusia yang sama-sama ada **maruah** dan **hak**.', pause: 0.3 },
        'Mereka mula rasa bangsa sendiri lebih tinggi daripada bangsa lain, sampai orang yang berbeza bangsa dianggap seperti **manusia kelas kedua**.',
      ],
      board: { name: 'Maruah & hak manusia', visual: 'Dua watak berlainan latar berdiri sama tinggi; kad "SEMUA MANUSIA ADA MARUAH & HAK"; neraca condong; cop "MANUSIA KELAS KEDUA?" dipangkah.', doodle: 'Watak, neraca, palang merah, cop.', text: 'Semua manusia ada MARUAH & HAK · "manusia kelas kedua" ✗', anim: 'Watak & kad pada ayat pertama; neraca condong dan cop pada ayat kedua.' },
      draw(S, { D }) {
        S.svg(D.rakyat({ pose: 'present' }), { x: 90, y: 300, w: 230, at: 0, d: 0.2 });
        S.svg(D.person({ hat: 'hair', shirt: GOLD, pants: NAVY, pose: 'present' }), { x: 760, y: 300, w: 230, at: 0, d: 0.5 });
        S.card('<div class="t-h3" style="text-align:center">Semua manusia ada<br><span class="hl">MARUAH &amp; HAK</span></div>', { anim: 'pop', x: 330, y: 400, w: 420, at: 0, d: 3.0 });
        S.svg(D.scales(), { x: 400, y: 760, w: 280, at: 1, d: 0.2, rot: -10 });
        S.stamp('MANUSIA KELAS KEDUA?', { x: 40, y: 1080, w: 860, at: 1.6, fs: 56, style: 'text-align:center;white-space:nowrap' });
        S.add(D.cross(), { anim: 'stamp', x: 910, y: 1060, w: 100, at: 1.85, sfx: 'stamp' });
      },
    },
    {
      id: 'nazi', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Inilah yang berlaku di Jerman Nazi. Bangsa Jerman diagungkan, manakala kaum lain, terutamanya orang Yahudi, didiskriminasi dan dianiaya,', pause: 0.15 },
        'sehingga berjuta-juta nyawa terkorban dalam peristiwa **Holokaus**.',
      ],
      board: { name: 'Pengajaran sejarah: Jerman Nazi & Holokaus', visual: 'Tajuk "JERMAN NAZI"; dua kad: "bangsa Jerman diagungkan" / "Yahudi & kaum lain didiskriminasi, dianiaya"; deretan lilin peringatan; kad "berjuta-juta nyawa terkorban · Holokaus". Tiada simbol Nazi.', doodle: 'Lilin peringatan, kad.', text: 'JERMAN NAZI · bangsa Jerman diagungkan · Yahudi & kaum lain didiskriminasi & dianiaya · berjuta-juta nyawa terkorban (Holokaus)', anim: 'Kad meluncur; lilin muncul perlahan (fade).' },
      draw(S) {
        head(S, 'Pengajaran: <span class="hl">Jerman Nazi</span>');
        duo(S, ['DIAGUNGKAN', 'bangsa Jerman', 0.15], ['DIANIAYA', 'orang Yahudi &amp; kaum lain', 0.55], { y: 410, fs: 40 });
        S.add(candles(5), { anim: 'fade', dur: 1.2, x: 230, y: 740, w: 620, at: 1, d: -0.4, sfx: false });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Berjuta-juta nyawa terkorban</div><div class="t-body" style="text-align:center;color:#FFFDF7;font-size:38px">HOLOKAUS</div>', { color: 'navy', anim: 'slideU', x: 120, y: 960, w: 840, at: 1, d: 0.3 });
      },
    },
    {
      id: 'taksub', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Lama-kelamaan, kita boleh jadi terlalu **taksub** dengan bangsa atau negara sendiri, sampai apa sahaja yang mereka lakukan, walaupun jelas salah, kita tetap pertahankan.', pause: 0.3 },
        'Kenapa? Sebab kita sudah terlalu dibutakan oleh ideologi sendiri, sampai tak dapat bezakan antara **mempertahankan bangsa** dengan **mempertahankan kesalahan** bangsa sendiri.',
      ],
      board: { name: 'Taksub & dibutakan ideologi', visual: 'Watak bertutup mata (penutup mata navy) menuding; kad "walaupun jelas salah, tetap dipertahankan"; dua kad: mempertahankan bangsa ✓ / mempertahankan kesalahan bangsa ✗.', doodle: 'Watak bertutup mata, tanda semak, palang.', text: 'TAKSUB · dibutakan ideologi · mempertahankan bangsa ✓ ≠ mempertahankan kesalahan bangsa ✗', anim: 'Watak pop; kad muncul mengikut sebutan; tanda semak & palang pop.' },
      draw(S, { D }) {
        S.svg(blindfolded(D), { x: 70, y: 300, w: 280, at: 0, d: 0.3 });
        S.card('<div class="t-h2" style="font-size:60px" >TAKSUB</div><div class="t-body" style="font-size:38px">walaupun <span class="hl">jelas salah</span>, tetap dipertahankan</div>', { anim: 'slideR', x: 380, y: 340, w: 640, at: 0, d: 0.9 });
        S.text('dibutakan oleh ideologi', { size: 'label', x: 380, y: 620, w: 640, at: 1, d: 0.8 });
        duo(S, ['✓ BETUL', 'Mempertahankan <b>bangsa</b>: hak, budaya, maruah', 1.4], ['✗ SALAH', 'Mempertahankan <b>kesalahan</b> bangsa sendiri', 1.75], { y: 780, fs: 38 });
      },
    },
    {
      id: 'assabiyah', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Contohnya, masyarakat Arab zaman Jahiliah mempunyai konsep **assabiyah**, iaitu semangat kesukuan yang terlalu kuat.', pause: 0.3 },
        'Bila kabilah sendiri buat salah pun, mereka tetap akan pertahankan, kerana bagi mereka, kesetiaan kepada kabilah lebih penting daripada **kebenaran**.',
      ],
      board: { name: 'Assabiyah zaman Jahiliah', visual: 'Bukit pasir dan khemah kabilah; kad definisi ASSABIYAH; neraca: "KESETIAAN KABILAH" mengatasi "KEBENARAN"; cop merah.', doodle: 'Khemah, bukit pasir, neraca, cop.', text: 'ARAB JAHILIAH · ASSABIYAH = semangat kesukuan melampau · kesetiaan kepada kabilah > kebenaran ✗', anim: 'Khemah dilukis; kad pop; neraca & cop pada ayat kedua.' },
      draw(S, { D }) {
        S.add(`<svg viewBox="0 0 960 120"><path d="M0 110 Q160 30 320 90 T640 80 T960 70 L960 120 L0 120 Z" fill="#FAE6A2" stroke="${NAVY}" stroke-width="5"/></svg>`, { anim: 'wipe', x: 60, y: 560, w: 960, at: 0, d: 0, dur: 0.9, sfx: false });
        S.svg(tent(D, RED), { x: 120, y: 420, w: 230, at: 0, d: 0.3 });
        S.svg(tent(D, GOLD), { x: 420, y: 440, w: 200, at: 0, d: 0.6 });
        S.svg(tent(D, '#3F5DA8'), { x: 700, y: 430, w: 220, at: 0, d: 0.9 });
        S.text('Arab zaman <span class="red">Jahiliah</span>', { size: 'h3', x: 70, y: 300, w: 940, at: 0, d: 0.1 });
        S.card('<div class="t-h2" style="font-size:58px">ASSABIYAH</div><div class="t-body" style="font-size:38px">semangat kesukuan yang <span class="hl">terlalu kuat</span></div>', { anim: 'slideU', x: 80, y: 720, w: 920, at: 0, d: 2.6 });
        S.card('<div class="t-body" style="font-size:40px;text-align:center"><b>Kesetiaan kepada kabilah</b> &gt; <span class="red"><b>kebenaran</b></span></div>', { color: 'gold', anim: 'pop', x: 120, y: 980, w: 840, at: 1, d: 3.0 });
        S.add(D.cross(), { anim: 'stamp', x: 900, y: 960, w: 100, at: 1.92, sfx: 'stamp' });
      },
    },
    {
      id: 'basus', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Antara contoh yang selalu dibincangkan ialah **Perang al-Basus**, konflik antara kabilah Bakr dengan Taghlib, yang berlarutan kira-kira **empat puluh tahun**.', pause: 0.3 },
        'Bayangkan, semangat kesukuan dan sikap mahu membalas dendam boleh menyebabkan konflik berpanjangan sampai beberapa generasi.',
      ],
      board: { name: 'Perang al-Basus', visual: 'Kad BAKR VS TAGHLIB dengan pedang bersilang; bar "± 40 TAHUN"; tiga baris watak kecil = tiga generasi.', doodle: 'Pedang bersilang, VS, bar masa, watak kecil.', text: 'PERANG AL-BASUS · kabilah Bakr ✕ Taghlib · ± 40 tahun · dendam berpanjangan sampai beberapa generasi', anim: 'Kad pop; bar dilukis; generasi muncul satu demi satu.' },
      draw(S, { D }) {
        S.text('Perang <span class="hl">al-Basus</span>', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: 0.2 });
        S.card('<div class="t-h3" style="text-align:center">BAKR</div>', { color: 'gold', anim: 'slideL', x: 60, y: 420, w: 360, at: 0, d: 2.8 });
        S.add(D.swords(), { anim: 'pop', x: 455, y: 400, w: 170, at: 0, d: 3.4 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">TAGHLIB</div>', { color: 'red', anim: 'slideR', x: 660, y: 420, w: 360, at: 0, d: 3.6 });
        S.add(`<div style="height:110px;background:#F5C928;border:5px solid ${NAVY};border-radius:20px;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:56px;color:${NAVY}">± 40 TAHUN</div>`, { anim: 'wipe', x: 60, y: 630, w: 960, at: 0, d: 5.6, dur: 1.0, sfx: 'pencil' });
        [0, 1, 2].forEach((g) => {
          S.text(`Generasi ${g + 1}`, { size: 'label', x: 60, y: 830 + g * 140, w: 260, at: 1, d: 2.0 + g * 1.0 });
          [0, 1, 2, 3].forEach((k) => S.add(`<svg viewBox="0 0 60 100"><circle cx="30" cy="22" r="18" fill="${NAVY}"/><path d="M4 98 Q30 34 56 98 Z" fill="${g === 2 ? RED : NAVY}"/></svg>`, { anim: 'pop', x: 340 + k * 90, y: 800 + g * 140, w: 60, at: 1, d: 2.0 + g * 1.0 + k * 0.08, sfx: false }));
        });
      },
    },
    {
      id: 'hari-ini', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Kalau kita kaitkan dengan dunia hari ini, kita boleh lihat tindakan kerajaan Israel terhadap rakyat Palestin,', pause: 0.15 },
        'terutamanya dari segi **kematian orang awam** dan **kemusnahan tempat tinggal** mereka.',
      ],
      board: { name: 'Dunia hari ini: krisis kemanusiaan di Palestin', visual: 'Pil "DUNIA HARI INI"; ilustrasi rumah musnah dan keluarga orang awam (ibu & anak) dengan hati; dua kad: orang awam terkorban · tempat tinggal musnah; tag ILUSTRASI. Tiada imej grafik, tiada simbol agama atau bendera yang dihina.', doodle: 'Rumah retak & runtuhan, watak ibu & anak, hati.', text: 'DUNIA HARI INI · tindakan kerajaan Israel terhadap rakyat Palestin · kematian orang awam · kemusnahan tempat tinggal · ILUSTRASI', anim: 'Rumah dilukis; keluarga fade; kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px">DUNIA HARI INI</span>', { anim: 'pop', x: 70, y: 290, w: 420, at: 0, d: -0.2 });
        S.svg(house(D, true), { x: 60, y: 380, w: 330, at: 0, d: 0.3 });
        S.svg(house(D, true), { x: 640, y: 400, w: 300, at: 0, d: 0.8 });
        S.add(D.wanita({ pose: 'down', mood: 'sad' }), { anim: 'fade', dur: 1, x: 400, y: 420, w: 200, at: 0, d: 1.6, sfx: false });
        S.add(D.rakyat({ pose: 'down', mood: 'sad' }), { anim: 'fade', dur: 1, x: 520, y: 520, w: 130, at: 0, d: 2.0, sfx: false });
        S.add('<span class="twtag">ILUSTRASI</span>', { anim: 'fade', x: 60, y: 760, at: 0, d: 0.5, sfx: false });
        S.card('<div class="t-h3" style="text-align:center">Orang awam terkorban</div>', { anim: 'slideL', x: 60, y: 840, w: 470, at: 1, d: 0.2, rot: -1 });
        S.card('<div class="t-h3" style="text-align:center">Tempat tinggal musnah</div>', { anim: 'slideR', x: 550, y: 840, w: 470, at: 1, d: 1.6, rot: 1 });
        S.text('Palestin · krisis kemanusiaan', { size: 'label', x: 60, y: 1060, w: 960, align: 'center', at: 0, d: 4.2 });
      },
    },
    {
      id: 'persoal', bg: 'dots', transition: 'paper',
      lines: ['Kita perlu berani mempersoalkan tindakan **mana-mana kerajaan**, apabila kepentingan politik, wilayah atau nasional dijadikan alasan, sampai hak dan nyawa manusia lain seolah-olah tidak penting.'],
      board: { name: 'Persoalkan tindakan mana-mana kerajaan', visual: 'Kanta pembesar di atas kad "MANA-MANA KERAJAAN"; tiga pil (politik, wilayah, nasional) ≠ alasan; kad "HAK & NYAWA MANUSIA" di tengah dengan hati.', doodle: 'Kanta pembesar, pil, hati.', text: 'Persoalkan tindakan MANA-MANA KERAJAAN · kepentingan politik / wilayah / nasional ≠ alasan untuk mengetepikan HAK & NYAWA MANUSIA', anim: 'Kanta pop; pil pop mengikut sebutan; kad nyawa manusia dicop.' },
      draw(S, { D }) {
        S.add(D.magnifier(), { anim: 'pop', x: 80, y: 300, w: 220, at: 0, d: 0.3 });
        S.card('<div class="t-h2" style="font-size:56px">MANA-MANA<br>KERAJAAN</div>', { anim: 'slideR', x: 330, y: 330, w: 690, at: 0, d: 1.0 });
        ['Politik', 'Wilayah', 'Nasional'].forEach((t, i) => S.add(`<span class="pill" style="font-size:36px">${t}</span>`, { anim: 'pop', x: 60 + i * 330, y: 640, w: 330, at: 0, d: 4.0 + i * 0.5 }));
        S.text('≠ alasan', { size: 'h3', x: 60, y: 740, w: 960, align: 'center', at: 0, d: 6.4 });
        S.add(D.heart(RED), { anim: 'pop', x: 470, y: 840, w: 140, at: 0, d: 7.4 });
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">HAK &amp; NYAWA MANUSIA</div>', { color: 'navy', anim: 'stamp', x: 120, y: 1000, w: 840, at: 0, d: 8.0 });
      },
    },
    {
      id: 'salah-faham', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Tetapi jangan salah faham. Mengkritik kerajaan Israel tidak bermaksud kita membenci semua rakyat Israel, atau semua orang Yahudi.', pause: 0.3 },
        'Kita mesti membezakan antara **tindakan sesebuah kerajaan** dengan **identiti sesuatu bangsa atau agama**.',
      ],
      board: { name: 'Jangan salah faham: kerajaan ≠ bangsa / agama', visual: 'Cop "JANGAN SALAH FAHAM"; dua lajur: TINDAKAN KERAJAAN (boleh dikritik) | BANGSA / AGAMA (jangan dibenci secara pukal); tanda ≠ besar.', doodle: 'Cop, kad, tanda ≠.', text: 'JANGAN SALAH FAHAM · kritik kerajaan ≠ benci semua rakyat Israel / semua orang Yahudi · TINDAKAN KERAJAAN ≠ IDENTITI BANGSA ATAU AGAMA', anim: 'Cop pada ayat pertama; lajur meluncur pada ayat kedua.' },
      draw(S) {
        S.stamp('JANGAN SALAH FAHAM', { x: 90, y: 310, w: 900, at: 0, d: 0, fs: 64, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:38px;text-align:center">Kritik kerajaan <b>≠</b> benci semua rakyat Israel atau semua orang Yahudi</div>', { anim: 'slideU', x: 80, y: 480, w: 920, at: 0, d: 2.4 });
        duo(S, ['TINDAKAN KERAJAAN', 'boleh &amp; perlu <span class="hl">dipersoalkan</span>', 1.2], ['BANGSA / AGAMA', '<span class="hl">jangan dipukul rata</span> atau dibenci', 1.55], { y: 760, fs: 38 });
        S.add('<div class="t-big" style="font-size:110px;text-align:center;color:#C93436">≠</div>', { anim: 'pop', x: 480, y: 800, w: 120, at: 1.4, z: 5 });
      },
    },
    {
      id: 'tak-salah', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Jadi, bagi cikgu, isu sebenar bukanlah bila kita sayangkan bangsa atau negara sendiri.', pause: 0.25 },
        'Tak salah pun berbangga dengan bangsa sendiri, mempertahankan budaya sendiri, atau mahu melihat negara sendiri maju.',
      ],
      board: { name: 'Sayang negara tidak salah', visual: 'Peta Malaysia dengan hati; tiga kad bertanda semak: bangga dengan bangsa, pertahankan budaya, mahu negara maju.', doodle: 'Peta Malaysia, hati, tanda semak.', text: 'Tak salah: ✓ bangga dengan bangsa sendiri ✓ pertahankan budaya ✓ mahu negara maju', anim: 'Peta dilakar; hati pop; kad bertanda semak mengikut sebutan.' },
      draw(S, { D }) {
        const at = S.map({ bounds: [[99.5, 0.8], [119.5, 7.5]], w: 960 }, { x: 60, y: 290, w: 960, at: 0, d: 0, dur: 1.0 });
        S.add(D.heart(RED), { anim: 'pop', x: 470, y: 380, w: 140, at: 0, d: 2.0, pulse: [2.4] });
        rows(S, [['✓', '<b>Bangga</b> dengan bangsa sendiri', 1.15, NAVY], ['✓', '<b>Pertahankan</b> budaya sendiri', 1.45, NAVY], ['✓', 'Mahu negara sendiri <b>maju</b>', 1.75, NAVY]], { y0: 760, gap: 170, bw: 100, fs: 42 });
      },
    },
    {
      id: 'hak-sama', bg: 'dots', transition: 'flip',
      lines: ['Masalahnya bermula bila kita terlalu sayangkan bangsa sendiri, sampai kita rasa bangsa lain **tidak layak** mendapat penghormatan dan hak yang sama.'],
      board: { name: 'Garisan merah: hak yang sama', visual: 'Garisan merah putus-putus; neraca seimbang; kad "PENGHORMATAN & HAK YANG SAMA untuk semua"; cop "TIDAK LAYAK?" dipangkah.', doodle: 'Garisan merah, neraca, palang.', text: 'Garisan merah: bila bangsa lain dianggap TIDAK LAYAK mendapat penghormatan & hak yang sama', anim: 'Garisan dilukis; neraca pop; cop & palang pada "tidak layak".' },
      draw(S, { D }) {
        redLine(S, 340, 0, 0.2);
        S.svg(D.scales(), { x: 380, y: 430, w: 320, at: 0, d: 0.6 });
        S.stamp('TIDAK LAYAK?', { x: 160, y: 760, w: 600, at: 0.62, fs: 80, style: 'text-align:center;white-space:nowrap' });
        S.add(D.cross(), { anim: 'stamp', x: 860, y: 760, w: 110, at: 0.7, sfx: 'stamp' });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Penghormatan &amp; hak yang SAMA untuk semua</div>', { color: 'navy', anim: 'slideU', x: 90, y: 960, w: 900, at: 0.85 });
      },
    },
    {
      id: 'kebenaran', bg: 'lined', transition: 'zoom',
      lines: ['Sebab kalau kita sanggup tutup mata bila bangsa sendiri buat salah, semata-mata kerana mereka bangsa kita, adakah kita benar-benar mempertahankan **kebenaran**, atau sekadar mempertahankan bangsa sendiri, walau apa pun yang mereka lakukan?'],
      board: { name: 'Kebenaran atau bangsa sendiri?', visual: 'Watak bertutup mata; dua kad pilihan: "MEMPERTAHANKAN KEBENARAN?" / "MEMPERTAHANKAN BANGSA, WALAU APA PUN?"; tanda soal besar.', doodle: 'Watak bertutup mata, tanda soal.', text: 'Tutup mata bila bangsa sendiri salah? · mempertahankan KEBENARAN atau bangsa sendiri walau apa pun?', anim: 'Watak pop; kad pilihan meluncur mengikut sebutan; tanda soal pulse.' },
      draw(S, { D }) {
        S.svg(blindfolded(D), { x: 400, y: 290, w: 280, at: 0, d: 0.2 });
        S.card('<div class="t-h3" style="text-align:center">Mempertahankan<br><span class="hl">KEBENARAN</span>?</div>', { anim: 'slideL', x: 50, y: 760, w: 470, at: 0, d: 6.0, rot: -1.5 });
        S.card('<div class="t-h3" style="text-align:center">Atau bangsa sendiri,<br><span class="red">walau apa pun</span>?</div>', { anim: 'slideR', x: 560, y: 760, w: 470, at: 0, d: 8.6, rot: 1.5 });
        S.add(D.question(), { anim: 'pop', x: 480, y: 1010, w: 120, at: 0.95, pulse: [0.97] });
      },
    },
    {
      id: 'iktibar', bg: 'grid', transition: 'paper',
      lines: ['Inilah sebabnya sejarah bukan sekadar menghafal tarikh, peristiwa dan ideologi politik. Sejarah mengajar kita mengenal tanda-tanda apabila ideologi yang melampau mula mengancam **maruah manusia**.'],
      board: { name: 'Iktibar sejarah', visual: 'Buku sejarah terbuka dengan mentol; dua kad: "bukan sekadar menghafal tarikh, peristiwa & ideologi" ✗ vs "kenal tanda-tanda ideologi melampau" ✓; kad navy "MARUAH MANUSIA".', doodle: 'Buku, mentol, tanda semak & palang.', text: 'Sejarah ≠ sekadar menghafal tarikh, peristiwa & ideologi · Sejarah = mengenal tanda-tanda ideologi melampau yang mengancam MARUAH MANUSIA', anim: 'Kad muncul mengikut sebutan; kad akhir dicop.' },
      draw(S, { D }) {
        S.text('<span class="hl">IKTIBAR</span> SEJARAH', { size: 'title', x: 70, y: 310, w: 760, at: 0, d: -0.2 });
        S.add(D.bulb(), { anim: 'pop', x: 820, y: 280, w: 180, at: 0, d: 0.3 });
        S.card('<div class="t-body" style="font-size:38px">Bukan sekadar menghafal <b>tarikh, peristiwa &amp; ideologi</b></div>', { anim: 'slideL', x: 60, y: 540, w: 960, at: 0, d: 0.6, pad: '14px 22px' });
        S.card('<div class="t-body" style="font-size:38px">Mengenal <span class="hl">tanda-tanda</span> ideologi melampau</div>', { anim: 'slideR', x: 60, y: 720, w: 960, at: 0.55, pad: '14px 22px' });
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">MARUAH MANUSIA</div>', { color: 'navy', anim: 'stamp', x: 140, y: 940, w: 800, at: 0.88 });
      },
    },
    {
      id: 'soalan-akhir', bg: 'dots', chrome: false, transition: 'zoom', lead: 0.6, tail: 1.6, cam: [1.0, 1.08],
      lines: ['Akhirnya, kalau semangat cintakan bangsa dan negara membuatkan kita hilang rasa kemanusiaan terhadap orang lain, tanyalah diri sendiri: kita sebenarnya sedang mempertahankan **prinsip**, atau kita sudah terlalu taksub dengan identiti sendiri, sampai tak mampu membezakan antara **betul dan salah**?'],
      board: { name: 'Soalan reflektif penutup', visual: 'Kad soalan besar di tengah (latar titik); cikgu dan pelajar kecil di bawah; dua kata kunci PRINSIP / BETUL & SALAH muncul pada sebutan; kamera zoom perlahan.', doodle: 'Kad kertas koyak, watak cikgu (lelaki) & pelajar, tanda soal.', text: 'Mempertahankan PRINSIP, atau terlalu taksub dengan identiti sendiri sampai tak mampu membezakan BETUL dan SALAH?', anim: 'Kad naik perlahan; kata kunci pop; zoom kamera 1.00→1.08.', music: 'Muzik direndahkan; jeda sebelum kad jenama.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:36px;background:#C93436;color:#FFFDF7">TANYALAH DIRI SENDIRI</span></div>', { anim: 'pop', x: 40, y: 230, w: 1000, at: 0, d: 0.4 });
        S.card('<div class="t-h3" style="font-size:52px;line-height:1.2;text-align:center">Kita sedang mempertahankan <span class="hl">PRINSIP</span>…<br>atau terlalu taksub dengan identiti sendiri, sampai tak mampu membezakan <span class="red">BETUL</span> dan <span class="red">SALAH</span>?</div>', { tear: true, anim: 'slideU', x: 60, y: 340, w: 960, at: 0, d: 4.0 });
        S.add(D.rakyat({ pose: 'down', mood: 'sad' }), { anim: 'fade', dur: 1, x: 200, y: 900, w: 220, at: 0, d: 1.2, sfx: false });
        S.add(cikgu(D), { anim: 'fade', dur: 1, x: 650, y: 880, w: 250, at: 0, d: 1.5, sfx: false });
        S.add(D.question(), { anim: 'pop', x: 490, y: 960, w: 100, at: 0.95, pulse: [0.97] });
      },
    },
    { ...END, minDur: 5 },
  ],
};
