#!/usr/bin/env python3
"""Automated checks for any TitikSejarah PDF.

usage:
  python3 check_pdf.py <file.pdf> [--require TEXT]... [--forbid TEXT]...

Checks:
  - every font is embedded and none is Type 3 (Type 3 breaks search/copy)
  - the text layer has no private-use characters (U+E000–U+F8FF)
  - every page has extractable text
  - each --require string appears somewhere; each --forbid string appears nowhere
    (case-insensitive; e.g. --require "Bukan soalan peperiksaan sebenar" --forbid "Skema")
Exit code 0 = all checks pass, 1 = at least one failure.
"""
import argparse
import sys

from pypdf import PdfReader


def fonts_of(page):
    res = page.get("/Resources") or {}
    fonts = (res.get("/Font") or {})
    for ref in fonts.values():
        f = ref.get_object()
        yield f.get("/Subtype"), f.get("/BaseFont"), f


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("--require", action="append", default=[])
    ap.add_argument("--forbid", action="append", default=[])
    a = ap.parse_args()

    r = PdfReader(a.pdf)
    problems = []
    texts = []
    for i, p in enumerate(r.pages, 1):
        t = p.extract_text() or ""
        texts.append(t)
        if not t.strip():
            problems.append(f"page {i}: no extractable text")
        pua = sorted({hex(ord(c)) for c in t if 0xE000 <= ord(c) <= 0xF8FF})
        if pua:
            problems.append(f"page {i}: private-use characters {pua}")
        for sub, base, f in fonts_of(p):
            if sub == "/Type3":
                problems.append(f"page {i}: Type 3 font {base}")
            elif sub != "/Type0":
                desc = f.get("/FontDescriptor")
                if desc is not None:
                    d = desc.get_object()
                    if not any(k in d for k in ("/FontFile", "/FontFile2", "/FontFile3")):
                        problems.append(f"page {i}: font not embedded {base}")
    full = "\n".join(texts).lower()
    flat = " ".join(full.split())
    for s in a.require:
        if " ".join(s.lower().split()) not in flat:
            problems.append(f"required text missing: {s!r}")
    for s in a.forbid:
        if " ".join(s.lower().split()) in flat:
            problems.append(f"forbidden text present: {s!r}")

    print(f"{a.pdf}: {len(r.pages)} pages")
    if problems:
        print("FAIL")
        for p in dict.fromkeys(problems):
            print("  -", p)
        sys.exit(1)
    print("PASS: fonts embedded (no Type 3), text layer clean, required/forbidden text OK")


if __name__ == "__main__":
    main()
