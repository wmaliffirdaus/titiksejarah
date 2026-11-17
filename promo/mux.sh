#!/usr/bin/env bash
# Mux rendered video + soundtrack, loudness-normalised to -14 LUFS / -1.5 dBTP (two-pass loudnorm).
# Usage: promo/mux.sh A   -> output/promo/TitikSejarah_Promo_Hook-A.mp4 (+ _SFX-only variant)
set -euo pipefail
cd "$(dirname "$0")/.."
H=${1:-A}
mkdir -p output/promo
norm() { # in.wav target_lufs out.m4a
  local j
  j=$(ffmpeg -nostdin -hide_banner -i "$1" -af "loudnorm=I=$2:TP=-2.2:LRA=11:print_format=json" -f null - 2>&1 | sed -n '/{/,/}/p')
  local mi mt ml mth off
  mi=$(echo "$j" | python3 -c "import json,sys;d=json.load(sys.stdin);print(d['input_i'],d['input_tp'],d['input_lra'],d['input_thresh'],d['target_offset'])")
  read -r mi mt ml mth off <<<"$mi"
  ffmpeg -nostdin -v error -y -i "$1" -af "loudnorm=I=$2:TP=-2.2:LRA=11:measured_I=$mi:measured_TP=$mt:measured_LRA=$ml:measured_thresh=$mth:offset=$off:linear=true,aresample=48000" -c:a aac -b:a 192k "$3"
}
norm promo/work/music_sfx.wav -14 promo/work/mix.m4a
norm promo/work/sfx_only.wav -16 promo/work/sfx.m4a
ffmpeg -nostdin -v error -y -i "promo/work/video_$H.mp4" -i promo/work/mix.m4a -map 0:v -map 1:a -c:v copy -c:a copy -shortest -movflags +faststart "output/promo/TitikSejarah_Promo_Hook-$H.mp4"
ffmpeg -nostdin -v error -y -i "promo/work/video_$H.mp4" -i promo/work/sfx.m4a -map 0:v -map 1:a -c:v copy -c:a copy -shortest -movflags +faststart "output/promo/TitikSejarah_Promo_Hook-${H}_SFX-only.mp4"
echo "output/promo/TitikSejarah_Promo_Hook-$H.mp4"
