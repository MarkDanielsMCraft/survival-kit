# 🇩🇪 Survival Kit: Your Guide to Life in Germany

> **The honest, step-by-step guide for international students and scholars navigating life, work, and study in Germany**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-survival--kit-blue?style=flat-square)](https://markdanielsmcraft.github.io/survival-kit/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 About

Survival Kit is an interactive guide designed to help international students, scholars, and professionals thrive in Germany. Initially created for nursing scholars (Auszubildende), it has evolved to cover essential topics relevant to **any international student or worker** in Germany.

It covers everything from the first 72 hours after arrival to understanding workplace rights, navigating bureaucracy, and building community.

**Why we built this:**
- Living and working abroad is challenging and can feel isolating
- Official information is scattered and often in German
- International newcomers face a steep learning curve with bureaucracy
- We wanted to create a friendly, honest resource that actually helps
- Practical tips that aren't found in official guides

### 📅 **Content Verified as of January 23, 2026**
✅ All prices, timelines, and procedures are current and verified  
✅ Written specifically for complete beginners with no unexplained German jargon  
✅ Every complex concept explained thoroughly with real examples  
✅ Links to official German government sources for local verification  
👉 **See [CURRENT_AS_OF_JAN19_2026.md](./CURRENT_AS_OF_JAN19_2026.md) for full verification details**

---

## ✨ Key Features

### 📚 **Comprehensive Blog Guides**
- **Mindset & Culture** - Expectations, quiet hours, Coconut Culture, direct feedback
- **Arrival (First 72 Hours)** - From airport to bed: internet, transport, essentials
- **Money & Paperwork** - Banking, Anmeldung, taxes, health insurance
survival-kit/
# 🇩🇪 Survival Kit: Move to Germany with Confidence

> Data-first, verified guides for international students, scholars, and trainees living in Germany.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-survival--kit-blue?style=flat-square)](https://markdanielsmcraft.github.io/survival-kit/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## What This Is
An interactive SPA that bundles arrival checklists, housing hacks, work rights, health navigation, and culture tips for newcomers to Germany. Originally built for nursing trainees, now generalized for any international student or worker.

**Content verified:** January 23, 2026 → see [CURRENT_AS_OF_JAN19_2026.md](./CURRENT_AS_OF_JAN19_2026.md) for source notes.

---

## Feature Snapshot
- 17 structured blog guides with stage styling and matched background photos
- Searchable resource library with source badges (official, NGO, tool, learning, referral)
- Interactive checklists with localStorage persistence
- Emergency quick-access (112/110/116117) always reachable in the header
- Mobile-friendly cards and detail pages; softened hero overlay keeps images visible
- GitHub Pages deployment (base `/survival-kit/`)

---

## Data-First Content Model

### Posts (`src/data/posts.jsx`)
- Fields: `slug`, `title`, `subtitle`, `stage`, `readTime`, `icon`, `color`, `shadow`, `accent`, `backgroundImage`, `verified`, `summary`, `vibeCheck`, `goldenRule`, `steps`, `readMore`, `downloads`, `videos`, `tags`.
- Content blocks: `{ type: "p" | "h2" | "ul", text?, items? }` (lists use `items`).
- Images: imported at top; every post maps to a specific background. Hero overlay in detail view: from-black/40 via-black/22 to-black/36.

### Resources (`src/data/resources.js`)
- Fields: `id`, `title`, `url`, `category`, `source`.
- Categories must match `RESOURCE_CATEGORIES` in `src/constants/config.js`.

### Styling & Constants
- Stage style tokens live in `src/constants/ui.js` (pill, icon, progress bar colors).
- Global styles/animations injected from `src/styles/globalStyles.js`.

### Safety
- External links are validated via `isSafeUrl()` and opened with `safeOpen()` (noopener, noreferrer).

---

## Project Structure (data-first)
```
survival-kit/
├── src/
│   ├── data/           # posts.jsx, resources.js
│   ├── components/     # cards, detail view, filters, navigation
│   ├── constants/      # stage styles, config, asset refs
│   ├── utils/          # text renderer, helpers, security
│   ├── styles/         # globalStyles injection
│   ├── App.jsx         # view state (posts vs library), filters, state wiring
│   └── main.jsx        # entry
├── public/             # static assets
├── vite.config.js      # base: /survival-kit/
└── package.json
```

---

## Getting Started
```bash
git clone https://github.com/MarkDanielsMCraft/survival-kit.git
cd survival-kit
npm install

# Dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build

# Preview built app
npm run preview
```
Visit http://localhost:5173.

---

## Deployment (GitHub Pages)
- Base path set to `/survival-kit/` in `vite.config.js`.
- Build locally: `npm run build` (outputs to `dist/`).
- Deploy: push to `main`; GitHub Actions builds and publishes to Pages automatically.

---

## Authoring Guidelines
- Keep posts beginner-friendly; explain German terms inline (e.g., Anmeldung = address registration).
- Add `verified: "YYYY-MM-DD"` to each post when updating data.
- Use official/NGO sources where possible; ensure URLs are http/https.
- Maintain content block schema (`type`, `text`, `items`).
- Background images: import at top of `posts.jsx` and assign per post; hero overlay already tuned for readability.

---

## Tests and Checks
- `npm run lint` before pushing.
- Visual spot-check at 320–375px width for cards, hero text contrast, and checklist tap targets.

---

## Credits
Built with React, Vite, Tailwind CSS, and Lucide icons. Verified content curated for international newcomers to Germany.
  content: [
    { type: "p", text: "Your content" },
    { type: "h2", text: "Section heading" },
    { type: "ul", items: ["Item 1", "Item 2"] }
  ],
  // ... more fields
}
```

### Customize Styling

Modify `tailwind.config.js` for theme changes or update `src/App.css` for global styles.

---

## 📄 License

This project is open source and available under the MIT License - see [LICENSE](LICENSE) file for details.

---

## ❤️ Support & Contribute

If this guide has genuinely helped you navigate life in Germany, consider supporting the author's work. Your support helps keep resources like this free and accessible for other international students and scholars.

### ☕ Support on Buy Me a Coffee

<div align="center">
  
**[👉Buy Me a Coffee](https://www.buymeacoffee.com/MarkDanielsMCraft)**

*Your coffee helps fund more guides, updates, and resources for the international community in Germany*

</div>

### 🤝 Contributing

We welcome contributions in many forms:

- **Content Updates** - Help keep information current and accurate
- **Translations** - Help reach more international communities
- **Bug Reports** - Found something broken? Let us know
- **Feature Suggestions** - Have ideas for improvements?
- **Sharing** - Spread the word to friends who might benefit

**How to contribute:**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-improvement`
3. Make your changes and commit: `git commit -m "Add your improvement"`
4. Push to your fork: `git push origin feature/your-improvement`
5. Open a Pull Request with a clear description

