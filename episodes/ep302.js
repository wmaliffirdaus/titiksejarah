// BAB 3 · EPISOD 02 – Subtopik 3.1: Nasionalisme di Negara Kita Sebelum Perang Dunia (≈ 3 min)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 52–53 + nota ulang kaji Bab 3.
// Lines marked (=EP07/EP08) are word-for-word the approved short-form lines -> reused from the voice store (0 credits).
import { NAVY, GOLD, RED, BIG, NOW, CH1, cage, akhbar, head, titleCard, kesimpulan, END, quizScenes } from './bab3.js';

export default {
  id: '302',
  file: '02_Bab3_Subtopik_3.1',
  title: 'Nasionalisme di Negara Kita Sebelum Perang Dunia',
  header: { chip: 'BAB 3 • 3.1', sub: 'Nasionalisme Sebelum Perang' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.1), ms. 52–53',
  ...CH1,
  music: { key: 57, bpm: 100, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.1,
      lines: [
        { text: 'Mencetak tulisan tentang Islam tanpa izin sultan boleh **dipenjarakan**!', pause: 0.4 },   // =EP07
        'Beginilah cabaran yang dihadapi gerakan nasionalisme awal di negara kita.',
      ],
      board: {
        name: 'Hook – menulis tanpa izin = penjara',
        visual: 'Frame pertama lengkap: tajuk "TANPA IZIN SULTAN? PENJARA!", buku "TULISAN AGAMA", penjara; cop "1904".',
        doodle: 'Buku, penjara, cop merah.',
        text: 'TANPA IZIN SULTAN? PENJARA! · 1904',
        anim: 'Elemen utama kelihatan pada 0:00; cop pop pada ayat kedua.',
        music: 'Whoosh pembuka; muzik latar bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('TANPA IZIN SULTAN?<br><span class="red">PENJARA!</span>', { fs: 100 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(D.book('TULISAN|AGAMA', GOLD), { ...NOW, x: 110, y: 640, w: 330, rot: -6 });
        S.add(D.jail(), { ...NOW, x: 520, y: 600, w: 440 });
        S.stamp('1904', { x: 640, y: 1080, w: 320, at: 1, d: 0, fs: 96, rot: -8, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Ini Titik Sejarah, Subtopik 3.1: **Nasionalisme di Negara Kita Sebelum Perang Dunia**.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 3.1", tajuk tulisan tangan, maskot rasmi.', doodle: 'Pil, garis bawah merah, pelekat maskot.', text: 'SUBTOPIK 3.1 · Nasionalisme di Negara Kita Sebelum Perang Dunia', anim: 'Pil pop, tajuk ditulis, maskot pop.' },
      draw(S, { D }) { titleCard(S, D, 'SUBTOPIK 3.1', 'Nasionalisme<br>di Negara Kita<br><span class="red">Sebelum Perang Dunia</span>', { fs: 70, uy: 730, my: 800 }); },
    },
    {
      id: 'konteks', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Nasionalisme di negara kita sebelum perang dunia tercetus daripada gerakan orang Melayu **menentang campur tangan British**.', pause: 0.3 },
        'Namun, gerakan awal secara terbuka menerima **tindak balas yang keras** daripada British.',
      ],
      board: { name: 'Asal nasionalisme awal', visual: 'Rakyat Melayu (kiri) menentang anak panah "CAMPUR TANGAN BRITISH"; perisai; cop "TINDAK BALAS KERAS".', doodle: 'Watak rakyat, anak panah, perisai, cop.', text: 'GERAKAN ORANG MELAYU ✕ CAMPUR TANGAN BRITISH · TINDAK BALAS KERAS', anim: 'Watak dilukis; anak panah dilukis; cop dihentak pada ayat kedua.' },
      draw(S, { D }) {
        head(S, 'Bagaimana <span class="hl">Bermula?</span>');
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 90, y: 430, w: 230, at: 0, d: 0.2 });
        S.svg(D.wanita({ pose: 'up' }), { x: 260, y: 450, w: 210, at: 0, d: 0.5 });
        S.text('Orang Melayu', { size: 'label', x: 90, y: 820, w: 380, align: 'center', at: 0, d: 0.8 });
        S.arrow(960, 600, 560, 600, { at: 0, d: 2.2, color: RED, sw: 12 });
        S.card('<div class="t-h3" style="text-align:center">CAMPUR TANGAN<br><span class="red">BRITISH</span></div>', { x: 560, y: 420, w: 440, at: 0, d: 2.4, rot: 2 });
        S.svg(D.shield(), { x: 470, y: 640, w: 130, at: 0, d: 2.8 });
        S.stamp('TINDAK BALAS KERAS!', { x: 90, y: 940, w: 900, at: 1, d: 0.8, fs: 76, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'enakmen', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Awal abad ke-20, British mahu menyekat pengaruh gerakan Islam dari Timur Tengah, lalu memperkenalkan **Enakmen Undang-Undang Islam 1904**.', pause: 0.3 },   // =EP07
        'Dengan persetujuan Raja-raja Melayu, sesiapa yang mencetak dan mengedarkan tulisan tentang agama dan politik Islam tanpa izin sultan, boleh **dipenjarakan**.',
      ],
      board: { name: 'Enakmen Undang-Undang Islam 1904', visual: 'Pil AWAL ABAD KE-20; anak panah "gerakan Islam dari Timur Tengah" disekat; kad Enakmen 1904; penjara + cop PENJARA.', doodle: 'Anak panah, kad kertas koyak, penjara, cop.', text: 'AWAL ABAD KE-20 · ENAKMEN UNDANG-UNDANG ISLAM 1904 · persetujuan Raja-raja Melayu · cetak & edar tulisan agama dan politik Islam tanpa izin sultan = PENJARA', anim: 'Kad naik pada "Enakmen"; penjara & cop pada ayat kedua.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">AWAL ABAD KE-20</span></div>', { anim: 'pop', at: 0, d: -0.2, x: 40, y: 300, w: 1000 });
        S.add('<div class="t-label" style="font-size:50px;text-align:center">gerakan Islam<br>dari Timur Tengah</div>', { anim: 'wipe', at: 0.2, x: 60, y: 400, w: 420, sfx: false });
        S.arrow(470, 470, 760, 470, { at: 0.3, color: NAVY, sw: 10 });
        S.stamp('DISEKAT', { x: 640, y: 430, w: 380, at: 0.42, fs: 70, rot: -6, style: 'text-align:center' });
        S.card('<div class="tw red" style="font-size:28px">ENAKMEN UNDANG-UNDANG ISLAM</div><div style="font-family:Marker;font-size:100px;line-height:1">1904</div><div class="t-body" style="font-size:42px">dengan persetujuan <span class="hl">Raja-raja Melayu</span></div>', { tear: true, anim: 'slideU', at: 0.72, x: 90, y: 600, w: 900 });
        S.svg(D.jail(), { x: 110, y: 1000, w: 230, at: 1, d: 0.4, dur: 0.6 });
        S.card('<div class="t-body" style="font-size:38px">Cetak &amp; edar tulisan agama dan politik Islam <span class="hl">tanpa izin sultan</span></div>', { anim: 'slideR', x: 370, y: 990, w: 640, at: 1, d: 0.9, rot: 1, pad: '12px 20px' });
        S.stamp('PENJARA!', { x: 480, y: 1180, w: 440, at: 1.9, fs: 72, rot: -4, style: 'text-align:center' });
      },
    },
    {
      id: 'penyiasat', transition: 'flip',
      lines: ['British turut menubuhkan dua badan penyiasat, iaitu **Jabatan Siasatan Jenayah** dan **Biro Siasatan Politik**, untuk mengawal gerakan **Islah Islamiah**.'],
      board: { name: 'Dua badan penyiasat British', visual: 'Kanta pembesar besar; dua kad: Criminal Intelligence Department & Political Intelligence Bureau; sasaran: gerakan Islah Islamiah.', doodle: 'Kanta pembesar, kad, anak panah.', text: 'Jabatan Siasatan Jenayah (Criminal Intelligence Department) · Biro Siasatan Politik (Political Intelligence Bureau) ➜ kawal gerakan Islah Islamiah', anim: 'Kad meluncur masuk tepat pada sebutan.' },
      draw(S, { D }) {
        head(S, '2 Badan <span class="hl">Penyiasat</span>');
        S.add(D.magnifier(), { anim: 'pop', x: 410, y: 390, w: 260, at: 0, d: 0 });
        S.card('<div class="t-h3 red" style="font-size:44px">Jabatan Siasatan Jenayah</div><div class="tw" style="font-size:24px">Criminal Intelligence Department</div>', { anim: 'slideL', x: 70, y: 690, w: 940, at: 0.2, rot: -1 });
        S.card('<div class="t-h3 red" style="font-size:44px">Biro Siasatan Politik</div><div class="tw" style="font-size:24px">Political Intelligence Bureau</div>', { anim: 'slideR', x: 70, y: 880, w: 940, at: 0.45, rot: 1 });
        S.card('<div class="t-body" style="text-align:center;color:#F5C928">➜ kawal gerakan <b>Islah Islamiah</b></div>', { color: 'navy', anim: 'slideU', x: 160, y: 1080, w: 760, at: 0.78 });
      },
    },
    {
      id: 'uthmaniyah', bg: 'lined', transition: 'zoom',
      lines: [
        { text: 'Pada tahun 1914, empayar **Uthmaniyah** menyeru umat Islam yang ditindas penjajah supaya bangkit.', pause: 0.3 },   // =EP07
        'Berita ini sampai ke Tanah Melayu melalui akhbar, terutama dalam kalangan **Kaum Muda**.',
      ],
      board: { name: 'Fatwa empayar Uthmaniyah (11 November 1914)', visual: 'Peta Eropah–Asia; penanda Uthmaniyah & Tanah Melayu; anak panah; cop BANGKIT!; akhbar kecil "Kaum Muda".', doodle: 'Peta tulisan tangan, penanda, anak panah, akhbar.', text: '11 NOVEMBER 1914 · fatwa Uthmaniyah · BANGKIT! · sampai melalui akhbar (Kaum Muda)', anim: 'Peta dilakar; penanda & anak panah; cop; akhbar pop pada ayat kedua.' },
      draw(S, { D }) {
        S.add(BIG('11 NOV <span class="red">1914</span>', { fs: 96 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 290, w: 1040 });
        const at = S.map({ bounds: [[22, -6], [112, 46]], w: 940 }, { x: 70, y: 410, w: 940, at: 0, d: -0.1, dur: 1.0 });
        const [x1, y1] = at(28.98, 41.0), [x2, y2] = at(102, 4.5);
        S.arrow(x1 + 30, y1 + 10, x2 - 20, y2 - 30, { at: 0.45, color: RED, sw: 10, bend: -0.15, sfx: 'whoosh' });
        S.pin(at, 28.98, 41.0, '<b>Uthmaniyah</b>', { at: 0.25, color: GOLD, size: 1.05, fs: 44 });
        S.pin(at, 102, 4.5, '<b>Tanah Melayu</b>', { at: 0.6, color: RED, size: 1.05, fs: 44, left: true });
        S.stamp('BANGKIT!', { x: 80, y: 1080, w: 420, at: 0.92, d: -0.1, fs: 84, style: 'text-align:center' });
        S.add(akhbar(D, 'KAUM MUDA', { hs: 38 }), { anim: 'pop', at: 1, d: 0.2, x: 640, y: 1010, w: 270, rot: 4 });
      },
    },
    {
      id: 'pan-islam', bg: 'dots', transition: 'paper',
      lines: ['British berwaspada terhadap gerakan **Pan-Islamisme**, kerana orang Melayu menyokong khalifah Uthmaniyah, yang dianggap pelindung umat Islam serta tanah suci **Mekah dan Madinah**.'],
      board: { name: 'Pan-Islamisme & khalifah Uthmaniyah', visual: 'Tajuk PAN-ISLAMISME; mata British "berwaspada"; kad khalifah Uthmaniyah = pelindung umat Islam, Mekah & Madinah.', doodle: 'Mata, mahkota, kad.', text: 'BRITISH BERWASPADA · PAN-ISLAMISME · Khalifah Uthmaniyah = pelindung umat Islam + tanah suci Mekah & Madinah', anim: 'Tajuk ditulis; kad meluncur.' },
      draw(S, { D }) {
        head(S, '<span class="hl">PAN-ISLAMISME</span>');
        S.add('<svg viewBox="0 0 220 120"><path d="M10 60 Q110 -20 210 60 Q110 140 10 60 Z" fill="#FFFDF7" stroke="#172C63" stroke-width="7"/><circle cx="110" cy="60" r="30" fill="#172C63"/><circle cx="120" cy="50" r="9" fill="#FFF"/></svg>', { anim: 'pop', x: 80, y: 420, w: 240, at: 0, d: 0.1 });
        S.text('British <span class="red">berwaspada</span>', { size: 'h3', x: 340, y: 450, w: 660, at: 0, d: 0.3 });
        S.svg(D.crown(), { x: 120, y: 690, w: 200, at: 0.35 });
        S.card('<div class="t-label red">Khalifah Uthmaniyah</div><div class="t-body" style="font-size:42px">dianggap <span class="hl">pelindung umat Islam</span> serta tanah suci <span class="hl">Mekah &amp; Madinah</span></div>', { anim: 'slideR', x: 360, y: 640, w: 640, at: 0.45, rot: 1.2 });
        S.card('<div class="t-body" style="text-align:center;color:#F5C928">Orang Melayu menyokong khalifah ➜ British risau!</div>', { color: 'navy', anim: 'slideU', x: 90, y: 1060, w: 900, at: 0.5, d: 0.6 });
      },
    },
    {
      id: 'tokjanggut', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Di Pasir Puteh, Kelantan, **Tok Janggut** bangkit menentang British, demi **agama Islam** dan **hak penduduk** tempatan.', pause: 0.3 },   // =EP07
        'Penentangan ini dipengaruhi oleh penglibatan empayar Uthmaniyah dalam Perang Dunia Pertama, dan kemudiannya dikaitkan dengan **isu cukai** serta kebencian terhadap British.',
      ],
      board: { name: 'Penentangan Tok Janggut (1915)', visual: 'Watak pejuang berjanggut; peta penanda Pasir Puteh; kad AGAMA ISLAM / HAK PENDUDUK; kad punca: pengaruh Uthmaniyah (PD1) + isu cukai.', doodle: 'Pejuang berjanggut (ilustrasi), peta, kad.', text: 'TOK JANGGUT · Pasir Puteh, Kelantan · 1915 · agama Islam & hak penduduk · dipengaruhi Uthmaniyah dalam PD1 · isu cukai & benci British', anim: 'Watak pop; penanda pop; kad mengikut sebutan.' },
      draw(S, { D }) {
        S.svg(D.person({ hat: 'tengkolok', hatColor: '#FFFDF7', shirt: '#3F5DA8', pants: NAVY, samping: RED, beard: true, prop: 'keris', pose: 'up' }), { x: 90, y: 300, w: 330, at: 0, d: -0.2, dur: 0.7, sfx: 'pop' });
        S.tag('TOK JANGGUT', 'Pasir Puteh · 1915', { x: 100, y: 790, w: 340, at: 0.3 });
        const at = S.map({ bounds: [[99.6, 1.2], [104.6, 6.9]], w: 470 }, { x: 540, y: 320, w: 470, at: 0, d: -0.1, dur: 1.0 });
        S.pin(at, 102.42, 5.83, '<b>Pasir Puteh</b>', { at: 0.12, color: RED, size: 1, fs: 40, left: true });
        S.card(BIG('AGAMA <span class="hl">ISLAM</span>', { fs: 46 }), { anim: 'slideL', at: 0.62, x: 60, y: 930, w: 460, rot: -1.5, sfx: 'swish' });
        S.card(BIG('HAK <span class="hl">PENDUDUK</span>', { fs: 46 }), { anim: 'slideR', at: 0.8, x: 560, y: 930, w: 460, rot: 1.5, sfx: 'swish' });
        S.card('<div class="t-body" style="font-size:36px">Dipengaruhi <b>Uthmaniyah dalam PD1</b> ➜ kemudian dikaitkan dengan <span class="hl">isu cukai</span> &amp; benci British</div>', { color: 'gold', anim: 'slideU', x: 60, y: 1090, w: 960, at: 1, d: 0.3, pad: '12px 22px' });
      },
    },
    {
      id: 'gagal', bg: 'grid', transition: 'paper',
      lines: ['Namun, penentangan bersenjata itu **gagal**.'],   // =EP07
      board: { name: 'Kegagalan', visual: 'Tajuk "PENENTANGAN BERSENJATA", pedang bersilang, cop GAGAL.', doodle: 'Pedang bersilang.', text: 'PENENTANGAN BERSENJATA · GAGAL', anim: 'Cop GAGAL pada perkataan terakhir.' },
      draw(S, { D }) {
        S.add(BIG('PENENTANGAN<br>BERSENJATA', { fs: 100 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 320, w: 1040 });
        S.add(D.swords(), { anim: 'pop', at: 0, d: 0.1, x: 390, y: 560, w: 300 });
        S.stamp('GAGAL', { x: 190, y: 900, w: 700, at: 0.75, d: -0.1, fs: 170, style: 'text-align:center' });
      },
    },
    {
      id: 'akhbar', bg: 'lined', transition: 'flip',
      lines: [
        { text: 'Selepas penentangan Tok Janggut gagal, perjuangan beralih ke **akhbar** dan **majalah**.', pause: 0.25 },   // =EP08
        'Akhbar dan majalah menjadi wahana penting untuk meniupkan **kesedaran kebangsaan**.',
      ],
      board: { name: 'Beralih ke akhbar & majalah', visual: 'Akhbar Melayu lama; kad "wahana kesedaran kebangsaan".', doodle: 'Akhbar, kad.', text: 'AKHBAR & MAJALAH = wahana kesedaran kebangsaan', anim: 'Akhbar pop; kad naik.' },
      draw(S, { D }) {
        head(S, 'Strategi <span class="hl">Baharu</span>');
        S.add(akhbar(D, 'AKHBAR'), { anim: 'pop', at: 0, d: 0.2, x: 330, y: 400, w: 420, rot: -3 });
        S.card(BIG('AKHBAR &amp; <span class="hl">MAJALAH</span>', { fs: 66 }) + '<div class="t-body" style="font-size:42px;text-align:center">wahana <b>kesedaran kebangsaan</b></div>', { anim: 'slideU', at: 1, d: 0, x: 90, y: 960, w: 900 });
      },
    },
    {
      id: 'undang', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Namun, kebebasan bersuara dan **penerbitan** dikawal oleh undang-undang British.', pause: 0.25 },   // =EP08
        { text: 'Contohnya, Publishing and Book Enactment 1915, dan The Seditious Publication Prohibition Enactment 1919.', pause: 0.3 },
        'Akibatnya, kesedaran kebangsaan **tidak meluas** dalam akhbar Melayu sebelum Perang Dunia Kedua.',
      ],
      board: { name: 'Undang-undang penerbitan British', visual: 'Tajuk UNDANG-UNDANG BRITISH; dua kad (1915, 1919); cop DIKAWAL; nota akibat.', doodle: 'Kad, cop.', text: 'Publishing and Book Enactment 1915 · The Seditious Publication (Prohibition) Enactment 1919 · kesedaran kebangsaan TIDAK MELUAS sebelum PD2', anim: 'Kad meluncur masuk mengikut sebutan; cop; kad akibat.' },
      draw(S) {
        S.add(BIG('UNDANG-UNDANG<br><span class="red">BRITISH</span>', { fs: 92 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 290, w: 1040 });
        S.stamp('DIKAWAL', { x: 640, y: 480, w: 380, at: 0.6, fs: 70, rot: -6, style: 'text-align:center' });
        S.card('<div class="tw red" style="font-size:30px">1915</div><div class="t-body" style="font-size:44px;line-height:1.1">Publishing and Book Enactment</div>', { anim: 'slideL', at: 1, x: 80, y: 600, w: 920, rot: -1, pad: '14px 24px', sfx: 'swish' });
        S.card('<div class="tw red" style="font-size:30px">1919</div><div class="t-body" style="font-size:44px;line-height:1.1">The Seditious Publication (Prohibition) Enactment</div>', { anim: 'slideR', at: 1.45, x: 80, y: 800, w: 920, rot: 1, pad: '14px 24px', sfx: 'swish' });
        S.card('<div class="t-body" style="font-size:40px;text-align:center;color:#F5C928">Kesedaran kebangsaan <b>tidak meluas</b> sebelum PD2</div>', { color: 'navy', anim: 'slideU', x: 80, y: 1040, w: 920, at: 2.2 });
      },
    },
    {
      id: 'tekukur', bg: 'dots', transition: 'zoom',
      lines: [
        { text: 'Jadi, suara kemerdekaan disampaikan secara berselindung melalui **Cerita Tekukur**.', pause: 0.25 },   // =EP08
        'Cerita ini tersiar pada tahun 1920, dalam akhbar seperti Utusan Melayu, Lembaga Melayu, Lidah Teruna dan Pengasoh.',
      ],
      board: { name: 'Cerita Tekukur (1920)', visual: 'Akhbar "CERITA TEKUKUR"; tag BERSELINDUNG; senarai akhbar ditulis satu demi satu.', doodle: 'Akhbar, tag.', text: 'CERITA TEKUKUR · 1920 · Utusan Melayu · Lembaga Melayu · Lidah Teruna · Pengasoh · berselindung di sebalik watak haiwan', anim: 'Akhbar pop; tag; nama akhbar ditulis mengikut sebutan.' },
      draw(S, { D }) {
        S.add(akhbar(D, 'CERITA TEKUKUR', { hs: 36, sub: 'TAHUN 1920' }), { anim: 'pop', at: 0, d: -0.2, x: 60, y: 320, w: 440, rot: -2 });
        S.tag('BERSELINDUNG', 'di sebalik watak haiwan', { x: 560, y: 360, w: 440, at: 0.4 });
        ['Utusan Melayu', 'Lembaga Melayu', 'Lidah Teruna', 'Pengasoh'].forEach((n, i) => S.card(`<div class="t-h3" style="font-size:40px">${n}</div>`, { anim: 'slideR', x: 560, y: 520 + i * 125, w: 440, at: 1, d: 0.5 + 0.55 * i, rot: i % 2 ? 1 : -1, pad: '10px 20px', sfx: 'swish' }));
        S.add(BIG('<span class="hl">CERITA TEKUKUR</span>', { fs: 80 }), { anim: 'pop', at: 0.6, x: 20, y: 1050, w: 1040 });
      },
    },
    {
      id: 'nombor', bg: 'lined', transition: 'paper',
      lines: [
        { text: 'Ada tekukur bernombor **1874** dan **1909**, iaitu tarikh negeri Melayu dikuasai British.', pause: 0.35 },   // =EP08
        'Tekukur yang dahulu bebas, kini terkurung dalam **sangkar emas**.',   // =EP08
      ],
      board: { name: 'Nombor tekukur = tarikh dijajah; sangkar emas', visual: 'Cop TEKUKUR NO. 1874 & 1909; kad tarikh; sangkar emas besar.', doodle: 'Cop, sangkar emas + tekukur.', text: 'TEKUKUR NO. 1874 · TEKUKUR NO. 1909 · = tarikh negeri Melayu dikuasai British · SANGKAR EMAS', anim: 'Cop satu demi satu; sangkar pop pada ayat kedua.' },
      draw(S, { D }) {
        S.stamp('TEKUKUR NO. 1874', { x: 90, y: 300, w: 900, at: 0.14, fs: 74, rot: -3, style: 'text-align:center;white-space:nowrap' });
        S.stamp('TEKUKUR NO. 1909', { x: 90, y: 450, w: 900, at: 0.4, fs: 74, rot: 3, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:44px;text-align:center">= tarikh negeri Melayu <span class="hl">dikuasai British</span></div>', { tear: true, anim: 'slideU', at: 0.72, x: 70, y: 600, w: 940 });
        S.add(cage(D), { anim: 'pop', at: 1, d: -0.1, x: 360, y: 760, w: 360 });
        S.text('<span class="hl">SANGKAR EMAS</span>', { size: 'h3', x: 60, y: 1200, w: 960, align: 'center', at: 1, d: 1.6 });
      },
    },
    {
      id: 'kesimpulan', transition: 'wipe',
      lines: [
        { text: 'Kesimpulannya, kesedaran nasionalisme Melayu sebelum perang lahir daripada semangat **cinta akan negara**.', pause: 0.25 },
        { text: 'Semangat inilah yang menjadi **asas perjuangan kemerdekaan** selepas Perang Dunia Kedua.', pause: 0.35 },
        'Seterusnya, kita kaji **latar belakang Perang Dunia**!',
      ],
      tail: 0.8,
      board: { name: 'Kesimpulan & episod seterusnya', visual: 'Pil kata kunci; kad navy "ASAS PERJUANGAN KEMERDEKAAN"; maskot; kad seterusnya 3.2.', doodle: 'Pil, maskot.', text: 'Enakmen 1904 · Tok Janggut · Akhbar · Cerita Tekukur · Cinta akan negara = ASAS PERJUANGAN KEMERDEKAAN · Seterusnya: 3.2 Latar Belakang Perang Dunia', anim: 'Pil pop; kad dicop; maskot & kad seterusnya pop.' },
      draw(S, { D }) {
        kesimpulan(S, D, [['Enakmen 1904', 0], ['Tok Janggut', 0.15], ['Akhbar', 0.3], ['Cerita Tekukur', 0.45], ['Cinta akan negara', 0.7]],
          ['= ASAS PERJUANGAN KEMERDEKAAN', 1.3], ['3.2 Latar Belakang Perang Dunia', 2]);
      },
    },
    // End-of-episode quiz on this subtopic (rule: every subtopic episode ends with a quiz).
    ...quizScenes([
      { q: "Apakah undang-undang British tahun 1904 yang mengawal penerbitan tulisan agama dan politik Islam?", opts: ["Enakmen Undang-Undang Islam", "Trading With Enemy Enactment", "Seditious Publication Enactment"], a: "Enakmen Undang-Undang Islam" },
      { q: "Di manakah berlakunya penentangan Tok Janggut?", opts: ["Kuala Kangsar, Perak", "Pasir Puteh, Kelantan", "Batu Pahat, Johor"], a: "Pasir Puteh, Kelantan" },
      { q: "Dalam Cerita Tekukur, apakah maksud tekukur nombor 1874 dan 1909?", opts: ["Tahun akhbar Melayu diterbitkan", "Bilangan pembaca akhbar", "Tarikh negeri Melayu dikuasai British"], a: "Tarikh negeri Melayu dikuasai British" },
    ]),
    END,
  ],
};
