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

## Candidate Next Direction

- **Proposal under review:** consider presenting one major department per visual floor on desktop, rather than asking richly illustrated interactive rooms to share a level.
- **Reason:** dedicated floor height gives background architecture, interactive props, hover targets, and dossier overlap more predictable space.
- **Do not pre-commit:** do not rebuild all remaining floors yet. Build one contrasting second room benchmark first and use it to confirm that the Cookbook workflow transfers beyond kitchen/studio objects.
- **Responsive follow-up:** after two desktop benchmarks, evaluate a compact layout that presents one department at a time instead of scaling the full desktop building with precision-positioned props.

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
