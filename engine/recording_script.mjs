#!/usr/bin/env node
// Writes docs/Skrip_Rakaman_Suara.md – a voice-actor recording script for all six episodes:
// line codes (= recording file names), current on-screen timing, emphasis and pause cues.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// usage: node engine/recording_script.mjs [--bab 2]
const bi = process.argv.indexOf('--bab');
const BAB = bi > 0 ? process.argv[bi + 1] : '1';
const EPDIR = BAB === '1' ? path.join(ROOT, 'episodes') : path.join(ROOT, 'episodes', `bab${BAB}`);
const BUILDDIR = BAB === '1' ? path.join(ROOT, 'build') : path.join(ROOT, 'build', `bab${BAB}`);
const DOCS = BAB === '1' ? path.join(ROOT, 'docs') : path.join(ROOT, 'docs', `bab${BAB}`);
const IDS = BAB === '1' ? ['01', '02', '03', '04', '05', '06'] : fs.readdirSync(EPDIR).filter((f) => /^ep\d\d\.js$/.test(f)).map((f) => f.slice(2, 4)).sort();
const PFX = BAB === '1' ? '' : `B${BAB}-`;
const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const fmt = (s) => s.replace(/~~/g, '');

let md = `# 🎙️ Skrip Rakaman Suara – Titik Sejarah · Bab 1: Warisan Negara Bangsa

> Skrip ini sama dengan narasi dalam 6 video yang sudah siap. Setiap baris ada **kod** (contoh \`02-06-2\`). Kod itu ialah **nama fail rakaman**.
> Selepas anda merakam, video akan diselaraskan semula secara automatik mengikut rentak suara anda (animasi, kapsyen & sari kata).

## Cara merakam (ringkas)

| | Panduan |
|---|---|
| 🎧 Alat | Telefon pun cukup (app *Voice Recorder* / *Rakaman Suara*). Mikrofon USB atau klip lebih baik jika ada. |
| 🏠 Tempat | Bilik senyap, banyak kain/langsir/tilam (kurangkan gema). Matikan kipas & aircond sekejap semasa rakam. |
| 📏 Jarak | 15–20 cm dari mulut, sedikit ke tepi (elak bunyi "p" dan "b" meletup). Kekalkan jarak yang sama untuk semua baris. |
| 🗂️ Fail | **Satu baris = satu fail.** Namakan fail ikut kod, contoh \`02-06-2.m4a\`. Format apa-apa: m4a, mp3, wav. |
| ⏸️ Senyap | Biar ~1 saat senyap sebelum dan selepas bercakap. Sistem akan potong sendiri. |
| 🔁 Silap? | Rakam semula baris itu sahaja, guna nama fail yang sama. |
| 📤 Hantar | Masukkan semua fail ke dalam satu ZIP dan lampirkan di chat. Atau letak dalam folder \`recordings/ep01\` … \`recordings/ep06\` dalam repo. |

## Gaya penyampaian – "cikgu yang mesra"

- **Senyum semasa bercakap.** Senyuman memang kedengaran dalam suara: lebih mesra dan bertenaga.
- Bayangkan anda sedang menerangkan kepada **seorang pelajar** di depan anda, bukan membaca berita.
- Perkataan **tebal** = kata kunci. Tekankan sedikit (lebih jelas dan perlahan), jangan menjerit.
- **Soalan** (tanda ?): naikkan nada di hujung untuk soalan ya/tidak. Soalan *apa / kenapa / siapa* pula bermula tinggi dan turun di hujung.
- ↪️ = ayat dipecah kepada dua fail: akhiri baris pertama dengan nada "belum habis", mulakan baris kedua seperti menyambung.
- **Koma** = jeda pendek. **Noktah** = jeda biasa. ⏸️ = jeda lebih panjang (ikut arahan).
- Rentak **selesa**: ⏱ ialah tempoh baris dalam video sekarang. Tak perlu tepat; sasarkan lebih kurang sama (±30%). Video akan menyesuaikan diri.
- Rakam setiap episod dalam **satu sesi** supaya nada & tenaga suara konsisten. Minum air suam, elak minuman sejuk/manis sebelum rakam.

## Panduan sebutan

| Ditulis | Sebut |
|---|---|
| Westphalia | *Wést-fa-li-a* |
| Oc Eo | *Ok É-o* |
| My Son (candi Champa) | *Mi Son* |
| Srivijaya | *Sri-wi-ja-ya* |
| Jayavarman II / Suryavarman II | *Jaya-war-man Kedua* / *Surya-war-man Kedua* |
| Fan Shih Man | *Fan Syi Man* |
| I-Ching | *I-Cing* |
| Negarakertagama | *Ne-ga-ra-ker-ta-ga-ma* |
| baray | *ba-rai* |
| Ryukyu | *Riu-kiu* |
| Temenggung · Kedah · Demang | e-pepet: *tə-məng-gung · kə-dah · də-mang* |
| tentera · Perak · Selat · boleh | e-taling: *tén-te-ra · Pé-rak · Sé-lat · bo-léh* |
| 683 M · 192 M | *enam ratus lapan puluh tiga Masihi* · *seratus sembilan puluh dua Masihi* |
| 1.1 · 1.2 … | *satu titik satu* · *satu titik dua* … |
| abad ke-15 | *abad kelima belas* |
| SPM | *és-pi-ém* |

`;

