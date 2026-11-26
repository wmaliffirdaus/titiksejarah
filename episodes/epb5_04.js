// BAB 5 · EPISOD 04 – Subtopik 5.3: Ciri-ciri Persekutuan Tanah Melayu 1948 (≈ 2.5–3 min, + kuiz mini)
// Chapter 1 series template. Facts: Buku Teks Sejarah Tingkatan 4 KSSM, ms. 134–135 (perbandingan dengan Malayan Union: ms. 97 & 134–135).
import { fmt } from './lib.js';
import { NAVY, GOLD, RED, PAPER, MALAYA, NOW, officer, numCard, iconRow, quizScene, END } from './b4lib.js';

export default {
  id: 'b5_04',
  file: '04_Bab5_Subtopik_5.3',
  title: 'Ciri-ciri Persekutuan Tanah Melayu 1948',
  header: { chip: 'BAB 5 • 5.3', sub: 'Ciri-ciri PTM 1948' },
  src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 5 (5.3)',
  music: { key: 60, bpm: 98, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: '**Gabenor**, atau **Pesuruhjaya Tinggi**? **Jajahan**, atau **naungan**?', pause: 0.4 },
        'Inilah perbezaan besar antara Malayan Union dan Persekutuan Tanah Melayu 1948!',
      ],
      board: {
        name: 'Hook – MU lawan PTM',
        visual: 'Frame pertama lengkap: dua kad bertentangan "MALAYAN UNION" (merah) vs "PTM 1948" (navy) dengan ikon VS; dua baris perbandingan.',
        doodle: 'Kad, ikon VS.',
        text: 'Gabenor ⇄ Pesuruhjaya Tinggi · Jajahan ⇄ Naungan · MU VS PTM 1948',
        anim: 'Semua kelihatan pada 0:00; ikon VS berdenyut pada baris kedua.',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.card('<div class="t-h2" style="text-align:center;color:#FFFDF7">MALAYAN UNION</div><div class="t-body" style="text-align:center;color:#FFFDF7">Gabenor · <b>jajahan</b></div>', { ...NOW, color: 'red', x: 40, y: 330, w: 470, rot: -2 });
        S.card('<div class="t-h2" style="text-align:center;color:#F5C928">PTM 1948</div><div class="t-body" style="text-align:center;color:#FFFDF7">Pesuruhjaya Tinggi · <b>naungan</b></div>', { ...NOW, color: 'navy', x: 570, y: 330, w: 470, rot: 2 });
        S.add(D.vs(), { ...NOW, x: 460, y: 640, w: 160, pulse: [{ at: 1, d: 0.2 }] });
        S.text('Apa <span class="red">bezanya?</span>', { size: 'title', x: 60, y: 850, w: 960, align: 'center', ...NOW });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 5.3: **Ciri-ciri** Persekutuan Tanah Melayu 1948.'],
      board: { name: 'Kad tajuk subtopik', visual: 'Pil "SUBTOPIK 5.3"; tajuk; pil "20 NOV 1946 · rangka dibentangkan".', doodle: 'Dokumen.', text: 'SUBTOPIK 5.3 · Ciri-ciri PTM 1948', anim: 'Tajuk ditulis; dokumen dilukis.' },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 5.3</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Ciri-ciri <span class="red">PTM 1948</span>', { size: 'title', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.0 });
        S.svg(D.treaty('1948'), { x: 410, y: 560, w: 260, at: 0, d: 0.6 });
      },
    },
    {
      id: 'pentadbiran', bg: 'grid', transition: 'paper',
      lines: [
        'Pertama, **pentadbiran**. Sembilan negeri Melayu dan dua Negeri-negeri Selat digabungkan. **Singapura** kekal tanah jajahan berasingan.',
        'Persekutuan diketuai oleh **Pesuruhjaya Tinggi British**, dibantu Majlis Mesyuarat Persekutuan dan Majlis Perundangan Persekutuan.',
      ],
      board: { name: 'Ciri 1: Pentadbiran', visual: 'Peta Tanah Melayu dengan label "9 + 2 = 11 negeri"; Singapura dipangkah; tag Pesuruhjaya Tinggi British (ILUSTRASI) dengan dua kad majlis.', doodle: 'Peta, pangkah, watak pegawai.', text: '9 negeri Melayu + 2 Negeri-negeri Selat · Singapura berasingan · Pesuruhjaya Tinggi British · Majlis Mesyuarat Persekutuan · Majlis Perundangan Persekutuan', anim: 'Peta dilakar; label pop; pangkah Singapura; tag & kad meluncur.' },
      draw(S, { D }) {
        S.text('Ciri 1: <span class="hl">Pentadbiran</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const at = S.map({ bounds: MALAYA, w: 400 }, { x: 40, y: 390, w: 420, at: 0, d: 0.1, dur: 0.9 });
        const [sx, sy] = at(103.85, 1.33);
        S.add(D.cross(), { anim: 'stamp', x: sx - 40, y: sy - 40, w: 80, at: 0, d: 2.6 });
        S.card('<div class="t-h2" style="text-align:center"><span class="red">9</span> + <span class="red">2</span> = 11 negeri</div>', { color: 'gold', anim: 'pop', x: 500, y: 420, w: 520, at: 0, d: 1.6 });
        S.text('Singapura: <b class="red">berasingan</b>', { size: 'label', x: 500, y: 600, w: 520, at: 0, d: 2.7 });
        S.illus({ x: 870, y: 840, at: 1, d: 0 });
        S.svg(officer(D, { pose: 'present' }), { x: 60, y: 870, w: 170, at: 1, d: 0.1, dur: 0.6 });
        S.tag('PESURUHJAYA TINGGI BRITISH', 'kuasa eksekutif', { x: 250, y: 880, w: 520, at: 1, d: 0.2 });
        S.card('<div class="t-body" style="font-size:38px">Majlis <b>Mesyuarat</b> Persekutuan · Majlis <b>Perundangan</b> Persekutuan</div>', { anim: 'slideU', x: 250, y: 1000, w: 770, at: 1, d: 0.6, notape: true, pad: '10px 18px' });
      },
    },
    {
      id: 'raja', transition: 'flip',
      lines: [
        'Kedua, **kuasa Raja-raja Melayu**. **Majlis Raja-Raja** dibentuk, dan di peringkat negeri, sultan mengesahkan rang undang-undang.',
        'Ketiga, **perundangan**. Rang undang-undang Persekutuan perlu mendapat **perkenan Raja-raja Melayu** melalui Majlis Raja-Raja.',
      ],
      board: { name: 'Ciri 2 & 3: Raja-raja Melayu & perundangan', visual: 'Mahkota besar + kad "MAJLIS RAJA-RAJA"; dokumen undang-undang dengan cop "PERKENAN RAJA-RAJA".', doodle: 'Mahkota, skrol, cop.', text: 'Majlis Raja-Raja · sultan sahkan rang undang-undang negeri · rang undang-undang Persekutuan perlu perkenan Raja-raja Melayu', anim: 'Mahkota dilukis; kad pop; cop dihentak.' },
      draw(S, { D }) {
        S.text('Ciri 2 & 3: <span class="hl">Raja-raja</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.crown(), { x: 80, y: 400, w: 260, at: 0, d: 0.3 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928">MAJLIS RAJA-RAJA</div>', { color: 'navy', anim: 'pop', x: 380, y: 420, w: 640, at: 0, d: 0.5 });
        S.card('<div class="t-body" style="font-size:38px">Peringkat negeri: sultan <span class="hl">sahkan rang undang-undang</span></div>', { anim: 'slideR', x: 380, y: 560, w: 640, at: 0, d: 0.75, notape: true, pad: '10px 18px' });
        S.svg(D.scroll('RANG UNDANG-UNDANG', { ts: 22, color: RED }), { x: 80, y: 760, w: 230, at: 1, d: 0.1 });
        S.stamp('PERKENAN RAJA-RAJA', { x: 330, y: 860, w: 690, at: 1, d: 0.6, fs: 46, style: 'text-align:center;white-space:nowrap' });
      },
    },
    {
      id: 'warga', bg: 'grid', transition: 'paper',
      lines: [
        'Keempat, **kewarganegaraan diperketat**. Prinsip jus soli hanya terbuka kepada **rakyat Raja** dan **rakyat British**.',
        'Melalui pendaftaran pula, pemohon mesti bermastautin **15 tahun daripada 20 tahun**, berkelakuan baik, menguasai bahasa Melayu dan bahasa Inggeris, serta taat setia.',
      ],
      board: { name: 'Ciri 4: Kewarganegaraan', visual: 'Kad definisi rakyat Raja & rakyat British; kad syarat pendaftaran dengan kaunter "15 / 20 tahun".', doodle: 'Kad koyak, watak.', text: 'Jus soli hanya untuk rakyat Raja & rakyat British · pendaftaran: bermastautin 15 daripada 20 tahun · kelakuan baik · bahasa · taat setia', anim: 'Kad naik mengikut narasi; kaunter pop.' },
      draw(S, { D }) {
        S.text('Ciri 4: <span class="hl">Kewarganegaraan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.card('<div class="t-body" style="font-size:38px"><b class="red">Rakyat Raja</b>: orang Melayu & Orang Asli di negeri bersultan<br><b class="red">Rakyat British</b>: lahir di Melaka, Pulau Pinang & jajahan British</div>', { tear: true, anim: 'slideU', x: 60, y: 400, w: 960, at: 0, d: 0.6 });
        S.card('<div style="display:flex;align-items:center;gap:22px"><div class="t-big" style="font-size:110px;color:#C93436">15<span style="font-size:60px">/20</span></div><div class="t-body" style="font-size:40px">tahun bermastautin · kelakuan baik · bahasa · <b>taat setia</b></div></div>', { color: 'gold', anim: 'pop', x: 60, y: 800, w: 960, at: 1, d: 0.3 });
      },
    },
    {
      id: 'banding', transition: 'slideUp',
      lines: ['Ringkasnya: Malayan Union ialah **jajahan**, diketuai **Gabenor**. Persekutuan 1948 pula **naungan**, diketuai **Pesuruhjaya Tinggi**, dan kedaulatan Raja-raja **dikembalikan**.'],
      board: { name: 'Perbandingan MU vs PTM 1948', visual: 'Jadual dua lajur tiga baris: Taraf (jajahan / naungan), Ketua (Gabenor / Pesuruhjaya Tinggi), Raja-raja (agama & adat sahaja / kedaulatan dikembalikan).', doodle: 'Jadual tulisan tangan.', text: 'Taraf: jajahan ⇄ naungan · Ketua: Gabenor ⇄ Pesuruhjaya Tinggi · Raja-raja: hanya agama & adat ⇄ kedaulatan dikembalikan', anim: 'Baris jadual muncul mengikut narasi.' },
      draw(S) {
        S.text('MU <span class="red">VS</span> PTM 1948', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0, d: -0.3 });
        const rows = [['Taraf', 'Jajahan', 'Naungan', 0.15], ['Ketua', 'Gabenor', 'Pesuruhjaya Tinggi', 0.38], ['Raja-raja', 'Agama & adat sahaja', 'Kedaulatan dikembalikan', 0.7]];
        rows.forEach(([a, m, p, f], i) => {
          const y = 460 + i * 230;
          S.card(`<div class="t-h3" style="font-size:38px;text-align:center">${a}</div>`, { anim: 'pop', x: 40, y, w: 240, at: f, notape: true, pad: '24px 8px' });
          S.card(`<div class="t-body" style="font-size:38px;text-align:center;color:#FFFDF7">${m}</div>`, { color: 'red', anim: 'slideL', x: 300, y, w: 350, at: f, d: 0.1, notape: true, pad: '18px 10px' });
          S.card(`<div class="t-body" style="font-size:38px;text-align:center;color:#F5C928">${p}</div>`, { color: 'navy', anim: 'slideR', x: 670, y, w: 370, at: f, d: 0.25, notape: true, pad: '18px 10px' });
        });
      },
    },
    quizScene('kuiz1', 1, 'Siapakah ketua Persekutuan Tanah Melayu 1948?', 'Pesuruhjaya Tinggi British', ['Gabenor British', 'Pesuruhjaya Tinggi British', 'Majlis Raja-Raja'], 'Jawapannya: Pesuruhjaya Tinggi British!'),
    quizScene('kuiz2', 2, 'Berapa tempoh bermastautin untuk kewarganegaraan secara pendaftaran?', '15 daripada 20 tahun', ['10 hingga 15 tahun', '5 tahun', '15 daripada 20 tahun'], 'Jawapannya: 15 tahun daripada 20 tahun! Berapa markah anda?'),
    {
      id: 'kini', bg: 'grid', transition: 'zoom',
      lines: ['Seterusnya: apakah **kesan** penubuhan Persekutuan Tanah Melayu 1948?'],
      tail: 0.8,
      board: { name: 'Episod seterusnya', visual: 'Maskot dan kad episod seterusnya.', doodle: 'Pelekat maskot.', text: 'Seterusnya: 5.4 Kesan Penubuhan', anim: 'Maskot pop; kad pop.' },
      draw(S) {
        S.text('Jom <span class="hl">teruskan!</span>', { size: 'title', x: 60, y: 320, w: 960, align: 'center', at: 0 });
        S.mascot({ x: 110, y: 470, w: 420, at: 0, d: 0.2 });
        S.arrow(560, 700, 700, 900, { at: 0, d: 0.7, color: RED, bend: -0.25 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">5.4 Kesan Penubuhan</div>', { x: 520, y: 920, w: 470, at: 0, d: 0.9 });
      },
    },
    END,
  ],
};
