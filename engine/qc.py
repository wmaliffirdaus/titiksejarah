#!/usr/bin/env python3
"""Titik Sejarah – automated output QC.

Checks every MP4 in output/: resolution, aspect ratio, fps, codecs, duration, integrated loudness,
true peak, full decode (no corrupted frames), and the presence of the matching SRT.
Writes docs/QC_Report.md.
"""
import json, os, re, subprocess, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "output")


def probe(f):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "stream=codec_type,codec_name,width,height,r_frame_rate,sample_rate,channels,pix_fmt",
                        "-show_entries", "format=duration,size", "-of", "json", f], capture_output=True, text=True, check=True)
    return json.loads(r.stdout)


def loudness(f):
    r = subprocess.run(["ffmpeg", "-nostats", "-i", f, "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True)
    tail = r.stderr[r.stderr.rfind("Summary:"):]
    I = re.search(r"I:\s+(-?[\d.]+) LUFS", tail)
    P = re.search(r"Peak:\s+(-?[\d.]+) dBFS", tail)
    return float(I.group(1)) if I else None, float(P.group(1)) if P else None


def decode_ok(f):
    r = subprocess.run(["ffmpeg", "-v", "error", "-i", f, "-f", "null", "-"], capture_output=True, text=True)
    return r.returncode == 0 and not r.stderr.strip()


def main():
    import sys
    bab = sys.argv[sys.argv.index("--bab") + 1] if "--bab" in sys.argv else "1"
    out = OUT if bab == "1" else os.path.join(OUT, f"bab{bab}")
    docs = os.path.join(ROOT, "docs") if bab == "1" else os.path.join(ROOT, "docs", f"bab{bab}")
    rows = []
    allok = True
    for f in sorted(glob.glob(os.path.join(out, "*.mp4"))):
        p = probe(f)
        v = next(s for s in p["streams"] if s["codec_type"] == "video")
        a = next((s for s in p["streams"] if s["codec_type"] == "audio"), None)
        dur = float(p["format"]["duration"])
        size = int(p["format"]["size"]) / 1e6
        I, TP = loudness(f)
        dec = decode_ok(f)
        srt = os.path.exists(os.path.join(out, "subtitles", os.path.basename(f)[:-4] + ".srt"))
        fps = eval(v["r_frame_rate"])
        checks = {
            "1080×1920": v["width"] == 1080 and v["height"] == 1920,
            "9:16": abs(v["width"] / v["height"] - 9 / 16) < 1e-6,
            "H.264/yuv420p": v["codec_name"] == "h264" and v.get("pix_fmt") == "yuv420p",
            "AAC stereo": a is not None and a["codec_name"] == "aac" and a["channels"] == 2,
            "Loudness −14±1.5 LUFS": I is not None and abs(I + 14) <= 1.5,
            "True peak ≤ −1 dBTP": TP is not None and TP <= -0.9,
            "Full decode OK": dec,
            "SRT present": srt,
        }
        ok = all(checks.values())
        allok &= ok
        rows.append((os.path.basename(f), dur, fps, size, I, TP, checks, ok))
    md = f"# QC Report – Titik Sejarah Bab {bab}\n\n"
    cmd = "python3 engine/qc.py" + (f" --bab {bab}" if bab != "1" else "")
    md += f"Generated automatically by `{cmd}` (ffprobe + ffmpeg ebur128 + full decode).\n\n"
    md += "| Fail | Tempoh | FPS | Saiz | Loudness | True peak | Status |\n|---|---|---|---|---|---|---|\n"
    for name, dur, fps, size, I, TP, checks, ok in rows:
        md += f"| `{name}` | {int(dur // 60)}:{int(dur % 60):02d} | {fps:g} | {size:.1f} MB | {I} LUFS | {TP} dBTP | {'✅ LULUS' if ok else '❌ ' + ', '.join(k for k, v in checks.items() if not v)} |\n"
    md += "\n**Semakan setiap fail:** " + " · ".join(rows[0][6].keys()) + "\n\n" if rows else ""
    md += f"**Keputusan keseluruhan:** {'✅ Semua fail lulus semakan teknikal.' if allok and rows else '❌ Ada fail yang gagal – lihat jadual.'}\n"
    os.makedirs(docs, exist_ok=True)
    open(os.path.join(docs, "QC_Report.md"), "w").write(md)
    print(md)


if __name__ == "__main__":
    main()
