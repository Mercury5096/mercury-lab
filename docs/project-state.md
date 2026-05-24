# Project State

- **Current version:** `v0.3`; `v0.1` baseline is Git commit `2930e03`, and the saved v0.2 baseline is `3ac3835`.
- **Current goal:** Evaluate the new full-scale Factory Cutaway structure before adding richer drawing detail.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md).

## Completed

- Built the English-first, bilingual-ready React / Vite site foundation.
- Preserved all approved public room wording and evidence/display constraints in `src/content.js`.
- Replaced the compact v0.2 floor-plan treatment with a large architectural section interface.
- Fused project identity and Factory entry experience: the cutaway is now the first major visual on the homepage.
- Distributed all eight approved rooms over five large structural levels.
- Added a sticky desktop route index using functional exploration labels without replacing formal room names.
- Changed the dossier from a permanent side column to an on-demand floating inspector on desktop.
- Implemented mobile behavior as stacked large room levels with the dossier expanded below the selected room.
- Added a restrained SVG measurement/route overlay and three motif prototypes only: Print, Editorial, and AI.
- Verified build, selection, floating inspector behavior, and mobile in-flow dossier layout.

## Current Structure

- `ContentFactory` now owns the integrated identity header, route index, building section, room activation, and inspector state.
- HTML/CSS builds the roofline, levels, rooms, shaft, platforms, sticky route index, and system console.
- `BlueprintFrame` contributes decorative measurement lines, level marks, route traces, nodes, and annotations only.
- `RoomShell` remains a readable interactive HTML button generated from approved room data.
- `RoomMotifs` contains only subtle prototype decorations and does not imply real portfolio assets.

## Review Focus

- Does the homepage now immediately read as a content-factory architectural cutaway?
- Are the five-level proportions and room placements compelling enough before deeper illustration work?
- Is the pale blueprint panel an acceptable visual direction against the existing dark site frame?
- Should the inspector remain a floating drawer or later become more closely anchored to an active room?

## Known Boundaries

- This is a low-detail structural prototype, not final architectural artwork.
- Only three room motifs have been prototyped intentionally.
- Existing lower sections retain their earlier dark manual styling pending approval of the Factory direction.
- The generated visual reference is used for direction only and is not published as a site asset.

## Next Steps

- Review the v0.3 cutaway composition and scale before expanding visual detail.
- If approved, tune architecture line weight, route behavior, and two or three additional motif directions.
- Only afterward decide whether the remaining page sections should adopt the pale blueprint treatment.
- Continue asset intake and rights review before exposing any real work imagery.

## Update Note

- **Date:** 2026-05-24
- **Task:** Rebuild the homepage Factory as a large architectural cutaway.
- **Changed:** Hero/Factory integration, five-level building structure, route index, floating/mobile inspector, basic technical overlay, and three motif prototypes.
- **Files:** `src/App.jsx`, `src/components/ContentFactory.jsx`, `src/components/factory/*`, `src/styles.css`, `package*.json`, and project documents.
- **Risks:** Final art density and cross-section styling remain subject to user review.
- **Next:** Review structural impact before decorative expansion.
