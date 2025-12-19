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
        'le-projet/porteur-projet',
        'le-projet/partenaires',
        'le-projet/approche-thematique',
      ],
    },
    {
      type: 'doc',
      id: 'participer/index',
      label: '🎟️ Participer',
    },
    {
      type: 'doc',
      id: 'pendant-le-hackathon/index',
      label: '🏁 Déroulement',
    },
    {
      type: 'category',
      label: '📦 Ressources',
      link: {
        type: 'doc',
        id: 'ressources-hackathon/index',
      },
      items: [
        {
          type: 'doc',
          id: 'ressources-hackathon/programme',
          label: 'Programme (à travailler)',
        },
        {
          type: 'doc',
          id: 'ressources-hackathon/donnees',
          label: 'Données (à travailler)',
        },
        'ressources-hackathon/inspirations',
      ],
    },
    {
      type: 'doc',
      id: 'contact',
      label: '💬 Contact',
    },
  ],
};

module.exports = sidebars;
