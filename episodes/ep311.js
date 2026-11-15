// BAB 3 · EPISOD 11 – Ulang Kaji Lengkap Bab 3 (≈ 3.5–4 min), same format as Chapter 1 EP6.
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM Bab 3 + nota ulang kaji Bab 3 (Rumusan, Tarikh & Tokoh, Fakta Sering Dikelirukan).
import { NAVY, GOLD, RED, BIG, NOW, CH1, head, rows, END, plane, tank, flagJP } from './bab3.js';

function quiz(S, D, n, q, a, opts) {
  S.add(`<span class="pill" style="font-size:36px">SOALAN ${n}/3</span>`, { anim: 'pop', x: 60, y: 300, w: 400, at: 0, d: -0.3 });
  S.card(`<div class="t-h3" style="font-size:50px">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: 390, w: 960, at: 0, d: 0.1 });
  opts.forEach((o, i) => S.card(`<div class="t-body" style="font-size:42px"><b>${'ABC'[i]}.</b> ${o}</div>`, { anim: 'slideR', x: 100, y: 690 + i * 130, w: 880, at: 0, d: 1.2 + i * 0.3, pad: '10px 22px', notape: true, sfx: 'swish' }));
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:130px;height:130px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:76px;color:#172C63">${c}</div>`, { anim: 'pop', x: 860, y: 260, w: 130, at: 0.999, d: 0.15 + i, out: { at: 0.999, d: 1.1 + i }, sfx: 'pop' }));
  const ai = opts.indexOf(a);
  S.add(D.check(), { anim: 'pop', x: 900, y: 700 + ai * 130, w: 80, at: 1, sfx: 'ding' });
  S.stamp(`JAWAPAN: ${a}`, { x: 60, y: 1110, w: 960, at: 1, d: 0.1, fs: 46, style: 'text-align:center;white-space:nowrap' });
}
const sub = (S, no, title) => {
  S.add(`<span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">${no}</span>`, { anim: 'pop', x: 60, y: 290, w: 240, at: 0, d: -0.3 });
  S.text(title, { size: 'h2', x: 310, y: 292, w: 720, at: 0, d: -0.2, style: 'font-size:46px;white-space:nowrap' });
};

