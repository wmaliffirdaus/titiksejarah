// BAB 5 · EPISOD 03 – Subtopik 5.2: Faktor Penubuhan Persekutuan Tanah Melayu 1948 (≈ 2.5–3 min, + kuiz mini)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 132–133.
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, NOW, officer, numCard, iconRow, quizScene, END } from './b4lib.js';

export default {
  id: 'b5_03',
  file: '03_Bab5_Subtopik_5.2',
  title: 'Faktor Penubuhan Persekutuan Tanah Melayu 1948',
  header: { chip: 'BAB 5 • 5.2', sub: 'Faktor Penubuhan' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5 (5.2)',
  music: { key: 57, bpm: 102, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: '"Saya menurunkan tandatangan kerana **dipaksa**…" Itu antara kata-kata Sultan Perak!', pause: 0.4 },
        'Mengapa British akhirnya bersetuju menubuhkan Persekutuan Tanah Melayu?',
      ],
      board: {
        name: 'Hook – surat Sultan Perak',
        visual: 'Frame pertama lengkap: watak Sultan (ILUSTRASI) memegang surat; petikan dalam belon "...saya dipaksa..."; tanda soal; cop "3 FAKTOR".',
        doodle: 'Sultan, surat, belon kata, cop.',
        text: '"…saya dipaksa…" – surat Sultan Perak · Mengapa British bersetuju?',
        anim: 'Watak & petikan kelihatan pada 0:00; cop 3 FAKTOR pada baris kedua.',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.text('Surat <span class="red">Sultan Perak</span>', { size: 'title', x: 40, y: 290, w: 1000, align: 'center', ...NOW, style: 'font-size:90px' });
        S.svg(D.sultan({ pose: 'present', prop: 'scroll', mood: 'sad' }), { ...NOW, x: 90, y: 450, w: 320 });
        S.add('<div class="bubble" style="font-size:44px">"…saya menurunkan tandatangan oleh sebab saya <b class="red">dipaksa</b>…"</div>', { ...NOW, x: 450, y: 470, w: 570 });
        S.illus({ x: 90, y: 430, ...NOW });
        S.stamp('3 FAKTOR', { x: 470, y: 900, w: 460, at: 1, d: 0.5, fs: 90, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 5.2: **Faktor penubuhan** Persekutuan Tanah Melayu 1948.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 5.2"; tajuk; pil "1 FEBRUARI 1948".', doodle: 'Mentol.', text: 'SUBTOPIK 5.2 · Faktor Penubuhan PTM 1948', anim: 'Tajuk ditulis; mentol pop.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 5.2</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Faktor <span class="red">Penubuhan</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.add(D.bulb(), { anim: 'pop', x: 440, y: 560, w: 200, at: 0, d: 0.6 });
      },
    },
    {
      id: 'rasmi', bg: 'grid', transition: 'paper',
      lines: [
        'Persekutuan Tanah Melayu ditubuhkan secara rasmi pada **1 Februari 1948**, selepas Raja-raja Melayu menandatangani perjanjiannya.',
        'Faktor pertama: **penentangan orang Melayu** terhadap Malayan Union. Gammans memberi amaran, **huru-hara** akan berlaku jika Malayan Union diteruskan.',
      ],
      board: { name: 'Faktor 1: Penentangan Malayan Union', visual: 'Cop "1 FEBRUARI 1948"; kad bernombor 1; tag Gammans dengan belon amaran "HURU-HARA!".', doodle: 'Cop, watak pegawai (ILUSTRASI), belon.', text: '1 Feb 1948 – PTM ditubuhkan · FAKTOR 1: penentangan orang Melayu terhadap Malayan Union · Gammans: huru-hara jika MU diteruskan', anim: 'Cop dihentak; kad meluncur; belon pop pada "huru-hara".' },
      draw(S, { D }) {
        S.stamp('1 FEBRUARI 1948', { x: 160, y: 300, w: 760, at: 0, d: 0.3, fs: 70, style: 'text-align:center;white-space:nowrap' });
        S.card(numCard(1, '<span class="hl">Penentangan orang Melayu</span> terhadap Malayan Union', RED, 44), { anim: 'slideL', x: 60, y: 500, w: 960, at: 1, d: 0.1 });
        S.illus({ x: 60, y: 720, at: 1, d: 0.5 });
        S.svg(officer(D, { pose: 'point' }), { x: 80, y: 760, w: 190, at: 1, d: 0.6, dur: 0.6 });
        S.tag('GAMMANS', 'Ahli Parlimen British', { x: 300, y: 780, w: 380, at: 1, d: 0.65 });
        S.add('<div class="bubble" style="font-size:52px;text-align:center"><b class="red">HURU-HARA!</b></div>', { anim: 'pop', x: 300, y: 900, w: 500, at: 1, d: 1.2, sfx: 'ding' });
      },
    },
    {
      id: 'cadangan', transition: 'flip',
      lines: [
        'Faktor kedua: **cadangan Raja-raja Melayu dan UMNO**. Pada **27 Mei 1946**, Malcolm MacDonald dan Sir Edward Gent bertemu Raja-raja Melayu di **Kuala Kangsar**.',
        'Raja-raja mencadangkan persekutuan bertaraf **naungan**, perjanjian baharu, dan **Pesuruhjaya Tinggi** menggantikan Gabenor.',
      ],
      board: { name: 'Faktor 2: Cadangan Raja-raja Melayu & UMNO', visual: 'Kad bernombor 2; pil "KUALA KANGSAR · 27 MEI 1946"; tiga kad cadangan.', doodle: 'Istana kecil, kad.', text: 'FAKTOR 2: cadangan Raja-raja Melayu & UMNO · 27 Mei 1946, Kuala Kangsar – MacDonald & Gent · cadangan: taraf naungan · perjanjian baharu · Pesuruhjaya Tinggi ganti Gabenor', anim: 'Kad & pil pop; tiga cadangan meluncur mengikut sebutan.' },
      draw(S, { D }) {
        S.card(numCard(2, 'Cadangan <span class="hl">Raja-raja Melayu & UMNO</span>', NAVY, 44), { anim: 'slideL', x: 60, y: 300, w: 960, at: 0, d: 0 });
        S.svg(D.palace(), { x: 60, y: 500, w: 300, at: 0, d: 0.6 });
        S.add('<div><span class="pill" style="font-size:32px">KUALA KANGSAR · 27 MEI 1946</span></div>', { anim: 'pop', x: 380, y: 540, w: 640, at: 0, d: 0.5 });
        S.text('MacDonald & Gent bertemu Raja-raja', { size: 'label', x: 380, y: 630, w: 640, at: 0, d: 0.7 });
        [['Taraf <span class="hl">naungan</span>', 0.2], ['Perjanjian <b>baharu</b>', 0.45], ['<span class="hl">Pesuruhjaya Tinggi</span> ganti Gabenor', 0.7]].forEach(([t, f], i) => S.card(`<div class="t-body" style="font-size:42px">✓ ${t}</div>`, { anim: 'slideR', x: 60, y: 780 + i * 140, w: 960, at: 1 + f, notape: true, pad: '10px 22px' }));
      },
    },
    {
      id: 'sokongan', bg: 'grid', transition: 'paper',
      lines: [
        'Faktor ketiga: **sokongan pentadbir British**. Persekutuan dapat mewujudkan **keamanan**, kestabilan, dan menarik **pelabur**.',
        'British juga perlu melaksanakan **dekolonisasi**, iaitu proses ke arah berkerajaan sendiri, seperti saranan **Piagam Atlantik**.',
      ],
      board: { name: 'Faktor 3: Sokongan pentadbir British', visual: 'Kad bernombor 3; tiga ikon (perisai keamanan, neraca kestabilan, syiling pelabur); kad definisi DEKOLONISASI; skrol "PIAGAM ATLANTIK · OGOS 1941".', doodle: 'Perisai, neraca, syiling, skrol.', text: 'FAKTOR 3: sokongan pentadbir British · keamanan · kestabilan · pelaburan · Dekolonisasi = proses ke arah berkerajaan sendiri · Piagam Atlantik (Ogos 1941)', anim: 'Ikon pop pada sebutan; kad definisi naik.' },
      draw(S, { D }) {
        S.card(numCard(3, '<span class="hl">Sokongan pentadbir British</span>', RED, 44), { anim: 'slideL', x: 60, y: 300, w: 960, at: 0, d: 0 });
        [['Keamanan', D.shield(), 0.5], ['Kestabilan', D.scales(), 0.62], ['Pelabur', D.coins(), 0.85]].forEach(([t, ic, f], i) => {
          S.add(ic, { anim: 'pop', x: 110 + i * 320, y: 480, w: 180, at: f, sfx: i ? false : 'pop' });
          S.text(t, { size: 'label', x: 60 + i * 320, y: 680, w: 280, align: 'center', at: f, d: 0.1 });
        });
        S.card('<div class="tw red" style="font-size:28px">DEFINISI</div><div class="t-body" style="font-size:46px"><span class="hl">Dekolonisasi</span> = proses ke arah berkerajaan sendiri</div>', { tear: true, anim: 'slideU', x: 60, y: 780, w: 960, at: 1, d: 0.2 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:34px">PIAGAM ATLANTIK · OGOS 1941</span></div>', { anim: 'pop', x: 40, y: 1060, w: 1000, at: 1, d: 0.75 });
      },
    },
    quizScene('kuiz1', 1, 'Di manakah MacDonald dan Gent bertemu Raja-raja Melayu pada 27 Mei 1946?', 'Kuala Kangsar', ['Kuala Kangsar', 'Pulau Pinang', 'Johor Bahru'], 'Jawapannya: Kuala Kangsar!'),
    quizScene('kuiz2', 2, 'Apakah maksud dekolonisasi?', 'Proses ke arah berkerajaan sendiri', ['Proses ke arah berkerajaan sendiri', 'Protes menutup kedai', 'Penyatuan negeri Melayu'], 'Jawapannya: proses ke arah berkerajaan sendiri! Berapa markah anda?'),
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: ['Seterusnya: apakah **ciri-ciri** Persekutuan Tanah Melayu 1948, dan apa bezanya dengan Malayan Union?'],
      tail: 0.8,
      board: { name: 'Episod seterusnya', visual: 'Maskot dan kad episod seterusnya.', doodle: 'Pelekat maskot.', text: 'Seterusnya: 5.3 Ciri-ciri PTM 1948', anim: 'Maskot pop; kad pop.' },
      draw(S) {
        S.text('Jom <span class="hl">teruskan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">5.3 Ciri-ciri PTM 1948</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
