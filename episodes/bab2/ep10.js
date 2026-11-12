// BAB 2 · EPISOD 10 – Ulang kaji lengkap Bab 2: Kebangkitan Nasionalisme + kuiz (≈ 4 min)
import { SRC, RED, NAVY, GOLD, fmt, endScene } from './lib2.js';

function quiz(S, D, n, q, a, opts) {
  S.add(`<span class="pill" style="font-size:36px">SOALAN ${n}/3</span>`, { anim: 'pop', x: 60, y: 300, w: 400, at: 0, d: -0.3 });
  S.card(`<div class="t-h3" style="font-size:50px">${q}</div>`, { tear: true, anim: 'slideU', x: 60, y: 390, w: 960, at: 0, d: 0.1 });
  opts.forEach((o, i) => S.card(`<div class="t-body" style="font-size:42px"><b>${'ABC'[i]}.</b> ${o}</div>`, { anim: 'slideR', x: 100, y: 700 + i * 130, w: 880, at: 0, d: 1.2 + i * 0.3, pad: '10px 22px', notape: true, sfx: 'swish' }));
  ['3', '2', '1'].forEach((c, i) => S.add(`<div style="width:130px;height:130px;border-radius:50%;background:#F5C928;border:6px solid #172C63;display:flex;align-items:center;justify-content:center;font-family:Marker;font-size:76px;color:#172C63">${c}</div>`, { anim: 'pop', x: 860, y: 260, w: 130, at: 0.999, d: 0.15 + i, out: { at: 0.999, d: 1.1 + i }, sfx: 'pop' }));
  const ai = opts.indexOf(a);
  S.add(D.check(), { anim: 'pop', x: 900, y: 710 + ai * 130, w: 80, at: 1, sfx: 'ding' });
  S.stamp(`JAWAPAN: ${'ABC'[ai]}`, { x: 60, y: 1120, w: 960, at: 1, d: 0.1, fs: 50, style: 'text-align:center' });
}

const sumCard = (S, num, title, body, at, d, y, color) => S.card(`<div style="display:flex;gap:18px;align-items:flex-start"><div style="flex:none;width:92px;height:92px;border-radius:50%;background:${color === 'navy' ? '#F5C928' : '#C93436'};border:4px solid #172C63;color:${color === 'navy' ? '#172C63' : '#F5C928'};font-family:Marker;font-size:34px;display:flex;align-items:center;justify-content:center">${num}</div><div><div class="t-h3" style="font-size:40px;${color === 'navy' ? 'color:#F5C928' : ''}">${title}</div><div class="t-body" style="font-size:36px;line-height:1.15;${color === 'navy' ? 'color:#F3EBDD' : ''}">${fmt(body)}</div></div></div>`,
  { color, anim: 'slideU', x: 60, y, w: 960, at, d, pad: '14px 22px', rot: color === 'gold' ? 0.8 : -0.8 });

