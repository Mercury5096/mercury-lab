# Mercury Lab

**A Content Production Experiment from Print to AI**

An English-first one-page prototype presenting a content-production practice across print, editorial workflow, multimedia design, and AI-assisted interactive storytelling.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- CSS animation and inline SVG only for current visual motion/diagram work

## Setup

Requirements:

- Node.js `20.19+` or `22.12+`
- npm

Install:

```bash
npm install
```

Run local preview:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

## Current Status

- Current working version: `v0.4`
- `v0.1` baseline saved in Git commit `2930e03`
- Current focus: refine the Content Factory into a richer modular SVG-driven visual system
- Handoff state: see [docs/project-state.md](docs/project-state.md)
- Next-session brief: see [docs/handoff-next-session.md](docs/handoff-next-session.md)
- Asset contribution guide: see [docs/asset-intake.md](docs/asset-intake.md)

## Project Folders

- `src/` - application code and shared content data
- `src/components/` - focused UI systems such as `ContentFactory`
- `docs/` - factual source, decisions, architecture, and handoff state
- `dist/` - generated production build output, not source

## Important Constraints

- Treat [docs/mercury-content-source.md](docs/mercury-content-source.md) as the source of truth for facts, approved wording, rights limits, language strategy, and overclaim rules.
- English-first interface; keep content data bilingual-ready with `en` / `zh` fields.
- Preserve approved wording: `50+ cookbook-related publishing projects`.
- Do not publish unconfirmed brand, publisher, client, product, or commissioned imagery.
- No backend, login, API keys, or tracking code.
- No external templates, large static hero/factory image, Three.js, WebGL, canvas, React Flow, or heavy animation libraries.

## Short Update Format

Use this format for future handoff notes:

```md
Date:
Task:
Changed:
Files:
Risks:
Next:
```
