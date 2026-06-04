# Next Session Handoff

## Start Here

Continue Mercury Lab from the completed eight-room desktop foundation state:

- Read this file and `docs/mercury-content-source.md` first.
- The latest committed checkpoint before this handoff is `e851bba` (`Create three room foundation scenes`).
- Today's work adds first-pass desktop backgrounds and basic interaction scaffolds for `Editorial Kitchen` and `Print Engine Room`, completing illustrated foundations for all eight rooms.
- Treat Cookbook, AI Workflow Lab, and Story Archive as reviewed desktop benchmark rooms; treat Operation, Commerce, Multimedia, Editorial, and Print as accepted or near-accepted visual directions with intentionally basic interactions.
- The desktop factory now uses eight full-width department floors with alternating blue and grey-blue floor treatment.
- Next work should pause room creation and review the full project structure, handoff clarity, interaction upgrade plan, and responsive strategy before beginning the detailed animation pass.
- Do not modify `src/content.js` or the formal content source unless the user explicitly changes that instruction.

Suggested opening request for a new window:

> Please read `docs/handoff-next-session.md`, `docs/mercury-content-source.md`, and `docs/room-benchmark-workflow.md`, then continue Mercury Lab from the completed eight-room desktop foundation state. Preserve the accepted eight-floor desktop structure, do not change formal content sources, and begin by reviewing project organization, handoff clarity, and the interaction-upgrade plan before modifying room animations.

## Snapshot

- **Date:** 2026-06-04
- **Latest committed checkpoint before handoff update:** `e851bba` - `Create three room foundation scenes`
- **Previous handoff checkpoint:** `f1085fd` - `Update handoff after AI workflow benchmark`
- **AI Workflow Lab visual checkpoint:** `16ffd10` - `Create AI workflow lab visual benchmark`
- **Cookbook visual baseline commit:** `251e13c` - `Create cookbook production floor visual benchmark`
- **Previous v0.5 checkpoint:** `a14993d`
- **Current focus:** all eight desktop room foundations are now present; next focus is project review, cleanup planning, and interaction refinement strategy.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)
- **Uncommitted work before checkpoint:** Editorial and Print scene components, WebP backgrounds, CSS interaction scaffolds, and this handoff update.
- **Verified in this working session:** `npm run build` passed after Editorial integration and again after Print integration; browser checks confirmed Editorial and Print backgrounds and key target layers load; formal content sources were not modified.

## User Direction

- Proceed gradually, one room at a time; precision and visual coherence matter more than completing all rooms quickly.
- The architectural cutaway / blueprint reference direction is accepted as a strong foundation.
- The desktop building should now preserve the accepted eight dedicated full-width floors rather than returning to paired departments.
- Original blue and grey-blue floor palettes should alternate to enrich level separation; do not make Story Archive the only grey-blue level.
- Props already depicted in the base illustration may later be separated into interactive transparent assets.
- Gold means interactive, active, or movable, but it is not restricted to simplified SVG icons.
- Avoid defining one universal prop style for every room; each room may interpret gold interaction differently.
- Desktop composition is the current priority; responsive treatment may later use one floor or department per view rather than compressing rich interaction layouts.
- For work likely to take longer than a brief edit, give a progress/milestone update so the user knows the preview has not stalled.
- Current Operation, Commerce, Multimedia, Editorial, and Print interactions are intentionally rough foundation scaffolds. The user expects a later pass with finer, more material-specific micro-animations closer in polish to the Cookbook benchmark.

## Implemented Benchmark

`Cookbook Production Floor` now has a dedicated visual prototype:

- One full desktop room background in a pale blueprint / architectural illustration style.
- Four transparent WebP visual props: recipe proofs, cooking pot, plated dish, and tripod camera.
- Four individual prop interactions: staggered proof stamps, pot rock-and-steam, plated-dish glints, and camera flash.
- Props remain subdued when idle and become visually solid only while directly hovered or during their triggered interaction.
- The tripod camera has been rescaled and grounded to photograph the plated dish from the right side of the styling table.
- A light system-interaction layer for route/focus feedback remains separate from the visual props.
- Desktop composition with the richer complete scene.
- Existing tablet/mobile rules remain provisional and were not the target of the latest fine-tuning.

`AI Workflow Lab` now establishes the second approved desktop room benchmark:

- A new cool-blue architectural room background, installed as an optimized WebP fixed layer.
- A full-width Level `00` presentation so research, prompt, central pipeline, review, and delivery areas are legible.
- Five optional pointer-led exploration targets: `Research`, `Prompt`, `Generate`, `Review`, and `Deliver`.
- The central `Generate` graph uses a controlled user-triggered pulse rather than ambient autonomous motion.
- Desktop `Prompt` was relocated to its wall-mounted design board and `Generate` was raised to its central screen after visual review.
- Pointer-led props remain acceptable as optional exploration while the factual dossier stays keyboard accessible.

`Story Archive & IP Office` now establishes the third reviewed desktop room benchmark:

