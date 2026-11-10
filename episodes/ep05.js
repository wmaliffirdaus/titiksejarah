// EPISOD 05 – Subtopik 1.4: Peranan Pemerintah dan Rakyat (≈ 3–4 min)
import { fmt, RED, NAVY, GOLD } from './lib.js';

export default {
  id: '05',
  file: '05_Bab1_Subtopik_1.4',
  title: 'Peranan Pemerintah dan Rakyat',
  header: { chip: 'BAB 1 • 1.4', sub: 'Peranan Pemerintah & Rakyat' },
  music: { key: 62, bpm: 102, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Apa jadi kalau raja bertindak zalim, atau rakyat pula derhaka?', pause: 0.45 },
        'Orang Melayu dahulu sudah ada **perjanjian** untuk mengelakkannya!',
      ],
      board: {
        name: 'Hook – raja zalim atau rakyat derhaka?',
        visual: 'Raja dan rakyat berdiri berhadapan dengan petir merah di antara mereka; kemudian skrol perjanjian muncul dan menenangkan keadaan.',
        doodle: 'Watak raja (muka marah), watak rakyat (muka sedih), petir merah, skrol kuning "WAADAT".',
        text: 'Raja ZALIM? · Rakyat DERHAKA? · ➜ PERJANJIAN',
        anim: 'Watak pop dari kiri & kanan; petir berdenyut; skrol dilukis dan petir hilang.',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.text('Raja <span class="red">ZALIM</span>?', { size: 'h2', x: 60, y: 300, w: 480, at: 0, d: 0.3 });
        S.text('Rakyat <span class="red">DERHAKA</span>?', { size: 'h2', x: 520, y: 300, w: 520, align: 'right', at: 0, d: 2.2 });
        S.svg(D.sultan({ pose: 'point', mood: 'sad' }), { x: 90, y: 440, w: 280, at: 0, d: 0.6 });
        S.svg(D.rakyat({ pose: 'down', mood: 'sad' }), { x: 720, y: 440, w: 270, at: 0, d: 2.4 });
        S.add(`<svg viewBox="0 0 120 220"><path d="M70 0 L20 110 L60 110 L30 220 L100 90 L60 90 L90 0 Z" fill="${RED}" stroke="${NAVY}" stroke-width="5"/></svg>`, { anim: 'pop', x: 480, y: 520, w: 120, at: 0, d: 3.2, out: 1, pulse: [{ at: 0, d: 3.8 }] });
        S.svg(D.scroll('WAADAT', { ts: 40 }), { x: 410, y: 520, w: 260, at: 1, d: 0.2 });
        S.stamp('PERJANJIAN', { x: 270, y: 1050, w: 540, at: 1, d: 1.2, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 1.4: **Peranan Pemerintah dan Rakyat**.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Tajuk; Sultan dan rakyat berdiri di dua sisi dengan dua anak panah melengkung membentuk kitaran.',
        doodle: 'Sultan, rakyat, ikon kitaran merah-kuning, pelekat maskot.',
        text: 'SUBTOPIK 1.4 · Peranan Pemerintah & Rakyat',
        anim: 'Tajuk ditulis; watak pop; kitaran dilukis.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 1.4</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Peranan <span class="red">Pemerintah</span><br>& Rakyat', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.2 });
        S.svg(D.sultan(), { x: 90, y: 720, w: 220, at: 0, d: 0.8 });
        S.svg(D.cycle(), { x: 360, y: 760, w: 360, at: 0, d: 1.2 });
        S.svg(D.petani(), { x: 770, y: 720, w: 220, at: 0, d: 1 });
      },
    },
    {
      id: 'golongan', bg: 'grid', transition: 'paper',
      lines: [
        'Masyarakat Melaka terbahagi kepada dua golongan.',
        'Golongan **pemerintah**, iaitu Sultan, kerabat diraja dan pembesar.',
        'Dan golongan yang **diperintah**, iaitu rakyat biasa dan hamba.',
        'Hamba pula terbahagi kepada hamba raja, hamba berhutang dan hamba abdi.',
      ],
      board: {
        name: 'Dua golongan masyarakat',
        visual: 'Carta dua tingkat: kotak navy (pemerintah) di atas, kotak kuning (diperintah) di bawah, dengan watak dalam setiap kotak.',
        doodle: 'Sultan, puteri/kerabat, pembesar; petani, nelayan, pedagang, hamba (watak sederhana).',
        text: 'GOLONGAN PEMERINTAH: Sultan · Kerabat diraja · Pembesar · GOLONGAN DIPERINTAH: Rakyat biasa · Hamba (hamba raja, hamba berhutang, hamba abdi)',
        anim: 'Kotak atas meluncur turun; watak pop; kotak bawah meluncur naik; watak pop.',
      },
      draw(S, { D }) {
        S.text('2 Golongan Masyarakat', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-h3" style="color:#F5C928">GOLONGAN PEMERINTAH</div><div style="height:270px"></div>', { color: 'navy', anim: 'slideD', x: 60, y: 400, w: 960, at: 1, d: -0.2 });
        [[D.sultan(), 'Sultan', 0.35], [D.wanita({ tudung: GOLD, shirt: RED }), 'Kerabat diraja', 0.55], [D.bendahara(), 'Pembesar', 0.8]].forEach(([sv, l, f], i) => {
          S.svg(sv, { x: 120 + i * 300, y: 470, w: 160, at: 1 + f, dur: 0.7, sfx: 'pop' });
          S.text(l, { size: 'label', x: 60 + i * 300, y: 680, w: 280, align: 'center', at: 1 + f, d: 0.2, style: 'color:#F3EBDD' });
        });
        S.card('<div class="t-h3">GOLONGAN DIPERINTAH</div><div style="height:270px"></div>', { color: 'gold', anim: 'slideU', x: 60, y: 820, w: 960, at: 2, d: -0.2 });
        [[D.petani(), 'Rakyat biasa', 0.45], [D.nelayan(), '', 0.55], [D.person({ hat: 'hair', shirt: '#9AA3B5', pants: '#6B7280' }), 'Hamba', 0.85]].forEach(([sv, l, f], i) => {
          S.svg(sv, { x: 120 + i * 300, y: 890, w: 160, at: 2 + f, dur: 0.7, sfx: 'pop' });
          if (l) S.text(l, { size: 'label', x: (i === 0 ? 210 : 60 + i * 300), y: 1100, w: 280, align: 'center', at: 2 + f, d: 0.2 });
        });
        S.card('<div class="t-body" style="font-size:34px">Hamba: <b>hamba raja</b> · <b>hamba berhutang</b> · <b>hamba abdi</b></div>', { anim: 'slideU', x: 60, y: 1200, w: 960, at: 3, d: 0.2, pad: '8px 20px', notape: true });
      },
    },
    {
      id: 'pemerintah', transition: 'flip',
      lines: [
        'Apakah peranan golongan **pemerintah**?',
        'Sultan dan pembesar bertanggungjawab melindungi rakyat dan mempertahankan negeri daripada musuh.',
        'Mereka juga perlu memerintah dengan **adil**, menjaga kebajikan rakyat, menguatkuasakan undang-undang, dan memajukan ekonomi, terutamanya perdagangan di pelabuhan.',
        'Sultan juga memelihara dan menyebarkan agama Islam.',
      ],
      board: {
        name: 'Peranan golongan pemerintah',
        visual: 'Sultan di kiri; senarai semak bergambar enam peranan di kanan.',
        doodle: 'Perisai (lindungi), pedang bersilang (pertahan negeri), neraca (adil), hati (kebajikan), skrol (undang-undang), kapal (ekonomi), bintang (agama Islam).',
        text: 'PEMERINTAH · Lindungi rakyat · Pertahan negeri · Adil · Kebajikan rakyat · Kuatkuasa undang-undang · Majukan ekonomi · Pelihara & sebar Islam',
        anim: 'Setiap baris senarai muncul serentak dengan sebutan, ikon dilukis di sebelahnya.',
      },
      draw(S, { D }) {
        S.text('Peranan <span class="red">Pemerintah</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.sultan({ pose: 'present' }), { x: 50, y: 470, w: 260, at: 0, d: 0.2 });
        S.tag('SULTAN & PEMBESAR', 'golongan pemerintah', { x: 40, y: 840, w: 320, at: 0, d: 0.6 });
        const rows = [['Lindungi rakyat', D.shield(), 1, 0.25], ['Pertahan negeri', D.swords(), 1, 0.6], ['Memerintah dengan **adil**', D.scales(), 2, 0.12], ['Jaga **kebajikan** rakyat', D.heart(), 2, 0.3], ['Kuatkuasa **undang-undang**', D.scroll('', { color: RED }), 2, 0.48], ['Majukan **ekonomi**', D.ship({ waves: false }), 2, 0.68], ['Pelihara & sebar **Islam**', D.star(), 3, 0.2]];
        rows.forEach(([t, ic, at, f], i) => S.add(`<div class="card notape" style="display:flex;align-items:center;gap:14px;padding:6px 14px"><div style="width:62px;flex:none">${ic}</div><div class="t-body" style="font-size:36px">${fmt(t)}</div></div>`, { anim: 'slideR', x: 390, y: 400 + i * 128, w: 630, at: at + f, sfx: 'swish' }));
      },
    },
    {
      id: 'rakyat', transition: 'paper',
      lines: [
        'Golongan **rakyat** pula memberikan taat setia yang tidak berbelah bahagi kepada Sultan.',
        'Rakyat membayar cukai dan menjalankan **kerahan tenaga**, contohnya membina istana, jalan dan kubu.',
        'Ketika perang, rakyat menjadi tentera untuk mempertahankan negeri. Rakyat juga menggerakkan ekonomi sebagai petani, nelayan, tukang dan pedagang.',
      ],
      board: {
        name: 'Peranan golongan rakyat',
        visual: 'Empat panel kecil bergambar seperti papan cerita: taat setia, bayar cukai, kerahan tenaga, menjadi tentera; jalur ekonomi di bawah.',
        doodle: 'Rakyat menjunjung (taat), syiling (cukai), rakyat dengan cangkul membina (kerah), rakyat dengan lembing (tentera); petani, nelayan, pedagang.',
        text: 'RAKYAT · Taat setia · Bayar cukai · Kerahan tenaga (istana, jalan, kubu) · Tentera ketika perang · Gerakkan ekonomi',
        anim: 'Panel pop satu demi satu mengikut sebutan; jalur ekonomi meluncur naik.',
      },
      draw(S, { D }) {
        S.text('Peranan <span class="red">Rakyat</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const panels = [['Taat setia', D.rakyat({ pose: 'cheer' }), 0, 0.4], ['Bayar cukai', D.coins(), 1, 0.15], ['Kerahan tenaga', D.petani({ pose: 'up', prop: 'hoe' }), 1, 0.4], ['Tentera ketika perang', D.temenggung({ hat: 'songkok', pose: 'hold', prop: 'spear' }), 2, 0.1]];
        panels.forEach(([t, ic, at, f], i) => {
          const x = 60 + (i % 2) * 490, y = 400 + Math.floor(i / 2) * 330;
          S.card('<div style="height:270px"></div>', { anim: 'pop', x, y, w: 470, at: at + f, sfx: 'pop', rot: i % 2 ? 1 : -1 });
          S.svg(ic, { x: x + 30, y: y + 30, w: t === 'Bayar cukai' ? 170 : 150, at: at + f, d: 0.1, dur: 0.8, sfx: false });
          S.text(t, { size: 'h3', x: x + 200, y: y + 90, w: 250, at: at + f, d: 0.3, style: 'font-size:40px' });
        });
        S.illus({ x: 870, y: 360, at: 0, d: 0.5 });
        S.card('<div class="t-body" style="font-size:36px;text-align:center">Ekonomi: <b>petani · nelayan · tukang · pedagang</b></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1080, w: 960, at: 2, d: 4.2, pad: '12px 18px' });
      },
    },
    {
      id: 'penghubung', bg: 'grid', transition: 'slideUp',
      lines: [
        '**Pembesar** pula menjadi penghubung antara Sultan dengan rakyat.',
        'Mereka mentadbir kawasan pegangan masing-masing, memungut cukai, dan mengerahkan tenaga rakyat apabila diperlukan oleh Sultan.',
      ],
      board: {
        name: 'Pembesar sebagai penghubung',
        visual: 'Rajah aliran menegak tiga tingkat: Sultan ➜ Pembesar ➜ Rakyat, dengan tiga tugas pembesar di sisi.',
        doodle: 'Sultan, Bendahara (mewakili pembesar), kumpulan rakyat; peta kecil kawasan pegangan, syiling, cangkul.',
        text: 'Sultan ➜ PEMBESAR ➜ Rakyat · Tadbir kawasan pegangan · Pungut cukai · Kerah tenaga rakyat',
        anim: 'Tiga tingkat muncul dari atas ke bawah; tugas pembesar pop satu persatu.',
      },
      draw(S, { D }) {
        S.text('Pembesar = <span class="hl">Penghubung</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.sultan(), { x: 140, y: 390, w: 150, at: 0, d: 0.1, dur: 0.7 });
        S.arrow(215, 600, 215, 690, { at: 0, d: 0.8, color: RED, sw: 8, bend: 0 });
        S.svg(D.bendahara(), { x: 140, y: 690, w: 150, at: 0, d: 0.9, dur: 0.7 });
        S.tag('PEMBESAR', 'penghubung', { x: 100, y: 885, w: 240, at: 0, d: 1.2 });
        S.arrow(215, 990, 215, 1060, { at: 0, d: 1.6, color: RED, sw: 8, bend: 0 });
        [[D.petani(), 60], [D.nelayan(), 180], [D.wanita(), 300]].forEach(([sv, x], i) => S.svg(sv, { x, y: 1060, w: 110, at: 0, d: 1.8 + i * 0.2, dur: 0.6, sfx: false }));
        const t = [['Tadbir **kawasan pegangan**', D.globe(), 0.05], ['Pungut **cukai**', D.coins(), 0.45], ['Kerah **tenaga rakyat**', D.petani({ pose: 'up' }), 0.7]];
        t.forEach(([txt, ic, f], i) => S.add(`<div class="card" style="display:flex;align-items:center;gap:16px;padding:12px 18px"><div style="width:100px;flex:none">${ic}</div><div class="t-body" style="font-size:40px">${fmt(txt)}</div></div>`, { anim: 'slideR', x: 440, y: 450 + i * 250, w: 580, at: 1 + f, sfx: 'swish', rot: i % 2 ? 1 : -1 }));
      },
    },
    {
      id: 'waadat', bg: 'lined', transition: 'wipe',
      lines: [
        'Hubungan ini diikat oleh **waadat**, iaitu perjanjian antara Sang Sapurba dengan Demang Lebar Daun, seperti yang dicatatkan dalam Sejarah Melayu.',
        'Mengikut waadat, raja tidak boleh menzalimi atau memalukan rakyat.',
        'Sebaliknya, rakyat tidak boleh **derhaka** kepada raja, walaupun raja itu zalim.',
        'Kedua-dua pihak bersetuju, dan sesiapa yang melanggar waadat dipercayai akan ditimpa bencana.',
      ],
      src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 1 · Sejarah Melayu',
      board: {
        name: 'Waadat – perjanjian raja dan rakyat',
        visual: 'Dua watak bersalaman di atas skrol perjanjian; dua kad syarat di bawah (syarat raja, syarat rakyat).',
        doodle: 'Sang Sapurba (bermahkota) dan Demang Lebar Daun (bertanjak), skrol "WAADAT", buku "Sejarah Melayu", label "ILUSTRASI".',
        text: 'WAADAT · Sang Sapurba ⇄ Demang Lebar Daun · Sejarah Melayu · Raja: tidak zalim / tidak memalukan rakyat · Rakyat: tidak derhaka · Langgar waadat ➜ ditimpa bencana',
        anim: 'Watak pop berhadapan; skrol dilukis; kad syarat meluncur masuk serentak dengan narasi; cop "WAADAT".',
      },
      draw(S, { D }) {
        S.stamp('WAADAT', { x: 330, y: 290, w: 420, at: 0, d: 0.4, style: 'text-align:center' });
        S.svg(D.sultan({ pose: 'point', cape: GOLD }), { x: 80, y: 430, w: 230, at: 0, d: 2.2 });
        S.tag('SANG SAPURBA', 'pihak raja', { x: 60, y: 780, w: 300, at: 0, d: 2.6 });
        S.svg(D.person({ hat: 'tanjak', hatColor: GOLD, shirt: RED, samping: NAVY, beard: true, pose: 'point' }), { x: 760, y: 430, w: 230, at: 0, d: 3.6 });
        S.tag('DEMANG LEBAR DAUN', 'pihak rakyat', { x: 690, y: 780, w: 340, at: 0, d: 4 });
        S.svg(D.book('SEJARAH|MELAYU', NAVY, { size: 24 }), { x: 445, y: 470, w: 190, at: 0, d: 5.6 });
        S.illus({ x: 60, y: 400, at: 0, d: 1 });
        S.card('<div class="tw red" style="font-size:24px">SYARAT 1 · RAJA</div><div class="t-body" style="font-size:40px">Tidak boleh <span class="hl">zalim</span> atau <span class="hl">memalukan</span> rakyat</div>', { tear: true, anim: 'slideL', x: 60, y: 900, w: 470, at: 1, d: 0.2 });
        S.card('<div class="tw red" style="font-size:24px">SYARAT 2 · RAKYAT</div><div class="t-body" style="font-size:40px">Tidak boleh <span class="hl">derhaka</span>, walaupun raja zalim</div>', { tear: true, anim: 'slideR', x: 550, y: 900, w: 470, at: 2, d: 0.2 });
        S.card('<div class="t-body" style="font-size:36px;color:#FFFDF7;text-align:center">Langgar waadat ➜ dipercayai ditimpa bencana</div>', { color: 'red', anim: 'slideU', x: 110, y: 1185, w: 860, at: 3, d: 0.3, pad: '10px 18px' });
      },
    },
    {
      id: 'timbalbalik', bg: 'grid', transition: 'paper',
      lines: [
        'Inilah **hubungan timbal balik**: pemerintah melindungi rakyat dan berlaku adil, manakala rakyat pula taat setia.',
        'Kepercayaan kepada **daulat** dan takut akan **derhaka** mengukuhkan lagi kesetiaan rakyat kepada Sultan.',
      ],
      board: {
        name: 'Hubungan timbal balik',
        visual: 'Rajah kitaran besar: PEMERINTAH (atas) ⇄ RAKYAT (bawah); anak panah merah "lindungi & adil" turun, anak panah kuning "taat setia" naik; dua cop daulat/derhaka.',
        doodle: 'Sultan, rakyat, dua anak panah melengkung tebal, perisai & hati kecil di atas anak panah.',
        text: 'HUBUNGAN TIMBAL BALIK · Pemerintah ➜ lindungi & adil · Rakyat ➜ taat setia · DAULAT · DERHAKA',
        anim: 'Watak pop; anak panah dilukis satu demi satu mengikut narasi; cop daulat & derhaka dihentak.',
      },
      draw(S, { D }) {
        S.text('Hubungan <span class="hl">Timbal Balik</span>', { size: 'h2', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.svg(D.sultan(), { x: 430, y: 380, w: 210, at: 0, d: 0.2, dur: 0.8 });
        S.tag('PEMERINTAH', '', { x: 650, y: 470, w: 280, at: 0, d: 0.3 });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 430, y: 820, w: 210, at: 0, d: 2.6, dur: 0.8 });
        S.tag('RAKYAT', '', { x: 650, y: 920, w: 220, at: 0, d: 2.7 });
        S.arrow(380, 520, 380, 920, { at: 0, d: 1.2, color: RED, sw: 10, bend: 0.35 });
        S.text('lindungi<br>& adil', { size: 'label', x: 60, y: 660, w: 250, align: 'center', at: 0, d: 1.6, style: 'color:#C93436' });
        S.arrow(700, 900, 700, 600, { at: 0, d: 4.2, color: '#E0B000', sw: 10, bend: 0.35 });
        S.text('taat<br>setia', { size: 'label', x: 790, y: 690, w: 220, align: 'center', at: 0, d: 4.6, style: 'color:#B98A00' });
        S.stamp('DAULAT', { x: 100, y: 1160, w: 380, at: 1, d: 1.2, fs: 56, style: 'text-align:center' });
        S.stamp('DERHAKA', { x: 580, y: 1160, w: 400, at: 1, d: 2.6, fs: 56, rot: 4, style: 'text-align:center' });
      },
    },
    {
      id: 'kestabilan', transition: 'slideUp',
      lines: [
        { text: 'Hasilnya? **Kestabilan politik**.', pause: 0.3 },
        'Apabila negeri aman, pedagang berasa selamat, ekonomi berkembang, dan Melaka menjadi pelabuhan entrepot yang terkenal.',
        'Sebaliknya, jika hubungan ini rosak, kerajaan akan menjadi lemah.',
      ],
      board: {
        name: 'Kepentingan: kestabilan politik',
        visual: 'Rantai sebab-akibat menurun (4 kotak bersambung anak panah): Aman ➜ Pedagang selamat ➜ Ekonomi berkembang ➜ Melaka gemilang; amaran kecil di bawah.',
        doodle: 'Perisai, kapal, syiling, istana; tanda amaran merah.',
        text: 'KESTABILAN POLITIK · Negeri aman ➜ Pedagang selamat ➜ Ekonomi berkembang ➜ Melaka entrepot terkenal · Hubungan rosak = kerajaan lemah',
        anim: 'Kotak rantai muncul berturutan serentak dengan narasi; kad amaran meluncur di akhir.',
      },
      draw(S, { D }) {
        S.stamp('KESTABILAN POLITIK', { x: 140, y: 290, w: 800, at: 0, d: 0.5, fs: 56, style: 'text-align:center' });
        const chain = [['Negeri aman', D.shield(), 0.12], ['Pedagang selamat', D.ship({ waves: false }), 0.3], ['Ekonomi berkembang', D.coins(), 0.5], ['Melaka: entrepot terkenal', D.palace(), 0.72]];
        chain.forEach(([t, ic, f], i) => {
          const y = 430 + i * 185, x = 120 + (i % 2) * 180;
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:20px;padding:10px 20px"><div style="width:110px;flex:none">${ic}</div><div class="t-h3" style="font-size:40px">${t}</div></div>`, { anim: 'slideR', x, y, w: 680, at: 1 + f, sfx: 'pop' });
          if (i) S.arrow(x - 40, y - 60, x + 10, y + 20, { at: 1 + f, d: -0.2, color: RED, sfx: false });
        });
        S.card('<div class="t-body" style="font-size:38px;color:#FFFDF7">⚠ Hubungan rosak ➜ kerajaan <b>lemah</b></div>', { color: 'red', anim: 'slideU', x: 160, y: 1190, w: 760, at: 2, pad: '10px 20px' });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Hari ini, semangat ini diteruskan melalui prinsip **Kesetiaan kepada Raja dan Negara** dalam Rukun Negara, di bawah sistem Raja Berperlembagaan.',
        'Itulah maksud: kenali sejarah, fahami masa kini. Seterusnya, kita ulang kaji keseluruhan Bab 1!',
      ],
      tail: 0.8,
      board: {
        name: 'Kaitan masa kini & episod seterusnya',
        visual: 'Garis masa "DAHULU ➜ KINI": waadat di kiri, Rukun Negara di kanan; maskot dan kad ulang kaji di bawah.',
        doodle: 'Skrol waadat, buku "Rukun Negara", anak panah garis masa, pelekat maskot.',
        text: 'DAHULU: Waadat · KINI: Rukun Negara – Kesetiaan kepada Raja dan Negara · Raja Berperlembagaan · "Kenali sejarah, fahami masa kini." · Seterusnya: Ulang kaji Bab 1',
        anim: 'Garis masa dilukis; dua ikon pop; slogan ditulis; maskot & kad pop.',
      },
      draw(S, { D }) {
        S.text('Dahulu ➜ <span class="red">Kini</span>', { size: 'h2', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.svg(D.scroll('WAADAT', { ts: 36 }), { x: 100, y: 400, w: 230, at: 0, d: 0.2 });
        S.arrow(360, 560, 680, 560, { at: 0, d: 0.8, color: RED, bend: -0.15 });
        S.svg(D.book('RUKUN|NEGARA', NAVY, { size: 26 }), { x: 720, y: 400, w: 240, at: 0, d: 1.5 });
        S.card('<div class="t-body" style="text-align:center">"<span class="hl">Kesetiaan kepada Raja dan Negara</span>"</div><div class="t-label" style="text-align:center">Raja Berperlembagaan</div>', { tear: true, anim: 'slideU', x: 90, y: 740, w: 900, at: 0, d: 3.2 });
        S.mascot({ x: 80, y: 1000, w: 230, at: 1, d: 0.2 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">Ulang Kaji Bab 1</div>', { x: 360, y: 1050, w: 620, at: 1, d: 3 });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Fade + zoom-in lembut pada DP; teks jenama pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
