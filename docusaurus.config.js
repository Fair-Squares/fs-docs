// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fair Squares documentation',
  tagline: 'Learn all about a about fair housing protocol !',
  url: 'https://docs.fair-squares.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
    prism: {
      additionalLanguages: ['rust'],
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fair-squares', // Usually your GitHub org/user name.
  projectName: 'fs-docs', // Usually your repo name.
  // deploymentBranch: 'gh-pages',
  // trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fair-squares/fs-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fair Squares',
        logo: {
          alt: 'FS logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/fair-squares/fair-squares',
            label: 'FS GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start',
                to: '/docs/intro',
              },
              {
                label: 'Lightpaper',
                to: '/docs/papers/lightpaper',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Polkaverse',
                href: 'https://polkaverse.com/accounts/3sJC5B7bzqbTYJvQSWvaT4CgXJHdwv4EEduP4oE8hEGS8749',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/5u3dxE49V5',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fairsquares',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Fair-Squares/fair-squares',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fair Squares, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
