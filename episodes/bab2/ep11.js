// BAB 2 · EPISOD 11 (EKSTRA) – Latihan KBAT: teknik menjawab soalan KBAT gaya Kertas 2 (≈ 6–7 min)
// Soalan ialah soalan LATIHAN yang dibina mengikut gaya soalan KBAT Kertas 2 (bukan soalan sebenar SPM).
// Jawapan contoh hanya menggunakan fakta Bab 2 yang sudah ada dalam EP02–EP09.
import { SRC, RED, NAVY, GOLD, fmt, endScene, examTip } from './lib2.js';

// ---------- KBAT building blocks ----------
// Question card (torn paper) with a mark pill and a "SOALAN n" pill.
function question(S, n, q, marks, o = {}) {
  S.add(`<span class="pill" style="font-size:34px">SOALAN ${n}</span>`, { anim: 'pop', x: 60, y: 295, w: 360, at: 0, d: -0.3 });
  S.add(`<span class="pill" style="font-size:30px;background:#C93436;color:#FFFDF7">${marks} markah</span>`, { anim: 'pop', x: 820, y: 295, w: 220, at: 0, d: 0.2 });
  if (o.stem) S.add('<span class="twtag">GAYA KERTAS 2 · LATIHAN</span>', { anim: 'fade', x: 380, y: 305, w: 420, at: 0, sfx: false });
  return S.card(`<div class="t-h3" style="font-size:${o.fs || 46}px;line-height:1.18">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: o.y ?? 390, w: 960, at: 0, d: 0.1 });
}
// One answer line on "kertas jawapan" with a +1 badge.
function ans(S, i, html, at, d, y, o = {}) {
  S.card(`<div style="display:flex;gap:16px;align-items:flex-start"><div style="flex:none;width:58px;height:58px;border-radius:50%;background:#172C63;color:#F5C928;font-family:Marker;font-size:30px;display:flex;align-items:center;justify-content:center">${i}</div><div class="t-body" style="font-size:${o.fs || 36}px;line-height:1.16">${fmt(html)}</div></div>`,
    { anim: 'slideL', x: 60, y, w: 860, at, d, pad: '10px 18px', notape: true, rot: o.rot ?? 0, sfx: 'scribble' });
  S.add('<div style="font-family:Marker;font-size:40px;color:#3A8A4A;transform:rotate(-8deg)">+1</div>', { anim: 'stamp', x: 940, y: y + 14, w: 90, at, d: d + 0.7, sfx: 'ding' });
}
// Weak (✗) vs strong (✓) comparison cards.
function weakStrong(S, D, weak, strong, atW, atS, y0 = 700) {
  S.card(`<div class="t-label" style="color:#C93436">✗ Jawapan lemah</div><div class="t-body" style="font-size:38px">"${weak}"</div>`, { anim: 'slideL', x: 60, y: y0, w: 960, at: atW, d: 0.2, pad: '10px 22px', rot: -0.8 });
  S.add(D.cross(), { anim: 'stamp', x: 900, y: y0 + 10, w: 90, at: atW, d: 1.2 });
  S.card(`<div class="t-label" style="color:#3A8A4A">✓ Jawapan baik</div><div class="t-body" style="font-size:38px">"${strong}"</div>`, { color: 'gold', anim: 'slideR', x: 60, y: y0 + 230, w: 960, at: atS, d: 0.2, pad: '10px 22px', rot: 0.8 });
  S.add(D.check(), { anim: 'pop', x: 900, y: y0 + 240, w: 90, at: atS, d: 1.6, sfx: 'ding' });
}
// "Pause dan cuba dulu" 3-2-1 countdown during the pause after `at` line.
function tryFirst(S, at) {
  S.add('<span class="pill" style="font-size:30px;background:#FFFDF7">⏸ Pause & cuba jawab dulu!</span>', { anim: 'pop', x: 300, y: 1210, w: 720, at: at + 0.999, d: 0, out: { at: at + 1, d: -0.1 } });
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:120px;height:120px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:70px;color:#172C63">${c}</div>`, { anim: 'pop', x: 120, y: 1170, w: 120, at: at + 0.999, d: 0.15 + i, out: { at: at + 0.999, d: 1.1 + i }, sfx: 'pop' }));
}

