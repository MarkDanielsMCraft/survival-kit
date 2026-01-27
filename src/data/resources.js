import { LINKS, META } from '../constants/config';

/**
 * RESOURCES LIBRARY
 * 
 * To add a new resource:
 * 1. Copy an existing resource object
 * 2. Update the fields (id, title, url, category, tags, source)
 * 3. Make sure 'source' matches one of: official, ngo, tool, learning, video, referral
 * 
 * Categories: "Arrival & Setup", "Money & Banking", "Housing", "Nursing & Math", 
 *             "Rights & Legal", "Health & Social", "Apps & Tools"
 */

const RESOURCE_VERIFIED = META.lastUpdatedDate;

export const RESOURCES = [
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
  { id: "r29", title: "Google Maps Germany", url: "https://maps.google.com", type: "App", category: "Arrival & Setup", tags: ["navigation"], source: "tool" },
  { id: "r48", title: "Make It In Germany - Visa for Vocational Training", url: "https://www.make-it-in-germany.com/en/visa-residence/types/training", type: "Website", category: "Arrival & Setup", tags: ["visa", "training"], source: "official" },
  { id: "r49", title: "Anerkennung in Deutschland - Recognition of Qualifications", url: "https://www.anerkennung-in-deutschland.de/html/en/professional-recognition-refugees.php", type: "Website", category: "Rights & Legal", tags: ["recognition", "qualifications"], source: "official" },
  { id: "r50", title: "Handbook Germany - Visa for Vocational Training", url: "https://handbookgermany.de/en/visa-seeking-vocational-training", type: "Website", category: "Arrival & Setup", tags: ["visa", "training"], source: "ngo" },
  
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
  { id: "r47", title: "Mentor Language Academy - Nursing Accommodation Guide", url: "https://mentoralanguageacademy.com/blog/a-guide-for-comfortable-accommodation-during-nursing-ausbildung-in-germany/", type: "Website", category: "Housing", tags: ["nursing", "accommodation", "ausbildung"], source: "learning" },
  
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
  { id: "r51", title: "BAMF - Berufssprachkurse (Vocational German)", url: "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf.html", type: "Website", category: "Apps & Tools", tags: ["language", "courses"], source: "official" },
  
  // === RIGHTS & LEGAL ===
  { id: "r20", title: "Faire Integration - Worker Rights", url: "https://www.faire-integration.de/", type: "Website", category: "Rights & Legal", tags: ["rights", "workers"], source: "ngo" },
  { id: "r40", title: "Arbeitsagentur - Employment Agency", url: "https://www.arbeitsagentur.de/", type: "Website", category: "Rights & Legal", tags: ["employment", "official"], source: "official" },
  { id: "r52", title: "Arbeitsagentur - Info for People from Abroad", url: "https://www.arbeitsagentur.de/int/en/for-people-from-abroad", type: "Website", category: "Rights & Legal", tags: ["employment", "training"], source: "official" },
  { id: "r41", title: "IG Metall - Trade Union", url: "https://www.igmetall.de/", type: "Website", category: "Rights & Legal", tags: ["workers", "union"], source: "ngo" },
  { id: "r42", title: "Betriebsrat Info - Works Council", url: "https://www.dgb.de/themen/++co++a51d7df8-5d32-11eb-a38c-001a4a160123", type: "Website", category: "Rights & Legal", tags: ["rights"], source: "official" },
  { id: "r53", title: "Handbook Germany - Vocational Training Orientation", url: "https://handbookgermany.de/en/vocational-training-orientation-for-refugees", type: "Website", category: "Rights & Legal", tags: ["training", "orientation"], source: "ngo" },
  { id: "r54", title: "EURES - Living & Working in Germany", url: "https://eures.europa.eu/living-and-working/living-and-working-conditions-europe/living-and-working-conditions-germany_en", type: "Website", category: "Rights & Legal", tags: ["employment", "eu"], source: "official" },
  
  // === HEALTH & SOCIAL ===
  { id: "r21", title: "TelefonSeelsorge - Crisis Hotline", url: "https://www.telefonseelsorge.de/", type: "Website", category: "Health & Social", tags: ["mental-health", "crisis"], source: "official" },
  { id: "r22", title: "DOSB - Sports Clubs Finder", url: "https://bewegt.dosb.de/", type: "Website", category: "Health & Social", tags: ["sports", "clubs", "social"], source: "official" },
  { id: "r23", title: "Meetup - Events & Groups", url: "https://www.meetup.com/de", type: "Website", category: "Health & Social", tags: ["social", "events"], source: "tool" },
  { id: "r24", title: "Eventbrite - Events in Germany", url: "https://www.eventbrite.de", type: "Website", category: "Health & Social", tags: ["events", "social"], source: "tool" },
  { id: "r16", title: "Together in Germany - Community", url: "https://together-in-germany.org/", type: "Website", category: "Health & Social", tags: ["community", "social"], source: "ngo" },
  { id: "r43", title: "ProAsyl - Refugee Support", url: "https://www.proasyl.de/en/", type: "Website", category: "Health & Social", tags: ["support", "refugees"], source: "ngo" },
  { id: "r44", title: "Malteser International - Medical Support", url: "https://www.malteser.de/", type: "Website", category: "Health & Social", tags: ["medical", "ngo"], source: "ngo" },
  { id: "r55", title: "Refugee Phrasebook", url: "https://refugeephrasebook.de/", type: "Tool", category: "Apps & Tools", tags: ["language", "phrases"], source: "tool" },

  // === EXPANDED GENERAL RESOURCES (NON-NURSING) ===
  { id: "r56", title: "Anki Flashcards", url: "https://apps.ankiweb.net/", type: "App", category: "Apps & Tools", tags: ["study", "flashcards"], source: "tool" },
  { id: "r57", title: "C24 Bank", url: "https://c24.de/", type: "Website", category: "Money & Banking", tags: ["bank"], source: "tool" },
  { id: "r58", title: "Wohnungsgeberbestätigung Template (Augsburg)", url: "https://formular-service.augsburg.de/intelliform/forms/stadt_augsburg/extern/330/extern/330/meldewesen/wohnungsgeberbestaetigung/download;jsessionid=uZF3OT69kpWC24HWyAC_aL-HL-MeLo73RHTISBvd.IF0", type: "Website", category: "Housing", tags: ["anmeldung", "housing"], source: "official" },
  { id: "r59", title: "Handbook Germany: Basic Facts", url: "https://handbookgermany.de/en/culture/basic-facts.html", type: "Website", category: "Arrival & Setup", tags: ["culture"], source: "ngo" },
  { id: "r60", title: "DW Learn German", url: "https://learngerman.dw.com/en/overview", type: "Website", category: "Apps & Tools", tags: ["language"], source: "learning" },
  { id: "r61", title: "N26 Bank", url: "https://n26.com/", type: "Website", category: "Money & Banking", tags: ["bank"], source: "tool" },
  { id: "r62", title: "Aldi Talk SIM Registration", url: "https://service.alditalk.de/simcard/register", type: "Website", category: "Arrival & Setup", tags: ["sim", "internet"], source: "official" },
  { id: "r63", title: "Thieme Medical Store", url: "https://shop.thieme.de/", type: "Website", category: "Nursing & Math", tags: ["textbooks"], source: "learning" },
  { id: "r64", title: "Aldi App", url: "https://www.aldi-nord.de/services/apps/aldi-app.html", type: "App", category: "Apps & Tools", tags: ["shopping"], source: "tool" },
  { id: "r65", title: "Aldi Supermarket", url: "https://www.aldi.de/", type: "Website", category: "Apps & Tools", tags: ["groceries"], source: "tool" },
  { id: "r66", title: "Aldi Talk App", url: "https://www.alditalk.de/alditalk-app", type: "App", category: "Arrival & Setup", tags: ["sim", "internet"], source: "official" },
  { id: "r67", title: "Amazon Germany", url: "https://www.amazon.de/", type: "Website", category: "Apps & Tools", tags: ["shopping"], source: "tool" },
  { id: "r68", title: "Apollo Optik", url: "https://www.apollo.de", type: "Website", category: "Health & Social", tags: ["optics"], source: "tool" },
  { id: "r69", title: "Apotheken Umschau Finder", url: "https://www.apotheken-umschau.de/apotheken", type: "Website", category: "Health & Social", tags: ["pharmacy"], source: "tool" },
  { id: "r70", title: "Arztsuche Doctor Finder", url: "https://www.arztsuche.de", type: "Website", category: "Health & Social", tags: ["doctors"], source: "official" },
  { id: "r71", title: "Auswärtiges Amt (Foreign Office)", url: "https://www.auswaertiges-amt.de/en", type: "Website", category: "Arrival & Setup", tags: ["visas", "official"], source: "official" },
  { id: "r72", title: "Barmer Benefits Overview", url: "https://www.barmer.de/leistungen/alle-leistungen", type: "Website", category: "Health & Social", tags: ["insurance"], source: "official" },
  { id: "r73", title: "Bauhaus (DIY)", url: "https://www.bauhaus.info/", type: "Website", category: "Housing", tags: ["hardware"], source: "tool" },
  { id: "r74", title: "BIO COMPANY", url: "https://www.biocompany.de/", type: "Website", category: "Apps & Tools", tags: ["groceries"], source: "tool" },
  { id: "r75", title: "C&A Germany", url: "https://www.c-and-a.com/de/de/shop", type: "Website", category: "Apps & Tools", tags: ["clothing"], source: "tool" },
  { id: "r76", title: "Commerzbank", url: "https://www.commerzbank.de/", type: "Website", category: "Money & Banking", tags: ["bank"], source: "tool" },
  { id: "r77", title: "DAK Health", url: "https://www.dak.de/", type: "Website", category: "Health & Social", tags: ["insurance"], source: "official" },
  { id: "r78", title: "Deutsche Bank", url: "https://www.deutsche-bank.de/", type: "Website", category: "Money & Banking", tags: ["bank"], source: "tool" },
  { id: "r79", title: "dm Drogerie", url: "https://www.dm.de/", type: "Website", category: "Apps & Tools", tags: ["pharmacy", "drogerie"], source: "tool" },
  { id: "r80", title: "dm Store Locator", url: "https://www.dm.de/store-locator", type: "Website", category: "Apps & Tools", tags: ["stores"], source: "tool" },
  { id: "r81", title: "dm Payback & App", url: "https://www.dm.de/services/apps", type: "App", category: "Apps & Tools", tags: ["rewards"], source: "tool" },
  { id: "r82", title: "dm Card", url: "https://www.dm.de/dmcard", type: "Website", category: "Apps & Tools", tags: ["rewards"], source: "tool" },
  { id: "r83", title: "eBay Germany", url: "https://www.ebay.de/", type: "Website", category: "Apps & Tools", tags: ["marketplace"], source: "tool" },
  { id: "r84", title: "EDEKA Supermarket", url: "https://www.edeka.de/", type: "Website", category: "Apps & Tools", tags: ["groceries"], source: "tool" },
  { id: "r85", title: "ELSTER Tax Portal", url: "https://www.elsteronline.de/", type: "Website", category: "Money & Banking", tags: ["tax"], source: "official" },
  { id: "r86", title: "Fielmann Optics", url: "https://www.fielmann.de", type: "Website", category: "Health & Social", tags: ["optics"], source: "tool" },
  { id: "r87", title: "GetSafe (Liability Insurance)", url: "https://www.getsafe.de/", type: "Website", category: "Rights & Legal", tags: ["insurance"], source: "tool" },
  { id: "r88", title: "Hello GetSafe (EN)", url: "https://www.hellogetsafe.com/en-de", type: "Website", category: "Rights & Legal", tags: ["insurance"], source: "tool" },
  { id: "r89", title: "Helios Health", url: "https://www.helios-gesundheit.de/", type: "Website", category: "Health & Social", tags: ["hospital"], source: "official" },
  { id: "r90", title: "Hugendubel Books", url: "https://www.hugendubel.de/", type: "Website", category: "Apps & Tools", tags: ["books"], source: "tool" },
  { id: "r91", title: "IKEA Germany", url: "https://www.ikea.com/de/de/", type: "Website", category: "Housing", tags: ["furniture"], source: "tool" },
  { id: "r92", title: "Indeed Germany", url: "https://www.indeed.de", type: "Website", category: "Apps & Tools", tags: ["jobs"], source: "tool" },
  { id: "r93", title: "Jameda Doctor Reviews", url: "https://www.jameda.de", type: "Website", category: "Health & Social", tags: ["doctors"], source: "tool" },
  { id: "r94", title: "Lidl Germany", url: "https://www.lidl.de/", type: "Website", category: "Apps & Tools", tags: ["groceries"], source: "tool" },
  { id: "r95", title: "Lidl Plus App", url: "https://www.lidl.de/c/lidl-plus/s10008772", type: "App", category: "Apps & Tools", tags: ["discounts"], source: "tool" },
  { id: "r96", title: "Lidl Weekly Deals", url: "https://www.lidl.de/de/aktion/home", type: "Website", category: "Apps & Tools", tags: ["deals"], source: "tool" },
  { id: "r97", title: "Lieferando", url: "https://www.lieferando.de", type: "App", category: "Apps & Tools", tags: ["food-delivery"], source: "tool" },
  { id: "r98", title: "Make It In Germany: Emergencies", url: "https://www.make-it-in-germany.com/en/health-care/dealing-emergencies/", type: "Website", category: "Health & Social", tags: ["emergency"], source: "official" },
  { id: "r99", title: "Make It In Germany: Work Law Basics", url: "https://www.make-it-in-germany.com/en/looking-for-work/law-regulation/", type: "Website", category: "Rights & Legal", tags: ["work-law"], source: "official" },
  { id: "r100", title: "Make It In Germany: Social Security", url: "https://www.make-it-in-germany.com/en/manage-life/social-security/", type: "Website", category: "Rights & Legal", tags: ["social-security"], source: "official" },
  { id: "r101", title: "Make It In Germany: Health Insurance", url: "https://www.make-it-in-germany.com/en/manage-life/social-security/health-insurance/", type: "Website", category: "Health & Social", tags: ["health-insurance"], source: "official" },
  { id: "r102", title: "Make It In Germany: First Steps", url: "https://www.make-it-in-germany.com/en/visa-residence/first-steps", type: "Website", category: "Arrival & Setup", tags: ["arrival"], source: "official" },
  { id: "r103", title: "MediaMarkt Germany", url: "https://www.mediamarkt.de/", type: "Website", category: "Apps & Tools", tags: ["electronics"], source: "tool" },
  { id: "r104", title: "Minijob-Zentrale", url: "https://www.minijobzentrale.de/", type: "Website", category: "Rights & Legal", tags: ["minijob"], source: "official" },
  { id: "r105", title: "Minijob Changes 2024", url: "https://www.minijobzentrale.de/DE/01_fachliche_Infos/09_aktuelles/Minijob_ab_2024.html", type: "Website", category: "Rights & Legal", tags: ["minijob"], source: "official" },
  { id: "r106", title: "Müller Drogerie", url: "https://www.mueller.de/", type: "Website", category: "Apps & Tools", tags: ["drogerie"], source: "tool" },
  { id: "r107", title: "München Klinik", url: "https://www.muenchen-klinik.de/", type: "Website", category: "Health & Social", tags: ["hospital"], source: "official" },
  { id: "r108", title: "NRW Medical On-Call (ÄBD)", url: "https://www.nrwga.de/patienten/aerztlicher-bereitschaftsdienst", type: "Website", category: "Health & Social", tags: ["emergency"], source: "official" },
  { id: "r109", title: "OBI (DIY)", url: "https://www.obi.de/", type: "Website", category: "Housing", tags: ["hardware"], source: "tool" },
  { id: "r110", title: "Outletcity Metzingen", url: "https://www.outletcity.com/en/metzingen/", type: "Website", category: "Apps & Tools", tags: ["outlet"], source: "tool" },
  { id: "r111", title: "PENNY", url: "https://www.penny.de/", type: "Website", category: "Apps & Tools", tags: ["groceries"], source: "tool" },
  { id: "r112", title: "Polizei.de", url: "https://www.polizei.de/", type: "Website", category: "Rights & Legal", tags: ["emergency"], source: "official" },
  { id: "r113", title: "Primark Germany", url: "https://www.primark.com/de", type: "Website", category: "Apps & Tools", tags: ["clothing"], source: "tool" },
  { id: "r114", title: "REWE Supermarket", url: "https://www.rewe.de/", type: "Website", category: "Apps & Tools", tags: ["groceries"], source: "tool" },
  { id: "r115", title: "Rossmann Drogerie", url: "https://www.rossmann.de/", type: "Website", category: "Apps & Tools", tags: ["drogerie"], source: "tool" },
  { id: "r116", title: "Rossmann App", url: "https://www.rossmann.de/de/unternehmen/services/app", type: "App", category: "Apps & Tools", tags: ["rewards"], source: "tool" },
  { id: "r117", title: "Rundfunkbeitrag (DE)", url: "https://www.rundfunkbeitrag.de/", type: "Website", category: "Rights & Legal", tags: ["broadcast-fee"], source: "official" },
  { id: "r118", title: "Rundfunkbeitrag Service", url: "https://www.rundfunkbeitrag.de/welcome/index_ger.html", type: "Website", category: "Rights & Legal", tags: ["broadcast-fee"], source: "official" },
  { id: "r119", title: "Saturn Germany", url: "https://www.saturn.de/", type: "Website", category: "Apps & Tools", tags: ["electronics"], source: "tool" },
  { id: "r120", title: "Slow German Podcast", url: "https://www.slow-german.de/", type: "Website", category: "Apps & Tools", tags: ["language"], source: "learning" },
  { id: "r121", title: "Sparkasse Bank", url: "https://www.sparkasse.de/", type: "Website", category: "Money & Banking", tags: ["bank"], source: "official" },
  { id: "r122", title: "Staples Germany", url: "https://www.staples.de/", type: "Website", category: "Apps & Tools", tags: ["office"], source: "tool" },
  { id: "r123", title: "Studentenwerk Mensa Finder", url: "https://www.studentenwerke.de/de/mensa", type: "Website", category: "Apps & Tools", tags: ["students", "food"], source: "official" },
  { id: "r124", title: "TK Health Insurance", url: "https://www.tk.de/", type: "Website", category: "Health & Social", tags: ["insurance"], source: "official" },
  { id: "r125", title: "TK Health System Overview (EN)", url: "https://www.tk.de/en/health-insurance-in-germany/basic-information-german-health-system/german-health-insurance-system-2169412?tkcm=ab", type: "Website", category: "Health & Social", tags: ["insurance"], source: "official" },
  { id: "r126", title: "Urban Outfitters Germany", url: "https://www.urbanoutfitters.com/de-de", type: "Website", category: "Apps & Tools", tags: ["clothing"], source: "tool" },
  { id: "r127", title: "Verbraucherzentrale: Liability Insurance", url: "https://www.verbraucherzentrale.de/wissen/versicherungen/privathaftpflichtversicherung", type: "Website", category: "Rights & Legal", tags: ["insurance"], source: "ngo" },
  { id: "r128", title: "Vinted Germany", url: "https://www.vinted.de/", type: "Website", category: "Apps & Tools", tags: ["second-hand"], source: "tool" },
  { id: "r129", title: "Volksbank", url: "https://www.volksbank.de/", type: "Website", category: "Money & Banking", tags: ["bank"], source: "official" },
  { id: "r130", title: "Wertheim Village Outlet", url: "https://www.wertheimvillage.com/en/home/", type: "Website", category: "Apps & Tools", tags: ["outlet"], source: "tool" },
  { id: "r131", title: "Easy German (YouTube)", url: "https://www.youtube.com/@EasyGerman", type: "Video", category: "Apps & Tools", tags: ["language", "video"], source: "video" },
  { id: "r132", title: "PflegeTube Channel", url: "https://www.youtube.com/@PflegeTube", type: "Video", category: "Nursing & Math", tags: ["nursing", "video"], source: "video" },
  { id: "r133", title: "Zalando Germany", url: "https://www.zalando.de/", type: "Website", category: "Apps & Tools", tags: ["clothing"], source: "tool" },
  { id: "r134", title: "ZARA Germany", url: "https://www.zara.com/de/", type: "Website", category: "Apps & Tools", tags: ["clothing"], source: "tool" },
  { id: "r135", title: "H&M Germany", url: "https://www2.hm.com/de_de/index.html", type: "Website", category: "Apps & Tools", tags: ["clothing"], source: "tool" },
  { id: "r136", title: "Deutschlandticket (DB site)", url: "https://www.bahn.de/angebot/regio/deutschland-ticket", type: "Website", category: "Arrival & Setup", tags: ["transport"], source: "official" },
  { id: "r137", title: "Bürgeramt Berlin: Anmeldung", url: "https://service.berlin.de/dienstleistung/120686/", type: "Website", category: "Arrival & Setup", tags: ["anmeldung"], source: "official" },
  { id: "r138", title: "TK - English Health Insurance Guide", url: "https://www.tk.de/en/health-insurance-in-germany/basic-information-german-health-system/german-health-insurance-system-2169412?tkcm=ab", type: "Website", category: "Health & Social", tags: ["insurance", "english"], source: "official" },
  { id: "r139", title: "Make It In Germany - Emergencies (EN)", url: "https://www.make-it-in-germany.com/en/health-care/dealing-emergencies/", type: "Website", category: "Health & Social", tags: ["emergency", "arrival"], source: "official" },
  
  // === STUDY & SCHOLARSHIPS ===
  { id: "r14", title: "DAAD - German Academic Exchange Service", url: "https://www.daad.de/en/", type: "Website", category: "Apps & Tools", tags: ["study", "scholarships"], source: "official" },
  { id: "r45", title: "Deutsches Studentenwerk - Student Services", url: "https://www.studentenwerke.de/", type: "Website", category: "Apps & Tools", tags: ["students", "official"], source: "official" },
  { id: "r46", title: "BafÖG - Education Grants", url: "https://www.bafög.de/", type: "Website", category: "Apps & Tools", tags: ["funding", "official"], source: "official" },
].map((resource) => ({ verified: RESOURCE_VERIFIED, ...resource }));
