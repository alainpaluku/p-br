# Paiements en Ligne en RDC

Guide complet sur les paiements en ligne en République Démocratique du Congo pour étudiants et créateurs de contenu.

## 🚀 Démo en ligne

Visitez la présentation : [GitHub Pages](https://votre-username.github.io/votre-repo/)

## 📋 Prérequis

- Node.js 20+
- npm ou yarn

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo

# Installer les dépendances
npm install
```

## 💻 Développement local

```bash
# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🏗️ Build

```bash
# Créer un build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 🚀 Déploiement sur GitHub Pages

### Méthode automatique (GitHub Actions)

1. Activez GitHub Pages dans les paramètres du repository :
   - Settings → Pages
   - Source : GitHub Actions

2. Poussez vos changements sur la branche `main` :
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Le workflow GitHub Actions se déclenchera automatiquement et déploiera votre site.

### Méthode manuelle

```bash
# Déployer manuellement
npm run deploy
```

## 🎨 Technologies utilisées

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React (icônes)

## 📝 Structure du projet

```
├── src/
│   ├── components/
│   │   ├── slides/      # Composants des slides
│   │   └── ui/          # Composants UI réutilisables
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   ├── types.ts         # Types TypeScript
│   └── index.css        # Styles globaux
├── public/              # Assets statiques
└── dist/                # Build de production

```

## 🎯 Fonctionnalités

- Navigation au clavier (flèches gauche/droite, espace)
- Animations fluides
- Design responsive
- Indicateur de progression
- Effets visuels modernes

## 📄 Licence

MIT

## 👤 Auteur

**Alain Paluku**
- Website: [alainpaluku.com](https://alainpaluku.com)
- Email: contact@alainpaluku.com
- Company: [NEOSOFT DEVS](https://neosoft.dev)
