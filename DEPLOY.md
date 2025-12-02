# Guide de déploiement - Hackathon Nature en Ville

Ce guide explique comment déployer la documentation sur GitHub Pages.

## 📋 Prérequis

- Un repository GitHub avec le code
- Node.js 20+ installé localement
- Un compte GitHub

## 🚀 Déploiement automatique (Recommandé)

Le déploiement se fait **automatiquement** via GitHub Actions chaque fois que vous faites un `push` sur la branche `main`.

### Configuration GitHub Pages

Pour activer le déploiement automatique :

1. **Accédez aux paramètres du repository**
   - Allez sur : https://github.com/FranckLM3/hackathon-nature-en-ville/settings/pages

2. **Configurez GitHub Pages**
   - Under "Build and deployment"
   - Sélectionnez `Source: GitHub Actions`
   - Cliquez sur "Save"

3. **Vérifiez le déploiement**
   - Allez sur l'onglet "Actions"
   - Vous devriez voir le workflow "Deploy to GitHub Pages" en cours d'exécution
   - Attendez que le build se termine (~ 2-3 minutes)
   - Le site sera accessible sur : https://FranckLM3.github.io/hackathon-nature-en-ville/

## 🛠️ Développement local

### Installation

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm start
```

Le site sera accessible sur http://localhost:3000/hackathon-nature-en-ville/

### Build de production

```bash
npm run build
```

Cela génère un dossier `build/` prêt pour le déploiement.

## 📱 Workflow de modification

1. **Faites vos modifications** dans les fichiers Markdown du dossier `docs/`
2. **Testez localement** avec `npm start`
3. **Commitez et pushez** vers la branche `main`
   ```bash
   git add .
   git commit -m "Description de vos modifications"
   git push origin main
   ```
4. **GitHub Actions** déploiera automatiquement votre site

## 🔧 Déploiement manuel (si nécessaire)

Si le déploiement automatique échoue, vous pouvez déployer manuellement avec SSH :

```bash
USE_SSH=true npm run deploy
```

**Prérequis** : Vous devez avoir une clé SSH configurée pour GitHub.

## ⚠️ Conseils importants

- ✅ **Ne pushez jamais le dossier `build/`** ou `node_modules/`
- ✅ **Toujours tester localement** avant de pusher
- ✅ **Vérifiez les logs** du workflow GitHub Actions si le déploiement échoue
- ✅ **Mettez à jour `docusaurus.config.js`** si vous changez le nom du repository

## 📞 Troubleshooting

### Le site ne se met pas à jour après push

1. Vérifiez que vous avez pushé sur la branche `main`
2. Allez sur l'onglet "Actions" pour voir si le workflow s'est exécuté
3. Si le workflow échoue, vérifiez les logs pour le message d'erreur
4. Attendez quelques secondes après le déploiement avant de rafraîchir le navigateur (cache)

### Les images/assets ne s'affichent pas

1. Assurez-vous que `baseUrl` dans `docusaurus.config.js` est `/hackathon-nature-en-ville/`
2. Les images doivent être dans `static/img/` pour les chemins absolus
3. Utilisez des chemins relatifs pour les images proches des fichiers `.md`

### La navigation ne fonctionne pas correctement

1. Vérifiez que les `docId` dans `sidebars.js` correspondent aux fichiers `.md`
2. Vérifiez qu'il n'y a pas d'erreurs dans la console du navigateur
3. Videz le cache du navigateur

## 📚 Ressources

- [Documentation Docusaurus](https://docusaurus.io/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Actions GitHub Docs](https://docs.github.com/en/actions)
