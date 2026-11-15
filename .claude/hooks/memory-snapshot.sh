#!/bin/bash
# claude-mem persistence for ephemeral cloud containers.
# Saves a consistent copy of the live memory DB (~/.claude-mem/claude-mem.db) into the private repo,
# only when memory changed. The environment setup script restores it into ~/.claude-mem on the next session.
# Never blocks the session: every failure exits 0 silently.
exec python3 -I - "${CLAUDE_MEM_DATA_DIR:-$HOME/.claude-mem}/claude-mem.db" "${CLAUDE_PROJECT_DIR:-$(pwd)}/.claude-mem-snapshot" <<'PY' 2>/dev/null || exit 0
import os, sqlite3, sys
live, d = sys.argv[1], sys.argv[2]
snap, fpf = os.path.join(d, "claude-mem.db"), os.path.join(d, ".fingerprint")
if not os.path.exists(live):
    sys.exit(0)
os.makedirs(d, exist_ok=True)
src = sqlite3.connect(f"file:{live}?mode=ro", uri=True, timeout=5)
def q(sql):
    try: return str(src.execute(sql).fetchone())
    except Exception: return "-"
fp = "|".join(q(s) for s in ("SELECT count(*), max(id) FROM observations",
                             "SELECT count(*), max(id) FROM session_summaries",
                             "SELECT count(*), max(id) FROM sdk_sessions"))
if os.path.exists(snap) and os.path.exists(fpf) and open(fpf).read() == fp:
    sys.exit(0)
tmp = snap + ".tmp"
if os.path.exists(tmp): os.remove(tmp)
dst = sqlite3.connect(tmp)
src.backup(dst)                      # online backup API: consistent even while the worker writes (WAL)
dst.execute("PRAGMA journal_mode=DELETE"); dst.execute("VACUUM"); dst.close(); src.close()
os.replace(tmp, snap)
open(fpf, "w").write(fp)
PY
