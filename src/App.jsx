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
  tagline: "Real talk for international students starting vocational training in Germany",
  lastUpdatedLabel: "Last updated",
  lastUpdatedDate: "2026-01-15",
  disclaimer:
    "I've tested everything here. Rules change though, so always double-check with official sources. When in doubt, trust the official letter over this guide.",
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
    subtitle: "Airport to apartment: what actually matters",
    stage: "Arrival",
    readTime: "12 min",
    icon: <Wifi size={24} />,
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20",
    accent: "text-blue-600",
    verified: META.lastUpdatedDate,
    summary: "Your first 72 hours stripped to essentials: internet, transport, and the apps you actually need.",
    vibeCheck: "You just landed. You are tired, your luggage is heavy, and you don’t have internet. Take a deep breath. We’ll sort this out.",
    content: [
      {
        type: "p",
        text: "You just landed in Germany. Excited but exhausted. The airport is designed to separate you from your money. Let's not let that happen."
      },
      { type: "h2", text: "1. The Internet Problem (Don't buy at the airport)" },
      {
        type: "p",
        text: "You will see shops selling SIM cards in the arrivals hall. **Avoid them.** They often sell tourist contracts that are overpriced (e.g., 50€ for 10GB). You don't need that. Use the free airport WiFi to download the essential apps listed below."
      },
      {
        type: "p",
        text: "The best local option for students is **Aldi Talk**. It is a prepaid service from the Aldi supermarket chain. It is cheap (~10€ starter set), has no long contract, and uses the reliable O2 network. Why Aldi? Because every German city has an Aldi supermarket, and it's the most accessible option for newcomers."
      },
      {
        type: "ul",
        items: [
          "**Where to buy:** Any 'Aldi Süd' or 'Aldi Nord' supermarket. There is usually one inside or very near major train stations and airports. Pro tip: Aldi is divided into North and South regions, but both Aldi Talk services work nationwide.",
          "**How to register:** German law requires ID verification before you can use any mobile SIM. You must download the Aldi Talk app and do a 'Video Ident' call—this is a video call where you show your passport to verify who you are. You need good lighting and a clear photo of your passport.",
          "**Troubleshooting:** If the video call fails (which happens with bad connection or unclear photos), you can do 'PostIdent' at any post office (Deutsche Post). They will verify you in person for a small fee (~10€).",
          "**Cost breakdown:** The 10€ starter set includes your SIM and about 5€ credit. Monthly plans start at 8€ for calls/texts, or just use pay-as-you-go if you prefer flexibility."
        ]
      },
      { type: "h2", text: "2. Essential Apps: Maps, Translator & Transport" },
      {
        type: "p",
        text: "Before you leave the airport WiFi, download these three apps. They will save you hours of confusion:"
      },
      {
        type: "ul",
        items: [
          "**Google Maps:** Works perfectly in Germany. It shows you real-time public transport schedules, train platforms, and walking times. It's 100% accurate.",
          "**DeepL:** This is NOT Google Translate. DeepL is specifically trained on German and produces natural translations. Point your phone camera at a German sign or menu, and DeepL will translate it instantly. Free version works offline after download.",
          "**DB Navigator (Deutsche Bahn):** This is the official German railway app. It shows you every bus, train, and metro option. It tells you which platform (Gleis) to go to, when the train departs, and if it's running late. You'll use this constantly."
        ]
      },
      { type: "h2", text: "3. Getting From Airport to City: Transport vs Taxi" },
      {
        type: "p",
        text: "This is where many newcomers waste their first 50€–80€. A taxi from a major airport (Berlin, Munich, Frankfurt) to the city center costs between 50€ and 80€. A train ticket costs 6€–12€. In Germany, trains are safe, clean, and everyone uses them—including wealthy locals. Do not take a taxi unless there are extraordinary circumstances."
      },
      {
        type: "p",
        text: "**Here's exactly what to do:** Use the DB Navigator app (you just downloaded it). Type your airport name and your destination address. It will show you the cheapest and fastest route. Usually it's a regional train (S-Bahn) followed by a metro (U-Bahn) or bus. The app tells you which platform to go to and what time to leave. It's that simple."
      },
      {
        type: "p",
        text: "**About the Deutschlandticket:** This monthly pass costs 49€–63€ and covers ALL local transport nationwide (trains, buses, metros). It does NOT cover long-distance express trains (ICE/IC). But for getting around your city? Perfect. Consider buying one at the airport train station before you leave."
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
    subtitle: "The money stuff nobody explains well",
    stage: "Settling In",
    readTime: "15 min",
    icon: <Landmark size={24} />,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    accent: "text-emerald-600",
    verified: META.lastUpdatedDate,
    summary: "Banks, registration, taxes, insurance—we break down the catch-22s and show you the smart shortcuts.",
    vibeCheck: "Yes, it feels impossible. You need a bank for rent, but they want an address. We're gonna untangle this.",
    content: [
      {
        type: "p",
        text: "Germany runs on bureaucracy and paperwork. But it's not as chaotic as it seems—it's actually very organized once you understand the system. To function here, you need three main things: (1) A registered address (**Anmeldung**), (2) A German Bank Account (IBAN), and (3) A Tax ID. The catch? They often require each other. Let's untangle this."
      },
      { type: "h2", text: "1. Banking: Which Bank Should You Choose?" },
      {
        type: "p",
        text: "You need a German IBAN for two critical things: your employer needs it to pay your salary, and your landlord needs it to accept rent payments. But opening a bank account as a newcomer is tricky. Here's what you're up against:"
      },
      {
        type: "ul",
        items: [
          "**Sparkasse / Volksbank (Traditional Banks):** These are the safest and most trusted. Physical branches in every neighborhood. BUT they charge monthly fees (5–10€) and often require your Anmeldung (registration) proof before opening an account. This creates a chicken-and-egg problem.",
          "**Commerzbank / Deutsche Bank:** Large banks with solid reputations. Problem: They often check your SCHUFA (credit score). If you're new to Germany, you won't have any credit history. They might reject you.",
          "**N26 (Online Bank):** Fast setup, German IBAN, no fees. Good if it works for your passport, but verification sometimes fails with non-EU documents.",
          "**Revolut (Game Changer):** Opens in literally 10 minutes through an app using only your passport. Gives you a valid German IBAN immediately. Excellent English-language app. No Anmeldung needed upfront—you update it later. This is your best bet."
        ]
      },
      {
        type: "p",
        text: "**My honest recommendation:** Open Revolut first. Use it to establish your financial presence in Germany. Give the IBAN to your employer and landlord. Once you have your registration paper (Anmeldung), open a Sparkasse account if you want a physical bank for ATM withdrawals or backup. But Revolut alone is perfectly sufficient."
      },
      {
        type: "p",
        text: "You can open a free Revolut account using this link: [Open Revolut Account](https://revolut.com/referral/?referral-code=markdaniels_m!JAN1-26-AR-H1&geo-redirect). Full transparency: this is a referral link (I get a small bonus), but I genuinely recommend it because it solves the biggest headache for newcomers."
      },
      { type: "h2", text: "2. Anmeldung: Your Most Important Piece of Paper" },
      {
        type: "p",
        text: "**What is Anmeldung?** It's your official registration with the city. Once you register, you are legally documented as living at that address. This piece of paper unlocks everything else: tax ID, health insurance, voting rights. Without it, you're invisible to the German system."
      },
      {
        type: "p",
        text: "**The Timeline:** Within 2 weeks of moving into your permanent address, you must go to the **Bürgeramt** (local citizen's office) and register. If you don't do this, you're technically in violation of German law and can face fines."
      },
      {
        type: "p",
        text: "**The Practical Problem:** Appointments are notoriously hard to get. Websites show no availability for months. But here's the hack that actually works: **Check the booking portal at 7:00 AM or 8:00 AM sharp**. That's when cancelled appointments from other people get released back into the system. You need lightning-fast fingers, but appointments appear. Be flexible about the date and time—take whatever is available."
      },
      {
        type: "p",
        text: "**What to Bring:** Your passport and the **Wohnungsgeberbestätigung** (landlord's confirmation that you moved in). If your landlord doesn't have this form, ask them to fill out this template: [Wohnungsgeberbestätigung PDF](https://www.wohnungsboerse.net/files/Wohnungsgeberbestaetigung_Muster.pdf)"
      },
      { type: "h2", text: "3. Health Insurance (Krankenkasse): It's Mandatory" },
      {
        type: "p",
        text: "**Important:** Health insurance is not optional in Germany. It's legally required for everyone. As an employee or trainee, you're automatically enrolled in the **public health insurance system (GKV)**."
      },
      {
        type: "p",
        text: "**How much does it cost?** About 16% of your gross salary. But here's the good part: your employer pays half (8%) and you pay half (8%). So if you earn 2,000€ gross, you pay ~160€ for health insurance. It's automatically deducted from your salary—you don't need to do anything."
      },
      {
        type: "p",
        text: "**Which insurance company?** AOK, Techniker Krankenkasse (TK), and DAK-Gesundheit are the biggest. They all provide identical coverage—the choice is just about admin preferences. Ask your employer which one they recommend, or check their rates on [Check24](https://www.check24.de/gesetzliche-krankenversicherung/)."
      },
      {
        type: "p",
        text: "**What does it cover?** Everything essential: doctor visits, hospital stays, prescription medications, dental work (basics), mental health therapy, and more. Germany's healthcare is excellent."
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
    subtitle: "Finding a place to live and not spending all your money on IKEA",
    stage: "Settling In",
    readTime: "12 min",
    icon: <HomeIcon size={24} />,
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/20",
    accent: "text-orange-600",
    verified: META.lastUpdatedDate,
    summary: "Platform reviews (WG Gesucht), free furniture hacks (Kleinanzeigen), and the house rules that matter.",
    vibeCheck: "Flats are tight and expensive. But furnishing them cheap? That's doable. Here's how.",
    content: [
      { type: "h2", text: "1. Finding a Place: WG Gesucht & ImmobilienScout24" },
      {
        type: "p",
        text: "Finding housing in Germany is competitive. You need to act fast and know the platforms. **WG-Gesucht.de** is THE platform for shared flats (WGs) and student housing. 'WG' means **Wohngemeinschaft** (shared living community). It's how most young people in Germany live—usually 3-4 people sharing an apartment, each with their own room but shared kitchen and bathroom."
      },
      {
        type: "p",
        text: "**Why WGs?** They're cheaper than solo apartments and faster to move into. Landlords prefer WGs because the risk is spread. But you need to understand: a WG is NOT a hotel. You'll have shared responsibility for cleaning, noise levels, and respecting housemates' schedules."
      },
      {
        type: "p",
        text: "**How to write a good message:** Landlords receive 50+ inquiries per listing. Stand out by being genuine and professional. Say: your name, your profession/field, your start date, that you have steady income or are employed, and ask to view the apartment. DO NOT include personal stories unless asked. Keep it short."
      },
      {
        type: "p",
        text: "**Red flags—NEVER do this:** No transfers to foreign bank accounts before seeing the apartment. No 'holding deposits' without a contract. No 'Video viewings only'—always visit in person. If it seems too cheap or easy, it's a scam."
      },
      {
        type: "p",
        text: "**For solo apartments:** Use [ImmobilienScout24.de](https://www.immobilienscout24.de/) (expensive but most listings) or [Kleinanzeigen](https://www.kleinanzeigen.de/) (often cheaper, sometimes sketchy)."
      },
      { type: "h2", text: "2. Furnishing for Free or Very Cheap: Kleinanzeigen" },
      {
        type: "p",
        text: "Here's a shock: most German apartments come **completely empty**. No furniture, no kitchen, no curtains, sometimes not even lightbulbs. This terrifies newcomers who think they need to spend 5,000€ on IKEA furniture. You don't."
      },
      {
        type: "p",
        text: "**The Secret:** Use [Kleinanzeigen.de](https://www.kleinanzeigen.de/). It's Germany's equivalent of Craigslist. But here's the magic: search for the category **'Zu verschenken'** (to give away). Germans constantly throw away perfectly good furniture when moving. Sofas, beds, tables, dishes—all free. Pick-up yourself to save even more."
      },
      {
        type: "p",
        text: "**How it works:** Create a free account on Kleinanzeigen. Search for furniture category, filter by 'Zu verschenken'. Message the poster saying you'll pick it up THIS WEEK (Germans like speed). Many people will say yes just because they want it gone."
      },
      {
        type: "p",
        text: "**Reality check:** You might need to spend 200–500€ on a decent bed or sofa—your health matters. But 90% of everything else comes free. And for new items, search 'Gebraucht' (used) first. Germans are meticulous about used stuff; a 'used' sofa often looks brand new."
      },
      { type: "h2", text: "3. The Deposit (Kaution): Your Safety Net" },
      {
        type: "p",
        text: "German landlords usually require a deposit of **2–3 months' rent**. This is normal and legal. **Important:** This deposit IS YOUR MONEY. The landlord must place it in a separate, interest-bearing account (not mixed with their personal money). Always get a receipt."
      },
      {
        type: "p",
        text: "**What 'warm rent' means:** German rent is divided into 'cold' (just the apartment) and 'warm' (apartment + utilities like heating, water, garbage). Deposits are calculated on warm rent, so they include utilities costs."
      },
      {
        type: "p",
        text: "**When you move out:** You get the deposit back, minus deductions for actual damages (not normal wear and tear). The landlord must return it within 1 month of you moving out. If they don't, or if they make unfair deductions, you can pursue them in small claims court. Keep your receipts and move-in photos."
      },
      { type: "h2", text: "4. House Rules: Quiet Hours & Trash Separation" },
      {
        type: "p",
        text: "Germany takes noise seriously. **Ruhezeit** (quiet hours) are legally enforced in most apartments:"
      },
      {
        type: "ul",
        items: [
          "**Weekdays:** 22:00 (10 PM) to 06:00 (6 AM)—no loud music, drilling, vacuuming, or parties.",
          "**Sundays & holidays:** Quiet ALL DAY. This is a cultural thing. Germans use Sundays for rest, seriously.",
          "**Violation:** If neighbors complain, landlord might fine you or terminate your contract. Repeated violations = eviction."
        ]
      },
      {
        type: "p",
        text: "**Trash separation is not optional.** Germany is obsessive about recycling. Your building will have color-coded bins:"
      },
      {
        type: "ul",
        items: [
          "**Blue:** Paper and cardboard",
          "**Yellow/Orange:** Packaging (plastics, aluminum, metal cans)",
          "**Brown/Green:** Organic waste (food scraps, garden waste)",
          "**Black/Grey:** Residual waste (everything else)",
          "**Clear glass/Colored glass:** Separate glass collection (not always available)"
        ]
      },
      {
        type: "p",
        text: "**Why does this matter?** If you put trash in the wrong bin and it gets reported, the building management can issue fines. Plus, Germans will judge you silently but intensely. Use [Mülltrennung Wirkt](https://www.muelltrennung-wirkt.de/) if you're ever unsure where something goes."
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
    title: "Professional Development: Language & Jargon",
    subtitle: "Learning to talk like a pro in your field",
    stage: "Work & Study",
    readTime: "10 min",
    icon: <Stethoscope size={24} />,
    color: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-500/20",
    accent: "text-rose-600",
    verified: "2026-01-15",
    summary:
      "You know your trade. The challenge is saying it in German. Real tools that actually help people pass their licensing exams and talk with colleagues.",
    vibeCheck:
      "You're competent in your field. Now you just need the German vocabulary. We've got verified resources.",
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
    title: "Rights & Hierarchy: Know Your Ground",
    subtitle: "Contracts, your legal rights, and when to speak up",
    stage: "Work & Study",
    readTime: "12 min",
    icon: <Briefcase size={24} />,
    color: "from-purple-500 to-violet-600",
    shadow: "shadow-purple-500/20",
    accent: "text-purple-600",
    verified: "2026-01-15",
    summary:
      "You're a trainee, not a servant. Learn what's legal, what's exploitation, and who to call when something's wrong.",
    vibeCheck:
      "German workplaces have clear rules. You have rights. You should know them.",
    content: [
      { type: "h2", text: "1. Workplace Hierarchy" },
      {
        type: "p",
        text: "German workplaces have clear structures. You have a direct supervisor (Vorgesetzter) and a chain of command. Always be respectful, use formal 'Sie' when appropriate, and follow proper channels. Don't skip your manager to complain to the top unless it's genuinely urgent. *(This applies across all fields—hospitals, tech companies, offices, apprenticeships.)*"
      },
      { type: "h2", text: "2. Contract Check" },
      {
        type: "p",
        text: "You're an employee, not just a trainee. Your contract matters. If you don't understand something or feel it's unfair, get advice. Use **Faire Integration**—they offer free counseling for refugees and migrants about worker rights. They can review your contract and tell you if it's legal."
      },
      { type: "h2", text: "3. Your Legal Rights" },
      {
        type: "p",
        text: "You're in Germany as a 'trainee' (**Auszubildender**) or employee. This comes with legal protections. You should never be unsupervised when learning. **Probezeit (Probation):** During the first 3-6 months, either side can end the contract with 2 weeks' notice, no reason needed. Be reliable during this time. After probation, it's much harder to fire you."
      },
      {
        type: "ul",
        items: [
          "**Working Hours:** Maximum 10 hours/day (usually 8), plus mandatory breaks.",
          "**Sick Leave:** Tell your employer BEFORE your shift. Ask when you need a doctor's note (Attest).",
          "**Vacation:** Legally guaranteed. Usually 20-30 days/year."
        ]
      }
    ],
    goldenRule:
      "If you feel unsafe or exploited, contact 'Faire Integration' or 'Dr. Azubi' immediately.",
    steps: [
      {
        title: "Know Your Hierarchy",
        text: "Who's who in your workplace.",
        action: "Ask on day one.",
        readMore: [
          {
            title: "German Workplace Culture Guide",
            url: "https://www.make-it-in-germany.com/en/looking-for-work/law-regulation/", source: "official",
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
        title: "Get Legal Advice",
        text: "Have an expert review your contract.",
        action: "Contact Faire Integration (free).",
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
    title: "Mental Health & Building Your Life",
    subtitle: "The emotional side nobody talks about",
    stage: "Health & Social",
    readTime: "9 min",
    icon: <Heart size={24} />,
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/20",
    accent: "text-cyan-600",
    verified: "2026-01-15",
    summary:
      "Homesickness is real. Loneliness is real. But so are the communities and support systems around you.",
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
  // === CORE ESSENTIALS ===
  { id: "r1", title: "OmniCalculator", url: "https://www.omnicalculator.com/de/gesundheit/dosierung", type: "Tool", category: "Nursing & Math", tags: ["math"], source: "tool" },
  { id: "r2", title: "Revolut", url: LINKS.revolutReferral, type: "Tool", category: "Money & Banking", tags: ["bank"], source: "referral" },
  { id: "r3", title: "DB Navigator", url: "https://www.bahn.de/service/mobile/db-navigator", type: "App", category: "Arrival & Setup", tags: ["transport"], source: "official" },
  { id: "r4", title: "Aldi Talk", url: "https://www.alditalk.de/registrierung", type: "Website", category: "Arrival & Setup", tags: ["internet"], source: "official" },
  { id: "r5", title: "Mülltrennung Wirkt", url: LINKS.trashGuide, type: "Website", category: "Housing", tags: ["trash"], source: "official" },
  { id: "r6", title: "Ipso Care", url: "https://ipso-care.com/", type: "Website", category: "Health & Social", tags: ["health"], source: "ngo" },
  { id: "r7", title: "Dr. Azubi", url: "https://jugend.dgb.de/ausbildung/beratung/dr-azubi", type: "Website", category: "Rights & Legal", tags: ["rights"], source: "ngo" },
  
  // === ARRIVAL & SETUP ===
  { id: "r15", title: "Handbook Germany - Official Guide", url: "https://handbookgermany.de/en/", type: "Website", category: "Arrival & Setup", tags: ["arrival", "official"], source: "official" },
  { id: "r17", title: "Integreat - Local Information App", url: "https://integreat.app", type: "App", category: "Arrival & Setup", tags: ["local-info", "languages"], source: "tool" },
  { id: "r28", title: "Make It In Germany - Official Portal", url: "https://www.make-it-in-germany.com/en/", type: "Website", category: "Arrival & Setup", tags: ["visa", "official"], source: "official" },
  { id: "r29", title: "Google Maps Germany", url: "https://www.google.com/maps", type: "App", category: "Arrival & Setup", tags: ["navigation"], source: "tool" },
  
  // === MONEY & BANKING ===
  { id: "r19", title: "Too Good To Go - Food App", url: "https://www.toogoodtogo.com/de/de", type: "App", category: "Money & Banking", tags: ["food", "savings"], source: "tool" },
  { id: "r27", title: "Check24 - Health Insurance Comparison", url: "https://www.check24.de/gesetzliche-krankenversicherung/", type: "Website", category: "Money & Banking", tags: ["insurance", "health"], source: "tool" },
  { id: "r30", title: "Sparkasse Bank Finder", url: "https://www.sparkasse.de/de/unsere-filialen.html", type: "Website", category: "Money & Banking", tags: ["banking", "official"], source: "official" },
  { id: "r31", title: "AOK Health Insurance", url: "https://www.aok.de/", type: "Website", category: "Money & Banking", tags: ["insurance", "official"], source: "official" },
  { id: "r32", title: "Bürgeramt Finder - Address Registration", url: "https://service.berlin.de/dienstleistung/120686/", type: "Website", category: "Money & Banking", tags: ["registration", "official"], source: "official" },
  { id: "r33", title: "Finanzamt - Tax Authority", url: "https://www.finanzamt.de/", type: "Website", category: "Money & Banking", tags: ["taxes", "official"], source: "official" },
  
  // === HOUSING ===
  { id: "r25", title: "WG Gesucht - Flat Sharing Platform", url: "https://www.wg-gesucht.de/", type: "Website", category: "Housing", tags: ["housing", "flatshare"], source: "tool" },
  { id: "r26", title: "Kleinanzeigen - Free Classifieds", url: "https://www.kleinanzeigen.de/", type: "Website", category: "Housing", tags: ["furniture", "free"], source: "tool" },
  { id: "r34", title: "ImmobilienScout24 - Apartment Listings", url: "https://www.immobilienscout24.de/", type: "Website", category: "Housing", tags: ["housing", "apartments"], source: "tool" },
  { id: "r35", title: "MieterverbanD - Tenant Union", url: "https://www.mieterbund.de/", type: "Website", category: "Housing", tags: ["tenant-rights"], source: "ngo" },
  { id: "r36", title: "Deutschlandticket - Transport Pass", url: "https://www.bahn.de/angebot/regio/deutschland-ticket", type: "Website", category: "Housing", tags: ["transport"], source: "official" },
  
  // === PROFESSIONAL DEVELOPMENT & LANGUAGE ===
  { id: "r8", title: "DocCheck Flexikon", url: "https://flexikon.doccheck.com", type: "Website", category: "Nursing & Math", tags: ["nursing", "reference"], source: "learning" },
  { id: "r9", title: "PflegeTube (YouTube Channel)", url: "https://www.youtube.com/user/PflegeTube", type: "Video", category: "Nursing & Math", tags: ["nursing", "video"], source: "video" },
  { id: "r10", title: "Thieme Online Store - Medical Books", url: "https://shop.thieme.de", type: "Website", category: "Nursing & Math", tags: ["nursing", "textbooks"], source: "tool" },
  { id: "r11", title: "ResearchGate - Academic Papers", url: "https://www.researchgate.net", type: "Website", category: "Nursing & Math", tags: ["nursing", "research"], source: "learning" },
  { id: "r12", title: "Pflege Heute - Nursing Textbook Reference", url: "https://www.elsevier.de/de/buch/pflege-heute", type: "Website", category: "Nursing & Math", tags: ["nursing", "textbooks"], source: "learning" },
  { id: "r13", title: "Dict.cc - Offline Dictionary", url: "https://www.dict.cc", type: "Tool", category: "Nursing & Math", tags: ["language", "medical"], source: "tool" },
  { id: "r18", title: "DeepL Translator", url: "https://www.deepl.com", type: "Tool", category: "Apps & Tools", tags: ["language", "translation"], source: "tool" },
  { id: "r37", title: "Duolingo - German Language Learning", url: "https://www.duolingo.com/", type: "App", category: "Apps & Tools", tags: ["language"], source: "tool" },
  { id: "r38", title: "BBC Learning English (German)", url: "https://www.bbc.co.uk/learning/english/", type: "Website", category: "Apps & Tools", tags: ["language"], source: "learning" },
  { id: "r39", title: "VHS (Volkshochschule) - Language Courses", url: "https://www.vhsonline.de/", type: "Website", category: "Apps & Tools", tags: ["language", "courses"], source: "official" },
  
  // === RIGHTS & LEGAL ===
  { id: "r20", title: "Faire Integration - Worker Rights", url: "https://www.faire-integration.de/", type: "Website", category: "Rights & Legal", tags: ["rights", "workers"], source: "ngo" },
  { id: "r40", title: "Arbeitsagentur - Employment Agency", url: "https://www.arbeitsagentur.de/", type: "Website", category: "Rights & Legal", tags: ["employment", "official"], source: "official" },
  { id: "r41", title: "IG Metall - Trade Union", url: "https://www.igmetall.de/", type: "Website", category: "Rights & Legal", tags: ["workers", "union"], source: "ngo" },
  { id: "r42", title: "Betriebsrat Info - Works Council", url: "https://www.dgb.de/themen/++co++a51d7df8-5d32-11eb-a38c-001a4a160123", type: "Website", category: "Rights & Legal", tags: ["rights"], source: "official" },
  
  // === HEALTH & SOCIAL ===
  { id: "r21", title: "TelefonSeelsorge - Crisis Hotline", url: "https://www.telefonseelsorge.de/", type: "Website", category: "Health & Social", tags: ["mental-health", "crisis"], source: "official" },
  { id: "r22", title: "DOSB - Sports Clubs Finder", url: "https://bewegt.dosb.de/", type: "Website", category: "Health & Social", tags: ["sports", "clubs", "social"], source: "official" },
  { id: "r23", title: "Meetup - Events & Groups", url: "https://www.meetup.com/de", type: "Website", category: "Health & Social", tags: ["social", "events"], source: "tool" },
  { id: "r24", title: "Eventbrite - Events in Germany", url: "https://www.eventbrite.de", type: "Website", category: "Health & Social", tags: ["events", "social"], source: "tool" },
  { id: "r16", title: "Together in Germany - Community", url: "https://together-in-germany.org/", type: "Website", category: "Health & Social", tags: ["community", "social"], source: "ngo" },
  { id: "r43", title: "ProAsyl - Refugee Support", url: "https://www.proasyl.de/en/", type: "Website", category: "Health & Social", tags: ["support", "refugees"], source: "ngo" },
  { id: "r44", title: "Malteser International - Medical Support", url: "https://www.malteser.de/", type: "Website", category: "Health & Social", tags: ["medical", "ngo"], source: "ngo" },
  
  // === STUDY & SCHOLARSHIPS ===
  { id: "r14", title: "DAAD - German Academic Exchange Service", url: "https://www.daad.de/en/", type: "Website", category: "Apps & Tools", tags: ["study", "scholarships"], source: "official" },
  { id: "r45", title: "Deutsches Studentenwerk - Student Services", url: "https://www.studentenwerke.de/", type: "Website", category: "Apps & Tools", tags: ["students", "official"], source: "official" },
  { id: "r46", title: "BafÖG - Education Grants", url: "https://www.bafög.de/", type: "Website", category: "Apps & Tools", tags: ["funding", "official"], source: "official" },
];

// =======================
// UI COMPONENTS
// =======================

const Header = ({ emergencyMode, setEmergencyMode, isPostDetail = false }) => (
  <header className={`sm:sticky top-0 z-50 ${isPostDetail ? 'glass-card-transparent' : 'glass-card border-b border-white/20'}`}>
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
      
      <div className="flex items-center gap-3 flex-wrap justify-end">
        <a
          href={LINKS.buyMeACoffee}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300 hover:bg-amber-200 hover:border-amber-400 transition-all hover:shadow-md"
          title="Support this project"
        >
          ☕ Coffee
        </a>
        <a
          href={LINKS.buyMeACoffee}
          target="_blank"
          rel="noopener noreferrer"
          className="flex sm:hidden items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold text-amber-700 bg-amber-100 border border-amber-300 hover:bg-amber-200 hover:border-amber-400 transition-all"
          title="Support this project"
        >
          ☕
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
      <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
        Your first steps in <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          Germany.
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

const PostDetail = ({ post, onBack, progress, onToggle, onReset, emergencyMode, setEmergencyMode }) => {
  const total = post.steps.length;
  const done = post.steps.reduce((acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0), 0);
  const progressPercent = pct(done, total);

  return (
    <div className="min-h-screen pb-20">
      <Header emergencyMode={emergencyMode} setEmergencyMode={setEmergencyMode} isPostDetail={true} />
      {/* Top nav */}
      <div className="glass-card sticky top-[72px] z-50 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between border-b border-white/20 gap-2">
        <button
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 bg-white/50 hover:bg-white px-3 sm:px-4 py-2 rounded-full transition-all text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md"
        >
          <ArrowLeft className="mr-1 sm:mr-2" size={16} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <button
          onClick={onReset}
          className="inline-flex items-center text-xs font-bold text-slate-500 bg-white/70 border border-slate-200 px-2.5 sm:px-3 py-2 rounded-full hover:bg-white transition"
          title="Reset checklist for this post"
        >
          <RotateCcw size={12} className="mr-1" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 py-8 sm:py-12 mb-6 text-center relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br ${post.color} opacity-20 blur-3xl rounded-full`} />
        <div className="relative z-10">
          <div className={`inline-flex p-3 sm:p-5 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 bg-gradient-to-br ${post.color} text-white shadow-2xl ${post.shadow} animate-float`}>
            {React.cloneElement(post.icon, { size: 32 })}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 sm:mb-3 tracking-tight">
            {post.title}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-2">
            {post.summary}
          </p>

          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
              <CheckCircle size={10} className="mr-1 text-emerald-500" />
              <span className="hidden sm:inline">Verified:</span> {post.verified}
            </div>

            <div className="inline-flex items-center text-xs font-bold text-slate-600 bg-white/70 border border-slate-200 px-2.5 py-1 rounded-full">
              <span className="mr-1.5">{progressPercent}%</span>
              <span className="h-2 w-16 sm:w-24 bg-slate-100 rounded-full overflow-hidden">
                <span className={`block h-full bg-gradient-to-r ${post.color}`} style={{ width: `${progressPercent}%` }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        
        {/* Render STRUCTURED CONTENT ARRAY */}
        {post.content && (
          <div className="prose prose-slate max-w-none bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-base sm:text-lg content-block">
            {post.content.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'p') return <p key={i}>{renderRichText(block.text, `p-${i}`)}</p>;
              if (block.type === 'ul') return <ul key={i}>{block.items.map((item, j) => <li key={j}>{renderRichText(item, `li-${i}-${j}`)}</li>)}</ul>;
              return null;
            })}
          </div>
        )}

        {/* Golden rule */}
        <div className="bg-amber-50/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-amber-100/60">
          <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-wider mb-2">
            <AlertTriangle size={14} />
            Golden Rule
          </div>
          <p className="text-slate-800 font-semibold text-sm sm:text-base">{post.goldenRule}</p>
        </div>

        {/* Checklist */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3 sm:space-x-4 py-2">
            <div className="h-px bg-slate-200 flex-1" />
            <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider sm:tracking-[0.2em]">
              <span className="hidden sm:inline">Action Plan & </span>Checklist
            </h3>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          {post.steps.map((step, idx) => {
            const key = `${post.slug}-${idx}`;
            const isDone = Boolean(progress[key]);

            return (
              <div
                key={key}
                className={`bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border transition-all duration-300 transform ${
                  isDone
                    ? "border-emerald-200 opacity-90"
                    : "border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                  <div className="flex items-start min-w-0 flex-1">
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-black mr-2 sm:mr-3 transition-colors flex-shrink-0 ${
                        isDone ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </span>

                    <h4
                      className={`font-bold text-sm sm:text-lg transition-colors leading-snug ${
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
                    className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 flex-shrink-0 ${
                      isDone
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-slate-50 text-slate-300 hover:bg-slate-100 hover:text-indigo-500"
                    }`}
                    title="Mark done / not done"
                  >
                    {isDone ? <CheckSquare size={20} /> : <Square size={20} />}
                  </button>
                </div>

                <p className={`text-slate-500 mb-3 sm:mb-4 ml-8 sm:ml-9 font-medium leading-relaxed text-sm sm:text-base ${isDone ? "opacity-50" : "opacity-100"}`}>
                  {step.text}
                </p>

                {!isDone && (
                  <div className="ml-8 sm:ml-9">
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 mb-3 flex items-start gap-2 sm:gap-3">
                      <span className="text-base sm:text-lg flex-shrink-0">👉</span>
                      <span className="text-slate-700 font-semibold text-xs sm:text-sm pt-0.5 leading-snug">
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
                            className="w-full text-left bg-white hover:bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 transition flex items-start sm:items-center justify-between gap-2"
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1 flex-wrap">
                                <SourcePill source={l.source} />
                                <span className="text-xs text-slate-400 font-bold hidden sm:inline">Read more</span>
                              </div>
                              <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">{l.title}</p>
                            </div>
                            <ExternalLink size={14} className="text-slate-400 flex-shrink-0 ml-2" />
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
            emergencyMode={emergencyMode}
            setEmergencyMode={setEmergencyMode}
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
              
              {/* Buy Me A Coffee Button - Prominent */}
              <div className="my-6 py-6 border-y border-slate-200/50">
                <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Like this guide? Support the author</p>
                <a
                  href={LINKS.buyMeACoffee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white font-black uppercase tracking-wide text-sm hover:from-amber-300 hover:via-orange-300 hover:to-rose-300 transition-all shadow-lg shadow-orange-400/40 hover:shadow-xl hover:shadow-orange-400/60 hover:scale-105 active:scale-95"
                >
                  ☕ Buy Me A Coffee
                </a>
              </div>
              
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
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
