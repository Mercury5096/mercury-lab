# Next Session Handoff

## Snapshot

- **Date:** 2026-05-24
- **Current version:** `v0.2`
- **Saved baseline:** `v0.1` at Git commit `2930e03`
- **Current URL during review:** `http://127.0.0.1:5174/#factory`
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)

## User Review

- Factory structure is acceptable.
- Current visual result feels too plain and engineering-minimal.
- Next work should build a designed SVG visual system, not add arbitrary lines.
- User can later supply portfolio works, URLs, LinkedIn, prior-work imagery, and usable typefaces.

## Approved Next Goal

- Refine only the Factory section first.
- Preserve real HTML room interactions, data-driven copy, accessibility, and responsive behavior.
- Build modular SVG visual parts rather than one static image or one monolithic SVG illustration.

## Recommended SVG Visual Kit

- `BlueprintFrame`: lab boundary, title rails, scale marks, brackets, measurement axes, zone headers.
- `RoomShell`: layered frames, corner cuts, number/code bays, active-state border treatment.
- `ConnectorSystem`: publishing, research, delivery routes; idle, signal, and active variants.
- `AnnotationKit`: note plates, leader lines, technical tags, archive/restricted/input labels.
- `DossierFrame`: file tabs, archive strip, index notch, module code plate, stamp marks.
- `RoomMotifs`: small decorative diagrams unique to all eight rooms.

## Room Motif Map

- `Print Engine Room`: crop marks and print registration frame.
- `Editorial Kitchen`: editorial grid and recipe-layout blocks.
- `Cookbook Production Floor`: workflow nodes and production pipeline.
- `Story Archive & IP Office`: archive tabs and relationship lines.
- `Operation Control Room`: routing arrows and flowchart blocks.
- `Commerce Visual Line`: banner frames and promo modules; no brand imagery.
- `Multimedia Workshop`: wireframe screens and timeline bars.
- `AI Workflow Lab`: node cluster, prompt/output path, restrained cyan pulse.

## Component Boundary

- **Pure SVG:** blueprint frame graphics, routes, annotation leaders, motifs, dossier ornament.
- **HTML/CSS:** all readable text, room buttons/tabs, status chips, dossier content, focus states, layout.
- **Data:** keep public copy in `src/content.js`; extend only non-copy visual metadata if required.

## Suggested Files

- `src/components/ContentFactory.jsx` - orchestration and selection state.
- `src/components/factory/BlueprintFrame.jsx` - decorative outer drawing system.
- `src/components/factory/BlueprintRoutes.jsx` - connector SVG paths and active state.
- `src/components/factory/RoomMotifs.jsx` - room-specific SVG motifs.
- `src/components/factory/DossierDecor.jsx` - manual-panel decorative SVG.
- `src/styles.css` - tokens, HTML layout, responsive rules, focus states.

## Implementation Order

- Extract SVG primitives from current `ContentFactory`.
- Define visual tokens: line weights, cyan/amber layers, grid rhythm, stamp styles.
- Build `BlueprintFrame` and `RoomShell` treatment first.
- Build connector variants and active route highlighting.
- Add annotation and dossier graphics.
- Add one motif per room, kept subtle behind room text.
- Verify desktop, tablet, mobile, keyboard navigation, reduced motion, and contrast.

## Safety Constraints

- No new package is required.
- No giant static image, monolithic illustration, canvas, Three.js, WebGL, or React Flow.
- SVG graphics remain `aria-hidden="true"` and `pointer-events: none`.
- Do not rewrite approved public copy.
- Do not publish user-provided assets until reviewed through [asset-intake.md](asset-intake.md).

## Handoff Note

- **Task:** Begin modular SVG factory visual kit.
- **Risks:** Too much ornament can hurt readability; motif imagery must not imply unverified work assets.
- **Next:** Implement visual primitives, then ask user to review visual impact before extending styling to other sections.
