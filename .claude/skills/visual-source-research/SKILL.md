---
name: visual-source-research
description: Finds, authenticates and documents historical photographs, documents, maps and footage for TitikSejarah videos and PDFs, recording the source, accurate caption, date, licence or permission status and authenticity checks for every asset, and flagging misattributed or AI-generated images. Use after a storyboard lists its visual requirements, or when asked "cari gambar sejarah", "foto arkib", "sumber visual", "gambar Tunku", "boleh guna gambar ini?", "kapsyen foto", or to verify an image's origin.
argument-hint: "[slug] [senarai keperluan visual atau perihal imej]"
---

# Historical Image and Source Research

A wrong photo is a factual error that viewers see. This skill treats every image as a historical claim: who, what, where and when must be verified, and the right to use it must be known.

Archive guide and licensing notes: `sumber-arkib.md` (this folder). Source tiers and status labels: `references/historical-sources/hierarki-sumber.md`.

## Responsibilities

- Fulfil the visual requirement list from `storyboard-creation` (V01, V02, …).
- Locate assets in reputable archives, preferring the original holding institution.
- Verify the caption facts and match them to the fact ledger.
- Record licence or permission status. Never assume an old photo is free to use.
- Detect misattributed, edited, colourised or AI-generated images.
- Propose honest fallbacks (maps, typography, labelled illustration) when no verified image exists.

## Workflow

1. **Read the requirement list** and the related ledger IDs. Each visual must depict exactly the claim it illustrates.
2. **Search in priority order:** the holding archive (Arkib Negara Malaysia first for Malaysian history) → other national archives and museums → open-access museum and library collections → Wikimedia Commons. `docs/STYLE_GUIDE.md` allows Commons when the file page's licence is verified (public domain or Creative Commons) *and* its stated original source checks out. Note: Commons hosts are allowed in the `titiksejarah` cloud environment but were rate-limited, so request slowly. The user may also supply photos (their own museum photos or licensed stock); record those as `KEBENARAN DIPEROLEH: pengguna`.
3. **Use textbook captions as leads.** Textbook photos usually credit "Sumber: Arkib Negara Malaysia". Note the caption and page (e.g. BT T5 hlm. 98), then find the original at ANM. Do not screen-capture the textbook for video use.
4. **Authenticate each asset:**
   - Provenance: holding institution, collection or reference number, original caption.
   - Consistency: people, uniforms, vehicles, buildings and signage fit the stated date and place.
   - Duplication: reverse image search (when tools allow) to find earlier and conflicting captions.
   - Manipulation: colourised? cropped to change meaning? AI-generated (warped hands, garbled text, impossible details)? Mark it so.
5. **Write the caption** in Malay, with only verified facts: *Siapa / apa — tempat — tarikh. Sumber: <institusi, rujukan>.* If the date is approximate, say so ("sekitar 1950-an").
6. **Record rights:** status (domain awam disahkan / lesen terbuka + jenis / perlu kebenaran / tidak diketahui), attribution text required, and any restrictions (non-commercial, no modification). If the status is unknown, the asset is not cleared for publication. List it under "perlu kebenaran".
7. **Fallbacks:** for any requirement without a cleared, verified asset, propose an alternative: map, typographic card, document reconstruction (labelled), or an illustration of atmosphere only (labelled "Ilustrasi").
8. Save to `output/videos/<slug>/sumber-visual.md`. Put downloaded files in `output/videos/<slug>/aset/` using names `V01_<ringkas>.jpg`.

## Output format

```markdown
# Sumber Visual — <slug>
| ID | Keperluan (dari storyboard) | Aset ditemui | Kapsyen (disahkan) | Sumber + rujukan | Status hak | Pengesahan | ID fakta |
|---|---|---|---|---|---|---|---|
| V03 | Delegasi menandatangani Perjanjian Malaysia | V03_perjanjian_london.jpg | Majlis menandatangani Perjanjian Malaysia, London, 9 Julai 1963 | ANM, <no. rujukan> | Perlu kebenaran ANM | Kapsyen asal ANM sepadan; tiada suntingan | F001, F002 |

## Tiada aset sah → cadangan ganti
- V07: …

## Senarai kredit (untuk kad akhir)
- Arkib Negara Malaysia — V03, V05
```

## Quality standards

- 100% of historical images have a holding institution and an original caption or reference.
- Captions use only `DISAHKAN` facts; approximations are labelled.
- 0 AI-generated images presented as historical. 0 images reused for a different event.
- Every asset has a rights status. "Tidak diketahui" is never published.

## Example of correct usage

Requirement V02: "Tunku Abdul Rahman membaca Pemasyhuran Kemerdekaan, 31 Ogos 1957." Search ANM for the proclamation ceremony at Stadium Merdeka. Accept only an image whose archival caption states the event. If the only image found is from the 16 September 1963 ceremony (also at Stadium Merdeka), reject it for V02 and log it as a possible asset for a Malaysia Day video.

## Common mistakes to avoid

- Trusting a Pinterest or social-media caption.
- Using the "most famous" photo of a figure for every event involving that figure.
- Treating Wikimedia Commons' licence tag as proof. Check the original source's terms.
- Colourising or "restoring" photos without labelling the change.
- Captions that add facts not in the ledger ("Tunku tersenyum gembira selepas…").
