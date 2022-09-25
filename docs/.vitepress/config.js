import { defineConfig } from 'vitepress';
import { description, version } from '../../package.json';

export default defineConfig({
  lang: 'en-US',
  title: 'Leafly-Vue',
  description: description,
  base: '/leafly-vue/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Overpass+Mono:wght@300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }],
  ],

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarDocs(),
    },

    outline: [2, 3],

    editLink: {
      pattern: 'https://github.com/exotelis-labs/leafly-vue/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exotelis-labs/leafly-vue' },
    ],

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} by leafly-vue`,
    },

    algolia: {
      appId: '33EGKC9VLM',
      apiKey: '1764ced1e315dcb39ed5308f8225f07c',
      indexName: 'leafly-vue'
    },
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/exotelis-labs/leafly-vue/blob/master/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/exotelis-labs/leafly-vue/blob/master/.github/contributing.md'
        },
      ]
    }
  ]
}

function sidebarDocs() {
  return [
    {
      text: 'Introduction',
      collapsible: false,
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Development Guide', link: '/guide/development-guide' },
        { text: 'Browser support', link: '/guide/browser-support' },
      ],
    },
    {
      text: 'Design System',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Colors', link: '/guide/design-system/colors' },
        { text: 'Spacing', link: '/guide/design-system/spacing' },
        { text: 'Iconography', link: '/guide/design-system/iconography' },
        { text: 'Typography', link: '/guide/design-system/typography' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Card', link: '/guide/components/card' },
        { text: 'Tag', link: '/guide/components/tag' },
      ],
    },
    {
      text: 'Composable',
      collapsible: true,
      collapsed: true,
      items: [
        // { text: 'useA', link: '/guide/composable/useA' },
        // { text: 'useB', link: '/guide/composable/useB' },
        // { text: 'useC', link: '/guide/composable/useC' },
      ],
    },
  ]
}
