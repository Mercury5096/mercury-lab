# Next Session Handoff

## Start Here

Continue Mercury Lab from the completed eight-room desktop foundation state:

- Read this file and `docs/mercury-content-source.md` first.
- The latest committed checkpoint before this maintenance pass is `d1bd91f` (`Complete eight room foundation scenes`).
- The eight-room desktop foundation is complete; current work is room-by-room interaction polish, with desktop composition still prioritized.
- Treat all eight desktop rooms as having a first-pass reviewed/polished interaction treatment: Print, Editorial, Cookbook, Story Archive, Operation, Commerce, Multimedia, and AI Workflow Lab.
- The full eight-room desktop QA pass is complete at 1280px desktop width; all room backgrounds loaded, all desktop targets were visible and returned to idle, staged loops worked, dossiers opened, browser console had no warnings/errors, and horizontal overflow stayed `0`.
- The latest content direction is now selected evidence enrichment, not more broad animation work. All eight rooms now have first-pass proof blocks in their dossiers.
- A first bilingual UI pass is now in place. The header can switch between English and Chinese, the factory shell/dossier labels, room callouts, interaction target labels, and bottom route/case/protocol sections read from bilingual content.
- Dossier metadata has been simplified for recruiter readability: the repeated evidence-basis and display-rule blocks were removed from all room dossiers. The bottom protocol section has been reframed as collaboration/work opportunities instead of claim-boundary rules.
- Case-file status labels now act as selected-evidence gallery triggers. The gallery uses the matching room proof assets by case order, shows larger images, and keeps Multimedia/AI video or prototype links available as project-link cards. This is intended to compensate for small Dossier thumbnails without making each dossier visually heavy.
- The desktop factory now uses eight full-width department floors with alternating blue and grey-blue floor treatment.
- Next work should review the Chinese copy in-browser for recruiter readability, then refine wording, compact/responsive behavior, or a separate gallery/selected-works area as needed.
- `docs/mercury-content-source.md` remains the formal source of truth. `src/content.js` now intentionally contains selected public-facing proof metadata and may be extended cautiously when the user supplies approved evidence.

Suggested opening request for a new window:

> Please read `docs/handoff-next-session.md`, `docs/mercury-content-source.md`, and `docs/room-benchmark-workflow.md`, then continue Mercury Lab from the completed eight-room desktop foundation state. Preserve the accepted eight-floor desktop structure, keep formal source claims conservative, and review/refine the completed selected evidence chain now established across all eight rooms.

## Snapshot

- **Date:** 2026-06-14
- **Latest committed checkpoint before maintenance pass:** `d1bd91f` - `Complete eight room foundation scenes`
- **Previous handoff checkpoint:** `f1085fd` - `Update handoff after AI workflow benchmark`
- **AI Workflow Lab visual checkpoint:** `16ffd10` - `Create AI workflow lab visual benchmark`
- **Cookbook visual baseline commit:** `251e13c` - `Create cookbook production floor visual benchmark`
- **Previous v0.5 checkpoint:** `a14993d`
- **Current focus:** all eight desktop room foundations are present; all eight rooms have completed first-pass interaction polish; full eight-room desktop QA passed; selected evidence enrichment is in place; and a first bilingual EN/ZH interface pass is now implemented for recruiter/employer readability.
- **Source of truth:** [mercury-content-source.md](mercury-content-source.md)
- **Current maintenance direction:** preserve the split stylesheet structure, keep formal source claims conservative, enrich one room at a time with selected evidence, and avoid turning Mercury Lab into a complete archive.
- **Verified in the latest refinement session:** `npm run build` passed after the selected evidence additions and again after the bilingual UI pass. Earlier in-app browser QA confirmed selected evidence images or video cards load for all eight rooms, status labels update to `Selected evidence available`, and horizontal overflow remains `0`. Formal source document `docs/mercury-content-source.md` was not modified.

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
- Second-pass refinement adds a room-level human-in-the-loop iteration layer: research brief, prompt sheet, model output, review/revision cue, and final delivery card.
- Each pointer target now sets a short active stage on the whole room, so the clicked stage reads as part of a research-to-output loop rather than an isolated icon effect.
- `Review` includes a return/revision rail to make the human correction loop clearer for outside viewers.
- `Deliver` was moved inward to reduce right-side dossier/edge overlap risk.

`Story Archive & IP Office` now establishes the third reviewed desktop room benchmark:

