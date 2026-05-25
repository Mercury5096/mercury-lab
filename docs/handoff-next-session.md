# Next Session Handoff

## Snapshot

- **Date:** 2026-05-25
- **Current version:** `v0.4`
- **Saved baselines:** `v0.1` at `2930e03`; `v0.2` at `3ac3835`; `v0.3` at `9cebda6`
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)

## What Changed

- The prior compact factory floor plan was rejected as too dashboard-like.
- Homepage identity and Factory are now integrated into a single blueprint-style opening scene.
- Factory is rebuilt as a large five-level architectural cutaway containing all eight approved rooms.
- A dark route index remains visible while exploring the tall desktop building.
- Room selection opens a floating desktop inspector without narrowing the building.
- Mobile shows large stacked levels and inserts the active dossier directly below its room.
- Decorative detail is deliberately limited to technical overlays and three motif prototypes.
- v0.4 expands that structure into a scroll-based factory: each floor is now near viewport scale rather than part of a compressed whole-building view.
- The sticky route index follows the visible floor and its buttons can transport users directly to a selected room.

## Component Map

- `src/components/ContentFactory.jsx` - integrated masthead, observed scroll floors, route index navigation, selection state, and dossier.
- `src/components/factory/BlueprintFrame.jsx` - tall measurement and workflow overlay; no structural rooms.
- `src/components/factory/RoomShell.jsx` - room button and HTML-visible labels.
- `src/components/factory/RoomMotifs.jsx` - prototype decorations for Print, Editorial, and AI only.
- `src/styles.css` - viewport-scale floors, building construction, blueprint paper palette, inspector, sticky rail, and mobile stacked behavior.

## Approved Boundaries

- Preserve the formal room names and public copy already represented in `src/content.js`.
- Functional labels in the route index are exploratory UI language, not replacements for the factual rooms.
- Do not publish the supplied concept image or any unreviewed portfolio/brand imagery.
- Do not rebuild the building as a static image or monolithic SVG.
- Keep readable text and controls in HTML; SVG remains decorative and ignores pointer interaction.

## What To Review Next

- Whether the pale drawing sheet plus dark surrounding frame is the desired broad color strategy.
- Whether the long level-by-level traversal finally creates enough architectural scale before adding detail.
- Whether the intentionally open room interiors should next receive structural objects, or whether floor proportions need another pass first.
- Whether desktop inspector positioning should remain floating or eventually align closer to the selected floor.
- Whether the three prototype motifs are sufficiently subtle and directionally useful.

## Suggested Next Work After Approval

- Refine level silhouettes, structural bays, stairs/platform hints, and blueprint annotation rhythm only after scale approval.
- Prototype selected-route transitions and optionally active-level scroll cues.
- Expand motifs selectively rather than drawing all eight at once.
- Only then consider harmonizing Modes, Cases, and Protocol with the new opening scene.

## Verification

- Desktop: each floor remains near viewport scale, index follows scroll location, and building remains dominant before and after room selection.
- Mobile: rooms remain large and selected dossier stays in document flow below its room.
- Content: no changes to approved public factual data.
- Required build: `npm run build`.
