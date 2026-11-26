// BAB 5 · EPISOD 06 – Ulang Kaji Bab 5: Persekutuan Tanah Melayu 1948 (≈ 2.5–3 min)
// Chapter 1 series template (episodes/ep06.js). Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 124–138 (incl. "Imbas Kembali", ms. 138).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, MALAYA, ALL, NOW, numCard, END } from './b4lib.js';

function quiz(S, D, n, q, a, opts) {
  S.add(`<span class="pill" style="font-size:36px">SOALAN ${n}/3</span>`, { anim: 'pop', x: 60, y: 300, w: 400, at: 0, d: -0.3 });
  S.card(`<div class="t-h3" style="font-size:52px">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: 390, w: 960, at: 0, d: 0.1 });
  opts.forEach((o, i) => S.card(`<div class="t-body" style="font-size:42px"><b>${'ABC'[i]}.</b> ${o}</div>`, { anim: 'slideR', x: 100, y: 680 + i * 130, w: 880, at: 0, d: 1.2 + i * 0.3, pad: '10px 22px', notape: true, sfx: 'swish' }));
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:130px;height:130px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:76px;color:#172C63">${c}</div>`, { anim: 'pop', x: 860, y: 260, w: 130, at: 0.999, d: 0.15 + i, out: { at: 0.999, d: 1.1 + i }, sfx: 'pop' }));
  const ai = opts.indexOf(a);
  S.add(D.check(), { anim: 'pop', x: 900, y: 690 + ai * 130, w: 80, at: 1, sfx: 'ding' });
  S.stamp(`JAWAPAN: ${a}`, { x: 40, y: 1100, w: 1000, at: 1, d: 0.1, fs: Math.min(44, Math.floor(1450 / (a.length + 9))), rot: -2, style: 'text-align:center;white-space:nowrap' });
}
// one summary page per subtopic: pill + title + 2–3 key cards revealed on cue
function summary(S, n, title, cards) {
  S.add(`<span class="pill">${n}</span>`, { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
  S.text(title, { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
  cards.forEach(([html, at, color], i) => S.card(`<div class="t-body" style="font-size:48px;line-height:1.3">${html}</div>`, { anim: i % 2 ? 'slideR' : 'slideL', x: 60, y: 440 + i * 300, w: 960, at, color: color || '', rot: i % 2 ? 1 : -1, pad: '22px 28px' }));
}

export default {
  id: 'b5_06',
  file: '06_Bab5_Ulang_Kaji',
  title: 'Persekutuan Tanah Melayu 1948 – Apa Yang Kita Perlu Ingat?',
  header: { chip: 'BAB 5 • ULANG KAJI', sub: 'Wajib Ingat!' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5',
  music: { key: 64, bpm: 106, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [{ text: 'Ada ujian Sejarah? Jom ulang kaji **seluruh Bab 5** dalam satu video!', pause: 0.3 }],
      board: { name: 'Hook – ulang kaji pantas', visual: 'Frame pertama lengkap: tajuk "Ujian Sejarah?", jam loceng & buku "BAB 5"; cop "ULANG KAJI BAB 5".', doodle: 'Jam loceng, buku, cop.', text: '"Ujian Sejarah?" · ULANG KAJI BAB 5', anim: 'Jam berdenyut; cop dihentak.', music: 'Sting jenama pembuka; tempo lebih laju.' },
      draw(S, { D }) {
        S.text('Ujian <span class="red">Sejarah</span>?', { size: 'title', x: 60, y: 300, w: 960, align: 'center', ...NOW });
        S.add(`<svg viewBox="0 0 240 260"><circle cx="120" cy="140" r="96" fill="#FFFDF7" stroke="${NAVY}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><circle cx="190" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><path d="M120 140 V80 M120 140 L160 160" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/><path d="M60 240 L80 215 M180 240 L160 215" stroke="${NAVY}" stroke-width="8" stroke-linecap="round"/></svg>`, { ...NOW, x: 130, y: 470, w: 300, pulse: [{ at: 0, d: 1.1 }] });
        S.add(D.book('BAB 5', RED, { size: 40, y: 145 }), { ...NOW, x: 600, y: 470, w: 300 });
        S.stamp('ULANG KAJI BAB 5', { x: 140, y: 920, w: 800, at: 0, d: 2.2, fs: 60, style: 'text-align:center;white-space:nowrap' });
        S.text('Persekutuan Tanah Melayu 1948', { size: 'h3', x: 60, y: 1080, w: 960, align: 'center', at: 0, d: 2.8 });
      },
    },
    {
      id: 's51', transition: 'wipe',
      lines: ['Lima titik satu: **Jawatankuasa Kerja**, 25 Julai 1946, merangka perjanjian. **PUTERA-AMCJA** menentang, mengemukakan Perlembagaan Rakyat, dan mengadakan **hartal**.'],
      board: { name: 'Ringkasan 5.1', visual: 'Pil 5.1; dua kad.', doodle: 'Kad.', text: '5.1 · Jawatankuasa Kerja 25 Julai 1946 · PUTERA-AMCJA · Perlembagaan Rakyat · hartal', anim: 'Kad meluncur.' },
      draw(S) {
        summary(S, '5.1', 'Latar Belakang', [
          ['<b>Jawatankuasa Kerja</b> <span class="tw red" style="font-size:26px">25 JULAI 1946</span><br>Raja-raja · UMNO · British', 0.1],
          ['<b>PUTERA-AMCJA</b> menentang · <span class="hl">Perlembagaan Rakyat</span> · <span class="hl">hartal</span>', 0.55, 'gold'],
        ]);
      },
    },
    {
      id: 's52', bg: 'grid', transition: 'paper',
      lines: ['Lima titik dua: tiga faktor penubuhan. Penentangan **Malayan Union**, cadangan **Raja-raja Melayu dan UMNO**, dan sokongan **pentadbir British**.'],
      board: { name: 'Ringkasan 5.2', visual: 'Pil 5.2; kad tiga faktor.', doodle: 'Kad.', text: '5.2 · penentangan MU · cadangan Raja-raja & UMNO · sokongan pentadbir British', anim: 'Kad meluncur.' },
      draw(S) {
        summary(S, '5.2', 'Faktor Penubuhan', [
          ['<b>1</b> Penentangan <span class="hl">Malayan Union</span><br><b>2</b> Cadangan <span class="hl">Raja-raja & UMNO</span><br><b>3</b> Sokongan <span class="hl">pentadbir British</span>', 0.2],
        ]);
      },
    },
    {
      id: 's53', transition: 'flip',
      lines: ['Lima titik tiga: sebelas negeri tanpa Singapura, diketuai **Pesuruhjaya Tinggi**, ada **Majlis Raja-Raja**, dan kewarganegaraan **diperketat**.'],
      board: { name: 'Ringkasan 5.3', visual: 'Pil 5.3; kad ciri-ciri.', doodle: 'Kad.', text: '5.3 · 11 negeri (tanpa Singapura) · Pesuruhjaya Tinggi · Majlis Raja-Raja · kewarganegaraan diperketat', anim: 'Kad meluncur.' },
      draw(S) {
        summary(S, '5.3', 'Ciri-ciri PTM 1948', [
          ['<b>11 negeri</b> (tanpa Singapura) · <span class="hl">Pesuruhjaya Tinggi</span>', 0.1],
          ['<span class="hl">Majlis Raja-Raja</span> · kewarganegaraan <b>diperketat</b>', 0.55, 'gold'],
        ]);
      },
    },
    {
      id: 's54', bg: 'grid', transition: 'paper',
      lines: ['Lima titik empat: kedudukan **Raja-raja** dikembalikan, kedudukan istimewa **orang Melayu** dijaga, kewarganegaraan dibuka, **CLC** memupuk kerjasama kaum, dan asas **kemerdekaan 1957**.'],
      board: { name: 'Ringkasan 5.4', visual: 'Pil 5.4; dua kad kesan.', doodle: 'Kad, bintang.', text: '5.4 · Raja-raja · kedudukan istimewa orang Melayu · kewarganegaraan · CLC · asas merdeka 1957', anim: 'Kad meluncur.' },
      draw(S) {
        summary(S, '5.4', 'Kesan Penubuhan', [
          ['<span class="hl">Raja-raja</span> dikembalikan · kedudukan istimewa <b>orang Melayu</b> · kewarganegaraan dibuka', 0.1],
          ['<b>CLC</b> ➜ kerjasama kaum · asas <span class="hl">kemerdekaan 1957</span>', 0.62, 'gold'],
        ]);
      },
    },
    {
      id: 'katakunci', transition: 'paper',
      lines: ['Kata kunci wajib ingat: Jawatankuasa Kerja, PUTERA, AMCJA, Perlembagaan Rakyat, hartal, dekolonisasi, Pesuruhjaya Tinggi, Majlis Raja-Raja, rakyat Raja, dan CLC.'],
      board: { name: 'Kata kunci', visual: 'Dinding nota lekat: sepuluh kad kata kunci.', doodle: 'Kad, pita.', text: 'Jawatankuasa Kerja · PUTERA · AMCJA · Perlembagaan Rakyat · Hartal · Dekolonisasi · Pesuruhjaya Tinggi · Majlis Raja-Raja · Rakyat Raja · CLC', anim: 'Kad ditampal satu demi satu.' },
      draw(S) {
        S.text('Kata Kunci <span class="hl">Wajib Ingat</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const kw = [['Jawatankuasa Kerja', '25 Julai 1946'], ['PUTERA', 'Pusat Tenaga Rakyat'], ['AMCJA', 'Tan Cheng Lock'], ['Perlembagaan Rakyat', 'Julai 1947'], ['Hartal', '20 Okt 1947'], ['Dekolonisasi', 'ke arah berkerajaan sendiri'], ['Pesuruhjaya Tinggi', 'ketua PTM 1948'], ['Majlis Raja-Raja', 'perkenan undang-undang'], ['Rakyat Raja', 'Melayu & Orang Asli'], ['CLC', 'Hubungan Antara Kaum']];
        kw.forEach(([k, s], i) => {
          const col = i % 2, row = Math.floor(i / 2);
          S.card(`<div class="t-h3" style="font-size:36px">${k}</div><div class="t-label red" style="font-size:28px">${s}</div>`, { color: i % 3 === 0 ? 'gold' : '', anim: 'pop', x: 60 + col * 490, y: 395 + row * 160, w: 470, at: 0.08 + i * 0.09, pad: '8px 18px', rot: (i % 3 - 1) * 1.4, sfx: i % 2 ? false : 'pop' });
        });
      },
    },
    {
      id: 'q1', bg: 'grid', transition: 'wipe',
      lines: [{ text: 'Kuiz! Soalan satu: Bilakah Persekutuan Tanah Melayu ditubuhkan?', pause: 3.4 }, 'Jawapannya: 1 Februari 1948!'],
      board: { name: 'Kuiz 1', visual: 'Format kuiz.', doodle: 'Undur masa, tanda semak.', text: 'SOALAN 1/3 · A. 21 Januari 1948 · B. 1 Februari 1948 · C. 25 Julai 1946 · JAWAPAN: B', anim: 'Seperti kuiz Bab 4.' },
      draw(S, { D }) { quiz(S, D, 1, 'Bilakah Persekutuan Tanah Melayu ditubuhkan?', '1 Februari 1948', ['21 Januari 1948', '1 Februari 1948', '25 Julai 1946']); },
    },
    {
      id: 'q2', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan dua: Gabungan PUTERA-AMCJA mengemukakan apa?', pause: 3.4 }, 'Jawapannya: Perlembagaan Rakyat!'],
      board: { name: 'Kuiz 2', visual: 'Format kuiz.', doodle: 'Undur masa, tanda semak.', text: 'SOALAN 2/3 · A. Kertas Putih 6274 · B. Cession Bill · C. Perlembagaan Rakyat · JAWAPAN: C', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 2, 'Gabungan PUTERA-AMCJA mengemukakan apa?', 'Perlembagaan Rakyat', ['Kertas Putih 6274', 'Cession Bill', 'Perlembagaan Rakyat']); },
    },
    {
      id: 'q3', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan tiga: Siapakah ketua Persekutuan Tanah Melayu 1948?', pause: 3.4 }, 'Jawapannya: Pesuruhjaya Tinggi British! Berapa markah anda?'],
      board: { name: 'Kuiz 3', visual: 'Format kuiz.', doodle: 'Undur masa, tanda semak.', text: 'SOALAN 3/3 · A. Pesuruhjaya Tinggi British · B. Gabenor British · C. Dato\' Onn Jaafar · JAWAPAN: A', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 3, 'Siapakah ketua Persekutuan Tanah Melayu 1948?', 'Pesuruhjaya Tinggi British', ['Pesuruhjaya Tinggi British', 'Gabenor British', "Dato' Onn Jaafar"]); },
    },
    {
      id: 'penutup', transition: 'zoom',
      lines: ['Tonton semula Episod 1 hingga 5 untuk faham lebih mendalam. Terima kasih kerana belajar bersama **Titik Sejarah**!'],
      tail: 0.8,
      board: { name: 'Penutup siri', visual: 'Maskot rasmi besar; lima kad episod; "Terima kasih!".', doodle: 'Pelekat maskot, pil episod, bintang.', text: 'Tonton semula: EP1 Intro · EP2 5.1 · EP3 5.2 · EP4 5.3 · EP5 5.4 · Terima kasih!', anim: 'Maskot zoom; pil pop; bintang berdenyut.' },
      draw(S, { D }) {
        S.mascot({ x: 290, y: 300, w: 480, at: 0, d: -0.3, anim: 'zoom', dur: 0.8 });
        const eps = ['EP1 Intro', 'EP2 · 5.1', 'EP3 · 5.2', 'EP4 · 5.3', 'EP5 · 5.4'];
        eps.forEach((e, i) => S.add(`<span class="pill" style="font-size:30px;background:${i % 2 ? '#FFFDF7' : '#F5C928'};white-space:nowrap">${e}</span>`, { anim: 'pop', x: 60 + (i % 3) * 330, y: 840 + Math.floor(i / 3) * 95, w: 320, at: 0, d: 0.6 + i * 0.3, sfx: 'pop' }));
        S.text('Terima kasih!<br><span class="red">Jumpa lagi!</span>', { size: 'h2', x: 60, y: 1060, w: 960, align: 'center', at: 0, d: 3.5 });
        S.add(D.star(), { anim: 'pop', x: 860, y: 1070, w: 110, at: 0, d: 4, pulse: [{ at: 0, d: 4.5 }], sfx: false });
      },
    },
    END,
  ],
};
