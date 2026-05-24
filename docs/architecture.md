# Architecture

## Main Sections

- `Hero` - project identity and entry links.
- `ContentFactory` - interactive production-room blueprint and dossier.
- `How to Use Mercury` - reading method.
- `Processing Modes` - route descriptions.
- `Case Files` - potential public stories and display state.
- `Collaboration Protocol` - publication boundaries.

## Main Components

- `src/App.jsx` - page composition and non-factory sections.
- `src/components/ContentFactory.jsx` - factory section state, room modules, dossier, and SVG overlay.
- `BlueprintOverlay` - decorative technical drawing layer inside `ContentFactory`.
- `RoomModule` - accessible room tab rendered from room data.
- `ModuleDossier` - selected-room manual panel.

## Data Sources

- `src/content.js` - display content and non-copy diagram metadata.
- `docs/mercury-content-source.md` - facts, approved wording, rights rules, language policy, and overclaim rules.
- `docs/decision-log.md` - implementation decisions that must not drift.

## Content Structure

- Public-facing copy should be stored in data objects where practical, not long bilingual strings inside React components.
- UI currently reads English values only.
- Content objects use bilingual-ready values:

```js
{
  title: {
    en: "Cookbook Production Floor",
    zh: "..."
  }
}
```

- Chinese values may remain pending until confirmed; do not invent public translations.

## Content Factory System

- `rooms` data supplies title, period, discipline, evidence, display rule, and diagram metadata.
- `diagram.area` maps each room to a CSS Grid named area.
- `diagram.zone`, `route`, and `callout` provide technical floor-plan labeling without altering approved copy.
- Selection state chooses the active dossier and highlighted SVG route.

## Blueprint Overlay System

- Inline SVG is contained inside the factory drawing frame.
- SVG layers include drafting grid, measurement marks, building boundary, corridors, route lines, annotation leaders, and AI circuit.
- SVG is decorative only: `aria-hidden="true"` and `pointer-events: none`.
- Active route styling is driven by React-selected room route group.
- Next iteration should split visual primitives into reusable components under `src/components/factory/`.

## Planned SVG Visual Kit

- `BlueprintFrame` - outer frame, scale marks, corner brackets, title/zone guides.
- `BlueprintRoutes` - publishing, research, and delivery connector layers with active highlight.
- `RoomMotif` - per-room decorative micro-diagrams keyed from room `id`.
- `AnnotationLayer` - technical tags, leader lines, and restricted/archive labels.
- `DossierDecor` - file notch, strip, section marks, and stamp graphics.
- Keep room content and user interaction in HTML/CSS; SVG remains non-interactive decoration.

## Accessibility Notes

- Rooms remain HTML buttons with `role="tab"`.
- Active room uses `aria-selected` and connects to `role="tabpanel"` via `aria-controls` / `aria-labelledby`.
- Arrow-key order follows source reading order for predictable navigation.
- Focus styling must remain clearer than hover or active glow.
- Status meanings remain text labels, never color alone.

## Mobile Notes

- Desktop: blueprint floor plan beside dossier.
- Tablet: floor plan above dossier.
- Mobile: technical directory list with simplified active route indicator.
- Dense SVG drawing detail is hidden on mobile to preserve legibility.

## Related Decisions

- See [decision-log.md](decision-log.md).
