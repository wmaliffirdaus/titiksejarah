#!/usr/bin/env python3
"""Titik Sejarah – Malaysian Malay speech engine (offline).

Text  ->  Malaysian Malay phonemes (own rule-based G2P + lexicon)
      ->  teacher-style prosody (durations, pauses, pitch contour)
      ->  MBROLA "ma1" (Malay female diphone voice recorded at MIMOS, Kuala Lumpur)
      ->  light mastering (EQ, gentle compression, small-room ambience)

Returns exact start times for every whitespace token of the input, so captions stay word-synced.

Requires: mbrola + mbrola-ma1 (Ubuntu/Debian: apt-get install mbrola mbrola-ma1), ffmpeg, numpy.
"""
import math, os, re, subprocess, tempfile, hashlib

MA1 = os.environ.get("TS_MBROLA_VOICE", "/usr/share/mbrola/ma1/ma1")
RATE = float(os.environ.get("TS_MS_RATE", "1.0"))        # >1 = slower
PITCH = float(os.environ.get("TS_MS_PITCH", "1.0"))      # global pitch multiplier

# ------------------------------------------------------------------ lexicon
# 'é' marks e-taling (/e/); plain 'e' is e-pepet (/ə/). Respellings for loanwords & names.
LEX = {
    'bebas': 'bébas', 'berbeza': 'berbéza', 'beza': 'béza', 'dewa': 'déwa', 'dewaraja': 'déwaraja', 'ekonomi': 'ékonomi',
    'eropah': 'éropah', 'hebat': 'hébat', 'kehebatan': 'kehébatan', 'megah': 'mégah', 'kemegahannya': 'kemégahannya',
    'merah': 'mérah', 'lebar': 'lébar', 'teks': 'téks', 'selat': 'sélat', 'peta': 'péta', 'mekong': 'mékong',
    'konsep': 'konsép', 'moden': 'modén', 'perak': 'pérak', 'kompleks': 'kompléks', 'episod': 'épisod',
    'entrepot': 'éntrepot', 'eo': 'é-o', 'oc': 'ok', 'vietnam': 'viétnam', 'westphalia': 'wéstfalia', 'westfalia': 'wéstfalia',
    'pegu': 'pégu', 'tentera': 'téntera', 'mereka': 'meréka', 'boleh': 'boléh', 'oleh': 'oléh', 'diperoleh': 'diperoléh',
    'membolehkan': 'memboléhkan', 'elok': 'élok', 'enak': 'énak', 'merdeka': 'merdéka', 'cek': 'cék', 'sen': 'sén',
    'my': 'mi', 'son': 'son', 'shih': 'syih', 'ryukyu': 'riukiu', 'tiktok': 'tiktok', 'franca': 'franka', 'lingua': 'lingua',
    'srivijaya': 'sriwijaya', 'jayavarman': 'jayawarman', 'suryavarman': 'suryawarman', 'ching': 'cing', 'champa': 'campa',
    'cham': 'cam', 'baray': 'barai', 'gujerat': 'gujerat', 'muzaffar': 'muzafar', 'muhammad': 'muhamad', 'allah': 'alah',
    'tome': 'tomé', 'pires': 'piréz', 'vs': 'lawan', 'ok': 'okéi', 'ilustrasi': 'ilustrasi', 'demang': 'demang',
    'kedah': 'kedah', 'temenggung': 'temenggung', 'raden': 'raden', 'beliau': 'beliau',
}
LETTERS = {'a': 'é', 'b': 'bi', 'c': 'si', 'd': 'di', 'e': 'i', 'f': 'éf', 'g': 'ji', 'h': 'écy', 'i': 'ai', 'j': 'jé', 'k': 'ké',
           'l': 'él', 'm': 'ém', 'n': 'én', 'o': 'o', 'p': 'pi', 'q': 'kiu', 'r': 'ar', 's': 'és', 't': 'ti', 'u': 'yu', 'v': 'wi',
           'w': 'dabelyu', 'x': 'éks', 'y': 'wai', 'z': 'zéd'}
FUNC = set('''dan atau yang di ke dari daripada untuk dengan ini itu ialah adalah iaitu pada oleh kepada dalam juga pula akan
sudah telah ada tidak tak boleh sebagai seperti serta bagi ia kita mereka kami anda kalau jika maka lalu lagi pun saja sahaja
the se bahawa kerana tetapi manakala hingga sejak antara satu nya lah kah'''.split())
WH = set('apa apakah kenapa mengapa bagaimana siapa siapakah berapa bila bilakah mana manakah'.split())

