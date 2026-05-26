# AI Workflow Lab Design Brief

## Purpose

`AI Workflow Lab` is the second rich desktop room benchmark after `Cookbook Production Floor`.
It should prove that the illustrated-room system can express an abstract, human-in-the-loop
research workflow without turning Mercury Lab into a generic technology control room.

The room translates the approved public scope:

- AI-assisted interactive storytelling research.
- Human-in-the-loop creative workflow.
- Interactive prototype practice rather than independent software-engineering expertise.

## Reference Use

- Design reference supplied for review: `C:/Users/mercury/Downloads/ChatGPT Image 2026年5月26日 16_42_25.png`.
- Use the reference for composition, department identity, spatial zoning, and interaction planning only.
- Do not publish the supplied reference image as a product asset.
- Produce new room assets as separable background and interactive layers, following the Cookbook benchmark method.

## Why This Room Is The Next Benchmark

- It already occupies a dedicated desktop level in the current five-level structure.
- It is visually and conceptually distinct from Cookbook's kitchen/studio workflow.
- It tests informational and review-oriented interaction rather than physical production props.
- It can remain abstract and self-contained without requiring unverified brand, client, or publication imagery.

## Scene Reading

The reference establishes a wide architectural section in five sequential work zones:

| Zone | Reference Function | Mercury Lab Meaning | Fixed Spatial Anchor |
| --- | --- | --- | --- |
| 01 | Context & Research Desk | Source gathering and narrative grounding | Left desk with reference wall |
| 02 | Prompt Design Console | Human framing and iterative instruction | Prompt desk and template board |
| 03 | Model Pipeline Core | Assisted processing and variation routing | Central display and workstation bank |
| 04 | Review & Refinement Station | Human selection, correction, and annotation | Comparison board and review table |
| 05 | Output & Delivery Wall | Prototype outputs and disclosure-ready delivery | Right wall and delivery cart |

The central pipeline is the compositional focus. The left and right wings should feel like
human workspaces feeding into and evaluating that center, not decorative side shelves.

## Visual Direction

### Preserve From Cookbook

- Pale architectural cutaway illustration with a cool blue fixed layer.
- Full-width desktop room with readable work surfaces and credible object placement.
- Warm gold elements reserved for discoverable, active, or movable items.
- Separate HTML room controls and dossier above or outside the illustrated layer.
- Lightweight SVG/CSS system signals can supplement illustrated props.

### Adapt For AI Workflow Lab

- Increase diagram and paper-panel surfaces; reduce decorative household detail.
- Make the centre darker and denser than Cookbook through equipment cabinetry and screens,
  while retaining the same overall pale-room family.
- Use gold to show decisions travelling through the room: selected sources, prompt cards,
  accepted nodes, review annotations, and release-ready output.
- Avoid futuristic spectacle, robot imagery, or claims implied by a fully autonomous pipeline.

## Background Asset Specification

Create one desktop background with the following fixed elements:

- Exposed section frame, ceiling beams, conduits, pale tiled or concrete floor, and side steps.
- Left research desk, pinned reference board, shelving, monitor, chair, and quiet paper archive.
- Prompt-design desk with template boards, reading stand or tablet, and working stool.
- Central pipeline console with a large overview screen, supporting racks, and review keyboard surface.
- Review table with output comparison board, annotation wall, stools, and adjustable task lamp.
- Delivery wall with version/history board, checklist panel, and low storage trolley.
- Five subtle zone callout positions should remain available, but implementation may use HTML/CSS
  labels rather than baking all text into the artwork.

Keep gold interactive items absent or very subdued in the fixed base wherever possible so their
separated active layers can occupy believable positions without doubling the objects visually.

## Interactive Layer Plan

The reference contains five workflow stages. For a readable first implementation, keep five
interaction targets, but make their behavior compact and individually understandable.

| Target | Prop / Active Layer | Placement | Hover State | Click Effect |
| --- | --- | --- | --- | --- |
| Research | Selected reference cards and magnifier marker | Left research wall / desk | Cards gain warm clarity and a short label | Two or three source cards receive sequential check marks |
| Prompt | Prompt cards or standing prompt sheet | Prompt design desk | Selected sheet becomes solid gold-blue | Cards reorder or a cursor line passes through the selected prompt |
| Generate | Pipeline nodes on central screen | Central core display | Active route nodes illuminate | A controlled pulse travels input to alternatives, ending at selected candidates |
| Review | Annotation slips and review lamp | Review table / comparison wall | Annotation and task light become visible | Notes stamp approved/revise marks across compared outputs |
| Deliver | Release card or output package | Right delivery wall / trolley | Final card highlights | A compact send/ready signal moves to the delivery checklist |

## Interaction Principles

- Interaction must emphasize human decisions: source selection, prompt framing, option review,
  correction, and approved delivery.
- Do not depict automatic output as the room's final authority.
- Idle props should be subtle; hover identifies available exploration; click triggers one meaningful action.
- Motion should be shorter and more precise than Cookbook steam or plating effects, favoring
  route pulses, check marks, card selection, and annotation signals.
