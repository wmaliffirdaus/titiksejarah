# claude-mem snapshot (persistent memory for cloud sessions)

`claude-mem.db` is a consistent SQLite copy of `~/.claude-mem/claude-mem.db`, written by `.claude/hooks/memory-snapshot.sh`
at the end of a turn when memory changed. The cloud environment's setup script copies it back into `~/.claude-mem/`
before Claude starts, so a new session remembers earlier sessions.

- Private repository only. Wrap anything sensitive in `<private>…</private>` in prompts: claude-mem strips it before storage.
- Settings (telemetry off, chill mode, 20 injected observations) live in `.claude/settings.json` → `env`.
- Reset memory: delete `claude-mem.db` and `.fingerprint` here and `~/.claude-mem/claude-mem.db*`. Snapshot uses Python's sqlite3 backup API (no extra packages).