- The desktop factory is expanded to eight dedicated department floors; `Story Archive & IP Office` occupies full-width Level `04`.
- Alternating original blue and grey-blue floor treatment is installed across the eight levels as the currently accepted depth rhythm.
- A cool grey-blue archive-office cutaway is installed as an optimized fixed WebP background with generic, non-identifying paper materials only.
- Four direct-trigger exploration targets are present: `Archive`, `Develop`, `Review`, and `Protect`.
- `Review` uses a transparent generic manuscript-page WebP: six pages appear in sequence, clear, repeat for a second pass, then settle after a short reviewed signal.
- Archive and Protect idle cues were strengthened for discoverability; the Review page brightness was reduced after visual review so its drawn detail remains legible.
- These interactions remain optional visual exploration; no formal room copy, publication claim, or rights status was changed.
- Second-pass refinement adds a room-level manuscript/rights handoff layer: archive folder, manuscript draft, review sheet, rights packet, and protected handoff cue.
- The existing six-page transparent WebP Review sequence is preserved and now runs alongside the new review-layer cue.
- `Protect` was moved inward to reduce right-side dossier/edge overlap risk.
- In the current narrow in-app browser viewport, the responsive fallback shows only the primary Review target; wide desktop QA should re-check all four Story targets.

`Operation Control Room` now has a first-pass desktop foundation:

- A blue architectural operations-room background was generated from the user's reference direction, then revised because the first draft was too pale.
- It occupies full-width Level `03` using the original blue floor family.
- The room emphasizes central command desk, workflow boards, resource shelving, and delivery/status surfaces.
- Four basic pointer-led targets are installed: `Intake`, `Assign`, `Track`, and `Deliver`.
- The user accepted the overall visual direction while noting that interactions across the new rooms are still basic and should be improved later.

`Operation Control Room` now has the first completed interaction polish pass:

- Any of the four targets now triggers a full `Intake -> Assign -> Track -> Deliver` coordination loop rather than only animating the clicked stage.
- A subdued CSS flow layer adds route rails, fixed-size nodes, and moving task cards over the room background.
- Stage-specific objects still activate in sequence, so the room reads as an automated coordination system while preserving individual exploration targets.
- `Deliver` was moved inward to avoid the active dossier overlapping the right-edge hotspot.
- The global blueprint route nodes were moved from stretched SVG circles into fixed-size CSS dots, and blueprint strokes now use non-scaling stroke treatment. This fixed visibly flattened or elongated route circles and improved dashed route consistency.
- `npm run build` passed after the Operation polish and blueprint geometry fix.

`Commerce Visual Line` now has a first-pass desktop foundation:

- A grey-blue visual-production background is installed on Level `02`.
- The accepted direction is product-visual sampling and adaptation rather than information-board workflow: abstract posters, typography samples, generic logo marks, video frames, product mockups, packaging boxes, color cards, and export surfaces.
- Four basic pointer-led targets are installed: `Sample`, `Compose`, `Adapt`, and `Export`.
- The room deliberately uses generic, non-branded objects only; no GSK, real platform, product, medicine, or client imagery is displayed.

`Commerce Visual Line` now has a first-pass interaction polish:

- A CSS material-flow layer ties the four targets into a tactile design-sampling line without copying Operation's control-loop grammar.
- `Sample` activates a swatch/reference card; `Compose` adds poster/layout movement; `Adapt` adds format-frame motion; `Export` gathers the set into a release packet.
- The target cards keep their original small rotations when returning to idle, so the motion reads more like paper and visual samples being handled.
- `Export` was moved inward to avoid the right-side dossier and edge overlap making the hotspot unreliable.
- Desktop browser QA confirmed all four targets trigger, return to idle, the Commerce background loads, and there is no horizontal overflow.

`Multimedia Workshop` now has a first-pass desktop foundation:

- A blue mixed-media prototype-studio background is installed on Level `01`.
- The room emphasizes storyboard/script materials, web and video screens, motion/animation timelines, 3D/prototype testing, game test/listening equipment, sketchbooks, storage, and physical media materials.
- Four basic pointer-led targets are installed: `Storyboard`, `Edit`, `Prototype`, and `Test`.
- The user approved the visual direction; the interaction layer was intentionally kept simple until all eight room foundations were completed.

`Multimedia Workshop` now has a first-pass interaction polish:

