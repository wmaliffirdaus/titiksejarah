// BAB 3 · EPISOD 06 – Subtopik 3.5: Faktor Kedatangan Jepun ke Negara Kita (≈ 4 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 68–69 (incl. maps of the Japanese advance) + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, kesimpulan, END, plane, flagJP, tank } from './bab3.js';

const MY = [[99.3, 0.9], [104.9, 7.4]];
const T = { kotabharu: [102.24, 6.13], singgora: [100.6, 7.2], patani: [101.25, 6.87], jitra: [100.42, 6.27], alorsetar: [100.37, 6.12], penang: [100.33, 5.41], ipoh: [101.08, 4.6], kl: [101.69, 3.14], jb: [103.76, 1.49], kuantan: [103.33, 3.81], singapura: [103.82, 1.35] };
const B = { miri: [113.99, 4.4], kuching: [110.34, 1.55], sibu: [111.82, 2.29], labuan: [115.24, 5.28], jesselton: [116.07, 5.98], sandakan: [118.07, 5.84] };

function tin(D) { const R = D.R; return `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">${R.poly([[20, 120], [60, 60], [150, 50], [200, 110], [140, 140]], { fill: '#8A93A6' })}${R.poly([[60, 60], [100, 20], [150, 50]], { fill: '#C4CAD6' })}</svg>`; }
function rubber(D) { const R = D.R; return `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">${R.rect(80, 60, 40, 170, { fill: '#C27B3A' })}${R.ellipse(100, 50, 190, 100, { fill: '#3A8A4A' })}${R.path('M86 150 L114 165', { strokeWidth: 3 })}${R.path('M100 168 Q100 186 104 196', { stroke: '#FFFFFF', strokeWidth: 6 })}${R.rect(92, 196, 26, 30, { fill: '#FFFDF7', strokeWidth: 2.5 })}</svg>`; }

