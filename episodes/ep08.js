// EP 8 – Bab 3 · 3.1 Bahagian 2: Akhbar & Cerita Tekukur (Chapter 1 style + pacing, ~55 s)
// Facts: Buku Teks Sejarah Tingkatan 4 KSSM ms. 53 + nota ulang kaji Bab 3.
import { NAVY, GOLD, RED, BIG, NOW, CH1, cage, akhbar } from './bab3.js';

export default {
  id: '08',
  file: '08_Bab3_3.1B_Burung_dalam_Sangkar_Emas',
  title: 'Burung dalam Sangkar Emas – Akhbar & Cerita Tekukur (3.1 Bahagian 2)',
  header: { chip: 'BAB 3 • 3.1', sub: 'Nasionalisme Sebelum Perang' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 3 (3.1)',
  ...CH1,
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false, lead: 0.05, cam: [1.0, 1.06],
      lines: ['Seekor burung **tekukur** menangis di dalam akhbar Melayu. Kenapa?'],
      board: {
        name: '0–4 s · Hook: tekukur menangis dalam sangkar emas',
        visual: 'Frame pertama lengkap: tajuk besar "BURUNG DALAM SANGKAR EMAS", doodle burung tekukur menangis dalam sangkar emas, cop merah "1920".',
        doodle: 'Sangkar emas, burung tekukur (air mata).',
        text: 'BURUNG DALAM SANGKAR EMAS · 1920',
        anim: 'Semua kelihatan pada 0:00; kamera zoom perlahan; cop pop pada 1.4 s.',
        music: 'Whoosh pada 0:00; muzik latar Bab 1 (104 BPM) bermula.',
      },
      draw(S, { D }) {
        S.add(BIG('BURUNG DALAM<br><span class="hl">SANGKAR EMAS</span>', { fs: 104 }), { ...NOW, x: 20, y: 280, w: 1040 });
        S.add(cage(D), { ...NOW, x: 290, y: 560, w: 500 });
        S.stamp('1920', { x: 720, y: 1120, w: 300, at: 0, d: 1.4, fs: 92, rot: -8, style: 'text-align:center' });
      },
    },
    {
      id: 'akhbar', bg: 'lined',
      lines: ['Selepas penentangan Tok Janggut gagal, perjuangan beralih ke **akhbar** dan **majalah**.'],
      board: {
        name: '4–10 s · Beralih ke akhbar & majalah',
        visual: 'Pil "SUBTOPIK 3.1"; doodle akhbar Melayu lama; kad "AKHBAR & MAJALAH = wahana kesedaran kebangsaan".',
        doodle: 'Akhbar, pedang bersilang kecil (dipangkah).',
        text: 'SUBTOPIK 3.1 · TOK JANGGUT GAGAL ➜ AKHBAR & MAJALAH · wahana kesedaran kebangsaan',
        anim: 'Helaian baharu masuk; akhbar pop; kad naik.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill" style="font-size:40px">SUBTOPIK 3.1</span></div>', { anim: 'pop', at: 0, d: -0.2, x: 40, y: 300, w: 1000 });
        S.add(akhbar(D, 'AKHBAR'), { anim: 'pop', at: 0, d: 0.2, x: 330, y: 400, w: 420, rot: -3 });
        S.card(BIG('AKHBAR &amp; <span class="hl">MAJALAH</span>', { fs: 70 }) + '<div class="t-body" style="font-size:42px;text-align:center">wahana kesedaran kebangsaan</div>', { anim: 'slideU', at: 0.55, x: 90, y: 960, w: 900 });
      },
    },
    {
      id: 'undang', bg: 'grid',
      lines: ['Namun, kebebasan bersuara dan **penerbitan** dikawal oleh undang-undang British.'],
      board: {
        name: '10–15 s · Undang-undang penerbitan British',
        visual: 'Dua kad undang-undang: Publishing and Book Enactment 1915 · The Seditious Publication (Prohibition) Enactment 1919; cop merah "DIKAWAL".',
        doodle: 'Kad, cop.',
        text: 'Publishing and Book Enactment 1915 · The Seditious Publication (Prohibition) Enactment 1919 · DIKAWAL',
        anim: 'Kad meluncur masuk; cop dihentak pada "penerbitan".',
      },
      draw(S) {
        S.add(BIG('UNDANG-UNDANG<br><span class="red">BRITISH</span>', { fs: 96 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 300, w: 1040 });
        S.card('<div class="tw red" style="font-size:32px">1915</div><div class="t-body" style="font-size:46px;line-height:1.1">Publishing and Book Enactment</div>', { anim: 'slideL', at: 0.2, x: 80, y: 560, w: 920, rot: -1, pad: '16px 26px', sfx: 'swish' });
        S.card('<div class="tw red" style="font-size:32px">1919</div><div class="t-body" style="font-size:46px;line-height:1.1">The Seditious Publication (Prohibition) Enactment</div>', { anim: 'slideR', at: 0.4, x: 80, y: 790, w: 920, rot: 1, pad: '16px 26px', sfx: 'swish' });
        S.stamp('DIKAWAL', { x: 290, y: 1080, w: 500, at: 0.55, fs: 104, style: 'text-align:center' });
      },
    },
    {
      id: 'tekukur', bg: 'dots',
      lines: ['Jadi, suara kemerdekaan disampaikan secara berselindung melalui **Cerita Tekukur**.'],
      board: {
        name: '15–22 s · Cerita Tekukur (1920)',
        visual: 'Doodle akhbar bertajuk "CERITA TEKUKUR"; senarai akhbar: Utusan Melayu · Lembaga Melayu · Lidah Teruna · Pengasoh; tag "BERSELINDUNG di sebalik watak haiwan".',
        doodle: 'Akhbar, tag.',
        text: 'CERITA TEKUKUR (1920) · Utusan Melayu · Lembaga Melayu · Lidah Teruna · Pengasoh · berselindung di sebalik watak haiwan',
        anim: 'Akhbar pop; nama akhbar ditulis; tag pop pada "berselindung".',
      },
      draw(S, { D }) {
        S.add(akhbar(D, 'CERITA TEKUKUR', { hs: 36, sub: 'TAHUN 1920' }), { anim: 'pop', at: 0, d: -0.2, x: 60, y: 320, w: 440, rot: -2 });
        S.add('<div class="t-label" style="font-size:48px;line-height:1.3">Utusan Melayu<br>Lembaga Melayu<br>Lidah Teruna<br>Pengasoh</div>', { anim: 'wipe', at: 0.6, x: 560, y: 360, w: 460, sfx: false });
        S.tag('BERSELINDUNG', 'di sebalik watak haiwan', { x: 560, y: 720, w: 440, at: 0.4 });
        S.add(BIG('<span class="hl">CERITA TEKUKUR</span>', { fs: 92 }), { anim: 'pop', at: 0.6, x: 20, y: 950, w: 1040 });
      },
    },
    {
      id: 'nombor', bg: 'lined',
      lines: ['Ada tekukur bernombor **1874** dan **1909**, iaitu tarikh negeri Melayu dikuasai British.'],
      board: {
        name: '22–31 s · Pendedahan: nombor tekukur = tarikh dijajah',
        visual: 'Dua cop besar "TEKUKUR NO. 1874" dan "TEKUKUR NO. 1909" dicop tepat pada sebutan; kad "= tarikh negeri Melayu dikuasai British".',
        doodle: 'Cop, kad kertas koyak.',
        text: 'TEKUKUR NO. 1874 · TEKUKUR NO. 1909 · = tarikh negeri Melayu dikuasai British',
        anim: 'Cop dihentak satu demi satu; kad naik.',
      },
      draw(S) {
        S.add(BIG('NOMBOR <span class="red">RAHSIA</span>', { fs: 100 }), { anim: 'pop', at: 0, d: -0.2, x: 20, y: 300, w: 1040 });
        S.stamp('TEKUKUR NO. 1874', { x: 90, y: 470, w: 900, at: 0.14, fs: 74, rot: -3, style: 'text-align:center;white-space:nowrap' });
        S.stamp('TEKUKUR NO. 1909', { x: 90, y: 660, w: 900, at: 0.4, fs: 74, rot: 3, style: 'text-align:center;white-space:nowrap' });
        S.card('<div class="t-body" style="font-size:56px;text-align:center">= tarikh negeri Melayu <span class="hl">dikuasai British</span></div>', { tear: true, anim: 'slideU', at: 0.72, x: 70, y: 900, w: 940 });
      },
    },
    {
      id: 'sangkar', bg: 'grid',
      lines: ['Tekukur yang dahulu bebas, kini terkurung dalam **sangkar emas**.'],
      board: {
        name: '31–37 s · Takeaway: sangkar emas',
        visual: 'Doodle sangkar emas besar; tajuk "BEBAS ➜ SANGKAR EMAS"; tag "SEMANGAT CINTA AKAN NEGARA · asas perjuangan kemerdekaan".',
        doodle: 'Sangkar emas + tekukur.',
        text: 'BEBAS ➜ SANGKAR EMAS · semangat cinta akan negara = asas perjuangan kemerdekaan',
        anim: 'Tajuk ditulis; sangkar pop; tag pop.',
      },
      draw(S, { D }) {
        S.add(BIG('BEBAS <span class="red">➜</span> <span class="hl">SANGKAR EMAS</span>', { fs: 74 }), { anim: 'wipe', at: 0, d: -0.2, dur: 0.7, x: 20, y: 300, w: 1040 });
        S.add(cage(D), { anim: 'pop', at: 0, d: 0, x: 300, y: 430, w: 480 });
        S.tag('SEMANGAT CINTA AKAN NEGARA', 'asas perjuangan kemerdekaan', { x: 240, y: 1110, w: 600, at: 0.75 });
      },
    },
    {
      id: 'akhir', chrome: false, lead: 0.4, tail: 1.2,
      lines: ['Seterusnya, apakah yang mencetuskan **Perang Dunia Pertama**? Ikuti episod akan datang.'],
      board: {
        name: 'Akhir · Soalan teaser + jenama rasmi',
        visual: 'Kad soalan kuning di atas; DP rasmi Titik Sejarah (imej asal); TITIK SEJARAH, slogan & follow.',
        doodle: 'Kad soalan, sinar latar.',
        text: 'Apakah yang mencetuskan Perang Dunia Pertama? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Kad soalan pop dengan ding; DP zoom-in lembut.',
        music: 'Sting penutup ringkas.',
      },
      draw(S) { S.endCard({ compact: true, question: 'Apakah yang mencetuskan <span class="hl">Perang Dunia Pertama</span>?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