### 📧 Connect

- **Have questions?** [Open an issue on GitHub](https://github.com/MarkDanielsMCraft/survival-kit/issues)
- **Want to suggest changes?** [Submit a Pull Request](https://github.com/MarkDanielsMCraft/survival-kit/pulls)
- **Found a bug?** [Report it here](https://github.com/MarkDanielsMCraft/survival-kit/issues/new)

---

## ⚠️ Disclaimer

**This is an unofficial guide.** Rules, prices, and processes can change frequently in Germany. If something in this guide conflicts with:
- An official letter from authorities
- Instructions from your employer
- Guidance from your city office

**Always follow the official instructions.** This guide is meant to help, not replace official information.

*Last verified: January 18, 2026*

---

## 🎓 Who is This For?

This guide is designed for:

- 🏥 **Nursing scholars & healthcare professionals** (Auszubildende, Pflegefachpersonen)
- 🎓 **International students** in Germany (all fields of study)
- 💼 **Working professionals** relocating to Germany
- 🌍 **Anyone** seeking practical advice for navigating German bureaucracy and culture
- 🤝 **Expats** wanting to understand German workplace culture and society

---

## 📚 Additional Resources

- [Official Handbook Germany](https://handbookgermany.de)
- [Integreat App](https://integreat.app) - Local information in your language
- [BAMF (Federal Office for Migration and Refugees)](https://www.bamf.bund.de)
- [DB Navigator](https://www.bahn.de/service/mobile/db-navigator) - Train tickets

---

## 🙏 Acknowledgments

Made with ❤️ for future colleagues navigating life in Germany.

Thank you to the nursing community, international students, and mentors who shaped this guide through their experiences and feedback.

---

**Ready to start your German adventure?** [Visit the live guide →](https://markdanielsmcraft.github.io/survival-kit/)

