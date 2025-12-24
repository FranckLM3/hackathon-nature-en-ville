// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hackathon Nature en Ville',
  tagline: 'Marseille - 23-24-25 janvier 2026',
  favicon: 'img/favicon.ico',

  // Configuration GitHub Pages
  url: 'https://francklm3.github.io',
  baseUrl: '/',

  // Configuration GitHub pages
  organizationName: 'FranckLM3', // Votre nom d'utilisateur GitHub
  projectName: 'hackathon-nature-en-ville', // Nom du repo
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Lien pour éditer les pages
          editUrl: 'https://github.com/FranckLM3/hackathon-nature-en-ville/tree/main/',
        },
        blog: false, // On désactive le blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Métadonnées pour les réseaux sociaux
      image: 'img/social-card.jpg',
      
      navbar: {
        title: '🌿 Hackathon Nature en Ville',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '🏠 Accueil',
          },
          {
            type: 'doc',
            docId: 'le-projet/index',
            position: 'left',
            label: '📖 Le Projet',
          },
          {
            type: 'doc',
            docId: 'participer/index',
            position: 'left',
            label: '🎟️ Participer',
          },
          {
            type: 'doc',
            docId: 'pendant-le-hackathon/index',
            position: 'left',
            label: '📅 Déroulement',
          },
          {
            type: 'doc',
            docId: 'ressources-hackathon/index',
            position: 'left',
            label: '📦 Ressources',
          },
          {
            type: 'doc',
            docId: 'contact',
            position: 'left',
            label: '📞 Contact',
          },
          {
            href: 'https://framaforms.org/youpi-je-participe-au-hackathon-de-la-nature-en-ville-1765824450',
            label: '✅ S\'inscrire',
            position: 'right',
            className: 'navbar-cta-button',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Le Projet',
            items: [
              {
                label: 'Présentation',
                to: '/docs/le-projet/presentation',
              },
              {
                label: 'Porteur du projet',
                to: '/docs/le-projet/porteur-projet',
              },
              {
                label: 'Partenaires',
                to: '/docs/le-projet/partenaires',
              },
              {
                label: 'Approche et thématique',
                to: '/docs/le-projet/approche-thematique',
              },
            ],
          },
          {
            title: 'Participer',
            items: [
              {
                label: 'S\'inscrire',
                href: 'https://framaforms.org/youpi-je-participe-au-hackathon-de-la-nature-en-ville-1765824450',
              },
              {
                label: 'Guide de participation',
                to: '/docs/participer/index',
              },
            ],
          },
          {
            title: 'Ressources',
            items: [
              {
                label: 'Programme',
                to: '/docs/ressources-hackathon/programme',
              },
              {
                label: 'Données',
                to: '/docs/ressources-hackathon/donnees',
              },
              {
                label: 'Inspirations',
                to: '/docs/ressources-hackathon/inspirations',
              },
            ],
          },
          {
            title: 'Partenaires',
            items: [
              {
                label: 'GERM',
                href: 'https://www.germ-sud.fr/',
              },
              {
                label: 'le Donut',
                href: 'https://www.ledonut-marseille.com/',
              },
              {
                label: 'Ville de Marseille',
                href: 'https://www.marseille.fr/',
              },
            ],
          },
        ],
        copyright: `Contenu sous licence Creative Commons CC-BY-SA 4.0 - ${new Date().getFullYear()} | Hackathon Nature en Ville`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
      // Configuration de la recherche (optionnel)
      algolia: {
        // Si vous configurez Algolia plus tard
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
      },
    }),
};

module.exports = config;
