// BAB 2 · EPISOD 12 (EKSTRA, BAHAGIAN 2) – Latihan KBAT Bahagian B: Soalan Esei Kertas 2 (≈ 7–8 min)
// Soalan esei ialah soalan LATIHAN gaya Kertas 2 (bukan soalan sebenar SPM). Fakta jawapan contoh daripada EP02–EP09.
// Format: Bahagian B = pilih 3 daripada 5 soalan esei, 20 markah setiap satu (laporan analisis SPM 2024 & kertas percubaan).
import { SRC, RED, NAVY, GOLD, fmt, endScene, examTip } from './lib2.js';

// Essay paragraph card with coloured I / H / C labels.
function para(S, parts, at, y, o = {}) {
  const col = { I: '#C93436', H: '#172C63', C: '#C9A000', K: '#3A8A4A' };
  const html = parts.map(([k, t]) => `<span style="display:inline-block;font-family:Marker;font-size:24px;color:#FFFDF7;background:${col[k]};border-radius:8px;padding:0 8px;margin-right:6px;vertical-align:2px">${k}</span>${fmt(t)}`).join(' ');
  return S.card(`<div class="t-body" style="font-size:${o.fs || 34}px;line-height:1.3">${html}</div>`, { color: o.color || '', anim: 'slideU', x: 60, y, w: 960, at, d: o.d || 0, pad: '14px 22px', rot: o.rot ?? 0, sfx: 'scribble' });
}