export default {
  id: '11',
  file: '11_Bab2_Latihan_KBAT',
  title: 'Latihan KBAT Bab 2 – Teknik Menjawab Soalan KBAT',
  header: { chip: 'BAB 2 • KBAT', sub: 'Latihan KBAT' },
  src: SRC,
  music: { key: 59, bpm: 104, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Nampak soalan **KBAT**, terus panik? Rasa macam tak ada jawapan yang betul?', pause: 0.45 },
        'Jangan risau! Hari ini kita belajar formula mudah untuk menjawab soalan KBAT Bab 2, langkah demi langkah.',
      ],
      board: {
        name: 'Hook – panik nampak soalan KBAT?',
        visual: 'Kertas peperiksaan doodle dengan perkataan "KBAT" merah besar, watak pelajar berpeluh dengan tanda soal; kemudian mentol idea menyala dan cop "ADA FORMULA!".',
        doodle: 'Kertas soalan, watak pelajar (generik), titis peluh, tanda soal, mentol, cop merah.',
        text: '"Panik nampak KBAT?" · ADA FORMULA!',
        anim: 'Kertas dilukis; watak bergoyang (pulse); tanda soal pop; mentol pop pada ayat kedua; cop dihentak.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Panik nampak <span class="red">KBAT</span>?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        S.svg(D.scroll('KBAT', { ts: 54 }), { x: 140, y: 480, w: 300, at: 0, d: 0.8 });
        S.add(D.rakyat({ pose: 'cheer', mood: 'sad' }), { anim: 'pop', x: 560, y: 500, w: 230, at: 0, d: 1.4, pulse: [{ at: 0, d: 2.4 }, { at: 0, d: 3.2 }] });
        S.add(D.question(), { anim: 'pop', x: 820, y: 470, w: 110, at: 0, d: 2.0, out: 1 });
        S.add(D.bulb(), { anim: 'pop', x: 820, y: 470, w: 170, at: 1, d: 0.4 });
        S.stamp('ADA FORMULA!', { x: 200, y: 1010, w: 680, at: 1, d: 2.2, fs: 74, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, episod ekstra Bab 2: **Latihan KBAT**!'],
      board: {
        name: 'Kad tajuk episod ekstra',
        visual: 'Kad tajuk gaya buku nota dengan pil "EPISOD EKSTRA"; maskot rasmi; ikon pensel & kertas jawapan.',
        doodle: 'Pil kuning, garis bawah merah, pelekat maskot (imej asal), pena bulu.',
        text: 'EPISOD EKSTRA · LATIHAN KBAT · Bab 2: Kebangkitan Nasionalisme',
        anim: 'Pil pop, tajuk ditulis (wipe), garis bawah dilukis, maskot pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">EPISOD EKSTRA</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0, d: -0.3 });
        S.text('LATIHAN<br><span class="red">KBAT</span>', { size: 'title', x: 60, y: 430, w: 960, align: 'center', at: 0, dur: 1.2 });
        S.svg(D.underline(420), { x: 330, y: 630, w: 420, at: 0, d: 1.2, dur: 0.5 });
        S.text('Bab 2 · Kebangkitan Nasionalisme', { size: 'label', x: 60, y: 670, w: 960, align: 'center', at: 0, d: 0.6 });
        S.mascot({ x: 380, y: 760, w: 320, at: 0, d: 0.6 });
        S.svg(D.quill(), { x: 760, y: 820, w: 150, at: 0, d: 1.4, sfx: false });
      },
    },
    {
      id: 'apa-kbat', bg: 'grid', transition: 'paper',
      lines: [
        { text: '**KBAT** bermaksud Kemahiran Berfikir Aras Tinggi.', pause: 0.3 },
        'Soalan KBAT bukan sekadar menguji hafalan. Ia meminta anda **mengaplikasi**, **menganalisis**, **menilai** dan **mencipta**.',
        'Berita baiknya: jawapan anda tetap dibina daripada **fakta yang anda sudah tahu**!',
      ],
      board: {
        name: 'Apa itu KBAT?',
        visual: 'Kad DEFINISI "KBAT = Kemahiran Berfikir Aras Tinggi"; tangga empat anak tangga (mengaplikasi ➜ menganalisis ➜ menilai ➜ mencipta); kad emas "fakta + fikir".',
        doodle: 'Kad koyak DEFINISI, tangga berwarna, mentol, buku.',
        text: 'KBAT = Kemahiran Berfikir Aras Tinggi · mengaplikasi · menganalisis · menilai · mencipta · fakta + fikir',
        anim: 'Definisi meluncur naik; anak tangga pop satu demi satu mengikut narasi; kad akhir pop.',
      },
      draw(S, { D }) {
        S.card('<div class="tw" style="font-size:26px;color:#C93436;letter-spacing:3px">DEFINISI</div><div class="t-h3">KBAT</div><div class="t-body" style="font-size:46px">Kemahiran <span class="hl">Berfikir Aras Tinggi</span></div>', { tear: true, anim: 'slideU', x: 60, y: 300, w: 960, at: 0, d: 0, rot: -1 });
        const steps = ['Mengaplikasi', 'Menganalisis', 'Menilai', 'Mencipta'];
        steps.forEach((t, i) => S.card(`<div class="t-h3" style="font-size:29px;text-align:center;${i % 2 ? 'color:#F5C928' : ''}">${t}</div>`, { color: i % 2 ? 'navy' : 'gold', anim: 'slideU', x: 50 + i * 245, y: 880 - i * 80, w: 240, at: 1, d: 3.4 + i * 0.75, pad: '14px 2px', notape: true }));
        S.add(D.bulb(), { anim: 'pop', x: 860, y: 560, w: 140, at: 1, d: 6.5, sfx: false });
        S.card('<div class="t-body" style="font-size:42px;text-align:center"><span class="hl">Fakta yang anda tahu</span> + <span class="hl">cara berfikir</span> = jawapan KBAT</div>', { color: 'gold', anim: 'pop', x: 60, y: 1050, w: 960, at: 2, d: 0.6 });
      },
    },
    {
      id: 'kata-tanya', transition: 'flip',
      lines: [
        { text: 'Langkah pertama: kenal pasti **kata tanya**. Ia memberitahu apa yang pemeriksa mahu.', pause: 0.3 },
        '**Mengapakah** meminta sebab. **Bagaimanakah** meminta cara atau proses.',
        '**Pada pendapat anda** meminta pandangan anda, beserta alasannya.',
        'Manakala **sebagai pelajar** atau **sebagai rakyat Malaysia** meminta tindakan yang anda sendiri boleh lakukan.',
      ],
      board: {
        name: 'Kenal pasti kata tanya',
        visual: 'Jadual dua lajur ala kertas nota: kata tanya (kiri) ➜ apa yang diminta (kanan), muncul baris demi baris.',
        doodle: 'Kanta pembesar, kad baris berwarna, anak panah.',
        text: 'Mengapakah ➜ sebab · Bagaimanakah ➜ cara/proses · Pada pendapat anda ➜ pandangan + alasan · Sebagai pelajar/rakyat ➜ tindakan diri',
        anim: 'Kanta pembesar pop; setiap baris jadual meluncur masuk serentak dengan sebutan.',
      },
      draw(S, { D }) {
        S.text('Kenal pasti <span class="hl">kata tanya</span>', { size: 'h2', x: 70, y: 300, w: 760, at: 0, d: -0.2 });
        S.svg(D.magnifier(), { x: 860, y: 290, w: 140, at: 0, d: 0.6 });
        const rows = [
          ['Mengapakah…?', 'SEBAB', 1, 0.2], ['Bagaimanakah…?', 'CARA / PROSES', 1, 2.4],
          ['Pada pendapat anda…?', 'PANDANGAN + ALASAN', 2, 0.3], ['Sebagai pelajar / rakyat…?', 'TINDAKAN DIRI', 3, 0.8],
        ];
        rows.forEach(([q, a, at, d], i) => {
          S.card(`<div class="t-h3" style="font-size:40px">${q}</div>`, { anim: 'slideL', x: 60, y: 440 + i * 190, w: 520, at, d, pad: '14px 18px', notape: true });
          S.arrow(590, 490 + i * 190, 650, 490 + i * 190, { at, d: d + 0.4, color: RED, bend: 0 });
          S.card(`<div class="t-h3" style="font-size:38px;text-align:center;color:#C93436">${a}</div>`, { color: i % 2 ? '' : 'gold', anim: 'pop', x: 660, y: 440 + i * 190, w: 360, at, d: d + 0.6, pad: '14px 8px', notape: true });
        });
      },
    },
    {
      id: 'formula', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Langkah kedua: guna formula **I-H-C**. **Isi**, **Huraian**, dan **Contoh**.', pause: 0.3 },
        '**Isi** ialah jawapan utama, dalam satu ayat yang jelas. **Huraian** menerangkan sebab atau kesannya. **Contoh** pula menyokong isi dengan fakta atau peristiwa.',
        'Ingat: biasanya **satu isi yang tepat bernilai satu markah**. Jadi, soalan empat markah memerlukan sekurang-kurangnya empat isi yang berbeza.',
      ],
      board: {
        name: 'Formula I-H-C + kira markah',
        visual: 'Tiga bulatan besar I · H · C dengan label; kertas jawapan; kira markah "4 markah = 4 isi berbeza"; tag PETUA.',
        doodle: 'Bulatan merah/navy/kuning, kertas jawapan, lencana +1.',
        text: 'PETUA: I-H-C = Isi · Huraian · Contoh · 1 isi tepat ≈ 1 markah · 4 markah ➜ 4 isi berbeza',
        anim: 'Bulatan pop satu demi satu; penerangan meluncur; kad kira markah dicop.',
      },
      draw(S) {
        S.text('Formula <span class="hl">I-H-C</span>', { size: 'h2', x: 70, y: 300, w: 700, at: 0, d: -0.2 });
        S.add('<span class="twtag">PETUA MENJAWAB</span>', { anim: 'fade', x: 760, y: 320, w: 260, at: 0, sfx: false });
        const F = [['I', 'Isi', 'jawapan utama, satu ayat jelas', RED, 0.6], ['H', 'Huraian', 'terangkan sebab / kesan', NAVY, 2.6], ['C', 'Contoh', 'fakta / peristiwa sokongan', '#C9A000', 5.6]];
        F.forEach(([c, w, desc, col, d], i) => {
          S.add(`<div style="width:150px;height:150px;border-radius:50%;background:${col};border:6px solid #172C63;color:#F5C928;font-family:Marker;font-size:86px;display:flex;align-items:center;justify-content:center">${c}</div>`, { anim: 'pop', x: 80 + i * 320, y: 420, w: 150, at: i ? 1 : 0, d: i ? d : 3.0 });
          S.text(w, { size: 'h3', x: 40 + i * 320, y: 590, w: 240, align: 'center', at: i ? 1 : 0, d: (i ? d : 3.0) + 0.2 });
          S.card(`<div class="t-body" style="font-size:34px;text-align:center">${desc}</div>`, { anim: 'slideU', x: 50 + i * 320, y: 660, w: 300, at: 1, d: [0.8, 3.0, 6.0][i], pad: '8px 10px', notape: true });
        });
        S.card('<div class="t-h3" style="text-align:center;font-size:46px">1 isi tepat ≈ <span class="red">1 markah</span></div><div class="t-body" style="text-align:center;font-size:40px">4 markah ➜ <span class="hl">4 isi berbeza</span></div>', { color: 'gold', anim: 'stamp', x: 140, y: 880, w: 800, at: 2, d: 1.6, rot: -2 });
      },
    },
    // ---------- Soalan 1 ----------
    {
      id: 's1-soalan', transition: 'paper',
      lines: [
        { text: 'Jom cuba soalan pertama. Pada pendapat anda, mengapakah kita perlu meneladani perjuangan pemimpin terdahulu? Empat markah.', pause: 3.4 },
        'Kata kuncinya: **pada pendapat anda**, **mengapakah**, dan **meneladani**. Maksudnya, beri pandangan anda tentang sebab kita perlu mencontohi mereka.',
      ],
      board: {
        name: 'Soalan 1 – pendapat (2.1)',
        visual: 'Kad soalan kertas koyak dengan pil "4 markah"; jam undur 3-2-1; kata kunci digaris dengan penyerlah kuning.',
        doodle: 'Kad soalan, bulatan undur masa, penyerlah, kanta pembesar.',
        text: 'SOALAN 1 (4 markah): "Pada pendapat anda, mengapakah kita perlu meneladani perjuangan pemimpin terdahulu?" · kata kunci: pada pendapat anda · mengapakah · meneladani',
        anim: 'Soalan meluncur naik; undur 3-2-1; kata kunci diserlah satu demi satu.',
      },
      draw(S, { D }) {
        question(S, 1, 'Pada pendapat anda, mengapakah kita perlu <b>meneladani perjuangan pemimpin terdahulu</b>?', 4, { stem: true });
        tryFirst(S, 0);
        const kw = [['pada pendapat anda', 'pandangan saya'], ['mengapakah', 'sebab'], ['meneladani', 'mencontohi']];
        kw.forEach(([k, m], i) => S.card(`<div class="t-h3" style="font-size:38px"><span class="hl">${k}</span></div><div class="t-label" style="color:#C93436">= ${m}</div>`, { anim: 'pop', x: 60 + i * 325, y: 700, w: 310, at: 1, d: 0.8 + i * 0.7, pad: '10px 14px', notape: true, rot: (i - 1) * 1.5 }));
        S.svg(D.magnifier(), { x: 860, y: 900, w: 120, at: 1, d: 0.3, sfx: false });
      },
    },
    {
      id: 's1-banding', transition: 'flip',
      lines: [
        'Ramai pelajar menulis jawapan seperti ini: "Sebab mereka hebat." Jawapan ini terlalu umum, dan tidak menerangkan apa-apa.',
        'Cuba tulis begini: "Supaya kita menghargai pengorbanan mereka mempertahankan tanah air daripada penjajah." Isinya jelas dan tepat!',
      ],
      board: {
        name: 'Soalan 1 – jawapan lemah vs baik',
        visual: 'Dua kad jawapan: lemah (pangkah merah) dan baik (tanda semak hijau), dengan nota "terlalu umum" vs "isi jelas".',
        doodle: 'Kad putih & kuning, pangkah merah, tanda semak hijau.',
        text: '✗ "Sebab mereka hebat." (terlalu umum) · ✓ "Supaya kita menghargai pengorbanan mereka mempertahankan tanah air daripada penjajah."',
        anim: 'Kad lemah meluncur dari kiri & dipangkah; kad baik meluncur dari kanan & ditanda semak.',
      },
      draw(S, { D }) {
        S.text('Lemah <span class="red">vs</span> Baik', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        S.add('<span class="pill" style="font-size:28px">S1 · 4 markah</span>', { anim: 'pop', x: 760, y: 310, w: 260, at: 0, d: -0.2 });
        weakStrong(S, D, 'Sebab mereka hebat.', 'Supaya kita <span class="hl">menghargai pengorbanan</span> mereka mempertahankan tanah air daripada penjajah.', 0, 1, 430);
        S.text('terlalu umum ✗', { size: 'note', x: 640, y: 560, w: 300, at: 0, d: 4.0 });
      },
    },
    {
      id: 's1-jawapan', bg: 'lined', transition: 'slideUp', gap: 0.3,
      lines: [
        { text: 'Inilah contoh jawapan penuh. Empat isi, empat markah.', pause: 0.2 },
        'Satu, menghargai pengorbanan mereka mempertahankan kedaulatan tanah air.',
        'Dua, memupuk semangat cinta akan negara dalam diri kita.',
        'Tiga, menjadikan mereka sumber inspirasi untuk berusaha gigih dalam kehidupan.',
        'Empat, membantu kita mengekalkan kemerdekaan dan kedaulatan negara hari ini.',
      ],
      board: {
        name: 'Soalan 1 – contoh jawapan 4 isi',
        visual: 'Kertas jawapan bergaris: empat baris isi bernombor muncul satu demi satu, setiap satu dengan cop hijau "+1"; jumlah 4/4.',
        doodle: 'Kertas jawapan, bulatan nombor navy, cop "+1", bintang.',
        text: '1 Hargai pengorbanan mempertahankan kedaulatan · 2 Pupuk semangat cinta akan negara · 3 Sumber inspirasi untuk berusaha gigih · 4 Kekalkan kemerdekaan & kedaulatan negara · 4/4',
        anim: 'Setiap isi ditulis (scribble) mengikut narasi; cop +1 dihentak dengan bunyi ding; markah akhir dicop.',
      },
      draw(S, { D }) {
        S.text('Contoh jawapan <span class="hl">S1</span>', { size: 'h2', x: 70, y: 300, w: 700, at: 0, d: -0.2 });
        const pts = ['Menghargai **pengorbanan** mereka mempertahankan kedaulatan tanah air.', 'Memupuk semangat **cinta akan negara** dalam diri.', 'Menjadikan mereka **sumber inspirasi** untuk berusaha gigih.', 'Membantu **mengekalkan kemerdekaan** & kedaulatan negara.'];
        pts.forEach((p, i) => ans(S, i + 1, p, i + 1, 0.1, 420 + i * 165));
        S.stamp('4/4 MARKAH', { x: 600, y: 1100, w: 420, at: 4, d: 1.8, fs: 56, style: 'text-align:center' });
      },
    },
    // ---------- Soalan 2 (berdasarkan petikan) ----------
    {
      id: 's2-soalan', transition: 'paper',
      lines: [
        { text: 'Soalan kedua menggunakan petikan. Baca petikan ini dahulu.', pause: 0.6 },
        { text: 'Soalannya: Berdasarkan petikan, bagaimanakah akhbar dan majalah membangkitkan semangat nasionalisme? Tiga markah.', pause: 3.4 },
        'Kata tanya **bagaimanakah** bermaksud anda perlu terangkan **cara**. Gabungkan fakta daripada petikan dengan pengetahuan anda daripada Bab 2.',
      ],
      board: {
        name: 'Soalan 2 – berdasarkan petikan (2.6)',
        visual: 'Kotak petikan bergaya mesin taip (petikan ringkas yang diolah daripada fakta Bab 2); kad soalan; undur 3-2-1; kata kunci "bagaimanakah = cara".',
        doodle: 'Kotak petikan bertepi navy, akhbar mini, kad soalan, bulatan undur masa.',
        text: 'Petikan (diolah): "Akhbar dan majalah seperti Jawi Peranakan, Al-Imam dan Fajar Sarawak menjadi saluran penting golongan nasionalis." · SOALAN 2 (3 markah): Bagaimanakah akhbar dan majalah membangkitkan semangat nasionalisme? · bagaimanakah = cara',
        anim: 'Petikan ditaip (wipe); soalan meluncur naik; undur 3-2-1; kad kata kunci pop.',
      },
      draw(S, { D }) {
        S.add('<span class="pill" style="font-size:34px">SOALAN 2</span>', { anim: 'pop', x: 60, y: 295, w: 360, at: 0, d: -0.3 });
        S.add('<span class="pill" style="font-size:30px;background:#C93436;color:#FFFDF7">3 markah</span>', { anim: 'pop', x: 820, y: 295, w: 220, at: 1, d: 0 });
        S.add('<div style="background:#FFFDF7;border:4px solid #172C63;border-left:14px solid #172C63;padding:18px 24px;box-shadow:6px 7px 0 rgba(23,44,99,.85)"><div class="tw" style="font-size:22px;color:#C93436;letter-spacing:2px">PETIKAN (DIOLAH)</div><div class="tw" style="font-size:34px;line-height:1.35;color:#172C63">Akhbar dan majalah seperti Jawi Peranakan, Al-Imam dan Fajar Sarawak menjadi saluran penting kepada golongan nasionalis.</div></div>', { anim: 'wipe', x: 60, y: 390, w: 960, at: 0, d: 0.3, dur: 1.6 });
        S.card('<div class="t-h3" style="font-size:44px;line-height:1.18">Berdasarkan petikan, <b>bagaimanakah</b> akhbar dan majalah membangkitkan semangat nasionalisme?</div>', { tear: true, anim: 'slideU', x: 60, y: 720, w: 960, at: 1, d: 0.1 });
        tryFirst(S, 1);
        S.card('<div class="t-h3" style="font-size:36px;text-align:center"><span class="hl">bagaimanakah</span> = <span class="red">CARA</span> · petikan + fakta Bab 2</div>', { color: 'gold', anim: 'pop', x: 60, y: 1010, w: 960, at: 2, d: 0.5, pad: '12px 18px' });
      },
    },
    {
      id: 's2-jawapan', bg: 'lined', transition: 'slideUp', gap: 0.3,
      lines: [
        { text: 'Lihat bagaimana setiap isi menyatakan cara, dan disokong dengan contoh.', pause: 0.2 },
        'Satu, menyebarkan idea pembaharuan kepada masyarakat, contohnya majalah Al-Imam.',
        'Dua, mengkritik dasar penjajah, contohnya Fajar Sarawak yang mengkritik pemerintahan Brooke.',
        'Tiga, menegur campur tangan British dalam hal ehwal agama Islam, contohnya akhbar Jawi Peranakan.',
      ],
      board: {
        name: 'Soalan 2 – contoh jawapan (isi + contoh)',
        visual: 'Kertas jawapan: tiga isi bernombor; perkataan "contohnya" diserlah merah untuk menunjukkan bahagian C dalam formula I-H-C; cop +1.',
        doodle: 'Kertas jawapan, bulatan nombor, cop "+1", akhbar mini.',
        text: '1 Sebar idea pembaharuan (cth. Al-Imam) · 2 Kritik dasar penjajah (cth. Fajar Sarawak – Brooke) · 3 Tegur campur tangan British dalam hal Islam (cth. Jawi Peranakan) · 3/3',
        anim: 'Setiap isi ditulis mengikut narasi; cop +1; label "I + C" pop.',
      },
      draw(S, { D }) {
        S.text('Contoh jawapan <span class="hl">S2</span>', { size: 'h2', x: 70, y: 300, w: 700, at: 0, d: -0.2 });
        S.add('<span class="pill" style="font-size:28px;background:#FFFDF7">Isi + <span class="red">Contoh</span></span>', { anim: 'pop', x: 760, y: 310, w: 260, at: 0, d: 0.6 });
        const pts = ['**Menyebarkan idea pembaharuan** kepada masyarakat, <span class="red">contohnya</span> majalah Al-Imam.', '**Mengkritik dasar penjajah**, <span class="red">contohnya</span> Fajar Sarawak mengkritik pemerintahan Brooke.', '**Menegur campur tangan British** dalam hal ehwal agama Islam, <span class="red">contohnya</span> Jawi Peranakan.'];
        pts.forEach((p, i) => ans(S, i + 1, p, i + 1, 0.1, 430 + i * 200));
        S.stamp('3/3 MARKAH', { x: 600, y: 1080, w: 420, at: 3, d: 2.6, fs: 56, style: 'text-align:center' });
      },
    },
    // ---------- Soalan 3 (perbandingan) ----------
    {
      id: 's3-soalan', transition: 'flip',
      lines: [
        { text: 'Soalan ketiga ialah soalan perbandingan. Apakah perbezaan cara perjuangan Mahatma Gandhi dengan Bal Gangadhar Tilak di India?', pause: 3.4 },
        'Untuk soalan perbezaan, gunakan teknik **manakala**: sebut pihak pertama, kemudian pihak kedua, dalam satu ayat yang sama.',
        'Contohnya: "Mahatma Gandhi berpegang kepada satyagraha, iaitu berpegang teguh kepada kebenaran, **manakala** Bal Gangadhar Tilak menggerakkan penentangan secara militan terhadap British."',
        'Jika anda menyebut satu pihak sahaja, perbandingan itu tidak lengkap!',
      ],
      board: {
        name: 'Soalan 3 – perbandingan (2.3) & teknik "manakala"',
        visual: 'Kad soalan; dua lajur VS (Gandhi | Tilak) dengan watak generik; ayat contoh dengan perkataan "manakala" dicop di tengah; amaran "satu pihak sahaja = tidak lengkap".',
        doodle: 'Lencana VS, dua watak generik bertag nama, cop "MANAKALA", tanda amaran.',
        text: 'SOALAN 3: Perbezaan cara perjuangan Mahatma Gandhi dengan Bal Gangadhar Tilak · Gandhi: satyagraha (berpegang teguh kepada kebenaran) MANAKALA Tilak: penentangan militan terhadap British · sebut kedua-dua pihak',
        anim: 'Soalan meluncur naik; undur 3-2-1; dua lajur pop; cop "MANAKALA" dihentak; amaran pop.',
      },
      draw(S, { D }) {
        question(S, 3, 'Apakah <b>perbezaan</b> cara perjuangan <b>Mahatma Gandhi</b> dengan <b>Bal Gangadhar Tilak</b>?', 2, { stem: true, fs: 42 });
        tryFirst(S, 0);
        S.svg(D.person({ hat: 'cap', shirt: '#FFFDF7', pants: '#FFFDF7', glasses: true, pose: 'present' }), { x: 90, y: 640, w: 130, at: 1, d: 0, dur: 0.8 });
        S.tag('Mahatma Gandhi', '', { x: 60, y: 820, w: 260, at: 1, d: 0.3 });
        S.add(D.vs(), { anim: 'pop', x: 470, y: 690, w: 140, at: 1, d: 0.6 });
        S.svg(D.person({ hat: 'hair', shirt: '#C93436', moustache: true, pose: 'up' }), { x: 860, y: 640, w: 130, at: 1, d: 0.4, dur: 0.8 });
        S.tag('Bal Gangadhar Tilak', '', { x: 700, y: 820, w: 320, at: 1, d: 0.7, sfx: false });
        S.card('<div class="t-body" style="font-size:34px;line-height:1.2">Gandhi berpegang kepada <span class="hl">satyagraha</span> (berpegang teguh kepada kebenaran), <b class="red">MANAKALA</b> Tilak menggerakkan penentangan <span class="hl">secara militan</span> terhadap British.</div>', { color: 'gold', anim: 'slideU', x: 60, y: 920, w: 960, at: 2, d: 0.3, pad: '12px 22px' });
        S.stamp('MANAKALA', { x: 360, y: 1080, w: 360, at: 1, d: 3.6, fs: 50, style: 'text-align:center' });
        S.card('<div class="t-body" style="font-size:36px;text-align:center">⚠️ Sebut <b>satu pihak sahaja</b> = perbandingan <span class="red">tidak lengkap</span></div>', { anim: 'pop', x: 140, y: 1190, w: 800, at: 3, d: 0.2, pad: '8px 14px', notape: true });
      },
    },
    // ---------- Soalan 4 (sebagai pelajar) ----------
    {
      id: 's4-soalan', transition: 'paper',
      lines: [
        { text: 'Soalan terakhir. Sebagai pelajar, bagaimanakah anda boleh memanfaatkan media massa untuk mengekalkan kedaulatan negara? Empat markah.', pause: 3.4 },
        'Untuk soalan **sebagai pelajar**, mulakan setiap isi dengan **"Saya akan…"**, dan pastikan tindakan itu realistik untuk seorang pelajar.',
      ],
      board: {
        name: 'Soalan 4 – sebagai pelajar (2.8)',
        visual: 'Kad soalan; undur 3-2-1; kad tip "Mulakan dengan: Saya akan…"; ikon telefon/akhbar media.',
        doodle: 'Kad soalan, akhbar "MEDIA", pena, kad tip kuning.',
        text: 'SOALAN 4 (4 markah): Sebagai pelajar, bagaimanakah anda boleh memanfaatkan media massa untuk mengekalkan kedaulatan negara? · Mulakan dengan "Saya akan…" · tindakan realistik',
        anim: 'Soalan meluncur naik; undur 3-2-1; kad tip dicop.',
      },
      draw(S, { D }) {
        question(S, 4, '<b>Sebagai pelajar</b>, bagaimanakah anda boleh <b>memanfaatkan media massa</b> untuk mengekalkan kedaulatan negara?', 4, { stem: true, fs: 42 });
        tryFirst(S, 0);
        S.svg(D.newspaper('MEDIA', { ts: 34 }), { x: 80, y: 700, w: 200, at: 1, d: 0 });
        S.card('<div class="t-h3" style="font-size:46px">Mulakan dengan:</div><div class="t-h2" style="color:#C93436">"Saya akan…"</div><div class="t-body" style="font-size:36px">tindakan <span class="hl">realistik</span> untuk pelajar</div>', { color: 'gold', anim: 'stamp', x: 320, y: 700, w: 700, at: 1, d: 1.6, rot: -1.5 });
      },
    },
    {
      id: 's4-jawapan', bg: 'lined', transition: 'slideUp', gap: 0.3,
      lines: [
        { text: 'Contoh jawapan empat isi:', pause: 0.2 },
        'Saya akan menyemak kesahihan sesuatu maklumat sebelum berkongsi.',
        'Saya tidak akan menyebarkan berita palsu yang boleh menggugat keharmonian negara.',
        'Saya akan berkongsi kandungan yang memupuk perpaduan dan semangat patriotik.',
        'Saya akan menggunakan media sosial untuk mempromosikan sejarah dan keunikan negara kita.',
      ],
      board: {
        name: 'Soalan 4 – contoh jawapan "Saya akan…"',
        visual: 'Kertas jawapan: empat isi "Saya akan…" bernombor, cop +1; jumlah 4/4.',
        doodle: 'Kertas jawapan, bulatan nombor, cop "+1".',
        text: '1 Semak kesahihan maklumat · 2 Tidak sebar berita palsu · 3 Kongsi kandungan perpaduan & patriotik · 4 Promosi sejarah & keunikan negara · 4/4',
        anim: 'Setiap isi ditulis mengikut narasi; cop +1; markah akhir dicop.',
      },
      draw(S) {
        S.text('Contoh jawapan <span class="hl">S4</span>', { size: 'h2', x: 70, y: 300, w: 700, at: 0, d: -0.2 });
        const pts = ['Saya akan **menyemak kesahihan** maklumat sebelum berkongsi.', 'Saya **tidak akan menyebarkan berita palsu** yang menggugat keharmonian.', 'Saya akan berkongsi kandungan yang memupuk **perpaduan & semangat patriotik**.', 'Saya akan **mempromosikan sejarah** & keunikan negara di media sosial.'];
        pts.forEach((p, i) => ans(S, i + 1, p, i + 1, 0.1, 420 + i * 165));
        S.stamp('4/4 MARKAH', { x: 600, y: 1100, w: 420, at: 4, d: 2.2, fs: 56, style: 'text-align:center' });
      },
    },
    {
      id: 'kesilapan', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Elakkan lima kesilapan biasa ini.', pause: 0.2 },
        'Satu, jawapan satu perkataan. Dua, mengulang isi yang sama dengan perkataan berbeza.',
        'Tiga, menyalin semula soalan atau petikan bulat-bulat. Empat, jawapan yang terkeluar daripada kehendak soalan.',
        'Dan lima, ayat yang terlalu panjang dan berbelit. Satu isi yang jelas lebih baik daripada satu perenggan yang mengelirukan!',
      ],
      board: {
        name: '5 kesilapan biasa',
        visual: 'Lima kad bernombor dengan pangkah merah, ditampal satu demi satu; kad akhir emas "1 isi jelas > 1 perenggan mengelirukan".',
        doodle: 'Kad putih, pangkah merah, pita kuning.',
        text: '✗ Jawapan satu perkataan · ✗ Ulang isi sama · ✗ Salin soalan/petikan · ✗ Terkeluar kehendak soalan · ✗ Ayat terlalu panjang & berbelit',
        anim: 'Kad pop berpasangan mengikut narasi; pangkah dicop.',
      },
      draw(S, { D }) {
        S.text('<span class="red">5 KESILAPAN</span> biasa', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        const m = [['Jawapan satu perkataan', 1, 0.2], ['Ulang isi yang sama', 1, 2.6], ['Salin soalan / petikan', 2, 0.2], ['Terkeluar kehendak soalan', 2, 3.6], ['Ayat terlalu panjang & berbelit', 3, 0.6]];
        m.forEach(([t, at, d], i) => {
          const x = 60 + (i % 2) * 490, y = 410 + Math.floor(i / 2) * 175;
          S.card(`<div style="display:flex;gap:14px;align-items:center"><div class="t-big" style="font-size:64px;color:#C93436">${i + 1}</div><div class="t-body" style="font-size:36px;line-height:1.1">${t}</div></div>`, { anim: 'pop', x, y, w: 470, at, d, pad: '10px 16px', rot: (i % 2 ? 1 : -1), notape: true });
          S.add(D.cross(), { anim: 'stamp', x: x + 390, y: y + 70, w: 60, at, d: d + 0.6, sfx: false });
        });
        S.card('<div class="t-body" style="font-size:40px;text-align:center"><b>1 isi jelas</b> &gt; 1 perenggan mengelirukan</div>', { color: 'gold', anim: 'pop', x: 560, y: 760, w: 460, at: 3, d: 3.4, pad: '12px 16px' });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe', gap: 0.25,
      lines: [
        { text: 'Recap! Empat langkah menjawab soalan KBAT:', pause: 0.2 },
        'Satu, garis kata tanya dan kata kunci.',
        'Dua, kira markah untuk tahu berapa isi diperlukan.',
        'Tiga, tulis setiap isi dengan formula I-H-C.',
        'Empat, semak semula: setiap isi mesti berbeza, jelas, dan menjawab soalan.',
      ],
      board: {
        name: 'Recap: 4 langkah menjawab KBAT + tip SPM',
        visual: 'Senarai semak empat langkah dengan kotak bertanda semak; kad TIP SPM di bawah.',
        doodle: 'Kotak semak, tanda semak hijau, lencana TIP SPM.',
        text: '1 Garis kata tanya & kata kunci · 2 Kira markah = bilangan isi · 3 Tulis I-H-C · 4 Semak: berbeza, jelas, menjawab soalan · TIP SPM: tulis satu isi tambahan sebagai simpanan',
        anim: 'Setiap langkah ditanda semak mengikut narasi; tip SPM meluncur naik.',
      },
      draw(S, { D }) {
        S.text('4 LANGKAH <span class="hl">KBAT</span>', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        const st = ['Garis <b>kata tanya</b> & kata kunci', 'Kira <b>markah</b> = bilangan isi', 'Tulis dengan formula <b>I-H-C</b>', '<b>Semak</b>: berbeza · jelas · menjawab soalan'];
        st.forEach((t, i) => {
          S.card(`<div class="t-body" style="font-size:42px">${i + 1}. ${t}</div>`, { anim: 'slideL', x: 60, y: 410 + i * 150, w: 840, at: i + 1, pad: '14px 22px', notape: true, color: i % 2 ? 'gold' : '' });
          S.add(D.check(), { anim: 'pop', x: 920, y: 420 + i * 150, w: 90, at: i + 1, d: 0.8, sfx: false });
        });
        examTip(S, 'Masa mencukupi? Tulis <span class="hl">satu isi tambahan</span> sebagai simpanan.', 4, { d: 3.0, y: 1030 });
      },
    },
    {
      id: 'bonus', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Sekarang giliran anda! Soalan bonus: Pada pendapat anda, mengapakah golongan intelektual penting dalam perkembangan nasionalisme di negara kita?', pause: 0.4 },
        'Tulis jawapan anda menggunakan formula I-H-C di ruang komen. Jom kita bincang bersama!',
      ],
      board: {
        name: 'Soalan bonus – cabaran komen',
        visual: 'Kad soalan bonus besar dengan bintang; ikon gelembung komen; maskot rasmi menunjuk ke kad.',
        doodle: 'Kad soalan, bintang berdenyut, gelembung komen, pelekat maskot.',
        text: 'SOALAN BONUS: Pada pendapat anda, mengapakah golongan intelektual penting dalam perkembangan nasionalisme di negara kita? · Jawab di ruang komen guna I-H-C 👇',
        anim: 'Kad soalan meluncur naik; bintang berdenyut; maskot & gelembung komen pop pada ayat kedua.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px">SOALAN BONUS</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.2 });
        S.card('<div class="t-h3" style="font-size:46px;line-height:1.2">Pada pendapat anda, mengapakah <span class="hl">golongan intelektual</span> penting dalam perkembangan nasionalisme di negara kita?</div>', { tear: true, anim: 'slideU', x: 60, y: 400, w: 960, at: 0, d: 0.3 });
        S.add(D.star(), { anim: 'pop', x: 900, y: 360, w: 110, at: 0, d: 1.0, pulse: [{ at: 0, d: 2.0 }], sfx: false });
        S.mascot({ x: 90, y: 780, w: 320, at: 1, d: -0.2 });
        S.add('<div class="bubble" style="font-size:44px;text-align:center">Jawab di <b class="red">ruang komen</b> 👇<br>guna <span class="hl">I-H-C</span>!</div>', { anim: 'pop', x: 460, y: 840, w: 560, at: 1, d: 0.6 });
      },
    },
    {
      id: 'penutup', transition: 'paper', tail: 0.9,
      lines: [
        { text: 'Ringkasnya, soalan KBAT bukan untuk ditakuti. Faham kata tanya, kira markah, dan jawab dengan isi yang jelas.', pause: 0.3 },
        'Ulang kaji fakta Bab 2 dalam episod sebelum ini, dan jumpa lagi dalam Bab 3!',
      ],
      board: {
        name: 'Rumusan & seruan',
        visual: 'Kad rumusan emas; maskot rasmi menunjuk ke kad "Seterusnya: Bab 3".',
        doodle: 'Pelekat maskot, anak panah merah, kad Bab 3, bintang.',
        text: 'KBAT: faham kata tanya · kira markah · isi jelas · Seterusnya: Bab 3 – Konflik Dunia dan Pendudukan Jepun di Negara Kita',
        anim: 'Kad rumusan pop; maskot pop; anak panah dilukis; kad Bab 3 pop.',
      },
      draw(S, { D }) {
        S.text('Ringkasnya…', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        S.card('<div class="t-body" style="font-size:44px;line-height:1.2">Faham <span class="hl">kata tanya</span> ➜ kira <span class="hl">markah</span> ➜ tulis <span class="hl">isi yang jelas</span> (I-H-C)</div>', { color: 'gold', anim: 'pop', x: 70, y: 400, w: 940, at: 0, d: 0.3, rot: -1 });
        S.mascot({ x: 90, y: 760, w: 360, at: 1, d: -0.3 });
        S.arrow(470, 900, 600, 1060, { at: 1, d: 0.4, color: RED, bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Seterusnya</div><div class="t-h3" style="font-size:40px">Bab 3: Konflik Dunia dan Pendudukan Jepun di Negara Kita</div>', { x: 480, y: 1070, w: 540, at: 1, d: 0.7, rot: 1.5 });
      },
    },
    endScene(),
  ],
};
