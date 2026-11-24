// TIPS SPM #1 – Macam mana nak belajar Sejarah dalam masa singkat? (≤ 60 s)
// Evidence-based study techniques: Active Recall, Blurting, Feynman, Spaced Repetition + a 25-minute daily routine.
// Structure: 0–3 s hook · 3–8 s "why" (research) · 4 techniques with a Sejarah Form 4 Bab 1 example each · routine · closing question.
// Look: the established Titik Sejarah notebook style, brand palette only (navy / gold / red / cream).
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436', CREAM = '#F3EBDD';
const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:1.02;text-align:center;color:${o.color || NAVY}">${t}</div>`;
const NOW = { anim: 'none', at: 'start', d: -0.35 };   // visible from the very first frame
const PILL = (t, bg = RED, fg = '#FFFDF7') => `<div style="text-align:center"><span class="pill" style="font-size:44px;background:${bg};color:${fg}">${t}</span></div>`;
const SRC_BOOK = 'Contoh: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 1';
const SRC_SCI = 'Kajian: Dunlosky et al. (2013); Roediger & Karpicke (2006)';

// small doodles drawn with the shared rough.js helpers (brand palette only)
const clock = (D) => `<svg viewBox="0 0 200 200">${D.R.circle(100, 100, 170, { fill: '#FFFDF7', strokeWidth: 7 })}${D.R.line(100, 100, 100, 40, { strokeWidth: 9 })}${D.R.line(100, 100, 148, 118, { strokeWidth: 9, stroke: RED })}${[0, 1, 2, 3].map((i) => { const a = i * Math.PI / 2; return D.R.line(100 + 70 * Math.cos(a), 100 + 70 * Math.sin(a), 100 + 80 * Math.cos(a), 100 + 80 * Math.sin(a), { strokeWidth: 6 }); }).join('')}</svg>`;
const highlighter = (D) => `<svg viewBox="0 0 220 80">${D.R.rect(10, 18, 150, 44, { fill: GOLD, strokeWidth: 5 })}${D.R.poly([[160, 18], [205, 30], [205, 50], [160, 62]], { fill: NAVY, strokeWidth: 5 })}</svg>`;
const pen = (D) => `<svg viewBox="0 0 240 60">${D.R.rect(10, 14, 170, 32, { fill: RED, strokeWidth: 4 })}${D.R.poly([[180, 14], [228, 30], [180, 46]], { fill: CREAM, strokeWidth: 4 })}</svg>`;
const thought = (D, inner = '') => `<svg viewBox="0 0 360 260">${D.R.ellipse(200, 110, 300, 190, { fill: '#FFFDF7', strokeWidth: 6 })}${D.R.circle(70, 220, 40, { fill: '#FFFDF7', strokeWidth: 5 })}${D.R.circle(30, 250, 20, { fill: '#FFFDF7', strokeWidth: 4 })}${inner}</svg>`;

