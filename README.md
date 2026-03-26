# CardioDecision-ML

Systeme d'aide a la decision medicale base sur le Machine Learning pour le diagnostic des maladies cardiovasculaires.

## A propos du projet

Ce depot contient le tableau de bord de visualisation et de presentation d'un projet PFE autour du diagnostic cardiovasculaire assiste par IA.

- Etudiant: AOUNI Hamza
- Encadrant: Pr. JILALI ANTARI
- Annee: PFE 2026

## Objectif

Developper une approche de prediction du risque cardiovasculaire et presenter de maniere claire:

- la structure des donnees
- les distributions cliniques
- l'importance des variables
- le pipeline complet de developpement ML

## Dataset

Le projet s'appuie sur le dataset cardiovasculaire Kaggle (cardio_train.csv).

- Taille: 70 000 patients
- Variables: 12 features principales
- Variable cible: cardio (binaire)
- Repartition des classes:
  - Sains: 35 021
  - Malades: 34 979

### Variables principales

- Demographiques: age, gender, height, weight
- Cliniques: ap_hi, ap_lo, cholesterol, gluc
- Mode de vie: smoke, alco, active
- Cible: cardio

## Pipeline ML (complet)

Le pipeline presente dans le dashboard suit les etapes suivantes:

1. Donnees brutes
   - Source: Kaggle CVD
   - 70 000 patients, 12 variables

2. Preprocessing
   - Nettoyage / gestion des outliers
   - Feature engineering (ex: BMI, pulse pressure)
   - Normalisation / encodage

3. Split train/test (80/20)
   - Separation stratifiee
   - Train: 56 000
   - Test: 14 000

4. Entrainement multi-modeles
   - Logistic Regression
   - Decision Tree
   - Random Forest
   - SVM
   - KNN
   - AdaBoost
   - XGBoost
   - LightGBM

5. Optimisation hyperparametres
   - Optuna (Bayesian search)

6. Evaluation et benchmarking
   - Accuracy / F1
   - ROC-AUC / PR-AUC
   - Recall (metrique critique)
   - McNemar test
   - Validation croisee, matrice de confusion, classification report

7. Explainability
   - SHAP global et local
   - Explications patient-level

8. Selection finale & deploiement
   - Choix du meilleur modele selon performance et stabilite
   - Integration dans une interface de support a la decision

## Dashboard: contenu principal

Le dashboard Next.js inclut:

- Vue d'ensemble des metriques
- Analyse des distributions (age, classes, clinique, mode de vie)
- Dictionnaire des variables
- Feature importance (Random Forest)
- Visualisation du pipeline de developpement
- Notes de preprocessing

## Stack technique

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Recharts
- Framer Motion
- Lucide Icons
- pnpm

## Lancement local

Prerequis: Node.js 20+ et pnpm

```bash
pnpm install
pnpm dev
```

Build production:

```bash
pnpm build
pnpm start
```

## Structure du projet

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    dashboard-header.tsx
    overview-metrics.tsx
    distribution-charts.tsx
    feature-dictionary.tsx
    feature-importance.tsx
    pipeline.tsx
    preprocessing-notes.tsx
    floating-nav.tsx
    site-footer.tsx
  lib/
    data.ts
    utils.ts
```

## Credits

- Realise par: AOUNI Hamza
- Encadrement: Pr. JILALI ANTARI

## License

Projet academique - PFE 2026.
