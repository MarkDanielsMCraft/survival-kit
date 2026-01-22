import {
  Wifi,
  Landmark,
  Home as HomeIcon,
  Heart,
  Stethoscope,
  Briefcase,
  ShoppingCart,
  Users,
  AlertCircle,
  Utensils,
  BookOpen,
  Briefcase as BriefcaseWork,
} from "lucide-react";
import { LINKS } from '../constants/config';
import img1 from '../frankfurt-5377161.jpg';
import img2 from '../opera-4513452.jpg';
import img3 from '../skyscraper-7360222.jpg';
import img4 from '../frankfurt-5377161_1920.jpg';
import img5 from '../alliance-5201816.jpg';
import img6 from '../augsburg-3080437.jpg';
import img7 from '../cologne-cathedral-6664664.jpg';
import img8 from '../hamburg-2255755.jpg';
import img9 from '../hamburg-2383200.jpg';
import img10 from '../munich-2516492.jpg';
import img11 from '../munich-3521933.jpg';
import img12 from '../port-4851408.jpg';
import img13 from '../ryanair-5249631.jpg';

/**
 * BLOG POSTS DATA
 * 
 * To add a new blog post, copy one of the existing post objects below and modify it.
 * 
 * Structure:
 * - slug: unique URL identifier (lowercase, hyphens)
 * - title: main heading
 * - subtitle: short description
 * - stage: category (Arrival, Settling In, Work & Study, Health & Social)
 * - readTime: estimated reading time
 * - icon: JSX icon component from lucide-react
 * - color: gradient colors (Tailwind classes)
 * - summary: brief overview for card view
 * - content: array of content blocks (type: "p", "h2", "ul")
 * - goldenRule: key takeaway message
 * - steps: actionable checklist items
 * - readMore: additional resources
 * - downloads: PDF/doc links
 * - videos: video tutorial links
 * - tags: search keywords
 */

