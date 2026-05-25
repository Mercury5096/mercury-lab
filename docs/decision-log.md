# Decision Log

## Fixed Decisions

- **Language:** Mercury Lab remains an English-first prototype with bilingual-ready content data.
- **Content control:** facts, approved wording, rights status, and overclaim limits remain governed by [mercury-content-source.md](mercury-content-source.md).
- **Cookbook wording:** use only `50+ cookbook-related publishing projects`.
- **Formal rooms:** keep the approved eight experience-based room names from `src/content.js`.
- **Exploration labels:** reference concepts such as `Print to System` may guide route/index language, but do not replace formal room names or add factual claims.
- **Asset safety:** do not show unverified company, brand, publisher, client, or commissioned imagery.

## v0.3 Factory Cutaway Decisions

- **Direction correction:** do not further decorate the v0.2 compact floor plan; rebuild the Factory as an architectural section/cutaway.
- **Homepage hierarchy:** Hero identity is integrated into the Factory drawing header so the building is the initial homepage visual.
- **Scale:** the building is intentionally taller than a viewport and supports scrolling through five levels.
- **Structure layer:** HTML/CSS provides rooms, floor slabs, roofline, shaft, platforms, side index, and console.
- **SVG layer:** decorative SVG is limited to measurement marks, grid accents, level guides, route traces, nodes, and annotations.
- **Room motifs:** v0.3 begins with only three subtle motif prototypes rather than decorating all rooms prematurely.
- **Inspector behavior:** no permanent right-side panel; desktop displays an on-demand floating inspector, while mobile expands the dossier below its selected room.
- **Interaction:** formal rooms remain accessible HTML buttons with visible focus, expanded state, keyboard movement, and an explicitly closable inspector.
- **No static reference image:** the supplied concept image informs layout direction only and is not inserted into the product.

## Superseded Decisions

- The v0.2 CSS Grid floor-plan arrangement and permanently adjacent dossier are superseded by the v0.3 cutaway.
- The prior plan to enrich the compact plan through SVG ornament is superseded; architecture and scale now precede decoration.
- The v0.3 compressed five-level overview is superseded by the v0.4 scroll-based scale model; the building is not intended to fit into one viewport.

## v0.4 Scale Decisions

- **Traversal:** Factory is a continuous multi-level scroll experience, not a complete-building overview.
- **Floor scale:** desktop levels target approximately `80vh` to `100vh`, with one or two major rooms per level.
- **Room priority:** new vertical space is deliberately left available for later spatial detail; v0.4 does not add more motif types.
- **Current location:** the sticky route index observes and highlights the floor passing through the viewport.
- **Index activation:** selecting an index destination scrolls to its level and opens that room dossier.
- **Preserved behavior:** Hero/Factory fusion, formal room names, `src/content.js`, floating desktop inspector, and in-flow mobile dossier continue unchanged.

## Technical Constraints

- No new package is required.
- No canvas, Three.js, WebGL, React Flow, or monolithic illustrated SVG building.
- SVG decoration remains `aria-hidden="true"` and non-interactive.
- Public copy remains data-driven from `src/content.js`.

## Change Note

- **Date:** 2026-05-25
- **Task:** Implement approved v0.4 Factory scale correction.
- **Decision:** Prioritize viewport-scale floors and scroll exploration over additional visual detail.
- **Next:** Request scale and traversal review before building more motifs or restyling downstream sections.
