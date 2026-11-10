// EPISOD 06 – Ulang kaji lengkap Bab 1: Warisan Negara Bangsa – Apa Yang Kita Perlu Ingat? (≈ 2–3 min)
import { fmt, SEA_BOUNDS, RED, NAVY, GOLD } from './lib.js';

function quiz(S, D, n, q, a, opts) {
  S.add(`<span class="pill" style="font-size:36px">SOALAN ${n}/3</span>`, { anim: 'pop', x: 60, y: 300, w: 400, at: 0, d: -0.3 });
  S.card(`<div class="t-h3" style="font-size:52px">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: 390, w: 960, at: 0, d: 0.1 });
  opts.forEach((o, i) => S.card(`<div class="t-body" style="font-size:42px"><b>${'ABC'[i]}.</b> ${o}</div>`, { anim: 'slideR', x: 100, y: 680 + i * 130, w: 880, at: 0, d: 1.2 + i * 0.3, pad: '10px 22px', notape: true, sfx: 'swish' }));
  // 3-second countdown during the pause after the question
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:130px;height:130px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:76px;color:#172C63">${c}</div>`, { anim: 'pop', x: 860, y: 260, w: 130, at: 0.999, d: 0.15 + i, out: { at: 0.999, d: 1.1 + i }, sfx: 'pop' }));
  const ai = opts.indexOf(a);
  S.add(D.check(), { anim: 'pop', x: 900, y: 690 + ai * 130, w: 80, at: 1, sfx: 'ding' });
  S.stamp(`JAWAPAN: ${a}`, { x: 60, y: 1100, w: 960, at: 1, d: 0.1, fs: 44, style: 'text-align:center' });
}

