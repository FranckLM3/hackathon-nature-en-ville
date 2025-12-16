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
      type: 'category',
      label: '🏁 Déroulement',
      link: {
        type: 'doc',
        id: 'pendant-le-hackathon/index',
      },
      items: [
        'pendant-le-hackathon/choix-defi',
        'pendant-le-hackathon/constitution-equipes',
        'pendant-le-hackathon/mentors',
        {
          type: 'doc',
          id: 'pendant-le-hackathon/rendu-intermediaire',
          label: 'Rendu intermédiaire (à faire)',
        },
        {
          type: 'doc',
          id: 'pendant-le-hackathon/soumission',
          label: 'Soumission (à faire)',
        },
        {
          type: 'doc',
          id: 'pendant-le-hackathon/evaluation',
          label: 'Évaluation (à faire)',
        },
      ],
    },
  ],
};

module.exports = sidebars;