- The central pipeline should not run continuously when idle. Its movement should occur only
  through room activation or direct user action.

## Layer And Asset Proposal

Suggested asset structure:

```text
public/assets/factory/ai-workflow/
  background-desktop-v1.webp
  props/
    research-cards-v1.webp
    prompt-sheet-v1.webp
    review-notes-v1.webp
    delivery-card-v1.webp
```

The central `Generate` pipeline may initially remain an SVG/CSS interaction overlay rather than
a bitmap prop because its value is directional flow and nodes, not material object texture.

Suggested scene component:

```text
src/components/factory/scenes/AiWorkflowLabScene.jsx
```

`RoomMotifs.jsx` should switch only `ai-workflow-lab` to this scene when the benchmark is
implemented, leaving every other non-Cookbook motif untouched.

## Layout And Dossier Risks

- The source image includes many headings and panels. Reduce baked-in small text so the room
  remains legible at the site's actual desktop display size.
- The current side-route exploration label for this room is `Archive / Protocol`, while the
  selected reference reads most clearly as `Research to Output`. Review this interface-only
  label during implementation without changing the formal room name or public factual copy.
- Keep the primary central console clear of floating dossier overlap; if necessary, bias the
  dossier toward the room edge or inspect the open state before final prop placement.
- Do not treat this room's five stages as a new required structure for other rooms. Cookbook
  works with four actions and should remain independent.
- Do not restructure all eight floors during this benchmark. `AI Workflow Lab` can be tested
  on its existing single-room level first.

## Desktop Review Criteria

- The room reads as an AI-assisted creative research environment before any interaction.
- It visibly connects research, prompting, generation, review, and delivery without suggesting
  autonomous content production.
- Interactive targets are distinguishable at desktop size and sit naturally on real surfaces.
- The cool fixed architecture and gold active layers remain consistent with Cookbook without
  appearing copied from it.
- The open dossier does not hide the central workflow or most interaction targets.

## Initial Background Integration Check

- **Date:** 2026-05-26
- A new fixed desktop background was integrated on the existing Level `00` for review.
- The previously right-offset single-room layout was expanded to full room width so the five
  planned zones are readable at the same benchmark scale as Cookbook.
- The fixed background clearly exposes the research wall, prompt desk, central console,
  review table, and delivery shelving without adding active gold props yet.
- The existing lower blueprint annotation was removed because it crossed the new research wall.
- When the dossier is open, it covers much of the `Review` and `Deliver` side of the room while
  leaving `Research`, `Prompt`, and the central console readable. Before interactive props are
  finalized, decide whether closed-room exploration is sufficient or the dossier position needs
  an AI-scene-specific adjustment.
- The accepted fixed-background candidate was converted to WebP for the page after visual
  comparison against its PNG review source.

## First Interaction Prototype Check

- **Date:** 2026-05-26
- Five exploration targets were prototyped as light CSS/SVG layers before generating separate
  bitmap props: `Research`, `Prompt`, `Generate`, `Review`, and `Deliver`.
- `Research` checks selected source cards, `Prompt` briefly aligns selected sheets,
  `Generate` runs a controlled central node pulse, `Review` reveals approval/revision marks,
  and `Deliver` sends a short ready signal.
- This prototype keeps the room's meaning human-led: every motion begins from a direct user
  choice and the central pipeline remains quiet when untouched.
- Desktop visual inspection confirmed that all five targets trigger correctly and the central
  pipeline is readable against the fixed background.
- With the dossier open, the right-hand review and delivery targets are occluded as expected;
  for this iteration those remain exploration interactions before the dossier is opened.
- Pointer-led illustrated objects are accepted as optional desktop exploration feedback, since
  the approved factual room content remains available through the keyboard-accessible room and
  dossier interaction. Revisit individual keyboard targets only if a prop later carries unique
  essential information.
- After desktop review, the `Prompt` papers were relocated from the worktable to the prompt
  design board above it, while the central `Generate` graph was raised to sit naturally on its
  fixed screen anchor.

## Implementation Sequence

1. Approve this room purpose, the five-zone reading, and the five target interactions.
2. Produce and review only the desktop fixed background.
3. Test the fixed background on the existing Level `00`, expanding that already-single-room
   level to the full room width required for its five-stage composition.
4. Prototype interaction placement with CSS/SVG layers, then produce material prop layers only
   for objects whose illustrative texture materially improves the approved interaction.
5. Review hover and click behavior alongside the Cookbook room at desktop size.
6. After both benchmarks are accepted, decide whether to convert the full building to one department per floor.

## Protected Boundaries

- Do not modify `src/content.js` or `docs/mercury-content-source.md` for this visual benchmark.
- Do not use the supplied reference image as a shipped asset.
- Do not add unverified client, publisher, company, product, or commissioned imagery.
- Do not claim software-engineering specialization or autonomous AI production through room labels or props.
