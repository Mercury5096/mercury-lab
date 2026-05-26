# Story Archive & IP Office Design Brief

## Purpose

`Story Archive & IP Office` is the third rich desktop room benchmark after `Cookbook Production
Floor` and `AI Workflow Lab`. It should test an archive-and-collaboration environment in which
story development, creator handoff, and rights awareness can be read spatially without showing
unconfirmed publications or implying legal ownership review has been completed.

The room translates the approved public scope:

- Fiction writing and personal publishing experience.
- Illustrator and publisher collaboration.
- Communication between creators and publishing partners.

## Content And Rights Boundary

- The room may describe story development, archive handling, creator handoff, and rights-aware
  review as a working method.
- Do not display identifiable book covers, titles, publisher marks, contracts, commissioned
  artwork, or publication imagery unless they are separately reviewed and cleared.
- Do not imply legal expertise, verified ownership, licensed catalogue access, or completed
  rights clearance through props or labels.
- Keep approved factual wording and dossier content driven by `src/content.js`; this benchmark
  is a visual and interaction layer only.

## Reference Use

- Design reference supplied for review: `C:/Users/mercury/Downloads/ChatGPT Image 2026年5月26日 18_07_40.png`.
- Use the reference for cutaway scale, archive-office atmosphere, work-zone arrangement, and
  interaction planning only.
- Do not publish the supplied reference image as a product asset.
- Replace readable manuscript, contract, license, publisher, or rights text with generic,
  non-identifying paper detail in generated product assets.

## Why This Room Is The Third Benchmark

- Cookbook tests physical publishing production and material object interactions.
- AI Workflow Lab tests abstract research, decision, and human-review signals.
- Story Archive can test quiet archival density, paper-based collaboration, and rights-aware
  handling without repeating either kitchen props or pipeline nodes.
- The newly accepted eight-floor structure gives the room a full-width `Level 04`, allowing its
  shelving, central review surface, and secure-storage edge to remain readable at desktop scale.

## Room Story

A working story archive where manuscripts are organized, narrative materials are developed with
collaborators, and publication handoffs are checked against clear display and rights boundaries.

## Spatial Zones

The reference presents five fixed work zones. These are spatial functions, not additional public
claims or required interface copy.

| Zone | Working Function | Fixed Architectural Anchor | Reserved Exploration Area |
| --- | --- | --- | --- |
| Archive Shelves | Store generic manuscript files and working folders | Tall left shelving, file drawers, rolling ladder | Archive tab or retrieved folder on the shelving edge |
| Story Wall | Arrange narrative beats and creator coordination notes | Left-centre pinboard above a writing desk | Selected card cluster or handoff folder |
| Review Table | Compare working pages before handoff | Central angled review table and broad foreground desk | Manuscript packet, loupe, or review stamp |
| Rights Desk | Check handling and permission status before display | Right workstation with generic reference board | Review slip or status marker |
| Secure Records | Preserve restricted or pending material | Right-side lockable cabinet / archive door | Sealed packet or lock acknowledgement |

## Fixed Background Direction

Create one desktop background containing the room architecture and subdued non-active furnishings:

- Full-width architectural section/cutaway in the same pale, cool-blue illustration family as
  the accepted Cookbook and AI Workflow Lab rooms.
- Exposed ceiling structure, conduits, pendant task lighting, polished concrete or tiled floor,
  and restrained side framing.
- Dense left manuscript shelving, file drawers, and ladder; no recognizable publications.
- Story wall and writing desk with blank or abstract note shapes rather than readable copy.
- Central review table with generic pages, trays, and desk lighting.
- Right workstation with abstract paperwork panels and a secure cabinet or vault-like records
  store, without legal seals, brand marks, or specific contract language.
- Leave all intended active objects quiet, cool-toned, or absent in the fixed base; gold should
  belong primarily to future optional exploration layers.
- Avoid baked-in zone callouts, legends, dimensions, long text, logos, identifiable covers, and
  prominent gold props; the site supplies labels and interaction meaning separately.

## Proposed Exploration Language

Unlike AI Lab's five informational targets, the first interactive pass should condense this room
into four human-readable actions:

