#!/usr/bin/env python3
"""Validate the TitikSejarah Claude Code ecosystem (skills, agents, CLAUDE.md, references).

usage: python3 scripts/validate_ecosystem.py        (run from the repository root or anywhere)

Checks
  Skills  (.claude/skills/<name>/SKILL.md): frontmatter starts on line 1; `name` matches the
          directory, lowercase-hyphen, <= 64 chars; `description` present, <= 1024 chars; < 500 lines;
          sections for responsibilities, workflow, output, quality, examples and mistakes.
  Agents  (.claude/agents/*.md): `name` and `description` present; `name` matches the file name;
          `tools` uses known tool names; every `skills` entry exists; `color` is allowed; body present.
  Docs    CLAUDE.md < 200 lines and lists every agent and skill; every backticked repo path in the
          markdown files exists (placeholders like <slug> are skipped; ../digitalproducts paths are
          checked only when that repository is present); backticked kebab-case names that look like
          agents/skills must exist; known stale strings must not appear.
Exit code 0 = no errors (warnings allowed).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / ".claude" / "skills"
AGENTS = ROOT / ".claude" / "agents"
KNOWN_TOOLS = {"Read", "Write", "Edit", "Grep", "Glob", "Bash", "WebSearch", "WebFetch", "NotebookEdit",
               "Agent", "Task", "TodoWrite", "Skill"}
COLORS = {"red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"}
NAME_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
STALE = {
    "kssm-curriculum-research": "old skill name",
    "TitikSejarah/scripts": "old path prefix (scripts now live at the repo root)",
    "#14305a": "notes palette used as brand colour",
    "30–90 s": "old short-form length (project rule is 35–60 s)",
    "130–150 words per minute": "old narration budget",
}
SKILL_SECTIONS = ["responsibilit", "workflow", "output", "quality", "example", "mistake"]

errors, warnings = [], []


def err(msg): errors.append(msg)
def warn(msg): warnings.append(msg)


def frontmatter(path):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        err(f"{path.relative_to(ROOT)}: frontmatter must start on line 1 with ---")
        return {}, text
    end = text.find("\n---", 4)
    if end < 0:
        err(f"{path.relative_to(ROOT)}: frontmatter not closed")
        return {}, text
    raw, body = text[4:end], text[end + 4:]
    try:
        import yaml  # optional, stricter
        data = yaml.safe_load(raw) or {}
    except ImportError:
        data, key = {}, None
        for line in raw.splitlines():
            if re.match(r"^[A-Za-z_-]+:", line):
                key, _, val = line.partition(":")
                key, val = key.strip(), val.strip()
                data[key] = val.strip('"') if val else []
            elif line.strip().startswith("- ") and key:
                data.setdefault(key, [])
                if isinstance(data[key], list):
                    data[key].append(line.strip()[2:].strip())
    except Exception as e:  # yaml error
        err(f"{path.relative_to(ROOT)}: invalid YAML frontmatter: {e}")
        return {}, body
    return data, body


# ---------- skills ----------
skill_names = set()
for d in sorted(p for p in SKILLS.iterdir() if p.is_dir()):
    f = d / "SKILL.md"
    rel = f.relative_to(ROOT)
    if not f.exists():
        err(f"{d.relative_to(ROOT)}: missing SKILL.md")
        continue
    fm, body = frontmatter(f)
    name, desc = fm.get("name"), fm.get("description")
    skill_names.add(d.name)
    if name != d.name:
        err(f"{rel}: name '{name}' does not match directory '{d.name}'")
    if not name or not NAME_RE.match(str(name)) or len(str(name)) > 64:
        err(f"{rel}: name must be lowercase-hyphen and <= 64 chars")
    if not desc or len(str(desc)) < 50:
        err(f"{rel}: description missing or too short")
    elif len(str(desc)) > 1024:
        err(f"{rel}: description longer than 1024 chars ({len(str(desc))})")
    lines = f.read_text(encoding="utf-8").count("\n")
    if lines >= 500:
        err(f"{rel}: {lines} lines (keep SKILL.md under 500)")
    low = body.lower()
    for s in SKILL_SECTIONS:
        if s not in low:
            err(f"{rel}: no section mentioning '{s}'")

# ---------- agents ----------
agent_names = set()
for f in sorted(AGENTS.glob("*.md")):
    rel = f.relative_to(ROOT)
    fm, body = frontmatter(f)
    name, desc = fm.get("name"), fm.get("description")
    agent_names.add(f.stem)
    if not name or not desc:
        err(f"{rel}: name and description are required")
        continue
    if name != f.stem:
        err(f"{rel}: name '{name}' does not match file name")
    if not NAME_RE.match(str(name)):
        err(f"{rel}: name must be lowercase-hyphen")
    tools = fm.get("tools", "")
    tools = tools if isinstance(tools, list) else [t.strip() for t in str(tools).split(",") if t.strip()]
    for t in tools:
        if t not in KNOWN_TOOLS and not t.startswith("mcp__"):
            err(f"{rel}: unknown tool '{t}'")
    for s in fm.get("skills", []) or []:
        if s not in skill_names:
            err(f"{rel}: preloads unknown skill '{s}'")
    if fm.get("color") and fm["color"] not in COLORS:
        err(f"{rel}: color '{fm['color']}' not allowed")
    if len(body.strip()) < 400:
        err(f"{rel}: body too short to be a usable agent definition")

# ---------- CLAUDE.md ----------
claude = ROOT / "CLAUDE.md"
ctext = claude.read_text(encoding="utf-8")
if ctext.count("\n") >= 200:
    warn(f"CLAUDE.md has {ctext.count(chr(10))} lines (target < 200)")
for n in sorted(agent_names | skill_names):
    if f"`{n}`" not in ctext:
        err(f"CLAUDE.md does not mention `{n}`")

# ---------- cross references in markdown ----------
md_files = [claude] + list((ROOT / ".claude").rglob("*.md")) + list((ROOT / "references").rglob("*.md"))
path_re = re.compile(r"`((?:\.\./digitalproducts/|\.claude/|references/|scripts/|engine/|docs/|episodes/|assets/|output/|content/)[^`\s]*)`")
kebab_re = re.compile(r"`([a-z]+(?:-[a-z]+){1,3})`")
known_names = agent_names | skill_names
ok_kebab = {"ms-my", "with-timestamps", "use-speaker-boost", "kalendar-yyyy-mm", "t4-b01", "pelan-suntingan",
            "laporan-qa", "sumber-visual", "log-fakta", "garis-cerita", "padanan-kssm", "soalan-t4-b07-k1",
            "soalan-set-percubaan-01", "soalan-t5-b01-b05-k2", "ep07-wilayah-pengaruh"}
digital = ROOT.parent / "digitalproducts"
for f in md_files:
    text = f.read_text(encoding="utf-8")
    rel = f.relative_to(ROOT)
    for stale, why in STALE.items():
        if stale in text:
            err(f"{rel}: stale text '{stale}' ({why})")
    for m in path_re.finditer(text):
        p = m.group(1).rstrip(".,;:)")
        if any(c in p for c in "<>*{}") or "…" in p or "NN" in p or "|" in p or "0x" in p:
            continue
        p = p.split(" ")[0].split("#")[0]
        if p.startswith("../digitalproducts/"):
            if digital.exists() and not (ROOT / p).exists():
                err(f"{rel}: missing path {p}")
            continue
        base = f.parent if p.startswith("./") else ROOT
        target = (base / p)
        if not target.exists():
            # paths created per project at run time are fine
            if p.startswith(("output/", "content/", "build/")) or p.endswith("/"):
                continue
            if f.parent != ROOT and (f.parent / p).exists():
                continue
            err(f"{rel}: missing path {p}")
    for m in kebab_re.finditer(text):
        n = m.group(1)
        looks_like = n.endswith(("-checker", "-expert", "-researcher", "-writer", "-director", "-examiner",
                                  "-strategist", "-assurance", "-research", "-check", "-writing", "-telling",
                                  "-creation", "-production", "-publishing", "-generation"))
        if looks_like and n not in known_names and n not in ok_kebab:
            err(f"{rel}: refers to unknown agent/skill `{n}`")

# ---------- report ----------
print(f"skills: {len(skill_names)} ({', '.join(sorted(skill_names))})")
print(f"agents: {len(agent_names)} ({', '.join(sorted(agent_names))})")
for w in warnings:
    print("WARN ", w)
for e in errors:
    print("ERROR", e)
print("RESULT:", "PASS" if not errors else f"FAIL ({len(errors)} errors)")
sys.exit(1 if errors else 0)