- A CSS motion-rig layer now gives the room a motion/prototype/test language instead of four isolated hotspot effects.
- `Storyboard` introduces the first clip, `Edit` adds a timeline/scrub pass, `Prototype` brings a screen/prototype surface online, and `Test` adds signal feedback.
- The polish stays CSS/SVG-based and generic; no real platform UI, media asset, game, client, or brand material was added.
- `Test` was moved inward to reduce right-side dossier/edge overlap risk.
- Desktop browser QA confirmed the background loads, all four targets are visible, the interaction states return to idle, and there is no horizontal overflow. Storyboard was verified with coordinate clicking because the browser locator was imprecise on the layered span, but the live target itself triggers correctly.

`Editorial Kitchen` now has a first-pass desktop foundation:

- A grey-blue editorial-production background is installed on Level `06`, aligned with the alternating grey-blue floor family.
- The room combines food/lifestyle editorial workflow, blank page spreads, clipping boards, layout tables, review desks, shelves, and neutral food-prep references without implying a complete archive.
- Four basic pointer-led targets are installed: `Draft`, `Layout`, `Edit`, and `Release`.
- The background uses generic blank or abstract page materials only; no real magazine covers, publishers, client materials, or readable publication text are displayed.

`Editorial Kitchen` now has a first-pass interaction polish:

- A CSS page-cycle layer gives the room a page/review language instead of four isolated hotspot effects.
- `Draft` introduces a draft sheet; `Layout` adds an arranged spread; `Edit` adds a review mark; `Release` sends a clean output sheet.
- Existing note cards now keep their own small paper rotations when returning to idle.
- `Release` was moved inward to reduce right-side dossier/edge overlap risk.
- Desktop browser QA confirmed all four targets trigger, return to idle, the Editorial background loads, and there is no horizontal overflow.

`Print Engine Room` now has a first-pass desktop foundation:

- A blue print-production background is installed on Level `07`, aligned with the original blue floor family.
- The first generated version was visually acceptable but too similar to other workstation rooms. The accepted v2 direction keeps the print/check machine while adding clearer generic printed output: product posters, restaurant-style promotional flyers, book proofs, folded brochures, paper swatches, color bars, crop marks, and registration boards.
- Four basic pointer-led targets are installed: `Scan`, `Arrange`, `Proof`, and `Output`.
- All printed samples remain abstract and non-identifying; no logos, brands, publishers, real products, restaurant identities, characters, or readable client/publication text are displayed.

`Print Engine Room` now has a fuller first-pass interaction polish:

- The earlier Print polish added physical details to each target: feed sheet, alignment rule, proof sheet, color bar, and output sheet.
- A new CSS production-pass layer ties `Scan`, `Arrange`, `Proof`, and `Output` into a paper-through-machine flow.
- `Scan` introduces the input sheet; `Arrange` adds layout movement; `Proof` adds proof-sheet confirmation; `Output` adds final released paper.
- `Output` was moved inward to reduce right-side dossier/edge overlap risk.
- Desktop browser QA confirmed all four targets trigger, return to idle, the Print background loads, and there is no horizontal overflow.

## Asset And Component Map

