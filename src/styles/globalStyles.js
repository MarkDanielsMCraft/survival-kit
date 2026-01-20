export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #f6f7f9;
    font-weight: 400;
    letter-spacing: 0;
    font-size: 17px;
    line-height: 1.7;
    color: #0b1220;
  }

  h1, h2, h3, .display-heading {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 6px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

  .hide-scrollbar {
    scrollbar-width: none;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .content-block {
    width: 100%;
    max-width: 72ch;
    margin: 0 auto;
    word-spacing: 0.02em;
  }

  .prose h2 {
    color: #0b1220;
    font-weight: 600;
    font-size: 1.875rem;
    margin-top: 2.25rem;
    margin-bottom: 1rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }
  .prose h2:first-child { margin-top: 0; }

  .prose p {
    margin-bottom: 1.4rem;
    line-height: 1.7;
    color: #23324a;
    font-size: 1.0625rem;
    letter-spacing: -0.002em;
  }

  .prose ul {
    margin-bottom: 1.7rem;
    margin-top: 1rem;
    padding-left: 1.6rem;
    list-style-type: disc;
  }

  .prose li {
    margin-bottom: 0.85rem;
    color: #26344a;
    font-size: 1.01rem;
    line-height: 1.7;
  }

  .prose li:last-child { margin-bottom: 0; }

  .prose a {
    color: #1f3a8a;
    text-decoration: underline;
    text-decoration-color: rgba(31, 58, 138, 0.35);
    text-underline-offset: 3px;
    font-weight: 600;
  }

  .prose a:hover {
    color: #1e40af;
    text-decoration-color: rgba(30, 64, 175, 0.5);
  }

  .prose strong {
    color: #111827;
    font-weight: 600;
  }

  .prose ul + p { margin-top: 1.1rem; }
  .prose h2 + p { margin-top: 1.2rem; }
  .prose p + p { margin-top: 0.7rem; }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .content-block h2:first-child {
    margin-top: 0;
  }

  .content-block p + h2 {
    margin-top: 2rem;
  }

  .content-block ul + h2,
  .content-block ul + p {
    margin-top: 1.5rem;
  }

  /* Enhanced button states */
  button {
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Better shadows */
  .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04); }
  .shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04); }
  .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04); }
  .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.04); }

  /* Selection styles */
  ::selection {
    background: rgba(79, 70, 229, 0.2);
    color: inherit;
  }
`;
