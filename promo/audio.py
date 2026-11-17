#!/usr/bin/env python3
"""Titik Sejarah promo soundtrack: original procedural beat (120 BPM, A minor) + SFX synced to the edit.

python3 promo/audio.py  ->  promo/work/music_sfx.wav (full mix) and promo/work/sfx_only.wav (no music bed,
for posting with a trending TikTok sound added in the app). Royalty-free by construction.
"""
import os, sys, wave
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'engine'))
from audio import SR, band, env_adsr, midi, pluck, pad, bass, kick, shaker, sfx  # noqa: E402

DUR = 32.5
BEAT = 0.5
rng = np.random.default_rng(11)
N = int(DUR * SR)
music = np.zeros((N, 2))
fx = np.zeros((N, 2))


def put(buf, x, t, g=1.0, pan=0.0):
    i0 = int(t * SR)
    if i0 >= N:
        return
    x = x[: N - i0] * g
    buf[i0:i0 + len(x), 0] += x * (1 - max(0, pan))
    buf[i0:i0 + len(x), 1] += x * (1 + min(0, pan))


def snare():
    n = int(0.22 * SR); t = np.arange(n) / SR
    nz = band(rng.standard_normal(n), 1200, 7000) * np.exp(-t * 22)
    tone = np.sin(2 * np.pi * 185 * t) * np.exp(-t * 30)
    return (nz * 0.55 + tone * 0.4)


def hat(open_=False):
    n = int((0.16 if open_ else 0.05) * SR); t = np.arange(n) / SR
    return band(rng.standard_normal(n), 7000, 16000) * np.exp(-t * (18 if open_ else 70)) * 0.5