export default {
  id: 'tips01',
  file: 'T01_Tips_Belajar_Sejarah_Masa_Singkat',
  title: 'Macam Mana Nak Belajar Sejarah dalam Masa Singkat? – 4 Teknik Berasaskan Kajian (Tips SPM #1)',
  header: { chip: 'TIPS SPM', sub: 'Belajar Sejarah, Jimat Masa' },
  src: SRC_BOOK,
  music: { key: 62, bpm: 112, variant: 2 },
  musicNote: 'Muzik asli enjin (rentak ringan 112 BPM), ±23 dB di bawah suara semasa narasi (ducking automatik).',
  voice: { style: 0.55, stability: 0.3, speed: 1.08, tempo: 1.0 },
  introSfx: 'whoosh',
  lead: 0.32, gap: 0.26, tail: 0.18,
  transition: 'punch',
  cam: [1.0, 1.04],
  scenes: [
    {
      id: 'hook', bg: 'lined', chrome: false, lead: 0.05, cam: [1.0, 1.08],
      lines: ['Baca nota berjam-jam… tapi masuk dewan, otak **kosong**?'],
      board: {
        name: '0–3 s · Hook: belajar lama, tetap lupa',
        visual: 'Frame pertama lengkap: tajuk besar "BACA BERJAM-JAM…", pelajar sedih memegang buku, jam dinding, gelembung fikiran kosong. Cop merah "OTAK KOSONG?" dihentak pada perkataan "kosong".',
        doodle: 'Pelajar (buku merah), jam, gelembung fikiran dengan tanda soal.',
        text: 'BACA BERJAM-JAM… · TAPI MASUK DEWAN? · OTAK KOSONG?',
        anim: 'Semua kelihatan pada 0:00; kamera zoom 1.00→1.08; cop pop dengan bunyi stamp.',
        music: 'Whoosh pada 0:00, rentak terus bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('BACA NOTA<br><span class="hl">BERJAM-JAM</span>…', { fs: 100 }), { ...NOW, x: 20, y: 280, w: 1040 });
        S.add(BIG('tapi masuk dewan?', { fs: 64, color: RED }), { ...NOW, x: 20, y: 500, w: 1040 });
        S.add(D.person({ hat: 'hair', shirt: '#FFFDF7', pants: NAVY, prop: 'book', pose: 'hold', mood: 'sad' }), { ...NOW, x: 90, y: 610, w: 360 });
        S.add(thought(D, D.txt(200, 140, '? ? ?', { size: 96, font: 'Marker', weight: 400, color: RED })), { ...NOW, x: 500, y: 590, w: 500 });
        S.add(clock(D), { ...NOW, x: 830, y: 860, w: 190, rot: 8 });
        S.stamp('OTAK KOSONG?', { x: 60, y: 1150, w: 960, at: 0.78, fs: 104, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'kajian', bg: 'grid', src: SRC_SCI,
      lines: ['Kajian dapati, baca semula dan **highlight** antara cara paling **kurang berkesan**.'],
      board: {
        name: '3–8 s · Kenapa: kajian pembelajaran',
        visual: 'Pil "KAJIAN DAPATI"; dua kad: buku terbuka "BACA SEMULA" dan pen penyerlah "HIGHLIGHT", masing-masing dipangkah merah; cop "KURANG BERKESAN".',
        doodle: 'Buku, pen penyerlah kuning, pangkah merah.',
        text: 'KAJIAN DAPATI · BACA SEMULA ✗ · HIGHLIGHT ✗ · KURANG BERKESAN',
        anim: 'Kad meluncur masuk pada perkataannya; pangkah dilukis; cop pada "kurang berkesan".',
      },
      draw(S, { D }) {
        S.add(PILL('KAJIAN DAPATI', NAVY, GOLD), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 310, w: 1000 });
        const cards = [['BACA SEMULA', D.book('NOTA', RED), 0.12, 70], ['HIGHLIGHT', highlighter(D), 0.32, 560]];
        cards.forEach(([t, ic, f, x], i) => {
          S.add(`<div class="card notape" style="height:420px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px"><div style="width:${i ? 260 : 190}px">${ic}</div><div style="font-family:Marker;font-size:58px">${t}</div></div>`, { anim: 'slideU', at: f, d: -0.1, x, y: 440, w: 450, rot: i ? 1.5 : -1.5, sfx: 'swish' });
          S.svg(D.cross(RED), { x: x + 300, y: 400, w: 150, at: f + 0.12, dur: 0.4, sfx: 'scribble' });
        });
        S.stamp('KURANG BERKESAN', { x: 90, y: 950, w: 900, at: 0.72, fs: 92, style: 'text-align:center' });
      },
    },
    {
      id: 'empat', bg: 'dots',
      lines: ['Ni **empat teknik** yang jimat masa.'],
      board: {
        name: '8–10 s · Janji: empat teknik',
        visual: 'Tajuk "4 TEKNIK JIMAT MASA" + jam; empat kad bernombor dalam grid 2×2.',
        doodle: 'Jam, kad bernombor.',
        text: '4 TEKNIK · ACTIVE RECALL · BLURTING · FEYNMAN · SPACED REPETITION',
        anim: 'Tajuk pop; empat kad pop berturut-turut.',
      },
      draw(S, { D }) {
        S.add(BIG('<span class="red">4</span> TEKNIK<br><span class="hl">JIMAT MASA</span>', { fs: 100 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 300, w: 860 });
        S.svg(clock(D), { x: 840, y: 330, w: 190, at: 0, d: -0.1, dur: 0.5, sfx: false });
        const T = ['ACTIVE<br>RECALL', 'BLURTING', 'TEKNIK<br>FEYNMAN', 'SPACED<br>REPETITION'];
        T.forEach((t, i) => S.add(`<div class="card ${i % 3 ? '' : 'gold'} notape" style="height:250px;box-sizing:border-box;display:flex;align-items:center;gap:18px;padding:16px 22px"><div style="font-family:Marker;font-size:96px;color:${RED};flex:none">${i + 1}</div><div style="font-family:Marker;font-size:${i === 3 ? 44 : 50}px;line-height:1.05">${t}</div></div>`,
          { anim: 'pop', at: 0, d: 0.05 + i * 0.22, x: 60 + (i % 2) * 490, y: 600 + Math.floor(i / 2) * 290, w: 470, rot: i % 2 ? 1.2 : -1.2, sfx: 'pop' }));
      },
    },
    {
      id: 'recall', bg: 'grid',
      lines: ['Satu, **Active Recall**. Tutup buku, tanya diri: apa ciri-ciri **negara bangsa** Melaka? Jawab dulu, baru semak.'],
      board: {
        name: 'Teknik #1 · Active Recall',
        visual: 'Pil "TEKNIK #1", tajuk ACTIVE RECALL; buku tertutup dengan cop "TUTUP"; kad soalan "Apa ciri-ciri negara bangsa Melaka?"; aliran JAWAB ➜ SEMAK ✓.',
        doodle: 'Buku tertutup, tanda soal, tanda betul.',
        text: 'TEKNIK #1 · ACTIVE RECALL · TUTUP BUKU · "Apa ciri-ciri negara bangsa Melaka?" · JAWAB ➜ SEMAK',
        anim: 'Pil pop; tajuk ditulis; cop TUTUP; kad soalan naik; JAWAB lalu SEMAK pop pada perkataannya.',
      },
      draw(S, { D }) {
        S.add(PILL('TEKNIK #1'), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 300, w: 1000 });
        S.add(BIG('<span class="hl">ACTIVE RECALL</span>', { fs: 104 }), { anim: 'wipe', at: 0, d: 0, dur: 0.6, x: 20, y: 400, w: 1040 });
        S.add(D.book('SEJARAH', NAVY), { anim: 'pop', at: 0.18, x: 90, y: 560, w: 250, rot: -6 });
        S.stamp('TUTUP', { x: 70, y: 700, w: 300, at: 0.22, fs: 66, style: 'text-align:center' });
        S.card('<div class="tw red" style="font-size:28px">TANYA DIRI</div><div class="t-h3" style="font-size:52px;line-height:1.12">Apa ciri-ciri <span class="hl">negara bangsa</span> Melaka?</div>', { anim: 'slideL', at: 0.36, x: 400, y: 570, w: 620, rot: 1.2 });
        S.add(`<div style="display:flex;align-items:center;justify-content:center;gap:26px"><span class="pill" style="font-size:52px">JAWAB DULU</span><span style="font-family:Marker;font-size:80px;color:${RED}">➜</span><span class="pill" style="font-size:52px;background:${NAVY};color:${GOLD}">BARU SEMAK</span></div>`, { anim: 'pop', at: 0.8, d: -0.1, x: 30, y: 1010, w: 1020 });
        S.svg(D.check(NAVY), { x: 880, y: 1150, w: 120, at: 0.93, dur: 0.4, sfx: 'ding' });
      },
    },
    {
      id: 'blurting', bg: 'lined',
      lines: ['Dua, **Blurting**. Atas kertas kosong, tulis semua pasal **Pembesar Empat Lipatan**. Semak nota, tambah yang tertinggal guna **pen merah**.'],
      board: {
        name: 'Teknik #2 · Blurting',
        visual: 'Pil "TEKNIK #2", tajuk BLURTING; helaian kertas: "PEMBESAR EMPAT LIPATAN" dengan Bendahara, Temenggung, Laksamana ditulis dakwat navy; pada "pen merah", "+ Penghulu Bendahari" muncul dalam tulisan merah dan pen merah meluncur masuk.',
        doodle: 'Helaian kertas, tulisan tangan, pen merah.',
        text: 'TEKNIK #2 · BLURTING · Pembesar Empat Lipatan: Bendahara · Temenggung · Laksamana · + Penghulu Bendahari (pen merah)',
        anim: 'Kertas naik; tiga nama ditulis satu demi satu (wipe); baris merah ditulis pada "pen merah".',
      },
      draw(S, { D }) {
        S.add(PILL('TEKNIK #2'), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 300, w: 1000 });
        S.add(BIG('<span class="hl">BLURTING</span>', { fs: 110 }), { anim: 'wipe', at: 0, d: 0, dur: 0.5, x: 20, y: 400, w: 1040 });
        S.card('<div class="tw" style="font-size:30px;color:#172C63">KERTAS KOSONG · TULIS DARI INGATAN</div><div class="t-h3" style="font-size:50px;margin-top:6px">PEMBESAR EMPAT LIPATAN</div><div style="height:330px"></div>', { anim: 'slideU', at: 0.12, x: 80, y: 560, w: 920, rot: -1 });
        ['• Bendahara', '• Temenggung', '• Laksamana'].forEach((n, i) => S.add(`<div class="t-body" style="font-size:58px">${n}</div>`, { anim: 'wipe', at: 0.3 + i * 0.1, dur: 0.45, x: 130, y: 720 + i * 76, w: 600, sfx: 'scribble' }));
        S.add(`<div style="font-family:Caveat;font-weight:700;font-size:70px;color:${RED}">+ Penghulu Bendahari</div>`, { anim: 'wipe', at: 0.86, dur: 0.5, x: 130, y: 948, w: 700, sfx: 'scribble' });
        S.add(pen(D), { anim: 'slideR', at: 0.84, x: 700, y: 1090, w: 300, rot: -20, sfx: 'swish' });
        S.tag('SEMAK NOTA', 'yang tertinggal = fokus ulang kaji', { x: 80, y: 1140, w: 560, at: 0.62 });
      },
    },
    {
      id: 'feynman', bg: 'dots',
      lines: [{ text: 'Tiga, **Teknik Feynman**. Terangkan **Hukum Kanun Melaka** macam ajar adik. Tersekat? Situlah yang belum faham.', say: 'Tiga, **Teknik Fainmen**. Terangkan **Hukum Kanun Melaka** macam ajar adik. Tersekat? Situlah yang belum faham.' }],
      board: {
        name: 'Teknik #3 · Teknik Feynman',
        visual: 'Pil "TEKNIK #3", tajuk TEKNIK FEYNMAN; abang/kakak menerangkan kepada adik (watak kecil); gelembung "Hukum Kanun Melaka tu…"; tanda soal merah pada "tersekat"; cop "= BELUM FAHAM".',
        doodle: 'Dua watak (pelajar + adik), gelembung cakap, tanda soal.',
        text: 'TEKNIK #3 · TEKNIK FEYNMAN · "Hukum Kanun Melaka tu…" · TERSEKAT? = BELUM FAHAM',
        anim: 'Watak pop; gelembung muncul; tanda soal dilukis; cop pada "belum faham".',
      },
      draw(S, { D }) {
        S.add(PILL('TEKNIK #3'), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 300, w: 1000 });
        S.add(BIG('<span class="hl">TEKNIK FEYNMAN</span>', { fs: 96 }), { anim: 'wipe', at: 0, d: 0, dur: 0.6, x: 20, y: 400, w: 1040 });
        S.add(D.person({ hat: 'hair', shirt: '#FFFDF7', pants: NAVY, pose: 'present', mood: 'talk', prop: 'book' }), { anim: 'pop', at: 0.2, x: 80, y: 640, w: 360 });
        S.add(D.person({ tudung: GOLD, shirt: RED, dress: true, pose: 'down' }), { anim: 'pop', at: 0.32, x: 700, y: 820, w: 230, sfx: false });
        S.tag('ADIK', 'faham tak?', { x: 740, y: 1125, w: 220, at: 0.4 });
        S.add(`<div class="bubble" style="font-size:46px">“<span class="hl">Hukum Kanun Melaka</span> tu…”</div>`, { anim: 'pop', at: 0.3, x: 360, y: 560, w: 640, sfx: false });
        S.svg(D.question(RED), { x: 520, y: 760, w: 110, at: 0.66, dur: 0.4, sfx: 'scribble' });
        S.add(BIG('TERSEKAT?', { fs: 60, color: RED }), { anim: 'pop', at: 0.66, d: 0.1, x: 650, y: 700, w: 300, sfx: false });
        S.stamp('= BELUM FAHAM', { x: 40, y: 1100, w: 640, at: 0.82, fs: 70, rot: -4, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'spaced', bg: 'grid',
      lines: ['Empat, **Spaced Repetition**. Ulang topik sama hari **1**, **3** dan **7**. Sikit-sikit, tapi melekat lama.'],
      board: {
        name: 'Teknik #4 · Spaced Repetition',
        visual: 'Pil "TEKNIK #4", tajuk SPACED REPETITION; kalendar 7 hari; bulatan merah pada hari 1, 3 dan 7 tepat ketika disebut; kad emas "SIKIT-SIKIT, MELEKAT LAMA".',
        doodle: 'Kalendar mingguan, bulatan merah lakaran tangan.',
        text: 'TEKNIK #4 · SPACED REPETITION · HARI 1 · HARI 3 · HARI 7 · SIKIT-SIKIT, MELEKAT LAMA',
        anim: 'Kalendar naik; bulatan dilukis pada setiap nombor; kad emas pop pada ayat akhir.',
      },
      draw(S, { D }) {
        S.add(PILL('TEKNIK #4'), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 300, w: 1000 });
        S.add(BIG('<span class="hl">SPACED REPETITION</span>', { fs: 84 }), { anim: 'wipe', at: 0, d: 0, dur: 0.6, x: 20, y: 410, w: 1040 });
        const days = [1, 2, 3, 4, 5, 6, 7];
        S.card(`<div class="tw red" style="font-size:28px;text-align:center">ULANG KAJI TOPIK YANG SAMA</div><div style="display:flex;gap:10px;margin-top:16px">${days.map((d) => `<div style="flex:1;height:150px;border:4px solid ${NAVY};border-radius:12px;background:${[1, 3, 7].includes(d) ? '#FAE6A2' : '#FFFDF7'};display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-family:Typewriter;font-size:22px">HARI</div><div style="font-family:Marker;font-size:66px;line-height:1">${d}</div></div>`).join('')}</div>`, { anim: 'slideU', at: 0.2, d: -0.1, x: 60, y: 560, w: 960, notape: true });
        // ring each highlighted day as its number is spoken (box centres inside the card)
        const cx = (d) => 60 + 28 + 4 + (d - 1) * ((960 - 56 - 8 - 60) / 7 + 10) + ((960 - 56 - 8 - 60) / 7) / 2;
        [[1, 0.42], [3, 0.5], [7, 0.6]].forEach(([d, f]) => S.svg(D.ring(150, 190, RED), { x: cx(d) - 75, y: 625, w: 150, at: f, dur: 0.35, sfx: 'pop' }));
        S.card(BIG('SIKIT-SIKIT,<br>MELEKAT LAMA', { fs: 72 }), { color: 'gold', anim: 'pop', at: 0.72, x: 140, y: 920, w: 800, rot: -1.5, sfx: 'ding' });
      },
    },
    {
      id: 'rutin', bg: 'lined',
      lines: ['Rutin harian: **25 minit**, satu subtopik. Baca, blurting, semak, terangkan. Esok, ulang.'],
      board: {
        name: 'Rutin harian 25 minit',
        visual: 'Kad navy "RUTIN 25 MINIT · 1 SUBTOPIK" dengan jam; empat baris bermasa: 10 min BACA, 5 min BLURTING, 5 min SEMAK (pen merah), 5 min TERANGKAN (Feynman); kad emas "ESOK: ULANG (hari 1 · 3 · 7)".',
        doodle: 'Jam, senarai semak bernombor.',
        text: 'RUTIN 25 MINIT · 1 SUBTOPIK · 10 min BACA · 5 min BLURTING · 5 min SEMAK · 5 min TERANGKAN · ESOK: ULANG',
        anim: 'Kad navy turun; setiap baris pop tepat pada perkataannya; kad ESOK pop pada "ulang".',
      },
      draw(S, { D }) {
        S.card(`<div style="display:flex;align-items:center;gap:24px"><div style="width:130px;flex:none">${clock(D)}</div><div>${BIG('RUTIN <span class="gold">25 MINIT</span>', { fs: 70, color: CREAM }).replace('text-align:center', 'text-align:left')}<div style="font-family:Caveat;font-weight:700;font-size:46px;color:${GOLD}">sehari · satu subtopik</div></div></div>`, { color: 'navy', notape: true, anim: 'slideD', at: 0, d: -0.15, x: 60, y: 290, w: 960 });
        const R = [['10 min', 'BACA', 'satu subtopik, faham dulu', 0.38], ['5 min', 'BLURTING', 'tulis dari ingatan', 0.48], ['5 min', 'SEMAK', 'isi kosong guna pen merah', 0.6], ['5 min', 'TERANGKAN', 'gaya Feynman, kuat-kuat', 0.7]];
        R.forEach(([m, t, s, f], i) => S.add(`<div class="card notape" style="display:flex;align-items:center;gap:22px;padding:12px 22px;height:150px;box-sizing:border-box"><span class="pill" style="font-size:40px;flex:none;width:170px;text-align:center;padding:6px 0">${m}</span><div><div style="font-family:Marker;font-size:54px;line-height:1">${t}</div><div style="font-family:Caveat;font-weight:700;font-size:40px;color:${RED}">${s}</div></div></div>`,
          { anim: 'slideR', at: f, d: -0.08, x: 60, y: 540 + i * 170, w: 960, rot: i % 2 ? 0.8 : -0.8, sfx: 'swish' }));
        S.add(PILL('ESOK: ULANG ➜ HARI 1 · 3 · 7', GOLD, NAVY), { anim: 'pop', at: 0.9, d: -0.05, x: 20, y: 1230, w: 1040, sfx: 'ding' });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.2, gap: 0.2, tail: 1.0,
      lines: ['Teknik mana korang nak cuba dulu malam ni? Komen kat bawah!'],
      board: {
        name: 'Akhir · Soalan penutup + jenama rasmi',
        visual: 'Kad soalan kuning di atas; DP rasmi Titik Sejarah (imej asal, tanpa ubah suai); TITIK SEJARAH, slogan & "Follow untuk lebih banyak ilmu sejarah."',
        doodle: 'Kad soalan, sinar latar.',
        text: 'Teknik mana korang nak cuba dulu malam ni? · KOMEN DI BAWAH · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut.',
        music: 'Sting penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Teknik mana korang nak cuba <span class="hl">dulu</span> malam ni?', label: 'KOMEN DI BAWAH · 1, 2, 3 ATAU 4?' }); },
    },
  ],
};