- `public/assets/factory/cookbook/background-desktop-v1.webp` - single base illustration for the Cookbook room.
- `public/assets/factory/cookbook/props/*.webp` - transparent visual props intended to blend with the base illustration.
- `public/assets/factory/cookbook/selected-covers-01.jpg` and `selected-covers-02.jpg` - selected published cookbook / food-publication cover evidence now displayed in the Cookbook dossier.
- `src/components/factory/scenes/CookbookProductionScene.jsx` - Cookbook scene composition and interaction overlays.
- `public/assets/factory/print/selected-print-00.jpg` through `selected-print-02.jpg` - selected Malay-translated comic layout / print material plus early leaflet / brochure layout evidence now displayed in the Print dossier. These project copies were resized/optimized from the user's source images.
- `public/assets/factory/ai-workflow/background-desktop-v1.webp` - fixed AI Workflow Lab desktop illustration.
- `public/assets/factory/ai-workflow/selected-ai-01.jpg` through `selected-ai-05.jpg` - selected AI-assisted project screenshots/visual records covering AI marketing video, Hongbao interactive comic, Before the Rain Stops visual novel prototype, and AI-assisted book printing quote prototype. These project copies were resized/optimized from the user's source images.
- `public/assets/factory/ai-workflow/selected-ai-card-01.jpg` through `selected-ai-card-04.jpg` - recruiter-facing thumbnail cards generated from selected AI evidence images, matching the Multimedia thumbnail-card treatment.
- `src/components/factory/scenes/AiWorkflowLabScene.jsx` - AI Workflow Lab interaction prototype with second-pass human-in-the-loop iteration layer.
- `public/assets/factory/story-archive/background-desktop-v1.webp` - fixed Story Archive desktop illustration.
- `public/assets/factory/story-archive/props/review-page-v1.webp` - transparent generic manuscript page used in the central sequence.
- `public/assets/factory/story-archive/selected-story-01.jpg` through `selected-story-04.jpg` - selected story publication, translated edition, and illustrator-collaboration evidence displayed in the Story Archive dossier.
- `src/components/factory/scenes/StoryArchiveScene.jsx` - Story Archive direct-trigger interaction prototype with second-pass manuscript/rights handoff layer.
- `public/assets/factory/operation/background-desktop-v1.webp` - fixed Operation Control Room desktop illustration.
- `public/assets/factory/operation/selected-operation-01.jpg` through `selected-operation-04.jpg` - selected event, community page, activity material, and workshop evidence displayed in the Operation dossier.
- `src/components/factory/scenes/OperationControlScene.jsx` - Operation polished coordination-loop interaction.
- `public/assets/factory/commerce/background-desktop-v1.webp` - fixed Commerce Visual Line desktop illustration.
- `public/assets/factory/commerce/selected-commerce-01.jpg` through `selected-commerce-04.jpg` - selected GSK e-commerce banner, promotion, marketplace, and product-frame materials displayed in the Commerce dossier.
- `src/components/factory/scenes/CommerceVisualScene.jsx` - Commerce polished tactile visual-sampling interaction.
- `public/assets/factory/multimedia/background-desktop-v1.webp` - fixed Multimedia Workshop desktop illustration.
- `public/assets/factory/multimedia/selected-multimedia-01.jpg` through `selected-multimedia-06.jpg` - selected portfolio-page screenshots for Multimedia evidence, covering A+ cultural heritage, graduation web/RWD work, interactive map, 3D food web teaser, MSI competition, and Yongqing advertising competition materials. These project copies were resized/optimized from the user's source images.
- `public/assets/factory/multimedia/selected-multimedia-card-01.jpg` through `selected-multimedia-card-04.jpg` - recruiter-facing thumbnail cards generated from selected Multimedia evidence images. They use a consistent 1200x820 composition with softened background fill and preserved central source imagery for a cleaner dossier rhythm.
- `src/components/factory/scenes/MultimediaWorkshopScene.jsx` - Multimedia polished motion/prototype/test interaction.
- `public/assets/factory/editorial/background-desktop-v1.webp` - fixed Editorial Kitchen desktop illustration.
- `public/assets/factory/editorial/selected-editorial-00.jpg` through `selected-editorial-03.jpg` - selected Oriental Cuisine magazine issue record plus same-period food editorial, copywriting, and cover/page layout evidence displayed in the Editorial dossier. These project copies were resized/optimized from the user's source images.
- `src/components/factory/scenes/EditorialKitchenScene.jsx` - Editorial polished page-cycle/review interaction.
- `public/assets/factory/print/background-desktop-v1.webp` - first Print Engine Room generated draft, retained but not used.
- `public/assets/factory/print/background-desktop-v2.webp` - active Print Engine Room desktop illustration with stronger print-sample identity.
- `src/components/factory/scenes/PrintEngineScene.jsx` - Print polished physical proof/output interaction.
- `src/components/factory/RoomMotifs.jsx` - selects dedicated scenes for all eight rooms.
- `src/components/factory/BlueprintFrame.jsx` - eight-level desktop frame and route guides; route dots are CSS-positioned fixed-size nodes to avoid SVG circle distortion.
- `src/styles.css` - global site shell, non-factory sections, shared panels, imports, and top-level responsive rules.
- `src/content.js` - public room content plus first-pass selected evidence `proof` metadata for all eight rooms, including AI-assisted marketing, interactive narrative, visual novel, and workflow prototype records.
- `src/styles/factory-cutaway.css` - current eight-level building layout, route rail, room shell, blueprint overlay, fixed-size route dots, dossier placement, and factory layout keyframes.
- `src/styles/factory-scenes.css` - room-specific scene layers, target placement, material cues, and room animation keyframes; includes Operation coordination-loop flow, Commerce material-flow, Multimedia motion-rig, Editorial page-cycle, and Print production-pass work.
- `src/styles.css` also now includes dossier evidence gallery layout variants: wide, grid, mixed, commerce, print, and editorial.
- `src/styles.css` also includes video evidence card styling for Multimedia's selected YouTube records.
- `src/components/ContentFactory.jsx` - overall factory navigation, selection state, dossier behavior, image proof galleries, and video proof cards. Dossiers now render through a React portal into `document.body` so they stay above blueprint lines, floor labels, and room overlays.

