// EP 2 (short-form v2) – 1.1 Bahagian A: "Siapa Lebih Dulu?"  (~45 s)
// Retention rules: hook fully visible at frame 1, voice starts at 0.05 s, a visual change every 2–4 s,
// short spoken sentences, ending with a curiosity question (spoken over the brand card).
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436';
const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:1.02;text-align:center;color:${o.color || NAVY}">${t}</div>`;

export default {
  id: '02a',
  file: '02_Bab1_1.1A_Siapa_Lebih_Dulu',
  title: 'Siapa Lebih Dulu? Eropah lawan Alam Melayu (1.1 Bahagian A)',
  header: { chip: 'BAB 1 • 1.1', sub: 'Siapa Lebih Dulu?' },
  music: { key: 62, bpm: 112, variant: 1 },
  // Asyraf, short-form delivery: 1.12x the previous pace (15.4 chars/s), more expressive
  voice: { style: 0.55, stability: 0.28, speed: 1.08, tempo: 1.08 },
  introSfx: 'whoosh',
  lead: 0.22, gap: 0.18, tail: 0.12,   // tight pacing for short-form
  transition: 'punch',
  cam: [1.0, 1.05],
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05, gap: 0.15, cam: [1.0, 1.08],
      lines: ['Siapa lebih dulu ada negara yang tersusun? Eropah… atau **Alam Melayu**?'],
      board: {
        name: 'Hook – siapa lebih dulu? (frame pertama sudah lengkap)',
        visual: 'Skrin dibahagi dua sejak frame pertama: EROPAH (dokumen perjanjian) lawan ALAM MELAYU (candi), tajuk besar "SIAPA LEBIH DULU?", lencana VS di tengah.',
        doodle: 'Dokumen perjanjian, candi, lencana VS merah, dua tanda soal.',
        text: 'SIAPA LEBIH DULU? · EROPAH vs ALAM MELAYU',
        anim: 'Semua elemen sudah kelihatan pada 0:00; kamera zoom perlahan 1.00→1.08; tanda soal berdenyut.',
        music: 'Tiada sting pembuka; bunyi whoosh pada 0:00, muzik terus bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('SIAPA <span class="hl"><span class="red">LEBIH DULU?</span></span>', { fs: 128 }), { anim: 'none', at: 'start', d: -0.35, x: 20, y: 270, w: 1040 });
        S.add('<div style="font-family:Marker;font-size:64px;text-align:center">EROPAH</div>', { anim: 'none', at: 'start', d: -0.35, x: 30, y: 600, w: 460 });
        S.add('<div style="font-family:Marker;font-size:64px;text-align:center">ALAM <span class="red">MELAYU</span></div>', { anim: 'none', at: 'start', d: -0.35, x: 570, y: 600, w: 490 });
        S.add(D.treaty('?'), { anim: 'none', at: 'start', d: -0.35, x: 70, y: 720, w: 390, rot: -4 });
        S.add(D.candi(), { anim: 'none', at: 'start', d: -0.35, x: 620, y: 740, w: 400, rot: 3 });
        S.add(D.vs(), { anim: 'none', at: 'start', d: -0.35, x: 430, y: 930, w: 220, pulse: [{ at: 0, d: 2.2 }] });
        S.add(D.question(), { anim: 'none', at: 'start', d: -0.35, x: 430, y: 700, w: 100, rot: -10, pulse: [{ at: 0, d: 1.3 }] });
        S.add(D.question(), { anim: 'none', at: 'start', d: -0.35, x: 960, y: 700, w: 100, rot: 10, pulse: [{ at: 0, d: 3.4 }] });
      },
    },
    {
      id: 'eropah',
      lines: ['Di Eropah, konsep negara bangsa moden dikaitkan dengan **Perjanjian Westphalia**, tahun **1648**.'],
      board: {
        name: 'Fakta 1 – Westphalia 1648',
        visual: 'Dokumen perjanjian besar dengan cop merah 1648; label Eropah.',
        doodle: 'Dokumen perjanjian, cop getah "1648".',
        text: 'EROPAH · Perjanjian Westphalia · 1648',
        anim: 'Punch-in; dokumen dilukis; cop 1648 dihentak pada sebutan tahun.',
      },
      draw(S, { D }) {
        S.add(BIG('EROPAH', { fs: 86 }), { anim: 'pop', at: 0, d: -0.1, x: 40, y: 300, w: 1000 });
        S.svg(D.treaty('1648'), { x: 300, y: 430, w: 480, at: 0, d: 0, dur: 0.9, rot: -3 });
        S.text('Perjanjian <span class="hl">Westphalia</span>', { size: 'h2', x: 40, y: 1060, w: 1000, align: 'center', at: 0.45 });
        S.stamp('1648', { x: 700, y: 520, w: 300, at: 0.85, fs: 90, style: 'text-align:center' });
      },
    },
    {
      id: 'funan',
      lines: ['Tapi di Alam Melayu? **Funan** dah wujud sejak **abad pertama Masihi**!'],
      board: {
        name: 'Fakta 2 – Funan, abad ke-1 Masihi',
        visual: 'Peta lakaran Asia Tenggara dengan penanda Funan berdenyut; cop "ABAD KE-1 M".',
        doodle: 'Peta, penanda merah, cop.',
        text: 'ALAM MELAYU · FUNAN · ABAD KE-1 M',
        anim: 'Punch-in; peta dilukis cepat; penanda pop; cop dihentak.',
      },
      draw(S) {
        S.add(BIG('ALAM <span class="red">MELAYU</span>', { fs: 86 }), { anim: 'pop', at: 0, d: -0.1, x: 40, y: 300, w: 1000 });
        const at = S.map({ bounds: [[96.5, -9], [116, 17.5]], w: 520 }, { x: 280, y: 420, w: 520, at: 0, d: -0.1, dur: 0.9 });
        S.pin(at, 105.2, 10.6, '<b>FUNAN</b>', { at: 0.3, size: 1.3, fs: 54, pulse: [{ at: 0.35 }] });
        S.stamp('ABAD KE-1 M', { x: 230, y: 1150, w: 620, at: 0.6, fs: 72, style: 'text-align:center' });
      },
    },
    {
      id: 'beza', bg: 'grid',
      lines: ['Maksudnya, **lebih seribu tahun** lebih awal!'],
      board: {
        name: 'Fakta 3 – lebih 1,000 tahun lebih awal',
        visual: 'Garis masa: abad ke-1 M (kiri) hingga 1648 (kanan) dengan kurungan merah besar "1,000+ TAHUN".',
        doodle: 'Garis masa, kurungan merah, dua titik bertanda.',
        text: 'ABAD KE-1 M ➜ 1648 · 1,000+ TAHUN',
        anim: 'Garis masa dilakar kiri ke kanan; kurungan pop; angka berdenyut.',
      },
      draw(S) {
        S.add('<svg viewBox="0 0 960 120"><line x1="40" y1="60" x2="920" y2="60" stroke="#172C63" stroke-width="10" stroke-linecap="round"/><circle cx="70" cy="60" r="26" fill="#C93436" stroke="#172C63" stroke-width="6"/><circle cx="890" cy="60" r="26" fill="#F5C928" stroke="#172C63" stroke-width="6"/></svg>', { anim: 'wipe', at: 0, d: -0.2, x: 60, y: 760, w: 960, dur: 0.6, sfx: 'swish' });
        S.add(BIG('Funan<br><span style="font-size:52px">abad ke-1 M</span>', { fs: 64 }), { anim: 'pop', at: 0, d: -0.1, x: 30, y: 880, w: 330 });
        S.add(BIG('Westphalia<br><span style="font-size:52px">1648</span>', { fs: 64 }), { anim: 'pop', at: 0, d: 0.1, x: 700, y: 880, w: 360 });
        S.add('<svg viewBox="0 0 900 140"><path d="M20 130 Q20 40 120 40 L380 40 Q450 40 450 0 Q450 40 520 40 L780 40 Q880 40 880 130" stroke="#C93436" stroke-width="12" fill="none" stroke-linecap="round"/></svg>', { anim: 'wipe', at: 0, d: 0.3, x: 90, y: 600, w: 900, dur: 0.5, sfx: false });
        S.add(BIG('<span class="hl">1,000+ TAHUN</span>', { fs: 110, color: RED }), { anim: 'stamp', at: 0, d: 0.45, x: 40, y: 400, w: 1000, pulse: [{ at: 0, d: 1.4 }], sfx: 'stamp' });
      },
    },
    {
      id: 'soalan',
      lines: ['Jadi, apa yang buat sebuah kerajaan layak dipanggil **negara bangsa**?'],
      board: {
        name: 'Soalan peralihan',
        visual: 'Kanta pembesar besar di atas kad "NEGARA BANGSA = ?".',
        doodle: 'Kanta pembesar, tanda soal.',
        text: 'NEGARA BANGSA = ?',
        anim: 'Punch-in; kad pop; kanta meluncur masuk.',
      },
      draw(S, { D }) {
        S.card(BIG('NEGARA BANGSA<br><span class="red">= ?</span>', { fs: 100, color: GOLD }), { color: 'navy', at: 0, d: -0.1, x: 90, y: 420, w: 900 });
        S.add(D.magnifier(), { anim: 'slideR', at: 0, d: 0.4, x: 700, y: 840, w: 260 });
        S.add(D.question(), { anim: 'pop', at: 0, d: 0.7, x: 160, y: 860, w: 120, rot: -12 });
      },
    },
    {
      id: 'ciri1', bg: 'grid', gap: 0.1,
      lines: ['Ada pemerintah yang **berdaulat**.', 'Ada **wilayah**.', 'Ada **rakyat**.'],
      board: {
        name: 'Ciri 1–3 (tempo laju)',
        visual: 'Tiga kad ikon besar muncul satu demi satu (mahkota, peta, rakyat), setiap satu ditanda semak.',
        doodle: 'Mahkota, glob, watak rakyat, tanda semak hijau.',
        text: 'BERDAULAT ✓ · WILAYAH ✓ · RAKYAT ✓',
        anim: 'Setiap kad pop tepat pada perkataan; tanda semak pop dengan bunyi ding.',
      },
      draw(S, { D }) {
        const cards = [['BERDAULAT', D.crown(), 0], ['WILAYAH', D.globe(), 1], ['RAKYAT', D.rakyat({ pose: 'cheer' }), 2]];
        cards.forEach(([t, ic, k], i) => {
          const y = 330 + i * 330;
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:30px;height:290px;box-sizing:border-box;padding:16px 34px"><div style="width:220px;flex:none">${ic}</div><div style="font-family:Marker;font-size:80px">${t}</div></div>`, { anim: 'slideR', at: k, d: -0.15, x: 70, y, w: 940, rot: i % 2 ? 1 : -1, sfx: 'swish' });
          S.add(D.check(), { anim: 'pop', at: k, d: 0.35, x: 880, y: y + 150, w: 110, sfx: 'ding' });
        });
      },
    },
    {
      id: 'ciri2',
      lines: ['Ada **sistem pentadbiran**, **undang-undang**, dan hubungan luar dengan **China** dan **India**.'],
      board: {
        name: 'Ciri 4–6',
        visual: 'Tiga ikon besar disusun menegak: istana, skrol undang-undang, kapal dagang (China/India).',
        doodle: 'Istana, skrol merah, jong China.',
        text: 'PENTADBIRAN · UNDANG-UNDANG · HUBUNGAN LUAR (China, India)',
        anim: 'Ikon dilukis tepat pada perkataan masing-masing.',
      },
      draw(S, { D }) {
        const it = [['PENTADBIRAN', D.palace(), 0.02], ['UNDANG-UNDANG', D.scroll('', { color: RED }), 0.3], ['HUBUNGAN LUAR', D.ship({ junk: true, waves: false }), 0.62]];
        it.forEach(([t, ic, f], i) => {
          const y = 320 + i * 330;
          S.svg(ic, { x: 80, y: y + 10, w: i === 1 ? 190 : 260, at: f, d: -0.1, dur: 0.6, sfx: i ? false : 'pencil' });
          S.add(`<div style="font-family:Marker;font-size:70px">${t}</div>`, { anim: 'slideR', at: f, d: 0, x: 380, y: y + 90, w: 680 });
        });
        S.add('<div style="font-family:Caveat;font-weight:700;font-size:56px;color:#C93436">China · India</div>', { anim: 'pop', at: 0.85, x: 600, y: 1260, w: 420 });
      },
    },
    {
      id: 'semua', bg: 'dots',
      lines: ['Dan semua ciri ini… dah ada pada **kerajaan awal Alam Melayu**!'],
      board: {
        name: 'Pukulan akhir – semua sudah ada',
        visual: 'Enam ikon kecil tersusun dalam grid dengan semua tanda semak; cop merah besar "SUDAH ADA!".',
        doodle: 'Enam ikon mini, tanda semak, cop.',
        text: 'SUDAH ADA! · Kerajaan awal Alam Melayu',
        anim: 'Grid pop serentak; cop dihentak pada perkataan "kerajaan awal".',
      },
      draw(S, { D }) {
        const ic = [D.crown(), D.globe(), D.rakyat({ pose: 'cheer' }), D.palace(), D.scroll('', { color: RED }), D.ship({ waves: false })];
        ic.forEach((x, i) => {
          const cx = 90 + (i % 3) * 310, cy = 340 + Math.floor(i / 3) * 330;
          S.add(`<div class="card notape" style="height:270px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:20px"><div style="width:${i === 4 ? 120 : 190}px">${x}</div></div>`, { anim: 'pop', at: 0, d: -0.15 + i * 0.06, x: cx, y: cy, w: 280, sfx: i ? false : 'pop' });
          S.add(D.check(), { anim: 'pop', at: 0, d: 0.3 + i * 0.06, x: cx + 190, y: cy + 180, w: 80, sfx: false });
        });
        S.stamp('SUDAH ADA!', { x: 140, y: 1050, w: 800, at: 0.55, fs: 100, style: 'text-align:center' });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.3, gap: 0.2, tail: 1.4,
      lines: ['Soalan: kerajaan mana yang ukir **amaran kepada penderhaka** pada batu bersurat? Jawapannya, episod seterusnya!'],
      board: {
        name: 'Penutup – soalan teaser + jenama rasmi',
        visual: 'Kad soalan kuning di atas; gambar profil rasmi Titik Sejarah (imej asal) di tengah; TITIK SEJARAH, slogan & follow.',
        doodle: 'Kad soalan, sinar latar, DP rasmi.',
        text: 'SOALAN: Kerajaan mana ukir amaran kepada penderhaka pada batu bersurat? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut; teks jenama muncul.',
        music: 'Sting jenama penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Kerajaan mana yang ukir <span class="hl">amaran kepada penderhaka</span> pada batu bersurat?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
