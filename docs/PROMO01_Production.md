# PROMO 01 – Bahan Ulang Kaji Sejarah SPM (Titik Sejarah)

**File:** `output/PROMO01_Bahan_Ulang_Kaji_Sejarah_SPM.mp4` · 1080×1920 (9:16) · 30 fps · 45.1 s · −14.6 LUFS / −1.3 dBTP
**Platforms:** TikTok, Instagram Reels, Facebook Reels · **Version:** v1 without voiceover (music + SFX only)
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
| 9 | 0:38–0:45 | JANGAN TUNGGU LAST MINUTE!, DP, TITIK SEJARAH, tagline, **DAPATKAN SEKARANG · LINK DI BIO** (pulsing), "Follow untuk lebih banyak ilmu sejarah." | Jangan tunggu last minute! Dapatkan sekarang di link bio Titik Sejarah. |

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
1. **"Link di bio"**: the CTA assumes the store link is in your bio. If you sell elsewhere (e.g. WhatsApp or a Payhip link), tell me the wording and I'll change one line.
2. **Poster sharpness**: the posters were cropped from the 1730 px contact sheet (420 px each), so the large B7 poster in scene 7 is slightly soft. Dropping the original poster files into `assets/promo/posters/` with the same names makes the next render sharper automatically.

## Caption and hashtags (TikTok / IG / FB)
> SPM Sejarah dah dekat? 📚 Nota, bank soalan Kertas 1 & 2 (siap skema cadangan) dan peta minda Tingkatan 4 & 5, semua dalam satu tempat. Pakej Lengkap B7: 120 fail PDF, hanya RM49.90. Link di bio! 🔗
> #SejarahSPM #SPM2026 #NotaSejarah #BankSoalan #Tingkatan4 #Tingkatan5 #KSSM #TitikSejarah #fyp

**Cover text:** "PAKEJ LENGKAP RM49.90" (use the 0:30 frame or the B7 poster).

## Platform tips
- **Music on TikTok:** v1 already uses Titik Sejarah's original music, which is royalty-free. If you'd rather use a trending sound, a **business account must pick from the Commercial Music Library**. Lower the original track's volume in the editor instead of removing it.
- Keep it **organic first**. If it does well in its first 48 hours, boost it with TikTok Promote or a Meta Ads boost, targeting ages 15–18 in Malaysia.
- The CTA card is held for about 2 s so viewers can screenshot the price.
