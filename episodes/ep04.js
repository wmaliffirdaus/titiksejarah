// EPISOD 04 – Subtopik 1.3: Keunggulan Sistem Pentadbiran dan Undang-undang (≈ 5–7 min)
import { fmt, RED, NAVY, GOLD } from './lib.js';

// Pembesar profile: character + name tag on one side, role cards appearing on cue on the other side.
function pembesar(S, D, o) {
  const L = o.side !== 'R';
  const cx = L ? 70 : 720, rx = L ? 380 : 60;
  S.svg(o.svg, { x: cx + 10, y: 560, w: 270, at: 0, d: 0.1, dur: 1 });
  S.tag(o.name.toUpperCase(), o.sub, { x: cx - 10, y: 950, w: 320, at: 0, d: 0.8 });
  S.illus({ x: cx, y: 520, at: 0, d: 0.5 });
  o.roles.forEach(([txt, at, d], i) => {
    S.card(`<div class="t-body" style="font-size:38px;line-height:1.15">${fmt(txt)}</div>`, { anim: L ? 'slideR' : 'slideL', x: rx, y: 530 + i * 165, w: 630, at, d: d || 0, pad: '14px 22px', rot: i % 2 ? 0.8 : -0.8, sfx: 'swish' });
  });
}
function titleRow(S, num, title, o = {}) {
  S.add(`<span class="pill" style="font-size:30px;white-space:nowrap">${num}</span>`, { anim: 'pop', x: 60, y: 292, w: 700, at: 0, d: -0.35 });
  S.text(title, { size: o.size || 'h2', x: 60, y: 365, w: 960, at: 0, d: -0.2, dur: 0.8 });
}

