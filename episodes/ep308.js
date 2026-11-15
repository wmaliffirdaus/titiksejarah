// BAB 3 · EPISOD 08 – Subtopik 3.7: Perjuangan Rakyat Menentang Pendudukan Jepun (≈ 6 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 74–79 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, titleCard, rows, duo, kesimpulan, END, soldier, radio, train, plane } from './bab3.js';

export default {
  id: '308',
  file: '08_Bab3_Subtopik_3.7',
  title: 'Perjuangan Rakyat Menentang Pendudukan Jepun',
  header: { chip: 'BAB 3 • 3.7', sub: 'Perjuangan Menentang Jepun' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.7)',
  ...CH1,
  music: { key: 60, bpm: 102, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Askar Melayu, gerila di hutan, seorang jururawat, malah suku kaum di pedalaman Borneo,', pause: 0.15 },
        'semuanya bangkit **menentang Jepun**!',
      ],
      board: { name: 'Hook – semua bangkit menentang', visual: 'Frame pertama lengkap: tajuk "SEMUA BANGKIT!", deretan watak (askar Melayu, gerila, jururawat, pahlawan Borneo); cop "MENENTANG JEPUN!" pada ayat kedua.', doodle: 'Watak askar, gerila, jururawat, pahlawan Borneo (ilustrasi).', text: 'SEMUA BANGKIT! · MENENTANG JEPUN', anim: 'Elemen utama pada 0:00; cop pada ayat kedua.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('SEMUA<br><span class="red">BANGKIT!</span>', { fs: 130 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(soldier(D, '#3F5DA8', { helmet: '#172C63' }), { ...NOW, x: 40, y: 640, w: 230 });
        S.add(D.person({ hat: 'hair', shirt: '#3A8A4A', pants: NAVY, prop: 'spear', pose: 'hold' }), { ...NOW, x: 290, y: 650, w: 220 });
        S.add(D.person({ tudung: '#FFFFFF', shirt: '#FFFFFF', dress: true, pose: 'present' }), { ...NOW, x: 530, y: 650, w: 220 });
        S.add(D.person({ hat: 'tanjak', hatColor: RED, shirt: GOLD, pants: NAVY, prop: 'spear', pose: 'up' }), { ...NOW, x: 770, y: 640, w: 230 });
        S.stamp('MENENTANG JEPUN!', { x: 140, y: 1100, w: 800, at: 1, d: 0.2, fs: 80, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.7: **Perjuangan Rakyat Menentang Pendudukan Jepun**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.7", tajuk, maskot.', doodle: 'Pil, garis bawah, maskot.', text: 'SUBTOPIK 3.7 · Perjuangan Rakyat Menentang Pendudukan Jepun', anim: 'Pil pop; tajuk ditulis; maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.7', 'Perjuangan Rakyat<br><span class="red">Menentang</span><br>Pendudukan Jepun', { fs: 72, uy: 720, my: 790 }); },
    },
    {
      id: 'askar-melayu', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Pertama, **Rejimen Askar Melayu**. Dua batalionnya bertempur mempertahankan tanah air.', pause: 0.25 },
        'Batalion Kedua, bersama tentera British, menentang pendaratan Jepun di Kelantan.',
      ],
      board: { name: 'Rejimen Askar Melayu', visual: 'Dua askar Melayu; kad "2 BATALION"; kad Batalion Kedua ➜ Kelantan.', doodle: 'Askar Melayu, perisai.', text: 'REJIMEN ASKAR MELAYU · 2 batalion pertahankan tanah air · Batalion Kedua + British tentang pendaratan Jepun di Kelantan', anim: 'Askar dilukis; kad muncul mengikut narasi.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">1 · ASKAR MELAYU</span>', { anim: 'pop', x: 70, y: 290, w: 560, at: 0, d: -0.2 });
        S.svg(soldier(D, '#3F5DA8', { helmet: '#172C63' }), { x: 70, y: 400, w: 240, at: 0, d: 0.4 });
        S.svg(soldier(D, '#3F5DA8', { helmet: '#172C63', pose: 'point' }), { x: 280, y: 420, w: 220, at: 0, d: 0.7, sfx: false });
        S.card('<div class="t-h2" style="text-align:center">2 BATALION</div><div class="t-body" style="text-align:center;font-size:36px">pertahankan tanah air</div>', { color: 'gold', anim: 'pop', x: 540, y: 450, w: 470, at: 0, d: 2.4 });
        S.card('<div class="t-label red">Batalion Kedua + British</div><div class="t-h3" style="font-size:46px">Tentang pendaratan Jepun di <span class="hl">Kelantan</span></div>', { anim: 'slideU', x: 80, y: 900, w: 920, at: 1, d: 0.3 });
      },
    },
    {
      id: 'wira', bg: 'lined', transition: 'flip',
      lines: [
        { text: '**Leftenan Adnan Saidi** menunjukkan keberanian luar biasa dalam Pertempuran Bukit Candu, di Singapura.', pause: 0.25 },
        { text: 'Leftenan Jeneral A. E. Percival sendiri memuji semangat juang askar Melayu.', pause: 0.25 },
        { text: '**Leftenan Ibrahim Alla Ditta** menyelamatkan hampir dua ribu tentera Bersekutu, dan dianugerahi pingat Military Cross.', pause: 0.25 },
        '**Koperal Yaakob Bidin** pula menerima pingat Military Medal di Pasir Panjang.',
      ],
      board: { name: 'Wira Rejimen Askar Melayu', visual: 'Tiga kad wira dengan pingat: Lt Adnan Saidi (Bukit Candu), Lt Ibrahim Alla Ditta (~2000 tentera, Military Cross), Kpl Yaakob Bidin (Military Medal, Pasir Panjang); petikan Percival.', doodle: 'Pingat, bintang, kad.', text: 'Lt Adnan Saidi – Pertempuran Bukit Candu · Lt Jen A.E. Percival puji askar Melayu · Lt Ibrahim Alla Ditta – selamatkan ~2000 tentera Bersekutu (Military Cross) · Kpl Yaakob Bidin – Military Medal (Pasir Panjang)', anim: 'Kad wira meluncur masuk mengikut sebutan.' },
      draw(S, { D }) {
        head(S, 'Wira <span class="hl">Askar Melayu</span>');
        rows(S, [
          ['★', '**Lt Adnan Saidi** · Pertempuran Bukit Candu, Singapura', 0.1, RED],
          ['”', 'Lt Jen <b>A.E. Percival</b> puji semangat juang askar Melayu', 1, NAVY],
          ['★', '**Lt Ibrahim Alla Ditta** · selamatkan ~2,000 tentera · Military Cross', 2, RED],
          ['★', '**Kpl Yaakob Bidin** · Military Medal · Pasir Panjang', 3, NAVY],
        ], { y0: 410, gap: 220, bw: 110, fs: 38 });
      },
    },
    {
      id: 'mpaja', bg: 'grid', transition: 'zoom',
      lines: [
        { text: 'Kedua, **MPAJA**, atau Malayan People\'s Anti-Japanese Army. Layanan kejam Jepun menyebabkan sebahagian orang Cina berlindung di bawah Parti Komunis Malaya, atau PKM.', say: 'Kedua, MPAJA, atau Malayan Peoples Anti-Japanese Army. Layanan kejam Jepun menyebabkan sebahagian orang Cina berlindung di bawah Parti Komunis Malaya, atau PKM.', pause: 0.25 },
        { text: 'Seramai 165 anggota PKM dilatih British di Sekolah Latihan Khas Singapura, untuk sabotaj dan perang gerila. Mereka menjadi asas kepada lapan rejimen MPAJA,', pause: 0.15 },
        'iaitu **gerakan anti-Jepun terbesar**.',
      ],
      board: { name: 'MPAJA', visual: 'Kad MPAJA; 165 anggota dilatih British (Sekolah Latihan Khas Singapura) ➜ 8 rejimen; cop "GERAKAN ANTI-JEPUN TERBESAR".', doodle: 'Gerila hutan, pokok, kad.', text: 'MPAJA (Malayan People\'s Anti-Japanese Army) · Cina berlindung di bawah PKM · 165 anggota PKM dilatih British di Sekolah Latihan Khas Singapura (sabotaj & gerila) ➜ 8 rejimen · gerakan anti-Jepun TERBESAR', anim: 'Kad & angka muncul; cop pada akhir.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">2 · MPAJA</span>', { anim: 'pop', x: 70, y: 290, w: 400, at: 0, d: -0.2 });
        S.card('<div class="t-body" style="font-size:34px">Malayan People\'s Anti-Japanese Army · orang Cina berlindung di bawah <b>PKM</b></div>', { anim: 'slideR', x: 60, y: 390, w: 960, at: 0, d: 2.2, pad: '12px 20px' });
        S.card('<div class="t-big" style="font-size:90px;text-align:center;color:#C93436">165</div><div class="t-body" style="font-size:32px;text-align:center">anggota PKM dilatih British<br>(Sekolah Latihan Khas Singapura)</div>', { anim: 'pop', x: 60, y: 580, w: 470, at: 1, d: 0.2, rot: -1 });
        S.arrow(540, 720, 600, 720, { at: 1, d: 3.6, color: RED });
        S.card('<div class="t-big" style="font-size:90px;text-align:center;color:#172C63">8</div><div class="t-body" style="font-size:32px;text-align:center">rejimen MPAJA</div>', { anim: 'pop', x: 610, y: 580, w: 410, at: 1, d: 4.2, rot: 1 });
        S.stamp('GERAKAN ANTI-JEPUN TERBESAR', { x: 40, y: 960, w: 1000, at: 2, d: 0, fs: 46, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'mpaja2', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Jepun pula menggunakan polis dan tentera Melayu untuk menentang MPAJA, lalu menimbulkan **ketegangan kaum**.', pause: 0.25 },
        { text: 'Pada Disember 1943, MPAJA bekerjasama dengan **Force 136**, dan menerima senjata, ubat, wang dan latihan daripada British.', pause: 0.25 },
        'Gerila Kuomintang pula menubuhkan **OCAJA**, atau Tentera Bintang Satu, di Hulu Perak dan Kelantan, dipimpin oleh **Lim Bo Seng**.',
      ],
      board: { name: 'MPAJA, Force 136 & OCAJA', visual: 'Kad merah "ketegangan kaum"; kad MPAJA–Force 136 (Dis 1943) dengan ikon senjata, ubat, wang, latihan; kad OCAJA (Tentera Bintang Satu, Lim Bo Seng).', doodle: 'Kad, ikon, bintang.', text: 'Jepun guna polis/tentera Melayu tentang MPAJA ➜ ketegangan kaum · Dis 1943 MPAJA + Force 136: senjata, ubat, wang, latihan · OCAJA (Kuomintang, Tentera Bintang Satu) di Hulu Perak & Kelantan · Lim Bo Seng', anim: 'Kad muncul mengikut narasi.' },
      draw(S, { D }) {
        S.card('<div class="t-body" style="font-size:36px;color:#FFFDF7">Jepun guna polis &amp; tentera Melayu ➜ <b style="color:#F5C928">ketegangan kaum</b></div>', { color: 'red', anim: 'slideL', x: 60, y: 300, w: 960, at: 0, d: 0.4, pad: '14px 22px' });
        S.card('<div class="t-label red">Dis 1943</div><div class="t-h3" style="font-size:46px">MPAJA + Force 136</div><div class="t-body" style="font-size:34px">senjata · ubat · wang · latihan</div>', { anim: 'slideR', x: 60, y: 500, w: 960, at: 1, d: 0.2, rot: 1 });
        S.add(D.star(), { anim: 'pop', x: 80, y: 820, w: 140, at: 2, d: 0.6 });
        S.card('<div class="t-h3" style="font-size:46px">OCAJA · <span class="red">Tentera Bintang Satu</span></div><div class="t-body" style="font-size:34px">Kuomintang · Hulu Perak &amp; Kelantan · <b>Lim Bo Seng</b></div>', { color: 'gold', anim: 'slideU', x: 240, y: 800, w: 780, at: 2, d: 0.3 });
      },
    },
    {
      id: 'force136', bg: 'dots', transition: 'flip',
      lines: [
        { text: 'Ketiga, **Force 136**. Pada tahun 1943, British menubuhkan South East Asia Command, atau SEAC, di Colombo, serta unit khas Force 136.', pause: 0.25 },
        { text: 'Anggotanya dilatih di India dan Sri Lanka, lalu dihantar ke Tanah Melayu dengan **kapal selam** atau **payung terjun**.', pause: 0.25 },
        'Antara anggota terawal ialah Mejar Tengku Mahmood Mahyiddeen, Leftenan Tunku Yusuf Tunku Yaakub, Kapten Ibrahim Ismail, dan Leftenan Tengku Osman Tengku Mohd Jiwa.',
      ],
      board: { name: 'Force 136', visual: 'Kad SEAC Colombo 1943; ikon kapal selam & payung terjun; senarai 4 anggota terawal.', doodle: 'Payung terjun, kapal selam, kad.', text: 'FORCE 136 (1943) · SEAC di Colombo · latihan di India & Sri Lanka · dihantar dengan kapal selam / payung terjun · anggota terawal: Mej Tengku Mahmood Mahyiddeen, Lt Tunku Yusuf Tunku Yaakub, Kapt Ibrahim Ismail, Lt Tengku Osman Tengku Mohd Jiwa', anim: 'Ikon pop; nama muncul satu demi satu.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">3 · FORCE 136</span>', { anim: 'pop', x: 70, y: 290, w: 460, at: 0, d: -0.2 });
        S.card('<div class="t-label red">1943 · Colombo</div><div class="t-h3" style="font-size:42px">SEAC + unit khas Force 136</div>', { anim: 'slideR', x: 540, y: 290, w: 480, at: 0, d: 2.0, pad: '12px 20px' });
        S.add('<svg viewBox="0 0 200 220"><path d="M20 90 Q100 -20 180 90 Z" fill="#F5C928" stroke="#172C63" stroke-width="6"/><path d="M20 90 L100 180 M180 90 L100 180 M100 40 L100 180" stroke="#172C63" stroke-width="4"/><rect x="86" y="176" width="28" height="40" rx="8" fill="#3F5DA8" stroke="#172C63" stroke-width="4"/></svg>', { anim: 'slideD', x: 90, y: 480, w: 190, at: 1, d: 2.6 });
        S.add('<svg viewBox="0 0 300 120"><path d="M20 70 Q20 40 70 40 L240 40 Q290 40 290 70 Q290 100 240 100 L70 100 Q20 100 20 70 Z" fill="#172C63" stroke="#172C63" stroke-width="4"/><rect x="120" y="10" width="50" height="34" rx="6" fill="#172C63"/><line x1="146" y1="10" x2="146" y2="-10" stroke="#172C63" stroke-width="5"/></svg>', { anim: 'slideR', x: 300, y: 540, w: 300, at: 1, d: 2.0 });
        S.text('India &amp; Sri Lanka ➜ Tanah Melayu', { size: 'label', x: 620, y: 560, w: 400, at: 1, d: 0.4 });
        rows(S, [['1', 'Mej <b>Tengku Mahmood Mahyiddeen</b>', 2.15], ['2', 'Lt <b>Tunku Yusuf Tunku Yaakub</b>', 2.4], ['3', 'Kapt <b>Ibrahim Ismail</b>', 2.6], ['4', 'Lt <b>Tengku Osman Tengku Mohd Jiwa</b>', 2.8]], { y0: 750, gap: 135, bw: 90, fs: 36 });
      },
    },
    {
      id: 'gerila-melayu', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Force 136 membantu menubuhkan pasukan gerila Melayu.', pause: 0.2 },
        { text: '**Askar Melayu Setia** di Hulu Perak, dengan bantuan Pegawai Daerah Gerik, Kapten Mohd Salleh Haji Sulaiman, bermarkas di Istana Kuning, Bukit Chandan, Kuala Kangsar.', pause: 0.25 },
        { text: '**Wataniah Pahang** di Raub dipimpin oleh Yeop Mahidin Mohamed Shariff, dengan Sultan Abu Bakar sebagai Pemerintah Kehormat. Turut menyertainya ialah Kapten Abdul Razak Hussein.', pause: 0.25 },
        '**Gerila Melayu Kedah** pula dibentuk dengan bantuan Pegawai Daerah Kedah dan Tunku Abdul Rahman.',
      ],
      board: { name: 'Pasukan gerila Melayu', visual: 'Tiga kad pasukan dengan lokasi: Askar Melayu Setia (Hulu Perak), Wataniah Pahang (Raub), Gerila Melayu Kedah.', doodle: 'Peta mini, kad.', text: 'Askar Melayu Setia (Hulu Perak; Kapt Mohd Salleh Hj Sulaiman; markas Istana Kuning, Bukit Chandan, Kuala Kangsar) · Wataniah Pahang (Raub; Yeop Mahidin; Sultan Abu Bakar Pemerintah Kehormat; Kapt Abdul Razak Hussein) · Gerila Melayu Kedah (Pegawai Daerah Kedah & Tunku Abdul Rahman)', anim: 'Kad muncul mengikut sebutan.' },
      draw(S) {
        head(S, 'Gerila <span class="hl">Melayu</span>');
        rows(S, [
          ['HULU PERAK', '**Askar Melayu Setia** · Kapt Mohd Salleh Hj Sulaiman · markas Istana Kuning, Bukit Chandan', 1],
          ['RAUB', '**Wataniah Pahang** · Yeop Mahidin · Sultan Abu Bakar (Pemerintah Kehormat) · Kapt Abdul Razak Hussein', 2],
          ['KEDAH', '**Gerila Melayu Kedah** · Pegawai Daerah Kedah &amp; Tunku Abdul Rahman', 3],
        ], { y0: 410, gap: 300, bw: 220, fs: 36 });
      },
    },
    {
      id: 'harimau', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Tengku Mahmood Mahyiddeen digelar **Harimau Malaya**, kerana siaran radionya, Suara Harimau Malaya, dari India.', pause: 0.25 },
        'Gerila Melayu mengumpul maklumat, melakukan sabotaj dan propaganda, serta membuat persiapan **Operasi Zipper**, iaitu rancangan British untuk menawan semula Tanah Melayu pada tahun 1945.',
      ],
      board: { name: 'Harimau Malaya & Operasi Zipper', visual: 'Radio lama dengan gelombang; kad "HARIMAU MALAYA"; empat aktiviti gerila; kad Operasi Zipper 1945.', doodle: 'Radio, gelombang, kad.', text: 'Tengku Mahmood Mahyiddeen = "Harimau Malaya" (siaran Suara Harimau Malaya dari India) · aktiviti: kumpul maklumat, sabotaj, propaganda, persiapan OPERASI ZIPPER (1945)', anim: 'Radio pop; aktiviti pop; kad Zipper.' },
      draw(S, { D }) {
        S.add(radio(D), { anim: 'pop', x: 70, y: 300, w: 300, at: 0, d: 0.3 });
        S.card('<div class="t-label red">Tengku Mahmood Mahyiddeen</div><div class="t-h2" style="font-size:60px">HARIMAU MALAYA</div><div class="t-body" style="font-size:32px">siaran Suara Harimau Malaya dari India</div>', { color: 'gold', anim: 'slideR', x: 400, y: 300, w: 620, at: 0, d: 1.6 });
        ['Kumpul maklumat', 'Sabotaj', 'Propaganda'].forEach((t, i) => S.add(`<span class="pill" style="font-size:34px">${t}</span>`, { anim: 'pop', x: 60 + i * 330, y: 690, w: 330, at: 1, d: 0.6 + i * 0.6 }));
        S.card('<div class="t-label" style="color:#F5C928">Persiapan · 1945</div><div class="t-h2" style="color:#FFFDF7;font-size:58px">OPERASI ZIPPER</div><div class="t-body" style="font-size:34px;color:#FFFDF7">rancangan British tawan semula Tanah Melayu</div>', { color: 'navy', anim: 'slideU', x: 80, y: 830, w: 920, at: 1, d: 2.8 });
      },
    },
    {
      id: 'individu', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Keempat, **penentangan individu**. **Gurchan Singh**, digelar Lion of Malaya, menyebarkan risalah, menyamar sebagai wartawan di sidang akhbar Jepun, dan mendalangi sabotaj landasan kereta api. Beliau ditangkap, tetapi berjaya melarikan diri ke Burma.', pause: 0.3 },
        '**Sybil Kathigasu**, seorang jururawat di Ipoh, bersama suaminya, Dr. Abdon Clement Kathigasu, membantu gerila dengan ubat dan rawatan, serta menyembunyikan radio. Beliau diseksa Kempeitai, dan dianugerahi Pingat King George. Memoirnya berjudul No Dram of Mercy.',
      ],
      board: { name: 'Penentangan individu', visual: 'Dua kad profil: Gurchan Singh "Lion of Malaya" (risalah, menyamar wartawan, sabotaj kereta api, lari ke Burma) & Sybil Kathigasu (jururawat Ipoh, ubat & rawatan, radio, diseksa Kempeitai, Pingat King George, memoir No Dram of Mercy).', doodle: 'Watak, keretapi kecil, radio, pingat.', text: 'Gurchan Singh – "Lion of Malaya": risalah & propaganda; menyamar wartawan; sabotaj landasan kereta api; ditangkap, lari ke Burma · Sybil Kathigasu – jururawat Ipoh (+ Dr Abdon Clement Kathigasu): ubat, rawatan, sembunyi radio; diseksa Kempeitai; Pingat King George; memoir "No Dram of Mercy"', anim: 'Kad profil meluncur mengikut ayat.' },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">4 · INDIVIDU</span>', { anim: 'pop', x: 70, y: 290, w: 460, at: 0, d: -0.2 });
        S.card('<div class="t-label red">“Lion of Malaya”</div><div class="t-h3" style="font-size:46px">GURCHAN SINGH</div><div class="t-body" style="font-size:31px;line-height:1.15">• risalah &amp; propaganda<br>• menyamar wartawan<br>• sabotaj landasan kereta api<br>• ditangkap ➜ lari ke Burma</div>', { anim: 'slideL', x: 50, y: 390, w: 480, at: 0, d: 0.8, rot: -1 });
        S.add(train(D), { anim: 'slideR', x: 120, y: 900, w: 300, at: 0, d: 9.0 });
        S.card('<div class="t-label red">Jururawat · Ipoh</div><div class="t-h3" style="font-size:46px">SYBIL KATHIGASU</div><div class="t-body" style="font-size:31px;line-height:1.15">• ubat &amp; rawatan gerila<br>• sembunyi radio<br>• diseksa Kempeitai<br>• Pingat King George<br>• memoir <i>No Dram of Mercy</i></div>', { anim: 'slideR', x: 550, y: 390, w: 480, at: 1, d: 0, rot: 1 });
        S.add(radio(D), { anim: 'pop', x: 690, y: 980, w: 200, at: 1, d: 6.0 });
      },
    },
    {
      id: 'semut', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Di Sarawak, berlangsung **Operasi Semut**, iaitu operasi peninjauan Unit Khas Z Australia melalui SRD, yang mendarat pada Mei 1945.', pause: 0.25 },
        'Gerila Semut terdiri daripada orang Kayan, Kenyah, Kelabit, Murut dan Iban.',
      ],
      board: { name: 'Operasi Semut (Sarawak)', visual: 'Peta Sarawak; payung terjun; kad Operasi Semut (Unit Khas Z Australia, SRD, Mei 1945); lima pil suku kaum.', doodle: 'Peta, payung terjun, pil.', text: 'OPERASI SEMUT · Unit Khas Z Australia (SRD) · mendarat Mei 1945 · gerila: Kayan, Kenyah, Kelabit, Murut, Iban', anim: 'Kad pop; pil suku kaum pop mengikut sebutan.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">SARAWAK</span>', { anim: 'pop', x: 70, y: 290, w: 400, at: 0, d: -0.2 });
        const at = S.map({ bounds: [[109.4, 0.6], [119.6, 7.4]], w: 940 }, { x: 70, y: 380, w: 940, at: 0, d: 0, dur: 1.0 });
        S.pin(at, 115.4, 3.6, '<b>Operasi Semut</b>', { at: 0, d: 2.0, color: RED, size: 1, fs: 34 });
        S.card('<div class="t-label red">Mei 1945</div><div class="t-body" style="font-size:36px">Unit Khas Z Australia (SRD)</div>', { anim: 'slideU', x: 60, y: 880, w: 520, at: 0, d: 4.0, pad: '12px 20px' });
        ['Kayan', 'Kenyah', 'Kelabit', 'Murut', 'Iban'].forEach((n, i) => S.add(`<span class="pill" style="font-size:34px;background:${i % 2 ? '#FFFDF7' : '#F5C928'}">${n}</span>`, { anim: 'pop', x: 60 + (i % 3) * 320, y: 1060 + Math.floor(i / 3) * 90, w: 320, at: 1, d: 1.6 + i * 0.5 }));
      },
    },
    {
      id: 'double-tenth', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Di Sabah, **Albert Kwok** memimpin gerila Kinabalu dalam **Pemberontakan Jesselton**, atau Double Tenth, pada Oktober 1943.', pause: 0.25 },
        { text: 'Mereka menyerang pejabat pentadbiran dan balai polis di Jesselton, Kota Belud, Menggatal dan Tuaran.', pause: 0.25 },
        { text: 'Serangan balas Jepun sangat kejam. Albert Kwok menyerah diri pada Disember 1943, dan dihukum bunuh bersama 175 orang di Petagas.', pause: 0.25 },
        'Turut berjuang ialah pasukan gerila pimpinan **Datu Mustapha Datu Harun**.',
      ],
      board: { name: 'Pemberontakan Jesselton / Double Tenth (Sabah)', visual: 'Peta Sabah dengan penanda Jesselton, Kota Belud, Menggatal, Tuaran; kad Albert Kwok (Okt 1943); kad Petagas (175 orang); kad Datu Mustapha.', doodle: 'Peta, penanda, kad.', text: 'Pemberontakan Jesselton (Double Tenth) · Albert Kwok (gerila Kinabalu) · Okt 1943 · serang pejabat & balai polis: Jesselton, Kota Belud, Menggatal, Tuaran · Dis 1943 Albert Kwok menyerah ➜ dihukum bunuh bersama 175 orang di Petagas · gerila Datu Mustapha Datu Harun', anim: 'Penanda pop mengikut sebutan; kad muncul.' },
      draw(S) {
        S.add('<span class="pill" style="font-size:38px;background:#C93436;color:#FFFDF7">SABAH</span>', { anim: 'pop', x: 70, y: 290, w: 300, at: 0, d: -0.2 });
        S.card('<div class="t-label red">Okt 1943 · Double Tenth</div><div class="t-h3" style="font-size:44px">ALBERT KWOK</div><div class="t-body" style="font-size:30px">gerila Kinabalu</div>', { anim: 'slideR', x: 400, y: 290, w: 620, at: 0, d: 0.6, pad: '12px 20px' });
        const at = S.map({ bounds: [[115.75, 5.75], [116.75, 6.55]], w: 600 }, { x: 60, y: 500, w: 600, at: 0, d: 2.0, dur: 1.0 });
        [['Jesselton', 116.07, 5.98, 0.3], ['Kota Belud', 116.43, 6.35, 0.5], ['Menggatal', 116.13, 6.03, 0.65], ['Tuaran', 116.23, 6.18, 0.8]].forEach(([n, lo, la, f], i) => S.pin(at, lo, la, `<b>${n}</b>`, { at: 1 + f, color: RED, size: 0.8, fs: 26, left: i % 2 === 0 }));
        S.card('<div class="t-label red">Dis 1943 · Petagas</div><div class="t-body" style="font-size:32px">Albert Kwok &amp; <b>175 orang</b> dihukum bunuh</div>', { color: 'gold', anim: 'slideR', x: 680, y: 560, w: 340, at: 2, d: 0.6, pad: '12px 18px' });
        S.card('<div class="t-label red">Gerila</div><div class="t-h3" style="font-size:42px">Datu Mustapha Datu Harun</div>', { anim: 'slideU', x: 160, y: 1110, w: 760, at: 3, d: 0.2, pad: '12px 20px' });
      },
    },
    {
      id: 'iktibar', bg: 'grid', transition: 'paper',
      lines: ['Iktibarnya, penentangan terhadap Jepun melibatkan **semua kaum**, melewati batas bangsa dan ideologi, demi menentang pencerobohan asing.'],
      board: { name: 'Iktibar', visual: 'Tangan pelbagai warna berpegangan; kad IKTIBAR.', doodle: 'Tangan bersatu, hati.', text: 'IKTIBAR · semua kaum bersatu · melewati batas bangsa & ideologi · tentang pencerobohan asing', anim: 'Kad pop; hati pulse.' },
      draw(S, { D }) {
        S.text('<span class="hl">IKTIBAR</span>', { size: 'title', x: 70, y: 320, w: 700, at: 0, d: -0.2 });
        S.add(D.heart(), { anim: 'pop', x: 800, y: 300, w: 180, at: 0, d: 0.5, pulse: [0.8] });
        [['Melayu', '#3F5DA8'], ['Cina', '#C93436'], ['India', '#F5C928'], ['Peribumi Borneo', '#3A8A4A']].forEach(([n, c], i) => S.add(`<span class="pill" style="font-size:36px;background:${c};color:${c === '#F5C928' ? '#172C63' : '#FFFDF7'}">${n}</span>`, { anim: 'pop', x: 60 + (i % 2) * 480, y: 530 + Math.floor(i / 2) * 110, w: 480, at: 0, d: 1.2 + i * 0.4 }));
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Bersatu melewati batas bangsa &amp; ideologi</div>', { color: 'navy', anim: 'stamp', x: 80, y: 820, w: 920, at: 0.6 });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, rakyat pelbagai kaum menentang Jepun melalui Rejimen Askar Melayu, MPAJA, Force 136, gerila Melayu, gerila di Sarawak dan Sabah, serta penentangan individu.', pause: 0.3 },
        { text: 'Pendudukan Jepun juga menyemarakkan semangat nasionalisme.', pause: 0.35 },
        'Seterusnya, kita kaji **perkembangan gerakan nasionalisme tempatan** semasa pendudukan Jepun!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy; maskot; kad seterusnya 3.8.', doodle: 'Pil, maskot.', text: 'Askar Melayu · MPAJA · Force 136 · Gerila Melayu · Semut & Double Tenth · Individu · Seterusnya: 3.8 Nasionalisme Tempatan', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Askar Melayu', 0.25], ['MPAJA', 0.35], ['Force 136', 0.45], ['Gerila Melayu', 0.55], ['Semut', 0.7], ['Individu', 0.9]],
          ['SEMUA KAUM MENENTANG JEPUN', 1], ['3.8 Nasionalisme Tempatan', 2]);
      },
    },
    END,
  ],
};
