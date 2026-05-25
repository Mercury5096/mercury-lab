# Project State

- **Current version:** `v0.5`; saved checkpoints include `v0.1` at `2930e03`, `v0.2` at `3ac3835`, `v0.3` at `9cebda6`, `v0.4` at `d12e3f0`, and the current `v0.5` checkpoint.
- **Current goal:** Evaluate low-density room interiors within the accepted multi-level Factory scale.
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
- Expanded the cutaway in v0.4 so each of five floors approaches a viewport in height rather than fitting the entire building into one drawing.
- Added scroll-aware current-level highlighting in the sticky route index and route-index jumps to rooms on distant floors.
- Added v0.5 interior SVG systems for all eight rooms, using room-specific equipment silhouettes and workflow symbols.
- Strengthened the continuous service shaft with subtle ladder, pipe, and data-line cues across floors.

## Current Structure

- `ContentFactory` now owns the integrated identity header, route index, building section, room activation, and inspector state.
- HTML/CSS builds the roofline, levels, rooms, shaft, platforms, sticky route index, and system console.
- `BlueprintFrame` contributes decorative measurement lines, level marks, route traces, nodes, and annotations only.
- `RoomShell` remains a readable interactive HTML button generated from approved room data.
- `RoomMotifs` now provides decorative room-interior linework for all eight rooms and does not imply real portfolio assets.
- Each desktop level now establishes its own large viewing interval; users travel through the building rather than viewing a compressed full diagram.

## Review Focus

- Do the eight interior silhouettes make the rooms identifiable before selection without becoming noisy?
- Does active-state detail contrast remain restrained enough alongside the floating dossier?
- Is the pale blueprint panel an acceptable visual direction against the existing dark site frame?
- Should the inspector remain a floating drawer or later become more closely anchored to an active room?

## Known Boundaries

- This is a lightweight blueprint-interior pass, not final architectural artwork or portfolio imagery.
- Existing lower sections retain their earlier dark manual styling pending approval of the Factory direction.
- The generated visual reference is used for direction only and is not published as a site asset.

## Next Steps

- Review the v0.5 room identities and interior density before adding richer architecture detail.
- If approved, tune line weights, floor-to-floor continuity, and active-room emphasis.
- Only afterward decide whether the remaining page sections should adopt the pale blueprint treatment.
- Continue asset intake and rights review before exposing any real work imagery.

## Update Note

- **Date:** 2026-05-25
- **Task:** Add lightweight functional interiors to the accepted multi-level Factory.
- **Changed:** Eight decorative interior systems, equipment silhouettes, symbolic motifs, and vertical service-shaft cues while retaining v0.4 scale.
- **Files:** `src/App.jsx`, `src/components/ContentFactory.jsx`, `src/components/factory/*`, `src/styles.css`, `package*.json`, and project documents.
- **Risks:** Final art density and cross-section styling remain subject to user review.
- **Next:** Use this checkpoint as the clean baseline for reviewing room recognizability and density before additional visual refinement.