export default {
  id: '12',
  file: '12_Bab2_Latihan_KBAT_B_Esei',
  title: 'Latihan KBAT Bab 2 (2) – Bahagian B: Soalan Esei',
  header: { chip: 'BAB 2 • KBAT B', sub: 'Esei' },
  src: SRC,
  music: { key: 62, bpm: 102, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Esei dua puluh markah, tapi idea tak cukup? Atau tulis panjang berjela, tapi markahnya sikit?', pause: 0.45 },
        'Hari ini kita belajar cara menjawab soalan KBAT **esei** dengan bijak, cepat dan tersusun!',
      ],
      board: {
        name: 'Hook – esei panjang, markah sikit?',
        visual: 'Kertas jawapan panjang bergulung dengan cop "20 MARKAH?"; jam berdetik; kemudian perenggan tersusun dengan tanda semak.',
        doodle: 'Skrol panjang, jam loceng, tanda soal, perenggan bertanda semak, cop merah.',
        text: '"Esei 20 markah?" · panjang ≠ markah · TERSUSUN!',
        anim: 'Skrol dilukis; jam bergoyang; tanda soal pop; cop "TERSUSUN!" dihentak pada ayat kedua.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Esei <span class="red">20 markah</span>?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        S.svg(D.scroll('ESEI', { ts: 50 }), { x: 130, y: 470, w: 300, at: 0, d: 0.6 });
        S.add(`<svg viewBox="0 0 240 260"><circle cx="120" cy="140" r="96" fill="#FFFDF7" stroke="${NAVY}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><circle cx="190" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><path d="M120 140 V80 M120 140 L160 160" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/></svg>`, { anim: 'pop', x: 620, y: 480, w: 260, at: 0, d: 1.4, pulse: [{ at: 0, d: 2.4 }, { at: 0, d: 3.4 }] });
        S.add(D.question(), { anim: 'pop', x: 880, y: 470, w: 100, at: 0, d: 2.2, out: 1 });
        S.card('<div class="t-h3" style="text-align:center">panjang <span class="red">≠</span> markah</div>', { anim: 'pop', x: 560, y: 820, w: 420, at: 0, d: 4.0, rot: 2 });
        S.stamp('TERSUSUN!', { x: 230, y: 1010, w: 620, at: 1, d: 1.6, fs: 80, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Latihan KBAT bahagian kedua: **soalan esei**, Bahagian B.'],
      board: {
        name: 'Kad tajuk episod ekstra (2/2)',
        visual: 'Kad tajuk gaya buku nota dengan pil "EPISOD EKSTRA · 2/2"; maskot rasmi; buku esei.',
        doodle: 'Pil kuning, garis bawah merah, pelekat maskot (imej asal), buku navy "ESEI".',
        text: 'EPISOD EKSTRA (2/2) · LATIHAN KBAT · Bahagian B: Soalan Esei',
        anim: 'Pil pop, tajuk ditulis (wipe), garis bawah dilukis, maskot pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">EPISOD EKSTRA · 2/2</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0, d: -0.3 });
        S.text('LATIHAN<br><span class="red">KBAT</span>', { size: 'title', x: 60, y: 430, w: 960, align: 'center', at: 0, dur: 1.2 });
        S.svg(D.underline(420), { x: 330, y: 630, w: 420, at: 0, d: 1.2, dur: 0.5 });
        S.text('Bahagian B · <span class="red">Soalan Esei</span>', { size: 'h3', x: 60, y: 665, w: 960, align: 'center', at: 0, d: 0.6 });
        S.mascot({ x: 380, y: 760, w: 320, at: 0, d: 0.6 });
        S.svg(D.book('ESEI', '#172C63', { size: 34, y: 145 }), { x: 760, y: 800, w: 170, at: 0, d: 1.4, sfx: false });
      },
    },
    {
      id: 'beza', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Apa beza menjawab Bahagian A dengan Bahagian B?', pause: 0.25 },
        'Dalam Bahagian A, jawapan **ringkas**: satu isi, satu ayat, di ruang jawapan.',
        'Dalam Bahagian B, anda menulis dalam **perenggan**. Setiap isi perlu **dihuraikan** dan disokong dengan **contoh**.',
        'Paling penting: esei mesti ditulis dalam **ayat lengkap**. Jangan menulis dalam bentuk poin atau jadual!',
      ],
      board: {
        name: 'Beza teknik: Bahagian A vs Bahagian B',
        visual: 'Jadual dua lajur (A struktur | B esei) dengan baris ciri; amaran merah "Jangan poin / jadual dalam esei".',
        doodle: 'Dua kad lajur, ikon ruang jawapan & perenggan, pangkah merah pada senarai poin.',
        text: 'A: ringkas · 1 isi = 1 ayat · ruang jawapan | B: perenggan · isi + huraian + contoh · ayat lengkap · ✗ poin / jadual',
        anim: 'Lajur A muncul pada ayat kedua; lajur B pada ayat ketiga; amaran dicop pada ayat keempat.',
      },
      draw(S, { D }) {
        S.text('A <span class="red">vs</span> B', { size: 'title', x: 60, y: 290, w: 960, align: 'center', at: 0, d: -0.2 });
        S.card('<div class="t-h3" style="text-align:center;color:#C93436">A · STRUKTUR</div><div class="t-body" style="font-size:38px;line-height:1.4">• <b>ringkas</b><br>• 1 isi = 1 ayat<br>• di ruang jawapan</div>', { anim: 'slideL', x: 60, y: 430, w: 465, at: 1, d: 0 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">B · ESEI</div><div class="t-body" style="font-size:38px;line-height:1.4;color:#F3EBDD">• <b>perenggan</b><br>• isi + <b>huraian</b> + <b>contoh</b><br>• ayat lengkap</div>', { color: 'navy', anim: 'slideR', x: 555, y: 430, w: 465, at: 2, d: 0 });
        S.card('<div class="t-body" style="font-size:36px;line-height:1.3">• isi 1<br>• isi 2<br>• isi 3</div>', { anim: 'pop', x: 140, y: 820, w: 220, at: 3, d: 1.4, notape: true, pad: '10px 18px' });
        S.add(D.cross(), { anim: 'stamp', x: 190, y: 830, w: 130, at: 3, d: 2.4 });
        S.card('<div class="t-h3" style="font-size:40px;color:#FFFDF7;text-align:center">ESEI: JANGAN poin / jadual!</div>', { color: 'red', anim: 'stamp', x: 420, y: 860, w: 600, at: 3, d: 2.8, rot: -2 });
      },
    },
    {
      id: 'pilih-masa', transition: 'flip',
      lines: [
        { text: 'Dalam Bahagian B, anda pilih **tiga daripada lima** soalan. Baca semua soalan dahulu, dan pilih soalan yang anda boleh jawab **setiap bahagiannya**, termasuk bahagian KBAT.', pause: 0.3 },
        'Kemudian, urus masa. Kertas 2 diberi dua jam tiga puluh minit.',
        'Satu cadangan: lebih kurang empat puluh lima minit untuk Bahagian A, tiga puluh minit bagi setiap esei, dan lima belas minit untuk menyemak.',
      ],
      board: {
        name: 'Pilih soalan & urus masa',
        visual: 'Lima kad soalan, tiga ditanda semak; jam dengan carta pai masa: A 45 min · B 3 × 30 min · semak 15 min; tag CADANGAN.',
        doodle: 'Kad soalan bernombor 1–5, tanda semak, jam, carta jalur masa berwarna.',
        text: 'Pilih 3/5: boleh jawab SEMUA bahagian (termasuk KBAT) · Masa (cadangan): A ±45 min · setiap esei ±30 min · semak ±15 min = 2 jam 30 min',
        anim: 'Lima kad pop; tiga ditanda semak; jalur masa dilukis segmen demi segmen.',
      },
      draw(S, { D }) {
        S.text('Pilih <span class="hl">3 daripada 5</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        [0, 1, 2, 3, 4].forEach((i) => {
          S.card(`<div class="t-h2" style="text-align:center">${i + 6}</div>`, { anim: 'pop', x: 60 + i * 195, y: 410, w: 170, at: 0, d: 0.6 + i * 0.25, pad: '10px 4px', notape: true });
          if ([0, 2, 3].includes(i)) S.add(D.check(), { anim: 'pop', x: 100 + i * 195, y: 520, w: 90, at: 0, d: 6.0 + i * 0.3, sfx: i ? false : 'ding' });
        });
        S.text('nombor soalan contoh sahaja', { size: 'note', x: 60, y: 610, w: 960, align: 'center', at: 0, d: 1.8 });
        S.add('<span class="twtag">CADANGAN MASA</span>', { anim: 'fade', x: 60, y: 700, w: 300, at: 1, sfx: false });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">⏱ 2 jam 30 minit</div>', { color: 'gold', anim: 'pop', x: 260, y: 750, w: 560, at: 1, d: 0.3, pad: '8px 10px', notape: true });
        const seg = [['A · 45 min', 270, RED], ['Esei 1 · 30', 180, NAVY], ['Esei 2 · 30', 180, NAVY], ['Esei 3 · 30', 180, NAVY], ['Semak 15', 90, '#3A8A4A']];
        let x = 60;
        seg.forEach(([t, w, c], i) => {
          S.add(`<div style="height:110px;background:${c};border:4px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:${w < 100 ? 22 : 28}px;color:#FFFDF7;text-align:center;line-height:1.05;box-sizing:border-box">${t}</div>`, { anim: 'wipe', x, y: 900, w, at: 2, d: 0.6 + i * 0.9, dur: 0.6 });
          x += w;
        });
      },
    },
    {
      id: 'soalan-esei', transition: 'paper', gap: 0.35,
      lines: [
        { text: 'Soalan esei biasanya dipecahkan kepada beberapa bahagian. Lihat contoh soalan latihan ini.', pause: 0.3 },
        'Bahagian a: Nyatakan faktor kemunculan gerakan nasionalisme di negara kita. Empat markah.',
        'Bahagian b: Huraikan perjuangan golongan intelektual berpendidikan agama. Lapan markah.',
        'Bahagian c: Pada pendapat anda, mengapakah golongan intelektual penting dalam memperjuangkan nasib bangsa? Lapan markah. Inilah bahagian **KBAT**.',
      ],
      board: {
        name: 'Contoh soalan esei latihan (a)(b)(c)',
        visual: 'Kad soalan kertas koyak dengan tiga bahagian (a)(b)(c) muncul satu demi satu, pil markah 4 · 8 · 8 = 20; label KBAT pada (c).',
        doodle: 'Kad soalan, pil markah merah, lencana KBAT, tag "GAYA KERTAS 2 · LATIHAN".',
        text: 'SOALAN ESEI (latihan): (a) Nyatakan faktor kemunculan gerakan nasionalisme di negara kita [4] · (b) Huraikan perjuangan golongan intelektual berpendidikan agama [8] · (c) Pada pendapat anda, mengapakah golongan intelektual penting dalam memperjuangkan nasib bangsa? [8] = 20 markah',
        anim: 'Kad bahagian meluncur naik mengikut narasi; pil markah pop; lencana KBAT dicop.',
      },
      draw(S) {
        S.add('<span class="pill" style="font-size:34px">SOALAN ESEI</span>', { anim: 'pop', x: 60, y: 295, w: 360, at: 0, d: -0.3 });
        S.add('<span class="twtag">GAYA KERTAS 2 · LATIHAN</span>', { anim: 'fade', x: 400, y: 305, w: 420, at: 0, sfx: false });
        S.add('<span class="pill" style="font-size:30px;background:#C93436;color:#FFFDF7;white-space:nowrap">20 markah</span>', { anim: 'pop', x: 790, y: 295, w: 250, at: 3, d: 4.6 });
        const parts = [['(a)', '<b>Nyatakan</b> faktor kemunculan gerakan nasionalisme di negara kita.', 4, 1], ['(b)', '<b>Huraikan</b> perjuangan golongan intelektual berpendidikan agama.', 8, 2], ['(c)', '<b>Pada pendapat anda</b>, mengapakah golongan intelektual penting dalam memperjuangkan nasib bangsa?', 8, 3]];
        parts.forEach(([n, q, m, at], i) => {
          S.card(`<div style="display:flex;gap:16px"><div class="t-h3" style="color:#C93436;flex:none">${n}</div><div class="t-body" style="font-size:38px;line-height:1.2">${q}</div></div>`, { tear: i === 2, color: '', anim: 'slideU', x: 60, y: 400 + i * 230, w: 820, at, d: 0, pad: '14px 20px' });
          S.add(`<span class="pill" style="font-size:30px">${m}</span>`, { anim: 'pop', x: 900, y: 430 + i * 230, w: 120, at, d: 0.6 });
        });
        S.stamp('KBAT', { x: 820, y: 1090, w: 200, at: 3, d: 3.4, fs: 54 });
      },
    },
    {
      id: 'ab', bg: 'lined', transition: 'slideUp',
      lines: [
        { text: 'Untuk bahagian a, kata tugas **nyatakan** memerlukan isi yang tepat, tetapi tetap dalam ayat lengkap.', pause: 0.2 },
        'Contohnya: "Faktor pertama ialah peranan agama, apabila pelajar yang belajar di Mesir terdedah kepada Gerakan Islah."',
        { text: 'Untuk bahagian b, **huraikan** bermaksud setiap isi mesti diikuti dengan huraian.', pause: 0.2 },
        'Contohnya: "Kaum Muda menggalakkan pendidikan wanita. Mereka turut mendirikan madrasah untuk menyebarkan ilmu kepada masyarakat."',
      ],
      board: {
        name: 'Teknik bahagian (a) nyatakan & (b) huraikan',
        visual: 'Dua kad contoh ayat: (a) isi tepat dalam ayat lengkap; (b) isi + huraian dengan label I dan H berwarna.',
        doodle: 'Kertas jawapan bergaris, label berwarna I/H, pil kata tugas.',
        text: '(a) NYATAKAN = isi tepat, ayat lengkap: "Faktor pertama ialah peranan agama…" · (b) HURAIKAN = isi + huraian: "Kaum Muda menggalakkan pendidikan wanita. Mereka mendirikan madrasah…"',
        anim: 'Pil kata tugas pop; ayat contoh ditulis (scribble) mengikut narasi.',
      },
      draw(S) {
        S.add('<span class="pill">(a) NYATAKAN</span>', { anim: 'pop', x: 60, y: 300, w: 500, at: 0, d: 0.2 });
        S.text('isi tepat · <span class="hl">ayat lengkap</span>', { size: 'label', x: 440, y: 310, w: 580, at: 0, d: 1.6 });
        para(S, [['I', 'Faktor pertama ialah **peranan agama**, apabila pelajar yang belajar di Mesir terdedah kepada Gerakan Islah.']], 1, 400, { d: 0.2 });
        S.add('<span class="pill" style="background:#FFFDF7">(b) HURAIKAN</span>', { anim: 'pop', x: 60, y: 700, w: 500, at: 2, d: 0.2 });
        S.text('isi + <span class="hl">huraian</span>', { size: 'label', x: 440, y: 710, w: 580, at: 2, d: 1.4 });
        para(S, [['I', 'Kaum Muda **menggalakkan pendidikan wanita**.'], ['H', 'Mereka turut **mendirikan madrasah** untuk menyebarkan ilmu kepada masyarakat.']], 3, 800, { d: 0.2, color: 'gold' });
      },
    },
    {
      id: 'rangka', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Sekarang, bahagian c, iaitu soalan KBAT. Jangan terus menulis! Ambil satu minit untuk membuat **rangka**.', pause: 0.3 },
        'Senaraikan empat atau lima isi ringkas di tepi kertas: menyedarkan masyarakat, memperjuangkan pendidikan,',
        'menyatukan rakyat melalui persatuan, dan menyuarakan tuntutan rakyat kepada British.',
        'Dengan rangka, idea anda tidak berulang, dan esei anda lebih tersusun.',
      ],
      board: {
        name: 'Langkah 1 bahagian (c): buat rangka',
        visual: 'Peta minda lakaran pensel: hab "Intelektual penting kerana…" dengan empat cabang isi; jam 1 minit.',
        doodle: 'Garis pensel kelabu, bulatan hab, anak panah, jam kecil "1 min".',
        text: 'RANGKA (1 minit): 1 sedarkan masyarakat · 2 perjuangkan pendidikan · 3 satukan rakyat melalui persatuan · 4 suarakan tuntutan kepada British',
        anim: 'Hab dilukis; cabang & isi ditulis satu demi satu mengikut narasi.',
      },
      draw(S) {
        S.text('Langkah 1: <span class="hl">RANGKA</span>', { size: 'h2', x: 70, y: 300, w: 760, at: 0, d: -0.2 });
        S.add('<span class="pill" style="font-size:30px;background:#FFFDF7">⏱ 1 minit</span>', { anim: 'pop', x: 820, y: 305, w: 200, at: 0, d: 2.0 });
        S.card('<div class="t-h3" style="text-align:center;font-size:38px;color:#F5C928">Intelektual penting kerana…</div>', { color: 'navy', anim: 'pop', x: 280, y: 640, w: 520, at: 0, d: 4.2, pad: '14px 10px' });
        const b = [['sedarkan masyarakat', 60, 430, 1, 0.4], ['perjuangkan pendidikan', 560, 430, 1, 3.4], ['satukan rakyat (persatuan)', 60, 860, 2, 0.2], ['suarakan tuntutan kepada British', 560, 860, 2, 2.4]];
        b.forEach(([t, x, y, at, d], i) => {
          S.card(`<div class="t-label" style="font-size:42px;text-align:center"><span class="red">${i + 1}.</span> ${t}</div>`, { anim: 'pop', x, y, w: 460, at, d, pad: '10px 12px', notape: true, rot: (i % 2 ? 1.5 : -1.5) });
          S.arrow(540, i < 2 ? 640 : 760, x + 230, i < 2 ? 540 : 860, { at, d: d - 0.1, color: '#8A93A6', bend: 0.1, sw: 4 });
        });
        S.card('<div class="t-body" style="font-size:38px;text-align:center">Rangka ➜ isi <span class="hl">tidak berulang</span> · esei <span class="hl">tersusun</span></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1080, w: 960, at: 3, d: 0.2 });
      },
    },
    {
      id: 'perenggan1', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Langkah kedua: tulis setiap isi dalam **satu perenggan**, menggunakan formula I-H-C.', pause: 0.3 },
        '**Isi**: "Pada pendapat saya, golongan intelektual penting kerana mereka menyedarkan masyarakat tentang nasib bangsa."',
        '**Huraian**: "Hal ini kerana mereka menyebarkan idea pembaharuan kepada rakyat melalui penulisan."',
        '**Contoh**: "Contohnya, Syed Sheikh al-Hadi menyebarkan idea pembaharuan melalui majalah Al-Imam."',
      ],
      board: {
        name: 'Langkah 2: perenggan model I-H-C',
        visual: 'Satu perenggan esei dibina ayat demi ayat; setiap ayat berlabel warna I (merah), H (navy), C (emas); penanda "Pada pendapat saya", "Hal ini kerana", "Contohnya" diserlah.',
        doodle: 'Kertas jawapan bergaris, label berwarna, penyerlah.',
        text: 'I: Pada pendapat saya, golongan intelektual penting kerana mereka menyedarkan masyarakat tentang nasib bangsa. · H: Hal ini kerana mereka menyebarkan idea pembaharuan melalui penulisan. · C: Contohnya, Syed Sheikh al-Hadi – majalah Al-Imam.',
        anim: 'Setiap ayat ditulis (scribble) dengan label warna tepat ketika dibaca.',
      },
      draw(S) {
        S.text('Langkah 2: <span class="hl">perenggan I-H-C</span>', { size: 'h2', x: 70, y: 300, w: 960, at: 0, d: -0.2 });
        para(S, [['I', '<span class="hl">Pada pendapat saya</span>, golongan intelektual penting kerana mereka **menyedarkan masyarakat** tentang nasib bangsa.']], 1, 410, { d: 0.2, fs: 38 });
        para(S, [['H', '<span class="hl">Hal ini kerana</span> mereka menyebarkan **idea pembaharuan** kepada rakyat melalui penulisan.']], 2, 640, { d: 0.2, fs: 38 });
        para(S, [['C', '<span class="hl">Contohnya</span>, **Syed Sheikh al-Hadi** menyebarkan idea pembaharuan melalui majalah **Al-Imam**.']], 3, 870, { d: 0.2, fs: 38, color: 'gold' });
        S.add('<span class="pill" style="font-size:28px">1 perenggan = 1 isi lengkap</span>', { anim: 'pop', x: 300, y: 1110, w: 640, at: 3, d: 4.0 });
      },
    },
    {
      id: 'perenggan2', bg: 'lined', transition: 'slideUp',
      lines: [
        { text: 'Untuk perenggan seterusnya, mulakan dengan **penanda wacana** supaya esei anda mengalir dengan lancar.', pause: 0.25 },
        '"**Selain itu**, mereka memperjuangkan pendidikan. Contohnya, Kaum Muda menggalakkan pendidikan wanita dan mendirikan madrasah."',
        '"**Di samping itu**, mereka menyatukan rakyat melalui persatuan. Contohnya, lepasan SITC seperti Ibrahim Haji Yaacob menubuhkan Kesatuan Melayu Muda."',
        '"**Tambahan pula**, mereka menyuarakan tuntutan rakyat. Contohnya, Mohd Eunos Abdullah dan Raja Chulan menuntut British memperbaiki taraf hidup orang Melayu."',
      ],
      board: {
        name: 'Perenggan 2–4 dengan penanda wacana',
        visual: 'Tiga perenggan ringkas tersusun; penanda wacana (Selain itu · Di samping itu · Tambahan pula) dicop merah di permulaan setiap perenggan; label I & C.',
        doodle: 'Kertas jawapan, cop penanda wacana, label berwarna.',
        text: 'Selain itu – pendidikan (Kaum Muda: pendidikan wanita, madrasah) · Di samping itu – satukan rakyat (Ibrahim Haji Yaacob – KMM) · Tambahan pula – suarakan tuntutan (Mohd Eunos Abdullah & Raja Chulan)',
        anim: 'Penanda wacana dicop; perenggan ditulis mengikut narasi.',
      },
      draw(S) {
        S.text('Penanda <span class="hl">wacana</span>', { size: 'h2', x: 70, y: 300, w: 960, at: 0, d: -0.2 });
        para(S, [['I', '<b class="red">Selain itu</b>, mereka **memperjuangkan pendidikan**.'], ['C', 'Contohnya, Kaum Muda menggalakkan pendidikan wanita dan mendirikan madrasah.']], 1, 400, { d: 0.2, fs: 34 });
        para(S, [['I', '<b class="red">Di samping itu</b>, mereka **menyatukan rakyat** melalui persatuan.'], ['C', 'Contohnya, lepasan SITC seperti Ibrahim Haji Yaacob menubuhkan KMM.']], 2, 640, { d: 0.2, fs: 34, color: 'gold' });
        para(S, [['I', '<b class="red">Tambahan pula</b>, mereka **menyuarakan tuntutan** rakyat.'], ['C', 'Contohnya, Mohd Eunos Abdullah & Raja Chulan menuntut British memperbaiki taraf hidup orang Melayu.']], 3, 880, { d: 0.2, fs: 34 });
      },
    },
    {
      id: 'kesimpulan', bg: 'grid', transition: 'flip',
      lines: [
        { text: 'Langkah ketiga: tutup dengan **kesimpulan** yang ringkas, terutamanya bagi soalan pendapat atau jika soalan meminta rumusan.', pause: 0.3 },
        'Contohnya: "**Kesimpulannya**, golongan intelektual ialah penggerak utama nasionalisme kerana mereka menyedarkan, mendidik dan menyatukan rakyat."',
        'Kesimpulan yang baik merumuskan isi utama dalam satu atau dua ayat. Jangan masukkan isi baharu, dan jangan ulang semua perenggan!',
      ],
      board: {
        name: 'Langkah 3: kesimpulan ringkas',
        visual: 'Kad kesimpulan emas dengan label K hijau; dua amaran: "isi baharu ✗" dan "ulang semua ✗"; tanda semak "1–2 ayat ✓".',
        doodle: 'Kad emas, label K, pangkah merah, tanda semak hijau.',
        text: 'K: "Kesimpulannya, golongan intelektual ialah penggerak utama nasionalisme kerana mereka menyedarkan, mendidik dan menyatukan rakyat." · ✓ 1–2 ayat · ✗ isi baharu · ✗ ulang semua perenggan',
        anim: 'Kad kesimpulan ditulis; amaran dicop; tanda semak pop.',
      },
      draw(S, { D }) {
        S.text('Langkah 3: <span class="hl">KESIMPULAN</span>', { size: 'h2', x: 70, y: 300, w: 960, at: 0, d: -0.2 });
        S.text('bila perlu: soalan pendapat / minta rumusan', { size: 'note', x: 70, y: 390, w: 960, at: 0, d: 3.4 });
        para(S, [['K', '<b class="red">Kesimpulannya</b>, golongan intelektual ialah **penggerak utama nasionalisme** kerana mereka menyedarkan, mendidik dan menyatukan rakyat.']], 1, 470, { d: 0.2, fs: 40, color: 'gold' });
        S.card('<div class="t-h3" style="text-align:center;font-size:40px">1–2 ayat ✓</div>', { anim: 'pop', x: 60, y: 820, w: 300, at: 2, d: 0.2, notape: true });
        S.add(D.check(), { anim: 'pop', x: 260, y: 900, w: 80, at: 2, d: 0.8, sfx: false });
        S.card('<div class="t-h3" style="text-align:center;font-size:40px">isi baharu ✗</div>', { anim: 'pop', x: 390, y: 820, w: 300, at: 2, d: 2.6, notape: true });
        S.card('<div class="t-h3" style="text-align:center;font-size:40px">ulang semua ✗</div>', { anim: 'pop', x: 720, y: 820, w: 300, at: 2, d: 4.0, notape: true });
        S.add('<span class="twtag">PETUA GURU · SEMAK SKEMA SEKOLAH ANDA</span>', { anim: 'fade', x: 220, y: 1010, w: 640, at: 2, d: 5.0, sfx: false });
      },
    },
    {
      id: 'tips-b', transition: 'paper',
      lines: [
        { text: 'Lima tip skor esei KBAT:', pause: 0.2 },
        'Satu, buat rangka dahulu. Dua, satu perenggan untuk satu isi.',
        'Tiga, guna ayat lengkap, bukan poin atau jadual. Empat, guna penanda wacana.',
        'Lima, untuk soalan pendapat, beri jawapan yang **munasabah** dan sokong dengan fakta Bab 2. Tiada satu jawapan tunggal, asalkan relevan dan berasas!',
      ],
      board: {
        name: '5 tip skor esei KBAT',
        visual: 'Lima kad tip bernombor ditampal; kad akhir emas "munasabah + fakta".',
        doodle: 'Kad putih bernombor, pita kuning, bintang.',
        text: '1 Rangka dahulu · 2 Satu perenggan = satu isi · 3 Ayat lengkap (bukan poin/jadual) · 4 Penanda wacana · 5 Pendapat munasabah + fakta Bab 2',
        anim: 'Kad pop berpasangan mengikut narasi; kad akhir dicop.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">5 TIP</span> esei KBAT', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        const t = [['Rangka dahulu', 1, 0.2], ['1 perenggan = 1 isi', 1, 2.2], ['Ayat lengkap, bukan poin', 2, 0.2], ['Guna penanda wacana', 2, 3.4], ['Pendapat munasabah + fakta', 3, 0.4]];
        t.forEach(([x, at, d], i) => S.card(`<div style="display:flex;gap:14px;align-items:center"><div class="t-big" style="font-size:64px;color:#C93436">${i + 1}</div><div class="t-body" style="font-size:38px;line-height:1.1">${x}</div></div>`, { color: i === 4 ? 'gold' : '', anim: 'pop', x: i === 4 ? 60 : 60 + (i % 2) * 490, y: 410 + Math.floor(i / 2) * 180, w: i === 4 ? 960 : 470, at, d, pad: '10px 16px', rot: (i % 2 ? 1 : -1), notape: true }));
        S.add(D.star(), { anim: 'pop', x: 900, y: 770, w: 100, at: 3, d: 2.6, sfx: false });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Recap perbezaan Bahagian A dan Bahagian B.', pause: 0.2 },
        'Bahagian A: kenal pasti kata tanya, kira markah, tulis isi ringkas, satu isi satu ayat.',
        'Bahagian B: pilih soalan dengan bijak, buat rangka, tulis perenggan I-H-C dengan penanda wacana, dan tutup dengan kesimpulan ringkas jika perlu.',
      ],
      board: {
        name: 'Recap A vs B + tip SPM',
        visual: 'Dua lajur senarai semak (A struktur | B esei); kad TIP SPM di bawah.',
        doodle: 'Kotak semak, tanda semak hijau, lencana TIP SPM.',
        text: 'A: kata tanya · kira markah · isi ringkas (1 isi = 1 ayat) | B: pilih soalan · rangka · perenggan I-H-C + penanda wacana · kesimpulan ringkas · TIP SPM: latih dengan soalan percubaan negeri',
        anim: 'Lajur A pada ayat kedua; lajur B pada ayat ketiga; tip SPM meluncur naik.',
      },
      draw(S) {
        S.text('RECAP <span class="hl">A vs B</span>', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        S.card('<div class="t-h3" style="text-align:center;color:#C93436">A · STRUKTUR</div><div class="t-body" style="font-size:34px;line-height:1.45">✓ kata tanya<br>✓ kira markah<br>✓ isi ringkas<br>✓ 1 isi = 1 ayat</div>', { anim: 'slideL', x: 60, y: 410, w: 465, at: 1, d: 0 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">B · ESEI</div><div class="t-body" style="font-size:34px;line-height:1.45;color:#F3EBDD">✓ pilih soalan bijak<br>✓ rangka dahulu<br>✓ perenggan I-H-C<br>✓ penanda wacana<br>✓ kesimpulan ringkas</div>', { color: 'navy', anim: 'slideR', x: 555, y: 410, w: 465, at: 2, d: 0 });
        examTip(S, 'Banyakkan latihan dengan <span class="hl">soalan percubaan negeri</span> dan semak dengan guru.', 2, { d: 6.0, y: 1010 });
      },
    },
    {
      id: 'bonus', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Sekarang giliran anda! Soalan bonus: Sebagai pelajar, bagaimanakah anda boleh meneladani semangat golongan intelektual dalam perjuangan nasionalisme?', pause: 0.4 },
        'Tulis satu perenggan jawapan menggunakan formula I-H-C di ruang komen. Jom kita bincang bersama!',
      ],
      board: {
        name: 'Soalan bonus – cabaran komen',
        visual: 'Kad soalan bonus besar dengan bintang; maskot rasmi dan gelembung komen.',
        doodle: 'Kad soalan, bintang berdenyut, gelembung komen, pelekat maskot.',
        text: 'SOALAN BONUS: Sebagai pelajar, bagaimanakah anda boleh meneladani semangat golongan intelektual dalam perjuangan nasionalisme? · Tulis 1 perenggan I-H-C di ruang komen 👇',
        anim: 'Kad soalan meluncur naik; bintang berdenyut; maskot & gelembung komen pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px">SOALAN BONUS</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.2 });
        S.card('<div class="t-h3" style="font-size:44px;line-height:1.2">Sebagai pelajar, bagaimanakah anda boleh <span class="hl">meneladani semangat golongan intelektual</span> dalam perjuangan nasionalisme?</div>', { tear: true, anim: 'slideU', x: 60, y: 400, w: 960, at: 0, d: 0.3 });
        S.add(D.star(), { anim: 'pop', x: 900, y: 360, w: 110, at: 0, d: 1.0, pulse: [{ at: 0, d: 2.0 }], sfx: false });
        S.mascot({ x: 90, y: 800, w: 320, at: 1, d: -0.2 });
        S.add('<div class="bubble" style="font-size:42px;text-align:center">Tulis <b class="red">1 perenggan</b><br><span class="hl">I-H-C</span> di komen 👇</div>', { anim: 'pop', x: 460, y: 860, w: 560, at: 1, d: 0.6 });
      },
    },
    {
      id: 'penutup', transition: 'paper', tail: 0.9,
      lines: [
        { text: 'Ringkasnya: Bahagian A, ringkas dan tepat. Bahagian B, tersusun, dihuraikan dan disokong dengan contoh.', pause: 0.3 },
        'Dengan teknik ini, anda boleh menjawab dengan yakin. Jumpa lagi dalam Bab 3!',
      ],
      board: {
        name: 'Rumusan & seruan ke Bab 3',
        visual: 'Kad rumusan emas (A ringkas · B tersusun); maskot rasmi menunjuk ke kad "Seterusnya: Bab 3".',
        doodle: 'Pelekat maskot, anak panah merah, kad Bab 3.',
        text: 'A: ringkas & tepat · B: tersusun, dihuraikan, ada contoh · Seterusnya: Bab 3 – Konflik Dunia dan Pendudukan Jepun di Negara Kita',
        anim: 'Kad rumusan pop; maskot pop; anak panah dilukis; kad Bab 3 pop.',
      },
      draw(S) {
        S.text('Ringkasnya…', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        S.card('<div class="t-body" style="font-size:44px;line-height:1.25"><b class="red">A</b>: ringkas & tepat<br><b class="red">B</b>: tersusun · dihuraikan · ada contoh</div>', { color: 'gold', anim: 'pop', x: 70, y: 400, w: 940, at: 0, d: 0.3, rot: -1 });
        S.mascot({ x: 90, y: 760, w: 360, at: 1, d: -0.3 });
        S.arrow(470, 900, 600, 1060, { at: 1, d: 0.4, color: RED, bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Seterusnya</div><div class="t-h3" style="font-size:40px">Bab 3: Konflik Dunia dan Pendudukan Jepun di Negara Kita</div>', { x: 480, y: 1070, w: 540, at: 1, d: 0.7, rot: 1.5 });
      },
    },
    endScene(),
  ],
};
