# Architecture

## Main Sections

- `ContentFactory` - combined homepage identity and architectural Factory Cutaway hero.
- `How to Use Mercury` - reading method.
- `Processing Modes` - route descriptions.
- `Case Files` - potential public stories and display state.
- `Collaboration Protocol` - publication boundaries.

## Main Components

- `src/App.jsx` - page composition and non-factory sections; supplies approved identity copy to the opening Factory.
- `src/components/ContentFactory.jsx` - masthead, route index, five levels, room activation, floating/mobile dossier, and console.
- `src/components/factory/BlueprintFrame.jsx` - decorative section-grid accents, measurements, level guides, and route highlighting.
- `src/components/factory/RoomShell.jsx` - accessible room button rendered from factual room data.
- `src/components/factory/RoomMotifs.jsx` - small decorative prototype motifs for selected room directions.
- `ModuleDossier` - selected-room inspector, declared within `ContentFactory`.

## Data Sources

- `src/content.js` - public display content and existing non-copy diagram metadata.
- `docs/mercury-content-source.md` - facts, approved wording, rights rules, language policy, and overclaim rules.
- `docs/decision-log.md` - implementation decisions that must not drift.

## Content Rules

- UI currently reads English values only, from bilingual-ready data objects.
- Formal room names remain the factual experience-based labels in `src/content.js`.
- Route-index functional labels are interface framing only and must not overwrite approved public copy.
- Chinese values may remain pending until confirmed; do not invent public translations.

## Factory Cutaway System

- `floors` inside `ContentFactory` assigns the eight factual rooms to five visual building levels; this is visual metadata only.
- `roomFunctions` supplies exploratory navigation language approved for technical labeling, separate from formal room names.
- HTML/CSS provides building structure: masthead, roofline, level slabs, bays, room panels, service shaft, sticky route rail, and status console.
- Selection state controls room highlight, corresponding SVG route group, and a single on-demand dossier.
- An `IntersectionObserver` tracks the most visible level and drives current-location highlighting in the sticky route index.
- Desktop floors are intentionally near viewport height so the cutaway is explored across multiple scroll intervals.
- Desktop dossier is positioned as a floating inspector so it never claims permanent building width.
- Mobile dossier remains in document flow immediately after its active room.

## SVG Boundary

- `BlueprintFrame` spans the tall building as a non-interactive overlay.
- SVG is limited to coordinate grid accents, dimension marks, technical annotations, workflow lines, and circular nodes.
- Rooms, readable labels, interaction, status text, and the inspector remain HTML/CSS.
- Every decorative SVG is `aria-hidden="true"` and receives no pointer events.

## Accessibility Notes

- Rooms are HTML buttons linked to the conditional inspector with `aria-controls` and `aria-expanded`.
- Arrow keys plus Home/End move through rooms in chronological source order.
- The inspector has an explicit Close button and supports `Escape` while focused.
- Focus treatments remain visible independently of amber selected-room styling.
- Display restrictions remain text labels rather than color-only communication.

## Responsive Notes

- Desktop: multi-viewport building cutaway with near-viewport floors, scroll-aware sticky left route index, and floating inspector.
- Narrow desktop/tablet: stacked masthead with building still presented as a large section.
- Mobile: simplified technical overlay, large vertically stacked room sections, and in-flow expanded dossier.

## Related Decisions

- See [decision-log.md](decision-log.md) and [handoff-next-session.md](handoff-next-session.md).
