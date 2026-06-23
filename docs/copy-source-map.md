# Mercury Lab Copy Source Map

This map identifies where visible English and Chinese website copy is stored after the copy-source audit. It does not rewrite any copy.

## Primary Website Copy Source

### `src/data/siteCopy.js`

Primary centralized bilingual copy source for the Mercury Lab website.

Controls:
- Hero / Landing: `brand`, `sectionContent.hero`, and `sectionContent.factory`.
- Console / status card: `factoryCopy.status`.
- Room cards: `rooms`, `factoryCopy.roomFunctions`, `factoryCopy.floors`, and `factoryCopy.roomShell`.
- Opened room dossier: `rooms[*]`, especially `title`, `period`, `discipline`, `summary`, `diagram`, and `proof`.
- Evidence tab / gallery: `caseFiles`, `rooms[*].proof.assets`, `rooms[*].proof.videos`, and `appCopy.cases`.
- How to Read: `sectionContent.usage` and `usageSteps`.
- Routes / Processing Modes: `sectionContent.modes` and `processingModes`.
- Selected Work Evidence / Cases: `sectionContent.cases`, `caseFiles`, and each room's `proof`.
- Collaboration: `sectionContent.protocol` and `appCopy.collaboration`.
- Footer / microcopy: `appCopy.footer`, `appCopy.header`, `appCopy.nav`, `factoryCopy.status`, `factoryCopy.dossier`, and `sceneCopy`.
- AI profile source content: `brand`, `sectionContent`, `rooms`, `usageSteps`, `processingModes`, and `caseFiles`.

## Compatibility Export

### `src/content.js`

Compatibility re-export only.

Controls:
- No direct copy. It re-exports from `src/data/siteCopy.js` so older imports continue to work.

## Components Reading Central Copy

### `src/App.jsx`

Renders top-level website structure and imports copy from `src/data/siteCopy.js`.

Controls:
- Header navigation.
- Language toggle microcopy.
- How to Read section rendering.
- Routes / Processing Modes section rendering.
- Selected Work Evidence / Cases cards and lightbox.
- Collaboration contact buttons.
- Footer / microcopy.

### `src/components/ContentFactory.jsx`

Renders the content factory hero, factory route index, room levels, status card, room dossier portal, and console. Imports copy from `src/data/siteCopy.js`.

Controls:
- Hero / Landing factory copy.
- Console / status card.
- Room route labels.
- Room floor labels.
- Opened room dossier labels.
- Evidence summary labels inside dossier.
- Factory route / legend / active feed microcopy.

### `src/components/factory/RoomShell.jsx`

Renders each clickable room card and imports room shell microcopy from `src/data/siteCopy.js`.

Controls:
- Room card labels from `rooms`.
- Room function label from `factoryCopy.roomFunctions`.
- Footer microcopy such as "Open dossier" / "打開檔案".

## Scene Microcopy

These files render interactive room-scene labels and import labels from `sceneCopy` in `src/data/siteCopy.js`.

### `src/components/factory/scenes/PrintEngineScene.jsx`

Controls:
- Print room scene labels: Scan, Arrange, Proof, Output.
- Print room key labels.

### `src/components/factory/scenes/EditorialKitchenScene.jsx`

Controls:
- Editorial room scene labels: Draft, Layout, Edit, Release.
- Editorial room key labels.

### `src/components/factory/scenes/CookbookProductionScene.jsx`

Controls:
- Cookbook room scene labels: Plan, Cook, Style, Capture.
- Cookbook room key labels.

### `src/components/factory/scenes/StoryArchiveScene.jsx`

Controls:
- Story room scene labels: Archive, Develop, Review, Protect.
- Story room key labels.

### `src/components/factory/scenes/OperationControlScene.jsx`

Controls:
- Operation room scene labels: Intake, Assign, Track, Deliver.
- Operation room key labels.

### `src/components/factory/scenes/CommerceVisualScene.jsx`

Controls:
- Commerce room scene labels: Sample, Compose, Adapt, Export.
- Commerce room key labels.

### `src/components/factory/scenes/MultimediaWorkshopScene.jsx`

Controls:
- Multimedia room scene labels: Storyboard, Edit, Prototype, Test.
- Multimedia room key labels.

### `src/components/factory/scenes/AiWorkflowLabScene.jsx`

Controls:
- AI workflow room scene labels: Research, Prompt, Generate, Review, Deliver.
- AI workflow room key labels.

## Generated AI-Readable Outputs

### `scripts/generate-ai-profile.mjs`

Generates public AI-readable files from `src/data/siteCopy.js`.

Controls:
- Source-to-output transformation for `public/ai-profile.md`.
- Source-to-output transformation for `public/ai-profile.json`.

### `public/ai-profile.md`

Generated text-first AI-readable profile.

Controls:
- Public Markdown output only. Do not edit directly; edit `src/data/siteCopy.js` and rebuild.

### `public/ai-profile.json`

Generated structured AI-readable profile.

Controls:
- Public JSON output only. Do not edit directly; edit `src/data/siteCopy.js` and rebuild.

### `public/llms.txt`

Public AI/readability pointer file.

Controls:
- Short public pointer text for AI-oriented discovery.
- Currently separate from the generated profile script.

## Non-Visible Or Reference Copy

These files include planning, architecture, handoff, or source-control notes. They are not the primary source for visible website copy.

- `docs/mercury-content-source.md`
- `docs/handoff-next-session.md`
- `docs/ai-workflow-lab-design-brief.md`
- `docs/story-archive-ip-office-design-brief.md`
- `docs/architecture.md`
- `docs/project-state.md`
- `docs/room-benchmark-workflow.md`
- `mercury-lab-copy-audit.md`

