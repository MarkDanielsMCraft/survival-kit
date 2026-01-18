import { LINKS } from '../constants/config';

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
  { id: "r29", title: "Google Maps Germany", url: "maps.google.com", type: "App", category: "Arrival & Setup", tags: ["navigation"], source: "tool" },
  
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
