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

  // Remplacez par votre nom d'utilisateur GitHub
  url: 'https://FranckLM3.github.io',
  baseUrl: '/hackathon-nature-en-ville/',

  // Configuration GitHub pages
  organizationName: 'FranckLM3', // Votre nom d'utilisateur GitHub
  projectName: 'hackathon-nature-ville', // Nom du repo
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
        title: 'Nature en Ville',
        logo: {
          alt: 'Logo Hackathon',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '🌱 Le Projet',
          },
          {
            type: 'doc',
            docId: 'thematiques/index',
            position: 'left',
            label: '🎯 Thématiques',
          },
          {
            type: 'doc',
            docId: 'defis/index',
            position: 'left',
            label: '⚡ Défis',
          },
          {
            type: 'doc',
            docId: 'donnees/index',
            position: 'left',
            label: '📊 Données',
          },
          {
            type: 'doc',
            docId: 'ressources/index',
            position: 'left',
            label: '📚 Ressources',
          },
          {
            type: 'doc',
            docId: 'participer/qui-peut-participer',
            position: 'right',
            label: '👋 Participer',
          },
          {
            href: 'https://github.com/FranckLM3/hackathon-nature-ville',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Les thématiques',
                to: '/docs/thematiques',
              },
              {
                label: 'Les défis',
                to: '/docs/defis',
              },
            ],
          },
          {
            title: 'Thématiques',
            items: [
              {
                label: 'Nature et Vivants',
                to: '/docs/thematiques/friches',
              },
              {
                label: 'Explorer',
                to: '/docs/thematiques',
              },
            ],
          },
          {
            title: 'Ressources',
            items: [
              {
                label: 'Données disponibles',
                to: '/docs/donnees',
              },
              {
                label: 'Outils et méthodes',
                to: '/docs/ressources',
              },
              {
                label: 'Participer',
                to: '/docs/participer/qui-peut-participer',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'GERM\'',
                href: 'https://germ-sud.fr/',
              },
              {
                label: 'le Donut',
                href: 'https://www.ledonut-marseille.com/',
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