## Approved Visual Rules

- Preserve the tall multi-floor factory architecture and HTML-based room labels / controls.
- Fixed architectural/background elements can stay cool blue and low contrast.
- Interactive or movable elements can use warm gold/orange emphasis.
- Use SVG/CSS for system interaction: route lines, nodes, scan/focus cues, outlines, and hover feedback.
- Use transparent PNG/WebP-style image props when an object needs to visually belong inside an illustrated room.
- Gold props should read as objects in the room, not pasted-on generic icons.
- Keep the base illustration and prop layer separable so future motion or interaction remains possible.
- Story Archive's current readable idle cues are an accepted local solution; they do not require retrofitting Cookbook's transparency behavior.
- Do not animate blueprint routes or dotted connectors by scaling the whole line when it would distort dash spacing or circular nodes. Prefer opacity, width, stroke-dashoffset, CSS-positioned fixed-size nodes, or SVG paths with non-scaling strokes.
- Reuse interaction quality across rooms, but do not reuse one universal `1-2-3-4` animation grammar. Let each room's material identity define how it comes alive.

## Responsive Strategy

- Complete and approve desktop room composition first, because prop placement depends on fixed architectural surfaces.
- Preserve the accepted desktop architecture in which each visual floor presents one department/room, giving interactive objects sufficient readable scale.
- All eight departments now have illustrated desktop scene treatments.
- Tablet/mobile strategy is now an open design question. A later compact experience may show one floor or one department at a time instead of squeezing the desktop cutaway and its precise prop hotspots.
- Reuse shared assets when practical, but allow alternate crops or layouts only after the small-screen interaction model is chosen.

## Boundaries

- Do not modify formal copy in `src/content.js` or `docs/mercury-content-source.md` while doing visual refinement.
- Do not replace the whole factory with a single static illustration.
- Do not turn the current gold SVG treatment into a rigid site-wide rule.
- Do not generate assets for all eight rooms before a room's composition and purpose have been reviewed.
- Do not publish the supplied visual reference image as a product asset.

## Next Tasks

### Latest Selected Evidence Enrichment Note

