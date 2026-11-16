// BAB 4 · EPISOD 08 – Subtopik 4.7: Reaksi Penduduk Tempatan terhadap Penyerahan Sabah (≈ 3–4 min)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 116–117.
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, NOW, officer, iconRow, numCard, banner, END } from './b4lib.js';

const SABAH = [[115.0, 3.9], [119.5, 7.5]];

export default {
  id: 'b4_08',
  file: '08_Bab4_Subtopik_4.7',
  title: 'Reaksi Penduduk Tempatan terhadap Penyerahan Sabah',
  header: { chip: 'BAB 4 • 4.7', sub: 'Reaksi di Sabah' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.7)',
  music: { key: 60, bpm: 100, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Pada **15 Julai 1946**, Sabah diserahkan kepada British… dan **tiada penentangan** daripada rakyat tempatan!', pause: 0.45 },
        'Adakah rakyat Sabah tidak peduli? Sebenarnya, ada sebab di sebaliknya!',
      ],
      board: {
        name: 'Hook – mengapa tiada penentangan?',
        visual: 'Frame pertama lengkap: peta Sabah dengan pil "15 JULAI 1946"; sepanduk kosong (tiada bantahan); tanda soal besar; cop "ADA SEBABNYA!".',
        doodle: 'Peta Sabah, sepanduk kosong, tanda soal, watak rakyat.',
        text: '15 JULAI 1946 · Tiada penentangan · Mengapa? · ADA SEBABNYA!',
        anim: 'Semua kelihatan pada 0:00; cop dihentak pada baris kedua.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('Tiada <span class="red">penentangan?</span>', { size: 'title', x: 40, y: 290, w: 1000, align: 'center', ...NOW, style: 'font-size:92px' });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:44px">SABAH · 15 JULAI 1946</span></div>', { ...NOW, x: 40, y: 410, w: 1000 });
        S.map({ bounds: SABAH, w: 560 }, { ...NOW, x: 60, y: 520, w: 560 });
        S.add(banner(D, '. . .', PAPER), { ...NOW, x: 660, y: 520, w: 340 });
        S.svg(D.rakyat({ pose: 'down' }), { ...NOW, x: 700, y: 760, w: 150 });
        S.add(D.question(), { ...NOW, x: 880, y: 760, w: 100 });
        S.stamp('ADA SEBABNYA!', { x: 190, y: 1060, w: 700, at: 1, d: 0.8, fs: 84, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.7: **Reaksi penduduk tempatan** terhadap penyerahan Sabah.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.7"; tajuk; dua kad sebab: DASAR BRITISH · KEPENTINGAN SOSIOEKONOMI.',
        doodle: 'Kad, peta kecil.',
        text: 'SUBTOPIK 4.7 · Reaksi terhadap Penyerahan Sabah · 2 sebab',
        anim: 'Tajuk ditulis; kad pop.',
      },
      draw(S) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.7</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Reaksi terhadap<br><span class="red">Penyerahan Sabah</span>', { size: 'title', x: 40, y: 400, w: 1000, align: 'center', at: 0, dur: 1.0, style: 'font-size:80px' });
        S.card('<div class="t-h3" style="text-align:center">1 · DASAR BRITISH</div>', { anim: 'slideL', x: 100, y: 720, w: 880, at: 0, d: 0.9, notape: true });
        S.card('<div class="t-h3" style="text-align:center">2 · KEPENTINGAN SOSIOEKONOMI</div>', { anim: 'slideR', x: 100, y: 860, w: 880, at: 0, d: 1.2, notape: true, color: 'gold' });
      },
    },
    {
      id: 'etnik', bg: 'grid', transition: 'paper',
      lines: [
        'Sebab pertama: **dasar British**, yang **menindas kegiatan berpersatuan**.',
        'Penduduk Sabah terdiri daripada pelbagai **kumpulan etnik**, dengan bahasa, budaya, kepercayaan, petempatan dan kegiatan ekonomi yang berbeza.',
        'Ini menyukarkan pemimpin untuk menghimpunkan semua etnik dalam **satu pertubuhan**.',
      ],
      board: {
        name: 'Dasar British (1): masyarakat pelbagai etnik',
        visual: 'Pil "SEBAB 1 · DASAR BRITISH"; barisan watak pelbagai pakaian; lima label perbezaan (bahasa, budaya, kepercayaan, petempatan, ekonomi); kad "sukar disatukan dalam satu pertubuhan".',
        doodle: 'Watak pelbagai etnik (lakaran umum), label.',
        text: 'SEBAB 1 · Dasar British menindas kegiatan berpersatuan · pelbagai etnik: bahasa · budaya · kepercayaan · petempatan · ekonomi · sukar disatukan dalam satu pertubuhan',
        anim: 'Watak pop; label muncul satu demi satu; kad naik di akhir.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">SEBAB 1 · DASAR BRITISH</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: 0.2 });
        S.text('Menindas kegiatan <span class="hl">berpersatuan</span>', { size: 'h2', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0.6 });
        [[D.rakyat(), 60], [D.wanita({ tudung: GOLD, shirt: RED }), 250], [D.petani(), 440], [D.nelayan(), 630], [D.pedagang(), 820]].forEach(([sv, x], i) => S.svg(sv, { x, y: 540, w: 160, at: 1, d: 0.05 + i * 0.1, dur: 0.6, sfx: i ? false : 'pop' }));
        [['bahasa', 0.4], ['budaya', 0.5], ['kepercayaan', 0.6], ['petempatan', 0.72], ['ekonomi', 0.85]].forEach(([t, f], i) => S.card(`<div class="t-label" style="font-size:36px;text-align:center">${t}</div>`, { anim: 'pop', x: 40 + i * 200, y: 780, w: 190, at: 1 + f, notape: true, pad: '6px 6px', rot: i % 2 ? 2 : -2 }));
        S.card('<div class="t-body" style="font-size:42px;text-align:center">Sukar dihimpunkan dalam <span class="hl">satu pertubuhan</span></div>', { tear: true, anim: 'slideU', x: 70, y: 940, w: 940, at: 2, d: 0.2 });
      },
    },
    {
      id: 'persatuan', transition: 'flip',
      lines: [
        'Namun, ada juga persatuan yang ditubuhkan, seperti **Persaudaraan Sahabat Pena Sabah**, atau PASPAS, dan **Barisan Pemuda Sabah**, atau BARIP.',
        'Pada awalnya, persatuan ini mahu memperbaiki keadaan **ekonomi** dan **politik** kaum bumiputera. Kemudian, mereka membangkitkan **kesedaran berpolitik**.',
        'British **khuatir** pengaruh pemimpin ini akan menggugat kedudukan mereka di Sabah.',
      ],
      board: {
        name: 'Persatuan di Sabah',
        visual: 'Dua sepanduk persatuan: PASPAS & BARIP dengan nama penuh; anak panah: ekonomi & politik bumiputera ➜ kesedaran berpolitik; watak pegawai British (ILUSTRASI) bermuka risau dengan belon "Khuatir!".',
        doodle: 'Sepanduk, anak panah, watak pegawai, belon.',
        text: 'PASPAS (Persaudaraan Sahabat Pena Sabah) · BARIP (Barisan Pemuda Sabah) · tujuan: ekonomi & politik bumiputera ➜ kesedaran berpolitik · British khuatir kedudukan tergugat',
        anim: 'Sepanduk pop pada nama; anak panah dilukis; belon pop pada "khuatir".',
      },
      draw(S, { D }) {
        S.text('Persatuan di <span class="red">Sabah</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add(banner(D, 'PASPAS', PAPER), { anim: 'pop', x: 60, y: 390, w: 300, at: 0, d: 0.2 });
        S.text('Persaudaraan Sahabat Pena Sabah', { size: 'note', x: 40, y: 590, w: 340, align: 'center', at: 0, d: 0.3, style: 'font-size:30px;color:#172C63' });
        S.add(banner(D, 'BARIP', GOLD), { anim: 'pop', x: 400, y: 390, w: 300, at: 0, d: 0.75 });
        S.text('Barisan Pemuda Sabah', { size: 'note', x: 380, y: 590, w: 340, align: 'center', at: 0, d: 0.85, style: 'font-size:30px;color:#172C63' });
        S.card('<div class="t-body" style="font-size:38px">Ekonomi & politik <b>bumiputera</b></div>', { anim: 'slideL', x: 60, y: 700, w: 430, at: 1, d: 0.2, notape: true, pad: '10px 16px' });
        S.arrow(500, 750, 580, 750, { at: 1, d: 0.55, color: RED, sw: 9, bend: 0 });
        S.card('<div class="t-body" style="font-size:38px"><span class="hl">Kesedaran berpolitik</span></div>', { anim: 'slideR', x: 590, y: 700, w: 430, at: 1, d: 0.7, notape: true, pad: '10px 16px' });
        S.illus({ x: 870, y: 400, at: 2, d: 0 });
        S.svg(officer(D, { mood: 'sad' }), { x: 760, y: 840, w: 180, at: 2, d: -0.1, dur: 0.6 });
        S.add('<div class="bubble" style="font-size:44px">British <b class="red">khuatir</b>: kedudukan mereka tergugat!</div>', { anim: 'pop', x: 60, y: 900, w: 660, at: 2, d: 0.3 });
      },
    },
    {
      id: 'taktik', bg: 'grid', transition: 'paper',
      lines: [
        'Jadi, British bertindak secara **halus**.',
        'Ahli persatuan ditawarkan **kenaikan pangkat**, dan pemimpin yang aktif **dipindahkan** ke bandar lain.',
        'Contohnya, **Imam Suhaili Yaakub** dari BARIP berpindah ke Pulau Labuan, dan **Tengku Noordin** dipindahkan ke Jesselton.',
        'Akhirnya, persatuan menjadi lemah kerana masalah **kewangan** dan **kekurangan pemimpin**.',
      ],
      board: {
        name: 'Taktik halus British',
        visual: 'Dua kad taktik berikon (anak tangga naik = kenaikan pangkat; anak panah pindah = dipindahkan); dua tag contoh pemimpin; cop "PERSATUAN LEMAH" dengan dua sebab.',
        doodle: 'Anak tangga, anak panah, peta kecil, cop.',
        text: 'Taktik halus · tawar kenaikan pangkat · pindahkan pemimpin aktif · Imam Suhaili Yaakub (BARIP) ➜ Pulau Labuan · Tengku Noordin (PKML) ➜ Jesselton · persatuan lemah: kewangan & kekurangan pemimpin',
        anim: 'Kad taktik meluncur; tag pop; cop dihentak.',
      },
      draw(S, { D }) {
        S.text('Taktik <span class="hl">Halus</span> British', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const stairs = `<svg viewBox="0 0 160 140">${D.R.path('M10 130 L10 100 L50 100 L50 70 L90 70 L90 40 L130 40 L130 10 L150 10 L150 130 Z', { fill: GOLD })}</svg>`;
        S.add(iconRow(fmt, stairs, 'Tawar **kenaikan pangkat**', { fs: 42, iw: 110, pad: '12px 20px' }), { anim: 'slideL', x: 60, y: 390, w: 960, at: 1, d: 0.1, sfx: 'swish' });
        S.add(iconRow(fmt, D.arrow(10, 50, 140, 50, { w: 150, h: 100, color: RED, sw: 10, bend: -0.2 }), '**Pindahkan** pemimpin aktif ke bandar lain', { fs: 42, iw: 110, pad: '12px 20px' }), { anim: 'slideL', x: 60, y: 560, w: 960, at: 1, d: 0.55, sfx: 'swish' });
        S.tag('IMAM SUHAILI YAAKUB', 'BARIP ➜ Pulau Labuan', { x: 60, y: 760, w: 460, at: 2, d: 0.1 });
        S.tag('TENGKU NOORDIN', 'PKML ➜ Jesselton', { x: 560, y: 760, w: 460, at: 2, d: 0.65 });
        S.stamp('PERSATUAN LEMAH', { x: 140, y: 930, w: 800, at: 3, d: 0.1, fs: 66, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:40px;text-align:center">masalah <b>kewangan</b> · <b>kekurangan pemimpin</b></div>', { anim: 'slideU', x: 120, y: 1090, w: 840, at: 3, d: 0.5, notape: true, pad: '10px 18px' });
      },
    },
    {
      id: 'pentadbiran', transition: 'slideUp',
      lines: [
        'Dasar British juga **mengehadkan peluang** penduduk tempatan dalam bidang pentadbiran.',
        'Akibatnya, penduduk Sabah kurang berpengalaman dalam sistem **birokrasi Barat**.',
      ],
      board: {
        name: 'Dasar British (2): hadkan peluang pentadbiran',
        visual: 'Pintu pejabat kerajaan dengan palang "TERHAD"; watak rakyat di luar; kad "kurang pengalaman birokrasi Barat".',
        doodle: 'Bangunan pejabat, palang, watak.',
        text: 'Hadkan peluang dalam pentadbiran ➜ kurang pengalaman dalam sistem birokrasi Barat',
        anim: 'Bangunan dilukis; palang pop; kad naik.',
      },
      draw(S, { D }) {
        S.text('Peluang <span class="red">Terhad</span>', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
        S.svg(D.palace(), { x: 120, y: 450, w: 460, at: 0, d: 0.4 });
        S.stamp('TERHAD', { x: 200, y: 600, w: 300, at: 0, d: 1.0, fs: 64, style: 'text-align:center' });
        S.svg(D.rakyat({ mood: 'sad' }), { x: 680, y: 480, w: 200, at: 0, d: 1.3, dur: 0.6 });
        S.card('<div class="t-body" style="font-size:44px;text-align:center">Kurang pengalaman dalam sistem <span class="hl">birokrasi Barat</span></div>', { tear: true, anim: 'slideU', x: 70, y: 900, w: 940, at: 1, d: 0.2 });
      },
    },
    {
      id: 'sosioekonomi', bg: 'grid', transition: 'paper',
      lines: [
        'Sebab kedua: **kepentingan sosioekonomi** penduduk tempatan.',
        'Penyerahan Sabah dianggap sebagai **peluang** untuk melibatkan diri dalam pentadbiran, memajukan **perniagaan**, dan meluaskan **jaringan perdagangan**.',
        'Ia juga dapat **membangunkan** Sabah selepas perang. Selain itu, penduduk **tidak memahami tujuan** penyerahan tersebut.',
      ],
      board: {
        name: 'Sebab 2: Kepentingan sosioekonomi',
        visual: 'Pil "SEBAB 2"; empat kad peluang berikon (pentadbiran, perniagaan, perdagangan, pembangunan); kad tanda soal "tidak memahami tujuan penyerahan".',
        doodle: 'Skrol, gerai pasar, kapal, istana, tanda soal.',
        text: 'SEBAB 2 · Kepentingan sosioekonomi · peluang: pentadbiran · perniagaan · jaringan perdagangan · bangunkan Sabah selepas perang · tidak memahami tujuan penyerahan',
        anim: 'Kad peluang pop mengikut sebutan; kad tanda soal naik di akhir.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="background:#C93436;color:#FFFDF7">SEBAB 2</span></div>', { anim: 'pop', x: 40, y: 290, w: 1000, at: 0, d: -0.1 });
        S.text('Kepentingan <span class="hl">Sosioekonomi</span>', { size: 'h2', x: 60, y: 380, w: 960, align: 'center', at: 0, d: 0.2 });
        const c = [['Pentadbiran', D.scroll('', { color: GOLD }), 1, 0.3], ['Perniagaan', D.market(), 1, 0.55], ['Jaringan perdagangan', D.ship({ waves: false }), 1, 0.78], ['Bangunkan Sabah', D.palace(), 2, 0.1]];
        c.forEach(([t, ic, k, f], i) => S.add(iconRow(fmt, ic, `**${t}**`, { fs: 40, iw: 110, pad: '10px 16px' }), { anim: 'pop', x: 60 + (i % 2) * 490, y: 500 + Math.floor(i / 2) * 200, w: 470, at: k + f, sfx: 'pop' }));
        S.add(iconRow(fmt, D.question(), 'Penduduk **tidak memahami tujuan** penyerahan', { fs: 42, iw: 70, pad: '12px 20px' }), { anim: 'slideU', x: 60, y: 940, w: 960, at: 2, d: 0.55, sfx: 'swish' });
      },
    },
    {
      id: 'banding', transition: 'flip',
      lines: [
        'Bandingkan ketiga-tiga reaksi. Malayan Union ditentang hebat, dan **berjaya** digantikan.',
        'Gerakan antipenyerahan Sarawak **gagal**, tetapi membangkitkan nasionalisme. Penyerahan Sabah pula **tidak ditentang**.',
        'Namun, dasar British selepas perang mencetuskan gelombang **kebangkitan nasionalisme** untuk membebaskan tanah air daripada belenggu penjajah.',
      ],
      board: {
        name: 'Perbandingan tiga reaksi',
        visual: 'Jadual tiga lajur: TANAH MELAYU (Malayan Union – ditentang hebat – BERJAYA, diganti PTM 1948) · SARAWAK (majoriti menentang – GAGAL, bangkitkan nasionalisme) · SABAH (tiada penentangan); kad emas "GELOMBANG NASIONALISME".',
        doodle: 'Jadual tulisan tangan, cop kecil, bintang.',
        text: 'Tanah Melayu – ditentang – BERJAYA · Sarawak – menentang – GAGAL (nasionalisme bangkit) · Sabah – tiada penentangan · Dasar British ➜ gelombang kebangkitan nasionalisme',
        anim: 'Lajur meluncur masuk satu demi satu; cop kecil dihentak; kad emas naik di akhir.',
      },
      draw(S, { D }) {
        S.text('Tiga <span class="hl">Reaksi</span>', { size: 'h2', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        const col = (x, name, react, res, color, k, f) => S.card(`<div class="t-h3" style="font-size:38px;text-align:center;color:${color}">${name}</div><div class="t-body" style="font-size:36px;text-align:center;min-height:120px">${react}</div><div class="t-h3" style="font-size:40px;text-align:center"><span class="hl">${res}</span></div>`, { anim: 'slideU', x, y: 400, w: 310, at: k + f, pad: '14px 10px' });
        col(50, 'TANAH MELAYU', 'Malayan Union ditentang hebat', 'BERJAYA', RED, 0, 0.4);
        col(385, 'SARAWAK', 'Majoriti menentang penyerahan', 'GAGAL', RED, 1, 0.05);
        col(720, 'SABAH', 'Tiada penentangan', '—', NAVY, 1, 0.75);
        S.text('➜ diganti PTM 1948', { size: 'note', x: 50, y: 720, w: 310, align: 'center', at: 0, d: 4.2 });
        S.text('➜ nasionalisme bangkit', { size: 'note', x: 385, y: 720, w: 310, align: 'center', at: 1, d: 2.2 });
        S.card('<div class="t-h3" style="text-align:center">Dasar British ➜ gelombang <span class="red">kebangkitan nasionalisme</span></div>', { color: 'gold', anim: 'slideU', x: 60, y: 850, w: 960, at: 2, d: 0.4 });
        S.add(D.star(), { anim: 'pop', x: 470, y: 1060, w: 140, at: 2, d: 1.2, pulse: [{ at: 2, d: 1.8 }] });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Kenali sejarah, fahami masa kini. Seterusnya: **Ulang Kaji Bab 4**, semua subtopik dalam satu video!',
      ],
      tail: 0.8,
      board: {
        name: 'Episod seterusnya',
        visual: 'Maskot dan kad episod seterusnya "Ulang Kaji Bab 4".',
        doodle: 'Pelekat maskot, anak panah, buku.',
        text: 'Seterusnya: Ulang Kaji Bab 4',
        anim: 'Maskot pop; anak panah dilukis; kad pop.',
      },
      draw(S, { D }) {
        S.text('Jom <span class="hl">ulang kaji!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">Ulang Kaji Bab 4</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
