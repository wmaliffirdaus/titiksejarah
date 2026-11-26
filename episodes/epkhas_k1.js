// EPISOD KHAS – Kertas 1 Sejarah SPM (1249/1): Wajib Score 30+ & Cara Menjawab dengan Betul (≈ 3 min)
// Standalone strategy episode, positioned before the Bab 5 introduction. Doodle-notebook template, Chapter 1 pace.
// Format facts: Kertas 1 = 40 soalan objektif aneka pilihan (4 pilihan A–D), 40 markah, 1 jam, jawapan dilorek pada kertas jawapan objektif.
// Example question uses textbook facts (Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5, ms. 134 – PTM 1948 diketuai Pesuruhjaya Tinggi British).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, NOW, numCard, iconRow, END } from './b4lib.js';

// OMR answer-sheet doodle: rows of A–D bubbles, some shaded
const sheet = (rows = 6, filled = [1, 3, 0, 2, 1, 3]) => {
  let s = `<rect x="6" y="6" width="348" height="${rows * 56 + 50}" rx="14" fill="${PAPER}" stroke="${NAVY}" stroke-width="5"/>`;
  ['A', 'B', 'C', 'D'].forEach((l, j) => { s += `<text x="${110 + j * 62}" y="40" font-family="Marker" font-size="26" fill="${NAVY}" text-anchor="middle">${l}</text>`; });
  for (let i = 0; i < rows; i++) {
    const y = 76 + i * 56;
    s += `<text x="42" y="${y + 9}" font-family="Marker" font-size="24" fill="${RED}" text-anchor="middle">${i + 1}</text>`;
    for (let j = 0; j < 4; j++) s += `<ellipse cx="${110 + j * 62}" cy="${y}" rx="22" ry="15" fill="${filled[i] === j ? NAVY : PAPER}" stroke="${NAVY}" stroke-width="4"/>`;
  }
  return `<svg viewBox="0 0 360 ${rows * 56 + 62}">${s}</svg>`;
};
const clock = () => `<svg viewBox="0 0 240 260"><circle cx="120" cy="140" r="96" fill="#FFFDF7" stroke="${NAVY}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><circle cx="190" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><path d="M120 140 V80 M120 140 L160 160" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/></svg>`;
const warn = () => `<svg viewBox="0 0 200 180"><path d="M100 10 L190 170 L10 170 Z" fill="${GOLD}" stroke="${NAVY}" stroke-width="8" stroke-linejoin="round"/><rect x="92" y="60" width="16" height="62" rx="6" fill="${NAVY}"/><circle cx="100" cy="145" r="10" fill="${NAVY}"/></svg>`;
const opt = (L, t, o = {}) => `<div class="card notape" style="display:flex;align-items:center;gap:18px;padding:10px 22px"><div style="font-family:Marker;font-size:46px;color:${RED};width:40px">${L}</div><div class="t-body" style="font-size:44px">${t}</div></div>`;

