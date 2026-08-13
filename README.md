# AI Skills Navigator Unauthenticated Landing Page

Prototype for an unauthenticated AI Skills Navigator Executive audience page.

## What is included

- A production-aligned AI Skills Navigator header and legal footer.
- A stable `#executive` deep-link anchor with no site-navigation entry.
- Four responsive “I want to…” leadership challenge groups.
- Data-driven editorial, readiness, credential, and next-step sections.
- Mobile disclosure behavior and desktop content grids.
- The same light visual theme used by AI Skills Navigator.
- A separate prototype annotation layer for design and content review.

## Executive content structure

All Executive page content and destination status live in
`src/data/executive.ts`. The React template reads these fields rather than
hard-coding audience copy:

- Audience slug, label, title, description, CTAs, and supporting copy
- Four JTBD groups with recommended playlists or learning paths
- Relevant content titles and durations
- Editorial feature
- Non-interactive readiness checklist
- Featured credential
- One Microsoft next steps

`src/utils/urls.ts` is the shared ASN URL helper. Every available ASN link
includes `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content`. Incoming
values take precedence; otherwise `utm_campaign` defaults to `executive`.

## Unresolved content dependencies

Unknown destinations are stored as `TODO` in `src/data/executive.ts` and render
as disabled text, never broken links. Approved URLs or playlist IDs are still
needed for:

- Executive landing primary CTA
- All four recommended playlist or learning-path destinations
- All JTBD relevant-content destinations
- All four JTBD CTA destinations
- Editorial “Create business value with AI” destination
- Executive readiness checklist destination
- Executive learning destination in One Microsoft next steps
- AI transformation workshop destination
- Organizational Skilling destination

The Microsoft Certified: AI Transformation Leader credential is the only
verified learning destination currently enabled.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL in a browser.

## Build

```bash
npm run build
```

The project currently has no separate test or lint scripts. `npm run build`
runs the existing TypeScript project build and Vite production build.

## GitHub Pages

Pushes to `main` deploy automatically through `.github/workflows/deploy-pages.yml`.

After the first push, open the repository's **Settings > Pages** and set **Source** to
**GitHub Actions** if it is not selected automatically.

Live URL:

<https://wbnations.github.io/ASN_Unauth_Landing_Page/>
