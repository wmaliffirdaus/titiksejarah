// BAB 2 · EPISOD 02 – Subtopik 2.1: Maksud Nasionalisme (≈ 3–4 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, defCard, who } from './lib2.js';

const house = (D) => {
  const R = D.R;
  let s = R.line(0, 262, 360, 262, { strokeWidth: 3 });
  s += R.rect(50, 120, 260, 140, { fill: '#FAE6A2' });
  s += R.poly([[30, 126], [330, 126], [180, 30]], { fill: RED });
  s += R.rect(150, 180, 60, 80, { fill: NAVY });
  s += R.rect(76, 150, 50, 44, { fill: '#DCE3EE', strokeWidth: 2 }) + R.rect(236, 150, 50, 44, { fill: '#DCE3EE', strokeWidth: 2 });
  return `<svg viewBox="0 0 360 270" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
};

// Scholar card: generic portrait + name tag + quote card.
function scholar(S, D, fig, name, sub, quote, at, y, o = {}) {
  S.svg(fig, { x: 70, y, w: 150, at, d: o.d || 0, dur: 0.8 });
  S.tag(name, sub, { x: 230, y: y + 4, w: 780, at, d: (o.d || 0) + 0.2 });
  S.card(`<div class="t-body" style="font-size:${o.fs || 38}px;line-height:1.18">${fmt(quote)}</div>`, { anim: 'slideR', x: 230, y: y + 100, w: 790, at, d: (o.d || 0) + 0.5, pad: '12px 22px', rot: o.rot ?? 0.6, notape: true });
}

export default {
  id: '02',
  file: '02_Bab2_Subtopik_2.1',
  title: 'Maksud Nasionalisme',
  header: { chip: 'BAB 2 • 2.1', sub: 'Maksud Nasionalisme' },
  src: SRC,
  music: { key: 59, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Kenapa seorang guru, seorang penulis dan seorang ulama sanggup berjuang menentang penjajah, walaupun mereka tahu risikonya?', pause: 0.5 },
        'Jawapannya hanya satu perkataan: **nasionalisme**.',
      ],
      board: {
        name: 'Hook – kenapa mereka sanggup berjuang?',
        visual: 'Tiga watak berdiri sebaris (guru dengan buku, penulis dengan akhbar, ulama berserban), tanda soal merah besar di atas; kata kunci dicop.',
        doodle: 'Watak guru (songkok, buku), penulis (akhbar), ulama (serban, skrol); tanda soal; cop merah.',
        text: 'Guru? Penulis? Ulama? · Kenapa sanggup berjuang? · NASIONALISME',
        anim: 'Watak dilukis satu demi satu; tanda soal pop; cop "NASIONALISME" dihentak pada ayat kedua.',
        music: 'Sting jenama pembuka; muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Kenapa mereka <span class="red">sanggup</span> berjuang?', { size: 'h2', x: 60, y: 300, w: 960, align: 'center', at: 0, d: 0.2 });
        const figs = [[D.rakyat({ pose: 'hold', prop: 'book' }), 'Guru'], [D.person({ hat: 'hair', shirt: '#6E8BC8', pose: 'present', prop: 'scroll' }), 'Penulis'], [D.pedagang({ prop: 'book', pose: 'hold', shirt: '#FFFDF7' }), 'Ulama']];
        figs.forEach(([f, n], i) => {
          S.svg(f, { x: 90 + i * 320, y: 520, w: 230, at: 0, d: 0.8 + i * 0.9, dur: 0.9 });
          S.text(n, { size: 'label', x: 90 + i * 320, y: 840, w: 230, align: 'center', at: 0, d: 1.1 + i * 0.9 });
        });
        S.add(D.question(), { anim: 'pop', x: 480, y: 420, w: 110, at: 0, d: 3.6, out: 1 });
        S.card('<div class="t-h2" style="color:#FFFDF7;text-align:center">NASIONALISME</div>', { color: 'red', anim: 'stamp', x: 160, y: 960, w: 760, rot: -4, at: 1, d: 1.3 });
      },
    },
    titleScene('2.1', 'Maksud<br><span class="red">Nasionalisme</span>', 'Ini Titik Sejarah, Subtopik 2.1: **Maksud Nasionalisme**.', { uy: 600, my: 690, icon: (D) => D.heart(), ix: 760, iy: 780, iw: 200 }),
    {
      id: 'definisi', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Secara mudah, **nasionalisme** ialah perasaan cinta yang mendalam terhadap bangsa dan negara.', pause: 0.45 },
        { text: 'Perasaan ini membawa kepada semangat **menjaga maruah negara**,', pause: 0.1 },
        'dan semangat **menentang penjajahan**.',
      ],
      board: {
        name: 'Definisi nasionalisme',
        visual: 'Kad kertas koyak "DEFINISI" di atas; dua cabang ke bawah: perisai (maruah) dan rantai putus (tentang penjajahan).',
        doodle: 'Kad DEFINISI, hati merah, perisai, rantai putus, anak panah merah.',
        text: 'DEFINISI · Nasionalisme = perasaan cinta yang mendalam terhadap bangsa dan negara ➜ menjaga maruah negara · menentang penjajahan',
        anim: 'Kad definisi meluncur naik; kata kunci diserlah; cabang kiri dan kanan muncul mengikut narasi.',
      },
      draw(S, { D }) {
        defCard(S, 'NASIONALISME', 'Perasaan <span class="hl">cinta yang mendalam</span> terhadap <span class="red">bangsa</span> dan <span class="red">negara</span>.', { y: 300 });
        S.add(D.heart(), { anim: 'pop', x: 820, y: 290, w: 150, at: 0, d: 1.2, sfx: false });
        S.arrow(400, 680, 260, 790, { at: 1, color: RED });
        S.arrow(680, 680, 820, 790, { at: 2, color: RED });
        S.svg(D.shield(), { x: 130, y: 800, w: 220, at: 1, d: 0.2 });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">Menjaga maruah negara</div>', { anim: 'slideL', x: 60, y: 1060, w: 440, at: 1, d: 0.6 });
        S.svg(D.chainBreak(), { x: 610, y: 860, w: 380, at: 2, d: 0.1 });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">Menentang penjajahan</div>', { anim: 'slideR', x: 570, y: 1060, w: 450, at: 2, d: 0.5 });
      },
    },
    {
      id: 'analogi', transition: 'flip',
      lines: [
        { text: 'Bayangkan rumah anda dimasuki orang asing yang mahu mengawal segala-galanya. Tentu anda mahu mempertahankannya, bukan?', pause: 0.4 },
        'Begitulah nasionalisme: rasa sayang dan tanggungjawab untuk mempertahankan tanah air sendiri.',
      ],
      board: {
        name: 'Analogi – rumah kita',
        visual: 'Rumah doodle; bayang "orang asing" dengan tanda pangkah; keluarga berdiri di hadapan rumah. Tag ILUSTRASI.',
        doodle: 'Rumah (bumbung merah), watak keluarga, siluet navy, tanda pangkah merah, hati.',
        text: 'ILUSTRASI · "Rumah kita = tanah air kita" · rasa sayang + tanggungjawab',
        anim: 'Rumah dilukis; siluet meluncur masuk lalu dipangkah; keluarga pop; kad rumusan pop pada ayat kedua.',
      },
      draw(S, { D }) {
        S.illus({ x: 60, y: 300, at: 0 });
        S.text('Rumah kita = <span class="hl">tanah air kita</span>', { size: 'h2', x: 60, y: 350, w: 960, align: 'center', at: 0, d: 0.2 });
        S.svg(house(D), { x: 330, y: 470, w: 420, at: 0, d: 0.4 });
        S.svg(D.person({ hat: 'tophat', shirt: '#172C63', pants: '#172C63', skin: '#3B4F86', pose: 'point' }), { x: 800, y: 520, w: 190, at: 0, d: 1.6, dur: 0.8 });
        S.add(D.cross(), { anim: 'stamp', x: 840, y: 600, w: 120, at: 0, d: 3.6 });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 90, y: 600, w: 160, at: 1, d: -0.6, dur: 0.8 });
        S.svg(D.wanita({ pose: 'cheer' }), { x: 220, y: 610, w: 150, at: 1, d: -0.4, dur: 0.8 });
        S.card('<div class="t-body" style="text-align:center;font-size:46px">rasa <span class="hl">sayang</span> + <span class="hl">tanggungjawab</span> = mempertahankan tanah air</div>', { color: 'gold', anim: 'pop', x: 90, y: 1040, w: 900, at: 1, d: 1.2 });
      },
    },
    {
      id: 'kohn', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Para tokoh dan sarjana memberikan pandangan masing-masing tentang nasionalisme.', pause: 0.3 },
        '**Hans Kohn** berpendapat nasionalisme ialah gerakan yang meletakkan kesetiaan seseorang hanya kepada negara atau bangsanya.',
        '**Dr. R. Suntharalingam** pula melihatnya sebagai fenomena sejagat, iaitu hak setiap bangsa untuk menubuhkan negaranya sendiri, dan memindahkan kedaulatan kepada rakyat.',
      ],
      board: {
        name: 'Pandangan tokoh (1): Hans Kohn & Dr. R. Suntharalingam',
        visual: 'Dua "kad profil" tokoh bertindan: potret doodle generik, tag nama, kad petikan pandangan.',
        doodle: 'Potret watak umum (bukan karikatur), tag nama kuning, kad petikan.',
        text: 'Hans Kohn: kesetiaan hanya kepada negara/bangsa · Dr. R. Suntharalingam: fenomena sejagat, hak setiap bangsa menubuhkan negara sendiri, kedaulatan kepada rakyat',
        anim: 'Tajuk ditulis; setiap profil dilukis, tag pop, kad petikan meluncur masuk tepat ketika nama disebut.',
      },
      draw(S, { D }) {
        S.text('Pandangan <span class="hl">Tokoh</span> (1)', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        scholar(S, D, D.person({ hat: 'hair', shirt: '#6E8BC8', glasses: true, pose: 'present' }), 'Hans Kohn', 'sarjana', 'Nasionalisme = gerakan yang meletakkan <span class="hl">kesetiaan</span> seseorang <b>hanya</b> kepada negara atau bangsanya.', 1, 430);
        scholar(S, D, D.person({ hat: 'hair', shirt: '#C93436', glasses: true, moustache: true, pose: 'present' }), 'Dr. R. Suntharalingam', 'sejarawan', '<span class="hl">Fenomena sejagat</span>: hak setiap bangsa menubuhkan negara sendiri & memindahkan <b>kedaulatan kepada rakyat</b>.', 2, 820);
      },
    },
    {
      id: 'sarjana', bg: 'lined', transition: 'slideUp',
      lines: [
        '**Profesor William R. Roff** menyatakan kebangkitan nasionalisme Melayu didorong oleh ancaman terhadap hak orang Melayu, faktor ekonomi, serta kebimbangan terhadap sekularisme dan imperialisme Barat.',
        '**Profesor Datuk Zainal Abidin Abdul Wahid** menegaskan nasionalisme Melayu sudah wujud sejak zaman **Kesultanan Melayu Melaka**, melalui kesetiaan kepada raja.',
        '**Profesor Emeritus Tan Sri Dr. Khoo Kay Kim** pula menjelaskan, sebelum merdeka, nasionalisme merujuk perjuangan orang Melayu untuk mendapatkan kembali kedudukan unggul dalam negara sendiri.',
      ],
      board: {
        name: 'Pandangan tokoh (2): tiga sejarawan',
        visual: 'Tiga kad profil sejarawan tersusun menurun; setiap kad dengan potret doodle generik dan petikan ringkas.',
        doodle: 'Potret watak umum, tag nama, ikon kecil (istana Melaka pada kad kedua).',
        text: 'William R. Roff: hak Melayu terancam, ekonomi, sekularisme & imperialisme Barat · Zainal Abidin Abdul Wahid: sejak Kesultanan Melayu Melaka, setia kepada raja · Khoo Kay Kim: kembalikan kedudukan unggul orang Melayu',
        anim: 'Setiap kad profil muncul tepat ketika nama tokoh disebut.',
      },
      draw(S, { D }) {
        S.text('Pandangan <span class="hl">Tokoh</span> (2)', { size: 'h2', x: 70, y: 290, w: 900, at: 0, d: -0.4 });
        scholar(S, D, D.person({ hat: 'hair', shirt: '#3F5DA8', pose: 'present' }), 'Prof. William R. Roff', 'sejarawan', 'Didorong ancaman terhadap <span class="hl">hak orang Melayu</span>, faktor <b>ekonomi</b>, kebimbangan terhadap <b>sekularisme</b> & <b>imperialisme Barat</b>.', 0, 390, { fs: 34 });
        scholar(S, D, D.rakyat({ pose: 'present', glasses: true }), 'Prof. Datuk Zainal Abidin Abdul Wahid', 'sejarawan', 'Wujud sejak <span class="hl">Kesultanan Melayu Melaka</span> — kesetiaan kepada raja.', 1, 715, { fs: 34 });
        scholar(S, D, D.person({ hat: 'hair', shirt: '#C93436', glasses: true, pose: 'present' }), 'Prof. Emeritus Tan Sri Dr. Khoo Kay Kim', 'sejarawan', 'Perjuangan orang Melayu mendapatkan kembali <span class="hl">kedudukan unggul</span> dalam negara sendiri.', 2, 1010, { fs: 34 });
      },
    },
    {
      id: 'pejuang', transition: 'paper',
      lines: [
        { text: 'Dua pejuang tanah air juga meninggalkan kata-kata yang bersemangat.', pause: 0.3 },
        '**Dato\' Onn Jaafar** mahu melahirkan bangsa yang tegap dan kuat, yang boleh berdiri di atas kaki sendiri, setanding dengan bangsa lain.',
        '**Dr. Burhanuddin al-Helmy** pula menegaskan, perjuangan menentang penjajahan mesti ada **persatuan dan perpaduan** yang kuat.',
      ],
      board: {
        name: 'Pandangan pejuang tanah air',
        visual: 'Dua watak bersongkok berdiri di kiri dan kanan dengan belon kata besar berisi intipati pandangan mereka.',
        doodle: 'Watak bersongkok (generik), belon kata, ikon tangan bersatu (orang ramai).',
        text: "Dato' Onn Jaafar: bangsa tegap & kuat, berdiri di atas kaki sendiri · Dr. Burhanuddin al-Helmy: persatuan & perpaduan yang kuat",
        anim: 'Watak dilukis; belon kata pop serentak dengan nama; orang ramai dilukis pada perkataan "perpaduan".',
      },
      draw(S, { D }) {
        S.text('Suara <span class="red">Pejuang</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        who(S, D.rakyat({ pose: 'up', moustache: true, shirt: '#172C63', samping: '#C93436' }), "Dato' Onn Jaafar", 'pejuang tanah air', { x: 80, y: 420, w: 200, at: 1, d: -0.3, ty: 270 });
        S.add(`<div class="bubble" style="font-size:40px">Bangsa yang <b class="red">tegap & kuat</b>, boleh <span class="hl">berdiri di atas kaki sendiri</span>!</div>`, { anim: 'pop', x: 330, y: 430, w: 680, at: 1, d: 0.5 });
        who(S, D.rakyat({ pose: 'point', glasses: true, shirt: '#3F5DA8', samping: '#F5C928' }), 'Dr. Burhanuddin al-Helmy', 'pejuang tanah air', { x: 800, y: 840, w: 200, at: 2, d: -0.3, ty: 270, tx: -150, tw: 340 });
        S.add(`<div class="bubble" style="font-size:40px">Lawan penjajahan perlukan <span class="hl">persatuan & perpaduan</span> yang kuat!</div>`, { anim: 'pop', x: 70, y: 850, w: 680, at: 2, d: 0.5 });
        S.svg(D.crowd(4), { x: 140, y: 1090, w: 420, at: 2, d: 1.8, dur: 0.9 });
      },
    },
    {
      id: 'rumusan', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Jadi, apa kesimpulannya?', pause: 0.25 },
        { text: 'Nasionalisme ialah **cinta akan bangsa dan negara**, **kesetiaan** kepada tanah air, semangat **menjaga maruah negara**, dan semangat **menentang penjajahan**.', pause: 0.4 },
        'Dalam peperiksaan, anda mungkin diminta menyatakan maksud nasionalisme menurut tokoh. Ingat nama tokoh dan kata kuncinya!',
      ],
      board: {
        name: 'Rumusan maksud nasionalisme + tip SPM',
        visual: 'Peta minda: hab "NASIONALISME" di tengah dengan empat cabang kata kunci; kad "TIP SPM" kuning di bawah.',
        doodle: 'Hab navy, empat kad kata kunci, anak panah, lencana TIP SPM.',
        text: 'Cinta akan bangsa & negara · Kesetiaan · Jaga maruah negara · Tentang penjajahan · TIP SPM: ingat nama tokoh + kata kunci',
        anim: 'Hab pop; empat cabang muncul berturut-turut ketika disebut; kad tip meluncur naik.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">NASIONALISME</div>', { color: 'navy', x: 300, y: 560, w: 480, at: 0, d: 0 });
        const k = [['Cinta akan bangsa & negara', 70, 330, 1.05], ['Kesetiaan kepada tanah air', 570, 330, 1.3], ['Menjaga maruah negara', 70, 800, 1.55], ['Menentang penjajahan', 570, 800, 1.8]];
        k.forEach(([t, x, y, at], i) => {
          S.card(`<div class="t-body" style="text-align:center;font-size:42px">${t}</div>`, { color: i % 3 ? '' : 'gold', anim: 'pop', x, y, w: 440, at, rot: i % 2 ? 1.2 : -1.2 });
          S.arrow(540, i < 2 ? 560 : 660, x + 220, i < 2 ? 480 : 800, { at, d: -0.1, color: RED, bend: 0.1 });
        });
        examTip(S, 'Hafal <span class="hl">nama tokoh</span> + <b>kata kunci</b> pandangan mereka.', 2, { y: 1030 });
      },
    },
    nilaiScene([
      { text: 'Apakah pengajarannya? Kita perlu **meneladani perjuangan pemimpin terdahulu**.', pause: 0.3 },
      'Hargai pengorbanan mereka, dan teruskan semangat itu dengan belajar bersungguh-sungguh serta menyumbang kepada negara.',
    ], 'Meneladani perjuangan pemimpin terdahulu', (D) => D.torch(), { iw: 220, ix: 430, note: 'Hargai pengorbanan mereka ➜ <span class="hl">belajar bersungguh-sungguh</span> & <span class="hl">menyumbang</span> kepada negara.', doodle: 'Obor menyala (semangat diwarisi), bintang.' }),
    closingScene([
      { text: 'Ringkasnya, nasionalisme ialah perasaan cinta yang mendalam terhadap bangsa dan negara.', pause: 0.3 },
      'Tetapi dari mana idea ini bermula? Jom ke Eropah dan Amerika dalam episod seterusnya: **Perkembangan Idea Nasionalisme di Barat**!',
    ], 'Episod seterusnya', '2.2 Idea Nasionalisme di Barat', { summary: 'Nasionalisme = <span class="hl">cinta yang mendalam</span> terhadap bangsa & negara ➜ jaga maruah, tentang penjajahan.' }),
    endScene(),
  ],
};
