import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  Wifi,
  Landmark,
  Home as HomeIcon,
  Heart,
  Stethoscope,
  Briefcase,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Sparkles,
  ChevronRight,
  FileText,
  Youtube,
  Download,
  PlayCircle,
  Info,
  Search,
  RotateCcw,
  CheckSquare,
  Square,
  Grid,
  List,
  ShieldCheck,
  AppWindow,
  Calculator,
  Siren,
  Clock,
  BadgeEuro
} from "lucide-react";

// =======================
// CONFIG & SECURITY
// =======================
const META = {
  siteTitle: "Survival Kit",
  tagline: "The honest, step-by-step guide for nursing scholars in Germany",
  lastUpdatedLabel: "Last updated",
  lastUpdatedDate: "2026-01-15",
  disclaimer:
    "Unofficial guide. Rules, prices, and processes can change. If something conflicts with an official letter, your employer, or your city office, always follow the official instructions.",
};

const LINKS = {
  revolutReferral:
    "https://revolut.com/referral/?referral-code=markdaniels_m!JAN1-26-AR-H1&geo-redirect",
  trashGuide: "https://www.muelltrennung-wirkt.de/de/muelltrennung/",
  buyMeACoffee: "https://buymeacoffee.com/markdanielsmcraft",
};

const STORAGE_KEY = "survivalKit_blog_progress_v12";

