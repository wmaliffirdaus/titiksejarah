// EP 3 (short-form) – 1.2 Bahagian 1: Wilayah Pengaruh & Kedaulatan Kesultanan Melayu Melaka (~50 s)
// Structure: 0–3 s hook · 3–10 s context · 10–35 s story · 35–45 s surprising takeaway · end teaser question.
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436';
const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:1.02;text-align:center;color:${o.color || NAVY}">${t}</div>`;
const NOW = { anim: 'none', at: 'start', d: -0.35 };   // visible from the very first frame
const MELAKA = [102.25, 2.2];

export default {
  id: '03s',
  file: '03_Bab1_1.2A_Kampung_Nelayan_Jadi_Empayar',
  title: 'Kampung Nelayan Jadi Empayar – Wilayah Pengaruh & Kedaulatan (1.2 Bahagian 1)',
  header: { chip: 'BAB 1 • 1.2', sub: 'Rahsia Kekuatan Melaka' },
  music: { key: 60, bpm: 114, variant: 2 },
  voice: { style: 0.6, stability: 0.28, speed: 1.08, tempo: 1.11 },
  introSfx: 'whoosh',
  lead: 0.22, gap: 0.16, tail: 0.12,
  transition: 'punch',
  cam: [1.0, 1.05],
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05, cam: [1.0, 1.08],
      lines: ['Perkampungan nelayan kecil… jadi **empayar** dalam masa kurang 100 tahun!'],
      board: {
        name: '0–3 s · Hook: kampung nelayan ➜ empayar',
        visual: 'Frame pertama lengkap: pondok nelayan kecil + perahu (kiri) ➜ anak panah merah ➜ istana besar bermahkota (kanan). Tajuk besar "KAMPUNG NELAYAN ➜ EMPAYAR". Cop merah "< 100 TAHUN" dihentak pada 1.5 s.',
        doodle: 'Pondok nelayan, perahu, istana Melaka, mahkota, anak panah tebal.',
        text: 'KAMPUNG NELAYAN ➜ EMPAYAR · < 100 TAHUN',
        anim: 'Semua kelihatan pada 0:00; kamera zoom 1.00→1.08; cop pop dengan bunyi stamp.',
        music: 'Tiada sting; whoosh pada 0:00, rentak 114 BPM terus bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('KAMPUNG NELAYAN<br><span class="red">➜</span> <span class="hl">EMPAYAR</span>', { fs: 100 }), { ...NOW, x: 20, y: 280, w: 1040 });
        S.add(`<svg viewBox="0 0 200 180">${D.R.poly([[20, 90], [100, 20], [180, 90]], { fill: GOLD })}${D.R.rect(40, 88, 120, 70, { fill: '#FFFDF7' })}${D.R.rect(86, 110, 28, 48, { fill: NAVY })}${D.R.line(0, 170, 200, 170, {})}</svg>`, { ...NOW, x: 60, y: 640, w: 240 });
        S.add(D.ship({ sail: '#F3EBDD' }), { ...NOW, x: 50, y: 870, w: 280 });
        S.add(D.arrow(10, 60, 230, 60, { w: 240, h: 120, color: RED, sw: 12, bend: -0.2 }), { ...NOW, x: 330, y: 700, w: 240 });
        S.add(D.palace(), { ...NOW, x: 560, y: 640, w: 480 });
        S.add(D.crown(), { ...NOW, x: 730, y: 520, w: 150, rot: 8 });
        S.stamp('&lt; 100 TAHUN', { x: 250, y: 1080, w: 580, at: 0, d: 1.3, fs: 92, style: 'text-align:center' });
      },
    },
    {
      id: 'rahsia',
      lines: ['Apa rahsianya? Ciri-ciri **negara bangsa**.'],
      board: {
        name: '3–6 s · Konteks: apa rahsianya?',
        visual: 'Kanta pembesar besar di atas kad navy "CIRI-CIRI NEGARA BANGSA"; pil "SUBTOPIK 1.2".',
        doodle: 'Kanta pembesar, tanda soal.',
        text: 'APA RAHSIANYA? · CIRI-CIRI NEGARA BANGSA · SUBTOPIK 1.2',
        anim: 'Punch-in; tajuk pop; kad naik dari bawah.',
      },
      draw(S, { D }) {
        S.add(BIG('APA <span class="red">RAHSIANYA?</span>', { fs: 110 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 320, w: 1040 });
        S.add(D.magnifier(), { anim: 'pop', at: 0, d: 0, x: 400, y: 520, w: 280, rot: -8 });
        S.card(BIG('CIRI-CIRI<br>NEGARA BANGSA', { fs: 84, color: GOLD }), { color: 'navy', anim: 'slideU', at: 0, d: 0.35, x: 100, y: 870, w: 880 });
      },
    },
    {
      id: 'wilayah-def', bg: 'grid',
      lines: ['Rahsia pertama: **wilayah pengaruh**. Kawasan di bawah kuasa atau naungan kerajaan.'],
      board: {
        name: '6–11 s · Rahsia #1: definisi wilayah pengaruh',
        visual: 'Pil "RAHSIA #1", tajuk besar WILAYAH PENGARUH, kad definisi kertas koyak.',
        doodle: 'Glob kecil, kad kertas koyak dengan pita.',
        text: 'RAHSIA #1 · WILAYAH PENGARUH · "kawasan di bawah kuasa / naungan kerajaan"',
        anim: 'Pil pop; tajuk ditulis; kad definisi naik pada separuh ayat.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:44px;background:#C93436;color:#FFFDF7">RAHSIA #1</span></div>', { anim: 'pop', at: 0, d: -0.15, x: 40, y: 320, w: 1000 });
        S.add(BIG('WILAYAH<br><span class="hl">PENGARUH</span>', { fs: 120 }), { anim: 'wipe', at: 0, d: 0, dur: 0.6, x: 20, y: 440, w: 1040 });
        S.card('<div class="tw red" style="font-size:28px">DEFINISI</div><div class="t-body" style="font-size:52px">Kawasan di bawah <span class="hl">kuasa</span> atau <span class="hl">naungan</span> sesebuah kerajaan.</div>', { tear: true, anim: 'slideU', at: 0.45, x: 70, y: 780, w: 940 });
      },
    },
    {
      id: 'peta', cam: [1.0, 1.04],
      lines: ['Zaman kegemilangannya, Melaka kuasai **Pahang**, **Terengganu**, **Johor**…', 'hingga **Kampar**, **Siak** dan **Inderagiri** di **Sumatera**!'],
      board: {
        name: '11–21 s · Peta wilayah Melaka',
        visual: 'Peta lakaran Semenanjung & Sumatera; bintang emas MELAKA; penanda merah pop tepat pada setiap nama negeri/wilayah yang disebut.',
        doodle: 'Peta tulisan tangan (Natural Earth), penanda, label Caveat.',
        text: 'MELAKA · Pahang · Terengganu · Johor · Kampar · Siak · Inderagiri',
        anim: 'Peta dilakar cepat (0.8 s); 6 penanda pop serentak dengan sebutan; kamera zoom perlahan.',
      },
      draw(S) {
        const at = S.map({ bounds: [[98.4, -1.4], [105.6, 7.0]], w: 620, labels: [{ lon: 99.6, lat: 3.2, text: 'Selat Melaka', size: 26, rot: -50 }] }, { x: 170, y: 300, w: 740, at: 0, d: -0.2, dur: 0.8 });
        S.pin(at, ...MELAKA, '<b>MELAKA</b>', { at: 0, d: 0.2, color: GOLD, size: 1.15, fs: 46, left: true });
        const P = [[103.13, 5.33, 'Terengganu', 0, 0.68], [103.4, 3.6, 'Pahang', 0, 0.5], [103.9, 1.7, 'Johor', 0, 0.86], [101.45, 0.33, 'Kampar', 1, 0.12], [102.05, 0.8, 'Siak', 1, 0.33], [102.55, -0.38, 'Inderagiri', 1, 0.52]];
        P.forEach(([lo, la, n, k, f], i) => S.pin(at, lo, la, n, { at: k + f, color: RED, size: 0.95, fs: 40, left: n === 'Kampar', sfx: 'pop' }));
      },
    },
    {
      id: 'cara', bg: 'grid', gap: 0.1,
      lines: ['Caranya? **Peperangan**, **perkahwinan diraja** dan **diplomasi**.'],
      board: {
        name: '21–25 s · Cara meluaskan wilayah',
        visual: 'Tiga kad ikon besar bertindan: pedang bersilang, hati, skrol perjanjian.',
        doodle: 'Pedang bersilang, hati merah, skrol.',
        text: 'PEPERANGAN · PERKAHWINAN DIRAJA · DIPLOMASI',
        anim: 'Setiap kad meluncur masuk tepat pada perkataannya.',
      },
      draw(S, { D }) {
        S.add(BIG('CARANYA?', { fs: 96, color: RED }), { anim: 'pop', at: 0, d: -0.15, x: 40, y: 290, w: 1000 });
        const c = [['PEPERANGAN', D.swords(), 0.18], ['PERKAHWINAN DIRAJA', D.heart(), 0.42], ['DIPLOMASI', D.scroll('', { color: GOLD }), 0.78]];
        c.forEach(([t, ic, f], i) => S.add(`<div class="card notape" style="display:flex;align-items:center;gap:26px;height:250px;box-sizing:border-box;padding:16px 30px"><div style="width:${i === 2 ? 150 : 190}px;flex:none">${ic}</div><div style="font-family:Marker;font-size:${i === 1 ? 60 : 72}px;line-height:1.05">${t}</div></div>`, { anim: 'slideR', at: f, d: -0.1, x: 70, y: 430 + i * 290, w: 940, rot: i % 2 ? 1 : -1, sfx: 'swish' }));
      },
    },
    {
      id: 'daulat-def', bg: 'grid',
      lines: ['Rahsia kedua: **kedaulatan**. Kuasa tertinggi, tanpa campur tangan kuasa luar.'],
      board: {
        name: '25–30 s · Rahsia #2: definisi kedaulatan',
        visual: 'Pil "RAHSIA #2", tajuk KEDAULATAN, mahkota besar, kad definisi.',
        doodle: 'Mahkota, perisai kecil, kad kertas koyak.',
        text: 'RAHSIA #2 · KEDAULATAN · "kuasa tertinggi, tanpa campur tangan kuasa luar"',
        anim: 'Pil pop; tajuk ditulis; kad naik.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:44px;background:#C93436;color:#FFFDF7">RAHSIA #2</span></div>', { anim: 'pop', at: 0, d: -0.15, x: 40, y: 320, w: 1000 });
        S.add(BIG('<span class="hl">KEDAULATAN</span>', { fs: 124 }), { anim: 'wipe', at: 0, d: 0, dur: 0.6, x: 20, y: 450, w: 1040 });
        S.svg(D.crown(), { x: 380, y: 610, w: 320, at: 0, d: 0.2, dur: 0.6 });
        S.card('<div class="tw red" style="font-size:28px">DEFINISI</div><div class="t-body" style="font-size:52px">Kuasa <span class="hl">tertinggi</span> memerintah, tanpa campur tangan kuasa luar.</div>', { tear: true, anim: 'slideU', at: 0.45, x: 70, y: 880, w: 940 });
      },
    },
    {
      id: 'sultan',
      lines: ['Kuasa itu milik **Sultan**. Rakyat percaya Sultan ada **daulat**. Lawan Sultan? **Derhaka**!'],
      board: {
        name: '30–36 s · Daulat & derhaka',
        visual: 'Sultan besar di tengah; cop kuning DAULAT di kiri, cop merah DERHAKA di kanan (bersilang).',
        doodle: 'Watak Sultan (mahkota, baju kuning, jubah merah), dua cop.',
        text: 'SULTAN · DAULAT · DERHAKA',
        anim: 'Sultan pop; DAULAT dicop pada sebutan; DERHAKA dicop dengan bunyi stamp.',
      },
      draw(S, { D }) {
        S.svg(D.sultan({ pose: 'up' }), { x: 360, y: 330, w: 360, at: 0, d: -0.15, dur: 0.6, sfx: 'pop' });
        S.tag('SULTAN', 'kuasa tertinggi', { x: 410, y: 820, w: 260, at: 0, d: 0.05 });
        S.stamp('DAULAT', { x: 60, y: 990, w: 440, at: 0.5, fs: 84, style: 'text-align:center' });
        S.stamp('DERHAKA', { x: 560, y: 1000, w: 460, at: 0.86, fs: 84, rot: 5, style: 'text-align:center' });
      },
    },
    {
      id: 'china', bg: 'dots',
      lines: ['**Maharaja China** pun mengiktiraf Melaka, awal abad ke-15.'],
      board: {
        name: '36–40 s · Pengiktirafan China',
        visual: 'Jong China meluncur dari kanan ke arah Melaka; cop mohor merah "DIIKTIRAF"; label "awal abad ke-15".',
        doodle: 'Jong China berlayar batten, cop mohor, ombak.',
        text: 'DIIKTIRAF · Maharaja China · awal abad ke-15',
        anim: 'Jong meluncur masuk; cop dihentak pada "diiktiraf".',
      },
      draw(S, { D }) {
        S.add(BIG('MAHARAJA <span class="red">CHINA</span>', { fs: 100 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 310, w: 1040 });
        S.add(D.ship({ junk: true }), { anim: 'slideR', at: 0, d: 0, dur: 0.7, x: 190, y: 470, w: 700, sfx: 'whoosh' });
        S.add(D.seal(), { anim: 'stamp', at: 0.5, x: 790, y: 1090, w: 220, sfx: 'stamp' });
        S.add(BIG('<span class="hl">DIIKTIRAF</span><br><span style="font-size:56px">awal abad ke-15</span>', { fs: 96 }), { anim: 'pop', at: 0.55, x: 40, y: 1100, w: 720 });
      },
    },
    {
      id: 'siam', bg: 'dots', cam: [1.0, 1.07],
      lines: ['Bila **Siam** menyerang zaman **Sultan Muzaffar Syah**… serangan itu berjaya **dipatahkan**!'],
      board: {
        name: '40–46 s · Kejutan: serangan Siam dipatahkan',
        visual: 'Label "SIAM" di atas dengan tiga anak panah merah menjunam ke perisai besar yang melindungi istana Melaka; cop besar "DIPATAHKAN!".',
        doodle: 'Anak panah tebal, perisai merah-kuning, istana kecil.',
        text: 'SIAM ➜ MELAKA · Sultan Muzaffar Syah · DIPATAHKAN!',
        anim: 'Anak panah dilukis menjunam; perisai pop (stamp); cop DIPATAHKAN pada perkataan terakhir; kamera zoom 1.07.',
      },
      draw(S, { D }) {
        S.add(BIG('<span class="red">SIAM</span> MENYERANG!', { fs: 100 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 300, w: 1040 });
        [[200, 450, 420, 760], [540, 440, 540, 760], [880, 450, 660, 760]].forEach(([x1, y1, x2, y2], i) => S.arrow(x1, y1, x2, y2, { at: 0, d: 0.1 + i * 0.12, color: RED, sw: 12, bend: 0.05, sfx: i ? false : 'whoosh' }));
        S.svg(D.palace(), { x: 330, y: 830, w: 420, at: 0, d: -0.1, dur: 0.5, sfx: false });
        S.add(D.shield(), { anim: 'stamp', at: 0, d: 1.2, x: 430, y: 690, w: 220, sfx: 'stamp' });
        S.tag('SULTAN MUZAFFAR SYAH', '', { x: 260, y: 1150, w: 560, at: 0, d: 1.6 });
        S.stamp('DIPATAHKAN!', { x: 140, y: 470, w: 800, at: 0.82, fs: 104, style: 'text-align:center' });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.25, gap: 0.2, tail: 1.0,
      lines: ['Tapi… kenapa rakyat biasa dilarang pakai warna **kuning**? Jawapannya, episod seterusnya!'],
      board: {
        name: 'Akhir · Soalan teaser + jenama rasmi',
        visual: 'Kad soalan kuning di atas; DP rasmi Titik Sejarah (imej asal); TITIK SEJARAH, slogan & follow.',
        doodle: 'Kad soalan, sinar latar.',
        text: 'Kenapa rakyat biasa dilarang memakai warna KUNING? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut.',
        music: 'Sting penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Kenapa rakyat biasa dilarang memakai warna <span class="hl">KUNING</span>?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
