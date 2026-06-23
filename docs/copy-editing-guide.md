# Mercury Lab Copy Editing Guide

Edit visible EN/ZH website copy in `src/data/siteCopy.js`.

Most bilingual text uses this shape:

```js
copy("English text", "中文文字")
```

Do not edit generated files in `public/` or `dist/` directly. Run the build after editing copy so the AI-readable profile is regenerated.

## Hero

Edit:
- `brand.name`
- `brand.subtitle`
- `brand.positioning`
- `sectionContent.hero`
- `sectionContent.factory`

Controls:
- Mercury Lab name.
- Main factory hero eyebrow.
- Subtitle and positioning paragraph.
- Factory intro heading and description.

## Rooms

Edit:
- `rooms`
- `factoryCopy.roomFunctions`
- `factoryCopy.floors`
- `factoryCopy.roomShell`

Controls:
- Room names.
- Room periods.
- Room disciplines.
- Room summaries.
- Room route/floor labels.
- Room card function labels.
- Room card footer microcopy.

## Dossiers

Edit:
- `rooms[*].diagram`
- `rooms[*].discipline`
- `rooms[*].summary`
- `rooms[*].proof`
- `factoryCopy.dossier`

Controls:
- Opened room dossier heading.
- Active period / production scope labels.
- Evidence summary label.
- Evidence outcome paragraph.
- Role bullet list.
- Evidence gallery and video link text.

## Cases

Edit:
- `sectionContent.cases`
- `caseFiles`
- `rooms[*].proof.assets`
- `rooms[*].proof.videos`
- `appCopy.cases`

Controls:
- Selected Work Evidence section heading and description.
- Case card titles and notes.
- Case status button text.
- Lightbox labels.
- Empty-state text for cases with external links only.
- Project link labels and video titles/roles.

## Buttons / Microcopy

Edit:
- `appCopy.nav`
- `appCopy.header`
- `appCopy.cases`
- `appCopy.collaboration`
- `appCopy.footer`
- `factoryCopy.status`
- `factoryCopy.dossier`
- `factoryCopy.roomShell`
- `sceneCopy`

Controls:
- Header navigation.
- Language toggle.
- Version label.
- Evidence gallery buttons.
- Collaboration contact buttons.
- Footer.
- Factory status card.
- Route index and factory console.
- Room scene labels such as Scan, Draft, Plan, Archive, Intake, Sample, Storyboard, and Research.

## How To Read

Edit:
- `sectionContent.usage`
- `usageSteps`

Controls:
- How to Read section heading and description.
- Three reading-step cards.

## Routes / Processing Modes

Edit:
- `sectionContent.modes`
- `processingModes`

Controls:
- Reading Routes section heading.
- Route names.
- Route descriptions.
- Route chains.

## Collaboration

Edit:
- `sectionContent.protocol`
- `appCopy.collaboration`

Controls:
- Role Fit & Collaboration heading.
- Collaboration statement.
- Capability / role-fit bullet list.
- LinkedIn and email button text.

## AI Profile

Edit source copy in:
- `brand`
- `sectionContent`
- `rooms`
- `usageSteps`
- `processingModes`
- `caseFiles`

Generated outputs:
- `public/ai-profile.md`
- `public/ai-profile.json`

Generation script:
- `scripts/generate-ai-profile.mjs`

Build command:

```bash
npm run build
```

Notes:
- `public/ai-profile.md` and `public/ai-profile.json` are generated from the central copy file.
- `public/llms.txt` is a separate AI-discovery pointer and is not currently generated from `siteCopy.js`.
- The next strategy step is to verify how these public files are exposed after deployment so external AI tools can actually fetch them.

