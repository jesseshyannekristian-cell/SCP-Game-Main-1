# FOUNDATION — SCP Site Overseer

A standalone, text-based **SCP Foundation management game** played entirely in your terminal.
You are the Overseer of **Site-20**: research and requisition anomalous-containment equipment,
dispatch containment teams, survive live breaches, manage staff dossiers, and file your own
custom SCPs — all driven by a two-currency economy and a rank-progression ladder.

The repository includes a UE5 C++ first-person shooter starter and the original Python CLI.
The shooter currently has a first-person character, movement, jumping, and hitscan fire. It is
a gameplay scaffold; it does not yet include levels, weapon models, animations, or HUD assets.

## Unreal Engine 5

Open `FoundationSiteOverseer.uproject` in Unreal Engine 5. The default character supports WASD
movement, mouse look, Space to jump, and left-click hitscan fire. Build the
`FoundationSiteOverseer` Editor target from the generated IDE project files.

The Unreal game uses the C++ source under `Source/` and settings under `Config/`. The original
Python game remains available with `python -m game.main`; its save data is not shared with Unreal.

---

## Requirements
- Python 3.11+
- `rich` (already available in this environment): `pip install rich`

## Run it
From the project root (`/app`):

```bash
python -m game.main
# or
python play.py
```

Your progress (save_data.json) and authored SCPs (archives.json) are written to `/app/saves/`.

## Controls
The game is menu-driven. Type the number/letter shown in brackets and press **ENTER**.
In list screens, type the row number to select, or **b** to go back.

---

## Features (Site Overseer Hub)
- **Research Division** — spend **Research Credits** to complete projects. Each unlocks a
  level-locked store item or a **containment procedure** (which gates certain operations).
- **Requisition Store** — buy equipment with **Credits** (Scranton Reality Anchor, Micro-H.I.D.,
  Epsilon-11 Rifle, Kevlar, Hazmat, Thermal Optics, Femur-Bone Lure, research lab kits…).
  Locked items show `RESEARCH REQ'D` / `RANK LOCK` until requirements are met.
- **Containment Operations** — dispatch teams to contain all 22 SCPs and neutralise 8 rogue
  MTF / GOI threats. Success is an RNG roll (`90 − difficulty·8 + rankAbove·10`, clamped 25–95);
  failure still grants partial field XP.
- **Pre-Breach Loadout** — equip up to 4 owned items; each boosts breach survival odds.
- **Breach Response** — text-based survival event vs. a chosen anomaly (Site-20 roster + your
  breachable custom SCPs). Loadout + rank improve your survival chance; outcome is logged.
- **Site-20 Personnel** — lore dossiers for **GUNZ** (O5 Council / "The Technician"),
  **CHEMOSIC** (Site Supervisor, ex-MTF XI-87 Commander), and the **Head Researcher**.
- **Ranks & Rewards** — 6-rank ladder (Junior Researcher → O5 Overseer OMEGA BLACK) with
  auto-promotion + bonus currency, plus the live-breach record.
- **Archives** — JSON-backed CRUD: create, view, edit, and delete your own custom SCP reports.
  Mark a custom SCP as **breachable** to make it selectable in the Breach menu.

## Project layout
```
game/
  main.py        — entry point + main hub loop
  hub.py         — all menu screens
  breach.py      — text-based breach survival event
  state.py       — player progression + save/load (save_data.json)
  archives.py    — custom-SCP database (archives.json)
  data.py        — loads static data, derives research projects + operations
  ui.py          — Rich terminal UI helpers
  data/          — JSON: scps, equipment, ranks, rogue_mtf, procedures, personnel
saves/           — generated save + archives files
play.py          — convenience launcher
```

---

## License & Attribution
Source code and SCP-themed content are released under **CC BY-SA 3.0**.
All SCP names, numbers and lore are the creative work of the **SCP Foundation community**
(https://scp-wiki.wikidot.com/), likewise under CC BY-SA 3.0. This is a non-official, fan-made work.

**ASCII art:** all in-game ASCII art (`game/art.py`), including the SCP-173 depiction, is **original
fan-made work** created for this project (CC BY-SA 3.0). It is **not** derived from any photograph or
copyrighted depiction of any SCP — notably **not** the "Untitled 2004" sculpture historically
associated with SCP-173. See [`LICENSE`](LICENSE) and [`CREDITS.md`](CREDITS.md).
