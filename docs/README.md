# Full-Stack Engineering Learning Roadmap Documentation

A professional, static documentation platform built with **Astro** and **Starlight** that transforms the `Combined_FullStack_Learning_Roadmap.xlsx` workbook into an interactive engineering knowledge base.

## What This Is

This site documents a full-stack software engineering curriculum spanning **10 phases**, **28 modules**, **659 learning items**, and **617.5 estimated learning hours**. Rather than navigating a raw spreadsheet, engineers get:

- Structured module documentation with learning objectives, prerequisites, and resources
- Interactive roadmap matrix with real-time search and filtering
- Dependency map showing prerequisite relationships between modules
- Client-side progress tracker (persisted in LocalStorage)
- Priority system (P0/P1/P2) to guide learning focus

## Architecture

```
Documentation/
├── astro.config.mjs          # Astro + Starlight site configuration, sidebar
├── content.config.ts         # Astro content collection schema
├── package.json
├── tsconfig.json
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── ModuleStats.astro     # Stats header card grid for module pages
│   │   ├── PriorityBadge.astro   # P0/P1/P2 colored badge
│   │   ├── ProgressTracker.astro # Client-side LocalStorage tracker
│   │   ├── RoadmapMatrix.astro   # Interactive filterable roadmap table
│   │   └── StatusBadge.astro     # Status display badge
│   ├── content/
│   │   └── docs/             # All Starlight MDX pages
│   │       ├── index.mdx         # Homepage (splash template)
│   │       ├── roadmap/          # Phase overview pages
│   │       │   ├── index.mdx         # Full roadmap matrix page
│   │       │   ├── phase-1-foundation.mdx
│   │       │   └── ... (10 phase pages)
│   │       ├── modules/          # 28 module documentation pages
│   │       │   ├── core-java-programming.mdx
│   │       │   └── ... (28 module pages)
│   │       ├── learning-path/    # Navigation & dependency guidance
│   │       │   ├── prerequisites.mdx
│   │       │   ├── recommended-order.mdx
│   │       │   └── dependency-map.mdx
│   │       ├── resources/        # Curated resources directory
│   │       │   └── index.mdx
│   │       └── progress/         # Progress tracker page
│   │           └── index.mdx
│   ├── data/                 # Structured JSON data from Excel
│   │   ├── roadmap.json          # 659 rows — one per subtopic
│   │   ├── modules.json          # 28 modules with full topic hierarchy
│   │   ├── phases.json           # 10 phases with module summaries
│   │   └── legend.json           # P0/P1/P2 priority definitions
│   └── styles/
│       └── custom.css            # Priority color tokens, stat cards, table styles
├── scripts/
│   ├── sync-roadmap.py       # Excel → JSON data pipeline
│   └── generate-docs.py      # JSON → MDX content generator
└── DATA_QUALITY.md           # Data quality report from workbook analysis
```

## How the Data Pipeline Works

```
Combined_FullStack_Learning_Roadmap.xlsx
          │
          ▼
  scripts/sync-roadmap.py
  (reads Excel via openpyxl, parses sheets:
   "Learning Roadmap", "Roadmap Overview", "Priority Legend")
          │
          ▼
  src/data/{roadmap,modules,phases,legend}.json
          │
          ▼
  scripts/generate-docs.py
  (generates all MDX pages from JSON data)
          │
          ▼
  src/content/docs/**/*.mdx
          │
          ▼
  astro build → dist/ (static HTML)
```

The Excel workbook is the **conceptual source of truth**. The JSON files are derived artifacts. The MDX pages consume the JSON at build time.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+ with `openpyxl` (only needed for data sync from Excel)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

### Build for Production

```bash
npm run build
```

Output is written to `dist/`. This is a fully static site — no server runtime required.

### Preview Production Build

```bash
npm run preview
```

## How to Update the Roadmap

When the Excel workbook changes:

1. Replace the workbook file with the updated version
2. Run the data sync script:

   ```bash
   python scripts/sync-roadmap.py
   ```

3. Regenerate MDX documentation pages:

   ```bash
   python scripts/generate-docs.py
   ```

4. Review changes with the dev server:

   ```bash
   npm run dev
   ```

5. Build and deploy:

   ```bash
   npm run build
   ```

## How to Add a New Module

1. Add the module data to the Excel workbook (in the `Learning Roadmap` sheet)
2. Run `sync-roadmap.py` to update JSON
3. Run `generate-docs.py` to generate the new module MDX page, or create it manually in `src/content/docs/modules/your-module-slug.mdx`
4. Add the module to the sidebar in `astro.config.mjs` under the appropriate phase group
5. Link the module from its phase overview page in `src/content/docs/roadmap/phase-N-*.mdx`

## How to Add Custom Documentation

Create any `.md` or `.mdx` file under `src/content/docs/`. Starlight automatically picks it up as a doc page. Use frontmatter to set `title` and `description`:

```mdx
---
title: My Custom Page
description: A short description for search and SEO.
---

Content goes here.
```

Add the new page to the sidebar in `astro.config.mjs`.

## How to Deploy

The output in `dist/` is a standard static site. Deploy to any static host:

- **Netlify**: Drop the `dist/` folder or connect the repo (auto-build on push)
- **Vercel**: Connect the repo; Vercel auto-detects Astro
- **GitHub Pages**: Use the `astro.config.mjs` `base` option if deploying to a subpath
- **Any CDN / S3**: Upload `dist/` contents

## Priority System

| Code | Name | Meaning |
|------|------|---------|
| P0 | Must-Have | Core fundamentals / non-negotiables. Complete before moving on. |
| P1 | Core Competency | Essential patterns and production workflows. Build practice projects. |
| P2 | Advanced / Specialized | Optimization and edge cases. Tackle after the module core is complete. |

## Data Quality

See [DATA_QUALITY.md](./DATA_QUALITY.md) for a full report of data quality findings from the Excel workbook analysis.

## Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| [Astro](https://astro.build) | ^5.0.0 | Static site framework |
| [@astrojs/starlight](https://starlight.astro.build) | ^0.32.0 | Documentation theme |
| TypeScript | ^5 | Type safety in components |
| Python + openpyxl | 3.9+ | Excel data extraction |
| sharp | ^0.33.5 | Image optimization |
