# Next Session Handoff

## Start Here

Continue Mercury Lab from the current visual benchmark checkpoint:

- Read this file and `docs/mercury-content-source.md` first.
- Treat commit `251e13c` (`Create cookbook production floor visual benchmark`) as the current checkpoint.
- Work room by room on interior content, spatial identity, prop integration, and line density.
- Do not modify `src/content.js` or the formal content source unless the user explicitly changes that instruction.

Suggested opening request for a new window:

> Please read `docs/handoff-next-session.md` and `docs/mercury-content-source.md`, then continue Mercury Lab from checkpoint `251e13c`. Focus on the Cookbook Production Floor visual benchmark and its next room-level refinements. Do not change formal content sources.

## Snapshot

- **Date:** 2026-05-25
- **Current checkpoint:** `251e13c` - `Create cookbook production floor visual benchmark`
- **Previous v0.5 checkpoint:** `a14993d`
- **Current focus:** develop a refined room-illustration system using Cookbook Production Floor as the first benchmark.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)
- **Verified at checkpoint:** `npm run build` passed; repository was clean immediately after the commit.

## User Direction

- Proceed gradually, one room at a time; precision and visual coherence matter more than completing all rooms quickly.
- The architectural cutaway / blueprint reference direction is accepted as a strong foundation.
- The Cookbook room should establish the visual language before expanding it to other floors.
- Props already depicted in the base illustration may later be separated into interactive transparent assets.
- Gold means interactive, active, or movable, but it is not restricted to simplified SVG icons.
- Avoid defining one universal prop style for every room; each room may interpret gold interaction differently.

## Implemented Benchmark

`Cookbook Production Floor` now has a dedicated visual prototype:

- One full desktop room background in a pale blueprint / architectural illustration style.
- Four transparent WebP visual props: recipe proofs, cooking pot, plated dish, and tripod camera.
- A light system-interaction layer for route/focus feedback, separate from the visual props.
- Desktop composition with the richer complete scene.
- Tablet/mobile reuse the same base background with cropping and reduced prop density.
- No default desktop-plus-mobile duplicate background maintenance strategy.

## Asset And Component Map

- `public/assets/factory/cookbook/background-desktop-v1.webp` - single base illustration for the Cookbook room.
- `public/assets/factory/cookbook/props/*.webp` - transparent visual props intended to blend with the base illustration.
- `src/components/factory/scenes/CookbookProductionScene.jsx` - Cookbook scene composition and interaction overlays.
- `src/components/factory/RoomMotifs.jsx` - selects the Cookbook scene for its formal room id; other room motifs remain available.
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

- Desktop uses the complete base image and the richest prop arrangement.
- Tablet/mobile first reuse that same image through scaling, crop, and `object-position` adjustments.
- On smaller screens, prop density may be lowered and supporting effects may be hidden.
- Create a mobile-focused crop only if a specific room becomes unreadable with the shared source image.
- Do not assume every room needs two maintained background artworks.

## Boundaries

- Do not modify formal copy in `src/content.js` or `docs/mercury-content-source.md` while doing visual refinement.
- Do not replace the whole factory with a single static illustration.
- Do not turn the current gold SVG treatment into a rigid site-wide rule.
- Do not generate assets for all eight rooms before a room's composition and purpose have been reviewed.
- Do not publish the supplied visual reference image as a product asset.

## Next Tasks

### Priority 1: Refine Cookbook Props

- Review the four current props in the running desktop scene for scale, placement, contrast, and stylistic integration.
- Decide which props should be selectable, animated, or purely atmospheric.
- Identify the first prop needing a custom regeneration pass, likely the tripod camera or cooking pot.
- Reduce any remaining "sticker" appearance by adjusting color, edge softness, opacity, blend behavior, or asset rendering.

### Priority 2: Establish A Reusable Room Workflow

- Record a compact checklist for each new room: purpose, main work zones, fixed architecture, candidate interactive props, and desired density.
- Keep system-interaction graphics separate from illustrated visual props.
- Determine a consistent asset naming convention after one more prop refinement pass confirms the pattern.

### Priority 3: Choose The Next Room

- After Cookbook props feel convincing, select one contrasting room for a second visual benchmark.
- A good comparison candidate should test whether the approach works outside a kitchen/studio space, such as AI Lab, Editorial Room, or Archive.
- Design that room's interaction metaphor independently: data nodes, proof marks, or archive tabs rather than recycled kitchen props.

### Later Tasks

- Review tablet/mobile cropping only after the desktop Cookbook scene is visually settled.
- Consider a Mercury Lab handoff skill after this workflow has been used once more and its recurring instructions are confirmed.
- Harmonize downstream site sections only after the room illustration system is stable.

## Verification Checklist For Next Session

- Open the local preview and inspect Cookbook at desktop size before making visual decisions.
- Confirm tablet/mobile still use the single base background and simplified props.
- Run `npm run build` after changes.
- Before making any checkpoint, confirm formal content sources were not modified.