export default {
  id: '04',
  file: '04_Bab1_Subtopik_1.3',
  title: 'Keunggulan Sistem Pentadbiran dan Undang-undang',
  header: { chip: 'BAB 1 • 1.3', sub: 'Sistem Pentadbiran & Undang-undang' },
  music: { key: 60, bpm: 98, variant: 1 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Siapa sebenarnya yang membantu Sultan mentadbir **Kesultanan Melayu Melaka**?', pause: 0.45 },
        'Jawapannya: satu sistem yang sangat tersusun, iaitu **Sistem Pembesar Empat Lipatan**!',
      ],
      board: {
        name: 'Hook – siapa membantu Sultan?',
        visual: 'Sultan di tengah; empat bayang-bayang watak misteri di sekeliling bertanda soal; kemudian cop merah nama sistem.',
        doodle: 'Watak Sultan bermahkota, empat siluet navy dengan tanda soal merah, cop getah merah.',
        text: '"Siapa bantu Sultan?" · cop: SISTEM PEMBESAR EMPAT LIPATAN',
        anim: 'Sultan pop; siluet muncul berselang; tanda soal pop; cop dihentak pada baris kedua.',
        music: 'Sting jenama pembuka.',
      },
      draw(S, { D }) {
        S.text('Siapa bantu <span class="red">Sultan</span>?', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0 });
        S.svg(D.sultan({ pose: 'up' }), { x: 415, y: 470, w: 250, at: 0, d: 0.4 });
        const sil = (x, y, d) => S.add(D.person({ hat: 'tanjak', hatColor: NAVY, shirt: NAVY, pants: NAVY, skin: '#3B4F86', samping: NAVY }), { anim: 'pop', x, y, w: 150, at: 0, d, sfx: false });
        sil(110, 520, 1.2); sil(820, 520, 1.5); sil(160, 860, 1.8); sil(770, 860, 2.1);
        [[230, 500], [940, 500], [280, 840], [890, 840]].forEach(([x, y], i) => S.add(D.question(), { anim: 'pop', x, y, w: 60, at: 0, d: 1.3 + i * 0.3, sfx: i ? false : 'pop' }));
        S.stamp('SISTEM PEMBESAR<br>EMPAT LIPATAN', { x: 170, y: 1110, w: 740, at: 1, d: 1.6, fs: 54, style: 'text-align:center' });
      },
    },
    {
      id: 'tajuk', transition: 'wipe',
      lines: ['Subtopik 1.3: **Keunggulan Sistem Pentadbiran dan Undang-undang**. Ini antara topik paling penting dalam Bab 1!'],
      board: {
        name: 'Kad tajuk subtopik',
        visual: 'Kad tajuk; dua ikon besar mewakili dua bahagian episod: istana (pentadbiran) dan neraca (undang-undang).',
        doodle: 'Istana Melaka, neraca keadilan, pelekat maskot, bintang "PENTING".',
        text: 'SUBTOPIK 1.3 · Sistem Pentadbiran · Undang-undang · PENTING!',
        anim: 'Tajuk ditulis; istana & neraca dilukis; bintang berdenyut.',
      },
      draw(S, { D }) {
        S.add('<div style="text-align:center"><span class="pill">SUBTOPIK 1.3</span></div>', { anim: 'pop', x: 40, y: 300, w: 1000, at: 0, d: -0.3 });
        S.text('Keunggulan<br><span class="red">Sistem Pentadbiran</span><br>& Undang-undang', { size: 'h2', x: 60, y: 400, w: 960, align: 'center', at: 0, dur: 1.4 });
        S.svg(D.palace(), { x: 90, y: 720, w: 380, at: 0, d: 1.2 });
        S.text('Pentadbiran', { size: 'label', x: 90, y: 1010, w: 380, align: 'center', at: 0, d: 1.6 });
        S.svg(D.scales(), { x: 640, y: 730, w: 300, at: 0, d: 1.8 });
        S.text('Undang-undang', { size: 'label', x: 600, y: 1010, w: 380, align: 'center', at: 0, d: 2.2 });
        S.mascot({ x: 440, y: 1060, w: 200, at: 0, d: 3.2 });
        S.add(D.star(), { anim: 'pop', x: 640, y: 1100, w: 110, at: 0, d: 4.2, pulse: [{ at: 0, d: 4.8 }] });
      },
    },
    {
      id: 'sultan', bg: 'grid', transition: 'paper',
      lines: [
        'Mulakan dengan **Sultan**. Sultan ialah ketua negara, ketua kerajaan dan ketua agama Islam.',
        'Sultan berkuasa mutlak: melantik pembesar, mengisytiharkan perang, menjalinkan hubungan luar dan menjadi sumber undang-undang.',
        { text: 'Malah, hanya Sultan yang berkuasa menjatuhkan **hukuman bunuh**.', pause: 0.5 },
      ],
      board: {
        name: 'Peranan Sultan',
        visual: 'Sultan di tengah sebagai hab; enam kad peranan tersusun mengelilinginya; cop merah "HUKUMAN BUNUH: SULTAN SAHAJA".',
        doodle: 'Watak Sultan (mahkota, baju kuning, jubah merah), anak panah ke setiap kad peranan.',
        text: 'SULTAN · Ketua negara · Ketua kerajaan · Ketua agama Islam · Lantik pembesar · Isytihar perang · Hubungan luar · Sumber undang-undang · Hukuman bunuh = Sultan sahaja',
        anim: 'Kad peranan pop mengikut sebutan; cop terakhir dihentak dengan bunyi stamp.',
      },
      draw(S, { D }) {
        S.text('Peranan <span class="red">Sultan</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.svg(D.sultan({ pose: 'present' }), { x: 400, y: 560, w: 280, at: 0, d: 0.1 });
        S.tag('SULTAN', 'kuasa mutlak', { x: 430, y: 930, w: 240, at: 0, d: 0.6 });
        const roles = [['Ketua negara', 0.4], ['Ketua kerajaan', 0.55], ['Ketua agama Islam', 0.72], ['Lantik pembesar', 1.25], ['Isytihar perang', 1.42], ['Hubungan luar', 1.62], ['Sumber undang-undang', 1.8]];
        const pos = [[60, 420], [60, 560], [60, 700], [700, 420], [700, 560], [700, 700], [700, 840]];
        roles.forEach(([r, at], i) => S.card(`<div class="t-body" style="font-size:36px">${r}</div>`, { anim: 'pop', x: pos[i][0], y: pos[i][1], w: 320, at, pad: '10px 18px', notape: true, sfx: 'pop' }));
        S.stamp('HUKUMAN BUNUH:<br>SULTAN SAHAJA', { x: 190, y: 1080, w: 700, at: 2, d: 1.2, fs: 50, style: 'text-align:center' });
      },
    },
    {
      id: 'lipatan', transition: 'flip',
      lines: [
        'Sultan dibantu oleh **Sistem Pembesar Empat Lipatan**.',
        'Ia terdiri daripada Pembesar Berempat, Pembesar Berlapan, Pembesar Enam Belas dan Pembesar Tiga Puluh Dua.',
        'Semakin ke bawah, jumlahnya berganda. Pembesar Berempat ialah yang paling kanan dan paling berpengaruh.',
      ],
      board: {
        name: 'Sistem Pembesar Empat Lipatan (hierarki)',
        visual: 'Rajah piramid hierarki: mahkota Sultan di puncak, empat lapisan pembesar (4 → 8 → 16 → 32) bertambah lebar ke bawah.',
        doodle: 'Piramid berlapis warna (navy, merah, kuning, krim), ikon kepala kecil mewakili bilangan pembesar, anak panah "berganda".',
        text: 'SULTAN · Pembesar Berempat (4) · Pembesar Berlapan (8) · Pembesar Enam Belas (16) · Pembesar Tiga Puluh Dua (32) · ×2 setiap lapisan',
        anim: 'Lapisan piramid muncul dari atas ke bawah serentak dengan sebutan; label ×2 pop; lapisan teratas berdenyut pada baris akhir.',
      },
      draw(S, { D }) {
        S.text('Empat Lipatan', { size: 'h2', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.svg(D.crown(), { x: 455, y: 390, w: 170, at: 0, d: 0.3 });
        S.text('SULTAN', { size: 'h3', x: 340, y: 515, w: 400, align: 'center', at: 0, d: 0.5 });
        const layers = [['Pembesar Berempat', '4', NAVY, '#F5C928', 0.12], ['Pembesar Berlapan', '8', RED, '#FFFDF7', 0.35], ['Pembesar Enam Belas', '16', GOLD, NAVY, 0.58], ['Pembesar Tiga Puluh Dua', '32', '#FFFDF7', NAVY, 0.8]];
        layers.forEach(([n, c, bg, fg, f], i) => {
          const w = 520 + i * 140, x = 540 - w / 2, y = 590 + i * 150;
          S.add(`<div style="height:126px;background:${bg};border:5px solid #172C63;border-radius:14px;box-shadow:7px 8px 0 #172C63;display:flex;align-items:center;justify-content:space-between;padding:0 30px;box-sizing:border-box;color:${fg}"><span style="font-family:Marker;font-size:${i === 3 ? 33 : 36}px;white-space:nowrap">${n}</span><span style="font-family:Marker;font-size:64px">${c}</span></div>`, { anim: 'slideU', x, y, w, at: 1 + f, sfx: 'pop', pulse: i === 0 ? [{ at: 2, d: 3.2 }] : [] });
        });
        S.text('×2', { size: 'h2', x: 900, y: 760, w: 140, at: 2, d: 0.2, style: 'color:#C93436' });
        S.arrow(960, 840, 980, 1150, { at: 2, d: 0.4, color: RED, bend: 0.15 });
      },
    },
    {
      id: 'bendahara', transition: 'paper',
      lines: [
        'Pembesar paling kanan ialah **Bendahara**, ketua kepada semua pembesar.',
        'Bendahara menjadi penasihat Sultan, ketua pentadbiran, ketua hakim dan panglima perang.',
        'Bendahara juga memangku jawatan Sultan jika Sultan mangkat dan bakal penggantinya masih kecil.',
        'Contoh terkenal ialah **Tun Perak**, Bendahara yang berkhidmat di bawah empat orang Sultan.',
      ],
      board: {
        name: 'Pembesar Berempat 1 – Bendahara',
        visual: 'Profil watak: Bendahara (kiri) dengan tag nama; kad tugas meluncur masuk di kanan satu demi satu.',
        doodle: 'Bendahara bertengkolok putih, baju navy, samping kuning, memegang skrol; label "ILUSTRASI".',
        text: 'BENDAHARA · ketua pembesar · Penasihat Sultan · Ketua pentadbiran · Ketua hakim · Panglima perang · Pemangku Sultan · Tun Perak (4 Sultan)',
        anim: 'Watak dilukis; tag nama pop; kad tugas meluncur dari kanan mengikut sebutan.',
      },
      draw(S, { D }) {
        titleRow(S, 'PEMBESAR BEREMPAT #1', 'Bendahara');
        pembesar(S, D, {
          name: 'Bendahara', sub: 'ketua semua pembesar', svg: D.bendahara({ pose: 'present' }), side: 'L',
          roles: [['**Penasihat** Sultan & **ketua pentadbiran**', 1, 0.2], ['**Ketua hakim** & **panglima perang**', 1, 2.6], ['**Pemangku** Sultan (pengganti masih kecil)', 2, 0.3], ['Contoh: **Tun Perak**, berkhidmat di bawah 4 Sultan', 3, 0.4]],
        });
      },
    },
    {
      id: 'bendahari', transition: 'slideUp',
      lines: [
        'Kedua, **Penghulu Bendahari**.',
        'Beliau menguruskan perbendaharaan dan kewangan negara, termasuk mengutip cukai.',
        'Penghulu Bendahari juga mengetuai semua Syahbandar dan menjadi ketua urus setia istana, termasuk mengawasi hamba raja.',
      ],
      board: {
        name: 'Pembesar Berempat 2 – Penghulu Bendahari',
        visual: 'Profil watak (kanan) dengan longgokan syiling; kad tugas di kiri.',
        doodle: 'Penghulu Bendahari bertengkolok kuning, baju merah, memegang syiling emas; ikon syiling.',
        text: 'PENGHULU BENDAHARI · ketua kewangan · Perbendaharaan negara · Kutip cukai · Ketua Syahbandar · Urus setia istana & hamba raja',
        anim: 'Watak dilukis; syiling pop; kad tugas meluncur dari kiri.',
      },
      draw(S, { D }) {
        titleRow(S, 'PEMBESAR BEREMPAT #2', 'Penghulu Bendahari', { size: 'h2' });
        pembesar(S, D, {
          name: 'Penghulu Bendahari', sub: 'ketua kewangan negara', svg: D.bendahari({ pose: 'hold', prop: 'coins' }), side: 'R',
          roles: [['Urus **perbendaharaan** & kewangan negara', 1, 0.2], ['**Kutip cukai**', 1, 2.8], ['**Ketua semua Syahbandar**', 2, 0.6], ['Ketua **urus setia istana** & hamba raja', 2, 2.8]],
        });
        S.svg(D.coins(), { x: 820, y: 1080, w: 180, at: 1, d: 3, sfx: false });
      },
    },
    {
      id: 'temenggung', transition: 'paper',
      lines: [
        'Ketiga, **Temenggung**, yang menjaga keamanan dalam negeri.',
        'Temenggung ialah ketua polis dan penjara. Beliau menangkap penjenayah dan menjaga ketenteraman bandar.',
        'Temenggung juga mengawasi **timbangan dan sukatan** di pasar supaya urusan jual beli adil.',
      ],
      board: {
        name: 'Pembesar Berempat 3 – Temenggung',
        visual: 'Profil watak (kiri) dengan lembing; kad tugas di kanan; ikon penjara dan neraca kecil.',
        doodle: 'Temenggung bertanjak navy, memegang lembing; jeriji penjara; neraca timbangan.',
        text: 'TEMENGGUNG · keamanan dalam negeri · Ketua polis & penjara · Tangkap penjenayah · Ketenteraman bandar · Timbangan & sukatan',
        anim: 'Watak dilukis; kad tugas meluncur; ikon penjara & neraca pop.',
      },
      draw(S, { D }) {
        titleRow(S, 'PEMBESAR BEREMPAT #3', 'Temenggung');
        pembesar(S, D, {
          name: 'Temenggung', sub: 'keamanan dalam negeri', svg: D.temenggung({ pose: 'hold', prop: 'spear' }), side: 'L',
          roles: [['**Ketua polis** & **penjara**', 1, 0.2], ['Tangkap penjenayah, jaga **ketenteraman bandar**', 1, 2.6], ['Awasi **timbangan & sukatan** di pasar', 2, 0.6]],
        });
        S.svg(D.jail(), { x: 420, y: 1040, w: 180, at: 1, d: 1.6, sfx: false });
        S.svg(D.scales(), { x: 680, y: 1060, w: 210, at: 2, d: 1.2, sfx: false });
      },
    },
    {
      id: 'laksamana', transition: 'flip',
      lines: [
        'Keempat, **Laksamana**, ketua angkatan laut.',
        'Laksamana menjaga keselamatan perairan dan Selat Melaka, mengetuai angkatan tentera ketika perang, serta mengiringi rombongan diraja.',
        'Laksamana juga menjadi pengawal peribadi Sultan. Jawatan ini diwujudkan pada zaman Sultan Mansur Syah, dan **Hang Tuah** ialah Laksamana yang paling terkenal.',
      ],
      board: {
        name: 'Pembesar Berempat 4 – Laksamana',
        visual: 'Profil watak (kanan) berlatar kapal; kad tugas di kiri.',
        doodle: 'Laksamana bertanjak merah, baju navy, keris; kapal layar; sauh.',
        text: 'LAKSAMANA · ketua angkatan laut · Keselamatan perairan & Selat Melaka · Ketua tentera semasa perang · Iring rombongan diraja · Pengawal peribadi Sultan · Sultan Mansur Syah · Hang Tuah',
        anim: 'Watak dilukis; kapal meluncur; kad tugas meluncur dari kiri.',
      },
      draw(S, { D }) {
        titleRow(S, 'PEMBESAR BEREMPAT #4', 'Laksamana');
        pembesar(S, D, {
          name: 'Laksamana', sub: 'ketua angkatan laut', svg: D.laksamana({ pose: 'point' }), side: 'R',
          roles: [['Jaga **keselamatan perairan** & Selat Melaka', 1, 0.2], ['**Ketua tentera** semasa perang; iring rombongan diraja', 1, 3.2], ['**Pengawal peribadi** Sultan', 2, 0.2], ['Zaman **Sultan Mansur Syah** · **Hang Tuah**', 2, 4.2]],
        });
        S.svg(D.anchor(), { x: 900, y: 1060, w: 110, at: 0, d: 1.2, sfx: false });
      },
    },
    {
      id: 'hubungan', bg: 'grid', transition: 'zoom',
      lines: [
        { text: 'Jadi, bagaimana **hubungan** Sultan dengan Pembesar Berempat?', pause: 0.3 },
        'Sultan melantik pembesar dan mengurniakan gelaran serta kawasan pegangan.',
        'Sebagai balasan, pembesar taat setia, menasihati Sultan dan melaksanakan perintah baginda.',
        'Bendahara pula mengetuai pembesar lain, dan setiap pembesar ada bidang tugas sendiri. Hasilnya, pentadbiran berjalan lancar dan teratur.',
      ],
      board: {
        name: 'Hubungan Sultan dengan Pembesar Berempat',
        visual: 'Rajah dua hala: Sultan di atas, empat pembesar di bawah; anak panah merah ke bawah (lantikan) dan anak panah kuning ke atas (taat setia).',
        doodle: 'Sultan, Bendahara, Penghulu Bendahari, Temenggung, Laksamana; dua anak panah tebal; label tugas ringkas di bawah setiap pembesar.',
        text: 'SULTAN ⬇ lantik · gelaran · kawasan pegangan ⬆ taat setia · nasihat · laksana perintah · Bendahara ketuai pembesar · tugas khusus = pentadbiran lancar',
        anim: 'Watak pop; anak panah dilukis ikut narasi; label tugas pop satu persatu; kad "lancar & teratur" dicop.',
      },
      draw(S, { D }) {
        S.text('Hubungan <span class="red">Sultan</span> & Pembesar', { size: 'h3', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.svg(D.sultan({ pose: 'present' }), { x: 450, y: 370, w: 180, at: 0, d: 0.3, dur: 0.8 });
        S.arrow(380, 520, 260, 820, { at: 1, color: RED, sw: 9, bend: 0.12 });
        S.card('<div class="t-body" style="font-size:34px;line-height:1.1"><b class="red">⬇ Sultan:</b><br>lantik · gelaran · kawasan pegangan</div>', { anim: 'slideL', x: 40, y: 560, w: 330, at: 1, d: 0.6, pad: '10px 16px', notape: true });
        S.arrow(820, 820, 700, 520, { at: 2, color: '#E0B000', sw: 9, bend: 0.12 });
        S.card('<div class="t-body" style="font-size:34px;line-height:1.1"><b style="color:#B98A00">⬆ Pembesar:</b><br>taat setia · nasihat · laksana perintah</div>', { anim: 'slideR', x: 700, y: 560, w: 340, at: 2, d: 0.6, pad: '10px 16px', notape: true });
        const ppl = [[D.bendahara(), 'Bendahara', 'ketua pembesar'], [D.bendahari(), 'P. Bendahari', 'kewangan'], [D.temenggung(), 'Temenggung', 'keamanan'], [D.laksamana(), 'Laksamana', 'laut']];
        ppl.forEach(([sv, n, t], i) => {
          const x = 60 + i * 245;
          S.svg(sv, { x: x + 40, y: 840, w: 150, at: 0, d: 0.8 + i * 0.25, dur: 0.7, sfx: i ? false : 'pop' });
          S.tag(n, t, { x: x, y: 1050, w: 235, at: 3, d: 0.4 + i * 0.5, style: 'font-size:0.8em' });
        });
        S.stamp('LANCAR & TERATUR', { x: 160, y: 1190, w: 760, at: 3, d: 5.8, fs: 52, style: 'text-align:center' });
      },
    },
    {
      id: 'syahbandar', bg: 'grid', transition: 'paper',
      lines: [
        'Selain itu, ada pegawai lain seperti **Syahbandar**, yang mengurus pelabuhan: menerima pedagang, memeriksa timbangan dan menguruskan gudang.',
        'Melaka mempunyai **empat orang Syahbandar**, mengikut kumpulan pedagang dari kawasan yang berbeza.',
      ],
      board: {
        name: 'Syahbandar – pengurus pelabuhan',
        visual: 'Pelabuhan Melaka dari atas: empat jeti dengan kapal berbeza dan label kumpulan pedagang.',
        doodle: 'Empat kapal (jong China, kapal layar), jeti, gudang, watak Syahbandar dengan skrol.',
        text: 'SYAHBANDAR · terima pedagang · periksa timbangan · urus gudang · 4 Syahbandar: Gujerat · India, Benggala & Pegu · Nusantara · China, Champa & Ryukyu',
        anim: 'Watak pop; jeti dilukis; kapal dan label muncul satu demi satu pada baris kedua.',
      },
      draw(S, { D }) {
        S.text('<span class="hl">Syahbandar</span>', { size: 'h2', x: 60, y: 295, w: 600, at: 0, d: -0.3 });
        S.svg(D.pegawai({ pose: 'present', hat: 'tengkolok', hatColor: GOLD, shirt: NAVY }), { x: 80, y: 400, w: 200, at: 0, d: 0.2 });
        S.tag('SYAHBANDAR', 'pengurus pelabuhan', { x: 60, y: 690, w: 300, at: 0, d: 0.6 });
        ['Terima pedagang', 'Periksa timbangan', 'Urus gudang'].forEach((r, i) => S.card(`<div class="t-body" style="font-size:38px">✓ ${r}</div>`, { anim: 'slideR', x: 400, y: 390 + i * 120, w: 560, at: 0, d: 3.2 + i * 1.1, pad: '10px 20px', notape: true }));
        const groups = [['Gujerat', D.ship()], ['India, Benggala, Pegu', D.ship({ hull: NAVY })], ['Nusantara', D.ship({ sail: RED })], ['China, Champa, Ryukyu', D.ship({ junk: true })]];
        groups.forEach(([g, sv], i) => {
          const x = 60 + i * 245;
          S.svg(sv, { x: x + 10, y: 820, w: 210, at: 1, d: 0.4 + i * 0.5, dur: 0.8, sfx: i ? false : 'pencil' });
          S.add(`<div style="text-align:center"><span class="pill" style="font-size:24px;padding:4px 12px">${i + 1}</span><div class="t-label" style="font-size:32px;margin-top:6px">${g}</div></div>`, { anim: 'pop', x, y: 990, w: 230, at: 1, d: 0.6 + i * 0.5, sfx: false });
        });
        S.add('<svg viewBox="0 0 960 30"><path d="M10 15 H950" stroke="#172C63" stroke-width="6" stroke-dasharray="20 12"/></svg>', { anim: 'wipe', x: 60, y: 800, w: 960, at: 1, d: 0.1 });
      },
    },
    {
      id: 'hkm', transition: 'wipe',
      lines: [
        'Sekarang, undang-undang. **Hukum Kanun Melaka**, juga dikenali sebagai Undang-Undang Darat Melaka, mula disusun pada zaman Sultan Muhammad Syah dan dilengkapkan pada zaman Sultan Muzaffar Syah.',
        'Ia mengandungi peraturan tentang bidang kuasa raja dan pembesar, pantang larang dalam kalangan rakyat, hukuman jenayah, hukum kekeluargaan seperti nikah kahwin, serta urusan jual beli.',
        'Hukum Kanun Melaka berasaskan **hukum Islam** dan **adat**.',
      ],
      board: {
        name: 'Hukum Kanun Melaka (Undang-Undang Darat)',
        visual: 'Skrol besar "Hukum Kanun Melaka" di kiri; lima kandungan utama dalam kad berikon di kanan; garis masa dua Sultan di atas.',
        doodle: 'Skrol kuning, mahkota (bidang kuasa), tanda larangan (pantang larang), jeriji (jenayah), hati (kekeluargaan), syiling (jual beli).',
        text: 'HUKUM KANUN MELAKA = Undang-Undang Darat · Disusun: Sultan Muhammad Syah → Dilengkapkan: Sultan Muzaffar Syah · Bidang kuasa raja & pembesar · Pantang larang · Jenayah · Kekeluargaan · Jual beli · Hukum Islam + Adat',
        anim: 'Skrol dilukis; garis masa ditulis; kad kandungan pop mengikut sebutan; kad sumber hukum dicop.',
      },
      draw(S, { D }) {
        S.text('Hukum Kanun <span class="red">Melaka</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        S.text('= Undang-Undang Darat Melaka', { size: 'label', x: 60, y: 375, w: 800, at: 0, d: 2.2 });
        S.card('<div class="t-body" style="font-size:34px;text-align:center"><b>Disusun:</b> Sultan Muhammad Syah ➜ <b>Dilengkapkan:</b> Sultan Muzaffar Syah</div>', { anim: 'slideU', x: 60, y: 440, w: 960, at: 0, d: 4.2, pad: '10px 16px', notape: true });
        S.svg(D.scroll('HKM', { ts: 54 }), { x: 60, y: 580, w: 330, at: 0, d: 0.6 });
        const items = [['Bidang kuasa raja & pembesar', D.crown(), 0.25], ['Pantang larang rakyat', D.cross(), 0.38], ['Hukuman jenayah', D.jail(), 0.52], ['Kekeluargaan (nikah kahwin)', D.heart(), 0.68], ['Urusan jual beli', D.coins(), 0.87]];
        items.forEach(([t, ic, f], i) => {
          const y = 580 + i * 112;
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:16px;padding:8px 16px"><div style="width:74px;flex:none">${ic}</div><div class="t-body" style="font-size:36px">${t}</div></div>`, { anim: 'slideR', x: 420, y, w: 600, at: 1 + f, sfx: 'swish' });
        });
        S.stamp('HUKUM ISLAM + ADAT', { x: 90, y: 1170, w: 900, at: 2, d: 0.2, fs: 56, style: 'text-align:center' });
      },
    },
    {
      id: 'contoh', bg: 'dots', transition: 'paper',
      lines: [
        'Contohnya, rakyat biasa dilarang memakai pakaian berwarna **kuning**, kerana kuning ialah warna larangan diraja. Pesalah boleh dihukum.',
        'Bagi kesalahan seperti mencuri pula, Hukum Kanun Melaka menyebut hukuman mengikut **hukum Islam** dan juga mengikut **adat**.',
      ],
      src: 'Sumber: Buku Teks Sejarah Tingkatan 4 KSSM, Bab 1 · Situasi ialah ilustrasi',
      board: {
        name: 'Senario bergambar – undang-undang dalam kehidupan',
        visual: 'Komik dua panel: (1) rakyat berbaju kuning ditegur Temenggung; (2) kes mencuri dengan dua laluan hukuman: Hukum Islam & Adat.',
        doodle: 'Watak rakyat berbaju kuning, Temenggung dengan lembing, tanda "!", neraca, dua papan tanda.',
        text: 'PANEL 1: Kuning = warna larangan diraja · PANEL 2: Mencuri ➜ Hukum Islam / Adat · label "ILUSTRASI"',
        anim: 'Panel 1 pop dengan watak; tanda seru pop; panel 2 meluncur naik; dua papan tanda pop.',
      },
      draw(S, { D }) {
        S.card('<div style="height:430px"></div>', { anim: 'pop', x: 60, y: 300, w: 960, at: 0, d: -0.2, notape: true, sfx: false });
        S.text('PANEL 1', { size: 'label', x: 90, y: 315, w: 300, at: 0, d: 0 });
        S.svg(D.rakyat({ shirt: GOLD, samping: GOLD, pose: 'down', mood: 'sad' }), { x: 140, y: 380, w: 210, at: 0, d: 0.3 });
        S.svg(D.temenggung({ pose: 'point', prop: 'none' }), { x: 640, y: 380, w: 210, at: 0, d: 1.2 });
        S.add('<div class="t-big red" style="font-size:120px">!</div>', { anim: 'pop', x: 410, y: 420, w: 80, at: 0, d: 2.2 });
        S.add('<div class="bubble" style="font-size:34px">Kuning = warna larangan!</div>', { anim: 'pop', x: 470, y: 330, w: 420, at: 0, d: 2.6 });
        S.illus({ x: 870, y: 700, at: 0, d: 0.5 });
        S.card('<div style="height:470px"></div>', { anim: 'slideU', x: 60, y: 790, w: 960, at: 1, d: -0.3, notape: true, sfx: 'swish' });
        S.text('PANEL 2 · Kes mencuri', { size: 'label', x: 90, y: 805, w: 600, at: 1, d: 0 });
        S.svg(D.scales(), { x: 410, y: 870, w: 260, at: 1, d: 0.3 });
        S.card('<div class="t-h3" style="text-align:center">Hukum Islam</div>', { color: 'gold', anim: 'pop', x: 100, y: 1110, w: 380, at: 1, d: 3.0, pad: '10px 14px' });
        S.card('<div class="t-h3" style="text-align:center;color:#FFFDF7">Adat</div>', { color: 'red', anim: 'pop', x: 600, y: 1110, w: 380, at: 1, d: 4.2, pad: '10px 14px' });
      },
    },
    {
      id: 'uulm', transition: 'slideUp',
      lines: [
        '**Undang-Undang Laut Melaka** pula mengatur urusan pelayaran dan perdagangan di laut.',
        'Ia menetapkan tugas anak kapal, cara berjual beli di atas kapal, dan hukuman bagi kesalahan di laut.',
        'Di laut, **nakhoda** berkuasa penuh, ibarat raja di atas kapalnya, dibantu oleh malim sebagai pemandu arah, serta jurumudi dan tukang.',
      ],
      board: {
        name: 'Undang-Undang Laut Melaka',
        visual: 'Kapal besar di tengah dengan tag nama anak kapal (nakhoda, malim, jurumudi, tukang); tiga kad kandungan di atas.',
        doodle: 'Kapal layar besar, ombak, tag nama berpanah; mahkota kecil di atas tag nakhoda.',
        text: 'UNDANG-UNDANG LAUT MELAKA · pelayaran & perdagangan · Tugas anak kapal · Jual beli di kapal · Hukuman di laut · NAKHODA = "raja di laut" · Malim (pemandu arah) · Jurumudi · Tukang',
        anim: 'Kapal dilukis; kad kandungan pop; tag anak kapal pop dengan anak panah ke kapal.',
      },
      draw(S, { D }) {
        S.text('Undang-Undang <span class="red">Laut</span> Melaka', { size: 'h3', x: 60, y: 300, w: 960, at: 0, d: -0.3 });
        ['Tugas anak kapal', 'Jual beli di kapal', 'Hukuman di laut'].forEach((r, i) => S.card(`<div class="t-body" style="font-size:34px;text-align:center">${r}</div>`, { anim: 'pop', x: 60 + i * 325, y: 390, w: 305, at: 1, d: 0.2 + i * 1.3, pad: '10px 12px' }));
        S.svg(D.ship(), { x: 200, y: 580, w: 680, at: 0, d: 0.4, dur: 1.6 });
        S.tag('NAKHODA', 'ibarat raja di laut', { x: 60, y: 1110, w: 300, at: 2, d: 0.3 });
        S.svg(D.crown(), { x: 140, y: 1050, w: 80, at: 2, d: 0.6, sfx: false });
        S.tag('MALIM', 'pemandu arah', { x: 400, y: 1110, w: 230, at: 2, d: 4.6 });
        S.tag('JURUMUDI', '& tukang', { x: 680, y: 1110, w: 280, at: 2, d: 6.2 });
        S.arrow(200, 1100, 330, 900, { at: 2, d: 0.6, color: RED });
      },
    },
    {
      id: 'kepentingan', bg: 'grid', transition: 'paper',
      lines: [
        { text: 'Kenapa undang-undang ini penting?', pause: 0.3 },
        'Ia menjamin keadilan dan keamanan, menjadi panduan kepada pemerintah dan pembesar, serta mengawal tingkah laku rakyat.',
        'Pedagang asing pula berasa yakin dan selamat untuk berdagang di Melaka.',
        'Malah, Hukum Kanun Melaka menjadi asas kepada undang-undang negeri Melayu lain seperti Pahang, Johor dan Kedah.',
      ],
      board: {
        name: 'Kepentingan undang-undang',
        visual: 'Grid empat manfaat berikon; kemudian rajah aliran: Hukum Kanun Melaka ➜ Pahang, Johor, Kedah.',
        doodle: 'Neraca (keadilan), perisai (keamanan), buku (panduan), kapal (pedagang yakin); skrol HKM bercabang tiga anak panah.',
        text: 'Keadilan & keamanan · Panduan pemerintah · Kawal tingkah laku · Pedagang yakin · HKM ➜ Undang-undang Pahang, Johor, Kedah',
        anim: 'Kad manfaat pop mengikut sebutan; anak panah aliran dilukis; nama negeri pop.',
      },
      draw(S, { D }) {
        S.text('Kenapa <span class="hl">PENTING</span>?', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const b = [['Keadilan & keamanan', D.shield(), 1, 0.1], ['Panduan pemerintah', D.book('', NAVY), 1, 0.45], ['Kawal tingkah laku', D.scales(), 1, 0.78], ['Pedagang yakin', D.ship({ waves: false }), 2, 0.1]];
        b.forEach(([t, ic, at, f], i) => {
          const x = 60 + (i % 2) * 490, y = 400 + Math.floor(i / 2) * 230;
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:18px;padding:14px 18px;height:190px;box-sizing:border-box"><div style="width:120px;flex:none">${ic}</div><div class="t-body" style="font-size:38px">${t}</div></div>`, { anim: 'pop', x, y, w: 470, at: at + f, sfx: 'pop' });
        });
        S.svg(D.scroll('HKM', { ts: 46 }), { x: 90, y: 880, w: 200, at: 3, d: 0.2 });
        ['Pahang', 'Johor', 'Kedah'].forEach((n, i) => {
          S.arrow(310, 1020, 560, 900 + i * 140, { at: 3, d: 0.9 + i * 0.25, color: RED, bend: 0.05 });
          S.add(`<span class="pill" style="font-size:36px">${n}</span>`, { anim: 'pop', x: 590, y: 870 + i * 140, w: 300, at: 3, d: 4 + i * 0.6, sfx: 'pop' });
        });
      },
    },
    {
      id: 'kesimpulan', transition: 'zoom',
      lines: [
        { text: 'Kesimpulannya, sistem pentadbiran yang tersusun dan undang-undang bertulis menjadikan Melaka kerajaan yang **stabil**, **adil** dan **maju**.', pause: 0.35 },
        'Seterusnya: peranan pemerintah dan rakyat!',
      ],
      tail: 0.8,
      board: {
        name: 'Kesimpulan & episod seterusnya',
        visual: 'Persamaan visual: PENTADBIRAN + UNDANG-UNDANG = MELAKA STABIL, ADIL, MAJU; maskot rasmi & kad episod seterusnya.',
        doodle: 'Istana, neraca, tiga cop kata kunci, pelekat maskot.',
        text: 'Pentadbiran tersusun + Undang-undang bertulis = STABIL · ADIL · MAJU · Seterusnya: 1.4 Peranan Pemerintah & Rakyat',
        anim: 'Ikon dilukis; tiga cop dihentak mengikut sebutan; maskot & kad pop.',
      },
      draw(S, { D }) {
        S.svg(D.palace(), { x: 70, y: 320, w: 380, at: 0, d: 0.3 });
        S.add('<div class="t-big" style="font-size:110px;text-align:center">+</div>', { anim: 'pop', x: 470, y: 400, w: 120, at: 0, d: 1.2 });
        S.svg(D.scales(), { x: 640, y: 340, w: 340, at: 0, d: 1.6 });
        ['STABIL', 'ADIL', 'MAJU'].forEach((k, i) => S.stamp(k, { x: 60 + i * 330, y: 690, w: 320, at: 0, d: 5.4 + i * 0.7, fs: 58, rot: -4 + i * 3, style: 'text-align:center' }));
        S.mascot({ x: 80, y: 900, w: 260, at: 1, d: -0.3 });
        S.card('<div class="t-label red">Seterusnya</div><div class="t-h3">1.4 Peranan Pemerintah & Rakyat</div>', { x: 380, y: 960, w: 620, at: 1, d: 0.2 });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 4.6, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Fade + zoom-in lembut pada DP; teks jenama pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
