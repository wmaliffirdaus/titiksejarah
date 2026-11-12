// BAB 2 · EPISOD 08 – Subtopik 2.7: Perkembangan Nasionalisme (≈ 5 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, who, timeline } from './lib2.js';

export default {
  id: '08',
  file: '08_Bab2_Subtopik_2.7',
  title: 'Perkembangan Nasionalisme',
  header: { chip: 'BAB 2 • 2.7', sub: 'Perkembangan Nasionalisme' },
  src: SRC,
  music: { key: 60, bpm: 102, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Tanpa senjata, bagaimanakah rakyat berjuang menentang penjajah?', pause: 0.5 },
        'Dengan **pena**, **akhbar** dan **persatuan**!',
      ],
      board: {
        name: 'Hook – berjuang tanpa senjata',
        visual: 'Keris dipangkah; tiga "senjata baharu" muncul: pena bulu, akhbar, orang ramai bersatu.',
        doodle: 'Keris, tanda pangkah, pena bulu, akhbar, orang ramai.',
        text: 'Tanpa senjata? ➜ PENA · AKHBAR · PERSATUAN',
        anim: 'Keris dilukis lalu dipangkah; tiga ikon pop serentak dengan kata kunci.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Tanpa <span class="red">senjata</span>?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        S.svg(D.keris(), { x: 480, y: 440, w: 110, at: 0, d: 0.6 });
        S.add(D.cross(), { anim: 'stamp', x: 470, y: 520, w: 130, at: 0, d: 2.4 });
        [[D.quill(), 'PENA', 0.1], [D.newspaper('AKHBAR', { ts: 30 }), 'AKHBAR', 0.7], [D.crowd(3), 'PERSATUAN', 1.4]].forEach(([svg, n, d], i) => {
          S.svg(svg, { x: 70 + i * 330, y: 840, w: i === 2 ? 270 : 200, at: 1, d });
          S.card(`<div class="t-h3" style="text-align:center">${n}</div>`, { color: i === 1 ? 'red' : 'gold', anim: 'stamp', x: 60 + i * 330, y: 1120, w: 300, at: 1, d: d + 0.2, notape: true, pad: '10px 8px' });
        });
      },
    },
    titleScene('2.7', 'Perkembangan<br><span class="red">Nasionalisme</span>', 'Ini Titik Sejarah, Subtopik 2.7: **Perkembangan Nasionalisme** di negara kita.', { uy: 600, my: 690, icon: (D) => D.quill(), ix: 780, iy: 760, iw: 160 }),
    {
      id: 'tiga', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Perjuangan digerakkan oleh tiga golongan intelektual:', pause: 0.25 },
        'berpendidikan **agama**, berpendidikan **Inggeris**, dan berpendidikan **Melayu**.',
      ],
      board: {
        name: 'Tiga golongan intelektual',
        visual: 'Tiga lajur kad dengan ikon: masjid (agama), maktab MCKK (Inggeris), maktab SITC (Melayu).',
        doodle: 'Masjid, dua bangunan maktab berlabel, tiga watak generik.',
        text: 'Intelektual berpendidikan AGAMA · INGGERIS · MELAYU',
        anim: 'Tajuk ditulis; tiga lajur pop serentak dengan sebutan.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">3 golongan</span> intelektual', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        [['AGAMA', D.mosque(), 0.2, ''], ['INGGERIS', D.school('MCKK', NAVY), 1.9, 'gold'], ['MELAYU', D.school('SITC', RED), 3.5, '']].forEach(([t, icon, d, c], i) => {
          S.card('<div style="height:560px"></div>', { color: c, anim: 'pop', x: 60 + i * 330, y: 430, w: 300, at: 1, d });
          S.svg(icon, { x: 80 + i * 330, y: 490, w: 260, at: 1, d: d + 0.1, sfx: false });
          S.text('berpendidikan', { size: 'label', x: 60 + i * 330, y: 800, w: 300, align: 'center', at: 1, d: d + 0.2 });
          S.text(t, { size: 'h3', x: 60 + i * 330, y: 860, w: 300, align: 'center', at: 1, d: d + 0.3, style: 'color:#C93436' });
        });
      },
    },
    {
      id: 'agama', transition: 'flip',
      lines: [
        'Golongan berpendidikan agama, seperti **Syed Sheikh al-Hadi** dan **Sheikh Muhammad Tahir Jalaluddin**, dikenali sebagai **Kaum Muda**.',
        'Mereka memperjuangkan pentafsiran dan pemodenan Islam, menggalakkan **pendidikan wanita**, dan mendirikan **madrasah**.',
        'Mereka berjuang melalui akhbar dan majalah, terutamanya **Al-Imam**. Pendapat mereka sering bertentangan dengan golongan **Kaum Tua**, sehingga berlaku polemik.',
      ],
      board: {
        name: 'Golongan berpendidikan agama – Kaum Muda',
        visual: 'Dua watak ulama (generik) dengan tag; tiga kad perjuangan; majalah Al-Imam; lencana "Kaum Muda vs Kaum Tua".',
        doodle: 'Watak berserban, madrasah, majalah Al-Imam, lencana VS.',
        text: 'Syed Sheikh al-Hadi · Sheikh Muhammad Tahir Jalaluddin = Kaum Muda · pentafsiran & pemodenan Islam · pendidikan wanita · madrasah · Al-Imam · polemik Kaum Muda vs Kaum Tua',
        anim: 'Watak dilukis; kad perjuangan meluncur masuk; majalah dilukis; lencana VS pop.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">Berpendidikan AGAMA</span>', { anim: 'pop', x: 60, y: 295, w: 600, at: 0, d: -0.3 });
        who(S, D.pedagang({ shirt: '#3F5DA8', pose: 'present', prop: 'book' }), 'Syed Sheikh al-Hadi', 'Kaum Muda', { x: 90, y: 400, w: 150, at: 0, d: 0.4, ty: 190, tw: 290, tx: -30 });
        who(S, D.pedagang({ shirt: '#172C63', pose: 'present', prop: 'scroll' }), 'Sheikh Muhammad Tahir Jalaluddin', 'Kaum Muda', { x: 420, y: 400, w: 150, at: 0, d: 1.8, ty: 190, tw: 420, tx: -30 });
        S.stamp('KAUM MUDA', { x: 760, y: 440, w: 260, at: 0, d: 4.4, fs: 46 });
        [['Pentafsiran & pemodenan Islam', 0.3], ['Galak pendidikan wanita', 2.6], ['Dirikan madrasah', 3.8]].forEach(([t, d], i) => S.card(`<div class="t-body" style="font-size:36px;text-align:center">${t}</div>`, { color: i === 1 ? 'gold' : '', anim: 'pop', x: 60 + i * 330, y: 720, w: 310, at: 1, d, pad: '12px 10px', notape: true, rot: (i - 1) * 1.2 }));
        S.svg(D.newspaper('AL-IMAM', { ts: 34, color: RED }), { x: 70, y: 880, w: 190, at: 2, d: 0.4 });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">Kaum Muda <span class="red">VS</span> Kaum Tua</div><div class="t-label" style="text-align:center">polemik</div>', { anim: 'stamp', x: 330, y: 960, w: 660, at: 2, d: 3.6, rot: -2 });
      },
    },
    {
      id: 'inggeris', transition: 'paper',
      lines: [
        'Golongan berpendidikan Inggeris pula kebanyakannya lepasan **MCKK**, seperti **Raja Chulan** dan **Mohd Eunos Abdullah**.',
        'Mereka menuntut British memperbaiki taraf hidup orang Melayu, dan memberi peluang pekerjaan dalam pentadbiran British.',
        'Idea mereka disalurkan melalui akhbar seperti **Warta Malaya** dan **Utusan Melayu**.',
      ],
      board: {
        name: 'Golongan berpendidikan Inggeris – lepasan MCKK',
        visual: 'Bangunan MCKK; dua watak berkot (generik) dengan tag; kad tuntutan; dua akhbar.',
        doodle: 'Maktab MCKK, watak bersongkok berkot, akhbar Warta Malaya & Utusan Melayu.',
        text: 'Lepasan MCKK: Raja Chulan · Mohd Eunos Abdullah · tuntut British baiki taraf hidup Melayu & peluang kerja dalam pentadbiran · akhbar Warta Malaya, Utusan Melayu',
        anim: 'Maktab dilukis; watak dilukis; kad tuntutan meluncur; akhbar pop.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">Berpendidikan INGGERIS</span>', { anim: 'pop', x: 60, y: 295, w: 600, at: 0, d: -0.3 });
        S.svg(D.school('MCKK', NAVY), { x: 60, y: 400, w: 300, at: 0, d: 0.4 });
        who(S, D.rakyat({ shirt: '#172C63', pose: 'present', samping: '#F5C928' }), 'Raja Chulan', 'lepasan MCKK', { x: 420, y: 400, w: 140, at: 0, d: 2.2, ty: 180, tw: 230, tx: -40 });
        who(S, D.rakyat({ shirt: '#3F5DA8', pose: 'present', moustache: true, samping: '#C93436' }), 'Mohd Eunos Abdullah', 'lepasan MCKK', { x: 720, y: 400, w: 140, at: 0, d: 3.4, ty: 180, tw: 300, tx: -60 });
        S.card('<div class="t-body" style="font-size:40px">Tuntut British: <span class="hl">baiki taraf hidup</span> orang Melayu & <span class="hl">peluang pekerjaan</span> dalam pentadbiran</div>', { anim: 'slideL', x: 60, y: 720, w: 960, at: 1, d: 0.2 });
        S.svg(D.newspaper('Warta Malaya', { ts: 26, color: NAVY }), { x: 200, y: 930, w: 180, at: 2, d: 1.4 });
        S.svg(D.newspaper('Utusan Melayu', { ts: 24, color: RED }), { x: 560, y: 930, w: 180, at: 2, d: 2.4 });
      },
    },
    {
      id: 'melayu', transition: 'slideUp',
      lines: [
        'Golongan berpendidikan Melayu pula ialah lepasan **SITC**, seperti **Abdul Hadi Hassan**, **Harun Aminurrashid**, **Ibrahim Haji Yaacob** dan **Za\'ba**.',
        'Golongan inilah yang menubuhkan **Kesatuan Melayu Muda**, atau KMM.',
      ],
      board: {
        name: 'Golongan berpendidikan Melayu – lepasan SITC',
        visual: 'Bangunan SITC; empat tag nama; anak panah ke cop "KMM".',
        doodle: 'Maktab SITC, tag nama, anak panah, cop merah.',
        text: "Lepasan SITC: Abdul Hadi Hassan · Harun Aminurrashid · Ibrahim Haji Yaacob · Za'ba ➜ tubuhkan Kesatuan Melayu Muda (KMM)",
        anim: 'Maktab dilukis; tag nama ditampal mengikut narasi; cop KMM dihentak.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">Berpendidikan MELAYU</span>', { anim: 'pop', x: 60, y: 295, w: 600, at: 0, d: -0.3 });
        S.svg(D.school('SITC', RED), { x: 60, y: 400, w: 320, at: 0, d: 0.2 });
        [['Abdul Hadi Hassan', 2.6], ['Harun Aminurrashid', 4.0], ['Ibrahim Haji Yaacob', 5.4], ["Za'ba", 6.8]].forEach(([n, d], i) => S.tag(n, 'lepasan SITC', { x: 430, y: 400 + i * 105, w: 560, at: 0, d }));
        S.arrow(540, 840, 540, 960, { at: 1, d: 0, color: RED, bend: 0 });
        S.card('<div class="t-h2" style="text-align:center;color:#FFFDF7">KMM</div><div class="t-label" style="text-align:center;color:#F5C928">Kesatuan Melayu Muda</div>', { color: 'red', anim: 'stamp', x: 280, y: 980, w: 520, at: 1, d: 0.6, rot: -2 });
      },
    },
    {
      id: 'penulisan', transition: 'paper',
      lines: [
        'Perjuangan juga berkembang melalui **penulisan**. Akhbar dan majalah seperti **Warta Malaya**, **Utusan Melayu** dan **majalah Guru** menggerakkan semangat rakyat.',
        'Majalah **Bulan Melayu** pula memuatkan berita kemajuan dan pendidikan wanita.',
        'Akhbar masyarakat Cina dan India, seperti **Lat Pau** dan **Tamil Nesan**, lebih cenderung kepada negara asal mereka, dan kepentingan sosiopolitik masyarakat masing-masing di Tanah Melayu.',
        'Karya kreatif turut menyedarkan rakyat. Novel **Mari Kita Berjuang** karya Abdullah Sidek mengajak rakyat memerdekakan ekonomi.',
      ],
      board: {
        name: 'Perjuangan melalui penulisan',
        visual: 'Papan kenyataan: akhbar & majalah Melayu (atas), akhbar Cina & India (tengah, label "negara asal"), novel (bawah).',
        doodle: 'Akhbar bermastad berwarna, buku, pita kuning.',
        text: 'Warta Malaya · Utusan Melayu · majalah Guru · Bulan Melayu (kemajuan & pendidikan wanita) · Lat Pau (Cina) & Tamil Nesan (India) – cenderung kepada negara asal · novel "Mari Kita Berjuang" – Abdullah Sidek (merdekakan ekonomi)',
        anim: 'Akhbar ditampal satu demi satu mengikut narasi; label pop; buku dilukis.',
      },
      draw(S, { D }) {
        const p = (t, c, x, y, at, d, ts) => S.svg(D.newspaper(t, { ts: ts || 24, color: c }), { x, y, w: 160, at, d, sfx: 'paper' });
        p('Warta Malaya', NAVY, 60, 300, 0, 2.6); p('Utusan Melayu', RED, 250, 300, 0, 3.6); p('GURU', '#3A8A4A', 440, 300, 0, 4.8, 34);
        p('Bulan Melayu', '#C9A000', 650, 300, 1, 0.2);
        S.card('<div class="t-body" style="font-size:32px">kemajuan & <b>pendidikan wanita</b></div>', { anim: 'pop', x: 820, y: 330, w: 200, at: 1, d: 1.6, pad: '8px 10px', notape: true });
        p('Lat Pau', RED, 60, 560, 2, 1.2, 30); p('Tamil Nesan', NAVY, 250, 560, 2, 2.2);
        S.card('<div class="t-label" style="color:#C93436">Akhbar Cina & India</div><div class="t-body" style="font-size:36px">cenderung kepada <span class="hl">negara asal</span> & kepentingan sosiopolitik masyarakat masing-masing</div>', { anim: 'slideR', x: 440, y: 580, w: 580, at: 2, d: 3.4, pad: '10px 18px' });
        S.svg(D.book('Mari Kita|Berjuang', RED, { size: 24, y: 120 }), { x: 70, y: 850, w: 190, at: 3, d: 0.6 });
        S.card('<div class="t-label" style="color:#C93436">novel · Abdullah Sidek</div><div class="t-body" style="font-size:38px">Ajak rakyat <span class="hl">memerdekakan ekonomi</span></div>', { color: 'gold', anim: 'slideR', x: 300, y: 900, w: 720, at: 3, d: 2.4 });
      },
    },
    {
      id: 'persatuan', bg: 'grid', transition: 'flip',
      lines: [
        'Kemudian, lahir **persatuan** untuk menyatukan orang Melayu.',
        '**Kesatuan Melayu Singapura**, atau KMS, ditubuhkan pada tahun 1926, dipimpin oleh **Mohd Eunos Abdullah**. Ia memperjuangkan kepentingan orang Melayu dalam politik dan pendidikan.',
        '**Persaudaraan Sahabat Pena Malaya**, atau PASPAM, pada tahun 1934, menggalakkan ahlinya bersatu dan bertukar-tukar pendapat.',
        '**Kesatuan Melayu Muda**, atau KMM, pada tahun 1938, dipimpin oleh **Ibrahim Haji Yaacob**. KMM menentang British dan memperjuangkan gagasan **Melayu Raya**.',
      ],
      board: {
        name: 'Persatuan Melayu: KMS 1926 · PASPAM 1934 · KMM 1938',
        visual: 'Garis masa tiga persatuan; kad profil setiap persatuan (pemimpin & matlamat) muncul di bawah titik tahun.',
        doodle: 'Garis masa, cop tahun, tag pemimpin, kad matlamat.',
        text: 'KMS 1926 – Mohd Eunos Abdullah – kepentingan Melayu dalam politik & pendidikan · PASPAM 1934 – bersatu & bertukar pendapat · KMM 1938 – Ibrahim Haji Yaacob – tentang British, gagasan Melayu Raya',
        anim: 'Garis masa dilakar; setiap tahun pop dan kad persatuan meluncur naik tepat ketika disebut.',
      },
      draw(S) {
        S.text('Persatuan <span class="hl">Melayu</span>', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        timeline(S, [{ year: '1926', label: 'KMS', at: 1 }, { year: '1934', label: 'PASPAM', at: 2 }, { year: '1938', label: 'KMM', at: 3 }], { y: 500, x: 210, x1: 870, up: 90, bw: 300, ls: 44, at: 0, d: 0.5 });
        const cards = [
          ['KMS', 'Kesatuan Melayu Singapura', 'Pemimpin: <b>Mohd Eunos Abdullah</b><br>Kepentingan Melayu dalam <span class="hl">politik & pendidikan</span>', 1, ''],
          ['PASPAM', 'Persaudaraan Sahabat Pena Malaya', 'Ahli <span class="hl">bersatu</span> & <span class="hl">bertukar pendapat</span>', 2, 'gold'],
          ['KMM', 'Kesatuan Melayu Muda', 'Pemimpin: <b>Ibrahim Haji Yaacob</b><br>Tentang British · gagasan <span class="hl">Melayu Raya</span>', 3, ''],
        ];
        cards.forEach(([a, n, b, at, c], i) => S.card(`<div style="display:flex;gap:16px;align-items:baseline"><div class="t-h3" style="color:#C93436;flex:none">${a}</div><div class="t-label">${n}</div></div><div class="t-body" style="font-size:34px;line-height:1.15">${b}</div>`, { color: c, anim: 'slideU', x: 60, y: 640 + i * 230, w: 960, at, d: 0.4, pad: '10px 22px', rot: (i - 1) * 0.6 }));
      },
    },
    {
      id: 'cina-india', transition: 'paper',
      lines: [
        'Masyarakat Cina dan India juga menubuhkan persatuan, namun kebanyakannya memperjuangkan hal negara asal masing-masing.',
        '**Persatuan Orang Cina Peranakan British**, atau SCBA, menggalakkan pelajaran tinggi dan teknikal dalam kalangan masyarakat Cina.',
        '**Malayan India Association**, atau MIA, pula ditubuhkan khusus untuk golongan India yang dilahirkan di Tanah Melayu.',
      ],
      board: {
        name: 'Persatuan masyarakat Cina & India',
        visual: 'Dua kad persatuan bersebelahan dengan ikon; label "fokus: negara asal".',
        doodle: 'Buku & sekolah (SCBA), watak generik, glob kecil.',
        text: 'Cina & India – kebanyakannya perjuangkan hal negara asal · SCBA (Persatuan Orang Cina Peranakan British) – galak pelajaran tinggi & teknikal · MIA (Malayan India Association) – golongan India yang lahir di Tanah Melayu',
        anim: 'Label pop; kad SCBA & MIA meluncur masuk mengikut narasi.',
      },
      draw(S, { D }) {
        S.text('Persatuan <span class="hl">Cina & India</span>', { size: 'h2', x: 70, y: 295, w: 900, at: 0, d: -0.2 });
        S.svg(D.globe(), { x: 820, y: 400, w: 170, at: 0, d: 1.2 });
        S.card('<div class="t-body" style="font-size:40px">Kebanyakannya memperjuangkan hal <span class="hl">negara asal</span> masing-masing</div>', { anim: 'slideL', x: 60, y: 420, w: 730, at: 0, d: 0.6 });
        S.svg(D.school('', NAVY), { x: 70, y: 660, w: 220, at: 1, d: 0 });
        S.card('<div class="t-h3" style="color:#C93436">SCBA</div><div class="t-label">Persatuan Orang Cina Peranakan British</div><div class="t-body" style="font-size:36px">Galak <span class="hl">pelajaran tinggi & teknikal</span></div>', { anim: 'slideR', x: 320, y: 650, w: 700, at: 1, d: 0.6, pad: '10px 20px' });
        S.svg(D.rakyat({ hat: 'hair', pose: 'cheer', shirt: '#F5C928' }), { x: 90, y: 950, w: 160, at: 2, d: 0 });
        S.card('<div class="t-h3" style="color:#C93436">MIA</div><div class="t-label">Malayan India Association</div><div class="t-body" style="font-size:36px">Untuk golongan India yang <span class="hl">lahir di Tanah Melayu</span></div>', { color: 'gold', anim: 'slideR', x: 320, y: 950, w: 700, at: 2, d: 0.6, pad: '10px 20px' });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Recap! Nasionalisme berkembang melalui tiga saluran:', pause: 0.2 },
        'Golongan intelektual: agama, Inggeris dan Melayu.',
        'Penulisan: akhbar, majalah dan karya kreatif.',
        'Persatuan: KMS 1926, PASPAM 1934, dan KMM 1938.',
      ],
      board: {
        name: 'Recap peta minda 2.7 + tip SPM',
        visual: 'Peta minda: hab "PERKEMBANGAN NASIONALISME" dengan tiga cabang; tip SPM tentang turutan persatuan.',
        doodle: 'Hab navy, kad cabang, anak panah, lencana TIP SPM.',
        text: 'Intelektual (agama · Inggeris · Melayu) · Penulisan (akhbar · majalah · karya kreatif) · Persatuan (KMS 1926 · PASPAM 1934 · KMM 1938) · TIP SPM: hafal turutan persatuan',
        anim: 'Hab pop; cabang muncul mengikut narasi; tip SPM meluncur naik.',
      },
      draw(S) {
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928;font-size:40px">PERKEMBANGAN<br>NASIONALISME</div>', { color: 'navy', x: 310, y: 300, w: 460, at: 0, d: 0 });
        const br = [['Intelektual', 'Agama · Inggeris · Melayu', 1, 60, 560], ['Penulisan', 'Akhbar · majalah · karya kreatif', 2, 560, 560], ['Persatuan', 'KMS 1926 · PASPAM 1934 · KMM 1938', 3, 200, 790]];
        br.forEach(([t, b, at, x, y], i) => {
          S.card(`<div class="t-h3" style="color:#C93436;font-size:42px">${t}</div><div class="t-body" style="font-size:36px">${b}</div>`, { color: i === 2 ? 'gold' : '', anim: 'pop', x, y, w: i === 2 ? 680 : 460, at, rot: (i - 1) * 1.2 });
          S.arrow(540, 470, x + (i === 2 ? 340 : 230), y, { at, d: -0.1, color: RED, bend: 0.1 });
        });
        examTip(S, 'Hafal turutan: <span class="hl">KMS 1926 ➜ PASPAM 1934 ➜ KMM 1938</span>.', 3, { d: 2.2, y: 1050 });
      },
    },
    nilaiScene([
      { text: 'Iktibarnya: pentingnya **keintelektualan** dalam membina teras ilmu.', pause: 0.3 },
      'Golongan intelektual membuktikan bahawa ilmu dan penulisan mampu mengubah cara sebuah bangsa berfikir.',
    ], 'Keintelektualan membina teras ilmu', (D) => D.bulb(), { iw: 260, ix: 410, note: 'Ilmu + penulisan ➜ <span class="hl">mengubah cara sebuah bangsa berfikir</span>.', doodle: 'Mentol idea, bintang.' }),
    closingScene([
      { text: 'Ringkasnya, nasionalisme berkembang melalui golongan intelektual, penulisan dan persatuan.', pause: 0.3 },
      'Apakah kesan semua perjuangan ini? Jom lihat dalam episod 2.8!',
    ], 'Episod seterusnya', '2.8 Kesan Perkembangan Nasionalisme', { summary: '<span class="hl">Intelektual</span> + <span class="hl">penulisan</span> + <span class="hl">persatuan</span> = nasionalisme berkembang.' }),
    endScene(),
  ],
};
