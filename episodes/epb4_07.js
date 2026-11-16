// BAB 4 · EPISOD 07 – Subtopik 4.6: Penyerahan Sabah kepada Kerajaan British (≈ 3 min)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 114–115 (+ Nota T4 Bab 04: 15 Julai 1946).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, NOW, officer, iconRow, numCard, END } from './b4lib.js';

const SABAH = [[115.0, 3.9], [119.5, 7.5]];
const company = (D) => `<svg viewBox="0 0 260 220">${D.R.rect(30, 70, 200, 140, { fill: PAPER })}${D.R.poly([[20, 74], [130, 14], [240, 74]], { fill: NAVY })}${[60, 115, 170].map((x) => D.R.rect(x, 100, 30, 40, { fill: GOLD, strokeWidth: 2 })).join('')}${D.R.rect(110, 160, 40, 50, { fill: RED, strokeWidth: 2 })}<text x="130" y="62" font-family="Marker" font-size="26" fill="${GOLD}" text-anchor="middle">SBUB</text></svg>`;
const ruins = (D) => `<svg viewBox="0 0 240 160">${D.R.path('M20 150 L20 80 L60 60 L70 150 Z', { fill: '#B8BFCC' })}${D.R.path('M90 150 L95 40 L130 70 L140 150 Z', { fill: '#9AA3B5' })}${D.R.path('M160 150 L165 95 L215 85 L220 150 Z', { fill: '#B8BFCC' })}${D.R.line(10, 150, 230, 150, { strokeWidth: 4 })}</svg>`;

