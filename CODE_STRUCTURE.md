# Survival Kit - Code Structure

## 📁 Project Organization

The project has been refactored for better maintainability and easier content updates.

### Directory Structure

```
src/
├── components/          # UI Components
│   ├── Header.jsx      # Site header with emergency mode
│   ├── Hero.jsx        # Hero section with search
│   ├── PostCard.jsx    # Individual blog post card
│   ├── PostDetail.jsx  # Full blog post view
│   ├── Library.jsx     # Resource library view
│   ├── ReadMoreList.jsx   # Links component
│   └── SourcePill.jsx     # Source badge component
├── data/               # Content Data
│   ├── posts.jsx       # Blog posts (EASY TO EDIT!)
│   └── resources.js    # Resource library items
├── constants/          # Configuration
│   └── config.js       # Site metadata, links, constants
├── utils/              # Utilities
│   ├── security.js     # URL validation & safe open
│   ├── textRenderer.jsx  # Rich text parser
│   └── helpers.js      # Helper functions
├── styles/             # Styling
│   └── globalStyles.js # Global CSS
└── App.jsx             # Main app logic
```

## ✏️ How to Add a New Blog Post

1. **Open** `src/data/posts.jsx`
2. **Copy** an existing post object
3. **Edit** the fields:
   - `slug`: URL-friendly identifier (e.g., "my-new-post")
   - `title`, `subtitle`, `summary`: Text content
   - `content`: Array of content blocks (paragraphs, headings, lists)
   - `steps`: Actionable checklist items
   - `readMore`, `downloads`, `videos`: External resources
   - `tags`: Search keywords

### Example:

```jsx
{
  slug: "opening-bank-account",
  title: "Opening Your First Bank Account",
  subtitle: "Step by step guide",
  stage: "Settling In",
  readTime: "10 min",
  icon: <Landmark size={24} />,
  color: "from-blue-500 to-indigo-600",
  summary: "Everything you need to know about German banks",
  content: [
    { type: "h2", text: "Why You Need a German Bank Account" },
    { type: "p", text: "Your employer needs..." },
    { 
      type: "ul", 
      items: [
        "**Reason 1:** Details here",
        "**Reason 2:** More details"
      ]
    }
  ],
  // ... rest of the post structure
}
```

## 🔗 How to Add a New Resource

1. **Open** `src/data/resources.js`
2. **Add** a new object to the `RESOURCES` array:

```javascript
{
  id: "r99",
  title: "My Awesome Resource",
  url: "https://example.com",
  type: "Website",  // or "App", "Tool", "Video"
  category: "Housing",  // Must match RESOURCE_CATEGORIES
  tags: ["housing", "apartments"],
  source: "official"  // official, ngo, tool, learning, video, referral
}
```

## 🎨 How to Update Styling

- **Global styles**: Edit `src/styles/globalStyles.js`
- **Component-specific**: Edit the respective component file in `src/components/`

## ⚙️ How to Update Site Configuration

Edit `src/constants/config.js`:
- Site title, tagline, last updated date
- External links (Revolut, Buy Me a Coffee, etc.)
- Source badge definitions
- Resource categories

## 🚀 Benefits of This Structure

✅ **Easy to add content** - Just edit data files, no need to touch components
✅ **Better organization** - Clear separation of concerns
✅ **Easier debugging** - Small, focused files
✅ **Maintainable** - Changes are isolated to specific files
✅ **Scalable** - Easy to add new features

## 📝 Quick Tips

- **Never** modify `src/components/` unless changing design
- **Always** edit `src/data/posts.jsx` to add/modify blog posts
- **Test locally** with `npm run dev` before deploying
- **Verify icons** - Make sure to import icons from `lucide-react` if adding new ones
