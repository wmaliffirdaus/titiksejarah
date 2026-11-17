#!/usr/bin/env bash
# Extract every promo shot (promo/shots.json) to a 30 fps JPEG sequence: promo/work/frames/<id>/0001.jpg ...
set -euo pipefail
cd "$(dirname "$0")"
FPS=30
python3 - <<'PY' > work/shots.tsv
import json
for s in json.load(open('shots.json'))['shots']:
    x, y, w, h = s['crop']
    print(s['id'], s['clip'], s['in'], s['dur'], s['speed'], x, y, w, h, sep='\t')
PY
while IFS=$'\t' read -r id clip in dur speed x y w h; do
  out=work/frames/$id; rm -rf "$out"; mkdir -p "$out"
  src=$(python3 -c "print($dur*$speed+0.2)")
  n=$(python3 -c "import math;print(math.ceil($dur*$FPS))")
  ffmpeg -nostdin -v error -y -ss "$in" -t "$src" -i "footage/$clip.mp4" \
    -vf "crop=$w:$h:$x:$y,scale=900:-2:flags=lanczos,setpts=(PTS-STARTPTS)/$speed,fps=$FPS" \
    -frames:v "$n" -q:v 3 "$out/%04d.jpg"
  echo "$id $(ls "$out" | wc -l) frames"
done < work/shots.tsv
