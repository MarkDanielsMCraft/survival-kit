# 🇩🇪 Survival Kit: Nursing Scholars' Guide in Germany

> **The honest, step-by-step guide for international nursing scholars navigating life and work in Germany**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-survival--kit-blue?style=flat-square)](https://markdanielsmcraft.github.io/survival-kit/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 About

Survival Kit is an interactive guide designed to help international nursing scholars (Auszubildende) thrive in Germany. It covers everything from the first 72 hours after arrival to understanding workplace rights, navigating bureaucracy, and building community.

**Why we built this:**
- Nursing scholar training in Germany is demanding and isolating
- Official information is scattered and often in German
- International newcomers face a steep learning curve
- We wanted to create a friendly, honest resource that actually helps

---

## ✨ Key Features

### 📚 **Comprehensive Blog Guides**
- **Arrival (First 72 Hours)** - From airport to bed: internet, transport, essentials
- **Money & Paperwork** - Banking, registration (Anmeldung), taxes, health insurance
- **Housing** - Finding flats, furnishing for free, house rules
- **Nursing Resources** - Textbooks, study tools, language support
- **Rights & Hierarchy** - Understanding your contract and workplace culture
- **Mental Health** - Fighting isolation, counseling resources, community

### 🔍 **Smart Resource Library**
- Curated links to tools, apps, and websites
- Categorized by topic (Arrival, Money, Housing, Nursing, Rights, Health)
- Source badges (Official, NGO, Tool, Learning, Referral)
- Search functionality

### ✅ **Interactive Checklist System**
- Track progress through guides
- Action items with step-by-step instructions
- Progress persistence via localStorage
- Reset functionality per guide

### 🚨 **Emergency Mode**
- Quick access to emergency numbers (112, 110)
- Lost document guidance
- Always visible in header

### 📱 **Mobile-First Design**
- Responsive on phones, tablets, and desktops
- Touch-friendly interface
- Optimized for accessibility

### 💬 **Support the Author**
- Buy Me a Coffee integration
- Direct links to support

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MarkDanielsMCraft/survival-kit.git
cd survival-kit

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/survival-kit/` in your browser.

---

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Project Structure

```
survival-kit/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── assets/              # Images and static files
├── public/                  # Static files
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
└── package.json             # Dependencies
```

---

## 📊 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Styling |
| **Lucide React** | Icon library |
| **JavaScript (ES6+)** | Core language |

---

## 🎯 Features Explained

### Content Management
All content is structured in the `App.jsx` file:
- `POSTS` array contains all blog guides with rich content
- `RESOURCES` array powers the resource library
- `SOURCE_BADGE` defines link categorization

### State Management
- **localStorage** for progress tracking
- React hooks for UI state
- Custom search and filter logic

### Styling
- **Tailwind CSS** for utility-first styling
- Responsive breakpoints: `sm`, `md`, `lg`
- Custom animations (`animate-float`, `animate-coffee-pulse`)
- Glass-morphism effects

---

## 📝 Content Structure

Each blog post includes:
- **Title & Summary** - Quick overview
- **Rich Content** - Paragraphs, headings, lists
- **Golden Rule** - Key takeaway
- **Action Plan** - Checklist of steps
- **Read More** - Curated links with source verification
- **Downloads** - PDF templates
- **Videos** - YouTube tutorials

---

## 🌐 Deployment

### GitHub Pages

The app is configured for GitHub Pages with base path `/survival-kit/`:

```bash
# Build production version
npm run build

# The dist/ folder is ready for deployment
```

**GitHub Actions** handles automatic deployment:
1. Push to `main` branch
2. GitHub Actions builds the app
3. Deploys to GitHub Pages automatically

---

## 🤝 Contributing

We welcome contributions! Areas where help is needed:

- **Content Updates** - Keep information current
- **Translations** - Add more languages
- **Bug Fixes** - Report and fix issues
- **Features** - Suggest improvements

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 💡 Customization

### Add New Content

Edit the `POSTS` array in `App.jsx`:

```javascript
{
  slug: "your-guide",
  title: "Your Guide Title",
  subtitle: "Brief description",
  stage: "Category",
  readTime: "10 min",
  icon: <YourIcon size={24} />,
  color: "from-blue-600 to-indigo-600",
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

## ❤️ Support

### Buy Me a Coffee

If this guide has helped you on your journey, consider supporting the author:

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/MarkDanielsMCraft)

### Contact & Community

- 📧 Have questions? Open an issue on GitHub
- 💬 Share feedback via Pull Requests
- 📱 Follow for updates

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

- International nursing scholars (Auszubildende) in Germany
- Healthcare workers relocating to Germany
- Anyone seeking practical advice for navigating German bureaucracy
- People interested in healthcare professions in Germany

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

