export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f8fafc; }

  .hero-photo {
    position: relative;
    overflow: hidden;
  }

  .hero-photo.mesh-bg {
    background-color: transparent;
    background-image: none;
  }

  .hero-photo::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1473889006385-9c10fc6c2c87?w=2000&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    opacity: 0.35;
    z-index: -2;
    pointer-events: none;
  }

  .hero-photo::after {
    content: "";
    position: fixed;
    inset: 0;
    background: linear-gradient(180deg, rgba(248,250,252,0.86), rgba(248,250,252,0.9));
    z-index: -1;
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

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
  
  .prose h2 { color: #0f172a; font-weight: 800; font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 1rem; line-height: 1.3; }
  .prose p { margin-bottom: 1.5rem; line-height: 1.8; color: #334155; font-size: 1.05rem; }
  .prose ul { margin-bottom: 1.5rem; padding-left: 1.25rem; list-style-type: disc; }
  .prose li { margin-bottom: 0.75rem; color: #334155; font-size: 1.05rem; line-height: 1.6; }
  .prose a { color: #4f46e5; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
  .prose a:hover { color: #4338ca; }
  .prose strong { color: #0f172a; font-weight: 700; }

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

  .content-block h2:not(:first-child) {
    margin-top: 2.25rem;
  }
`;