export default {
  id: 'b4_07',
  file: '07_Bab4_Subtopik_4.6',
  title: 'Penyerahan Sabah kepada Kerajaan British',
  header: { chip: 'BAB 4 • 4.6', sub: 'Penyerahan Sabah' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.6)',
  music: { key: 62, bpm: 102, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Sarawak bangkit menentang… tetapi di **Sabah**, penyerahan kepada British berlaku **tanpa sebarang penentangan**!', pause: 0.45 },
        'Mengapa Sabah diserahkan? Dan siapakah yang menyerahkannya?',
      ],
      board: {
        name: 'Hook – Sarawak menentang, Sabah tidak',
        visual: 'Frame pertama lengkap: peta Sarawak (label "MENENTANG", pangkah merah) dan peta Sabah (label "TIADA PENENTANGAN", tanda semak); tanda soal; tajuk "SABAH?".',
        doodle: 'Peta Borneo, pangkah, tanda semak, tanda soal.',
        text: 'SARAWAK – menentang · SABAH – tiada penentangan · Mengapa? Siapa?',
        anim: 'Peta & label kelihatan pada 0:00; tanda soal pop pada baris kedua.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('<span class="red">Sabah</span> berbeza?', { size: 'title', x: 40, y: 290, w: 1000, align: 'center', ...NOW, style: 'font-size:96px' });
        const at = S.map({ bounds: [[109.4, 0.7], [119.6, 7.4]], w: 940 }, { ...NOW, x: 70, y: 420, w: 940 });
        const [sx, sy] = at(112.4, 2.4), [bx, by] = at(117.0, 5.4);
        S.card('<div class="t-h3" style="font-size:38px;color:#FFFDF7;text-align:center">SARAWAK<br>menentang</div>', { ...NOW, color: 'red', x: sx - 150, y: sy + 40, w: 300, pad: '8px 10px' });
        S.card('<div class="t-h3" style="font-size:38px;color:#F5C928;text-align:center">SABAH<br>tiada penentangan</div>', { ...NOW, color: 'navy', x: bx - 200, y: by + 120, w: 330, pad: '8px 10px' });
        S.add(D.question(), { anim: 'pop', x: 480, y: 1050, w: 110, at: 1, d: 0.3 });
        S.text('Siapa yang menyerahkan?', { size: 'h3', x: 60, y: 1210, w: 960, align: 'center', at: 1, d: 1.2 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.6: **Penyerahan Sabah** kepada kerajaan British.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.6"; tajuk; peta Sabah dengan tiga bandar.',
        doodle: 'Peta Sabah, penanda.',
        text: 'SUBTOPIK 4.6 · Penyerahan Sabah kepada Kerajaan British',
        anim: 'Tajuk ditulis; peta dilakar.',
      },
      draw(S) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.6</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Penyerahan<br><span class="red">Sabah</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.map({ bounds: SABAH, w: 560 }, { x: 260, y: 700, w: 560, at: 0, d: 0.5, dur: 1.0 });
      },
    },
    {
      id: 'bma', bg: 'grid', transition: 'paper',
      lines: [
        'Selepas Jepun menyerah kalah, **BMA** diperkenalkan di Sabah, diketuai oleh **C.F.C. Macaskie**.',
        'Kota Kinabalu dibebaskan daripada kawalan tentera Jepun pada **28 September 1945**, dan Sandakan pada **19 Oktober 1945**.',
        'BMA berusaha mengembalikan **keamanan** dan **ketenteraman** negeri.',
      ],
      board: {
        name: 'BMA di Sabah',
        visual: 'Tag "C.F.C. MACASKIE · Ketua BMA Sabah" dengan watak pegawai (ILUSTRASI); peta Sabah dengan penanda Kota Kinabalu (28 Sept 1945) dan Sandakan (19 Okt 1945); kad "keamanan & ketenteraman".',
        doodle: 'Watak pegawai, peta, penanda, perisai.',
        text: 'BMA di Sabah – C.F.C. Macaskie · Kota Kinabalu dibebaskan 28 Sept 1945 · Sandakan 19 Okt 1945 · keamanan & ketenteraman',
        anim: 'Watak & tag pop; peta dilakar; penanda pop pada nama bandar; kad meluncur.',
      },
      draw(S, { D }) {
        S.text('BMA di <span class="red">Sabah</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.illus({ x: 60, y: 380, at: 0, d: 0 });
        S.svg(officer(D, { pose: 'point' }), { x: 60, y: 410, w: 170, at: 0, d: 0.3, dur: 0.6 });
        S.tag('C.F.C. MACASKIE', 'Ketua BMA Sabah', { x: 240, y: 450, w: 380, at: 0, d: 0.6 });
        const at = S.map({ bounds: SABAH, w: 380 }, { x: 640, y: 380, w: 380, at: 1, d: -0.2, dur: 0.8 });
        S.pin(at, 116.07, 5.98, '<b>1</b>', { at: 1, d: 0.2, color: RED, fs: 40, left: true });
        S.pin(at, 118.07, 5.84, '<b>2</b>', { at: 1, d: 0.6, color: RED, fs: 40, left: true });
        S.card('<div class="t-body" style="font-size:40px"><b class="red">1</b> · Kota Kinabalu dibebaskan: <b>28 Sept 1945</b></div>', { anim: 'slideL', x: 60, y: 760, w: 960, at: 1, d: 0.3, notape: true, pad: '10px 20px' });
        S.card('<div class="t-body" style="font-size:40px"><b class="red">2</b> · Sandakan dibebaskan: <b>19 Okt 1945</b></div>', { anim: 'slideL', x: 60, y: 870, w: 960, at: 1, d: 0.65, notape: true, pad: '10px 20px' });
        S.add(iconRow(fmt, D.shield(), 'Kembalikan **keamanan** & **ketenteraman**', { fs: 44, iw: 110, pad: '12px 20px' }), { anim: 'slideU', x: 60, y: 1010, w: 960, at: 2, d: 0.1, sfx: 'swish' });
      },
    },
    {
      id: 'sbub', transition: 'flip',
      lines: [
        'Sebelum perang, Sabah ditadbir oleh **Syarikat Borneo Utara British**, atau SBUB.',
        'Pada **26 Jun 1946**, SBUB menandatangani perjanjian dengan kerajaan British. Pada **15 Julai 1946**, Sabah menjadi **tanah jajahan British**.',
        'Sabah ditadbir oleh seorang **Gabenor**, sebagai Ketua Kerajaan. Gabenor British yang pertama ialah **Sir Edward Twining**.',
      ],
      board: {
        name: 'SBUB menyerahkan Sabah',
        visual: 'Bangunan syarikat "SBUB" ➜ dokumen perjanjian 26 Jun 1946 ➜ cop "TANAH JAJAHAN · 15 JULAI 1946"; tag Gabenor pertama Sir Edward Twining.',
        doodle: 'Bangunan syarikat, dokumen perjanjian, watak Gabenor (ILUSTRASI), cop.',
        text: 'SBUB (Syarikat Borneo Utara British) · 26 Jun 1946 – perjanjian dengan British · 15 Julai 1946 – Sabah tanah jajahan British · Gabenor = Ketua Kerajaan · Gabenor pertama: Sir Edward Twining',
        anim: 'Bangunan pop; anak panah dilukis; dokumen pop pada tarikh; cop dihentak; tag Gabenor pop.',
      },
      draw(S, { D }) {
        S.text('Siapa menyerahkan? <span class="hl">SBUB</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add(company(D), { anim: 'pop', x: 60, y: 390, w: 280, at: 0, d: 0.1 });
        S.text('Syarikat Borneo<br>Utara British', { size: 'label', x: 40, y: 640, w: 320, align: 'center', at: 0, d: 0.4 });
        S.arrow(360, 500, 520, 500, { at: 1, d: 0, color: RED, sw: 10, bend: -0.1 });
        S.svg(D.treaty('1946'), { x: 540, y: 380, w: 200, at: 1, d: 0.1 });
        S.text('26 Jun 1946', { size: 'h3', x: 760, y: 470, w: 280, at: 1, d: 0.2 });
        S.stamp('TANAH JAJAHAN · 15 JULAI 1946', { x: 40, y: 760, w: 1000, at: 1, d: 0.75, fs: 50, style: 'text-align:center;white-space:nowrap' });
        S.illus({ x: 60, y: 920, at: 2, d: 0 });
        S.svg(officer(D, { pose: 'present' }), { x: 80, y: 950, w: 170, at: 2, d: 0.1, dur: 0.6 });
        S.tag('SIR EDWARD TWINING', 'Gabenor British pertama di Sabah', { x: 280, y: 1000, w: 600, at: 2, d: 0.6 });
        S.card('<div class="t-body" style="font-size:36px">Gabenor = <b>Ketua Kerajaan</b></div>', { anim: 'pop', x: 280, y: 1120, w: 500, at: 2, d: 0.25, notape: true, pad: '8px 16px' });
      },
    },
    {
      id: 'faktor1', bg: 'grid', transition: 'paper',
      lines: [
        'Mengapa Sabah diserahkan? Faktor pertama: **memenuhi kepentingan British**.',
        'Perdana Menteri Britain, **Clement Attlee**, sedang menyelesaikan soal kemerdekaan **Sri Lanka**, **India** dan **Burma**.',
        'Sabah berpotensi menggantikan jajahan tersebut, sebagai sumber **bahan mentah** dan **kawasan pasaran** bagi barangan British.',
      ],
      board: {
        name: 'Faktor 1: Kepentingan British',
        visual: 'Pil "FAKTOR 1"; tag Clement Attlee; tiga label negara (Sri Lanka, India, Burma) dengan anak panah keluar "MERDEKA"; Sabah sebagai pengganti dengan dua ikon: bahan mentah (pokok/kayu balak) & pasaran (gerai).',
        doodle: 'Glob, label negara, pokok, gerai pasar.',
        text: 'FAKTOR 1 · Kepentingan British · PM Clement Attlee: kemerdekaan Sri Lanka, India, Burma · Sabah ganti jajahan: bahan mentah & kawasan pasaran',
        anim: 'Pil pop; label negara pop; anak panah dilukis; ikon Sabah pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">FAKTOR 1</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: 0.4 });
        S.text('Kepentingan <span class="hl">British</span>', { size: 'title', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0.6 });
        S.tag('CLEMENT ATTLEE', 'Perdana Menteri Britain', { x: 60, y: 540, w: 460, at: 1, d: 0.05 });
        S.svg(D.globe(), { x: 820, y: 500, w: 180, at: 1, d: 0.2 });
        [['SRI LANKA', 0.6], ['INDIA', 0.72], ['BURMA', 0.82]].forEach(([n, f], i) => S.card(`<div class="t-h3" style="font-size:40px;text-align:center">${n}</div>`, { anim: 'pop', x: 60 + i * 250, y: 680, w: 230, at: 1 + f, notape: true, pad: '10px 8px', rot: i % 2 ? 2 : -2 }));
        S.text('➜ merdeka', { size: 'label', x: 790, y: 700, w: 230, at: 1, d: 2.6, style: 'color:#C93436' });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">SABAH = pengganti</div>', { color: 'navy', anim: 'slideU', x: 60, y: 850, w: 960, at: 2, d: 0.1 });
        S.add(iconRow(fmt, D.padi(), '**Bahan mentah**', { fs: 44, iw: 120 }), { anim: 'slideL', x: 60, y: 1010, w: 470, at: 2, d: 0.5, sfx: 'swish' });
        S.add(iconRow(fmt, D.market(), '**Kawasan pasaran**', { fs: 44, iw: 120 }), { anim: 'slideR', x: 550, y: 1010, w: 470, at: 2, d: 0.8, sfx: 'swish' });
      },
    },
    {
      id: 'faktor2', transition: 'slideUp',
      lines: [
        'Faktor kedua: **meneruskan dasar British dalam hubungan luar**.',
        'Semasa pemerintahan SBUB, Sabah ialah **negeri naungan** British. British sudah menguasai **hubungan luar** dan **pertahanan** Sabah.',
      ],
      board: {
        name: 'Faktor 2: Dasar hubungan luar',
        visual: 'Pil "FAKTOR 2"; kad "NEGERI NAUNGAN (zaman SBUB)"; dua ikon dikuasai British: glob (hubungan luar) dan perisai (pertahanan).',
        doodle: 'Glob, perisai.',
        text: 'FAKTOR 2 · Teruskan dasar British dalam hubungan luar · Zaman SBUB: negeri naungan · British kuasai hubungan luar & pertahanan',
        anim: 'Pil pop; kad pop; ikon pop pada perkataannya.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">FAKTOR 2</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: -0.2 });
        S.text('Dasar <span class="hl">Hubungan Luar</span>', { size: 'title', x: 40, y: 380, w: 1000, align: 'center', at: 0, d: 0.1, style: 'font-size:78px' });
        S.card('<div class="t-h3" style="text-align:center">Zaman SBUB: <span class="red">NEGERI NAUNGAN</span> British</div>', { color: 'gold', anim: 'pop', x: 60, y: 560, w: 960, at: 1, d: 0.1 });
        S.text('British sudah menguasai…', { size: 'label', x: 60, y: 740, w: 960, align: 'center', at: 1, d: 0.5 });
        S.add(iconRow(fmt, D.globe(), '**Hubungan luar**', { fs: 48, iw: 140, pad: '14px 20px' }), { anim: 'slideL', x: 60, y: 830, w: 470, at: 1, d: 0.7, sfx: 'swish' });
        S.add(iconRow(fmt, D.shield(), '**Pertahanan**', { fs: 48, iw: 140, pad: '14px 20px' }), { anim: 'slideR', x: 550, y: 830, w: 470, at: 1, d: 0.88, sfx: 'swish' });
      },
    },
    {
      id: 'faktor3', bg: 'grid', transition: 'paper',
      lines: [
        'Faktor ketiga: **masalah kewangan SBUB**.',
        'Sebelum berundur, tentera Jepun memusnahkan **Jesselton**, **Kudat** dan **Sandakan**.',
        'Kos membangunkan semula Sabah terlalu besar. SBUB **tidak mampu** menanggungnya, lalu bersetuju menyerahkan Sabah kepada British.',
      ],
      board: {
        name: 'Faktor 3: Masalah kewangan SBUB',
        visual: 'Pil "FAKTOR 3"; peta Sabah dengan tiga penanda runtuhan (Jesselton, Kudat, Sandakan); syiling dipangkah; cop "TIDAK MAMPU".',
        doodle: 'Peta, runtuhan bangunan, syiling, pangkah, cop.',
        text: 'FAKTOR 3 · Kewangan SBUB · Jepun musnahkan Jesselton, Kudat, Sandakan · Kos pembangunan semula besar · SBUB tidak mampu ➜ serah Sabah',
        anim: 'Penanda pop tepat pada nama bandar; runtuhan dilukis; cop dihentak.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">FAKTOR 3</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: -0.2 });
        S.text('Kewangan <span class="hl">SBUB</span>', { size: 'title', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0.1 });
        const at = S.map({ bounds: SABAH, w: 520 }, { x: 40, y: 540, w: 540, at: 1, d: -0.2, dur: 0.8 });
        S.pin(at, 116.07, 5.98, '<b>Jesselton</b>', { at: 1, d: 0.35, color: RED, fs: 32, left: true });
        S.pin(at, 116.84, 6.88, '<b>Kudat</b>', { at: 1, d: 0.55, color: RED, fs: 32 });
        S.pin(at, 118.07, 5.84, '<b>Sandakan</b>', { at: 1, d: 0.75, color: RED, fs: 32, left: true });
        S.add(ruins(D), { anim: 'pop', x: 620, y: 560, w: 380, at: 1, d: 0.9 });
        S.text('dimusnahkan Jepun', { size: 'note', x: 620, y: 830, w: 380, align: 'center', at: 1, d: 1.0 });
        S.add(D.coins(), { anim: 'pop', x: 640, y: 900, w: 170, at: 2, d: 0.3 });
        S.add(D.cross(), { anim: 'stamp', x: 680, y: 900, w: 100, at: 2, d: 0.45 });
        S.stamp('TIDAK MAMPU', { x: 60, y: 1010, w: 560, at: 2, d: 0.5, fs: 64, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:36px">➜ serah Sabah kepada <b>British</b></div>', { anim: 'pop', x: 620, y: 1100, w: 400, at: 2, d: 0.85, notape: true, pad: '8px 16px' });
      },
    },
    {
      id: 'banding', transition: 'flip',
      lines: [
        'Bandingkan: Sarawak diserahkan oleh **Vyner Brooke**, manakala Sabah diserahkan oleh **SBUB**.',
        'Rakyat Sarawak bangkit menentang… tetapi Sabah tidak. Mengapa?',
      ],
      board: {
        name: 'Perbandingan Sarawak & Sabah',
        visual: 'Jadual dua lajur: SARAWAK (Vyner Brooke · 1 Julai 1946 · menentang) dan SABAH (SBUB · 15 Julai 1946 · tiada penentangan); tanda soal besar.',
        doodle: 'Jadual tulisan tangan, tanda soal.',
        text: 'SARAWAK – Vyner Brooke – 1 Julai 1946 – menentang · SABAH – SBUB – 15 Julai 1946 – tiada penentangan · Mengapa?',
        anim: 'Lajur meluncur masuk; baris jadual muncul; tanda soal pop.',
      },
      draw(S, { D }) {
        S.text('Bandingkan', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
        const col = (x, name, who, date, react, color, f) => S.card(`<div class="t-h2" style="text-align:center;color:${color}">${name}</div><div class="t-body" style="font-size:42px;text-align:center">oleh <b>${who}</b></div><div class="tw red" style="font-size:28px;text-align:center">${date}</div><div class="t-h3" style="font-size:42px;text-align:center;margin-top:10px">${react}</div>`, { anim: 'slideU', x, y: 450, w: 460, at: f });
        col(60, 'SARAWAK', 'Vyner Brooke', '1 JULAI 1946', '<span class="hl">Menentang</span>', RED, 0.2);
        col(560, 'SABAH', 'SBUB', '15 JULAI 1946', 'Tiada penentangan', NAVY, 0.6);
        S.add(D.question(), { anim: 'pop', x: 480, y: 900, w: 130, at: 1, d: 1.6 });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Kenali sejarah, fahami masa kini. Seterusnya: **reaksi penduduk Sabah**, dan mengapa tiada penentangan!',
      ],
      tail: 0.8,
      board: {
        name: 'Episod seterusnya',
        visual: 'Maskot dan kad episod seterusnya.',
        doodle: 'Pelekat maskot, anak panah.',
        text: 'Seterusnya: 4.7 Reaksi terhadap penyerahan Sabah',
        anim: 'Maskot pop; anak panah dilukis; kad pop.',
      },
      draw(S) {
        S.text('Jom <span class="hl">teruskan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">4.7 Reaksi terhadap Penyerahan Sabah</div>', { x: 520, y: 920, w: 480, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