- The desktop factory is expanded to eight dedicated department floors; `Story Archive & IP Office` occupies full-width Level `04`.
- Alternating original blue and grey-blue floor treatment is installed across the eight levels as the currently accepted depth rhythm.
- A cool grey-blue archive-office cutaway is installed as an optimized fixed WebP background with generic, non-identifying paper materials only.
- Four direct-trigger exploration targets are present: `Archive`, `Develop`, `Review`, and `Protect`.
- `Review` uses a transparent generic manuscript-page WebP: six pages appear in sequence, clear, repeat for a second pass, then settle after a short reviewed signal.
- Archive and Protect idle cues were strengthened for discoverability; the Review page brightness was reduced after visual review so its drawn detail remains legible.
- These interactions remain optional visual exploration; no formal room copy, publication claim, or rights status was changed.

`Operation Control Room` now has a first-pass desktop foundation:

- A blue architectural operations-room background was generated from the user's reference direction, then revised because the first draft was too pale.
- It occupies full-width Level `03` using the original blue floor family.
- The room emphasizes central command desk, workflow boards, resource shelving, and delivery/status surfaces.
- Four basic pointer-led targets are installed: `Intake`, `Assign`, `Track`, and `Deliver`.
- The user accepted the overall visual direction while noting that interactions across the new rooms are still basic and should be improved later.

`Commerce Visual Line` now has a first-pass desktop foundation:

- A grey-blue visual-production background is installed on Level `02`.
- The accepted direction is product-visual sampling and adaptation rather than information-board workflow: abstract posters, typography samples, generic logo marks, video frames, product mockups, packaging boxes, color cards, and export surfaces.
- Four basic pointer-led targets are installed: `Sample`, `Compose`, `Adapt`, and `Export`.
- The room deliberately uses generic, non-branded objects only; no GSK, real platform, product, medicine, or client imagery is displayed.

`Multimedia Workshop` now has a first-pass desktop foundation:

- A blue mixed-media prototype-studio background is installed on Level `01`.
- The room emphasizes storyboard/script materials, web and video screens, motion/animation timelines, 3D/prototype testing, game test/listening equipment, sketchbooks, storage, and physical media materials.
- Four basic pointer-led targets are installed: `Storyboard`, `Edit`, `Prototype`, and `Test`.
- The user approved the visual direction; the interaction layer remains intentionally simple until the remaining rooms are completed.

`Editorial Kitchen` now has a first-pass desktop foundation:

- A grey-blue editorial-production background is installed on Level `06`, aligned with the alternating grey-blue floor family.
- The room combines food/lifestyle editorial workflow, blank page spreads, clipping boards, layout tables, review desks, shelves, and neutral food-prep references without implying a complete archive.
- Four basic pointer-led targets are installed: `Draft`, `Layout`, `Edit`, and `Release`.
- The background uses generic blank or abstract page materials only; no real magazine covers, publishers, client materials, or readable publication text are displayed.

`Print Engine Room` now has a first-pass desktop foundation:

- A blue print-production background is installed on Level `07`, aligned with the original blue floor family.
- The first generated version was visually acceptable but too similar to other workstation rooms. The accepted v2 direction keeps the print/check machine while adding clearer generic printed output: product posters, restaurant-style promotional flyers, book proofs, folded brochures, paper swatches, color bars, crop marks, and registration boards.
- Four basic pointer-led targets are installed: `Scan`, `Arrange`, `Proof`, and `Output`.
- All printed samples remain abstract and non-identifying; no logos, brands, publishers, real products, restaurant identities, characters, or readable client/publication text are displayed.

## Asset And Component Map

- `public/assets/factory/cookbook/background-desktop-v1.webp` - single base illustration for the Cookbook room.
- `public/assets/factory/cookbook/props/*.webp` - transparent visual props intended to blend with the base illustration.
- `src/components/factory/scenes/CookbookProductionScene.jsx` - Cookbook scene composition and interaction overlays.
- `public/assets/factory/ai-workflow/background-desktop-v1.webp` - fixed AI Workflow Lab desktop illustration.
- `src/components/factory/scenes/AiWorkflowLabScene.jsx` - AI Workflow Lab interaction prototype.
- `public/assets/factory/story-archive/background-desktop-v1.webp` - fixed Story Archive desktop illustration.
- `public/assets/factory/story-archive/props/review-page-v1.webp` - transparent generic manuscript page used in the central sequence.
- `src/components/factory/scenes/StoryArchiveScene.jsx` - Story Archive direct-trigger interaction prototype.
- `public/assets/factory/operation/background-desktop-v1.webp` - fixed Operation Control Room desktop illustration.
- `src/components/factory/scenes/OperationControlScene.jsx` - Operation basic interaction scaffold.
- `public/assets/factory/commerce/background-desktop-v1.webp` - fixed Commerce Visual Line desktop illustration.
- `src/components/factory/scenes/CommerceVisualScene.jsx` - Commerce basic interaction scaffold.
- `public/assets/factory/multimedia/background-desktop-v1.webp` - fixed Multimedia Workshop desktop illustration.
- `src/components/factory/scenes/MultimediaWorkshopScene.jsx` - Multimedia basic interaction scaffold.
- `public/assets/factory/editorial/background-desktop-v1.webp` - fixed Editorial Kitchen desktop illustration.
- `src/components/factory/scenes/EditorialKitchenScene.jsx` - Editorial basic interaction scaffold.
- `public/assets/factory/print/background-desktop-v1.webp` - first Print Engine Room generated draft, retained but not used.
- `public/assets/factory/print/background-desktop-v2.webp` - active Print Engine Room desktop illustration with stronger print-sample identity.
- `src/components/factory/scenes/PrintEngineScene.jsx` - Print basic interaction scaffold.
- `src/components/factory/RoomMotifs.jsx` - selects dedicated scenes for all eight rooms.
- `src/components/factory/BlueprintFrame.jsx` - eight-level desktop frame and route guides.
- `src/styles.css` - scene layering, prop placement, route/focus accents, and responsive simplification.
- `src/components/ContentFactory.jsx` - overall factory navigation, selection state, and dossier behavior.