# ------------------------------------------------------------------ numbers
DIG = ['kosong', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'lapan', 'sembilan']


def num_words(n):
    n = int(n)
    if n < 10: return DIG[n]
    if n == 10: return 'sepuluh'
    if n == 11: return 'sebelas'
    if n < 20: return DIG[n - 10] + ' belas'
    if n < 100: return DIG[n // 10] + ' puluh' + ('' if n % 10 == 0 else ' ' + DIG[n % 10])
    if n < 1000:
        h = 'seratus' if n // 100 == 1 else DIG[n // 100] + ' ratus'
        return h + ('' if n % 100 == 0 else ' ' + num_words(n % 100))
    if n < 1000000:
        t = 'seribu' if n // 1000 == 1 else num_words(n // 1000) + ' ribu'
        return t + ('' if n % 1000 == 0 else ' ' + num_words(n % 1000))
    return ' '.join(DIG[int(c)] for c in str(n))


def normalise_token(tok):
    """Return the list of plain lowercase words to pronounce for one written token (punctuation removed)."""
    t = tok.strip('“”"\'()[]')
    t = t.rstrip('.,!?:;…')
    t = t.replace('×', ' kali ').replace('&', ' dan ').replace('➜', ' ').replace('±', 'kira-kira ')
    if not t:
        return []
    m = re.fullmatch(r'ke-(\d+)', t, re.I)
    if m:
        n = int(m.group(1))
        return ['pertama'] if n == 1 else ['ke' + w if i == 0 else w for i, w in enumerate(num_words(n).split())]
    if re.fullmatch(r'\d+\.\d+', t):
        a, b = t.split('.')
        return num_words(a).split() + ['titik'] + num_words(b).split()
    if re.fullmatch(r'\d{1,3}(,\d{3})+', t):
        return num_words(t.replace(',', '')).split()
    if re.fullmatch(r'\d+', t):
        return num_words(t).split()
    if re.fullmatch(r'[A-Z]{2,5}', t) and t not in ('KMM',):
        return [LETTERS[c.lower()] for c in t]
    if t == 'KMM':
        return ['kesultanan', 'melayu', 'melaka']
    if t == 'M':
        return ['masihi']
    if t == 'SM':
        return ['sebelum', 'masihi']
    out = []
    for part in re.split(r'[-–]', t):
        if part:
            w = part.lower()
            out.append(LEX.get(w, w))
    return out


# ------------------------------------------------------------------ grapheme -> phoneme
VOWELS = {'V', '@', 'e', 'I', '@U', 'U', 'aI', 'aU', 'OI', 'eI', 'Q'}
VOICED = {'b', 'd', 'g', 'dZ', 'm', 'n', 'N', 'nY', 'l', 'r', 'w', 'j', 'z', 'G'}
DUR = {'V': 92, '@': 52, 'e': 92, 'I': 82, 'U': 82, '@U': 92, 'aI': 135, 'aU': 135, 'OI': 135,
       'p': 72, 't': 66, 'k': 72, 'b': 60, 'd': 56, 'g': 62, 'tS': 96, 'dZ': 84, 'f': 90, 's': 96, 'S': 102, 'z': 86,
       'H': 86, 'G': 70, 'h': 52, 'm': 66, 'n': 60, 'N': 70, 'nY': 76, 'l': 56, 'r': 46, 'w': 52, 'j': 52, '?': 46}


def g2p(word):
    """Malaysian Malay phonemes for one lowercase word (may contain é)."""
    w = word.replace('-', '')
    ph = []
    i = 0
    while i < len(w):
        c, two = w[i], w[i:i + 2]
        end2 = i + 2 == len(w)
        if two in ('ng', 'ny', 'sy', 'kh', 'gh', 'ch'):
            ph.append({'ng': 'N', 'ny': 'nY', 'sy': 'S', 'kh': 'H', 'gh': 'G', 'ch': 'tS'}[two]); i += 2; continue
        if two in ('ai', 'au', 'oi', 'ay', 'aw') and end2:
            ph.append({'ai': 'aI', 'ay': 'aI', 'au': 'aU', 'aw': 'aU', 'oi': 'OI'}[two]); i += 2; continue
        m = {'a': 'V', 'é': 'e', 'e': '@', 'i': 'I', 'o': '@U', 'u': 'U', 'c': 'tS', 'j': 'dZ', 'y': 'j', 'v': 'w', 'q': 'k',
             'x': 'ks', 'b': 'b', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'p': 'p',
             'r': 'r', 's': 's', 't': 't', 'w': 'w', 'z': 'z'}.get(c)
        if m == 'ks':
            ph += ['k', 's']
        elif m:
            if not (m not in VOWELS and ph and ph[-1] == m):   # collapse double consonants
                ph.append(m)
        i += 1
    nv = sum(p in VOWELS for p in ph)
    # Malaysian: i/u lowered in closed final syllable
    if nv >= 2 and ph and ph[-1] not in VOWELS:
        k = len(ph) - 1
        while k >= 0 and ph[k] not in VOWELS:
            k -= 1
        if k > 0 and ph[k] in ('I', 'U') and ph[k - 1] not in VOWELS:
            ph[k] = 'e' if ph[k] == 'I' else '@U'
    # final k -> glottal stop; final r dropped (colloquial Malaysian), vowel kept
    if len(ph) > 1 and ph[-1] == 'k' and ph[-2] in VOWELS:
        ph[-1] = '?'
    if nv >= 2 and len(ph) > 1 and ph[-1] == 'r' and ph[-2] in VOWELS:
        ph.pop()
    # hiatus: glides and glottal onsets
    out = []
    for k, p in enumerate(ph):
        if out and p in VOWELS and out[-1] in VOWELS:
            prev = out[-1]
            if prev == 'I':
                out.append('j')
            elif prev == 'U':
                out.append('w')
            elif prev == p or prev == '@':
                out.append('?')
        out.append(p)
    # Malaysian: final open -a -> schwa (after consonant or glide)
    if nv >= 2 and len(out) > 1 and out[-1] == 'V' and out[-2] not in VOWELS and out[-2] != '?':
        out[-1] = '@'
    return out


def stress_index(ph):
    vi = [k for k, p in enumerate(ph) if p in VOWELS]
    if not vi:
        return None
    if len(vi) == 1:
        return vi[0]
    pen = vi[-2]
    return vi[-1] if ph[pen] == '@' else pen


# ------------------------------------------------------------------ prosody
def parse(text):
    """Tokens -> list of dicts {words:[...], kw, punct, wh} preserving whitespace tokens."""
    toks = []
    kw = False
    for raw in text.split():
        n = raw.count('**')
        k = kw or raw.startswith('**')
        if n % 2 == 1:
            kw = not kw
        clean = raw.replace('**', '').replace('~~', '')
        punct = ''
        m = re.search(r'([.,!?:;…]+)[”"\')\]]*$', clean)
        if m:
            punct = m.group(1)[-1]
        words = normalise_token(clean)
        toks.append({'raw': clean, 'words': words, 'kw': k or n == 2, 'punct': punct,
                     'wh': any(x in WH for x in words)})
    return toks


def phrases_of(toks):
    """Split tokens into intonation phrases. Each phrase gets a boundary type."""
    ph, cur = [], []
    for i, t in enumerate(toks):
        cur.append(i)
        p = t['punct']
        nxt = toks[i + 1]['words'][0] if i + 1 < len(toks) and toks[i + 1]['words'] else ''
        long_break = len(cur) >= 7 and nxt in ('dan', 'serta', 'iaitu', 'manakala', 'kerana', 'tetapi', 'yang', 'seperti', 'untuk')
        if p or long_break or i == len(toks) - 1:
            if p and p in '.!…':
                b = 'excl' if p == '!' else 'final'
            elif p == '?':
                sent = []
                for j in range(len(ph) - 1, -1, -1):
                    if ph[j]['b'] in ('final', 'excl', 'q', 'wh'):
                        break
                    sent = ph[j]['idx'] + sent
                sent += cur
                b = 'wh' if any(toks[j]['wh'] for j in sent) else 'q'
            elif p and p in ',;:':
                b = 'cont'
            elif long_break:
                b = 'minor'
            else:
                b = 'final'
            ph.append({'idx': cur, 'b': b, 'punct': p})
            cur = []
    return ph


PAUSE = {'cont': 0.24, 'minor': 0.10, 'final': 0.40, 'excl': 0.40, 'q': 0.42, 'wh': 0.42}


def build(text):
    toks = parse(text)
    phr = phrases_of(toks)
    seg = []          # phones: dict(p, d(sec), tok, word, vowel, stress, kw, last)
    tok_start = {}
    t = 0.035
    seg.append({'p': '_', 'd': 0.035})
    sent_first = True
    contours = []
    for pi, P in enumerate(phr):
        p_start_t = t
        accents = []
        first_content_done = False
        last_tok = P['idx'][-1]
        for ti in P['idx']:
            T = toks[ti]
            tok_start[ti] = t
            for wi, w in enumerate(T['words']):
                ph = g2p(w)
                if not ph:
                    continue
                si = stress_index(ph)
                vi = [k for k, p in enumerate(ph) if p in VOWELS]
                is_last_word = ti == last_tok and wi == len(T['words']) - 1
                content = w not in FUNC and len(vi) >= 2
                for k, p in enumerate(ph):
                    d = DUR.get(p, 70) / 1000.0
                    if k == 0:
                        d *= 1.08
                    if p in VOWELS:
                        if k == si:
                            d *= 1.10
                        if T['kw']:
                            d *= 1.10
                        if is_last_word and vi and k == vi[-1]:
                            d *= 1.45 if P['b'] != 'minor' else 1.2
                        if is_last_word and si is not None and k == si:
                            d *= 1.08
                    else:
                        if k > 0 and (k == len(ph) - 1 or ph[k + 1] not in VOWELS) and ph[k - 1] in VOWELS:
                            d *= 0.85
                        if is_last_word and k == len(ph) - 1:
                            d *= 1.35
                    d *= RATE * 1.06
                    seg.append({'p': p, 'd': d, 't': t, 'vowel': p in VOWELS})
                    if p in VOWELS and k == si:
                        amp = 0.0
                        if T['wh'] and w in WH:
                            amp = 0.22
                        elif T['kw'] and content:
                            amp = 0.21
                        elif T['kw']:
                            amp = 0.13
                        elif content:
                            amp = 0.10
                        if content and not first_content_done:
                            amp += 0.07 if sent_first else 0.035
                            first_content_done = True
                        if amp:
                            accents.append((t + d / 2, amp))
                    t += d
        p_end_t = t
        # boundary + contour parameters
        base_start = (236 if sent_first else 222) * PITCH
        h = int(hashlib.md5((text + str(pi)).encode()).hexdigest()[:4], 16) / 65535.0
        base_start *= 0.97 + 0.06 * h
        contours.append({'t0': p_start_t, 't1': p_end_t, 'f0': base_start, 'f1': base_start * 0.80, 'acc': accents, 'b': P['b']})
        pause = PAUSE[P['b']] * RATE if pi < len(phr) - 1 else 0.06
        seg.append({'p': '_', 'd': pause, 't': t})
        t += pause
        sent_first = P['b'] in ('final', 'excl', 'q', 'wh')
    return toks, seg, contours, tok_start, t


def f0_at(t, C):
    T = max(1e-3, C['t1'] - C['t0'])
    x = min(1.0, max(0.0, (t - C['t0']) / T))
    f = C['f0'] + (C['f1'] - C['f0']) * x
    bump = sum(a * math.exp(-((t - tc) / 0.12) ** 2) for tc, a in C['acc'])
    if C['b'] == 'excl':
        bump *= 1.3
    f *= 1 + bump
    # boundary tone over the last ~0.30 s
    s = min(1.0, max(0.0, (t - (C['t1'] - 0.30)) / 0.30))
    b = C['b']
    if b in ('final', 'excl'):
        f *= 1 - 0.24 * s * s
    elif b == 'cont':
        f *= 1 + 0.16 * s
    elif b == 'minor':
        f *= 1 + 0.05 * s
    elif b == 'q':
        f *= 1 + 0.40 * s * s
    elif b == 'wh':
        f *= 1 - 0.10 * s
    return max(150.0, min(320.0, f))


def to_pho(seg, contours):
    lines = []
    for s in seg:
        ms = max(12, int(round(s['d'] * 1000)))
        if s['p'] in ('_', '?'):
            lines.append(f"_ {ms}")
            continue
        C = next((c for c in contours if c['t0'] - 1e-6 <= s['t'] <= c['t1'] + 1e-6), contours[-1])
        if s['vowel']:
            pts = [(pct, f0_at(s['t'] + s['d'] * pct / 100, C)) for pct in (10, 50, 90)]
        elif s['p'] in VOICED:
            pts = [(50, f0_at(s['t'] + s['d'] / 2, C))]
        else:
            pts = []
        lines.append(f"{s['p']} {ms} " + ' '.join(f"{pc} {int(f)}" for pc, f in pts))
    return '\n'.join(lines) + '\n'


# Diphones missing from the ma1 database (found by synthesising the whole script); more are learnt on the fly.
BAD_PAIRS = {('@', '@'), ('@', 'U'), ('@', 'e'), ('@U', 'U'), ('H', 'I'), ('S', 't'), ('aI', 'h'), ('b', 'n'), ('d', 'S'),
             ('d', 'h'), ('d', 'l'), ('f', '@'), ('j', 'aI'), ('j', 'e'), ('s', 's'), ('z', '@'), ('z', 'p')}


def patch_missing(seg):
    """Insert a short closure between phones whose diphone is missing (instead of mbrola's crude gap).
    The closure borrows time from the previous phone so all timings stay unchanged."""
    SPLIT = {'aI': ('V', 'I'), 'aU': ('V', 'U'), 'OI': ('@U', 'I')}
    seg2 = []
    for s in seg:   # diphthong after a missing transition -> two simple vowels
        if seg2 and s['p'] in SPLIT and (seg2[-1]['p'], s['p']) in BAD_PAIRS:
            a, b = SPLIT[s['p']]
            seg2.append(dict(s, p=a, d=s['d'] * 0.6))
            seg2.append(dict(s, p=b, d=s['d'] * 0.4, t=s['t'] + s['d'] * 0.6))
            continue
        if seg2 and seg2[-1]['p'] in ('j', 'w') and s['p'] in VOWELS and (seg2[-1]['p'], s['p']) in BAD_PAIRS:
            g = seg2.pop()   # glide + vowel missing -> drop the glide, give its time to the vowel
            s = dict(s, t=g['t'], d=s['d'] + g['d'])
        seg2.append(s)
    seg = seg2
    out = []
    for s in seg:
        if out and s['p'] != '_' and out[-1]['p'] != '_' and (out[-1]['p'], s['p']) in BAD_PAIRS:
            both_v = out[-1]['p'] in VOWELS and s['p'] in VOWELS
            gap = 0.030 if both_v else 0.016
            take = min(gap, out[-1]['d'] * 0.4)
            out[-1] = dict(out[-1], d=out[-1]['d'] - take)
            out.append({'p': '_', 'd': take, 't': out[-1]['t'] + out[-1]['d']})
        out.append(s)
    return out


def synth(text, out_wav):
    """Synthesise `text` (Malay, may contain **keyword** markup) to out_wav (44.1 kHz mono).
    Returns (start time in seconds of each whitespace token, list of unresolved mbrola warnings)."""
    toks, seg0, contours, tok_start, total = build(text)
    # '?' (glottal stop) is rendered as a short closure
    for s in seg0:
        if s['p'] == '?':
            s['p'] = '_'
    with tempfile.TemporaryDirectory() as td:
        pf, raw = os.path.join(td, 'in.pho'), os.path.join(td, 'raw.wav')
        for _ in range(3):
            open(pf, 'w').write(to_pho(patch_missing(seg0), contours))
            r = subprocess.run(['mbrola', '-e', MA1, pf, raw], capture_output=True, text=True)
            warns = [l for l in r.stderr.splitlines() if 'unknown' in l]
            new = {tuple(m.group(1, 2)) for m in (re.search(r'Warning: (\S+)-(\S+) unknown', l) for l in warns) if m}
            if not new - BAD_PAIRS:
                break
            BAD_PAIRS.update(new)
        af = ('aresample=44100,highpass=f=75,equalizer=f=280:t=q:w=1.0:g=-2,equalizer=f=3000:t=q:w=1.4:g=2.5,'
              'acompressor=threshold=-20dB:ratio=2.2:attack=6:release=90:makeup=1.5,aecho=0.8:0.85:22|37:0.07|0.04')
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', raw, '-af', af, '-ac', '1', out_wav], check=True)
    times = [tok_start.get(i) for i in range(len(toks))]
    # tokens without speech (pure punctuation) inherit next start
    for i in range(len(times) - 1, -1, -1):
        if times[i] is None:
            times[i] = times[i + 1] if i + 1 < len(times) else total
    return times, warns


if __name__ == '__main__':
    import sys
    tm, w = synth(sys.argv[1], sys.argv[2])
    print(tm, w)
