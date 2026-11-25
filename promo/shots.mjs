// Titik Sejarah promo – shot list.
// Source: user's screen recording (Google Drive, Screenrecorder-2026-11-25-17-43-15-525.mp4, 1200x2670).
// Per voice line: head (kicker/title/sub shown above the phone), segs (clips from the recording), badges.
// seg: src = in-point (s), speed (0 = freeze frame), w = share of the line's time, cam = [[u, y, zoom?, cx?], ...]
//      u: 0..1 through the segment, y: top of the visible window in source px (window = 1310 px tall at zoom 1),
//      zoom: 1 = recording fills the screen width, cx: horizontal centre in source px (default 600).
export const SOURCE = 'Screenrecorder-2026-11-25-17-43-15-525.mp4';

export const SHOTS = {
  L01: { head: { kick: 'Sejarah SPM', ttl: 'Buku teks tebal?', sub: 'SPM pula makin dekat.' },
    segs: [{ src: 17.25, speed: 0.48, w: 1, cam: [[0, 95, 1], [1, 95, 1.06, 600]] }] },
  L02: { head: { kick: 'Kenali sejarah, fahami masa kini', ttl: 'Titik Sejarah', sub: 'App ulang kaji Sejarah · Tingkatan 4 & 5' },
    segs: [{ src: 9.3, speed: 0.33, w: 1, cam: [[0, 95], [0.38, 95], [0.72, 1250], [1, 1250]] }] },
  L03: { head: { kick: 'Nota', ttl: 'Nota ringkas', sub: 'Disusun ikut buku teks KSSM' },
    segs: [{ src: 41.7, speed: 1.5, w: 1, cam: [[0, 95], [1, 150]] }] },
  L04: { head: { kick: 'Kuiz subtopik', ttl: 'Uji diri', sub: 'Semak jawapan yang salah, faham sebabnya' },
    segs: [{ src: 52.0, speed: 2.0, w: 0.5, cam: [[0, 95], [0.6, 300], [1, 380]] },
           { src: 57.9, speed: 0.55, w: 0.5, cam: [[0, 380], [0.35, 860], [1, 880]] }] },
  L05: { head: { kick: 'Kad imbas', ttl: 'Hafal tokoh & istilah', sub: 'Ulang sampai semuanya dikuasai' },
    segs: [{ src: 110.0, speed: 2.6, w: 1, cam: [[0, 300], [1, 300]] }] },
  L06: { segs: [
    { head: { kick: 'Garis masa', ttl: 'Semua tarikh penting', sub: 'Tingkatan 4 & 5 dalam satu garis masa' },
      src: 176.2, speed: 3.0, w: 0.5, cam: [[0, 95], [1, 95]] },
    { head: { kick: 'Glosari', ttl: 'Cari istilah & tokoh', sub: '280 istilah · 158 tokoh' },
      src: 216.9, speed: 1.6, w: 0.5, cam: [[0, 95], [1, 95]] }] },
  L07: { head: { kick: 'Latihan SPM', ttl: 'Kertas 1 format penuh', sub: '40 soalan · 60 minit · bertimer' },
    segs: [{ src: 294.0, speed: 0.7, w: 0.3, cam: [[0, 95], [1, 95]] },
           { src: 304.85, speed: 0.6, w: 0.3, cam: [[0, 95], [1, 95]] },
           { src: 307.0, speed: 3.0, w: 0.4, cam: [[0, 95], [1, 95]] }] },
  L08: { head: { kick: 'Latihan SPM', ttl: 'Kertas 2', sub: 'Struktur & esei, semak dengan skema' },
    segs: [{ src: 379.7, speed: 1.0, w: 0.35, cam: [[0, 95], [1, 160]] },
           { src: 388.4, speed: 4.0, w: 0.65, cam: [[0, 700], [0.55, 1100], [1, 1360]] }] },
  L09: { head: { kick: 'Kemajuan', ttl: 'Tahu bab yang lemah', sub: 'Skor kuiz · rentak belajar · ikut bab' },
    segs: [{ src: 470.2, speed: 2.1, w: 1, cam: [[0, 95], [1, 95]] }] },
  L10: { head: { kick: 'Status app', ttl: 'Android sahaja', sub: 'iOS belum disokong buat masa ini' },
    segs: [{ src: 517.0, speed: 0, w: 1, cam: [[0, 1150, 1], [1, 1250, 1.04]] }],
    badges: [{ at: 'Android.', kind: 'ok', text: 'Android' }, { at: 'iOS', kind: 'no', text: 'iOS belum disokong' }] },
  L11: { head: { kick: 'Status app', ttl: 'Fasa ujian', sub: 'Belum diterbitkan rasmi, tapi dah boleh guna' },
    segs: [{ src: 517.0, speed: 0, w: 1, cam: [[0, 1250, 1.04], [1, 1450, 1.14, 600]] }],
    badges: [{ at: 'fasa', kind: 'info', text: 'Fasa ujian' }, { at: 'dah', kind: 'ok', text: 'Sudah boleh digunakan' }] },
  L12: { head: { kick: 'Akan datang', ttl: 'Sentiasa ditambah baik', sub: 'Kemas kini dari semasa ke semasa' },
    segs: [{ src: 520.3, speed: 0.6, w: 1, cam: [[0, 95, 1], [1, 95, 1.05]] }],
    badges: [{ at: 'baiki,', kind: 'chip', text: 'Baiki' }, { at: 'kemas', kind: 'chip', text: 'Kemas kini' },
             { at: 'tambah', kind: 'chip', text: 'Tambah baik' }], row: true },
  L13: { end: true },
};