export default {
  id: '306',
  file: '06_Bab3_Subtopik_3.5',
  title: 'Faktor Kedatangan Jepun ke Negara Kita',
  header: { chip: 'BAB 3 • 3.5', sub: 'Faktor Kedatangan Jepun' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.5), ms. 68–69',
  ...CH1,
  music: { key: 62, bpm: 104, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Tanah Melayu ialah pengeluar utama **bijih timah** dan **getah** di dunia.', pause: 0.4 },
        'Tidak hairanlah Jepun sangat mahu menguasainya!',
      ],
      board: { name: 'Hook – kekayaan Tanah Melayu', visual: 'Frame pertama lengkap: tajuk "KENAPA JEPUN DATANG?", bijih timah & pokok getah, bendera Jepun dengan anak panah ke arahnya.', doodle: 'Bijih timah, pokok getah ditoreh, bendera Jepun, anak panah.', text: 'KENAPA JEPUN DATANG? · bijih timah · getah', anim: 'Elemen utama pada 0:00; cop "SASARAN JEPUN!" pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('KENAPA JEPUN<br><span class="red">DATANG?</span>', { fs: 108 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(tin(D), { ...NOW, x: 90, y: 640, w: 300 });
        S.add(rubber(D), { ...NOW, x: 400, y: 560, w: 260 });
        S.text('bijih timah', { ...NOW, size: 'label', x: 90, y: 860, w: 300, align: 'center' });
        S.text('getah', { ...NOW, size: 'label', x: 400, y: 880, w: 260, align: 'center' });
        S.add(flagJP(D), { ...NOW, x: 740, y: 600, w: 260 });
        S.add(D.arrow(230, 60, 10, 60, { w: 240, h: 120, color: RED, sw: 12, bend: 0.2 }), { ...NOW, x: 640, y: 800, w: 200 });
        S.stamp('SASARAN JEPUN!', { x: 190, y: 1050, w: 700, at: 1, d: 0.3, fs: 84, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.5: **Faktor Kedatangan Jepun ke Negara Kita**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.5", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.5 · Faktor Kedatangan Jepun ke Negara Kita', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.5', 'Faktor Kedatangan<br><span class="red">Jepun</span> ke Negara Kita', { fs: 76, uy: 650, my: 720 }); },
    },
    {
      id: 'propaganda', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Serangan Jepun bermula di Tanah Melayu pada 8 Disember 1941, dan di Sarawak serta Sabah pada 16 Disember 1941.', pause: 0.3 },
        { text: 'Untuk memenangi hati rakyat, Jepun menggunakan propaganda, seperti slogan **Semangat Asia** dan **Asia untuk Orang Asia**,', pause: 0.15 },
        'lalu menonjolkan imej Jepun sebagai **pembela negara Asia**.',
      ],
      board: { name: 'Tarikh serangan & propaganda Jepun', visual: 'Dua kad tarikh (Tanah Melayu 8 Dis 1941, Sarawak & Sabah 16 Dis 1941); dua belon slogan; perisai "pembela Asia".', doodle: 'Kad tarikh, belon kata, perisai.', text: '8 Dis 1941 Tanah Melayu · 16 Dis 1941 Sarawak & Sabah · "Semangat Asia" · "Asia untuk Orang Asia" · Jepun = pembela negara Asia (semangat antipenjajah Barat)', anim: 'Kad tarikh pop; belon slogan pop mengikut sebutan.' },
      draw(S, { D }) {
        rows(S, [['8 DIS 1941', '**Tanah Melayu**', 0.15], ['16 DIS 1941', '**Sarawak** &amp; **Sabah**', 0.6]], { y0: 300, gap: 150, bw: 250, fs: 46 });
        S.text('PROPAGANDA', { size: 'h2', x: 70, y: 620, w: 940, align: 'center', at: 1, d: 0 });
        S.add('<div class="bubble" style="text-align:center;font-family:Marker;font-size:46px">“Semangat Asia”</div>', { anim: 'pop', x: 60, y: 730, w: 460, at: 1, d: 2.3, rot: -2 });
        S.add('<div class="bubble" style="text-align:center;font-family:Marker;font-size:44px">“Asia untuk Orang Asia”</div>', { anim: 'pop', x: 540, y: 760, w: 480, at: 1, d: 3.4, rot: 2 });
        S.svg(D.shield(), { x: 120, y: 980, w: 170, at: 2, d: 0 });
        S.card('<div class="t-h3" style="text-align:center">Jepun = <span class="hl">pembela negara Asia</span></div>', { color: 'gold', anim: 'slideR', x: 320, y: 1010, w: 700, at: 2, d: 0.4 });
      },
    },
    {
      id: 'faktor1', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Faktor pertama, **eksploitasi sumber bahan mentah**.', pause: 0.25 },
        { text: 'Jepun memerlukan bahan mentah untuk perindustriannya, kesan daripada Pembaharuan Meiji, dan untuk operasi ketenteraan.', pause: 0.25 },
        { text: 'Tanah Melayu merupakan pengeluar utama bijih timah dan getah di dunia, selain menghasilkan emas, bijih besi, arang batu dan bauksit.', pause: 0.25 },
        'Di Sarawak pula, sasaran utama Jepun ialah **minyak**, terutama di Miri dan Lutong.',
      ],
      board: { name: 'Faktor 1: eksploitasi sumber bahan mentah', visual: 'Pil FAKTOR 1; kad perindustrian (Pembaharuan Meiji) & operasi tentera; grid sumber Tanah Melayu; kad Sarawak: minyak Miri & Lutong.', doodle: 'Bijih timah, getah, tong minyak, kad.', text: 'FAKTOR 1 · bahan mentah untuk perindustrian (Pembaharuan Meiji) & tentera · Tanah Melayu: bijih timah & getah utama dunia + emas, bijih besi, arang batu, bauksit · Sarawak: minyak di Miri & Lutong', anim: 'Kad & ikon muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 1</span>', { anim: 'pop', x: 70, y: 300, w: 400, at: 0, d: -0.2 });
        S.text('Sumber <span class="hl">Bahan Mentah</span>', { size: 'h2', x: 70, y: 380, w: 940, at: 0, d: 0.3 });
        S.card('<div class="t-body" style="font-size:38px">Untuk <b>perindustrian</b> (Pembaharuan Meiji) &amp; <b>operasi tentera</b></div>', { anim: 'slideU', x: 60, y: 490, w: 960, at: 1, d: 0, pad: '12px 22px' });
        S.add(tin(D), { anim: 'pop', x: 70, y: 650, w: 200, at: 2, d: 0.6 });
        S.add(rubber(D), { anim: 'pop', x: 280, y: 610, w: 170, at: 2, d: 1.4 });
        S.card('<div class="t-label red">Tanah Melayu</div><div class="t-body" style="font-size:36px;line-height:1.15">Utama dunia: <span class="hl">bijih timah &amp; getah</span><br>+ emas · bijih besi · arang batu · bauksit</div>', { anim: 'slideR', x: 470, y: 640, w: 550, at: 2, d: 0.2, rot: 1, pad: '12px 20px' });
        S.card('<div class="t-label red">Sarawak</div><div class="t-h3" style="font-size:44px">MINYAK · Miri &amp; Lutong</div>', { color: 'gold', anim: 'slideU', x: 160, y: 1000, w: 760, at: 3, d: 0.3 });
      },
    },
    {
      id: 'lingkungan', bg: 'dots', transition: 'paper',
      lines: ['Pendudukan ini juga sebahagian daripada rancangan **Lingkungan Sekemakmuran Asia Timur Raya**, untuk mengukuhkan ekonomi Jepun.'],
      board: { name: 'Lingkungan Sekemakmuran Asia Timur Raya', visual: 'Glob dengan kawasan Asia Timur ditanda merah; kad tajuk; anak panah ke "ekonomi Jepun".', doodle: 'Glob, kad, anak panah.', text: 'LINGKUNGAN SEKEMAKMURAN ASIA TIMUR RAYA ➜ kukuhkan ekonomi Jepun', anim: 'Glob pop; kad ditulis; anak panah.' },
      draw(S, { D }) {
        S.svg(D.globe(), { x: 360, y: 300, w: 360, at: 0, d: 0 });
        S.add('<svg viewBox="0 0 360 360"><path d="M200 90 Q260 110 250 170 Q230 230 180 220 Q150 200 160 150 Q170 100 200 90 Z" fill="rgba(201,52,54,.55)" stroke="#C93436" stroke-width="5"/></svg>', { anim: 'fade', x: 360, y: 300, w: 360, at: 0, d: 0.8 });
        S.card('<div class="t-h2" style="text-align:center;font-size:56px">Lingkungan Sekemakmuran<br><span class="red">Asia Timur Raya</span></div>', { anim: 'slideU', x: 60, y: 720, w: 960, at: 0, d: 0.5 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">➜ kukuhkan ekonomi Jepun</div>', { color: 'navy', anim: 'pop', x: 200, y: 1010, w: 680, at: 0.75 });
      },
    },
    {
      id: 'faktor2', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Faktor kedua, **kepentingan strategik ketenteraan**.', pause: 0.25 },
        { text: 'Di hujung Semenanjung terletak pangkalan tentera laut British, iaitu **Singapura**. Menguasainya membuka laluan ke telaga minyak di Sumatera.', pause: 0.25 },
        'Penguasaan **Pulau Borneo** pula penting untuk menakluki Pulau Jawa.',
      ],
      board: { name: 'Faktor 2: kepentingan strategik ketenteraan', visual: 'Peta Asia Tenggara: penanda Singapura (pangkalan tentera laut British) ➜ anak panah ke Sumatera (telaga minyak); Borneo ➜ anak panah ke Jawa.', doodle: 'Peta, penanda, anak panah, sauh.', text: 'FAKTOR 2 · Singapura: pangkalan tentera laut British ➜ laluan ke telaga minyak Sumatera · Borneo ➜ takluk Pulau Jawa', anim: 'Penanda & anak panah mengikut sebutan.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">FAKTOR 2</span>', { anim: 'pop', x: 70, y: 290, w: 400, at: 0, d: -0.2 });
        S.text('<span class="hl">Strategik</span>', { size: 'h2', x: 500, y: 290, w: 520, at: 0, d: 0.3 });
        const at = S.map({ bounds: [[95, -9], [120, 8]], w: 940 }, { x: 70, y: 390, w: 940, at: 0, d: 0.6, dur: 1.0 });
        const [sx, sy] = at(103.82, 1.35), [ux, uy] = at(101.4, 0.5), [bx, by] = at(114, 1), [jx, jy] = at(110.4, -7.0);
        S.pin(at, 103.82, 1.35, '<b>Singapura</b>', { at: 1, d: 0.4, color: RED, size: 1, fs: 36 });
        S.svg(D.anchor(), { x: sx + 40, y: sy + 30, w: 70, at: 1, d: 1.6 });
        S.arrow(sx - 10, sy + 10, ux - 60, uy + 50, { at: 1, d: 4.2, color: RED, sw: 10 });
        S.text('telaga minyak<br>Sumatera', { size: 'label', x: ux - 300, y: uy + 40, w: 260, align: 'center', at: 1, d: 4.6 });
        S.pin(at, 114, 1, '<b>Borneo</b>', { at: 2, d: 0.2, color: GOLD, size: 1, fs: 36 });
        S.arrow(bx - 10, by + 20, jx + 20, jy - 40, { at: 2, d: 1.0, color: NAVY, sw: 10 });
        S.text('Pulau Jawa', { size: 'label', x: jx - 120, y: jy - 30, w: 240, align: 'center', at: 2, d: 1.4 });
      },
    },
    {
      id: 'mendarat', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Pada 8 Disember 1941, Jepun mendarat serentak di Pantai Kuala Pak Amat dan Pantai Sabak di Kota Bharu, serta di Singgora dan Patani di Thailand.', pause: 0.3 },
        'Jepun menggunakan strategi **serangan kilat**, menggabungkan angkatan darat, udara dan laut.',
      ],
      board: { name: 'Pendaratan serentak & serangan kilat', visual: 'Peta utara Semenanjung: penanda Kota Bharu (Kuala Pak Amat, Sabak), Singgora, Patani; tiga ikon darat/udara/laut.', doodle: 'Peta, kereta kebal, kapal terbang, kapal.', text: '8 Dis 1941 · Pantai Kuala Pak Amat & Pantai Sabak (Kota Bharu) · Singgora & Patani (Thailand) · serangan kilat: darat + udara + laut', anim: 'Penanda pop mengikut sebutan; ikon muncul pada ayat kedua.' },
      draw(S, { D }) {
        const at = S.map({ bounds: [[99.6, 4.8], [103.2, 7.9]], w: 640 }, { x: 60, y: 290, w: 640, at: 0, d: -0.2, dur: 1.0 });
        S.pin(at, ...T.kotabharu, '<b>Kota Bharu</b>', { at: 0, d: 2.0, color: RED, size: 1, fs: 34, left: true });
        S.pin(at, ...T.singgora, '<b>Singgora</b>', { at: 0, d: 5.4, color: RED, size: 1, fs: 34 });
        S.pin(at, ...T.patani, '<b>Patani</b>', { at: 0, d: 6.2, color: RED, size: 1, fs: 34 });
        S.card('<div class="t-label red">8 DIS 1941</div><div class="t-body" style="font-size:34px">Pantai Kuala Pak Amat &amp; Pantai Sabak</div>', { anim: 'slideR', x: 720, y: 330, w: 300, at: 0, d: 1.2, pad: '12px 18px' });
        S.text('SERANGAN <span class="hl">KILAT</span>', { size: 'h2', x: 60, y: 900, w: 960, align: 'center', at: 1, d: 0 });
        S.add(tank(D), { anim: 'slideL', x: 60, y: 1010, w: 300, at: 1, d: 2.8, sfx: 'swish' });
        S.add(plane(D), { anim: 'slideR', x: 380, y: 1010, w: 300, at: 1, d: 3.3, sfx: 'whoosh' });
        S.add(D.ship({ hull: NAVY, sail: '#F3EBDD' }), { anim: 'slideR', x: 720, y: 990, w: 280, at: 1, d: 3.8, sfx: 'swish' });
      },
    },
    {
      id: 'kemaraan', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Tentera Jepun dari Thailand memasuki Kedah, lalu mara ke selatan: Jitra, Alor Setar, Pulau Pinang, Ipoh, Kuala Lumpur, hingga ke Johor Bahru.', pause: 0.25 },
        { text: 'Dari Kota Bharu pula, mereka mara melalui negeri-negeri pantai timur.', pause: 0.25 },
        'Kapal perang British, **Repulse** dan **Prince of Wales**, ditenggelamkan oleh Jepun di perairan Kuantan.',
      ],
      board: { name: 'Kemaraan tentera Jepun di Semenanjung', visual: 'Peta Semenanjung: penanda bertarikh Jitra 12 Dis, Alor Setar 13 Dis, Pulau Pinang 17 Dis, Ipoh 26 Dis, Kuala Lumpur 11 Jan 1942, Johor Bahru 31 Jan 1942; anak panah pantai timur; kapal karam di Kuantan.', doodle: 'Peta, penanda, anak panah, kapal tenggelam.', text: 'Jitra (12 Dis 1941) · Alor Setar (13 Dis) · Pulau Pinang (17 Dis) · Ipoh (26 Dis) · Kuala Lumpur (11 Jan 1942) · Johor Bahru (31 Jan 1942) · pantai timur dari Kota Bharu · Repulse & Prince of Wales tenggelam di perairan Kuantan', anim: 'Penanda pop mengikut sebutan; anak panah dilukis.' },
      draw(S, { D }) {
        const at = S.map({ bounds: MY, w: 700 }, { x: 190, y: 290, w: 700, at: 0, d: -0.2, dur: 1.0 });
        [['jitra', 'Jitra · 12 Dis', 0.32], ['alorsetar', 'Alor Setar · 13 Dis', 0.42], ['penang', 'Pulau Pinang · 17 Dis', 0.55], ['ipoh', 'Ipoh · 26 Dis', 0.66], ['kl', 'K. Lumpur · 11 Jan', 0.78], ['jb', 'Johor Bahru · 31 Jan', 0.92]].forEach(([k, n, f], i) => S.pin(at, ...T[k], `<b>${n}</b>`, { at: f, color: RED, size: 0.8, fs: 28, left: i !== 1 && i !== 5 }));
        const [kx, ky] = at(...T.kotabharu), [qx, qy] = at(...T.kuantan);
        S.arrow(kx + 10, ky + 20, qx + 20, qy - 30, { at: 1, d: 0.3, color: NAVY, sw: 10, bend: -0.15 });
        S.pin(at, ...T.kotabharu, '<b>Kota Bharu</b>', { at: 1, d: 0, color: NAVY, size: 0.8, fs: 28 });
        S.add(D.ship({ hull: NAVY, sail: '#F3EBDD', waves: true }), { anim: 'pop', x: qx + 30, y: qy - 40, w: 180, rot: 28, at: 2, d: 0.3 });
        S.text('Repulse &amp;<br>Prince of Wales', { size: 'note', x: qx + 20, y: qy + 90, w: 230, at: 2, d: 0.8 });
      },
    },
    {
      id: 'singapura', bg: 'dots', transition: 'paper',
      lines: ['Akhirnya, pada 15 Februari 1942, **Singapura ditawan**, dan seluruh Tanah Melayu jatuh ke tangan Jepun.'],
      board: { name: 'Singapura jatuh (15 Feb 1942)', visual: 'Peta Singapura dengan bendera Jepun; cop "15 FEB 1942 · SINGAPURA DITAWAN".', doodle: 'Bendera Jepun, cop.', text: '15 FEB 1942 · Singapura ditawan · seluruh Tanah Melayu jatuh', anim: 'Bendera pop; cop dihentak.' },
      draw(S, { D }) {
        S.add(BIG('15 FEB <span class="red">1942</span>', { fs: 120 }), { anim: 'pop', x: 20, y: 320, w: 1040, at: 0, d: 0.2 });
        S.add(flagJP(D), { anim: 'pop', x: 370, y: 520, w: 340, at: 0, d: 0.6, rot: -3 });
        S.stamp('SINGAPURA DITAWAN', { x: 80, y: 820, w: 920, at: 0.35, fs: 70, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Seluruh Tanah Melayu jatuh!</div>', { color: 'navy', anim: 'slideU', x: 140, y: 1010, w: 800, at: 0.7 });
      },
    },
    {
      id: 'borneo', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Di Borneo, tentera Jepun berlepas dari Teluk Cam Ranh di Vietnam, dan mendarat di **Miri** pada 16 Disember 1941.', pause: 0.25 },
        { text: 'Mereka kemudian menduduki Kuching dan Sibu, lalu mara ke Sabah melalui Labuan.', pause: 0.25 },
        'Penguasaan **Sandakan** pada 19 Januari 1942 melengkapkan kempen Jepun di Sabah.',
      ],
      board: { name: 'Serangan Jepun di Sarawak & Sabah', visual: 'Peta Borneo utara: penanda bertarikh Miri 16 Dis 1941, Kuching 24 Dis, Sibu 27 Dis, Labuan 1 Jan 1942, Jesselton 9 Jan, Sandakan 19 Jan 1942.', doodle: 'Peta, penanda, anak panah.', text: 'Dari Teluk Cam Ranh ➜ Miri (16 Dis 1941) · Kuching (24 Dis) · Sibu (27 Dis) · Labuan (1 Jan 1942) · Jesselton (9 Jan) · Sandakan (19 Jan 1942) – kempen di Sabah lengkap', anim: 'Penanda pop mengikut sebutan.' },
      draw(S) {
        head(S, 'Sarawak &amp; <span class="hl">Sabah</span>');
        const at = S.map({ bounds: [[109.4, 0.6], [119.6, 7.4]], w: 960 }, { x: 60, y: 400, w: 960, at: 0, d: 0, dur: 1.0 });
        const [mx, my] = at(...B.miri);
        S.arrow(mx - 160, my - 160, mx - 8, my - 8, { at: 0, d: 2.0, color: RED, sw: 10 });
        S.text('dari Teluk<br>Cam Ranh', { size: 'note', x: mx - 330, y: my - 230, w: 200, at: 0, d: 2.0 });
        S.pin(at, ...B.miri, '<b>Miri · 16 Dis</b>', { at: 0, d: 4.2, color: RED, size: 0.85, fs: 28 });
        S.pin(at, ...B.kuching, '<b>Kuching · 24 Dis</b>', { at: 1, d: 1.6, color: RED, size: 0.85, fs: 28 });
        S.pin(at, ...B.sibu, '<b>Sibu · 27 Dis</b>', { at: 1, d: 2.4, color: RED, size: 0.85, fs: 28 });
        S.pin(at, ...B.labuan, '<b>Labuan · 1 Jan</b>', { at: 1, d: 4.0, color: GOLD, size: 0.85, fs: 28, left: true });
        S.pin(at, ...B.jesselton, '<b>Jesselton · 9 Jan</b>', { at: 1, d: 4.6, color: GOLD, size: 0.85, fs: 28, left: true });
        S.pin(at, ...B.sandakan, '', { at: 2, d: 0.6, color: GOLD, size: 1 });
        { const [x, y] = at(...B.sandakan); S.text('<b>Sandakan</b><br>19 Jan 1942', { size: 'label', x: x - 170, y: y + 20, w: 240, align: 'center', at: 2, d: 0.8, style: 'font-size:34px' }); }
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, Jepun datang ke negara kita kerana dua faktor utama: **sumber bahan mentah** dan **kepentingan strategik ketenteraan**.', pause: 0.25 },
        { text: 'Dalam masa kurang tiga bulan, seluruh Tanah Melayu jatuh ke tangan Jepun.', pause: 0.35 },
        'Seterusnya, kita kaji **dasar pendudukan Jepun** di negara kita!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.6.', doodle: 'Pil, maskot.', text: 'Bahan mentah · Strategik · Asia untuk Orang Asia · Serangan kilat · Kota Bharu · Singapura 15 Feb 1942 · Seterusnya: 3.6 Dasar Pendudukan Jepun', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Bahan mentah', 0.3], ['Strategik', 0.6], ['Asia untuk Asia', 0.1], ['Serangan kilat', 0.2], ['Kota Bharu', 0.4], ['15 Feb 1942', 1]],
          ['2 FAKTOR: EKONOMI + STRATEGIK', 0.85], ['3.6 Dasar Pendudukan Jepun', 2]);
      },
    },
    END,
  ],
};
