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

## v0.5 Interior Decisions

- **Scope:** retain v0.4 scale and traversal; work only on making existing large rooms visually identifiable.
- **Room interiors:** every room receives a decorative blueprint SVG layer with a grid, floor line, equipment silhouette, and room-specific workflow symbol.
- **Density:** inactive interiors remain low opacity; active or hovered rooms reveal stronger linework without replacing readable HTML labels.
- **Continuity:** enhance the existing service shaft with ladder, pipe, and data-line cues rather than adding another structural layout.
- **Content protection:** room interiors are abstract diagrams only; they do not expose or imply unapproved portfolio/client assets.

## Cookbook Desktop Benchmark Decisions

- **Benchmark role:** `Cookbook Production Floor` is the first rich illustrated desktop room benchmark and is close to approved for desktop presentation.
- **Separated visual layers:** the architectural room background remains a cool blueprint illustration; four warm transparent props remain independent interaction layers.
- **Interaction behavior:** recipe proofs, cooking pot, plated dish, and tripod camera each respond independently to pointer hover and click rather than brightening together with the full room.
- **Idle and focus treatment:** interactive props remain translucent while idle and become solid only during direct exploration or their triggered animation.
- **Prop actions:** recipe proofs receive staggered proof stamps; the pot rocks before steaming; the plated dish receives staggered glints; the camera produces a flash.
- **Spatial credibility:** interactive props must be positioned on believable work surfaces or floors; the tripod camera is scaled to photograph the plated dish from beside its table.
- **Current scope:** desktop interaction placement is being approved first. Existing narrow-screen placement is provisional until the overall room/floor model is settled.

## Dedicated Desktop Floor Decision

- **Date:** 2026-05-26
- **Accepted structure:** expand the desktop factory from five mixed visual levels to eight dedicated department floors while preserving approved room order and formal content.
- **Floor sequence:** `07` Print Engine Room, `06` Editorial Kitchen, `05` Cookbook Production Floor, `04` Story Archive & IP Office, `03` Operation Control Room, `02` Commerce Visual Line, `01` Multimedia Workshop, and `00` AI Workflow Lab.
- **Reason:** dedicated floor height gives backgrounds, interactive props, hover targets, and dossier overlap a stable composition scale for the remaining room benchmarks.
- **Boundary:** this structural revision does not change `src/content.js`, `docs/mercury-content-source.md`, factual copy, or rights status.
- **Responsive follow-up:** evaluate a compact layout that presents one department at a time instead of scaling the full desktop building with precision-positioned props.

## Story Archive Benchmark Planning

- **Date:** 2026-05-26
- **Selected third benchmark:** `Story Archive & IP Office`, to be developed on dedicated `Level 04` after the accepted eight-floor structural revision.
- **Purpose:** test archive shelves, story development surfaces, creator handoff, and rights-aware handling as a quiet paper-based interaction language distinct from Cookbook and AI Workflow Lab.
- **Reference boundary:** the supplied archive-office image guides spatial composition only and is not a public product asset.
- **Content boundary:** use generic manuscript and review materials only; do not show identifiable covers, publishers, commissioned imagery, contracts, or completed rights-clearance implications.
- **Working interaction sequence:** `Archive`, `Develop`, `Review`, and `Protect`.
- **Design brief:** see [story-archive-ip-office-design-brief.md](story-archive-ip-office-design-brief.md).
- **Initial interaction prototype:** four direct-trigger targets are installed for visual
  review; `Archive`, `Develop`, and `Protect` use lightweight interface signals, while the
  central `Review` surface sequences a transparent generic manuscript-page asset through six
  positions and two passes before returning to idle.

## 2026-05-29 Room Foundation Expansion