| Target | Optional Active Layer | Placement | Hover State | Click Effect |
| --- | --- | --- | --- | --- |
| Archive | Retrieved file tab or generic manuscript folder | Left shelves / archive drawers | One folder warms and gains focus | Indexed tabs briefly step forward in sequence |
| Develop | Story cards or creator handoff folder | Story wall / writing desk | Selected notes become legible as shapes | A short group of notes connects, then settles |
| Review | Manuscript packet, loupe, or review stamp | Central review table | Review object materializes in warm gold | A single review mark lands on the generic packet |
| Protect | Status slip or sealed rights packet | Rights desk / secure records | Packet edge and lock signal clarify | Packet moves to a secured state or receives a hold marker |

The four actions read as `Archive -> Develop -> Review -> Protect`; they describe care and
collaboration rather than promising clearance or legal approval.

## Interaction Principles

- All motion begins with direct user exploration and returns to an idle state.
- The room should feel careful and paper-based: tabs, cards, folders, stamps, and lock/status
  signals suit the work better than animated pipelines.
- Gold indicates an item being handled, selected, reviewed, or secured; it does not mean a
  publication is licensed or publicly displayable.
- Pointer-led layers may remain optional exploration while the factual dossier remains keyboard
  accessible; add accessible equivalents if an interaction later carries unique information.

## Layer And Asset Proposal

```text
public/assets/factory/story-archive/
  background-desktop-v1.webp
  props/
    archive-folder-v1.webp
    story-cards-v1.webp
    review-packet-v1.webp
    secure-record-v1.webp

src/components/factory/scenes/StoryArchiveScene.jsx
```

Produce only `background-desktop-v1` for the initial integration pass. Interaction targets can
first be tested with CSS/SVG layers before deciding whether all four need illustrated props.
The accepted initial exception is the transparent `review-page-v1.webp` manuscript sheet, since
its paper detail materially improves the central review-table sequence.

## Desktop Integration Check

- Install the fixed room background on dedicated `Level 04` only.
- Confirm the HTML room label does not hide the story wall or archive shelves.
- Inspect the room with the floating dossier closed and open; right-hand Rights Desk and Secure
  Records may be partially covered when the dossier is open, but the central Review Table should
  remain understandable before interaction work proceeds.
- Compare density and contrast against Cookbook and AI Workflow Lab rather than enlarging all
  remaining room assets at once.

## Implementation Sequence

1. Approve this safe room boundary, five spatial zones, and four-action exploration language.
2. Produce a fixed desktop background candidate without identifiable publications or active gold props.
3. Integrate the accepted background into dedicated `Level 04` as a new scene component.
4. Review desktop scale and dossier overlap before producing interactive props.
5. Prototype `Archive`, `Develop`, `Review`, and `Protect` layers with direct-trigger behavior.
6. Run the production build and confirm formal content and rights-source files remain unchanged.

## Initial Interaction Prototype Check

- **Date:** 2026-05-26
- The reviewed fixed desktop background is installed on dedicated `Level 04` as the optimized
  `background-desktop-v1.webp` asset.
- Four direct-trigger exploration targets are implemented as lightweight CSS layers:
  `Archive`, `Develop`, `Review`, and `Protect`.
- `Review` is the central interaction: six transparent generic manuscript-page images appear in sequence across
  the angled review surface, clear, then repeat for a second pass before a short `REVIEWED`
  signal appears and the layer returns to idle.
- After visual review, the page idle treatment was lowered so the illustration remains legible
  instead of washing out into a bright interaction marker.
- `Archive` retrieves generic tabs, `Develop` briefly connects story cards, and `Protect`
  moves a generic status packet into a lock acknowledgement state.
- These targets remain optional visual exploration only; they add no unique factual claims and
  do not alter the keyboard-accessible dossier content.

## Protected Boundaries

- Do not modify `src/content.js` or `docs/mercury-content-source.md` for this visual benchmark.
- Do not use the supplied reference image as a shipped product asset.
- Do not show identifiable covers, publisher marks, commissioned art, contracts, or rights claims.
- Do not generate props for other unreviewed departments during this benchmark.
