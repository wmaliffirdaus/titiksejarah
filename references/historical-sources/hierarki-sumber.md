# Hierarki Sumber dan Label Status Fakta

Canonical source standard for TitikSejarah. `historical-fact-check` applies it; every other skill and agent cites this file instead of restating it.

## 1. Hierarki sumber (paling diutamakan → paling rendah)

| Tahap | Sumber | Contoh | Kegunaan |
|---|---|---|---|
| 1 | **Buku teks rasmi KSSM** | Sejarah Tingkatan 4 (KPM/DBP 2019, ISBN 978-983-49-2517-8); Tingkatan 5 (KPM/DBP 2020, ISBN 978-983-49-2870-4) | Penentu muktamad untuk fakta, istilah, ejaan dan skop kandungan pendidikan |
| 2 | **Dokumen KPM / Lembaga Peperiksaan** | DSKP Sejarah KSSM, Format Pentaksiran SPM 1249, buku panduan guru | Skop sukatan, standard pembelajaran, format peperiksaan |
| 3 | **Arkib Negara Malaysia (ANM)** | Dokumen asal, foto arkib, Memorial/Galeri ANM, terbitan rasmi ANM | Tarikh tepat, petikan, foto, dokumen primer |
| 4 | **Dokumen rasmi sejarah** | Teks Perlembagaan Persekutuan, Perjanjian Malaysia 1963, Penyata Dewan Rakyat (Hansard), Warta Kerajaan, laporan suruhanjaya (Reid, Cobbold) | Petikan undang-undang/perjanjian, ucapan rasmi |
| 5 | **Penerbitan akademik dan rujukan berwibawa** | Jurnal (JMBRAS, Sejarah, Malaysia in History), buku penerbit universiti (UM, UKM, NUS Press, DBP), ensiklopedia berwibawa | Konteks, tafsiran, perincian di luar buku teks |
| 6 | Arkib luar negara | The National Archives (UK), National Archives of Singapore, Imperial War Museum | Dokumen kolonial, foto zaman British/perang |

**Tidak boleh digunakan sebagai sumber fakta:** blog, video YouTube/TikTok, Wikipedia (boleh untuk *mencari* sumber primer yang dipetik di dalamnya, bukan sebagai bukti), forum, kandungan AI, buku rujukan komersial (boleh dijadikan rujukan gaya sahaja), hantaran media sosial.

### Peraturan konflik

1. Kandungan **pendidikan** (nota, soalan SPM, skrip berlabel KSSM): ikut **buku teks** walaupun sumber lain berbeza. Catat percanggahan dalam log fakta, bukan dalam naskhah murid.
2. Kandungan **dokumentari umum**: boleh menyebut sumber akademik yang lebih terperinci, tetapi jika bercanggah dengan buku teks, nyatakan kedua-duanya secara neutral ("Buku teks KSSM menyatakan…; sesetengah sejarawan berpendapat…") atau pilih versi buku teks.
3. Dua sumber tahap sama bercanggah → status `PERLU SEMAKAN`, jangan pilih secara rawak.

## 2. Label status fakta (wajib dalam log fakta)

| Label | Maksud | Boleh digunakan dalam output? |
|---|---|---|
| `DISAHKAN` | Disokong oleh sekurang-kurangnya satu sumber tahap 1–4 dengan rujukan tepat (halaman/nombor dokumen) | Ya |
| `DISAHKAN-SEKUNDER` | Disokong oleh sumber tahap 5–6 sahaja, tidak bercanggah dengan buku teks | Ya, tetapi bukan dalam soalan SPM; nyatakan sumber dalam nota pengeluaran |
| `TAFSIRAN` | Analisis, sebab-akibat atau penilaian (bukan fakta mentah) | Ya, mesti diungkap sebagai tafsiran ("Hal ini menunjukkan…", "Sejarawan melihat…") |
| `DRAMATISASI` | Rekaan kreatif untuk penceritaan (suasana, emosi, monolog) | Ya dalam dokumentari sahaja, mesti jelas bukan fakta dan tidak menyentuh tarikh/tokoh/petikan |
| `PERLU SEMAKAN` | Belum ditemui sumber, atau sumber bercanggah | **Tidak.** Buang, atau minta pengesahan manusia |
| `DITOLAK` | Bertentangan dengan sumber berwibawa | Tidak |

## 3. Perkara yang TIDAK BOLEH direka dalam apa jua keadaan

- Tarikh, tahun, tempoh.
- Nama tokoh, gelaran, jawatan.
- Nama perjanjian, akta, laporan, organisasi.
- Petikan kata-kata (*quotation*) — termasuk "parafrasa dalam tanda petik".
- Lokasi peristiwa.
- Angka (bilangan korban, kerusi, peratus, wang).
- Foto sejarah, kapsyen foto, dan dakwaan "foto ini menunjukkan…".

Jika kreativiti memerlukan unsur di atas, ia mesti datang daripada sumber berstatus `DISAHKAN`. Dramatisasi hanya boleh menambah **suasana dan emosi**, bukan fakta baharu.

## 4. Format rujukan

- Buku teks: `BT T4 hlm. 182` / `BT T5 hlm. 103` (halaman bercetak, bukan halaman flipbook).
- ANM: `ANM, <nombor rujukan/tajuk koleksi>, <tarikh akses>`.
- Dokumen: `Perjanjian Malaysia 1963, Perkara IV` / `Penyata Rasmi Dewan Rakyat, 9 Ogos 1965`.
- Akademik: `Pengarang (Tahun), Tajuk, Penerbit, hlm.`.
- URL: sentiasa sertakan tarikh akses.

## 5. Akses sumber dalam projek ini

- Buku teks: lihat `references/textbooks/README.md` (flipbook + saluran OCR sedia ada).
- Nota bab yang telah disemak terhadap buku teks: `../digitalproducts/sejarah-spm/content/t4|t5/babNN.html` — sumber pantas yang sah untuk fakta buku teks, tetapi rujuk halaman buku teks untuk petikan.
- Isu sumber yang telah dikenal pasti (percanggahan, ejaan): `../digitalproducts/sejarah-spm/CHECKLIST.md`, bahagian "Isu".