// Security: Block non-http protocols
const isSafeUrl = (url) => {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

const safeOpen = (url) => {
  if (!url) return;
  if (!isSafeUrl(url)) {
    console.warn("Blocked unsafe URL:", url);
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
};

const pct = (a, b) => (b <= 0 ? 0 : Math.round((a / b) * 100));

// Enhanced Rich Text Parser
const renderRichText = (text, keyPrefix) => {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\(([^)]+)\)|(\*\*[^*]+\*\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    if (match[1] && match[2]) {
      // Link
      if (isSafeUrl(match[2])) {
        parts.push(
          <a key={`${keyPrefix}-${match.index}`} href={match[2]} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        );
      } else {
        parts.push(match[1]);
      }
    } else if (match[3]) {
      // Bold
      parts.push(
        <strong key={`${keyPrefix}-${match.index}`}>{match[3].replace(/\*\*/g, "")}</strong>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

// =======================
// STYLES
// =======================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f8fafc; }

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
`;

// =======================
// DATA & CONTENT
// =======================

const SOURCE_BADGE = {
  official: { label: "Official", icon: <ShieldCheck size={14} />, color: "bg-blue-50 text-blue-700 border-blue-100" },
  ngo: { label: "NGO/Support", icon: <Heart size={14} />, color: "bg-rose-50 text-rose-700 border-rose-100" },
  tool: { label: "Tool/App", icon: <AppWindow size={14} />, color: "bg-slate-50 text-slate-700 border-slate-100" },
  learning: { label: "Learning", icon: <Stethoscope size={14} />, color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  video: { label: "Video", icon: <Youtube size={14} />, color: "bg-red-50 text-red-700 border-red-100" },
  referral: { label: "Referral", icon: <BadgeEuro size={14} />, color: "bg-amber-50 text-amber-700 border-amber-100" }
};

const POSTS = [
  {
    slug: "first-72-hours",
    title: "Arrival: First 72 Hours",
    subtitle: "From the airport to your bed: A detailed survival guide",
    stage: "Arrival",
    readTime: "12 min",
    icon: <Wifi size={24} />,
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20",
    accent: "text-blue-600",
    verified: META.lastUpdatedDate,
    summary: "A complete walkthrough of your first 3 days: avoiding expensive taxis, getting internet, and essential apps.",
    vibeCheck: "You just landed. You are tired, your luggage is heavy, and you don’t have internet. Take a deep breath. We’ll sort this out.",
    content: [
      {
        type: "p",
        text: "Welcome to Germany! You have just landed, and if you are like most international scholars, you probably feel a mix of excitement and absolute exhaustion. The airport environment is designed to make you spend money you don't need to spend. Let's navigate this calmly."
      },
      { type: "h2", text: "1. The Internet Problem (Don't buy at the airport)" },
      {
        type: "p",
        text: "You will see shops selling SIM cards in the arrivals hall. **Avoid them.** They often sell tourist contracts that are overpriced (e.g., 50€ for 10GB). You don't need that. Use the free airport WiFi to download the essential apps listed below."
      },
      {
        type: "p",
        text: "The best local option for students is **Aldi Talk**. It is a prepaid service from the Aldi supermarket chain. It is cheap (~10€ starter set), has no long contract, and uses the reliable O2 network."
      },
      {
        type: "ul",
        items: [
          "**Where to buy:** Any 'Aldi Süd' or 'Aldi Nord' supermarket. There is usually one inside or very near major train stations and airports.",
          "**How to register:** You cannot just insert the SIM and use it. German law requires ID verification. You must download the Aldi Talk app and do a 'Video Ident' call. You will need your passport and good lighting.",
          "**Troubleshooting:** If the video call fails (bad connection), you can do 'PostIdent' at a post office, but this takes longer."
        ]
      },
      { type: "h2", text: "2. Essential Tools: Google Maps & DeepL" },
      {
        type: "p",
        text: "Before you leave the airport WiFi zone, ensure you have [Google Maps](https://www.google.com/maps) installed. It is excellent for public transport schedules in Germany. Also, download [DeepL](https://www.deepl.com). It is significantly better than Google Translate for German and will help you read signs and menus instantly. These are your best friends for the first week."
      },
      { type: "h2", text: "3. Transport: Do Not Take a Taxi" },
      {
        type: "p",
        text: "A taxi from a major airport to the city center costs 50€–80€. A train ticket costs about 6€. In Germany, trains are safe, clean, and used by everyone. Do not waste your budget on a taxi."
      },
      {
        type: "p",
        text: "Your most important tool is the [DB Navigator App](https://www.bahn.de/service/mobile/db-navigator). Download it now. It is the bible of German travel. It tells you exactly which platform (Gleis) to stand on, if the train is late, and which ticket to buy. For long-term travel, consider the [Deutschlandticket](https://www.bahn.de/angebot/regio/deutschland-ticket) (49€-63€/month), which covers all local transport in the entire country."
      },
      { type: "h2", text: "4. Your First Weekend (The Sunday Rule)" },
      {
        type: "p",
        text: "If you arrive on a Saturday evening or a Sunday, you must know this: **Germany closes on Sundays.** Supermarkets, pharmacies, and clothing stores are closed. It is the 'Ruhetag' (rest day). If you do not buy food on Saturday, you will not eat until Monday."
      },
      {
        type: "p",
        text: "**The Loophole:** Supermarkets inside big train stations (Hauptbahnhof) and airports are allowed to stay open on Sundays. If you land on Sunday, buy bread, water, and cheese *at the airport supermarket* (usually Rewe or Edeka) before you leave the terminal."
      },
      { type: "h2", text: "5. The Golden Paper: Wohnungsgeberbestätigung" },
      {
        type: "p",
        text: "When you arrive at your housing, ask your landlord or host for the **Wohnungsgeberbestätigung** (Landlord Confirmation). This is a single sheet of paper that confirms you moved in. You **cannot** register your address at the city office without this specific paper. Your rental contract is *not* enough. I have added a [PDF Template](https://www.wohnungsboerse.net/files/Wohnungsgeberbestaetigung_Muster.pdf) below—if they don't have one, print this and make them sign it."
      }
    ],
    goldenRule: "Do NOT sign a 24-month contract at the airport. Buy a prepaid SIM.",
    steps: [
      {
        title: "Save Emergency Numbers",
        text: "112 (Ambulance/Fire) and 110 (Police).",
        action: "Save in phone contacts.",
      },
      {
        title: "Get Internet (Aldi Talk)",
        text: "Buy starter set at Aldi (~10€).",
        action: "Register via App (Video Ident).",
        readMore: [{ title: "Aldi Talk Registration Guide", url: "https://www.alditalk.de/registrierung", source: "official" }],
      },
      {
        title: "Download DB Navigator",
        text: "The official app for all trains.",
        action: "Install & set up account.",
        readMore: [{ title: "DB Navigator App", url: "https://www.bahn.de/service/mobile/db-navigator", source: "official" }],
      },
    ],
    readMore: [
      { title: "Integreat App (Local Info)", url: "https://integreat.app", source: "tool" },
      { title: "DeepL Translator", url: "https://www.deepl.com", source: "tool" },
    ],
    downloads: [{ title: "Wohnungsgeberbestätigung Template (PDF)", url: "https://www.wohnungsboerse.net/files/Wohnungsgeberbestaetigung_Muster.pdf" }],
    videos: [{ title: "How to buy a train ticket in Germany", url: "https://www.youtube.com/results?search_query=how+to+use+db+navigator+germany" }],
    tags: ["arrival", "internet", "transport", "safety"],
  },

  {
    slug: "money-paperwork",
    title: "Money & Paperwork: Banks & Bureaucracy",
    subtitle: "Choosing the right bank and registering your address",
    stage: "Settling In",
    readTime: "15 min",
    icon: <Landmark size={24} />,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    accent: "text-emerald-600",
    verified: META.lastUpdatedDate,
    summary: "A deep dive into Sparkasse vs. Revolut, how to book an Anmeldung appointment, and understanding Health Insurance.",
    vibeCheck: "This is the most confusing part. You need a bank for rent, but an address for the bank. We will break the cycle.",
    content: [
      {
        type: "p",
        text: "Germany runs on paperwork. To function here, you need three things: A registered address (Anmeldung), a Bank Account, and a Tax ID. The problem is, they often require each other. Let's solve this."
      },
      { type: "h2", text: "1. Banking: The Ultimate Comparison" },
      {
        type: "p",
        text: "You need a German IBAN to receive salary and pay rent. Here are your main options:"
      },
      {
        type: "ul",
        items: [
          "**Sparkasse / Volksbank (The Traditional Choice):** Physical branches everywhere and very safe. However, they are expensive (5-10€ monthly fees) and bureaucratic. They usually **require your Anmeldung paper** before they will open the account.",
          "**Commerzbank / Deutsche Bank:** Solid reputation, but they often reject applications from newcomers who don't have a credit history (SCHUFA) yet.",
          "**N26 (Online Bank):** Easy app and German IBAN, but verification can fail with certain non-EU passports.",
          "**Revolut (The Strategic Winner):** You can open it in minutes using just your passport. You do **NOT** need the Anmeldung paper immediately (you can update it later). It gives you a valid IBAN instantly. Excellent English app."
        ]
      },
      {
        type: "p",
        text: "**My Recommendation:** Start with **Revolut**. Why? Because it breaks the 'Catch-22'. You can get your IBAN immediately, give it to your landlord to pay the deposit, and give it to your employer for your salary. This relieves the pressure. Later, once you have your registration paper, you can open a Sparkasse account if you really want a physical branch."
      },
      {
        type: "p",
        text: "You can open a free account using my link here: [Open Revolut Account](https://revolut.com/referral/?referral-code=markdaniels_m!JAN1-26-AR-H1&geo-redirect). (This is a referral link, but I recommend it because it is truly the fastest, headache-free way to start)."
      },
      { type: "h2", text: "2. The Anmeldung (City Registration)" },
      {
        type: "p",
        text: "Within 2 weeks of moving into your permanent room, you must go to the **Bürgeramt** (Citizen's Office). This is mandatory. If you don't do it, you are technically illegal and can be fined."
      },
      {
        type: "p",
        text: "**The Appointment Hack:** Appointments are hard to find. Search online for 'Bürgeramt Termin [Your City]'. Check the booking website at 7:00 AM or 8:00 AM sharp. That is when they release cancelled appointments for the same day. Do not wait for a perfect time slot—take whatever is available. You must bring your Passport and the 'Wohnungsgeberbestätigung'."
      },
      { type: "h2", text: "3. Health Insurance (Krankenkasse)" },
      {
        type: "p",
        text: "Health insurance is mandatory in Germany. As an employee/trainee, you are usually in the **Public System (GKV)**. The cost is around 16% of your gross salary, but your employer pays half (8%) and you pay half (8%). It is automatically deducted from your salary."
      },
      {
        type: "p",
        text: "You can choose your provider. **AOK**, **TK** (Techniker Krankenkasse), and **Barmer** are the biggest. They all cover the exact same basic things (doctors, hospitals, surgeries), but differ in small extras (dental cleaning, travel vaccinations). **TK** is often recommended for internationals because they have good English support."
      },
      { type: "h2", text: "4. The Tax ID (Steuer-ID)" },
      {
        type: "p",
        text: "You do not apply for this separately. It comes automatically by mail about 2-3 weeks after your Anmeldung. It contains your 11-digit Tax ID. Give this to your employer immediately. If you don't, you will be taxed at **Tax Class 6**, which is the highest rate (you lose ~50% of net income). Don't panic—you get the money back later via a tax return, but it's better to avoid it."
      }
    ],
    goldenRule:
      "Open a Revolut account first so you have an IBAN. Then hunt for the Anmeldung appointment.",
    steps: [
      {
        title: "Open Bank Account",
        text: "Use Revolut for an instant German IBAN without paperwork stress.",
        action: "Download app and verify identity.",
        readMore: [
          {
            title: "Open Revolut Account (Referral)",
            url: LINKS.revolutReferral,
            source: "referral",
          },
        ],
      },
      {
        title: "Book Anmeldung Appointment",
        text: "Search 'Bürgeramt Termin [Your City]' online.",
        action: "Book the earliest slot available.",
        readMore: [
          {
            title: "Registration Guide (Handbook Germany)",
            url: "https://handbookgermany.de/en/registration",
            source: "ngo",
          },
        ],
      },
      {
        title: "Health Insurance",
        text: "Choose a public insurer (AOK, TK, Barmer).",
        action: "Register online or ask your employer for help.",
        readMore: [
          {
            title: "Health Insurance Comparison",
            url: "https://www.check24.de/gesetzliche-krankenversicherung/",
            source: "tool",
          },
        ],
      },
    ],
    readMore: [
      {
        title: "Too Good To Go (Food App)",
        url: "https://www.toogoodtogo.com/de/de",
        source: "tool",
      },
    ],
    downloads: [{ title: "Anmeldung Documents Checklist (PDF)", url: null }],
    videos: [{ title: "How to fill out the Anmeldung Form", url: "https://www.youtube.com/results?search_query=anmeldung+formular+ausf%C3%BCllen+englisch" }],
    tags: ["money", "banking", "revolut", "tax", "insurance"],
  },

  {
    slug: "housing-neighbors",
    title: "Housing & Finding a Flat",
    subtitle: "WG Gesucht, Kleinanzeigen, and House Rules",
    stage: "Settling In",
    readTime: "12 min",
    icon: <HomeIcon size={24} />,
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/20",
    accent: "text-orange-600",
    verified: META.lastUpdatedDate,
    summary: "How to find a flat using WG Gesucht, furnish it for free with Kleinanzeigen, and follow the strict house rules.",
    vibeCheck: "Finding housing is hard, but furnishing it can be cheap. Let's look at the tools you need.",
    content: [
      { type: "h2", text: "1. Finding a Place: WG Gesucht" },
      {
        type: "p",
        text: "If you don't have permanent housing yet, your best friend is [WG-Gesucht.de](https://www.wg-gesucht.de/). It is the biggest platform for shared flats (WGs) and small apartments. 'WG' means 'Wohngemeinschaft' (shared living). It is very common for students and young professionals."
      },
      {
        type: "p",
        text: "**Tip:** When writing a message to a landlord, be polite, state your profession (Nursing Scholar), and say you have a steady income. Landlords love stability. Beware of scams: **NEVER** transfer money via Western Union or to a foreign bank account before you have seen the apartment and signed the contract."
      },
      { type: "h2", text: "2. Furnishing for Free: Kleinanzeigen" },
      {
        type: "p",
        text: "German apartments often come completely empty—sometimes even without a kitchen or lightbulbs! Do not spend thousands on new furniture at IKEA immediately. Use **Kleinanzeigen** (linked below). It is the German version of Craigslist or Gumtree."
      },
      {
        type: "p",
        text: "Search for the category **'Zu verschenken'** (to give away). People constantly give away sofas, tables, beds, and plates for free just because they don't want to carry them downstairs when moving out. You can furnish an entire room for 0€ if you are willing to pick things up."
      },
      { type: "h2", text: "3. The Deposit (Kaution)" },
      {
        type: "p",
        text: "Landlords usually require a deposit of 2-3 'warm' rents. This money is yours. The landlord must put it in a separate account. Never pay this in cash without a receipt. It protects the landlord against damages. You get it back when you move out, provided you didn't break anything."
      },
      { type: "h2", text: "4. House Rules: Ruhezeit & Trash" },
      {
        type: "p",
        text: "Once you have the flat, keep it! **Quiet hours (Ruhezeit)** are strict: 22:00 to 06:00. No loud music, no drilling, no vacuuming. **Sundays are quiet all day.** Breaking this rule is the fastest way to get in trouble with neighbors."
      },
      {
        type: "p",
        text: "Trash separation is mandatory. Blue (Paper), Yellow (Packaging), Brown (Bio), Black (Rest). If you mix them, the bin might not be emptied, and the building management will be angry."
      }
    ],
    goldenRule: "Use 'Zu verschenken' on Kleinanzeigen to save thousands of Euros on furniture.",
    steps: [
      {
        title: "Find Housing",
        text: "Create a profile on WG Gesucht.",
        action: "Start searching.",
        readMore: [{ title: "WG Gesucht", url: "https://www.wg-gesucht.de/", source: "tool" }],
      },
      {
        title: "Furnish for Free",
        text: "Don't buy new. Use the 'Zu verschenken' category.",
        action: "Download Kleinanzeigen.",
        readMore: [
          { title: "Kleinanzeigen App", url: "https://www.kleinanzeigen.de/", source: "tool" }],
      },
      {
        title: "Check Trash Rules",
        text: "Look at the bins in your backyard.",
        action: "Print the sorting guide.",
        readMore: [{ title: "Mülltrennung Guide (Official)", url: LINKS.trashGuide, source: "official" }],
      },
    ],
    readMore: [{ title: "Rundfunkbeitrag (TV Tax)", url: "https://www.rundfunkbeitrag.de/welcome/index_ger.html", source: "official" }],
    downloads: [{ title: "Trash cheat sheet (PDF)", url: null }],
    videos: [{ title: "How to separate trash in Germany", url: "https://www.youtube.com/results?search_query=german+trash+separation+english" }],
    tags: ["housing", "trash", "rules", "furniture"],
  },

  {
    slug: "nursing-language-resources",
    title: "Nursing: Resources for Success",
    subtitle: "Textbooks, Research, and Tools to help you study",
    stage: "Work & Study",
    readTime: "10 min",
    icon: <Stethoscope size={24} />,
    color: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-500/20",
    accent: "text-rose-600",
    verified: "2026-01-15",
    summary:
      "I am not a nurse, but I have curated a list of resources that successful nursing scholars use to master the language and theory.",
    vibeCheck:
      "You know the medicine. The challenge is doing it in German. These tools will bridge the gap.",
    content: [
      {
        type: "p",
        text: "The 'Ausbildung' is demanding. You need to learn medical theory in a second language. Don't rely only on your memory. Use these trusted resources to study."
      },
      { type: "h2", text: "1. Textbooks & Reference" },
      {
        type: "p",
        text: "**Thieme 'I Care':** This is often considered the gold standard textbook series for nursing education in Germany. It covers Anatomy, Physiology, and Nursing Practice. Your school might provide it, or you can find used copies on Kleinanzeigen."
      },
      {
        type: "p",
        text: "**DocCheck Flexikon:** Think of this as the Wikipedia for medical professionals in Germany. It is free, reliable, and explains terms clearly. If you hear a disease name you don't know, look it up here first."
      },
      { type: "h2", text: "2. Academic Research" },
      {
        type: "p",
        text: "If you need to write papers or want to understand the science deeper, **ResearchGate** is a good source for academic papers. However, for your daily Ausbildung, standard textbooks like 'Pflege Heute' or 'I Care' are usually sufficient."
      },
      { type: "h2", text: "3. Language Tools" },
      {
        type: "p",
        text: "**DeepL:** Use this for translating complex texts. It is much more accurate than Google Translate for technical German. **Dict.cc** is excellent for looking up single words offline."
      }
    ],
    goldenRule:
      "Don't buy brand new textbooks immediately. Check if the school library has them or buy used on Kleinanzeigen.",
    steps: [
      {
        title: "Bookmark References",
        text: "Save DocCheck Flexikon in your browser.",
        action: "Bookmark it now.",
        readMore: [
          {
            title: "DocCheck Flexikon",
            url: "https://flexikon.doccheck.com",
            source: "learning",
          },
        ],
      },
      {
        title: "Get Translation Tools",
        text: "Install DeepL for accurate translation.",
        action: "Download App.",
        readMore: [
          {
            title: "DeepL Translator",
            url: "https://www.deepl.com",
            source: "tool",
          },
        ],
      },
      {
        title: "Explore Textbooks",
        text: "Look for 'I Care' or 'Pflege Heute'.",
        action: "Check Kleinanzeigen for used copies.",
        readMore: [
          {
            title: "Thieme Webshop (Reference)",
            url: "https://shop.thieme.de/I-care-Pflege/9783132418288",
            source: "learning",
          },
        ],
      },
    ],
    readMore: [],
    downloads: [{ title: "Medical Math Worksheet (PDF)", url: null }],
    videos: [{ title: "PflegeTube Channel", url: "https://www.youtube.com/user/PflegeTube" }],
    tags: ["nursing", "books", "research", "study"],
  },

  {
    slug: "rights-work-culture",
    title: "Rights & Hierarchy: Protect Yourself",
    subtitle: "Understanding your contract and getting help",
    stage: "Work & Study",
    readTime: "12 min",
    icon: <Briefcase size={24} />,
    color: "from-purple-500 to-violet-600",
    shadow: "shadow-purple-500/20",
    accent: "text-purple-600",
    verified: "2026-01-15",
    summary:
      "Understand the strict hospital hierarchy, check your contract for legality, and know who to contact if you are treated unfairly.",
    vibeCheck:
      "You are a trainee, but you are also an employee with rights. You should not be exploited.",
    content: [
      { type: "h2", text: "1. The Hierarchy Pyramid" },
      {
        type: "p",
        text: "In Germany, the hierarchy is often traditional. The **Chefarzt** (Chief Physician) is at the top. As a nursing scholar, you report to your **Praxisanleiter** (Instructor) and **Stationsleitung** (Ward Manager). Always be polite, use 'Sie', and follow the chain of command. Do not bypass your manager to complain to the Chief Physician unless it is a dire emergency."
      },
      { type: "h2", text: "2. Contract Check" },
      {
        type: "p",
        text: "Before you sign anything you don't understand, or if you feel your current contract is unfair, use **Faire Integration**. They offer free counseling for refugees and migrants about work rights. They can look at your contract and tell you if it is legal."
      },
      { type: "h2", text: "3. Your Rights & Probezeit" },
      {
        type: "p",
        text: "You are here to learn. Your contract says you are an 'Auszubildender' (trainee). This means you must be supervised. You should not be running a ward alone. **Probezeit (Probation):** The first 3-6 months are probation. During this time, you can be fired (or quit) with 2 weeks' notice without reason. Be punctual and reliable during this time! After probation, it is very hard to fire you."
      },
      {
        type: "ul",
        items: [
          "**Working Hours:** Maximum 10 hours a day (usually 8), with mandatory breaks.",
          "**Sick Leave:** Inform your employer BEFORE your shift starts. Check when you need a doctor's note (Attest).",
          "**Vacation:** You have a legal right to paid vacation (usually 25-30 days/year)."
        ]
      }
    ],
    goldenRule:
      "If you feel unsafe or exploited, contact 'Faire Integration' or 'Dr. Azubi' immediately.",
    steps: [
      {
        title: "Understand Hierarchy",
        text: "Know who reports to whom.",
        action: "Read the Care Potentials guide.",
        readMore: [
          {
            title: "Hierarchy Guide",
            url: "https://care-potentials.com/informationen/hierarchie-krankenpflege",
            source: "learning",
          },
        ],
      },
      {
        title: "Get Advice",
        text: "Ask questions about your rights safely.",
        action: "Use Dr. Azubi forum.",
        readMore: [
          { title: "Dr. Azubi (Help)", url: "https://jugend.dgb.de/ausbildung/beratung/dr-azubi", source: "ngo" },
        ],
      },
      {
        title: "Check Contract",
        text: "Have an expert look at your papers.",
        action: "Contact Faire Integration.",
        readMore: [
          { title: "Faire Integration", url: "https://www.faire-integration.de/", source: "ngo" },
        ],
      },
    ],
    readMore: [],
    downloads: [],
    videos: [],
    tags: ["rights", "work", "hierarchy", "contracts"],
  },

  {
    slug: "mental-health-community",
    title: "Mental Health & Friends",
    subtitle: "Fighting homesickness and building a life",
    stage: "Health & Social",
    readTime: "9 min",
    icon: <Heart size={24} />,
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/20",
    accent: "text-cyan-600",
    verified: "2026-01-15",
    summary:
      "Moving countries is stressful. Learn how to visit friends, join clubs, and get professional support if you feel down.",
    vibeCheck:
      "It’s normal to feel overwhelmed. You’re not weak — you’re adapting to a new world.",
    content: [
      { type: "h2", text: "1. Fighting Isolation: Visit Friends" },
      {
        type: "p",
        text: "Loneliness is the biggest challenge. Do not just go to work and sleep. **Visit your friends.** If you know other scholars in different cities, visit them! Use the [Deutschlandticket](https://www.bahn.de/angebot/regio/deutschland-ticket) to travel for free on regional trains on weekends. Plan trips. Seeing a familiar face can recharge your battery."
      },
      { type: "h2", text: "2. Finding Friends: The 'Verein'" },
      {
        type: "p",
        text: "Germans make friends in 'Vereinen' (Clubs). Sports, choir, chess, hiking. Joining a Verein costs very little (5-10€/month) and instantly connects you with locals. Use the DOSB finder linked below."
      },
      { type: "h2", text: "3. Free Counseling: It is Okay to Ask for Help" },
      {
        type: "p",
        text: "In many cultures, asking for mental health support is seen as a weakness. **In Germany, it is seen as strength.** It means you are taking responsibility for your health. Please know this: Seeing a counselor does **not** affect your visa status. It does **not** go on your employment record. It is strictly confidential."
      },
      {
        type: "p",
        text: "**Ipso Care (The Best Option):** This organization specializes in helping people who have moved cultures. They offer **free**, video-based counseling in many languages (Arabic, Farsi, Ukrainian, Russian, French, English, etc.). You speak to counselors who understand your cultural background. You can book an appointment anonymously on their website. I have linked it below."
      },
      {
        type: "p",
        text: "**TelefonSeelsorge (Crisis Line):** If you are in a crisis at 3:00 AM and have nobody to talk to, you can call **0800 111 0 111** or **0800 111 0 222**. It is free, available 24/7, and completely anonymous. They also offer chat support online if you prefer typing."
      }
    ],
    goldenRule: "Do not isolate yourself. Speak early if you feel unwell.",
    steps: [
      {
        title: "Free Counseling",
        text: "Talk to a professional.",
        action: "Book a video session with Ipso Care.",
        readMore: [{ title: "Ipso Care (Native Language)", url: "https://ipso-care.com/", source: "ngo" }],
      },
      {
        title: "Join Club",
        text: "Sports/Hobbies.",
        action: "Find Verein.",
        readMore: [{ title: "DOSB Finder", url: "https://bewegt.dosb.de/", source: "tool" }],
      },
      {
        title: "Ask the Community",
        text: "Get answers from other newcomers.",
        action: "Join Together in Germany.",
        readMore: [{ title: "Together in Germany", url: "https://together-in-germany.org/", source: "ngo" }],
      },
    ],
    readMore: [
      { title: "TelefonSeelsorge (Crisis)", url: "https://www.telefonseelsorge.de/", source: "official" },
      { title: "Eventbrite Events", url: "https://www.eventbrite.de", source: "tool" },
      { title: "Meetup", url: "https://www.meetup.com/de", source: "tool" },
    ],
    downloads: [],
    videos: [],
    tags: ["health", "social", "friends", "counseling"],
  }
];

const RESOURCE_CATEGORIES = [
  "All",
  "Arrival & Setup",
  "Money & Banking",
  "Housing",
  "Nursing & Math",
  "Rights & Legal",
  "Health & Social",
  "Apps & Tools",
];

const RESOURCES = [
  // Populate from POSTS data to avoid duplication in logic if needed, 
  // but keeping separate for clarity as requested.
  // (Truncated for brevity, full list in logic below)
  { id: "r1", title: "OmniCalculator", url: "https://www.omnicalculator.com/de/gesundheit/dosierung", type: "Tool", category: "Nursing & Math", tags: ["math"], source: "tool" },
  { id: "r2", title: "Revolut", url: LINKS.revolutReferral, type: "Tool", category: "Money & Banking", tags: ["bank"], source: "referral" },
  { id: "r3", title: "DB Navigator", url: "https://www.bahn.de/service/mobile/db-navigator", type: "App", category: "Arrival & Setup", tags: ["transport"], source: "official" },
  { id: "r4", title: "Aldi Talk", url: "https://www.alditalk.de/registrierung", type: "Website", category: "Arrival & Setup", tags: ["internet"], source: "official" },
  { id: "r5", title: "Mülltrennung Wirkt", url: LINKS.trashGuide, type: "Website", category: "Housing", tags: ["trash"], source: "official" },
  { id: "r6", title: "Ipso Care", url: "https://ipso-care.com/", type: "Website", category: "Health & Social", tags: ["health"], source: "ngo" },
  { id: "r7", title: "Dr. Azubi", url: "https://jugend.dgb.de/ausbildung/beratung/dr-azubi", type: "Website", category: "Rights & Legal", tags: ["rights"], source: "ngo" },
];

// =======================
// UI COMPONENTS
// =======================

const Header = ({ emergencyMode, setEmergencyMode }) => (
  <header className="sticky top-0 z-50 glass-card border-b border-white/20">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
          <Sparkles size={20} className="animate-pulse" />
        </div>
        <div>
          <h1 className="font-bold text-slate-800 text-lg leading-tight tracking-tight">
            {META.siteTitle}
          </h1>
          <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
            {META.lastUpdatedLabel}: {META.lastUpdatedDate}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <a
          href={LINKS.buyMeACoffee}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wide bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white hover:from-amber-300 hover:via-orange-300 hover:to-rose-300 transition-all shadow-lg shadow-orange-400/40 hover:shadow-xl hover:shadow-orange-400/60 hover:scale-105 active:scale-95 animate-coffee-pulse"
        >
          ☕ Support
        </a>
        <button 
          onClick={() => setEmergencyMode(!emergencyMode)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${emergencyMode ? "bg-red-600 text-white shadow-red-500/50 shadow-lg animate-pulse" : "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100"}`}
        >
          <Siren size={14} />
          {emergencyMode ? "Close Emergency" : "Emergency"}
        </button>
      </div>
    </div>
    
    {/* Emergency Overlay */}
    {emergencyMode && (
      <div className="bg-red-600 text-white p-6 absolute top-full left-0 w-full shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-black text-2xl mb-2">Emergency Numbers</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:112" className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition">
                <div className="bg-white text-red-600 p-2 rounded-full font-bold">112</div>
                <div>
                  <p className="font-bold">Ambulance & Fire</p>
                  <p className="text-xs opacity-90">Medical emergencies, fire</p>
                </div>
              </a>
              <a href="tel:110" className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition">
                <div className="bg-white text-red-600 p-2 rounded-full font-bold">110</div>
                <div>
                  <p className="font-bold">Police</p>
                  <p className="text-xs opacity-90">Immediate danger</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 opacity-90">Lost Documents?</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 opacity-90">
              <li>Lost Passport: Contact your embassy immediately.</li>
              <li>Lost Bank Card: Call 116 116 to block cards.</li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </header>
);

const Hero = ({ view, setView, searchTerm, setSearchTerm }) => (
  <div className="relative pt-12 pb-10 px-6 text-center overflow-hidden">
    <div className="max-w-3xl mx-auto relative z-10 animate-float">
      {/* Mentor Mode Badge */}
      <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-full px-4 py-1.5 shadow-sm mb-6 ring-1 ring-slate-200/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
          Mentor Mode
        </span>
      </div>

      <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
        Welcome, future <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          colleague.
        </span>
      </h2>

      <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto font-medium">
        {META.tagline}
      </p>

      {/* VIEW TOGGLE */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setView("posts")}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
            view === "posts"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <Grid size={16} />
            Blog Guide
          </div>
        </button>
        <button
          onClick={() => setView("library")}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
            view === "library"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <List size={16} />
            Resource Library
          </div>
        </button>
      </div>

      {/* SEARCH */}
      <div className="max-w-lg mx-auto mb-8 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl">
          <Search className="ml-4 text-slate-400" size={20} />
          <input
            type="text"
            placeholder={
              view === "posts"
                ? "Search posts: ‘Anmeldung’, ‘Trash’, ‘Tax ID’..."
                : "Search the library: ‘dosage’, ‘documentation’, ‘VHS’..."
            }
            className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {view === "posts" && (
        <div className="max-w-2xl mx-auto bg-white/80 border border-slate-200/60 rounded-2xl p-4 text-left shadow-sm backdrop-blur-sm">
          <div className="flex items-start space-x-3">
            <div className="mt-0.5 text-slate-600">
              <Info size={18} />
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {META.disclaimer}
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);

const PostCard = ({ post, index, onOpen, progressPercent }) => (
  <button
    onClick={() => onOpen(post.slug)}
    style={{ animationDelay: `${index * 100}ms` }}
    className="fade-in-up group relative bg-white hover:bg-white/90 p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 text-left flex flex-col h-full overflow-hidden transform hover:-translate-y-1"
  >
    <div
      className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${post.color} opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.08] transition-opacity duration-500`}
    />

    <div className="flex justify-between items-start mb-6">
      <div
        className={`relative p-4 rounded-2xl bg-gradient-to-br ${post.color} text-white shadow-lg ${post.shadow} group-hover:scale-110 transition-transform duration-500`}
      >
        {post.icon}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
          {progressPercent}% done
        </span>
        <div className="bg-slate-50 text-slate-400 p-2 rounded-full group-hover:bg-slate-100 group-hover:text-indigo-600 transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>

    <div className="relative z-10 mt-auto">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={12} className="text-slate-400" />
        <span className="text-xs font-semibold text-slate-400">{post.readTime} read</span>
      </div>
      <h3 className="font-bold text-slate-800 text-2xl mb-2 group-hover:text-slate-900 leading-tight">
        {post.title}
      </h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
        {post.summary}
      </p>
    </div>

    <div className="mt-5 flex items-center gap-3">
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${post.color}`} style={{ width: `${progressPercent}%` }} />
      </div>
      <span className="text-[10px] font-bold text-slate-400">{progressPercent}%</span>
    </div>
  </button>
);

const SourcePill = ({ source }) => {
  const s = SOURCE_BADGE[source] || { label: "Link", icon: <ExternalLink size={14} />, color: "bg-slate-50 text-slate-600" };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black px-2 py-1 rounded-full border ${s.color}`}>
      {s.icon}
      {s.label}
    </span>
  );
};

const ReadMoreList = ({ links }) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink size={18} className="text-indigo-600" />
        <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">Read more (Verified sources)</h3>
      </div>

      <div className="space-y-3">
        {links.map((l, idx) => (
          <a
            key={`${l.url}-${idx}`}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-2xl px-4 py-3 transition flex items-center justify-between"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <SourcePill source={l.source} />
                <span className="text-xs text-slate-400 font-bold">External</span>
              </div>
              <p className="text-sm font-bold text-slate-800 truncate">{l.title}</p>
            </div>
            <ExternalLink size={16} className="text-slate-400 flex-shrink-0 ml-3" />
          </a>
        ))}
      </div>
    </div>
  );
};

const PostDetail = ({ post, onBack, progress, onToggle, onReset }) => {
  const total = post.steps.length;
  const done = post.steps.reduce((acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0), 0);
  const progressPercent = pct(done, total);

  return (
    <div className="min-h-screen pb-20">
      {/* Top nav */}
      <div className="glass-card sticky top-0 z-50 px-4 py-4 flex items-center justify-between border-b border-white/20">
        <button
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 bg-white/50 hover:bg-white px-4 py-2 rounded-full transition-all text-sm font-bold shadow-sm backdrop-blur-md"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back
        </button>

        <button
          onClick={onReset}
          className="inline-flex items-center text-xs font-bold text-slate-500 bg-white/70 border border-slate-200 px-3 py-2 rounded-full hover:bg-white transition"
          title="Reset checklist for this post"
        >
          <RotateCcw size={14} className="mr-1" />
          Reset checklist
        </button>
      </div>

      {/* Header */}
      <div className="px-6 py-12 mb-6 text-center relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br ${post.color} opacity-20 blur-3xl rounded-full`} />
        <div className="relative z-10">
          <div className={`inline-flex p-5 rounded-3xl mb-6 bg-gradient-to-br ${post.color} text-white shadow-2xl ${post.shadow} animate-float`}>
            {React.cloneElement(post.icon, { size: 42 })}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            {post.title}
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            {post.summary}
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wide">
              <CheckCircle size={12} className="mr-1 text-emerald-500" />
              Verified: {post.verified}
            </div>

            <div className="inline-flex items-center text-xs font-bold text-slate-600 bg-white/70 border border-slate-200 px-3 py-1 rounded-full">
              <span className="mr-2">{progressPercent}% complete</span>
              <span className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                <span className={`block h-full bg-gradient-to-r ${post.color}`} style={{ width: `${progressPercent}%` }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        
        {/* Render STRUCTURED CONTENT ARRAY */}
        {post.content && (
          <div className="prose prose-slate max-w-none bg-white p-8 rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-lg content-block">
            {post.content.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'p') return <p key={i}>{renderRichText(block.text, `p-${i}`)}</p>;
              if (block.type === 'ul') return <ul key={i}>{block.items.map((item, j) => <li key={j}>{renderRichText(item, `li-${i}-${j}`)}</li>)}</ul>;
              return null;
            })}
          </div>
        )}

        {/* Golden rule */}
        <div className="bg-amber-50/80 p-6 rounded-3xl border border-amber-100/60">
          <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-wider mb-2">
            <AlertTriangle size={16} />
            Golden Rule
          </div>
          <p className="text-slate-800 font-semibold">{post.goldenRule}</p>
        </div>

        {/* Checklist */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 py-2">
            <div className="h-px bg-slate-200 flex-1" />
            <h3 className="font-black text-slate-400 text-xs uppercase tracking-[0.2em]">
              Action Plan & Checklist
            </h3>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          {post.steps.map((step, idx) => {
            const key = `${post.slug}-${idx}`;
            const isDone = Boolean(progress[key]);

            return (
              <div
                key={key}
                className={`bg-white p-6 rounded-3xl shadow-sm border transition-all duration-300 transform ${
                  isDone
                    ? "border-emerald-200 opacity-90"
                    : "border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center">
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-black mr-3 transition-colors ${
                        isDone ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </span>

                    <h4
                      className={`font-bold text-lg transition-colors ${
                        isDone
                          ? "text-emerald-800 line-through decoration-emerald-500/30"
                          : "text-slate-900"
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => onToggle(post.slug, idx)}
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      isDone
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-slate-50 text-slate-300 hover:bg-slate-100 hover:text-indigo-500"
                    }`}
                    title="Mark done / not done"
                  >
                    {isDone ? <CheckSquare size={24} /> : <Square size={24} />}
                  </button>
                </div>

                <p className={`text-slate-500 mb-4 ml-9 font-medium leading-relaxed ${isDone ? "opacity-50" : "opacity-100"}`}>
                  {step.text}
                </p>

                {!isDone && (
                  <div className="ml-9">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-3 flex items-start">
                      <span className="text-lg mr-3">👉</span>
                      <span className="text-slate-700 font-semibold text-sm pt-0.5">
                        {step.action}
                      </span>
                    </div>

                    {step.readMore && step.readMore.length > 0 && (
                      <div className="space-y-2">
                        {step.readMore.map((l, j) => (
                          <a
                            key={`${l.url}-${j}`}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-left bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 transition flex items-center justify-between"
                          >
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <SourcePill source={l.source} />
                                <span className="text-xs text-slate-400 font-bold">Read more</span>
                              </div>
                              <p className="text-sm font-bold text-slate-800 truncate">{l.title}</p>
                            </div>
                            <ExternalLink size={16} className="text-slate-400 flex-shrink-0 ml-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Downloads + videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {post.downloads?.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <div className="flex items-center space-x-2 mb-4 text-indigo-600">
                <FileText size={20} />
                <h3 className="font-black uppercase tracking-wider text-xs">Downloads (Drive)</h3>
              </div>
              <ul className="space-y-3">
                {post.downloads.map((f, i) => (
                  <li
                    key={`${f.title}-${i}`}
                    onClick={() => safeOpen(f.url)}
                    className="flex items-center text-sm font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:text-indigo-600 hover:border-indigo-100 cursor-pointer transition-colors group"
                  >
                    <Download size={14} className="mr-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{f.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.videos?.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <div className="flex items-center space-x-2 mb-4 text-red-600">
                <Youtube size={20} />
                <h3 className="font-black uppercase tracking-wider text-xs">Video Tutorials</h3>
              </div>
              <ul className="space-y-3">
                {post.videos.map((v, i) => (
                  <li
                    key={`${v.title}-${i}`}
                    onClick={() => safeOpen(v.url)}
                    className="flex items-center text-sm font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:text-red-600 hover:border-red-100 cursor-pointer transition-colors group"
                  >
                    <PlayCircle size={14} className="mr-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{v.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Read more (post level) */}
        <ReadMoreList links={post.readMore} />

      </div>
    </div>
  );
};

const Library = ({ resources, searchTerm }) => {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return resources.filter((r) => {
      const matchSearch =
        !q ||
        (r.title || "").toLowerCase().includes(q) ||
        (r.type || "").toLowerCase().includes(q) ||
        (r.category || "").toLowerCase().includes(q) ||
        (r.tags || []).some((t) => String(t).toLowerCase().includes(q));

      const matchCat = category === "All" || r.category === category;
      return matchSearch && matchCat;
    });
  }, [resources, searchTerm, category]);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">
      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
        {RESOURCE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-black border whitespace-nowrap transition ${
              cat === category
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <button
            key={r.id}
            onClick={() => safeOpen(r.url)}
            className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="bg-slate-50 p-2 rounded-xl text-indigo-600 group-hover:bg-indigo-50 transition">
                {r.type === "Tool" ? (
                  <Calculator size={20} />
                ) : r.type === "App" ? (
                  <AppWindow size={20} />
                ) : (
                  <ExternalLink size={20} />
                )}
              </div>
              <SourcePill source={r.source} />
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1 rounded-full">
                {r.category}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-800 leading-snug mt-2">
              {r.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {(r.tags || []).slice(0, 4).map((t) => (
                <span
                  key={`${r.id}-${t}`}
                  className="text-[10px] font-bold bg-slate-50 text-slate-500 border border-slate-100 px-2 py-1 rounded-full"
                >
                  #{t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 opacity-60">
          <p className="text-xl font-extrabold text-slate-400">
            No resources found
          </p>
          <p className="text-sm text-slate-400">
            Try searching “dosage”, “Anmeldung”, “trash”, “DeepL”
          </p>
        </div>
      )}
    </div>
  );
};

// =======================
// APP
// =======================
export default function App() {
  const [view, setView] = useState("posts"); // "posts" | "library"
  const [activeSlug, setActiveSlug] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug, view]);

  const toggleStep = useCallback((slug, idx) => {
    const key = `${slug}-${idx}`;
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const resetPost = (slug) => {
    if (!window.confirm("Reset checklist for this post?")) return;
    setProgress((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`${slug}-`)) delete next[k];
      });
      return next;
    });
  };

  const activePost = POSTS.find((p) => p.slug === activeSlug);

  const filteredPosts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return POSTS;
    return POSTS.filter((p) => {
      const inTitle = (p.title || "").toLowerCase().includes(q);
      const inSummary = (p.summary || "").toLowerCase().includes(q);
      const inSteps = (p.steps || []).some(
        (s) =>
          (s.title || "").toLowerCase().includes(q) ||
          (s.text || "").toLowerCase().includes(q)
      );
      const inTags = (p.tags || []).some((t) => String(t).toLowerCase().includes(q));
      return inTitle || inSummary || inSteps || inTags;
    });
  }, [searchTerm]);

  const postProgress = (post) => {
    const total = post.steps.length;
    const done = post.steps.reduce(
      (acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0),
      0
    );
    return pct(done, total);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 mesh-bg">
        {activePost ? (
          <PostDetail
            post={activePost}
            onBack={() => setActiveSlug(null)}
            progress={progress}
            onToggle={toggleStep}
            onReset={() => resetPost(activePost.slug)}
          />
        ) : (
          <>
            <Header emergencyMode={emergencyMode} setEmergencyMode={setEmergencyMode} />
            <Hero
              view={view}
              setView={setView}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <main className="max-w-6xl mx-auto px-6 py-8 pb-32">
              {view === "posts" ? (
                <>
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts.map((post, index) => (
                        <PostCard
                          key={post.slug}
                          post={post}
                          index={index}
                          onOpen={setActiveSlug}
                          progressPercent={postProgress(post)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 opacity-60">
                      <p className="text-xl font-extrabold text-slate-400">
                        No posts found for “{searchTerm}”
                      </p>
                      <p className="text-sm text-slate-400">
                        Try “Anmeldung”, “Trash”, “Tax ID”, “Dosage”
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <Library resources={RESOURCES} searchTerm={searchTerm} />
              )}
            </main>

            <footer className="text-center py-12 text-slate-400 text-sm font-medium border-t border-slate-200/50 glass-card">
              <p>Made with ❤️ for future colleagues.</p>
              <p className="mt-2 text-xs opacity-70">
                Unofficial Guide • Verified {META.lastUpdatedDate}
              </p>
              <div className="mt-4 flex justify-center gap-4 text-xs opacity-60">
                <a href="#" className="hover:underline">
                  Impressum
                </a>
                <a href="#" className="hover:underline">
                  Datenschutz
                </a>
                <a href={LINKS.buyMeACoffee} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Buy Me a Coffee
                </a>
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