export default {
  id: '10',
  file: '10_Bab2_Complete_Revision',
  title: 'Kebangkitan Nasionalisme – Apa Yang Kita Perlu Ingat?',
  header: { chip: 'BAB 2 • ULANG KAJI', sub: 'Wajib Ingat!' },
  src: SRC,
  music: { key: 64, bpm: 106, variant: 2 },
  scenes: [
    {
      id: 'hook', bg: 'dots', chrome: false,
      lines: [{ text: 'Ujian Sejarah dah dekat? Jom ulang kaji **seluruh Bab 2**, Kebangkitan Nasionalisme, dengan pantas!', pause: 0.3 }],
      board: {
        name: 'Hook – ulang kaji pantas',
        visual: 'Jam loceng doodle berdering di sebelah buku "BAB 2"; cop "ULANG KAJI BAB 2".',
        doodle: 'Jam loceng, buku merah "BAB 2", obor, cop merah.',
        text: '"Ujian Sejarah?" · ULANG KAJI BAB 2 · Kebangkitan Nasionalisme',
        anim: 'Jam bergoyang (pulse); buku dilukis; cop dihentak.',
        music: 'Sting jenama pembuka; tempo muzik lebih laju.',
      },
      draw(S, { D }) {
        S.text('Ujian <span class="red">Sejarah</span>?', { size: 'title', x: 60, y: 300, w: 960, align: 'center', at: 0 });
        S.add(`<svg viewBox="0 0 240 260"><circle cx="120" cy="140" r="96" fill="#FFFDF7" stroke="${NAVY}" stroke-width="8"/><circle cx="50" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><circle cx="190" cy="50" r="30" fill="${RED}" stroke="${NAVY}" stroke-width="6"/><path d="M120 140 V80 M120 140 L160 160" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/><path d="M60 240 L80 215 M180 240 L160 215" stroke="${NAVY}" stroke-width="8" stroke-linecap="round"/></svg>`, { anim: 'pop', x: 130, y: 470, w: 300, at: 0, d: 0.5, pulse: [{ at: 0, d: 1.1 }, { at: 0, d: 1.8 }] });
        S.svg(D.book('BAB 2', RED, { size: 40, y: 145 }), { x: 600, y: 470, w: 300, at: 0, d: 1.2 });
        S.stamp('ULANG KAJI BAB 2', { x: 140, y: 920, w: 800, at: 0, d: 2.8, fs: 60, style: 'text-align:center' });
        S.text('Kebangkitan Nasionalisme', { size: 'h3', x: 60, y: 1080, w: 960, align: 'center', at: 0, d: 3.8 });
      },
    },
    {
      id: 's1', transition: 'wipe',
      lines: [
        'Dua titik satu. Nasionalisme ialah perasaan cinta yang mendalam terhadap bangsa dan negara.',
        'Dua titik dua. Di Barat, idea ini lahir melalui Revolusi Keagungan 1688, Revolusi Amerika 1776, dan Revolusi Perancis 1789.',
      ],
      board: {
        name: 'Ringkasan 2.1 & 2.2',
        visual: 'Dua kad ringkasan bernombor bertindih seperti nota lekat; garis masa mini 1688–1776–1789.',
        doodle: 'Kad nota lekat, hati, ikon parlimen/peti teh/kubu.',
        text: '2.1 Nasionalisme = cinta yang mendalam terhadap bangsa & negara · 2.2 Barat: Revolusi Keagungan 1688 · Revolusi Amerika 1776 · Revolusi Perancis 1789',
        anim: 'Kad meluncur naik satu demi satu; ikon dilukis.',
      },
      draw(S, { D }) {
        sumCard(S, '2.1', 'Maksud Nasionalisme', 'Perasaan **cinta yang mendalam** terhadap bangsa & negara', 0, 0.2, 320, 'gold');
        S.add(D.heart(), { anim: 'pop', x: 880, y: 300, w: 120, at: 0, d: 1.2, sfx: false });
        sumCard(S, '2.2', 'Idea Nasionalisme di Barat', 'Revolusi Keagungan **1688** · Revolusi Amerika **1776** · Revolusi Perancis **1789**', 1, 0.2, 620, '');
        [D.parliament(), D.crate('TEH'), D.fortress()].forEach((svg, i) => S.svg(svg, { x: 120 + i * 300, y: 900, w: 220, at: 1, d: 2.6 + i * 1.2, sfx: i ? false : 'pencil' }));
      },
    },
    {
      id: 's2', transition: 'paper',
      lines: [
        'Dua titik tiga. Di Asia, ingat India, China, Empayar Uthmaniyah dan Mesir, serta Jepun.',
        'Dua titik empat. Di Asia Tenggara, ingat Filipina, Burma, Vietnam, Indonesia dan Thailand.',
      ],
      board: {
        name: 'Ringkasan 2.3 & 2.4',
        visual: 'Dua kad ringkasan dengan pil nama negara yang pop mengikut sebutan.',
        doodle: 'Pil berwarna, ikon torii & pagoda.',
        text: '2.3 Asia: India · China · Uthmaniyah & Mesir · Jepun · 2.4 Asia Tenggara: Filipina · Burma · Vietnam · Indonesia · Thailand',
        anim: 'Kad meluncur naik; pil negara pop satu demi satu.',
      },
      draw(S, { D }) {
        sumCard(S, '2.3', 'Nasionalisme di Asia', '', 0, 0, 320, 'navy');
        ['India', 'China', 'Uthmaniyah & Mesir', 'Jepun'].forEach((c, i) => S.add(`<span class="pill" style="font-size:32px">${c}</span>`, { anim: 'pop', x: 80 + (i % 2) * 360, y: 470 + Math.floor(i / 2) * 72, w: 340, at: 0, d: 2.0 + i * 0.7 }));
        S.svg(D.torii(), { x: 840, y: 470, w: 150, at: 0, d: 4.4 });
        sumCard(S, '2.4', 'Nasionalisme di Asia Tenggara', '', 1, 0, 680, 'gold');
        ['Filipina', 'Burma', 'Vietnam', 'Indonesia', 'Thailand'].forEach((c, i) => S.add(`<span class="pill" style="font-size:32px;background:#FFFDF7">${c}</span>`, { anim: 'pop', x: 80 + (i % 3) * 240, y: 830 + Math.floor(i / 3) * 72, w: 230, at: 1, d: 2.6 + i * 0.6 }));
        S.svg(D.pagoda(), { x: 840, y: 830, w: 150, at: 1, d: 5.0 });
      },
    },
    {
      id: 's3', transition: 'paper',
      lines: [
        'Dua titik lima. Kesedaran nasionalisme di negara kita bermula sejak zaman Melaka, diteruskan oleh pejuang tempatan, kemudian golongan agama, penulis dan intelektual.',
        'Dua titik enam. Enam faktor: agama, penulisan kreatif, media cetak, pendidikan, golongan intelektual, serta pengaruh luar dan serantau.',
      ],
      board: {
        name: 'Ringkasan 2.5 & 2.6',
        visual: 'Kad 2.5 dengan anak panah tiga tahap; kad 2.6 dengan enam huruf A-P-M-P-I-L.',
        doodle: 'Anak panah, bulatan huruf berwarna.',
        text: '2.5 Melaka ➜ pejuang tempatan ➜ golongan agama, penulis & intelektual · 2.6 Agama · Penulisan kreatif · Media cetak · Pendidikan · Intelektual · Luar & serantau',
        anim: 'Kad meluncur naik; huruf pop satu demi satu.',
      },
      draw(S) {
        sumCard(S, '2.5', 'Kesedaran Nasionalisme di Negara Kita', 'Melaka ➜ pejuang tempatan ➜ **golongan agama, penulis & intelektual**', 0, 0.2, 320, 'gold');
        sumCard(S, '2.6', 'Faktor Kemunculan Gerakan Nasionalisme', 'Agama · Penulisan kreatif · Media cetak · Pendidikan · Intelektual · Luar & serantau', 1, 0.2, 660, '');
        ['A', 'P', 'M', 'P', 'I', 'L'].forEach((c, i) => S.add(`<div style="width:110px;height:110px;border-radius:50%;background:${i % 2 ? '#172C63' : '#C93436'};border:5px solid #172C63;color:#F5C928;font-family:Marker;font-size:62px;display:flex;align-items:center;justify-content:center">${c}</div>`, { anim: 'pop', x: 130 + i * 140, y: 990, w: 110, at: 1, d: 2.4 + i * 0.8 }));
      },
    },
    {
      id: 's4', transition: 'paper',
      lines: [
        'Dua titik tujuh. Perjuangan melalui tiga golongan intelektual, penulisan, dan persatuan seperti KMS, PASPAM dan KMM.',
        'Dua titik lapan. Kesannya dirasai dalam politik, ekonomi dan sosial.',
      ],
      board: {
        name: 'Ringkasan 2.7 & 2.8',
        visual: 'Kad 2.7 dengan garis masa persatuan; kad 2.8 dengan tiga ikon aspek.',
        doodle: 'Garis masa mini, ikon parlimen/syiling/sekolah.',
        text: '2.7 Intelektual (agama · Inggeris · Melayu) · penulisan · persatuan: KMS 1926, PASPAM 1934, KMM 1938 · 2.8 Kesan: politik · ekonomi · sosial',
        anim: 'Kad meluncur naik; label tahun persatuan pop; ikon aspek dilukis.',
      },
      draw(S, { D }) {
        sumCard(S, '2.7', 'Perkembangan Nasionalisme', 'Intelektual (agama · Inggeris · Melayu) · penulisan · persatuan', 0, 0.2, 320, 'navy');
        [['KMS', '1926'], ['PASPAM', '1934'], ['KMM', '1938']].forEach(([n, y], i) => S.card(`<div class="t-h3" style="text-align:center;font-size:38px">${n}<br><span class="red">${y}</span></div>`, { anim: 'pop', x: 120 + i * 300, y: 560, w: 260, at: 0, d: 4.6 + i * 0.7, pad: '8px 6px', notape: true, color: i === 1 ? 'gold' : '' }));
        sumCard(S, '2.8', 'Kesan Perkembangan Nasionalisme', 'Politik · Ekonomi · Sosial', 1, 0.2, 780, 'gold');
        [D.parliament(), D.coins(), D.school('', RED)].forEach((svg, i) => S.svg(svg, { x: 150 + i * 290, y: 990, w: 200, at: 1, d: 1.6 + i * 0.6, sfx: i ? false : 'pencil' }));
      },
    },
    {
      id: 'katakunci', bg: 'grid', transition: 'flip', gap: 0.15,
      lines: [
        { text: 'Kata kunci dan tokoh yang wajib ingat:', pause: 0.2 },
        'John Locke, Bill of Rights, satyagraha, San Min Chu-i, Gerakan Islah, Bushido, Katipunan, Thakin, Sumpah Pemuda, Kaum Muda, KMM dan Melayu Raya.',
      ],
      board: {
        name: 'Kata kunci & tokoh penting',
        visual: 'Dinding nota lekat: dua belas kad kata kunci berwarna ditampal dengan pita.',
        doodle: 'Kad kertas kecil, pita kuning, bintang.',
        text: 'John Locke · Bill of Rights · satyagraha · San Min Chu-i · Gerakan Islah · Bushido · Katipunan · Thakin · Sumpah Pemuda · Kaum Muda · KMM · Melayu Raya',
        anim: 'Kad ditampal satu demi satu dengan sedikit putaran, serentak dengan sebutan.',
      },
      draw(S) {
        S.text('Kata Kunci <span class="hl">Wajib Ingat</span>', { size: 'h2', x: 60, y: 295, w: 960, at: 0, d: -0.3 });
        const kw = [['John Locke', 'raja berperlembagaan'], ['Bill of Rights', 'Revolusi Keagungan'], ['Satyagraha', 'Gandhi, India'], ['San Min Chu-i', 'Sun Yat Sen, China'], ['Gerakan Islah', 'al-Afghani & Abduh'], ['Bushido', 'Jepun'], ['Katipunan', 'Bonifacio, Filipina'], ['Thakin', '"tuan", Burma'], ['Sumpah Pemuda', 'Indonesia 1928'], ['Kaum Muda', 'golongan agama'], ['KMM', 'Ibrahim Haji Yaacob, 1938'], ['Melayu Raya', 'gagasan KMM']];
        kw.forEach(([k, s], i) => {
          const col = i % 2, row = Math.floor(i / 2);
          S.card(`<div class="t-h3" style="font-size:36px">${k}</div><div class="t-label red" style="font-size:30px">${s}</div>`, { color: i % 3 === 0 ? 'gold' : '', anim: 'pop', x: 60 + col * 490, y: 395 + row * 152, w: 470, at: 1 + 0.03 + i * 0.078, pad: '8px 18px', rot: (i % 3 - 1) * 1.4, sfx: i % 2 ? false : 'pop' });
        });
      },
    },
    {
      id: 'q1', bg: 'grid', transition: 'wipe',
      lines: [{ text: 'Kuiz pantas! Soalan satu: Siapakah yang mengemukakan Tiga Prinsip Rakyat, atau San Min Chu-i?', pause: 3.4 }, 'Jawapannya: B, Dr. Sun Yat Sen!'],
      board: { name: 'Kuiz 1', visual: 'Kad soalan kertas koyak; tiga pilihan jawapan; jam undur 3-2-1; tanda semak pada jawapan betul.', doodle: 'Bulatan kuning undur masa, tanda semak hijau, cop jawapan.', text: 'SOALAN 1/3 · A. Mahatma Gandhi · B. Dr. Sun Yat Sen · C. Jose Rizal · JAWAPAN: B', anim: 'Soalan meluncur naik; pilihan meluncur; undur 3-2-1 pop; jawapan dicop dengan bunyi ding.' },
      draw(S, { D }) { quiz(S, D, 1, 'Siapakah yang mengemukakan Tiga Prinsip Rakyat (San Min Chu-i)?', 'Dr. Sun Yat Sen', ['Mahatma Gandhi', 'Dr. Sun Yat Sen', 'Jose Rizal']); },
    },
    {
      id: 'q2', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan dua: Apakah tiga asas Sumpah Pemuda 1928?', pause: 3.4 }, 'Jawapannya: A, satu tanah air, satu bangsa, satu bahasa!'],
      board: { name: 'Kuiz 2', visual: 'Format kuiz yang sama untuk konsistensi.', doodle: 'Undur masa, tanda semak, cop jawapan.', text: 'SOALAN 2/3 · A. Satu tanah air, satu bangsa, satu bahasa · B. Kebebasan, persamaan, persaudaraan · C. Nasionalisme, demokrasi, kebajikan sosial · JAWAPAN: A', anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 2, 'Apakah tiga asas Sumpah Pemuda 1928?', 'Satu tanah air, satu bangsa, satu bahasa', ['Satu tanah air, satu bangsa, satu bahasa', 'Kebebasan, persamaan, persaudaraan', 'Nasionalisme, demokrasi, kebajikan sosial']); },
    },
    {
      id: 'q3', bg: 'grid', transition: 'paper',
      lines: [{ text: 'Soalan tiga: Siapakah pemimpin Kesatuan Melayu Muda, yang ditubuhkan pada tahun 1938?', pause: 3.4 }, 'Jawapannya: C, Ibrahim Haji Yaacob! Berapa markah anda?'],
      board: { name: 'Kuiz 3', visual: 'Format kuiz yang sama untuk konsistensi.', doodle: 'Undur masa, tanda semak, cop jawapan.', text: "SOALAN 3/3 · A. Mohd Eunos Abdullah · B. Za'ba · C. Ibrahim Haji Yaacob · JAWAPAN: C", anim: 'Seperti kuiz 1.' },
      draw(S, { D }) { quiz(S, D, 3, 'Siapakah pemimpin Kesatuan Melayu Muda (KMM) yang ditubuhkan pada 1938?', 'Ibrahim Haji Yaacob', ['Mohd Eunos Abdullah', "Za'ba", 'Ibrahim Haji Yaacob']); },
    },
    {
      id: 'penutup', transition: 'zoom',
      lines: [
        'Nak faham dengan lebih mendalam? Tonton semula Episod 1 hingga 9 siri Bab 2 ini.',
        'Jumpa lagi dalam **Bab 3: Konflik Dunia dan Pendudukan Jepun di Negara Kita**. Terima kasih kerana belajar bersama **Titik Sejarah**!',
      ],
      tail: 0.8,
      board: {
        name: 'Penutup siri – maskot rasmi & Bab 3',
        visual: 'Maskot rasmi Titik Sejarah besar di tengah; sembilan pil episod tersusun di bawah; kad "Seterusnya: Bab 3".',
        doodle: 'Pelekat maskot besar (imej asal), pil episod bernombor, bintang.',
        text: 'Tonton semula: EP1–EP9 · Seterusnya: Bab 3 – Konflik Dunia dan Pendudukan Jepun di Negara Kita · Terima kasih!',
        anim: 'Maskot zoom-in; pil episod pop satu persatu; kad Bab 3 pop; bintang berdenyut.',
      },
      draw(S, { D }) {
        S.mascot({ x: 330, y: 290, w: 420, at: 0, d: -0.3, anim: 'zoom', dur: 0.8 });
        const eps = ['EP1 Intro', 'EP2 · 2.1', 'EP3 · 2.2', 'EP4 · 2.3', 'EP5 · 2.4', 'EP6 · 2.5', 'EP7 · 2.6', 'EP8 · 2.7', 'EP9 · 2.8'];
        eps.forEach((e, i) => S.add(`<span class="pill" style="font-size:28px;background:${i % 2 ? '#FFFDF7' : '#F5C928'};white-space:nowrap">${e}</span>`, { anim: 'pop', x: 70 + (i % 3) * 320, y: 760 + Math.floor(i / 3) * 80, w: 300, at: 0, d: 1.6 + i * 0.25, sfx: i % 2 ? false : 'pop' }));
        S.card('<div class="t-label" style="color:#C93436">Seterusnya</div><div class="t-h3" style="font-size:40px">Bab 3: Konflik Dunia dan Pendudukan Jepun di Negara Kita</div>', { color: 'gold', anim: 'pop', x: 60, y: 1030, w: 820, at: 1, d: 0.4, rot: -1 });
        S.add(D.star(), { anim: 'pop', x: 890, y: 1050, w: 110, at: 1, d: 1.2, pulse: [{ at: 1, d: 1.8 }], sfx: false });
      },
    },
    endScene(),
  ],
};
