# Guide de Déploiement GitHub Pages

## Configuration initiale

### 1. Préparer le repository

```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .
git commit -m "Initial commit: Setup project for GitHub Pages"

# Créer le repository sur GitHub et le lier
git remote add origin https://github.com/votre-username/votre-repo.git
git branch -M main
git push -u origin main
```

### 2. Configurer GitHub Pages

1. Allez dans les paramètres de votre repository sur GitHub
2. Naviguez vers **Settings** → **Pages**
3. Dans **Source**, sélectionnez **GitHub Actions**

### 3. Mettre à jour vite.config.ts

Si votre repository n'est pas à la racine de votre compte GitHub, mettez à jour le `base` dans `vite.config.ts` :

```typescript
export default defineConfig(({mode}) => {
  return {
    base: '/nom-de-votre-repo/',  // Remplacez par le nom de votre repo
    // ... reste de la config
  };
});
```

## Déploiement

### Méthode 1 : Déploiement automatique (Recommandé)


Le workflow GitHub Actions se déclenche automatiquement à chaque push sur `main` :

```bash
git add .
git commit -m "Update presentation"
git push origin main
```

Attendez quelques minutes et votre site sera disponible sur :
`https://votre-username.github.io/votre-repo/`

### Méthode 2 : Déploiement manuel

```bash
# Installer gh-pages si nécessaire
npm install

# Déployer
npm run deploy
```

## Vérification

1. Vérifiez le statut du déploiement dans l'onglet **Actions** de votre repository
2. Une fois terminé, visitez votre site : `https://votre-username.github.io/votre-repo/`

## Résolution de problèmes

### Le site ne s'affiche pas correctement

- Vérifiez que le `base` dans `vite.config.ts` correspond au nom de votre repository
- Assurez-vous que le fichier `.nojekyll` existe à la racine du projet
- Vérifiez les logs dans l'onglet Actions pour voir les erreurs de build

### Les assets ne se chargent pas

- Vérifiez que tous les chemins sont relatifs (pas de `/` au début)
- Le `base: './'` dans vite.config.ts devrait résoudre ce problème

### Erreur de build

```bash
# Testez le build localement
npm run build
npm run preview
```

## Optimisations appliquées

✅ Lazy loading des composants slides
✅ Code splitting automatique (React, Motion, Icons)
✅ Minification avec Terser
✅ Chemins relatifs pour les assets
✅ Workflow GitHub Actions optimisé
✅ Meta tags SEO
✅ Accessibilité (aria-labels)
✅ Fichier .nojekyll pour GitHub Pages

## Commandes utiles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Nettoyer le dossier dist
npm run clean

# Vérifier les types TypeScript
npm run lint

# Déployer manuellement
npm run deploy
```
