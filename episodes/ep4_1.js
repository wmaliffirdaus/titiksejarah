// Bab 4 · 4.1 British Military Administration (BMA) — documentary style in the brand palette (~55 s)
// Fact source: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4, ms. 94–95 (incl. Jadual 4.1) + user's "Nota T4 – Bab 04" (Google Drive).
// Style: historical documentary · serious, emotional, nostalgic · archival photos, timeline · moderate, suspense-driven.
// Palette ONLY: navy #172C63, gold #F5C928, red #C93436, cream #F3EBDD (+ black/white shadows).
import { IMG, CR } from './ep4_1.assets.js';

const NAVY = '#172C63', GOLD = '#F5C928', RED = '#C93436', CREAM = '#F3EBDD';
const NOW = { at: 'start', d: -0.35 };
const TL = { from: 1941, to: 1947, ticks: [1941, 1942, 1943, 1944, 1945, 1946, 1947] };

export default {
  id: '4_1',
  file: 'B4_01_4.1_BMA_Derita_Selepas_Perang',
  title: 'Perang Sudah Tamat, Derita Belum – British Military Administration (4.1)',
  header: { chip: 'BAB 4 • 4.1', sub: 'British Military Administration' },
  theme: 'doc',
  src: 'Sumber fakta: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 4 (4.1)',
  musicNote: 'Muzik sinematik asli (piano + strings, A minor, 68 BPM), sentiasa ±20–25 dB di bawah narasi.',
  music: { style: 'cinematic', key: 57, bpm: 68 },
  voice: { style: 0.35, stability: 0.45, speed: 1.0, tempo: 1.18 },   // serious, warm documentary narration
  introSfx: 'boom', outroSfx: null,
  lead: 0.15, gap: 0.22, tail: 0.12,
  transition: 'dissolve',
  scenes: [
    {
      id: 'hook', lead: 0.12, trSfx: null,
      lines: ['Sekati beras: **6 sen** sebelum perang. Selepas perang: **75 dolar**, dalam mata wang Jepun.'],
      board: {
        name: '0–5 s · Hook: harga sekati beras',
        visual: 'Frame pertama lengkap: foto arkib wang kertas Jepun (Ken Burns perlahan), label "SEKATI BERAS", harga "6 SEN" lalu "$75" emas besar, nota mata wang.',
        doodle: '— (foto arkib)',
        text: 'SEKATI BERAS · 6 SEN (Dis 1941, Dolar Selat) → $75 (Ogos 1945, mata wang Jepun) · Sumber: Jadual 4.1 buku teks',
        anim: 'Semua kelihatan pada 0:00; "$75" muncul tepat pada sebutan.',
        music: 'Dentuman rendah pada 0:00; muzik sinematik bermula.',
      },
      draw(S) {
        S.photo(IMG.money, { ...NOW, kbFade: 0, kb: { from: [1.12, 0, 2], to: [1.25, -2, -1] }, credit: CR.money });
        S.label('SEKATI BERAS', { ...NOW, anim: 'none', x: 40, y: 330, w: 1000, fs: 40 });
        S.title('6 SEN', { ...NOW, anim: 'none', fs: 150, x: 0, y: 400, w: 1080 });
        S.label('DISEMBER 1941 · DOLAR SELAT', { ...NOW, anim: 'none', x: 40, y: 570, w: 1000, fs: 26, style: 'color:#F3EBDD' });
        S.title('<span class="g">$75</span>', { at: 0.6, d: -0.05, fs: 230, x: 0, y: 650, w: 1080 });
        S.label('OGOS 1945 · MATA WANG JEPUN', { at: 0.6, d: 0.2, x: 40, y: 925, w: 1000, fs: 26, style: 'color:#F3EBDD' });
        S.label('Jadual 4.1 · Buku Teks Sejarah Tingkatan 4', { at: 0.6, d: 0.4, x: 40, y: 980, w: 1000, fs: 20, style: 'color:rgba(243,235,221,.75);letter-spacing:1px' });
      },
    },
    {
      id: 'tamat',
      lines: ['Jepun sudah menyerah kalah… tetapi penderitaan rakyat belum berakhir.'],
      board: {
        name: '5–9 s · Ketegangan: perang tamat, derita belum',
        visual: 'Foto arkib upacara penyerahan Jepun (1945), pan perlahan; tajuk serif "PERANG TAMAT." kemudian "DERITA BELUM." (merah).',
        doodle: '—',
        text: 'PERANG TAMAT. · DERITA BELUM.',
        anim: 'Dissolve masuk; baris kedua fade-up pada "tetapi".',
      },
      draw(S) {
        S.photo(IMG.surrender, { at: 0, d: -0.5, kb: { from: [1.15, 3, 0], to: [1.25, -3, 0] }, credit: CR.surrender });
        S.title('PERANG TAMAT.', { at: 0, d: -0.1, fs: 104, x: 0, y: 520, w: 1080 });
        S.title('<span class="r" style="text-shadow:0 2px 0 #F3EBDD,0 4px 18px rgba(0,0,0,.7)">DERITA BELUM.</span>', { at: 0.45, d: 0, fs: 104, x: 0, y: 650, w: 1080 });
      },
    },
    {
      id: 'bma',
      lines: ['**12 September 1945**. British kembali… melalui **BMA**.'],
      board: {
        name: '9–16 s · Konteks: BMA bermula',
        visual: 'Foto arkib tentera British tiba di Tanah Melayu (1945); lower-third "BRITISH MILITARY ADMINISTRATION (BMA)"; garis masa bergerak ke 1945.',
        doodle: '—',
        text: '12 SEPTEMBER 1945 · BRITISH MILITARY ADMINISTRATION (BMA) · pentadbiran tentera',
        anim: 'Ken Burns; tarikh fade-up; lower-third meluncur pada "British Military Administration"; penanda garis masa 1941→1945.',
      },
      draw(S) {
        S.photo(IMG.landing, { at: 0, d: -0.5, kb: { from: [1.1, -2, 0], to: [1.22, 3, -1] }, credit: CR.landing });
        S.title('12 SEPTEMBER <span class="g">1945</span>', { at: 0, d: 0, fs: 88, x: 0, y: 470, w: 1080 });
        S.lower('PENTADBIRAN TENTERA', 'British Military<br>Administration <span class="g">(BMA)</span>', { at: 0.6, x: 40, y: 760, w: 1000, fs: 68 });
        S.timeline({ ...TL, prevYear: 1941, year: 1945, mark: '1945', at: 0, d: 0.3, y: 1130 });
      },
    },
    {
      id: 'tugas',
      lines: ['Tugasnya: mengembalikan **kestabilan**… dan memulihkan **kepercayaan rakyat**.'],
      board: {
        name: '16–24 s · Tugas BMA',
        visual: 'Potret arkib Lord Mountbatten (berbingkai krim) di atas; nama + jawatan; dua panel tugas: 1 KESTABILAN · 2 KEPERCAYAAN RAKYAT.',
        doodle: '—',
        text: 'LORD MOUNTBATTEN · Pemerintah Tertinggi Tentera Bersekutu di Asia Tenggara · TUGAS: 1 Mengembalikan kestabilan · 2 Memulihkan kepercayaan rakyat',
        anim: 'Potret zoom perlahan; panel tugas meluncur satu demi satu mengikut sebutan.',
      },
      draw(S) {
        S.photo(IMG.mountbatten, { at: 0, d: -0.5, frame: true, x: 300, y: 300, w: 480, h: 560, kb: { from: [1.05, 0, 0], to: [1.14, 0, -2] }, credit: CR.mountbatten, pos: '50% 20%' });
        S.label('DI BAWAH ARAHAN', { at: 0, d: -0.2, x: 40, y: 880, w: 1000, fs: 24, style: 'color:#F3EBDD' });
        S.title('Lord <span class="g">Mountbatten</span>', { at: 0, d: -0.1, fs: 66, x: 0, y: 915, w: 1080 });
        S.label('PEMERINTAH TERTINGGI TENTERA BERSEKUTU · ASIA TENGGARA', { at: 0, d: 0.2, x: 40, y: 995, w: 1000, fs: 22 });
        S.add('<div class="dpanel"><div class="dlabel" style="text-align:left;font-size:24px">TUGAS 1</div><div class="dtitle" style="font-size:50px">Mengembalikan <span class="g">kestabilan</span></div></div>', { anim: 'slideL', dur: 0.6, sfx: false, at: 0.1, d: 0, x: 60, y: 1060, w: 960 });
        S.add('<div class="dpanel"><div class="dlabel" style="text-align:left;font-size:24px">TUGAS 2</div><div class="dtitle" style="font-size:50px">Memulihkan <span class="g">kepercayaan rakyat</span></div></div>', { anim: 'slideL', dur: 0.6, sfx: false, at: 0.52, d: 0, x: 60, y: 1215, w: 960 });
      },
    },
    {
      id: 'mpaja',
      lines: ['**MPAJA** dibubarkan, dan senjata mereka diarah supaya dikembalikan.'],
      board: {
        name: '24–30 s · MPAJA dibubarkan',
        visual: 'Foto arkib anggota MPAJA (1945); tarikh "1 DISEMBER 1945"; label "MPAJA DIBUBARKAN" dan "SENJATA DIARAH DIKEMBALIKAN".',
        doodle: '—',
        text: 'MPAJA DIBUBARKAN · 1 DISEMBER 1945 · senjata diarah dikembalikan',
        anim: 'Ken Burns perlahan; teks fade-up mengikut sebutan; garis masa kekal pada 1945.',
      },
      draw(S) {
        S.photo(IMG.mpaja, { at: 0, d: -0.5, kb: { from: [1.12, 2, 0], to: [1.24, -2, -2] }, credit: CR.mpaja });
        S.lower('1 DISEMBER 1945', '<span class="g">MPAJA</span> dibubarkan', { at: 0.02, x: 40, y: 560, w: 1000, fs: 84 });
        S.label('SENJATA DIARAH DIKEMBALIKAN', { at: 0.4, d: 0, x: 40, y: 760, w: 1000, fs: 34 });
      },
    },
    {
      id: 'gagal', transition: 'cut',
      lines: ['Tetapi BMA **gagal** mengumpulkannya semula. Jenayah, **kongsi gelap** dan ketegangan kaum terus berlaku.'],
      board: {
        name: '30–37 s · Kegagalan pertama',
        visual: 'Potong terus; foto MPAJA digelapkan; cop merah "GAGAL"; senarai: JENAYAH · KONGSI GELAP · KETEGANGAN KAUM.',
        doodle: '—',
        text: 'GAGAL · JENAYAH · KONGSI GELAP · KETEGANGAN KAUM',
        anim: 'Cop "GAGAL" pada sebutan; senarai fade-up satu demi satu.',
        music: 'Dentuman rendah pada cop.',
      },
      draw(S) {
        S.photo(IMG.mpaja, { at: 0, d: -0.3, kb: { from: [1.24, -2, -2], to: [1.32, -3, -3] }, credit: CR.mpaja, style: 'opacity:.35' });
        S.add(`<span style="display:inline-block;font-family:Playfair;font-weight:800;font-size:120px;letter-spacing:6px;color:${RED};border:7px double ${RED};border-radius:8px;padding:0 30px;background:rgba(243,235,221,.92)">GAGAL</span>`,
          { anim: 'stamp', sfx: 'boom', rot: -5, at: 0.1, d: 0, x: 140, y: 500, w: 800, align: 'center', style: 'z-index:6' });
        [['JENAYAH', 0.5], ['KONGSI GELAP', 0.66], ['KETEGANGAN KAUM', 0.84]].forEach(([t, f], i) =>
          S.label(`◆ ${t}`, { at: f, d: 0, x: 60, y: 780 + i * 90, w: 960, fs: 48 }));
      },
    },
    {
      id: 'derita',
      lines: ['Makanan dan ubat sukar didapati. **Beri-beri** dan kebuluran merebak. **Pasar gelap** dan rasuah tidak terkawal.'],
      board: {
        name: '37–45 s · Derita rakyat',
        visual: 'Foto arkib orang ramai di Tanah Melayu (1945); tiga kad: MAKANAN & UBAT SUKAR DIDAPATI · BERI-BERI & KEBULURAN · PASAR GELAP & RASUAH.',
        doodle: '—',
        text: 'Makanan & ubat sukar didapati · Beri-beri & kebuluran · Pasar gelap & rasuah tidak terkawal',
        anim: 'Ken Burns; setiap panel muncul tepat pada sebutan.',
      },
      draw(S) {
        S.photo(IMG.crowd, { at: 0, d: -0.5, kb: { from: [1.1, 0, 2], to: [1.22, 2, -2] }, credit: CR.crowd });
        [['MAKANAN & UBAT', 'sukar didapati', 0.0], ['BERI-BERI & KEBULURAN', 'merebak', 0.38], ['PASAR GELAP & RASUAH', 'tidak terkawal', 0.7]].forEach(([a, b, f], i) =>
          S.add(`<div class="dpanel"><div class="dtitle" style="font-size:52px">${a}</div><div class="dlabel" style="text-align:left;font-size:28px;color:#F3EBDD">${b}</div></div>`,
            { anim: 'slideL', dur: 0.55, sfx: false, at: f, d: -0.05, x: 60, y: 520 + i * 200, w: 960 }));
      },
    },
    {
      id: 'hampa', transition: 'dip', trSfx: 'riser',
      lines: ['Rakyat yang berharap diselamatkan… akhirnya **hampa**.'],
      board: {
        name: '45–49 s · Pendedahan: rakyat hampa',
        visual: 'Dip ke navy; teks serif krim "Rakyat berharap diselamatkan…" kemudian "HAMPA." merah besar.',
        doodle: '—',
        text: 'Rakyat berharap diselamatkan… · HAMPA.',
        anim: 'Fade-up perlahan; "HAMPA" muncul serentak dengan sebutan.',
        music: 'Riser sebelum pendedahan; muzik diperlahankan.',
      },
      draw(S) {
        S.photo(IMG.crowd, { at: 0, d: -0.6, kb: { from: [1.3, 0, 0], to: [1.4, 0, -1] }, credit: CR.crowd, style: 'opacity:.18' });
        S.quote('Rakyat berharap<br>diselamatkan…', { at: 0, d: -0.1, x: 40, y: 560, w: 1000, fs: 76 });
        S.title('<span class="r" style="text-shadow:0 2px 0 #F3EBDD,0 4px 18px rgba(0,0,0,.7)">HAMPA.</span>', { at: 0.62, d: 0, fs: 190, x: 0, y: 800, w: 1080 });
      },
    },
    {
      id: 'iktibar', transition: 'dissolve',
      lines: ['Pengajarannya: sentiasa **berwaspada**, dan jangan mudah mempercayai **kuasa asing**.'],
      board: {
        name: '49–54 s · Iktibar',
        visual: 'Latar navy dengan foto tentera British pudar; label "IKTIBAR"; dua kata emas: BERWASPADA · KUASA ASING.',
        doodle: '—',
        text: 'IKTIBAR · Sentiasa berwaspada · Jangan mudah percaya kuasa asing',
        anim: 'Kata kunci fade-up mengikut sebutan.',
      },
      draw(S) {
        S.photo(IMG.landing, { at: 0, d: -0.6, kb: { from: [1.25, 3, -1], to: [1.32, 4, -2] }, credit: CR.landing, style: 'opacity:.25' });
        S.label('IKTIBAR', { at: 0, d: -0.2, x: 40, y: 480, w: 1000, fs: 38 });
        S.title('Sentiasa<br><span class="g">berwaspada.</span>', { at: 0.15, d: 0, fs: 104, x: 0, y: 560, w: 1080 });
        S.quote('Jangan mudah mempercayai <span style="color:#F5C928">kuasa asing</span>.', { at: 0.55, d: 0, x: 40, y: 880, w: 1000, fs: 56 });
      },
    },
    {
      id: 'akhir', chrome: false, transition: 'dip', trSfx: 'airy', lead: 0.3, tail: 1.1,
      lines: ['Lalu British membawa gagasan baharu… yang ditentang hebat. Apakah ia?'],
      board: {
        name: 'Akhir · Soalan cliffhanger + jenama rasmi',
        visual: 'Latar navy bervignet; soalan dalam bingkai garis emas; DP rasmi Titik Sejarah (imej asal, tidak diubah) berbingkai emas; TITIK SEJARAH; slogan; follow.',
        doodle: '—',
        text: 'SOALAN: Apakah gagasan British yang menggantikan BMA? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Fade-up perlahan; DP zoom lembut.',
        music: 'Muzik menurun perlahan (fade-out) di hujung.',
      },
      draw(S) { S.endCard({ doc: true, question: 'Apakah gagasan British yang <span class="g">menggantikan BMA</span>?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
