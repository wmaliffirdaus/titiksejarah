// BAB 4 · EPISOD 02 – Subtopik 4.1: British Military Administration (BMA) (≈ 3 min)
// Chapter 1 series template (ep02–ep05). Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 94–95 (incl. Jadual 4.1).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, MALAYA, NOW, riceSack, bowl, bottle, crate, tree, pickaxe, medcross, gear, officer, iconRow, numCard, END } from './b4lib.js';

export default {
  id: 'b4_02',
  file: '02_Bab4_Subtopik_4.1',
  title: 'British Military Administration (BMA)',
  header: { chip: 'BAB 4 • 4.1', sub: 'British Military Administration' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.1)',
  music: { key: 62, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Bayangkan… sekati beras yang dahulu hanya **6 sen**, kini berharga **75 dolar**!', pause: 0.45 },
        'Inilah keadaan rakyat selepas Perang Dunia Kedua. Siapakah yang akan menyelamatkan mereka?',
      ],
      board: {
        name: 'Hook – harga beras melambung',
        visual: 'Frame pertama lengkap: tajuk "SEKATI BERAS", guni beras, tanda harga "6 SEN" ➜ anak panah ➜ cop "$75"; kemudian rakyat bermuka sedih dan soalan "SIAPA AKAN MENYELAMATKAN?".',
        doodle: 'Guni beras, tanda harga, anak panah merah, dua watak rakyat (sedih), tanda soal.',
        text: 'SEKATI BERAS · 6 SEN ➜ $75 · Siapa akan menyelamatkan rakyat?',
        anim: 'Tajuk, guni dan "6 SEN" kelihatan pada 0:00; cop $75 pada sebutan; watak pop; tanda soal pop.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Sekati <span class="hl">beras</span>…', { size: 'title', x: 60, y: 290, w: 960, align: 'center', ...NOW });
        S.add(riceSack(D), { ...NOW, x: 390, y: 420, w: 300 });
        S.card('<div class="t-title" style="font-size:80px;text-align:center">6 SEN</div><div class="tw" style="font-size:22px;text-align:center">SEBELUM PERANG</div>', { ...NOW, notape: true, x: 40, y: 760, w: 360, rot: -3, pad: '12px 16px' });
        S.add(D.arrow(10, 60, 220, 60, { w: 230, h: 120, color: RED, sw: 12, bend: -0.2 }), { ...NOW, x: 415, y: 770, w: 210 });
        S.card('<div class="t-title" style="font-size:96px;text-align:center;color:#C93436">$75</div><div class="tw" style="font-size:22px;text-align:center">OGOS 1945</div>', { anim: 'stamp', sfx: 'stamp', at: 0.6, notape: true, x: 640, y: 740, w: 380, rot: 4, pad: '10px 16px' });
        S.svg(D.rakyat({ mood: 'sad' }), { x: 120, y: 1000, w: 150, at: 1, d: 0.1, dur: 0.7 });
        S.svg(D.wanita({ mood: 'sad' }), { x: 270, y: 1010, w: 140, at: 1, d: 0.25, dur: 0.7, sfx: false });
        S.add(D.question(), { anim: 'pop', x: 470, y: 1000, w: 90, at: 1, d: 1.6 });
        S.text('Siapa akan<br><span class="red">menyelamatkan?</span>', { size: 'h3', x: 580, y: 1030, w: 440, at: 1, d: 1.8 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.1: **British Military Administration**, atau **BMA**.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.1"; tajuk; kapal British dan peta kecil Tanah Melayu; cop "BMA".',
        doodle: 'Kapal layar navy, peta Semenanjung, cop.',
        text: 'SUBTOPIK 4.1 · British Military Administration (BMA)',
        anim: 'Tajuk ditulis; kapal meluncur; cop BMA dihentak.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.1</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('British Military<br><span class="red">Administration</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.2 });
        S.add(D.ship({ hull: NAVY, sail: '#F3EBDD' }), { anim: 'slideR', x: 120, y: 700, w: 400, at: 0, d: 0.6 });
        S.stamp('BMA', { x: 600, y: 760, w: 360, at: 0.75, fs: 120, style: 'text-align:center' });
      },
    },
    {
      id: 'latar', bg: 'grid', transition: 'paper',
      lines: [
        'Pada **12 September 1945**, selepas tentera Jepun menyerah kalah, British kembali ke Tanah Melayu.',
        'Mereka melaksanakan **British Military Administration**, iaitu pentadbiran tentera British.',
        'BMA diletakkan di bawah arahan **Lord Mountbatten**, Pemerintah Tertinggi Tentera Bersekutu di Asia Tenggara.',
        'Perancangan hal ehwal awam pula dilakukan oleh Brigedier Jeneral **H.C. Willan**.',
      ],
      board: {
        name: 'Latar belakang BMA',
        visual: 'Pil tarikh; peta Tanah Melayu dengan penanda; dua watak pegawai (ILUSTRASI) dengan tag nama dan jawatan.',
        doodle: 'Peta Semenanjung, penanda merah, dua pegawai British (lakaran umum).',
        text: '12 SEPTEMBER 1945 · BMA = Pentadbiran Tentera British · LORD MOUNTBATTEN – Pemerintah Tertinggi Tentera Bersekutu di Asia Tenggara (1943–1946) · BRIG. JEN. H.C. WILLAN – hal ehwal awam',
        anim: 'Pil pop; peta dilakar; penanda pop; watak & tag muncul mengikut nama yang disebut.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">12 SEPTEMBER 1945</span></div>', { anim: 'pop', x: 40, y: 295, w: 1000, at: 0, d: 0 });
        const at = S.map({ bounds: MALAYA, w: 380 }, { x: 60, y: 400, w: 400, at: 0, d: 0.3, dur: 1.0 });
        S.pin(at, 101.7, 3.6, '<b>Tanah Melayu</b>', { at: 0.75, color: RED, fs: 38 });
        S.card('<div class="t-h3" style="color:#F5C928;text-align:center">BMA</div><div class="t-body" style="color:#FFFDF7;text-align:center;font-size:40px">Pentadbiran <b>tentera</b> British</div>', { color: 'navy', anim: 'slideR', x: 500, y: 430, w: 520, at: 1, d: 0.6 });
        S.illus({ x: 870, y: 700, at: 2, d: 0 });
        S.svg(officer(D, { pose: 'point' }), { x: 80, y: 860, w: 190, at: 2, d: 0.1, dur: 0.7 });
        S.tag('LORD MOUNTBATTEN', 'Pemerintah Tertinggi Tentera Bersekutu, Asia Tenggara', { x: 280, y: 900, w: 720, at: 2, d: 0.3 });
        S.svg(officer(D, { prop: 'scroll', pose: 'present' }), { x: 80, y: 1110, w: 170, at: 3, d: 0.1, dur: 0.7 });
        S.tag('BRIG. JEN. H.C. WILLAN', 'Perancang hal ehwal awam', { x: 280, y: 1150, w: 600, at: 3, d: 0.3 });
      },
    },
    {
      id: 'tugas', transition: 'flip',
      lines: [
        'Apakah tugas BMA? Ada dua.',
        'Pertama, **mengembalikan kestabilan** dan keamanan.',
        'Kedua, **memulihkan kepercayaan rakyat**.',
      ],
      board: {
        name: 'Dua tugas BMA',
        visual: 'Tajuk "Tugas BMA"; dua kad bernombor besar dengan ikon perisai dan hati.',
        doodle: 'Perisai, hati merah, mentol.',
        text: 'TUGAS BMA · 1 Mengembalikan kestabilan & keamanan · 2 Memulihkan kepercayaan rakyat',
        anim: 'Tajuk ditulis; setiap kad meluncur masuk tepat pada sebutannya; ikon dilukis.',
      },
      draw(S, { D }) {
        S.text('Tugas <span class="hl">BMA</span>', { size: 'title', x: 80, y: 320, w: 700, at: 0 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 170, at: 0, d: 0.5 });
        S.card(numCard(1, 'Mengembalikan <span class="hl">kestabilan</span> & keamanan', RED, 48), { anim: 'slideL', x: 80, y: 560, w: 720, at: 1 });
        S.svg(D.shield(), { x: 820, y: 560, w: 180, at: 1, d: 0.3, dur: 0.8 });
        S.card(numCard(2, 'Memulihkan <span class="hl">kepercayaan rakyat</span>', NAVY, 48), { anim: 'slideL', x: 80, y: 860, w: 720, at: 2 });
        S.add(D.heart(), { anim: 'pop', x: 830, y: 880, w: 160, at: 2, d: 0.3 });
      },
    },
    {
      id: 'kestabilan', bg: 'grid', transition: 'paper',
      lines: [
        'Untuk memulihkan keamanan, BMA membubarkan pasukan **MPAJA** pada **1 Disember 1945**.',
        'Semua senjata yang diberikan kepada mereka semasa pendudukan Jepun diarahkan supaya **dikembalikan**.',
        'Namun, BMA **gagal** mengumpulkan semula senjata tersebut.',
        'BMA juga gagal membanteras **jenayah**, keganasan, **kongsi gelap** dan **ketegangan kaum**.',
      ],
      board: {
        name: 'Usaha 1: mengembalikan kestabilan & keamanan',
        visual: 'Kotak "MPAJA DIBUBARKAN" + tarikh; pedang bersilang ➜ peti "PULANGKAN"; cop GAGAL; empat kad masalah bertanda pangkah.',
        doodle: 'Pedang bersilang, peti senjata, pangkah merah, cop.',
        text: 'MPAJA dibubarkan · 1 Dis 1945 · Senjata diarah dikembalikan · GAGAL dikumpul · Jenayah · Keganasan · Kongsi gelap · Ketegangan kaum',
        anim: 'Kotak & tarikh pop; anak panah dilukis; cop GAGAL dihentak; kad masalah meluncur satu demi satu.',
      },
      draw(S, { D }) {
        S.text('Usaha 1: <span class="red">Kestabilan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-h3" style="text-align:center"><span class="hl">MPAJA</span> dibubarkan</div><div class="tw red" style="font-size:26px;text-align:center">1 DISEMBER 1945</div>', { anim: 'pop', x: 60, y: 400, w: 440, at: 0, d: 0.2 });
        S.add(D.swords(), { anim: 'pop', x: 560, y: 390, w: 170, at: 1, d: 0 });
        S.arrow(740, 470, 820, 470, { at: 1, d: 0.3, color: RED, sw: 9, bend: 0 });
        S.add(crate(D, 'PULANGKAN'), { anim: 'pop', x: 830, y: 395, w: 200, at: 1, d: 0.6 });
        S.stamp('GAGAL!', { x: 300, y: 610, w: 480, at: 2, d: 0.1, fs: 96, style: 'text-align:center' });
        const probs = [['Jenayah', 0.15], ['Keganasan', 0.3], ['Kongsi gelap', 0.45], ['Ketegangan kaum', 0.72]];
        probs.forEach(([t, f], i) => S.add(iconRow(fmt, D.cross(), t, { fs: 42, iw: 56 }), { anim: 'slideR', x: 60 + (i % 2) * 490, y: 820 + Math.floor(i / 2) * 140, w: 470, at: 3 + f, sfx: 'swish' }));
        S.card('<div class="t-body" style="font-size:38px;text-align:center;color:#FFFDF7">Keamanan <b>gagal</b> dipulihkan</div>', { color: 'red', anim: 'slideU', x: 160, y: 1110, w: 760, at: 3, d: 2.2, pad: '10px 18px' });
      },
    },
    {
      id: 'derita', transition: 'slideUp',
      lines: [
        'Rakyat pula mengalami kesukaran hidup. Bekalan **makanan** dan **ubat-ubatan** sukar didapati.',
        'Kalau ada pun, harganya **melambung tinggi**.',
        'Wabak penyakit merebak, terutamanya **beri-beri** akibat kekurangan zat makanan. **Kebuluran** berlaku di kebanyakan tempat.',
      ],
      board: {
        name: 'Kesukaran hidup rakyat',
        visual: 'Mangkuk kosong dan botol ubat dipangkah; anak panah harga naik; rakyat sedih; cop BERI-BERI & KEBULURAN.',
        doodle: 'Mangkuk kosong, botol ubat, anak panah naik, watak rakyat sedih, cop.',
        text: 'Makanan & ubat sukar didapati · Harga melambung · Beri-beri (kekurangan zat makanan) · Kebuluran',
        anim: 'Ikon pop; pangkah dihentak; anak panah harga dilukis; dua cop dihentak pada sebutan.',
      },
      draw(S, { D }) {
        S.text('Rakyat <span class="red">Menderita</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add(bowl(D), { anim: 'pop', x: 70, y: 430, w: 280, at: 0, d: 0.5 });
        S.add(bottle(D), { anim: 'pop', x: 380, y: 400, w: 120, at: 0, d: 0.75 });
        S.add(D.cross(), { anim: 'stamp', x: 230, y: 420, w: 140, at: 0, d: 1.2, sfx: 'stamp' });
        S.text('sukar didapati', { size: 'note', x: 70, y: 630, w: 440, align: 'center', at: 0, d: 1.3 });
        S.arrow(600, 640, 900, 400, { at: 1, d: 0, color: RED, sw: 12, bend: -0.1, sfx: 'whoosh' });
        S.text('Harga <span class="red">melambung!</span>', { size: 'h3', x: 560, y: 650, w: 460, align: 'center', at: 1, d: 0.3 });
        S.svg(D.rakyat({ mood: 'sad' }), { x: 420, y: 760, w: 220, at: 2, d: -0.2, dur: 0.7, sfx: false });
        S.stamp('BERI-BERI', { x: 40, y: 830, w: 400, at: 2, d: 0.25, fs: 56, rot: -4, style: 'text-align:center;white-space:nowrap' });
        S.text('kekurangan zat makanan', { size: 'note', x: 40, y: 975, w: 400, align: 'center', at: 2, d: 0.5 });
        S.stamp('KEBULURAN', { x: 640, y: 860, w: 400, at: 2, d: 0.72, fs: 56, rot: 4, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'inflasi', bg: 'grid', transition: 'paper',
      lines: [
        'Lihat **Jadual 4.1**. Sebelum perang, sekati beras hanya **6 sen** dalam Dolar Selat.',
        'Pada Disember 1944, harganya **8 dolar 20 sen** dalam mata wang Jepun. Julai 1945, **36 dolar**. Ogos 1945, **75 dolar**!',
        'Harga gula, garam, telur dan petrol juga naik mendadak.',
      ],
      board: {
        name: 'Jadual 4.1 – Inflasi',
        visual: 'Carta bar harga sekati beras: Dis 1941 $0.06 (Dolar Selat) · Dis 1944 $8.20 · Jul 1945 $36 · Ogos 1945 $75 (mata wang Jepun); ikon barang lain di bawah.',
        doodle: 'Carta bar tulisan tangan, guni beras kecil, ikon gula/garam/telur/petrol.',
        text: 'JADUAL 4.1 · Beras/kati: 0.06 ➜ 8.20 ➜ 36.00 ➜ 75.00 · Gula · Garam · Telur · Petrol naik mendadak',
        anim: 'Setiap bar tumbuh dari bawah tepat pada tarikhnya disebut; label harga pop.',
      },
      src: 'Sumber: Jadual 4.1, Buku Teks Sejarah Tingkatan 4 KSSM, ms. 95',
      draw(S, { D }) {
        S.text('Jadual 4.1: <span class="hl">Inflasi</span>', { size: 'h2', x: 60, y: 295, w: 760, at: 0, d: -0.3 });
        S.add(riceSack(D), { anim: 'pop', x: 860, y: 280, w: 150, at: 0, d: 0 });
        S.add('<svg viewBox="0 0 940 20"><path d="M10 10 H930" stroke="#172C63" stroke-width="6" stroke-linecap="round"/></svg>', { anim: 'wipe', x: 70, y: 1015, w: 940, at: 0, d: 0, sfx: false });
        const bars = [['DIS 1941', '6 sen', 0.012, 0, 0.55, '#3F5DA8'], ['DIS 1944', '$8.20', 0.11, 1, 0.05, GOLD], ['JUL 1945', '$36', 0.48, 1, 0.42, GOLD], ['OGOS 1945', '$75', 1, 1, 0.7, RED]];
        bars.forEach(([d, v, k, ln, f], i) => {
          const x = 100 + i * 225, H = 520, h = Math.max(10, H * k);
          S.add(`<div style="height:${h}px;background:${bars[i][5]};border:5px solid #172C63;border-radius:10px 10px 0 0"></div>`, { anim: 'wipeD', x, y: 1020 - h, w: 160, at: ln + f, dur: 0.6, sfx: 'pop', style: 'transform-origin:bottom', origin: '50% 100%' });
          S.text(`<b>${v}</b>`, { size: 'h3', x: x - 30, y: 1020 - h - 70, w: 220, align: 'center', at: ln + f, d: 0.4 });
          S.text(d, { size: 'label', x: x - 30, y: 1030, w: 220, align: 'center', at: ln + f, style: 'font-size:38px' });
        });
        S.text('Dolar Selat', { size: 'note', x: 50, y: 1085, w: 260, align: 'center', at: 0, d: 2.5 });
        S.text('Mata wang Jepun ➜', { size: 'note', x: 330, y: 1085, w: 600, align: 'center', at: 1, d: 0.3 });
        S.card('<div class="t-body" style="font-size:38px;text-align:center">Gula · Garam · Telur · Petrol: <b>naik mendadak!</b></div>', { color: 'gold', anim: 'slideU', x: 70, y: 1160, w: 940, at: 2, d: 0, pad: '10px 18px' });
      },
    },
    {
      id: 'pasar-gelap', transition: 'flip',
      lines: [
        'Rakyat juga tidak mempunyai wang untuk membeli makanan.',
        'Kegiatan **menyorok barang**, amalan **rasuah**, **peras ugut** dan **pasar gelap** di Kuala Lumpur menjadi semakin tidak terkawal.',
        'Masalah ini berakar umbi sehingga gagal dibanteras oleh BMA.',
      ],
      board: {
        name: 'Rasuah & pasar gelap',
        visual: 'Gerai pasar doodle "PASAR GELAP · KUALA LUMPUR"; empat tag masalah mengelilinginya; cop "TIDAK TERKAWAL".',
        doodle: 'Gerai pasar, dompet kosong, syiling, empat tag.',
        text: 'Tiada wang · Menyorok barang · Rasuah · Peras ugut · Pasar gelap (Kuala Lumpur) · Gagal dibanteras',
        anim: 'Gerai pop; tag muncul serentak dengan setiap perkataan; cop dihentak pada baris terakhir.',
      },
      draw(S, { D }) {
        S.text('Tiada <span class="red">wang</span>…', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add(D.coins(), { anim: 'pop', x: 760, y: 290, w: 200, at: 0, d: 0.3 });
        S.add(D.cross(), { anim: 'stamp', x: 820, y: 290, w: 110, at: 0, d: 0.7 });
        S.add(D.market(), { anim: 'pop', x: 310, y: 520, w: 460, at: 1, d: -0.1 });
        S.text('Pasar gelap · Kuala Lumpur', { size: 'label', x: 240, y: 800, w: 600, align: 'center', at: 1, d: 0.1 });
        [['Menyorok barang', 60, 450, 0.1], ['Rasuah', 790, 450, 0.3], ['Peras ugut', 60, 860, 0.45], ['Pasar gelap', 760, 860, 0.62]].forEach(([t, x, y, f], i) =>
          S.card(`<div class="t-h3" style="font-size:40px;text-align:center">${t}</div>`, { anim: 'pop', x, y, w: 250, at: 1 + f, rot: i % 2 ? 3 : -3, pad: '10px 12px', notape: true }));
        S.stamp('GAGAL DIBANTERAS', { x: 160, y: 1060, w: 760, at: 2, d: 0.2, fs: 64, style: 'text-align:center' });
      },
    },
    {
      id: 'pemulihan', bg: 'grid', transition: 'paper',
      lines: [
        'BMA berharap pemulihan **sosioekonomi** akan memulihkan kepercayaan rakyat.',
        'Ladang **getah**, lombong **bijih timah**, prasarana dan kemudahan **kesihatan** yang dimusnahkan oleh Jepun cuba dipulihkan.',
        'Namun, **jentera**, alat ganti, mesin dan teknologi sukar dibawa masuk. Sosioekonomi pun sukar dipulihkan.',
      ],
      board: {
        name: 'Usaha 2: memulihkan kepercayaan rakyat (sosioekonomi)',
        visual: 'Empat kad ikon: ladang getah, lombong bijih timah, prasarana, kesihatan; kemudian kad merah "jentera, alat ganti, mesin, teknologi sukar dibawa masuk".',
        doodle: 'Pokok getah, beliung, jambatan/jalan, palang merah, gear.',
        text: 'Pulihkan: Ladang getah · Lombong bijih timah · Prasarana · Kemudahan kesihatan · Masalah: jentera, alat ganti, mesin & teknologi sukar dibawa masuk',
        anim: 'Kad ikon pop satu demi satu mengikut narasi; gear dipangkah; kad merah meluncur naik.',
      },
      draw(S, { D }) {
        S.text('Usaha 2: <span class="red">Sosioekonomi</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const cards = [['Ladang getah', tree(D), 0.12], ['Lombong bijih timah', pickaxe(D), 0.3], ['Prasarana', D.palace(), 0.55], ['Kesihatan', medcross(D), 0.75]];
        cards.forEach(([t, ic, f], i) => {
          const x = 60 + (i % 2) * 490, y = 410 + Math.floor(i / 2) * 290;
          S.card('<div style="height:230px"></div>', { anim: 'pop', x, y, w: 470, at: 1 + f, rot: i % 2 ? 1 : -1, sfx: 'pop' });
          S.add(ic, { anim: 'pop', x: x + 25, y: y + 30, w: 170, at: 1 + f, d: 0.1, sfx: false });
          S.text(t, { size: 'h3', x: x + 210, y: y + 75, w: 240, at: 1 + f, d: 0.25, style: 'font-size:42px' });
        });
        S.add(gear(D), { anim: 'pop', x: 70, y: 1000, w: 150, at: 2, d: 0.05 });
        S.add(D.cross(), { anim: 'stamp', x: 100, y: 1020, w: 100, at: 2, d: 0.5 });
        S.card('<div class="t-body" style="font-size:38px;color:#FFFDF7">Jentera, alat ganti, mesin & teknologi <b>sukar dibawa masuk</b></div>', { color: 'red', anim: 'slideR', x: 250, y: 1010, w: 770, at: 2, d: 0.15, pad: '12px 20px' });
      },
    },
    {
      id: 'hampa', transition: 'slideUp',
      lines: [
        { text: 'Akhirnya, rakyat **hampa** dengan ketidakupayaan BMA menangani masalah mereka.', pause: 0.3 },
        'BMA gagal melaksanakan tanggungjawab yang diharapkan oleh rakyat.',
      ],
      board: {
        name: 'Kesimpulan: rakyat hampa',
        visual: 'Tiga watak rakyat bermuka sedih di hadapan kad BMA; cop besar "HAMPA"; dua kad ringkasan (kestabilan ✗, kepercayaan ✗).',
        doodle: 'Watak rakyat (sedih), cop, pangkah.',
        text: 'Rakyat HAMPA · Kestabilan ✗ · Kepercayaan rakyat ✗ · BMA gagal',
        anim: 'Watak pop; cop dihentak pada "hampa"; dua kad dipangkah satu demi satu.',
      },
      draw(S, { D }) {
        [[D.rakyat({ mood: 'sad' }), 90], [D.wanita({ mood: 'sad' }), 300], [D.petani({ mood: 'sad' }), 500]].forEach(([sv, x], i) => S.svg(sv, { x, y: 330, w: 200, at: 0, d: 0.1 + i * 0.15, dur: 0.7, sfx: i ? false : 'pop' }));
        S.stamp('HAMPA', { x: 680, y: 420, w: 340, at: 0.2, fs: 96, rot: -6, style: 'text-align:center' });
        S.card(numCard('✗', 'Kestabilan & keamanan', RED, 46), { anim: 'slideL', x: 90, y: 800, w: 900, at: 1, d: 0, notape: true });
        S.card(numCard('✗', 'Kepercayaan rakyat', RED, 46), { anim: 'slideL', x: 90, y: 990, w: 900, at: 1, d: 0.5, notape: true });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Pengajarannya: kita mesti sentiasa **berwaspada** dan tidak mudah mempercayai **kuasa asing**.',
        'Kenali sejarah, fahami masa kini. Seterusnya: **gagasan Malayan Union**, rancangan British yang mencetuskan bantahan besar-besaran!',
      ],
      tail: 0.8,
      board: {
        name: 'Iktibar & episod seterusnya',
        visual: 'Mentol + kad koyak "Sentiasa berwaspada, jangan mudah percaya kuasa asing"; maskot dan kad episod seterusnya.',
        doodle: 'Mentol, kad koyak, pelekat maskot.',
        text: 'IKTIBAR · Sentiasa berwaspada · Jangan mudah percaya kuasa asing · Seterusnya: 4.2 Gagasan Malayan Union',
        anim: 'Mentol pop; kad naik; maskot & kad seterusnya pop.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">Iktibar</span>', { size: 'title', x: 60, y: 300, w: 700, at: 0, d: -0.3 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 170, at: 0, d: 0.2 });
        S.card('<div class="t-body" style="text-align:center">Sentiasa <span class="hl">berwaspada</span>,<br>jangan mudah percaya <span class="hl">kuasa asing</span>.</div>', { tear: true, anim: 'slideU', x: 90, y: 520, w: 900, at: 0, d: 0.5 });
        S.mascot({ x: 80, y: 900, w: 260, at: 1, d: 0.2 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">4.2 Gagasan Malayan Union</div>', { x: 380, y: 960, w: 600, at: 1, d: 1.6 });
      },
    },
    END,
  ],
};
