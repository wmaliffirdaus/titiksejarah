// BAB 3 · EPISOD 01 – Pengenalan: Konflik Dunia dan Pendudukan Jepun di Negara Kita (≈ 1–1.5 min)
// Chapter 1 long-form format; facts: Buku Teks Sejarah Tingkatan 4 KSSM Bab 3 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, NOW, CH1, head, rows, END, plane } from './bab3.js';

export default {
  id: '301',
  file: '01_Bab3_Introduction',
  title: 'Bab 3 – Konflik Dunia dan Pendudukan Jepun di Negara Kita',
  header: { chip: 'BAB 3 • INTRO', sub: 'Konflik Dunia & Jepun' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3',
  ...CH1,
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Pada 8 Disember 1941, tentera Jepun mendarat di Pantai Kuala Pak Amat, Kota Bharu.', pause: 0.45 },
        'Kurang daripada tiga bulan kemudian, seluruh Tanah Melayu jatuh ke tangan Jepun. Bagaimana ini boleh berlaku?',
      ],
      board: {
        name: 'Hook – Jepun mendarat di Kota Bharu',
        visual: 'Frame pertama lengkap: tajuk "8 DISEMBER 1941", peta lakaran Semenanjung dengan penanda Kota Bharu dan kapal terbang. Penanda Singapura + cop "15 FEB 1942" pada ayat kedua.',
        doodle: 'Peta tulisan tangan, kapal terbang, penanda, cop merah.',
        text: '8 DISEMBER 1941 · Pantai Kuala Pak Amat, Kota Bharu · 15 FEB 1942: seluruh Tanah Melayu jatuh',
        anim: 'Elemen utama kelihatan pada 0:00; penanda Singapura & cop pop pada ayat kedua; tanda soal pop.',
        music: 'Whoosh pembuka; muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('8 DISEMBER <span class="red">1941</span>', { ...NOW, size: 'title', x: 40, y: 290, w: 1000, align: 'center' });
        const at = S.map({ bounds: [[99.4, 0.9], [104.9, 6.9]], w: 640 }, { ...NOW, x: 220, y: 420, w: 640 });
        S.pin(at, 102.24, 6.13, '<b>Kota Bharu</b>', { ...NOW, color: RED, size: 1.1, fs: 42, left: true });
        S.add(plane(D), { ...NOW, x: 700, y: 400, w: 300, rot: 12 });
        S.pin(at, 103.82, 1.35, '<b>Singapura</b>', { at: 1, d: 0.2, color: GOLD, size: 1.05, fs: 40 });
        S.stamp('15 FEB 1942', { x: 520, y: 1090, w: 480, at: 1, d: 0.6, fs: 70, style: 'text-align:center;white-space:nowrap' });
        S.add(D.question(), { anim: 'pop', x: 110, y: 1040, w: 110, at: 1, d: 3.6 });
      },
    },
    {
      id: 'title', transition: 'wipe',
      lines: ['Ini **Titik Sejarah**! Bab 3 Sejarah Tingkatan 4: **Konflik Dunia dan Pendudukan Jepun di Negara Kita**.'],
      board: {
        name: 'Tajuk bab & maskot',
        visual: 'Kad tajuk bab gaya buku nota; maskot rasmi dengan belon kata.',
        doodle: 'Pil "BAB 3", garis bawah merah, pelekat maskot (imej asal).',
        text: 'BAB 3 · KONFLIK DUNIA DAN PENDUDUKAN JEPUN DI NEGARA KITA · Sejarah Tingkatan 4 KSSM',
        anim: 'Pil pop; tajuk ditulis; garis bawah dilukis; maskot & belon kata pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">BAB 3</span></div>', { anim: 'pop', x: 40, y: 320, w: 1000, at: 0, d: -0.3 });
        S.text('KONFLIK DUNIA<br>&amp; PENDUDUKAN <span class="red">JEPUN</span><br>DI NEGARA KITA', { size: 'title', x: 40, y: 410, w: 1000, align: 'center', at: 0, d: 0.3, dur: 1.4, style: 'font-size:76px' });
        S.svg(D.underline(560), { x: 260, y: 700, w: 560, at: 0, d: 1.5, dur: 0.6 });
        S.text('Sejarah Tingkatan 4 • KSSM', { size: 'label', x: 60, y: 740, w: 960, align: 'center', at: 0.5 });
        S.mascot({ x: 90, y: 830, w: 330, at: 0.55, say: 'Jom kenali kisah <b class="red">perang</b> yang mengubah negara kita!', bx: 450, by: 880, bw: 520 });
      },
    },
    {
      id: 'garis-masa', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Dalam bab ini, kita jejaki dua perang dunia: **Perang Dunia Pertama**, dari 1914 hingga 1918,', pause: 0.15 },
        { text: 'dan **Perang Dunia Kedua**, dari 1939 hingga 1945.', pause: 0.35 },
        'Kita juga akan melihat bagaimana **Jepun menduduki negara kita** selama lebih tiga tahun.',
      ],
      board: {
        name: 'Garis masa bab: dua perang dunia & pendudukan Jepun',
        visual: 'Garis masa lakaran 1910–1950: blok merah PD1 (1914–1918), blok navy PD2 (1939–1945), blok kuning Pendudukan Jepun (1942–1945).',
        doodle: 'Garis masa tangan, blok berwarna, kapal terbang kecil.',
        text: 'PERANG DUNIA PERTAMA 1914–1918 · PERANG DUNIA KEDUA 1939–1945 · PENDUDUKAN JEPUN 15 Feb 1942 – 12 Sept 1945',
        anim: 'Garis masa dilukis; setiap blok muncul tepat pada sebutan.',
      },
      draw(S, { D }) {
        head(S, 'Garis Masa <span class="hl">Bab 3</span>');
        const X = (y) => 90 + (y - 1910) * 22.5;   // 1910→90, 1950→990
        S.add(`<svg viewBox="0 0 1000 120"><line x1="40" y1="60" x2="960" y2="60" stroke="${NAVY}" stroke-width="6" stroke-linecap="round"/>${[1910, 1920, 1930, 1940, 1950].map((y) => `<line x1="${X(y) - 50}" y1="44" x2="${X(y) - 50}" y2="76" stroke="${NAVY}" stroke-width="5"/>`).join('')}</svg>`, { anim: 'wipe', x: 50, y: 780, w: 1000, at: 0, d: 0, dur: 1.0, sfx: 'pencil' });
        [1910, 1920, 1930, 1940, 1950].forEach((y) => S.text(String(y), { size: 'label', x: X(y) - 60, y: 870, w: 120, align: 'center', at: 0, d: 0.5, style: 'font-size:38px' }));
        const block = (a, b, col, txtCol, label, y, at, d) => S.add(`<div style="height:120px;background:${col};border:5px solid ${NAVY};border-radius:16px;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:30px;line-height:1.05;text-align:center;color:${txtCol}">${label}</div>`, { anim: 'pop', x: X(a), y, w: Math.max(150, (b - a) * 22.5), at, d });
        block(1914, 1918, RED, '#FFFDF7', 'PD1<br>1914–1918', 640, 0, 1.6);
        block(1939, 1945, NAVY, GOLD, 'PD2<br>1939–1945', 640, 1, 0.6);
        block(1942, 1945.7, GOLD, NAVY, 'JEPUN<br>1942–1945', 960, 2, 0.8);
        S.add(plane(D), { anim: 'slideR', x: 640, y: 420, w: 260, at: 1, d: 0.2, rot: -6 });
        S.card('<div class="t-body" style="font-size:40px;text-align:center">Pendudukan Jepun: <b>15 Feb 1942 – 12 Sept 1945</b></div>', { anim: 'slideU', x: 90, y: 1130, w: 900, at: 2, d: 1.6 });
      },
    },
    {
      id: 'penting', transition: 'flip',
      lines: [
        { text: 'Kenapa bab ini penting? Ia menunjukkan **penderitaan rakyat** semasa perang,', pause: 0.15 },
        { text: '**keberanian** rakyat pelbagai kaum menentang Jepun,', pause: 0.15 },
        'dan bagaimana semangat **nasionalisme** semakin membara.',
      ],
      board: {
        name: 'Kenapa penting?',
        visual: 'Tajuk "Kenapa PENTING?" dengan mentol; tiga kad bernombor.',
        doodle: 'Mentol, kad bernombor, bintang.',
        text: '1 Penderitaan rakyat · 2 Keberanian pelbagai kaum · 3 Nasionalisme membara',
        anim: 'Kad meluncur masuk satu demi satu mengikut narasi.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">PENTING</span>?', { size: 'title', x: 80, y: 330, w: 720, style: 'font-size:76px', at: 0, d: -0.2 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 190, at: 0, d: 0.4 });
        const card = (n, txt, y, at, color) => S.card(`<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:96px;color:${color}">${n}</div><div class="t-body">${txt}</div></div>`, { anim: 'slideL', x: 90, y, w: 880, at });
        card(1, '<span class="hl">Penderitaan rakyat</span> semasa perang', 520, 0.45, RED);
        card(2, '<span class="hl">Keberanian</span> rakyat pelbagai kaum', 760, 1.05, NAVY);
        card(3, 'Semangat <span class="hl">nasionalisme</span> membara', 1000, 2.1, RED);
        S.add(D.star(), { anim: 'pop', x: 860, y: 990, w: 110, at: 2.5, pulse: [2.6] });
      },
    },
    {
      id: 'subtopik', bg: 'grid', transition: 'slideUp', gap: 0.25,
      lines: [
        'Ada sembilan subtopik.',
        { text: '3.1 hingga 3.4: nasionalisme sebelum perang, dan dua perang dunia.', pause: 0.25 },
        { text: '3.5 hingga 3.7: kedatangan Jepun, dasar pendudukannya, dan perjuangan rakyat menentangnya.', pause: 0.25 },
        '3.8 dan 3.9: perkembangan nasionalisme tempatan, dan keadaan negara kita selepas Jepun kalah.',
      ],
      board: {
        name: 'Sembilan subtopik',
        visual: 'Senarai bernombor 3.1–3.9 muncul dalam tiga kumpulan mengikut narasi.',
        doodle: 'Bulatan nombor, kad nota.',
        text: '3.1 Nasionalisme sebelum Perang Dunia · 3.2 Latar belakang Perang Dunia · 3.3 Perang Dunia Kedua · 3.4 PD2 di Asia Pasifik · 3.5 Faktor kedatangan Jepun · 3.6 Dasar pendudukan Jepun · 3.7 Perjuangan menentang Jepun · 3.8 Nasionalisme tempatan · 3.9 Selepas kekalahan Jepun',
        anim: 'Baris pop berkumpulan.',
      },
      draw(S) {
        head(S, '9 SUBTOPIK', { y: 285 });
        const T = ['Nasionalisme sebelum Perang Dunia', 'Latar Belakang Perang Dunia', 'Perang Dunia Kedua', 'PD2 di Asia Pasifik', 'Faktor kedatangan Jepun', 'Dasar pendudukan Jepun', 'Perjuangan menentang Jepun', 'Nasionalisme tempatan', 'Selepas kekalahan Jepun'];
        const grp = [1, 1, 1, 1, 2, 2, 2, 3, 3];
        rows(S, T.map((t, i) => [`3.${i + 1}`, t, grp[i] + (i - grp.indexOf(grp[i])) * 0.12]), { y0: 385, gap: 106, bw: 100, fs: 34 });
      },
    },
    {
      id: 'penutup', transition: 'paper',
      lines: ['Jom kita mulakan dengan kisah **nasionalisme** di negara kita, sebelum Perang Dunia!'],
      tail: 0.9,
      board: {
        name: 'Penutup & episod seterusnya',
        visual: 'Tajuk "Jom mulakan!", maskot besar, anak panah ke kad "Episod seterusnya: 3.1".',
        doodle: 'Maskot, anak panah merah, kad.',
        text: 'Jom mulakan! · Episod seterusnya: 3.1 Nasionalisme di Negara Kita Sebelum Perang Dunia',
        anim: 'Tajuk ditulis; maskot pop; anak panah dilukis; kad pop.',
      },
      draw(S, { D }) {
        S.text('Jom <span class="hl">mulakan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0, d: -0.2 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.1 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.6, color: RED, bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Episod seterusnya</div><div class="t-h3">3.1 Nasionalisme Sebelum Perang Dunia</div>', { x: 500, y: 920, w: 500, at: 0, d: 0.8 });
      },
    },
    END,
  ],
};
