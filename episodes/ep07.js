// EP 7 – Bab 3 · 3.1 Bahagian 1: Kawalan British & Penentangan Tok Janggut (Chapter 1 style + pacing, ~55 s)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 52 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1 } from './bab3.js';

export default {
  id: '07',
  file: '07_Bab3_3.1A_Penjara_kerana_Menulis',
  title: 'Penjara kerana Menulis? – Kawalan British & Tok Janggut (3.1 Bahagian 1)',
  header: { chip: 'BAB 3 • 3.1', sub: 'Nasionalisme Sebelum Perang' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.1)',
  ...CH1,
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05, cam: [1.0, 1.06],
      lines: ['Mencetak tulisan tentang Islam tanpa izin sultan boleh **dipenjarakan**!'],
      board: {
        name: '0–4 s · Hook: menulis tanpa izin = penjara',
        visual: 'Frame pertama lengkap: tajuk besar "TANPA IZIN SULTAN? PENJARA!", doodle penjara dan buku, cop merah "1904".',
        doodle: 'Penjara (jeriji), buku, cop.',
        text: 'TANPA IZIN SULTAN? · PENJARA! · 1904',
        anim: 'Semua kelihatan pada 0:00; kamera zoom perlahan; cop pop pada 1.4 s.',
        music: 'Whoosh pada 0:00; muzik latar Bab 1 (104 BPM) bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('TANPA IZIN SULTAN?<br><span class="red">PENJARA!</span>', { fs: 100 }), { ...NOW, x: 20, y: 290, w: 1040 });
        S.add(D.book('TULISAN|AGAMA', GOLD), { ...NOW, x: 110, y: 640, w: 330, rot: -6 });
        S.add(D.jail(), { ...NOW, x: 520, y: 600, w: 440 });
        S.stamp('1904', { x: 640, y: 1080, w: 320, at: 0, d: 1.4, fs: 96, rot: -8, style: 'text-align:center' });
      },
    },
    {
      id: 'konteks',
      lines: ['Inilah kisah **nasionalisme** di negara kita, sebelum Perang Dunia.'],
      board: {
        name: '4–9 s · Konteks: subtopik 3.1',
        visual: 'Pil "SUBTOPIK 3.1"; glob; kad navy "NASIONALISME SEBELUM PERANG DUNIA".',
        doodle: 'Glob, kad navy.',
        text: 'SUBTOPIK 3.1 · NASIONALISME DI NEGARA KITA SEBELUM PERANG DUNIA',
        anim: 'Helaian kertas baharu masuk; pil pop; kad naik dari bawah.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:44px">SUBTOPIK 3.1</span></div>', { anim: 'pop', at: 0, d: -0.2, x: 40, y: 320, w: 1000 });
        S.svg(D.globe(), { x: 400, y: 430, w: 280, at: 0, d: 0, dur: 0.9 });
        S.card(BIG('NASIONALISME<br>SEBELUM PERANG DUNIA', { fs: 72, color: GOLD }), { color: 'navy', anim: 'slideU', at: 0.3, x: 80, y: 800, w: 920 });
      },
    },
    {
      id: 'enakmen', bg: 'grid',
      lines: ['Awal abad ke-20, British mahu menyekat pengaruh gerakan Islam dari Timur Tengah, lalu memperkenalkan **Enakmen Undang-Undang Islam 1904**.'],
      board: {
        name: '9–19 s · Kawalan British: Enakmen Undang-Undang Islam 1904',
        visual: 'Pil "AWAL ABAD KE-20"; anak panah dari "TIMUR TENGAH" disekat palang merah; kad kertas koyak Enakmen 1904; tag dua badan penyiasat.',
        doodle: 'Anak panah, palang, kad kertas koyak, tag.',
        text: 'AWAL ABAD KE-20 · gerakan Islam dari Timur Tengah DISEKAT · ENAKMEN UNDANG-UNDANG ISLAM 1904 (dengan persetujuan Raja-raja Melayu) · Jabatan Siasatan Jenayah + Biro Siasatan Politik',
        anim: 'Anak panah dilukis; palang dicop; kad naik pada "Enakmen"; tag pop.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px;background:#C93436;color:#FFFDF7">AWAL ABAD KE-20</span></div>', { anim: 'pop', at: 0, d: -0.2, x: 40, y: 300, w: 1000 });
        S.add('<div class="t-label" style="font-size:52px;text-align:center">gerakan Islam<br>dari Timur Tengah</div>', { anim: 'wipe', at: 0.2, x: 60, y: 400, w: 420, sfx: false });
        S.arrow(470, 470, 760, 470, { at: 0.3, color: NAVY, sw: 10 });
        S.stamp('DISEKAT', { x: 640, y: 430, w: 380, at: 0.4, fs: 70, rot: -6, style: 'text-align:center' });
        S.card('<div class="tw red" style="font-size:28px">ENAKMEN UNDANG-UNDANG ISLAM</div><div style="font-family:Marker;font-size:110px;line-height:1">1904</div><div class="t-body" style="font-size:44px">dengan persetujuan <span class="hl">Raja-raja Melayu</span></div>', { tear: true, anim: 'slideU', at: 0.7, x: 90, y: 620, w: 900 });
        S.tag('+ 2 BADAN PENYIASAT', 'Jabatan Siasatan Jenayah · Biro Siasatan Politik', { x: 140, y: 1070, w: 800, at: 0.92 });
      },
    },
    {
      id: 'uthmaniyah', bg: 'lined',
      lines: ['Pada tahun 1914, empayar **Uthmaniyah** menyeru umat Islam yang ditindas penjajah supaya bangkit.'],
      board: {
        name: '19–26 s · Seruan empayar Uthmaniyah (11 November 1914)',
        visual: 'Peta lakaran Eropah–Asia; penanda kuning "Uthmaniyah", penanda merah "Tanah Melayu"; anak panah merah; tajuk "11 NOV 1914"; cop "BANGKIT!".',
        doodle: 'Peta tulisan tangan, penanda, anak panah.',
        text: '11 NOVEMBER 1914 · Uthmaniyah ➜ Tanah Melayu · BANGKIT! · sampai melalui akhbar (Kaum Muda)',
        anim: 'Peta dilakar; penanda pop; anak panah dilukis; cop BANGKIT! pada perkataan terakhir.',
      },
      draw(S) {
        S.add(BIG('11 NOV <span class="red">1914</span>', { fs: 100 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 290, w: 1040 });
        const at = S.map({ bounds: [[22, -6], [112, 46]], w: 940 }, { x: 70, y: 420, w: 940, at: 0, d: -0.1, dur: 1.0 });
        const [x1, y1] = at(28.98, 41.0), [x2, y2] = at(102, 4.5);
        S.arrow(x1 + 30, y1 + 10, x2 - 20, y2 - 30, { at: 0.45, color: RED, sw: 10, bend: -0.15, sfx: 'whoosh' });
        S.pin(at, 28.98, 41.0, '<b>Uthmaniyah</b>', { at: 0.25, color: GOLD, size: 1.05, fs: 44 });
        S.pin(at, 102, 4.5, '<b>Tanah Melayu</b>', { at: 0.6, color: RED, size: 1.05, fs: 44, left: true });
        S.stamp('BANGKIT!', { x: 240, y: 1130, w: 600, at: 0.92, d: -0.1, fs: 100, style: 'text-align:center' });
      },
    },
    {
      id: 'tokjanggut', bg: 'dots',
      lines: ['Di Pasir Puteh, Kelantan, **Tok Janggut** bangkit menentang British, demi **agama Islam** dan **hak penduduk** tempatan.'],
      board: {
        name: '26–34 s · Penentangan Tok Janggut (1915)',
        visual: 'Watak doodle pejuang berjanggut memegang keris; tag "TOK JANGGUT · Pasir Puteh · 1915"; peta Semenanjung dengan penanda Pasir Puteh; dua kad: AGAMA ISLAM · HAK PENDUDUK.',
        doodle: 'Pejuang berjanggut (ilustrasi), peta, kad.',
        text: 'PASIR PUTEH, KELANTAN · TOK JANGGUT · 1915 · AGAMA ISLAM · HAK PENDUDUK TEMPATAN',
        anim: 'Watak pop; penanda pop; kad meluncur masuk tepat pada sebutan.',
      },
      draw(S, { D }) {
        S.svg(D.person({ hat: 'tengkolok', hatColor: '#FFFDF7', shirt: '#3F5DA8', pants: NAVY, samping: RED, beard: true, prop: 'keris', pose: 'up' }), { x: 90, y: 310, w: 360, at: 0, d: -0.2, dur: 0.7, sfx: 'pop' });
        S.tag('TOK JANGGUT', 'Pasir Puteh · 1915', { x: 110, y: 830, w: 360, at: 0.3 });
        const at = S.map({ bounds: [[99.6, 1.2], [104.6, 6.9]], w: 470 }, { x: 540, y: 330, w: 470, at: 0, d: -0.1, dur: 1.0 });
        S.pin(at, 102.42, 5.83, '<b>Pasir Puteh</b>', { at: 0.12, color: RED, size: 1, fs: 40, left: true });
        S.card(BIG('AGAMA<br><span class="hl">ISLAM</span>', { fs: 64 }), { anim: 'slideL', at: 0.62, x: 70, y: 1010, w: 440, rot: -1.5, sfx: 'swish' });
        S.card(BIG('HAK<br><span class="hl">PENDUDUK</span>', { fs: 64 }), { anim: 'slideR', at: 0.8, x: 570, y: 1010, w: 440, rot: 1.5, sfx: 'swish' });
      },
    },
    {
      id: 'gagal', bg: 'grid',
      lines: ['Namun, penentangan bersenjata itu **gagal**.'],
      board: {
        name: '34–38 s · Kegagalan',
        visual: 'Tajuk "PENENTANGAN BERSENJATA" dengan pedang bersilang; cop merah besar "GAGAL".',
        doodle: 'Pedang bersilang.',
        text: 'PENENTANGAN BERSENJATA · GAGAL',
        anim: 'Cop GAGAL dihentak pada perkataan terakhir.',
      },
      draw(S, { D }) {
        S.add(BIG('PENENTANGAN<br>BERSENJATA', { fs: 100 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 320, w: 1040 });
        S.add(D.swords(), { anim: 'pop', at: 0, d: 0.1, x: 390, y: 560, w: 300 });
        S.stamp('GAGAL', { x: 190, y: 900, w: 700, at: 0.75, d: -0.1, fs: 170, style: 'text-align:center' });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.4, tail: 1.2,
      lines: ['Jadi, bagaimana orang Melayu meneruskan perjuangan? Ikuti episod seterusnya.'],
      board: {
        name: 'Akhir · Soalan teaser + jenama rasmi',
        visual: 'Kad soalan kuning di atas; DP rasmi Titik Sejarah (imej asal); TITIK SEJARAH, slogan & follow.',
        doodle: 'Kad soalan, sinar latar.',
        text: 'Bagaimana orang Melayu meneruskan perjuangan? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut.',
        music: 'Sting penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Bagaimana orang Melayu <span class="hl">meneruskan perjuangan</span>?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
