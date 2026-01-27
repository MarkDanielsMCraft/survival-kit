# Survival Kit: Move to Germany with Confidence

[Live Demo](https://markdanielsmcraft.github.io/survival-kit/) · React 19 · Vite 7 · Tailwind 3

Data-first, verified guides for international students, scholars, and trainees building a life in Germany. PDFs are available via the in-app footer (Download guides).

**Verification date:** January 27, 2026 — see [CURRENT_AS_OF_JAN19_2026.md](CURRENT_AS_OF_JAN19_2026.md).

## Overview
- 17 structured guides with stage-specific styling, photography, and checklists (localStorage persistence)
- Resource library with trusted-source badges and search
- Emergency shortcuts (112/110/116117) always available
- PDF export (cover + TOC) for offline use

## Project Structure
```
survival-kit/
├── src/
│   ├── data/           # posts.jsx, resources.js
│   ├── components/     # cards, detail view, filters, navigation
│   ├── constants/      # config, stage styles, assets
│   ├── utils/          # text renderer, helpers, security, pdf exporter
│   ├── styles/         # global styles injection
│   ├── App.jsx         # app shell, view toggles, filters
│   └── main.jsx        # entry point
├── public/
├── vite.config.js      # base: /survival-kit/
└── package.json
```

## Data-First Content Model
- Posts: [src/data/posts.jsx](src/data/posts.jsx) — content blocks (type: p | h2 | ul), steps, readMore, downloads, videos, tags, verified date, background images.
- Resources: [src/data/resources.js](src/data/resources.js) — categories must match RESOURCE_CATEGORIES in [src/constants/config.js](src/constants/config.js).
- Styling tokens: [src/constants/ui.js](src/constants/ui.js); globals in [src/styles/globalStyles.js](src/styles/globalStyles.js).
- Safety: external links pass through isSafeUrl and safeOpen in [src/utils/security.js](src/utils/security.js).

## Setup
```
git clone https://github.com/MarkDanielsMCraft/survival-kit.git
cd survival-kit
npm install

npm run dev      # start dev server (5173)
npm run lint     # eslint checks
npm run build    # production build (base /survival-kit/)
npm run preview  # preview production build
```

## Deployment (GitHub Pages)
- Base path is /survival-kit/ (set in vite.config.js).
- Push to main; Pages builds automatically. Local output: dist/.

## Authoring Guidelines
- Keep posts beginner-friendly; define German terms inline (e.g., Anmeldung = address registration).
- Every post requires a fresh verified: "YYYY-MM-DD" when content changes.
- Use official/NGO sources first; only http/https links are allowed.
- Follow the content schema in posts.jsx; keep background images imported and assigned per post.

## Quality Checks
- npm run lint
- Visual sanity at 320–375px widths (cards, hero contrast, tap targets).
- Optional: download the in-app PDF to spot layout issues in print view.

## Support the Project
If this guide saves you time, fines, or stress: [Buy Me a Coffee](https://www.buymeacoffee.com/MarkDanielsMCraft). The footer button uses LINKS.buyMeACoffee.

## Contributing
Fork → branch → commit → PR. Please describe changes clearly. Issues and feature ideas are welcome.

## License
MIT. See [LICENSE](LICENSE).
