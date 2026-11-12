// BAB 2 · EPISOD 03 – Subtopik 2.2: Perkembangan Idea Nasionalisme di Barat (≈ 5 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, timeline, who, header, locator, fact, EUROPE, recapGrid } from './lib2.js';

const USA = [[-98, 24], [-62, 50]];

export default {
  id: '03',
  file: '03_Bab2_Subtopik_2.2',
  title: 'Perkembangan Idea Nasionalisme di Barat',
  header: { chip: 'BAB 2 • 2.2', sub: 'Idea Nasionalisme di Barat' },
  src: SRC,
  music: { key: 62, bpm: 104, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Bagaimana rakyat biasa mampu menumbangkan seorang raja yang berkuasa mutlak?', pause: 0.5 },
        'Jawapannya ada di Eropah dan Amerika, beratus-ratus tahun dahulu!',
      ],
      board: {
        name: 'Hook – rakyat lawan raja mutlak',
        visual: 'Mahkota besar di atas takhta; orang ramai mengangkat tangan dari bawah; mahkota tercampak; peta Eropah & Amerika kecil.',
        doodle: 'Mahkota emas, orang ramai, kubu batu, tanda soal merah.',
        text: '"Rakyat biasa VS raja berkuasa mutlak?" · Eropah & Amerika',
        anim: 'Mahkota pop; orang ramai dilukis; mahkota bergoyang (pulse); kubu dilukis pada ayat kedua.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Rakyat <span class="red">VS</span> Raja Mutlak?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        S.svg(D.crown(), { x: 380, y: 480, w: 320, at: 0, d: 0.4, dur: 0.9 });
        S.add(D.question(), { anim: 'pop', x: 760, y: 470, w: 100, at: 0, d: 1.6, pulse: [{ at: 0, d: 2.6 }] });
        S.svg(D.crowd(6, { fist: true }), { x: 170, y: 760, w: 740, at: 0, d: 1.2, dur: 1.2 });
        S.svg(D.fortress(), { x: 620, y: 1010, w: 380, at: 1, d: 0.2 });
        S.card('<div class="t-h3" style="text-align:center">Eropah & Amerika<br><span class="red">abad ke-17 – 18</span></div>', { anim: 'pop', x: 80, y: 1040, w: 500, at: 1, d: 0.8, rot: -2 });
      },
    },
    titleScene('2.2', 'Perkembangan<br><span class="red">Idea Nasionalisme</span><br>di Barat', 'Ini Titik Sejarah, Subtopik 2.2: **Perkembangan Idea Nasionalisme di Barat**.', { uy: 690, my: 760 }),
    {
      id: 'punca', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Di Barat, idea nasionalisme wujud kerana dua sebab utama.', pause: 0.3 },
        { text: 'Pertama, rakyat menentang **pemerintahan beraja yang menindas** dan menggugat hak rakyat, contohnya Revolusi Keagungan England dan Revolusi Perancis.', pause: 0.35 },
        'Kedua, rakyat berjuang untuk **mendapatkan kemerdekaan**, contohnya Revolusi Amerika.',
      ],
      board: {
        name: 'Dua sebab idea nasionalisme di Barat',
        visual: 'Dua kad besar bernombor: (1) mahkota dipangkah – tentang raja menindas; (2) rantai putus – tuntut kemerdekaan; label contoh revolusi.',
        doodle: 'Mahkota + tanda pangkah, rantai putus, label pil contoh.',
        text: '1 Menentang pemerintahan beraja yang menindas (Revolusi Keagungan England, Revolusi Perancis) · 2 Mendapatkan kemerdekaan (Revolusi Amerika)',
        anim: 'Tajuk ditulis; kad 1 meluncur dari kiri; kad 2 dari kanan; pil contoh pop.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">2 SEBAB</span> utama', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        S.card('<div style="display:flex;gap:20px;align-items:center"><div class="t-big" style="font-size:110px;color:#C93436">1</div><div class="t-body" style="font-size:44px">Menentang <span class="hl">pemerintahan beraja yang menindas</span> & menggugat hak rakyat</div></div>', { anim: 'slideL', x: 60, y: 420, w: 700, at: 1, d: 0.2 });
        S.svg(D.crown(), { x: 800, y: 440, w: 190, at: 1, d: 0.6 });
        S.add(D.cross(), { anim: 'stamp', x: 840, y: 440, w: 110, at: 1, d: 1.4 });
        S.add('<span class="pill" style="font-size:30px">Revolusi Keagungan England</span> <span class="pill" style="font-size:30px;background:#FFFDF7">Revolusi Perancis</span>', { anim: 'pop', x: 80, y: 690, w: 940, at: 1, d: 3.6 });
        S.card('<div style="display:flex;gap:20px;align-items:center"><div class="t-big" style="font-size:110px;color:#172C63">2</div><div class="t-body" style="font-size:44px">Berjuang untuk <span class="hl">mendapatkan kemerdekaan</span></div></div>', { anim: 'slideR', x: 320, y: 820, w: 700, at: 2, d: 0.2 });
        S.svg(D.chainBreak(), { x: 50, y: 860, w: 250, at: 2, d: 0.6 });
        S.add('<span class="pill" style="font-size:30px">Revolusi Amerika</span>', { anim: 'pop', x: 340, y: 1060, w: 600, at: 2, d: 1.6 });
      },
    },
    {
      id: 'garis-masa', transition: 'wipe', gap: 0.3,
      lines: [
        { text: 'Mari susun ikut masa.', pause: 0.2 },
        'Tahun 1688, Revolusi Keagungan di England.',
        'Tahun 1776, Revolusi Amerika.',
        'Dan tahun 1789, Revolusi Perancis.',
      ],
      board: {
        name: 'Garis masa tiga revolusi',
        visual: 'Garis masa mendatar dengan tiga titik tahun; ikon bagi setiap revolusi di atas garis.',
        doodle: 'Bangunan parlimen (England), kotak teh (Amerika), kubu Bastille (Perancis), titik merah/kuning.',
        text: '1688 Revolusi Keagungan (England) · 1776 Revolusi Amerika · 1789 Revolusi Perancis',
        anim: 'Garis dilakar; setiap tahun pop dan ikon dilukis tepat ketika disebut.',
      },
      draw(S, { D }) {
        S.text('Garis Masa <span class="hl">Revolusi</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        timeline(S, [
          { year: '1688', label: 'Revolusi Keagungan<br>(England)', at: 1 },
          { year: '1776', label: 'Revolusi Amerika', at: 2 },
          { year: '1789', label: 'Revolusi Perancis', at: 3 },
        ], { y: 900, x: 180, x1: 900, at: 0, d: 0.6, bw: 320 });
        S.svg(D.parliament(), { x: 70, y: 560, w: 230, at: 1, d: 0.2 });
        S.svg(D.crate('TEH'), { x: 440, y: 590, w: 200, at: 2, d: 0.2 });
        S.svg(D.fortress(), { x: 760, y: 590, w: 260, at: 3, d: 0.2 });
        examTip(S, 'Ikut urutan: <span class="hl">1688 ➜ 1776 ➜ 1789</span>. Jangan tertukar!', 3, { d: 1.4, y: 1130 });
      },
    },
    {
      id: 'locke', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Idea ini disokong oleh pemikir Inggeris, **John Locke**, melalui bukunya, **Two Treatises of Government**.', pause: 0.3 },
        'Beliau menolak pemerintahan raja berkuasa mutlak, dan menegaskan bahawa kerajaan patut diasaskan pada **persetujuan antara pemerintah dengan rakyat**.',
        'Undang-undang pula perlu digubal untuk memenuhi **hak asasi manusia**. Buku ini mempopularkan prinsip **raja berperlembagaan**.',
      ],
      board: {
        name: 'Pemikiran John Locke',
        visual: 'Watak pemikir berambut palsu (generik) dengan tag nama; buku "Two Treatises of Government"; dua kad idea utama.',
        doodle: 'Watak berambut palsu putih, buku merah, mahkota dengan skrol (raja berperlembagaan), tanda pangkah pada mahkota mutlak.',
        text: 'John Locke · Two Treatises of Government · tolak raja berkuasa mutlak · kerajaan = persetujuan pemerintah & rakyat · undang-undang penuhi hak asasi · raja berperlembagaan',
        anim: 'Watak & buku dilukis; kad idea meluncur masuk mengikut narasi; cop "RAJA BERPERLEMBAGAAN".',
      },
      draw(S, { D }) {
        who(S, D.person({ hat: 'wig', shirt: '#172C63', pants: '#172C63', pose: 'present', prop: 'book' }), 'John Locke', 'pemikir Inggeris', { x: 80, y: 310, w: 210, at: 0, d: -0.2, ty: 290 });
        S.svg(D.book('Two|Treatises of|Government', '#C93436', { size: 20, y: 118 }), { x: 340, y: 330, w: 230, at: 0, d: 1.2 });
        S.svg(D.crown(), { x: 700, y: 360, w: 170, at: 1, d: 0.2 });
        S.add(D.cross(), { anim: 'stamp', x: 735, y: 360, w: 100, at: 1, d: 1.2 });
        S.text('raja mutlak', { size: 'note', x: 690, y: 520, w: 200, align: 'center', at: 1, d: 1.2 });
        S.card('<div class="t-body" style="font-size:42px">Kerajaan = <span class="hl">persetujuan</span> antara pemerintah & rakyat</div>', { anim: 'slideL', x: 70, y: 700, w: 940, at: 1, d: 1.5 });
        S.card('<div class="t-body" style="font-size:42px">Undang-undang mesti memenuhi <span class="hl">hak asasi manusia</span></div>', { anim: 'slideR', x: 70, y: 880, w: 940, at: 2, d: 0 });
        S.stamp('RAJA BERPERLEMBAGAAN', { x: 90, y: 1080, w: 900, at: 2, d: 3.4, fs: 54, style: 'text-align:center' });
      },
    },
    {
      id: 'keagungan', transition: 'paper',
      lines: [
        'Pada tahun **1688**, berlaku **Revolusi Keagungan** di England, untuk menegakkan kedaulatan parlimen dan hak asasi rakyat.',
        'Raja **James II** membelakangkan parlimen ketika menggubal undang-undang.',
        'Parlimen mendapat sokongan **Mary II** dan suaminya, **William of Orange** dari Belanda. Akhirnya, James II terpaksa melarikan diri ke Perancis.',
      ],
      board: {
        name: 'Revolusi Keagungan England 1688 (1)',
        visual: 'Profil revolusi: tajuk + tahun + lokasi; peta Eropah mini (England); bangunan parlimen, raja dengan anak panah lari; kad fakta.',
        doodle: 'Bangunan parlimen bertiang, watak raja bermahkota (James II), pasangan diraja (Mary II & William of Orange).',
        text: 'REVOLUSI KEAGUNGAN · 1688 · England · kedaulatan parlimen & hak asasi · James II belakangkan parlimen · Mary II & William of Orange sokong parlimen · James II lari ke Perancis',
        anim: 'Peta mini dilukis; parlimen dilukis; watak pop; kad fakta meluncur masuk satu demi satu.',
      },
      draw(S, { D }) {
        header(S, 'REVOLUSI<br>KEAGUNGAN', '1688', 'England', { py: 445, ny: 515 });
        locator(S, -1.5, 52.5, 'England', { bounds: EUROPE, left: true });
        S.svg(D.parliament(), { x: 70, y: 600, w: 250, at: 0, d: 0.8 });
        who(S, D.sultan({ pose: 'point', mood: 'sad', cape: '#172C63', beard: false }), 'James II', '', { x: 360, y: 560, w: 130, at: 1, d: 0, ty: 165, tw: 150 });
        S.svg(D.sultan({ pose: 'down', beard: false, cape: '#C93436' }), { x: 520, y: 560, w: 120, at: 2, d: 0.3, dur: 0.8 });
        S.svg(D.wanita({ pose: 'down', tudung: '#F5C928', shirt: '#C93436' }), { x: 600, y: 570, w: 110, at: 2, d: 0.6, dur: 0.8 });
        fact(S, 0, 'Tegakkan **kedaulatan parlimen** & **hak asasi** rakyat', 0, { d: 1.6 });
        fact(S, 1, '**James II** membelakangkan parlimen', 1, { d: 0.2 });
        fact(S, 2, '**Mary II** & **William of Orange** (Belanda) sokong parlimen', 2, { d: 0.6 });
        fact(S, 3, 'James II **lari ke Perancis**', 2, { d: 3.2, color: 'gold' });
      },
    },
    {
      id: 'bill', transition: 'slideUp',
      lines: [
        '**Bill of Rights** kemudian digubal. Ia memberikan keutamaan kepada parlimen untuk menggubal undang-undang dan mengutip cukai.',
        'Pada zaman Mary II dan William of Orange, **kedaulatan parlimen** dan sistem **raja berperlembagaan** semakin mantap.',
      ],
      board: {
        name: 'Revolusi Keagungan (2): Bill of Rights',
        visual: 'Skrol besar "BILL OF RIGHTS" di tengah; dua anak panah ke "Gubal undang-undang" dan "Kutip cukai"; neraca parlimen vs mahkota.',
        doodle: 'Skrol, neraca, mahkota kecil, bangunan parlimen.',
        text: 'BILL OF RIGHTS ➜ parlimen utama: gubal undang-undang · kutip cukai · kedaulatan parlimen · raja berperlembagaan mantap',
        anim: 'Skrol dilukis; anak panah dilukis; kad pop; cop akhir.',
      },
      draw(S, { D }) {
        S.svg(D.scroll('BILL OF RIGHTS', { ts: 30 }), { x: 370, y: 300, w: 340, at: 0, d: -0.2 });
        S.arrow(380, 650, 250, 760, { at: 0, d: 2.0, color: RED });
        S.arrow(700, 650, 830, 760, { at: 0, d: 3.2, color: RED });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">Gubal<br>undang-undang</div>', { anim: 'pop', x: 70, y: 770, w: 420, at: 0, d: 2.2 });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">Kutip<br>cukai</div>', { anim: 'pop', x: 590, y: 770, w: 420, at: 0, d: 3.4 });
        S.svg(D.scales(), { x: 90, y: 1000, w: 230, at: 1, d: 0.2 });
        S.card('<div class="t-body" style="font-size:42px"><span class="hl">Kedaulatan parlimen</span> + <span class="hl">raja berperlembagaan</span> semakin mantap</div>', { color: 'gold', anim: 'slideR', x: 350, y: 1010, w: 670, at: 1, d: 0.6 });
      },
    },
    {
      id: 'amerika1', transition: 'paper',
      lines: [
        'Seterusnya, **Revolusi Amerika 1776**. Orang Amerika menentang penjajahan British, kerana British tidak melindungi hak mereka.',
        'British memperkenalkan akta untuk memungut cukai, seperti **Akta Pelayaran**, **Akta Gula**, **Akta Setem** dan **Akta Teh**.',
        'Penduduk Amerika bangkit dengan slogan: **tiada cukai tanpa perwakilan**!',
      ],
      board: {
        name: 'Revolusi Amerika 1776 (1): punca',
        visual: 'Profil revolusi dengan peta mini timur Amerika; empat kotak "akta" bertimbun; orang ramai dengan pembesar suara dan slogan besar.',
        doodle: 'Peti kayu berlabel PELAYARAN / GULA / SETEM / TEH, pembesar suara, orang ramai, cop merah.',
        text: 'REVOLUSI AMERIKA · 1776 · tentang penjajahan British · Akta Pelayaran, Akta Gula, Akta Setem, Akta Teh · "Tiada cukai tanpa perwakilan!"',
        anim: 'Peta mini & penanda; peti akta jatuh satu demi satu (pop); pembesar suara dilukis; slogan dicop.',
      },
      draw(S, { D }) {
        header(S, 'REVOLUSI<br>AMERIKA', '1776', '13 tanah jajahan British', { py: 445, ny: 515 });
        locator(S, -75.2, 40, 'Amerika', { bounds: USA, left: true });
        const acts = [['PELAYARAN', 70], ['GULA', 290], ['SETEM', 480], ['TEH', 670]];
        acts.forEach(([a, x], i) => S.svg(D.crate(a), { x, y: 640, w: a === 'PELAYARAN' ? 200 : 170, at: 1, d: 0.3 + i * 0.7, dur: 0.6, sfx: 'pop' }));
        S.text('Akta cukai British', { size: 'note', x: 70, y: 600, w: 500, at: 1, d: 0.2 });
        S.svg(D.megaphone(), { x: 70, y: 900, w: 220, at: 2, d: 0 });
        S.svg(D.crowd(4, { fist: true }), { x: 700, y: 900, w: 320, at: 2, d: 0.4 });
        S.card('<div class="t-h3" style="color:#FFFDF7;text-align:center;font-size:52px">"TIADA CUKAI TANPA PERWAKILAN!"</div>', { color: 'red', anim: 'stamp', x: 120, y: 1130, w: 840, rot: -3, at: 2, d: 1.2 });
      },
    },
    {
      id: 'amerika2', transition: 'slideUp',
      lines: [
        '**George Washington** memimpin perang menentang British.',
        'Pada Julai 1776, Kongres meluluskan **Perisytiharan Kemerdekaan Amerika**, yang ditulis oleh **Thomas Jefferson**.',
        'Ia menegaskan, jika kerajaan gagal menjamin hak **kehidupan, kebebasan dan kebahagiaan**, rakyat berhak membentuk kerajaan baharu.',
        'Pada tahun **1783**, British mengakui kemerdekaan Amerika. Tiga belas wilayah jajahan bergabung menjadi **Amerika Syarikat**, yang mengamalkan demokrasi.',
      ],
      board: {
        name: 'Revolusi Amerika (2): kemerdekaan',
        visual: 'Watak bertopi tiga segi (George Washington, generik); dokumen perisytiharan bercop 1776; tiga ikon hak; garis masa 1776 ➜ 1783; 13 bintang.',
        doodle: 'Topi tiga segi, dokumen bercop merah "1776", hati/obor/bintang sebagai ikon hak, 13 bintang kecil.',
        text: 'George Washington · Perisytiharan Kemerdekaan (Julai 1776) – Thomas Jefferson · hak kehidupan, kebebasan, kebahagiaan · 1783 British akui kemerdekaan · 13 wilayah = Amerika Syarikat (demokrasi)',
        anim: 'Watak dilukis; dokumen dicop; ikon hak pop; garis masa dilakar; 13 bintang pop berturut-turut.',
      },
      draw(S, { D }) {
        who(S, D.person({ hat: 'tricorn', shirt: '#172C63', pants: '#F3EBDD', pose: 'point', sash: '#C93436' }), 'George Washington', 'pemimpin perang', { x: 70, y: 300, w: 190, at: 0, d: -0.3, ty: 260 });
        S.svg(D.treaty('1776'), { x: 330, y: 300, w: 220, at: 1, d: 0 });
        who(S, D.person({ hat: 'wig', shirt: '#C93436', pose: 'present', prop: 'scroll' }), 'Thomas Jefferson', 'penulis perisytiharan', { x: 590, y: 320, w: 170, at: 1, d: 1.6, ty: 230, tw: 280 });
        S.card('<div class="t-label" style="color:#C93436">Perisytiharan Kemerdekaan · Julai 1776</div><div class="t-body" style="font-size:40px">Hak <span class="hl">kehidupan</span> · <span class="hl">kebebasan</span> · <span class="hl">kebahagiaan</span></div>', { anim: 'slideU', x: 70, y: 690, w: 940, at: 2, d: 0 });
        timeline(S, [{ year: '1776', label: 'isytihar merdeka', at: 1, d: 0.5 }, { year: '1783', label: 'British akui', at: 3 }], { y: 1010, x: 170, x1: 480, up: 84, bw: 240 });
        S.card('<div class="t-h3" style="text-align:center;font-size:40px">13 wilayah ➜<br><span class="red">AMERIKA SYARIKAT</span></div><div class="t-label" style="text-align:center">(demokrasi)</div>', { color: 'gold', anim: 'pop', x: 650, y: 930, w: 370, at: 3, d: 2.4 });
      },
    },
    {
      id: 'perancis1', transition: 'flip',
      lines: [
        'Kemudian, **Revolusi Perancis 1789**. Pemikir seperti **Voltaire** dan **Rousseau** memperjuangkan idea **kebebasan, persamaan dan persaudaraan**.',
        'Rousseau menulis **The Social Contract**, yang menegaskan kedaulatan suara rakyat lebih tinggi dan penting daripada institusi raja.',
        'Sasaran mereka ialah pemerintahan autokratik **Raja Louis XVI** dan golongan bangsawan, yang mempunyai banyak keistimewaan, sedangkan rakyat terbeban dengan cukai.',
      ],
      board: {
        name: 'Revolusi Perancis 1789 (1): idea & punca',
        visual: 'Profil revolusi + peta Eropah mini (Paris); sepanduk tiga perkataan; buku "The Social Contract"; raja & bangsawan di atas timbunan syiling, rakyat di bawah.',
        doodle: 'Sepanduk merah-putih-navy, buku, watak raja bermahkota, timbunan syiling, rakyat sedih.',
        text: 'REVOLUSI PERANCIS · 1789 · Voltaire & Rousseau · kebebasan, persamaan, persaudaraan · The Social Contract · Raja Louis XVI (autokratik) & bangsawan berkeistimewaan · rakyat terbeban cukai',
        anim: 'Sepanduk tiga kata pop satu demi satu; buku dilukis; raja & syiling pop; rakyat sedih dilukis.',
      },
      draw(S, { D }) {
        header(S, 'REVOLUSI<br>PERANCIS', '1789', 'Paris, Perancis', { py: 445, ny: 515 });
        locator(S, 2.35, 48.85, 'Paris', { bounds: EUROPE });
        ['Kebebasan', 'Persamaan', 'Persaudaraan'].forEach((w, i) => S.card(`<div class="t-h3" style="text-align:center;font-size:36px;${i === 1 ? '' : 'color:#FFFDF7'}">${w}</div>`, { color: ['navy', '', 'red'][i], anim: 'pop', x: 60 + i * 320, y: 575, w: 300, at: 0, d: 3.2 + i * 0.5, pad: '10px 6px', notape: true }));
        S.svg(D.book('The Social|Contract', '#172C63', { size: 22, y: 125 }), { x: 90, y: 720, w: 170, at: 1, d: 0 });
        S.text('Rousseau', { size: 'note', x: 80, y: 900, w: 200, align: 'center', at: 1, d: 0.3 });
        S.card('<div class="t-body" style="font-size:38px">Suara rakyat <span class="hl">lebih tinggi</span> daripada institusi raja</div>', { anim: 'slideR', x: 290, y: 740, w: 380, at: 1, d: 0.8, pad: '12px 18px' });
        S.svg(D.coins(), { x: 830, y: 880, w: 170, at: 2, d: 0.6 });
        who(S, D.sultan({ pose: 'cheer', beard: false, cape: '#172C63' }), 'Louis XVI', 'autokratik', { x: 700, y: 700, w: 120, at: 2, d: 0, ty: 30, tx: 130, tw: 180 });
        S.svg(D.crowd(4), { x: 80, y: 1000, w: 340, at: 2, d: 3.4 });
        S.card('<div class="t-body" style="font-size:38px">Rakyat <span class="red">terbeban cukai</span>; bangsawan penuh <span class="hl">keistimewaan</span></div>', { color: 'gold', anim: 'slideL', x: 450, y: 1080, w: 570, at: 2, d: 4.2, pad: '12px 18px' });
      },
    },
    {
      id: 'bastille', transition: 'paper',
      lines: [
        'Golongan revolusi menggempur **penjara Bastille** dan membebaskan tahanan politik.',
        'Raja Louis XVI akhirnya digulingkan, dan mereka berjaya menubuhkan sebuah **republik**.',
      ],
      board: {
        name: 'Revolusi Perancis (2): Bastille & republik',
        visual: 'Kubu penjara Bastille besar; orang ramai menyerbu; rantai putus; mahkota jatuh; cop "REPUBLIK".',
        doodle: 'Kubu batu bermenara, orang ramai, rantai putus, mahkota, cop merah.',
        text: 'Gempur penjara Bastille · bebaskan tahanan politik · Louis XVI digulingkan · REPUBLIK',
        anim: 'Kubu dilukis; orang ramai meluncur masuk; rantai putus pop; mahkota jatuh; cop REPUBLIK dihentak.',
      },
      draw(S, { D }) {
        S.svg(D.fortress(), { x: 200, y: 310, w: 680, at: 0, d: -0.3, dur: 1.4 });
        S.text('Penjara <span class="red">Bastille</span>', { size: 'h2', x: 60, y: 790, w: 960, align: 'center', at: 0, d: 0.6 });
        S.svg(D.crowd(6, { fist: true }), { x: 60, y: 880, w: 560, at: 0, d: 1.2 });
        S.svg(D.chainBreak(), { x: 660, y: 920, w: 330, at: 0, d: 2.6 });
        S.svg(D.crown(), { x: 760, y: 300, w: 150, at: 1, d: 0, rot: 25 });
        S.stamp('REPUBLIK!', { x: 260, y: 1130, w: 560, at: 1, d: 2.6, fs: 80, style: 'text-align:center' });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Recap pantas!', pause: 0.2 },
        'Revolusi Keagungan 1688: kedaulatan parlimen dan raja berperlembagaan.',
        'Revolusi Amerika 1776: kemerdekaan daripada British.',
        'Revolusi Perancis 1789: kebebasan, persamaan dan persaudaraan.',
      ],
      board: {
        name: 'Recap tiga revolusi',
        visual: 'Tiga kad ringkasan tersusun dengan ikon; kad emas untuk kata kunci utama.',
        doodle: 'Ikon parlimen, rantai putus, sepanduk tiga warna.',
        text: '1688 Keagungan: kedaulatan parlimen, raja berperlembagaan · 1776 Amerika: merdeka daripada British · 1789 Perancis: kebebasan, persamaan, persaudaraan',
        anim: 'Setiap kad pop tepat ketika disebut; tanda semak pop.',
      },
      draw(S, { D }) {
        S.text('RECAP <span class="hl">PANTAS</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        const rows = [['1688 · Revolusi Keagungan', 'Kedaulatan parlimen + raja berperlembagaan', D.parliament(), 1], ['1776 · Revolusi Amerika', 'Merdeka daripada British', D.chainBreak(), 2], ['1789 · Revolusi Perancis', 'Kebebasan · Persamaan · Persaudaraan', D.fortress(), 3]];
        rows.forEach(([t, b, icon, at], i) => {
          S.card(`<div class="t-h3" style="font-size:42px;color:#C93436">${t}</div><div class="t-body" style="font-size:40px">${b}</div>`, { color: i === 1 ? 'gold' : '', anim: 'pop', x: 60, y: 420 + i * 270, w: 700, at, rot: (i - 1) * 0.8 });
          S.svg(icon, { x: 790, y: 440 + i * 270, w: 220, at, d: 0.3, dur: 0.8, sfx: false });
          S.add(D.check(), { anim: 'pop', x: 680, y: 560 + i * 270, w: 70, at, d: 0.8, sfx: false });
        });
      },
    },
    nilaiScene([
      { text: 'Apa iktibarnya untuk kita? Pentingnya **sikap berwaspada dengan kuasa asing**.', pause: 0.3 },
      'Apabila hak rakyat diabaikan, atau tanah air dikuasai pihak luar, rakyat mesti sedar dan bersatu mempertahankannya.',
    ], 'Sikap berwaspada dengan kuasa asing', (D) => D.magnifier(), { iw: 260, ix: 410, note: 'Hak rakyat diabaikan / tanah air dikuasai pihak luar ➜ rakyat mesti <span class="hl">sedar</span> & <span class="hl">bersatu</span>.', doodle: 'Kanta pembesar (berwaspada), bintang.' }),
    closingScene([
      { text: 'Ringkasnya, idea nasionalisme di Barat lahir daripada perjuangan menuntut hak rakyat dan kemerdekaan.', pause: 0.3 },
      'Idea ini kemudian sampai ke Asia. Bagaimana India, China, Mesir dan Jepun bangkit? Jom tonton episod seterusnya!',
    ], 'Episod seterusnya', '2.3 Nasionalisme di Asia', { summary: 'Barat: rakyat menuntut <span class="hl">hak</span> (1688, 1789) & <span class="hl">kemerdekaan</span> (1776).' }),
    endScene(),
  ],
};