export default {
  id: 'khas_k1',
  file: '00_Episod_Khas_Kertas1_Wajib_30plus',
  title: 'Episod Khas – Kertas 1: Wajib Score 30+ & Cara Menjawab dengan Betul',
  header: { chip: 'EPISOD KHAS', sub: 'Kertas 1 · 1249/1' },
  src: 'Sejarah SPM Kertas 1 (1249/1) · Contoh: Buku Teks T4, Bab 5',
  music: { key: 60, bpm: 104, variant: 2 },
  voice: { style: 0.45 },   // a touch more energy than the chapter default, same calm pace
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05,
      lines: [{ text: 'Kertas 1 Sejarah: 40 soalan, satu jam. Nampak senang… tapi markah selalu lari. Hari ni, kita target **30 ke atas**!', pause: 0.3 }],
      board: {
        name: 'Hook – target 30+',
        visual: 'Frame pertama lengkap: tajuk "KERTAS 1", kertas jawapan objektif doodle dan jam; cop besar "30+/40" dihentak pada "30 ke atas".',
        doodle: 'Kertas jawapan OMR, jam loceng, cop.',
        text: 'KERTAS 1 · 40 soalan · 1 jam · 30+/40',
        anim: 'Semua kelihatan pada 0:00; cop 30+ pada sebutan.',
        music: 'Sting jenama pembuka.',
      },
      draw(S) {
        S.text('KERTAS <span class="red">1</span> SEJARAH', { size: 'title', x: 40, y: 290, w: 1000, align: 'center', ...NOW });
        S.add(sheet(), { ...NOW, x: 90, y: 430, w: 380, rot: -3 });
        S.add(clock(), { ...NOW, x: 630, y: 440, w: 280 });
        S.text('40 soalan · 1 jam', { size: 'h3', x: 560, y: 760, w: 440, align: 'center', ...NOW });
        S.stamp('30+ / 40', { x: 300, y: 920, w: 480, at: 0, d: 4.6, fs: 120, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Episod khas **Titik Sejarah**: Kertas 1, wajib score 30+, dan cara menjawab dengan betul.'],
      board: { name: 'Kad tajuk', visual: 'Pil "EPISOD KHAS"; tajuk; maskot rasmi dengan belon kata.', doodle: 'Pelekat maskot.', text: 'EPISOD KHAS · Kertas 1: Wajib Score 30+ & Cara Menjawab dengan Betul', anim: 'Tajuk ditulis; maskot & belon pop.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">EPISOD KHAS</span></div>', { anim: 'pop', x: 40, y: 310, w: 1000, at: 0, d: -0.3 });
        S.text('Kertas 1:<br>Wajib Score <span class="red">30+</span>', { size: 'title', x: 40, y: 410, w: 1000, align: 'center', at: 0, dur: 1.0, style: 'font-size:92px' });
        S.svg(D.underline(560), { x: 260, y: 640, w: 560, at: 0, d: 1.2, dur: 0.6 });
        S.mascot({ x: 110, y: 760, w: 320, at: 0, d: 0.8, say: 'Bukan motivasi kosong. <b class="red">Teknik</b> yang betul!', bx: 460, by: 810, bw: 500 });
      },
    },
    {
      id: 'kenapa', bg: 'grid', transition: 'paper',
      lines: [
        'Kenapa 30? Sebab Kertas 1 tempat paling senang kumpul markah: jawapan dah ada depan mata.',
        'Kalau Kertas 1 kukuh, tekanan masa Kertas 2 pun jadi kurang.',
      ],
      board: { name: 'Kenapa target 30+', visual: 'Kad bernombor: jawapan sudah ada di depan mata; neraca Kertas 1 ⇄ Kertas 2.', doodle: 'Kanta, neraca.', text: 'Kertas 1 = markah paling senang dikumpul · jawapan ada depan mata · Kertas 1 kukuh ➜ tekanan Kertas 2 kurang', anim: 'Kad meluncur mengikut narasi; neraca dilukis.' },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">30+</span>?', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        S.add(D.magnifier(), { anim: 'pop', x: 80, y: 460, w: 200, at: 0, d: 1.2 });
        S.card('<div class="t-body" style="font-size:46px">Jawapan <span class="hl">dah ada depan mata</span></div>', { anim: 'slideR', x: 320, y: 480, w: 700, at: 0, d: 1.6 });
        S.svg(D.scales(), { x: 90, y: 780, w: 260, at: 1, d: 0.1 });
        S.card('<div class="t-body" style="font-size:44px">Kertas 1 <b>kukuh</b> ➜ tekanan Kertas 2 <span class="hl">kurang</span></div>', { color: 'gold', anim: 'slideR', x: 380, y: 790, w: 640, at: 1, d: 0.4 });
      },
    },
    {
      id: 'format', transition: 'flip',
      lines: ['Formatnya: 40 soalan objektif, empat pilihan, A hingga D, dalam satu jam. Maksudnya, lebih kurang satu setengah minit untuk satu soalan.'],
      board: { name: 'Format Kertas 1', visual: 'Tiga kad nombor besar: 40 soalan · 4 pilihan (A–D) · 1 jam; kaunter "≈ 1.5 minit / soalan".', doodle: 'Kad, jam.', text: '40 soalan objektif · 4 pilihan A–D · 1 jam · ≈ 1.5 minit satu soalan', anim: 'Kad pop mengikut sebutan; kaunter dihentak.' },
      draw(S) {
        S.text('Format <span class="hl">Kertas 1</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        [['40', 'soalan objektif', 0.05], ['4', 'pilihan (A–D)', 0.22], ['1', 'jam', 0.45]].forEach(([n, t, f], i) =>
          S.card(`<div style="text-align:center"><div class="t-big" style="color:${i === 1 ? NAVY : RED}">${n}</div><div class="t-body" style="font-size:38px">${t}</div></div>`, { anim: 'pop', x: 60 + i * 330, y: 460, w: 300, at: f, rot: i % 2 ? 2 : -2 }));
        S.stamp('≈ 1.5 MINIT / SOALAN', { x: 140, y: 870, w: 800, at: 0, d: 6.0, fs: 64, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'baca', bg: 'grid', transition: 'paper',
      lines: [
        'Teknik pertama: baca soalan sampai habis. Jangan baca separuh terus tembak jawapan.',
        'Lepas tu, cari **kata kunci**. Perkataan macam "**bukan**", "**kecuali**", "**utama**" dan **tarikh** boleh ubah jawapan terus. Bulatkan!',
      ],
      board: { name: 'Baca & cari kata kunci', visual: 'Kad soalan contoh dengan perkataan BUKAN / KECUALI / UTAMA dibulatkan merah satu demi satu; kanta pembesar.', doodle: 'Kanta, bulatan merah tulisan tangan.', text: 'Baca sampai habis · kata kunci: BUKAN · KECUALI · UTAMA · TARIKH · bulatkan!', anim: 'Kad naik; bulatan dilukis tepat pada setiap kata kunci.' },
      draw(S, { D }) {
        S.text('Baca & <span class="red">Bulatkan</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        S.card('<div class="t-body" style="font-size:44px">Baca soalan <span class="hl">sampai habis</span> — jangan tembak!</div>', { anim: 'slideU', x: 60, y: 450, w: 960, at: 0, d: 0.2, notape: true });
        S.add(D.magnifier(), { anim: 'pop', x: 820, y: 600, w: 170, at: 1, d: 0 });
        [['BUKAN', 0.25], ['KECUALI', 0.36], ['UTAMA', 0.47], ['TARIKH', 0.6]].forEach(([w, f], i) => {
          const x = 70 + (i % 2) * 380, y = 650 + Math.floor(i / 2) * 200;
          S.add(`<div style="font-family:Marker;font-size:54px;color:${NAVY};text-align:center">${w}</div>`, { anim: 'pop', x, y: y + 30, w: 340, at: 1 + f, sfx: false });
          S.svg(D.ring(360, 130), { x: x - 10, y, w: 360, at: 1 + f, d: 0.15, dur: 0.5, sfx: 'pencil' });
        });
      },
    },
    {
      id: 'contoh', transition: 'slideUp',
      lines: [
        { text: 'Contoh. Siapakah yang mengetuai Persekutuan Tanah Melayu 1948?', pause: 0.3 },
        'Gabenor British? Itu Malayan Union. Buang. Yang di-Pertuan Agong? Belum wujud tahun 1948. Buang.',
        'Majlis Raja-Raja bukan ketua kerajaan. Jadi jawapannya, **B**: **Pesuruhjaya Tinggi British**!',
      ],
      board: { name: 'Contoh teknik singkir', visual: 'Soalan contoh (fakta Bab 5) dengan empat pilihan A–D; pilihan dipangkah satu demi satu; tanda semak & cop pada B.', doodle: 'Pangkah merah, tanda semak, cop.', text: 'Siapakah yang mengetuai PTM 1948? · A Gabenor British ✗ · B Pesuruhjaya Tinggi British ✓ · C Yang di-Pertuan Agong ✗ · D Majlis Raja-Raja ✗', anim: 'Pangkah dihentak tepat ketika pilihan dibuang; tanda semak pada jawapan.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:34px">CONTOH SOALAN</span>', { anim: 'pop', x: 60, y: 290, w: 420, at: 0, d: -0.2 });
        S.card('<div class="t-h3" style="font-size:48px">Siapakah yang mengetuai Persekutuan Tanah Melayu 1948?</div>', { tear: true, anim: 'slideU', x: 60, y: 380, w: 960, at: 0, d: 0 });
        const O = [['A', 'Gabenor British'], ['B', 'Pesuruhjaya Tinggi British'], ['C', 'Yang di-Pertuan Agong'], ['D', 'Majlis Raja-Raja']];
        O.forEach(([L, t], i) => S.add(opt(L, t), { anim: 'slideR', x: 90, y: 640 + i * 140, w: 900, at: 0, d: 1.0 + i * 0.25, sfx: 'swish' }));
        [[0, 1, 0.3], [2, 1, 0.85], [3, 2, 0.3]].forEach(([i, k, f]) => S.add(D.cross(), { anim: 'stamp', x: 880, y: 640 + i * 140, w: 90, at: k + f, sfx: 'stamp' }));
        S.add(D.check(), { anim: 'pop', x: 880, y: 780, w: 100, at: 2, d: 2.6, sfx: 'ding' });
        S.text('Gabenor = Malayan Union · Agong = belum wujud', { size: 'note', x: 60, y: 1210, w: 960, align: 'center', at: 1, d: 1.0 });
      },
    },
    {
      id: 'singkir', bg: 'grid', transition: 'paper',
      lines: ['Itulah teknik singkir. Buang pilihan yang **salah zaman**, **salah tokoh**, atau yang tak jawab soalan. Bila tinggal dua, baru fikir betul-betul.'],
      board: { name: 'Teknik singkir', visual: 'Tiga kad tong sampah: SALAH ZAMAN · SALAH TOKOH · TAK JAWAB SOALAN; kad "tinggal 2 ➜ fikir".', doodle: 'Pangkah, mentol.', text: 'Singkir: salah zaman · salah tokoh · tak jawab soalan · tinggal 2 ➜ fikir', anim: 'Kad meluncur mengikut narasi.' },
      draw(S, { D }) {
        S.text('Teknik <span class="red">Singkir</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        [['Salah <b>zaman</b>', 0.3], ['Salah <b>tokoh</b>', 0.42], ['Tak jawab <b>soalan</b>', 0.55]].forEach(([t, f], i) =>
          S.add(iconRow(fmt, D.cross(), t, { fs: 46, iw: 70, pad: '14px 22px' }), { anim: 'slideL', x: 60, y: 450 + i * 160, w: 960, at: f, sfx: 'swish' }));
        S.add(D.bulb(), { anim: 'pop', x: 80, y: 960, w: 130, at: 0, d: 7.2 });
        S.card('<div class="t-h3" style="font-size:46px">Tinggal 2? Baru <span class="hl">fikir betul-betul</span></div>', { color: 'gold', anim: 'slideR', x: 240, y: 960, w: 780, at: 0, d: 7.3 });
      },
    },
    {
      id: 'kesilapan', transition: 'flip',
      lines: [
        'Kesilapan biasa: terlepas perkataan "bukan", keliru tarikh yang dekat, contohnya 21 Januari dan 1 Februari 1948,',
        'salah lorek, dan tukar jawapan tanpa sebab yang kukuh.',
      ],
      board: { name: 'Kesilapan biasa', visual: 'Papan amaran; empat kad kesilapan dengan ikon; dua tarikh berdekatan dipaparkan sebagai contoh.', doodle: 'Tanda amaran, pangkah.', text: 'Terlepas "BUKAN" · keliru tarikh (21 Jan vs 1 Feb 1948) · salah lorek · tukar jawapan tanpa sebab', anim: 'Kad pop mengikut sebutan.' },
      draw(S, { D }) {
        S.add(warn(), { anim: 'pop', x: 70, y: 290, w: 150, at: 0, d: -0.2 });
        S.text('Kesilapan <span class="red">Biasa</span>', { size: 'title', x: 250, y: 310, w: 780, at: 0, d: -0.1 });
        const m = [['Terlepas "<b>BUKAN</b>"', 0, 0.12], ['Keliru tarikh: <b>21 Jan</b> vs <b>1 Feb 1948</b>', 0, 0.45], ['<b>Salah lorek</b>', 1, 0.05], ['Tukar jawapan <b>tanpa sebab</b>', 1, 0.4]];
        m.forEach(([t, k, f], i) => S.card(numCard(i + 1, t, i % 2 ? NAVY : RED, 42), { anim: 'slideL', x: 60, y: 480 + i * 175, w: 960, at: k + f, notape: true, pad: '4px 20px' }));
      },
    },
    {
      id: 'taksure', bg: 'grid', transition: 'paper',
      lines: [
        'Kalau tak pasti? Singkir dulu yang confirm salah. Tanda soalan tu, pergi ke soalan seterusnya, kemudian datang balik.',
        'Tapi jangan biarkan kosong. Kosong, confirm dapat **sifar**.',
      ],
      board: { name: 'Bila tak pasti', visual: 'Carta alir 3 langkah: singkir ➜ tanda (bintang kecil) ➜ datang balik; cop "JANGAN KOSONG".', doodle: 'Anak panah, bintang, cop.', text: 'Tak pasti: singkir ➜ tanda ➜ teruskan ➜ datang balik · JANGAN BIAR KOSONG', anim: 'Langkah pop mengikut narasi; cop dihentak pada "sifar".' },
      draw(S, { D }) {
        S.text('Tak <span class="red">Pasti?</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        [['1', 'Singkir yang confirm salah', 0.15], ['2', 'Tanda ★ & teruskan', 0.5], ['3', 'Datang balik kemudian', 0.82]].forEach(([n, t, f], i) => {
          S.card(numCard(n, t, i % 2 ? NAVY : RED, 44), { anim: 'slideR', x: 100, y: 440 + i * 190, w: 880, at: f, notape: true, pad: '4px 20px' });
          if (i) S.arrow(540, 400 + i * 190, 540, 445 + i * 190, { at: f, d: -0.1, color: RED, sw: 8, bend: 0, sfx: false });
        });
        S.stamp('JANGAN BIAR KOSONG!', { x: 140, y: 1040, w: 800, at: 1, d: 0.2, fs: 64, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'masa', transition: 'slideUp',
      lines: ['Urus masa: cuba habiskan semua soalan dalam **45 minit**. Guna sepuluh minit untuk soalan yang ditanda, dan lima minit terakhir untuk **semak lorekan**.'],
      board: { name: 'Pengurusan masa', visual: 'Bar masa 60 minit dibahagi tiga: 0–45 jawab semua · 45–55 soalan bertanda · 55–60 semak lorekan; jam di atas.', doodle: 'Bar masa, jam.', text: '0–45 minit: jawab semua · 45–55: soalan bertanda · 55–60: semak lorekan', anim: 'Setiap segmen bar dilukis tepat pada sebutan.' },
      draw(S) {
        S.text('Urus <span class="hl">Masa</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        S.add(clock(), { anim: 'pop', x: 430, y: 430, w: 220, at: 0, d: 0.1 });
        const seg = [['45 min', 'Jawab semua', 0.1, 705, RED], ['10 min', 'Soalan bertanda', 0.5, 157, GOLD], ['5 min', 'Semak lorekan', 0.78, 78, NAVY]];
        let x = 60;
        seg.forEach(([m, t, f, w, c], i) => {
          S.add(`<div style="height:90px;background:${c};border:5px solid #172C63;border-radius:12px"></div>`, { anim: 'wipe', x, y: 760, w, at: f, dur: 0.6, sfx: 'pop' });
          S.text(`<b>${m}</b>`, { size: 'h3', x: i === 2 ? 860 : x, y: i ? 880 + (i - 1) * 130 : 880, w: i ? 180 : 400, align: i ? 'right' : 'left', at: f, d: 0.2, style: 'font-size:42px' });
          S.text(t, { size: 'label', x: i === 0 ? x : 480, y: i ? 930 + (i - 1) * 130 : 930, w: i ? 560 : 500, align: i ? 'right' : 'left', at: f, d: 0.25 });
          x += w;
        });
      },
    },
    {
      id: 'tips', bg: 'grid', transition: 'paper',
      lines: [
        'Tips praktikal: jawab soalan senang dulu, dan lorek terus setiap kali siap jawab.',
        'Sebelum SPM, buat kertas percubaan negeri dengan jam di sebelah. Itulah latihan paling dekat dengan suasana sebenar.',
      ],
      board: { name: 'Tips praktikal', visual: 'Senarai semak tiga tips dengan tanda semak; kertas jawapan & jam.', doodle: 'Tanda semak, kertas jawapan, jam.', text: 'Jawab soalan senang dulu · lorek terus · latih kertas percubaan negeri dengan jam', anim: 'Setiap tip ditanda tepat pada sebutan.' },
      draw(S, { D }) {
        S.text('Tips <span class="hl">Praktikal</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        [['Jawab soalan <b>senang dulu</b>', 0, 0.12], ['<b>Lorek terus</b> setiap kali siap', 0, 0.6], ['Latih <b>kertas percubaan</b> + jam', 1, 0.12]].forEach(([t, k, f], i) =>
          S.add(iconRow(fmt, D.check(), t, { fs: 46, iw: 80, pad: '14px 22px' }), { anim: 'slideL', x: 60, y: 450 + i * 170, w: 960, at: k + f, sfx: 'ding' }));
        S.add(sheet(4, [0, 2, 1, 3]), { anim: 'pop', x: 140, y: 960, w: 260, at: 1, d: 1.0, rot: -3 });
        S.add(clock(), { anim: 'pop', x: 620, y: 960, w: 220, at: 1, d: 1.3 });
      },
    },
    {
      id: 'penutup', transition: 'zoom',
      lines: [
        '30 ke atas memang boleh dicapai. Tapi ia datang daripada faham fakta, banyak latihan, dan teknik yang betul, bukan nasib.',
        'Lepas ni, kita sambung siri biasa dengan **Pengenalan Bab 5: Persekutuan Tanah Melayu 1948**!',
      ],
      tail: 0.9,
      board: { name: 'Penutup realistik & teaser Bab 5', visual: 'Tiga blok asas (FAKTA + LATIHAN + TEKNIK) membentuk tangga ke cop "30+"; maskot & kad "Seterusnya: Pengenalan Bab 5".', doodle: 'Blok, cop, pelekat maskot.', text: 'Faham fakta + latihan + teknik = 30+ (bukan nasib) · Seterusnya: Pengenalan Bab 5 – Persekutuan Tanah Melayu 1948', anim: 'Blok pop satu demi satu; cop; maskot & kad pop.' },
      draw(S) {
        [['FAKTA', 0.42, RED], ['LATIHAN', 0.55, NAVY], ['TEKNIK', 0.7, RED]].forEach(([t, f, c], i) =>
          S.card(`<div class="t-h3" style="text-align:center;font-size:48px;color:${c}">${t}</div>`, { anim: 'pop', x: 50 + i * 230, y: 620 - i * 110, w: 220, at: f, notape: true, pad: '26px 6px' }));
        S.stamp('30+', { x: 760, y: 320, w: 260, at: 0, d: 6.2, fs: 120, style: 'text-align:center' });
        S.text('bukan <span class="red">nasib</span>', { size: 'h2', x: 700, y: 500, w: 340, align: 'center', at: 0, d: 6.6 });
        S.mascot({ x: 80, y: 800, w: 300, at: 1, d: 0 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">Pengenalan Bab 5: Persekutuan Tanah Melayu 1948</div>', { x: 410, y: 860, w: 600, at: 1, d: 0.5 });
      },
    },
    END,
  ],
};
