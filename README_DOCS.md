# 🌱 Hackathon Nature en Ville - Documentation

Documentation du hackathon Nature en Ville pour Marseille (23-24-25 janvier 2026).

Site web : **[hackathon-nature-ville.github.io](https://FranckLM3.github.io/hackathon-nature-ville/)**

## 📋 Table des matières

- [À propos](#-à-propos)
- [Installation](#-installation)
- [Démarrage local](#-démarrage-local)
- [Build](#-build)
- [Déploiement](#-déploiement)
- [Structure du projet](#-structure-du-projet)
- [Contribution](#-contribution)

## 🎯 À propos

Ce site contient toute la documentation du hackathon Nature en Ville :

- **Introduction au projet** : vision et objectifs
- **Thématiques** : les trois grands axes du hackathon
  - Nature et Vivants
  - Nature et Santé
  - Adaptation aux épreuves climatiques
- **Défis** : les problématiques à résoudre
- **Données** : ressources et inventaires des données disponibles
- **Ressources** : outils, méthodes, rapports et références
- **Guide de participation** : comment s'impliquer

Construit avec **[Docusaurus 3](https://docusaurus.io/)**.

## 📦 Installation

**Prérequis :**
- Node.js >= 20
- npm >= 10

**Cloner et installer :**

```bash
git clone https://github.com/FranckLM3/hackathon-nature-ville.git
cd hackathon-nature-ville
npm install
```

## 🚀 Démarrage local

Lancer le serveur de développement :

```bash
npm start
```

Le site s'ouvre automatiquement sur `http://localhost:3000/hackathon-nature-ville/`

Hot reload activé : les modifications sont reflétées en temps réel.

## 🔨 Build

Générer une version de production :

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `build/`.

## 🌐 Déploiement

### Option 1 : Déploiement automatique (recommandé)

Le déploiement sur GitHub Pages est **automatisé** via GitHub Actions :

- Chaque push sur la branche `main` déclenche une compilation et un déploiement
- Le site est accessible sur : `https://FranckLM3.github.io/hackathon-nature-ville/`

**Configuration requise (une fois) :**

1. Allez dans les paramètres du repository GitHub
2. Sous **Pages**, sélectionnez :
   - Branch source : `gh-pages`
   - Folder : `/ (root)`

### Option 2 : Déploiement manuel

```bash
npm run deploy
```

> ⚠️ Nécessite l'accès en écriture au repository.

## 📁 Structure du projet

```
hackathon-nature-en-ville/
├── docs/                          # Contenu de la documentation
│   ├── intro.md                   # Page d'introduction
│   ├── defis/                     # Section Défis
│   ├── donnees/                   # Section Données
│   ├── participer/                # Section Participation
│   ├── ressources/                # Section Ressources
│   └── thematiques/               # Section Thématiques
│       ├── nature-vivants.md
│       ├── nature-sante.md
│       └── adaptation-climatique.md
├── src/                           # Code source React personnalisé
│   ├── components/                # Composants réutilisables
│   ├── css/                       # Styles personnalisés
│   └── pages/                     # Pages personnalisées
├── static/                        # Fichiers statiques (images, etc.)
│   └── img/
├── docusaurus.config.js           # Configuration Docusaurus
├── sidebars.js                    # Configuration de la sidebar
└── package.json                   # Dépendances et scripts

```

## 📝 Scripts disponibles

```bash
npm start              # Serveur de développement
npm run build          # Build production
npm run serve          # Servir la version compilée localement
npm run deploy         # Déployer sur GitHub Pages
npm run clear          # Nettoyer le cache
npm run write-translations  # Générer les fichiers de traduction
```

## ✏️ Éditer la documentation

### Ajouter une nouvelle page

1. Créer un fichier Markdown dans le dossier approprié :
   ```bash
   docs/nom-section/nouvelle-page.md
   ```

2. Ajouter l'entrée correspondante dans `sidebars.js`

3. Les modifications apparaissent automatiquement sur le serveur local

### Format Markdown

Utilisez le format Markdown standard avec des métadonnées frontmatter :

```markdown
---
sidebar_position: 1
---

# Titre de la page

Contenu en Markdown...
```

**Options frontmatter utiles :**
- `sidebar_position` : ordre d'affichage dans la sidebar
- `slug` : URL personnalisée
- `id` : identifiant unique (sinon déduit du nom du fichier)

## 🎨 Personnalisation

### Modifier les couleurs et le style

Éditez `src/css/custom.css` pour personnaliser l'apparence.

### Ajouter des images

Placez les images dans `static/img/` et référencez-les :

```markdown
![Alt text](/img/nom-image.png)
```

### Modifier la configuration générale

Éditez `docusaurus.config.js` pour :
- Changer le titre du site
- Modifier la barre de navigation
- Configurer le pied de page
- Ajouter des plugins

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Fork le repository
2. Créer une branche : `git checkout -b feature/votre-feature`
3. Commit : `git commit -am 'Add some feature'`
4. Push : `git push origin feature/votre-feature`
5. Créer une Pull Request

## 📄 Licence

Le contenu est sous licence **Creative Commons CC-BY-SA 4.0**.

Le code source est sous licence **MIT**.

## 📞 Contact

Pour des questions ou suggestions :

- 📧 Email : [À remplir]
- 🐙 GitHub : https://github.com/FranckLM3/hackathon-nature-ville
- 🌐 Site : https://www.nature-en-ville.com/

---

**Hackathon Nature en Ville** | Marseille | 23-24-25 janvier 2026
