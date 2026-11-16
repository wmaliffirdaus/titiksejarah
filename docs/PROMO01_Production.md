# PROMO 01 – Bahan Ulang Kaji Sejarah SPM (Titik Sejarah)

**File:** `output/PROMO01_Bahan_Ulang_Kaji_Sejarah_SPM.mp4` · 1080×1920 (9:16) · 30 fps · 44.2 s · −14.8 LUFS / −1.3 dBTP
**Platforms:** TikTok, Instagram Reels, Facebook Reels · **Version:** v2, Asyraf voiceover + word captions + music + SFX (v1 was music-only)
**Source:** `episodes/eppromo.js` · storyboard: `docs/storyboard/EPpromo_storyboard.md`
**Visuals:** the user's own product posters (`assets/promo/posters/`, cropped from `assets/promo/source/product-posters-grid.png`) and the brand DP, unaltered.

## Build
```bash
TS_TTS=silent node engine/build.mjs promo     # now: no voice, timing follows the estimated length of the voiceover script
TS_TTS=eleven node engine/build.mjs promo     # later: Asyraf voiceover; every scene re-times to the real voice and word captions are added
```
The ElevenLabs version uses about **480 characters** (all 13 lines below).

## Scene plan and voiceover script (for later)

| # | Time (v1) | On screen | Voiceover (Asyraf, BM) |
|---|---|---|---|
| 1 | 0:00–0:04 | **Hook.** SPM SEJARAH DAH DEKAT… TAPI NOTA MASIH **BERSEPAH?** and scattered note scraps (complete from frame 1) | SPM Sejarah dah dekat… tapi nota masih bersepah? |
| 2 | 0:04–0:10 | Yellow marker wipe "clears up the mess". DP, TITIK SEJARAH, tagline, BAHAN ULANG KAJI DIGITAL · Sejarah SPM · KSSM Tingkatan 4 & 5, plus NOTA / BANK SOALAN / PETA MINDA pills | Kenalkan, Titik Sejarah. Bahan ulang kaji Sejarah SPM, Tingkatan 4 dan 5. |
| 3 | 0:10–0:14 | NOTA SEJARAH, Nota T4 + T5 posters, "10 BAB setiap tingkatan · Fail PDF" | Nota Tingkatan 4 dan 5, 10 bab setiap satu. |
| 4 | 0:14–0:18 | BANK SOALAN, KERTAS 1 + KERTAS 2, four posters, **+ SKEMA CADANGAN** stamp, "Tingkatan 4 · Format Penuh (T4 + T5)" | Bank soalan Kertas 1 dan 2, siap skema cadangan. |
| 5 | 0:18–0:21 | PETA MINDA + INFOGRAFIK, T4 + T5 posters | Peta minda dan infografik untuk ulang kaji ringkas. |
| 6 | 0:21–0:27 | PILIH PAKEJ ANDA with B1–B6 price rows and a DARI RM12.90 stamp | Pilih pakej anda. Bermula RM12.90 sahaja! |
| 7 | 0:27–0:31 | Gold reveal: NAK SEMUA SEKALI?, large B7 poster, PALING LENGKAP stamp, B7 · PAKEJ LENGKAP | Tapi kalau nak semua sekali… ambil Pakej Lengkap! |
| 8 | 0:31–0:38 | Checklist (Nota T4 + T5 · Bank Soalan K1 + K2 · Peta Minda + Infografik), 120 FAIL PDF, ~~RM57.80~~ **RM49.90**, "Jimat RM7.90 berbanding beli B6 + B5" | Nota, soalan, peta minda. 120 fail PDF… hanya RM49.90! |
| 9 | 0:38–0:45 | JANGAN TUNGGU LAST MINUTE!, DP, TITIK SEJARAH, tagline, **DAPATKAN SEKARANG · PM DI TIKTOK** (pulsing), "Follow untuk lebih banyak ilmu sejarah." | Jangan tunggu last minute! Dapatkan sekarang, PM Titik Sejarah di TikTok! |

## Price and claim check (against the "Pakej Mana Untuk Anda?" table)

| Package | Price in video | Table | Notes |
|---|---|---|---|
| B1 Pakej Nota | RM17.90 | RM17.90 ✓ | 20 PDF |
| B2 Pakej Kertas 1 | RM15.90 | RM15.90 ✓ | 40 PDF |
| B3 Pakej Kertas 2 | RM24.90 | RM24.90 ✓ | 40 PDF |
| B4 Bank Soalan Lengkap | RM34.90 | RM34.90 ✓ | 80 PDF |
| B5 Pakej Peta Minda | RM12.90 | RM12.90 ✓ | 20 PDF, the lowest price, so "Bermula / Dari RM12.90" is correct |
| B6 Nota + Bank Soalan | RM44.90 | RM44.90 ✓ | 100 PDF |
| **B7 Pakej Lengkap** | **RM49.90** | RM49.90 ✓ | 120 PDF = 20 Nota + 80 Soalan + 20 Peta Minda. The table's "Berasingan" price is RM57.80 = B6 + B5 (44.90 + 12.90), so the saving is RM7.90 ✓ |