export default {
  id: '311',
  file: '11_Bab3_Complete_Revision',
  title: 'Konflik Dunia & Pendudukan Jepun – Apa Yang Kita Perlu Ingat?',
  header: { chip: 'BAB 3 • ULANG KAJI', sub: 'Apa Perlu Ingat?' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3',
  ...CH1,
  music: { key: 64, bpm: 104, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [{ text: 'Ada ujian Sejarah tak lama lagi? Jom ulang kaji **seluruh Bab 3** dalam masa kurang empat minit!', pause: 0.3 }],
      board: { name: 'Hook – ulang kaji pantas', visual: 'Frame pertama lengkap: tajuk "ULANG KAJI BAB 3", kapal terbang, kereta kebal, bendera Jepun; pil "< 4 MINIT".', doodle: 'Kapal terbang, kereta kebal, bendera Jepun, jam.', text: 'ULANG KAJI BAB 3 · < 4 minit', anim: 'Elemen utama pada 0:00; pil pop.', music: 'Whoosh pembuka.' },
      draw(S, { D }) {
        S.add(BIG('ULANG KAJI<br><span class="hl">BAB 3</span>', { fs: 130 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(plane(D), { ...NOW, x: 600, y: 640, w: 400, rot: -8 });
        S.add(tank(D), { ...NOW, x: 70, y: 760, w: 420 });
        S.add(flagJP(D), { ...NOW, x: 640, y: 860, w: 260, rot: 4 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:56px;background:#C93436;color:#FFFDF7">&lt; 4 MINIT</span></div>', { anim: 'pop', x: 40, y: 1120, w: 1000, at: 0, d: 2.6 });
      },
    },
    {
      id: 's31', transition: 'wipe',
      lines: [
        'Tiga titik satu. Sebelum perang, nasionalisme awal dikekang British melalui Enakmen Undang-Undang Islam 1904 dan undang-undang penerbitan.',
        'Ingat: penentangan Tok Janggut di Pasir Puteh, dan Cerita Tekukur dalam akhbar Melayu.',
      ],
      board: { name: '3.1 ringkas', visual: 'Pil 3.1; tiga kad: Enakmen 1904, Tok Janggut (Pasir Puteh), Cerita Tekukur (1920).', doodle: 'Kad.', text: '3.1 · Enakmen Undang-Undang Islam 1904 · undang-undang penerbitan 1915 & 1919 · Tok Janggut (Pasir Puteh) · Cerita Tekukur (1920)', anim: 'Kad muncul mengikut sebutan.' },
      draw(S) {
        sub(S, '3.1', 'Sebelum Perang Dunia');
        rows(S, [['1904', '**Enakmen Undang-Undang Islam** + undang-undang penerbitan (1915, 1919)', 0.3], ['1915', '**Tok Janggut**, Pasir Puteh, Kelantan', 1.3], ['1920', '**Cerita Tekukur** dalam akhbar Melayu', 1.75]], { y0: 430, gap: 230, bw: 170, fs: 40 });
      },
    },
    {
      id: 's32', bg: 'grid', transition: 'paper',
      lines: [
        'Tiga titik dua. Perang Dunia Pertama, 1914 hingga 1918, berpunca daripada persaingan imperialis, pakatan ketenteraan dan krisis Balkan.',
        'Kuasa Tengah berdepan Pakatan Bertiga. Perang tamat dengan Perjanjian Versailles, yang menubuhkan Liga Bangsa-Bangsa.',
      ],
      board: { name: '3.2 ringkas', visual: 'Pil 3.2; tiga faktor; Kuasa Tengah VS Pakatan Bertiga; kad Versailles.', doodle: 'Kad, VS.', text: '3.2 · PD1 1914–1918 · imperialis · pakatan · Balkan · Kuasa Tengah ✕ Pakatan Bertiga · Versailles 1919 · Liga Bangsa-Bangsa', anim: 'Kad muncul mengikut sebutan.' },
      draw(S, { D }) {
        sub(S, '3.2', 'Perang Dunia Pertama');
        ['Imperialis', 'Pakatan', 'Krisis Balkan'].forEach((t, i) => S.add(`<span class="pill" style="font-size:36px">${t}</span>`, { anim: 'pop', x: 60 + i * 330, y: 420, w: 330, at: 0, d: 2.6 + i * 0.6 }));
        S.card('<div class="t-h3" style="text-align:center">KUASA TENGAH</div>', { color: 'gold', anim: 'slideL', x: 50, y: 580, w: 430, at: 1, d: 0 });
        S.add(D.vs(), { anim: 'pop', x: 480, y: 590, w: 120, at: 1, d: 0.6, z: 5 });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">PAKATAN BERTIGA</div>', { color: 'red', anim: 'slideR', x: 600, y: 580, w: 430, at: 1, d: 0.8 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">Versailles (1919) ➜ Liga Bangsa-Bangsa</div>', { color: 'navy', anim: 'stamp', x: 60, y: 820, w: 960, at: 1, d: 2.4 });
      },
    },
    {
      id: 's33-34', transition: 'flip',
      lines: [
        'Tiga titik tiga dan tiga titik empat. Perang Dunia Kedua, 1939 hingga 1945: Kuasa Paksi menentang Kuasa Bersekutu.',
        'Di Eropah, ia berpunca daripada fasisme dan nazisme, ketidakpuasan terhadap Versailles, dan kegagalan Liga Bangsa-Bangsa.',
        'Di Asia Pasifik, peluasan kuasa Jepun dan sekatan ekonomi membawa kepada serangan pada 8 Disember 1941, yang bermula di Kota Bharu.',
      ],
      board: { name: '3.3 & 3.4 ringkas', visual: 'Dua lajur: EROPAH (fasisme, nazisme, Versailles, Liga gagal) & ASIA PASIFIK (peluasan Jepun, sekatan ekonomi, 8 Dis 1941 Kota Bharu).', doodle: 'Kad dua lajur.', text: '3.3 · PD2 1939–1945 · Paksi ✕ Bersekutu · Eropah: fasisme, nazisme, Versailles, Liga gagal · 3.4 · Asia Pasifik: peluasan Jepun + sekatan ekonomi ➜ 8 Dis 1941, bermula di Kota Bharu', anim: 'Lajur muncul mengikut sebutan.' },
      draw(S) {
        sub(S, '3.3–3.4', 'Perang Dunia Kedua');
        S.card('<div class="t-h3" style="text-align:center">KUASA PAKSI <span class="red">✕</span> KUASA BERSEKUTU</div>', { anim: 'pop', x: 80, y: 420, w: 920, at: 0, d: 3.4 });
        S.card('<div class="t-h3 red" style="text-align:center">EROPAH</div><div class="t-body" style="font-size:36px;line-height:1.2">• fasisme &amp; nazisme<br>• tidak puas hati Versailles<br>• Liga Bangsa-Bangsa gagal</div>', { anim: 'slideL', x: 50, y: 610, w: 480, at: 1, d: 0, rot: -1 });
        S.card('<div class="t-h3 red" style="text-align:center">ASIA PASIFIK</div><div class="t-body" style="font-size:36px;line-height:1.2">• peluasan kuasa Jepun<br>• sekatan ekonomi<br>• <b>8 Dis 1941 · Kota Bharu</b></div>', { anim: 'slideR', x: 550, y: 610, w: 480, at: 2, d: 0, rot: 1 });
      },
    },
    {
      id: 's35', bg: 'grid', transition: 'paper',
      lines: [
        'Tiga titik lima. Jepun datang kerana dua faktor: sumber bahan mentah, dan kepentingan strategik ketenteraan.',
        'Melalui serangan kilat, Singapura jatuh pada 15 Februari 1942.',
      ],
      board: { name: '3.5 ringkas', visual: 'Dua kad faktor; cop "15 FEB 1942".', doodle: 'Kad, cop.', text: '3.5 · faktor: bahan mentah + strategik ketenteraan · serangan kilat · Singapura jatuh 15 Feb 1942', anim: 'Kad muncul; cop.' },
      draw(S) {
        sub(S, '3.5', 'Kedatangan Jepun');
        rows(S, [['1', 'Sumber **bahan mentah**: bijih timah, getah, minyak', 0.5], ['2', 'Kepentingan **strategik ketenteraan**', 0.8]], { y0: 440, gap: 200, bw: 110, fs: 42 });
        S.stamp('15 FEB 1942 · SINGAPURA JATUH', { x: 40, y: 900, w: 1000, at: 1, d: 0.6, fs: 54, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 's36', transition: 'flip',
      lines: [
        'Tiga titik enam. Dasar pendudukan Jepun meliputi tiga aspek.',
        'Pentadbiran: pemerintahan tentera dan Kempeitai. Ekonomi: wang pokok pisang, catuan dan buruh paksa. Sosial: Nippon Go, dan layanan berbeza terhadap setiap kaum.',
      ],
      board: { name: '3.6 ringkas', visual: 'Tiga lajur A/B/C dengan kata kunci.', doodle: 'Kad.', text: '3.6 · A Pentadbiran: tentera, Kempeitai · B Ekonomi: wang pokok pisang, catuan, buruh paksa · C Sosial: Nippon Go, layanan kaum berbeza', anim: 'Lajur muncul mengikut sebutan.' },
      draw(S) {
        sub(S, '3.6', 'Dasar Pendudukan');
        rows(S, [['A', '**Pentadbiran**: pemerintahan tentera · Kempeitai', 1, NAVY], ['B', '**Ekonomi**: wang pokok pisang · catuan · buruh paksa', 1.3, RED], ['C', '**Sosial**: Nippon Go · layanan kaum berbeza', 1.7, NAVY]], { y0: 440, gap: 220, bw: 110, fs: 40 });
      },
    },
    {
      id: 's37-38', bg: 'grid', transition: 'paper',
      lines: [
        'Tiga titik tujuh. Rakyat semua kaum menentang Jepun: Askar Melayu, MPAJA, Force 136, gerila Melayu, gerila di Sarawak dan Sabah, serta individu seperti Sybil Kathigasu.',
        'Tiga titik lapan. Pendudukan Jepun menyemarakkan nasionalisme melalui KMM, Giyu Gun, KRIS dan PKMM.',
      ],
      board: { name: '3.7 & 3.8 ringkas', visual: 'Pil penentangan; kad nasionalisme: KMM ➜ Giyu Gun ➜ KRIS ➜ PKMM.', doodle: 'Pil, anak panah.', text: '3.7 · Askar Melayu · MPAJA · Force 136 · gerila Melayu · Sarawak & Sabah · individu · 3.8 · KMM ➜ Giyu Gun ➜ KRIS ➜ PKMM', anim: 'Pil & kad muncul mengikut sebutan.' },
      draw(S) {
        sub(S, '3.7–3.8', 'Tentang &amp; Nasionalisme');
        ['Askar Melayu', 'MPAJA', 'Force 136', 'Gerila Melayu', 'Sarawak &amp; Sabah', 'Individu'].forEach((t, i) => S.add(`<span class="pill" style="font-size:32px;white-space:nowrap;background:${i % 2 ? '#FFFDF7' : '#F5C928'}">${t}</span>`, { anim: 'pop', x: 50 + (i % 3) * 335, y: 420 + Math.floor(i / 3) * 95, w: 335, at: 0, d: 2.2 + i * 0.5 }));
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">KMM ➜ Giyu Gun ➜ KRIS ➜ PKMM</div>', { color: 'navy', anim: 'stamp', x: 60, y: 720, w: 960, at: 1, d: 2.0 });
      },
    },
    {
      id: 's39', transition: 'flip',
      lines: [
        'Tiga titik sembilan. Selepas bom atom di Hiroshima dan Nagasaki, Jepun menyerah kalah pada 15 Ogos 1945.',
        'Bintang Tiga menguasai negara kita lebih kurang empat belas hari, dan ketegangan kaum diredakan melalui rundingan, seperti usaha Dato\' Onn Jaafar.',
      ],
      board: { name: '3.9 ringkas', visual: 'Cop 15 OGOS 1945; kad Bintang Tiga ± 14 hari; kad rundingan Dato\' Onn.', doodle: 'Cop, kad.', text: '3.9 · Hiroshima & Nagasaki · Jepun menyerah 15 Ogos 1945 · Bintang Tiga ± 14 hari · rundingan Dato\' Onn Jaafar', anim: 'Cop; kad muncul.' },
      draw(S) {
        sub(S, '3.9', 'Selepas Jepun Kalah');
        S.stamp('15 OGOS 1945', { x: 140, y: 430, w: 800, at: 0, d: 2.6, fs: 90, style: 'text-align:center;white-space:nowrap' });
        rows(S, [['± 14', '**Bintang Tiga** berkuasa', 1, RED], ['✓', 'Rundingan: **Dato\' Onn Jaafar**', 1.6, '#3A8A4A']], { y0: 680, gap: 200, bw: 140, fs: 42 });
      },
    },
    {
      id: 'tarikh', bg: 'dots', transition: 'zoom',
      lines: [
        'Tarikh paling penting untuk diingat:',
        '8 Disember 1941, Jepun mendarat di Kota Bharu. 15 Februari 1942, Singapura jatuh. 15 Ogos 1945, Jepun menyerah kalah. Dan 12 September 1945, pendudukan Jepun berakhir.',
      ],
      board: { name: 'Tarikh penting', visual: 'Empat baris tarikh besar mengikut sebutan.', doodle: 'Pil tarikh.', text: '8 Dis 1941 Kota Bharu · 15 Feb 1942 Singapura jatuh · 15 Ogos 1945 Jepun menyerah · 12 Sept 1945 pendudukan berakhir', anim: 'Baris muncul mengikut sebutan.' },
      draw(S) {
        head(S, 'Tarikh <span class="hl">Penting</span>');
        rows(S, [['8 DIS 1941', 'Jepun mendarat di **Kota Bharu**', 1.05], ['15 FEB 1942', '**Singapura** jatuh', 1.33], ['15 OGOS 1945', 'Jepun **menyerah kalah**', 1.55], ['12 SEPT 1945', 'Pendudukan Jepun **berakhir**', 1.8]], { y0: 430, gap: 200, bw: 280, fs: 42 });
      },
    },
    {
      id: 'keliru', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Awas, fakta yang sering dikelirukan!', pause: 0.2 },
        'MPAJA ialah gerila PKM. OCAJA pula gerila Kuomintang, atau Tentera Bintang Satu. Manakala Bintang Tiga ialah PKM selepas Jepun kalah. Dan ingat, perang di Asia Pasifik bermula di Kota Bharu, sebelum Pearl Harbour.',
      ],
      board: { name: 'Fakta sering dikelirukan', visual: 'Kad AWAS merah; tiga kad: MPAJA ≠ OCAJA ≠ Bintang Tiga; kad Kota Bharu sebelum Pearl Harbour.', doodle: 'Tanda amaran, kad.', text: 'MPAJA (PKM) ≠ OCAJA (Kuomintang, Tentera Bintang Satu) ≠ Bintang Tiga (PKM selepas Jepun kalah) · Kota Bharu (2.15 pagi) sebelum Pearl Harbour (3.25 pagi)', anim: 'Kad muncul mengikut sebutan.' },
      draw(S) {
        S.card('<div class="t-h2" style="text-align:center;color:#FFFDF7">⚠ AWAS! SERING KELIRU</div>', { color: 'red', anim: 'stamp', x: 80, y: 300, w: 920, at: 0, d: 0 });
        rows(S, [['MPAJA', 'gerila **PKM**', 1.08], ['OCAJA', '**Kuomintang** · Tentera Bintang Satu', 1.25], ['BINTANG 3', '**PKM** selepas Jepun kalah', 1.5]], { y0: 510, gap: 180, bw: 240, fs: 42 });
        S.card('<div class="t-body" style="font-size:38px;text-align:center">Kota Bharu <b>(2.15 pagi)</b> ➜ sebelum Pearl Harbour <b>(3.25 pagi)</b></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1080, w: 960, at: 1.75 });
      },
    },
    {
      id: 'q1', bg: 'grid', transition: 'wipe',
      lines: [{ text: 'Kuiz pantas! Soalan satu: Di manakah tentera Jepun mula mendarat di Tanah Melayu?', pause: 3.4 }, 'Jawapannya: Pantai Kuala Pak Amat, Kota Bharu!'],
      board: { name: 'Kuiz 1', visual: 'Kad soalan kertas koyak; tiga pilihan; undur 3-2-1; tanda semak; cop jawapan.', doodle: 'Undur masa, tanda semak, cop.', text: 'SOALAN 1/3 · A. Pulau Pinang · B. Kota Bharu · C. Johor Bahru · JAWAPAN: B', anim: 'Soalan naik; pilihan meluncur; undur 3-2-1; jawapan dicop.' },
      draw(S, { D }) { quiz(S, D, 1, 'Di manakah tentera Jepun mula mendarat di Tanah Melayu?', 'Kota Bharu', ['Pulau Pinang', 'Kota Bharu', 'Johor Bahru']); },
    },
    {
      id: 'q2', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan dua: Apakah nama polis tentera Jepun yang terkenal kejam?', pause: 3.4 }, 'Jawapannya: Kempeitai!'],
      board: { name: 'Kuiz 2', visual: 'Format kuiz yang sama.', doodle: 'Undur masa, tanda semak, cop.', text: 'SOALAN 2/3 · A. Giyu Tai · B. Koa Kunrenjo · C. Kempeitai · JAWAPAN: C', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 2, 'Apakah nama polis tentera Jepun yang terkenal kejam?', 'Kempeitai', ['Giyu Tai', 'Koa Kunrenjo', 'Kempeitai']); },
    },
    {
      id: 'q3', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan tiga: Apakah perjanjian yang menamatkan Perang Dunia Pertama, dan menubuhkan Liga Bangsa-Bangsa?', pause: 3.4 }, 'Jawapannya: Perjanjian Versailles! Berapa markah anda?'],
      board: { name: 'Kuiz 3', visual: 'Format kuiz yang sama.', doodle: 'Undur masa, tanda semak, cop.', text: 'SOALAN 3/3 · A. Perjanjian Versailles · B. Pakatan Tiga Negara · C. Deklarasi 14 Perkara · JAWAPAN: A', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 3, 'Perjanjian yang menamatkan PD1 &amp; menubuhkan Liga Bangsa-Bangsa?', 'Perjanjian Versailles', ['Perjanjian Versailles', 'Pakatan Tiga Negara', 'Deklarasi 14 Perkara']); },
    },
    {
      id: 'penutup', transition: 'zoom',
      lines: [
        'Nak faham dengan lebih mendalam? Tonton semula Episod 1 hingga 10 dalam siri Bab 3 ini.',
        'Terima kasih kerana belajar bersama **Titik Sejarah**. Jumpa lagi!',
      ],
      tail: 0.8,
      board: { name: 'Penutup', visual: 'Senarai episod siri Bab 3 (1–10); maskot; kad terima kasih.', doodle: 'Maskot, pil episod.', text: 'Tonton semula: EP1 Intro · EP2 3.1 · EP3 3.2 · EP4 3.3 · EP5 3.4 · EP6 3.5 · EP7 3.6 · EP8 3.7 · EP9 3.8 · EP10 3.9 · Terima kasih! Jumpa lagi!', anim: 'Pil episod pop; maskot pop.' },
      draw(S) {
        head(S, 'Tonton <span class="hl">Semula</span>');
        ['EP1 Intro', 'EP2 · 3.1', 'EP3 · 3.2', 'EP4 · 3.3', 'EP5 · 3.4', 'EP6 · 3.5', 'EP7 · 3.6', 'EP8 · 3.7', 'EP9 · 3.8', 'EP10 · 3.9'].forEach((t, i) => S.add(`<span class="pill" style="font-size:32px;white-space:nowrap;background:${i % 2 ? '#FFFDF7' : '#F5C928'}">${t}</span>`, { anim: 'pop', x: 50 + (i % 3) * 335, y: 410 + Math.floor(i / 3) * 90, w: 335, at: 0, d: 0.4 + i * 0.2, sfx: i ? false : 'pop' }));
        S.mascot({ x: 80, y: 800, w: 300, at: 1, d: -0.2 });
        S.card('<div class="t-h2" style="text-align:center">Terima kasih!<br><span class="red">Jumpa lagi!</span></div>', { anim: 'pop', x: 420, y: 840, w: 580, at: 1, d: 0.3 });
      },
    },
    { ...END, minDur: 5 },
  ],
};