- 2026-06-18 completed a full eight-room desktop QA pass at 1280px width before adding public evidence content.
- QA confirmed all eight room backgrounds loaded, all desktop targets were visible, target clicks did not accidentally open dossiers, animations returned to idle, Operation / Commerce / Multimedia staged loops ran through their later-stage targets, browser console reported no warnings/errors, and horizontal overflow remained `0`.
- The user clarified that the evidence strategy should not explain missing archives or paper-era limitations publicly. Public pages should show selected proof naturally and avoid drawing attention to what is not shown.
- A first selected evidence pattern was established in `ModuleDossier`: status label `Selected evidence available`, proof heading, selected image gallery, short outcome sentence, and capability tags.
- `Cookbook Production Floor` now displays two selected published cookbook / food-publication cover evidence images and capability tags for content planning, layout coordination, food photography coordination, client/team communication, and print production support.
- `Story Archive & IP Office` now displays selected fiction publication, translated edition, and illustrator-collaboration materials, with capability tags for fiction writing, illustrator coordination, publishing communication, creator material curation, and reader-facing presentation.
- `Operation Control Room` now displays selected event/community/workshop materials, with capability tags for event coordination, community page operation, activity material preparation, on-site communication, and workshop documentation.
- `Commerce Visual Line` now displays selected GSK e-commerce marketplace banners, promotion visuals, flash-sale materials, and product frame work, with capability tags for marketplace banner adaptation, promotional visual production, product-image layout, platform size formatting, and brand asset handling.
- `Print Engine Room` now displays selected Malay-translated Hong Kong comic layout / print material plus early leaflet / brochure layout materials, with capability tags for comic layout adaptation, translated text fitting, leaflet layout, brochure formatting, and prepress delivery support.
- `Editorial Kitchen` now displays a selected Oriental Cuisine magazine issue record plus same-period food editorial, copywriting, and layout/cover design materials, with capability tags for food writing, interview-style copywriting, editorial layout, cover/page design, and print-oriented delivery. The page should present these as selected work evidence, not as an explanation for missing paper-era magazine covers.
- `Multimedia Workshop` now displays a recruiter-trimmed set of 4 selected portfolio-page screenshots plus 7 selected public YouTube video records as lightweight evidence cards rather than embedded players, with capability tags for concept planning, script/storyboard, filming/directing, video editing, motion production, web presentation, and team coordination. The retained set prioritizes breadth and outcomes over completeness: night-market web video, 3D interactive food-web teaser, MSI competition, Yongqing/Golden Calf shortlisted ad, animation advertising competition work, A+ cultural heritage shortlisted work, and graduation teaser.
- `AI Workflow Lab` now displays a recruiter-trimmed set of 4 selected AI-assisted project screenshots plus 4 selected project link cards: one AI marketing competition/ad video record from the 10th TYC Marketing Awards AI application category, the master's AI-assisted interactive comic `Hongbao`, the AI-assisted visual novel prototype `Before the Rain Stops`, and an AI-assisted book printing quote workflow prototype currently pending vendor specification finalization. Keep the positioning as AI-assisted creative direction, interactive narrative research, human review workflow, and prototype publishing rather than broad software-engineering specialization.
- `Operation Control Room` and `Commerce Visual Line` were moved from `Abstract only` to `Selected evidence available` in `src/content.js` because the user supplied public-facing selected evidence. Keep wording bounded; do not expand Commerce into ad buying, SEO, analytics, growth marketing, or performance claims.
- The current pattern feels materially stronger: selected proof gives the factory "soul" and helps recruiters/employers trust that the method came from real career practice.
- `npm run build` passed after the evidence additions. In-app browser checks confirmed the new proof images load and no horizontal overflow appears.
- Formal source document `docs/mercury-content-source.md` was not modified during this pass; if the evidence strategy becomes stable, later update the formal source deliberately rather than incidentally.

### Latest Recruiter-Readability QA Note

- 2026-06-20 fixed the Dossier stacking issue by rendering `ModuleDossier` through a React portal into `document.body` and giving the floating panel a high global layer (`z-index: 2000`). This prevents blueprint routes, floor labels, room text, or other cutaway overlays from visually covering the dossier.
- Browser layer QA checked Print, Multimedia, and AI dossiers: each dossier is now a direct child of `body`, uses `position: fixed`, and the top/middle/bottom points resolve to the dossier as the topmost element.
- Eight-room evidence QA confirmed all rooms show `Selected evidence available`; all selected proof image/video-card sections load; browser console has no warnings/errors; horizontal overflow remains `0`.
- Recruiter-readability observation: Multimedia and AI are now evidence-rich and visually stronger, but they are also the densest dossiers. A later refinement pass should consider "featured works first, more records below" or a separate Selected Works / Gallery area rather than adding more material into the same dossier stack.
- 2026-06-21 updated the lower site sections from early planning/pending language to the current completed-evidence state. `Usage`, `Case Files`, and `Protocol` now describe selected proof, conservative role claims, and recruiter-readable evidence routing. All eight `caseFiles` now use `Selected evidence available` rather than descriptive/abstract status.

### Latest AI Workflow And Story Archive Refinement Note

