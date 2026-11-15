// BAB 3 · EPISOD 04 – Subtopik 3.3: Perang Dunia Kedua (di Eropah) (≈ 4.5 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 58–63 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END, tank, plane, bomb, soldier } from './bab3.js';

const EU = [[-11, 36], [50, 61]];
const C = { berlin: [13.4, 52.5], warsaw: [21.0, 52.2], london: [-0.13, 51.5], paris: [2.35, 48.86], roma: [12.5, 41.9], leningrad: [30.3, 59.9], moskva: [37.6, 55.75], stalingrad: [44.5, 48.7], normandy: [-0.6, 49.3], calais: [1.86, 50.95], oslo: [10.75, 59.9], copen: [12.57, 55.68], amsterdam: [4.9, 52.37], brussels: [4.35, 50.85], lux: [6.13, 49.61] };

export default {
  id: '304',
  file: '04_Bab3_Subtopik_3.3',
  title: 'Perang Dunia Kedua',
  header: { chip: 'BAB 3 • 3.3', sub: 'Perang Dunia Kedua' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.3)',
  ...CH1,
  music: { key: 57, bpm: 102, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Kira-kira dua puluh tahun selepas Perang Dunia Pertama tamat, dunia sekali lagi dilanda perang.', pause: 0.4 },
        'Kali ini lebih besar, lebih dahsyat, dan merebak hingga ke negara kita!',
      ],
      board: { name: 'Hook – perang sekali lagi', visual: 'Frame pertama lengkap: tajuk "1939: PERANG LAGI!", kereta kebal, kapal terbang, bom; cop "LEBIH DAHSYAT!" pada ayat kedua.', doodle: 'Kereta kebal, kapal terbang, bom, cop.', text: '1939 · PERANG LAGI! · LEBIH DAHSYAT!', anim: 'Elemen utama pada 0:00; cop pop pada ayat kedua.', music: 'Whoosh pembuka; muzik bermula.' },
      draw(S, { D }) {
        S.add(BIG('<span class="red">1939</span><br>PERANG LAGI!', { fs: 120 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(plane(D), { ...NOW, x: 560, y: 600, w: 440, rot: -10 });
        S.add(bomb(D), { ...NOW, x: 450, y: 700, w: 90 });
        S.add(tank(D), { ...NOW, x: 70, y: 820, w: 480 });
        S.stamp('LEBIH DAHSYAT!', { x: 200, y: 1100, w: 680, at: 1, d: 0.6, fs: 84, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.3: **Perang Dunia Kedua**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.3", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.3 · Perang Dunia Kedua', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.3', 'Perang Dunia<br><span class="red">Kedua</span>', { fs: 96, uy: 670, my: 740 }); },
    },
    {
      id: 'dua-medan', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Perang Dunia Kedua berlaku dari tahun 1939 hingga 1945, di dua medan: **Eropah**, termasuk utara Afrika, dan **Asia Pasifik**.', pause: 0.3 },
        '**Kuasa Paksi**, iaitu Jerman, Itali dan Jepun, berdepan dengan **Kuasa Bersekutu**, iaitu Britain, Amerika Syarikat, Perancis dan Rusia.',
      ],
      board: { name: 'Dua medan & dua pihak', visual: 'Dua kad medan (Eropah + utara Afrika, Asia Pasifik); kad Kuasa Paksi lawan Kuasa Bersekutu.', doodle: 'Glob, VS, kad.', text: 'PD2 1939–1945 · medan: Eropah (+ utara Afrika) & Asia Pasifik · KUASA PAKSI: Jerman, Itali, Jepun · KUASA BERSEKUTU: Britain, AS, Perancis, Rusia', anim: 'Kad medan pop; kad pihak meluncur pada ayat kedua.' },
      draw(S, { D }) {
        head(S, '2 Medan, <span class="hl">2 Pihak</span>');
        S.svg(D.globe(), { x: 440, y: 390, w: 200, at: 0, d: 0.3 });
        S.card('<div class="t-h3" style="text-align:center">EROPAH<br><span style="font-size:32px">+ utara Afrika</span></div>', { anim: 'slideL', x: 60, y: 410, w: 360, at: 0, d: 2.6, rot: -1.5 });
        S.card('<div class="t-h3" style="text-align:center">ASIA<br>PASIFIK</div>', { anim: 'slideR', x: 660, y: 410, w: 360, at: 0, d: 4.8, rot: 1.5 });
        S.card('<div class="t-h3" style="text-align:center">KUASA PAKSI</div><div class="t-body" style="font-size:38px;text-align:center">Jerman · Itali · Jepun</div>', { color: 'gold', anim: 'slideL', x: 40, y: 720, w: 440, at: 1, d: 0, rot: -1 });
        S.add(D.vs(), { anim: 'pop', x: 480, y: 900, w: 120, at: 1, d: 1.6, z: 5 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">KUASA BERSEKUTU</div><div class="t-body" style="font-size:36px;text-align:center;color:#FFFDF7">Britain · AS · Perancis · Rusia</div>', { color: 'red', anim: 'slideR', x: 600, y: 720, w: 440, at: 1, d: 2.2, rot: 1 });
      },
    },
    {
      id: 'ideologi', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Apakah puncanya? Faktor pertama, **kemunculan ideologi baharu**.', pause: 0.3 },
        { text: '**Fasisme** di Itali: Benito Mussolini berkuasa pada tahun 1922, mengutamakan kepentingan negara melebihi individu, dan menguasai Habsyah serta Albania.', pause: 0.3 },
        '**Nazisme** di Jerman: Adolf Hitler membentuk kerajaan pada tahun 1933, mengagungkan bangsa Jerman, mengetepikan Perjanjian Versailles, membina semula tentera dan menduduki Rhineland.',
      ],
      board: { name: 'Faktor 1: ideologi baharu', visual: 'Dua kad besar: FASISME (Itali, Mussolini 1922) & NAZISME (Jerman, Hitler 1933) dengan poin ringkas.', doodle: 'Kad, peta mini.', text: 'FAKTOR 1 · FASISME: Mussolini, Itali 1922 · negara > individu · nasionalisme melampau · kuasai Habsyah (Ethiopia) & Albania · NAZISME: Hitler, Jerman 1933 · agungkan bangsa Jerman · ketepikan Versailles · bina semula tentera · duduki Rhineland', anim: 'Kad meluncur mengikut sebutan.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 1</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Ideologi <span class="hl">Baharu</span>', { size: 'h2', x: 480, y: 300, w: 540, at: 0, d: 0.4 });
        duo(S, ['FASISME', '<b class="red">Itali · Mussolini (1922)</b><br>• negara &gt; individu<br>• nasionalisme melampau<br>• kuasai Habsyah (Ethiopia) &amp; Albania', 1],
          ['NAZISME', '<b class="red">Jerman · Hitler (1933)</b><br>• agungkan bangsa Jerman<br>• ketepikan Versailles<br>• bina semula tentera<br>• duduki Rhineland', 2], { y: 420, fs: 36 });
      },
    },
    {
      id: 'versailles', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Faktor kedua, **ketidakpuasan hati terhadap Perjanjian Versailles**.', pause: 0.3 },
        { text: 'Jerman menganggapnya tidak adil: kehilangan tanah jajahan dan pampasan yang tinggi membawa kepada **kemelesetan dan inflasi**.', pause: 0.25 },
        'Itali pula tidak berpuas hati kerana tidak mendapat tanah jajahan baharu.',
      ],
      board: { name: 'Faktor 2: tidak puas hati dengan Versailles', visual: 'Dokumen Versailles bercop TIDAK ADIL; anak panah: hilang tanah jajahan + pampasan tinggi ➜ kemelesetan & inflasi; kad Itali.', doodle: 'Dokumen, cop, syiling, anak panah ke bawah.', text: 'FAKTOR 2 · Jerman: tidak adil · hilang tanah jajahan + pampasan tinggi ➜ kemelesetan & inflasi · Itali: tiada tanah jajahan baharu', anim: 'Cop TIDAK ADIL; rantai sebab; kad Itali.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 2</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Tidak Puas Hati: <span class="hl">Versailles</span>', { size: 'h3', x: 70, y: 380, w: 940, at: 0, d: 0.3, style: 'font-size:54px' });
        S.svg(D.treaty('1919'), { x: 80, y: 480, w: 230, at: 0, d: 1.0 });
        S.stamp('TIDAK ADIL!', { x: 40, y: 790, w: 320, at: 1, d: 0.6, fs: 56, rot: -10, style: 'white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:38px"><b class="red">JERMAN:</b> hilang tanah jajahan + pampasan tinggi</div>', { anim: 'slideR', x: 380, y: 480, w: 640, at: 1, d: 1.0, rot: 1 });
        S.arrow(700, 630, 700, 700, { at: 1, d: 2.6, color: RED });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">KEMELESETAN &amp; INFLASI</div>', { color: 'navy', anim: 'stamp', x: 380, y: 710, w: 640, at: 1, d: 3.4 });
        S.svg(D.coins(), { x: 120, y: 900, w: 150, at: 1, d: 3.8 });
        S.card('<div class="t-body" style="font-size:38px"><b class="red">ITALI:</b> tidak dapat tanah jajahan baharu</div>', { anim: 'slideU', x: 300, y: 960, w: 720, at: 2, d: 0, rot: -1 });
      },
    },
    {
      id: 'liga', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Faktor ketiga, **kegagalan Liga Bangsa-Bangsa** menguatkuasakan pelucutan senjata dan menangani pencerobohan.', pause: 0.3 },
        { text: 'Contohnya, Krisis Manchuria, apabila Jepun menakluki Manchuria;', pause: 0.15 },
        { text: 'Perjanjian Pelucutan Senjata, apabila Jerman keluar dan membesarkan tenteranya;', pause: 0.15 },
        'dan Krisis Habsyah, apabila Itali menyerang Habsyah.',
      ],
      board: { name: 'Faktor 3: kegagalan Liga Bangsa-Bangsa', visual: 'Glob dengan palang merah "GAGAL"; tiga baris contoh bertarikh.', doodle: 'Glob, palang, kad.', text: 'FAKTOR 3 · Liga Bangsa-Bangsa GAGAL · Krisis Manchuria 1931–1933 (Jepun) · Perjanjian Pelucutan Senjata 1932–1934 (Jerman keluar) · Krisis Habsyah 1935–1936 (Itali)', anim: 'Glob & palang; baris muncul mengikut narasi.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 3</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Liga Bangsa-Bangsa <span class="hl">Gagal</span>', { size: 'h3', x: 70, y: 380, w: 760, at: 0, d: 0.3, style: 'font-size:54px' });
        S.svg(D.globe(), { x: 840, y: 290, w: 170, at: 0, d: 0.5 });
        S.add(D.cross(), { anim: 'stamp', x: 870, y: 320, w: 110, at: 0, d: 1.4, sfx: 'stamp' });
        rows(S, [
          ['1931–33', '**Krisis Manchuria**: Jepun takluk Manchuria', 1],
          ['1932–34', '**Pelucutan Senjata**: Jerman keluar, besarkan tentera', 2],
          ['1935–36', '**Krisis Habsyah**: Itali serang Habsyah', 3],
        ], { y0: 520, gap: 230, bw: 230, fs: 40 });
      },
    },
    {
      id: 'poland', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Perang meletus apabila **Jerman menyerang Poland** pada September 1939.', pause: 0.25 },
        'Britain dan Perancis segera mengisytiharkan perang terhadap Jerman.',
      ],
      board: { name: 'Perang meletus: Jerman serang Poland (Sept 1939)', visual: 'Peta Eropah: anak panah merah Jerman ➜ Poland; cop SEPT 1939; penanda Britain & Perancis.', doodle: 'Peta, anak panah, cop.', text: 'SEPT 1939 · Jerman serang Poland · Britain & Perancis isytihar perang ke atas Jerman', anim: 'Peta dilakar; anak panah dilukis; cop; penanda pop pada ayat kedua.' },
      draw(S) {
        const at = S.map({ bounds: EU, w: 940 }, { x: 70, y: 300, w: 940, at: 0, d: -0.2, dur: 1.0 });
        const [x1, y1] = at(...C.berlin), [x2, y2] = at(...C.warsaw);
        S.pin(at, ...C.berlin, '<b>Jerman</b>', { at: 0, d: 0.6, color: GOLD, size: 0.9, fs: 32 });
        S.arrow(x1 + 10, y1, x2, y2, { at: 0, d: 1.2, color: RED, sw: 12 });
        S.pin(at, ...C.warsaw, '<b>Poland</b>', { at: 0, d: 1.4, color: RED, size: 0.9, fs: 32 });
        S.stamp('SEPT 1939', { x: 560, y: 1000, w: 420, at: 0, d: 2.2, fs: 76, style: 'text-align:center;white-space:nowrap' });
        S.pin(at, ...C.london, '<b>Britain</b>', { at: 1, d: 0, color: NAVY, size: 0.9, fs: 32, left: true });
        S.pin(at, ...C.paris, '<b>Perancis</b>', { at: 1, d: 0.4, color: NAVY, size: 0.9, fs: 32, left: true });
      },
    },
    {
      id: 'blitzkrieg', bg: 'grid', transition: 'zoom',
      lines: [
        { text: 'Jerman menggunakan strategi **Blitzkrieg**, iaitu serangan kilat: pengeboman udara, diikuti kereta kebal dan tentera bermotosikal.', pause: 0.3 },
        'Jerman menawan Poland, Denmark, Norway, Belanda, Belgium, Luxembourg dan Perancis, dan menguasai hampir seluruh **Eropah Barat** menjelang pertengahan tahun 1941.',
      ],
      board: { name: 'Blitzkrieg (serangan kilat)', visual: 'Rantai 3 langkah: kapal terbang ➜ kereta kebal ➜ tentera; senarai negara ditawan dengan cop.', doodle: 'Kapal terbang, kereta kebal, askar, anak panah.', text: 'BLITZKRIEG = serangan kilat: pengeboman udara ➜ kereta kebal ➜ tentera bermotosikal · ditawan: Poland, Denmark, Norway, Belanda, Belgium, Luxembourg, Perancis · hampir seluruh Eropah Barat (pertengahan 1941)', anim: 'Ikon muncul mengikut sebutan; negara dicop satu demi satu.' },
      draw(S, { D }) {
        S.text('<span class="hl">BLITZKRIEG</span> <span style="font-size:44px">= serangan kilat</span>', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: -0.2 });
        S.add(plane(D), { anim: 'slideR', x: 60, y: 420, w: 280, at: 0, d: 2.6, sfx: 'whoosh' });
        S.arrow(350, 480, 400, 480, { at: 0, d: 3.4, color: RED });
        S.add(tank(D), { anim: 'slideR', x: 400, y: 410, w: 280, at: 0, d: 4.2, sfx: 'swish' });
        S.arrow(690, 480, 740, 480, { at: 0, d: 4.8, color: RED });
        S.svg(soldier(D), { x: 760, y: 390, w: 160, at: 0, d: 5.4 });
        S.text('udara', { size: 'label', x: 60, y: 600, w: 280, align: 'center', at: 0, d: 2.8 });
        S.text('kereta kebal', { size: 'label', x: 400, y: 600, w: 280, align: 'center', at: 0, d: 4.4 });
        S.text('tentera', { size: 'label', x: 740, y: 650, w: 220, align: 'center', at: 0, d: 5.6 });
        ['Poland', 'Denmark', 'Norway', 'Belanda', 'Belgium', 'Luxembourg', 'Perancis'].forEach((n, i) => S.add(`<span class="pill" style="font-size:34px;background:${i === 6 ? '#C93436' : '#FFFDF7'};color:${i === 6 ? '#FFFDF7' : '#172C63'}">${n}</span>`, { anim: 'stamp', x: 60 + (i % 3) * 330, y: 760 + Math.floor(i / 3) * 95, w: 330, at: 1, d: 0.3 + i * 0.45, sfx: 'stamp' }));
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Hampir seluruh EROPAH BARAT · 1941</div>', { color: 'navy', anim: 'slideU', x: 60, y: 1070, w: 960, at: 1.8 });
      },
    },
    {
      id: 'britain-itali', bg: 'dots', transition: 'paper',
      lines: [
        { text: 'Jerman turut mengebom Britain dari September 1940 hingga Jun 1941, menjejaskan ekonomi Britain.', pause: 0.25 },
        'Pada Jun 1940, Itali pula mengisytiharkan perang terhadap Britain dan Perancis.',
      ],
      board: { name: 'Pengeboman Britain & Itali sertai perang', visual: 'Kapal terbang & bom di atas peta Britain; kad tarikh; kad Itali Jun 1940.', doodle: 'Kapal terbang, bom, kad.', text: 'Pengeboman Britain: Sept 1940 – Jun 1941 ➜ ekonomi Britain terjejas · Jun 1940: Itali isytihar perang ke atas Britain & Perancis', anim: 'Bom jatuh; kad muncul mengikut narasi.' },
      draw(S, { D }) {
        head(S, 'Serangan <span class="hl">Bertambah</span>');
        S.add(plane(D), { anim: 'slideR', x: 120, y: 410, w: 380, at: 0, d: 0, sfx: 'whoosh', rot: 6 });
        [0, 1, 2].forEach((i) => S.add(bomb(D), { anim: 'slideD', x: 200 + i * 90, y: 560 + (i % 2) * 40, w: 60, at: 0, d: 0.6 + i * 0.3, sfx: false }));
        S.card('<div class="t-label red">Sept 1940 – Jun 1941</div><div class="t-h3" style="font-size:44px">Pengeboman Britain</div><div class="t-body" style="font-size:36px">ekonomi Britain terjejas</div>', { anim: 'slideR', x: 520, y: 430, w: 500, at: 0, d: 1.2, rot: 1 });
        S.card('<div class="t-label red">Jun 1940</div><div class="t-h3" style="font-size:46px">ITALI isytihar perang ke atas Britain &amp; Perancis</div>', { color: 'gold', anim: 'slideU', x: 70, y: 860, w: 940, at: 1, d: 0, rot: -1 });
      },
    },
    {
      id: 'barbarossa', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Kemudian, Jerman melancarkan **Operasi Barbarossa**, serangan besar-besaran untuk menawan Rusia,', pause: 0.15 },
        'dengan lebih tiga juta tentera, menyasarkan Leningrad, Moscow dan Stalingrad.',
      ],
      board: { name: 'Operasi Barbarossa', visual: 'Peta Eropah timur: tiga anak panah merah dari Jerman ke Leningrad, Moscow, Stalingrad; kad "> 3 JUTA TENTERA".', doodle: 'Peta, anak panah, askar.', text: 'OPERASI BARBAROSSA · serangan besar-besaran ke atas Rusia · > 3 juta tentera · sasaran: Leningrad, Moscow, Stalingrad', anim: 'Anak panah dilukis satu demi satu mengikut nama bandar.' },
      draw(S, { D }) {
        S.text('Operasi <span class="hl">Barbarossa</span>', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: -0.2 });
        const at = S.map({ bounds: [[8, 44], [50, 62]], w: 940 }, { x: 70, y: 400, w: 940, at: 0, d: 0, dur: 1.0 });
        const [bx, by] = at(...C.berlin);
        S.pin(at, ...C.berlin, '<b>Jerman</b>', { at: 0, d: 0.6, color: GOLD, size: 0.9, fs: 32 });
        [['leningrad', 'Leningrad', 1.42], ['moskva', 'Moscow', 1.62], ['stalingrad', 'Stalingrad', 1.82]].forEach(([k, n, f]) => {
          const [x, y] = at(...C[k]);
          S.arrow(bx + 20, by, x - 10, y, { at: f, color: RED, sw: 10, bend: 0.1 });
          S.pin(at, ...C[k], `<b>${n}</b>`, { at: f, d: 0.3, color: RED, size: 0.9, fs: 32, left: k === 'stalingrad' });
        });
        S.svg(soldier(D), { x: 80, y: 980, w: 150, at: 1, d: 0, sfx: false });
        S.card('<div class="t-h3" style="text-align:center">&gt; 3 JUTA TENTERA</div>', { color: 'gold', anim: 'stamp', x: 260, y: 1030, w: 620, at: 1, d: 0.6 });
      },
    },
    {
      id: 'tamat-sebab', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Bagaimana perang di Eropah berakhir? Pertama, **kerjasama pemimpin Bersekutu**: Franklin Roosevelt, Winston Churchill, dan kemudian Joseph Stalin.', pause: 0.3 },
        'Kedua, Jerman **gagal menawan Rusia**. Perang melepasi dua musim sejuk, dan tentera Jerman kehabisan peluru, minyak dan makanan.',
      ],
      board: { name: 'Mengapa Jerman kalah (1)', visual: 'Tiga kad pemimpin Bersekutu; ikon salji & tangki minyak kosong; kad "kehabisan peluru, minyak, makanan".', doodle: 'Kepingan salji, tong minyak, kad.', text: 'Kerjasama pemimpin Bersekutu: Roosevelt (AS), Churchill (Britain), Stalin (Rusia) · Komander Tertinggi Bersekutu (AS) · gagal tawan Rusia: 2 musim sejuk; kehabisan peluru, minyak & makanan', anim: 'Kad pemimpin pop; salji jatuh; kad kekurangan.' },
      draw(S) {
        head(S, 'Bagaimana <span class="hl">Berakhir?</span>');
        [['ROOSEVELT', 'Amerika Syarikat'], ['CHURCHILL', 'Britain'], ['STALIN', 'Rusia']].forEach(([n, c], i) => S.card(`<div class="t-h3" style="font-size:40px;text-align:center">${n}</div><div class="t-label red" style="font-size:34px;text-align:center">${c}</div>`, { anim: 'pop', x: 50 + i * 335, y: 410, w: 310, at: 0, d: 1.6 + i * 1.0, rot: i === 1 ? 0 : (i ? 1.5 : -1.5) }));
        S.text('= KERJASAMA BERSEKUTU', { size: 'h3', x: 70, y: 600, w: 940, align: 'center', at: 0, d: 4.6 });
        S.add('<svg viewBox="0 0 300 120">' + [30, 110, 190, 260].map((x, i) => `<g transform="translate(${x} ${40 + (i % 2) * 30})"><path d="M0 -26 V26 M-22 -13 L22 13 M-22 13 L22 -13" stroke="#3F5DA8" stroke-width="6" stroke-linecap="round"/></g>`).join('') + '</svg>', { anim: 'slideD', x: 60, y: 720, w: 300, at: 1, d: 1.0, sfx: false });
        S.card('<div class="t-label red">2 musim sejuk</div><div class="t-h3" style="font-size:44px">Gagal tawan Rusia</div><div class="t-body" style="font-size:36px">kehabisan peluru · minyak · makanan</div>', { anim: 'slideR', x: 390, y: 720, w: 630, at: 1, d: 0.3, rot: 1 });
      },
    },
    {
      id: 'stalingrad-dday', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Pada Januari 1943, Jeneral Friedrich von Paulus **menyerah kalah di Stalingrad**.', pause: 0.3 },
        { text: 'Kemudian pada Jun 1944, melalui **Operasi D-Day**, tentera Bersekutu mendarat di Normandy, Perancis, selepas memperdaya Jerman bahawa pendaratan akan berlaku di Calais.', pause: 0.3 },
        'Bersekutu mara dari barat dan Rusia dari timur. Hitler mati pada April 1945, dan **Jerman menyerah kalah**.',
      ],
      board: { name: 'Stalingrad, D-Day & kekalahan Jerman', visual: 'Peta Eropah: cop Stalingrad (Jan 1943); anak panah D-Day ke Normandy, tanda "palsu" di Calais; dua anak panah besar dari barat & timur ke Berlin; cop JERMAN MENYERAH.', doodle: 'Peta, anak panah, cop.', text: 'Jan 1943: von Paulus menyerah di Stalingrad · Jun 1944: D-Day, mendarat di Normandy (Jerman diperdaya: Calais) · Bersekutu dari barat, Rusia dari timur · Apr 1945 Hitler mati · Jerman menyerah kalah', anim: 'Elemen peta muncul mengikut narasi; cop akhir.' },
      draw(S) {
        const at = S.map({ bounds: EU, w: 940 }, { x: 70, y: 300, w: 940, at: 0, d: -0.2, dur: 1.0 });
        S.pin(at, ...C.stalingrad, '<b>Stalingrad · Jan 1943</b>', { at: 0, d: 1.0, color: GOLD, size: 0.9, fs: 30, left: true });
        const [nx, ny] = at(...C.normandy), [cx, cy] = at(...C.calais), [bx, by] = at(...C.berlin), [mx, my] = at(...C.moskva);
        S.arrow(nx - 120, ny - 40, nx - 6, ny - 6, { at: 1, d: 1.2, color: RED, sw: 10 });
        S.pin(at, ...C.normandy, '<b>Normandy · D-Day</b>', { at: 1, d: 1.6, color: RED, size: 0.9, fs: 30, left: true });
        S.pin(at, ...C.calais, '<span class="red">Calais?</span>', { at: 1, d: 6.0, color: '#FFFDF7', size: 0.7, fs: 26 });
        S.arrow(nx + 10, ny - 10, bx - 20, by + 6, { at: 2, d: 0.3, color: NAVY, sw: 14 });
        S.arrow(mx - 10, my + 10, bx + 30, by + 4, { at: 2, d: 1.2, color: RED, sw: 14 });
        S.pin(at, ...C.berlin, '<b>Berlin</b>', { at: 2, d: 1.8, color: NAVY, size: 0.9, fs: 30 });
        S.stamp('JERMAN MENYERAH KALAH', { x: 60, y: 1010, w: 960, at: 2.8, fs: 64, style: 'text-align:center;white-space:nowrap' });
        S.text('Hitler mati · April 1945', { size: 'label', x: 70, y: 1170, w: 940, align: 'center', at: 2, d: 3.0 });
      },
    },
    {
      id: 'iktibar', bg: 'dots', transition: 'paper',
      lines: ['Kemenangan Bersekutu menunjukkan kepentingan **bekerjasama**, **bermuafakat**, dan **kebijaksanaan merancang strategi**.'],
      board: { name: 'Iktibar', visual: 'Kad IKTIBAR dengan tiga nilai; mentol.', doodle: 'Mentol, bintang.', text: 'IKTIBAR · bekerjasama · bermuafakat · bijak merancang strategi', anim: 'Nilai pop satu demi satu.' },
      draw(S, { D }) {
        S.text('<span class="hl">IKTIBAR</span>', { size: 'title', x: 70, y: 320, w: 700, at: 0, d: -0.2 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 190, at: 0, d: 0.3 });
        [['Bekerjasama', 0.3], ['Bermuafakat', 0.5], ['Bijak merancang strategi', 0.72]].forEach(([t, f], i) => S.card(`<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:90px;color:${i % 2 ? NAVY : RED}">${i + 1}</div><div class="t-h3">${t}</div></div>`, { anim: 'slideL', x: 90, y: 520 + i * 230, w: 880, at: f }));
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, Perang Dunia Kedua di Eropah berpunca daripada fasisme dan nazisme, ketidakpuasan terhadap Perjanjian Versailles, dan kegagalan Liga Bangsa-Bangsa.', pause: 0.35 },
        'Seterusnya, kita ke medan Asia: **Perang Dunia Kedua di Asia Pasifik**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.4.', doodle: 'Pil, maskot.', text: 'Fasisme · Nazisme · Versailles · Liga gagal · Blitzkrieg · D-Day · Seterusnya: 3.4 PD2 di Asia Pasifik', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Fasisme', 0.3], ['Nazisme', 0.4], ['Versailles', 0.55], ['Liga gagal', 0.75], ['Blitzkrieg', 0.85], ['D-Day', 0.92]],
          ['PERANG DUNIA KEDUA DI EROPAH', 0.95], ['3.4 PD2 di Asia Pasifik', 1]);
      },
    },
    END,
  ],
};
