# Next Session Handoff

## Start Here

Continue Mercury Lab from the approved Cookbook and AI Workflow Lab desktop benchmark state:

- Read this file and `docs/mercury-content-source.md` first.
- The latest visual checkpoint is `16ffd10` (`Create AI workflow lab visual benchmark`); the Cookbook visual baseline began at `251e13c`.
- Treat Cookbook and AI Workflow Lab as the two approved desktop benchmark rooms.
- Next work should plan a contrasting third room, preferably `Story Archive & IP Office`, before changing the complete floor structure.
- Do not modify `src/content.js` or the formal content source unless the user explicitly changes that instruction.

Suggested opening request for a new window:

> Please read `docs/handoff-next-session.md`, `docs/mercury-content-source.md`, and `docs/room-benchmark-workflow.md`, then continue Mercury Lab from visual checkpoint `16ffd10`. Use the approved Cookbook and AI Workflow Lab desktop benchmarks to plan Story Archive & IP Office as the next contrasting room. Do not change formal content sources.

## Snapshot

- **Date:** 2026-05-26
- **Latest visual checkpoint:** `16ffd10` - `Create AI workflow lab visual benchmark`
- **Previous handoff checkpoint:** `c3088c2` - `Update handoff for cookbook visual benchmark`
- **Cookbook visual baseline commit:** `251e13c` - `Create cookbook production floor visual benchmark`
- **Previous v0.5 checkpoint:** `a14993d`
- **Current focus:** use the two approved desktop benchmarks and the documented room workflow to prepare `Story Archive & IP Office`.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)
- **Verified in this working session:** `npm run build` passed after final AI placement refinement; desktop placement was inspected in local preview; formal content sources were not modified.

## User Direction

- Proceed gradually, one room at a time; precision and visual coherence matter more than completing all rooms quickly.
- The architectural cutaway / blueprint reference direction is accepted as a strong foundation.
- The Cookbook room should establish the visual language before expanding it to other floors.
- Props already depicted in the base illustration may later be separated into interactive transparent assets.
- Gold means interactive, active, or movable, but it is not restricted to simplified SVG icons.
- Avoid defining one universal prop style for every room; each room may interpret gold interaction differently.
- Desktop composition is the current priority; responsive treatment may later use one floor or department per view rather than compressing rich interaction layouts.

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

## Asset And Component Map

- `public/assets/factory/cookbook/background-desktop-v1.webp` - single base illustration for the Cookbook room.
- `public/assets/factory/cookbook/props/*.webp` - transparent visual props intended to blend with the base illustration.
- `src/components/factory/scenes/CookbookProductionScene.jsx` - Cookbook scene composition and interaction overlays.
- `public/assets/factory/ai-workflow/background-desktop-v1.webp` - fixed AI Workflow Lab desktop illustration.
- `src/components/factory/scenes/AiWorkflowLabScene.jsx` - AI Workflow Lab interaction prototype.
- `src/components/factory/RoomMotifs.jsx` - selects dedicated Cookbook and AI Workflow Lab scenes; remaining room motifs stay schematic.
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

## Responsive Strategy

- Complete and approve desktop room composition first, because prop placement depends on fixed architectural surfaces.
- Explore a desktop architecture in which each major visual floor presents one department/room, giving interactive objects sufficient readable scale.
- Do not retrofit every remaining room immediately; prove the approach with one contrasting second benchmark before restructuring all floors.
- Tablet/mobile strategy is now an open design question. A later compact experience may show one floor or one department at a time instead of squeezing the desktop cutaway and its precise prop hotspots.
- Reuse shared assets when practical, but allow alternate crops or layouts only after the small-screen interaction model is chosen.

## Boundaries

- Do not modify formal copy in `src/content.js` or `docs/mercury-content-source.md` while doing visual refinement.
- Do not replace the whole factory with a single static illustration.
- Do not turn the current gold SVG treatment into a rigid site-wide rule.
- Do not generate assets for all eight rooms before a room's composition and purpose have been reviewed.
- Do not publish the supplied visual reference image as a product asset.

## Next Tasks

### Priority 1: Plan Story Archive & IP Office

- Request or review a composition reference that avoids identifiable real covers, publishers, or protected works.
- Specify the room story, fixed archive/reading/collaboration zones, and optional gold exploration layers.
- Test manuscripts, archive tabs, handoff folders, or rights-review stamps as a third interaction language.

### Priority 2: Use The Repeatable Room Workflow

- Follow [room-benchmark-workflow.md](room-benchmark-workflow.md), now supported by Cookbook and AI Lab.
- Continue treating pointer-led object effects as optional exploration unless any target begins carrying unique required information.
- Preserve the wall-board `Prompt` and central-screen `Generate` treatment as the accepted AI Lab placement baseline.

### Priority 3: Decide Desktop Floor Structure

- After the third room planning pass, compare the current mixed-room floors against a one-department-per-floor desktop model.
- Draft the revised floor list for all eight approved formal rooms without changing room names or public content.
- Decide whether the side route remains a chronological eight-room index while the building gains eight larger visual floors.

### Priority 4: Responsive Direction After Desktop Proof

- Postpone precision responsive placement while desktop room architecture is still being decided.
- After two desktop room benchmarks, prototype a compact mode showing one department at a time and compare it with scaled full-building navigation.
- Only then decide whether mobile needs alternate background crops, different prop density, or a separate navigation treatment.

### Later Tasks

- Consider a Mercury Lab handoff skill after the workflow has been used on a second room.
- Harmonize downstream site sections only after the room illustration system and floor structure are stable.

## Verification Checklist For Next Session

- Open the local preview and use Cookbook and AI Lab as visual comparisons while planning the third room.
- If either accepted benchmark is changed, re-check its prop targets and return-to-idle behavior.
- Confirm whether the desktop one-department-per-floor proposal is accepted before changing any remaining floor assignments.
- Run `npm run build` after changes.
- Before making any checkpoint, confirm formal content sources were not modified.
