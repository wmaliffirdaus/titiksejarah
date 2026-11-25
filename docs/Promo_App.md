# Titik Sejarah – App promo video

**File:** `output/promo/TitikSejarah_Promo_App.mp4` (1080×1920, 30 fps, 75 s, H.264 + AAC) · subtitles: `output/promo/TitikSejarah_Promo_App.srt`
**Footage:** the user's own screen recording (Google Drive folder, `Screenrecorder-2026-11-25-17-43-15-525.mp4`). No stock or AI visuals.
**Voice:** ElevenLabs "Asyraf" (`NHFTLozDZneDWyQjRGAO`), `eleven_multilingual_v2`, stability 0.40, style 0.40, tempo 1.09. Replies are cached in `voice/eleven/`.
**Audio QC:** −14.1 LUFS integrated, −1.3 dBTP, voice starts at 0.07 s, original music (engine/audio.py) ≈ 26 dB under the voice.

## Rebuild
```
python3 promo/voice.py                                  # 0 credits while script.json text/settings are unchanged
node promo/build.mjs --src <path to screen recording>   # --stills 0,12.5 for design checks
```
Edit narration in `promo/script.json` (only changed lines cost credits), and the shots, headlines and badges in `promo/shots.mjs`.

## Structure (voiceover · on-screen headline · footage)
| # | Voiceover | Headline | Footage |
|---|---|---|---|
| 1 | Buku teks Sejarah tebal, SPM pula makin dekat. | Buku teks tebal? | Home |
| 2 | Sebab itu kami bina Titik Sejarah, app ulang kaji Sejarah untuk Tingkatan 4 dan 5. | Titik Sejarah | Splash + choosing Tingkatan |
| 3 | Setiap bab ada nota ringkas, disusun ikut buku teks KSSM, lengkap dengan jadual dan garis masa. | Nota ringkas | Nota → Bab 1 → 1.1 |
| 4 | Habis baca satu subtopik, terus uji diri. Lepas jawab, semak jawapan yang salah dan faham sebabnya. | Uji diri | Subtopic quiz + "Kurang tepat" explanation |
| 5 | Tokoh dan istilah yang susah nak ingat? Hafal dengan kad imbas, sampai semuanya dikuasai. | Hafal tokoh & istilah | Kad imbas |
| 6 | Semua tarikh penting ada dalam garis masa, dan istilah boleh terus dicari dalam glosari. | Semua tarikh penting / Cari istilah & tokoh | Garis masa, Glosari search |
| 7 | Bila dah bersedia, cuba Kertas 1 format penuh: 40 soalan, satu jam, macam peperiksaan sebenar. | Kertas 1 format penuh | Latihan → rules → timed questions |
| 8 | Untuk Kertas 2, latih soalan struktur dan esei, kemudian semak sendiri dengan skema jawapan. | Kertas 2 | Struktur question → marking scheme → 10/10 |
| 9 | Kemajuan pun direkod, jadi kita tahu bab mana yang masih lemah. | Tahu bab yang lemah | Kemajuan |
| 10 | Buat masa ini, Titik Sejarah hanya untuk pengguna Android. iOS belum disokong lagi. | Android sahaja (+ badges) | Profil → Aplikasi (APK) |
| 11 | App ni belum diterbitkan secara rasmi. Masih dalam fasa ujian, tapi dah boleh digunakan. | Fasa ujian (+ badges) | Profil → Versi 1.4.0 |
| 12 | Kami akan terus baiki, kemas kini dan tambah baik app ni dari semasa ke semasa. | Sentiasa ditambah baik | Home |
| 13 | Berminat nak cuba? PM saya untuk dapatkan akses. | Closing card: official DP, TITIK SEJARAH, tagline, "PM untuk dapatkan akses" | – |

## Caption (TikTok / Reels)
> Ulang kaji Sejarah SPM terus dari telefon 📱 Nota ringkas ikut buku teks KSSM, kuiz setiap subtopik, kad imbas, garis masa, glosari, Kertas 1 & Kertas 2 format penuh.
>
> ⚠️ Android sahaja buat masa ini (iOS belum disokong). App masih dalam fasa ujian dan belum diterbitkan secara rasmi, tapi dah boleh digunakan. Kami akan terus kemas kini dari semasa ke semasa.
>
> Nak cuba? PM untuk dapatkan akses 📩
>
> #TitikSejarah #SejarahSPM #SPM2026 #Tingkatan4 #Tingkatan5 #KSSM #UlangKaji #BelajarDiTikTok

Tip: upload the SRT as captions on Instagram/YouTube. On TikTok the subtitles are already burned in, so leave auto-captions off.
