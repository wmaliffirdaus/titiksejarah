// EPISOD 02 – Subtopik 1.1: Latar Belakang Negara Bangsa Sebelum Kedatangan Barat (≈ 3–5 min)
import { locator, kingdomHeader, fact, SEA_BOUNDS, RED, NAVY, GOLD } from './lib.js';

const K = {
  funan: [105.2, 10.6], champa: [108.3, 15.8], angkor: [103.87, 13.41], srivijaya: [104.75, -2.99],
  majapahit: [112.38, -7.56], kedah: [100.45, 5.68], gangga: [100.78, 4.5],
};

export default {
  id: '02',
  file: '02_Bab1_Subtopik_1.1',
  title: 'Latar Belakang Negara Bangsa Sebelum Kedatangan Barat',
  header: { chip: 'BAB 1 • 1.1', sub: 'Negara Bangsa Sebelum Kedatangan Barat' },
  music: { key: 62, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Tahukah anda? Di Eropah, konsep negara bangsa moden dikaitkan dengan **Perjanjian Westphalia** pada tahun 1648.', pause: 0.45 },
        'Tetapi di Alam Melayu, kerajaan yang tersusun sudah wujud lebih seribu tahun lebih awal!',
      ],
      board: {
        name: 'Hook – Eropah 1648 lawan Alam Melayu',
        visual: 'Skrin dibahagi dua: dokumen perjanjian 1648 (kiri) lawan candi Alam Melayu (kanan) dengan lencana "VS"; garis masa ringkas di bawah.',
        doodle: 'Dokumen perjanjian bercop merah "1648", candi bertingkat, glob, lencana VS merah.',
        text: 'EROPAH: 1648 · ALAM MELAYU: sejak abad ke-1 M · "lebih 1,000 tahun lebih awal!"',
        anim: 'Dokumen dilukis; VS pop; candi dilukis; garis masa dilukar dari kiri ke kanan; label "lebih 1,000 tahun" dicop.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('EROPAH', { size: 'h3', x: 80, y: 300, w: 400, align: 'center', at: 0 });
        S.svg(D.treaty('1648'), { x: 140, y: 380, w: 280, at: 0, d: 0.2 });
        S.text('Perjanjian <span class="red">Westphalia</span>', { size: 'label', x: 60, y: 760, w: 440, align: 'center', at: 0.55 });
        S.add(D.vs(), { anim: 'pop', x: 460, y: 540, w: 160, at: 0.8 });
        S.text('ALAM MELAYU', { size: 'h3', x: 600, y: 300, w: 420, align: 'center', at: 1 });
        S.svg(D.candi(), { x: 660, y: 380, w: 300, at: 1, d: 0.1 });
        S.text('Abad ke-1 M ➜', { size: 'label', x: 600, y: 760, w: 420, align: 'center', at: 1, d: 0.6 });
        S.add('<svg viewBox="0 0 900 80"><line x1="20" y1="40" x2="880" y2="40" stroke="#172C63" stroke-width="6" stroke-linecap="round"/><circle cx="60" cy="40" r="16" fill="#C93436" stroke="#172C63" stroke-width="4"/><circle cx="820" cy="40" r="16" fill="#F5C928" stroke="#172C63" stroke-width="4"/></svg>', { anim: 'wipe', x: 90, y: 890, w: 900, at: 1, d: 0.3, dur: 1.2 });
        S.text('Abad ke-1 M', { size: 'label', x: 40, y: 960, w: 300, align: 'center', at: 1, d: 0.4 });
        S.text('1648', { size: 'label', x: 760, y: 960, w: 300, align: 'center', at: 1, d: 1.2 });
        S.card('<div class="t-h3" style="color:#FFFDF7;text-align:center">lebih 1,000 tahun<br>lebih awal!</div>', { color: 'red', anim: 'stamp', x: 250, y: 1060, w: 580, rot: -4, at: 1, d: 1.6 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 1.1: **Latar Belakang Negara Bangsa Sebelum Kedatangan Barat**.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Kad tajuk besar dengan nombor subtopik dan maskot rasmi di sudut bawah.',
        doodle: 'Pil "SUBTOPIK 1.1", garis bawah merah, pelekat maskot.',
        text: 'SUBTOPIK 1.1 · Latar Belakang Negara Bangsa Sebelum Kedatangan Barat',
        anim: 'Pil pop, tajuk ditulis tangan (wipe), maskot pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 1.1</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0, d: -0.3 });
        S.text('Latar Belakang<br><span class="red">Negara Bangsa</span><br>Sebelum Kedatangan Barat', { size: 'h2', x: 60, y: 440, w: 960, align: 'center', at: 0, dur: 1.4 });
        S.svg(D.underline(520), { x: 280, y: 690, w: 520, at: 0, d: 1.3, dur: 0.5 });
        S.mascot({ x: 380, y: 760, w: 320, at: 0, d: 0.6 });
      },
    },
    {
      id: 'konsep', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Apa itu **negara bangsa**? Ia ialah negara yang berdaulat, mempunyai wilayah dengan sempadan, kerajaan yang memerintah,', pause: 0.1 },
        { text: 'dan rakyat yang berkongsi identiti seperti bahasa, budaya dan sejarah.', pause: 0.45 },
        'Perkataan negara sendiri berasal daripada bahasa Sanskrit, **nagara**, yang bermaksud kota atau bandar.',
      ],
      board: {
        name: 'Konsep negara bangsa',
        visual: 'Persamaan visual: NEGARA + BANGSA = NEGARA BANGSA, diikuti nota asal usul perkataan "nagara".',
        doodle: 'Kad bertindih gaya nota lekat, ikon mahkota, glob, istana, dan watak rakyat; skrol kecil "nagara".',
        text: 'NEGARA (berdaulat · wilayah · kerajaan) + BANGSA (bahasa · budaya · sejarah) = NEGARA BANGSA · Sanskrit: nagara = kota/bandar',
        anim: 'Kad "NEGARA" dan "BANGSA" meluncur masuk mengikut narasi; tanda "=" pop; kad keputusan dicop; skrol etimologi dilukis.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h3 red">NEGARA</div><div class="t-body" style="font-size:38px">• berdaulat<br>• wilayah & sempadan<br>• kerajaan</div>', { anim: 'slideL', x: 60, y: 300, w: 450, at: 0, d: 1.2, rot: -1.5 });
        S.add('<div class="t-big" style="font-size:110px;text-align:center">+</div>', { anim: 'pop', x: 480, y: 350, w: 120, at: 0.9 });
        S.card('<div class="t-h3 red">BANGSA</div><div class="t-body" style="font-size:38px">• bahasa<br>• budaya<br>• sejarah</div>', { anim: 'slideR', x: 575, y: 300, w: 445, at: 1, d: 0.2, rot: 1.5 });
        S.add('<div class="t-big" style="font-size:110px;text-align:center">=</div>', { anim: 'pop', x: 480, y: 600, w: 120, at: 1.75 });
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">NEGARA BANGSA</div>', { color: 'navy', anim: 'stamp', x: 170, y: 740, w: 740, at: 1.8 });
        S.svg(D.scroll('nagara', { ts: 46 }), { x: 90, y: 930, w: 260, at: 2, d: 0.2 });
        S.card('<div class="t-label">Bahasa Sanskrit</div><div class="t-body"><span class="hl">nagara</span> = kota / bandar</div>', { anim: 'slideR', x: 400, y: 1010, w: 560, at: 2.55 });
      },
    },
    {
      id: 'ciri', transition: 'flip',
      lines: [
        { text: 'Kerajaan awal di Alam Melayu sudah memiliki **ciri-ciri negara bangsa**:', pause: 0.25 },
        { text: 'ada pemerintah yang berdaulat, wilayah dan rakyat, sistem pentadbiran,', pause: 0.1 },
        { text: 'undang-undang, serta hubungan luar dengan kuasa lain seperti China dan India.' },
      ],
      board: {
        name: 'Ciri-ciri negara bangsa kerajaan Alam Melayu',
        visual: 'Senarai semak bergambar 6 petak (grid 2×3) seperti halaman nota.',
        doodle: 'Mahkota, peta mini, watak rakyat, istana, skrol undang-undang, kapal dagang; tanda semak hijau pada setiap petak.',
        text: 'Pemerintah berdaulat · Wilayah · Rakyat · Sistem pentadbiran · Undang-undang · Hubungan luar',
        anim: 'Setiap petak pop dan ditanda semak tepat ketika ciri disebut.',
      },
      draw(S, { D }) {
        S.text('Ciri-ciri <span class="hl">Negara Bangsa</span>', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: -0.2 });
        const items = [
          ['Pemerintah berdaulat', D.crown(), 1.15], ['Wilayah', D.globe(), 1.45], ['Rakyat', D.rakyat({ pose: 'cheer' }), 1.65],
          ['Sistem pentadbiran', D.palace(), 1.85], ['Undang-undang', D.scroll('', { color: RED }), 2.25], ['Hubungan luar', D.ship({ junk: true, waves: false }), 2.7],
        ];
        items.forEach(([label, icon, at], i) => {
          const x = 70 + (i % 2) * 480, y = 400 + Math.floor(i / 2) * 310;
          S.card('<div style="height:228px"></div>', { anim: 'pop', x, y, w: 450, at, sfx: 'pop' });
          S.svg(icon, { x: x + 25, y: y + 30, w: 150, at, d: 0.1, dur: 0.8, sfx: false });
          S.text(label, { size: 'body', x: x + 190, y: y + 80, w: 240, at, d: 0.2, style: 'font-size:42px' });
          S.add(D.check(), { anim: 'pop', x: x + 360, y: y + 175, w: 70, at, d: 0.5, sfx: false });
        });
      },
    },
    {
      id: 'peta', bg: 'lined', transition: 'zoom', gap: 0.25,
      lines: [
        { text: 'Mari kita lihat tujuh kerajaan awal ini di peta.', pause: 0.3 },
        'Funan, Champa dan Angkor di tanah besar Asia Tenggara.',
        'Srivijaya di Sumatera, dan Majapahit di Jawa.',
        'Kedah Tua dan Gangga Nagara di Semenanjung Tanah Melayu.',
      ],
      board: {
        name: 'Peta tujuh kerajaan awal',
        visual: 'Peta lakaran Asia Tenggara dengan tujuh penanda kerajaan muncul mengikut kawasan.',
        doodle: 'Peta lukisan tangan (garis pantai navy, daratan kuning pudar, laut navy pudar), penanda lokasi merah/kuning/navy, label tulisan tangan.',
        text: 'Funan · Champa · Angkor · Srivijaya · Majapahit · Kedah Tua · Gangga Nagara · Laut China Selatan · Selat Melaka',
        anim: 'Peta dilukis garis demi garis; penanda pop berkumpulan mengikut narasi.',
      },
      draw(S) {
        const at = S.map({ bounds: SEA_BOUNDS, w: 780, labels: [{ lon: 111.5, lat: 10.5, text: 'Laut China Selatan', size: 30 }, { lon: 98.6, lat: 3.2, text: 'Selat Melaka', size: 26, rot: -48 }] }, { x: 150, y: 285, w: 780, at: 0, d: -0.3, dur: 1.8 });
        S.pin(at, ...K.funan, 'Funan', { at: 1, d: 0, color: RED });
        S.pin(at, ...K.champa, 'Champa', { at: 1, d: 0.6, color: GOLD });
        S.pin(at, ...K.angkor, 'Angkor', { at: 1, d: 1.3, color: NAVY, left: true });
        S.pin(at, ...K.srivijaya, 'Srivijaya', { at: 2, d: 0, color: RED });
        S.pin(at, ...K.majapahit, 'Majapahit', { at: 2, d: 1.2, color: GOLD, left: true });
        S.pin(at, ...K.kedah, 'Kedah Tua', { at: 3, d: 0, color: NAVY, left: true });
        S.pin(at, ...K.gangga, 'Gangga Nagara', { at: 3, d: 0.8, color: RED });
      },
    },
    {
      id: 'funan', transition: 'paper',
      lines: [
        'Kerajaan pertama, **Funan**, wujud sekitar abad pertama Masihi di lembah Sungai Mekong, kini Kemboja dan selatan Vietnam.',
        'Funan maju dalam pertanian padi kerana mempunyai sistem tali air dan terusan.',
        'Pelabuhannya, **Oc Eo**, menjadi tempat persinggahan pedagang dari China dan India.',
        'Rajanya, Fan Shih Man, pula meluaskan pengaruh Funan hingga ke Segenting Kra.',
      ],
      board: {
        name: 'Kerajaan Funan',
        visual: 'Profil kerajaan: tajuk + era + lokasi (kiri atas), peta lokasi mini (kanan atas), ilustrasi sawah & sungai, empat kad fakta.',
        doodle: 'Sungai Mekong, pokok padi, kapal dagang, watak raja.',
        text: 'FUNAN · ±Abad ke-1 M · Lembah Sungai Mekong · tali air & terusan · Pelabuhan Oc Eo · Fan Shih Man',
        anim: 'Peta mini dilukis & penanda pop; ilustrasi dilukis; kad fakta meluncur masuk satu demi satu.',
      },
      draw(S, { D }) {
        kingdomHeader(S, 'FUNAN', '± Abad ke-1 M', 'Lembah Sungai Mekong');
        locator(S, ...K.funan, 'Funan');
        S.svg(D.river(), { x: 60, y: 560, w: 600, at: 0, d: 0.8 });
        S.svg(D.padi(), { x: 70, y: 610, w: 300, at: 1 });
        S.svg(D.ship({ junk: true }), { x: 390, y: 600, w: 270, at: 2 });
        fact(S, 0, '**Abad ke-1 M** · kini Kemboja & selatan Vietnam', 0, { d: 1.2 });
        fact(S, 1, 'Pertanian padi: **sistem tali air & terusan**', 1, { d: 0.3 });
        fact(S, 2, 'Pelabuhan **Oc Eo**: pedagang China & India', 2, { d: 0.3 });
        fact(S, 3, '**Fan Shih Man** luaskan pengaruh ke Segenting Kra', 3, { d: 0.3 });
      },
    },
    {
      id: 'champa', transition: 'slideUp',
      lines: [
        '**Champa** pula diasaskan pada tahun 192 Masihi di pesisir tengah Vietnam.',
        'Orang Cham bertutur dalam bahasa yang serumpun dengan bahasa Melayu.',
        'Champa ialah kerajaan maritim yang berdagang hasil hutan seperti kayu gaharu.',
        'Kompleks candi **My Son** menjadi pusat keagamaan dan bukti kehebatan seni binanya.',
      ],
      board: {
        name: 'Kerajaan Champa',
        visual: 'Profil kerajaan dengan menara candi bata merah dan kapal maritim.',
        doodle: 'Candi bata (warna merah pudar), kapal layar, buih kata "Cham ≈ Melayu".',
        text: 'CHAMPA · 192 M · Pesisir tengah Vietnam · bahasa serumpun Melayu · maritim: kayu gaharu · Candi My Son',
        anim: 'Penanda lokasi pop; candi dilukis; kad fakta meluncur masuk mengikut narasi.',
      },
      draw(S, { D, C }) {
        kingdomHeader(S, 'CHAMPA', '192 M', 'Pesisir tengah Vietnam');
        locator(S, ...K.champa, 'Champa', { left: true });
        S.svg(D.candi(C.lred), { x: 90, y: 560, w: 250, at: 3, d: -1.5 });
        S.svg(D.ship(), { x: 370, y: 590, w: 280, at: 2 });
        S.add('<div class="bubble" style="font-size:36px">Cham ≈ Melayu</div>', { anim: 'pop', x: 80, y: 600, w: 300, at: 1, out: 2.9 });
        fact(S, 0, 'Diasaskan **192 M**', 0, { d: 0.5 });
        fact(S, 1, 'Bahasa Cham **serumpun** dengan bahasa Melayu', 1, { d: 0.3 });
        fact(S, 2, 'Kerajaan **maritim**: dagang kayu gaharu', 2, { d: 0.3 });
        fact(S, 3, 'Candi **My Son**: pusat keagamaan', 3, { d: 0.3 });
      },
    },
    {
      id: 'srivijaya', transition: 'paper',
      lines: [
        '**Srivijaya** muncul pada abad ketujuh, berpusat di Palembang, Sumatera.',
        'Ia menguasai Selat Melaka dan Selat Sunda, lalu menjadi pelabuhan entrepot dan kuasa maritim yang hebat.',
        'Batu bersurat **Kedukan Bukit**, tahun 683 Masihi, dan **Kota Kapur**, tahun 686 Masihi, membuktikan kedaulatan raja dan undang-undang yang mesti dipatuhi rakyat.',
        'Sami China, **I-Ching**, pula mencatatkan Srivijaya sebagai pusat pengajian agama Buddha.',
      ],
      board: {
        name: 'Kerajaan Srivijaya',
        visual: 'Profil kerajaan maritim: dua batu bersurat bertarikh, stupa Buddha dan kapal.',
        doodle: 'Batu bersurat (683 M, 686 M), stupa, kapal layar, watak sami China dengan skrol.',
        text: 'SRIVIJAYA · Abad ke-7 M · Palembang, Sumatera · Selat Melaka & Selat Sunda · entrepot · Kedukan Bukit 683 M · Kota Kapur 686 M · I-Ching',
        anim: 'Penanda pop; batu bersurat dilukis serentak dengan sebutan tarikh; tarikh dicop; stupa & watak pop.',
      },
      draw(S, { D }) {
        kingdomHeader(S, 'SRIVIJAYA', 'Abad ke-7 M', 'Palembang, Sumatera');
        locator(S, ...K.srivijaya, 'Srivijaya');
        S.svg(D.ship(), { x: 70, y: 570, w: 250, at: 1 });
        S.svg(D.inscription({ year: '683 M' }), { x: 330, y: 535, w: 150, at: 2, d: 0.2 });
        S.svg(D.inscription({ year: '686 M' }), { x: 500, y: 535, w: 150, at: 2.35 });
        S.svg(D.pegawai({ pose: 'present' }), { x: 80, y: 545, w: 170, at: 3, d: -0.2, dur: 0.9 });
        fact(S, 0, '**Abad ke-7 M**, pusat di Palembang', 0, { d: 0.6 });
        fact(S, 1, 'Kuasai Selat Melaka & Selat Sunda: **entrepot**', 1, { d: 0.3 });
        fact(S, 2, 'Batu bersurat: **kedaulatan** raja & **undang-undang**', 2, { d: 1.2 });
        fact(S, 3, '**I-Ching**: pusat pengajian Buddha', 3, { d: 0.3 });
      },
    },
    {
      id: 'angkor', transition: 'flip',
      lines: [
        'Di Kemboja, kerajaan **Angkor** diasaskan oleh Jayavarman Kedua pada tahun 802 Masihi.',
        'Raja Angkor dianggap **dewaraja**, iaitu raja yang berkuasa mutlak dan disanjung seperti dewa.',
        'Angkor ialah kerajaan **agraria**. Takungan air besar yang dipanggil baray membolehkan padi ditanam dengan banyak.',
        'Kemegahannya terserlah pada **Angkor Wat**, yang dibina pada zaman Suryavarman Kedua.',
      ],
      board: {
        name: 'Kerajaan Angkor',
        visual: 'Profil kerajaan: siluet Angkor Wat lima menara, watak raja bermahkota, sawah padi.',
        doodle: 'Angkor Wat (5 menara bunga teratai), raja dewaraja, pokok padi, takungan air (baray).',
        text: 'ANGKOR · 802 M · Kemboja · Jayavarman II · dewaraja · agraria · baray · Angkor Wat (Suryavarman II)',
        anim: 'Raja pop dengan sinar; padi dilukis; Angkor Wat dilukis besar pada baris terakhir.',
      },
      draw(S, { D }) {
        kingdomHeader(S, 'ANGKOR', '802 M', 'Kemboja');
        locator(S, ...K.angkor, 'Angkor', { left: true });
        S.svg(D.sultan({ pose: 'up', beard: false }), { x: 80, y: 540, w: 170, at: 1, d: -0.4, dur: 0.9 });
        S.text('dewaraja', { size: 'note', x: 60, y: 525, w: 220, align: 'center', at: 1, d: 0.6 });
        S.svg(D.padi(), { x: 290, y: 600, w: 330, at: 2, d: 0.5, out: 3 });
        S.svg(D.angkor(), { x: 270, y: 580, w: 400, at: 3, d: 0.3, dur: 1.6 });
        fact(S, 0, '**Jayavarman II** · 802 M', 0, { d: 0.6 });
        fact(S, 1, '**Dewaraja**: raja berkuasa mutlak', 1, { d: 0.3 });
        fact(S, 2, 'Kerajaan **agraria**: takungan air (**baray**)', 2, { d: 0.3 });
        fact(S, 3, '**Angkor Wat** · zaman Suryavarman II', 3, { d: 0.3 });
      },
    },
    {
      id: 'majapahit', transition: 'paper',
      lines: [
        '**Majapahit** diasaskan oleh Raden Wijaya pada tahun 1293 di Jawa Timur.',
        'Di bawah Raja Hayam Wuruk dan Patih Gajah Mada, yang terkenal dengan **Sumpah Palapa**, Majapahit meluaskan pengaruh ke seluruh Nusantara.',
        'Kitab **Negarakertagama** mencatatkan wilayah naungannya yang luas dan pentadbirannya yang tersusun.',
      ],
      board: {
        name: 'Kerajaan Majapahit',
        visual: 'Profil kerajaan: Gajah Mada mengangkat sumpah, kitab Negarakertagama, candi Jawa.',
        doodle: 'Watak Patih Gajah Mada (tanjak merah, keris), buku merah "Negarakertagama", candi kuning.',
        text: 'MAJAPAHIT · 1293 M · Jawa Timur · Raden Wijaya · Hayam Wuruk & Gajah Mada · Sumpah Palapa · Negarakertagama',
        anim: 'Watak pop sambil mengangkat tangan; buku dilukis; kad fakta meluncur.',
      },
      draw(S, { D }) {
        kingdomHeader(S, 'MAJAPAHIT', '1293 M', 'Jawa Timur');
        locator(S, ...K.majapahit, 'Majapahit', { left: true });
        S.svg(D.candi(), { x: 90, y: 560, w: 220, at: 0, d: 1.2 });
        S.svg(D.laksamana({ pose: 'up' }), { x: 330, y: 540, w: 170, at: 1, d: 0.8, dur: 0.9 });
        S.text('Sumpah Palapa!', { size: 'note', x: 440, y: 560, w: 260, at: 1, d: 1.6 });
        S.svg(D.book('NEGARA-|KERTAGAMA', RED, { size: 20 }), { x: 520, y: 640, w: 150, at: 2, d: 0.2 });
        fact(S, 0, '**Raden Wijaya** · 1293 M', 0, { d: 0.6 });
        fact(S, 1, '**Hayam Wuruk** & **Gajah Mada**', 1, { d: 0.6 });
        fact(S, 2, '**Sumpah Palapa**: satukan Nusantara', 1, { d: 3.2 });
        fact(S, 3, '**Negarakertagama**: wilayah naungan luas', 2, { d: 0.3 });
      },
    },
    {
      id: 'kedah', transition: 'slideUp',
      lines: [
        'Di Semenanjung Tanah Melayu, **Kedah Tua** berpusat di Lembah Bujang.',
        'Tapak arkeologi **Sungai Batu** menunjukkan aktiviti peleburan besi dan perdagangan sejak lebih dua ribu tahun lalu.',
        'Gunung Jerai menjadi panduan pelayar, dan pelabuhannya menjadi **pusat entrepot** yang dikunjungi pedagang dari India, China dan Arab.',
        'Candi Bukit Batu Pahat pula membuktikan pengaruh Hindu-Buddha di sini.',
      ],
      board: {
        name: 'Kerajaan Kedah Tua',
        visual: 'Profil kerajaan: Gunung Jerai sebagai penanda pelayar, kapal dagang, candi batu.',
        doodle: 'Gunung Jerai (hijau, puncak berawan), kapal, candi Bukit Batu Pahat (warna batu).',
        text: 'KEDAH TUA · Lembah Bujang · Sungai Batu: peleburan besi · Gunung Jerai · entrepot (India, China, Arab) · Candi Bukit Batu Pahat',
        anim: 'Gunung dilukis, kapal meluncur, candi dilukis pada baris akhir.',
      },
      draw(S, { D, C }) {
        kingdomHeader(S, 'KEDAH TUA', 'Lembah Bujang', 'Kedah');
        locator(S, ...K.kedah, 'Kedah Tua', { left: true });
        S.svg(D.mountain(), { x: 70, y: 580, w: 290, at: 2, d: -1.5 });
        S.text('Gunung Jerai', { size: 'note', x: 110, y: 545, w: 260, at: 2 });
        S.svg(D.ship(), { x: 330, y: 620, w: 230, at: 2, d: 1.2 });
        S.svg(D.candi(C.stone), { x: 540, y: 590, w: 140, at: 3, d: 0.1 });
        fact(S, 0, 'Pusat di **Lembah Bujang**', 0, { d: 0.5 });
        fact(S, 1, '**Sungai Batu**: peleburan besi & dagang', 1, { d: 0.4 });
        fact(S, 2, '**Pusat entrepot**: India, China, Arab', 2, { d: 1.6 });
        fact(S, 3, 'Candi **Bukit Batu Pahat**: Hindu-Buddha', 3, { d: 0.3 });
      },
    },
    {
      id: 'gangga', transition: 'paper',
      lines: [
        '**Gangga Nagara** pula dipercayai terletak di Beruas, Perak.',
        'Kerajaan ini disebut dalam **Sejarah Melayu**, yang mengisahkan serangan Raja Suran ke atas Gangga Nagara.',
        'Penemuan artifak di sekitar Beruas, seperti tembikar dan batu nisan lama, menunjukkan kawasan ini pernah menjadi petempatan penting.',
      ],
      board: {
        name: 'Kerajaan Gangga Nagara',
        visual: 'Profil kerajaan: buku Sejarah Melayu, kanta pembesar di atas artifak, peta lokasi Beruas.',
        doodle: 'Buku "Sejarah Melayu", kanta pembesar, tembikar, batu nisan.',
        text: 'GANGGA NAGARA · Beruas, Perak · disebut dalam Sejarah Melayu · serangan Raja Suran · artifak: tembikar & batu nisan',
        anim: 'Buku dilukis; kanta pembesar pop; artifak muncul satu demi satu.',
      },
      draw(S, { D, C }) {
        kingdomHeader(S, 'GANGGA NAGARA', 'Dipercayai', 'Beruas, Perak');
        locator(S, ...K.gangga, 'Gangga Nagara');
        S.svg(D.book('SEJARAH|MELAYU', NAVY, { size: 24 }), { x: 80, y: 545, w: 170, at: 1, d: 0.4 });
        S.svg(D.inscription(), { x: 300, y: 600, w: 110, at: 2, d: 1.4 });
        S.add(`<svg viewBox="0 0 140 150"><path d="M30 20 L110 20 L104 40 Q130 70 118 110 Q104 146 70 146 Q36 146 22 110 Q10 70 36 40 Z" fill="${C.lred}" stroke="#172C63" stroke-width="5"/><path d="M30 70 Q70 86 112 70" stroke="#172C63" stroke-width="4" fill="none"/></svg>`, { anim: 'pop', x: 440, y: 630, w: 120, at: 2, d: 1.0 });
        S.add(D.magnifier(), { anim: 'pop', x: 540, y: 560, w: 130, at: 2, d: 0.3 });
        fact(S, 0, 'Dipercayai di **Beruas, Perak**', 0, { d: 0.5 });
        fact(S, 1, 'Disebut dalam **Sejarah Melayu**', 1, { d: 0.3 });
        fact(S, 2, 'Serangan **Raja Suran**', 1, { d: 2.4 });
        fact(S, 3, 'Artifak: **tembikar** & **batu nisan** lama', 2, { d: 0.5 });
      },
    },
    {
      id: 'ekonomi', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Secara ringkas, ada kerajaan yang kuat dalam **pertanian**, seperti Angkor,', pause: 0.15 },
        { text: 'ada yang kuat dalam **perdagangan maritim**, seperti Srivijaya, Champa dan Kedah Tua,', pause: 0.15 },
        'dan ada yang menggabungkan kedua-duanya, seperti Funan dan Majapahit.',
      ],
      board: {
        name: 'Asas ekonomi: agraria lawan maritim',
        visual: 'Rajah Venn dua bulatan: PERTANIAN (kiri) dan PERDAGANGAN MARITIM (kanan), kawasan bertindih untuk kerajaan yang menggabungkan kedua-duanya.',
        doodle: 'Pokok padi dan kapal di atas bulatan; label kerajaan tulisan tangan.',
        text: 'PERTANIAN: Angkor · MARITIM: Srivijaya, Champa, Kedah Tua · KEDUA-DUANYA: Funan, Majapahit',
        anim: 'Bulatan dilukis satu demi satu; nama kerajaan ditulis ke dalam bahagian masing-masing.',
      },
      draw(S, { D }) {
        S.text('Asas Ekonomi', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.3 });
        S.add('<svg viewBox="0 0 960 620"><circle cx="330" cy="310" r="290" fill="rgba(245,201,40,.35)" stroke="#172C63" stroke-width="6"/></svg>', { anim: 'fade', x: 60, y: 520, w: 960, at: 0, d: 0.1 });
        S.add('<svg viewBox="0 0 960 620"><circle cx="630" cy="310" r="290" fill="rgba(201,52,54,.22)" stroke="#172C63" stroke-width="6"/></svg>', { anim: 'fade', x: 60, y: 520, w: 960, at: 1 });
        S.svg(D.padi(), { x: 160, y: 400, w: 200, at: 0, d: 0.5, sfx: false });
        S.text('PERTANIAN', { size: 'h3', x: 100, y: 590, w: 300, at: 0, d: 0.6 });
        S.text('Angkor', { size: 'label', x: 140, y: 760, w: 220, at: 0, d: 2.2 });
        S.svg(D.ship({ waves: false }), { x: 730, y: 380, w: 210, at: 1, d: 0.3, sfx: false });
        S.text('MARITIM', { size: 'h3', x: 780, y: 590, w: 260, at: 1, d: 0.6 });
        S.text('Srivijaya<br>Champa<br>Kedah Tua', { size: 'label', x: 780, y: 690, w: 240, at: 1, d: 2.5 });
        S.text('KEDUA-<br>DUANYA', { size: 'note', x: 470, y: 640, w: 200, align: 'center', at: 2, d: 0.2 });
        S.text('Funan<br>Majapahit', { size: 'label', x: 470, y: 760, w: 200, align: 'center', at: 2, d: 1.6 });
      },
    },
    {
      id: 'kesimpulan', transition: 'paper',
      lines: [
        { text: 'Kesimpulannya, sebelum kedatangan Barat, kerajaan di Alam Melayu sudah mempunyai pemerintah berdaulat, wilayah, rakyat, pentadbiran dan undang-undang.', pause: 0.35 },
        'Inilah asas **warisan negara bangsa** kita.',
        'Seterusnya, kita kaji ciri-ciri negara bangsa **Kesultanan Melayu Melaka**!',
      ],
      tail: 0.8,
      board: {
        name: 'Kesimpulan & episod seterusnya',
        visual: 'Kad kesimpulan bertanda bintang dengan 5 kata kunci; maskot rasmi muncul memperkenalkan episod seterusnya.',
        doodle: 'Bintang emas, pelekat maskot, istana Melaka kecil.',
        text: 'Berdaulat · Wilayah · Rakyat · Pentadbiran · Undang-undang = WARISAN NEGARA BANGSA · Seterusnya: 1.2 Kesultanan Melayu Melaka',
        anim: 'Kata kunci pop satu demi satu; kad warisan dicop; maskot dan kad seterusnya pop.',
      },
      draw(S, { D }) {
        S.text('Kesimpulan', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.3 });
        const kw = ['Berdaulat', 'Wilayah', 'Rakyat', 'Pentadbiran', 'Undang-undang'];
        kw.forEach((k, i) => S.add(`<span class="pill" style="font-size:34px;background:${i % 2 ? '#FFFDF7' : '#F5C928'}">${k}</span>`, { anim: 'pop', x: 70 + (i % 3) * 320, y: 400 + Math.floor(i / 3) * 95, w: 320, at: 0, d: 2.6 + i * 0.55 }));
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">= WARISAN NEGARA BANGSA</div>', { color: 'navy', anim: 'stamp', x: 90, y: 620, w: 900, at: 1 });
        S.add(D.star(), { anim: 'pop', x: 900, y: 580, w: 110, at: 1, d: 0.3, sfx: false });
        S.mascot({ x: 80, y: 790, w: 300, at: 2, d: -0.2 });
        S.svg(D.palace(), { x: 430, y: 820, w: 330, at: 2, d: 0.3 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">1.2 Kesultanan Melayu Melaka</div>', { x: 410, y: 1080, w: 580, at: 2, d: 0.8 });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Fade + zoom-in lembut pada DP; teks jenama pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