export default {
  id: '06',
  file: '06_Bab1_Complete_Revision',
  title: 'Warisan Negara Bangsa – Apa Yang Kita Perlu Ingat?',
  header: { chip: 'BAB 1 • ULANG KAJI', sub: 'Apa Yang Kita Perlu Ingat?' },
  music: { key: 64, bpm: 106, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [
        { text: 'Ada ujian Sejarah tak lama lagi? Jom ulang kaji **seluruh Bab 1** dalam masa kurang tiga minit!', pause: 0.3 },
      ],
      board: {
        name: 'Hook – ulang kaji pantas',
        visual: 'Jam loceng doodle berdering di sebelah buku nota Bab 1; cop "ULANG KAJI".',
        doodle: 'Jam loceng, buku merah "BAB 1", garis getaran, cop merah.',
        text: '"Ujian Sejarah?" · ULANG KAJI BAB 1 · < 3 minit',
        anim: 'Jam bergoyang (pulse); buku dilukis; cop dihentak.',
        music: 'Sting jenama pembuka; tempo muzik lebih laju.',
      },
      draw(S, { D }) {
        S.text('Ujian <span class="red">Sejarah</span>?', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0 });
        S.add(`<svg viewBox="0 0 240 260"><circle cx="120" cy="140" r="96" fill="#FFFDF7" stroke="${NAVY}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><circle cx="190" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><path d="M120 140 V80 M120 140 L160 160" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/><path d="M60 240 L80 215 M180 240 L160 215" stroke="${NAVY}" stroke-width="8" stroke-linecap="round"/></svg>`, { anim: 'pop', x: 130, y: 470, w: 300, at: 0, d: 0.5, pulse: [{ at: 0, d: 1.1 }, { at: 0, d: 1.8 }] });
        S.svg(D.book('BAB 1', RED, { size: 40, y: 145 }), { x: 600, y: 470, w: 300, at: 0, d: 1.2 });
        S.stamp('ULANG KAJI BAB 1', { x: 140, y: 920, w: 800, at: 0, d: 3.2, fs: 60, style: 'text-align:center' });
        S.text('dalam masa < 3 minit!', { size: 'h3', x: 60, y: 1080, w: 960, align: 'center', at: 0, d: 4.4 });
      },
    },
    {
      id: 's11', transition: 'wipe',
      lines: [
        'Satu titik satu. Sebelum kedatangan Barat, kerajaan awal Alam Melayu sudah ada ciri negara bangsa.',
        'Ingat tujuh nama: Funan, Champa, Srivijaya, Angkor, Majapahit, Kedah Tua dan Gangga Nagara.',
      ],
      board: {
        name: 'Ringkasan 1.1',
        visual: 'Peta mini Asia Tenggara dengan tujuh penanda pop pantas; senarai tujuh nama di sisi.',
        doodle: 'Peta lakaran, penanda berwarna, senarai bernombor tulisan tangan.',
        text: '1.1 · Kerajaan awal = ciri negara bangsa · Funan · Champa · Srivijaya · Angkor · Majapahit · Kedah Tua · Gangga Nagara',
        anim: 'Peta dilukis cepat; setiap nama pop serentak dengan sebutan.',
      },
      draw(S) {
        S.add('<span class="pill">1.1</span>', { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
        S.text('Kerajaan Awal Alam Melayu', { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
        const at = S.map({ bounds: SEA_BOUNDS, w: 520 }, { x: 60, y: 390, w: 520, at: 0, d: 0.2, dur: 1.2 });
        const K = [['Funan', 105.2, 10.6], ['Champa', 108.3, 15.8], ['Srivijaya', 104.75, -2.99], ['Angkor', 103.87, 13.41], ['Majapahit', 112.38, -7.56], ['Kedah Tua', 100.45, 5.68], ['Gangga Nagara', 100.78, 4.5]];
        K.forEach(([n, lo, la], i) => {
          const f = 0.18 + i * 0.11;
          S.pin(at, lo, la, '', { at: 1 + f, size: 0.7, color: [RED, GOLD, NAVY][i % 3], sfx: false });
          S.add(`<div class="t-label" style="font-size:42px"><b class="red">${i + 1}.</b> ${n}</div>`, { anim: 'slideR', x: 620, y: 410 + i * 105, w: 420, at: 1 + f, sfx: 'pop' });
        });
      },
    },
    {
      id: 's12', bg: 'grid', transition: 'paper',
      lines: [
        '1.2. Kesultanan Melayu Melaka mempunyai enam ciri negara bangsa:',
        'wilayah pengaruh, kedaulatan, lambang kebesaran, keunggulan undang-undang, rakyat dan kerajaan.',
      ],
      board: {
        name: 'Ringkasan 1.2',
        visual: 'Grid enam petak bernombor, setiap satu dengan ikon kecil.',
        doodle: 'Glob, mahkota, payung, skrol, watak rakyat, istana.',
        text: '1.2 · 6 ciri: Wilayah pengaruh · Kedaulatan · Lambang kebesaran · Keunggulan undang-undang · Rakyat · Kerajaan',
        anim: 'Petak pop berturutan selari dengan senarai yang disebut.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">1.2</span>', { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
        S.text('6 Ciri Negara Bangsa KMM', { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
        const items = [['Wilayah pengaruh', D.globe()], ['Kedaulatan', D.crown()], ['Lambang kebesaran', D.payung()], ['Keunggulan undang-undang', D.scroll('', { color: RED })], ['Rakyat', D.petani()], ['Kerajaan', D.palace()]];
        items.forEach(([l, ic], i) => {
          const x = 60 + (i % 2) * 490, y = 400 + Math.floor(i / 2) * 250, at = 1 + 0.02 + i * 0.15;
          S.add(`<div class="card notape" style="display:flex;align-items:center;gap:18px;height:210px;box-sizing:border-box;padding:12px 18px"><div style="width:120px;flex:none">${ic}</div><div class="t-h3" style="font-size:38px"><span class="red">${i + 1}.</span> ${l}</div></div>`, { anim: 'pop', x, y, w: 470, at, sfx: 'pop' });
        });
      },
    },
    {
      id: 's13', transition: 'flip',
      lines: [
        '1.3. Sultan berkuasa mutlak, dibantu Sistem Pembesar Empat Lipatan: Bendahara, Penghulu Bendahari, Temenggung dan Laksamana.',
        'Undang-undangnya ialah Hukum Kanun Melaka di darat, dan Undang-Undang Laut Melaka di laut, berasaskan hukum Islam dan adat.',
      ],
      board: {
        name: 'Ringkasan 1.3',
        visual: 'Carta organisasi mini (Sultan + 4 pembesar) di atas; dua skrol undang-undang (DARAT / LAUT) di bawah.',
        doodle: 'Watak Sultan & empat pembesar, dua skrol, cop "ISLAM + ADAT".',
        text: '1.3 · Sultan · Bendahara · Penghulu Bendahari · Temenggung · Laksamana · Hukum Kanun Melaka (darat) · Undang-Undang Laut Melaka (laut) · Islam + Adat',
        anim: 'Watak pop mengikut sebutan; skrol dilukis; cop dihentak.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">1.3</span>', { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
        S.text('Pentadbiran & Undang-undang', { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
        S.svg(D.sultan(), { x: 470, y: 380, w: 140, at: 0, d: 0.3, dur: 0.7 });
        const p = [[D.bendahara(), 'Bendahara', 0.45], [D.bendahari(), 'P. Bendahari', 0.6], [D.temenggung(), 'Temenggung', 0.76], [D.laksamana(), 'Laksamana', 0.88]];
        p.forEach(([sv, n, f], i) => {
          S.svg(sv, { x: 100 + i * 235, y: 580, w: 120, at: f, dur: 0.6, sfx: 'pop' });
          S.text(n, { size: 'label', x: 60 + i * 235, y: 740, w: 210, align: 'center', at: f, d: 0.1, style: 'font-size:34px' });
        });
        S.svg(D.scroll('DARAT', { ts: 36 }), { x: 120, y: 830, w: 190, at: 1, d: 0.3 });
        S.svg(D.scroll('LAUT', { ts: 36, color: '#3F5DA8' }), { x: 770, y: 830, w: 190, at: 1, d: 2.6 });
        S.stamp('ISLAM + ADAT', { x: 320, y: 950, w: 440, at: 1, d: 4.8, fs: 46, style: 'text-align:center' });
      },
    },
    {
      id: 's14', bg: 'grid', transition: 'paper',
      lines: [
        '1.4. Pemerintah melindungi rakyat dan berlaku adil; rakyat pula taat setia, membayar cukai dan menjalankan kerahan.',
        'Hubungan timbal balik ini, yang diikat oleh waadat, menjamin kestabilan politik.',
      ],
      board: {
        name: 'Ringkasan 1.4',
        visual: 'Ikon kitaran besar dengan Sultan dan rakyat; kata kunci waadat & kestabilan di bawah.',
        doodle: 'Sultan, rakyat, anak panah kitaran merah-kuning, skrol waadat.',
        text: '1.4 · Pemerintah: lindungi & adil · Rakyat: taat setia, cukai, kerah · WAADAT · Kestabilan politik',
        anim: 'Kitaran dilukis; kata kunci pop.',
      },
      draw(S, { D }) {
        S.add('<span class="pill">1.4</span>', { anim: 'pop', x: 60, y: 295, w: 200, at: 0, d: -0.3 });
        S.text('Pemerintah & Rakyat', { size: 'h3', x: 200, y: 300, w: 820, at: 0, d: -0.1 });
        S.svg(D.sultan(), { x: 90, y: 420, w: 200, at: 0, d: 0.2 });
        S.svg(D.cycle(), { x: 340, y: 450, w: 400, at: 0, d: 1 });
        S.svg(D.rakyat({ pose: 'cheer' }), { x: 790, y: 420, w: 200, at: 0, d: 3.5 });
        S.card('<div class="t-body" style="font-size:38px"><b class="red">Pemerintah:</b> lindungi · adil</div>', { anim: 'slideL', x: 60, y: 760, w: 470, at: 0, d: 1.8, pad: '10px 18px', notape: true });
        S.card('<div class="t-body" style="font-size:38px"><b class="red">Rakyat:</b> taat setia · cukai · kerah</div>', { anim: 'slideR', x: 550, y: 760, w: 470, at: 0, d: 4.3, pad: '10px 18px', notape: true });
        S.stamp('WAADAT', { x: 100, y: 960, w: 380, at: 1, d: 2.2, fs: 52, style: 'text-align:center' });
        S.stamp('KESTABILAN', { x: 560, y: 960, w: 440, at: 1, d: 3.6, fs: 52, rot: 3, style: 'text-align:center' });
      },
    },
    {
      id: 'mindamap', bg: 'dots', transition: 'zoom',
      lines: [
        'Bagaimana keempat-empat subtopik ini berkait?',
        'Kerajaan awal menjadi asas. Melaka menyempurnakan ciri negara bangsa. Pentadbiran dan undang-undang menguatkannya. Dan hubungan pemerintah dengan rakyat mengekalkan kestabilannya.',
        'Semua ini ialah **warisan negara bangsa** yang kita warisi hari ini.',
      ],
      board: {
        name: 'Peta minda – kaitan empat subtopik',
        visual: 'Peta minda beranimasi: hab "WARISAN NEGARA BANGSA" di tengah; empat cabang 1.1–1.4 dengan kata kerja penghubung (asas ➜ sempurna ➜ kukuh ➜ kekal).',
        doodle: 'Hab navy, empat kad cabang berwarna, anak panah melengkung berangka.',
        text: '1.1 ASAS · 1.2 SEMPURNA · 1.3 KUKUH · 1.4 KEKAL ➜ WARISAN NEGARA BANGSA',
        anim: 'Hab pop; setiap cabang dan anak panah dilukis tepat ketika ayat berkaitan disebut; hab berdenyut di akhir.',
      },
      draw(S, { D }) {
        S.text('Peta Minda <span class="red">Bab 1</span>', { size: 'h2', x: 60, y: 295, w: 960, align: 'center', at: 0, d: -0.3 });
        S.card('<div class="t-h3" style="text-align:center;color:#F5C928;font-size:44px">WARISAN<br>NEGARA BANGSA</div>', { color: 'navy', anim: 'pop', x: 330, y: 700, w: 420, at: 0, d: 0.3, pulse: [{ at: 2, d: 1.2 }] });
        const br = [['1.1', 'Kerajaan awal', 'ASAS', 60, 410, 0.02, [330, 700]], ['1.2', 'Ciri negara bangsa KMM', 'SEMPURNA', 600, 410, 0.18, [750, 700]], ['1.3', 'Pentadbiran & undang-undang', 'KUKUH', 60, 1020, 0.42, [330, 870]], ['1.4', 'Pemerintah & rakyat', 'KEKAL', 600, 1020, 0.68, [750, 870]]];
        br.forEach(([n, t, v, x, y, f, [hx, hy]], i) => {
          S.card(`<div style="display:flex;justify-content:space-between;align-items:center"><span class="pill" style="font-size:28px;padding:2px 14px">${n}</span><span class="tw red" style="font-size:26px">${v}</span></div><div class="t-body" style="font-size:38px">${t}</div>`, { anim: 'pop', x, y, w: 420, at: 1 + f, pad: '12px 18px', rot: i % 2 ? 1.5 : -1.5 });
          S.arrow(x + 210, y < 700 ? y + 175 : y - 10, hx, hy, { at: 1 + f, d: 0.2, color: RED, bend: 0.1 });
        });
      },
    },
    {
      id: 'katakunci', transition: 'paper',
      lines: [
        'Kata kunci dan nama penting yang wajib diingat:',
        'Westphalia 1648, dewaraja, Kedukan Bukit, Sumpah Palapa, daulat, derhaka, waadat, Tun Perak, Hang Tuah, Syahbandar dan nakhoda.',
      ],
      board: {
        name: 'Kata kunci & nama penting',
        visual: 'Dinding nota lekat: sebelas kad kata kunci berwarna ditampal dengan pita.',
        doodle: 'Kad kertas kecil, pita kuning, bintang.',
        text: 'Westphalia 1648 · Dewaraja · Kedukan Bukit 683 M · Sumpah Palapa · Daulat · Derhaka · Waadat · Tun Perak · Hang Tuah · Syahbandar · Nakhoda',
        anim: 'Kad ditampal satu demi satu dengan sedikit putaran, serentak dengan sebutan.',
      },
      draw(S) {
        S.text('Kata Kunci <span class="hl">Wajib Ingat</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const kw = [['Westphalia 1648', 'konsep negara bangsa Eropah'], ['Dewaraja', 'Angkor'], ['Kedukan Bukit 683 M', 'Srivijaya'], ['Sumpah Palapa', 'Gajah Mada'], ['Daulat', 'kuasa Sultan'], ['Derhaka', 'ingkar Sultan'], ['Waadat', 'Sang Sapurba – Demang Lebar Daun'], ['Tun Perak', 'Bendahara'], ['Hang Tuah', 'Laksamana'], ['Syahbandar', 'urus pelabuhan'], ['Nakhoda', 'raja di laut']];
        kw.forEach(([k, s], i) => {
          const col = i % 2, row = Math.floor(i / 2);
          S.card(`<div class="t-h3" style="font-size:36px">${k}</div><div class="t-label red" style="font-size:30px">${s}</div>`, { color: i % 3 === 0 ? 'gold' : '', anim: 'pop', x: 60 + col * 490, y: 395 + row * 150, w: 470, at: 1 + 0.03 + i * 0.085, pad: '8px 18px', rot: (i % 3 - 1) * 1.4, sfx: i % 2 ? false : 'pop' });
        });
      },
    },
    {
      id: 'q1', bg: 'grid', transition: 'wipe',
      lines: [{ text: 'Kuiz pantas! Soalan satu: Apakah sistem yang membantu Sultan mentadbir Melaka?', pause: 3.4 }, 'Jawapannya: Sistem Pembesar Empat Lipatan!'],
      board: { name: 'Kuiz 1', visual: 'Kad soalan kertas koyak; tiga pilihan jawapan; jam undur 3-2-1; tanda semak pada jawapan betul.', doodle: 'Bulatan kuning undur masa, tanda semak hijau, cop jawapan.', text: 'SOALAN 1/3 · A. Sistem Pembesar Empat Lipatan · B. Sistem Dewaraja · C. Sistem Naungan · JAWAPAN: A', anim: 'Soalan meluncur naik; pilihan meluncur; undur 3-2-1 pop; jawapan dicop dengan bunyi ding.' },
      draw(S, { D }) { quiz(S, D, 1, 'Apakah sistem yang membantu Sultan mentadbir Melaka?', 'Sistem Pembesar Empat Lipatan', ['Sistem Pembesar Empat Lipatan', 'Sistem Dewaraja', 'Sistem Naungan']); },
    },
    {
      id: 'q2', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan dua: Siapakah pembesar yang mengetuai angkatan laut Melaka?', pause: 3.4 }, 'Jawapannya: Laksamana!'],
      board: { name: 'Kuiz 2', visual: 'Format kuiz yang sama untuk konsistensi.', doodle: 'Undur masa, tanda semak, cop jawapan.', text: 'SOALAN 2/3 · A. Temenggung · B. Laksamana · C. Bendahara · JAWAPAN: B', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 2, 'Siapakah pembesar yang mengetuai angkatan laut Melaka?', 'Laksamana', ['Temenggung', 'Laksamana', 'Bendahara']); },
    },
    {
      id: 'q3', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan tiga: Apakah nama perjanjian antara Sang Sapurba dengan Demang Lebar Daun?', pause: 3.4 }, 'Jawapannya: Waadat! Berapa markah anda?'],
      board: { name: 'Kuiz 3', visual: 'Format kuiz yang sama untuk konsistensi.', doodle: 'Undur masa, tanda semak, cop jawapan.', text: 'SOALAN 3/3 · A. Sumpah Palapa · B. Hukum Kanun · C. Waadat · JAWAPAN: C', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 3, 'Apakah nama perjanjian antara Sang Sapurba dengan Demang Lebar Daun?', 'Waadat', ['Sumpah Palapa', 'Hukum Kanun', 'Waadat']); },
    },
    {
      id: 'penutup', transition: 'zoom',
      lines: [
        'Nak faham dengan lebih mendalam? Tonton semula Episod 1 hingga 5 dalam siri ini.',
        'Terima kasih kerana belajar bersama **Titik Sejarah**. Jumpa lagi!',
      ],
      tail: 0.8,
      board: {
        name: 'Penutup siri – maskot rasmi',
        visual: 'Maskot rasmi Titik Sejarah tampil besar di tengah; lima "kad episod" kecil tersusun di bawah sebagai jemputan menonton semula.',
        doodle: 'Pelekat maskot besar (imej asal), lima kad episod bernombor, bintang.',
        text: 'Tonton semula: EP1 Intro · EP2 1.1 · EP3 1.2 · EP4 1.3 · EP5 1.4 · Terima kasih! Jumpa lagi!',
        anim: 'Maskot zoom-in; kad episod pop satu persatu; bintang berdenyut.',
      },
      draw(S, { D }) {
        S.mascot({ x: 290, y: 300, w: 500, at: 0, d: -0.3, anim: 'zoom', dur: 0.8 });
        const eps = ['EP1 Intro', 'EP2 · 1.1', 'EP3 · 1.2', 'EP4 · 1.3', 'EP5 · 1.4'];
        eps.forEach((e, i) => S.add(`<span class="pill" style="font-size:30px;background:${i % 2 ? '#FFFDF7' : '#F5C928'};white-space:nowrap">${e}</span>`, { anim: 'pop', x: 60 + (i % 3) * 330, y: 870 + Math.floor(i / 3) * 95, w: 320, at: 0, d: 2.4 + i * 0.35, sfx: 'pop' }));
        S.text('Terima kasih!<br><span class="red">Jumpa lagi!</span>', { size: 'h2', x: 60, y: 1080, w: 960, align: 'center', at: 1, d: 0.3 });
        S.add(D.star(), { anim: 'pop', x: 860, y: 1090, w: 110, at: 1, d: 1, pulse: [{ at: 1, d: 1.6 }], sfx: false });
      },
    },
    { id: 'akhir', chrome: false, transition: 'zoom', lines: [], minDur: 5, board: { name: 'Penutup jenama rasmi', visual: 'Gambar profil rasmi Titik Sejarah (imej asal, tidak diubah) di tengah skrin.', doodle: '—', text: 'TITIK SEJARAH · "Kenali sejarah, fahami masa kini." · "Follow untuk lebih banyak ilmu sejarah."', anim: 'Fade + zoom-in lembut pada DP; teks jenama pop.', music: 'Sting jenama penutup; muzik fade-out.' }, draw(S) { S.endCard(); } },
  ],
};
