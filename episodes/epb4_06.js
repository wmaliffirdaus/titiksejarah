// BAB 4 · EPISOD 06 – Subtopik 4.5: Reaksi Penduduk Tempatan terhadap Penyerahan Sarawak (≈ 5 min)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 109–113.
// Sungkit Berdarah is presented factually with text/stamps only (no violent imagery).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, BORNEO, NOW, officer, iconRow, numCard, banner, END } from './b4lib.js';

const longhouse = (D) => `<svg viewBox="0 0 320 180">${D.R.rect(20, 80, 280, 70, { fill: '#E2C89A' })}${D.R.poly([[10, 84], [160, 20], [310, 84]], { fill: RED })}${[50, 110, 170, 230].map((x) => D.R.rect(x, 100, 30, 30, { fill: NAVY, strokeWidth: 2 })).join('')}${[40, 100, 160, 220, 280].map((x) => D.R.line(x, 150, x, 176, { strokeWidth: 5 })).join('')}</svg>`;

export default {
  id: 'b4_06',
  file: '06_Bab4_Subtopik_4.5',
  title: 'Reaksi Penduduk Tempatan terhadap Penyerahan Sarawak',
  header: { chip: 'BAB 4 • 4.5', sub: 'Reaksi di Sarawak' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.5)',
  music: { key: 57, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Pada **30 Oktober 1946**, sepanduk bertulis "**No Cession**" dijulang di Kuching.', pause: 0.45 },
        'Rakyat Sarawak bangkit menentang penyerahan negeri mereka kepada British!',
      ],
      board: {
        name: 'Hook – "No Cession"',
        visual: 'Frame pertama lengkap: sepanduk besar "NO CESSION" dijulang oleh barisan rakyat; pil "KUCHING · 30 OKT 1946"; cop "BANGKIT!".',
        doodle: 'Sepanduk, watak rakyat & wanita bersorak.',
        text: 'NO CESSION · Kuching · 30 Oktober 1946 · BANGKIT!',
        anim: 'Semua kelihatan pada 0:00; cop BANGKIT dihentak pada baris kedua.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:44px">KUCHING · 30 OKT 1946</span></div>', { ...NOW, x: 40, y: 290, w: 1000 });
        S.add(banner(D, 'NO CESSION!', PAPER), { ...NOW, x: 190, y: 390, w: 700 });
        [[D.rakyat({ pose: 'cheer' }), 90], [D.wanita({ pose: 'cheer' }), 300], [D.petani({ pose: 'cheer' }), 560], [D.rakyat({ pose: 'cheer', hatColor: RED }), 780]].forEach(([sv, x]) => S.svg(sv, { ...NOW, x, y: 820, w: 190 }));
        S.stamp('BANGKIT!', { x: 290, y: 1110, w: 500, at: 1, d: 0.5, fs: 100, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.5: **Reaksi penduduk tempatan** terhadap penyerahan Sarawak.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.5"; tajuk; dua tanda: pangkah merah (menentang) dan tanda semak (menyokong).',
        doodle: 'Pangkah, tanda semak.',
        text: 'SUBTOPIK 4.5 · Reaksi terhadap Penyerahan Sarawak',
        anim: 'Tajuk ditulis; ikon pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.5</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Reaksi terhadap<br><span class="red">Penyerahan Sarawak</span>', { size: 'title', x: 40, y: 400, w: 1000, align: 'center', at: 0, dur: 1.0, style: 'font-size:76px' });
        S.add(D.cross(), { anim: 'pop', x: 280, y: 720, w: 160, at: 0, d: 0.8 });
        S.add(D.check(), { anim: 'pop', x: 640, y: 720, w: 170, at: 0, d: 1.0 });
      },
    },
    {
      id: 'dua-golongan', bg: 'grid', transition: 'paper',
      lines: [
        'Penyerahan Sarawak mencetuskan dua reaksi: golongan yang **menentang**, dan golongan yang **menyokong**.',
        'Golongan yang menentang antaranya dipimpin oleh **Datu Patinggi Abang Haji Abdillah**.',
        'Golongan yang menyokong pula diketuai oleh **Datu Bandar Abang Haji Mustapha** dan **Datu Amar Abang Haji Suleiman**.',
      ],
      board: {
        name: 'Dua golongan',
        visual: 'Dua lajur: MENENTANG (merah) dengan tag Datu Patinggi Abang Haji Abdillah; MENYOKONG (navy) dengan tag Datu Bandar Abang Haji Mustapha & Datu Amar Abang Haji Suleiman.',
        doodle: 'Pangkah, tanda semak, watak bertanjak (ILUSTRASI).',
        text: 'MENENTANG – Datu Patinggi Abang Haji Abdillah · MENYOKONG – Datu Bandar Abang Haji Mustapha · Datu Amar Abang Haji Suleiman',
        anim: 'Dua lajur meluncur masuk; tag nama pop tepat pada nama.',
      },
      draw(S, { D }) {
        S.text('Dua <span class="hl">Golongan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">MENENTANG</div><div style="height:560px"></div>', { color: 'red', anim: 'slideD', x: 50, y: 400, w: 480, at: 0, d: 0.5 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">MENYOKONG</div><div style="height:560px"></div>', { color: 'navy', anim: 'slideD', x: 550, y: 400, w: 480, at: 0, d: 0.9 });
        S.illus({ x: 60, y: 360, at: 1, d: 0 });
        S.svg(D.person({ hat: 'tanjak', hatColor: GOLD, shirt: RED, samping: NAVY, pose: 'up' }), { x: 200, y: 500, w: 180, at: 1, d: 0, dur: 0.6 });
        S.tag('DATU PATINGGI ABANG HAJI ABDILLAH', 'pemimpin antipenyerahan', { x: 70, y: 860, w: 440, at: 1, d: 0.3 });
        S.svg(D.person({ hat: 'tanjak', hatColor: NAVY, shirt: GOLD, samping: RED, pose: 'present' }), { x: 600, y: 500, w: 160, at: 2, d: 0, dur: 0.6 });
        S.svg(D.person({ hat: 'tanjak', hatColor: RED, shirt: PAPER, samping: NAVY }), { x: 820, y: 500, w: 160, at: 2, d: 0.4, dur: 0.6, sfx: false });
        S.tag('DATU BANDAR ABANG HJ MUSTAPHA', '', { x: 570, y: 820, w: 440, at: 2, d: 0.3 });
        S.tag('DATU AMAR ABANG HJ SULEIMAN', '', { x: 570, y: 900, w: 440, at: 2, d: 0.7 });
      },
    },
    {
      id: 'faktor', transition: 'flip',
      lines: [
        'Mengapa mereka menentang? Pertama, tindakan Vyner Brooke bertentangan dengan **Perlembagaan 1941**.',
        '**Prinsip Kelapan** menyatakan bahawa **pemerintahan sendiri** akan diberikan kepada rakyat Sarawak. Penyerahan ini menafikan hak tersebut.',
        'Kedua, Vyner Brooke mengetepikan **surat wasiat Charles Brooke**, kerana membuat keputusan tanpa berbincang dengan Raja Muda, Anthony Brooke, dan Tuan Muda, Bertram Brooke.',
        'Ketiga, **Gerard T. MacBryan** menggunakan muslihat seperti **tekanan**, **desakan**, **pujukan** dan **sogokan** untuk mendapatkan persetujuan ketua tempatan.',
      ],
      board: {
        name: 'Faktor penentangan',
        visual: 'Tiga kad bernombor: (1) buku "PERLEMBAGAAN 1941" + kad "Prinsip Kelapan: pemerintahan sendiri"; (2) skrol "WASIAT CHARLES BROOKE"; (3) empat cop muslihat MacBryan.',
        doodle: 'Buku, skrol wasiat, cop.',
        text: '1 Bertentangan Perlembagaan 1941 (Prinsip Kelapan – pemerintahan sendiri) · 2 Ketepikan wasiat Charles Brooke (tanpa berbincang dengan Anthony & Bertram Brooke) · 3 Muslihat MacBryan: tekanan, desakan, pujukan, sogokan',
        anim: 'Kad bernombor meluncur mengikut sebutan; empat cop kecil dihentak satu demi satu.',
      },
      draw(S, { D }) {
        S.text('Mengapa <span class="red">Menentang?</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.book('PERLEMBAGAAN|1941', NAVY, { size: 22 }), { x: 60, y: 390, w: 170, at: 0, d: 0.6 });
        S.card(numCard(1, 'Bertentangan <span class="hl">Perlembagaan 1941</span>', RED, 40), { anim: 'slideR', x: 250, y: 400, w: 770, at: 0, d: 0.7, pad: '8px 18px' });
        S.card('<div class="t-body" style="font-size:38px"><b>Prinsip Kelapan</b>: <span class="hl">pemerintahan sendiri</span> untuk rakyat Sarawak</div>', { tear: true, anim: 'slideU', x: 250, y: 560, w: 770, at: 1, d: 0.1 });
        S.svg(D.scroll('WASIAT', { ts: 40 }), { x: 60, y: 720, w: 160, at: 2, d: 0 });
        S.card(numCard(2, 'Ketepikan <span class="hl">wasiat Charles Brooke</span> · tanpa berbincang dengan Anthony & Bertram Brooke', NAVY, 36), { anim: 'slideR', x: 250, y: 740, w: 770, at: 2, d: 0.1, pad: '8px 18px' });
        S.card(numCard(3, 'Muslihat <b>Gerard T. MacBryan</b>', RED, 40), { anim: 'slideR', x: 60, y: 960, w: 960, at: 3, d: 0, pad: '6px 18px', notape: true });
        [['TEKANAN', 0.3], ['DESAKAN', 0.42], ['PUJUKAN', 0.55], ['SOGOKAN', 0.68]].forEach(([t, f], i) => S.stamp(t, { x: 50 + i * 245, y: 1110, w: 235, at: 3 + f, fs: 40, rot: i % 2 ? 3 : -3, style: 'text-align:center' }));
      },
    },
    {
      id: 'demonstrasi', bg: 'grid', transition: 'paper',
      lines: [
        'Bagaimana mereka menentang? **Johari Anang** dan **Sharkawi Osman** menganjurkan persidangan, dan bersetuju mengadakan demonstrasi pada **setiap 1 Julai**.',
        'Pertubuhan seperti **PPM**, **BPS** dan **PKMS** turut menyertai.',
        'Pada **30 Oktober 1946**, demonstrasi pertama diadakan ketika ketibaan Gabenor pertama Sarawak, **Charles Arden Clarke**.',
        'Diketuai Datu Patinggi Abang Haji Abdillah, **16 persatuan Melayu** menyertai perarakan dengan sepanduk "**No Cession**".',
      ],
      board: {
        name: 'Bentuk penentangan (1): persidangan & demonstrasi',
        visual: 'Meja persidangan dengan dua tag nama; tiga sepanduk pertubuhan (PPM, BPS, PKMS) dengan nama penuh kecil; kad demonstrasi pertama + kaunter "16 persatuan" + sepanduk "No Cession".',
        doodle: 'Meja, sepanduk, watak rakyat.',
        text: 'Persidangan: Johari Anang & Sharkawi Osman – demonstrasi setiap 1 Julai · PPM (Pergerakan Pemuda Melayu) · BPS (Barisan Pemuda Sarawak) · PKMS (Persatuan Kebangsaan Melayu Sarawak) · 30 Okt 1946 – demonstrasi pertama, Gabenor Charles Arden Clarke · 16 persatuan · "No Cession"',
        anim: 'Tag pop; sepanduk pop pada setiap akronim; kad demonstrasi meluncur; sepanduk No Cession pop.',
      },
      draw(S, { D }) {
        S.text('1. Persidangan & <span class="red">Demonstrasi</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.tag('JOHARI ANANG', 'pengerusi', { x: 60, y: 400, w: 400, at: 0, d: 0.12 });
        S.tag('SHARKAWI OSMAN', '', { x: 500, y: 400, w: 400, at: 0, d: 0.22 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:34px">Demonstrasi setiap 1 JULAI</span></div>', { anim: 'pop', x: 40, y: 500, w: 1000, at: 0, d: 0.8 });
        [['PPM', 'Pergerakan Pemuda Melayu'], ['BPS', 'Barisan Pemuda Sarawak'], ['PKMS', 'Persatuan Kebangsaan Melayu Sarawak']].forEach(([a, n], i) => {
          S.add(banner(D, a, i === 1 ? GOLD : PAPER), { anim: 'pop', x: 60 + i * 330, y: 590, w: 260, at: 1, d: 0.1 + i * 0.2 });
          S.text(n, { size: 'note', x: 40 + i * 330, y: 770, w: 300, align: 'center', at: 1, d: 0.2 + i * 0.2, style: 'font-size:26px;color:#172C63' });
        });
        S.card('<div class="tw red" style="font-size:26px">30 OKTOBER 1946 · DEMONSTRASI PERTAMA</div><div class="t-body" style="font-size:40px">Ketibaan Gabenor pertama, <b>Charles Arden Clarke</b></div>', { anim: 'slideR', x: 60, y: 920, w: 960, at: 2, d: 0.1 });
        S.card('<div style="display:flex;align-items:center;gap:18px"><div class="t-big" style="font-size:90px;color:#C93436">16</div><div class="t-body" style="font-size:40px">persatuan Melayu · <b>"No Cession"</b></div></div>', { color: 'gold', anim: 'pop', x: 60, y: 1110, w: 960, at: 3, d: 0.2, notape: true, pad: '4px 22px' });
      },
    },
    {
      id: 'jawatan', transition: 'slideUp',
      lines: [
        'British bertindak dengan mengeluarkan **Pekeliling Nombor 9**, pada Disember 1946, yang melarang pegawai awam menyertai gerakan antipenyerahan.',
        'Sebagai bantahan, pada **2 April 1947**, seramai **409** kakitangan kerajaan **meletakkan jawatan**.',
        'Seramai **56** pelajar Maktab Perguruan Melayu Sarawak pula menamatkan pengajian mereka.',
      ],
      board: {
        name: 'Bentuk penentangan (2): letak jawatan beramai-ramai',
        visual: 'Dokumen "PEKELILING No. 9/1946" bercop merah; kaunter besar "409" kakitangan; kaunter "56" pelajar maktab.',
        doodle: 'Dokumen, watak kakitangan & pelajar, buku.',
        text: 'Pekeliling No. 9/1946 (Dis 1946) – larang pegawai awam sertai gerakan · 2 Apr 1947 – 409 kakitangan letak jawatan · 56 pelajar Maktab Perguruan Melayu Sarawak tamatkan pengajian',
        anim: 'Dokumen dilukis; kaunter pop tepat pada nombor.',
      },
      draw(S, { D }) {
        S.text('2. Letak <span class="red">Jawatan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.treaty('No. 9'), { x: 70, y: 390, w: 220, at: 0, d: 0.3 });
        S.card('<div class="tw red" style="font-size:26px">PEKELILING No. 9/1946 · DISEMBER 1946</div><div class="t-body" style="font-size:40px">Pegawai awam <span class="hl">dilarang</span> menyertai gerakan antipenyerahan</div>', { anim: 'slideR', x: 320, y: 420, w: 700, at: 0, d: 0.6 });
        S.card('<div style="display:flex;align-items:center;gap:24px"><div class="t-big" style="font-size:150px;color:#C93436">409</div><div class="t-body" style="font-size:44px">kakitangan kerajaan <span class="hl">letak jawatan</span><br><span class="tw red" style="font-size:26px">2 APRIL 1947</span></div></div>', { anim: 'pop', x: 60, y: 720, w: 960, at: 1, d: 0.35 });
        S.card('<div style="display:flex;align-items:center;gap:24px"><div class="t-big" style="font-size:110px;color:#172C63">56</div><div class="t-body" style="font-size:40px">pelajar Maktab Perguruan Melayu Sarawak <span class="hl">tamatkan pengajian</span></div></div>', { color: 'gold', anim: 'pop', x: 60, y: 1000, w: 960, at: 2, d: 0.1 });
      },
    },
    {
      id: 'wanita-akhbar', bg: 'grid', transition: 'paper',
      lines: [
        'Kaum wanita turut bangkit. **Cikgu Lily Eberwein** mengetuai kaum ibu berkempen ke **rumah panjang**. **Cikgu Ajibah Abol** pula mengetuai wanita menyertai gerakan ini.',
        'Akhbar **Utusan Sarawak**, yang terbit pada Januari 1949, menyiarkan kritikan tajam seperti artikel "**Kerajaan British Menipu Rakyat**".',
        'Surat bantahan dihantar ke London, termasuk kepada Perdana Menteri British, **Clement Attlee**. **Anthony Brooke** pula membuat rayuan di Privy Council dan Mahkamah Tinggi Brunei, tetapi **ditolak**.',
      ],
      board: {
        name: 'Bentuk penentangan (3): wanita, akhbar, surat & rayuan',
        visual: 'Watak wanita bertudung di hadapan rumah panjang dengan dua tag nama; akhbar "UTUSAN SARAWAK" dengan tajuk artikel; sampul surat ke London; neraca mahkamah dengan cop "DITOLAK".',
        doodle: 'Rumah panjang, watak wanita, akhbar, sampul surat, neraca, cop.',
        text: 'Wanita: Cikgu Lily Eberwein (kempen rumah panjang) · Cikgu Ajibah Abol · Akhbar Utusan Sarawak (Jan 1949): "Kerajaan British Menipu Rakyat" · Surat bantahan – PM British Clement Attlee · Anthony Brooke – Privy Council & Mahkamah Tinggi Brunei – ditolak',
        anim: 'Rumah panjang dilukis; tag pop; akhbar meluncur; cop DITOLAK dihentak.',
      },
      draw(S, { D }) {
        S.text('3. Wanita, Akhbar & <span class="red">Rayuan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add(longhouse(D), { anim: 'pop', x: 50, y: 390, w: 330, at: 0, d: 0.5 });
        S.svg(D.wanita({ pose: 'point' }), { x: 380, y: 380, w: 150, at: 0, d: 0.1, dur: 0.6, sfx: false });
        S.tag('CIKGU LILY EBERWEIN', 'kempen ke rumah panjang', { x: 560, y: 390, w: 460, at: 0, d: 0.15 });
        S.tag('CIKGU AJIBAH ABOL', 'ketuai kaum wanita', { x: 560, y: 500, w: 460, at: 0, d: 0.7 });
        S.card('<div class="t-h3" style="font-size:40px">UTUSAN SARAWAK <span class="tw red" style="font-size:24px">JAN 1949</span></div><div class="t-body" style="font-size:40px">"<span class="hl">Kerajaan British Menipu Rakyat</span>"</div>', { anim: 'slideR', x: 60, y: 660, w: 960, at: 1, d: 0.1, rot: -1 });
        S.card('<div class="t-body" style="font-size:38px">✉ Surat bantahan ➜ PM British <b>Clement Attlee</b></div>', { anim: 'slideL', x: 60, y: 880, w: 960, at: 2, d: 0, notape: true, pad: '10px 20px' });
        S.svg(D.scales(), { x: 70, y: 990, w: 160, at: 2, d: 0.4 });
        S.card('<div class="t-body" style="font-size:38px"><b>Anthony Brooke</b>: rayuan Privy Council & Mahkamah Tinggi Brunei</div>', { anim: 'slideR', x: 250, y: 1000, w: 520, at: 2, d: 0.45, pad: '10px 16px' });
        S.stamp('DITOLAK', { x: 790, y: 1020, w: 230, at: 2, d: 0.85, fs: 50, style: 'text-align:center' });
      },
    },
    {
      id: 'rukun13', transition: 'flip',
      lines: [
        'Golongan muda menubuhkan **Rukun 13** secara sulit di Sibu pada **20 Ogos 1948**, dipimpin oleh **Awang Rambli**, **Morshidi Sidek** dan **Bujang Suntong**.',
        'Pada **3 Disember 1949**, **Rosli Dhoby** menikam Gabenor kedua Sarawak, **Duncan Stewart**, di Sibu. Duncan Stewart meninggal dunia seminggu kemudian.',
        'Peristiwa ini dikenali sebagai "**Sungkit Berdarah**".',
      ],
      board: {
        name: 'Rukun 13 & peristiwa Sungkit Berdarah',
        visual: 'Kad "RUKUN 13 · Sibu · 20 Ogos 1948" dengan tiga tag pemimpin; kad tarikh 3 Dis 1949 (Rosli Dhoby, Duncan Stewart – Gabenor kedua); cop besar "SUNGKIT BERDARAH" (tiada imej keganasan).',
        doodle: 'Kad, tag nama, peta kecil Sibu, cop.',
        text: 'Rukun 13 – sulit, Sibu, 20 Ogos 1948 – Awang Rambli · Morshidi Sidek · Bujang Suntong · 3 Dis 1949 – Rosli Dhoby menikam Gabenor kedua Duncan Stewart di Sibu · "Sungkit Berdarah"',
        anim: 'Kad & tag pop mengikut nama; cop dihentak pada "Sungkit Berdarah".',
      },
      draw(S, { D }) {
        S.text('<span class="hl">Rukun 13</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: 0 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:34px">SULIT · SIBU · 20 OGOS 1948</span></div>', { anim: 'pop', x: 40, y: 420, w: 1000, at: 0, d: 0.35 });
        [['AWANG RAMBLI', 0.68], ['MORSHIDI SIDEK', 0.78], ['BUJANG SUNTONG', 0.9]].forEach(([n, f], i) => S.tag(n, '', { x: 60 + i * 330, y: 530, w: 310, at: f }));
        S.card('<div class="tw red" style="font-size:28px">3 DISEMBER 1949 · SIBU</div><div class="t-body" style="font-size:42px"><b>Rosli Dhoby</b> menikam Gabenor kedua Sarawak, <b>Duncan Stewart</b></div><div class="t-label" style="font-size:36px">Duncan Stewart meninggal dunia seminggu kemudian</div>', { anim: 'slideU', x: 60, y: 680, w: 960, at: 1, d: 0.1 });
        S.stamp('SUNGKIT BERDARAH', { x: 90, y: 1050, w: 900, at: 2, d: 0.2, fs: 76, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'kesan', bg: 'grid', transition: 'paper',
      lines: [
        'British menutup pejabat **PPM**, **PKMS**, **BPS** dan **ASAS** pada **6 dan 7 Disember 1949**.',
        'Rosli Dhoby, Morshidi Sidek, Awang Rambli dan Bujang Suntong dikenakan **hukuman gantung**.',
        'Pada **5 Februari 1951**, Anthony Brooke merayu agar gerakan antipenyerahan dihentikan. Gerakan ini **gagal**…',
        'tetapi ia membangkitkan **nasionalisme**, dan membawa kepada penubuhan **parti politik** di Sarawak.',
      ],
      board: {
        name: 'Kesan penentangan',
        visual: 'Empat pintu pejabat dipangkah (PPM, PKMS, BPS, ASAS); kad hukuman; kad rayuan Anthony Brooke; cop GAGAL lalu kad emas "NASIONALISME ➜ PARTI POLITIK".',
        doodle: 'Pintu pejabat, pangkah, cop, bintang.',
        text: '6–7 Dis 1949 – pejabat PPM, PKMS, BPS, ASAS ditutup · empat pejuang dihukum gantung · 5 Feb 1951 – Anthony Brooke rayu gerakan dihentikan · GAGAL · tetapi bangkitkan nasionalisme ➜ parti politik di Sarawak',
        anim: 'Pangkah dihentak pada setiap akronim; kad meluncur; cop GAGAL; kad emas naik pada baris akhir.',
      },
      draw(S, { D }) {
        S.text('Kesannya', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        ['PPM', 'PKMS', 'BPS', 'ASAS'].forEach((a, i) => {
          S.card(`<div class="t-h3" style="text-align:center;font-size:40px">${a}</div>`, { anim: 'pop', x: 60 + i * 245, y: 390, w: 225, at: 0, d: 0.1 + i * 0.1, notape: true, pad: '14px 8px' });
          S.add(D.cross(), { anim: 'stamp', x: 220 + i * 245, y: 365, w: 70, at: 0, d: 1.3 + i * 0.15, sfx: i ? false : 'stamp' });
        });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:32px">PEJABAT DITUTUP · 6–7 DIS 1949</span></div>', { anim: 'pop', x: 40, y: 530, w: 1000, at: 0, d: 2.0 });
        S.card('<div class="t-body" style="font-size:38px">Empat pejuang Rukun 13 dikenakan <b>hukuman gantung</b></div>', { anim: 'slideL', x: 60, y: 640, w: 960, at: 1, d: 0.1, notape: true, pad: '10px 20px' });
        S.card('<div class="tw red" style="font-size:26px">5 FEBRUARI 1951</div><div class="t-body" style="font-size:38px">Anthony Brooke rayu gerakan antipenyerahan <b>dihentikan</b></div>', { anim: 'slideR', x: 60, y: 780, w: 700, at: 2, d: 0.1 });
        S.stamp('GAGAL', { x: 780, y: 800, w: 240, at: 2, d: 0.85, fs: 64, style: 'text-align:center' });
        S.card('<div class="t-h3" style="text-align:center">TETAPI ➜ bangkitkan <span class="red">NASIONALISME</span> ➜ <span class="red">parti politik</span> di Sarawak</div>', { color: 'gold', anim: 'slideU', x: 60, y: 1010, w: 960, at: 3, d: 0.1 });
        S.add(D.star(), { anim: 'pop', x: 930, y: 920, w: 90, at: 3, d: 0.6, pulse: [{ at: 3, d: 1.0 }] });
      },
    },
    {
      id: 'sokong', transition: 'slideUp',
      lines: [
        'Golongan yang menyokong pula mempunyai sebab tersendiri.',
        'Pertama, **memajukan negeri** yang musnah selepas perang, dalam bidang politik, perhubungan, perdagangan, pertanian, pendidikan dan kesihatan.',
        'Kedua, **memajukan penduduk tempatan**, melalui **Young Malay Association**, atau YMA, dengan cawangan di Sibu, Kalaka dan Miri.',
        'Ketiga, **peluang pekerjaan** dalam perkhidmatan awam. Golongan intelektual dapat mengisi jawatan tinggi seperti peguam, doktor dan jurutera.',
      ],
      board: {
        name: 'Golongan yang menyokong penyerahan',
        visual: 'Tajuk navy "MENYOKONG"; tiga kad bernombor dengan ikon: istana/jambatan (majukan negeri), watak rakyat bersorak + "YMA" (majukan penduduk), beg kerja/buku (peluang pekerjaan: peguam, doktor, jurutera).',
        doodle: 'Istana, watak, buku, palang merah, neraca.',
        text: 'MENYOKONG · 1 Majukan negeri (politik, perhubungan, perdagangan, pertanian, pendidikan, kesihatan) · 2 Majukan penduduk – Young Malay Association (YMA): Sibu, Kalaka, Miri · 3 Peluang pekerjaan awam – peguam, doktor, jurutera',
        anim: 'Kad bernombor meluncur masuk mengikut narasi; ikon dilukis.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">Golongan MENYOKONG</div>', { color: 'navy', anim: 'slideD', x: 60, y: 290, w: 960, at: 0, d: 0 });
        S.card(numCard(1, '<span class="hl">Majukan negeri</span> selepas perang', RED, 42), { anim: 'slideL', x: 60, y: 470, w: 760, at: 1, d: 0 });
        S.svg(D.palace(), { x: 840, y: 470, w: 180, at: 1, d: 0.2, dur: 0.6, sfx: false });
        S.text('politik · perhubungan · perdagangan · pertanian · pendidikan · kesihatan', { size: 'note', x: 80, y: 630, w: 920, at: 1, d: 0.4, style: 'font-size:34px;color:#172C63' });
        S.card(numCard(2, '<span class="hl">Majukan penduduk</span> · Young Malay Association (YMA)', NAVY, 40), { anim: 'slideL', x: 60, y: 720, w: 760, at: 2, d: 0 });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 860, y: 700, w: 130, at: 2, d: 0.2, dur: 0.6, sfx: false });
        S.text('cawangan: Sibu · Kalaka · Miri', { size: 'note', x: 80, y: 890, w: 900, at: 2, d: 0.7, style: 'font-size:34px;color:#172C63' });
        S.card(numCard(3, '<span class="hl">Peluang pekerjaan</span> awam: peguam · doktor · jurutera', RED, 40), { anim: 'slideL', x: 60, y: 980, w: 960, at: 3, d: 0 });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Walaupun gagal, gerakan antipenyerahan membangkitkan **kesedaran** dan semangat **nasionalisme** dalam kalangan penduduk Sarawak.',
        'Kenali sejarah, fahami masa kini. Seterusnya: **penyerahan Sabah**, yang berlaku tanpa sebarang penentangan!',
      ],
      tail: 0.8,
      board: {
        name: 'Iktibar & episod seterusnya',
        visual: 'Bintang emas "NASIONALISME"; maskot dan kad episod seterusnya.',
        doodle: 'Bintang, mentol, pelekat maskot.',
        text: 'Kesedaran & nasionalisme · Seterusnya: 4.6 Penyerahan Sabah',
        anim: 'Bintang berdenyut; maskot & kad pop.',
      },
      draw(S, { D }) {
        S.add(D.star(), { anim: 'pop', x: 440, y: 290, w: 200, at: 0, d: 0, pulse: [{ at: 0, d: 2.5 }] });
        S.card('<div class="t-body" style="font-size:46px;text-align:center">Gagal… tetapi bangkitkan <span class="hl">kesedaran</span> & <span class="hl">nasionalisme</span></div>', { tear: true, anim: 'slideU', x: 70, y: 540, w: 940, at: 0, d: 0.5 });
        S.mascot({ x: 80, y: 900, w: 260, at: 1, d: 0.2 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">4.6 Penyerahan Sabah</div>', { x: 380, y: 960, w: 600, at: 1, d: 1.5 });
      },
    },
    END,
  ],
};
