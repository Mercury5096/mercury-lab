# Next Session Handoff

## Start Here

Continue Mercury Lab from the approved Cookbook, AI Workflow Lab, and Story Archive desktop benchmark state:

- Read this file and `docs/mercury-content-source.md` first.
- The latest visual checkpoint is `54b725b` (`Create story archive visual benchmark`); the Story Archive implementation builds on `16ffd10`.
- Treat Cookbook, AI Workflow Lab, and Story Archive as reviewed desktop benchmark rooms.
- The desktop factory now uses eight full-width department floors with alternating blue and grey-blue floor treatment.
- Next work should either refine the accepted Story Archive interaction assets or select the next contrasting department room.
- Do not modify `src/content.js` or the formal content source unless the user explicitly changes that instruction.

Suggested opening request for a new window:

> Please read `docs/handoff-next-session.md`, `docs/mercury-content-source.md`, `docs/room-benchmark-workflow.md`, and `docs/story-archive-ip-office-design-brief.md`, then continue Mercury Lab from visual checkpoint `54b725b`. Preserve the accepted eight-floor desktop structure and Story Archive interactions while deciding the next refinement or room benchmark. Do not change formal content sources, and give a visible progress update before any longer production pass.

## Snapshot

- **Date:** 2026-05-26
- **Latest visual checkpoint:** `54b725b` - `Create story archive visual benchmark`
- **Previous handoff checkpoint:** `f1085fd` - `Update handoff after AI workflow benchmark`
- **AI Workflow Lab visual checkpoint:** `16ffd10` - `Create AI workflow lab visual benchmark`
- **Cookbook visual baseline commit:** `251e13c` - `Create cookbook production floor visual benchmark`
- **Previous v0.5 checkpoint:** `a14993d`
- **Current focus:** preserve the reviewed `Story Archive & IP Office` desktop prototype and choose the next bounded iteration without altering formal content.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)
- **Verified in this working session:** `npm run build` passed after Story Archive WebP integration and final manuscript-page contrast adjustment; the user reviewed the desktop room in local preview; formal content sources were not modified.

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

## Asset And Component Map

- `public/assets/factory/cookbook/background-desktop-v1.webp` - single base illustration for the Cookbook room.
- `public/assets/factory/cookbook/props/*.webp` - transparent visual props intended to blend with the base illustration.
- `src/components/factory/scenes/CookbookProductionScene.jsx` - Cookbook scene composition and interaction overlays.
- `public/assets/factory/ai-workflow/background-desktop-v1.webp` - fixed AI Workflow Lab desktop illustration.
- `src/components/factory/scenes/AiWorkflowLabScene.jsx` - AI Workflow Lab interaction prototype.
- `public/assets/factory/story-archive/background-desktop-v1.webp` - fixed Story Archive desktop illustration.
- `public/assets/factory/story-archive/props/review-page-v1.webp` - transparent generic manuscript page used in the central sequence.
- `src/components/factory/scenes/StoryArchiveScene.jsx` - Story Archive direct-trigger interaction prototype.
- `src/components/factory/RoomMotifs.jsx` - selects dedicated Cookbook, AI Workflow Lab, and Story Archive scenes; remaining room motifs stay schematic.
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
- Continue building remaining rooms gradually; only three departments currently have rich illustrated scene treatments.
- Tablet/mobile strategy is now an open design question. A later compact experience may show one floor or one department at a time instead of squeezing the desktop cutaway and its precise prop hotspots.
- Reuse shared assets when practical, but allow alternate crops or layouts only after the small-screen interaction model is chosen.

## Boundaries

- Do not modify formal copy in `src/content.js` or `docs/mercury-content-source.md` while doing visual refinement.
- Do not replace the whole factory with a single static illustration.
- Do not turn the current gold SVG treatment into a rigid site-wide rule.
- Do not generate assets for all eight rooms before a room's composition and purpose have been reviewed.
- Do not publish the supplied visual reference image as a product asset.

## Next Tasks

### Priority 1: Review Story Archive Follow-up

- Preserve the accepted fixed background, alternating floor palette, and central two-pass manuscript-page sequence.
- If additional illustrated props are requested, consider Archive or Protect only after a focused desktop visual review; their current cues were acceptable at checkpoint time.
- Inspect the Story Archive room with the dossier open before any further placement refinement, particularly around the right-side secure records area.

### Priority 2: Select The Next Room Benchmark

- Use [room-benchmark-workflow.md](room-benchmark-workflow.md), now supported by Cookbook, AI Lab, and Story Archive.
- Continue treating pointer-led object effects as optional exploration unless any target begins carrying unique required information.
- Select a fourth room whose imagery and interaction problem contrasts with the three completed benchmarks; do not produce assets for multiple rooms at once.
- Preserve the existing formal room order, wording, and rights constraints while planning it.

### Priority 3: Responsive Direction After Desktop Proof

- Postpone precision responsive placement while the remaining desktop room benchmarks are still being developed.
- After the desktop benchmark sequence is sufficiently stable, prototype a compact mode showing one department at a time and compare it with scaled full-building navigation.
- Only then decide whether mobile needs alternate background crops, different prop density, or a separate navigation treatment.

### Later Tasks

- Consider a Mercury Lab handoff skill after the workflow has been used on a second room.
- Harmonize downstream site sections only after the room illustration system and floor structure are stable.

## Verification Checklist For Next Session

- Open the local preview and use Cookbook, AI Lab, and Story Archive as visual comparisons when planning the next room.
- If an accepted benchmark is changed, re-check its prop targets and return-to-idle behavior; for Story Archive specifically, verify the six-page/two-pass Review sequence.
- Preserve the accepted eight dedicated desktop floors and alternating palette unless a later design review explicitly revises them.
- Run `npm run build` after changes.
- Before making any checkpoint, confirm formal content sources were not modified.
