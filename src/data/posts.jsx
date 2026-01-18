import {
  Wifi,
  Landmark,
  Home as HomeIcon,
  Heart,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { LINKS } from '../constants/config';

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
    verified: "2026-01-15",
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
        text: "The best local option for students is **Aldi Talk**. It is a prepaid service from the Aldi supermarket chain. It is cheap (~10€ starter set), has no long contract, and uses the reliable O2 network. Why Aldi? Because every German city has an Aldi supermarket, and it's the most accessible option for newcomers."
      },
      {
        type: "ul",
        items: [
          "**Where to buy:** Any 'Aldi Süd' or 'Aldi Nord' supermarket. There is usually one inside or very near major train stations and airports. Pro tip: Aldi is divided into North and South regions, but both Aldi Talk services work nationwide.",
          "**How to register:** German law requires ID verification before you can use any mobile SIM. You can download the Aldi Talk app and do a 'Video Ident' call—this is a video call where you show your passport to verify who you are. However, you can also finish all this verification withing a webbrowser such as chrome etc. You need good lighting and a clear photo of your passport.",
          "**Troubleshooting:** If the video call fails (which happens with bad connection or unclear photos), you can do 'PostIdent' at any post office (Deutsche Post). They will verify you in person for a small fee (~10€).",
          "**Cost breakdown:** The 10€ starter set includes your SIM and about 10€ credit. Monthly plans start at 8.99€, the unlimited option is about 9.99€ as of 18 Jan 2026."
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
          "**Google Maps:** Works perfectly in Germany. It shows you real-time public transport schedules, train platforms, and walking times. It's 100% accurate. However, this seems confusing to many new comers! Just type your destination address, and it will show you exactly how to get there using buses, trains, or walking.",
          "**DeepL:** This is NOT Google Translate. DeepL is specifically trained on German and produces natural translations. Point your phone camera at a German sign or menu, and DeepL will translate it instantly. Free version works offline after download.",
          "**DB Navigator (Deutsche Bahn):** This is the official German railway app. It shows you every bus, train, and metro option. It tells you which platform (Gleis) to go to, when the train departs, and if it's running late. You'll use this constantly. You can also buy tickets directly in the app."
        ]
      },
      { type: "h2", text: "3. Getting From Airport to City: Transport vs Taxi" },
      {
        type: "p",
        text: "This is where many newcomers waste their first 50€–80€. A taxi from a major airport (Berlin, Munich, Frankfurt) to the city center costs between 50€ and 80€ approximately. A train ticket costs about 6€–12€. In Germany, trains are safe, clean, and everyone uses them—including wealthy locals. Do not take a taxi unless there are extraordinary circumstances."
      },
      {
        type: "p",
        text: "**Here's exactly what to do:** Use the DB Navigator app (you just downloaded it). Type your airport name and your destination address. It will show you the cheapest and fastest route. Usually it's a regional train (S-Bahn) followed by a metro (U-Bahn) or bus. The app tells you which platform to go to and what time to leave. It's that simple. If this seems confusing, switch to **Google Maps** and do the same search there."
      },
      {
        type: "p",
        text: "**About the Deutschlandticket:** This monthly pass costs 63€(as of 18 Jan 2026) and covers ALL local transport nationwide (trains, buses, metros). It does NOT cover long-distance express trains (ICE/IC). But for getting around your city? Perfect. Consider buying one at the airport train station before you leave."
      },
      { type: "h2", text: "4. Your First Weekend (The Sunday Rule)" },
      {
        type: "p",
        text: "If you arrive on a Saturday evening or a Sunday, you must know this: **Germany closes on Sundays.** Supermarkets, pharmacies, and clothing stores are closed. It is the 'Ruhetag' (rest day). If you do not buy food on Saturday, you will not eat until Monday."
      },
      {
        type: "p",
        text: "**The Loophole:** Supermarkets inside big train stations (Hauptbahnhof) and airports are allowed to stay open on Sundays. If you land on Sunday, buy bread, water, juice etc *at the airport supermarket* (usually Rewe or Edeka) before you leave the terminal."
      },
      { type: "h2", text: "5. The Golden Paper: Wohnungsgeberbestätigung" },
      {
        type: "p",
        text: "When you arrive at your housing, ask your landlord or host for the **Wohnungsgeberbestätigung** (Landlord Confirmation). This is a single sheet of paper that confirms you moved in. You **cannot** register your address at the city office without this specific paper. Your rental contract is *not* enough. I have added a [PDF Template](https://formular-service.augsburg.de/intelliform/forms/stadt_augsburg/extern/330/extern/330/meldewesen/wohnungsgeberbestaetigung/download;jsessionid=uZF3OT69kpWC24HWyAC_aL-HL-MeLo73RHTISBvd.IF0) below—if they don't have one, print this and make them sign it."
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
    verified: "2026-01-15",
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
          "**Sparkasse / Volksbank (Traditional Banks):** These are the safest and most trusted. Physical branches in every neighborhood. BUT they charge monthly fees (5–10€) and often require your Anmeldung (registration) proof before opening an account. This creates a chicken-and-egg problem.",
          "**Commerzbank / Deutsche Bank:** Large banks with solid reputations. Problem: They often check your SCHUFA (credit score). If you're new to Germany, you won't have any credit history. They might reject you.",
          "**N26 (Online Bank):** Fast setup, German IBAN, no fees. Good if it works for your passport, but verification sometimes fails with non-EU documents.",
          "**Revolut (Game Changer):** Opens in literally 10 minutes through an app using only your passport. Gives you a valid German IBAN immediately. Excellent English-language app. No Anmeldung needed upfront—you update it later. This is your best bet."
        ]
      },
      {
        type: "p",
        text: "**My honest recommendation:** Open Revolut first. Use it to establish your financial presence in Germany. Give the IBAN to your employer and landlord(**if required**, never share your IBAN/bank details anyhow!). Once you have your registration paper (Anmeldung), open a Sparkasse or Volksbank account if you want a physical bank for ATM withdrawals or backup. But Revolut alone is perfectly sufficient."
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
      {
        type: "p",
        text: "**⚠️ VERIFY:** Always check the official [German government health insurance page](https://www.make-it-in-germany.com/en/manage-life/social-security/health-insurance/) for the most current information, as laws can change."
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
    verified: "2026-01-15",
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
    videos: [{ title: "How to separate trash in Germany", url: "https://youtu.be/KfHrq-8tG-g?si=EFwO0ykE9TdgNO94" }],
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
    videos: [{ title: "PflegeTube Channel", url: "https://youtube.com/@pflegetube?si=V4ECJ1kuFPQjq2hT" }],
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
