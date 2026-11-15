// BAB 3 · EPISOD 10 – Subtopik 3.9: Keadaan Negara Kita Selepas Kekalahan Jepun (≈ 5.5 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 82–91 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END, atom, bomb, plane, flagJP, soldier } from './bab3.js';

export default {
  id: '310',
  file: '10_Bab3_Subtopik_3.9',
  title: 'Keadaan Negara Kita Selepas Kekalahan Jepun',
  header: { chip: 'BAB 3 • 3.9', sub: 'Selepas Kekalahan Jepun' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.9)',
  ...CH1,
  music: { key: 57, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Selepas Jepun menyerah kalah, negara kita tidak terus aman.', pause: 0.4 },
        'Selama lebih kurang empat belas hari, **Bintang Tiga** menguasai Tanah Melayu!',
      ],
      board: { name: 'Hook – kekosongan kuasa', visual: 'Frame pertama lengkap: tajuk "JEPUN KALAH... AMAN?", bendera Jepun dipangkah; cop "± 14 HARI · BINTANG TIGA" pada ayat kedua.', doodle: 'Bendera, palang, bintang, cop.', text: 'JEPUN KALAH… AMAN? · ± 14 HARI · BINTANG TIGA', anim: 'Elemen utama pada 0:00; cop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('JEPUN KALAH…<br><span class="red">AMAN?</span>', { fs: 112 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(flagJP(D), { ...NOW, x: 100, y: 620, w: 320, rot: -6 });
        S.add(D.cross(), { ...NOW, x: 360, y: 590, w: 110 });
        [0, 1, 2].forEach((i) => S.add(D.star(RED), { ...NOW, x: 560 + i * 140, y: 640 + (i % 2) * 40, w: 120 }));
        S.stamp('± 14 HARI · BINTANG TIGA', { x: 60, y: 1010, w: 960, at: 1, d: 0.6, fs: 64, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.9: **Keadaan Negara Kita Selepas Kekalahan Jepun**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.9", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.9 · Keadaan Negara Kita Selepas Kekalahan Jepun', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.9', 'Keadaan Negara Kita<br>Selepas <span class="red">Kekalahan Jepun</span>', { fs: 72, uy: 650, my: 720 }); },
    },
    {
      id: 'bom', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Pada 6 Ogos 1945, bom atom **Little Boy** digugurkan ke atas Hiroshima.', pause: 0.25 },
        { text: 'Pada 8 Ogos, kabinet Jepun memutuskan untuk meneruskan peperangan.', pause: 0.25 },
        'Pada 9 Ogos, bom atom **Fat Man** pula digugurkan ke atas Nagasaki.',
      ],
      board: { name: 'Bom atom Hiroshima & Nagasaki', visual: 'Simbol atom; garis masa: 6 Ogos Little Boy (Hiroshima) · 8 Ogos kabinet teruskan perang · 9 Ogos Fat Man (Nagasaki).', doodle: 'Atom, bom, pil tarikh.', text: '6 Ogos 1945 Little Boy – Hiroshima · 8 Ogos kabinet Jepun teruskan perang · 9 Ogos Fat Man – Nagasaki', anim: 'Baris muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.add(atom(D), { anim: 'pop', x: 780, y: 280, w: 230, at: 0, d: 0 });
        S.text('Ogos <span class="red">1945</span>', { size: 'h2', x: 70, y: 310, w: 700, at: 0, d: -0.2 });
        rows(S, [
          ['6 OGOS', '**Little Boy** ➜ Hiroshima', 0.1, RED],
          ['8 OGOS', 'Kabinet Jepun **teruskan perang**', 1, NAVY],
          ['9 OGOS', '**Fat Man** ➜ Nagasaki', 2, RED],
        ], { y0: 560, gap: 200, bw: 230, fs: 44 });
        S.add(bomb(D), { anim: 'slideD', x: 880, y: 1080, w: 100, at: 2, d: 0.6 });
      },
    },
    {
      id: 'menyerah', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Akhirnya, pada 15 Ogos 1945, Maharaja Hirohito mengumumkan **Jepun menyerah kalah**.', pause: 0.3 },
        'Penyerahan rasmi dibuat kepada Jeneral Douglas MacArthur pada 2 September 1945.',
      ],
      board: { name: 'Jepun menyerah kalah', visual: 'Cop besar "15 OGOS 1945 · JEPUN MENYERAH"; kad Maharaja Hirohito; kad 2 Sept 1945 MacArthur.', doodle: 'Bendera putih, cop, kad.', text: '15 Ogos 1945 Maharaja Hirohito umum Jepun menyerah kalah · 2 Sept 1945 penyerahan rasmi kepada Jen. Douglas MacArthur', anim: 'Cop dihentak; kad meluncur.' },
      draw(S) {
        S.add('<svg viewBox="0 0 200 220"><line x1="30" y1="10" x2="30" y2="210" stroke="#172C63" stroke-width="8"/><path d="M34 20 Q110 0 190 30 L190 120 Q110 90 34 110 Z" fill="#FFFFFF" stroke="#172C63" stroke-width="6"/></svg>', { anim: 'pop', x: 430, y: 290, w: 220, at: 0, d: 0 });
        S.stamp('15 OGOS 1945', { x: 140, y: 560, w: 800, at: 0, d: 0.4, fs: 96, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-label red">Maharaja Hirohito</div><div class="t-h3" style="font-size:48px">umum Jepun menyerah kalah</div>', { anim: 'slideL', x: 80, y: 730, w: 920, at: 0, d: 1.6 });
        S.card('<div class="t-label red">2 September 1945</div><div class="t-h3" style="font-size:44px">Penyerahan rasmi kepada Jen. Douglas MacArthur</div>', { color: 'gold', anim: 'slideR', x: 80, y: 960, w: 920, at: 1, d: 0.2 });
      },
    },
    {
      id: 'upacara', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Tentera British mendarat semula di Pulau Pinang pada 3 September 1945.', pause: 0.25 },
        'Upacara menyerah kalah diadakan di Labuan pada 10 September, Kuching pada 11 September, Singapura pada 12 September, yang ditandatangani oleh Lord Mountbatten, dan Kuala Lumpur pada 13 September.',
      ],
      board: { name: 'British kembali & upacara menyerah kalah', visual: 'Kad 3 Sept: British mendarat di Pulau Pinang; garis masa 10–13 Sept: Labuan, Kuching, Singapura (Lord Mountbatten), Kuala Lumpur.', doodle: 'Kapal, pil tarikh, pen.', text: '3 Sept 1945 British mendarat semula di Pulau Pinang · upacara menyerah kalah: Labuan (10 Sept), Kuching (11 Sept), Singapura (12 Sept, Lord Mountbatten), Kuala Lumpur (13 Sept)', anim: 'Baris muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.add(D.ship({ hull: NAVY, sail: '#F3EBDD' }), { anim: 'slideR', x: 60, y: 290, w: 260, at: 0, d: 0 });
        S.card('<div class="t-label red">3 Sept 1945</div><div class="t-h3" style="font-size:42px">British mendarat semula di Pulau Pinang</div>', { anim: 'slideR', x: 340, y: 300, w: 680, at: 0, d: 0.3, pad: '12px 20px' });
        S.text('Upacara <span class="hl">menyerah kalah</span>', { size: 'h3', x: 70, y: 540, w: 940, at: 1, d: 0 });
        rows(S, [['10 SEPT', '**Labuan**', 1.25], ['11 SEPT', '**Kuching**', 1.38], ['12 SEPT', '**Singapura** · ditandatangani Lord Mountbatten', 1.52], ['13 SEPT', '**Kuala Lumpur**', 1.85]], { y0: 630, gap: 160, bw: 210, fs: 40 });
      },
    },
    {
      id: 'tempoh', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Pendudukan Jepun di negara kita berlangsung dari 15 Februari 1942 hingga 12 September 1945.', pause: 0.3 },
        'Menariknya, **Razak Sensei**, atau Abdul Razak Abdul Hamid, ialah rakyat negara kita yang terselamat dalam pengeboman Hiroshima.',
      ],
      board: { name: 'Tempoh pendudukan & Razak Sensei', visual: 'Garis masa 15 Feb 1942 ➜ 12 Sept 1945 (blok kuning); kad Razak Sensei (terselamat bom Hiroshima).', doodle: 'Garis masa, kad.', text: 'Pendudukan Jepun: 15 Feb 1942 – 12 Sept 1945 · Razak Sensei (Abdul Razak Abdul Hamid) terselamat dalam pengeboman Hiroshima', anim: 'Garis masa dilukis; kad pop.' },
      draw(S) {
        head(S, 'Tempoh <span class="hl">Pendudukan</span>');
        S.add('<div style="height:130px;background:#F5C928;border:5px solid #172C63;border-radius:20px;display:flex;align-items:center;justify-content:space-between;padding:0 30px;font-family:Marker;font-size:44px;color:#172C63"><span>15 FEB 1942</span><span>➜</span><span>12 SEPT 1945</span></div>', { anim: 'wipe', x: 60, y: 450, w: 960, at: 0, d: 0.3, dur: 1.2, sfx: 'pencil' });
        S.card('<div class="t-label red">Terselamat dalam pengeboman Hiroshima</div><div class="t-h2" style="font-size:58px">RAZAK SENSEI</div><div class="t-body" style="font-size:36px">Abdul Razak Abdul Hamid</div>', { anim: 'slideU', x: 80, y: 760, w: 920, at: 1, d: 0.2 });
      },
    },
    {
      id: 'bintang-tiga', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Kelewatan British kembali mewujudkan **kekosongan kuasa politik**.', pause: 0.25 },
        { text: '**Bintang Tiga**, iaitu PKM melalui MPAJA, menguasai bandar, balai polis dan pejabat kerajaan.', pause: 0.25 },
        'Mereka menjalankan undang-undang dan mahkamah sendiri, dan menghukum mati sesiapa yang bekerjasama dengan Jepun, terutama orang Melayu. Penguasaan ini berlangsung lebih kurang **empat belas hari**.',
      ],
      board: { name: 'Penguasaan Bintang Tiga', visual: 'Kad "KEKOSONGAN KUASA"; tiga bintang merah; ikon bandar, balai polis, pejabat; kad mahkamah sendiri; cop "± 14 HARI".', doodle: 'Bintang, bangunan, cop.', text: 'Kelewatan British ➜ kekosongan kuasa politik · BINTANG TIGA (PKM melalui MPAJA) kuasai bandar, balai polis, pejabat kerajaan · undang-undang & mahkamah sendiri · hukum mati yang bekerjasama dengan Jepun (terutama Melayu) · ± 14 hari', anim: 'Elemen muncul mengikut narasi.' },
      draw(S, { D }) {
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">British lewat kembali ➜ <span style="color:#F5C928">KEKOSONGAN KUASA</span></div>', { color: 'red', anim: 'slideU', x: 60, y: 290, w: 960, at: 0, d: 0.4 });
        [0, 1, 2].forEach((i) => S.add(D.star(RED), { anim: 'pop', x: 80 + i * 120, y: 470, w: 110, at: 1, d: 0.1 + i * 0.15 }));
        S.card('<div class="t-h2" style="font-size:56px">BINTANG TIGA</div><div class="t-body" style="font-size:32px">PKM melalui MPAJA</div>', { anim: 'slideR', x: 460, y: 460, w: 560, at: 1, d: 0.3 });
        ['Bandar', 'Balai polis', 'Pejabat kerajaan'].forEach((t, i) => S.add(`<span class="pill" style="font-size:30px;white-space:nowrap">${t}</span>`, { anim: 'pop', x: 60 + i * 330, y: 680, w: 330, at: 1, d: 3.0 + i * 0.5 }));
        S.card('<div class="t-body" style="font-size:36px">Undang-undang &amp; mahkamah sendiri · hukum mati yang bekerjasama dengan Jepun, terutama <b>orang Melayu</b></div>', { anim: 'slideU', x: 60, y: 800, w: 960, at: 2, d: 0, pad: '14px 22px' });
        S.stamp('± 14 HARI', { x: 290, y: 1060, w: 500, at: 2.85, fs: 92, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'fisabilillah', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Gangguan terhadap institusi politik, keluarga dan agama Islam menyebabkan terbentuknya **Gerakan Fi-Sabilillah**, untuk mempertahankan maruah, hak dan harta orang Melayu.', pause: 0.25 },
        { text: 'Di Johor, **Kiai Salleh**, atau Haji Salleh Abdul Karim, menubuhkan **Tentera Selempang Merah**.', pause: 0.25 },
        'Di Sungai Manik, Perak, **Tuan Haji Bakri Haji Mohd Saman** menjadi Khalifah **Parang Panjang**.',
      ],
      board: { name: 'Tindak balas orang Melayu: Gerakan Fi-Sabilillah', visual: 'Kad Gerakan Fi-Sabilillah (pertahankan maruah, hak, harta); dua kad pemimpin: Kiai Salleh (Selempang Merah, Johor) & Tuan Haji Bakri (Parang Panjang, Sungai Manik).', doodle: 'Perisai, kad, selempang merah.', text: 'Gerakan Fi-Sabilillah: pertahankan maruah, hak & harta orang Melayu · Kiai Salleh (Haji Salleh Abdul Karim) – Tentera Selempang Merah, Johor · Tuan Haji Bakri Haji Mohd Saman – Khalifah Parang Panjang, Sungai Manik, Perak', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.svg(D.shield(), { x: 70, y: 300, w: 170, at: 0, d: 0.2 });
        S.card('<div class="t-h3" style="font-size:48px">Gerakan Fi-Sabilillah</div><div class="t-body" style="font-size:34px">pertahankan <b>maruah · hak · harta</b> orang Melayu</div>', { anim: 'slideR', x: 270, y: 310, w: 750, at: 0, d: 1.2, rot: 1 });
        duo(S, ['JOHOR', '<b>Kiai Salleh</b><br>(Haji Salleh Abdul Karim)<br><span class="hl">Tentera Selempang Merah</span>', 1],
          ['PERAK', '<b>Tuan Haji Bakri Haji Mohd Saman</b><br>Sungai Manik<br><span class="hl">Khalifah Parang Panjang</span>', 2], { y: 640, fs: 34 });
      },
    },
    {
      id: 'lokasi', bg: 'dots', transition: 'zoom',
      lines: ['Kebangkitan ini berlaku di Batu Pahat dan Muar di Johor; Batu Kikir di Negeri Sembilan; Alor Gajah di Melaka; serta Sungai Manik, Teluk Anson, Kampung Gajah dan Bidor di Perak.'],
      board: { name: 'Lokasi kebangkitan', visual: 'Peta Semenanjung dengan penanda: Batu Pahat, Muar, Batu Kikir, Alor Gajah, Sungai Manik, Teluk Anson, Kampung Gajah, Bidor.', doodle: 'Peta, penanda.', text: 'Johor: Batu Pahat, Muar · Negeri Sembilan: Batu Kikir · Melaka: Alor Gajah · Perak: Sungai Manik, Teluk Anson, Kampung Gajah, Bidor', anim: 'Penanda pop mengikut sebutan.' },
      draw(S) {
        const at = S.map({ bounds: [[99.8, 1.3], [104.2, 5.0]], w: 760 }, { x: 160, y: 290, w: 760, at: 0, d: -0.2, dur: 1.0 });
        [['Batu Pahat', 102.93, 1.85, 0.1, false], ['Muar', 102.57, 2.05, 0.17, true], ['Batu Kikir', 102.33, 2.83, 0.3, false], ['Alor Gajah', 102.21, 2.38, 0.43, true]].forEach(([n, lo, la, f, left]) => S.pin(at, lo, la, `<b>${n}</b>`, { at: f, color: RED, size: 0.75, fs: 26, left }));
        [[100.9, 3.94, 0.6], [101.02, 4.03, 0.72], [100.95, 4.18, 0.82], [101.29, 4.11, 0.92]].forEach(([lo, la, f]) => S.pin(at, lo, la, '', { at: f, color: GOLD, size: 0.7 }));
        S.card('<div class="t-label red">PERAK</div><div class="t-body" style="font-size:36px">Sungai Manik · Teluk Anson · Kampung Gajah · Bidor</div>', { anim: 'slideU', x: 60, y: 1110, w: 960, at: 0.6, pad: '10px 20px' });
      },
    },
    {
      id: 'onn', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Usaha perdamaian turut dilakukan. **Dato\' Onn Jaafar**, Pegawai Daerah Batu Pahat, mengatur rundingan antara Kiai Salleh dengan ketua Bintang Tiga, di Dewan Perniagaan Cina Batu Pahat.', pause: 0.25 },
        'Hasilnya, Kiai Salleh membebaskan orang Cina di Parit Raja, dan Bintang Tiga meninggalkan Balai Polis Batu Pahat.',
      ],
      board: { name: 'Rundingan Dato\' Onn Jaafar di Batu Pahat', visual: 'Meja rundingan: Kiai Salleh ⇄ ketua Bintang Tiga, Dato\' Onn di tengah; dua kad hasil.', doodle: 'Tangan berjabat, kad.', text: 'Dato\' Onn Jaafar (Pegawai Daerah Batu Pahat) atur rundingan Kiai Salleh ⇄ Bintang Tiga di Dewan Perniagaan Cina Batu Pahat (Ogos 1945) · Kiai Salleh bebaskan orang Cina di Parit Raja · Bintang Tiga tinggalkan Balai Polis Batu Pahat', anim: 'Kad rundingan pop; hasil meluncur.' },
      draw(S, { D }) {
        S.card('<div class="t-label red">Pegawai Daerah Batu Pahat</div><div class="t-h2" style="font-size:56px">DATO\' ONN JAAFAR</div><div class="t-body" style="font-size:32px">atur rundingan di Dewan Perniagaan Cina Batu Pahat</div>', { color: 'gold', anim: 'pop', x: 80, y: 290, w: 920, at: 0, d: 0.8 });
        S.card('<div class="t-h3" style="text-align:center">Kiai Salleh</div>', { anim: 'slideL', x: 60, y: 600, w: 400, at: 0, d: 3.2 });
        S.add('<div class="t-big" style="font-size:90px;text-align:center;color:#C93436">⇄</div>', { anim: 'pop', x: 460, y: 580, w: 160, at: 0, d: 3.8 });
        S.card('<div class="t-h3" style="text-align:center">Bintang Tiga</div>', { anim: 'slideR', x: 620, y: 600, w: 400, at: 0, d: 4.2 });
        rows(S, [['✓', 'Kiai Salleh bebaskan orang Cina di **Parit Raja**', 1.15, '#3A8A4A'], ['✓', 'Bintang Tiga tinggalkan **Balai Polis Batu Pahat**', 1.6, '#3A8A4A']], { y0: 820, gap: 190, bw: 100, fs: 40 });
      },
    },
    {
      id: 'raja-sarawak', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Raja-raja Melayu turut berperanan. **Sultan Abu Bakar** dari Pahang ke Kuala Lipis untuk menasihati rakyat, manakala **Sultan Abdul Aziz** dari Perak melawat daerah dan mengadakan mesyuarat pemulihan.', pause: 0.3 },
        'Di Sarawak, berlaku permusuhan di Kanowit antara bekas gerila SRD dengan orang Cina yang bersubahat dengan Jepun. Di Kuching pula, perintah berkurung tentera Australia menghalang pertumpahan darah.',
      ],
      board: { name: 'Peranan Raja-raja Melayu & keadaan di Sarawak', visual: 'Dua kad sultan (mahkota); kad Sarawak: Kanowit (permusuhan) & Kuching (perintah berkurung tentera Australia).', doodle: 'Mahkota, kad.', text: 'Sultan Abu Bakar (Pahang) ke Kuala Lipis nasihati rakyat · Sultan Abdul Aziz (Perak) lawat daerah & mesyuarat pemulihan · Sarawak: permusuhan di Kanowit (bekas gerila SRD ✕ Cina yang bersubahat) · Kuching: perintah berkurung tentera Australia halang pertumpahan darah', anim: 'Kad muncul mengikut narasi.' },
      draw(S, { D }) {
        S.svg(D.crown(), { x: 80, y: 290, w: 150, at: 0, d: 0 });
        S.card('<div class="t-label red">Sultan Abu Bakar · Pahang</div><div class="t-body" style="font-size:34px">ke Kuala Lipis, nasihati rakyat</div>', { anim: 'slideR', x: 250, y: 290, w: 770, at: 0, d: 1.4, pad: '12px 20px' });
        S.card('<div class="t-label red">Sultan Abdul Aziz · Perak</div><div class="t-body" style="font-size:34px">lawat daerah &amp; mesyuarat pemulihan</div>', { anim: 'slideR', x: 250, y: 470, w: 770, at: 0, d: 4.6, pad: '12px 20px' });
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">SARAWAK</span>', { anim: 'pop', x: 70, y: 680, w: 400, at: 1, d: -0.2 });
        S.card('<div class="t-label red">Kanowit</div><div class="t-body" style="font-size:34px">permusuhan: bekas gerila SRD ✕ orang Cina yang bersubahat dengan Jepun</div>', { anim: 'slideL', x: 60, y: 780, w: 960, at: 1, d: 0.4, pad: '12px 20px' });
        S.card('<div class="t-label red">Kuching</div><div class="t-body" style="font-size:34px">perintah berkurung tentera Australia ➜ <b>halang pertumpahan darah</b></div>', { color: 'gold', anim: 'slideL', x: 60, y: 1010, w: 960, at: 1, d: 5.4, pad: '12px 20px' });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, kekalahan Jepun membawa kekosongan kuasa, penguasaan Bintang Tiga dan ketegangan kaum, yang akhirnya diredakan melalui rundingan dan peranan pemimpin.', pause: 0.25 },
        { text: 'Ini menunjukkan betapa pentingnya **perpaduan** dan **keamanan** untuk negara kita.', pause: 0.35 },
        'Seterusnya, jom kita **ulang kaji keseluruhan Bab 3**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya: Ulang Kaji Bab 3.', doodle: 'Pil, maskot.', text: 'Hiroshima & Nagasaki · 15 Ogos 1945 · Bintang Tiga · Selempang Merah · Dato\' Onn · Perpaduan · Seterusnya: Ulang Kaji Bab 3', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Bom atom', 0.1], ['15 Ogos 1945', 0.15], ['Bintang Tiga', 0.3], ['Selempang Merah', 0.5], ['Dato\' Onn', 0.75], ['Perpaduan', 1.2]],
          ['PERPADUAN &amp; KEAMANAN', 1.6], ['Ulang Kaji Bab 3', 2]);
      },
    },
    END,
  ],
};
