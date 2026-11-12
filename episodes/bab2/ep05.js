// BAB 2 · EPISOD 05 – Subtopik 2.4: Perkembangan Nasionalisme di Asia Tenggara (≈ 6–7 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, timeline, who, header, locator, fact, SEA2 } from './lib2.js';

const P = { filipina: [121, 14.6], burma: [96.16, 16.8], vietnam: [105.85, 21.0], indonesia: [106.8, -6.2], thailand: [100.5, 13.75] };
const loc = (S, k, name, o = {}) => locator(S, ...P[k], name, { bounds: SEA2, ...o });

export default {
  id: '05',
  file: '05_Bab2_Subtopik_2.4',
  title: 'Perkembangan Nasionalisme di Asia Tenggara',
  header: { chip: 'BAB 2 • 2.4', sub: 'Nasionalisme di Asia Tenggara' },
  src: SRC,
  music: { key: 64, bpm: 102, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Apa kaitan sepasang kasut dengan kebangkitan sebuah bangsa?', pause: 0.5 },
        'Jawapannya ada di Burma! Jom kita jelajah lima negara jiran kita.',
      ],
      board: {
        name: 'Hook – misteri sepasang kasut',
        visual: 'Sepasang kasut besar di tengah dengan tanda soal; pagoda Buddha muncul di belakang; peta mini Asia Tenggara.',
        doodle: 'Kasut kulit coklat, tanda soal merah, pagoda emas, peta lakaran.',
        text: '"Kasut + kebangkitan bangsa?" · Burma · 5 negara jiran',
        anim: 'Kasut pop; tanda soal berdenyut; pagoda dilukis; peta dilukis pada ayat kedua.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        S.text('Kasut ➜ <span class="red">bangkit</span>?', { size: 'title', x: 60, y: 310, w: 960, align: 'center', at: 0, d: 0.1 });
        S.add(D.shoe(), { anim: 'pop', x: 140, y: 480, w: 420, at: 0, d: 0.6 });
        S.add(D.question(), { anim: 'pop', x: 620, y: 450, w: 110, at: 0, d: 1.4, pulse: [{ at: 0, d: 2.4 }] });
        S.svg(D.pagoda(), { x: 720, y: 480, w: 260, at: 1, d: 0 });
        const at = S.map({ bounds: SEA2, w: 420 }, { x: 330, y: 790, w: 420, at: 1, d: 1.2, dur: 1.2 });
        [['burma', RED], ['thailand', GOLD], ['vietnam', NAVY], ['filipina', RED], ['indonesia', GOLD]].forEach(([k, c], i) => S.pin(at, ...P[k], '', { at: 1, d: 2 + i * 0.25, color: c, size: 0.6 }));
      },
    },
    titleScene('2.4', 'Perkembangan<br><span class="red">Nasionalisme</span><br>di Asia Tenggara', 'Ini Titik Sejarah, Subtopik 2.4: **Perkembangan Nasionalisme di Asia Tenggara**.', { uy: 690, my: 760 }),
    {
      id: 'peta', bg: 'lined', transition: 'zoom', gap: 0.25,
      lines: [
        { text: 'Lima negara yang kita akan kaji ialah **Filipina**, **Burma**, **Vietnam**, **Indonesia** dan **Thailand**.', pause: 0.3 },
        'Filipina dijajah Sepanyol, kemudian Amerika Syarikat. Burma dijajah British, Vietnam oleh Perancis, dan Indonesia oleh Belanda.',
        'Thailand pula tidak dijajah, tetapi tetap berjuang mempertahankan kedaulatannya.',
      ],
      board: {
        name: 'Peta lima negara Asia Tenggara',
        visual: 'Peta Asia Tenggara lakaran; penanda lima negara; kad kecil penjajah di sebelah setiap negara.',
        doodle: 'Peta, penanda berwarna, label penjajah tulisan tangan, perisai untuk Thailand.',
        text: 'Filipina (Sepanyol ➜ Amerika Syarikat) · Burma (British) · Vietnam (Perancis) · Indonesia (Belanda) · Thailand (tidak dijajah)',
        anim: 'Peta dilukis; penanda pop; label penjajah muncul pada ayat kedua; perisai Thailand pada ayat ketiga.',
      },
      draw(S, { D }) {
        const at = S.map({ bounds: SEA2, w: 760, labels: [{ lon: 114, lat: 12, text: 'Laut China Selatan', size: 26 }] }, { x: 220, y: 290, w: 640, at: 0, d: -0.3, dur: 1.6 });
        S.pin(at, ...P.filipina, 'Filipina', { at: 0, d: 1.2, color: RED });
        S.pin(at, ...P.burma, 'Burma', { at: 0, d: 1.8, color: GOLD, left: true });
        S.pin(at, ...P.vietnam, 'Vietnam', { at: 0, d: 2.4, color: NAVY });
        S.pin(at, ...P.indonesia, 'Indonesia', { at: 0, d: 3.0, color: RED });
        S.pin(at, ...P.thailand, 'Thailand', { at: 0, d: 3.6, color: GOLD, left: true });
        const tags = [['Filipina', 'Sepanyol ➜ Amerika Syarikat', 0.2], ['Burma', 'British', 2.0], ['Vietnam', 'Perancis', 3.0], ['Indonesia', 'Belanda', 3.9]];
        tags.forEach(([n, c, d], i) => S.tag(n, c, { x: 60 + (i % 2) * 490, y: 990 + Math.floor(i / 2) * 110, w: 460, at: 1, d }));
        S.card('<div class="t-h3" style="font-size:36px;text-align:center">Thailand: <span class="red">tidak dijajah</span></div>', { color: 'gold', anim: 'stamp', x: 300, y: 1215, w: 480, at: 2, d: 0.3, rot: -3, pad: '10px 14px' });
      },
    },
    {
      id: 'filipina1', transition: 'paper',
      lines: [
        'Mula-mula, **Filipina**. Matlamatnya ialah menghapuskan penjajahan asing.',
        '**Jose Rizal** memulakan **Gerakan Propaganda**, yang menuntut Filipina dijadikan sebahagian wilayah Sepanyol, dengan hak yang sama seperti bangsa Sepanyol.',
        'Pada tahun 1892, beliau menubuhkan **Liga Filipina**, untuk mendesak kerajaan Sepanyol melakukan perubahan politik, ekonomi dan sosial. Namun Liga Filipina gagal, dan Jose Rizal dihukum bunuh.',
      ],
      board: {
        name: 'Filipina (1): Jose Rizal',
        visual: 'Profil negara + peta mini; watak Jose Rizal (generik) dengan tag; kad definisi Gerakan Propaganda; cop 1892 Liga Filipina; kad fakta.',
        doodle: 'Watak berambut, skrol, cop merah, bendera generik.',
        text: 'FILIPINA · hapuskan penjajahan asing · Jose Rizal – Gerakan Propaganda (jadi wilayah Sepanyol, hak sama) · Liga Filipina 1892 – desak perubahan politik, ekonomi, sosial · gagal, Rizal dihukum bunuh',
        anim: 'Peta mini; watak dilukis; kad fakta mengikut narasi; cop 1892.',
      },
      draw(S, { D }) {
        header(S, 'FILIPINA', 'Penjajah: Sepanyol', 'Asia Tenggara (kepulauan)');
        loc(S, 'filipina', 'Filipina', { left: true });
        who(S, D.person({ hat: 'hair', shirt: '#172C63', moustache: true, pose: 'present', prop: 'scroll' }), 'Jose Rizal', 'Gerakan Propaganda', { x: 90, y: 540, w: 140, at: 1, d: -0.3, ty: 180, tw: 250 });
        S.stamp('1892', { x: 400, y: 580, w: 220, at: 2, d: 0.2, fs: 64 });
        S.text('Liga Filipina', { size: 'note', x: 380, y: 690, w: 260, align: 'center', at: 2, d: 0.5 });
        fact(S, 0, 'Matlamat: **hapuskan penjajahan asing**', 0, { d: 1.6 });
        fact(S, 1, '**Gerakan Propaganda**: jadi wilayah Sepanyol, **hak sama**', 1, { d: 0.6 });
        fact(S, 2, '**Liga Filipina 1892**: desak perubahan politik, ekonomi & sosial', 2, { d: 1.2 });
        fact(S, 3, 'Gagal ➜ **Jose Rizal dihukum bunuh**', 2, { d: 5.4, color: 'gold' });
      },
    },
    {
      id: 'filipina2', transition: 'slideUp',
      lines: [
        'Muncul pula golongan radikal. **Andres Bonifacio** menubuhkan **Katipunan**, gerakan revolusioner untuk kemerdekaan, dan menggunakan akhbar **Kalayan** untuk menyebarkan idea revolusi.',
        'Pada tahun 1896, Katipunan bersama **Emilio Aguinaldo** melancarkan **Revolusi Filipina** untuk menyingkirkan Sepanyol, tetapi gagal.',
        'Aguinaldo kemudian bekerjasama dengan Amerika Syarikat dan berjaya mengusir Sepanyol. Malangnya, perisytiharan kemerdekaannya tidak diiktiraf, dan Filipina dijajah pula oleh **Amerika Syarikat**.',
        'Golongan nasionalis beralih kepada **diplomasi**. **Sergio Osmena**, pemimpin Parti Nasionalis, menganggotai Dewan Perhimpunan Filipina pada tahun 1907. Perjuangan diteruskan hingga Perang Dunia Kedua.',
      ],
      board: {
        name: 'Filipina (2): Katipunan, revolusi & diplomasi',
        visual: 'Carta alir menurun: Katipunan (akhbar Kalayan) ➜ Revolusi 1896 (gagal) ➜ usir Sepanyol, dijajah AS ➜ diplomasi (Sergio Osmena 1907).',
        doodle: 'Akhbar "KALAYAN", watak Bonifacio & Aguinaldo (generik), anak panah, bendera generik.',
        text: 'Andres Bonifacio – Katipunan, akhbar Kalayan · Revolusi Filipina 1896 (bersama Emilio Aguinaldo) gagal · Aguinaldo + AS usir Sepanyol; kemerdekaan tidak diiktiraf; dijajah AS · Sergio Osmena (Parti Nasionalis) – Dewan Perhimpunan 1907 · hingga PD2',
        anim: 'Setiap langkah carta alir meluncur masuk mengikut narasi; anak panah dilukis antara langkah.',
      },
      draw(S, { D }) {
        S.svg(D.newspaper('KALAYAN', { ts: 34 }), { x: 60, y: 300, w: 170, at: 0, d: 2.4 });
        const steps = [
          ['**Andres Bonifacio** ➜ **Katipunan** (revolusioner) · akhbar **Kalayan**', 0, 0.3, ''],
          ['**Revolusi Filipina 1896** + **Emilio Aguinaldo** ➜ gagal', 1, 0.2, ''],
          ['Aguinaldo + AS usir Sepanyol ➜ merdeka **tidak diiktiraf** ➜ dijajah **Amerika Syarikat**', 2, 0.2, 'gold'],
          ['**Diplomasi**: **Sergio Osmena** (Parti Nasionalis) – Dewan Perhimpunan **1907**', 3, 0.3, ''],
        ];
        steps.forEach(([t, at, d, c], i) => {
          S.card(`<div class="t-body" style="font-size:38px;line-height:1.15">${fmt(t)}</div>`, { color: c, anim: i % 2 ? 'slideR' : 'slideL', x: i === 0 ? 260 : 60, y: 310 + i * 255, w: i === 0 ? 760 : 960, at, d, rot: i % 2 ? 0.7 : -0.7, pad: '14px 22px' });
          if (i) S.arrow(540, 310 + i * 255 - 70, 540, 310 + i * 255 - 8, { at, d: d - 0.2, color: RED, bend: 0 });
        });
      },
    },
    {
      id: 'burma1', transition: 'paper',
      lines: [
        'Di **Burma**, nasionalisme digerakkan oleh golongan kelas menengah, sami Buddha atau **pongyi**, golongan **Thakin** iaitu siswazah universiti, dan petani, menentang imperialisme British.',
        'Pada tahun 1906, **Persatuan Belia Buddha** ditubuhkan untuk mengekalkan tradisi Buddha, pendidikan dan kebudayaan Burma.',
        'Mereka menggunakan **isu kasut**. Orang British memakai kasut ketika memasuki kuil Buddha, perbuatan yang dianggap mencemari kesucian agama Buddha.',
      ],
      board: {
        name: 'Burma (1): Persatuan Belia Buddha & isu kasut',
        visual: 'Profil negara + peta mini; pagoda; kasut dengan tanda pangkah merah; kad fakta.',
        doodle: 'Pagoda emas, kasut kulit, tanda pangkah, kad pongyi/Thakin.',
        text: 'BURMA · penjajah British · kelas menengah, pongyi (sami Buddha), Thakin (siswazah universiti), petani · Persatuan Belia Buddha 1906 · isu kasut – British pakai kasut di kuil Buddha',
        anim: 'Peta mini; pagoda dilukis; kasut pop lalu dipangkah; kad fakta meluncur masuk.',
      },
      draw(S, { D }) {
        header(S, 'BURMA', 'Penjajah: British', 'kini Myanmar');
        loc(S, 'burma', 'Burma');
        S.svg(D.pagoda(), { x: 70, y: 560, w: 230, at: 1, d: 0 });
        S.add(D.shoe(), { anim: 'pop', x: 360, y: 600, w: 220, at: 2, d: 0.2 });
        S.add(D.cross(), { anim: 'stamp', x: 420, y: 560, w: 110, at: 2, d: 2.6 });
        S.text('kasut di kuil = <span class="red">cemar kesucian</span>', { size: 'note', x: 280, y: 770, w: 480, align: 'center', at: 2, d: 3.0 });
        fact(S, 0, '**Pongyi** (sami) · **Thakin** (siswazah) · kelas menengah · petani', 0, { d: 2.4 });
        fact(S, 1, '**Persatuan Belia Buddha 1906**', 1, { d: 0.3 });
        fact(S, 2, 'Kekalkan **tradisi Buddha**, pendidikan & kebudayaan', 1, { d: 2.2 });
        fact(S, 3, '**Isu kasut**: bangkitkan semangat rakyat', 2, { d: 0.6, color: 'gold' });
      },
    },
    {
      id: 'burma2', transition: 'slideUp',
      lines: [
        'Persatuan ini kemudian diambil alih oleh pemimpin radikal seperti **U Ba Pe**, dan ditukar nama kepada **Majlis Persatuan Am Kesatuan Burma**.',
        'Pelajar melancarkan **Revolusi Pelajar** menuntut penubuhan universiti. Golongan sami pula menubuhkan Majlis Am Sangha Samagyi, dan mencetuskan **Pemberontakan Saya San** dari tahun 1930 hingga 1932.',
        '**Perlembagaan Burma 1935** memisahkan Burma daripada India, lalu merangsang perjuangan ke arah berkerajaan sendiri.',
      ],
      board: {
        name: 'Burma (2): U Ba Pe, pelajar, sami & Perlembagaan 1935',
        visual: 'Garis masa 1906 ➜ 1930–1932 ➜ 1935 di bahagian atas; tiga kad kumpulan: pemimpin radikal, pelajar, sami.',
        doodle: 'Garis masa, ikon sekolah (pelajar), pagoda (sami), skrol perlembagaan.',
        text: 'U Ba Pe – Majlis Persatuan Am Kesatuan Burma · Revolusi Pelajar (tuntut universiti) · Majlis Am Sangha Samagyi – Pemberontakan Saya San 1930–1932 · Perlembagaan Burma 1935 pisahkan Burma daripada India',
        anim: 'Garis masa dilakar; kad meluncur masuk mengikut narasi; skrol 1935 dilukis.',
      },
      draw(S, { D }) {
        timeline(S, [{ year: '1906', label: 'Persatuan Belia Buddha', at: 0, d: 0 }, { year: '1930–32', label: 'Pemberontakan Saya San', at: 1, d: 4 }, { year: '1935', label: 'Perlembagaan Burma', at: 2 }], { y: 410, x: 200, x1: 880, up: 90, bw: 320, ys: 46, ls: 32 });
        S.card('<div class="t-body" style="font-size:38px"><b>U Ba Pe</b> (radikal) ➜ <span class="hl">Majlis Persatuan Am Kesatuan Burma</span></div>', { anim: 'slideL', x: 60, y: 540, w: 960, at: 0, d: 1.2, pad: '12px 22px' });
        S.svg(D.school('UNIVERSITI', '#172C63'), { x: 70, y: 720, w: 220, at: 1, d: 0 });
        S.card('<div class="t-body" style="font-size:36px"><b>Revolusi Pelajar</b>: tuntut penubuhan universiti</div>', { anim: 'slideR', x: 310, y: 730, w: 710, at: 1, d: 0.6, pad: '10px 20px' });
        S.card('<div class="t-body" style="font-size:36px">Sami: <b>Majlis Am Sangha Samagyi</b> ➜ <span class="hl">Pemberontakan Saya San</span></div>', { anim: 'slideR', x: 310, y: 870, w: 710, at: 1, d: 4.2, pad: '10px 20px' });
        S.svg(D.pagoda(), { x: 90, y: 900, w: 170, at: 1, d: 4 });
        S.card('<div class="t-body" style="font-size:38px"><b>Perlembagaan Burma 1935</b>: Burma <span class="hl">dipisahkan daripada India</span> ➜ ke arah berkerajaan sendiri</div>', { color: 'gold', anim: 'slideU', x: 60, y: 1100, w: 960, at: 2, d: 0.4, pad: '12px 22px' });
      },
    },
    {
      id: 'burma3', transition: 'paper',
      lines: [
        'Golongan **Thakin** menubuhkan **Parti Do Bama Asiayone**, yang bermaksud Kami Orang Burma, dipimpin oleh **Aung San**, Kyaw Nein dan U Nu.',
        'Mereka menggelar diri Thakin, yang bermaksud tuan, untuk menegaskan bahawa orang Burma mesti bertuankan orang Burma!',
        'Pada tahun 1937, **Dr. Ba Maw** memenangi pilihan raya dan dilantik sebagai Perdana Menteri yang pertama.',
      ],
      board: {
        name: 'Burma (3): Thakin & Do Bama Asiayone',
        visual: 'Tiga watak siswazah (generik) dengan tag Aung San, Kyaw Nein, U Nu; sepanduk "KAMI ORANG BURMA"; kad definisi Thakin; cop 1937.',
        doodle: 'Watak muda, sepanduk merah, kad DEFINISI, cop merah.',
        text: 'Parti Do Bama Asiayone ("Kami Orang Burma") – Aung San, Kyaw Nein, U Nu · Thakin = tuan: orang Burma mesti bertuankan orang Burma · 1937 Dr. Ba Maw – Perdana Menteri pertama',
        anim: 'Sepanduk pop; watak dilukis satu demi satu; definisi meluncur; cop 1937.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h2" style="text-align:center;color:#FFFDF7;font-size:54px">"KAMI ORANG BURMA"</div><div class="t-label" style="text-align:center;color:#F5C928">Parti Do Bama Asiayone</div>', { color: 'red', anim: 'stamp', x: 90, y: 300, w: 900, at: 0, d: 0.6, rot: -2 });
        [['Aung San', '#C93436'], ['Kyaw Nein', '#3F5DA8'], ['U Nu', '#F5C928']].forEach(([n, c], i) => who(S, D.person({ hat: 'hair', shirt: c, pose: i === 0 ? 'up' : 'present' }), n, 'Thakin', { x: 110 + i * 310, y: 520, w: 150, at: 0, d: 3.6 + i * 0.8, ty: 200, tw: 210, sfx: i ? false : 'pencil' }));
        S.card('<div class="tw" style="font-size:24px;color:#C93436;letter-spacing:3px">DEFINISI</div><div class="t-h3" style="font-size:44px">THAKIN = "tuan"</div><div class="t-body" style="font-size:38px">orang Burma mesti <span class="hl">bertuankan orang Burma</span></div>', { tear: true, anim: 'slideU', x: 60, y: 850, w: 640, at: 1, d: 0.2 });
        S.stamp('1937', { x: 760, y: 870, w: 230, at: 2, d: 0.2, fs: 66 });
        S.card('<div class="t-body" style="font-size:36px;text-align:center"><b>Dr. Ba Maw</b><br>PM pertama</div>', { color: 'gold', anim: 'pop', x: 740, y: 990, w: 280, at: 2, d: 1.6, pad: '10px 14px' });
      },
    },
    {
      id: 'vietnam', transition: 'flip',
      lines: [
        'Di **Vietnam**, gerakan awal dipelopori oleh golongan bangsawan dan pegawai **Mandarin**, iaitu pembesar yang menerima pendidikan Confucius.',
        'Golongan intelektual mengkritik penindasan Perancis dan menuntut hak rakyat Vietnam melalui akhbar seperti **Tribune Indigène** dan **La Cloche Fêlée**.',
        'Selepas Perang Dunia Pertama, gerakan menjadi revolusi dengan dua aliran: aliran nasionalis, **Viet Nam Quoc Dan Dang** atau VNQDD, pimpinan **Nguyen Thai Hoc**,',
        'dan aliran komunis, **Parti Komunis Vietnam**, pimpinan **Ho Chi Minh**, yang mengisytiharkan kemerdekaan Vietnam pada tahun 1945.',
      ],
      board: {
        name: 'Vietnam: Mandarin, akhbar & dua aliran',
        visual: 'Profil negara + peta mini; dua akhbar; jalan bercabang dua (nasionalis vs komunis) dengan watak & tag nama.',
        doodle: 'Akhbar Tribune Indigène & La Cloche Fêlée, watak Mandarin (topi), anak panah bercabang, watak Nguyen Thai Hoc & Ho Chi Minh (generik).',
        text: 'VIETNAM · penjajah Perancis · bangsawan & Mandarin (pendidikan Confucius) · akhbar Tribune Indigène, La Cloche Fêlée · selepas PD1: VNQDD – Nguyen Thai Hoc (nasionalis) · Parti Komunis Vietnam – Ho Chi Minh (komunis) · merdeka 1945',
        anim: 'Peta mini; akhbar meluncur masuk; jalan bercabang dilukis; dua watak pop pada ayat ketiga dan keempat.',
      },
      draw(S, { D }) {
        header(S, 'VIETNAM', 'Penjajah: Perancis', 'Indochina');
        loc(S, 'vietnam', 'Vietnam');
        who(S, D.pegawai({ pose: 'present' }), 'Mandarin', 'pendidikan Confucius', { x: 80, y: 540, w: 140, at: 0, d: 2.6, ty: 180, tw: 250 });
        S.svg(D.newspaper('Tribune Indigène', { ts: 22 }), { x: 380, y: 540, w: 160, at: 1, d: 1.8 });
        S.svg(D.newspaper('La Cloche Fêlée', { ts: 22, color: '#C93436' }), { x: 560, y: 560, w: 160, at: 1, d: 2.6 });
        S.arrow(540, 800, 290, 900, { at: 2, d: 0, color: RED, bend: 0.1 });
        S.arrow(540, 800, 790, 900, { at: 3, d: 0, color: RED, bend: -0.1 });
        S.add('<span class="pill">Selepas PD1</span>', { anim: 'pop', x: 410, y: 760, w: 300, at: 2, d: -0.2 });
        S.card('<div class="t-label" style="color:#C93436">Nasionalis</div><div class="t-body" style="font-size:36px"><b>VNQDD</b><br>pimpinan <span class="hl">Nguyen Thai Hoc</span></div>', { anim: 'pop', x: 60, y: 920, w: 460, at: 2, d: 2.6 });
        S.card('<div class="t-label" style="color:#F5C928">Komunis</div><div class="t-body" style="font-size:36px"><b>Parti Komunis Vietnam</b><br>pimpinan <b style="color:#F5C928">Ho Chi Minh</b> · merdeka <b style="color:#F5C928">1945</b></div>', { color: 'navy', anim: 'pop', x: 560, y: 920, w: 460, at: 3, d: 0.6 });
      },
    },
    {
      id: 'indonesia', transition: 'paper',
      lines: [
        'Di **Indonesia**, perjuangan awal berkisar tentang isu pendidikan, dipelopori oleh **Raden Adjeng Kartini**.',
        'Karyanya, **Hilang Gelap Terbitlah Terang**, mendedahkan dasar diskriminasi Belanda yang memundurkan bangsa Indonesia.',
        'Kemudian muncul pertubuhan yang lebih tersusun, seperti **Muhammadiyah**, yang mempertahankan Islam daripada sekularisme Barat, **Sarekat Islam**, **Parti Komunis Indonesia** dan **Parti Nasionalis Indonesia**.',
      ],
      board: {
        name: 'Indonesia (1): Kartini & pertubuhan',
        visual: 'Profil negara + peta mini; watak Kartini (generik, rambut bersanggul) dengan buku; empat label pertubuhan.',
        doodle: 'Watak wanita bersanggul, buku "Hilang Gelap Terbitlah Terang", mentol (terang), label pil pertubuhan.',
        text: 'INDONESIA · penjajah Belanda · R.A. Kartini – isu pendidikan · "Hilang Gelap Terbitlah Terang" dedah diskriminasi Belanda · Muhammadiyah, Sarekat Islam (SI), Parti Komunis Indonesia (PKI), Parti Nasionalis Indonesia (PNI)',
        anim: 'Peta mini; watak & buku dilukis; mentol menyala; empat pil pertubuhan pop berturut-turut.',
      },
      draw(S, { D }) {
        header(S, 'INDONESIA', 'Penjajah: Belanda', 'Asia Tenggara (kepulauan)');
        loc(S, 'indonesia', 'Indonesia');
        who(S, D.person({ hat: 'bun', shirt: '#F5C928', dress: true, pose: 'hold', prop: 'book' }), 'Raden Adjeng Kartini', 'isu pendidikan', { x: 80, y: 540, w: 150, at: 0, d: 0.4, ty: 190, tw: 300 });
        S.svg(D.book('Hilang Gelap|Terbitlah|Terang', '#172C63', { size: 19, y: 115 }), { x: 410, y: 540, w: 190, at: 1, d: 0 });
        S.add(D.bulb(), { anim: 'pop', x: 620, y: 560, w: 140, at: 1, d: 1.6 });
        S.card('<div class="t-body" style="font-size:36px">Dedah <span class="hl">diskriminasi Belanda</span> yang memundurkan bangsa Indonesia</div>', { anim: 'slideR', x: 390, y: 800, w: 630, at: 1, d: 1.0, pad: '10px 20px' });
        const orgs = [['Muhammadiyah', 0.4, 'gold'], ['Sarekat Islam (SI)', 4.6, ''], ['Parti Komunis Indonesia (PKI)', 5.6, ''], ['Parti Nasionalis Indonesia (PNI)', 7.0, 'red']];
        orgs.forEach(([n, d, c], i) => S.card(`<div class="t-body" style="font-size:36px;text-align:center;${c === 'red' ? 'color:#FFFDF7' : ''}">${n}</div>`, { color: c, anim: 'pop', x: 60 + (i % 2) * 490, y: 990 + Math.floor(i / 2) * 120, w: 470, at: 2, d, pad: '8px 12px', notape: true, rot: (i % 2 ? 1 : -1) }));
      },
    },
    {
      id: 'indonesia2', transition: 'slideUp',
      lines: [
        'Pada tahun 1928, Kongres Pemuda Indonesia melahirkan ikrar **Sumpah Pemuda**, tonggak nasionalisme Indonesia, dengan tiga asas: satu tanah air, satu bangsa dan satu bahasa.',
        '**Soekarno** pula mengetuai **Permuafakatan Perhimpunan Politik Kebangsaan Indonesia** untuk memperjuangkan kemerdekaan Indonesia.',
      ],
      board: {
        name: 'Indonesia (2): Sumpah Pemuda 1928 & Soekarno',
        visual: 'Tiga tiang besar "SATU TANAH AIR · SATU BANGSA · SATU BAHASA" di bawah cop "SUMPAH PEMUDA 1928"; watak Soekarno (generik, songkok) dengan tag PPPKI.',
        doodle: 'Tiga kad tiang, cop merah, watak bersongkok, pembesar suara.',
        text: 'Sumpah Pemuda 1928 (Kongres Pemuda Indonesia): satu tanah air · satu bangsa · satu bahasa · Soekarno – PPPKI – perjuangkan kemerdekaan',
        anim: 'Cop dihentak; tiga tiang naik satu demi satu; watak dilukis; tip SPM meluncur naik.',
      },
      draw(S, { D }) {
        S.stamp('SUMPAH PEMUDA 1928', { x: 100, y: 310, w: 880, at: 0, d: 0.4, fs: 62, style: 'text-align:center' });
        ['SATU<br>TANAH AIR', 'SATU<br>BANGSA', 'SATU<br>BAHASA'].forEach((t, i) => S.card(`<div class="t-h3" style="text-align:center;font-size:42px;${i === 1 ? 'color:#F5C928' : ''}">${t}</div>`, { color: i === 1 ? 'navy' : 'gold', anim: 'slideU', x: 70 + i * 320, y: 470, w: 300, at: 0, d: 5.2 + i * 0.7, pad: '20px 8px' }));
        who(S, D.rakyat({ pose: 'up', shirt: '#FFFDF7', samping: '#C93436' }), 'Soekarno', 'PPPKI', { x: 90, y: 700, w: 160, at: 1, d: 0, ty: 210, tw: 200 });
        S.card('<div class="t-body" style="font-size:38px"><b>PPPKI</b> = Permuafakatan Perhimpunan Politik Kebangsaan Indonesia ➜ perjuangkan <span class="hl">kemerdekaan</span></div>', { anim: 'slideR', x: 320, y: 730, w: 700, at: 1, d: 1.4 });
        examTip(S, 'Tiga asas <span class="hl">Sumpah Pemuda</span>: satu tanah air, satu bangsa, satu bahasa.', 1, { d: 4.2, y: 1080, fs: 38 });
      },
    },
    {
      id: 'thailand', transition: 'flip',
      lines: [
        '**Thailand** pula tidak dijajah. Matlamat nasionalismenya ialah mempertahankan kedaulatan negara, dan menuntut penglibatan rakyat dalam pemerintahan.',
        '**Raja Mongkut** menjalankan diplomasi dan pemodenan: birokrasi Barat, penasihat Barat untuk melatih pegawai tempatan, dan guru dari Barat. Usaha ini diteruskan oleh **Raja Chulalongkorn**.',
        'Namun, kelemahan pentadbiran **Raja Vajiravudh**, dan penguasaan politik oleh kerabat raja, menimbulkan kegelisahan rakyat.',
      ],
      board: {
        name: 'Thailand (1): Mongkut, Chulalongkorn & Vajiravudh',
        visual: 'Profil negara + peta mini; tiga watak raja (generik, bermahkota) sebaris dengan tag; ikon pemodenan (gear, sekolah); kad fakta.',
        doodle: 'Tiga watak bermahkota, gear, sekolah, perisai (kedaulatan).',
        text: 'THAILAND · tidak dijajah · pertahankan kedaulatan + penglibatan rakyat dalam pemerintahan · Raja Mongkut: diplomasi & pemodenan (birokrasi Barat, penasihat Barat, guru Barat) · Raja Chulalongkorn teruskan · Raja Vajiravudh lemah ➜ rakyat gelisah',
        anim: 'Peta mini; perisai pop; watak raja dilukis mengikut nama; kad fakta meluncur masuk.',
      },
      draw(S, { D }) {
        header(S, 'THAILAND', 'Tidak dijajah', 'dahulu dikenali sebagai Siam');
        loc(S, 'thailand', 'Thailand', { left: true });
        S.svg(D.shield('#F5C928'), { x: 70, y: 610, w: 120, at: 0, d: 1.0 });
        who(S, D.sultan({ pose: 'present', beard: false, cape: '#172C63' }), 'Mongkut', '', { x: 250, y: 600, w: 100, at: 1, d: 0, ty: 134, tw: 200, tx: -50 });
        who(S, D.sultan({ pose: 'present', beard: false, cape: '#C93436' }), 'Chulalongkorn', '', { x: 520, y: 600, w: 100, at: 1, d: 6.6, ty: 134, tw: 270, tx: -85 });
        who(S, D.sultan({ pose: 'down', beard: false, mood: 'sad', cape: '#3F5DA8' }), 'Vajiravudh', '', { x: 820, y: 600, w: 100, at: 2, d: 0, ty: 134, tw: 220, tx: -60 });
        fact(S, 0, 'Matlamat: pertahankan **kedaulatan** + penglibatan rakyat', 0, { d: 2.4 });
        fact(S, 1, '**Raja Mongkut**: diplomasi & **pemodenan** (birokrasi, penasihat, guru Barat)', 1, { d: 1.4 });
        fact(S, 2, '**Raja Chulalongkorn** teruskan dasar terbuka', 1, { d: 7.2 });
        fact(S, 3, '**Raja Vajiravudh** lemah ➜ rakyat **gelisah**', 2, { d: 0.6, color: 'gold' });
      },
    },
    {
      id: 'thailand2', transition: 'slideUp',
      lines: [
        '**Nai Pridi Phanomyong** dan **Phibulsongkram** menubuhkan **Parti Rakyat**, dan melancarkan **Revolusi Thai** pada tahun 1932, yang menamatkan pemerintahan **raja berkuasa mutlak**.',
        'Rakyat juga menentang penguasaan ekonomi oleh kapitalis Barat dan orang Cina. Phibulsongkram meluluskan undang-undang untuk menyekat penguasaan ekonomi orang Cina, dan menggalakkan peribumi dalam kegiatan ekonomi.',
        'Dasar bekerjasama dengan Jepun pula menyebabkan Thailand tidak dijajah Jepun, malah memperoleh wilayah di Indochina dan negeri utara Tanah Melayu.',
      ],
      board: {
        name: 'Thailand (2): Revolusi Thai 1932 & dasar ekonomi',
        visual: 'Cop "REVOLUSI THAI 1932"; dua watak (generik) dengan tag; mahkota dipangkah (tamat raja mutlak); syiling + watak petani (peribumi); jabat kerjasama.',
        doodle: 'Watak bertopi tentera & bersut, mahkota + pangkah, syiling emas, petani, peta kecil.',
        text: 'Nai Pridi Phanomyong & Phibulsongkram – Parti Rakyat – Revolusi Thai 1932 ➜ tamat raja berkuasa mutlak · Phibulsongkram: sekat penguasaan ekonomi orang Cina, galak peribumi · kerjasama dengan Jepun ➜ tidak dijajah Jepun, dapat wilayah di Indochina & negeri utara Tanah Melayu',
        anim: 'Cop dihentak; watak dilukis; mahkota dipangkah; syiling & petani pop; kad akhir meluncur naik.',
      },
      draw(S, { D }) {
        S.stamp('REVOLUSI THAI 1932', { x: 110, y: 300, w: 860, at: 0, d: 4.4, fs: 60, style: 'text-align:center' });
        who(S, D.person({ hat: 'hair', shirt: '#172C63', glasses: true, pose: 'present' }), 'Nai Pridi Phanomyong', 'Parti Rakyat', { x: 90, y: 430, w: 140, at: 0, d: 0, ty: 180, tw: 300 });
        who(S, D.person({ hat: 'military', shirt: '#6B7B4A', pose: 'up' }), 'Phibulsongkram', 'Parti Rakyat', { x: 430, y: 430, w: 140, at: 0, d: 1.2, ty: 180, tw: 250 });
        S.svg(D.crown(), { x: 790, y: 460, w: 170, at: 0, d: 6.0 });
        S.add(D.cross(), { anim: 'stamp', x: 815, y: 455, w: 120, at: 0, d: 7.2 });
        S.text('tamat raja mutlak', { size: 'note', x: 760, y: 600, w: 240, align: 'center', at: 0, d: 7.4 });
        S.svg(D.coins(), { x: 80, y: 760, w: 180, at: 1, d: 1.4 });
        S.card('<div class="t-body" style="font-size:36px">Sekat penguasaan ekonomi <b>orang Cina</b> · galak <span class="hl">peribumi</span> dalam ekonomi</div>', { anim: 'slideR', x: 290, y: 760, w: 730, at: 1, d: 4.6, pad: '12px 20px' });
        S.card('<div class="t-body" style="font-size:36px">Kerjasama dengan <b>Jepun</b> ➜ tidak dijajah Jepun · dapat wilayah di <b>Indochina</b> & <b>negeri utara Tanah Melayu</b></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1000, w: 960, at: 2, d: 0.3, pad: '12px 22px' });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe', gap: 0.25,
      lines: [
        { text: 'Recap lima negara!', pause: 0.2 },
        'Filipina: Jose Rizal, Katipunan dan Aguinaldo.',
        'Burma: isu kasut, golongan Thakin dan Aung San.',
        'Vietnam: VNQDD dan Ho Chi Minh.',
        'Indonesia: Kartini, dan Sumpah Pemuda 1928.',
        'Thailand: Raja Mongkut, dan Revolusi Thai 1932.',
      ],
      board: {
        name: 'Recap lima negara Asia Tenggara',
        visual: 'Jadual nota: lima baris negara dengan tokoh & kata kunci, setiap baris muncul ketika disebut.',
        doodle: 'Baris kad berwarna, penanda kecil, tanda semak.',
        text: 'Filipina: Jose Rizal, Katipunan, Aguinaldo · Burma: isu kasut, Thakin, Aung San · Vietnam: VNQDD, Ho Chi Minh · Indonesia: Kartini, Sumpah Pemuda 1928 · Thailand: Raja Mongkut, Revolusi Thai 1932',
        anim: 'Setiap baris meluncur masuk tepat ketika negara disebut; tanda semak pop.',
      },
      draw(S, { D }) {
        S.text('RECAP <span class="hl">ASIA TENGGARA</span>', { size: 'h2', x: 70, y: 290, w: 940, at: 0, d: -0.2 });
        const rows = [['FILIPINA', 'Jose Rizal · Katipunan · Aguinaldo'], ['BURMA', 'Isu kasut · Thakin · Aung San'], ['VIETNAM', 'VNQDD · Ho Chi Minh'], ['INDONESIA', 'Kartini · Sumpah Pemuda 1928'], ['THAILAND', 'Raja Mongkut · Revolusi Thai 1932']];
        rows.forEach(([n, k], i) => {
          S.card(`<div style="display:flex;align-items:center;gap:18px"><div class="t-h3" style="flex:none;width:250px;font-size:40px;color:#C93436">${n}</div><div class="t-body" style="font-size:38px">${k}</div></div>`, { color: i % 2 ? 'gold' : '', anim: i % 2 ? 'slideR' : 'slideL', x: 60, y: 400 + i * 175, w: 960, at: i + 1, pad: '14px 22px', rot: i % 2 ? 0.6 : -0.6, notape: true });
        });
      },
    },
    nilaiScene([
      { text: 'Iktibarnya? **Sumbangan pemimpin** amat penting untuk mengekalkan kedaulatan negara.', pause: 0.3 },
      'Pemimpin yang berani dan bijak mampu menyatukan rakyat, sama ada melalui pena, diplomasi atau perjuangan.',
    ], 'Sumbangan pemimpin mengekalkan kedaulatan negara', (D) => D.crown(), { iw: 260, ix: 410, note: 'Pemimpin berani & bijak ➜ <span class="hl">satukan rakyat</span> melalui pena, diplomasi atau perjuangan.', doodle: 'Mahkota (kedaulatan), bintang.' }),
    closingScene([
      { text: 'Ringkasnya, nasionalisme di Asia Tenggara bangkit menentang penjajahan dengan pelbagai cara: propaganda, revolusi, diplomasi dan pemodenan.', pause: 0.3 },
      'Sekarang, giliran negara kita! Bilakah kesedaran nasionalisme bermula di sini? Jom ke episod seterusnya!',
    ], 'Episod seterusnya', '2.5 Kesedaran Nasionalisme di Negara Kita', { summary: 'Asia Tenggara: <span class="hl">propaganda</span> · <span class="hl">revolusi</span> · <span class="hl">diplomasi</span> · <span class="hl">pemodenan</span>.' }),
    endScene(),
  ],
};
