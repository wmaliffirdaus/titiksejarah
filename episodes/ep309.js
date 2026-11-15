// BAB 3 · EPISOD 09 – Subtopik 3.8: Perkembangan Gerakan Nasionalisme Tempatan dan Pendudukan Jepun (≈ 4.5 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 80–81 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END, soldier, flagJP, akhbar } from './bab3.js';

export default {
  id: '309',
  file: '09_Bab3_Subtopik_3.8',
  title: 'Perkembangan Gerakan Nasionalisme Tempatan dan Pendudukan Jepun',
  header: { chip: 'BAB 3 • 3.8', sub: 'Nasionalisme Tempatan' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.8), ms. 80–81',
  ...CH1,
  music: { key: 62, bpm: 100, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Orang Asia mengalahkan kuasa Eropah? Kejayaan Jepun menewaskan British membuka mata rakyat kita.', pause: 0.4 },
        'Orang Asia juga **mampu** mengalahkan orang Eropah!',
      ],
      board: { name: 'Hook – Asia mampu menang', visual: 'Frame pertama lengkap: tajuk "ASIA MAMPU MENANG?", bendera Jepun lawan kad "BRITISH" yang dipangkah; cop "MAMPU!" pada ayat kedua.', doodle: 'Bendera Jepun, palang, cop.', text: 'ASIA MAMPU MENANG? · Jepun ✕ British · MAMPU!', anim: 'Elemen utama pada 0:00; cop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('ASIA MAMPU<br><span class="red">MENANG?</span>', { fs: 112 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(flagJP(D), { ...NOW, x: 90, y: 600, w: 330 });
        S.add(D.vs(), { ...NOW, x: 470, y: 660, w: 140 });
        S.card('<div class="t-h2" style="text-align:center">BRITISH</div>', { ...NOW, x: 650, y: 640, w: 340 });
        S.add(D.cross(), { ...NOW, x: 930, y: 590, w: 100 });
        S.stamp('MAMPU!', { x: 340, y: 980, w: 400, at: 1, d: 0.6, fs: 120, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.8: **Perkembangan Gerakan Nasionalisme Tempatan dan Pendudukan Jepun**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.8", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.8 · Perkembangan Gerakan Nasionalisme Tempatan dan Pendudukan Jepun', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.8', 'Perkembangan Gerakan<br><span class="red">Nasionalisme Tempatan</span><br>&amp; Pendudukan Jepun', { fs: 64, uy: 710, my: 780 }); },
    },
    {
      id: 'antipenjajah', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Pendudukan Jepun berlaku ketika bibit-bibit kesedaran nasionalisme mula berkembang.', pause: 0.25 },
        { text: 'Slogan **Asia untuk Asia** dan konsep **Lingkungan Sekemakmuran Asia Timur Raya** menekankan kebebasan negara Asia, serta persaudaraan sejagat.', pause: 0.25 },
        'Konsep ini selari dengan perjuangan sebahagian golongan nasionalis, terutama **Kesatuan Melayu Muda**, atau KMM.',
      ],
      board: { name: 'Perkembangan semangat antipenjajah', visual: 'Akhbar "SEMANGAT ASIA" (ilustrasi); dua kad slogan/konsep; anak panah ke kad KMM.', doodle: 'Akhbar, kad, anak panah.', text: 'Slogan "Asia untuk Asia" · Lingkungan Sekemakmuran Asia Timur Raya: kebebasan negara Asia, kemajuan, persaudaraan sejagat · selari dengan perjuangan KMM (Kesatuan Melayu Muda) · akhbar Semangat Asia (Jepun)', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        head(S, 'Semangat <span class="hl">Antipenjajah</span>');
        S.add(akhbar(D, 'SEMANGAT ASIA', { hs: 36, sub: 'akhbar terbitan Jepun' }), { anim: 'pop', x: 60, y: 400, w: 330, at: 0, d: 0.6, rot: -3 });
        S.card('<div class="t-h3" style="font-size:44px">“Asia untuk Asia”</div>', { anim: 'slideR', x: 430, y: 410, w: 590, at: 1, d: 0, pad: '12px 20px' });
        S.card('<div class="t-body" style="font-size:34px"><b>Lingkungan Sekemakmuran Asia Timur Raya</b>: kebebasan negara Asia · persaudaraan sejagat</div>', { anim: 'slideR', x: 430, y: 560, w: 590, at: 1, d: 1.0, pad: '12px 20px' });
        S.arrow(540, 880, 540, 950, { at: 2, d: 0, color: RED });
        S.card('<div class="t-label red">selari dengan perjuangan</div><div class="t-h2" style="font-size:54px">Kesatuan Melayu Muda (KMM)</div>', { color: 'gold', anim: 'stamp', x: 90, y: 960, w: 900, at: 2, d: 0.6 });
      },
    },
    {
      id: 'kmm', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'KMM bekerjasama dengan Jepun, dan berharap Jepun akan memberikan kemerdekaan kepada Tanah Melayu.', pause: 0.25 },
        { text: 'Langkah awal Jepun ialah membebaskan ahli KMM yang dipenjarakan oleh British, dan memberikan ruang kepada kegiatan politik KMM, kerana Jepun memerlukan sokongan rakyat tempatan.', pause: 0.25 },
        'Namun, pada Jun 1942, Jepun **membubarkan KMM**, kerana pemimpinnya menuntut kemerdekaan.',
      ],
      board: { name: 'KMM bekerjasama, kemudian dibubarkan', visual: 'Garis masa: KMM + Jepun (harap merdeka) ➜ ahli dibebaskan dari penjara British ➜ Jun 1942 cop "DIBUBARKAN".', doodle: 'Penjara terbuka, tangan berjabat, cop.', text: 'KMM bekerjasama dengan Jepun (harap merdeka) · ahli KMM dibebaskan dari penjara British · diberi ruang politik · Jun 1942 KMM DIBUBARKAN (menuntut kemerdekaan)', anim: 'Langkah muncul mengikut narasi; cop pada akhir.' },
      draw(S, { D }) {
        head(S, '<span class="hl">KMM</span> &amp; Jepun');
        rows(S, [
          ['1', 'KMM bekerjasama dengan Jepun, **harap merdeka**', 0.1],
          ['2', 'Ahli KMM **dibebaskan** dari penjara British', 1.1],
          ['3', 'Diberi ruang **kegiatan politik**', 1.55],
        ], { y0: 410, gap: 190, bw: 110, fs: 40 });
        S.stamp('JUN 1942 · DIBUBARKAN!', { x: 60, y: 1010, w: 960, at: 2.45, fs: 70, style: 'text-align:center;white-space:nowrap' });
        S.text('kerana menuntut kemerdekaan', { size: 'label', x: 60, y: 1150, w: 960, align: 'center', at: 2.7 });
      },
    },
    {
      id: 'giyu', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Pemimpin KMM sedar, Jepun tidak akan memberikan kemerdekaan. Maka, perjuangan diteruskan dengan taktik baharu.', pause: 0.25 },
        { text: 'Anggota KMM menyertai pasukan tentera anjuran Jepun, iaitu **Giyu Gun** dan **Giyu Tai**, sambil bergerak secara **bawah tanah** menentang Jepun.', pause: 0.3 },
        'Giyu Gun, atau Pembela Tanah Air, diketuai Ibrahim Haji Yaakob. Giyu Tai, yang menjaga pesisiran pantai dan ketenteraman awam, diketuai Onan Haji Siraj.',
      ],
      board: { name: 'Giyu Gun & Giyu Tai', visual: 'Dua kad: GIYU GUN (Pembela Tanah Air / PETA; Ibrahim Haji Yaakob, Lt Kol) & GIYU TAI (pesisiran pantai & ketenteraman awam; Onan Haji Siraj, Lt Kol); label "gerakan bawah tanah".', doodle: 'Askar, kad, anak panah ke bawah.', text: 'Taktik baharu · KMM sertai Giyu Gun & Giyu Tai + gerakan bawah tanah · GIYU GUN = Pembela Tanah Air (PETA), Ibrahim Haji Yaakob (Lt Kol) · GIYU TAI = pertahanan pesisiran pantai & ketenteraman awam, Onan Haji Siraj (Lt Kol)', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        S.text('Taktik <span class="hl">Baharu</span>', { size: 'h2', x: 70, y: 295, w: 940, at: 0, d: 2.0 });
        S.svg(soldier(D, '#3F5DA8', { helmet: '#172C63' }), { x: 840, y: 290, w: 160, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:36px;text-align:center;color:#F5C928">Sertai pasukan anjuran Jepun + <b>gerakan bawah tanah</b></div>', { color: 'navy', anim: 'slideU', x: 60, y: 420, w: 760, at: 1, d: 0.6, pad: '12px 20px' });
        duo(S, ['GIYU GUN', 'Pembela Tanah Air (PETA)<br>• tentera sukarela<br>• ketua: <b>Ibrahim Haji Yaakob</b> (Lt Kol)', 2],
          ['GIYU TAI', '• pesisiran pantai<br>• ketenteraman awam<br>• ketua: <b>Onan Haji Siraj</b> (Lt Kol)', 2.55], { y: 640, fs: 34 });
      },
    },
    {
      id: 'kris', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Menjelang Jun 1945, Jepun yang semakin tertekan oleh serangan Bersekutu cuba memenangi hati golongan nasionalis Melayu.', pause: 0.25 },
        { text: 'Dengan sokongan Jepun, Dr. Burhanuddin al-Helmi, Ibrahim Haji Yaakob, Onan Haji Siraj dan bekas pemimpin KMM menubuhkan **KRIS**, atau Kesatuan Rakyat Indonesia Semenanjung.', pause: 0.25 },
        'Matlamatnya: mencapai kemerdekaan Tanah Melayu **bersama-sama Indonesia**.',
      ],
      board: { name: 'KRIS (Jun 1945)', visual: 'Kad besar KRIS dengan tarikh Jun 1945; tiga pemimpin; peta mini Tanah Melayu + Indonesia bersatu.', doodle: 'Kad, peta, tangan berjabat.', text: 'Jun 1945 · KRIS (Kesatuan Rakyat Indonesia Semenanjung) · Dr. Burhanuddin al-Helmi, Ibrahim Haji Yaakob, Onan Haji Siraj · matlamat: merdeka bersama Indonesia', anim: 'Kad & nama muncul mengikut narasi.' },
      draw(S) {
        S.card('<div class="t-label red" style="text-align:center">Jun 1945</div><div class="t-title" style="text-align:center;font-size:110px">KRIS</div><div class="t-body" style="text-align:center;font-size:36px">Kesatuan Rakyat Indonesia Semenanjung</div>', { color: 'gold', anim: 'stamp', x: 120, y: 300, w: 840, at: 1, d: 0.4 });
        ['Dr. Burhanuddin al-Helmi', 'Ibrahim Haji Yaakob', 'Onan Haji Siraj'].forEach((n, i) => S.add(`<span class="pill" style="font-size:32px;background:#FFFDF7">${n}</span>`, { anim: 'pop', x: 60 + (i % 2) * 480, y: 640 + Math.floor(i / 2) * 95, w: 480, at: 1, d: 1.6 + i * 0.6 }));
        const at = S.map({ bounds: [[95, -9], [120, 7.5]], w: 600 }, { x: 240, y: 860, w: 600, at: 2, d: 0, dur: 0.8 });
        S.card('<div class="t-h3" style="text-align:center;font-size:40px">Merdeka <span class="hl">bersama Indonesia</span></div>', { anim: 'slideU', x: 160, y: 1240, w: 760, at: 2, d: 1.2, pad: '10px 18px' });
      },
    },
    {
      id: 'pkmm', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Namun, rancangan itu gagal, kerana Jepun **menyerah kalah** pada 15 Ogos 1945, selepas pengeboman Hiroshima dan Nagasaki.', pause: 0.3 },
        'Perjuangan KRIS diteruskan melalui **Parti Kebangsaan Melayu Malaya**, atau PKMM, iaitu parti politik pertama yang ditubuhkan selepas pendudukan Jepun.',
      ],
      board: { name: 'KRIS gagal ➜ PKMM', visual: 'Cop merah "15 OGOS 1945 · JEPUN MENYERAH"; anak panah KRIS ➜ PKMM; kad "parti politik pertama selepas Jepun".', doodle: 'Cop, anak panah, kad.', text: 'KRIS gagal: Jepun menyerah kalah 15 Ogos 1945 (selepas bom Hiroshima & Nagasaki) · diteruskan melalui PKMM – Parti Kebangsaan Melayu Malaya, parti politik pertama selepas pendudukan Jepun', anim: 'Cop; anak panah; kad.' },
      draw(S) {
        S.stamp('15 OGOS 1945 · JEPUN MENYERAH', { x: 40, y: 330, w: 1000, at: 0, d: 1.4, fs: 46, style: 'text-align:center;white-space:nowrap' });
        S.text('Hiroshima &amp; Nagasaki dibom', { size: 'label', x: 60, y: 470, w: 960, align: 'center', at: 0, d: 4.0 });
        S.card('<div class="t-h2" style="text-align:center">KRIS</div>', { anim: 'pop', x: 80, y: 620, w: 320, at: 1, d: 0 });
        S.arrow(420, 700, 600, 700, { at: 1, d: 0.6, color: RED, sw: 12 });
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">PKMM</div>', { color: 'navy', anim: 'pop', x: 620, y: 620, w: 380, at: 1, d: 1.0 });
        S.card('<div class="t-body" style="font-size:38px;text-align:center"><b>Parti Kebangsaan Melayu Malaya</b><br>parti politik <span class="hl">pertama</span> selepas pendudukan Jepun</div>', { color: 'gold', anim: 'slideU', x: 80, y: 860, w: 920, at: 1, d: 3.6 });
      },
    },
    {
      id: 'sarawak', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Bagaimana pula di **Sarawak**? Kegiatan penduduk dikawal melalui persatuan tajaan Jepun. Contohnya, persatuan Cina digabungkan menjadi **Kakeo Kokokai**.', pause: 0.25 },
        { text: 'Kekurangan pegawai Jepun menyebabkan orang Melayu dan Iban diberi jawatan pegawai daerah, yang sebelumnya hanya disandang pegawai British.', pause: 0.25 },
        'Contohnya, Abang Haji Openg di Kuching, Empenit Adam di Simanggang, dan Satem di Lawas. Pengalaman ini menjadikan peribumi Sarawak lebih yakin untuk **berkerajaan sendiri**.',
      ],
      board: { name: 'Kesedaran politik di Sarawak', visual: 'Kad Kakeo Kokokai; jadual pegawai daerah: Abang Haji Openg (Kuching), Empenit Adam (Simanggang), Satem (Lawas); cop "YAKIN BERKERAJAAN SENDIRI".', doodle: 'Jadual, kad, cop.', text: 'Sarawak: persatuan tajaan Jepun · Kakeo Kokokai (persatuan Cina Seberang Laut) · Melayu & Iban jadi pegawai daerah: Abang Haji Openg (Kuching), Empenit Adam (Simanggang), Satem (Lawas) · yakin berkerajaan sendiri', anim: 'Kad & baris muncul mengikut sebutan.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">SARAWAK</span>', { anim: 'pop', x: 70, y: 290, w: 400, at: 0, d: -0.2 });
        S.card('<div class="t-label red">persatuan Cina tajaan Jepun</div><div class="t-h3" style="font-size:46px">KAKEO KOKOKAI</div>', { anim: 'slideR', x: 470, y: 290, w: 550, at: 0, d: 4.6, pad: '12px 20px' });
        S.text('Pegawai Daerah tempatan', { size: 'h3', x: 70, y: 480, w: 940, at: 1, d: 0.6 });
        rows(S, [['KUCHING', '**Abang Haji Openg**', 2.05], ['SIMANGGANG', '**Empenit Adam**', 2.18], ['LAWAS', '**Satem**', 2.3]], { y0: 570, gap: 140, bw: 260, fs: 42 });
        S.stamp('YAKIN BERKERAJAAN SENDIRI', { x: 40, y: 1010, w: 1000, at: 2.7, fs: 52, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'sabah', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Di **Sabah** pula, pendudukan Jepun menyuntik kesedaran berpolitik.', pause: 0.25 },
        { text: 'Selepas pendudukan Jepun, lahirlah **Parti Kebangsaan Melayu Labuan**, oleh Tengku Noordin, Abu Bakar dan Zakaria Gunn, berdasarkan idea Harun Aminurrashid.', pause: 0.25 },
        'Di pantai timur Sabah, **Parti Kebangsaan Melayu Tawau** ditubuhkan, dipengerusikan oleh Orang Kaya-Kaya Abu Bakar.',
      ],
      board: { name: 'Kesedaran politik di Sabah', visual: 'Peta Sabah dengan penanda Labuan & Tawau; dua kad parti.', doodle: 'Peta, penanda, kad.', text: 'Sabah: kesedaran berpolitik · Parti Kebangsaan Melayu Labuan (Tengku Noordin, Abu Bakar, Zakaria Gunn; idea Harun Aminurrashid) · Parti Kebangsaan Melayu Tawau (Orang Kaya-Kaya Abu Bakar)', anim: 'Penanda & kad muncul mengikut sebutan.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">SABAH</span>', { anim: 'pop', x: 70, y: 290, w: 300, at: 0, d: -0.2 });
        const at = S.map({ bounds: [[114.8, 3.8], [119.4, 7.4]], w: 620 }, { x: 400, y: 290, w: 620, at: 0, d: 0, dur: 1.0 });
        S.pin(at, 115.24, 5.28, '<b>Labuan</b>', { at: 1, d: 0.6, color: RED, size: 0.9, fs: 32, left: true });
        S.pin(at, 117.89, 4.25, '<b>Tawau</b>', { at: 2, d: 0.6, color: GOLD, size: 0.9, fs: 32, left: true });
        S.card('<div class="t-label red">Parti Kebangsaan Melayu Labuan</div><div class="t-body" style="font-size:33px;line-height:1.15">Tengku Noordin · Abu Bakar · Zakaria Gunn<br><i>idea Harun Aminurrashid</i></div>', { anim: 'slideL', x: 60, y: 820, w: 960, at: 1, d: 1.2, pad: '12px 20px' });
        S.card('<div class="t-label red">Parti Kebangsaan Melayu Tawau</div><div class="t-body" style="font-size:33px">Pengerusi: Orang Kaya-Kaya Abu Bakar</div>', { color: 'gold', anim: 'slideR', x: 60, y: 1060, w: 960, at: 2, d: 0.6, pad: '12px 20px' });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, pendudukan Jepun **menyemarakkan nasionalisme**: melalui KMM, Giyu Gun, KRIS dan PKMM di Tanah Melayu, serta kesedaran politik di Sarawak dan Sabah.', pause: 0.35 },
        'Seterusnya, kita kaji **keadaan negara kita selepas kekalahan Jepun**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.9.', doodle: 'Pil, maskot.', text: 'KMM · Giyu Gun · Giyu Tai · KRIS · PKMM · Sarawak & Sabah · Seterusnya: 3.9 Selepas Kekalahan Jepun', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['KMM', 0.3], ['Giyu Gun', 0.4], ['Giyu Tai', 0.45], ['KRIS', 0.5], ['PKMM', 0.6], ['Sarawak &amp; Sabah', 0.85]],
          ['NASIONALISME SEMAKIN MARAK', 0.95], ['3.9 Selepas Kekalahan Jepun', 1]);
      },
    },
    END,
  ],
};
