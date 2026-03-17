// ── All static data extracted from the original dashboard ──
// Content is 100% preserved — only the structure is reorganized.

export const features = [
  {
    cat: "Démographique",
    name: "age",
    desc: "Âge du patient en jours, converti en années. Plage critique : 40-60 ans.",
    type: "int",
    color: "blue" as const,
  },
  {
    cat: "Démographique",
    name: "gender",
    desc: "Sexe biologique (1: femme, 2: homme). ~60% de femmes.",
    type: "cat",
    color: "blue" as const,
  },
  {
    cat: "Démographique",
    name: "height",
    desc: "Taille en cm. Utilisée pour le calcul de l'IMC (BMI).",
    type: "int",
    color: "blue" as const,
  },
  {
    cat: "Démographique",
    name: "weight",
    desc: "Poids en kg. Facteur de risque majeur pour l'obésité.",
    type: "float",
    color: "blue" as const,
  },
  {
    cat: "Clinique",
    name: "ap_hi",
    desc: "Pression systolique. Valeurs critiques : >140 mmHg.",
    type: "int",
    color: "emerald" as const,
  },
  {
    cat: "Clinique",
    name: "ap_lo",
    desc: "Pression diastolique. Indicateur de santé vasculaire.",
    type: "int",
    color: "emerald" as const,
  },
  {
    cat: "Clinique",
    name: "cholesterol",
    desc: "Niveau de cholestérol (1-3). Prédicteur de haut niveau.",
    type: "ord",
    color: "emerald" as const,
  },
  {
    cat: "Clinique",
    name: "gluc",
    desc: "Niveau de glucose (1-3). Corrélation avec le diabète.",
    type: "ord",
    color: "emerald" as const,
  },
  {
    cat: "Mode de vie",
    name: "smoke",
    desc: "Usage du tabac. Impact direct sur l'élasticité artérielle.",
    type: "bin",
    color: "amber" as const,
  },
  {
    cat: "Mode de vie",
    name: "alco",
    desc: "Consommation d'alcool. Facteur aggravant potentiel.",
    type: "bin",
    color: "amber" as const,
  },
  {
    cat: "Mode de vie",
    name: "active",
    desc: "Activité physique. Facteur protecteur majeur.",
    type: "bin",
    color: "amber" as const,
  },
  {
    cat: "Cible",
    name: "cardio",
    desc: "Diagnostic final. Variable binaire équilibrée.",
    type: "bin",
    color: "rose" as const,
  },
];

export const classBalanceData = [
  { name: "Sain", value: 35021, fill: "#00897B" },
  { name: "Malade", value: 34979, fill: "#E53935" },
];

export const ageDistributionData = [
  { range: "30-35", patients: 2400 },
  { range: "35-40", patients: 5200 },
  { range: "40-45", patients: 9800 },
  { range: "45-50", patients: 14200 },
  { range: "50-55", patients: 16800 },
  { range: "55-60", patients: 13600 },
  { range: "60-65", patients: 7900 },
];

export const clinicalData = [
  { name: "Cholestérol", normal: 52900, eleve: 9300, tresEleve: 7800 },
  { name: "Glucose", normal: 59200, eleve: 5200, tresEleve: 5600 },
];

export const lifestyleData = [
  { name: "Fumeurs", value: 9.1, fill: "#E53935" },
  { name: "Alcool", value: 5.3, fill: "#FBC02D" },
  { name: "Actifs", value: 80.4, fill: "#00897B" },
];

export const importanceData = [
  { name: "Âge", value: 88, tier: "high" },
  { name: "Systolique", value: 85, tier: "high" },
  { name: "Diastolique", value: 80, tier: "high" },
  { name: "Cholestérol", value: 72, tier: "medium" },
  { name: "Poids/IMC", value: 65, tier: "medium" },
  { name: "Glucose", value: 48, tier: "low" },
  { name: "Taille", value: 35, tier: "low" },
  { name: "Activité", value: 28, tier: "minimal" },
  { name: "Genre", value: 22, tier: "minimal" },
  { name: "Tabac", value: 18, tier: "minimal" },
  { name: "Alcool", value: 14, tier: "minimal" },
];

export const overviewMetrics = [
  {
    label: "Dataset Size",
    value: 70000,
    sub: "Patients analysés",
    iconType: "database" as const,
  },
  {
    label: "Features",
    value: 12,
    sub: "Variables d'entrée",
    iconType: "target" as const,
  },
  {
    label: "Sains",
    value: 35021,
    sub: "50.03% (Classe 0)",
    iconType: "users" as const,
  },
  {
    label: "Malades",
    value: 34979,
    sub: "49.97% (Classe 1)",
    iconType: "alert" as const,
  },
];

export const preprocessingNotes = [
  {
    title: "Nettoyage",
    desc: "Filtrage des outliers sur la pression artérielle (ap_hi/ap_lo) pour stabiliser le modèle.",
  },
  {
    title: "Conversion",
    desc: "Normalisation de l'âge de jours en années (÷365.25) pour une meilleure interprétabilité.",
  },
  {
    title: "Indice IMC",
    desc: "Calcul du BMI comme feature synthétique : poids / (taille/100)².",
  },
  {
    title: "Équilibre",
    desc: "Dataset naturellement balancé (50/50), évitant le besoin de SMOTE ou ADASYN.",
  },
];

export const navSections = [
  { id: "overview", label: "01" },
  { id: "distributions", label: "02" },
  { id: "features", label: "03" },
  { id: "importance", label: "04" },
  { id: "pipeline", label: "05" },
  { id: "notes", label: "06" },
];

export const algorithms = [
  "Log. Reg.",
  "Dec. Tree",
  "Rand. Forest",
  "SVM",
  "KNN",
  "AdaBoost",
  "XGBoost",
  "LightGBM",
];

export const benchmarkMetrics = [
  { label: "Accuracy / F1", highlight: false },
  { label: "ROC-AUC / PR-AUC", highlight: false },
  { label: "Recall — CRITICAL", highlight: true },
  { label: "McNemar test", highlight: false },
];