- **Scope:** extend the eight-floor desktop factory foundation by adding first-pass illustrated backgrounds and basic interaction scaffolds for `Operation Control Room`, `Commerce Visual Line`, and `Multimedia Workshop`.
- **Current status:** six of eight departments now have dedicated illustrated scene treatments: Cookbook, Story Archive, Operation, Commerce, Multimedia, and AI Workflow Lab.
- **Content boundary:** no formal public copy, room order, rights status, or source-of-truth wording was changed. `src/content.js` and `docs/mercury-content-source.md` remain protected.
- **Operation Control Room:** accepted as an original blue-floor room on Level `03`, using a command-room background and four basic coordination targets: `Intake`, `Assign`, `Track`, and `Deliver`.
- **Commerce Visual Line:** accepted as a grey-blue Level `02` visual production line using generic posters, typography samples, logo marks, video frames, packaging/product mockups, color cards, and export surfaces. It must not show GSK, real brands, recognizable products, real platform UI, medicine, or client materials.
- **Multimedia Workshop:** accepted as an original blue Level `01` mixed-media prototype studio using storyboard/script materials, web/video/motion screens, 3D/prototype/game-test and listening references, and physical media materials.
- **Interaction decision:** new room interactions are intentionally basic placeholders until all eight room foundations are present. The user noted they feel somewhat stiff; defer a dedicated interaction-polish pass until `Print Engine Room` and `Editorial Kitchen` are also scaffolded.
- **Remaining room foundations:** `Editorial Kitchen` / Level `06` / grey-blue, and `Print Engine Room` / Level `07` / original blue.

## 2026-06-05 CSS Maintenance Baseline

- **Scope:** organize the completed `d1bd91f` eight-room foundation before beginning detailed animation polish.
- **Decision:** do not hand-minify source CSS. Keep readable source files and let Vite produce optimized build output.
- **Stylesheet split:** keep global site and shared panel rules in `src/styles.css`; move shared eight-level factory building rules to `src/styles/factory-cutaway.css`; move room-specific scene placement and animation keyframes to `src/styles/factory-scenes.css`.
- **Cleanup:** remove obsolete compact blueprint / room-grid CSS selectors that were no longer referenced by the current React components.
- **Content boundary:** `src/content.js` and `docs/mercury-content-source.md` remain protected and were not part of this maintenance pass.

## AI Workflow Lab Benchmark Selection

- **Date:** 2026-05-26
- **Selected second benchmark:** `AI Workflow Lab`, approved for planning after review of the supplied room reference image.
- **Purpose:** test the illustrated-room approach on an abstract human-in-the-loop research workflow contrasting with Cookbook's physical production workflow.
- **Working sequence:** research context, prompt design, assisted generation, human review/refinement, and output/delivery.
- **Implementation boundary:** design and validate this room on its existing dedicated level before deciding whether the whole desktop factory moves to one department per floor.
- **Reference boundary:** the supplied AI Workflow Lab reference guides design only and is not a public product asset.
- **Design brief:** see [ai-workflow-lab-design-brief.md](ai-workflow-lab-design-brief.md).
- **Initial integration:** the desktop fixed background was installed for visual review on
  expanded Level `00` before interaction layers were prototyped.
- **Interaction prototype:** five direct-trigger CSS/SVG workflow targets now test the spatial
  reading and human-review behavior before committing to separate generated prop images.
- **Exploration access boundary:** illustrated props may remain pointer-led when they add
  optional desktop exploration only; approved factual content and dossier access must remain
  keyboard available. Revisit prop-level keyboard interaction if any prop becomes essential content.
- **Position refinement:** desktop `Prompt` was relocated to the wall-mounted prompt design
  board above its computer, and `Generate` was raised to align with the central screen.
- **Reusable workflow:** the two accepted room benchmarks now support documenting a repeatable
  room-design process; see [room-benchmark-workflow.md](room-benchmark-workflow.md).

## Technical Constraints

- No new package is required.
- No canvas, Three.js, WebGL, React Flow, or monolithic illustrated SVG building.
- SVG decoration remains `aria-hidden="true"` and non-interactive.
- Public copy remains data-driven from `src/content.js`.

## Change Note

- **Date:** 2026-05-25
- **Task:** Implement v0.5 functional interior pass after checkpointing v0.4.
- **Decision:** Add restrained room identity and equipment silhouettes without changing accepted floor scale or approved content data.
- **Next:** Checkpoint v0.5 as the baseline for the next-session density and room-recognition review.

## Cookbook Refinement Change Note

- **Date:** 2026-05-25
- **Task:** Refine the Cookbook desktop benchmark through spatially grounded props and individual interactions.
- **Decision:** Treat Cookbook as near-complete for desktop review and use it to evaluate a larger one-department-per-floor direction.
- **Changed:** prop grounding, individual hover materialization, click-triggered proof/steam/glint/flash effects, and camera scale/placement for believable food photography.
- **Boundary:** `src/content.js` and `docs/mercury-content-source.md` remain unchanged.
- **Next:** review and checkpoint Cookbook, then choose one contrasting second room before restructuring the complete factory.
