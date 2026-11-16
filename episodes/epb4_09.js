// BAB 4 · EPISOD 09 – Ulang Kaji Bab 4: Era Peralihan Kuasa British di Negara Kita (≈ 3–4 min)
// Chapter 1 series template (episodes/ep06.js). Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 92–118 (incl. "Imbas Kembali", ms. 118).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, MALAYA, ALL, NOW, numCard, END } from './b4lib.js';

function quiz(S, D, n, q, a, opts) {
  S.add(`<span class="pill" style="font-size:36px">SOALAN ${n}/3</span>`, { anim: 'pop', x: 60, y: 300, w: 400, at: 0, d: -0.3 });
  S.card(`<div class="t-h3" style="font-size:52px">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: 390, w: 960, at: 0, d: 0.1 });
  opts.forEach((o, i) => S.card(`<div class="t-body" style="font-size:42px"><b>${'ABC'[i]}.</b> ${o}</div>`, { anim: 'slideR', x: 100, y: 680 + i * 130, w: 880, at: 0, d: 1.2 + i * 0.3, pad: '10px 22px', notape: true, sfx: 'swish' }));
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:130px;height:130px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:76px;color:#172C63">${c}</div>`, { anim: 'pop', x: 860, y: 260, w: 130, at: 0.999, d: 0.15 + i, out: { at: 0.999, d: 1.1 + i }, sfx: 'pop' }));
  const ai = opts.indexOf(a);
  S.add(D.check(), { anim: 'pop', x: 900, y: 690 + ai * 130, w: 80, at: 1, sfx: 'ding' });
  S.stamp(`JAWAPAN: ${a}`, { x: 60, y: 1100, w: 960, at: 1, d: 0.1, fs: 44, style: 'text-align:center' });
}
// one summary page per subtopic: pill + title + 2–3 key cards revealed on cue
function summary(S, n, title, cards) {
  S.add(`<span class="pill">${n}</span>`, { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
  S.text(title, { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
  cards.forEach(([html, at, color], i) => S.card(`<div class="t-body" style="font-size:48px;line-height:1.3">${html}</div>`, { anim: i % 2 ? 'slideR' : 'slideL', x: 60, y: 440 + i * 300, w: 960, at, color: color || '', rot: i % 2 ? 1 : -1, pad: '22px 28px' }));
}

export default {
  id: 'b4_09',
  file: '09_Bab4_Ulang_Kaji',
  title: 'Era Peralihan Kuasa British – Apa Yang Kita Perlu Ingat?',
  header: { chip: 'BAB 4 • ULANG KAJI', sub: 'Wajib Ingat!' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4',
  music: { key: 64, bpm: 106, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [{ text: 'Ada ujian Sejarah tak lama lagi? Jom ulang kaji **seluruh Bab 4** dalam satu video!', pause: 0.3 }],
      board: {
        name: 'Hook – ulang kaji pantas',
        visual: 'Frame pertama lengkap: tajuk "Ujian Sejarah?", jam loceng doodle dan buku "BAB 4"; cop "ULANG KAJI BAB 4".',
        doodle: 'Jam loceng, buku merah "BAB 4", cop merah.',
        text: '"Ujian Sejarah?" · ULANG KAJI BAB 4',
        anim: 'Jam berdenyut; cop dihentak.',
        music: 'Sting jenama pembuka; tempo muzik lebih laju.',
      },
      draw(S, { D }) {
        S.text('Ujian <span class="red">Sejarah</span>?', { size: 'title', x: 60, y: 300, w: 960, align: 'center', ...NOW });
        S.add(`<svg viewBox="0 0 240 260"><circle cx="120" cy="140" r="96" fill="#FFFDF7" stroke="${NAVY}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><circle cx="190" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><path d="M120 140 V80 M120 140 L160 160" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/><path d="M60 240 L80 215 M180 240 L160 215" stroke="${NAVY}" stroke-width="8" stroke-linecap="round"/></svg>`, { ...NOW, x: 130, y: 470, w: 300, pulse: [{ at: 0, d: 1.1 }, { at: 0, d: 1.8 }] });
        S.add(D.book('BAB 4', RED, { size: 40, y: 145 }), { ...NOW, x: 600, y: 470, w: 300 });
        S.stamp('ULANG KAJI BAB 4', { x: 140, y: 920, w: 800, at: 0, d: 2.6, fs: 60, style: 'text-align:center;white-space:nowrap' });
        S.text('Era Peralihan Kuasa British', { size: 'h3', x: 60, y: 1080, w: 960, align: 'center', at: 0, d: 3.4 });
      },
    },
    {
      id: 's41', transition: 'wipe',
      lines: [
        'Empat titik satu: **BMA**, bermula 12 September 1945, bertugas mengembalikan kestabilan dan memulihkan kepercayaan rakyat.',
        'Tetapi BMA gagal. Senjata MPAJA tidak dikumpul semula, harga barang melambung, dan rakyat **hampa**.',
      ],
      board: { name: 'Ringkasan 4.1', visual: 'Pil 4.1; dua kad: tugas BMA & kegagalan BMA.', doodle: 'Kad.', text: '4.1 · BMA 12 Sept 1945 · kestabilan & kepercayaan rakyat · GAGAL: senjata MPAJA, harga melambung · rakyat hampa', anim: 'Kad meluncur mengikut narasi.' },
      draw(S) {
        summary(S, '4.1', 'British Military Administration', [
          ['<span class="tw red" style="font-size:26px">12 SEPT 1945</span><br>Tugas: <span class="hl">kestabilan</span> & <span class="hl">kepercayaan rakyat</span>', 0.25],
          ['<b class="red">GAGAL</b>: senjata MPAJA tidak dikumpul · harga melambung · rakyat <span class="hl">hampa</span>', 1.1, 'gold'],
        ]);
      },
    },
    {
      id: 's42', bg: 'grid', transition: 'paper',
      lines: [
        'Empat titik dua: **Malayan Union** menyatukan negeri-negeri Melayu dan Negeri-negeri Selat, kecuali Singapura, di bawah Gabenor British, dengan kewarganegaraan **jus soli**.',
        'MacMichael mendapatkan tandatangan sembilan Raja-raja Melayu melalui **desakan dan ugutan**.',
      ],
      board: { name: 'Ringkasan 4.2', visual: 'Pil 4.2; kad ciri MU; kad MacMichael.', doodle: 'Kad.', text: '4.2 · Malayan Union: kesatuan (kecuali Singapura) · Gabenor British · jus soli · MacMichael: 9 tandatangan, desakan & ugutan', anim: 'Kad meluncur mengikut narasi.' },
      draw(S) {
        summary(S, '4.2', 'Gagasan Malayan Union', [
          ['Kesatuan (<b>kecuali Singapura</b>) · <span class="hl">Gabenor British</span> · <span class="hl"><i>jus soli</i></span>', 0.3],
          ['<b>MacMichael</b>: 9 tandatangan Raja-raja Melayu melalui <span class="hl">desakan & ugutan</span>', 1.05, 'gold'],
        ]);
      },
    },
    {
      id: 's43', transition: 'flip',
      lines: [
        'Empat titik tiga: Raja-raja Melayu dan rakyat **bersatu menentang**, melalui akhbar, cendekiawan, Kongres Melayu, dan **UMNO**, yang ditubuhkan pada 11 Mei 1946.',
        'Hasilnya, Malayan Union digantikan dengan **Persekutuan Tanah Melayu 1948**.',
      ],
      board: { name: 'Ringkasan 4.3', visual: 'Pil 4.3; kad cara penentangan; kad hasil PTM 1948.', doodle: 'Kad.', text: '4.3 · Raja & rakyat bersatu menentang · akhbar · cendekiawan · Kongres Melayu · UMNO 11 Mei 1946 · MU ➜ PTM 1948', anim: 'Kad meluncur mengikut narasi.' },
      draw(S) {
        summary(S, '4.3', 'Reaksi terhadap Malayan Union', [
          ['Raja & rakyat <span class="hl">bersatu</span>: akhbar · cendekiawan · Kongres Melayu · <b>UMNO</b> <span class="tw red" style="font-size:26px">11 MEI 1946</span>', 0.3],
          ['<b class="red">BERJAYA</b> ➜ <span class="hl">Persekutuan Tanah Melayu 1948</span>', 1.1, 'gold'],
        ]);
      },
    },
    {
      id: 's44', bg: 'grid', transition: 'paper',
      lines: [
        'Empat titik empat: **Vyner Brooke** menyerahkan Sarawak pada 1 Julai 1946, kerana masalah pewarisan takhta, desakan British dan masalah kewangan.',
        'Cession Bill diluluskan oleh Majlis Negeri, **19 undi** lawan 16.',
      ],
      board: { name: 'Ringkasan 4.4', visual: 'Pil 4.4; kad faktor penyerahan; kad Cession Bill 19–16.', doodle: 'Kad.', text: '4.4 · Vyner Brooke serah Sarawak 1 Julai 1946 · pewarisan takhta · desakan British · kewangan · Cession Bill 19–16', anim: 'Kad meluncur mengikut narasi.' },
      draw(S) {
        summary(S, '4.4', 'Penyerahan Sarawak', [
          ['<b>Vyner Brooke</b> <span class="tw red" style="font-size:26px">1 JULAI 1946</span><br>pewarisan takhta · desakan British · kewangan', 0.3],
          ['<b>Cession Bill</b>: <span class="hl">19</span> lawan 16 undi', 1.1, 'gold'],
        ]);
      },
    },
    {
      id: 's45', transition: 'flip',
      lines: [
        'Empat titik lima: golongan antipenyerahan, dipimpin **Datu Patinggi Abang Haji Abdillah**, berdemonstrasi, meletakkan jawatan, dan menubuhkan **Rukun 13**.',
        'Gerakan ini gagal selepas peristiwa **Sungkit Berdarah**, tetapi membangkitkan nasionalisme.',
      ],
      board: { name: 'Ringkasan 4.5', visual: 'Pil 4.5; kad bentuk penentangan; kad hasil.', doodle: 'Kad.', text: '4.5 · Datu Patinggi Abang Haji Abdillah · demonstrasi · letak jawatan · Rukun 13 · Sungkit Berdarah · gagal, nasionalisme bangkit', anim: 'Kad meluncur mengikut narasi.' },
      draw(S) {
        summary(S, '4.5', 'Reaksi terhadap Penyerahan Sarawak', [
          ['<b>Datu Patinggi Abang Haji Abdillah</b>: demonstrasi · letak jawatan · <span class="hl">Rukun 13</span>', 0.3],
          ['<b class="red">GAGAL</b> selepas <span class="hl">Sungkit Berdarah</span> · tetapi <b>nasionalisme bangkit</b>', 1.1, 'gold'],
        ]);
      },
    },
    {
      id: 's46-47', bg: 'grid', transition: 'paper',
      lines: [
        'Empat titik enam: **SBUB** menyerahkan Sabah pada 15 Julai 1946, kerana kepentingan British, dasar hubungan luar, dan masalah kewangan.',
        'Empat titik tujuh: tiada penentangan di Sabah, kerana **dasar British** yang menindas persatuan, dan **kepentingan sosioekonomi** penduduk.',
      ],
      board: { name: 'Ringkasan 4.6 & 4.7', visual: 'Pil 4.6 & 4.7; dua kad.', doodle: 'Kad.', text: '4.6 · SBUB serah Sabah 15 Julai 1946 · kepentingan British · hubungan luar · kewangan · 4.7 · tiada penentangan: dasar British & kepentingan sosioekonomi', anim: 'Kad meluncur mengikut narasi.' },
      draw(S) {
        S.add('<span class="pill">4.6</span>', { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
        S.text('Penyerahan Sabah', { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
        S.card('<div class="t-body" style="font-size:40px"><b>SBUB</b> <span class="tw red" style="font-size:26px">15 JULAI 1946</span><br>kepentingan British · hubungan luar · kewangan</div>', { anim: 'slideL', x: 60, y: 420, w: 960, at: 0.3, rot: -1, pad: '14px 22px' });
        S.add('<span class="pill">4.7</span>', { anim: 'pop', x: 60, y: 690, w: 200, at: 1, d: -0.1 });
        S.text('Reaksi di Sabah', { size: 'h3', x: 200, y: 695, w: 820, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:40px"><b>Tiada penentangan</b>: <span class="hl">dasar British</span> menindas persatuan · <span class="hl">kepentingan sosioekonomi</span></div>', { color: 'gold', anim: 'slideR', x: 60, y: 800, w: 960, at: 1, d: 0.3, rot: 1, pad: '14px 22px' });
      },
    },
    {
      id: 'mindamap', bg: 'dots', transition: 'zoom',
      lines: [
        'Bagaimana semuanya berkait? Selepas perang, British mahu menguasai semula Tanah Melayu, Sarawak dan Sabah.',
        'Reaksi rakyat berbeza: **berjaya**, **gagal**, dan **tiada penentangan**. Tetapi semuanya mencetuskan gelombang **nasionalisme**.',
      ],
      board: {
        name: 'Peta minda – tiga wilayah, tiga reaksi',
        visual: 'Hab navy "ERA PERALIHAN KUASA BRITISH" di tengah; tiga cabang (Tanah Melayu – BERJAYA, Sarawak – GAGAL, Sabah – TIADA PENENTANGAN); bintang "NASIONALISME" di bawah.',
        doodle: 'Hab navy, tiga kad cabang, anak panah, bintang.',
        text: 'Tanah Melayu – Malayan Union – BERJAYA · Sarawak – Vyner Brooke – GAGAL · Sabah – SBUB – TIADA PENENTANGAN ➜ NASIONALISME',
        anim: 'Hab pop; setiap cabang dan anak panah dilukis tepat ketika reaksinya disebut; bintang berdenyut di akhir.',
      },
      draw(S, { D }) {
        S.text('Peta Minda <span class="red">Bab 4</span>', { size: 'h2', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928;font-size:42px">ERA PERALIHAN<br>KUASA BRITISH</div>', { color: 'navy', anim: 'pop', x: 330, y: 420, w: 420, at: 0, d: 0.2 });
        const br = [['TANAH MELAYU', 'Malayan Union', 'BERJAYA', 60, 0.25], ['SARAWAK', 'Vyner Brooke', 'GAGAL', 390, 0.38], ['SABAH', 'SBUB', 'TIADA PENENTANGAN', 720, 0.55]];
        br.forEach(([n, w, r, x, f], i) => {
          S.arrow(540, 600, x + 150, 690, { at: 1, d: f * 2 - 0.4, color: RED, bend: 0.05, sfx: false });
          S.card(`<div class="t-h3" style="font-size:36px;text-align:center">${n}</div><div class="t-body" style="font-size:34px;text-align:center">${w}</div><div class="t-h3" style="font-size:32px;text-align:center"><span class="hl">${r}</span></div>`, { anim: 'pop', x, y: 700, w: 300, at: 1 + f, pad: '12px 10px', rot: i % 2 ? 1.5 : -1.5 });
        });
        S.add(D.star(), { anim: 'pop', x: 380, y: 1010, w: 110, at: 1, d: 3.6, pulse: [{ at: 1, d: 4.2 }] });
        S.text('<span class="hl">NASIONALISME</span>', { size: 'h2', x: 490, y: 1030, w: 520, at: 1, d: 3.7 });
      },
    },
    {
      id: 'katakunci', transition: 'paper',
      lines: [
        'Kata kunci yang wajib diingat:',
        'BMA, MPAJA, Kertas Putih 6274, jus soli, Kongres Melayu, UMNO, Cession Bill, Prinsip Kelapan, Rukun 13, Sungkit Berdarah, SBUB dan BARIP.',
      ],
      board: {
        name: 'Kata kunci & nama penting',
        visual: 'Dinding nota lekat: dua belas kad kata kunci berwarna ditampal dengan pita.',
        doodle: 'Kad kertas kecil, pita kuning.',
        text: 'BMA · MPAJA · Kertas Putih 6274 · Jus soli · Kongres Melayu · UMNO · Cession Bill · Prinsip Kelapan · Rukun 13 · Sungkit Berdarah · SBUB · BARIP',
        anim: 'Kad ditampal satu demi satu dengan sedikit putaran, serentak dengan sebutan.',
      },
      draw(S) {
        S.text('Kata Kunci <span class="hl">Wajib Ingat</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const kw = [['BMA', '12 Sept 1945'], ['MPAJA', 'dibubarkan 1 Dis 1945'], ['Kertas Putih 6274', '13 perkara Malayan Union'], ['Jus soli', 'warga ikut tempat lahir'], ['Kongres Melayu', '1–4 Mac 1946 · 41 pertubuhan'], ['UMNO', '11 Mei 1946, Johor Bahru'], ['Cession Bill', 'Sarawak · 19–16'], ['Prinsip Kelapan', 'Perlembagaan Sarawak 1941'], ['Rukun 13', 'Sibu · 20 Ogos 1948'], ['Sungkit Berdarah', '3 Dis 1949'], ['SBUB', 'Syarikat Borneo Utara British'], ['BARIP', 'Barisan Pemuda Sabah']];
        kw.forEach(([k, s], i) => {
          const col = i % 2, row = Math.floor(i / 2);
          S.card(`<div class="t-h3" style="font-size:36px">${k}</div><div class="t-label red" style="font-size:28px">${s}</div>`, { color: i % 3 === 0 ? 'gold' : '', anim: 'pop', x: 60 + col * 490, y: 395 + row * 150, w: 470, at: 1 + 0.03 + i * 0.078, pad: '8px 18px', rot: (i % 3 - 1) * 1.4, sfx: i % 2 ? false : 'pop' });
        });
      },
    },
    {
      id: 'q1', bg: 'grid', transition: 'wipe',
      lines: [{ text: 'Kuiz pantas! Soalan satu: Bilakah BMA bermula di Tanah Melayu?', pause: 3.4 }, 'Jawapannya: 12 September 1945!'],
      board: { name: 'Kuiz 1', visual: 'Kad soalan kertas koyak; tiga pilihan jawapan; jam undur 3-2-1; tanda semak pada jawapan betul.', doodle: 'Bulatan kuning undur masa, tanda semak hijau, cop jawapan.', text: 'SOALAN 1/3 · A. 12 September 1945 · B. 1 April 1946 · C. 11 Mei 1946 · JAWAPAN: A', anim: 'Soalan meluncur naik; pilihan meluncur; undur 3-2-1 pop; jawapan dicop dengan bunyi ding.' },
      draw(S, { D }) { quiz(S, D, 1, 'Bilakah BMA bermula di Tanah Melayu?', '12 September 1945', ['12 September 1945', '1 April 1946', '11 Mei 1946']); },
    },
    {
      id: 'q2', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan dua: Siapakah yang mendapatkan tandatangan Raja-raja Melayu untuk Malayan Union?', pause: 3.4 }, 'Jawapannya: Sir Harold MacMichael!'],
      board: { name: 'Kuiz 2', visual: 'Format kuiz yang sama untuk konsistensi.', doodle: 'Undur masa, tanda semak, cop jawapan.', text: 'SOALAN 2/3 · A. H.C. Willan · B. Sir Harold MacMichael · C. Sir Edward Gent · JAWAPAN: B', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 2, 'Siapakah yang mendapatkan tandatangan Raja-raja Melayu untuk Malayan Union?', 'Sir Harold MacMichael', ['H.C. Willan', 'Sir Harold MacMichael', 'Sir Edward Gent']); },
    },
    {
      id: 'q3', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan tiga: Siapakah yang menyerahkan Sabah kepada British?', pause: 3.4 }, 'Jawapannya: SBUB, Syarikat Borneo Utara British! Berapa markah anda?'],
      board: { name: 'Kuiz 3', visual: 'Format kuiz yang sama untuk konsistensi.', doodle: 'Undur masa, tanda semak, cop jawapan.', text: 'SOALAN 3/3 · A. Vyner Brooke · B. Clement Attlee · C. SBUB · JAWAPAN: C', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 3, 'Siapakah yang menyerahkan Sabah kepada British?', 'SBUB', ['Vyner Brooke', 'Clement Attlee', 'SBUB']); },
    },
    {
      id: 'penutup', transition: 'zoom',
      lines: [
        'Nak faham dengan lebih mendalam? Tonton semula Episod 1 hingga 8 dalam siri Bab 4.',
        'Terima kasih kerana belajar bersama **Titik Sejarah**. Jumpa lagi!',
      ],
      tail: 0.8,
      board: {
        name: 'Penutup siri – maskot rasmi',
        visual: 'Maskot rasmi Titik Sejarah tampil besar di tengah; lapan "kad episod" kecil tersusun di bawah sebagai jemputan menonton semula.',
        doodle: 'Pelekat maskot besar (imej asal), lapan kad episod bernombor, bintang.',
        text: 'Tonton semula: EP1 Intro · EP2 4.1 · EP3 4.2 · EP4 4.3 · EP5 4.4 · EP6 4.5 · EP7 4.6 · EP8 4.7 · Terima kasih! Jumpa lagi!',
        anim: 'Maskot zoom-in; kad episod pop satu persatu; bintang berdenyut.',
      },
      draw(S, { D }) {
        S.mascot({ x: 290, y: 300, w: 480, at: 0, d: -0.3, anim: 'zoom', dur: 0.8 });
        const eps = ['EP1 Intro', 'EP2 · 4.1', 'EP3 · 4.2', 'EP4 · 4.3', 'EP5 · 4.4', 'EP6 · 4.5', 'EP7 · 4.6', 'EP8 · 4.7'];
        eps.forEach((e, i) => S.add(`<span class="pill" style="font-size:28px;background:${i % 2 ? '#FFFDF7' : '#F5C928'};white-space:nowrap">${e}</span>`, { anim: 'pop', x: 50 + (i % 4) * 250, y: 830 + Math.floor(i / 4) * 85, w: 240, at: 0, d: 1.8 + i * 0.25, sfx: 'pop' }));
        S.text('Terima kasih!<br><span class="red">Jumpa lagi!</span>', { size: 'h2', x: 60, y: 1050, w: 960, align: 'center', at: 1, d: 0.3 });
        S.add(D.star(), { anim: 'pop', x: 860, y: 1060, w: 110, at: 1, d: 1, pulse: [{ at: 1, d: 1.6 }], sfx: false });
      },
    },
    END,
  ],
};