def sub808(freq, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    f = freq * (1 + 0.6 * np.exp(-t * 40))
    s = np.sin(2 * np.pi * np.cumsum(f) / SR)
    return np.tanh(1.6 * s) * np.minimum(1, t / 0.005) * np.exp(-t * 1.6)


def stab(root_midi, intervals, dur=0.22):
    s = sum(pluck(midi(root_midi + 12 + i), dur) for i in intervals)
    saw = sum(np.sign(np.sin(2 * np.pi * midi(root_midi + 12 + i) * np.arange(int(dur * SR)) / SR)) for i in intervals)
    return (s * 0.5 + band(saw, 200, 3000) * 0.08) * env_adsr(int(dur * SR), 0.003, dur, 4)


def click():
    n = int(0.03 * SR); t = np.arange(n) / SR
    return band(rng.standard_normal(n), 2000, 9000) * np.exp(-t * 200) * 0.35


def reverse_whoosh(dur=0.5):
    x = sfx('whoosh')
    n = int(dur * SR)
    x = x[:n] if len(x) >= n else np.pad(x, (0, n - len(x)))
    return x[::-1] * np.linspace(0, 1, n) ** 2 * 1.4


PROG = [(57, [0, 3, 7]), (53, [0, 4, 7]), (60, [0, 4, 7]), (55, [0, 4, 7])]  # Am F C G, one chord per bar (2 s)

# ---------------- hook 0–3 s: tension, page flips, slam ----------------
put(music, pad([midi(45), midi(52), midi(57)], 2.6) * 0.5, 0.0)
put(music, sub808(55, 2.4) * 0.35, 0.0)
for i in range(int(2.4 / 0.125)):
    put(music, hat() * (0.4 + 0.5 * i / 19), i * 0.125, pan=0.3 * (-1) ** i)
flips = [0.2, 0.4, 0.6] + list(np.arange(0.6 + 0.075, 2.12, 0.075))
for i, tf in enumerate(flips):
    put(fx, sfx('page')[: int(0.18 * SR)], tf - 0.05, 0.55 if i < 3 else 0.35, pan=0.2 * (-1) ** i)
put(fx, sfx('riser'), 1.1, 1.4)
put(fx, reverse_whoosh(0.4), 2.1, 0.9)
put(fx, sfx('boom'), 2.5, 1.2)
put(fx, sfx('stamp'), 2.5, 1.1)
put(fx, sfx('whoosh'), 2.75, 0.8)

# ---------------- beat sections ----------------
def groove(t0, t1, half=False, gain=1.0):
    t = t0
    b = 0
    while t < t1 - 1e-6:
        bar = int((t - 3.0) // 2.0) % 4
        root, iv = PROG[bar]
        on = (b % 2 == 0)
        if not half or on:
            put(music, kick() * 1.0, t, gain)
        if (b % 2 == 1) and not half:
            put(music, snare(), t, 0.55 * gain)
        if half and b % 4 == 2:
            put(music, snare(), t, 0.5 * gain)
        if not half:
            put(music, hat(), t + 0.25, 0.35 * gain, pan=0.25)
            put(music, hat(), t, 0.22 * gain, pan=-0.25)
        if b % 4 == 0:
            put(music, sub808(midi(root - 24), 1.9) * 0.55, t, gain)
            put(music, pad([midi(root - 12 + i) for i in iv], 2.0) * (0.35 if not half else 0.6), t, gain)
        if not half and b % 2 == 1:
            put(music, stab(root - 12, iv), t + 0.25, 0.32 * gain, pan=0.15 * (-1) ** b)
        t += BEAT
        b += 1


groove(3.0, 20.5)
groove(20.5, 24.0, half=True, gain=0.8)
groove(24.0, 28.5)

# ---------------- SFX on the edit ----------------
for tc in [3.0, 7.5, 10.5, 13.5, 17.0, 20.5, 24.0]:          # scene whips
    put(fx, sfx('swish'), tc - 0.12, 0.9)
for tc in [7.38, 10.38, 13.38, 16.88]:
    put(fx, reverse_whoosh(0.3), tc - 0.18, 0.5)
for tc in [3.0, 4.5, 6.0, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.75, 16.0, 17.0, 17.5]:  # text slams / labels
    put(fx, sfx('pop'), tc, 0.45)
for i in range(4):                                             # checklist ticks
    put(fx, sfx('ding')[: int(0.5 * SR)], 18.25 + i * 0.5, 0.8)
put(fx, sfx('airy'), 20.45, 1.2)                               # into the night-desk scene
put(fx, sfx('riser'), 22.6, 1.3)
put(fx, sfx('boom'), 24.0, 1.1)
put(fx, sfx('stamp'), 24.0, 0.8)
for tc in [24.3, 24.9, 25.25, 25.6]:
    put(fx, sfx('pop'), tc, 0.45)
for i in range(26):                                            # typing
    put(fx, click(), 26.1 + i * (1.1 / 26) + rng.random() * 0.01, 0.7)
put(fx, sfx('swish'), 27.6, 0.6)
put(fx, sfx('ding'), 27.65, 1.0)

# ---------------- outro 28.5–32.5 ----------------
put(fx, sfx('swish'), 28.4, 0.8)
put(music, sfx('outro') * 1.2, 28.5)
put(music, pad([midi(45), midi(52), midi(57), midi(60)], 4.0) * 0.55, 28.5)
put(music, sub808(55, 3.0) * 0.4, 28.5)
put(fx, sfx('boom'), 28.5, 0.6)

# fades
fade = np.ones(N)
fo = int(0.6 * SR); fade[-fo:] = np.linspace(1, 0, fo)
music *= fade[:, None]; fx *= fade[:, None]


def write(path, x):
    x = x / max(1e-9, np.abs(x).max()) * 0.89
    with wave.open(path, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((x * 32767).astype('<i2').tobytes())


out = os.path.join(ROOT, 'promo/work')
write(os.path.join(out, 'music_sfx.wav'), music * 0.8 + fx)
write(os.path.join(out, 'sfx_only.wav'), fx)
print('ok')
