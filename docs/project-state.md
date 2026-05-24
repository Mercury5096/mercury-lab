# Project State

- **Current version:** `v0.2`; `v0.1` baseline is Git commit `2930e03`.
- **Current goal:** Retain the accepted factory structure and strengthen it with a modular SVG visual kit.

## Completed

- Built React / Vite / Tailwind one-page prototype.
- Implemented required page sections and English-first content rendering.
- Established bilingual-ready `en` / `zh` content objects.
- Added accessible room selection and Module Manual Panel interaction.
- Saved `v0.1` baseline commit before factory redesign.
- Implemented v0.2 Content Factory component, inline SVG overlay, named-area room layout, and dossier panel.
- Verified build, desktop interaction, keyboard navigation, SVG accessibility safeguards, and mobile layout.
- Added concise project documentation for handoff, architecture, decisions, and future asset intake.

## In Progress

- Visual system refinement planning: current structure is acceptable, but presentation feels too plain.
- Preparing a new-session handoff for modular SVG kit implementation.

## Next Steps

- Build modular SVG visual kit: frame, room shells, connectors, annotations, dossier frame, and room motifs.
- Integrate visual kit without replacing HTML interactions or content data.
- Review user-supplied portfolio links, imagery, LinkedIn destinations, and licensed fonts through intake rules.
- Consider aligning Hero, Processing Modes, and Case Files with the blueprint/manual language in a later iteration.

## Known Issues

- Only Content Factory has the stronger v0.2 blueprint identity; other sections still reflect v0.1 styling.
- Current factory visual vocabulary is structurally sound but too sparse and minimally differentiated.
- Mobile intentionally omits dense SVG drawing details for readability.
- Route highlighting is room-group based, not yet driven by processing modes or case files.

## Visual Direction

- Editorial Archive x Architectural Blueprint x Laboratory Manual.
- Move from minimal linework to a designed modular drawing kit with distinctive room motifs.
- Technical frames, file tabs, status chips, archival notes, amber selection, subtle cyan system trace.

## Technical Approach

- React HTML room tabs remain the interaction surface.
- CSS Grid named areas form the spatial floor plan.
- Inline decorative SVG supplies blueprint lines and routing graphics.
- Next implementation extends SVG into reusable visual primitives, not one large static artwork.
- Copy remains data-driven in `src/content.js`.
- Source-of-truth constraints remain in [mercury-content-source.md](mercury-content-source.md).
- Next-session brief: [handoff-next-session.md](handoff-next-session.md).
- Future assets and fonts: [asset-intake.md](asset-intake.md).

## Update Template

- **Date:** 2026-05-24
- **Task:** Prepare visual refinement handoff and safe project checkpoint.
- **Changed:** Recorded modular SVG kit direction and contributor asset requirements.
- **Files:** `README.md`, `docs/project-state.md`, `docs/handoff-next-session.md`, `docs/asset-intake.md`, `docs/architecture.md`, `docs/decision-log.md`.
- **Risks:** Visual system not implemented yet; supplied assets require rights review.
- **Next:** Implement SVG kit in a new session, starting with reusable frame and room shell components.
