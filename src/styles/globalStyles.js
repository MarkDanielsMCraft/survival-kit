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

  .hero-animated {
    position: relative;
    overflow: hidden;
  }

  .hero-animated::before {
    content: "";
    position: absolute;
    inset: -20% -15% 10% -15%;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blank_map_of_Germany.svg/1024px-Blank_map_of_Germany.svg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75%;
    opacity: 0.28;
    filter: drop-shadow(0 40px 80px rgba(15, 23, 42, 0.4));
    transform-origin: center;
    animation: heroMapDrift 36s ease-in-out infinite;
  }

  .hero-animated::after {
    content: "";
    position: absolute;
    inset: 10% 20% -30% 20%;
    background: radial-gradient(circle at center, rgba(129, 140, 248, 0.25), transparent 65%);
    filter: blur(80px);
    opacity: 0.5;
    animation: pulseGlow 28s ease-in-out infinite;
  }

  @keyframes heroMapDrift {
    0% { transform: rotate(0deg) scale(1); opacity: 0.12; }
    35% { transform: rotate(-2deg) scale(1.05); opacity: 0.18; }
    70% { transform: rotate(2deg) scale(1.03); opacity: 0.16; }
    100% { transform: rotate(0deg) scale(1); opacity: 0.12; }
  }

  @keyframes pulseGlow {
    0%, 100% { transform: scale(1); opacity: 0.45; }
    50% { transform: scale(1.1); opacity: 0.6; }
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

  .liquid-glass {
    background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(246,248,255,0.65));
    border-color: rgba(255,255,255,0.4);
    box-shadow: 0 16px 32px -24px rgba(15, 23, 42, 0.35);
  }

  .liquid-glass-emergency {
    position: relative;
    background: linear-gradient(120deg, rgba(220, 38, 38, 0.88), rgba(190, 18, 60, 0.78));
    padding: 1px;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-radius: 22px;
  }

  .liquid-glass-emergency::before {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(248, 113, 113, 0.15), rgba(244, 63, 94, 0.05));
    pointer-events: none;
  }

  .liquid-glass-emergency > * {
    position: relative;
    border-radius: 18px;
    background: rgba(248, 113, 113, 0.16);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .liquid-glass-tile {
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: linear-gradient(140deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
    padding: 16px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .liquid-glass-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 32px -20px rgba(15,23,42,0.4);
  }

  .liquid-glass-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.82), rgba(226,232,240,0.55));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .emergency-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 3rem;
    padding: 8px 14px;
    border-radius: 999px;
    font-weight: 800;
    color: #dc2626;
    background: rgba(255,255,255,0.9);
    box-shadow: 0 12px 24px -12px rgba(248,113,113,0.6);
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
    margin-bottom: 1.55rem; 
    line-height: 1.82; 
    color: #3b4a60; 
    font-size: 1.05rem; 
    font-family: 'Poppins', 'Inter', sans-serif;
  }
  
  .prose ul { 
    margin-bottom: 1.8rem; 
    margin-top: 1rem;
    padding-left: 1.75rem; 
    list-style-type: disc; 
  }
  
  .prose li { 
    margin-bottom: 0.9rem; 
    color: #3f4858; 
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

  .prose ul + p {
    margin-top: 1.2rem;
  }

  .article-hero {
    background: radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 35%),
                radial-gradient(circle at 80% 0%, rgba(56,189,248,0.1), transparent 35%),
                #0f172a;
    position: relative;
    overflow: hidden;
  }

  .article-hero::before {
    content: "";
    position: absolute;
    inset: -15% -5% 0 -5%;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blank_map_of_Germany.svg/1024px-Blank_map_of_Germany.svg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    opacity: 0.18;
    filter: drop-shadow(0 50px 90px rgba(15, 23, 42, 0.5));
    animation: heroMapDrift 40s ease-in-out infinite;
  }

  .article-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(200deg, rgba(15,23,42,0.45), rgba(15,23,42,0.7));
    pointer-events: none;
  }

  .article-hero > * {
    position: relative;
    z-index: 10;
  }

  .header-with-map {
    position: relative;
    overflow: hidden;
  }

  .header-with-map::before {
    content: "";
    position: absolute;
    inset: -160% 8% 10% auto;
    width: 420px;
    height: 420px;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blank_map_of_Germany.svg/1024px-Blank_map_of_Germany.svg.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    opacity: 0.2;
    filter: drop-shadow(0 24px 48px rgba(79,70,229,0.25));
    animation: heroMapDrift 38s ease-in-out infinite;
    pointer-events: none;
  }

  .header-with-map::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2));
    pointer-events: none;
  }

  .header-with-map > * {
    position: relative;
    z-index: 10;
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
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .content-block {
      max-width: 78ch;
    }
  }

  @media (min-width: 1280px) {
    .content-block {
      max-width: none;
      margin: 0;
    }
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
