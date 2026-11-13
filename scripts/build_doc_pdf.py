#!/usr/bin/env python3
"""Build a branded TitikSejarah A4 PDF from an HTML fragment.

Reuses the notes project's fonts, stylesheet and Playwright renderer
(../digitalproducts/sejarah-spm) so every TitikSejarah PDF looks the same.

usage:
  python3 build_doc_pdf.py <fragment.html> <out.pdf> --title "Tajuk" [--kicker "Teks kecil atas tajuk"]
         [--footer "Teks pengaki"]

The fragment is placed inside <body>. Use the classes from
sejarah-spm/templates/style.css (table.t, .box.info, .k, .date ...).
HTML comments (e.g. <!-- meta: ... -->) are removed before rendering.
For multiple-choice options use <table class="t keep opsyen"> so that no
option is rendered bold (the notes stylesheet bolds the first column).
"""
import argparse
import html
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
NOTES = Path(os.environ.get("SEJARAH_SPM_DIR", HERE.parent.parent / "digitalproducts" / "sejarah-spm"))
STYLE = NOTES / "templates" / "style.css"
FONTS_CSS = NOTES / "fonts" / "fonts.css"
SETUP_FONTS = NOTES / "scripts" / "setup_fonts.py"
RENDER = NOTES / "scripts" / "render.js"

PAGE = """<!doctype html>
<html lang="ms"><head><meta charset="utf-8">
<style>{fonts_css}</style>
<style>{style_css}</style>
<style>
  /* TitikSejarah brand palette (references/brand-guidelines/brand.md) */
  :root {{ --navy: #172C63; --navy-2: #24407f; --gold: #F5C928; --red: #C93436; --gold-soft: #fdf6d8; }}
  .doc-head {{ background: var(--navy); color: #fff; border-radius: 6pt;
              padding: 12pt 16pt; margin-bottom: 14pt; }}
  .doc-head .kick {{ font-size: 8.5pt; letter-spacing: 1.2pt; font-weight: 700;
                    color: var(--gold); text-transform: uppercase; }}
  .doc-head h1 {{ margin: 3pt 0 0; font-size: 18pt; line-height: 1.2; color: #fff; }}
  /* Answer options: no column may look emphasised (exam fairness). */
  table.t.opsyen td, table.t.opsyen td:first-child {{ font-weight: 400; color: inherit; }}
  .brand {{ float: right; font-weight: 800; font-size: 9pt; letter-spacing: 1pt; color: var(--gold); }}
</style>
<title>{title}</title></head>
<body>
<div class="doc-head"><span class="brand">TITIKSEJARAH</span>
  <div class="kick">{kicker}</div><h1>{title}</h1></div>
{body}
</body></html>"""


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("fragment")
    ap.add_argument("out")
    ap.add_argument("--title", required=True)
    ap.add_argument("--kicker", default="")
    ap.add_argument("--footer", default=None, help="footer text; defaults to the title")
    a = ap.parse_args()

    for p in (STYLE, RENDER, SETUP_FONTS):
        if not p.exists():
            sys.exit(f"missing {p}: clone wmaliffirdaus/digitalproducts next to this repository or set SEJARAH_SPM_DIR")
    if not FONTS_CSS.exists():
        subprocess.run([sys.executable, str(SETUP_FONTS)], check=True)

    body = Path(a.fragment).read_text(encoding="utf-8")
    body = re.sub(r"<!--.*?-->", "", body, flags=re.S)
    page = PAGE.format(
        fonts_css=FONTS_CSS.read_text(), style_css=STYLE.read_text(),
        title=html.escape(a.title), kicker=html.escape(a.kicker), body=body)

    out = Path(a.out).resolve()
    out.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        src = Path(td) / "doc.html"
        src.write_text(page, encoding="utf-8")
        subprocess.run(["node", str(RENDER), str(src), str(out), a.footer or a.title], check=True)
    print(f"OK  {out}")


if __name__ == "__main__":
    main()
