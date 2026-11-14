// EP 4 – Subtopik 1.2 Bahagian 2: Lambang Kebesaran & Keunggulan Undang-undang (documentary style, ~55 s)
// Style: historical documentary · serious, emotional, nostalgic · archival photos, maps, timeline · moderate, suspense.
const A = '../assets/archive/ep04/';
const CR = {
  payung: 'Foto: Wiki Farazi, CC0 · Wikimedia Commons (Pameran Raja Kita)',
  dalam: 'Foto: Azuladnan, CC BY-SA 4.0 · Wikimedia Commons (Muzium Istana Kesultanan Melaka)',
  luar: 'Foto: Azuladnan, CC BY-SA 4.0 · Wikimedia Commons (Muzium Istana Kesultanan Melaka)',
  nafiri: 'Foto: Wiki Farazi, CC0 · Wikimedia Commons (Pameran Raja Kita)',
  balai: 'Foto: domain awam · Wikimedia Commons (Balai Nobat, Kedah)',
  hkm: 'Foto: Wee Hong, CC BY-SA 4.0 · Wikimedia Commons (Hukum Kanun Melaka)',
};
const NOW = { at: 'start', d: -0.35 };

export default {
  id: '04d',
  file: '04_Bab1_1.2B_Satu_Warna_Satu_Larangan',
  title: 'Satu Warna, Satu Larangan – Lambang Kebesaran & Keunggulan Undang-undang (1.2 Bahagian 2)',
  header: { chip: 'BAB 1 • 1.2', sub: 'Lambang Kebesaran & Undang-undang' },
  theme: 'doc',
  src: 'Sumber fakta: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 1 (1.2)',
  music: { style: 'cinematic', key: 57, bpm: 70 },
  voice: { style: 0.35, stability: 0.45, speed: 1.0, tempo: 1.08 },   // serious, warm documentary narration
  introSfx: 'boom', outroSfx: null,
  lead: 0.25, gap: 0.22, tail: 0.2,
  transition: 'dissolve',
  scenes: [
    {
      id: 'hook', lead: 0.12, trSfx: null,
      lines: ['Di Melaka… satu warna boleh membawa padah.'],
      board: {
        name: '0–3 s · Hook: satu warna membawa padah',
        visual: 'Frame pertama: foto arkib payung kuning diraja (penuh skrin, Ken Burns perlahan), tajuk serif "SATU WARNA. SATU LARANGAN." dan label "MELAKA · ABAD KE-15".',
        doodle: '— (foto arkib, tiada doodle)',
        text: 'SATU WARNA. SATU LARANGAN. · MELAKA · ABAD KE-15',
        anim: 'Semua kelihatan pada 0:00; zoom perlahan 1.10→1.22; vignette & butiran filem.',
        music: 'Dentuman rendah (boom) pada 0:00; muzik sinematik (piano + strings, A minor, 70 BPM) bermula.',
      },
      draw(S) {
        S.photo(A + 'payung_kuning.jpg', { ...NOW, anim: 'kb', kbFade: 0, x: 0, y: 0, w: 1080, h: 1920, kb: { from: [1.1, 0, 2], to: [1.22, 0, -2] }, credit: CR.payung, pos: '50% 35%' });
        S.label('MELAKA · ABAD KE-15', { ...NOW, anim: 'none', x: 40, y: 300, w: 1000 });
        S.title('SATU WARNA.<br><span class="g">SATU LARANGAN.</span>', { ...NOW, anim: 'none', fs: 116, x: 30, y: 370, w: 1020 });
      },
    },
    {
      id: 'kuning', transition: 'cut',
      lines: ['**Kuning.** Rakyat biasa dilarang memakainya.'],
      board: {
        name: '3–7 s · Pendedahan: kuning',
        visual: 'Potongan rapat pada payung kuning; perkataan "KUNING" emas sangat besar; sari "Dilarang untuk rakyat biasa".',
        doodle: '—',
        text: 'KUNING · dilarang untuk rakyat biasa',
        anim: 'Potong terus (cut) pada perkataan "Kuning"; perkataan besar fade-up.',
        music: 'Muzik diteruskan; tiada kesan bunyi berlebihan.',
      },
      draw(S) {
        S.photo(A + 'payung_kuning.jpg', { at: 0, d: -0.3, x: 0, y: 0, w: 1080, h: 1920, kb: { from: [1.7, -6, 8], to: [1.85, -7, 6] }, credit: CR.payung, pos: '50% 30%' });
        S.title('<span class="g">KUNING</span>', { at: 0, d: -0.2, fs: 210, x: 0, y: 560, w: 1080 });
        S.label('DILARANG UNTUK RAKYAT BIASA', { at: 0, d: 0.5, x: 40, y: 820, w: 1000, fs: 34 });
      },
    },
    {
      id: 'lambang',
      lines: ['Kerana kuning ialah warna diraja… salah satu **lambang kebesaran** Sultan.'],
      board: {
        name: '7–14 s · Konteks: lambang kebesaran (definisi)',
        visual: 'Foto arkib balai istana (Muzium Istana Kesultanan Melaka), pan perlahan ke kanan; lower-third emas "LAMBANG KEBESARAN" + definisi.',
        doodle: '—',
        text: 'LAMBANG KEBESARAN · simbol kebesaran & kedaulatan pemerintah',
        anim: 'Dissolve masuk; Ken Burns pan; lower-third meluncur dari kiri pada "lambang kebesaran".',
      },
      draw(S) {
        S.photo(A + 'istana_melaka_dalam.jpg', { at: 0, d: -0.5, x: 0, y: 0, w: 1080, h: 1920, kb: { from: [1.15, 4, 0], to: [1.25, -4, 0] }, credit: CR.dalam });
        S.lower('CIRI 3 · NEGARA BANGSA', 'LAMBANG <span class="g">KEBESARAN</span>', { at: 0.55, x: 40, y: 900, w: 1000, fs: 76 });
        S.quote('simbol kebesaran & kedaulatan pemerintah', { at: 0.8, x: 60, y: 1100, w: 960, fs: 56 });
      },
    },
    {
      id: 'alat',
      lines: ['**Nobat** berbunyi pada istiadat diraja. **Payung** dan **keris** melambangkan kuasa. **Cop mohor** mengesahkan titah Sultan.'],
      board: {
        name: '14–22 s · Alat kebesaran diraja',
        visual: 'Montaj arkib: nafiri nobat (atas), Balai Nobat (bawah); senarai tulisan taip muncul satu demi satu: NOBAT · PAYUNG · KERIS · COP MOHOR.',
        doodle: '—',
        text: 'NOBAT · PAYUNG · KERIS · COP MOHOR',
        anim: 'Dua foto Ken Burns berlawanan arah; setiap item senarai fade-up tepat pada sebutan.',
        music: 'Strings menebal; tiada SFX selain dissolve.',
      },
      draw(S) {
        S.photo(A + 'nafiri_nobat.jpg', { at: 0, d: -0.5, x: 0, y: 260, w: 1080, h: 640, kb: { from: [1.1, -3, 0], to: [1.2, 3, 0] }, credit: CR.nafiri });
        S.photo(A + 'balai_nobat_kedah.jpg', { at: 0, d: 0.6, x: 0, y: 900, w: 1080, h: 460, kb: { from: [1.15, 3, 0], to: [1.05, -3, 0] }, credit: CR.balai });
        const items = [['NOBAT', 0.02], ['PAYUNG', 0.36], ['KERIS', 0.5], ['COP MOHOR', 0.72]];
        items.forEach(([t, f], i) => S.label(`◆ ${t}`, { at: f, d: 0, x: 60 + (i % 2) * 500, y: 950 + Math.floor(i / 2) * 80, w: 460, align: 'left', fs: 40, style: 'z-index:5;background:rgba(13,14,18,.78);padding:6px 14px' }));
      },
    },
    {
      id: 'santap', transition: 'dissolve',
      lines: ['Bahasa pun berbeza. Sultan tidak makan… baginda **bersantap**.'],
      board: {
        name: '20–26 s · Bahasa istana + garis masa Sultan Muhammad Syah',
        visual: 'Latar gelap dengan foto balai istana sangat pudar; dua baris tipografi: "makan" (dipangkah halus) ➜ "bersantap" (emas, italik).',
        doodle: '—',
        text: 'BAHASA ISTANA · makan ➜ bersantap · ADAT ISTIADAT DISUSUN ZAMAN SULTAN MUHAMMAD SYAH (garis masa)',
        anim: '"makan" fade, garis pangkah dilukis, "bersantap" fade-up emas.',
      },
      draw(S) {
        S.photo(A + 'istana_melaka_b.jpg', { at: 0, d: -0.5, x: 0, y: 0, w: 1080, h: 1920, kb: { from: [1.2, 0, 0], to: [1.3, 0, 2] }, credit: CR.luar, style: 'opacity:.35' });
        S.label('BAHASA ISTANA', { at: 0, d: -0.2, x: 40, y: 520, w: 1000 });
        S.quote('makan', { at: 0, d: 0.9, x: 40, y: 620, w: 1000, fs: 96, style: 'opacity:.75' });
        S.add('<svg viewBox="0 0 400 20"><line x1="10" y1="10" x2="390" y2="10" stroke="#E0574F" stroke-width="6"/></svg>', { anim: 'wipe', at: 0, d: 1.4, dur: 0.4, x: 340, y: 680, w: 400, sfx: false });
        S.title('<span class="g">bersantap</span>', { at: 0.85, d: -0.1, fs: 130, x: 0, y: 790, w: 1080, style: 'font-style:italic' });
        S.label('ADAT ISTIADAT DISUSUN ZAMAN SULTAN MUHAMMAD SYAH', { at: 0, d: 0.3, x: 40, y: 1040, w: 1000, fs: 24 });
        S.timeline({ from: 1400, to: 1511, ticks: [1400, 1450, 1500], prevYear: 1400, year: 1430, mark: 'Sultan Muhammad Syah', at: 0, d: 0.5, y: 1110 });
      },
    },
    {
      id: 'tidakcukup', transition: 'dip', trSfx: 'riser',
      lines: ['Tetapi kebesaran sahaja tidak cukup… Melaka memerlukan **undang-undang**.'],
      board: {
        name: '31–36 s · Titik ketegangan',
        visual: 'Dip ke hitam; teks serif putih di tengah: "Tetapi kebesaran sahaja… tidak cukup." kemudian "UNDANG-UNDANG" emas.',
        doodle: '—',
        text: 'Tetapi kebesaran sahaja… tidak cukup. · UNDANG-UNDANG',
        anim: 'Fade-up perlahan; perkataan UNDANG-UNDANG muncul serentak dengan sebutan.',
        music: 'Riser (bunyi tegang menaik) sebelum pendedahan; muzik diperlahankan.',
      },
      draw(S) {
        S.quote('Tetapi kebesaran sahaja…<br>tidak cukup.', { at: 0, d: -0.1, x: 40, y: 640, w: 1000, fs: 82 });
        S.title('<span class="g">UNDANG-UNDANG</span>', { at: 0.72, d: 0, fs: 104, x: 0, y: 930, w: 1080 });
      },
    },
    {
      id: 'hkm', transition: 'dissolve', trSfx: 'boom',
      lines: ['Lahirlah **Hukum Kanun Melaka** untuk di darat… dan **Undang-Undang Laut Melaka** untuk di laut.'],
      board: {
        name: '36–43 s · Pendedahan: dua undang-undang',
        visual: 'Foto arkib manuskrip Hukum Kanun Melaka (zoom perlahan pada tulisan Jawi); lower-third "HUKUM KANUN MELAKA · di darat"; kemudian peta gelap Selat Melaka dengan laluan kapal & lower-third "UNDANG-UNDANG LAUT MELAKA · di laut".',
        doodle: 'Peta Selat Melaka gaya dokumentari (laut gelap, daratan perkamen).',
        text: 'HUKUM KANUN MELAKA · di darat · UNDANG-UNDANG LAUT MELAKA · di laut',
        anim: 'Dentuman pada pendedahan; peta fade masuk pada "Undang-Undang Laut".',
      },
      draw(S) {
        S.photo(A + 'hukum_kanun_melaka.jpg', { at: 0, d: -0.6, x: 0, y: 0, w: 1080, h: 1920, kb: { from: [1.15, 0, 0], to: [1.35, -3, -2] }, credit: CR.hkm });
        S.lower('DI DARAT', 'Hukum Kanun <span class="g">Melaka</span>', { at: 0, d: 0.4, x: 40, y: 860, w: 1000, fs: 76 });
        const at = S.map({ bounds: [[97.5, -1.5], [106.5, 7.5]], w: 1000, sea: '#14203d', landFill: '#cdbb8c', ink: '#F3EBDD', frame: 'rgba(245,201,40,.6)' }, { anim: 'fade', at: 0.55, d: -0.2, dur: 0.8, x: 40, y: 260, w: 1000, sfx: false });
        S.pin(at, 102.25, 2.2, '<span style="color:#F5C928">MELAKA</span>', { at: 0.6, color: '#F5C928', size: 1.1, fs: 44, left: true, sfx: false });
        S.lower('DI LAUT', 'Undang-Undang <span class="g">Laut Melaka</span>', { at: 0.62, x: 40, y: 1160, w: 1000, fs: 64 });
      },
    },
    {
      id: 'asas',
      lines: ['Kedua-duanya berasaskan **hukum Islam** dan **adat**, untuk menjamin keadilan dan keamanan.'],
      board: {
        name: '43–49 s · Takeaway: asas undang-undang',
        visual: 'Manuskrip Hukum Kanun pudar di latar; garis masa: penanda bergerak "Sultan Muhammad Syah (mula disusun)" ➜ "Sultan Muzaffar Syah (dilengkapkan)"; dua kata emas: HUKUM ISLAM + ADAT; sari: keadilan · keamanan.',
        doodle: '—',
        text: 'HUKUM ISLAM + ADAT · keadilan · keamanan · disusun: Sultan Muhammad Syah ➜ dilengkapkan: Sultan Muzaffar Syah',
        anim: 'Penanda garis masa meluncur; kata kunci fade-up mengikut sebutan.',
      },
      draw(S) {
        S.photo(A + 'hukum_kanun_melaka.jpg', { at: 0, d: -0.6, x: 0, y: 0, w: 1080, h: 1920, kb: { from: [1.35, -3, -2], to: [1.45, -5, -3] }, credit: CR.hkm, style: 'opacity:.4' });
        S.title('HUKUM <span class="g">ISLAM</span><br>+ <span class="g">ADAT</span>', { at: 0.05, d: 0, fs: 120, x: 0, y: 420, w: 1080 });
        S.quote('keadilan · keamanan', { at: 0.62, d: 0, x: 40, y: 760, w: 1000, fs: 70 });
        S.label('HUKUM KANUN MELAKA: DISUSUN ➜ DILENGKAPKAN', { at: 0, d: 0.6, x: 40, y: 1030, w: 1000, fs: 26 });
        S.timeline({ from: 1400, to: 1511, ticks: [1400, 1450, 1500], prevYear: 1430, year: 1450, mark: 'Sultan Muzaffar Syah', at: 0, d: 0.8, y: 1110 });
      },
    },
    {
      id: 'akhir', chrome: false, transition: 'dip', trSfx: 'airy', lead: 0.3, tail: 1.1,
      lines: ['Tapi… siapakah yang menjalankan pemerintahan Melaka setiap hari? Jawapannya, dalam episod seterusnya.'],
      board: {
        name: 'Akhir · Soalan cliffhanger + jenama rasmi',
        visual: 'Latar navy gelap bercahaya; soalan dalam bingkai garis emas; DP rasmi Titik Sejarah (imej asal) berbingkai emas; TITIK SEJARAH serif; slogan; follow.',
        doodle: '—',
        text: 'SOALAN: Siapakah yang menjalankan pemerintahan Melaka setiap hari? · TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · Follow untuk lebih banyak ilmu sejarah.',
        anim: 'Fade-up perlahan; DP zoom lembut.',
        music: 'Muzik menurun perlahan (fade-out) di hujung.',
      },
      draw(S) { S.endCard({ doc: true, question: 'Siapakah yang menjalankan pemerintahan Melaka <span class="g">setiap hari</span>?', label: 'SOALAN · JAWAPAN DALAM EPISOD SETERUSNYA' }); },
    },
  ],
};