Claims deliberately **not** made, because the posters and table don't support them: "guaranteed A+", "SPM format", "instant download", "most worth it" (B2 has a lower price per file than B7). B7 is called **"paling lengkap"** because it is the only package with every item ticked.

## Assumptions to confirm
1. **"PM di TikTok"**: orders go through TikTok direct messages for now, because the Payhip store is not set up yet. Once it is live, change the CTA line and pill to "Link di bio" and rebuild. Only that one voiceover line costs new credits (~50 characters).
2. **Poster sharpness**: the posters were cropped from the 1730 px contact sheet (420 px each), so the large B7 poster in scene 7 is slightly soft. Dropping the original poster files into `assets/promo/posters/` with the same names makes the next render sharper automatically.

## Thumbnail
`output/covers/PROMO01_Bahan_Ulang_Kaji_Sejarah_SPM_cover.jpg` (1080×1920, render: `node engine/covers.mjs promo`).
It shows PAKEJ ULANG KAJI **SEJARAH SPM**, the B7 poster with the Nota T4 and Peta Minda T5 posters fanned behind, a **RM49.90** stamp,
a "120 FAIL PDF" badge, a "Nota · Bank Soalan · Peta Minda" strip and the brand. The key content sits in the centre, so it still
works in the 3:4 profile-grid crop on TikTok and Instagram. On TikTok, upload it with "Select cover → Upload from device", or pick the 0:29 frame.

## Captions

**TikTok** (short; the hook comes first because only about 2 lines show)
> SPM Sejarah dah dekat, nota masih bersepah? 😵‍💫📚
> Pakej Lengkap B7: Nota + Bank Soalan + Peta Minda, Tingkatan 4 & 5. 120 fail PDF, hanya RM49.90 ✅
> Pakej lain dari RM12.90. PM Titik Sejarah untuk dapatkan! 📩
> #SejarahSPM #SPM2026 #SPM2027 #NotaSejarah #BankSoalanSPM #Tingkatan4 #Tingkatan5 #KSSM #TitikSejarah #fyp

**Instagram Reels**
> SPM Sejarah dah dekat… tapi nota masih bersepah? 📚
>
> Titik Sejarah ada bahan ulang kaji digital Sejarah SPM (KSSM):
> 📘 Nota Tingkatan 4 & 5: 10 bab setiap tingkatan
> 📝 Bank Soalan Kertas 1 & 2, siap skema cadangan
> 🧠 Peta Minda + Infografik T4 & T5
>
> ⭐ B7 Pakej Lengkap: 120 fail PDF, RM49.90 sahaja (jimat RM7.90 berbanding beli B6 + B5)
> Pakej lain dari RM12.90.
>
> 📩 PM Titik Sejarah di TikTok untuk dapatkan. Jangan tunggu last minute!
> #SejarahSPM #SPM2026 #SPM2027 #NotaSejarah #BankSoalan #PetaMinda #Tingkatan4 #Tingkatan5 #KSSM #TitikSejarah

**Facebook Reels** (full price list for parents and teachers)
> 📚 Bahan Ulang Kaji Sejarah SPM, KSSM Tingkatan 4 & 5 (fail PDF)
>
> B1 Pakej Nota: RM17.90
> B2 Pakej Kertas 1: RM15.90
> B3 Pakej Kertas 2: RM24.90
> B4 Bank Soalan Lengkap: RM34.90
> B5 Pakej Peta Minda: RM12.90
> B6 Nota + Bank Soalan: RM44.90
> ⭐ B7 Pakej Lengkap (Nota + Bank Soalan + Peta Minda, 120 fail PDF): RM49.90
>
> Sesuai untuk pelajar Tingkatan 4 dan 5 yang sedang bersedia untuk SPM Sejarah.
> 📩 PM Titik Sejarah di TikTok untuk tempahan.
> #SejarahSPM #SPM #NotaSejarah #BankSoalan #TitikSejarah

Notes: #SPM2026 reaches this year's candidates and #SPM2027 reaches the Form 4 students. If you also take orders by Instagram or
Facebook DM, change "PM Titik Sejarah di TikTok" to "DM kami" on that platform.

## Platform tips
- **Music on TikTok:** v1 already uses Titik Sejarah's original music, which is royalty-free. If you'd rather use a trending sound, a **business account must pick from the Commercial Music Library**. Lower the original track's volume in the editor instead of removing it.
- Keep it **organic first**. If it does well in its first 48 hours, boost it with TikTok Promote or a Meta Ads boost, targeting ages 15–18 in Malaysia.
- The CTA card is held for about 2 s so viewers can screenshot the price.
