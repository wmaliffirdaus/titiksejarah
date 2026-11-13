# Format Peperiksaan SPM Sejarah (1249) — Rujukan Kerja

> **STATUS: BELUM DISAHKAN.** This file was written without access to the official Lembaga Peperiksaan (LP) documents: the build session could not reach lp.moe.gov.my. Values marked ⚠ are working assumptions. Before publishing any question bank, the `spm-examiner` agent must confirm every ⚠ item against the latest official *Format Pentaksiran SPM Sejarah* (LP/KPM) and update this file with the document title, year and URL. Until then, every published set carries the label "Format mengikut rujukan kerja TitikSejarah — sila semak format rasmi terkini".

## Konfigurasi format (edit di sini sahaja)

All question-generation work reads these values. When the official format changes, update this table only. Do not hard-code values in skills or agents.

| Kod | Perkara | Nilai kerja | Status |
|---|---|---|---|
| K1.kod | Kod kertas | 1249/1 | ✔ (kod mata pelajaran 1249 lazim digunakan) |
| K1.jenis | Jenis soalan | Objektif aneka pilihan (A, B, C, D) | ⚠ |
| K1.bil | Bilangan soalan | 40 | ⚠ |
| K1.markah | Jumlah markah | 40 (1 markah setiap soalan) | ⚠ |
| K1.masa | Tempoh | 1 jam | ⚠ |
| K1.bentuk | Bentuk item | Item tunggal, item gabungan (I, II, III, IV), item berasaskan rangsangan (petikan, gambar, jadual, rajah) | ⚠ |
| K2.kod | Kod kertas | 1249/2 | ✔ |
| K2.masa | Tempoh | 2 jam 30 minit | ⚠ |
| K2.markah | Jumlah markah | 100 | ⚠ |
| K2.A | Bahagian A | Soalan struktur berasaskan sumber/rangsangan, semua wajib dijawab | ⚠ bilangan soalan dan markah setiap soalan belum disahkan |
| K2.B | Bahagian B | Soalan esei; calon menjawab sebahagian daripada soalan yang diberi | ⚠ bilangan soalan, pilihan dan markah belum disahkan |
| PBS | Pentaksiran berasaskan sekolah | Tidak diliputi oleh fail ini | ⚠ |

The question generator must read K2.A and K2.B from this table. If they are still ⚠, it asks the user to confirm the section structure, or uses a structure the user supplies, and labels the set accordingly.

## Konstruk dan aras soalan (prinsip — stabil merentas format)

| Aras | Kata tugas lazim | Contoh |
|---|---|---|
| Pengetahuan (fakta) | Nyatakan, Namakan, Senaraikan, Apakah, Bilakah, Siapakah | "Nyatakan dua syarat yang dikenakan oleh British…" |
| Kefahaman | Jelaskan, Terangkan, Huraikan, Mengapakah, Bagaimanakah | "Jelaskan dua sebab Malayan Union ditentang…" |
| Aplikasi | Berikan contoh, Kaitkan, Bandingkan, Bezakan | "Bandingkan sistem Ahli dengan sistem Residen…" |
| KBAT (analisis/penilaian/mencipta) | Pada pendapat anda, Wajarkan, Nilaikan, Cadangkan, Rumuskan, Sejauh manakah, Bincangkan | "Pada pendapat anda, mengapakah perpaduan kaum penting dalam usaha mencapai kemerdekaan? Berikan alasan." |

Unsur yang perlu ada dalam setiap set (prinsip KSSM, semak nisbah rasmi):
- Soalan berasaskan **sumber/rangsangan** (petikan, foto, jadual, peta, garis masa).
- Soalan **KBAT** dengan jawapan terbuka yang dinilai berdasarkan hujah.
- **Elemen Kewarganegaraan dan Nilai Sivik** (iktibar, nilai, patriotisme) — selari dengan bahagian "Elemen Kewarganegaraan dan Nilai Sivik" dalam setiap bab buku teks.
- **Kemahiran Pemikiran Sejarah (KPS):** memahami kronologi, meneroka bukti, membuat interpretasi, membuat imaginasi, membuat rasionalisasi — disenaraikan pada halaman pembuka setiap bab buku teks.

## Prinsip skema pemarkahan (gaya lazim KSSM)

- Soalan fakta: **1 markah setiap fakta tepat**, had mengikut markah soalan.
- Soalan huraian: fakta (F) + huraian (H) — contoh "F1 + H1 = 2 markah". ⚠ Sahkan konvensyen F/H dengan skema rasmi.
- Soalan KBAT/pendapat: markah berdasarkan **aras jawapan** (contoh: Aras 1 — pernyataan umum; Aras 2 — hujah dengan contoh; Aras 3 — hujah matang, contoh dan kesimpulan). ⚠ Sahkan bilangan aras dan julat markah.
- Skema mesti menyenaraikan **lebih banyak jawapan diterima** daripada markah maksimum (contoh: soalan 4 markah → 6–8 fakta diterima), serta "mana-mana jawapan munasabah" untuk soalan pendapat.

## Larangan

- Jangan dakwa set janaan ialah soalan SPM sebenar, soalan "ramalan" atau "bocoran".
- Jangan salin soalan tahun lepas SPM atau buku rujukan komersial. Gaya boleh dicontohi; teks soalan mesti asli.
- Soalan di luar sukatan mesti dilabel `[LUAR SUKATAN — PENGAYAAN]`.