## Approved Visual Rules

- Preserve the tall multi-floor factory architecture and HTML-based room labels / controls.
- Fixed architectural/background elements can stay cool blue and low contrast.
- Interactive or movable elements can use warm gold/orange emphasis.
- Use SVG/CSS for system interaction: route lines, nodes, scan/focus cues, outlines, and hover feedback.
- Use transparent PNG/WebP-style image props when an object needs to visually belong inside an illustrated room.
- Gold props should read as objects in the room, not pasted-on generic icons.
- Keep the base illustration and prop layer separable so future motion or interaction remains possible.
- Story Archive's current readable idle cues are an accepted local solution; they do not require retrofitting Cookbook's transparency behavior.

## Responsive Strategy

- Complete and approve desktop room composition first, because prop placement depends on fixed architectural surfaces.
- Preserve the accepted desktop architecture in which each visual floor presents one department/room, giving interactive objects sufficient readable scale.
- Continue building remaining rooms gradually; six departments currently have illustrated scene treatments.
- Tablet/mobile strategy is now an open design question. A later compact experience may show one floor or one department at a time instead of squeezing the desktop cutaway and its precise prop hotspots.
- Reuse shared assets when practical, but allow alternate crops or layouts only after the small-screen interaction model is chosen.

## Boundaries

- Do not modify formal copy in `src/content.js` or `docs/mercury-content-source.md` while doing visual refinement.
- Do not replace the whole factory with a single static illustration.
- Do not turn the current gold SVG treatment into a rigid site-wide rule.
- Do not generate assets for all eight rooms before a room's composition and purpose have been reviewed.
- Do not publish the supplied visual reference image as a product asset.

## Next Tasks

### Priority 1: Review And Prepare The Next Phase

- All eight desktop room foundations are now present.
- Before adding detailed animation, review the project structure, component organization, CSS organization, asset map, handoff clarity, and protected source boundaries.
- Confirm whether `src/styles.css` should remain as one large stylesheet for the next polish pass or be reorganized by room/scene before animation work.
- Preserve the existing formal room order, wording, and rights constraints while reviewing.
- Do not change `src/content.js` or `docs/mercury-content-source.md`.

### Priority 2: Interaction Upgrade Pass

- The user explicitly noticed that Operation, Commerce, and Multimedia interactions are visually useful but still somewhat stiff.
- Editorial and Print are also intentionally basic at this stage.
- Now that all eight rooms have at least a background and basic interaction scaffold, plan the interaction-polish pass room by room.
- Later upgrade each room's interaction language according to its material identity rather than forcing one universal animation style.
- Possible focus: make Commerce more tactile and design-sampling oriented, Multimedia more motion/prototype/test oriented, Operation more coordination/control oriented, Editorial more page-cycle/review oriented, and Print more physical proof/output oriented.

### Priority 3: Responsive Direction After Desktop Proof

- Postpone precision responsive placement while the remaining desktop room benchmarks are still being developed.
- After the desktop benchmark sequence is sufficiently stable, prototype a compact mode showing one department at a time and compare it with scaled full-building navigation.
- Only then decide whether mobile needs alternate background crops, different prop density, or a separate navigation treatment.

### Later Tasks

- Consider a Mercury Lab handoff skill or project-specific checklist now that the eight-room foundation workflow has been repeated across the full set.
- Harmonize downstream site sections only after the room illustration system and floor structure are stable.

## Verification Checklist For Next Session

- Open the local preview and compare all eight illustrated rooms before changing interaction style.
- If an accepted benchmark is changed, re-check its prop targets and return-to-idle behavior; for Story Archive specifically, verify the six-page/two-pass Review sequence.
- For Operation, Commerce, Multimedia, Editorial, and Print, confirm the background loads and basic target labels still appear after any CSS edits.
- Preserve the accepted eight dedicated desktop floors and alternating palette unless a later design review explicitly revises them.
- Run `npm run build` after changes.
- Before making any checkpoint, confirm formal content sources were not modified.
