# Optimisations GitHub Pages

## ✅ Modifications effectuées

### 1. Configuration Vite
- `base: '/p-br/'` - Chemin de base pour GitHub Pages
- Code splitting automatique (React, Motion, Icons)
- Minification avec Terser
- Suppression des sourcemaps en production
- Optimisation des chunks pour un chargement plus rapide

### 2. Performance
- **Lazy loading** des composants slides avec `React.lazy()`
- **Suspense** avec indicateur de chargement
- **Code splitting** par vendor (react, motion, icons)
- **Prévention du scroll** lors de la navigation clavier

### 3. Accessibilité
- Ajout d'`aria-label` sur tous les boutons
- `role="navigation"` sur les indicateurs
- Support complet du clavier (flèches, espace)
- Meta tags SEO optimisés

### 4. GitHub Pages
- Workflow GitHub Actions automatique (`.github/workflows/deploy.yml`)
- Fichier `.nojekyll` pour éviter le traitement Jekyll
- Script `npm run deploy` pour déploiement manuel
- Configuration optimale pour les assets statiques

### 5. SEO & Métadonnées
- Meta description en français
- Meta author
- Theme color (#00FF9C)
- Titre optimisé
- robots.txt configuré

### 6. Développement
- Configuration VSCode recommandée
- Extensions suggérées
- .gitignore complet
- Documentation de déploiement

## 📊 Résultats attendus

- **Temps de chargement initial** : ~2-3s
- **Temps de navigation** : <100ms entre slides
- **Taille du bundle** : Optimisée avec code splitting
- **Score Lighthouse** : 90+ (Performance, Accessibility, Best Practices)

## 🚀 Déploiement

Le site sera disponible sur : **https://alainpaluku.github.io/p-br/**

### Étapes suivantes

1. Allez dans Settings → Pages sur GitHub
2. Sélectionnez "GitHub Actions" comme source
3. Le workflow se déclenchera automatiquement
4. Attendez 2-3 minutes pour le déploiement

## 🔧 Commandes

```bash
# Développement
npm run dev

# Build local
npm run build

# Prévisualiser
npm run preview

# Déployer
npm run deploy
```
