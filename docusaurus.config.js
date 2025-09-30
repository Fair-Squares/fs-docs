// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fair Squares Documentation',
  tagline: 'Protocol, architecture, legal & financial layers for equitable housing.',
  // Custom domain for GitHub Pages (CNAME present in /static & root)
  url: 'https://docs.fair-squares.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  // themeConfig: {
  //   image: 'img/FS-light-banner.png',
  //   mermaid: {
  //     theme: {light: 'neutral', dark: 'forest'},
  //   image: 'img/docusaurus.png',
  //   },
  //   prism: {
  //     defaultLanguage: 'rust',
  //   },

  // },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fair-squares',
  projectName: 'fs-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: { defaultLocale: 'en', locales: ['en','nl'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/fair-squares/fs-docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
        logo: { alt: 'FS logo', src: 'img/logo.png' },
        items: [
          { type: 'doc', docId: 'intro', position: 'left', label: 'Docs' },
          { to: '/docs/technology/architecture', label: 'Architecture', position: 'left' },
          { href: 'https://fair-squares.nl', position: 'left', label: 'Main Site' },
          { href: 'https://github.com/fair-squares/fair-squares', label: 'Protocol Repo', position: 'right' },
          { href: 'https://github.com/fair-squares', label: 'Org GitHub', position: 'right' },
        ],
      },
      image: 'img/FS-light-banner.png',
      prism: {
        defaultLanguage: 'rust',
        theme: lightTheme,
        darkTheme: darkTheme,
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
                to: '/docs/learn/lightpaper',
              },
              {
                label: 'Architecture',
                to: '/docs/technology/architecture',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/5u3dxE49V5',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fairsquares',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/fairsquares/',
              }
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
      colorMode: { defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
    }),
};

module.exports = config;
