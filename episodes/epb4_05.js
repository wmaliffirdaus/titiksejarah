// BAB 4 · EPISOD 05 – Subtopik 4.4: Penyerahan Sarawak kepada Kerajaan British (≈ 4 min)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 107–108.
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, BORNEO, NOW, officer, iconRow, numCard, tree, medcross, END } from './b4lib.js';

const KUCHING = [110.35, 1.55];
const brooke = (D, o = {}) => D.person({ hat: 'hair', shirt: PAPER, pants: NAVY, sash: GOLD, beard: false, ...o });
const oilRig = (D) => `<svg viewBox="0 0 200 240">${D.R.path('M60 230 L100 30 L140 230', { strokeWidth: 6 })}${D.R.line(72, 170, 128, 170, { strokeWidth: 4 })}${D.R.line(82, 110, 118, 110, { strokeWidth: 4 })}${D.R.ellipse(100, 232, 120, 18, { fill: '#3B3B3B' })}</svg>`;

export default {
  id: 'b4_05',
  file: '05_Bab4_Subtopik_4.4',
  title: 'Penyerahan Sarawak kepada Kerajaan British',
  header: { chip: 'BAB 4 • 4.4', sub: 'Penyerahan Sarawak' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.4)',
  music: { key: 62, bpm: 100, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Seorang raja menyerahkan seluruh negerinya kepada kuasa asing… **tanpa pengetahuan rakyatnya**!', pause: 0.45 },
        'Inilah kisah penyerahan **Sarawak**.',
      ],
      board: {
        name: 'Hook – negeri diserahkan tanpa pengetahuan rakyat',
        visual: 'Frame pertama lengkap: peta Sarawak; watak raja (ILUSTRASI) menghulurkan dokumen kepada pegawai British; rakyat di belakang dengan tanda soal; cop "TANPA PENGETAHUAN RAKYAT".',
        doodle: 'Peta Borneo, dua watak pegawai, dokumen, rakyat, tanda soal.',
        text: 'SARAWAK · diserahkan kepada British · tanpa pengetahuan rakyat',
        anim: 'Semua kelihatan pada 0:00; cop dihentak pada "tanpa pengetahuan rakyatnya"; tajuk SARAWAK pop.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Negeri <span class="red">diserahkan?</span>', { size: 'title', x: 60, y: 290, w: 960, align: 'center', ...NOW });
        S.map({ bounds: BORNEO, w: 900 }, { ...NOW, x: 90, y: 410, w: 900 });
        S.svg(brooke(D, { pose: 'present', prop: 'scroll' }), { ...NOW, x: 200, y: 640, w: 200 });
        S.svg(officer(D, { pose: 'present' }), { ...NOW, x: 430, y: 640, w: 200 });
        S.svg(D.rakyat({ mood: 'sad' }), { ...NOW, x: 760, y: 680, w: 150 });
        S.add(D.question(), { ...NOW, x: 900, y: 650, w: 80 });
        S.stamp('TANPA PENGETAHUAN RAKYAT', { x: 60, y: 1050, w: 960, at: 0, d: 2.2, fs: 56, style: 'text-align:center;white-space:nowrap' });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:56px">SARAWAK</span></div>', { anim: 'pop', x: 40, y: 1180, w: 1000, at: 1, d: 0.6 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.4: **Penyerahan Sarawak** kepada kerajaan British.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.4"; tajuk; peta Sarawak dengan penanda Kuching.',
        doodle: 'Peta Borneo, penanda.',
        text: 'SUBTOPIK 4.4 · Penyerahan Sarawak kepada Kerajaan British',
        anim: 'Tajuk ditulis; peta dilakar; penanda pop.',
      },
      draw(S) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.4</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Penyerahan<br><span class="red">Sarawak</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        const at = S.map({ bounds: BORNEO, w: 760 }, { x: 160, y: 700, w: 760, at: 0, d: 0.5, dur: 1.0 });
        S.pin(at, ...KUCHING, '<b>Kuching</b>', { at: 0, d: 1.2, color: RED, fs: 40 });
      },
    },
    {
      id: 'tentera', bg: 'grid', transition: 'paper',
      lines: [
        'Selepas Perang Dunia Kedua, tentera **Australia** mendarat di **Kuching**, dan memperkenalkan pentadbiran tentera, iaitu **British Borneo Civil Affairs Unit**, atau BBCAU, pada **11 September 1945**.',
        'Pada tahun **1946**, British memperkenalkan **BMA** di Sarawak.',
        'Kemudian, pada **1 Julai 1946**, **Vyner Brooke** menyerahkan Sarawak kepada kerajaan British.',
      ],
      board: {
        name: 'Pentadbiran tentera di Sarawak',
        visual: 'Garis masa menegak tiga hentian: 11 Sept 1945 BBCAU (tentera Australia, Kuching) · 1946 BMA · 1 Julai 1946 penyerahan oleh Vyner Brooke.',
        doodle: 'Kapal, watak tentera, dokumen penyerahan.',
        text: '11 Sept 1945 – tentera Australia di Kuching: BBCAU (British Borneo Civil Affairs Unit) · 1946 – BMA di Sarawak · 1 Julai 1946 – Vyner Brooke serah Sarawak kepada British',
        anim: 'Garis masa dilukis; setiap hentian pop tepat pada tarikh.',
      },
      draw(S, { D }) {
        S.text('Pentadbiran <span class="red">Tentera</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add('<svg viewBox="0 0 40 1000"><path d="M20 0 V1000" stroke="#172C63" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/></svg>', { anim: 'wipeD', x: 120, y: 400, w: 40, h: 760, at: 0, d: 0, dur: 1.5, sfx: false });
        const st = [['11 SEPT 1945', 'Tentera <b>Australia</b> di Kuching · <span class="hl">BBCAU</span><br><span style="font-size:32px">British Borneo Civil Affairs Unit</span>', D.ship({ hull: NAVY, waves: false }), 0, 0.3], ['1946', '<span class="hl">BMA</span> di Sarawak', officer(D), 1, 0.1], ['1 JULAI 1946', '<b>Vyner Brooke</b> serah Sarawak kepada <span class="hl">British</span>', D.treaty('1946'), 2, 0.1]];
        st.forEach(([d, t, ic, k, f], i) => {
          const y = 410 + i * 270;
          S.add(`<div style="text-align:center"><span class="pill" style="font-size:28px;padding:4px 14px">${d}</span></div>`, { anim: 'pop', x: 30, y: y + 10, w: 220, at: k + f });
          S.card(`<div class="t-body" style="font-size:40px">${t}</div>`, { anim: 'slideR', x: 270, y, w: 580, at: k + f, d: 0.15, pad: '12px 18px' });
          S.svg(ic, { x: 870, y: y - 5, w: 150, at: k + f, d: 0.3, dur: 0.7, sfx: false });
        });
      },
    },
    {
      id: 'faktor1', transition: 'flip',
      lines: [
        'Mengapa Vyner Brooke menyerahkan Sarawak? Faktor pertama: **masalah pewarisan takhta**.',
        'Beliau tidak mempunyai **anak lelaki**, sedangkan beliau semakin **tua dan uzur**.',
        'Beliau juga enggan melantik anak saudaranya, **Anthony Brooke**, anak Bertram Brooke, untuk menggantikannya.',
      ],
      board: {
        name: 'Faktor 1: Masalah pewarisan takhta',
        visual: 'Pil "FAKTOR 1"; watak Vyner Brooke (ILUSTRASI) di sebelah takhta kosong dengan tanda soal; pohon keluarga ringkas: Vyner Brooke ✗ anak lelaki · Bertram Brooke ➜ Anthony Brooke (dipangkah "ENGGAN LANTIK").',
        doodle: 'Takhta/kerusi, tanda soal, pohon keluarga, cop.',
        text: 'FAKTOR 1 · Pewarisan takhta · Tiada anak lelaki · Tua & uzur · Enggan lantik Anthony Brooke (anak Bertram Brooke)',
        anim: 'Watak pop; tanda soal pop; pohon keluarga dilukis; cop ENGGAN dihentak.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">FAKTOR 1</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: 0.5 });
        S.text('Pewarisan <span class="hl">Takhta</span>', { size: 'title', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0.7 });
        S.illus({ x: 60, y: 520, at: 0, d: 0.5 });
        S.svg(brooke(D, { mood: 'sad' }), { x: 80, y: 560, w: 200, at: 1, d: -0.1, dur: 0.6 });
        S.tag('VYNER BROOKE', 'Raja Sarawak', { x: 60, y: 900, w: 300, at: 1, d: 0.1 });
        S.card(numCard('✗', 'Tiada <span class="hl">anak lelaki</span>', RED, 42), { anim: 'slideR', x: 380, y: 560, w: 640, at: 1, d: 0.25, notape: true, pad: '6px 18px' });
        S.card(numCard('!', 'Semakin <span class="hl">tua & uzur</span>', NAVY, 42), { anim: 'slideR', x: 380, y: 720, w: 640, at: 1, d: 0.65, notape: true, pad: '6px 18px' });
        S.card('<div class="t-body" style="font-size:40px">Anak saudara: <b>Anthony Brooke</b><br><span style="font-size:34px">(anak Bertram Brooke)</span></div>', { anim: 'slideU', x: 380, y: 900, w: 640, at: 2, d: 0.2 });
        S.stamp('ENGGAN LANTIK', { x: 420, y: 1110, w: 560, at: 2, d: 0.05, fs: 56, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'faktor2', bg: 'grid', transition: 'paper',
      lines: [
        'Faktor kedua: **desakan kerajaan British**.',
        'Pada **19 Jun 1944**, Pejabat Tanah Jajahan mendesak Vyner Brooke memberikan **kuasa yang lebih luas** kepada British.',
        'Dengan menjadikan Sarawak tanah jajahan, British dapat menguasai **kekayaan ekonomi** dan menjaga **pelaburan British** di negeri itu.',
      ],
      board: {
        name: 'Faktor 2: Desakan kerajaan British',
        visual: 'Pil "FAKTOR 2"; dokumen Pejabat Tanah Jajahan bertarikh 19 Jun 1944 dengan anak panah tolak; dua kad kepentingan British (syiling, kapal/perdagangan).',
        doodle: 'Dokumen, anak panah tebal, syiling, kapal.',
        text: 'FAKTOR 2 · Desakan British · 19 Jun 1944 – Pejabat Tanah Jajahan desak kuasa lebih luas · Kuasai kekayaan ekonomi · Jaga pelaburan British',
        anim: 'Pil pop; dokumen dilukis; anak panah dilukis; kad kepentingan meluncur masuk.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">FAKTOR 2</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: -0.2 });
        S.text('Desakan <span class="hl">British</span>', { size: 'title', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0 });
        S.svg(D.scroll('DESAK!', { ts: 44 }), { x: 80, y: 540, w: 230, at: 1, d: 0 });
        S.card('<div class="tw red" style="font-size:26px">19 JUN 1944 · PEJABAT TANAH JAJAHAN</div><div class="t-body" style="font-size:42px">Beri British <span class="hl">kuasa lebih luas</span> di Sarawak</div>', { anim: 'slideR', x: 340, y: 570, w: 680, at: 1, d: 0.2 });
        S.add(iconRow(fmt, D.coins(), 'Kuasai **kekayaan ekonomi**', { fs: 44, iw: 120, pad: '14px 20px' }), { anim: 'slideL', x: 80, y: 870, w: 920, at: 2, d: 0.35, sfx: 'swish' });
        S.add(iconRow(fmt, D.ship({ waves: false }), 'Jaga **pelaburan British**', { fs: 44, iw: 120, pad: '14px 20px' }), { anim: 'slideL', x: 80, y: 1060, w: 920, at: 2, d: 0.75, sfx: 'swish' });
      },
    },
    {
      id: 'faktor3', transition: 'slideUp',
      lines: [
        'Faktor ketiga: **masalah kewangan**.',
        'Ekonomi Sarawak terjejas. **Lombong minyak** musnah, dan **ladang getah** terbiar.',
        'Pendidikan, kesihatan, jalan raya dan lapangan terbang perlu dibaiki. Vyner Brooke **tidak mampu** membangunkan semula Sarawak.',
      ],
      board: {
        name: 'Faktor 3: Masalah kewangan',
        visual: 'Pil "FAKTOR 3"; pelantar minyak dipangkah, pokok getah layu; empat ikon kecil perlu dibaiki (sekolah, kesihatan, jalan, lapangan terbang); cop "TIDAK MAMPU".',
        doodle: 'Pelantar minyak, pokok getah, buku, palang merah, jalan, kapal terbang ringkas, cop.',
        text: 'FAKTOR 3 · Kewangan · Lombong minyak musnah · Ladang getah terbiar · Perlu baiki: pendidikan, kesihatan, jalan raya, lapangan terbang · Brooke tidak mampu',
        anim: 'Ikon pop mengikut sebutan; pangkah dihentak; cop TIDAK MAMPU pada baris akhir.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">FAKTOR 3</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: -0.2 });
        S.text('Masalah <span class="hl">Kewangan</span>', { size: 'title', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0 });
        S.add(oilRig(D), { anim: 'pop', x: 110, y: 520, w: 200, at: 1, d: 0.2 });
        S.add(D.cross(), { anim: 'stamp', x: 150, y: 580, w: 130, at: 1, d: 0.45 });
        S.text('Lombong minyak<br><b class="red">musnah</b>', { size: 'label', x: 60, y: 790, w: 320, align: 'center', at: 1, d: 0.45 });
        S.add(tree(D), { anim: 'pop', x: 470, y: 520, w: 200, at: 1, d: 0.65 });
        S.text('Ladang getah<br><b class="red">terbiar</b>', { size: 'label', x: 420, y: 790, w: 320, align: 'center', at: 1, d: 0.75 });
        [['Pendidikan', D.book('', NAVY)], ['Kesihatan', medcross(D)], ['Jalan raya', `<svg viewBox="0 0 160 160">${D.R.path('M50 150 L70 10 L90 10 L110 150 Z', { fill: '#9AA3B5' })}${D.R.line(80, 30, 80, 140, { stroke: PAPER, strokeWidth: 5 })}</svg>`], ['Lapangan terbang', `<svg viewBox="0 0 200 140">${D.R.path('M10 80 L190 60 L190 80 L10 100 Z', { fill: PAPER })}${D.R.path('M90 72 L60 20 L80 20 L120 70 Z', { fill: RED })}${D.R.path('M90 92 L70 130 L90 130 L120 88 Z', { fill: RED })}</svg>`]].forEach(([t, ic], i) => {
          S.add(ic, { anim: 'pop', x: 100 + i * 230, y: 900, w: 110, at: 2, d: 0.1 + i * 0.22, sfx: i ? false : 'pop' });
          S.text(t, { size: 'note', x: 50 + i * 230, y: 1020, w: 210, align: 'center', at: 2, d: 0.15 + i * 0.22 });
        });
        S.stamp('TIDAK MAMPU', { x: 700, y: 600, w: 320, at: 2, d: 0.8, fs: 44, rot: 5, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'proses1', bg: 'grid', transition: 'paper',
      lines: [
        'Bagaimana prosesnya? Pada **28 Februari 1945**, Pejabat Tanah Jajahan mengutus surat kepada Vyner Brooke.',
        'Pada **24 Oktober 1945**, beliau **bersetuju** menyerahkan Sarawak kepada British.',
        'Setiausaha peribadinya, **Gerard T. MacBryan**, dihantar untuk mendapatkan persetujuan **ketua tempatan**.',
        'Penyerahan itu dibuat **tanpa pengetahuan** rakyat Sarawak.',
      ],
      board: {
        name: 'Proses penyerahan (1)',
        visual: 'Carta alir bernombor: surat 28 Feb 1945 ➜ setuju 24 Okt 1945 ➜ MacBryan dapatkan tandatangan ketua tempatan; cop "TANPA PENGETAHUAN RAKYAT".',
        doodle: 'Sampul surat, pena, watak pegawai (ILUSTRASI), cop.',
        text: '28 Feb 1945 – surat Pejabat Tanah Jajahan · 24 Okt 1945 – Vyner Brooke bersetuju · Gerard T. MacBryan – persetujuan ketua tempatan · tanpa pengetahuan rakyat',
        anim: 'Langkah carta alir pop mengikut tarikh; anak panah dilukis; cop dihentak.',
      },
      draw(S, { D }) {
        S.text('Proses <span class="red">(1)</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const steps = [['28 FEB 1945', 'Surat <b>Pejabat Tanah Jajahan</b> kepada Vyner Brooke', 0, 0.3], ['24 OKT 1945', 'Vyner Brooke <span class="hl">bersetuju</span>', 1, 0.1], ['GERARD T. MACBRYAN', 'Dapatkan persetujuan <span class="hl">ketua tempatan</span>', 2, 0.15]];
        steps.forEach(([d, t, k, f], i) => {
          const y = 400 + i * 220;
          S.card(`<div class="tw red" style="font-size:26px">${d}</div><div class="t-body" style="font-size:42px">${t}</div>`, { anim: 'slideR', x: 100, y, w: 880, at: k + f, rot: i % 2 ? 1 : -1 });
          if (i) S.arrow(540, y - 50, 540, y + 5, { at: k + f, d: -0.15, color: RED, sw: 8, bend: 0, sfx: false });
        });
        S.stamp('TANPA PENGETAHUAN RAKYAT', { x: 60, y: 1080, w: 960, at: 3, d: 0.25, fs: 56, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'proses2', transition: 'flip',
      lines: [
        'British mengarahkan Vyner Brooke mendapatkan kelulusan **Majlis Negeri** dan persetujuan rakyat terlebih dahulu.',
        'Ahli Parlimen British, **Gammans** dan **Rees Williams**, tiba di Kuching pada **2 Mei 1946** untuk membuat tinjauan.',
        'Hasilnya: sebahagian besar **peribumi menentang**, orang Cina **menyokong**, dan ada penduduk yang **tidak memahami** maksud penyerahan.',
      ],
      board: {
        name: 'Proses penyerahan (2): tinjauan Gammans & Rees Williams',
        visual: 'Kad arahan British; dua tag Ahli Parlimen (2 Mei 1946, Kuching); carta tinjauan tiga baris: Peribumi – menentang · Cina – menyokong · Sebahagian – tidak faham.',
        doodle: 'Watak pegawai, papan klip, tiga ikon reaksi (pangkah, tanda semak, tanda soal).',
        text: 'Arahan British: kelulusan Majlis Negeri & persetujuan rakyat · Gammans & Rees Williams tiba di Kuching 2 Mei 1946 · Peribumi menentang · Cina menyokong · Ada tidak faham',
        anim: 'Kad arahan pop; tag pop; setiap baris tinjauan muncul dengan ikon pada sebutan.',
      },
      draw(S, { D }) {
        S.text('Proses <span class="red">(2)</span>: Tinjauan', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-body" style="font-size:40px">Arahan British: dapatkan kelulusan <span class="hl">Majlis Negeri</span> & persetujuan rakyat</div>', { color: 'gold', anim: 'pop', x: 60, y: 400, w: 960, at: 0, d: 0.2, pad: '12px 20px' });
        S.tag('L.D. GAMMANS', 'Ahli Parlimen British', { x: 60, y: 600, w: 440, at: 1, d: 0.1 });
        S.tag('DAVID REES WILLIAMS', 'Ahli Parlimen British', { x: 540, y: 600, w: 480, at: 1, d: 0.2 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:32px">KUCHING · 2 MEI 1946</span></div>', { anim: 'pop', x: 40, y: 710, w: 1000, at: 1, d: 0.6 });
        [['Peribumi', 'menentang', D.cross(), 0.15], ['Orang Cina', 'menyokong', D.check(), 0.45], ['Sebahagian', 'tidak memahami', D.question(), 0.7]].forEach(([w, r, ic, f], i) =>
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:20px;padding:8px 22px"><div style="width:70px;flex:none">${ic}</div><div class="t-h3" style="font-size:42px;width:330px">${w}</div><div class="t-body" style="font-size:42px"><span class="hl">${r}</span></div></div>`, { anim: 'slideR', x: 60, y: 820 + i * 150, w: 960, at: 2 + f, sfx: 'swish' }));
      },
    },
    {
      id: 'proses3', bg: 'grid', transition: 'paper',
      lines: [
        'Majlis Negeri kemudian mengundi **Rang Undang-Undang Penyerahan**, atau **Cession Bill**.',
        'Keputusannya: **19 undi** menyokong, **16 undi** menentang.',
        'Taraf Sarawak sebagai **negeri naungan** dimansuhkan. Pada **1 Julai 1946**, Hari Penyerahan Sarawak diisytiharkan di Kuching. Sarawak menjadi **tanah jajahan British**.',
      ],
      board: {
        name: 'Proses penyerahan (3): Cession Bill & Hari Penyerahan',
        visual: 'Dokumen "CESSION BILL"; papan undi 19 (menyokong) lawan 16 (menentang) sebagai dua bar; cop "1 JULAI 1946 · HARI PENYERAHAN"; kad status naungan ➜ jajahan.',
        doodle: 'Dokumen, dua bar undi, cop.',
        text: 'Cession Bill (Rang Undang-Undang Penyerahan) · 19 undi menyokong · 16 menentang · Naungan dimansuhkan · 1 Julai 1946 Hari Penyerahan, Kuching · Sarawak = tanah jajahan British',
        anim: 'Dokumen dilukis; bar undi tumbuh pada sebutan; cop dihentak pada "1 Julai 1946".',
      },
      draw(S, { D }) {
        S.text('Proses <span class="red">(3)</span>: Cession Bill', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.scroll('CESSION BILL', { ts: 30 }), { x: 60, y: 390, w: 230, at: 0, d: 0.4 });
        S.text('Rang Undang-Undang<br>Penyerahan', { size: 'label', x: 30, y: 690, w: 300, align: 'center', at: 0, d: 0.6 });
        [['MENYOKONG', 19, 0.1, NAVY], ['MENENTANG', 16, 0.5, RED]].forEach(([l, n, f, c], i) => {
          const h = n * 14, x = 400 + i * 300;
          S.add(`<div style="height:${h}px;background:${c};border:5px solid #172C63;border-radius:10px 10px 0 0"></div>`, { anim: 'wipeD', x, y: 760 - h, w: 200, at: 1 + f, dur: 0.6, sfx: 'pop' });
          S.text(`<b>${n}</b>`, { size: 'title', x, y: 760 - h - 100, w: 200, align: 'center', at: 1 + f, d: 0.3 });
          S.text(l, { size: 'label', x: x - 40, y: 770, w: 280, align: 'center', at: 1 + f });
        });
        S.stamp('1 JULAI 1946 · HARI PENYERAHAN', { x: 40, y: 870, w: 1000, at: 2, d: 0.4, fs: 50, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-h3" style="text-align:center">NEGERI NAUNGAN <span class="red">➜</span> TANAH JAJAHAN BRITISH</div>', { color: 'gold', anim: 'slideU', x: 60, y: 1040, w: 960, at: 2, d: 0.8 });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Penyerahan yang dibuat tanpa pengetahuan rakyat ini mendapat **tentangan hebat**. Bagaimana rakyat Sarawak bertindak balas?',
        'Kenali sejarah, fahami masa kini. Seterusnya: **reaksi penduduk tempatan** terhadap penyerahan Sarawak!',
      ],
      tail: 0.8,
      board: {
        name: 'Penutup & episod seterusnya',
        visual: 'Sepanduk "NO CESSION" kecil dengan tanda soal; maskot dan kad episod seterusnya.',
        doodle: 'Sepanduk, tanda soal, pelekat maskot.',
        text: 'Tentangan hebat · Seterusnya: 4.5 Reaksi terhadap penyerahan Sarawak',
        anim: 'Sepanduk pop; maskot & kad pop.',
      },
      draw(S, { D }) {
        S.text('Tentangan <span class="red">hebat!</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: 0.2 });
        S.svg(D.rakyat({ pose: 'up', prop: 'flag' }), { x: 230, y: 430, w: 200, at: 0, d: 0.6, dur: 0.6 });
        S.svg(D.wanita({ pose: 'up' }), { x: 470, y: 440, w: 190, at: 0, d: 0.75, dur: 0.6, sfx: false });
        S.add(D.question(), { anim: 'pop', x: 720, y: 450, w: 110, at: 0, d: 1.6 });
        S.mascot({ x: 80, y: 900, w: 260, at: 1, d: 0.2 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">4.5 Reaksi terhadap Penyerahan Sarawak</div>', { x: 380, y: 960, w: 600, at: 1, d: 1.4 });
      },
    },
    END,
  ],
};