- 2026-06-14 revisited Level `00` AI Workflow Lab and Level `04` Story Archive & IP Office after user feedback that these two levels still felt less complete than Level `03`.
- AI Workflow Lab now has a room-level human-in-the-loop iteration layer tying Research, Prompt, Generate, Review, and Deliver into a clearer research-to-output loop.
- Story Archive now has a room-level manuscript/rights handoff layer tying Archive, Develop, Review, and Protect into a clearer archive-to-IP workflow.
- Right-edge AI Deliver and Story Protect targets were moved inward to reduce dossier overlap risk.
- Follow-up correction after user review: AI idle gold targets and the iteration layer were strengthened for visibility; the AI pulse now moves by scene-relative percentage positions instead of viewport-width distances, and Deliver keeps the room active long enough to run a full Research-to-Deliver sequence.
- Follow-up correction after user review: Story Archive's rights layer was brightened, and Review now reveals folder, manuscript, review, rights packet, and handoff cues in sequence so the change is visibly legible.
- Second follow-up correction after visual review: both AI and Story Archive gold interaction layers were pushed to a much higher-contrast amber treatment with thicker rails, larger nodes, stronger fills, and glow/shadow so the animated result remains visible to a casual viewer.
- 2026-06-17 integration correction: AI Workflow Lab no longer treats the central flow and the room hotspots as two separate interaction systems. Clicking a later stage now triggers all previous workflow hotspots in the same flow pass, and the central flow cards/nodes animate the matching upstream stages so Generate reads as Research + Prompt + Generate, Review reads as the human review loop, and Deliver reads as the full sequence.
- 2026-06-17 Story Archive integration correction: Story Archive now follows the same single-flow interaction model. Clicking a later stage triggers the previous archive workflow hotspots in the same pass, so Review reads as Archive + Develop + Review and Protect reads as the full archive-to-rights sequence. Browser QA confirmed Review triggers Archive/Develop/Review together, keeps the six-page review animation, runs the rights-layer materials, and has no horizontal overflow.
- 2026-06-17 route-label correction: the left Factory Route now uses the actual spatial floor labels `LV-07` through `LV-00` as the primary index, with the original `MCL-01` through `MCL-08` module codes retained as secondary file labels. This aligns the route index with the eight-level cutaway without changing formal content data.
- 2026-06-17 room-label correction: the large room-card header no longer uses the confusing `RM-xx` prefix. It now shows the actual spatial floor label (`LV-07` through `LV-00`) to match the visible `Level / xx` architecture, while `MCL-xx` remains in route and dossier contexts as the content/file module code.
- 2026-06-17 contrast and liveliness correction: Print Engine Room (`LV-07`) and Editorial Kitchen (`LV-06`) received a stronger amber/gold treatment for their interaction rails, props, targets, and idle markers so the interactive layer is closer to the accepted AI Workflow Lab visibility level. Commerce Visual Line (`LV-02`) and Multimedia Workshop (`LV-01`) now use cumulative flow triggers: clicking a later visible stage also activates the upstream hotspots/material cues, making the rooms read less like isolated single-point effects.
- `npm run build` passed. In-app browser QA at the current narrow app viewport confirmed AI Generate and Story Review trigger the new layers, return to idle, backgrounds load, and no horizontal overflow appears. Wide desktop QA is still needed to click all hidden-at-narrow-width targets.
- `npm run build` also passed after the 06/07 contrast pass and the 01/02 cumulative trigger update. Initial in-app browser QA at the current 400px-wide viewport confirmed Commerce Adapt triggers Sample + Compose + Adapt, Multimedia Prototype triggers Storyboard + Edit + Prototype, the central flow animations run, and no horizontal overflow appears. Desktop QA should still click Commerce Export and Multimedia Test because those targets are hidden in the narrow viewport.
- 2026-06-17 follow-up on 01/02 rhythm: Commerce Visual Line and Multimedia Workshop were changed again from "activate all upstream stages at once" to an Operation-style staged loop. Any visible target now starts a full timed sequence: Commerce progresses `Sample -> Compose -> Adapt -> Export`, and Multimedia progresses `Storyboard -> Edit -> Prototype -> Test`. Browser QA at the current narrow viewport confirmed the scene classes advance through each stage in order and return to idle with no horizontal overflow.
- Formal content sources remain protected; `src/content.js`, `docs/mercury-content-source.md`, and `docs/room-benchmark-workflow.md` were not modified.

### Latest QA And Print Polish Note

- 2026-06-05 visual QA checked all eight rooms at desktop, tablet, and mobile viewport sizes.
- All eight room backgrounds loaded successfully; current room labels remain readable and do not create obvious responsive breakage.
- Desktop dossier opens for every room. It intentionally floats on the right and overlaps roughly the right fifth of the active room; acceptable for now, but worth revisiting if future interactions rely on right-edge objects.
- Tablet and mobile layouts are usable, with reduced visible target counts by design. They remain compact fallbacks, not the final small-screen interaction model.
- `Print Engine Room` received the first interaction polish pass: Scan now seats a feed sheet, Arrange adds an alignment rule, Proof adds a proof sheet and color bar, and Output adds a releasing sheet.
- Formal content sources remain protected; `src/content.js` and `docs/mercury-content-source.md` were not modified.

