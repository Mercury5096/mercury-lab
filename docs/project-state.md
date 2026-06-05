# Project State

- **Current version:** `v0.5+`; saved checkpoints include `v0.1` at `2930e03`, `v0.2` at `3ac3835`, `v0.3` at `9cebda6`, `v0.4` at `d12e3f0`, and the completed eight-room foundation at `d1bd91f`.
- **Current goal:** Maintain the completed eight-room desktop foundation and prepare a room-by-room interaction polish pass without changing formal content sources.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md).

## Completed

- Built the English-first, bilingual-ready React / Vite site foundation.
- Preserved all approved public room wording and evidence/display constraints in `src/content.js`.
- Replaced the compact v0.2 floor-plan treatment with a large architectural section interface.
- Fused project identity and Factory entry experience: the cutaway is now the first major visual on the homepage.
- Distributed all eight approved rooms over eight dedicated structural levels.
- Added a sticky desktop route index using functional exploration labels without replacing formal room names.
- Changed the dossier from a permanent side column to an on-demand floating inspector on desktop.
- Implemented mobile behavior as stacked large room levels with the dossier expanded below the selected room.
- Added a restrained SVG measurement/route overlay and dedicated illustrated scene foundations for all eight rooms.
- Verified build, selection, floating inspector behavior, and mobile in-flow dossier layout.
- Expanded the cutaway in v0.4 so each of five floors approaches a viewport in height rather than fitting the entire building into one drawing.
- Added scroll-aware current-level highlighting in the sticky route index and route-index jumps to rooms on distant floors.
- Added v0.5 interior SVG systems for all eight rooms, then replaced the desktop foundation with dedicated illustrated room scenes and basic interaction scaffolds.
- Strengthened the continuous service shaft with subtle ladder, pipe, and data-line cues across floors.
- Split source CSS into global site rules, shared factory cutaway rules, and room-specific scene rules so the next animation pass can be maintained safely.

## Current Structure

- `ContentFactory` now owns the integrated identity header, route index, building section, room activation, and inspector state.
- HTML/CSS builds the roofline, levels, rooms, shaft, platforms, sticky route index, and system console.
- `BlueprintFrame` contributes decorative measurement lines, level marks, route traces, nodes, and annotations only.
- `RoomShell` remains a readable interactive HTML button generated from approved room data.
- `RoomMotifs` now selects dedicated scene components for all eight rooms, with decorative fallback linework retained only for unknown room ids.
- Each desktop level now establishes its own large viewing interval; users travel through the building rather than viewing a compressed full diagram.
- `src/styles.css` remains the global stylesheet entry; current factory maintenance lives in `src/styles/factory-cutaway.css` and `src/styles/factory-scenes.css`.

## Review Focus

- Which scaffold rooms need transparent material props versus CSS/SVG interaction only?
- How should Operation, Commerce, Multimedia, Editorial, and Print gain room-specific micro-interactions without forcing one universal gold-prop language?
- Should compact mode eventually become one department at a time instead of a scaled full-building view?
- Should downstream dark site sections later adopt some of the pale blueprint language after the factory interaction system stabilizes?

## Known Boundaries

- The eight-room foundation is an illustrated desktop baseline, not final animation polish or portfolio imagery.
- Existing lower sections retain their earlier dark manual styling pending approval of the Factory direction.
- The generated visual reference is used for direction only and is not published as a site asset.

## Next Steps

- Preserve the stylesheet split while upgrading interactions one room at a time.
- Start the polish pass with the scaffold rooms, using Cookbook, AI Workflow Lab, and Story Archive as benchmark references.
- Verify desktop room behavior and only then prototype a deliberate compact-mode strategy.
- Continue asset intake and rights review before exposing any real work imagery.

## Update Note

- **Date:** 2026-06-05
- **Task:** Organize the completed eight-room foundation for maintainable polish work.
- **Changed:** Source CSS split, obsolete compact blueprint CSS removed, project state refreshed for the `d1bd91f` eight-room foundation.
- **Files:** `src/styles.css`, `src/styles/factory-cutaway.css`, `src/styles/factory-scenes.css`, and project documents.
- **Risks:** Visual behavior should be rechecked after CSS organization because selectors moved between files.
- **Next:** Use this structure as the clean baseline for room-by-room interaction polish.
