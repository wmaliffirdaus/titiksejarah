// BAB 4 · EPISOD 03 – Subtopik 4.2: Gagasan Malayan Union (≈ 4–5 min)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 96–99.
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, MALAYA, NOW, officer, iconRow, numCard, END } from './b4lib.js';

const SULTAN9 = [
  ['Johor', '20 Okt 1945', 'pertama'], ['Selangor', '24 Okt 1945', ''], ['Pahang', '2 Nov 1945', 'terpaksa'],
  ['N. Sembilan', '14 Nov 1945', 'didesak'], ['Perak', '22 Nov 1945', 'lengahkan masa'], ['Kedah', '2 Dis 1945', 'bertegas enggan'],
  ['Perlis', '4 Dis 1945', 'didesak'], ['Kelantan', '17 Dis 1945', 'diugut'], ['Terengganu', '21 Dis 1945', 'enggan · terakhir'],
];

export default {
  id: 'b4_03',
  file: '03_Bab4_Subtopik_4.2',
  title: 'Gagasan Malayan Union',
  header: { chip: 'BAB 4 • 4.2', sub: 'Gagasan Malayan Union' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.2)',
  music: { key: 57, bpm: 102, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Dalam masa hanya **dua bulan**, sembilan orang Raja-raja Melayu menurunkan tandatangan pada satu perjanjian.', pause: 0.45 },
        'Perjanjian yang menghakis kuasa baginda sendiri! Bagaimana ini boleh berlaku?',
      ],
      board: {
        name: 'Hook – sembilan tandatangan dalam dua bulan',
        visual: 'Frame pertama lengkap: sembilan mahkota kecil tersusun 3×3 di sekeliling dokumen perjanjian "MALAYAN UNION"; cop "2 BULAN"; kemudian tanda soal merah.',
        doodle: 'Mahkota ×9, dokumen perjanjian bercop, pena, tanda soal.',
        text: '9 RAJA-RAJA MELAYU · 2 BULAN · Bagaimana?',
        anim: 'Mahkota & dokumen kelihatan pada 0:00; cop "2 BULAN" dihentak; tanda soal pop pada baris kedua.',
        music: 'Sting jenama pembuka, kemudian muzik latar bermula perlahan.',
      },
      draw(S, { D }) {
        S.text('<span class="red">9</span> Raja-raja Melayu', { size: 'title', x: 60, y: 290, w: 960, align: 'center', ...NOW });
        S.add(D.treaty('MU'), { ...NOW, x: 420, y: 560, w: 240 });
        for (let i = 0; i < 9; i++) {
          const a = (i / 9) * Math.PI * 2 - Math.PI / 2, x = 540 + 390 * Math.cos(a) - 55, y = 720 + 270 * Math.sin(a) - 40;
          S.add(D.crown(), { ...NOW, x, y, w: 110, rot: (i % 2 ? 6 : -6) });
        }
        S.stamp('2 BULAN!', { x: 240, y: 1060, w: 600, at: 0, d: 0.9, fs: 96, style: 'text-align:center;white-space:nowrap' });
        S.add(D.question(), { anim: 'pop', x: 880, y: 1040, w: 100, at: 1, d: 1.2 });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 4.2: **Gagasan Malayan Union**.'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Pil "SUBTOPIK 4.2"; tajuk; skrol "MALAYAN UNION" dan peta kecil Tanah Melayu.',
        doodle: 'Skrol, peta Semenanjung.',
        text: 'SUBTOPIK 4.2 · Gagasan Malayan Union',
        anim: 'Tajuk ditulis; skrol dilukis.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 4.2</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Gagasan<br><span class="red">Malayan Union</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.svg(D.scroll('MALAYAN UNION', { ts: 28 }), { x: 180, y: 680, w: 300, at: 0, d: 0.6 });
        S.map({ bounds: MALAYA, w: 330 }, { x: 560, y: 700, w: 340, at: 0, d: 0.8, dur: 0.9 });
      },
    },
    {
      id: 'tujuan', bg: 'grid', transition: 'paper',
      lines: [
        'Malayan Union diperkenalkan bagi **menggantikan BMA**.',
        'British berhasrat untuk **melicinkan sistem pentadbiran**, **meningkatkan pelaburan ekonomi**, dan **mengukuhkan pertahanan**.',
        'British juga mahu **mengekalkan orang asing** sebagai sumber tenaga kerja untuk meningkatkan ekonomi.',
      ],
      board: {
        name: 'Tujuan Malayan Union',
        visual: 'Kad "BMA ➜ MALAYAN UNION"; empat kad tujuan berikon dalam grid 2×2.',
        doodle: 'Skrol (pentadbiran), syiling (pelaburan), perisai (pertahanan), watak pekerja (tenaga kerja).',
        text: 'Ganti BMA · Licinkan pentadbiran · Tingkat pelaburan ekonomi · Kukuhkan pertahanan · Kekalkan orang asing sebagai tenaga kerja',
        anim: 'Kad pertama pop; setiap kad tujuan meluncur masuk serentak dengan sebutan.',
      },
      draw(S, { D }) {
        S.text('Tujuan <span class="hl">British</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-h3" style="text-align:center">BMA <span class="red">➜</span> MALAYAN UNION</div>', { color: 'gold', anim: 'pop', x: 140, y: 400, w: 800, at: 0, d: 0.3 });
        const c = [['Licinkan **pentadbiran**', D.scroll('', { color: GOLD }), 1, 0.12], ['Tingkat **pelaburan ekonomi**', D.coins(), 1, 0.45], ['Kukuhkan **pertahanan**', D.shield(), 1, 0.78], ['Kekalkan **orang asing** sebagai tenaga kerja', D.petani({ pose: 'up' }), 2, 0.2]];
        c.forEach(([t, ic, k, f], i) => {
          const x = 60 + (i % 2) * 490, y = 560 + Math.floor(i / 2) * 300;
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:16px;height:250px;box-sizing:border-box;padding:12px 18px"><div style="width:120px;flex:none">${ic}</div><div class="t-body" style="font-size:40px">${fmt(t)}</div></div>`, { anim: 'slideR', x, y, w: 470, at: k + f, rot: i % 2 ? 1 : -1, sfx: 'swish' });
        });
      },
    },
    {
      id: 'kronologi1', transition: 'flip',
      lines: [
        'Rancangan ini bermula di London. Pada **Februari 1943**, **Unit Perancang Tanah Melayu** dibentuk, diketuai oleh Mejar Jeneral **Ralph Hone**.',
        'Pada **25 April 1945**, Persatuan Pelajar Melayu Britain menghantar memorandum, meminta supaya kewarganegaraan **tidak** mengikut prinsip **jus soli**.',
        '**Tan Cheng Lock** dan Persatuan Cina Seberang Laut juga menghantar memorandum tentang masa depan Tanah Melayu.',
      ],
      board: {
        name: 'Kronologi (1): London, 1943–1945',
        visual: 'Garis masa menegak bertitik dengan tiga hentian bertarikh; kad penerangan di sebelah setiap hentian.',
        doodle: 'Bulatan tarikh, skrol memorandum, watak pegawai (ILUSTRASI).',
        text: 'Feb 1943 – Unit Perancang Tanah Melayu (Mejar Jeneral Ralph Hone), London · 25 Apr 1945 – Memorandum Persatuan Pelajar Melayu Britain: tolak jus soli · Tan Cheng Lock & Persatuan Cina Seberang Laut – memorandum masa depan Tanah Melayu',
        anim: 'Garis masa dilukis ke bawah; setiap hentian & kad muncul tepat pada tarikh disebut.',
      },
      draw(S, { D }) {
        S.text('Kronologi <span class="red">(1)</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add('<svg viewBox="0 0 40 1000"><path d="M20 0 V1000" stroke="#172C63" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/></svg>', { anim: 'wipeD', x: 120, y: 400, w: 40, h: 760, at: 0, d: 0, dur: 1.5, sfx: false });
        const st = [['FEB 1943', '<b>Unit Perancang Tanah Melayu</b> dibentuk di London · diketuai Mejar Jeneral <span class="hl">Ralph Hone</span>', 0, 0.15], ['25 APR 1945', 'Memorandum <b>Persatuan Pelajar Melayu Britain</b>: kewarganegaraan <span class="hl">bukan jus soli</span>', 1, 0.05], ['1945', '<b>Tan Cheng Lock</b> & Persatuan Cina Seberang Laut: memorandum <span class="hl">masa depan</span> Tanah Melayu', 2, 0.05]];
        st.forEach(([d, t, k, f], i) => {
          const y = 410 + i * 260;
          S.add(`<div style="text-align:center"><span class="pill" style="font-size:28px;padding:4px 14px">${d}</span></div>`, { anim: 'pop', x: 30, y: y + 10, w: 220, at: k + f });
          S.card(`<div class="t-body" style="font-size:40px">${t}</div>`, { anim: 'slideR', x: 270, y, w: 750, at: k + f, d: 0.15, pad: '14px 20px' });
        });
      },
    },
    {
      id: 'kronologi2', bg: 'grid', transition: 'paper',
      lines: [
        'Pada **10 Oktober 1945**, Setiausaha Tanah Jajahan British, **George Henry Hall**, membentangkan rancangan Malayan Union di Parlimen British.',
        'Rancangan ini disiarkan dalam Warta Kerajaan sebagai **Kertas Putih 6274**, yang mengandungi **13 perkara**.',
        'Kertas Putih ini diluluskan pada **22 Januari 1946**, dan Malayan Union dilaksanakan pada **1 April 1946**.',
      ],
      board: {
        name: 'Kronologi (2): Parlimen British ➜ pelaksanaan',
        visual: 'Garis masa mendatar dengan tiga hentian; dokumen "KERTAS PUTIH 6274 · 13 PERKARA"; cop "DILAKSANAKAN 1 APRIL 1946".',
        doodle: 'Bangunan parlimen ringkas (istana), dokumen perjanjian, cop.',
        text: '10 Okt 1945 – George Henry Hall bentang di Parlimen British · Kertas Putih 6274 (13 perkara, Warta Kerajaan) · 22 Jan 1946 – diluluskan · 1 Apr 1946 – Malayan Union dilaksanakan',
        anim: 'Hentian garis masa pop mengikut tarikh; dokumen dilukis; cop dihentak pada "1 April 1946".',
      },
      draw(S, { D }) {
        S.text('Kronologi <span class="red">(2)</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(officer(D, { pose: 'present', prop: 'scroll' }), { x: 70, y: 400, w: 200, at: 0, d: 0.3, dur: 0.7 });
        S.tag('GEORGE HENRY HALL', 'Setiausaha Tanah Jajahan British', { x: 290, y: 430, w: 600, at: 0, d: 0.5 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:30px">10 OKT 1945 · Parlimen British</span></div>', { anim: 'pop', x: 290, y: 560, w: 600, at: 0, d: 0.05 });
        S.illus({ x: 70, y: 380, at: 0, d: 0.5 });
        S.svg(D.treaty('6274'), { x: 90, y: 700, w: 230, at: 1, d: 0.2 });
        S.card('<div class="t-h3">KERTAS PUTIH <span class="red">6274</span></div><div class="t-body" style="font-size:40px">Disiarkan dalam Warta Kerajaan · <span class="hl">13 perkara</span></div>', { anim: 'slideR', x: 360, y: 720, w: 660, at: 1, d: 0.3 });
        S.card('<div class="t-body" style="font-size:40px">Diluluskan: <b>22 Januari 1946</b></div>', { anim: 'slideR', x: 360, y: 930, w: 660, at: 2, d: 0, notape: true, pad: '10px 20px' });
        S.stamp('DILAKSANAKAN · 1 APRIL 1946', { x: 40, y: 1090, w: 1000, at: 2, d: 0.62, fs: 50, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'ciri-kesatuan', transition: 'slideUp',
      lines: [
        'Apakah ciri-ciri Malayan Union? Pertama, **kesatuan**.',
        'Negeri-negeri Melayu Bersekutu, Negeri-negeri Melayu Tidak Bersekutu dan Negeri-negeri Selat, **kecuali Singapura**, disatukan menjadi satu unit pentadbiran.',
        'Malayan Union diketuai oleh seorang **Gabenor British** yang dilantik oleh Raja England.',
        'Majlis Eksekutif dan Majlis Perundangan pula dibentuk di bawah kawalan **Pesuruhjaya Tinggi British**.',
      ],
      board: {
        name: 'Ciri 1: Kesatuan & ketua pentadbir',
        visual: 'Peta Tanah Melayu dengan tiga kumpulan negeri (NNMB, NNMTB, NNS) bergabung menjadi satu; Singapura dipangkah merah; kad Gabenor British & dua majlis.',
        doodle: 'Peta, penanda, pangkah merah pada Singapura, watak Gabenor (ILUSTRASI).',
        text: 'KESATUAN: NNMB + NNMTB + NNS (kecuali Singapura) = 1 unit pentadbiran · GABENOR BRITISH (dilantik Raja England) · Majlis Eksekutif & Majlis Perundangan di bawah kawalan Pesuruhjaya Tinggi British',
        anim: 'Peta dilakar; tiga label pop; pangkah Singapura dihentak; kad Gabenor & majlis meluncur masuk.',
      },
      draw(S, { D }) {
        S.text('Ciri 1: <span class="hl">Kesatuan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const at = S.map({ bounds: [[99.2, 0.9], [104.8, 7.0]], w: 420 }, { x: 40, y: 390, w: 440, at: 0, d: 0.3, dur: 1.0 });
        S.pin(at, 101.1, 4.4, 'NNMB', { at: 1, d: 0.1, color: NAVY, fs: 34 });
        S.pin(at, 102.0, 5.9, 'NNMTB', { at: 1, d: 0.6, color: RED, fs: 34 });
        S.pin(at, 102.25, 2.2, 'NNS', { at: 1, d: 1.6, color: GOLD, fs: 34 });
        const [sx, sy] = at(103.85, 1.33);
        S.add(D.cross(), { anim: 'stamp', x: sx - 40, y: sy - 40, w: 80, at: 1, d: 2.6 });
        S.text('Singapura', { size: 'note', x: sx - 20, y: sy + 30, w: 200, at: 1, d: 2.7 });
        S.card('<div class="t-h3" style="color:#F5C928;text-align:center">1 UNIT<br>PENTADBIRAN</div>', { color: 'navy', anim: 'pop', x: 520, y: 430, w: 480, at: 1, d: 3.2 });
        S.svg(officer(D, { pose: 'point' }), { x: 520, y: 700, w: 160, at: 2, d: 0, dur: 0.6 });
        S.tag('GABENOR BRITISH', 'dilantik oleh Raja England', { x: 690, y: 750, w: 330, at: 2, d: 0.3 });
        S.card('<div class="t-body" style="font-size:36px">Majlis <b>Eksekutif</b> & Majlis <b>Perundangan</b> ➜ di bawah kawalan <span class="hl">Pesuruhjaya Tinggi British</span></div>', { anim: 'slideU', x: 60, y: 1010, w: 960, at: 3, d: 0.1, pad: '12px 20px' });
      },
    },
    {
      id: 'ciri-raja', bg: 'grid', transition: 'flip',
      lines: [
        'Kedua, kedudukan **Raja-raja Melayu**. Sultan hanya menjadi ahli **Majlis Raja-Raja**, yang membincangkan soal **agama Islam** dan **adat istiadat Melayu** sahaja.',
        { text: 'Malayan Union telah mengubah status Tanah Melayu daripada **negeri naungan** kepada **tanah jajahan** British.', pause: 0.3 },
      ],
      board: {
        name: 'Ciri 2: Kedudukan Raja-raja Melayu',
        visual: 'Sultan dengan mahkota mengecil; kotak "MAJLIS RAJA-RAJA" dengan dua ikon (Islam, adat); anak panah status "NEGERI NAUNGAN ➜ TANAH JAJAHAN" dengan cop merah.',
        doodle: 'Watak Sultan, bintang (Islam), skrol (adat), cop.',
        text: 'Sultan = ahli Majlis Raja-Raja · hanya soal agama Islam & adat istiadat Melayu · Status: NEGERI NAUNGAN ➜ TANAH JAJAHAN',
        anim: 'Sultan pop; dua ikon muncul pada "agama Islam" & "adat"; anak panah status dilukis; cop TANAH JAJAHAN dihentak.',
      },
      draw(S, { D }) {
        S.text('Ciri 2: <span class="hl">Raja-raja Melayu</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.sultan({ mood: 'sad' }), { x: 70, y: 400, w: 230, at: 0, d: 0.2, dur: 0.7 });
        S.card('<div class="t-h3" style="text-align:center">MAJLIS RAJA-RAJA</div><div class="t-label red" style="text-align:center">hanya bincang…</div>', { color: 'gold', anim: 'pop', x: 340, y: 400, w: 680, at: 0, d: 0.3 });
        S.add(iconRow(fmt, D.star(), '**Agama Islam**', { fs: 42, iw: 70 }), { anim: 'slideR', x: 340, y: 590, w: 330, at: 0, d: 2.3, sfx: 'swish' });
        S.add(iconRow(fmt, D.scroll('', { color: RED }), '**Adat istiadat Melayu**', { fs: 38, iw: 60 }), { anim: 'slideR', x: 690, y: 590, w: 330, at: 0, d: 3.1, sfx: 'swish' });
        S.card('<div class="t-h3" style="text-align:center">NEGERI NAUNGAN</div>', { anim: 'slideL', x: 60, y: 830, w: 440, at: 1, d: 0.2, notape: true });
        S.arrow(510, 880, 590, 880, { at: 1, d: 0.6, color: RED, sw: 10, bend: 0 });
        S.stamp('TANAH JAJAHAN', { x: 580, y: 830, w: 440, at: 1, d: 0.75, fs: 46, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:36px;text-align:center"><b>Naungan</b>: raja kekal berdaulat · <b>Jajahan</b>: dikuasai sepenuhnya oleh British</div>', { tear: true, anim: 'slideU', x: 60, y: 1010, w: 960, at: 1, d: 1.6 });
      },
    },
    {
      id: 'ciri-warga', transition: 'paper',
      lines: [
        'Ketiga, **kewarganegaraan** berasaskan prinsip **jus soli**, iaitu kewarganegaraan berdasarkan **tempat lahir**.',
        'Semua yang dilahirkan di Tanah Melayu dan Singapura diiktiraf sebagai warga Malayan Union.',
        'Mereka yang berumur **18 tahun** ke atas dan bermastautin **10 hingga 15 tahun** juga diberikan kewarganegaraan.',
        'Kanak-kanak bawah 18 tahun yang ibu bapanya warganegara turut diberikan kewarganegaraan.',
      ],
      board: {
        name: 'Ciri 3: Kewarganegaraan jus soli',
        visual: 'Kad definisi "JUS SOLI = tempat lahir"; tiga kad syarat bernombor dengan ikon (bayi/peta, umur 18+, keluarga).',
        doodle: 'Kad kertas koyak, penanda peta, watak dewasa & kanak-kanak.',
        text: 'JUS SOLI = kewarganegaraan berdasarkan tempat lahir · 1 Lahir di Tanah Melayu & Singapura · 2 Umur 18+ & bermastautin 10–15 tahun · 3 Bawah 18 tahun, ibu bapa warganegara',
        anim: 'Kad definisi naik; setiap syarat meluncur masuk mengikut narasi.',
      },
      draw(S, { D }) {
        S.text('Ciri 3: <span class="hl">Kewarganegaraan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="tw red" style="font-size:28px">DEFINISI</div><div class="t-body" style="font-size:48px"><span class="hl"><i>Jus soli</i></span> = kewarganegaraan berdasarkan <b>tempat lahir</b></div>', { tear: true, anim: 'slideU', x: 70, y: 400, w: 940, at: 0, d: 0.3 });
        S.card(numCard(1, 'Lahir di <b>Tanah Melayu</b> & <b>Singapura</b>', RED, 42), { anim: 'slideL', x: 70, y: 660, w: 760, at: 1, d: 0 });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 860, y: 640, w: 150, at: 1, d: 0.3, dur: 0.6, sfx: false });
        S.card(numCard(2, 'Umur <span class="hl">18+</span> & bermastautin <span class="hl">10–15 tahun</span>', NAVY, 42), { anim: 'slideL', x: 70, y: 870, w: 760, at: 2, d: 0 });
        S.svg(D.pedagang(), { x: 860, y: 850, w: 150, at: 2, d: 0.3, dur: 0.6, sfx: false });
        S.card(numCard(3, 'Bawah 18 tahun · ibu bapa <b>warganegara</b>', RED, 42), { anim: 'slideL', x: 70, y: 1080, w: 760, at: 3, d: 0 });
        S.svg(D.wanita({ pose: 'cheer' }), { x: 860, y: 1060, w: 150, at: 3, d: 0.3, dur: 0.6, sfx: false });
      },
    },
    {
      id: 'willan', bg: 'grid', transition: 'slideUp',
      lines: [
        'Untuk melaksanakan Malayan Union, British memerlukan **tandatangan Raja-raja Melayu**.',
        '**H.C. Willan** merintis jalan, menghadap Raja-raja Melayu dari **8 hingga 29 September 1945** untuk meninjau sokongan mereka.',
        'Dalam laporannya, Willan sangat **yakin** bahawa Raja-raja Melayu akan menyokong British.',
      ],
      board: {
        name: 'H.C. Willan merintis jalan',
        visual: 'Peta Tanah Melayu dengan laluan bertitik merah melalui negeri-negeri; watak Willan (ILUSTRASI); kad tarikh; belon "Yakin!".',
        doodle: 'Peta, laluan bertitik, watak pegawai, belon kata.',
        text: 'Perlu tandatangan Raja-raja Melayu · H.C. WILLAN · 8–29 Sept 1945 · menghadap Raja-raja Melayu · yakin Raja-raja akan menyokong',
        anim: 'Peta dilakar; laluan dilukis; watak & tag pop; belon pop pada "yakin".',
      },
      draw(S, { D }) {
        S.text('Misi 1: <span class="hl">H.C. Willan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-body" style="font-size:42px;text-align:center">British perlu <span class="hl">tandatangan Raja-raja Melayu</span></div>', { color: 'gold', anim: 'pop', x: 80, y: 400, w: 920, at: 0, d: 0.3, pad: '12px 20px' });
        const at = S.map({ bounds: MALAYA, w: 400 }, { x: 560, y: 560, w: 440, at: 1, d: -0.2, dur: 0.9 });
        const route = [[103.75, 1.6], [101.5, 3.1], [100.4, 6.1], [100.2, 6.45], [101.1, 4.6], [102.0, 2.8], [103.3, 3.8], [103.1, 5.3], [102.2, 6.1]];
        const pts = route.map(([lo, la]) => at(lo, la));
        const minx = Math.min(...pts.map((p) => p[0])) - 10, miny = Math.min(...pts.map((p) => p[1])) - 10;
        const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${(x - minx).toFixed(0)} ${(y - miny).toFixed(0)}`).join(' ');
        const W = Math.max(...pts.map((p) => p[0])) - minx + 10, H = Math.max(...pts.map((p) => p[1])) - miny + 10;
        S.svg(`<svg viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}"><path d="${d}" stroke="#C93436" stroke-width="5" fill="none" stroke-dasharray="10 10"/></svg>`, { x: minx, y: miny, w: W, at: 1, d: 0.6, dur: 2.5, sfx: false });
        S.illus({ x: 70, y: 560, at: 1, d: 0 });
        S.svg(officer(D, { pose: 'point' }), { x: 90, y: 600, w: 190, at: 1, d: 0.1, dur: 0.6 });
        S.tag('H.C. WILLAN', 'Timbalan Ketua Pegawai Hal Ehwal Awam', { x: 60, y: 940, w: 480, at: 1, d: 0.3 });
        S.add('<div style="text-align:center"><span class="pill" style="font-size:32px">8–29 SEPT 1945</span></div>', { anim: 'pop', x: 60, y: 1070, w: 480, at: 1, d: 0.9 });
        S.add('<div class="bubble" style="font-size:40px">"Raja-raja pasti <b class="red">setuju</b>!"</div>', { anim: 'pop', x: 280, y: 590, w: 300, at: 2, d: 0.3 });
      },
    },
    {
      id: 'macmichael', transition: 'paper',
      lines: [
        'Kemudian, **Sir Harold MacMichael** tiba di Port Swettenham pada **11 Oktober 1945**, menaiki kapal **Royalist**, ditemani jurubahasa **A.T. Newboult**.',
        'Ternyata, Raja-raja Melayu tidak semudah itu. MacMichael tetap menerima **tentangan**.',
        'Beliau pun menggunakan pelbagai taktik: **desakan**, **paksaan** dan **ugutan**.',
        'Dalam masa **dua bulan**, beliau berjaya mendapatkan tandatangan **sembilan** Raja-raja Melayu.',
      ],
      board: {
        name: 'Misi Sir Harold MacMichael',
        visual: 'Kapal "ROYALIST" tiba di pelabuhan; watak MacMichael (ILUSTRASI) + jurubahasa; tiga cop taktik: DESAKAN · PAKSAAN · UGUTAN; kaunter "9 TANDATANGAN · 2 BULAN".',
        doodle: 'Kapal, dua watak pegawai, cop, pena.',
        text: 'SIR HAROLD MACMICHAEL · 11 Okt 1945 · Port Swettenham · kapal Royalist · jurubahasa A.T. Newboult · menerima tentangan · DESAKAN · PAKSAAN · UGUTAN · 9 tandatangan dalam 2 bulan',
        anim: 'Kapal meluncur masuk; watak pop; tiga cop dihentak satu demi satu; kaunter pop.',
      },
      draw(S, { D }) {
        S.text('Misi 2: <span class="hl">MacMichael</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.add(D.ship({ hull: NAVY, sail: PAPER }), { anim: 'slideR', x: 60, y: 390, w: 330, at: 0, d: 0.1 });
        S.text('Kapal <b>Royalist</b> · Port Swettenham', { size: 'note', x: 40, y: 640, w: 420, align: 'center', at: 0, d: 0.65 });
        S.illus({ x: 870, y: 380, at: 0, d: 0.2 });
        S.svg(officer(D, { pose: 'present' }), { x: 470, y: 400, w: 170, at: 0, d: 0.2, dur: 0.6 });
        S.tag('SIR HAROLD MACMICHAEL', '11 Oktober 1945', { x: 640, y: 450, w: 380, at: 0, d: 0.3 });
        S.svg(officer(D, { prop: 'book' }), { x: 470, y: 620, w: 130, at: 0, d: 0.85, dur: 0.6, sfx: false });
        S.tag('A.T. NEWBOULT', 'jurubahasa', { x: 640, y: 650, w: 300, at: 0, d: 0.88 });
        S.text('Raja-raja Melayu <span class="red">menentang!</span>', { size: 'h3', x: 60, y: 800, w: 960, align: 'center', at: 1, d: 0.3 });
        [['DESAKAN', 60, 0.45], ['PAKSAAN', 390, 0.62], ['UGUTAN', 720, 0.8]].forEach(([t, x, f], i) => S.stamp(t, { x, y: 890, w: 300, at: 2 + f, fs: 54, rot: [-4, 3, -2][i], style: 'text-align:center' }));
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">9 tandatangan · 2 bulan</div>', { color: 'navy', anim: 'slideU', x: 120, y: 1080, w: 840, at: 3, d: 0.4 });
      },
    },
    {
      id: 'sembilan', bg: 'grid', transition: 'flip', gap: 0.3,
      lines: [
        'Sultan Johor menandatangani dahulu, pada **20 Oktober 1945**, diikuti Sultan Selangor.',
        'Sultan Pahang dan Yang di-Pertuan Besar Negeri Sembilan **terpaksa** menandatangani. Sultan Perak cuba **melengahkan masa**.',
        'Sultan Kedah **bertegas enggan**, tetapi akhirnya menandatangani juga. Raja Perlis **didesak**, dan Sultan Kelantan **diugut** tidak akan diiktiraf.',
        'Sultan Terengganu pula enggan kerana perjanjian itu bertentangan dengan **Undang-Undang Tubuh Negeri**. Baginda menandatangani terakhir, pada **21 Disember 1945**.',
      ],
      board: {
        name: 'Sembilan tandatangan Raja-raja Melayu',
        visual: 'Grid 3×3 kad negeri bermahkota: nama negeri, tarikh tandatangan dan catatan ringkas; setiap kad pop tepat ketika negerinya disebut.',
        doodle: 'Mahkota kecil, cop kecil.',
        text: 'Johor 20 Okt · Selangor 24 Okt · Pahang 2 Nov (terpaksa) · N. Sembilan 14 Nov (didesak) · Perak 22 Nov (lengahkan masa) · Kedah 2 Dis (bertegas enggan) · Perlis 4 Dis (didesak) · Kelantan 17 Dis (diugut) · Terengganu 21 Dis (enggan – Undang-Undang Tubuh Negeri)',
        anim: 'Kad negeri pop satu demi satu mengikut narasi.',
      },
      draw(S, { D }) {
        S.text('<span class="red">9</span> Tandatangan (1945)', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const cue = [[0, 0.05], [0, 0.75], [1, 0.05], [1, 0.25], [1, 0.75], [2, 0.05], [2, 0.42], [2, 0.65], [3, 0.05]];
        SULTAN9.forEach(([n, d, note], i) => {
          const x = 50 + (i % 3) * 330, y = 400 + Math.floor(i / 3) * 300;
          S.card(`<div style="text-align:center"><div style="width:70px;margin:0 auto">${D.crown()}</div><div class="t-h3" style="font-size:40px">${n}</div><div class="tw red" style="font-size:24px">${d}</div>${note ? `<div class="t-label" style="font-size:34px">${note}</div>` : '<div style="height:37px"></div>'}</div>`, { anim: 'pop', x, y, w: 310, at: cue[i][0] + cue[i][1], rot: i % 2 ? 1.5 : -1.5, pad: '10px 10px', notape: true, sfx: 'pop' });
        });
      },
    },
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: [
        'Cara Willan dan MacMichael yang penuh **desakan** dan **paksaan** tidak dipersetujui, lalu menimbulkan reaksi penentangan.',
        'Pengajarannya: kita perlu menolak sebarang bentuk **penjajahan** demi kedaulatan tanah air. Seterusnya: bagaimana rakyat **bangkit menentang** Malayan Union!',
      ],
      tail: 0.8,
      board: {
        name: 'Iktibar & episod seterusnya',
        visual: 'Cop "DESAKAN & PAKSAAN"; kad koyak iktibar; maskot dan kad episod seterusnya.',
        doodle: 'Mentol, kad koyak, pelekat maskot.',
        text: 'Desakan & paksaan ➜ penentangan · IKTIBAR: tolak penjajahan demi kedaulatan tanah air · Seterusnya: 4.3 Reaksi terhadap Malayan Union',
        anim: 'Cop dihentak; kad naik; maskot & kad seterusnya pop.',
      },
      draw(S, { D }) {
        S.stamp('DESAKAN & PAKSAAN', { x: 140, y: 300, w: 800, at: 0, d: 0.3, fs: 64, style: 'text-align:center' });
        S.text('➜ Reaksi <span class="red">penentangan!</span>', { size: 'h3', x: 60, y: 450, w: 960, align: 'center', at: 0, d: 2.2 });
        S.add(D.bulb(), { anim: 'pop', x: 80, y: 560, w: 140, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:44px">Tolak sebarang bentuk <span class="hl">penjajahan</span> demi <span class="hl">kedaulatan</span> tanah air.</div>', { tear: true, anim: 'slideU', x: 250, y: 560, w: 770, at: 1, d: 0.2 });
        S.mascot({ x: 80, y: 900, w: 260, at: 1, d: 2 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">4.3 Reaksi terhadap Malayan Union</div>', { x: 380, y: 960, w: 600, at: 1, d: 3.2 });
      },
    },
    END,
  ],
};
