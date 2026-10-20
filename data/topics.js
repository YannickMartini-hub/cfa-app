// ============================================================
// topics.js — la liste des 10 topics du CFA Level 1 (curriculum 2027)
// Chaque topic a : un id (utilisé partout dans l'app), un code court,
// son nom officiel, sa pondération à l'examen, et un statut de contenu.
// ============================================================
window.CFA = window.CFA || {};

CFA.topics = [
  { id: "eth", code: "ETH", name: "Ethical & Professional Standards", fr: "Éthique", weight: "15–20 %", changed2027: true, priority: true },
  { id: "qm",  code: "QM",  name: "Quantitative Methods",             fr: "Méthodes quantitatives", weight: "6–9 %", changed2027: true },
  { id: "eco", code: "ECO", name: "Economics",                        fr: "Économie", weight: "6–9 %" },
  { id: "ci",  code: "CI",  name: "Corporate Issuers",                fr: "Émetteurs", weight: "6–9 %" },
  { id: "fsa", code: "FSA", name: "Financial Statement Analysis",     fr: "Analyse financière", weight: "11–14 %", priority: true },
  { id: "eq",  code: "EQ",  name: "Equity Investments",               fr: "Actions", weight: "11–14 %", changed2027: true },
  { id: "fi",  code: "FI",  name: "Fixed Income",                     fr: "Obligataire", weight: "11–14 %" },
  { id: "der", code: "DER", name: "Derivatives",                      fr: "Dérivés", weight: "5–8 %" },
  { id: "alt", code: "ALT", name: "Alternative Investments",          fr: "Alternatifs", weight: "7–10 %" },
  { id: "pm",  code: "PM",  name: "Portfolio Management",             fr: "Gestion de portefeuille", weight: "8–12 %" }
];

// Le contenu détaillé de chaque topic est ajouté par son propre fichier
// (ex : data/fsa.js remplit CFA.content.fsa).
CFA.content = CFA.content || {};
