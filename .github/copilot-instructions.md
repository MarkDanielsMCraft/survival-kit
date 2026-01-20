# Copilot Instructions: Survival Kit

## Project Overview
React + Vite app providing a comprehensive guide for international students/scholars moving to Germany. Content-focused SPA with blog posts, resource library, and interactive checklists. **Content accuracy is paramount** — all information must be verified and dated.

## Architecture & Data Flow

### Core Pattern: Data-First Architecture
- **All content lives in `/src/data/`** — posts in JSX (for icon rendering), resources in JS
- Posts are objects with structured fields: `slug`, `title`, `content[]`, `steps[]`, `readMore[]`, `downloads[]`, `videos[]`, `tags[]`
- App state flows: Data → Filter/Search → PostCard → PostDetail
- Progress tracking: localStorage persists checklist completion via `slug-index` keys (e.g., `first-72-hours-0`)

### Content Structure
```jsx
// src/data/posts.jsx - Blog posts with rich content blocks
content: [
  { type: "h2", text: "Section Title" },
  { type: "p", text: "Paragraph with **bold** and [links](url)" },
  { type: "ul", items: ["**Item 1:** details", "Item 2"] }
]

// src/data/resources.js - Curated external links
{ id: "r1", title: "...", url: "...", category: "...", source: "official/ngo/tool/..." }
```

## Critical Workflows

### Adding New Content
**Blog Post:** Edit `/src/data/posts.jsx` — copy existing post object, modify fields, add `verified: "YYYY-MM-DD"` date
**Resource:** Edit `/src/data/resources.js` — ensure `category` matches `RESOURCE_CATEGORIES` in `/src/constants/config.js`

### Development Commands
```bash
npm run dev      # Vite dev server on localhost:5173
npm run build    # Production build (sets base: /survival-kit/ for GitHub Pages)
npm run preview  # Preview production build locally
npm run lint     # ESLint check
```

### Deployment
- Builds to GitHub Pages at `/survival-kit/` (see `vite.config.js` base path)
- Production URLs must account for subdirectory base path

## Project-Specific Conventions

### Rich Text Rendering
- Use markdown-like syntax in strings: `**bold**` and `[text](url)`
- Parsed by `/src/utils/textRenderer.jsx` using regex → React elements
- **Always validate URLs** via `isSafeUrl()` from `/src/utils/security.js` (blocks non-http protocols)

### Component Patterns
- **Progress calculation:** `pct()` helper from `/src/utils/helpers.js` returns formatted percentage string
- **Icons:** Import from `lucide-react`, embed in JSX (e.g., `icon: <Wifi size={24} />`)
- **Gradients:** Use Tailwind's `from-{color}-{shade} to-{color}-{shade}` pattern consistently
- **Background images:** Posts support `backgroundImage` (Unsplash URLs) with 10-15% opacity overlay

### Security & External Links
- All external URLs must pass `isSafeUrl()` check (http/https only)
- Use `safeOpen()` wrapper to open links with `noopener,noreferrer`
- Source badges categorize link trust: `official` > `ngo` > `tool` > `learning` > `video` > `referral`

### State Management
- **No Redux/Context** — useState + localStorage only
- **View states:** `"posts"` | `"library"` (controlled by Header tabs)
- **Filters:** Stage-based + text search (queries `title`, `summary`, `steps`, `tags`)
- **Progress persistence:** Saved on every step toggle, loaded on mount

### Content Quality Standards
1. **Verification dates:** Every post must have `verified: "YYYY-MM-DD"` field
2. **Beginner-friendly:** Explain German terms inline (e.g., "Anmeldung (address registration)")
3. **Concrete examples:** Include real prices, timelines, platform names
4. **External sources:** Prefer official (.de government) > NGO > commercial tools
5. **Update references:** Link to `CURRENT_AS_OF_JAN19_2026.md` for verification status

### Styling System
- **Tailwind utility-first** with responsive modifiers (`sm:`, `md:`)
- **Global styles:** Injected via `<style>` tag in App.jsx from `/src/styles/globalStyles.js`
- **Animation classes:** `.fade-in-up`, `.mesh-bg`, `.hero-photo` defined in globalStyles
- **Color scheme:** Indigo primary, slate grays, stage-specific gradients

## Files to Modify for Common Tasks

| Task | Primary Files | Related Files |
|------|---------------|---------------|
| Add blog post | `src/data/posts.jsx` | `src/constants/config.js` (stages) |
| Add resource | `src/data/resources.js` | `src/constants/config.js` (categories) |
| Update site metadata | `src/constants/config.js` | `index.html` (page title) |
| Modify layout/routing | `src/App.jsx` | `src/components/Header.jsx` |
| Add new content type | `src/utils/textRenderer.jsx` | Update regex parser |
| Change build output path | `vite.config.js` | Update GitHub Pages settings |

## Testing & Validation
- **Before commit:** Run `npm run lint` to catch React hooks issues
- **Content verification:** Check all URLs load, prices/dates are current
- **Visual test:** Test on mobile width (320px) — layout must remain functional
- **Search test:** Verify new posts/resources appear in search results

## Anti-Patterns to Avoid
- ❌ Don't add routing libraries (SPA uses view state switching, not URL routing)
- ❌ Don't store sensitive data in posts (no API keys, personal info)
- ❌ Don't use generic placeholder text — every sentence must provide real value
- ❌ Don't break the `content` array structure — maintain `type`, `text`, `items` schema
- ❌ Don't skip `verified` dates on posts — content accuracy is our USP
