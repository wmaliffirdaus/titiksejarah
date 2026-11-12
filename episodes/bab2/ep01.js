// BAB 2 · EPISOD 01 – Pengenalan Bab 2: Kebangkitan Nasionalisme (≈ 1.5–2 min)
import { SRC, RED, NAVY, GOLD, endScene } from './lib2.js';

const JOURNEY = [[-100, -10], [145, 60]];

export default {
  id: '01',
  file: '01_Bab2_Introduction',
  title: 'Bab 2 – Kebangkitan Nasionalisme',
  header: { chip: 'BAB 2 • INTRO', sub: 'Kebangkitan Nasionalisme' },
  src: SRC,
  music: { key: 57, bpm: 102, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Bayangkan tanah air anda dikuasai oleh kuasa asing. Apa yang anda akan lakukan? Diam, atau bangkit?', pause: 0.5 },
        'Semangat untuk bangkit itulah yang dinamakan **nasionalisme**!',
      ],
      board: {
        name: 'Hook – diam atau bangkit?',
        visual: 'Rantai besar merentang skrin, sekumpulan rakyat di bawahnya; rantai putus dan obor menyala; cop merah "BANGKIT!".',
        doodle: 'Rantai kelabu, orang ramai (rakyat) mengangkat tangan, obor merah-kuning, tanda soal.',
        text: '"Diam… atau bangkit?" · NASIONALISME · cop "BANGKIT!"',
        anim: 'Rantai dilukis; tanda soal pop; rantai putus (gantian); obor dilukis; kata kunci dicop.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Diam… atau <span class="red">bangkit</span>?', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0, d: 2.2 });
        S.svg(D.chainBreak(), { x: 200, y: 520, w: 680, at: 0, d: 0.3, dur: 1.2 });
        S.add(D.question(), { anim: 'pop', x: 860, y: 470, w: 110, at: 0, d: 3.2, out: 1 });
        S.svg(D.crowd(5, { fist: true }), { x: 160, y: 780, w: 520, at: 0, d: 4.2, dur: 1.2 });
        S.svg(D.torch(), { x: 740, y: 700, w: 200, at: 1, d: 0 });
        S.card('<div class="t-h2" style="color:#FFFDF7;text-align:center">NASIONALISME</div>', { color: 'red', anim: 'stamp', x: 160, y: 1110, w: 760, rot: -4, at: 1, d: 0.9 });
      },
    },
    {
      id: 'title', transition: 'wipe',
      lines: ['Ini **Titik Sejarah**! Bab 2 Sejarah Tingkatan 4: **Kebangkitan Nasionalisme**.'],
      board: {
        name: 'Tajuk bab & maskot',
        visual: 'Kad tajuk bab gaya buku nota; maskot rasmi Titik Sejarah muncul dengan belon kata.',
        doodle: 'Pil "BAB 2", garis bawah merah tulisan tangan, pelekat maskot (imej asal tanpa diubah), obor kecil.',
        text: 'BAB 2 · KEBANGKITAN NASIONALISME · Sejarah Tingkatan 4 KSSM',
        anim: 'Tajuk ditulis (wipe), garis bawah dilukis, maskot pop, belon kata pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">BAB 2</span></div>', { anim: 'pop', x: 40, y: 330, w: 1000, at: 0 });
        S.text('KEBANGKITAN<br><span class="red">NASIONALISME</span>', { size: 'title', x: 60, y: 430, w: 960, align: 'center', at: 0, d: 0.4, dur: 1.2 });
        S.svg(D.underline(600), { x: 240, y: 630, w: 600, at: 0, d: 1.4, dur: 0.6 });
        S.text('Sejarah Tingkatan 4 • KSSM', { size: 'label', x: 60, y: 680, w: 960, align: 'center', at: 0.4 });
        S.mascot({ x: 100, y: 780, w: 330, at: 0.5, say: 'Jom kenali semangat yang <b class="red">membebaskan</b> tanah air kita!', bx: 460, by: 830, bw: 500 });
      },
    },
    {
      id: 'maksud', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Secara ringkas, **nasionalisme** ialah perasaan cinta yang mendalam terhadap bangsa dan negara.', pause: 0.45 },
        'Perasaan inilah yang mendorong rakyat menjaga maruah negara dan menentang penjajahan.',
      ],
      board: {
        name: 'Nasionalisme dalam satu ayat',
        visual: 'Hati merah besar di tengah dengan bendera kecil; dua anak panah ke kad "Jaga maruah negara" dan "Tentang penjajahan".',
        doodle: 'Hati, bendera generik (merah-putih), perisai, rantai putus.',
        text: 'NASIONALISME = cinta yang mendalam terhadap bangsa & negara ➜ jaga maruah negara · tentang penjajahan',
        anim: 'Hati pop; definisi ditulis; anak panah dilukis; dua kad meluncur masuk pada ayat kedua.',
      },
      draw(S, { D }) {
        S.add(D.heart(), { anim: 'pop', x: 400, y: 300, w: 280, at: 0, d: 0 });
        S.card('<div class="t-body" style="text-align:center;font-size:46px"><span class="hl">Nasionalisme</span> = perasaan <b>cinta yang mendalam</b> terhadap <span class="red">bangsa</span> dan <span class="red">negara</span></div>', { anim: 'pop', x: 90, y: 590, w: 900, at: 0, d: 0.6 });
        S.arrow(380, 800, 260, 900, { at: 1, color: RED });
        S.arrow(700, 800, 820, 900, { at: 1, d: 0.3, color: RED });
        S.svg(D.shield(), { x: 100, y: 910, w: 170, at: 1, d: 0.2 });
        S.card('<div class="t-h3" style="font-size:42px">Jaga maruah negara</div>', { anim: 'slideL', x: 60, y: 1110, w: 440, at: 1, d: 0.3 });
        S.svg(D.chainBreak(), { x: 640, y: 950, w: 330, at: 1, d: 1.2 });
        S.card('<div class="t-h3" style="font-size:42px">Tentang penjajahan</div>', { anim: 'slideR', x: 560, y: 1110, w: 460, at: 1, d: 1.3 });
      },
    },
    {
      id: 'jelajah', bg: 'lined', transition: 'zoom', gap: 0.3,
      lines: [
        { text: 'Dalam bab ini, kita akan mengembara.', pause: 0.2 },
        'Bermula di **Barat**: England, Amerika dan Perancis.',
        'Kemudian ke **Asia**: India, China, Empayar Uthmaniyah dan Mesir, serta Jepun.',
        'Seterusnya ke **Asia Tenggara**, dan akhirnya ke **negara kita**!',
      ],
      board: {
        name: 'Peta pengembaraan idea nasionalisme',
        visual: 'Peta dunia lakaran; penanda muncul mengikut kawasan; anak panah merah Barat ➜ Asia ➜ Asia Tenggara; empat kad laluan bernombor di bawah peta.',
        doodle: 'Peta dunia (garis pantai Natural Earth), penanda merah/kuning/navy, anak panah melengkung.',
        text: 'BARAT (England, Amerika, Perancis) ➜ ASIA (India, China, Uthmaniyah & Mesir, Jepun) ➜ ASIA TENGGARA ➜ NEGARA KITA',
        anim: 'Peta dilukis; penanda pop berkumpulan; anak panah dilukis antara kawasan; kad laluan muncul satu demi satu.',
      },
      draw(S) {
        S.text('Laluan idea <span class="hl">nasionalisme</span>', { size: 'h2', x: 60, y: 290, w: 960, align: 'center', at: 0, d: -0.3 });
        const at = S.map({ bounds: JOURNEY, w: 960 }, { x: 60, y: 400, w: 960, at: 0, d: 0.1, dur: 1.6 });
        const pins = [
          [1, -1.5, 52.5, NAVY, 0.1], [1, -76, 39.5, NAVY, 0.5], [1, 2.3, 46.5, NAVY, 0.9],
          [2, 78, 22, RED, 0.1], [2, 110, 33, RED, 0.4], [2, 31, 27, RED, 0.85], [2, 33, 39.5, RED, 1.0], [2, 139.5, 36, RED, 1.4],
          [3, 103, 14, GOLD, 0], [3, 102, 3.5, RED, 1.3],
        ];
        for (const [l, lon, lat, color, d] of pins) S.pin(at, lon, lat, '', { at: l, d, color, size: 0.7 });
        const [ax, ay] = at(-1.5, 52.5), [bx, by] = at(78, 22), [cx, cy] = at(103, 14), [dx, dy] = at(102, 3.5);
        S.arrow(ax + 20, ay - 30, bx - 10, by - 40, { at: 2, d: -0.4, color: RED, bend: -0.25, sw: 5 });
        S.arrow(bx + 20, by - 30, cx - 10, cy - 30, { at: 3, d: -0.2, color: RED, bend: -0.3, sw: 5 });
        const rows = [
          ['BARAT', 'England · Amerika · Perancis', 1, 'navy'],
          ['ASIA', 'India · China · Uthmaniyah & Mesir · Jepun', 2, 'red'],
          ['ASIA TENGGARA', 'Filipina · Burma · Vietnam · Indonesia · Thailand', 3, 'gold'],
          ['NEGARA KITA', 'Tanah Melayu, Sarawak & Sabah', 3, ''],
        ];
        rows.forEach(([t, sub, l, c], i) => S.card(`<div style="display:flex;align-items:center;gap:18px"><div class="t-big" style="font-size:52px;color:${c === 'navy' || c === 'red' ? '#F5C928' : '#C93436'}">${i + 1}</div><div><div class="t-h3" style="font-size:40px">${t}</div><div class="t-label" style="font-size:34px;${c === 'navy' || c === 'red' ? 'color:#F3EBDD' : ''}">${sub}</div></div></div>`,
          { color: c, anim: i % 2 ? 'slideR' : 'slideL', x: 70 + (i % 2) * 40, y: 790 + i * 140, w: 900, at: l, d: i === 3 ? 1.4 : 0.2, pad: '8px 22px', notape: true, rot: i % 2 ? 0.7 : -0.7 }));
      },
    },
    {
      id: 'penting', transition: 'flip',
      lines: [
        { text: 'Kenapa bab ini penting? Ia menerangkan dari mana idea nasionalisme datang, siapa tokoh yang menggerakkannya,', pause: 0.15 },
        { text: 'dan bagaimana semangat ini menjadi **asas perjuangan kemerdekaan** negara kita.', pause: 0.3 },
        'Bab ini juga kerap diuji dalam **SPM**!',
      ],
      board: {
        name: 'Kenapa bab ini penting?',
        visual: 'Tiga kad bernombor disusun menurun seperti nota ulang kaji; mentol idea di penjuru; bintang SPM.',
        doodle: 'Mentol kuning, glob, watak tokoh, bintang emas.',
        text: '1 Asal idea nasionalisme · 2 Tokoh penggerak · 3 Asas perjuangan kemerdekaan · Kerap diuji dalam SPM',
        anim: 'Mentol pop; kad masuk satu demi satu mengikut narasi; bintang berdenyut pada perkataan SPM.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">PENTING</span>?', { size: 'title', x: 80, y: 320, w: 700, at: 0 });
        S.add(D.bulb(), { anim: 'pop', x: 790, y: 290, w: 190, at: 0, d: 0.4 });
        const card = (n, txt, y, at, d, color) => S.card(`<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:96px;color:${color}">${n}</div><div class="t-body" style="font-size:46px">${txt}</div></div>`, { anim: 'slideL', x: 90, y, w: 880, at, d });
        card(1, 'Dari mana <span class="hl">idea nasionalisme</span> datang', 520, 0, 2.2, '#C93436');
        card(2, 'Siapa <span class="hl">tokoh</span> yang menggerakkannya', 730, 0, 4.0, '#172C63');
        card(3, 'Asas <span class="hl">perjuangan kemerdekaan</span>', 940, 1, 0.6, '#C93436');
        S.stamp('KERAP DIUJI SPM!', { x: 160, y: 1170, w: 760, at: 2, d: 0.2, fs: 58, style: 'text-align:center' });
        S.add(D.star(), { anim: 'pop', x: 880, y: 1150, w: 110, at: 2, d: 0.5, pulse: [{ at: 2, d: 0.9 }] });
      },
    },
    {
      id: 'peta-siri', bg: 'grid', transition: 'slideUp', gap: 0.25,
      lines: [
        'Bab ini ada lapan subtopik:',
        '2.1 Maksud Nasionalisme, dan 2.2 Perkembangan Idea Nasionalisme di Barat.',
        '2.3 Perkembangan Nasionalisme di Asia, dan 2.4 di Asia Tenggara.',
        '2.5 Kesedaran Nasionalisme di Negara Kita, dan 2.6 Faktor Kemunculan Gerakan Nasionalisme.',
        '2.7 Perkembangan Nasionalisme di negara kita, dan akhir sekali, 2.8 Kesan Perkembangan Nasionalisme.',
      ],
      board: {
        name: 'Peta siri – lapan subtopik',
        visual: 'Grid 2×4 kad subtopik bernombor; setiap pasangan muncul tepat ketika disebut.',
        doodle: 'Bulatan nombor berwarna, ikon kecil (hati, parlimen, glob, peta, akhbar, sekolah, persatuan, carta).',
        text: '2.1 Maksud Nasionalisme · 2.2 Idea Nasionalisme di Barat · 2.3 Nasionalisme di Asia · 2.4 Nasionalisme di Asia Tenggara · 2.5 Kesedaran Nasionalisme di Negara Kita · 2.6 Faktor Kemunculan Gerakan Nasionalisme · 2.7 Perkembangan Nasionalisme · 2.8 Kesan Perkembangan Nasionalisme',
        anim: 'Tajuk ditulis; setiap pasangan kad pop serentak dengan narasi.',
      },
      draw(S) {
        S.text('8 SUBTOPIK', { size: 'h2', x: 80, y: 295, w: 900, at: 0, d: -0.2 });
        const rows = [
          ['2.1', 'Maksud Nasionalisme'], ['2.2', 'Idea Nasionalisme di Barat'],
          ['2.3', 'Nasionalisme di Asia'], ['2.4', 'Nasionalisme di Asia Tenggara'],
          ['2.5', 'Kesedaran Nasionalisme di Negara Kita'], ['2.6', 'Faktor Kemunculan Gerakan Nasionalisme'],
          ['2.7', 'Perkembangan Nasionalisme'], ['2.8', 'Kesan Perkembangan Nasionalisme'],
        ];
        rows.forEach(([n, t], i) => {
          const col = i % 2, row = Math.floor(i / 2);
          const x = 60 + col * 490, y = 395 + row * 235;
          const at = 1 + row, d = col ? 1.6 : 0;
          S.card(`<div style="display:flex;gap:14px;align-items:center"><div style="flex:none;width:96px;height:96px;border-radius:50%;background:${i % 2 ? '#172C63' : '#C93436'};border:4px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:34px;color:#F5C928">${n}</div><div class="t-body" style="font-size:36px;line-height:1.1">${t}</div></div>`,
            { anim: col ? 'slideR' : 'slideL', x, y, w: 470, at, d, pad: '12px 16px', rot: col ? 1 : -1, sfx: 'swish' });
        });
      },
    },
    {
      id: 'penutup', transition: 'paper',
      lines: [{ text: 'Jom mulakan dengan soalan paling asas: apa sebenarnya maksud **nasionalisme**?', pause: 0.2 }],
      tail: 0.9,
      board: {
        name: 'Penutup & seruan',
        visual: 'Maskot rasmi menunjuk ke arah kad "Episod seterusnya".',
        doodle: 'Pelekat maskot, anak panah melengkung, kad episod seterusnya.',
        text: 'Jom mulakan! · Seterusnya: 2.1 Maksud Nasionalisme',
        anim: 'Maskot pop, anak panah dilukis, kad pop.',
      },
      draw(S) {
        S.text('Jom <span class="hl">mulakan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: '#C93436', bend: -0.25 });
        S.card('<div class="t-label" style="color:#C93436">Episod seterusnya</div><div class="t-h3">2.1 Maksud Nasionalisme</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    endScene(),
  ],
};
