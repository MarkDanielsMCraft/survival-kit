export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

  * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  body { font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f8fafc; font-weight: 400; letter-spacing: 0.05px; font-size: 15.8px; line-height: 1.65; color: #0f172a; }

  h1, h2, h3, .display-heading {
    font-family: 'Poppins', 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: -0.008em;
  }

  .hero-photo {
    position: relative;
    overflow: hidden;
  }

  .hero-photo > * {
    position: relative;
    z-index: 10;
  }

  .hero-photo.mesh-bg {
    background-color: transparent;
    background-image: none;
  }

  .hero-photo::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1560969184-10fe8719e047?w=2000&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: 1;
    pointer-events: none;
  }

  .hero-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(248,250,252,0.75), rgba(248,250,252,0.8));
    z-index: 2;
    pointer-events: none;
  }

  .mesh-bg {
    background-color: #f8fafc;
    background-image:
      radial-gradient(at 0% 0%, hsla(253,100%,96%,1) 0, transparent 50%),
      radial-gradient(at 50% 0%, hsla(225,100%,96%,1) 0, transparent 50%),
      radial-gradient(at 100% 0%, hsla(339,100%,96%,1) 0, transparent 50%);
    background-size: 150% 150%;
    animation: gradient-animation 20s ease infinite;
  }

  .glass-card {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.5);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  }

  .glass-card-transparent {
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: none;
    box-shadow: none;
  }

  @keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-float { animation: float 6s ease-in-out infinite; }
  @keyframes float { 
    0%, 100% { transform: translateY(0); } 
    50% { transform: translateY(-5px); } 
  }

  .animate-coffee-pulse {
    animation: coffeePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes coffeePulse {
    0%, 100% { 
      box-shadow: 0 10px 15px -3px rgba(249, 115, 22, 0.4);
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 20px 25px -5px rgba(249, 115, 22, 0.6);
      transform: scale(1.05);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 6px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  
  /* Modern prose styling with consistent spacing */
  .prose h2 { 
    color: #0f172a; 
    font-family: 'Poppins', 'Inter', sans-serif;
    font-weight: 600; 
    font-size: 1.75rem; 
    margin-top: 2.5rem; 
    margin-bottom: 1rem; 
    line-height: 1.32; 
    letter-spacing: -0.008em;
  }
  .prose h2:first-child { margin-top: 0; }
  
  .prose p { 
    margin-bottom: 1.25rem; 
    line-height: 1.75; 
    color: #475569; 
    font-size: 1rem; 
    font-family: 'Poppins', 'Inter', sans-serif;
  }
  
  .prose ul { 
    margin-bottom: 1.5rem; 
    margin-top: 0.75rem;
    padding-left: 1.75rem; 
    list-style-type: disc; 
  }
  
  .prose li { 
    margin-bottom: 0.75rem; 
    color: #475569; 
    font-size: 1rem; 
    line-height: 1.65;
  }
  
  .prose li:last-child {
    margin-bottom: 0;
  }
  
  .prose a { 
    color: #4f46e5; 
    text-decoration: none;
    font-weight: 600; 
    border-bottom: 2px solid rgba(79, 70, 229, 0.3);
    transition: all 0.2s ease;
  }
  
  .prose a:hover { 
    color: #4338ca; 
    border-bottom-color: #4338ca;
    background: rgba(79, 70, 229, 0.05);
    padding: 0 2px;
  }
  
  .prose strong { 
    color: #111928; 
    font-weight: 600; 
    font-family: 'Poppins', 'Inter', sans-serif;
  }

  .article-hero {
    background: radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 35%),
                radial-gradient(circle at 80% 0%, rgba(56,189,248,0.1), transparent 35%),
                #0f172a;
  }

  .meta-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,0.12);
    color: #e2e8f0;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .content-block {
    word-spacing: 0.02em;
  }

  .content-block h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
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
