# Spesifikasi Platform

Values marked ✔ are the project's own standards, enforced by the engine and `engine/qc.py` or measured in this project. Values marked ⚠ are general platform assumptions that could not be checked in the build session; confirm them in each platform's current help pages before relying on them.

## Video

| Perkara | TikTok (utama) | YouTube Shorts | Instagram Reels | YouTube panjang |
|---|---|---|---|---|
| Nisbah / resolusi | 9:16, 1080×1920 ✔ | 9:16, 1080×1920 ✔ | 9:16, 1080×1920 ✔ | 16:9, 1920×1080 |
| Kadar bingkai | 30 fps ✔ (engine) | 30 fps ✔ | 30 fps ✔ | 30 fps |
| Tempoh TitikSejarah | **35–60 s**, ideal 45–55 s ✔ | same file ✔ | same file ✔ | 6–15 min |
| Had tempoh platform | ⚠ check | ⚠ check (the Shorts limit has changed before) | ⚠ check | depends on account status ⚠ |
| Kenyaringan | −14 LUFS integrated (±1.5), true peak ≤ −1 dBTP ✔ | same ✔ | same ✔ | same ✔ |
| Codec | H.264 yuv420p + AAC stereo ✔ | same ✔ | same ✔ | same |

## Zon selamat 9:16 (diukur dalam projek ✔)

- Main content: **y ≈ 280–1360 px**.
- Burned-in captions: **y ≈ 1370–1500 px** (word-synced, 1–2 word chunks, cream with navy outline; keywords in gold).
- Keep the right edge clear for the TikTok buttons; keep the top clear for the account and search bar.
- Cover image: the headline sits inside the **middle 3:4 area**, which is what shows in the profile grid ✔.

## Teks dan metadata

| Perkara | Panduan |
|---|---|
| Kapsyen TikTok | The first line must stand on its own (the rest is truncated in the feed) |
| Hashtag | 3–6 relevant; core: `#TitikSejarah #SejarahSPM #SejarahTingkatan4/5 #SPM<tahun>` |
| Tajuk YouTube | Main information in roughly the first 60 characters ⚠ |
| Thumbnail YouTube (panjang) | 1280×720 ⚠; ≤ 4 words |

## Muzik

The engine generates original music and SFX in code (`engine/audio.py`), so they are royalty-free by construction ✔. Any external music needs a licence recorded in `terbitan.md`; platform-library sounds may be restricted for commercial accounts ⚠.

## Kandungan sensitif

Historical violence (war, the Emergency, 13 Mei 1969): no graphic imagery. Platforms may limit the reach of violent content even when it is educational ⚠. Wartime and communist symbols appear only in a clearly educational context, with a caption.
