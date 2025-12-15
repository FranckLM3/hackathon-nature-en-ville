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
      link: {
        type: 'doc',
        id: 'le-projet/index',
      },
      items: [
        'le-projet/presentation',
        'le-projet/historique-germ',
      ],
    },
    {
      type: 'category',
      label: '📦 Ressources du hackathon',
      link: {
        type: 'doc',
        id: 'ressources-hackathon/index',
      },
      items: [
        'ressources-hackathon/programme',
        'ressources-hackathon/informations-pratiques',
        'ressources-hackathon/donnees',
        'ressources-hackathon/manifeste-friches',
        'ressources-hackathon/contact',
      ],
    },
    'avant-le-hackathon',
    {
      type: 'category',
      label: '🏁 Pendant le hackathon',
      link: {
        type: 'doc',
        id: 'pendant-le-hackathon/index',
      },
      items: [
        'pendant-le-hackathon/choix-defi',
        'pendant-le-hackathon/constitution-equipes',
        'pendant-le-hackathon/mentors',
        'pendant-le-hackathon/rendu-intermediaire',
        'pendant-le-hackathon/soumission',
        'pendant-le-hackathon/evaluation',
      ],
    },
    {
      type: 'category',
      label: '✨ Après le hackathon',
      link: {
        type: 'doc',
        id: 'apres-le-hackathon/index',
      },
      items: [
        'apres-le-hackathon/valorisation',
      ],
    },
  ],
};

module.exports = sidebars;
