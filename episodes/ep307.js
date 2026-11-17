// BAB 3 · EPISOD 07 – Subtopik 3.6: Dasar Pendudukan Jepun di Negara Kita (≈ 5.5 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 70–73 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END, banknote, riceBowl, train, flagJP, soldier, quizScenes } from './bab3.js';

const MY = [[95, -6], [120, 8.5]];

function school(D) {
  const R = D.R;
  let s = R.rect(30, 90, 260, 140, { fill: '#FFFDF7' }) + R.poly([[16, 96], [160, 20], [304, 96]], { fill: '#C93436' });
  s += R.rect(140, 160, 40, 70, { fill: '#172C63' }) + R.rect(56, 120, 50, 40, { fill: '#DCE3EE', strokeWidth: 2 }) + R.rect(214, 120, 50, 40, { fill: '#DCE3EE', strokeWidth: 2 });
  s += R.line(160, 20, 160, -30, { strokeWidth: 4 }) + R.rect(160, -30, 60, 36, { fill: '#FFFFFF', strokeWidth: 2.5 }) + R.circle(190, -12, 20, { fill: '#C93436', stroke: '#C93436' });
  return `<svg viewBox="0 -40 320 280" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

export default {
  id: '307',
  file: '07_Bab3_Subtopik_3.6',
  title: 'Dasar Pendudukan Jepun di Negara Kita',
  header: { chip: 'BAB 3 • 3.6', sub: 'Dasar Pendudukan Jepun' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.6)',
  ...CH1,
  music: { key: 57, bpm: 100, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Wang kertas dicetak tanpa kawalan, sehingga harga barang melambung tinggi.', pause: 0.4 },
        'Inilah **wang pokok pisang**, kisah hidup rakyat semasa pendudukan Jepun!',
      ],
      board: { name: 'Hook – wang pokok pisang', visual: 'Frame pertama lengkap: tajuk "WANG POKOK PISANG", timbunan wang kertas bergambar pokok pisang, anak panah harga naik; cop "INFLASI!" pada ayat kedua.', doodle: 'Wang kertas (ilustrasi), anak panah naik, cop.', text: 'WANG POKOK PISANG · harga naik · INFLASI!', anim: 'Elemen utama pada 0:00; cop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('WANG<br><span class="hl">POKOK PISANG</span>', { fs: 110 }), { ...NOW, x: 20, y: 290, w: 1040 });
        [0, 1, 2].forEach((i) => S.add(banknote(D, '10', { tree: true, label: 'ILUSTRASI' }), { ...NOW, x: 80 + i * 40, y: 620 + i * 60, w: 420, rot: -8 + i * 6 }));
        S.add(D.arrow(20, 280, 260, 20, { w: 300, h: 300, color: RED, sw: 14, bend: -0.1 }), { ...NOW, x: 640, y: 580, w: 300 });
        S.text('harga<br>naik!', { ...NOW, size: 'h3', x: 700, y: 900, w: 300, align: 'center' });
        S.stamp('INFLASI!', { x: 300, y: 1080, w: 480, at: 1, d: 0.3, fs: 96, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.6: **Dasar Pendudukan Jepun di Negara Kita**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.6", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.6 · Dasar Pendudukan Jepun di Negara Kita', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.6', 'Dasar Pendudukan<br><span class="red">Jepun</span> di Negara Kita', { fs: 76, uy: 650, my: 720 }); },
    },
    {
      id: 'tiga-dasar', bg: 'grid', transition: 'paper',
      lines: ['Jepun memperkenalkan **pemerintahan tentera**, berdasarkan dasar Panglima Agung Japanese Southern Army, yang meliputi tiga aspek: **pentadbiran**, **ekonomi** dan **sosial**.'],
      board: { name: 'Tiga dasar pendudukan', visual: 'Kad "PEMERINTAHAN TENTERA"; tiga kad warna: PENTADBIRAN, EKONOMI, SOSIAL.', doodle: 'Askar, kad.', text: 'PEMERINTAHAN TENTERA (Panglima Agung Japanese Southern Army) · A Pentadbiran · B Ekonomi · C Sosial', anim: 'Kad pop mengikut sebutan.' },
      draw(S, { D }) {
        S.svg(soldier(D), { x: 80, y: 300, w: 200, at: 0, d: 0 });
        S.card('<div class="t-h3" style="font-size:48px">PEMERINTAHAN TENTERA</div><div class="t-body" style="font-size:32px">dasar Panglima Agung Japanese Southern Army</div>', { anim: 'slideR', x: 300, y: 340, w: 720, at: 0, d: 0.4, rot: 1 });
        [['A', 'PENTADBIRAN', NAVY, 0.7], ['B', 'EKONOMI', RED, 0.82], ['C', 'SOSIAL', GOLD, 0.92]].forEach(([l, t, c, f], i) => S.card(`<div style="display:flex;align-items:center;gap:24px"><div style="width:110px;height:110px;border-radius:50%;background:${c};border:5px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:60px;color:${c === GOLD ? NAVY : '#F5C928'}">${l}</div><div class="t-h2">${t}</div></div>`, { anim: 'slideL', x: 120, y: 640 + i * 220, w: 840, at: f, rot: i % 2 ? 1 : -1 }));
      },
    },
    {
      id: 'kawasan', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Dari segi **pentadbiran**, Tanah Melayu pada awalnya digabungkan dengan Sumatera sebagai Kawasan Pertahanan Khas, di bawah tentera ke-25 yang berpusat di Singapura.', pause: 0.3 },
        'Pada April 1944, kedua-duanya diasingkan: Sumatera kekal di bawah tentera ke-25 di Bukit Tinggi, manakala Tanah Melayu di bawah tentera ke-29 di **Taiping**.',
      ],
      board: { name: 'A. Pentadbiran: Tanah Melayu & Sumatera', visual: 'Peta: Tanah Melayu + Sumatera dibulatkan bersama (tentera ke-25, Singapura); kemudian dua bulatan berasingan: tentera ke-25 Bukit Tinggi & tentera ke-29 Taiping (Apr 1944).', doodle: 'Peta, bulatan, penanda.', text: 'Awal: Tanah Melayu + Sumatera = Kawasan Pertahanan Khas (tentera ke-25, pusat Singapura) · Apr 1944: Sumatera – tentera ke-25 (Bukit Tinggi) · Tanah Melayu – tentera ke-29 (Taiping)', anim: 'Penanda pop mengikut sebutan.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:38px">A · PENTADBIRAN</span>', { anim: 'pop', x: 70, y: 290, w: 500, at: 0, d: -0.2 });
        const at = S.map({ bounds: [[94.5, -6.5], [106, 7.5]], w: 620 }, { x: 60, y: 380, w: 620, at: 0, d: 0, dur: 1.0 });
        S.pin(at, 103.82, 1.35, '<b>Singapura</b>', { at: 0, d: 3.6, color: GOLD, size: 0.9, fs: 30 });
        S.card('<div class="t-label red">Awal</div><div class="t-body" style="font-size:34px;line-height:1.15">Tanah Melayu + Sumatera<br><b>tentera ke-25</b> · Singapura</div>', { anim: 'slideR', x: 700, y: 400, w: 320, at: 0, d: 2.0, pad: '12px 18px' });
        S.pin(at, 100.37, -0.3, '<b>Bukit Tinggi</b>', { at: 1, d: 3.0, color: NAVY, size: 0.9, fs: 30, left: true });
        S.pin(at, 100.74, 4.85, '<b>Taiping</b>', { at: 1, d: 5.4, color: RED, size: 1, fs: 34, left: true });
        S.card('<div class="t-label red">April 1944</div><div class="t-body" style="font-size:32px;line-height:1.15">Sumatera: <b>ke-25</b> (Bukit Tinggi)<br>Tanah Melayu: <b>ke-29</b> (Taiping)</div>', { color: 'gold', anim: 'slideR', x: 700, y: 760, w: 320, at: 1, d: 0.6, pad: '12px 18px' });
      },
    },
    {
      id: 'nama', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Singapura dinamakan **Syonan-to**, dan Tanah Melayu dinamakan **Malai Baru**.', pause: 0.25 },
        { text: 'Perlis, Kedah, Kelantan dan Terengganu pula diserahkan kepada **Thailand**.', pause: 0.25 },
        'Sarawak, Sabah dan Brunei digabungkan sebagai **Kita Boruneo**, di bawah tentera ke-37 di Kuching.',
      ],
      board: { name: 'Nama baharu & pembahagian wilayah', visual: 'Kad nama: Syonan-to, Malai Baru, Kita Boruneo; kad 4 negeri ➜ Thailand.', doodle: 'Kad label, anak panah.', text: 'Singapura = SYONAN-TO · Tanah Melayu = MALAI BARU · Perlis, Kedah, Kelantan, Terengganu ➜ Thailand · Sarawak + Sabah + Brunei = KITA BORUNEO (tentera ke-37, Kuching)', anim: 'Kad muncul mengikut sebutan.' },
      draw(S) {
        head(S, 'Nama <span class="hl">Baharu</span>');
        rows(S, [
          ['SYONAN-TO', '= **Singapura**', 0.15],
          ['MALAI BARU', '= **Tanah Melayu**', 0.6],
          ['THAILAND', '⬅ Perlis · Kedah · Kelantan · Terengganu', 1.1],
          ['KITA BORUNEO', '= Sarawak + Sabah + Brunei (tentera ke-37, **Kuching**)', 2.3],
        ], { y0: 410, gap: 220, bw: 280, fs: 40 });
      },
    },
    {
      id: 'kempeitai', bg: 'dots', transition: 'zoom',
      lines: ['Jepun turut menubuhkan **Kempeitai**, polis tentera yang ganas dan kejam. Sesiapa yang disyaki menentang Jepun akan diseksa dan dibunuh.'],
      board: { name: 'Kempeitai', visual: 'Kad gelap "KEMPEITAI" dengan askar; cop "GANAS & KEJAM".', doodle: 'Askar, cop.', text: 'KEMPEITAI = polis tentera Jepun · ganas & kejam · seksa & bunuh sesiapa disyaki menentang', anim: 'Kad pop; cop pada "ganas dan kejam".' },
      draw(S, { D }) {
        S.card('<div class="t-title" style="text-align:center;color:#F5C928">KEMPEITAI</div><div class="t-body" style="text-align:center;color:#FFFDF7">polis tentera Jepun</div>', { color: 'navy', anim: 'pop', x: 100, y: 320, w: 880, at: 0, d: 0 });
        S.svg(soldier(D, '#C9B98A'), { x: 150, y: 620, w: 230, at: 0, d: 0.4 });
        S.svg(soldier(D, '#C9B98A', { pose: 'point' }), { x: 380, y: 640, w: 210, at: 0, d: 0.6, sfx: false });
        S.stamp('GANAS &amp; KEJAM', { x: 560, y: 740, w: 460, at: 0.35, fs: 52, rot: -6, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:40px;text-align:center">Disyaki menentang ➜ <span class="hl">diseksa &amp; dibunuh</span></div>', { anim: 'slideU', x: 80, y: 1060, w: 920, at: 0.6 });
      },
    },
    {
      id: 'raja-pemimpin', bg: 'lined', transition: 'paper',
      lines: [
        { text: '**Raja-raja Melayu** diiktiraf sebagai ketua agama Islam dan adat Melayu, serta diberi pencen, tetapi kuasa mereka diawasi oleh Gabenor Jepun.', pause: 0.3 },
        'Pemimpin tempatan yang berpendidikan pula dinaikkan pangkat, dan **Koa Kunrenjo** ditubuhkan untuk melatih pemimpin muda mendukung cita-cita Jepun.',
      ],
      board: { name: 'Raja-raja Melayu & pemimpin tempatan', visual: 'Kad Raja-raja Melayu (mahkota) dengan mata Gabenor Jepun; kad Koa Kunrenjo (Institut Latihan Pemimpin-pemimpin Muda).', doodle: 'Mahkota, mata, kad.', text: 'Raja-raja Melayu: ketua agama Islam & adat Melayu · diberi pencen · diawasi Gabenor Jepun (persidangan Raja-raja, Singapura, Jan 1943) · pemimpin tempatan berpendidikan dinaikkan pangkat · KOA KUNRENJO (Institut Latihan Pemimpin-pemimpin Muda)', anim: 'Kad muncul mengikut narasi.' },
      draw(S, { D }) {
        S.svg(D.crown(), { x: 70, y: 300, w: 200, at: 0, d: 0 });
        S.card('<div class="t-h3" style="font-size:46px">Raja-raja Melayu</div><div class="t-body" style="font-size:34px;line-height:1.15">• ketua <b>agama Islam &amp; adat Melayu</b><br>• diberi <b>pencen</b><br>• <span class="hl">diawasi Gabenor Jepun</span></div>', { anim: 'slideR', x: 300, y: 300, w: 720, at: 0, d: 0.4, rot: 1 });
        S.card('<div class="t-label red">Melatih pemimpin muda</div><div class="t-h2" style="font-size:58px">KOA KUNRENJO</div><div class="t-body" style="font-size:32px">Institut Latihan Pemimpin-pemimpin Muda</div>', { color: 'gold', anim: 'slideU', x: 80, y: 780, w: 920, at: 1, d: 0.4 });
      },
    },
    {
      id: 'ekonomi-kawalan', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Dari segi **ekonomi**, Jepun memperkenalkan sistem ekonomi kawalan, seperti Rancangan Pengeluaran Lima Tahun dan Rancangan Perindustrian Lima Tahun.', pause: 0.3 },
        'Mata wang Jepun, yang dikenali sebagai **wang pokok pisang**, menggantikan mata wang British. Ia dicetak tanpa kawalan, lalu berlakunya **inflasi**.',
      ],
      board: { name: 'B. Ekonomi: ekonomi kawalan & wang pokok pisang', visual: 'Pil B · EKONOMI; dua kad rancangan lima tahun; wang pokok pisang (ilustrasi) ➜ cop INFLASI.', doodle: 'Wang kertas, cop.', text: 'Ekonomi kawalan: Rancangan Pengeluaran Lima Tahun (+ Jawatankuasa Penyelidikan Bahan) · Rancangan Perindustrian Lima Tahun · wang pokok pisang ganti mata wang British · dicetak tanpa kawalan ➜ INFLASI', anim: 'Kad muncul; wang bertimbun; cop.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">B · EKONOMI</span>', { anim: 'pop', x: 70, y: 290, w: 500, at: 0, d: -0.2 });
        S.card('<div class="t-body" style="font-size:38px">Rancangan <b>Pengeluaran</b> Lima Tahun</div>', { anim: 'slideL', x: 60, y: 390, w: 470, at: 0, d: 2.6, rot: -1, pad: '12px 20px' });
        S.card('<div class="t-body" style="font-size:38px">Rancangan <b>Perindustrian</b> Lima Tahun</div>', { anim: 'slideR', x: 550, y: 390, w: 470, at: 0, d: 4.0, rot: 1, pad: '12px 20px' });
        [0, 1, 2, 3].forEach((i) => S.add(banknote(D, '10', { tree: true, label: 'ILUSTRASI' }), { anim: 'pop', x: 90 + i * 30, y: 640 + i * 50, w: 380, rot: -10 + i * 6, at: 1, d: 0.6 + i * 0.25, sfx: i ? false : 'pop' }));
        S.card('<div class="t-h3" style="text-align:center">“wang pokok pisang”</div><div class="t-body" style="font-size:34px;text-align:center">ganti mata wang British</div>', { anim: 'slideR', x: 560, y: 650, w: 460, at: 1, d: 1.2 });
        S.stamp('INFLASI!', { x: 560, y: 880, w: 460, at: 1.9, fs: 90, style: 'text-align:center' });
      },
    },
    {
      id: 'catuan', bg: 'dots', transition: 'paper',
      lines: [
        { text: 'Makanan menjadi terhad. Beras, garam dan gula **dicatu** menggunakan kad catuan, dan Jepun melancarkan kempen **Tambah Lebih Banyak Makanan**.', pause: 0.3 },
        'Rakyat menjadi kreatif dan berdikari. Contohnya, mereka membuat **tempe daripada biji getah**!',
      ],
      board: { name: 'Catuan makanan & kreativiti rakyat', visual: 'Kad catuan dengan tiga petak (beras, garam, gula); mangkuk nasi; poster kempen; biji getah ➜ tempe.', doodle: 'Kad catuan, mangkuk nasi, biji getah.', text: 'Ordinan Kawalan Barangan dan Bahan Penting · catuan beras, garam, gula (kad catuan) · kempen "Tambah Lebih Banyak Makanan" · tempe daripada biji getah', anim: 'Petak catuan ditanda; kempen pop; biji getah ➜ tempe.' },
      draw(S, { D }) {
        S.card('<div class="tw red" style="font-size:28px;text-align:center">KAD CATUAN</div><div style="display:flex;justify-content:space-around;margin-top:10px">' + ['BERAS', 'GARAM', 'GULA'].map((t) => `<div style="border:4px dashed #172C63;padding:18px 14px;font-family:Marker;font-size:38px">${t}</div>`).join('') + '</div>', { anim: 'pop', x: 80, y: 300, w: 640, at: 0, d: 0.8, rot: -2 });
        S.add(riceBowl(D), { anim: 'pop', x: 760, y: 320, w: 250, at: 0, d: 1.4 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">“Tambah Lebih Banyak Makanan”</div>', { color: 'red', anim: 'slideU', x: 80, y: 620, w: 920, at: 0, d: 5.4 });
        S.add('<svg viewBox="0 0 160 120"><ellipse cx="50" cy="60" rx="36" ry="28" fill="#C27B3A" stroke="#172C63" stroke-width="5"/><ellipse cx="110" cy="66" rx="30" ry="24" fill="#8A5A2B" stroke="#172C63" stroke-width="5"/></svg>', { anim: 'pop', x: 110, y: 860, w: 220, at: 1, d: 1.2 });
        S.arrow(350, 920, 470, 920, { at: 1, d: 1.8, color: RED });
        S.card('<div class="t-h3" style="text-align:center">TEMPE<br><span style="font-size:34px">daripada biji getah!</span></div>', { color: 'gold', anim: 'stamp', x: 500, y: 830, w: 480, at: 1, d: 2.4 });
      },
    },
    {
      id: 'buruh', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Paling menyayat hati ialah **buruh paksa**. Jepun membina **Landasan Kereta Api Maut**, sepanjang 415 kilometer, dari Thailand ke Burma.', pause: 0.3 },
        'Kira-kira dua ratus ribu buruh paksa, atau **romusha**, dan enam puluh ribu tawanan perang dikerahkan. Ramai yang terkorban.',
      ],
      board: { name: 'Buruh paksa: Landasan Kereta Api Maut', visual: 'Keretapi di atas landasan; kad "415 KM · THAILAND–BURMA"; angka 200 ribu romusha & 60 ribu tawanan perang; cop "RAMAI TERKORBAN".', doodle: 'Keretapi, landasan, cop.', text: 'LANDASAN KERETA API MAUT · 415 km · Thailand–Burma · 200 ribu buruh paksa (romusha) + 60 ribu tawanan perang · ramai terkorban', anim: 'Keretapi meluncur; angka pop; cop.' },
      draw(S, { D }) {
        S.text('Landasan Kereta Api <span class="red">Maut</span>', { size: 'h2', x: 60, y: 300, w: 960, align: 'center', at: 0, d: 2.0 });
        S.add(train(D), { anim: 'slideR', x: 200, y: 420, w: 680, at: 0, d: 2.4, sfx: 'whoosh' });
        S.card('<div class="t-h3" style="text-align:center">415 KM · Thailand – Burma</div>', { anim: 'slideU', x: 160, y: 820, w: 760, at: 0, d: 4.2 });
        S.card('<div class="t-big" style="font-size:70px;text-align:center;color:#C93436">200 ribu</div><div class="t-body" style="text-align:center;font-size:36px">buruh paksa (romusha)</div>', { anim: 'pop', x: 60, y: 980, w: 470, at: 1, d: 0.6, rot: -1 });
        S.card('<div class="t-big" style="font-size:70px;text-align:center;color:#172C63">60 ribu</div><div class="t-body" style="text-align:center;font-size:36px">tawanan perang</div>', { anim: 'pop', x: 550, y: 980, w: 470, at: 1, d: 2.6, rot: 1 });
        S.stamp('RAMAI TERKORBAN', { x: 140, y: 1200, w: 800, at: 1.85, fs: 64, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'pendidikan', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Dari segi **sosial**, sekolah Inggeris dan Cina ditutup.', pause: 0.25 },
        { text: 'Sekolah Jepun menerapkan **Hakko Ichiu**, iaitu persaudaraan sejagat, serta **Nippon Seishin**, iaitu semangat Jepun, dan taat kepada Maharaja.', pause: 0.25 },
        'Bahasa Jepun, atau **Nippon Go**, dijadikan lingua franca. Setiap pagi, murid berhimpun menghadap ke arah Jepun dan menyanyikan lagu **Kimigayo**.',
      ],
      board: { name: 'C. Sosial: pendidikan', visual: 'Pil C · SOSIAL; sekolah dengan bendera Jepun; sekolah Inggeris & Cina dipangkah; kad Hakko Ichiu, Nippon Seishin, Nippon Go, Kimigayo.', doodle: 'Sekolah, bendera, palang, kad.', text: 'Sekolah Inggeris & Cina ditutup · Hakko Ichiu (persaudaraan sejagat) · Nippon Seishin (semangat Jepun) · hormat Maharaja (Tenno Heika) · Nippon Go = lingua franca · perhimpunan pagi menghadap Jepun · lagu Kimigayo', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px">C · SOSIAL</span>', { anim: 'pop', x: 70, y: 290, w: 400, at: 0, d: -0.2 });
        S.svg(school(D), { x: 620, y: 290, w: 380, at: 0, d: 0.2 });
        S.card('<div class="t-body" style="font-size:36px">Sekolah <b>Inggeris</b> &amp; <b>Cina</b></div>', { anim: 'slideL', x: 60, y: 400, w: 520, at: 0, d: 0.6, pad: '12px 20px' });
        S.add(D.cross(), { anim: 'stamp', x: 470, y: 380, w: 100, at: 0, d: 1.6, sfx: 'stamp' });
        [['HAKKO ICHIU', 'persaudaraan sejagat', 1.25], ['NIPPON SEISHIN', 'semangat Jepun · taat Maharaja', 1.6], ['NIPPON GO', 'lingua franca', 2.25], ['KIMIGAYO', 'perhimpunan pagi menghadap Jepun', 2.75]].forEach(([h, b, at], i) => S.card(`<div class="t-h3" style="font-size:40px">${h}</div><div class="t-body" style="font-size:30px;line-height:1.1">${b}</div>`, { anim: i % 2 ? 'slideR' : 'slideL', x: i % 2 ? 550 : 60, y: 650 + Math.floor(i / 2) * 250, w: 470, at, rot: i % 2 ? 1 : -1, pad: '12px 18px', sfx: 'swish' }));
      },
    },
    {
      id: 'agama', bg: 'dots', transition: 'paper',
      lines: [
        { text: 'Dalam aspek **agama**, Jepun menghormati Islam dan adat Melayu. Kelas al-Quran dan sekolah agama diteruskan, dan Majlis Agama Negeri dibentuk.', pause: 0.25 },
        'Namun, pegawai agama dan masjid turut **dimanipulasi** untuk menyebarkan propaganda Jepun.',
      ],
      board: { name: 'C. Sosial: agama', visual: 'Kad hijau "dihormati": kelas al-Quran, sekolah agama, Majlis Agama Negeri; kad merah "NAMUN: dimanipulasi untuk propaganda".', doodle: 'Tanda semak, kad.', text: 'Hormati Islam & adat Melayu · kelas al-Quran & sekolah agama diteruskan · Majlis Agama Negeri dibentuk · NAMUN pegawai agama & masjid dimanipulasi untuk propaganda', anim: 'Kad muncul mengikut narasi.' },
      draw(S, { D }) {
        head(S, 'Agama');
        rows(S, [['✓', 'Hormati **Islam** &amp; **adat Melayu**', 0.12], ['✓', 'Kelas **al-Quran** &amp; sekolah agama diteruskan', 0.45], ['✓', '**Majlis Agama Negeri** dibentuk', 0.8]], { y0: 410, gap: 160, bw: 100, fs: 40 });
        S.card('<div class="t-label" style="color:#F5C928">NAMUN</div><div class="t-h3" style="color:#FFFDF7;font-size:44px">Pegawai agama &amp; masjid dimanipulasi untuk propaganda</div>', { color: 'red', anim: 'stamp', x: 80, y: 920, w: 920, at: 1, d: 0.3 });
      },
    },
    {
      id: 'kaum', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Layanan Jepun terhadap setiap kaum juga **berbeza**.', pause: 0.25 },
        { text: 'Orang Melayu dan peribumi dilayan dengan baik, untuk mendapatkan sokongan.', pause: 0.2 },
        { text: 'Orang India dibantu menubuhkan **Tentera Kebangsaan India**, pimpinan Subhas Chandra Bose.', pause: 0.2 },
        'Orang Cina pula dilayan dengan **kejam**, akibat Perang China-Jepun, dan dipaksa membayar wang hukuman.',
      ],
      board: { name: 'Layanan terhadap kaum', visual: 'Tiga kad kaum: Melayu & peribumi (layanan baik), India (Tentera Kebangsaan India, Subhas Chandra Bose), Cina (kejam, wang hukuman).', doodle: 'Watak, kad.', text: 'Melayu & peribumi: layanan baik (dapatkan sokongan) · India: Tentera Kebangsaan India (Subhas Chandra Bose) · Cina: kejam (Perang China-Jepun); bayar wang hukuman', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        head(S, 'Layanan <span class="hl">Berbeza</span>');
        rows(S, [
          ['MELAYU', '&amp; peribumi: **layanan baik**, untuk dapat sokongan', 1, '#3A8A4A'],
          ['INDIA', 'dibantu tubuh **Tentera Kebangsaan India** (Subhas Chandra Bose)', 2, NAVY],
          ['CINA', '**layanan kejam** (Perang China-Jepun); bayar wang hukuman', 3, RED],
        ], { y0: 420, gap: 260, bw: 230, fs: 40 });
      },
    },
    {
      id: 'ketahanan', bg: 'grid', transition: 'paper',
      lines: ['Pengalaman pahit ini diabadikan dalam novel **Nyawa di-hujong Pedang**, karya Ahmad Murad Nasaruddin. Ia membentuk **ketahanan fizikal dan mental** rakyat kita.'],
      board: { name: 'Nyawa di-hujong Pedang & ketahanan rakyat', visual: 'Buku "NYAWA DI-HUJONG PEDANG"; kad "ketahanan fizikal & mental".', doodle: 'Buku, hati.', text: 'Novel "Nyawa di-hujong Pedang" (Ahmad Murad Nasaruddin) – pemuda Melayu diseksa Kempeitai · pendudukan Jepun membentuk ketahanan fizikal & mental', anim: 'Buku dilukis; kad pop.' },
      draw(S, { D }) {
        S.svg(D.book('NOVEL', RED, { size: 34 }), { x: 90, y: 330, w: 330, at: 0, d: 0 });
        S.card('<div class="t-label red">Novel</div><div class="t-h3" style="font-size:46px">Nyawa di-hujong Pedang</div><div class="t-body" style="font-size:34px">Ahmad Murad Nasaruddin</div>', { anim: 'slideR', x: 450, y: 380, w: 570, at: 0, d: 0.3, rot: 1 });
        S.add(D.heart(), { anim: 'pop', x: 140, y: 900, w: 170, at: 0, d: 4.6 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">KETAHANAN FIZIKAL &amp; MENTAL</div>', { color: 'navy', anim: 'stamp', x: 340, y: 900, w: 680, at: 0, d: 5.0 });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, dasar pendudukan Jepun meliputi **pentadbiran**, **ekonomi** dan **sosial**, dan ia membawa penderitaan yang besar kepada rakyat.', pause: 0.25 },
        { text: 'Namun, rakyat tidak berdiam diri.', pause: 0.35 },
        'Seterusnya, kita kaji **perjuangan rakyat menentang pendudukan Jepun**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.7.', doodle: 'Pil, maskot.', text: 'Kempeitai · Syonan-to · Wang pokok pisang · Catuan · Romusha · Nippon Go · Seterusnya: 3.7 Perjuangan Rakyat Menentang Jepun', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Kempeitai', 0.2], ['Syonan-to', 0.3], ['Wang pisang', 0.45], ['Catuan', 0.55], ['Romusha', 0.65], ['Nippon Go', 0.75]],
          ['PENTADBIRAN · EKONOMI · SOSIAL', 0.6], ['3.7 Perjuangan Menentang Jepun', 2]);
      },
    },
    // End-of-episode quiz on this subtopic (rule: every subtopic episode ends with a quiz).
    ...quizScenes([
      { q: "Apakah nama yang diberikan oleh Jepun kepada Singapura?", opts: ["Malai Baru", "Syonan-to", "Kita Boruneo"], a: "Syonan-to" },
      { q: "Mengapakah berlaku inflasi semasa pendudukan Jepun?", opts: ["Wang dicetak tanpa kawalan", "Cukai dihapuskan", "Perdagangan dengan British"], a: "Wang dicetak tanpa kawalan", say: "wang pokok pisang dicetak tanpa kawalan" },
      { q: "Landasan Kereta Api Maut dibina dari Thailand ke negara mana?", opts: ["Burma", "Singapura", "Kemboja"], a: "Burma" },
    ]),
    END,
  ],
};
