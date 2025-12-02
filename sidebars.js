/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📖 Le Projet',
      items: [
        'le-projet/presentation',
        'le-projet/pourquoi-marseille',
        'le-projet/methode-hackathon',
        'le-projet/historique-germ',
      ],
    },
    {
      type: 'category',
      label: '🌿 Thématiques',
      items: [
        'thematiques/index',
        {
          type: 'category',
          label: 'Nature et Vivants',
          items: [
            'thematiques/friches',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🎯 Défis',
      items: [
        'defis/index',
        'defis/retour-hirondelles',
        'defis/sols-vivants',
        'defis/desimpermeabilisation',
        'defis/conflits-usage',
        'defis/trames-ecologiques',
      ],
    },
    {
      type: 'category',
      label: '📊 Données',
      items: [
        'donnees/index',
        'donnees/sources',
        'donnees/comment_utiliser',
      ],
    },
    {
      type: 'category',
      label: '📚 Ressources',
      items: [
        'ressources/index',
        'ressources/outils',
        'ressources/inspirations',
        'ressources/glossaire',
      ],
    },
    {
      type: 'category',
      label: '👋 Participer',
      items: [
        'participer/qui-peut-participer',
        'participer/inscription',
        'participer/programme',
      ],
    },
    'manifeste-friches',
  ],
};

module.exports = sidebars;
