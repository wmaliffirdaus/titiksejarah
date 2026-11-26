// BAB 5 · EPISOD 02 – Subtopik 5.1: Latar Belakang Penubuhan Persekutuan Tanah Melayu 1948 (≈ 3 min, + kuiz mini)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 126–131.
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, NOW, officer, numCard, banner, quizScene, END } from './b4lib.js';

export default {
  id: 'b5_02',
  file: '02_Bab5_Subtopik_5.1',
  title: 'Latar Belakang Penubuhan Persekutuan Tanah Melayu 1948',
  header: { chip: 'BAB 5 • 5.1', sub: 'Latar Belakang' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5 (5.1)',
  music: { key: 62, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Satu perjanjian dirangka… tetapi **tiada wakil bukan Melayu**, dan golongan radikal **diketepikan**!', pause: 0.4 },
        'Apa yang berlaku seterusnya?',
      ],
      board: {
        name: 'Hook – perjanjian yang dipertikai',
        visual: 'Frame pertama lengkap: meja rundingan dengan dokumen "PERJANJIAN"; dua kumpulan di luar (radikal & bukan Melayu) dengan tanda soal; cop "DIKETEPIKAN?".',
        doodle: 'Meja, dokumen, watak, tanda soal, cop.',
        text: 'Perjanjian dirangka · tiada wakil bukan Melayu · radikal diketepikan',
        anim: 'Semua kelihatan pada 0:00; cop dihentak pada "diketepikan".',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.text('Siapa <span class="red">diketepikan?</span>', { size: 'title', x: 40, y: 290, w: 1000, align: 'center', ...NOW, style: 'font-size:88px' });
        S.add(D.treaty('1946'), { ...NOW, x: 400, y: 420, w: 280 });
        S.svg(D.rakyat({ hat: 'songkok', pose: 'point' }), { ...NOW, x: 70, y: 760, w: 170 });
        S.svg(D.pedagang({ mood: 'sad' }), { ...NOW, x: 830, y: 760, w: 170 });
        S.text('Radikal', { size: 'label', x: 40, y: 1050, w: 240, align: 'center', ...NOW });
        S.text('Bukan Melayu', { size: 'label', x: 790, y: 1050, w: 250, align: 'center', ...NOW });
        S.add(D.question(), { ...NOW, x: 495, y: 790, w: 90 });
        S.stamp('DIKETEPIKAN!', { x: 280, y: 1110, w: 520, at: 0, d: 1.6, fs: 72, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 5.1: **Latar belakang** penubuhan Persekutuan Tanah Melayu 1948.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 5.1"; tajuk; dokumen perjanjian.', doodle: 'Dokumen.', text: 'SUBTOPIK 5.1 · Latar Belakang Penubuhan PTM 1948', anim: 'Tajuk ditulis; dokumen dilukis.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 5.1</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Latar <span class="red">Belakang</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.svg(D.scroll('PTM 1948', { ts: 40 }), { x: 390, y: 560, w: 300, at: 0, d: 0.6 });
      },
    },
    {
      id: 'jk', bg: 'grid', transition: 'paper',
      lines: [
        'Pada **25 Julai 1946**, **Jawatankuasa Kerja** ditubuhkan untuk merangka Perjanjian Persekutuan.',
        'Anggotanya: wakil **Raja-raja Melayu**, wakil **UMNO** seperti Dato\' Onn Jaafar, dan **pegawai kanan British**.',
      ],
      board: { name: 'Jawatankuasa Kerja', visual: 'Pil tarikh; tiga lajur anggota bergambar (Raja-raja Melayu, UMNO, British – ILUSTRASI) dengan tag.', doodle: 'Sultan, watak bersongkok, pegawai British.', text: '25 Julai 1946 · Jawatankuasa Kerja · wakil Raja-raja Melayu · wakil UMNO (Dato\' Onn Jaafar) · pegawai kanan British', anim: 'Pil pop; lajur pop mengikut sebutan.' },
      draw(S, { D }) {
        S.text('Jawatankuasa <span class="hl">Kerja</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add('<div style="text-align:center"><span class="pill">25 JULAI 1946</span></div>', { anim: 'pop', x: 40, y: 400, w: 1000, at: 0, d: 0.05 });
        S.illus({ x: 870, y: 300, at: 1, d: 0 });
        [[D.sultan(), 'Raja-raja Melayu', 0.2], [D.rakyat({ hat: 'songkok', pose: 'present' }), 'UMNO', 0.45], [officer(D), 'Pegawai British', 0.82]].forEach(([sv, l, f], i) => {
          S.svg(sv, { x: 100 + i * 320, y: 530, w: 200, at: 1 + f, dur: 0.6, sfx: 'pop' });
          S.card(`<div class="t-h3" style="font-size:38px;text-align:center">${l}</div>`, { anim: 'pop', x: 60 + i * 320, y: 850, w: 300, at: 1 + f, d: 0.15, notape: true, pad: '10px 8px' });
        });
        S.tag("DATO' ONN JAAFAR", 'wakil UMNO', { x: 330, y: 970, w: 420, at: 1, d: 1.6 });
      },
    },
    {
      id: 'cadangan', transition: 'flip',
      lines: [
        'Cadangannya: satukan negeri Melayu dan dua Negeri-negeri Selat, pulihkan **kedaulatan Raja-raja Melayu**,',
        'jaga **kedudukan istimewa orang Melayu**, tubuhkan Dewan Perundangan Negeri, dan perketat **kewarganegaraan**.',
      ],
      board: { name: 'Cadangan Jawatankuasa Kerja', visual: 'Lima kad bernombor muncul mengikut narasi.', doodle: 'Kad bernombor.', text: '1 Satukan negeri Melayu + 2 Negeri-negeri Selat · 2 Pulihkan kedaulatan Raja-raja Melayu · 3 Kedudukan istimewa orang Melayu · 4 Dewan Perundangan Negeri · 5 Kewarganegaraan ketat', anim: 'Kad meluncur satu demi satu.' },
      draw(S) {
        S.text('5 <span class="hl">Cadangan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const c = [['Satukan negeri Melayu + <b>2 Negeri-negeri Selat</b>', 0, 0.1], ['Pulihkan <span class="hl">kedaulatan Raja-raja</span>', 0, 0.6], ['<span class="hl">Kedudukan istimewa</span> orang Melayu', 1, 0.05], ['Dewan Perundangan <b>Negeri</b>', 1, 0.45], ['Kewarganegaraan <span class="hl">ketat</span>', 1, 0.8]];
        c.forEach(([t, k, f], i) => S.card(numCard(i + 1, t, i % 2 ? NAVY : RED, 42), { anim: 'slideL', x: 60, y: 400 + i * 165, w: 960, at: k + f, notape: true, pad: '4px 20px' }));
      },
    },
    {
      id: 'putera', bg: 'grid', transition: 'paper',
      lines: [
        'Golongan **nasionalis Melayu radikal** membidas rundingan tertutup ini. Mereka membentuk **PUTERA**, iaitu Pusat Tenaga Rakyat.',
        'Antaranya **PKMM** pimpinan Dr. Burhanuddin al-Helmi, **API** pimpinan Ahmad Boestamam, dan **AWAS** pimpinan Shamsiah Fakeh.',
      ],
      board: { name: 'PUTERA – nasionalis Melayu radikal', visual: 'Sepanduk "PUTERA · Pusat Tenaga Rakyat"; tiga sepanduk pertubuhan dengan tag pemimpin.', doodle: 'Sepanduk, watak bersongkok (ILUSTRASI).', text: 'PUTERA (Pusat Tenaga Rakyat) · PKMM – Dr. Burhanuddin al-Helmi · API – Ahmad Boestamam · AWAS – Shamsiah Fakeh', anim: 'Sepanduk PUTERA pop; pertubuhan & tag pop pada nama.' },
      draw(S, { D }) {
        S.add(banner(D, 'PUTERA', GOLD), { anim: 'pop', x: 290, y: 290, w: 500, at: 0, d: 0.75 });
        S.text('Pusat Tenaga Rakyat · nasionalis Melayu radikal', { size: 'label', x: 40, y: 640, w: 1000, align: 'center', at: 0, d: 1.0 });
        [['PKMM', 'Dr. Burhanuddin al-Helmi', 0.08], ['API', 'Ahmad Boestamam', 0.45], ['AWAS', 'Shamsiah Fakeh', 0.75]].forEach(([a, n, f], i) => {
          S.card(`<div class="t-h2" style="text-align:center;font-size:54px">${a}</div>`, { anim: 'pop', x: 60 + i * 330, y: 740, w: 300, at: 1 + f, notape: true, color: i === 1 ? 'gold' : '' });
          S.tag(n.toUpperCase(), '', { x: 50 + i * 330, y: 900, w: 320, at: 1 + f, d: 0.15 });
        });
      },
    },
    {
      id: 'amcja', transition: 'slideUp',
      lines: [
        'Golongan bukan Melayu pula menubuhkan **AMCJA**, dipengerusikan oleh **Tan Cheng Lock**, kerana Jawatankuasa Kerja tiada wakil bukan Melayu.',
        'AMCJA kemudian **bergabung** dengan PUTERA.',
      ],
      board: { name: 'AMCJA & gabungan PUTERA-AMCJA', visual: 'Sepanduk "AMCJA · All Malaya Council of Joint Action"; tag Tan Cheng Lock; dua sepanduk bercantum dengan tanda "+".', doodle: 'Sepanduk, tanda tambah.', text: 'AMCJA (All Malaya Council of Joint Action) · Tan Cheng Lock · tiada wakil bukan Melayu · PUTERA + AMCJA', anim: 'Sepanduk pop; tag pop; gabungan pop pada "bergabung".' },
      draw(S, { D }) {
        S.add(banner(D, 'AMCJA', PAPER), { anim: 'pop', x: 290, y: 290, w: 500, at: 0, d: 0.15 });
        S.text('All Malaya Council of Joint Action', { size: 'label', x: 40, y: 640, w: 1000, align: 'center', at: 0, d: 0.3 });
        S.tag('TAN CHENG LOCK', 'Pengerusi AMCJA', { x: 290, y: 720, w: 500, at: 0, d: 0.42 });
        S.add(banner(D, 'PUTERA', GOLD), { anim: 'pop', x: 70, y: 880, w: 380, at: 1, d: 0.2 });
        S.text('+', { size: 'title', x: 470, y: 920, w: 140, align: 'center', at: 1, d: 0.35 });
        S.add(banner(D, 'AMCJA', PAPER), { anim: 'pop', x: 630, y: 880, w: 380, at: 1, d: 0.45 });
      },
    },
    {
      id: 'rakyat', bg: 'grid', transition: 'paper',
      lines: [
        'Pada **Julai 1947**, PUTERA-AMCJA mengemukakan **Perlembagaan Rakyat**.',
        'Antara kandungannya: Tanah Melayu disatukan dengan **Singapura**, dan **bahasa Melayu** sebagai bahasa kebangsaan.',
        'Namun, British **menolaknya**. PUTERA-AMCJA pun mengadakan **hartal**, dan **20 Oktober 1947** menjadi Hari Hartal Se-Malaya.',
      ],
      board: { name: 'Perlembagaan Rakyat & hartal', visual: 'Buku "PERLEMBAGAAN RAKYAT · JULAI 1947"; dua kad kandungan; cop "DITOLAK"; kedai bertutup "HARTAL · 20 OKT 1947".', doodle: 'Buku, cop, gerai tertutup.', text: 'Perlembagaan Rakyat (Julai 1947) · Tanah Melayu + Singapura · bahasa Melayu bahasa kebangsaan · British menolak · hartal · Hari Hartal Se-Malaya 20 Okt 1947', anim: 'Buku dilukis; kad meluncur; cop dihentak; gerai pop.' },
      draw(S, { D }) {
        S.svg(D.book('PERLEMBAGAAN|RAKYAT', RED, { size: 22 }), { x: 60, y: 300, w: 200, at: 0, d: 0.3 });
        S.text('Julai 1947', { size: 'h3', x: 290, y: 330, w: 500, at: 0, d: 0.1 });
        S.card('<div class="t-body" style="font-size:42px">Tanah Melayu + <span class="hl">Singapura</span></div>', { anim: 'slideR', x: 290, y: 420, w: 730, at: 1, d: 0.3, notape: true, pad: '10px 20px' });
        S.card('<div class="t-body" style="font-size:42px"><span class="hl">Bahasa Melayu</span> = bahasa kebangsaan</div>', { anim: 'slideR', x: 290, y: 540, w: 730, at: 1, d: 0.65, notape: true, pad: '10px 20px' });
        S.stamp('DITOLAK', { x: 60, y: 680, w: 360, at: 2, d: 0.08, fs: 70, style: 'text-align:center' });
        S.add(D.market(), { anim: 'pop', x: 470, y: 690, w: 300, at: 2, d: 0.35 });
        S.add(D.cross(), { anim: 'stamp', x: 560, y: 700, w: 110, at: 2, d: 0.45, sfx: false });
        S.card('<div class="t-h3" style="text-align:center">HARTAL <span class="red">· 20 OKT 1947</span></div><div class="t-body" style="font-size:36px;text-align:center">tutup kedai sebagai protes</div>', { color: 'gold', anim: 'slideU', x: 120, y: 950, w: 840, at: 2, d: 0.6 });
      },
    },
    quizScene('kuiz1', 1, 'Bilakah Jawatankuasa Kerja ditubuhkan?', '25 Julai 1946', ['25 Julai 1946', '1 Februari 1948', '20 Oktober 1947'], 'Jawapannya: 25 Julai 1946!'),
    quizScene('kuiz2', 2, 'Siapakah pengerusi AMCJA?', 'Tan Cheng Lock', ['Dr. Burhanuddin al-Helmi', 'Tan Cheng Lock', 'Ahmad Boestamam'], 'Jawapannya: Tan Cheng Lock! Berapa markah anda?'),
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: ['Seterusnya: apakah **faktor** penubuhan Persekutuan Tanah Melayu 1948?'],
      tail: 0.8,
      board: { name: 'Episod seterusnya', visual: 'Maskot dan kad episod seterusnya.', doodle: 'Pelekat maskot.', text: 'Seterusnya: 5.2 Faktor Penubuhan', anim: 'Maskot pop; kad pop.' },
      draw(S) {
        S.text('Jom <span class="hl">teruskan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">5.2 Faktor Penubuhan</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
