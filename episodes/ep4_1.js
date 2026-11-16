// Bab 4 · 4.1 British Military Administration (BMA) — short-form doodle (EP3 template: style, pace, voice, music)
// Fact source: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4, ms. 94–95 (incl. Jadual 4.1) + user's "Nota T4 – Bab 04" (Google Drive).
// Structure: 0–3 s hook · 3–10 s context · story · takeaway · end teaser question.
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436';
const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:1.02;text-align:center;color:${o.color || NAVY}">${t}</div>`;
const NOW = { anim: 'none', at: 'start', d: -0.35 };   // visible from the very first frame
const PILL = (t, bg = RED) => `<div style="text-align:center"><span class="pill" style="font-size:44px;background:${bg};color:${bg === GOLD ? NAVY : '#FFFDF7'}">${t}</span></div>`;

export default {
  id: '4_1',
  file: '01_Bab4_4.1_BMA_Beras_6_Sen_Jadi_75_Dolar',
  title: 'Beras 6 Sen Jadi 75 Dolar! – British Military Administration (4.1)',
  header: { chip: 'BAB 4 • 4.1', sub: 'British Military Administration' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.1)',
  music: { key: 60, bpm: 114, variant: 2 },
  voice: { style: 0.6, stability: 0.28, speed: 1.08, tempo: 1.11 },   // same delivery as EP3
  introSfx: 'whoosh',
  lead: 0.22, gap: 0.16, tail: 0.12,
  transition: 'punch',
  cam: [1.0, 1.05],
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05, cam: [1.0, 1.08],
      lines: ['Sekati beras… dari **6 sen** jadi **75 dolar**!'],
      board: {
        name: '0–3 s · Hook: harga sekati beras melambung',
        visual: 'Frame pertama lengkap: tajuk "SEKATI BERAS", guni beras doodle di tengah, tanda harga "6 SEN" (kiri) ➜ anak panah merah ➜ cop merah "$75" (kanan) dihentak pada 1.3 s; nota kecil tarikh & mata wang.',
        doodle: 'Guni beras, tanda harga bertali, anak panah tebal.',
        text: 'SEKATI BERAS · 6 SEN (Dis 1941, Dolar Selat) ➜ $75 (Ogos 1945, mata wang Jepun) · Jadual 4.1 buku teks',
        anim: 'Semua kelihatan pada 0:00; kamera zoom 1.00→1.08; cop "$75" dengan bunyi stamp.',
        music: 'Whoosh pada 0:00, rentak 114 BPM terus bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('SEKATI <span class="hl">BERAS</span>', { fs: 124 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(`<svg viewBox="0 0 240 260">${D.R.path('M50 70 Q40 40 70 30 L170 30 Q200 40 190 70 Q226 150 200 236 Q120 256 40 236 Q14 150 50 70 Z', { fill: '#FFFDF7' })}${D.R.path('M58 66 Q120 84 182 66', { strokeWidth: 5 })}${D.R.rect(70, 120, 100, 64, { fill: GOLD, strokeWidth: 2.5 })}<text x="120" y="164" font-family="Marker" font-size="34" fill="${NAVY}" text-anchor="middle">BERAS</text></svg>`, { ...NOW, x: 360, y: 450, w: 360 });
        S.card(`${BIG('6 SEN', { fs: 84 })}<div class="tw" style="font-size:22px;text-align:center;color:${NAVY}">DIS 1941 · DOLAR SELAT</div>`, { ...NOW, notape: true, x: 30, y: 880, w: 400, rot: -3, pad: '16px 18px' });
        S.add(D.arrow(10, 60, 230, 60, { w: 240, h: 120, color: RED, sw: 12, bend: -0.2 }), { ...NOW, x: 420, y: 900, w: 210 });
        S.card(`${BIG('$75', { fs: 140, color: RED })}<div class="tw" style="font-size:19px;white-space:nowrap;text-align:center;color:${NAVY}">OGOS 1945 · MATA WANG JEPUN</div>`, { anim: 'stamp', sfx: 'stamp', at: 0, d: 1.3, notape: true, x: 600, y: 850, w: 410, rot: 3, pad: '10px 16px' });
        S.add('<span class="twtag">Sumber: Jadual 4.1, Buku Teks Sejarah Tingkatan 4</span>', { ...NOW, x: 200, y: 1190, w: 680, align: 'center' });
      },
    },
    {
      id: 'tamat', bg: 'grid',
      lines: ['Inilah Tanah Melayu selepas **Jepun menyerah kalah**.'],
      board: {
        name: '3–6 s · Konteks: selepas Jepun menyerah kalah',
        visual: 'Peta lakaran Tanah Melayu; pil "1945"; kad navy "JEPUN MENYERAH KALAH"; dua rakyat doodle bermuka sedih.',
        doodle: 'Peta Semenanjung, rakyat (sedih).',
        text: '1945 · JEPUN MENYERAH KALAH',
        anim: 'Peta dilakar cepat; kad naik pada "Jepun menyerah kalah".',
      },
      draw(S, { D }) {
        S.add(PILL('1945'), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 290, w: 1000 });
        const at = S.map({ bounds: [[99.2, 0.9], [105.2, 7.2]], w: 520 }, { x: 60, y: 380, w: 560, at: 0, d: -0.2, dur: 0.8 });
        S.add('<div class="t-label" style="font-size:44px;text-align:center">Tanah Melayu</div>', { anim: 'pop', at: 0, d: 0.3, x: 140, y: 700, w: 400, sfx: false });
        S.svg(D.rakyat({ mood: 'sad' }), { x: 650, y: 430, w: 190, at: 0, d: 0.1, dur: 0.5, sfx: false });
        S.svg(D.wanita({ mood: 'sad' }), { x: 840, y: 450, w: 180, at: 0, d: 0.2, dur: 0.5, sfx: false });
        S.card(BIG('JEPUN MENYERAH<br>KALAH', { fs: 76, color: GOLD }), { color: 'navy', anim: 'slideU', at: 0.4, x: 100, y: 960, w: 880 });
      },
    },
    {
      id: 'bma',
      lines: ['**12 September 1945**: British kembali dengan **BMA**!'],
      board: {
        name: '6–10 s · BMA bermula',
        visual: 'Tajuk "BRITISH KEMBALI!"; kapal doodle belayar masuk; pil "12 SEPTEMBER 1945"; kad navy "BMA = British Military Administration".',
        doodle: 'Kapal layar, ombak.',
        text: '12 SEPTEMBER 1945 · BMA = British Military Administration (pentadbiran tentera)',
        anim: 'Kapal meluncur masuk (whoosh); kad BMA naik pada sebutan.',
      },
      draw(S, { D }) {
        S.add(BIG('BRITISH <span class="red">KEMBALI!</span>', { fs: 104 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 290, w: 1040 });
        S.add(PILL('12 SEPTEMBER 1945', GOLD), { anim: 'pop', at: 0, d: 0.05, x: 40, y: 420, w: 1000 });
        S.add(D.ship({ sail: '#F3EBDD' }), { anim: 'slideR', at: 0, d: 0.1, dur: 0.7, x: 290, y: 520, w: 500, sfx: 'whoosh' });
        S.card(`${BIG('<span class="hl">BMA</span>', { fs: 110 })}<div class="t-body" style="font-size:46px;text-align:center">British Military Administration</div><div class="tw red" style="font-size:24px;text-align:center">PENTADBIRAN TENTERA</div>`, { tear: true, anim: 'slideU', at: 0.55, x: 100, y: 920, w: 880 });
      },
    },
    {
      id: 'tugas', bg: 'grid', gap: 0.1,
      lines: ['Tugasnya? Kembalikan **kestabilan**, dan pulihkan **kepercayaan rakyat**.'],
      board: {
        name: '10–15 s · Dua tugas BMA',
        visual: 'Tag "LORD MOUNTBATTEN · Pemerintah Tertinggi Tentera Bersekutu, Asia Tenggara"; dua kad ikon: neraca (KESTABILAN) dan hati (KEPERCAYAAN RAKYAT).',
        doodle: 'Neraca, hati merah.',
        text: 'DI BAWAH ARAHAN LORD MOUNTBATTEN · TUGAS 1 KESTABILAN · TUGAS 2 KEPERCAYAAN RAKYAT',
        anim: 'Setiap kad meluncur masuk tepat pada perkataannya.',
      },
      draw(S, { D }) {
        S.add(BIG('TUGASNYA?', { fs: 96, color: RED }), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 290, w: 1000 });
        S.tag('LORD MOUNTBATTEN', 'Pemerintah Tertinggi Tentera Bersekutu, Asia Tenggara', { x: 150, y: 410, w: 780, at: 0, d: 0 });
        const c = [['KESTABILAN', D.scales(), 0.2], ['KEPERCAYAAN RAKYAT', D.heart(), 0.62]];
        c.forEach(([t, ic, f], i) => S.add(`<div class="card notape" style="display:flex;align-items:center;gap:26px;height:250px;box-sizing:border-box;padding:16px 30px"><div style="width:190px;flex:none">${ic}</div><div><div class="tw red" style="font-size:26px">TUGAS ${i + 1}</div><div style="font-family:Marker;font-size:${i ? 62 : 72}px;line-height:1.05">${t}</div></div></div>`, { anim: 'slideR', at: f, d: -0.1, x: 70, y: 590 + i * 300, w: 940, rot: i % 2 ? 1 : -1, sfx: 'swish' }));
      },
    },
    {
      id: 'mpaja', bg: 'dots',
      lines: ['**MPAJA** dibubarkan. Semua senjata mesti dipulangkan!'],
      board: {
        name: '15–19 s · MPAJA dibubarkan',
        visual: 'Tajuk "MPAJA DIBUBARKAN"; pil "1 DISEMBER 1945"; pedang bersilang ➜ anak panah ➜ peti "PULANGKAN".',
        doodle: 'Pedang bersilang, peti senjata, anak panah.',
        text: 'MPAJA DIBUBARKAN · 1 DISEMBER 1945 · SENJATA DIPULANGKAN',
        anim: 'Tajuk pop; anak panah dilukis; peti pop pada "dipulangkan".',
      },
      draw(S, { D }) {
        S.add(BIG('<span class="hl">MPAJA</span><br>DIBUBARKAN', { fs: 110 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 290, w: 1040 });
        S.add(PILL('1 DISEMBER 1945', GOLD), { anim: 'pop', at: 0, d: 0.1, x: 40, y: 540, w: 1000 });
        S.add(D.swords(), { anim: 'pop', at: 0, d: 0.2, x: 90, y: 700, w: 300, sfx: 'pop' });
        S.arrow(410, 820, 640, 820, { at: 0.45, d: 0, color: RED, sw: 12, bend: -0.2, sfx: 'whoosh' });
        S.add(`<svg viewBox="0 0 260 200">${D.R.rect(20, 50, 220, 140, { fill: GOLD })}${D.R.rect(10, 30, 240, 40, { fill: RED })}<text x="130" y="140" font-family="Marker" font-size="30" fill="${NAVY}" text-anchor="middle">PULANGKAN</text></svg>`, { anim: 'pop', at: 0.6, x: 670, y: 700, w: 330, sfx: 'pop' });
      },
    },
    {
      id: 'gagal', cam: [1.0, 1.07],
      lines: ['Tapi BMA **gagal** kumpul semula senjata itu!', '**Jenayah**, **kongsi gelap**, **ketegangan kaum**… semuanya gagal dibanteras.'],
      board: {
        name: '19–27 s · Kegagalan BMA',
        visual: 'Cop merah besar "GAGAL!"; tiga kad bertindan dengan pangkah merah: JENAYAH · KONGSI GELAP · KETEGANGAN KAUM.',
        doodle: 'Cop, pangkah merah.',
        text: 'GAGAL! · JENAYAH · KONGSI GELAP · KETEGANGAN KAUM · gagal dibanteras',
        anim: 'Cop GAGAL pada sebutan (stamp); setiap kad meluncur masuk pada perkataannya; kamera zoom 1.07.',
      },
      draw(S, { D }) {
        S.add(BIG('SENJATA?', { fs: 96 }), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 290, w: 1000 });
        S.stamp('GAGAL!', { x: 190, y: 400, w: 700, at: 0.3, fs: 130, style: 'text-align:center' });
        const c = [['JENAYAH', 1.0], ['KONGSI GELAP', 1.2], ['KETEGANGAN KAUM', 1.42]];
        c.forEach(([t, f], i) => S.add(`<div class="card notape" style="display:flex;align-items:center;gap:22px;padding:14px 26px"><div style="width:84px;flex:none">${D.cross()}</div><div style="font-family:Marker;font-size:64px;line-height:1.05">${t}</div></div>`, { anim: 'slideR', at: f, d: -0.1, x: 100, y: 640 + i * 190, w: 880, rot: i % 2 ? 1 : -1, sfx: 'swish' }));
      },
    },
    {
      id: 'derita', bg: 'grid',
      lines: ['Makanan dan ubat? Sukar didapati! **Beri-beri** dan **kebuluran** merebak.'],
      board: {
        name: '27–32 s · Rakyat menderita',
        visual: 'Tajuk "MAKANAN & UBAT?"; mangkuk kosong + botol ubat bertanda pangkah; rakyat sedih; cop "BERI-BERI" & "KEBULURAN".',
        doodle: 'Mangkuk kosong, botol ubat, rakyat (sedih).',
        text: 'MAKANAN & UBAT? SUKAR DIDAPATI · BERI-BERI · KEBULURAN',
        anim: 'Tajuk pop; dua cop dihentak tepat pada sebutan.',
      },
      draw(S, { D }) {
        S.add(BIG('MAKANAN & <span class="red">UBAT?</span>', { fs: 100 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 290, w: 1040 });
        S.add(`<svg viewBox="0 0 260 150">${D.R.path('M10 40 Q130 40 250 40 Q240 140 130 140 Q20 140 10 40 Z', { fill: '#FFFDF7' })}${D.R.ellipse(130, 40, 240, 30, { fill: '#DCE3EE' })}</svg>`, { anim: 'pop', at: 0, d: 0, x: 90, y: 470, w: 300, sfx: 'pop' });
        S.add(`<svg viewBox="0 0 120 200">${D.R.rect(30, 10, 60, 30, { fill: RED })}${D.R.rect(10, 40, 100, 150, { fill: '#FFFDF7' })}${D.R.rect(30, 90, 60, 50, { fill: GOLD, strokeWidth: 2 })}</svg>`, { anim: 'pop', at: 0, d: 0.1, x: 420, y: 430, w: 130, sfx: false });
        S.add(D.cross(), { anim: 'stamp', at: 0.38, x: 260, y: 470, w: 150, sfx: 'stamp' });
        S.add('<div class="t-label red" style="font-size:52px;text-align:center">sukar didapati!</div>', { anim: 'pop', at: 0.38, d: 0.1, x: 60, y: 650, w: 520, sfx: false });
        S.svg(D.rakyat({ mood: 'sad' }), { x: 650, y: 430, w: 300, at: 0, d: 0.1, dur: 0.5, sfx: false });
        S.stamp('BERI-BERI', { x: 30, y: 870, w: 480, at: 0.6, fs: 62, rot: -4, style: 'text-align:center;white-space:nowrap' });
        S.stamp('KEBULURAN', { x: 520, y: 890, w: 530, at: 0.8, fs: 62, rot: 4, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'hampa', bg: 'dots', cam: [1.0, 1.07],
      lines: ['**Pasar gelap**, **rasuah**… tak terkawal. Rakyat **hampa**!'],
      board: {
        name: '32–37 s · Pendedahan: rakyat hampa',
        visual: 'Gerai pasar doodle berlabel "PASAR GELAP" + kad "RASUAH"; kemudian cop merah besar "HAMPA!" dengan rakyat sedih.',
        doodle: 'Gerai pasar, rakyat (sedih).',
        text: 'PASAR GELAP · RASUAH · TAK TERKAWAL · HAMPA!',
        anim: 'Gerai pop; kad RASUAH meluncur; cop HAMPA dihentak pada perkataan terakhir; kamera zoom 1.07.',
      },
      draw(S, { D }) {
        S.add(D.market(), { anim: 'pop', at: 0, d: -0.15, x: 60, y: 300, w: 440, sfx: 'pop' });
        S.add('<div class="t-label" style="font-size:52px;text-align:center">PASAR GELAP</div>', { anim: 'pop', at: 0, d: 0, x: 60, y: 600, w: 440, sfx: false });
        S.card(BIG('RASUAH', { fs: 80, color: '#FFFDF7' }), { color: 'red', anim: 'slideR', at: 0.25, x: 560, y: 380, w: 440, rot: 2 });
        S.add('<div class="t-label red" style="font-size:56px;text-align:center">tak terkawal!</div>', { anim: 'pop', at: 0.45, x: 540, y: 560, w: 480, sfx: false });
        S.svg(D.rakyat({ mood: 'sad' }), { x: 150, y: 700, w: 230, at: 0.6, d: -0.1, dur: 0.4, sfx: false });
        S.svg(D.wanita({ mood: 'sad' }), { x: 360, y: 720, w: 220, at: 0.6, d: -0.05, dur: 0.4, sfx: false });
        S.stamp('HAMPA!', { x: 560, y: 800, w: 420, at: 0.86, fs: 86, rot: -6, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'iktibar', bg: 'grid',
      lines: ['Pengajarannya: sentiasa **berwaspada**, jangan mudah percaya **kuasa asing**!'],
      board: {
        name: '37–42 s · Iktibar',
        visual: 'Mentol idea; pil "PENGAJARAN"; kad emas "Sentiasa BERWASPADA"; kad koyak "Jangan mudah percaya kuasa asing".',
        doodle: 'Mentol, kad kertas koyak.',
        text: 'PENGAJARAN · Sentiasa berwaspada · Jangan mudah percaya kuasa asing',
        anim: 'Mentol pop; kad naik mengikut sebutan.',
      },
      draw(S, { D }) {
        S.add(PILL('PENGAJARAN'), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 300, w: 1000 });
        S.add(D.bulb(), { anim: 'pop', at: 0, d: 0, x: 440, y: 400, w: 200, sfx: 'pop' });
        S.card(BIG('Sentiasa <span class="red">BERWASPADA</span>', { fs: 76 }), { color: 'gold', anim: 'slideU', at: 0.2, x: 70, y: 690, w: 940 });
        S.card('<div class="t-body" style="font-size:56px;text-align:center">Jangan mudah percaya <span class="hl">kuasa asing</span>!</div>', { tear: true, anim: 'slideU', at: 0.6, x: 70, y: 900, w: 940 });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.25, gap: 0.2, tail: 1.0,
      lines: ['Lepas BMA, British bawa rancangan baharu… yang ditentang hebat! Apa rancangan itu? Jawapannya, episod seterusnya!'],
      board: {
        name: 'Akhir · Soalan teaser + jenama rasmi',
        visual: 'Kad soalan kuning di atas; DP rasmi Titik Sejarah (imej asal); TITIK SEJARAH, slogan & follow.',
        doodle: 'Kad soalan, sinar latar.',
        text: 'SOALAN: Apakah rancangan baharu British selepas BMA? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut.',
        music: 'Sting penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Apakah <span class="hl">rancangan baharu</span> British selepas BMA?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
