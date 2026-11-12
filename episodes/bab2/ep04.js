// BAB 2 · EPISOD 04 – Subtopik 2.3: Perkembangan Nasionalisme di Asia (≈ 5–6 min)
import { SRC, RED, NAVY, GOLD, fmt, titleScene, nilaiScene, closingScene, endScene, examTip, timeline, who, header, locator, fact, ASIA, recapGrid } from './lib2.js';

const P = { india: [78, 22], china: [110, 33], mesir: [31.2, 30], turki: [32.8, 39.9], jepun: [139.7, 35.7] };

export default {
  id: '04',
  file: '04_Bab2_Subtopik_2.3',
  title: 'Perkembangan Nasionalisme di Asia',
  header: { chip: 'BAB 2 • 2.3', sub: 'Nasionalisme di Asia' },
  src: SRC,
  music: { key: 60, bpm: 100, variant: 0 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Pada abad ke-19, banyak kawasan di Asia ditekan oleh kuasa Barat.', pause: 0.3 },
        { text: 'Tetapi tahukah anda, sebuah negara Asia akhirnya muncul sebagai kuasa industri dan tentera yang hebat?', pause: 0.4 },
        'Bagaimana Asia bangkit? Jom kita lihat!',
      ],
      board: {
        name: 'Hook – Asia bangkit',
        visual: 'Peta Asia lakaran dengan bayang kapal Barat; gear industri dan pintu gerbang torii muncul; tanda soal.',
        doodle: 'Peta Asia, kapal layar Barat, gear emas, torii merah, tanda soal.',
        text: 'Asia ditekan kuasa Barat? · kuasa industri & tentera Asia? · "Bagaimana Asia bangkit?"',
        anim: 'Peta dilukis; kapal meluncur; gear & torii pop; tanda soal berdenyut.',
        music: 'Sting jenama pembuka; rentak bermula.',
      },
      draw(S, { D }) {
        const at = S.map({ bounds: ASIA, w: 900 }, { x: 90, y: 300, w: 900, at: 0, d: -0.2, dur: 1.4 });
        S.add(D.ship({ hull: NAVY, sail: '#F3EBDD' }), { anim: 'slideL', x: 120, y: 560, w: 260, at: 0, d: 1.2 });
        const [jx, jy] = at(...P.jepun);
        S.svg(D.torii(), { x: jx - 90, y: jy - 60, w: 140, at: 1, d: 1.6 });
        S.add(D.gear(), { anim: 'pop', x: 760, y: 820, w: 200, at: 1, d: 2.4 });
        S.text('Bagaimana <span class="red">ASIA</span> bangkit?', { size: 'title', x: 60, y: 1050, w: 960, align: 'center', at: 2, d: 0 });
        S.add(D.question(), { anim: 'pop', x: 90, y: 860, w: 100, at: 2, d: 0.6, pulse: [{ at: 2, d: 1.4 }] });
      },
    },
    titleScene('2.3', 'Perkembangan<br><span class="red">Nasionalisme</span><br>di Asia', 'Ini Titik Sejarah, Subtopik 2.3: **Perkembangan Nasionalisme di Asia**.', { uy: 690, my: 760 }),
    {
      id: 'peta', bg: 'lined', transition: 'zoom', gap: 0.25,
      lines: [
        { text: 'Kita akan melawat empat kawasan:', pause: 0.2 },
        '**India** dan **China**,',
        '**Empayar Uthmaniyah dan Mesir**,',
        'serta **Jepun**.',
      ],
      board: {
        name: 'Peta empat kawasan Asia',
        visual: 'Peta Asia lakaran dengan penanda: India, China, Uthmaniyah (Turki) & Mesir, Jepun.',
        doodle: 'Peta Asia (Natural Earth), penanda berwarna, label tulisan tangan.',
        text: 'India · China · Empayar Uthmaniyah & Mesir · Jepun',
        anim: 'Peta dilukis; penanda pop mengikut narasi.',
      },
      draw(S) {
        const at = S.map({ bounds: ASIA, w: 960, labels: [{ lon: 70, lat: 5, text: 'Lautan Hindi', size: 30 }] }, { x: 60, y: 300, w: 960, at: 0, d: -0.3, dur: 1.6 });
        S.pin(at, ...P.india, 'India', { at: 1, d: 0, color: RED });
        S.pin(at, ...P.china, 'China', { at: 1, d: 0.6, color: GOLD });
        S.pin(at, ...P.turki, 'Uthmaniyah', { at: 2, d: 0, color: NAVY });
        S.pin(at, ...P.mesir, 'Mesir', { at: 2, d: 0.6, color: RED, left: false });
        S.pin(at, ...P.jepun, 'Jepun', { at: 3, d: 0, color: GOLD, left: true });
        S.card('<div class="t-body" style="text-align:center;font-size:42px">Semua bangkit sebagai <span class="hl">reaksi terhadap kuasa Barat</span></div>', { anim: 'slideU', x: 90, y: 1130, w: 900, at: 3, d: 1, color: 'gold' });
      },
    },
    {
      id: 'india1', transition: 'paper',
      lines: [
        'Mula-mula, **India**. Nasionalisme di India merupakan reaksi penduduk tempatan terhadap dasar **imperialisme British**.',
        'Peristiwa awal penentangan ialah **Dahagi India** pada tahun 1857, iaitu pemberontakan oleh askar sepoi, askar upahan British berbangsa India.',
        'Pertubuhan seperti **Brahmo Samaj** dan **Arya Samaj** pula menyedarkan rakyat tentang isu sosial dan agama, serta kecintaan kepada budaya tempatan.',
      ],
      board: {
        name: 'India (1): punca & penentangan awal',
        visual: 'Profil negara: tajuk INDIA + pil penjajah + peta mini; askar sepoi bertombak; dua kad pertubuhan sosioagama; kad fakta.',
        doodle: 'Watak askar (topi tentera, tombak), skrol, ikon buku.',
        text: 'INDIA · penjajah British · reaksi terhadap imperialisme British · Dahagi India 1857 (askar sepoi) · Brahmo Samaj & Arya Samaj (isu sosioagama)',
        anim: 'Peta mini dilukis; watak sepoi pop; tahun 1857 dicop; kad fakta meluncur masuk.',
      },
      draw(S, { D }) {
        header(S, 'INDIA', 'Penjajah: British', 'Asia Selatan');
        locator(S, ...P.india, 'India', { bounds: ASIA });
        who(S, D.person({ hat: 'military', hatColor: '#C93436', shirt: '#C93436', pants: '#F3EBDD', pose: 'hold', prop: 'spear' }), 'Askar sepoi', '', { x: 80, y: 540, w: 140, at: 1, d: 0, ty: 180, tw: 190 });
        S.stamp('1857', { x: 250, y: 600, w: 220, at: 1, d: 1.2, fs: 64 });
        S.svg(D.scroll('', { color: '#F5C928' }), { x: 500, y: 560, w: 130, at: 2, d: 0.2 });
        fact(S, 0, 'Reaksi terhadap **imperialisme British**', 0, { d: 1.6 });
        fact(S, 1, '**Dahagi India 1857**: pemberontakan askar sepoi', 1, { d: 0.6 });
        fact(S, 2, '**Brahmo Samaj** & **Arya Samaj**', 2, { d: 0.4 });
        fact(S, 3, 'Sedarkan rakyat: isu **sosial & agama**, cinta budaya tempatan', 2, { d: 2.2, color: 'gold' });
      },
    },
    {
      id: 'india2', transition: 'slideUp',
      lines: [
        'Pada penghujung abad ke-19, muncul pertubuhan yang lebih tersusun: **Kongres Kebangsaan India** pada tahun 1885, dan **Liga Muslim** pada tahun 1906.',
        'Awal abad ke-20, pemimpin radikal seperti **Bal Gangadhar Tilak** dan **Bipin Chandra Pal** menggerakkan penentangan secara militan terhadap British.',
        'Selepas Perang Dunia Pertama, Kongres mengamalkan dasar **tidak bekerjasama** dengan British. **Mahatma Gandhi** pula menjadikan **satyagraha**, iaitu berpegang teguh kepada kebenaran, sebagai pegangan perjuangan.',
        'Selepas Perang Dunia Kedua, India dan Pakistan dibahagikan. **Jawaharlal Nehru** menjadi Perdana Menteri pertama India, dan **Muhammad Ali Jinnah** menjadi Gabenor Jeneral Pakistan.',
      ],
      board: {
        name: 'India (2): pertubuhan, tokoh & satyagraha',
        visual: 'Garis masa 1885 ➜ 1906 di atas; watak Mahatma Gandhi (generik, topi putih, cermin mata) dengan kad DEFINISI satyagraha; kad akhir India–Pakistan.',
        doodle: 'Garis masa, watak bertopi putih & cermin mata bulat, kad definisi, dua bendera generik.',
        text: 'Kongres Kebangsaan India 1885 · Liga Muslim 1906 · Bal Gangadhar Tilak & Bipin Chandra Pal (militan) · dasar tidak bekerjasama · Mahatma Gandhi – satyagraha = berpegang teguh kepada kebenaran · Nehru (PM pertama India) · Jinnah (Gabenor Jeneral Pakistan)',
        anim: 'Garis masa dilakar; titik tahun pop; watak Gandhi dilukis; definisi meluncur; kad akhir pop.',
      },
      draw(S, { D }) {
        timeline(S, [{ year: '1885', label: 'Kongres Kebangsaan India', at: 0, d: 2.6 }, { year: '1906', label: 'Liga Muslim', at: 0, d: 5.4 }], { y: 400, x: 230, x1: 850, up: 88, bw: 420, at: 0, d: 2.2 });
        S.card('<div class="t-body" style="font-size:38px">Radikal & militan: <b>Bal Gangadhar Tilak</b> · <b>Bipin Chandra Pal</b></div>', { anim: 'slideL', x: 60, y: 520, w: 960, at: 1, d: 0.2, pad: '12px 22px' });
        who(S, D.person({ hat: 'cap', shirt: '#FFFDF7', pants: '#FFFDF7', glasses: true, pose: 'present' }), 'Mahatma Gandhi', 'satyagraha', { x: 70, y: 700, w: 150, at: 2, d: 1.8, ty: 196, tw: 230 });
        S.card('<div class="tw" style="font-size:24px;color:#C93436;letter-spacing:3px">DEFINISI</div><div class="t-h3" style="font-size:44px">SATYAGRAHA</div><div class="t-body" style="font-size:40px">berpegang teguh kepada <span class="hl">kebenaran</span></div>', { tear: true, anim: 'slideR', x: 300, y: 740, w: 720, at: 2, d: 3.2 });
        S.add('<span class="pill" style="font-size:30px">Dasar tidak bekerjasama</span>', { anim: 'pop', x: 300, y: 650, w: 600, at: 2, d: 0.8 });
        S.card('<div class="t-body" style="font-size:38px">Selepas PD2: <b>India</b> ➜ PM pertama <span class="hl">Jawaharlal Nehru</span> · <b>Pakistan</b> ➜ Gabenor Jeneral <span class="hl">Muhammad Ali Jinnah</span></div>', { color: 'gold', anim: 'slideU', x: 60, y: 1040, w: 960, at: 3, d: 0.5, pad: '14px 22px' });
      },
    },
    {
      id: 'china', transition: 'paper',
      lines: [
        'Seterusnya, **China**. Nasionalisme di China bertujuan mengukuhkan peradaban China daripada ancaman penguasaan politik dan ekonomi asing.',
        'Rakyat juga menentang kelemahan pemerintahan **Dinasti Manchu**.',
        'Gerakan ini dipelopori oleh **Dr. Sun Yat Sen**, dengan ideologi **Tiga Prinsip Rakyat**, atau **San Min Chu-i**: nasionalisme, demokrasi dan kebajikan sosial.',
        'Hasilnya, **Revolusi China 1911** menumbangkan Dinasti Manchu, dan China menjadi sebuah **republik**.',
      ],
      board: {
        name: 'China: Dr. Sun Yat Sen & Revolusi 1911',
        visual: 'Profil negara + peta mini; watak Dr. Sun Yat Sen (generik, bermisai) dengan tag; tiga tiang "San Min Chu-i"; cop 1911 REPUBLIK.',
        doodle: 'Watak bermisai, tiga tiang bangunan berlabel, mahkota dinasti dipangkah, cop merah.',
        text: 'CHINA · kukuhkan peradaban daripada ancaman asing · tentang kelemahan Dinasti Manchu · Dr. Sun Yat Sen · Tiga Prinsip Rakyat (San Min Chu-i): nasionalisme, demokrasi, kebajikan sosial · Revolusi China 1911 ➜ republik',
        anim: 'Watak dilukis; tiga tiang naik satu demi satu; mahkota dipangkah; cop 1911.',
      },
      draw(S, { D }) {
        header(S, 'CHINA', 'Dinasti Manchu', 'Asia Timur');
        locator(S, ...P.china, 'China', { bounds: ASIA });
        S.svg(D.crown(), { x: 70, y: 580, w: 130, at: 1, d: 0 });
        S.add(D.cross(), { anim: 'stamp', x: 90, y: 570, w: 90, at: 1, d: 1.0 });
        S.text('Manchu lemah', { size: 'note', x: 50, y: 700, w: 170, align: 'center', at: 1, d: 0.6 });
        who(S, D.person({ hat: 'hair', shirt: '#3F5DA8', moustache: true, pose: 'up' }), 'Dr. Sun Yat Sen', 'pelopor', { x: 250, y: 540, w: 130, at: 2, d: -0.3, ty: 170, tw: 200 });
        S.text('Tiga Prinsip Rakyat (San Min Chu-i)', { size: 'note', x: 480, y: 520, w: 540, align: 'center', at: 2, d: 2.6 });
        ['Nasionalisme', 'Demokrasi', 'Kebajikan sosial'].forEach((w, i) => S.card(`<div class="t-h3" style="text-align:center;font-size:36px">${i + 1}. ${w}</div>`, { color: i === 1 ? 'gold' : '', anim: 'slideR', x: 500, y: 575 + i * 88, w: 500, at: 2, d: 3.6 + i * 0.6, pad: '6px 10px', notape: true }));
        fact(S, 0, 'Kukuhkan **peradaban China** daripada ancaman asing', 0, { d: 1.6 });
        fact(S, 1, 'Tentang kelemahan **Dinasti Manchu**', 1, { d: 0.3 });
        fact(S, 2, '**Dr. Sun Yat Sen**: **San Min Chu-i**', 2, { d: 1.2 });
        fact(S, 3, '**Revolusi China 1911** ➜ **republik**', 3, { d: 0.6, color: 'gold' });
      },
    },
    {
      id: 'islah', transition: 'flip',
      lines: [
        'Di **Empayar Uthmaniyah dan Mesir**, umat Islam sedar bahawa pemerintahan dan agama Islam diancam oleh **sekularisme Barat**, iaitu fahaman yang memisahkan agama daripada urusan duniawi.',
        'Lahirlah **Gerakan Islah**, dipelopori oleh **Sayyid Jamal al-Din al-Afghani** dan **Sheikh Muhammad Abduh**.',
        'Mereka menyeru umat Islam kembali berpegang pada ajaran Islam yang sebenar, berpandukan **al-Quran dan Hadis**.',
      ],
      board: {
        name: 'Uthmaniyah & Mesir (1): Gerakan Islah',
        visual: 'Profil kawasan + peta mini; masjid doodle; kad definisi sekularisme; dua tokoh berserban dengan tag nama; kitab.',
        doodle: 'Masjid berkubah emas, dua watak berserban (generik), buku/kitab, kad DEFINISI.',
        text: 'UTHMANIYAH & MESIR · ancaman sekularisme Barat (agama dipisahkan daripada urusan duniawi) · Gerakan Islah: Sayyid Jamal al-Din al-Afghani & Sheikh Muhammad Abduh · kembali kepada al-Quran & Hadis',
        anim: 'Masjid dilukis; definisi meluncur; watak dilukis serentak dengan nama; kad al-Quran & Hadis pop.',
      },
      draw(S, { D }) {
        header(S, 'UTHMANIYAH', 'Empayar Uthmaniyah & Mesir', 'Asia Barat & Afrika Utara');
        locator(S, ...P.mesir, 'Mesir', { bounds: ASIA });
        S.svg(D.mosque(), { x: 70, y: 560, w: 270, at: 0, d: 1.2 });
        S.card('<div class="tw" style="font-size:22px;color:#C93436;letter-spacing:3px">DEFINISI</div><div class="t-body" style="font-size:36px"><b>Sekularisme</b> = fahaman memisahkan agama daripada urusan duniawi</div>', { tear: true, anim: 'slideR', x: 370, y: 580, w: 650, at: 0, d: 5.0 });
        who(S, D.pedagang({ prop: 'book', pose: 'present', shirt: '#172C63' }), 'Sayyid Jamal al-Din al-Afghani', 'Gerakan Islah', { x: 90, y: 860, w: 150, at: 1, d: 1.8, ty: 190, tw: 420, tx: -20 });
        who(S, D.pedagang({ prop: 'scroll', pose: 'present', shirt: '#C93436' }), 'Sheikh Muhammad Abduh', 'Gerakan Islah', { x: 560, y: 860, w: 150, at: 1, d: 3.2, ty: 190, tw: 400, tx: -20 });
        S.card('<div class="t-h3" style="text-align:center;font-size:44px">al-Quran & Hadis</div>', { color: 'gold', anim: 'pop', x: 300, y: 880, w: 440, at: 2, d: 1.8, rot: -2 });
      },
    },
    {
      id: 'panislam', transition: 'slideUp',
      lines: [
        'Muncul juga **Pan-Islamisme**, iaitu seruan menyatukan persaudaraan umat Islam di seluruh dunia, untuk bangkit menghalang peluasan kuasa Barat.',
        'Al-Afghani menubuhkan kumpulan bernama **al-Urwah al-Wuthqa**, yang bermaksud Ikatan yang Kuat, dan menerbitkan akhbar dengan nama yang sama.',
        'Pemerintah Uthmaniyah, **Khalifah Abdul Hamid II**, turut menggerakkan idea Pan-Islamisme.',
      ],
      board: {
        name: 'Uthmaniyah & Mesir (2): Pan-Islamisme',
        visual: 'Glob dengan tangan-tangan berpimpin (orang ramai) mengelilinginya; akhbar "al-Urwah al-Wuthqa"; watak Khalifah dengan tag.',
        doodle: 'Glob, orang ramai, akhbar bermastad navy, watak bermahkota berserban.',
        text: 'Pan-Islamisme: satukan persaudaraan umat Islam seluruh dunia, halang peluasan kuasa Barat · al-Urwah al-Wuthqa (Ikatan yang Kuat) – kumpulan & akhbar · Khalifah Abdul Hamid II',
        anim: 'Glob dilukis; orang ramai pop; akhbar meluncur masuk; watak Khalifah dilukis; tip SPM meluncur naik.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">PAN-ISLAMISME</span>', { size: 'h2', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.2 });
        S.svg(D.globe(), { x: 90, y: 400, w: 260, at: 0, d: 0.4 });
        S.svg(D.crowd(4), { x: 60, y: 650, w: 330, at: 0, d: 1.4 });
        S.card('<div class="t-body" style="font-size:40px">Satukan <span class="hl">persaudaraan umat Islam</span> seluruh dunia ➜ halang <b>peluasan kuasa Barat</b></div>', { anim: 'slideR', x: 420, y: 420, w: 600, at: 0, d: 1.0 });
        S.svg(D.newspaper('al-Urwah al-Wuthqa', { ts: 22 }), { x: 440, y: 690, w: 200, at: 1, d: 0.2 });
        S.card('<div class="t-label" style="color:#C93436">maksudnya</div><div class="t-h3" style="font-size:40px">"Ikatan yang Kuat"</div>', { anim: 'pop', x: 680, y: 760, w: 340, at: 1, d: 2.6, rot: 2 });
        who(S, D.sultan({ hat: 'serban', beard: true, cape: '#172C63', pose: 'present' }), 'Khalifah Abdul Hamid II', 'Uthmaniyah', { x: 110, y: 870, w: 120, at: 2, d: -0.2, ty: 160, tx: -40, tw: 380 });
        examTip(S, 'Gerakan Islah ini nanti <span class="hl">mempengaruhi negara kita</span>! Ingat <b>al-Afghani</b> & <b>Muhammad Abduh</b>.', 2, { d: 2.4, y: 1160, fs: 36 });
      },
    },
    {
      id: 'jepun', transition: 'paper',
      lines: [
        'Akhir sekali, **Jepun**. Pada tahun 1868, **Maharaja Mikado Meiji** melancarkan gerakan pemulihan Jepun.',
        'Jepun melaksanakan **pemodenan mengikut model Barat**, supaya Jepun dihormati oleh kuasa Barat.',
        'Semangat **Bushido** dijadikan asas nasionalisme: sanggup menanggung risiko, bersungguh-sungguh mencapai cita-cita, dan sedia berkorban demi ketua dan negara.',
        'Jepun muncul sebagai kuasa industri dan tentera yang hebat. Menjelang abad ke-20, Jepun sendiri menjadi **kuasa imperialis** di Asia.',
      ],
      board: {
        name: 'Jepun: Pemulihan Meiji & Bushido',
        visual: 'Profil negara + peta mini; torii; watak Maharaja (generik, topi tentera); gear industri & kapal; kad definisi Bushido; kad fakta.',
        doodle: 'Pintu gerbang torii merah, gear emas, kapal navy, watak bertopi tentera.',
        text: 'JEPUN · 1868 · Maharaja Mikado Meiji – gerakan pemulihan · pemodenan ikut model Barat · Bushido · kuasa industri & tentera · kuasa imperialis di Asia (abad ke-20)',
        anim: 'Torii dilukis; watak pop; gear berdenyut; definisi meluncur; kad fakta mengikut narasi.',
      },
      draw(S, { D }) {
        header(S, 'JEPUN', '1868 · Pemulihan Meiji', 'Asia Timur');
        locator(S, ...P.jepun, 'Jepun', { bounds: ASIA, left: true });
        S.svg(D.torii(), { x: 70, y: 560, w: 200, at: 0, d: 1.0 });
        who(S, D.person({ hat: 'military', hatColor: '#172C63', shirt: '#172C63', moustache: true, pose: 'present' }), 'Maharaja Mikado Meiji', '', { x: 300, y: 540, w: 130, at: 0, d: 1.6, ty: 170, tw: 300 });
        S.add(D.gear(), { anim: 'pop', x: 470, y: 560, w: 130, at: 1, d: 0.3, pulse: [{ at: 3, d: 0.5 }] });
        S.svg(D.ship({ hull: NAVY, sail: '#F3EBDD', waves: false }), { x: 600, y: 610, w: 180, at: 3, d: 0.3 });
        fact(S, 0, '**1868**: Maharaja Mikado Meiji lancar **gerakan pemulihan**', 0, { d: 2.2 });
        fact(S, 1, '**Pemodenan** ikut model Barat – supaya dihormati', 1, { d: 0.3 });
        fact(S, 2, '**Bushido**: sanggup berkorban demi ketua & negara', 2, { d: 0.3 });
        fact(S, 3, 'Kuasa industri & tentera ➜ **kuasa imperialis** di Asia', 3, { d: 0.6, color: 'gold' });
      },
    },
    {
      id: 'recap', bg: 'grid', transition: 'wipe',
      lines: [
        { text: 'Recap empat kawasan!', pause: 0.2 },
        'India: Kongres Kebangsaan India, dan satyagraha Mahatma Gandhi.',
        'China: Dr. Sun Yat Sen, San Min Chu-i, dan Revolusi 1911.',
        'Uthmaniyah dan Mesir: Gerakan Islah dan Pan-Islamisme.',
        'Jepun: Pemulihan Meiji 1868, dan semangat Bushido.',
      ],
      board: {
        name: 'Recap nasionalisme di Asia',
        visual: 'Grid 2×2 kad ringkasan setiap kawasan dengan kata kunci utama.',
        doodle: 'Kad nota lekat berwarna, pita kuning.',
        text: 'INDIA: INC 1885, satyagraha · CHINA: Sun Yat Sen, San Min Chu-i, 1911 · UTHMANIYAH & MESIR: Islah, Pan-Islamisme · JEPUN: Meiji 1868, Bushido',
        anim: 'Setiap kad pop tepat ketika kawasan disebut.',
      },
      draw(S) {
        S.text('RECAP <span class="hl">ASIA</span>', { size: 'h2', x: 70, y: 300, w: 900, at: 0, d: -0.2 });
        recapGrid(S, [
          ['INDIA', 'Kongres Kebangsaan India **1885** · Liga Muslim 1906 · Gandhi: **satyagraha**', 1, 'gold'],
          ['CHINA', '**Dr. Sun Yat Sen** · **San Min Chu-i** · Revolusi **1911** ➜ republik', 2],
          ['UTHMANIYAH & MESIR', '**Gerakan Islah** (al-Afghani, Abduh) · **Pan-Islamisme**', 3],
          ['JEPUN', 'Pemulihan **Meiji 1868** · pemodenan · **Bushido**', 4, 'gold'],
        ], { y: 410, h: 380, fs: 38 });
      },
    },
    nilaiScene([
      { text: 'Iktibarnya? Pentingnya **ilmu dalam kehidupan**.', pause: 0.3 },
      'Jepun maju kerana menguasai ilmu dan teknologi, manakala Gerakan Islah membangkitkan umat melalui pemikiran dan pendidikan. Ilmu ialah kunci untuk bangkit!',
    ], 'Kepentingan ilmu dalam kehidupan', (D) => D.book('ILMU', '#C93436', { size: 40, y: 145 }), { iw: 240, ix: 420, note: 'Jepun maju dengan <span class="hl">ilmu & teknologi</span>; Islah bangkit melalui <span class="hl">pemikiran & pendidikan</span>.', doodle: 'Buku merah "ILMU", bintang.' }),
    closingScene([
      { text: 'Ringkasnya, nasionalisme di Asia ialah reaksi terhadap imperialisme Barat, dan usaha untuk memajukan bangsa sendiri.', pause: 0.3 },
      'Bagaimana pula jiran kita di Asia Tenggara? Jom ke episod seterusnya!',
    ], 'Episod seterusnya', '2.4 Nasionalisme di Asia Tenggara', { summary: 'Asia: reaksi terhadap <span class="hl">imperialisme Barat</span> + usaha <span class="hl">memajukan bangsa</span>.' }),
    endScene(),
  ],
};
