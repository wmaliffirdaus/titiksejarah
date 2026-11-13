# Buku Teks KSSM — Akses dan Penggunaan

> Semua laluan fail ditulis relatif kepada akar repositori `titiksejarah`. Projek nota bab berada dalam repositori berasingan `wmaliffirdaus/digitalproducts`; klon di sebelah repositori ini supaya laluan `../digitalproducts/sejarah-spm/` wujud.

The textbooks are the top-priority source (see `references/historical-sources/hierarki-sumber.md`). They are **not stored in this repository** (copyright, and they exist only as page images).

## Lokasi

| Buku | Lokasi asal | Halaman |
|---|---|---|
| Sejarah KSSM Tingkatan 4 (KPM/DBP 2019) | Google Drive folder "Digital Products" → fail teks berisi pautan FlipHTML5 `online.fliphtml5.com/faksy/uqki` | 264 imej; halaman flipbook = halaman buku + 8 |
| Sejarah KSSM Tingkatan 5 (KPM/DBP 2020) | Google Drive "Digital Products" → pautan FlipHTML5 `online.fliphtml5.com/llasu/dxpb` | 268 imej; halaman flipbook = halaman buku + 10 |

Imej halaman: `https://online.fliphtml5.com/<id>/files/large/<halaman-flipbook>.webp`.

## Mengekstrak teks

Saluran sedia ada (projek nota): `../digitalproducts/sejarah-spm/scripts/source/fetch_and_ocr.sh` — muat turun imej dan OCR (Tesseract `msa+eng`, besarkan 2× dahulu). Keperluan: rangkaian dibenarkan ke `online.fliphtml5.com`, pakej `tesseract-ocr tesseract-ocr-msa webp imagemagick`.

Simpan output OCR di luar repositori (contoh: direktori scratch). Jangan commit teks atau imej buku teks.

## Peraturan membaca

1. OCR merosakkan jadual, garis masa, rajah dan kotak sisi. **Semak setiap petikan, tarikh dan angka terhadap imej halaman** sebelum memberi status `DISAHKAN`.
2. Rujuk halaman bercetak buku (contoh `BT T5 hlm. 98`), bukan nombor flipbook.
3. Kapsyen foto buku teks menyatakan sumber foto (biasanya Arkib Negara Malaysia) — gunakan ini untuk menjejak foto asal, jangan ambil imej buku teks secara langsung untuk video.
4. Isu yang telah ditemui semasa projek nota (ejaan berbeza, percanggahan dalaman buku teks) direkod dalam `../digitalproducts/sejarah-spm/CHECKLIST.md` bahagian "Isu". Semak di situ sebelum menyelidik semula.

## Jalan pintas

Nota setiap bab yang telah ditulis dan disemak terhadap buku teks: `../digitalproducts/sejarah-spm/content/t4/babNN.html`, `../digitalproducts/sejarah-spm/content/t5/babNN.html`. Gunakan untuk orientasi pantas dan cari halaman buku teks yang berkaitan; untuk petikan dan angka kritikal, sahkan semula pada imej halaman.
