// EP 7 (short-form) – Bab 3 · 3.1: Nasionalisme di Negara Kita Sebelum Perang Dunia (~50 s)
// Same notebook style as Chapter 1–2 (EP3 format). Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 52–53 + nota ulang kaji Bab 3.
// Structure: 0–3 s hook · 3–8 s context · story · takeaway · end teaser question.
const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436', PAPER = '#FFFDF7';
const BIG = (t, o = {}) => `<div style="font-family:Marker;font-size:${o.fs || 96}px;line-height:1.02;text-align:center;color:${o.color || NAVY}">${t}</div>`;
const NOW = { anim: 'none', at: 'start', d: -0.35 };   // visible from the very first frame

// Burung tekukur dalam sangkar emas (doodle).
function cage(D) {
  const R = D.R;
  let s = R.circle(200, 34, 40, { stroke: NAVY, strokeWidth: 5 });
  s += R.path('M60 230 Q60 64 200 56 Q340 64 340 230', { stroke: NAVY, strokeWidth: 5, fill: 'none' });
  // perch + bird
  s += R.line(90, 400, 310, 400, { stroke: NAVY, strokeWidth: 7 });
  s += R.path('M248 356 L320 392 L312 404 L240 376 Z', { fill: '#EAE0CC', strokeWidth: 3 });
  s += R.ellipse(200, 356, 150, 92, { fill: PAPER, strokeWidth: 3.5 });
  s += R.path('M168 344 Q214 318 262 356 Q218 372 172 368 Z', { fill: '#EAE0CC', strokeWidth: 2.5 });
  s += R.path('M120 316 Q126 352 152 360 L158 324 Z', { fill: NAVY, strokeWidth: 2 });
  s += R.circle(136, 300, 60, { fill: PAPER, strokeWidth: 3.5 });
  s += R.poly([[108, 304], [86, 316], [110, 318]], { fill: GOLD, strokeWidth: 2.5 });
  s += R.circle(128, 296, 9, { fill: NAVY, strokeWidth: 1 });
  s += R.path('M126 306 Q122 322 126 330', { stroke: '#3F5DA8', strokeWidth: 4 });            // air mata
  s += R.line(186, 400, 182, 416, { stroke: RED, strokeWidth: 5 }) + R.line(214, 400, 218, 416, { stroke: RED, strokeWidth: 5 });
  // golden bars over the bird
  for (let x = 72; x <= 328; x += 32) s += R.path(`M200 58 Q${x} 80 ${x} 230 L${x} 460`, { stroke: GOLD, strokeWidth: 7, roughness: 0.6 });
  s += R.ellipse(200, 230, 284, 34, { stroke: GOLD, strokeWidth: 7, fill: 'none' });
  s += R.rect(44, 456, 312, 46, { fill: GOLD, strokeWidth: 4 });
  s += R.rect(74, 502, 252, 22, { fill: GOLD, strokeWidth: 3.5 });
  return `<svg viewBox="0 0 400 540" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

// Akhbar Melayu lama (doodle).
function akhbar(D, head, o = {}) {
  const R = D.R;
  let s = R.rect(10, 10, 380, 480, { fill: PAPER, strokeWidth: 4 });
  s += R.rect(28, 28, 344, 80, { fill: NAVY, strokeWidth: 3 });
  s += D.txt(200, 82, head, { font: 'Marker', weight: 400, size: o.hs || 40, color: GOLD });
  s += D.txt(200, 146, o.sub || 'AKHBAR MELAYU', { font: 'Caveat', size: 34, color: RED });
  for (let c = 0; c < 3; c++) for (let r = 0; r < 10; r++) {
    const x = 34 + c * 116, y = 186 + r * 28, w = 92 - ((r * 7 + c * 11) % 30);
    s += R.line(x, y, x + w, y, { strokeWidth: 3, stroke: '#3F5DA8', roughness: 0.7 });
  }
  return `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

export default {
  id: '07',
  file: '07_Bab3_3.1_Burung_dalam_Sangkar_Emas',
  title: 'Burung dalam Sangkar Emas – Nasionalisme Sebelum Perang Dunia (3.1)',
  header: { chip: 'BAB 3 • 3.1', sub: 'Nasionalisme Sebelum Perang' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.1)',
  music: { key: 60, bpm: 114, variant: 2 },
  voice: { style: 0.6, stability: 0.28, speed: 1.08, tempo: 1.11 },
  introSfx: 'whoosh',
  lead: 0.22, gap: 0.16, tail: 0.12,
  transition: 'punch',
  cam: [1.0, 1.05],
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05, cam: [1.0, 1.08],
      lines: ['Seekor burung **tekukur**… menangis dalam akhbar Melayu!'],
      board: {
        name: '0–3 s · Hook: tekukur menangis dalam sangkar emas',
        visual: 'Frame pertama lengkap: tajuk besar "BURUNG DALAM SANGKAR EMAS", doodle burung tekukur menangis dalam sangkar emas, cop merah "1920".',
        doodle: 'Sangkar emas, burung tekukur (air mata), akhbar kecil.',
        text: 'BURUNG DALAM SANGKAR EMAS · 1920',
        anim: 'Semua kelihatan pada 0:00; kamera zoom 1.00→1.08; cop pop pada 1.3 s.',
        music: 'Whoosh pada 0:00, rentak 114 BPM terus bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('BURUNG DALAM<br><span class="hl">SANGKAR EMAS</span>', { fs: 104 }), { ...NOW, x: 20, y: 280, w: 1040 });
        S.add(cage(D), { ...NOW, x: 290, y: 560, w: 500 });
        S.stamp('1920', { x: 720, y: 1120, w: 300, at: 0, d: 1.3, fs: 92, rot: -8, style: 'text-align:center' });
      },
    },
    {
      id: 'kenapa',
      lines: ['Kenapa? Ini kisah **nasionalisme**… sebelum Perang Dunia.'],
      board: {
        name: '3–7 s · Konteks: nasionalisme sebelum perang dunia',
        visual: 'Tanda soal merah besar; pil "SUBTOPIK 3.1"; kad navy "NASIONALISME SEBELUM PERANG DUNIA".',
        doodle: 'Tanda soal, kad navy.',
        text: 'KENAPA? · SUBTOPIK 3.1 · NASIONALISME SEBELUM PERANG DUNIA',
        anim: 'Punch-in; tajuk pop; kad naik dari bawah.',
      },
      draw(S, { D }) {
        S.add(BIG('<span class="red">KENAPA?</span>', { fs: 130 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 320, w: 1040 });
        S.add(D.question(), { anim: 'pop', at: 0, d: 0, x: 470, y: 480, w: 140, rot: 8 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px">SUBTOPIK 3.1</span></div>', { anim: 'pop', at: 0.3, x: 40, y: 760, w: 1000 });
        S.card(BIG('NASIONALISME<br>SEBELUM PERANG DUNIA', { fs: 70, color: GOLD }), { color: 'navy', anim: 'slideU', at: 0.35, d: 0.1, x: 80, y: 870, w: 920 });
      },
    },
    {
      id: 'enakmen', bg: 'grid',
      lines: ['Awal abad ke-20, British sekat pengaruh gerakan **Islam**.', 'Cetak tulisan agama dan politik Islam tanpa izin sultan? **Penjara**!'],
      board: {
        name: '7–15 s · Kawalan British: Enakmen Undang-Undang Islam 1904',
        visual: 'Kad kertas koyak "ENAKMEN UNDANG-UNDANG ISLAM 1904"; doodle penjara; cop merah "PENJARA!"; tag dua badan penyiasat.',
        doodle: 'Penjara (jeriji), kad kertas koyak, tag.',
        text: 'ENAKMEN UNDANG-UNDANG ISLAM 1904 · tanpa izin sultan · PENJARA! · Jabatan Siasatan Jenayah + Biro Siasatan Politik',
        anim: 'Kad naik; penjara dilakar; cop PENJARA dihentak pada perkataan terakhir.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">AWAL ABAD KE-20</span></div>', { anim: 'pop', at: 0, d: -0.15, x: 40, y: 300, w: 1000 });
        S.card('<div class="tw red" style="font-size:28px">ENAKMEN UNDANG-UNDANG ISLAM</div><div style="font-family:Marker;font-size:96px;line-height:1">1904</div><div class="t-body" style="font-size:46px">Cetak &amp; edar tulisan agama dan politik Islam <span class="hl">tanpa izin sultan</span></div>', { tear: true, anim: 'slideU', at: 0, d: 0.2, x: 70, y: 400, w: 940 });
        S.svg(D.jail(), { x: 90, y: 870, w: 280, at: 1, d: 0, dur: 0.6 });
        S.stamp('PENJARA!', { x: 400, y: 920, w: 600, at: 1.82, fs: 104, style: 'text-align:center' });
        S.tag('BRITISH TUBUH 2 BADAN PENYIASAT', 'Jabatan Siasatan Jenayah · Biro Siasatan Politik', { x: 90, y: 1190, w: 900, at: 1, d: 0.4 });
      },
    },
    {
      id: 'uthmaniyah', bg: 'lined', cam: [1.0, 1.04],
      lines: ['1914, empayar **Uthmaniyah** seru umat Islam yang ditindas penjajah… bangkit!'],
      board: {
        name: '15–20 s · Seruan empayar Uthmaniyah (11 November 1914)',
        visual: 'Peta lakaran Eropah–Asia; penanda kuning "Uthmaniyah", penanda merah "Tanah Melayu"; anak panah merah seruan; tajuk "11 NOV 1914".',
        doodle: 'Peta tulisan tangan, penanda, anak panah.',
        text: '11 NOVEMBER 1914 · Uthmaniyah ➜ Tanah Melayu · BANGKIT!',
        anim: 'Peta dilakar; penanda pop; anak panah dilukis pada "seru"; cop BANGKIT! pada perkataan terakhir.',
      },
      draw(S) {
        S.add(BIG('11 NOV <span class="red">1914</span>', { fs: 100 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 290, w: 1040 });
        const at = S.map({ bounds: [[22, -6], [112, 46]], w: 940 }, { x: 70, y: 420, w: 940, at: 0, d: -0.2, dur: 0.8 });
        const [x1, y1] = at(28.98, 41.0), [x2, y2] = at(102, 4.5);
        S.arrow(x1 + 30, y1 + 10, x2 - 20, y2 - 30, { at: 0.3, color: RED, sw: 10, bend: -0.15, sfx: 'whoosh' });
        S.pin(at, 28.98, 41.0, '<b>Uthmaniyah</b>', { at: 0.15, color: GOLD, size: 1.05, fs: 44 });
        S.pin(at, 102, 4.5, '<b>Tanah Melayu</b>', { at: 0.55, color: RED, size: 1.05, fs: 44, left: true });
        S.stamp('BANGKIT!', { x: 240, y: 1130, w: 600, at: 0.9, d: -0.1, fs: 100, style: 'text-align:center' });
      },
    },
    {
      id: 'tokjanggut', bg: 'dots',
      lines: ['Di Pasir Puteh, Kelantan, **Tok Janggut** bangkit menentang British…', 'demi **agama Islam** dan **hak penduduk** tempatan!'],
      board: {
        name: '20–28 s · Penentangan Tok Janggut (1915)',
        visual: 'Peta kecil Semenanjung dengan penanda merah Pasir Puteh; watak doodle pejuang berjanggut memegang keris; tag "TOK JANGGUT · 1915"; dua kad: AGAMA ISLAM · HAK PENDUDUK.',
        doodle: 'Pejuang berjanggut (ilustrasi), peta, kad.',
        text: 'PASIR PUTEH, KELANTAN · TOK JANGGUT · 1915 · AGAMA ISLAM · HAK PENDUDUK TEMPATAN',
        anim: 'Watak pop; penanda pop; kad meluncur masuk tepat pada sebutan.',
      },
      draw(S, { D }) {
        S.svg(D.person({ hat: 'tengkolok', hatColor: '#FFFDF7', shirt: '#3F5DA8', pants: NAVY, samping: RED, beard: true, prop: 'keris', pose: 'up' }), { x: 90, y: 310, w: 360, at: 0, d: -0.15, dur: 0.6, sfx: 'pop' });
        S.tag('TOK JANGGUT', 'Pasir Puteh · 1915', { x: 110, y: 830, w: 360, at: 0.35 });
        const at = S.map({ bounds: [[99.6, 1.2], [104.6, 6.9]], w: 470 }, { x: 540, y: 330, w: 470, at: 0, d: -0.1, dur: 0.8 });
        S.pin(at, 102.42, 5.83, '<b>Pasir Puteh</b>', { at: 0.15, color: RED, size: 1, fs: 40, left: true });
        S.card(BIG('AGAMA<br><span class="hl">ISLAM</span>', { fs: 64 }), { anim: 'slideL', at: 1, d: 0.05, x: 70, y: 1010, w: 440, rot: -1.5, sfx: 'swish' });
        S.card(BIG('HAK<br><span class="hl">PENDUDUK</span>', { fs: 64 }), { anim: 'slideR', at: 1.45, d: 0, x: 570, y: 1010, w: 440, rot: 1.5, sfx: 'swish' });
      },
    },
    {
      id: 'gagal', bg: 'grid', transition: 'punch',
      lines: ['Tapi penentangan bersenjata itu **gagal**.'],
      board: {
        name: '28–31 s · Kegagalan',
        visual: 'Tajuk "PENENTANGAN BERSENJATA" dengan pedang bersilang; cop merah besar "GAGAL".',
        doodle: 'Pedang bersilang.',
        text: 'PENENTANGAN BERSENJATA · GAGAL',
        anim: 'Cop GAGAL dihentak pada perkataan terakhir.',
      },
      draw(S, { D }) {
        S.add(BIG('PENENTANGAN<br>BERSENJATA', { fs: 100 }), { anim: 'pop', at: 0, d: -0.15, x: 20, y: 320, w: 1040 });
        S.add(D.swords(), { anim: 'pop', at: 0, d: 0.1, x: 390, y: 560, w: 300 });
        S.stamp('GAGAL', { x: 190, y: 900, w: 700, at: 0.7, d: -0.1, fs: 170, style: 'text-align:center' });
      },
    },
    {
      id: 'akhbar', bg: 'lined',
      lines: ['Perjuangan beralih ke **akhbar**… tapi undang-undang British sekat penerbitan!'],
      board: {
        name: '31–36 s · Beralih ke akhbar; undang-undang penerbitan',
        visual: 'Doodle akhbar Melayu lama; dua kad undang-undang: Publishing and Book Enactment 1915 · The Seditious Publication (Prohibition) Enactment 1919.',
        doodle: 'Akhbar, kad.',
        text: 'AKHBAR & MAJALAH · Publishing and Book Enactment 1915 · Seditious Publication (Prohibition) Enactment 1919',
        anim: 'Akhbar pop; kad undang-undang meluncur masuk pada "undang-undang British".',
      },
      draw(S, { D }) {
        S.add(akhbar(D, 'AKHBAR'), { anim: 'pop', at: 0, d: -0.15, x: 330, y: 300, w: 420, rot: -3 });
        S.card('<div class="tw red" style="font-size:30px">1915</div><div class="t-body" style="font-size:40px;line-height:1.1">Publishing and Book Enactment</div>', { anim: 'slideL', at: 0.5, x: 60, y: 870, w: 460, rot: -1.5, pad: '14px 22px', sfx: 'swish' });
        S.card('<div class="tw red" style="font-size:30px">1919</div><div class="t-body" style="font-size:40px;line-height:1.1">Seditious Publication (Prohibition) Enactment</div>', { anim: 'slideR', at: 0.62, x: 560, y: 870, w: 460, rot: 1.5, pad: '14px 22px', sfx: 'swish' });
      },
    },
    {
      id: 'tekukur', bg: 'dots', cam: [1.0, 1.06],
      lines: ['Lalu lahir **Cerita Tekukur**!', 'Tekukur nombor **1874**… nombor **1909**… tarikh negeri Melayu dikuasai British.'],
      board: {
        name: '36–45 s · Pendedahan: Cerita Tekukur (1920)',
        visual: 'Doodle akhbar bertajuk "CERITA TEKUKUR"; label akhbar: Utusan Melayu · Lembaga Melayu · Lidah Teruna · Pengasoh; nombor besar 1874 dan 1909 dicop; nota "tarikh negeri Melayu dikuasai British".',
        doodle: 'Akhbar, cop nombor.',
        text: 'CERITA TEKUKUR (1920) · Utusan Melayu · Lembaga Melayu · Lidah Teruna · Pengasoh · TEKUKUR NO. 1874 · NO. 1909 · tarikh negeri Melayu dikuasai British',
        anim: 'Akhbar pop; nombor dicop tepat pada sebutan; kamera zoom perlahan.',
      },
      draw(S, { D }) {
        S.add(akhbar(D, 'CERITA TEKUKUR', { hs: 36, sub: 'TAHUN 1920' }), { anim: 'pop', at: 0, d: -0.15, x: 60, y: 300, w: 440, rot: -2 });
        S.add('<div class="t-label" style="font-size:44px;line-height:1.25">Utusan Melayu<br>Lembaga Melayu<br>Lidah Teruna<br>Pengasoh</div>', { anim: 'wipe', at: 0, d: 0.3, x: 560, y: 340, w: 460, sfx: false });
        S.stamp('NO. 1874', { x: 540, y: 640, w: 480, at: 1.12, fs: 84, rot: -4, style: 'text-align:center' });
        S.stamp('NO. 1909', { x: 540, y: 800, w: 480, at: 1.45, fs: 84, rot: 4, style: 'text-align:center' });
        S.card('<div class="t-body" style="font-size:52px;text-align:center">= tarikh negeri Melayu <span class="hl">dikuasai British</span></div>', { tear: true, anim: 'slideU', at: 1.7, x: 70, y: 1000, w: 940 });
      },
    },
    {
      id: 'sangkar', bg: 'lined', cam: [1.0, 1.08],
      lines: ['Burung yang dulu bebas… kini terkurung dalam **sangkar emas**!'],
      board: {
        name: '45–50 s · Takeaway: sangkar emas',
        visual: 'Doodle sangkar emas besar; tajuk "SANGKAR EMAS" ditanda kuning; nota "asas perjuangan kemerdekaan".',
        doodle: 'Sangkar emas + tekukur.',
        text: 'BEBAS ➜ SANGKAR EMAS · asas perjuangan kemerdekaan',
        anim: 'Sangkar pop; tajuk ditulis pada "sangkar emas"; kamera zoom 1.08.',
      },
      draw(S, { D }) {
        S.add(BIG('BEBAS <span class="red">➜</span> <span class="hl">SANGKAR EMAS</span>', { fs: 74 }), { anim: 'wipe', at: 0, d: -0.15, dur: 0.6, x: 20, y: 300, w: 1040 });
        S.add(cage(D), { anim: 'pop', at: 0, d: 0, x: 300, y: 430, w: 480 });
        S.tag('SEMANGAT CINTA AKAN NEGARA', 'asas perjuangan kemerdekaan', { x: 240, y: 1110, w: 600, at: 0.7 });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.25, gap: 0.2, tail: 1.0,
      lines: ['Tapi… apa yang cetuskan **Perang Dunia Pertama**? Jawapannya, episod seterusnya!'],
      board: {
        name: 'Akhir · Soalan teaser + jenama rasmi',
        visual: 'Kad soalan kuning di atas; DP rasmi Titik Sejarah (imej asal); TITIK SEJARAH, slogan & follow.',
        doodle: 'Kad soalan, sinar latar.',
        text: 'Apa yang mencetuskan Perang Dunia Pertama? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut.',
        music: 'Sting penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Apa yang mencetuskan <span class="hl">Perang Dunia Pertama</span>?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
