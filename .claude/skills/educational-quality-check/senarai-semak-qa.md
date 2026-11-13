# Senarai Semak QA Mengikut Jenis Kandungan

Tanda ✔ / ✘ / NA. Sebarang ✘ pada item bertanda **(K)** = isu Kritikal; **(M)** = Major; lain-lain = Minor.

## 1. Semua jenis kandungan

- [ ] **(K)** Setiap tarikh, nama, gelaran, angka, tempat dan petikan wujud dalam log fakta dengan status dibenarkan.
- [ ] **(K)** Tiada petikan dalam tanda petik tanpa sumber perkataan tepat.
- [ ] **(K)** Tafsiran diungkap sebagai tafsiran; dramatisasi jelas dan tidak menambah fakta.
- [ ] **(M)** Istilah dan tajuk bab/subtopik ikut buku teks (`references/syllabus/peta-kurikulum-t4-t5.md`).
- [ ] **(M)** Sauh KSSM (Tingkatan, Bab, subtopik) dinyatakan.
- [ ] Ejaan DBP; tiada bentuk Bahasa Indonesia; tiada ungkapan larangan (`gaya-bahasa.md`).
- [ ] **(K)** Isu sensitif (kaum, agama, Raja, keganasan) ditangani mengikut peraturan.
- [ ] Iktibar khusus kepada topik, berasaskan Elemen Kewarganegaraan bab.

## 2. Video dokumentari / pendek

- [ ] **(M)** Semua fail peringkat wujud (lihat `references/workflows/video-dokumentari.md`).
- [ ] **(M)** Semakan fakta mod skrip dibuat selepas versi skrip terakhir.
- [ ] Hook dalam had masa format; penutup menjawab hook.
- [ ] **(K)** Setiap foto sejarah mempunyai kapsyen sahih dan status hak yang membenarkan penerbitan.
- [ ] **(K)** Tiada foto digunakan untuk peristiwa yang salah; tiada imej AI sebagai foto sejarah.
- [ ] **(M)** Ilustrasi dilabel "Ilustrasi".
- [ ] **(M)** Sari kata meliputi 100% narasi dan sepadan dengan naskhah VO muktamad.
- [ ] **(M)** Teks skrin (tarikh, nama) sepadan dengan log fakta.
- [ ] Semakan audio selesai (sebutan, tempo, artifak, kenyaringan).
- [ ] Muzik tidak menenggelamkan narasi; mood sesuai dengan topik.
- [ ] **(M)** `python3 engine/qc.py` LULUS (1080×1920, 30 fps, −14 ±1.5 LUFS, ≤ −1 dBTP, nyahkod penuh, SRT ada).
- [ ] **(M)** Tempoh episod 35–60 s; bingkai pertama lengkap dengan hook; suara bermula ≈ 0.2 s; tiada salam/intro saluran sebelum hook.
- [ ] **(M)** Kad penutup: gambar profil rasmi **tanpa diubah**, "TITIK SEJARAH", tagline, "Follow untuk lebih banyak ilmu sejarah.", soalan penutup disuarakan.
- [ ] **(M)** `lines` dalam `episodes/ep<id>.js` sama perkataan demi perkataan dengan skrip yang diluluskan.
- [ ] **(K)** Tajuk, kapsyen, thumbnail tiada dakwaan di luar log; tiada clickbait palsu.
- [ ] Pengakuan sumber dalam penerangan/kad akhir.

## 3. Nota PDF

- [ ] **(M)** Semua subtopik bab ada, mengikut susunan buku teks.
- [ ] **(M)** Bahagian A–G lengkap (Tajuk, Pengenalan, Nota Subtopik, Kata Kunci, Tarikh & Tokoh, Rumusan, Fokus Ulang Kaji SPM).
- [ ] **(K)** "Fokus Ulang Kaji SPM" tidak meramal soalan peperiksaan.
- [ ] **(M)** `scripts/check_pdf.py` lulus (fon dibenam bukan Type 3, lapisan teks boleh dicari, tiada aksara peribadi).
- [ ] Tiada teks terpotong, tajuk tergantung di hujung halaman atau jadual terputus tanpa pengepala.
- [ ] Nombor halaman dan Kandungan betul.

## 4. Set soalan SPM

- [ ] **(K)** Penafian "Soalan latihan asli TitikSejarah. Bukan soalan peperiksaan sebenar." pada kulit dan pengaki.
- [ ] **(K)** Setiap item objektif ada tepat satu jawapan yang boleh dipertahankan.
- [ ] **(K)** Jawapan skema terdapat dalam buku teks (rujukan halaman).
- [ ] **(M)** Struktur kertas sepadan dengan `format-spm-sejarah-1249.md`; jika status format "BELUM DISAHKAN", penafian format dipaparkan.
- [ ] **(M)** Jumlah markah betul bagi setiap soalan, bahagian dan kertas.
- [ ] **(M)** Taburan aras ikut JSU; item KBAT benar-benar menuntut penaakulan.
- [ ] **(M)** Kata tugas sepadan dengan jenis markah.
- [ ] **(M)** Skema Kertas 2 menyenaraikan lebih banyak isi diterima daripada markah maksimum.
- [ ] Taburan kunci A/B/C/D seimbang; tiada > 3 huruf sama berturut-turut.
- [ ] **(K)** Item luar sukatan dilabel dan diasingkan.
- [ ] **(M)** Salinan murid tidak mengandungi skema atau metadata tersembunyi.
- [ ] **(K)** Tiada teks soalan disalin daripada kertas sebenar atau buku komersial.