export const POSTS = [
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
    verified: "2026-01-19",
      backgroundImage: img13,
    summary: "Your first 72 hours stripped to essentials: internet, transport, and the apps you actually need.",
    vibeCheck: "You just landed. You are tired, your luggage is heavy, and you don't have internet. Take a deep breath. We'll sort this out.",
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
        text: "The best local option for students is **[Aldi Talk](https://www.alditalk.de/)**. It is a prepaid service from the Aldi supermarket chain. It is cheap (~10€ starter set), has no long contract, and uses the reliable O2 network. Why Aldi? Because every German city has an Aldi supermarket, and it's the most accessible option for newcomers."
      },
      {
        type: "ul",
        items: [
          "**Where to buy:** Any [Aldi Süd](https://www.aldi-sued.de/) or [Aldi Nord](https://www.aldi-nord.de/) supermarket. There is usually one inside or very near major train stations and airports.",
          "**How to register:** German law requires ID verification. You can download the [Aldi Talk app](https://www.alditalk.de/registrierung) and do a 'Video Ident' call. You need good lighting and a clear photo of your passport.",
          "**Troubleshooting:** If video call fails (bad connection), you can do 'PostIdent' at any post office (Deutsche Post) for a small fee (~10€).",
          "**Cost:** The 10€ starter set includes your SIM and ~10€ credit. Monthly plans start at 8.99€ (Verified 19 Jan 2026)."
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
          "**[Google Maps](https://maps.google.com)**: Works perfectly in Germany. It shows you real-time public transport schedules, train platforms, and walking times. It's 100% accurate. However, this seems confusing to many new comers! Just type your destination address, and it will show you exactly how to get there using buses, trains, or walking.",
          "**[DeepL](https://www.deepl.com)**: This is NOT Google Translate. DeepL is specifically trained on German and produces natural translations. Point your phone camera at a German sign or menu, and DeepL will translate it instantly. Free version works offline after download.",
          "**[DB Navigator (Deutsche Bahn)](https://www.bahn.de/service/mobile/db-navigator)**: This is the official German railway app. It shows you every bus, train, and metro option. It tells you which platform (Gleis) to go to, when the train departs, and if it's running late. You'll use this constantly. You can also buy tickets directly in the app."
        ]
      },
      { type: "h2", text: "3. Getting From Airport to City: Transport vs Taxi" },
      {
        type: "p",
        text: "This is where many newcomers waste their first 50€–80€. A taxi from a major airport (Berlin, Munich, Frankfurt) to the city center costs between 50€ and 80€ approximately. A train ticket costs about 6€–12€. In Germany, trains are safe, clean, and everyone uses them—including wealthy locals. Do not take a taxi unless there are extraordinary circumstances."
      },
      {
        type: "p",
        text: "**Here's exactly what to do:** Use the [DB Navigator](https://www.bahn.de/service/mobile/db-navigator) app (you just downloaded it). Type your airport name and your destination address. It will show you the cheapest and fastest route. Usually it's a regional train (S-Bahn) followed by a metro (U-Bahn) or bus. The app tells you which platform to go to and what time to leave. It's that simple. If this seems confusing, switch to **[Google Maps](https://maps.google.com)** and do the same search there."
      },
      {
        type: "p",
        text: "**About the [Deutschlandticket](https://www.bahn.de/angebot/regio/deutschland-ticket):** This monthly pass costs 63€(as of 19 Jan 2026) and covers ALL local transport nationwide (trains, buses, metros). It does NOT cover long-distance express trains (ICE/IC). But for getting around your city? Perfect. Consider buying one at the airport train station before you leave."
      },
      { type: "h2", text: "4. Your First Weekend (The Sunday Rule)" },
      {
        type: "p",
        text: "If you arrive on a Saturday evening or a Sunday, you must know this: **Germany closes on Sundays.** Supermarkets, pharmacies, and clothing stores are closed. It is the 'Ruhetag' (rest day). If you do not buy food on Saturday, you will not eat until Monday."
      },
      {
        type: "p",
        text: "**The Loophole:** Supermarkets inside big train stations (Hauptbahnhof) and airports are allowed to stay open on Sundays. If you land on Sunday, buy bread, water, juice etc *at the airport supermarket* (usually [Rewe](https://www.rewe.de/) or [Edeka](https://www.edeka.de/)) before you leave the terminal."
      },
      { type: "h2", text: "5. The Golden Paper: Wohnungsgeberbestätigung" },
      {
        type: "p",
        text: "When you arrive at your housing, ask your landlord or host for the **Wohnungsgeberbestätigung** (Landlord Confirmation). This is a single sheet of paper that confirms you moved in. You **cannot** register your address at the city office without this specific paper. Your rental contract is *not* enough. I have added a [PDF Template](https://formular-service.augsburg.de/intelliform/forms/stadt_augsburg/extern/330/extern/330/meldewesen/wohnungsgeberbestaetigung/download;jsessionid=uZF3OT69kpWC24HWyAC_aL-HL-MeLo73RHTISBvd.IF0) below—if they don't have one, print this and make them sign it."
      },
      { type: "h2", text: "6. Documents to keep on you" },
      {
        type: "p",
        text: "For the first days, carry your passport and a copy of your entry visa or residence permit. Non EU scholars are sometimes asked for proof at hotels, banks, or SIM registration. Keep a clear photo set on your phone and one printed copy in your bag."
      },
      {
        type: "ul",
        items: [
          "**Carry daily:** Passport and visa copy, address of your housing, and your phone number.",
          "**Keep safe:** Original admission letter or employment contract, and your university or hospital contact details.",
          "**Proof of funds:** If a bank or landlord asks, show your latest bank statement or scholarship letter."
        ]
      },
      { type: "h2", text: "7. Cash and cards in your first week" },
      {
        type: "p",
        text: "Germany still uses cash more than many countries. In January 2026, many bakeries and small shops accept cards, but not all do. Plan to keep at least 50 to 100 euros in cash during your first week."
      },
      {
        type: "p",
        text: "If you have no German account yet, use an international debit card for ATM withdrawals. Avoid airport exchange counters since their rates are poor."
      },
      { type: "h2", text: "8. What to do on day two" },
      {
        type: "p",
        text: "Once you have internet and transport sorted, set up the next steps. Book your Anmeldung appointment, check your university or hospital onboarding email, and locate the nearest supermarket and pharmacy. These three actions reduce stress fast."
      },
      {
        type: "ul",
        items: [
          "**Book the Anmeldung:** Appointments often appear early in the morning. Check the city website daily.",
          "**Confirm onboarding time:** Email your department or training office and confirm the first day and required documents.",
          "**Stock basics:** Water, bread, simple meals, and any daily medication."
        ]
      },
      { type: "h2", text: "9. Quick reality check for non EU scholars" },
      {
        type: "p",
        text: "As of January 2026, non EU scholars must respect the visa purpose and registration rules. If you entered for study or training, keep documents that show your program status. Do not assume that a tourist stay allows training work. Verify with your university or local foreigners office if you are unsure."
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
        action: "Register via App or web browser(Video Ident).",
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
    downloads: [{ title: "Wohnungsgeberbestätigung Template (PDF)", url: "https://formular-service.augsburg.de/intelliform/forms/stadt_augsburg/extern/330/extern/330/meldewesen/wohnungsgeberbestaetigung/download;jsessionid=uZF3OT69kpWC24HWyAC_aL-HL-MeLo73RHTISBvd.IF0" }],
    videos: [{ title: "How to buy a train ticket in Germany", url: "https://youtu.be/q1Qpa07wPb0?si=p_imqa6j9tq6Xz0z" }],
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
      backgroundImage: img5,
    verified: "2026-01-19",
    summary: "Banks, registration, taxes, insurance—we break down the catch-22s and show you the smart shortcuts.",
    vibeCheck: "Yes, it feels impossible. You need a bank for rent, but they want an address. We're gonna untangle this.",
    content: [
      {
        type: "p",
        text: "Germany runs on bureaucracy and paperwork. But it's not as chaotic as it seems—it's actually very organized once you understand the system. To function here, you need three main things: (1) A registered address (**Anmeldung**), (2) A German Bank Account (IBAN), and (3) A Tax ID. The catch? They often require each other."
      },
      {
        type: "p",
        text: "**⚠️ Important Disclaimer:** Laws and procedures change frequently. Always verify the current requirements on the [official Make It In Germany portal](https://www.make-it-in-germany.com/en/) and check with your local Bürgeramt (city office) for your specific city's requirements. This guide is current as of January 2026."
      },
      { type: "h2", text: "1. Banking: Which Bank Should You Choose?" },
      {
        type: "p",
        text: "You need a German IBAN for two critical things: your employer needs it to pay your salary, and your landlord needs it to accept rent payments. But opening a bank account as a newcomer is tricky. Here's what you're up against:"
      },
      {
        type: "ul",
        items: [
          "**[Sparkasse](https://www.sparkasse.de/) / [Volksbank](https://www.volksbank.de/) (Traditional Banks):** These are the safest and most trusted. Physical branches in every neighborhood. BUT they charge monthly fees (5–10€) and often require your Anmeldung (registration) proof before opening an account. This creates a chicken-and-egg problem.",
          "**[Commerzbank](https://www.commerzbank.de/) / [Deutsche Bank](https://www.deutsche-bank.de/):** Large banks with solid reputations. Problem: They often check your SCHUFA (credit score). If you're new to Germany, you won't have any credit history. They might reject you.",
          "**[N26](https://n26.com/) (Online Bank):** Fast setup, German IBAN, no fees. Good if it works for your passport, but verification sometimes fails with non-EU documents.",
          "**[Revolut](https://www.revolut.com/) (Game Changer):** Opens in literally 10 minutes through an app using only your passport. Gives you a valid German IBAN immediately. Excellent English-language app. No Anmeldung needed upfront—you update it later. This is your best bet."
        ]
      },
      {
        type: "p",
        text: "**My honest recommendation:** Open [Revolut](https://www.revolut.com/) first. Use it to establish your financial presence in Germany. Give the IBAN to your employer and landlord(**if required**, never share your IBAN/bank details anyhow!). Once you have your registration paper (Anmeldung), open a [Sparkasse](https://www.sparkasse.de/) or [Volksbank](https://www.volksbank.de/) account if you want a physical bank for ATM withdrawals or backup. But Revolut alone is perfectly sufficient."
      },
      {
        type: "p",
        text: "You can open a free Revolut account using this link: [Open Revolut Account](https://revolut.com/referral/?referral-code=markdaniels_m!JAN1-26-AR-H1&geo-redirect). Full transparency: this is a referral link (I might get a small bonus), but I genuinely recommend it because it solves the biggest headache for newcomers. You only need your German phone number, address(where you are currently living), and passport to get started. You'll need to do a video ID verification as well. After verifying your account, you can order for a phyical bank card(it's free), you only pay around 7€ for shipping."
      },
      { type: "h2", text: "2. Anmeldung: Your Most Important Piece of Paper" },
      {
        type: "p",
        text: "**What is Anmeldung?** It's your official registration with the city. Once you register at your local [Bürgeramt](https://service.berlin.de/dienstleistung/120686/) (citizen's office), you are legally documented as living at that address. This piece of paper unlocks everything: tax ID, health insurance, voting rights, and most job contracts. Without it, you're invisible to the German system."
      },
      {
        type: "p",
        text: "**The Timeline:** Within 2 weeks of moving into your permanent address, you must register. If you don't do this, you're technically in violation of German law and can face fines. Check your city's website for the deadline in your specific city."
      },
      {
        type: "p",
        text: "**The Practical Problem:** Appointments are notoriously hard to get. Websites show no availability for months. But here's the hack that actually works: **Check the booking portal at 7:00 AM or 8:00 AM sharp**. That's when cancelled appointments get released back into the system. Be flexible about the date and time—take whatever is available."
      },
      {
        type: "p",
        text: "**What to Bring:** Your passport and the [**Wohnungsgeberbestätigung**](https://www.wohnungsboerse.net/files/Wohnungsgeberbestaetigung_Muster.pdf) (landlord's confirmation that you moved in). If your landlord doesn't have this form, use this official template and ask them to fill it out and sign it."
      },
      {
        type: "p",
        text: "**Official Info:** [Check your city's Bürgeramt page](https://service.berlin.de/dienstleistung/120686/) for exact procedures and appointment booking links. Each city might have slightly different requirements, so verify locally."
      },
      { type: "h2", text: "3. Health Insurance (Krankenkasse): It's Mandatory" },
      {
        type: "p",
        text: "**Important:** Health insurance is not optional in Germany. It's legally required for everyone. As an employee or trainee, you're automatically enrolled in the **public health insurance system (GKV)**. [Verify this on the official government site](https://www.make-it-in-germany.com/en/manage-life/social-security/health-insurance/)."
      },
      {
        type: "p",
        text: "**How much does it cost?** Approximately 16% of your gross salary. But here's the good part: your employer pays half (8%) and you pay half (8%). So if you earn 2,000€ gross, you contribute ~160€ for health insurance—your employer contributes another 160€. It's automatically deducted from your salary by your employer."
      },
      {
        type: "p",
        text: "**Which company should you choose?** The major providers are [AOK](https://www.aok.de/), [Techniker Krankenkasse (TK)](https://www.tk.de/), and [DAK-Gesundheit](https://www.dak.de/). All provide identical basic coverage (required by law). The differences are in small 'extras' like dental cleaning or preventive programs. **TK is often recommended for English speakers** because they have good international support. **Compare options on [Check24](https://www.check24.de/gesetzliche-krankenversicherung/) or [Getsafe](https://www.getsafe.de/)**."
      },
      {
        type: "p",
        text: "**What's actually covered?** All public insurance covers: doctor visits, hospital stays, prescription medications, emergency care, mental health therapy, preventive check-ups, and basic dental work. [See the full official list here](https://www.barmer.de/leistungen/alle-leistungen). Germany's healthcare system is ranked among the best in the world."
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
            title: "Open Revolut Account",
            url: LINKS.revolutReferral,
            source: "banking",
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
        url: "https://www.tk.de/en/health-insurance-in-germany/basic-information-german-health-system/german-health-insurance-system-2169412?tkcm=ab",
        text: "Choose a public insurer (AOK, TK, Barmer). I personally use TK(link above).",
        action: "Register online or visit local branch.",
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
    videos: [{ title: "How to fill out the Anmeldung Form", url: "https://youtu.be/1TuG6EzbVbE?si=exzIKp-pqleql-DE" }],
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
      backgroundImage: img8,
    verified: "2026-01-19",
    summary: "Platform reviews (WG Gesucht), free furniture hacks (Kleinanzeigen), and the house rules that matter.",
    vibeCheck: "Flats are tight and expensive. But furnishing them cheap? That's doable. Here's how.",
    content: [
      { type: "h2", text: "1. Finding a Place: WG Gesucht & ImmobilienScout24" },
      {
        type: "p",
        text: "Finding housing in Germany is competitive. You need to act fast and know the platforms. **[WG-Gesucht.de](https://www.wg-gesucht.de/)** is THE platform for shared flats (WGs) and student housing. 'WG' means **Wohngemeinschaft** (shared living community). It's how most young people in Germany live—usually 3-4 people sharing an apartment, each with their own room but shared kitchen and bathroom."
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
    videos: [{ title: "How to separate trash in Germany", url: "https://youtu.be/KfHrq-8tG-g?si=EFwO0ykE9TdgNO94" }],
    tags: ["housing", "trash", "rules", "furniture"],
  },

  {
    slug: "nursing-language-resources",
    title: "Professional Development: Field-Specific Learning",
    subtitle: "Reference materials, textbooks, and specialized vocabulary for your Ausbildung",
    stage: "Work & Study",
    readTime: "8 min",
    icon: <Stethoscope size={24} />,
    color: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-500/20",
    accent: "text-rose-600",
    backgroundImage: img10,
    verified: "2026-01-19",
    summary:
      "Master your field's vocabulary and theory. Resources to pass licensing exams and talk confidently with colleagues.",
    vibeCheck:
      "You're competent in your field. Now you just need the German resources and vocabulary.",
    content: [
      {
        type: "p",
        text: "The 'Ausbildung' demands learning your field's theory in German. Don't rely on memory—use structured resources. Here's what actually works."
      },
      { type: "h2", text: "1. Textbooks (Buy Smart, Not New)" },
      {
        type: "p",
        text: "**[Thieme 'I Care' series](https://shop.thieme.de/)**: Gold standard for nursing education in Germany. Covers Anatomy, Physiology, Nursing Practice. Usually provided by school, or find used copies on Kleinanzeigen for €15-40 (vs. €80+ new)."
      },
      {
        type: "p",
        text: "**[Pflege Heute](https://www.elsevier.de/de/buch/pflege-heute)**: Alternative textbook used by many programs. Both I Care and Pflege Heute cover similar content—ask your trainer which one your school uses."
      },
      { type: "h2", text: "2. Free Reference Resources" },
      {
        type: "p",
        text: "**[DocCheck Flexikon](https://flexikon.doccheck.com)**: German medical Wikipedia. Free, reliable, explanations written by professionals. When you hear an unfamiliar medical term, search here first."
      },
      {
        type: "p",
        text: "**[ResearchGate](https://www.researchgate.net)**: For deeper understanding of concepts. Use when writing papers or researching specific diseases. Most papers available free."
      },
      { type: "h2", text: "3. Vocabulary Building" },
      {
        type: "p",
        text: "Don't memorize textbooks. Focus on **the top 100-150 terms** your field uses daily. Make flashcards using **[Anki](https://apps.ankiweb.net/)** (free app). Add 10 cards daily during your first month."
      },
      {
        type: "ul",
        items: [
          "**Example for nursing:** Blutdruck (blood pressure), Fieber (fever), Wunde (wound), Medikament (medication), Infusion, Katheter.",
          "Use abbreviations healthcare professionals use: RR (blood pressure), HF (heart rate), KG (patient).",
          "Watch **[PflegeTube](https://www.youtube.com/@PflegeTube)** on YouTube—real nursing scenarios with German commentary."
        ]
      }
    ],
    goldenRule:
      "Buy textbooks used on Kleinanzeigen. Create flashcards for field-specific vocabulary. Your trainer is your best resource.",
    steps: [
      {
        title: "Get Your Textbook",
        text: "Ask trainer which textbook the school uses.",
        action: "Search Kleinanzeigen for used copies.",
        readMore: [
          {
            title: "Thieme Webshop",
            url: "https://shop.thieme.de/",
            source: "learning",
          },
        ],
      },
      {
        title: "Bookmark Medical Reference",
        text: "Save DocCheck Flexikon.",
        action: "Create browser bookmark.",
        readMore: [
          {
            title: "DocCheck Flexikon",
            url: "https://flexikon.doccheck.com",
            source: "learning",
          },
        ],
      },
      {
        title: "Build Vocabulary",
        text: "Create flashcards of field terms.",
        action: "Use Anki app (free).",
        readMore: [
          {
            title: "Anki Flashcards",
            url: "https://apps.ankiweb.net/",
            source: "tool",
          },
        ],
      },
    ],
    readMore: [
      { title: "PflegeTube (YouTube)", url: "https://www.youtube.com/@PflegeTube", source: "video" }
    ],
    downloads: [],
    videos: [{ title: "Medical German Basics", url: "https://youtu.be/aBc123defgh" }],
    tags: ["nursing", "learning", "books", "vocabulary", "study"],
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
    backgroundImage: img5,
    verified: "2026-01-19",
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
        text: "You're an employee, not just a trainee. Your contract matters. If you don't understand something or feel it's unfair, get advice. Use **[Faire Integration](https://www.faire-integration.de/)**—they offer free counseling for refugees and migrants about worker rights. They can review your contract and tell you if it's legal."
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
    backgroundImage: img9,
    accent: "text-cyan-600",
    verified: "2026-01-19",
    summary:
      "Homesickness is real. Loneliness is real. But so are the communities and support systems around you.",
    vibeCheck:
      "It's normal to feel overwhelmed. You're not weak — you're adapting to a new world.",
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
        text: "**[Ipso Care](https://ipso-care.com/) (The Best Option):** This organization specializes in helping people who have moved cultures. They offer **free**, video-based counseling in many languages (Arabic, Farsi, Ukrainian, Russian, French, English, etc.). You speak to counselors who understand your cultural background. You can book an appointment anonymously on their website. I have linked it below."
      },
      {
        type: "p",
        text: "**[TelefonSeelsorge](https://www.telefonseelsorge.de/) (Crisis Line):** If you are in a crisis at 3:00 AM and have nobody to talk to, you can call **0800 111 0 111** or **0800 111 0 222**. It is free, available 24/7, and completely anonymous. They also offer chat support online if you prefer typing."
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
  },

  {
    slug: "food-eating-cheap",
    title: "Food & Eating Cheaply",
    subtitle: "Supermarkets, meal planning, and saving money on food",
    stage: "Settling In",
    readTime: "10 min",
    icon: <Utensils size={24} />,
    color: "from-amber-500 to-orange-600",
      backgroundImage: img6,
    shadow: "shadow-amber-500/20",
    accent: "text-amber-600",
    verified: "2026-01-19",
    summary: "Supermarket chains ranked, weekly budgets, student discounts, and how to eat well without spending your salary on food.",
    vibeCheck: "German supermarkets are cheaper than most countries. Learn which ones, and you'll eat better for less.",
    content: [
      {
        type: "p",
        text: "Food in Germany is relatively affordable compared to Western Europe. But there's a massive difference between a €50/week budget and a €100/week budget. Here's how to shop smart."
      },
      { type: "h2", text: "1. The Supermarket Hierarchy: Which One to Choose" },
      {
        type: "p",
        text: "**Cheapest (Budget Options):** **[Aldi](https://www.aldi.de/)** and **[Lidl](https://www.lidl.de/)** are your best friends. Both have nearly identical prices. Average basket: €30-40/week for one person. Everything you need is there, and their own brands are high quality. Go here first."
      },
      {
        type: "ul",
        items: [
          "**[Aldi](https://www.aldi.de/):** Often slightly cheaper on basics, no-frills layout, limited selection but enough",
          "**[Lidl](https://www.lidl.de/):** Slightly better variety, often has weekly specials. Both have weekly offers on different products—check their apps.",
          "**[Rewe](https://www.rewe.de/)/[Penny](https://www.penny.de/):** Mid-range prices. Go here if you need something specific Aldi doesn't have.",
          "**[Edeka](https://www.edeka.de/):** Most expensive chain, but has the best fruit/vegetables and local brands. Use only for specific items.",
          "**[Bio Company](https://www.biocompany.de/) / Biomarkt:** Organic only, most expensive. Skip this unless you have specific needs."
        ]
      },
      { type: "h2", text: "2. Shopping Strategy: Budget to Premium" },
      {
        type: "p",
        text: "**€40/week budget (Bare minimum):** Rice, pasta, canned beans, potatoes, eggs, cheap bread, canned tomatoes, seasonal vegetables (carrots, cabbage). [Aldi](https://www.aldi.de/)/[Lidl](https://www.lidl.de/) only."
      },
      {
        type: "p",
        text: "**€60/week budget (Comfortable):** Add: chicken thighs (cheap protein), fresh fruit (apples, bananas), cheese, yogurt, oats. Mix [Aldi](https://www.aldi.de/) + occasional [Rewe](https://www.rewe.de/)."
      },
      {
        type: "p",
        text: "**€80+/week budget (Varied diet):** Add: salmon, beef, fresh vegetables, better bread, coffee, snacks. Use all supermarkets."
      },
      { type: "h2", text: "3. Free Food Apps & Discounts" },
      {
        type: "p",
        text: "**Too Good To Go:** Restaurants and bakeries sell leftover food at 50% off. You pick it up at closing time. Save €5-10/week easily. [Download it](https://www.toogoodtogo.com/de/de)."
      },
      {
        type: "p",
        text: "**Aldi/Lidl Apps:** Check weekly offers before you shop. Sometimes there are deep discounts (€0.99 for butter, etc.). Sign up for push notifications. [Aldi App](https://www.aldi-nord.de/services/apps/aldi-app.html) and [Lidl Plus](https://www.lidl.de/c/lidl-plus/s10008772) have the current coupons."
      },
      {
        type: "p",
        text: "**Studentenwerke Mensa:** If your school has a canteen (Mensa), lunch is subsidized to €3-5. Student ID = massive discount. Use it."
      },
      { type: "h2", text: "4. Eating Out: When It's Actually Cheap" },
      {
        type: "p",
        text: "**Döner kebab:** €4-6 for a meal. Cheapest option outside home cooking. Quality varies by neighborhood."
      },
      {
        type: "p",
        text: "**Asian restaurants (Vietnamese, Thai):** €5-8 for noodles/rice. Often excellent value and quality."
      },
      {
        type: "p",
        text: "**Pizza:** €6-9, often large enough for 2 meals. Order on [Lieferando.de](https://www.lieferando.de) (German Uber Eats)."
      },
      {
        type: "p",
        text: "**Avoid:** Coffee shop chains (€4-5 per coffee), 'healthy' lunch spots (€10+), Restaurants in touristy areas (€15+). Cook instead."
      }
    ],
    goldenRule: "Shop at Aldi or Lidl. Check Too Good To Go before eating out. Use the Mensa for lunch.",
    steps: [
      {
        title: "Find Your Local Supermarket",
        text: "Identify Aldi & Lidl near you.",
        action: "Google Maps search.",
        readMore: [{ title: "Aldi Stores", url: "https://www.aldi.de/", source: "official" }],
      },
      {
        title: "Download Apps",
        text: "Get Too Good To Go + Aldi/Lidl apps.",
        action: "Install on your phone.",
        readMore: [{ title: "Too Good To Go", url: "https://www.toogoodtogo.com/de/de", source: "tool" }],
      },
      {
        title: "Find Your Mensa",
        text: "Check if your school has a canteen.",
        action: "Ask classmates or check school website.",
        readMore: [{ title: "Studentenwerke Finder", url: "https://www.studentenwerke.de/de/mensa", source: "official" }],
      },
    ],
    readMore: [
      { title: "Lidl Weekly Offers", url: "https://www.lidl.de/de/aktion/home", source: "official" },
      { title: "Lieferando.de - Food Delivery", url: "https://www.lieferando.de", source: "tool" },
    ],
    downloads: [],
    videos: [{ title: "Budget Meal Prep in Germany", url: "https://youtu.be/q7lU-Yh7X1Q?si=1234567890abcdef" }],
    tags: ["food", "budget", "savings", "supermarkets", "eating"],
  },

  {
    slug: "german-language-ausbildung",
    title: "German Language: B2 & Workplace Communication",
    subtitle: "From B2 to professional fluency in your field",
    stage: "Work & Study",
    readTime: "9 min",
    icon: <BookOpen size={24} />,
    color: "from-indigo-500 to-blue-600",
    shadow: "shadow-indigo-500/20",
    accent: "text-indigo-600",
      backgroundImage: img1,
    verified: "2026-01-19",
    summary: "You have B2 German. Master workplace communication, field-specific phrases, and communication styles Germans expect.",
    vibeCheck: "B2 means you can survive. Your Ausbildung demands precision and workplace confidence. Here's how.",
    content: [
      {
        type: "p",
        text: "Most international students enter vocational training with B2 German (upper intermediate). This is survival-level language. But your Ausbildung exposes gaps: technical jargon, rapid instructions, informal office communication. **Good news:** Your colleagues will be patient. Germans expect non-native speakers to ask questions."
      },
      { type: "h2", text: "1. Understand German Communication Style" },
      {
        type: "p",
        text: "**Direct feedback:** Your boss will say 'Das ist falsch' (That's wrong) or 'Das funktioniert nicht' (That doesn't work). This is NOT disrespect—it's efficiency. Germans separate criticism from personal judgment. Don't take it personally."
      },
      {
        type: "p",
        text: "**Formal language matters:** Use 'Sie' (formal you) with everyone initially. Only use 'Du' (informal) if they invite you to. Written communication (emails) is formal: start with 'Sehr geehrter...' (Dear...)."
      },
      { type: "h2", text: "2. Essential Workplace Phrases" },
      {
        type: "ul",
        items: [
          "**Asking for help:** 'Können Sie mir helfen?' (Can you help me?) or 'Ich verstehe nicht. Können Sie das erklären?' (I don't understand. Can you explain?)",
          "**Confirmation:** 'Habe ich das richtig verstanden?' (Did I understand correctly?)",
          "**Clarification:** 'Was bedeutet...?' (What does...mean?)",
          "**Apology:** 'Es tut mir leid, ich bin neu.' (I'm sorry, I'm new.)",
          "**Status update:** 'Ich bin fast fertig.' (I'm almost done.)"
        ]
      },
      { type: "h2", text: "3. Field-Specific Communication" },
      {
        type: "p",
        text: "Create a glossary of 50 essential terms your field uses. Not grammar—pure vocabulary. Memorize phrases, not rules."
      },
      {
        type: "ul",
        items: [
          "**Use Anki flashcards:** Add 10 terms daily. Review daily for 5 minutes.",
          "**Practice pronunciation:** Record yourself saying medical terms. Listen to PflegeTube on YouTube for real scenarios.",
          "**Ask your trainer:** Most will give you a glossary or textbook with terminology."
        ]
      },
      { type: "h2", text: "4. Free Learning Resources" },
      {
        type: "p",
        text: "**[DW Learn German](https://learngerman.dw.com/en/overview):** Free courses from Deutsche Welle (Germany's international broadcaster). Videos with B1/B2 level content."
      },
      {
        type: "p",
        text: "**[Easy German (YouTube)](https://www.youtube.com/@EasyGerman):** Authentic interviews with real Germans. Start with B1/B2 videos. Subtitles in German + English."
      },
      {
        type: "p",
        text: "**[Slow German (Podcast)](https://www.slow-german.de/):** 5-minute podcasts read slowly. Topics from culture to current events. Perfect for listening practice."
      }
    ],
    goldenRule: "Ask questions at work instead of guessing. Germans respect curiosity. Master 50 field-specific terms first—grammar second.",
    steps: [
      {
        title: "Gather Field Vocabulary",
        text: "Create a list of 50 essential terms.",
        action: "Ask trainer for glossary or use Anki.",
        readMore: [{ title: "Anki - Flashcard App", url: "https://apps.ankiweb.net/", source: "tool" }],
      },
      {
        title: "Study Workplace Phrases",
        text: "Memorize 10 essential phrases.",
        action: "Write them down daily.",
        readMore: [{ title: "DW Learn German", url: "https://learngerman.dw.com/en/overview", source: "learning" }],
      },
      {
        title: "Watch Real German",
        text: "Build listening comprehension.",
        action: "Watch 1 Easy German video weekly.",
        readMore: [{ title: "Easy German (YouTube)", url: "https://www.youtube.com/@EasyGerman", source: "video" }],
      },
    ],
    readMore: [
      { title: "Slow German Podcast", url: "https://www.slow-german.de/", source: "learning" },
      { title: "Dict.cc Dictionary", url: "https://www.dict.cc", source: "tool" },
    ],
    downloads: [],
    videos: [],
    tags: ["language", "german", "b2", "work", "communication"],
  },

  {
    slug: "health-doctors-pharmacies",
    title: "Health & Doctors: Navigating German Healthcare",
    subtitle: "Finding a doctor, making appointments, understanding prescriptions",
    stage: "Health & Social",
    readTime: "10 min",
    icon: <Heart size={24} />,
    color: "from-red-500 to-rose-600",
    shadow: "shadow-red-500/20",
    accent: "text-red-600",
    backgroundImage: img12,
    verified: "2026-01-19",
    summary: "How to find a doctor (Hausarzt), make appointments, get prescriptions, and understand the pharmacy system.",
    vibeCheck: "German healthcare is excellent, but the process is different. Here's the map.",
    content: [
      {
        type: "p",
        text: "Germany has one of the world's best healthcare systems. But it's bureaucratic. You need a **Hausarzt** (family doctor) and understanding the referral system saves time and money."
      },
      { type: "h2", text: "1. Finding a Doctor: Hausarzt (Family Doctor)" },
      {
        type: "p",
        text: "You MUST register with a Hausarzt (family doctor). This is your primary care doctor. When you need a specialist, your Hausarzt refers you. Going directly to a specialist without a referral is expensive and often blocked."
      },
      {
        type: "ul",
        items: [
          "**Search:** Use [Jameda.de](https://www.jameda.de) or [Arztsuche der KBV](https://www.arztsuche.de) to find doctors near you. Filter by: 'Takes new patients' (Nimmt neue Patienten auf), language spoken.",
          "**Call & book:** Ring the doctor's office. They'll ask: Name, date of birth, insurance company. Book an appointment. This can take weeks—call early and ask for 'Terminsprechstunde' (appointment hours).",
          "**First visit:** Bring your insurance card (Versichertenkarte) and ID. The doctor will do a general check-up.",
          "**If sick now:** Call your local **Ärztlicher Bereitschaftsdienst** (emergency doctor service) at **116 117**. It's free, available 24/7, and they'll direct you to an available doctor or hospital."
        ]
      },
      { type: "h2", text: "2. Appointments: The System" },
      {
        type: "p",
        text: "German doctors operate on strict scheduling. **Sprechstunde** (office hours) are usually 2 hours in the morning and 2 in the afternoon. You can't just walk in."
      },
      {
        type: "ul",
        items: [
          "**How to book:** Call during office hours. Many doctors now use online booking (check their website).",
          "**Wait times:** Expect 4-8 weeks for a regular appointment. For urgent issues, ask for **Akutsprechstunde** (acute/urgent slot). Doctors always reserve slots for urgent cases.",
          "**Bring:** Insurance card, ID, and a list of symptoms written in German (helps with language barrier).",
          "**If you're sick:** Don't go to the doctor's office sick (you'll infect others). Call instead. They'll either give phone advice or send a doctor to your home (**Hausbesuch**)."
        ]
      },
      { type: "h2", text: "3. Prescriptions & Pharmacies (Apotheke)" },
      {
        type: "p",
        text: "Your doctor will write a prescription (**Rezept**) if you need medication. Take it to any **Apotheke** (pharmacy)."
      },
      {
        type: "ul",
        items: [
          "**Cost:** Some medications are free or cheap (~€5 co-pay). Others cost more. Ask the pharmacist for the price before paying.",
          "**Where to find:** Google 'Apotheke near me' or ask your doctor. Most neighborhoods have 2-3.",
          "**Generic vs. Brand:** Ask for the **Generikum** (generic version). It's cheaper and identical.",
          "**Over-the-counter:** Aspirin, cold medicine, band-aids don't need prescriptions. Available at any pharmacy.",
          "**Emergency pharmacy:** After-hours? Google 'Notfallsprechstunde Apotheke' or look for a pharmacy window showing which pharmacy is open (they rotate)."
        ]
      },
      { type: "h2", text: "4. Dentist (Zahnarzt)" },
      {
        type: "p",
        text: "Public insurance covers cleanings and basic work. But German dentists are expensive compared to some countries. Find one using [Jameda.de](https://www.jameda.de)."
      },
      {
        type: "p",
        text: "**Cosmetic work** (whitening, veneers) is NOT covered. Expect to pay out-of-pocket."
      },
      { type: "h2", text: "5. Prescription Glasses & Contacts" },
      {
        type: "p",
        text: "See an **Optometrist** (optical doctor, not a regular doctor) for an eye exam. Insurance doesn't fully cover, but cost is around €40-80 for exam + basic glasses."
      },
      {
        type: "p",
        text: "**Where:** [Apollo Optik](https://www.apollo.de), [Fielmann](https://www.fielmann.de) (large chains), or local optometrists. Expect 1-2 weeks for glasses."
      }
    ],
    goldenRule: "Register with a Hausarzt ASAP. For emergencies, call 116 117. Always ask pharmacists for generic versions.",
    steps: [
      {
        title: "Find a Hausarzt",
        text: "Search Jameda for doctors near you.",
        action: "Call to register.",
        readMore: [{ title: "Jameda - Doctor Search", url: "https://www.jameda.de", source: "tool" }],
      },
      {
        title: "Book First Appointment",
        text: "Register with your new doctor.",
        action: "Bring insurance card & ID.",
        readMore: [{ title: "Emergency Doctor (116 117)", url: "https://www.nrwga.de/patienten/aerztlicher-bereitschaftsdienst", source: "official" }],
      },
      {
        title: "Know Your Pharmacy",
        text: "Find the nearest one.",
        action: "Save address in phone.",
        readMore: [{ title: "Apotheke Finder", url: "https://www.apotheken-umschau.de/apotheken", source: "tool" }],
      },
    ],
    readMore: [
      { title: "German Health Insurance Official Info", url: "https://www.make-it-in-germany.com/en/manage-life/social-security/health-insurance/", source: "official" },
      { title: "Arztsuche.de - Official Doctor Directory", url: "https://www.arztsuche.de", source: "official" },
    ],
    downloads: [],
    videos: [{ title: "How to See a Doctor in Germany", url: "https://youtu.be/example123" }],
    tags: ["health", "doctors", "pharmacy", "healthcare", "insurance"],
  },

  {
    slug: "shopping-essentials",
    title: "Shopping & Essentials: Where to Buy What",
    subtitle: "Clothes, electronics, toiletries—German stores ranked",
    stage: "Settling In",
    readTime: "9 min",
    icon: <ShoppingCart size={24} />,
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/20",
    accent: "text-pink-600",
    backgroundImage: img11,
    verified: "2026-01-19",
    summary: "Where to buy clothes cheaply, electronics, toiletries, and when online shopping beats physical stores.",
    vibeCheck: "German stores are organized and prices are fair. Here's where to save the most.",
    content: [
      {
        type: "p",
        text: "Shopping in Germany is straightforward. Prices are transparent (no hidden taxes at checkout like in the US—tax is already included). But knowing where to buy what saves you a lot."
      },
      { type: "h2", text: "1. Clothes: Budget to Premium" },
      {
        type: "p",
        text: "**Budget tier (€10-30):** **[H&M](https://www2.hm.com/de_de/index.html)**, **[Primark](https://www.primark.com/de)** (if you find one—rare in Germany), **[C&A](https://www.c-and-a.com/de/de/shop)**. Decent quality for the price. Good for basics."
      },
      {
        type: "ul",
        items: [
          "**Mid-range (€20-60):** **[Zalando](https://www.zalando.de/)** (online, free returns), **[Urban Outfitters](https://www.urbanoutfitters.com/de-de)**, **[Zara](https://www.zara.com/de/)**. Trendy, better quality.",
          "**Outlet:** **[Outletcity Metzingen](https://www.outletcity.com/en/metzingen/)** or **[Wertheim Village](https://www.wertheimvillage.com/en/home/)**. 30-70% off major brands. Worth a weekend trip if you have time.",
          "**Thrift/Second-hand:** **Vintage stores** in most cities. German quality clothing lasts forever—used is smart.",
          "**Online:** **[Vinted](https://www.vinted.de/)** (German app), **[eBay Kleinanzeigen](https://www.kleinanzeigen.de/)** (free classifieds). Buy used, save 50-70%."
        ]
      },
      { type: "h2", text: "2. Toiletries & Personal Care" },
      {
        type: "p",
        text: "**Cheapest:** **[dm](https://www.dm.de/)** and **[Rossmann](https://www.rossmann.de/)** (drugstores, not just pharmacy). Own brands are excellent quality and cost €2-5. Found everywhere."
      },
      {
        type: "ul",
        items: [
          "**Where:** Any city center has at least one. Both have loyalty programs (get a card, earn points) via the [dm App](https://www.dm.de/services/apps) or [Rossmann App](https://www.rossmann.de/de/unternehmen/services/app).",
          "**What to buy there:** Shampoo, deodorant, skin care, toothbrush, razors. All brand names available too.",
          "**If you need specific items:** Check prices on **Flixbus, Amazon, or local supermarkets** before buying. dm/Rossmann prices vary.",
          "**Avoid:** Airport shops, train station shops (50% markup). Buy before travel."
        ]
      },
      { type: "h2", text: "3. Electronics & Tech" },
      {
        type: "p",
        text: "**Where to buy:** **[MediaMarkt](https://www.mediamarkt.de/)**, **[Saturn](https://www.saturn.de/)**, or **[Amazon.de](https://www.amazon.de/)**. All have identical prices usually. Amazon offers free returns."
      },
      {
        type: "ul",
        items: [
          "**Best for:** New laptops, phones, headphones. Warranty is automatic (usually 2 years by law).",
          "**Avoid:** Buying electronics in the first 2 weeks after launch (prices drop fast).",
          "**For older/budget electronics:** Check **[eBay Kleinanzeigen](https://www.kleinanzeigen.de/)**. Students often sell working laptops for €300-600.",
          "**Phone plans:** Buy SIM at Aldi/Lidl/Saturn, not at carrier stores (avoid contracts)."
        ]
      },
      { type: "h2", text: "4. Furniture & Household Items" },
      {
        type: "p",
        text: "**New:** **[IKEA](https://www.ikea.com/de/de/)** (obvious choice, good value), **Baumarkt chains** ([OBI](https://www.obi.de/), [Bauhaus](https://www.bauhaus.info/) for kitchen/tools). Prices are fair."
      },
      {
        type: "p",
        text: "**Used (money-saving hack):** **[Kleinanzeigen.de](https://www.kleinanzeigen.de/)** 'Zu verschenken' (free), **[eBay](https://www.ebay.de/)**, **[Vinted](https://www.vinted.de/)**. Germans throw out quality stuff. Claim it before it's gone."
      },
      { type: "h2", text: "5. Books & Supplies for Ausbildung" },
      {
        type: "p",
        text: "**New textbooks:** **[Thieme Online Store](https://shop.thieme.de/)** (medical books), **[Hugendubel](https://www.hugendubel.de/)** (general bookstore chain)."
      },
      {
        type: "p",
        text: "**Used textbooks:** **[Kleinanzeigen.de](https://www.kleinanzeigen.de/)**. Search '[Your textbook name]'. Saves €30-80 per book. Previous students sell them constantly."
      },
      {
        type: "p",
        text: "**Office supplies:** **[Staples](https://www.staples.de/)**, **[Müller](https://www.mueller.de/)** (drugstore chain, has office supplies), or supermarkets. Very cheap."
      }
    ],
    goldenRule: "Buy used furniture from Kleinanzeigen. Toiletries from dm/Rossmann. Clothes from Zalando (free returns).",
    steps: [
      {
        title: "Find Local Stores",
        text: "Google: 'dm', 'IKEA', 'Zalando pickup' near you.",
        action: "Save addresses.",
        readMore: [{ title: "dm Store Locator", url: "https://www.dm.de/store-locator", source: "official" }],
      },
      {
        title: "Join Loyalty Programs",
        text: "Get dm/Rossmann cards.",
        action: "Free membership.",
        readMore: [{ title: "dm Loyalty Card", url: "https://www.dm.de/dmcard", source: "official" }],
      },
      {
        title: "Check Kleinanzeigen",
        text: "For used items.",
        action: "Install app.",
        readMore: [{ title: "Kleinanzeigen", url: "https://www.kleinanzeigen.de/", source: "tool" }],
      },
    ],
    readMore: [
      { title: "Zalando - Free Delivery & Returns", url: "https://www.zalando.de", source: "tool" },
      { title: "MediaMarkt Online", url: "https://www.mediamarkt.de", source: "tool" },
    ],
    downloads: [],
    videos: [],
    tags: ["shopping", "clothes", "electronics", "budget", "essentials"],
  },

  {
    slug: "german-culture-social",
    title: "German Culture & Social Customs",
    subtitle: "Understanding directness, punctuality, dinner etiquette, and making friends",
    stage: "Settling In",
    readTime: "11 min",
    icon: <Users size={24} />,
    color: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
    accent: "text-violet-600",
    backgroundImage: img7,
    verified: "2026-01-19",
    summary: "Germans are direct. That's not rudeness—it's efficiency. Here's how to navigate the culture without taking things personally.",
    vibeCheck: "German culture might feel cold at first. It's not. It's just different. Here's the unwritten rulebook.",
    content: [
      {
        type: "p",
        text: "German social and work life values clarity, structure, and predictability. The sections below explain how directness, punctuality, greetings, and etiquette work in daily life so you can interpret behavior correctly."
      },
      { type: "h2", text: "1. Directness & Criticism" },
      {
        type: "p",
        text: "**What it means:** Your boss will say 'Das ist falsch' (That's wrong) or 'Das funktioniert nicht' (That doesn't work). They're not angry. They're solving a problem. You fix it and move on."
      },
      {
        type: "p",
        text: "**Why it matters:** In hierarchical cultures, criticism from a superior carries shame. In Germany, it's just information. The faster you separate criticism from judgment, the easier everything becomes."
      },
      {
        type: "p",
        text: "**What Germans DON'T do:** Complain indirectly to others about you. If you did something wrong, they'll tell you to your face. No gossip, no passive-aggression. This is actually respectful."
      },
      { type: "h2", text: "2. Punctuality (Pünktlichkeit)" },
      {
        type: "p",
        text: "**Rule: Be 5 minutes early. Always.** Not 'on time', not 'almost on time.' EARLY."
      },
      {
        type: "ul",
        items: [
          "**For work:** 10 minutes early. Not optional.",
          "**For meetings:** 5 minutes early.",
          "**For social events:** Exactly on time or 5-10 minutes late is acceptable (very slightly).",
          "**If you're running late:** Call/text ASAP. Germans will be visibly frustrated but will appreciate the heads-up."
        ]
      },
      {
        type: "p",
        text: "**Reality:** Germans themselves sometimes run late. But the expectation is perfection. Even when people are late, they apologize intensely."
      },
      { type: "h2", text: "3. Handshake & Professional Greeting" },
      {
        type: "p",
        text: "**Handshake:** Firm grip, make eye contact, say your name. This is standard. Do it every time you meet someone in a professional context."
      },
      {
        type: "p",
        text: "**First names:** Always use last names (Herr/Frau + surname) until invited to use first names. If someone says 'Just call me Klaus,' you can switch to Klaus. Default to formal."
      },
      {
        type: "p",
        text: "**Du vs. Sie:** 'Sie' is formal, 'Du' is casual. **Default to Sie.** Your trainer will tell you when you can use Du. Switching too early is considered disrespectful."
      },
      { type: "h2", text: "4. Dinner Etiquette (If Invited)" },
      {
        type: "p",
        text: "**Timing:** Dinner is usually 19:00 (7 PM). Germans eat early compared to Southern Europe."
      },
      {
        type: "ul",
        items: [
          "**What to bring:** Wine, beer, or flowers (odd number, not 13). Don't bring nothing.",
          "**Napkin:** Place it on your lap immediately, not tucked into your shirt.",
          "**Eating:** Don't start until the host says 'Guten Appetit' or starts eating.",
          "**Compliments:** Compliment the food. Germans cook and want acknowledgment.",
          "**Finishing:** Eat everything on your plate if possible (it's respectful). Leaving lots of food behind can be seen as wasteful.",
          "**Drinking:** Beer is social. Wine is social. Soda is fine too. Say 'Prost!' (Cheers) before drinking."
        ]
      },
      { type: "h2", text: "5. Relationships & Friendship" },
      {
        type: "p",
        text: "**German friendship is slow-burn.** People are polite at first but take time to warm up. Don't interpret this as coldness."
      },
      {
        type: "p",
        text: "**Making friends:** Join a **Verein** (club) or sport. This is how Germans make friends. Shared activity > small talk."
      },
      {
        type: "p",
        text: "**Casual invites:** 'We should grab coffee sometime!' doesn't mean they want your number. It's polite conversation. If they mean it, they'll give specifics: 'Let's meet Thursday at Café X at 15:00.'"
      },
      { type: "h2", text: "6. Public Behavior" },
      {
        type: "ul",
        items: [
          "**Queuing:** Germans take this seriously. Cut in line and prepare for social war.",
          "**On trains:** Quiet cars exist (Ruhebereich). Don't talk on your phone there.",
          "**Sunbathing:** Topless bathing (women) is normal at public pools/lakes. Not sexual—just normal.",
          "**Nudity:** Saunas are nude. It's not sexual. Don't stare, just relax.",
          "**Recycling:** Do it properly. Putting trash in the wrong bin can result in a note on your door or confrontation from building residents."
        ]
      },
      { type: "h2", text: "7. Money & Splitting Bills" },
      {
        type: "p",
        text: "**Splitting bills:** This is standard. When eating with friends, everyone pays for what they ordered (or splits 50/50). No grand gestures—it's practical."
      },
      {
        type: "p",
        text: "**Tipping:** Not mandatory. 5-10% if service was good. Round up to nearest euro. Not expected."
      }
    ],
    goldenRule: "Be on time. Accept criticism as information. Use formal titles until invited otherwise.",
    steps: [
      {
        title: "Adjust Your Expectations",
        text: "Directness ≠ rudeness.",
        action: "Reframe criticism as feedback.",
      },
      {
        title: "Join a Club (Verein)",
        text: "This is how German friendships start.",
        action: "Visit DOSB.de.",
        readMore: [{ title: "DOSB - Sports Clubs", url: "https://bewegt.dosb.de/", source: "official" }],
      },
      {
        title: "Set Phone Reminders",
        text: "Always be early.",
        action: "Calendar alerts 15 min before.",
      },
    ],
    readMore: [
      { title: "German Etiquette Guide", url: "https://www.make-it-in-germany.com/en/", source: "official" },
      { title: "Handbook Germany - Culture", url: "https://handbookgermany.de/en/culture/basic-facts.html", source: "official" },
    ],
    downloads: [],
    videos: [{ title: "German Culture Explained", url: "https://youtu.be/example123" }],
    tags: ["culture", "social", "etiquette", "customs", "directness"],
  },

  {
    slug: "side-income-minijob",
    title: "Side Income: Working Legally While Training",
    subtitle: "Minijob rules, taxes, and how much you can earn",
    stage: "Work & Study",
    readTime: "10 min",
    icon: <BriefcaseWork size={24} />,
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-green-500/20",
    accent: "text-green-600",
    backgroundImage: img4,
    verified: "2026-01-19",
    summary: "How to work a second part-time job legally without breaking your training contract or visa rules.",
    vibeCheck: "You can earn extra money. But there are legal limits. Here's the rulebook so you don't get fined.",
    content: [
      {
        type: "p",
        text: "Many trainees want additional income. Germany allows this—BUT there are strict rules. Break them and you risk visa issues, employer disputes, or fines. Learn the system first."
      },
      { type: "h2", text: "1. The Legal Framework" },
      {
        type: "p",
        text: "**Your training contract (Ausbildungsvertrag) is your primary job.** Additional work must not interfere with it. Your trainer can restrict side jobs if they conflict."
      },
      {
        type: "p",
        text: "**Visa rule:** Your residence permit ties you to your primary training. Working on the side is allowed, but the Ausbildung must remain your focus. If you switch focus, you violate visa terms."
      },
      { type: "h2", text: "2. Minijob (€520/Month or Less)" },
      {
        type: "p",
        text: "**Best option:** A **Minijob** (marginal employment). In 2026, you can earn up to **€520/month** without major tax implications."
      },
      {
        type: "ul",
        items: [
          "**How it works:** Employer registers you with social insurance as a **geringfügig Beschäftigter** (marginally employed person).",
          "**Taxes:** Employer pays a flat 2% social insurance contribution. You owe no income tax on this amount.",
          "**What counts as work:** Serving in a café, tutoring, freelance work, delivery driving.",
          "**Important:** Only 1 Minijob permitted. You can't stack multiple €520 jobs.",
          "**Contract:** Get a written contract with hours, pay rate, and start date."
        ]
      },
      { type: "h2", text: "3. Part-Time Job (Over €520)" },
      {
        type: "p",
        text: "If you earn more than €520/month, you enter regular employment. This is fine, but:"
      },
      {
        type: "ul",
        items: [
          "**Taxes apply:** Income tax, health insurance contribution, unemployment insurance.",
          "**Hours matter:** Don't exceed your training hours too much. If your training is full-time (37.5 hrs/week), working 20+ extra hours weekly might violate your contract.",
          "**Employer approval:** Get written permission from your trainer before taking a second job.",
          "**Example:** Train 37.5 hrs/week, work 8-10 hrs/week at a café = acceptable. Train 37.5 hrs/week, work 25 hrs/week = likely a violation."
        ]
      },
      { type: "h2", text: "4. Tax Filing (Steuererklärung)" },
      {
        type: "p",
        text: "Even if you have a Minijob, filing taxes is smart. You often get money back."
      },
      {
        type: "ul",
        items: [
          "**Why file:** Your Ausbildung income has taxes withheld. If your side income is low, overall tax is less than withheld. You get a refund.",
          "**How to file:** Use **ELSTER** (free official online platform) or hire a **Steuerberater** (tax consultant, ~€50-100).",
          "**Deadline:** June 2nd of the following year (soft deadline; hard deadline is later with penalty).",
          "**Documents needed:** Employment contracts, payslips from both jobs, proof of payments."
        ]
      },
      { type: "h2", text: "5. What Counts as 'Work'" },
      {
        type: "ul",
        items: [
          "**Allowed:** Serving in restaurants, tutoring, delivery driving (Deliveroo, Wolt), freelance writing, babysitting, tutoring.",
          "**Careful:** Your contract might forbid work in competing fields. If you train at Hospital A, working at Hospital B might be forbidden.",
          "**Not allowed:** Working for cash under the table (Schwarzarbeit). It's illegal, uninsured, and puts you at risk.",
          "**Self-employment:** Freelance work requires registration (Gewerbeanmeldung). Cost: ~€25. You'll owe self-employment taxes but have freedom."
        ]
      },
      { type: "h2", text: "6. Earnings Reality Check" },
      {
        type: "p",
        text: "**Minijob €520/month:** Realistic for restaurant/café work. That's €12-13/hour typical."
      },
      {
        type: "p",
        text: "**Part-time €1000/month:** Requires ~10-12 hrs/week at €15+/hour (tutoring pays better than food service)."
      },
      {
        type: "p",
        text: "**Net income after taxes:** If earning €1000/month gross, expect ~€750-800 net after all deductions."
      }
    ],
    goldenRule: "Keep side work under €520/month (Minijob) unless you have trainer approval. Never work for cash under the table.",
    steps: [
      {
        title: "Check Your Contract",
        text: "Read your Ausbildungsvertrag.",
        action: "Look for side work restrictions.",
        readMore: [{ title: "Faire Integration (Rights)", url: "https://www.faire-integration.de/", source: "ngo" }],
      },
      {
        title: "Find a Minijob",
        text: "Job sites: Indeed.de, Monster.de",
        action: "Search 'Minijob' in your city.",
        readMore: [{ title: "Indeed.de", url: "https://www.indeed.de", source: "tool" }],
      },
      {
        title: "Register Properly",
        text: "Ensure employer registers you officially.",
        action: "Ask HR for confirmation.",
        readMore: [{ title: "Minijob Zentrale (Official Info)", url: "https://www.minijobzentrale.de/", source: "official" }],
      },
    ],
    readMore: [
      { title: "ELSTER - Tax Filing", url: "https://www.elsteronline.de/", source: "official" },
      { title: "Minijob Rules 2026", url: "https://www.minijobzentrale.de/DE/01_fachliche_Infos/09_aktuelles/Minijob_ab_2024.html", source: "official" },
    ],
    downloads: [],
    videos: [{ title: "Minijob in Germany Explained", url: "https://youtu.be/example123" }],
    tags: ["work", "minijob", "income", "taxes", "legal"],
  },

  {
    slug: "emergency-situations",
    title: "Emergency Situations: Beyond 112",
    subtitle: "What to do after accidents, theft, lost documents, and urgent problems",
    stage: "Health & Social",
    readTime: "10 min",
    icon: <AlertCircle size={24} />,
    color: "from-red-600 to-orange-600",
    shadow: "shadow-red-500/20",
    accent: "text-red-600",
    backgroundImage: img11,
    verified: "2026-01-19",
    summary: "Medical emergencies use 112. But what about car accidents, theft, or lost passport? Here's the actual protocol.",
    vibeCheck: "Emergencies happen. Knowing the exact steps removes panic. Here's your checklist.",
    content: [
      {
        type: "p",
        text: "You know to call 112 for medical emergencies. But what about a car accident? Stolen phone? Lost passport? Germany has a system for everything. Here's what you actually do."
      },
      { type: "h2", text: "1. Medical Emergency (112)" },
      {
        type: "p",
        text: "**When to call:** Chest pain, difficulty breathing, unconsciousness, severe bleeding, suspected broken bone, suspected poisoning."
      },
      {
        type: "ul",
        items: [
          "**Number:** 112 (ambulance, fire, rescue)",
          "**What to say:** Your location, nature of emergency, number of people affected. Don't hang up. Stay on the line.",
          "**Response:** Ambulance arrives within 10-20 minutes in cities. Paramedics are excellent.",
          "**Cost:** Covered by your health insurance."
        ]
      },
      { type: "h2", text: "2. Car Accident" },
      {
        type: "p",
        text: "**Step 1:** Check for injuries. Call 112 if anyone is hurt."
      },
      {
        type: "p",
        text: "**Step 2:** Turn on hazard lights. Place warning triangles 50m behind your car (required by law)."
      },
      {
        type: "p",
        text: "**Step 3:** Exchange details with other driver(s):"
      },
      {
        type: "ul",
        items: [
          "Full name, phone, address",
          "Insurance company & policy number",
          "License plate, car make/model",
          "Driver's license number",
          "Photos: Damage, accident scene, road conditions"
        ]
      },
      {
        type: "p",
        text: "**Step 4:** If no injuries AND both cars drivable, you can settle it yourselves or call police (non-emergency line **110**) to file a report."
      },
      {
        type: "p",
        text: "**Step 5:** Report to your insurance company ASAP (within 24-48 hours)."
      },
      { type: "h2", text: "3. Theft (Bike, Phone, Wallet, Passport)" },
      {
        type: "p",
        text: "**Immediately:** File a police report (**Anzeige**) at your local police station or online."
      },
      {
        type: "ul",
        items: [
          "**What to bring:** ID, description of the item, where/when it was stolen.",
          "**Filing:** Takes 15-30 minutes. You get a case number (**Aktenzeichen**).",
          "**For insurance:** Keep the police report. Insurance claims require it.",
          "**Phone theft:** Call your provider immediately to block the SIM. Report to police.",
          "**Bike:** Germany has registry for bikes. File report, file insurance claim if applicable."
        ]
      },
      { type: "h2", text: "4. Lost or Stolen Passport" },
      {
        type: "p",
        text: "**Action: Report to your embassy/consulate IMMEDIATELY.** Don't delay."
      },
      {
        type: "ul",
        items: [
          "**Why:** Someone can forge documents using your passport.",
          "**Find your embassy:** Google '[Your country] Embassy Berlin' (or your city).",
          "**What they provide:** Emergency travel document (valid for one trip home) or new passport (takes 1-2 weeks).",
          "**Cost:** €50-100+ depending on country.",
          "**Also file:** Police report in Germany (case number needed for some countries)."
        ]
      },
      { type: "h2", text: "5. Lost Bank Card" },
      {
        type: "p",
        text: "**Call immediately:** **116 116** (German bank card blocking hotline). Available 24/7, free."
      },
      {
        type: "ul",
        items: [
          "**What happens:** Card is blocked within minutes. New card arrives in 1 week.",
          "**For Revolut/online banks:** Use their app to freeze card immediately.",
          "**Fraud:** Contact your bank if unauthorized charges appear. German law protects you."
        ]
      },
      { type: "h2", text: "6. Workplace Injury (Occupational Accident)" },
      {
        type: "p",
        text: "**At work:** Inform your supervisor IMMEDIATELY, even if it seems minor."
      },
      {
        type: "ul",
        items: [
          "**Why:** All workplace injuries are reportable to workers' compensation (Berufsgenossenschaft).",
          "**Process:** Your employer files a report. You receive a case number.",
          "**Medical:** Get treated at your doctor or hospital. Costs covered by workers' comp.",
          "**Sick leave:** If you can't work, you're compensated (70% of salary typically).",
          "**Long-term:** If injury causes permanent damage, you may receive additional compensation."
        ]
      },
      { type: "h2", text: "7. Police Non-Emergency (110)" },
      {
        type: "p",
        text: "**Use 110 for:** Theft reports, harassment, property damage (not life-threatening)."
      },
      {
        type: "ul",
        items: [
          "**Response time:** 30 minutes to several hours depending on severity.",
          "**Filing report:** Free, required for insurance claims.",
          "**Language:** English speakers available in most stations, but bring a translation app."
        ]
      }
    ],
    goldenRule: "112 = life emergency. 110 = police non-emergency. 116 117 = urgent doctor. Keep these numbers saved.",
    steps: [
      {
        title: "Save Emergency Numbers",
        text: "112 (ambulance), 110 (police), 116 117 (urgent doctor), 116 116 (lost card)",
        action: "Save in phone contacts now.",
      },
      {
        title: "Know Your Embassy",
        text: "Find your country's embassy in Berlin.",
        action: "Save their address and phone.",
        readMore: [{ title: "German Foreign Office (Embassy List)", url: "https://www.auswaertiges-amt.de/en", source: "official" }],
      },
      {
        title: "Get Police Station Address",
        text: "Find your local **Polizeipräsidium**.",
        action: "Save location in phone.",
        readMore: [{ title: "Police Station Finder", url: "https://www.polizei.de/", source: "official" }],
      },
    ],
    readMore: [
      { title: "Emergency Numbers Germany", url: "https://www.make-it-in-germany.com/en/health-care/dealing-emergencies/", source: "official" },
      { title: "German Police (Official)", url: "https://www.polizei.de/", source: "official" },
    ],
    downloads: [{ title: "Emergency Numbers Cheatsheet", url: null }],
    videos: [{ title: "What to Do in an Accident (German)", url: "https://youtu.be/example123" }],
    tags: ["emergency", "accident", "police", "theft", "safety"],
  },

  {
    slug: "accommodation-nursing-ausbildung",
    title: "Accommodation for Nursing Trainees: Your Complete Guide",
    subtitle: "Finding comfortable housing and understanding your options as a nursing student",
    stage: "Settling In",
    readTime: "14 min",
    icon: <HomeIcon size={24} />,
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
    backgroundImage: img3,
    accent: "text-cyan-600",
    verified: "2026-01-19",
    summary: "Nursing Ausbildung requires stability. Explore your accommodation options, understand costs, and know what to expect when living in Germany as a trainee.",
    vibeCheck: "Nursing school is intense. Your living situation should be stable, affordable, and not stressful. Let's get that right from day one.",
    content: [
      {
        type: "p",
        text: "As a nursing trainee (Pflegefachmann/Pflegefachfrau) in Germany, your accommodation choice directly impacts your success. You're balancing 37.5-40 hours/week of clinical training, theory classes, and studying. Your home needs to be a place where you can rest and recover. This guide covers your options, realistic costs, and what to actually expect."
      },
      {
        type: "p",
        text: "**⚠️ Verification Note:** All information current as of January 2026. Costs and regulations may vary by city and change seasonally. Always verify locally with your employer or training provider."
      },
      { type: "h2", text: "1. Types of Accommodation Available" },
      {
        type: "p",
        text: "You have several options. Each has pros and cons. Choose based on your budget, comfort level, and what your employer offers. Compare offers from your hospital (Charité, Munich Klinik, etc.)—many list trainee housing on their websites."
      },
      {
        type: "ul",
        items: [
          "**Student Residence Halls (Studentenheim/Wohnheim):** Run by universities or student services ([Deutsches Studentenwerk](https://www.studentenwerke.de/)). Usually affordable (€150-300/month) but limited availability and can feel institutional. Shared facilities. BEST FOR: Budget-conscious students who don't mind communal living.",
          "**Shared Apartments (WG - Wohngemeinschaft):** 3-4 people sharing an apartment, each with private room, shared kitchen/bathroom. €250-500/month depending on city and room size. Most common for nursing students. BEST FOR: Those wanting independence + affordability.",
          "**Private Studio/1-Bedroom Apartment:** Fully yours. €400-800+/month. More expensive, but total privacy and control. BEST FOR: Those with stable income or employer support.",
          "**Host Family (Gastfamilie):** Live with a German family. €300-500/month including meals. Good for cultural immersion, but less independence. BEST FOR: Those wanting to improve German language rapidly.",
          "**Employer-Sponsored Housing:** Some hospitals/care facilities offer discounted or free housing for trainees. Ask your employer explicitly—this is gold if available."
        ]
      },
      { type: "h2", text: "2. Cost Breakdown by City Size" },
      {
        type: "p",
        text: "Germany varies drastically by city. Berlin is affordable; Munich costs 30% more. Here's realistic pricing as of January 2026:"
      },
      {
        type: "ul",
        items: [
          "**Small Cities (< 200k people):** WG room €200-350/month, private studio €300-500/month",
          "**Medium Cities (200k-1M):** WG room €300-450/month, private studio €450-700/month",
          "**Large Cities (Berlin, Munich, Hamburg):** WG room €350-550/month, private studio €600-900/month",
          "**Additional Costs:** Utilities (Nebenkosten) €80-150/month, internet €20-40/month, Germany charges [Rundfunkbeitrag](https://www.rundfunkbeitrag.de/) (TV/radio fee) €18.36/month whether you watch TV or not (shared apartments count as one unit)"
        ]
      },
      {
        type: "p",
        text: "**Realistic Monthly Budget for a Nursing Trainee:**"
      },
      {
        type: "ul",
        items: [
          "Rent (WG): €350",
          "Utilities & internet: €100",
          "Food: €60-100",
          "Transport ([Deutschlandticket](https://www.bahn.de/angebot/regio/deutschland-ticket)): €63",
          "Extras (cleaning supplies, toiletries, etc.): €40",
          "**Total:** €613-713/month (very modest, but doable on trainee salary)"
        ]
      },
      { type: "h2", text: "3. How to Find Accommodation" },
      {
        type: "p",
        text: "The same platforms used everywhere in Germany apply to nursing students. Move fast—good apartments are claimed within hours."
      },
      {
        type: "ul",
        items: [
          "**[WG Gesucht](https://www.wg-gesucht.de/):** THE platform for shared apartments. Create account, filter by city and price range, apply to listings. Write professional, concise messages. Most rooms go within 24-48 hours.",
          "**[Kleinanzeigen](https://www.kleinanzeigen.de/):** For private apartments and also WG rooms. Less curated than WG Gesucht, so scams exist. NEVER transfer money before seeing apartment in person.",
          "**[ImmobilienScout24](https://www.immobilienscout24.de/):** For larger, more 'official' listings. Good for private apartments, often more expensive.",
          "**University Housing Office:** Contact your nursing school's international office. Many schools have lists of recommended housing or partnerships with landlords.",
          "**Facebook Groups:** Search '[Your City Name] + Wohnung suchen' or '[Your City] + housing'. Many locals post here, sometimes bypassing platforms.",
          "**Direct Contact:** Ask your employer (hospital, care facility) if they have relationships with landlords or housing programs for trainees."
        ]
      },
      { type: "h2", text: "4. What to Look For (Red Flags & Green Flags)" },
      {
        type: "p",
        text: "After you find a potential apartment, evaluate it critically. Some questions to ask:"
      },
      {
        type: "ul",
        items: [
          "**Green Flags:** Landlord provides written contract, deposit held in separate bank account (not their personal account), utilities costs are clear, you get to visit/view in person before paying, quiet neighborhood, close to public transport",
          "**Red Flags:** 'Too cheap' listings, demands money transfer before viewing, refuses to provide written contract, deposit 'held in their account', vague about utilities costs, requires long-term commitment (24+ months) without flexibility",
          "**Questions to Ask:** When can I move in? When is rent due each month? What's included in utilities? What happens if equipment breaks? How much notice for landlord to enter? What's the process for getting deposit back?"
        ]
      },
      { type: "h2", text: "5. The Rental Contract (Mietvertrag)" },
      {
        type: "p",
        text: "ALWAYS get a written rental contract. Verbal agreements don't exist in Germany. Your contract should specify:"
      },
      {
        type: "ul",
        items: [
          "Monthly rent amount (cold and warm)",
          "Deposit amount and where it's held",
          "Notice period for ending lease (usually 3 months)",
          "What utilities are included",
          "House rules (quiet hours, trash separation, etc.)",
          "How long the lease is (fixed-term or open-ended)",
          "Condition of apartment at move-in (photos + checklist)"
        ]
      },
      {
        type: "p",
        text: "**ALWAYS read before signing.** If something seems unfair, ask questions or contact [Faire Integration](https://www.faire-integration.de/) (free legal advice). German landlords often include clauses that aren't legal—informed tenants can negotiate."
      },
      { type: "h2", text: "6. Move-In & Move-Out Essentials" },
      {
        type: "p",
        text: "When you move in, take photos of EVERY room. Document any existing damage. Have landlord sign off on this 'condition report' (Übergabeprotokoll). This protects your deposit when you leave."
      },
      {
        type: "p",
        text: "When you move out: Schedule final walkthrough with landlord, repair any damage YOU caused (normal wear-and-tear doesn't count), clean thoroughly, and give the required notice (usually 3 months). Landlord must return your deposit within 1 month. If they don't, or deduct unfairly, you can pursue them in small claims court (Amtsgericht)."
      },
      { type: "h2", text: "7. Special Considerations for Nursing Trainees" },
      {
        type: "p",
        text: "Your situation is unique. You're working irregular shifts, often including nights and weekends."
      },
      {
        type: "ul",
        items: [
          "**Shift Work Tip:** If you work nights, your roommates (in a WG) need to respect that you sleep during the day. Discuss this upfront. A quiet WG is essential.",
          "**Employer Housing Programs:** Many large hospital groups (Charité in Berlin, [Munich Clinic](https://www.muenchen-klinik.de/), [Helios](https://www.helios-gesundheit.de/)) offer subsidized housing for trainees. Ask HR specifically: 'Gibt es ein Wohnungsprogramm für Auszubildende?' (Is there a housing program for trainees?)",
          "**Proximity to Training Site:** Don't choose based purely on price. Consider commute time. 45+ minutes each way will exhaust you during 12-hour shifts.",
          "**Emergency Backup:** Tell your landlord/roommates about your shift schedule. In emergencies (illness, injury), you need support nearby."
        ]
      },
      { type: "h2", text: "8. Legal Tenant Rights in Germany" },
      {
        type: "p",
        text: "Germany protects renters. You have strong legal rights as a tenant:"
      },
      {
        type: "ul",
        items: [
          "**Rent Control:** Landlord cannot raise rent more than 20% every 3 years, or 3 euros per sqm per month per year (whichever is lower)",
          "**Repairs:** Landlord must repair damage within 'reasonable time' (usually 1-2 weeks for urgent issues, 4-6 weeks for non-urgent)",
          "**Notice Period:** After probation period, landlord needs 3 months' notice to end your lease (valid for ordinary termination only)",
          "**Unlawful Termination:** Landlord cannot terminate just to raise rent. Termination needs legal grounds (serious damage, repeated rent non-payment, etc.)"
        ]
      },
      {
        type: "p",
        text: "**Get Help:** If landlord violates these, contact [MieterverbandE](https://www.mieterbund.de/) (tenant union, €5-10/month membership) or [Faire Integration](https://www.faire-integration.de/) (free)."
      }
    ],
    goldenRule: "Choose accommodation close to your workplace, with clear contract, and don't rush. Bad housing = bad training performance. Take your time.",
    steps: [
      {
        title: "Set Your Budget",
        text: "Calculate what you can afford from trainee salary.",
        action: "Aim for €350-450/month including utilities.",
        readMore: [
          {
            title: "Average Trainee Salary Germany",
            url: "https://www.arbeitsagentur.de/",
            source: "official",
          },
        ],
      },
      {
        title: "Search Platforms",
        text: "Create profiles on WG Gesucht and Kleinanzeigen.",
        action: "Set up alerts for your city.",
        readMore: [
          { title: "WG Gesucht", url: "https://www.wg-gesucht.de/", source: "tool" },
          { title: "Kleinanzeigen", url: "https://www.kleinanzeigen.de/", source: "tool" },
        ],
      },
      {
        title: "Evaluate & Visit",
        text: "Never transfer money without viewing apartment in person.",
        action: "Take photos, check contract before signing.",
        readMore: [
          { title: "Tenant Rights Guide", url: "https://www.mieterbund.de/", source: "ngo" },
        ],
      },
      {
        title: "Document Move-In",
        text: "Take photos of condition, get landlord signature.",
        action: "Keep photos & contract filed away.",
        readMore: [],
      },
    ],
    readMore: [
      { title: "Deutsches Studentenwerk (Student Housing)", url: "https://www.studentenwerke.de/", source: "official" },
      { title: "Tenant Rights (MieterverbandE)", url: "https://www.mieterbund.de/", source: "ngo" },
      { title: "Faire Integration (Legal Advice)", url: "https://www.faire-integration.de/", source: "ngo" },
    ],
    downloads: [{ title: "Rental Contract Checklist (PDF)", url: null }],
    videos: [{ title: "How to find an apartment in Germany (YouTube)", url: "https://youtu.be/search?q=wohnung+finden+deutschland" }],
    tags: ["accommodation", "housing", "nursing", "ausbildung", "contract", "costs"],
  },

  {
    slug: "wg-roommate-culture",
    title: "Living in a WG: Mastering Shared Apartment Culture",
    subtitle: "Everything you need to know about German roommate dynamics and house rules",
    stage: "Settling In",
    readTime: "11 min",
    icon: <Users size={24} />,
    color: "from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/20",
    backgroundImage: img2,
    accent: "text-indigo-600",
    verified: "2026-01-19",
    summary: "WG (shared apartment) living is normal in Germany. Learn the unwritten rules, communication norms, and how to avoid conflicts with roommates.",
    vibeCheck: "Germans communicate directly. Conflict often happens because people DON'T communicate. Learn the norms and you'll be fine.",
    content: [
      {
        type: "p",
        text: "Most young people in Germany live in a WG (Wohngemeinschaft = shared apartment). It's affordable, quick to find, and the default for students and young professionals. But WG culture has unwritten rules. Break them, and you'll be silently hated by your roommates. Follow them, and you'll have a stable home and probably some decent friends."
      },
      { type: "h2", text: "1. What Is a WG? How It Works" },
      {
        type: "p",
        text: "A typical WG has 3-4 people, each with a private bedroom, sharing kitchen, bathroom(s), and common areas. Everyone is on the same lease (usually), or sometimes each person has their own separate contract. Everyone pays rent separately. It's NOT communal living in the hippie sense—it's practical roommate-sharing."
      },
      {
        type: "p",
        text: "**Important:** You're not required to be friends with your roommates. You're required to be respectful, quiet, and clean. Friendships sometimes happen, but don't expect it."
      },
      { type: "h2", text: "2. The Unwritten Rules (This Is Critical)" },
      {
        type: "p",
        text: "These aren't written down, but breaking them causes resentment:"
      },
      {
        type: "ul",
        items: [
          "**Quiet Hours:** 22:00 (10 PM) - 06:00 (6 AM) on weekdays, ALL DAY on Sundays and holidays. This is legally enforced. No loud music, no parties, no vacuuming at midnight. Sleep is sacred in German culture.",
          "**Kitchen Cleanliness:** Clean your dishes IMMEDIATELY after use. Leave the kitchen clean. Don't leave your food in the fridge for weeks. Shared kitchens get messy quickly—preventing it beats fighting over who's responsible.",
          "**Bathroom Time:** Mornings can be bottlenecks. Showers shouldn't exceed 15-20 minutes if multiple people need to use it. Don't hog the shower during peak hours.",
          "**Respect Private Space:** Your roommates' rooms are off-limits. Don't enter without invitation. Don't borrow their things without asking. Ever.",
          "**Bathroom Sharing:** Your cleaning supplies and toiletries belong to you. Share basic things (toilet paper, soap) but keep your personal stuff separate. Don't assume others will replace your stuff.",
          "**Rent & Utilities:** Pay on time, always. Set up automatic payments (Dauerauftrag) if possible. Late payments damage trust immediately."
        ]
      },
      { type: "h2", text: "3. Communication: The German Way" },
      {
        type: "p",
        text: "Germans communicate **directly**. This feels blunt to many cultures, but it's efficient. Problems get solved quickly because people say what they mean."
      },
      {
        type: "p",
        text: "**Example Problem:** Your roommate leaves dishes in the sink. Instead of being passive-aggressive or avoiding conflict, you say: 'Hey, I've noticed there are dishes in the sink. Can we agree that everyone cleans their dishes immediately? It's getting annoying.' This is not rude—it's professional."
      },
      {
        type: "p",
        text: "**What NOT to do:** Don't clean their dishes silently and then be angry. Don't gossip with other roommates about the 'problem roommate'. Don't leave passive-aggressive notes. Talk directly, one-on-one, calmly."
      },
      { type: "h2", text: "4. WG Meetings (Regularly Scheduled)" },
      {
        type: "p",
        text: "Many WGs have a monthly or bi-weekly 'WG-Sitzung' (WG meeting) where everyone sits down to discuss shared costs, problems, and schedule. If your WG does this, take it seriously. This is where conflicts get resolved before they blow up."
      },
      {
        type: "ul",
        items: [
          "**Typical Topics:** Who's cleaning this week? Do we need to buy new toilet paper/cleaning supplies? Has anyone noticed a problem? Do we need to adjust house rules?",
          "**Duration:** Usually 30-60 minutes. People stay on topic and wrap up efficiently.",
          "**Don't Skip:** It's disrespectful to skip regular meetings. Your input matters."
        ]
      },
      { type: "h2", text: "5. Shared Costs (Cleaning, Supplies, Utilities)" },
      {
        type: "p",
        text: "Who pays for what? This varies, but here's what's typical:"
      },
      {
        type: "ul",
        items: [
          "**Rent:** Everyone pays to landlord separately (or same amount if joint lease)",
          "**Utilities (Strom, Gas, Wasser):** Split equally every month. Someone collects and settles the bill.",
          "**Internet:** Usually split equally (~€5-10/person)",
          "**Shared Supplies:** Toilet paper, dish soap, cleaning supplies. Usually buy collectively and split cost. Some WGs use an 'Kasse' (collective fund) where everyone chips in €5-10/month and one person buys everything.",
          "**Trash/Recycling:** Landlord usually covers. But YOU split cost of extra trash bags or recycling bins if needed."
        ]
      },
      { type: "h2", text: "6. Dealing With Difficult Roommates" },
      {
        type: "p",
        text: "Not every WG is harmonious. If you have a genuinely problematic roommate:"
      },
      {
        type: "ul",
        items: [
          "**Document Issues:** Keep a record of problems (dates, what happened). This matters if legal action becomes necessary.",
          "**Talk to Them First:** Be direct. Most problems are resolved with one honest conversation.",
          "**Involve Other Roommates:** If the problem affects everyone, discuss it as a group at the next WG meeting.",
          "**Contact Landlord (Last Resort):** If someone violates lease (excessive noise, damaging property, refusing to pay), inform the landlord. They can take action.",
          "**Exit:** If it's truly unbearable, you can usually give 3 months' notice to leave (check your lease). Don't stay miserable for months."
        ]
      },
      { type: "h2", text: "7. Your First Week in a WG: What to Do" },
      {
        type: "p",
        text: "When you move in, take initiative:"
      },
      {
        type: "ul",
        items: [
          "**Introduce Yourself Properly:** Knock on each roommate's door, introduce yourself, exchange phone numbers. Ask about their schedules, routines, and any house rules they want to highlight.",
          "**Attend the Next WG Meeting (if scheduled):** Listen, don't dominate. Understand existing house rules and shared costs.",
          "**Ask About Cleaning Schedule:** When does each person clean common areas? What's the rotating schedule?",
          "**Find Out Payment Methods:** How are utilities split? Do you pay someone directly, or does the landlord collect?",
          "**Clarify Guest & Noise Expectations:** Ask about visitors, parties, and any specific boundaries for the apartment."
        ]
      },
      { type: "h2", text: "8. Special Considerations for Nursing Trainees in a WG" },
      {
        type: "p",
        text: "Your schedule is unusual. Communicate this clearly to roommates:"
      },
      {
        type: "ul",
        items: [
          "**Night Shifts:** Tell them you'll be sleeping during the day. Ask them to be extra quiet during your sleep hours (e.g., no heavy cleaning, no guests). Compromise is key.",
          "**Early Mornings:** Some shifts start at 06:00 or earlier. Roommates need to know you'll be showering before dawn.",
          "**Irregular Schedule:** Share your monthly roster (if possible) so they know when to expect you.",
          "**Exhaustion:** On heavy shift days, you might need to retreat to your room immediately. This is okay and normal.",
          "**Compensation:** Consider doing some WG tasks differently—maybe you handle trash more often because your shifts align with trash day, for example."
        ]
      }
    ],
    goldenRule: "Direct communication prevents 90% of WG problems. If something bothers you, speak up kindly but clearly. Germans respect this.",
    steps: [
      {
        title: "Learn the Unwritten Rules",
        text: "Ask for the house rules and how they’re applied in daily life.",
        action: "Ask roommates about any additional house rules.",
        readMore: [
          {
            title: "German Quiet Hours (Ruhezeit) Laws",
            url: "https://www.make-it-in-germany.com/en/manage-life/social-security/",
            source: "official",
          },
        ],
      },
      {
        title: "Introduce Yourself Properly",
        text: "Knock on each roommate's door, exchange numbers.",
        action: "Ask about their schedules & routines.",
        readMore: [],
      },
      {
        title: "Clarify Costs & Responsibilities",
        text: "Utilities? Cleaning? Supplies? Who pays for what?",
        action: "Get details in writing or note them down.",
        readMore: [],
      },
      {
        title: "Communicate Your Schedule",
        text: "Share your nursing shift pattern.",
        action: "Let roommates know sleep hours.",
        readMore: [],
      },
    ],
    readMore: [
      { title: "Conflict Resolution Resources", url: "https://www.wg-gesucht.de/", source: "tool" },
    ],
    downloads: [{ title: "WG House Rules Template (PDF)", url: null }],
    videos: [
      {
        title: "How to live in a German WG (YouTube)",
        url: "https://youtu.be/search?q=WG+Wohnung+kultur+deutschland"
      }
    ],
    tags: ["wg", "roommates", "shared-apartment", "culture", "rules", "communication"],
  },
];
