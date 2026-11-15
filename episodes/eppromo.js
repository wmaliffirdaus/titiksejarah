// PROMO 01 – Titik Sejarah digital revision products (TikTok / IG Reels / FB Reels, 9:16, ~40 s).
// Build now without voice:   TS_TTS=silent node engine/build.mjs promo
// Build later with Asyraf:   TS_TTS=eleven node engine/build.mjs promo   (re-times every scene to the real voice)
// Product facts and prices come ONLY from the user's posters and the "Pakej Mana Untuk Anda?" table
// (assets/promo/source/). Do not add features that are not on those.
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436', CREAM = '#F3EBDD', PAPER = '#FFFDF7';
const PO = '../assets/promo/posters/';
const DP = '../assets/brand/titik-sejarah-dp-square.jpg';
const NOW = { anim: 'none', at: 'start', d: -0.35 };   // visible from the very first frame
const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:${o.lh || 1.02};text-align:${o.align || 'center'};color:${o.color || NAVY};letter-spacing:${o.ls ?? 1}px">${t}</div>`;
const HAND = (t, o = {}) => `<div style="font-family:Caveat;font-weight:700;font-size:${o.fs || 52}px;line-height:1.1;text-align:${o.align || 'center'};color:${o.color || NAVY}">${t}</div>`;
// product poster exactly as supplied (square, navy frame + hard shadow like the brand cards)
const POSTER = (name, w) => `<div style="width:${w}px;height:${w}px;border:5px solid ${NAVY};box-shadow:10px 12px 0 ${NAVY};background:#fff;overflow:hidden"><img src="${PO}${name}.jpg" style="display:block;width:100%;height:100%"></div>`;
const PILL = (t, o = {}) => `<div style="text-align:center"><span style="display:inline-block;background:${o.bg || GOLD};color:${o.color || NAVY};border:4px solid ${NAVY};border-radius:999px;padding:${o.pad || '8px 30px'};font-family:Marker;font-size:${o.fs || 40}px;white-space:nowrap;box-shadow:6px 7px 0 ${NAVY}">${t}</span></div>`;
const RAYS = (color, op) => { let s = ''; for (let i = 0; i < 28; i += 2) { const a1 = (i * Math.PI) / 14, a2 = a1 + Math.PI / 28; s += `<polygon points="1000,1000 ${1000 + 1500 * Math.cos(a1)},${1000 + 1500 * Math.sin(a1)} ${1000 + 1500 * Math.cos(a2)},${1000 + 1500 * Math.sin(a2)}" fill="${color}" opacity="${op}"/>`; } return `<svg viewBox="0 0 2000 2000">${s}</svg>`; };
const tick = (c = NAVY) => `<svg viewBox="0 0 120 110" style="width:62px;height:58px;flex:none"><path d="M14 58 L46 92 L106 14" stroke="${c}" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const PAKEJ = [
  ['B1', 'Pakej Nota', '17.90'],
  ['B2', 'Pakej Kertas 1', '15.90'],
  ['B3', 'Pakej Kertas 2', '24.90'],
  ['B4', 'Bank Soalan Lengkap', '34.90'],
  ['B5', 'Pakej Peta Minda', '12.90'],
  ['B6', 'Nota + Bank Soalan', '44.90'],
];

export default {
  id: 'promo',
  file: 'PROMO01_Bahan_Ulang_Kaji_Sejarah_SPM',
  title: 'Promo – Bahan Ulang Kaji Sejarah SPM (Nota, Bank Soalan, Peta Minda, Pakej B1–B7)',
  header: { chip: 'SEJARAH SPM', sub: 'Bahan Ulang Kaji' },
  captions: true,
  music: { key: 62, bpm: 118, variant: 1, musicGain: 0.24, sfxGain: 0.42 },
  musicNote: 'Muzik asli Titik Sejarah (marimba + bass + kick ringan, 118 BPM) – ceria dan bertenaga untuk pelajar; bebas royalti kerana dijana dalam kod.',
  voice: { style: 0.6, stability: 0.3, speed: 1.08, tempo: 1.1 },
  introSfx: 'whoosh',
  lead: 0.25, gap: 0.14, tail: 0.25,
  transition: 'punch',
  cam: [1.0, 1.04],
  scenes: [
    // ---------------------------------------------------------------- 0–4 s  HOOK
    {
      id: 'hook', bg: 'lined', chrome: false, lead: 0.05, cam: [1.0, 1.07], minDur: 3.9,
      lines: [{ text: 'SPM Sejarah dah dekat… tapi nota masih **bersepah**?', say: 'SPM Sejarah dah dekat… tapi nota masih bersepah?' }],
      board: {
        name: '0–4 s · Hook: nota bersepah',
        visual: 'Frame pertama lengkap: tajuk besar "SPM SEJARAH DAH DEKAT…" + "TAPI NOTA MASIH BERSEPAH?" (merah, sorotan kuning) di atas kertas nota bergaris. Cebisan nota kecil bertaburan senget di bawah ("Bab 3 mana?", "Skema??", "Kertas 2…", "Peta minda?") dengan tanda soal merah.',
        doodle: 'Kad cebisan nota (pita washi kuning), tanda soal merah.',
        text: 'SPM SEJARAH DAH DEKAT… · TAPI NOTA MASIH BERSEPAH?',
        anim: 'Semua kelihatan pada 0:00; kamera zoom 1.00→1.07; cebisan nota berdenyut seolah-olah berselerak.',
        music: 'Whoosh pada 0:00, rentak 118 BPM terus bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('SPM SEJARAH<br>DAH DEKAT…', { fs: 112 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(BIG('TAPI NOTA MASIH', { fs: 76 }), { ...NOW, x: 20, y: 545, w: 1040 });
        S.add(BIG('<span class="hl">BERSEPAH?</span>', { fs: 150, color: RED }), { ...NOW, x: 20, y: 640, w: 1040, rot: -2, pulse: [{ at: 0.75 }] });
        const scraps = [
          ['Bab 3 mana?', 80, 900, -9], ['Skema??', 600, 880, 7], ['Kertas 2…', 330, 1040, 4],
          ['Peta minda?', 640, 1150, -6], ['Nota Bab 7?', 90, 1180, 8],
        ];
        scraps.forEach(([t, x, y, r], i) => S.add(`<div class="card${i % 2 ? ' notape' : ''}" style="padding:16px 26px">${HAND(t, { fs: 54 })}</div>`,
          { ...NOW, x, y, w: 360, rot: r, pulse: [{ at: 0.3 + i * 0.12 }] }));
        S.add(D.question(RED), { ...NOW, x: 900, y: 990, w: 90, rot: 12 });
        S.add(D.question(RED), { ...NOW, x: 470, y: 1250, w: 70, rot: -14 });
      },
    },
    // ---------------------------------------------------------------- 4–9 s  BRAND
    {
      id: 'brand', bg: 'lined', chrome: false, transition: 'wipe', minDur: 4.8,
      lines: [
        { text: 'Kenalkan, **Titik Sejarah**.' },
        { text: 'Bahan ulang kaji Sejarah SPM, Tingkatan 4 dan 5.', say: 'Bahan ulang kaji Sejarah SPM, Tingkatan empat dan lima.' },
      ],
      board: {
        name: '4–9 s · Kenalkan jenama',
        visual: 'Penanda kuning menyapu kekusutan; sinar matahari kuning. Gambar profil rasmi (tidak diubah) di tengah, "TITIK SEJARAH", slogan, kad navy "BAHAN ULANG KAJI DIGITAL · Sejarah SPM · KSSM Tingkatan 4 & 5", tiga pil produk.',
        doodle: 'Sinar matahari (sunburst) seperti poster produk.',
        text: 'TITIK SEJARAH · Kenali sejarah, fahami masa kini. · BAHAN ULANG KAJI DIGITAL · NOTA · BANK SOALAN · PETA MINDA',
        anim: 'Gambar profil zoom masuk; nama pop; kad naik; pil pop satu demi satu.',
      },
      draw(S, { D }) {
        S.add(D.burst(), { anim: 'fade', at: 'start', d: -0.3, x: -460, y: -340, w: 2000, dur: 0.6, sfx: false });
        S.add(`<div style="background:#fff;border:6px solid ${NAVY};box-shadow:12px 14px 0 ${NAVY};width:380px"><img src="${DP}" style="display:block;width:380px;height:auto"></div>`,
          { anim: 'zoom', at: 0, d: -0.25, dur: 0.7, x: 344, y: 300, w: 392, sfx: 'pop' });
        S.add(BIG(`TITIK <span class="red">SEJARAH</span>`, { fs: 112, ls: 2 }), { anim: 'pop', at: 0, d: 0.15, x: 20, y: 735, w: 1040, sfx: false });
        S.add(HAND('“Kenali sejarah, fahami masa kini.”', { fs: 56 }), { anim: 'wipe', at: 0, d: 0.5, x: 40, y: 865, w: 1000, sfx: false });
        S.card(`${BIG('BAHAN ULANG KAJI DIGITAL', { fs: 50, color: GOLD })}<div style="font-family:Hand;font-size:44px;text-align:center;color:${CREAM};margin-top:6px">Sejarah SPM · KSSM Tingkatan 4 &amp; 5</div>`,
          { color: 'navy', anim: 'slideU', at: 1, d: -0.1, x: 80, y: 975, w: 920, sfx: 'swish' });
        [['NOTA', 0.35], ['BANK SOALAN', 0.55], ['PETA MINDA', 0.75]].forEach(([t, f], i) =>
          S.add(PILL(t, { fs: 36, pad: '6px 22px', bg: i === 1 ? RED : GOLD, color: i === 1 ? PAPER : NAVY }), { anim: 'pop', at: 1 + f, x: [60, 330, 690][i], y: 1250, w: [260, 350, 330][i], rot: [-3, 2, -2][i] }));
      },
    },
    // ---------------------------------------------------------------- NOTA
    {
      id: 'nota', bg: 'grid', chrome: false, minDur: 3.6,
      lines: [{ text: 'Nota Tingkatan 4 dan 5, **10 bab** setiap satu.', say: 'Nota Tingkatan empat dan lima, sepuluh bab setiap satu.' }],
      board: {
        name: 'Produk 1 · Nota Sejarah T4 & T5',
        visual: 'Tajuk "NOTA SEJARAH" + "T4 + T5"; dua poster produk Nota T4 dan Nota T5 berkipas (senget kiri/kanan); pil kuning "10 BAB setiap tingkatan · Fail PDF".',
        doodle: 'Poster produk asal pengguna.',
        text: 'NOTA SEJARAH · T4 + T5 · 10 BAB setiap tingkatan · Fail PDF',
        anim: 'Tajuk pop; poster meluncur dari kiri dan kanan; pil pop.',
      },
      draw(S) {
        S.add(BIG('NOTA SEJARAH', { fs: 110 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 290, w: 1040, sfx: false });
        S.add(BIG('<span class="hl">TINGKATAN 4 + 5</span>', { fs: 72, color: RED }), { anim: 'wipe', at: 0, d: 0.05, dur: 0.5, x: 20, y: 420, w: 1040, sfx: false });
        S.add(POSTER('nota-t4', 450), { anim: 'slideL', at: 0, d: 0, x: 60, y: 560, w: 460, rot: -5, sfx: 'swish' });
        S.add(POSTER('nota-t5', 450), { anim: 'slideR', at: 0, d: 0.2, x: 555, y: 600, w: 460, rot: 4, sfx: false });
        S.add(PILL('10 BAB setiap tingkatan · Fail PDF', { fs: 42 }), { anim: 'pop', at: 0.6, x: 40, y: 1160, w: 1000, rot: -1.5 });
      },
    },
    // ---------------------------------------------------------------- BANK SOALAN
    {
      id: 'soalan', bg: 'grid', chrome: false, minDur: 4.2,
      lines: [{ text: 'Bank soalan **Kertas 1** dan **2**, siap **skema cadangan**.', say: 'Bank soalan Kertas Satu dan Dua, siap skema cadangan.' }],
      board: {
        name: 'Produk 2 · Bank Soalan Kertas 1 & 2',
        visual: 'Tajuk "BANK SOALAN" + "KERTAS 1 + KERTAS 2"; grid 2×2 poster (K1 T4, K1 Format Penuh, K2 T4, K2 Format Penuh); cop merah "+ SKEMA CADANGAN"; nota kecil "Tingkatan 4 · Format Penuh (T4 + T5)".',
        doodle: 'Poster produk asal pengguna, cop merah.',
        text: 'BANK SOALAN · KERTAS 1 + KERTAS 2 · + SKEMA CADANGAN · Tingkatan 4 · Format Penuh (T4 + T5)',
        anim: 'Empat poster pop satu demi satu; cop dihentak pada "skema cadangan".',
      },
      draw(S) {
        S.add(BIG('BANK SOALAN', { fs: 110 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 280, w: 1040, sfx: false });
        S.add(BIG('<span class="hl">KERTAS 1 + KERTAS 2</span>', { fs: 68, color: RED }), { anim: 'wipe', at: 0, d: 0.05, dur: 0.5, x: 20, y: 408, w: 1040, sfx: false });
        ['k1-t4', 'k1-penuh', 'k2-t4', 'k2-penuh'].forEach((n, i) =>
          S.add(POSTER(n, 360), { anim: 'pop', at: 0.08 + i * 0.12, x: i % 2 ? 565 : 145, y: i < 2 ? 520 : 915, w: 370, rot: [-3, 2.5, 2, -2.5][i], sfx: 'pop' }));
        S.stamp('+ SKEMA CADANGAN', { at: 0.72, x: 60, y: 840, w: 960, fs: 66, rot: -6, style: 'text-align:center;white-space:nowrap' });
        S.add(HAND('Tingkatan 4 · Format Penuh (T4 + T5)', { fs: 50 }), { anim: 'wipe', at: 0.9, x: 40, y: 1305, w: 1000, sfx: false });
      },
    },
    // ---------------------------------------------------------------- PETA MINDA
    {
      id: 'peta', bg: 'grid', chrome: false, minDur: 3.6,
      lines: [{ text: '**Peta minda** dan **infografik** untuk ulang kaji ringkas.', say: 'Peta minda dan infografik untuk ulang kaji ringkas.' }],
      board: {
        name: 'Produk 3 · Peta Minda + Infografik',
        visual: 'Tajuk "PETA MINDA + INFOGRAFIK"; poster T4 dan T5 bertindih (satu besar kiri atas, satu kanan bawah); mentol idea; pil "T4 + T5 · 10 BAB setiap tingkatan".',
        doodle: 'Mentol idea, anak panah kitaran (seperti ikon poster).',
        text: 'PETA MINDA + INFOGRAFIK · T4 + T5 · 10 BAB setiap tingkatan',
        anim: 'Tajuk pop; poster meluncur naik; mentol pop.',
      },
      draw(S, { D }) {
        S.add(BIG('PETA MINDA', { fs: 110 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 280, w: 1040, sfx: false });
        S.add(BIG('<span class="hl">+ INFOGRAFIK</span>', { fs: 80, color: RED }), { anim: 'wipe', at: 0, d: 0.05, dur: 0.5, x: 20, y: 405, w: 1040, sfx: false });
        S.add(POSTER('peta-t4', 430), { anim: 'slideU', at: 0, d: 0.05, x: 90, y: 545, w: 440, rot: -4, sfx: 'swish' });
        S.add(POSTER('peta-t5', 430), { anim: 'slideU', at: 0, d: 0.3, x: 540, y: 660, w: 440, rot: 4, sfx: false });
        S.add(D.cycle(RED, GOLD), { anim: 'pop', at: 0.5, x: 850, y: 500, w: 170, rot: 10 });
        S.add(PILL('T4 + T5 · 10 BAB setiap tingkatan', { fs: 42 }), { anim: 'pop', at: 0.7, x: 40, y: 1200, w: 1000, rot: 1.5 });
      },
    },
    // ---------------------------------------------------------------- PAKEJ B1–B6
    {
      id: 'pakej', bg: 'lined', chrome: false, minDur: 5.4, transition: 'slideUp',
      lines: [
        { text: 'Pilih **pakej** anda.' },
        { text: 'Bermula **RM12.90** sahaja!', say: 'Bermula dua belas ringgit sembilan puluh sahaja!' },
      ],
      board: {
        name: 'Pakej B1–B6 dan harga',
        visual: 'Tajuk "PILIH PAKEJ ANDA"; enam baris kad seperti jadual "Pakej Mana Untuk Anda?": bulatan kuning kod pakej, nama pakej (navy), harga (merah). Baris B5 berdenyut dan cop "DARI RM12.90".',
        doodle: 'Kad baris bergaya jadual perbandingan pengguna.',
        text: 'B1 Pakej Nota RM17.90 · B2 Pakej Kertas 1 RM15.90 · B3 Pakej Kertas 2 RM24.90 · B4 Bank Soalan Lengkap RM34.90 · B5 Pakej Peta Minda RM12.90 · B6 Nota + Bank Soalan RM44.90',
        anim: 'Baris meluncur masuk dari kanan berselang 0.18 s; baris B5 berdenyut pada "RM12.90"; cop dihentak.',
      },
      draw(S) {
        S.add(BIG('PILIH <span class="red">PAKEJ</span> ANDA', { fs: 100 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 280, w: 1040, sfx: false });
        PAKEJ.forEach(([code, name, price], i) => S.add(
          `<div style="display:flex;align-items:center;gap:22px;height:116px;box-sizing:border-box;padding:0 30px 0 18px;background:${PAPER};border:5px solid ${NAVY};border-radius:20px;box-shadow:7px 8px 0 ${NAVY}">
            <div style="flex:none;width:92px;height:92px;border-radius:50%;background:${GOLD};border:4px solid ${NAVY};display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:40px;color:${NAVY}">${code}</div>
            <div style="flex:1;font-family:Marker;font-size:${name.length > 16 ? 44 : 50}px;color:${NAVY};white-space:nowrap">${name}</div>
            <div style="flex:none;font-family:Marker;font-size:58px;color:${RED}">RM${price}</div></div>`,
          { anim: 'slideR', at: 0, d: 0.15 + i * 0.18, x: 60, y: 420 + i * 140, w: 960, sfx: i % 2 ? false : 'swish', pulse: code === 'B5' ? [{ at: 1, d: 0.3 }] : [] }));
        S.stamp('DARI RM12.90', { at: 1, d: 0.35, x: 470, y: 1262, w: 560, fs: 58, rot: -4, style: 'text-align:center;white-space:nowrap' });
      },
    },
    // ---------------------------------------------------------------- B7 REVEAL
    {
      id: 'b7-reveal', bg: 'gold', chrome: false, minDur: 4.4, transition: 'zoom', trSfx: 'boom', cam: [1.0, 1.05],
      lines: [
        { text: 'Tapi kalau nak **semua sekali**…' },
        { text: 'ambil **Pakej Lengkap**!' },
      ],
      board: {
        name: 'B7 · Pakej Lengkap – pendedahan',
        visual: 'Latar kuning penuh dengan sinar krim; "NAK SEMUA SEKALI?" (navy); poster B7 besar di tengah (zoom masuk); cop "PALING LENGKAP"; tajuk kuning "B7 · PAKEJ LENGKAP".',
        doodle: 'Sinar matahari krim di atas kuning (terbalikkan gaya poster).',
        text: 'NAK SEMUA SEKALI? · B7 · PAKEJ LENGKAP · PALING LENGKAP',
        anim: 'Transisi zoom + dentuman rendah; poster zoom masuk; cop dihentak; tajuk pop dengan denyut.',
        music: 'Dentuman sinematik ringan pada pendedahan.',
      },
      draw(S, { D }) {
        S.add(RAYS(CREAM, 0.55), { anim: 'fade', at: 'start', d: -0.3, x: -460, y: -260, w: 2000, dur: 0.6, sfx: false });
        S.add(BIG('NAK SEMUA SEKALI?', { fs: 84, color: NAVY }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 290, w: 1040, sfx: false });
        S.add(`<div style="width:600px;height:600px;border:6px solid ${NAVY};box-shadow:14px 16px 0 ${NAVY};background:#fff;overflow:hidden"><img src="${PO}b7-lengkap.jpg" style="display:block;width:100%;height:100%"></div>`,
          { anim: 'zoom', at: 0.5, d: 0, dur: 0.6, x: 234, y: 420, w: 612, rot: -2, sfx: 'whoosh' });
        S.add(BIG(`<span style="color:${RED}">B7 ·</span> PAKEJ LENGKAP`, { fs: 82, color: NAVY }), { anim: 'pop', at: 1, d: 0, x: 20, y: 1125, w: 1040, sfx: 'ding', pulse: [{ at: 1, d: 0.6 }] });
        S.stamp('PALING LENGKAP', { at: 1, d: 0.35, x: 470, y: 925, w: 580, fs: 56, rot: -7, style: 'text-align:center;white-space:nowrap' });
      },
    },
    // ---------------------------------------------------------------- B7 CONTENTS + PRICE
    {
      id: 'b7-harga', bg: 'lined', chrome: false, minDur: 6.0, transition: 'punch',
      lines: [
        { text: 'Nota, soalan, peta minda. **120 fail PDF**…', say: 'Nota, soalan, peta minda. Seratus dua puluh fail PDF…' },
        { text: 'hanya **RM49.90**!', say: 'hanya empat puluh sembilan ringgit sembilan puluh!' },
      ],
      board: {
        name: 'B7 · Kandungan dan harga',
        visual: 'Tajuk "B7 · PAKEJ LENGKAP"; kad senarai semak (✓ Nota T4 + T5, ✓ Bank Soalan K1 + K2, ✓ Peta Minda + Infografik); pil "120 FAIL PDF"; harga RM57.80 dipotong (harga berasingan B6 + B5) dan RM49.90 besar merah; nota kecil "Jimat RM7.90 berbanding beli B6 + B5".',
        doodle: 'Tanda semak navy (seperti jadual pengguna), garis potong merah.',
        text: 'B7 · PAKEJ LENGKAP · Nota T4 + T5 · Bank Soalan K1 + K2 · Peta Minda + Infografik · 120 FAIL PDF · RM57.80 → RM49.90 · Jimat RM7.90 berbanding beli B6 + B5',
        anim: 'Setiap baris semak pop tepat pada sebutannya; harga lama dipotong; harga baharu dihentak (stamp) dan berdenyut.',
      },
      draw(S) {
        S.add(BIG('B7 · <span class="hl">PAKEJ LENGKAP</span>', { fs: 88 }), { anim: 'pop', at: 0, d: -0.25, x: 20, y: 285, w: 1040, sfx: false });
        const rows = [['Nota T4 + T5', 0.0], ['Bank Soalan K1 + K2', 0.16], ['Peta Minda + Infografik', 0.42]];
        S.card(rows.map(([t]) => `<div style="display:flex;align-items:center;gap:22px;height:96px">${tick()}<div style="font-family:Marker;font-size:52px;color:${NAVY};white-space:nowrap">${t}</div></div>`).join(''),
          { anim: 'slideU', at: 0, d: -0.1, x: 110, y: 425, w: 860, pad: '20px 40px', sfx: 'swish' });
        S.add(PILL('120 FAIL PDF', { fs: 52, pad: '6px 36px' }), { anim: 'pop', at: 0.72, x: 40, y: 820, w: 1000, rot: -2 });
        S.add(`<div style="text-align:center;font-family:Marker;font-size:66px;color:${NAVY};opacity:.8"><span style="position:relative;display:inline-block">RM57.80<span style="position:absolute;left:-8px;right:-8px;top:50%;height:6px;background:${RED};transform:rotate(-6deg)"></span></span></div>`,
          { anim: 'fade', at: 1, d: -0.15, x: 40, y: 945, w: 1000, sfx: false });
        S.add(BIG('RM49.90', { fs: 200, color: RED }), { anim: 'stamp', at: 1, d: 0.1, x: 20, y: 1015, w: 1040, rot: -3, sfx: 'stamp', pulse: [{ at: 1, d: 0.9 }] });
        S.add(HAND('Jimat RM7.90 berbanding beli B6 + B5', { fs: 50, color: RED }), { anim: 'wipe', at: 1, d: 0.6, x: 40, y: 1245, w: 1000, sfx: false });
      },
    },
    // ---------------------------------------------------------------- CTA + BRAND CLOSE
    {
      id: 'cta', bg: 'lined', chrome: false, transition: 'wipe', minDur: 5.4, hold: 1.2, cam: [1.0, 1.03],
      lines: [
        { text: 'Jangan tunggu **last minute**!' },
        { text: 'Dapatkan sekarang, **PM** Titik Sejarah di **TikTok**!', say: 'Dapatkan sekarang, PM Titik Sejarah di TikTok!' },
      ],
      board: {
        name: 'CTA + kad penutup jenama',
        visual: '"JANGAN TUNGGU LAST MINUTE!" di atas; gambar profil rasmi (tidak diubah) di tengah; "TITIK SEJARAH"; slogan; pil merah "DAPATKAN SEKARANG · PM DI TIKTOK" berdenyut; "Follow untuk lebih banyak ilmu sejarah." di bawah.',
        doodle: 'Sinar matahari kuning seperti poster produk.',
        text: 'JANGAN TUNGGU LAST MINUTE! · TITIK SEJARAH · Kenali sejarah, fahami masa kini. · DAPATKAN SEKARANG · PM DI TIKTOK · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Tajuk pop; gambar profil zoom masuk; pil CTA pop dan berdenyut dua kali; kad ditahan ±2 s untuk tangkap layar.',
        music: 'Sting penutup jenama.',
      },
      draw(S, { D }) {
        S.add(D.burst(), { anim: 'fade', at: 'start', d: -0.3, x: -460, y: -180, w: 2000, dur: 0.6, sfx: false });
        S.add(BIG('JANGAN TUNGGU', { fs: 104 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 280, w: 1040, sfx: false });
        S.add(BIG('<span class="hl">LAST MINUTE!</span>', { fs: 116, color: RED }), { anim: 'stamp', at: 0, d: 0.2, x: 20, y: 395, w: 1040, rot: -2, sfx: 'stamp' });
        S.add(`<div style="background:#fff;border:6px solid ${NAVY};box-shadow:12px 14px 0 ${NAVY};width:360px"><img src="${DP}" style="display:block;width:360px;height:auto"></div>`,
          { anim: 'zoom', at: 1, d: -0.3, dur: 0.7, x: 354, y: 575, w: 372, sfx: false });
        S.add(BIG(`TITIK <span class="red">SEJARAH</span>`, { fs: 100, ls: 2 }), { anim: 'pop', at: 1, d: -0.05, x: 20, y: 985, w: 1040, sfx: false });
        S.add(HAND('“Kenali sejarah, fahami masa kini.”', { fs: 54 }), { anim: 'wipe', at: 1, d: 0.25, x: 40, y: 1100, w: 1000, sfx: false });
        S.add(PILL('DAPATKAN SEKARANG · PM DI TIKTOK', { fs: 46, bg: RED, color: PAPER, pad: '12px 34px' }), { anim: 'pop', at: 1, d: 0.5, x: 30, y: 1195, w: 1020, sfx: 'ding', pulse: [{ at: 'end', d: -1.6 }, { at: 'end', d: -0.8 }] });
        S.add(HAND('Follow untuk lebih banyak ilmu sejarah.', { fs: 44 }), { anim: 'fade', at: 1, d: 0.9, x: 40, y: 1320, w: 1000, sfx: false });
      },
    },
  ],
};