### Latest Operation Polish And Blueprint Geometry Note

- 2026-06-06 continued the interaction polish pass with `Operation Control Room`.
- The user approved the new automated coordination feel after individual targets were changed to trigger the complete `Intake -> Assign -> Track -> Deliver` loop.
- The user then noticed distorted dashed connectors and non-circular route nodes. The fix moved global route dots out of stretched SVG circles into CSS-positioned fixed-size nodes and added non-scaling stroke treatment to the blueprint overlay.
- The in-app preview was served from `http://127.0.0.1:5173/`; if it is unavailable, restart with `npm run dev -- --host 127.0.0.1`.
- `npm run build` passed after these changes.

### Latest Commerce And Multimedia Polish Note

- 2026-06-11 continued the interaction polish pass with `Commerce Visual Line` and `Multimedia Workshop`.
- Commerce now has a tactile material-flow layer: Sample, Compose, Adapt, and Export progressively handle swatches, layout cards, format surfaces, and a release packet.
- Multimedia now has a motion-rig layer: Storyboard, Edit, Prototype, and Test progressively introduce clips, timeline movement, prototype screen activation, and signal feedback.
- Right-edge Commerce Export and Multimedia Test targets were moved inward to avoid dossier/edge overlap risk.
- Desktop browser QA verified Commerce and Multimedia backgrounds load, all desktop targets are visible, target states return to idle, and there is no horizontal overflow.
- `npm run build` passed after the Commerce and Multimedia polish updates.

### Latest Editorial And Print Polish Note

- 2026-06-13 continued the remaining interaction polish pass with `Editorial Kitchen` and `Print Engine Room`.
- Editorial now has a page-cycle layer: Draft, Layout, Edit, and Release progressively introduce draft sheets, arranged spreads, review marks, and clean output.
- Print now has a production-pass layer: Scan, Arrange, Proof, and Output progressively move paper through input, layout, proof, and output stages.
- Right-edge Editorial Release and Print Output targets were moved inward to avoid dossier/edge overlap risk.
- Desktop browser QA verified Editorial and Print backgrounds load, all desktop targets are visible, target states return to idle, and there is no horizontal overflow.
- `npm run build` passed after the Editorial and Print polish updates.

### Priority 1: Full Eight-Room Desktop QA

- Completed on 2026-06-18 for the desktop pass at 1280px width.
- Keep re-checking all eight rooms only after future broad CSS or room-shell changes.
- Known ongoing caveat: the fixed desktop dossier intentionally overlaps the right side of the active room; this remains acceptable for now but should be reconsidered if future evidence or interactions rely on right-edge material.
- Compact/mobile behavior remains provisional. Narrow viewport checks showed proof images load and no horizontal overflow, but the final small-screen evidence/dossier experience still needs a later design pass.

### Priority 2: Review Completed Selected Evidence Chain

- The first-pass selected evidence chain is now complete across all eight rooms. Review it as a recruiter-facing narrative rather than continuing to add more material by default.
- Preserve the same pattern room by room: a few credible selected proof images or records, one outcome sentence, and capability tags. Do not turn the site into a full archive.
- Do not publicly explain missing evidence or paper-era archive limitations unless the user explicitly asks. Showing selected proof is enough.
- Likely next content work: trim/reorder evidence for stronger first-read impact, add selected thumbnails where visually useful, or create a separate gallery/selected-works area for deeper viewing.
- Keep claims conservative and role-specific. Evidence should prove professional substance, not inflate sole ownership or unsupported scope.

### Priority 3: Interaction Upgrade Pass

- The user explicitly noticed that Operation, Commerce, and Multimedia interactions were visually useful but somewhat stiff; each now has a first-pass polish.
- Editorial and Print now also have first-pass polish; future interaction work should be selective refinement rather than another broad baseline pass.
- Now that all eight rooms have at least a background and basic interaction scaffold, continue the interaction-polish pass room by room.
- Later upgrade each room's interaction language according to its material identity rather than forcing one universal animation style.
- Current room-language direction: Operation is coordination/control; Commerce is tactile visual sampling and composition; Multimedia is motion/prototype/test; Editorial is page-cycle/review; Print is physical proof/output.

### Priority 4: Responsive Direction After Desktop Proof

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
