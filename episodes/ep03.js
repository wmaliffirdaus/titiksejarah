// EPISOD 03 – Subtopik 1.2: Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka (≈ 3–5 min)
import { fact, fmt, RED, NAVY, GOLD } from './lib.js';

// Heading block used by each characteristic: number badge + name + short definition card.
function ciri(S, n, name, def, o = {}) {
  S.add(`<div style="width:104px;height:104px;border-radius:50%;background:${n % 2 ? RED : NAVY};border:5px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:56px;color:#F5C928">${n}</div>`, { anim: 'pop', x: 60, y: 290, w: 104, at: 0, d: -0.3 });
  S.text(name, { size: name.length > 18 ? 'h3' : 'h2', x: 185, y: name.length > 18 ? 312 : 300, w: 840, at: 0, d: -0.1, dur: 0.8 });
  S.card(`<div class="tw red" style="font-size:26px">DEFINISI</div><div class="t-body" style="font-size:40px">${fmt(def)}</div>`, { anim: 'slideU', x: 60, y: o.defY ?? 410, w: 960, at: 0, d: 0.9, tear: true, pad: '14px 26px 30px' });
}
const MELAKA = [102.25, 2.2];

export default {
  id: '03',
  file: '03_Bab1_Subtopik_1.2',
  title: 'Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka',
  header: { chip: 'BAB 1 • 1.2', sub: 'Ciri-ciri Negara Bangsa KMM' },
  music: { key: 57, bpm: 102, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Pernah tertanya-tanya bagaimana **Kesultanan Melayu Melaka** boleh menjadi sebuah kerajaan yang begitu kuat?', pause: 0.45 },
        'Rahsianya: Melaka memiliki **enam ciri** sebuah negara bangsa.',
      ],
      board: {
        name: 'Hook – rahsia kekuatan Melaka',
        visual: 'Pondok nelayan kecil "berkembang" menjadi istana megah; enam bintang muncul di sekelilingnya.',
        doodle: 'Pondok nelayan, istana Melaka bertingkat, kapal, enam bintang emas, anak panah tumbesaran.',
        text: '"Bagaimana Melaka jadi begitu KUAT?" · "6 CIRI"',
        anim: 'Pondok dilukis kecil, anak panah melengkung, istana dilukis besar; bintang pop satu persatu.',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.text('Bagaimana Melaka jadi<br>begitu <span class="red">KUAT</span>?', { size: 'h2', x: 60, y: 300, w: 960, align: 'center', at: 0, d: 0.2 });
        S.add(`<svg viewBox="0 0 200 180">${D.R.poly([[20, 90], [100, 20], [180, 90]], { fill: GOLD })}${D.R.rect(40, 88, 120, 70, { fill: '#FFFDF7' })}${D.R.rect(86, 110, 28, 48, { fill: NAVY })}${D.R.line(0, 170, 200, 170, {})}</svg>`, { anim: 'draw', x: 80, y: 560, w: 220, at: 0, d: 0.8 });
        S.text('Perkampungan kecil', { size: 'note', x: 50, y: 760, w: 300, align: 'center', at: 0, d: 1.1 });
        S.arrow(310, 640, 470, 640, { at: 0, d: 1.8, color: RED, bend: -0.3 });
        S.svg(D.palace(), { x: 490, y: 520, w: 520, at: 0, d: 2.2, dur: 1.4 });
        S.text('Kerajaan agung', { size: 'note', x: 600, y: 920, w: 320, align: 'center', at: 0, d: 3 });
        for (let i = 0; i < 6; i++) S.add(D.star(), { anim: 'pop', x: 140 + i * 140, y: 1010, w: 100, at: 1, d: 0.5 + i * 0.18, sfx: i ? false : 'pop' });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">6 CIRI NEGARA BANGSA</div>', { color: 'red', anim: 'stamp', x: 170, y: 1150, w: 740, rot: -3, at: 1, d: 1.6 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 1.2: **Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka**. Jom kita kupas satu demi satu.'],
      board: {
        name: 'Kad tajuk & enam ciri',
        visual: 'Tajuk subtopik di atas; enam ikon ciri disusun dalam bulatan mengelilingi maskot.',
        doodle: 'Glob (wilayah), mahkota (kedaulatan), payung (lambang), skrol (undang-undang), rakyat, istana (kerajaan).',
        text: 'SUBTOPIK 1.2 · Wilayah Pengaruh · Kedaulatan · Lambang Kebesaran · Keunggulan Undang-undang · Rakyat · Kerajaan',
        anim: 'Tajuk ditulis; ikon pop mengikut putaran jam.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 1.2</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Ciri-ciri Negara Bangsa<br><span class="red">Kesultanan Melayu Melaka</span>', { size: 'h3', x: 40, y: 390, w: 1000, align: 'center', at: 0, dur: 1.2 });
        S.mascot({ x: 410, y: 700, w: 260, at: 0, d: 0.3 });
        const items = [['Wilayah', D.globe()], ['Kedaulatan', D.crown()], ['Lambang', D.payung()], ['Undang-undang', D.scroll('', { color: RED })], ['Rakyat', D.petani()], ['Kerajaan', D.palace()]];
        const pos = [[110, 560], [780, 560], [60, 820], [830, 820], [110, 1080], [780, 1080]];
        items.forEach(([l, ic], i) => {
          S.svg(ic, { x: pos[i][0] + 20, y: pos[i][1], w: 150, at: 0, d: 1 + i * 0.4, dur: 0.8, sfx: 'pop' });
          S.text(l, { size: 'label', x: pos[i][0] - 30, y: pos[i][1] + 170, w: 250, align: 'center', at: 0, d: 1.2 + i * 0.4, style: 'font-size:40px' });
        });
      },
    },
    {
      id: 'wilayah', transition: 'paper',
      lines: [
        'Ciri pertama: **wilayah pengaruh**, iaitu kawasan yang berada di bawah kekuasaan atau naungan sesebuah kerajaan.',
        'Wilayah penting kerana ia menentukan sempadan kuasa, sumber ekonomi dan jumlah rakyat.',
        'Pada zaman kegemilangannya, wilayah Melaka meliputi sebahagian besar Semenanjung Tanah Melayu, seperti Pahang, Terengganu dan Johor, serta pantai timur Sumatera seperti Kampar, Siak dan Inderagiri.',
        'Wilayah ini diperoleh melalui **peperangan**, **perkahwinan diraja** dan **diplomasi**.',
      ],
      board: {
        name: 'Ciri 1 – Wilayah pengaruh',
        visual: 'Peta lakaran Semenanjung & pantai timur Sumatera dengan penanda jajahan Melaka; tiga kad "cara meluaskan wilayah" di kanan.',
        doodle: 'Peta tulisan tangan, penanda Melaka (bintang kuning), penanda jajahan merah, ikon pedang, hati, kapal.',
        text: 'WILAYAH PENGARUH · Definisi · Fungsi: sempadan kuasa, sumber ekonomi, rakyat · Pahang, Terengganu, Johor, Kampar, Siak, Inderagiri · Peperangan · Perkahwinan diraja · Diplomasi',
        anim: 'Kad definisi meluncur naik; peta dilukis; penanda pop satu persatu mengikut sebutan nama; tiga kad cara meluaskan wilayah pop.',
      },
      draw(S, { D }) {
        ciri(S, 1, 'Wilayah Pengaruh', 'Kawasan di bawah **kekuasaan / naungan** sesebuah kerajaan.');
        S.card('<div class="t-label red" style="font-size:34px">Fungsi</div><div class="t-body" style="font-size:36px">sempadan kuasa • sumber ekonomi • rakyat</div>', { anim: 'slideU', x: 60, y: 1180, w: 960, at: 1, pad: '12px 24px' });
        const at = S.map({ bounds: [[98.4, -1.4], [105.6, 7.0]], w: 620, labels: [{ lon: 99.6, lat: 3.2, text: 'Selat Melaka', size: 26, rot: -50 }] }, { x: 60, y: 555, w: 520, at: 2, d: -0.5, dur: 1.4 });
        S.pin(at, ...MELAKA, '<b>MELAKA</b>', { at: 2, d: 0.3, color: GOLD, size: 0.9, fs: 34, left: true });
        const P = [[103.13, 5.33, 'Terengganu', 0.35], [103.4, 3.6, 'Pahang', 0.25], [103.9, 1.7, 'Johor', 0.45], [101.45, 0.33, 'Kampar', 0.68], [102.05, 0.8, 'Siak', 0.74], [102.55, -0.38, 'Inderagiri', 0.84]];
        P.forEach(([lo, la, n, f], i) => S.pin(at, lo, la, n, { at: 2 + f, color: RED, size: 0.7, fs: 30, left: n === 'Kampar', sfx: i ? false : 'pop' }));
        S.card('<div class="t-label">⚔ Peperangan</div>', { anim: 'pop', x: 620, y: 620, w: 400, at: 3, d: 0.6, pad: '10px 18px' });
        S.card('<div class="t-label">♥ Perkahwinan diraja</div>', { anim: 'pop', x: 620, y: 780, w: 400, at: 3, d: 1.3, pad: '10px 18px' });
        S.card('<div class="t-label">🤝 Diplomasi</div>'.replace('🤝', '✉'), { anim: 'pop', x: 620, y: 940, w: 400, at: 3, d: 2.3, pad: '10px 18px' });
      },
    },
    {
      id: 'kedaulatan', transition: 'flip',
      lines: [
        'Ciri kedua: **kedaulatan**, iaitu kuasa tertinggi untuk memerintah tanpa campur tangan kuasa luar.',
        'Di Melaka, kedaulatan terletak pada **Sultan**. Rakyat percaya Sultan mempunyai **daulat**, dan menentang Sultan dianggap **derhaka**.',
        'Melaka juga mendapat pengiktirafan daripada Maharaja China pada awal abad ke-15, yang membantu Melaka bebas daripada ancaman Siam.',
        'Kedaulatan ini terbukti apabila serangan Siam berjaya dipatahkan pada zaman Sultan Muzaffar Syah.',
      ],
      board: {
        name: 'Ciri 2 – Kedaulatan',
        visual: 'Sultan di tengah dengan konsep DAULAT lawan DERHAKA; kapal China membawa pengiktirafan; perisai menahan serangan Siam.',
        doodle: 'Watak Sultan bermahkota, kad DAULAT (kuning) & DERHAKA (merah), jong China, cop mohor, perisai.',
        text: 'KEDAULATAN · Sultan · DAULAT · DERHAKA · Pengiktirafan China (awal abad ke-15) · Serangan Siam dipatahkan (Sultan Muzaffar Syah)',
        anim: 'Sultan pop; kad daulat/derhaka dicop; jong meluncur dari kanan; perisai pop dengan bunyi "stamp".',
      },
      draw(S, { D }) {
        ciri(S, 2, 'Kedaulatan', 'Kuasa **tertinggi** untuk memerintah tanpa campur tangan kuasa luar.');
        S.svg(D.sultan({ pose: 'up' }), { x: 70, y: 590, w: 230, at: 1, d: -0.4, dur: 1 });
        S.card('<div class="t-h3" style="text-align:center">DAULAT</div>', { color: 'gold', anim: 'stamp', x: 300, y: 610, w: 280, at: 1, d: 2.6 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">DERHAKA</div>', { color: 'red', anim: 'stamp', x: 300, y: 760, w: 280, at: 1, d: 4.2 });
        S.svg(D.ship({ junk: true }), { x: 640, y: 590, w: 360, at: 2, d: 0.3, anim: 'slideR', dur: 0.7 });
        S.text('Pengiktirafan China', { size: 'note', x: 640, y: 860, w: 380, align: 'center', at: 2, d: 1.2 });
        S.add(D.shield(), { anim: 'pop', x: 140, y: 960, w: 160, at: 3, sfx: 'stamp' });
        S.card('<div class="t-body" style="font-size:38px">Serangan <b class="red">Siam</b> dipatahkan<br>(Sultan Muzaffar Syah)</div>', { anim: 'slideR', x: 330, y: 990, w: 650, at: 3, d: 0.4, pad: '14px 22px' });
      },
    },
    {
      id: 'lambang', transition: 'slideUp',
      lines: [
        'Ciri ketiga: **lambang kebesaran**, iaitu simbol yang menunjukkan kebesaran dan kedaulatan pemerintah.',
        'Contohnya, alat kebesaran diraja seperti **nobat**, **payung**, **keris** dan **cop mohor**.',
        'Warna **kuning** dijadikan warna larangan untuk raja, dan **bahasa istana** seperti santap dan beradu digunakan untuk memuliakan Sultan.',
        'Adat istiadat istana ini disusun dengan teliti pada zaman Sultan Muhammad Syah.',
      ],
      board: {
        name: 'Ciri 3 – Lambang kebesaran',
        visual: 'Papan pameran alat kebesaran diraja (4 petak), petak warna kuning larangan, belon kata bahasa istana.',
        doodle: 'Nobat (gendang merah berjalur emas), payung kuning, keris berlok, cop mohor merah; sampel warna kuning; belon "santap · beradu".',
        text: 'LAMBANG KEBESARAN · Nobat · Payung · Keris · Cop mohor · Kuning = warna larangan · Bahasa istana: santap, beradu · Sultan Muhammad Syah',
        anim: 'Setiap alat kebesaran dilukis tepat ketika disebut; petak kuning dicop; belon kata pop.',
      },
      draw(S, { D }) {
        ciri(S, 3, 'Lambang Kebesaran', 'Simbol **kebesaran & kedaulatan** pemerintah.');
        const items = [['Nobat', D.nobat(), 1.25], ['Payung', D.payung(), 1.42], ['Keris', D.keris(), 1.58], ['Cop mohor', D.seal(), 1.75]];
        items.forEach(([l, ic, at], i) => {
          const x = 60 + i * 245;
          S.card('<div style="height:250px"></div>', { anim: 'pop', x, y: 580, w: 225, at, sfx: false, pad: '10px' });
          S.svg(ic, { x: x + (l === 'Keris' ? 80 : 30), y: 600, w: l === 'Keris' ? 65 : 165, at, d: 0.05, dur: 0.8 });
          S.text(l, { size: 'label', x, y: 782, w: 225, align: 'center', at, d: 0.2, style: 'font-size:40px' });
        });
        S.add('<div style="width:240px;height:150px;background:#F5C928;border:5px solid #172C63;border-radius:16px;box-shadow:7px 8px 0 #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:34px;text-align:center;line-height:1.1">KUNING<br>LARANGAN</div>', { anim: 'stamp', x: 70, y: 880, w: 240, at: 2, d: 0.6 });
        S.add('<div class="bubble">Bahasa istana:<br><b class="red">santap</b> · <b class="red">beradu</b></div>', { anim: 'pop', x: 350, y: 880, w: 400, at: 2, d: 3.4, sfx: 'pop' });
        S.svg(D.crown(), { x: 790, y: 880, w: 200, at: 2, d: 3.8, sfx: false });
        S.card('<div class="t-body" style="font-size:38px">Adat istiadat disusun: <span class="hl">Sultan Muhammad Syah</span></div>', { anim: 'slideU', x: 60, y: 1110, w: 960, at: 3, pad: '14px 24px' });
      },
    },
    {
      id: 'undang', transition: 'paper',
      lines: [
        'Ciri keempat: **keunggulan undang-undang**. Negara bangsa mempunyai undang-undang yang dipatuhi oleh semua.',
        'Melaka mempunyai **Hukum Kanun Melaka** untuk urusan di darat, dan **Undang-Undang Laut Melaka** untuk urusan di laut.',
        'Undang-undang ini berasaskan **hukum Islam** dan **adat**, lalu menjamin keadilan dan keamanan. Butirannya kita kupas dalam Subtopik 1.3.',
      ],
      board: {
        name: 'Ciri 4 – Keunggulan undang-undang',
        visual: 'Dua skrol undang-undang (DARAT & LAUT) mengapit neraca keadilan; dua sumber hukum di bawah.',
        doodle: 'Skrol "Hukum Kanun Melaka" (latar istana) & skrol "Undang-Undang Laut" (latar kapal) dan neraca keadilan di tengah.',
        text: 'KEUNGGULAN UNDANG-UNDANG · Hukum Kanun Melaka (DARAT) · Undang-Undang Laut Melaka (LAUT) · Hukum Islam + Adat · keadilan & keamanan',
        anim: 'Skrol dilukis satu persatu; neraca berayun (pulse); kad sumber hukum meluncur.',
      },
      draw(S, { D }) {
        ciri(S, 4, 'Keunggulan Undang-undang', 'Undang-undang yang **dipatuhi oleh semua**, dari pemerintah hingga rakyat.');
        S.svg(D.scroll('DARAT', { ts: 38 }), { x: 70, y: 570, w: 250, at: 1, d: 0.2 });
        S.text('Hukum Kanun Melaka', { size: 'label', x: 30, y: 890, w: 330, align: 'center', at: 1, d: 0.6 });
        S.svg(D.scales(), { x: 390, y: 620, w: 300, at: 1, d: 1.2, pulse: [{ at: 2, d: 2.5 }] });
        S.svg(D.scroll('LAUT', { ts: 38, color: '#3F5DA8', tc: '#172C63' }), { x: 760, y: 570, w: 250, at: 1, d: 2.6 });
        S.text('Undang-Undang Laut Melaka', { size: 'label', x: 700, y: 890, w: 360, align: 'center', at: 1, d: 3 });
        S.card('<div class="t-body" style="text-align:center"><span class="hl">Hukum Islam</span> + <span class="hl">Adat</span> ➜ keadilan & keamanan</div>', { anim: 'slideU', x: 60, y: 1030, w: 960, at: 2, d: 0.3 });
        S.text('➜ Butiran: Subtopik 1.3', { size: 'note', x: 620, y: 1180, w: 400, align: 'right', at: 2, d: 4.5 });
      },
    },
    {
      id: 'rakyat', transition: 'flip',
      lines: [
        'Ciri kelima: **rakyat**, iaitu penduduk yang menetap dalam sesebuah negara dan taat setia kepada pemerintah.',
        'Rakyat Melaka terdiri daripada pelbagai golongan seperti petani, nelayan, tukang dan pedagang.',
        'Melaka juga menjadi tumpuan pedagang dari Arab, India, China dan Nusantara, dan **bahasa Melayu** menjadi **lingua franca** yang menyatukan mereka.',
      ],
      board: {
        name: 'Ciri 5 – Rakyat',
        visual: 'Barisan watak rakyat pelbagai golongan; peniaga asing berkumpul di gerai pelabuhan; belon kata "Bahasa Melayu".',
        doodle: 'Petani (caping & cangkul), nelayan (ikan), wanita bertudung, pedagang berserban, pegawai China, gerai pasar.',
        text: 'RAKYAT · petani · nelayan · tukang · pedagang · Arab, India, China, Nusantara · Bahasa Melayu = lingua franca',
        anim: 'Watak pop satu persatu mengikut sebutan; gerai dilukis; belon kata bahasa Melayu dicop.',
      },
      draw(S, { D }) {
        ciri(S, 5, 'Rakyat', 'Penduduk yang menetap dalam negara dan **taat setia** kepada pemerintah.');
        const ppl = [[D.petani(), 'petani', 1.3], [D.nelayan(), 'nelayan', 1.45], [D.wanita({ prop: 'basket' }), 'tukang', 1.62], [D.pedagang(), 'pedagang', 1.78]];
        ppl.forEach(([svg, l, at], i) => {
          S.svg(svg, { x: 70 + i * 240, y: 560, w: 190, at, dur: 0.8, sfx: 'pop' });
          S.text(l, { size: 'label', x: 40 + i * 240, y: 810, w: 250, align: 'center', at, d: 0.2 });
        });
        S.svg(D.market(), { x: 60, y: 900, w: 380, at: 2, d: 0.3 });
        S.svg(D.pegawai({ pose: 'present' }), { x: 440, y: 880, w: 150, at: 2, d: 1.2, dur: 0.8 });
        S.add('<div class="bubble" style="font-size:42px;text-align:center"><b class="red">Bahasa Melayu</b><br>= lingua franca</div>', { anim: 'stamp', x: 620, y: 930, w: 400, at: 2, d: 4.6 });
      },
    },
    {
      id: 'kerajaan', transition: 'paper',
      lines: [
        'Ciri keenam: **kerajaan**, iaitu badan yang mentadbir dan mengurus negara.',
        'Kerajaan Melaka diketuai oleh Sultan, dibantu oleh pembesar seperti Bendahara, Penghulu Bendahari, Temenggung dan Laksamana.',
        'Susunan ini dikenali sebagai **Sistem Pembesar Empat Lipatan**, yang akan kita bincangkan dalam Subtopik 1.3.',
      ],
      board: {
        name: 'Ciri 6 – Kerajaan',
        visual: 'Carta organisasi ringkas: Sultan di atas, empat pembesar di bawah dengan garis penghubung.',
        doodle: 'Watak Sultan, Bendahara, Penghulu Bendahari, Temenggung, Laksamana (setiap satu dengan pakaian & alatan berbeza).',
        text: 'KERAJAAN · Sultan · Bendahara · Penghulu Bendahari · Temenggung · Laksamana · Sistem Pembesar Empat Lipatan',
        anim: 'Sultan pop; garis carta dilukis; pembesar pop mengikut sebutan; kad nama sistem dicop.',
      },
      draw(S, { D }) {
        ciri(S, 6, 'Kerajaan', 'Badan yang **mentadbir** dan mengurus negara.');
        S.svg(D.sultan({ pose: 'down' }), { x: 450, y: 545, w: 180, at: 1, d: 0.2, dur: 0.9 });
        S.add('<svg viewBox="0 0 900 80"><path d="M450 0 V30 M110 30 H790 M110 30 V80 M336 30 V80 M563 30 V80 M790 30 V80" stroke="#172C63" stroke-width="6" fill="none" stroke-linecap="round"/></svg>', { anim: 'wipe', x: 90, y: 790, w: 900, at: 1, d: 1.2 });
        const p = [[D.bendahara(), 'Bendahara', 0.42], [D.bendahari(), 'Penghulu Bendahari', 0.55], [D.temenggung(), 'Temenggung', 0.74], [D.laksamana(), 'Laksamana', 0.86]];
        p.forEach(([svg, l, f], i) => {
          S.svg(svg, { x: 120 + i * 227, y: 875, w: 160, at: 1 + f, dur: 0.8, sfx: 'pop' });
          S.text(l, { size: 'label', x: 90 + i * 227, y: 1085, w: 220, align: 'center', at: 1 + f, d: 0.2, style: 'font-size:36px' });
        });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Sistem Pembesar Empat Lipatan</div>', { color: 'navy', anim: 'stamp', x: 90, y: 1190, w: 900, at: 2, d: 0.5, pad: '12px 20px' });
      },
    },
    {
      id: 'ringkasan', bg: 'grid', transition: 'zoom',
      lines: [
        { text: 'Jadi, enam ciri negara bangsa Melaka ialah: wilayah pengaruh, kedaulatan, lambang kebesaran, keunggulan undang-undang, rakyat dan kerajaan.', pause: 0.35 },
        'Gabungan enam ciri inilah yang menjadikan Melaka kuat dan disegani. Seterusnya: keunggulan sistem pentadbiran dan undang-undang!',
      ],
      tail: 0.8,
      board: {
        name: 'Ringkasan enam ciri',
        visual: 'Roda enam ciri mengelilingi istana Melaka; maskot menunjuk ke kad episod seterusnya.',
        doodle: 'Istana, enam label berwarna di sekeliling bulatan, pelekat maskot.',
        text: 'Wilayah Pengaruh · Kedaulatan · Lambang Kebesaran · Keunggulan Undang-undang · Rakyat · Kerajaan · Seterusnya: 1.3',
        anim: 'Label muncul mengikut putaran jam serentak dengan narasi; istana dilukis di tengah; kad seterusnya pop.',
      },
      draw(S, { D }) {
        S.text('6 Ciri Negara Bangsa <span class="red">Melaka</span>', { size: 'h3', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.add('<svg viewBox="0 0 700 700"><circle cx="350" cy="350" r="300" fill="rgba(245,201,40,.25)" stroke="#172C63" stroke-width="5" stroke-dasharray="14 12"/></svg>', { anim: 'fade', x: 190, y: 380, w: 700, at: 0 });
        S.svg(D.palace(), { x: 380, y: 610, w: 320, at: 0, d: 0.3 });
        const L = ['Wilayah Pengaruh', 'Kedaulatan', 'Lambang Kebesaran', 'Keunggulan Undang-undang', 'Rakyat', 'Kerajaan'];
        L.forEach((l, i) => {
          const a = -Math.PI / 2 + (i * Math.PI) / 3; const cx = 540 + 310 * Math.cos(a), cy = 730 + 300 * Math.sin(a);
          S.add(`<span class="pill" style="font-size:30px;background:${i % 2 ? '#FFFDF7' : '#F5C928'};white-space:nowrap">${i + 1}. ${l}</span>`, { anim: 'pop', x: cx - 200, y: cy - 30, w: 400, align: 'center', at: 0, d: 2.2 + i * 1.05, sfx: 'pop' });
        });
        S.mascot({ x: 70, y: 1110, w: 180, at: 1, d: 2.5 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-body" style="font-size:40px">1.3 Sistem Pentadbiran & Undang-undang</div>', { x: 290, y: 1140, w: 700, at: 1, d: 3 });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Fade + zoom-in lembut pada DP; teks jenama pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