let totalLines = 0;
if (BAB === '2') {
  md = md.replace(/Bab 1: Warisan Negara Bangsa/g, 'Bab 2: Kebangkitan Nasionalisme').replace('dalam 6 video', 'dalam 10 video').replace(/\`02-06-2\`/g, '`B2-02-06-2`').replace(/\`02-06-2\.m4a\`/g, '`B2-02-06-2.m4a`')
    .replace(/recordings\/ep01\` … \`recordings\/ep06/g, 'recordings/bab2/ep01` … `recordings/bab2/ep10');
  md = md.slice(0, md.indexOf('| Ditulis | Sebut |')) + `| Ditulis | Sebut |
|---|---|
| Louis XVI · James II · Mary II | *Lui Keenam Belas · James Kedua · Mary Kedua* |
| Rousseau · Voltaire · Bastille | *Ru-so · Vol-tér · Bas-til* |
| Bill of Rights · Two Treatises of Government | sebutan Inggeris biasa |
| satyagraha | *sat-ya-gra-ha* |
| San Min Chu-i | *San Min Cu-i* |
| al-Urwah al-Wuthqa | *al-Ur-wa-tul Wus-qa* |
| Mikado Meiji · Bushido | *Mi-ka-do Mé-ji · Bu-syi-do* |
| Jose Rizal · Katipunan · Kalayan | *Ho-sé Ri-zal · Ka-ti-pu-nan · Ka-la-yan* |
| Thakin · Do Bama Asiayone · Saya San | *Ta-kin · Do Ba-ma A-sia-yon · Sa-ya San* |
| Nguyen Thai Hoc · Ho Chi Minh | *Ngu-yen Tai Hok · Ho Ci Min* |
| Tribune Indigène · La Cloche Fêlée | *Tri-biun In-di-jén · La Klosy Fé-lé* |
| Soekarno · Phibulsongkram · Pridi Phanomyong | *Su-kar-no · Pi-bul-song-kram · Pri-di Pa-nom-yong* |
| KMS · KMM · PASPAM · SITC · MCKK | *Ka-Em-Es · Ka-Em-Em · Pas-pam · Es-Ai-Ti-Si · Em-Si-Ka-Ka* |
| 1688 · 1926 | *seribu enam ratus lapan puluh lapan · seribu sembilan ratus dua puluh enam* |
| 2.1 · 2.2 … | *dua titik satu* · *dua titik dua* … |

`;
}
for (const id of IDS) {
  const ep = (await import(pathToFileURL(path.join(EPDIR, `ep${id}.js`)).href)).default;
  const tlf = path.join(BUILDDIR, `ep${id}`, 'timeline.json');
  const tl = fs.existsSync(tlf) ? JSON.parse(fs.readFileSync(tlf, 'utf8')) : null;
  const nLines = ep.scenes.reduce((a, s) => a + (s.lines || []).length, 0);
  totalLines += nLines;
  md += `\n---\n\n# Episod ${id} – ${ep.title}\n\n`;
  md += `📁 Simpan fail dalam: \`recordings/ep${id}/\` · ${nLines} baris${tl ? ` · tempoh video sekarang ${mmss(tl.duration)}` : ''}\n\n`;
  ep.scenes.forEach((s, si) => {
    const lines = (s.lines || []).map((l) => (typeof l === 'string' ? { text: l } : l));
    const st = tl?.scenes[si];
    const head = `### Adegan ${si + 1} – ${s.board?.name || s.id}${st ? ` · ${mmss(st.start)}–${mmss(st.end)}` : ''}`;
    if (!lines.length) {
      md += `${head}\n\n*(Tiada narasi – penutup jenama dengan muzik.)*\n\n`;
      return;
    }
    md += `${head}\n\n`;
    if (s.board?.visual) md += `🎬 *Di skrin:* ${s.board.visual}\n\n`;
    lines.forEach((l, li) => {
      const code = `${PFX}${id}-${String(si + 1).padStart(2, '0')}-${li + 1}`;
      const dur = st ? st.lineEnds[li] - st.lineStarts[li] : null;
      md += `**\`${code}\`**${dur ? ` · ⏱ ~${Math.max(1, Math.round(dur))} s` : ''}\n> ${fmt(l.text)}\n`;
      if (/,$/.test(l.text.trim()) && li + 1 < lines.length) md += `\n↪️ *Ayat bersambung ke baris seterusnya: akhiri dengan nada sedikit naik (belum habis).*\n`;
      if ((l.pause ?? 0) >= 3) md += `\n⏸️ *Selepas baris ini: diam ±3 saat (jam undur 3-2-1 di skrin). Rakam baris jawapan dalam fail berasingan.*\n`;
      else if ((l.pause ?? 0) >= 0.45) md += `\n⏸️ *Jeda sekejap sebelum baris seterusnya.*\n`;
      md += '\n';
    });
  });
}

md += `\n---\n\n## Senarai semak sebelum hantar\n\n- [ ] Semua ${totalLines} fail dinamakan ikut kod (cth. \`04-05-3.m4a\`)\n- [ ] Tiada bunyi latar yang kuat (kipas, kenderaan, gema)\n- [ ] Jarak mikrofon & kelantangan konsisten\n- [ ] Kata kunci **tebal** ditekankan\n- [ ] Dengar semula 2–3 fail secara rawak sebelum hantar\n`;
fs.mkdirSync(DOCS, { recursive: true });
fs.writeFileSync(path.join(DOCS, 'Skrip_Rakaman_Suara.md'), md);
console.log(`lines: ${totalLines}`);
