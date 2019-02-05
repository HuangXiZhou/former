const path = require('path');
const resolve = (val) => path.resolve(__dirname, val);

module.exports = {
  base: '/former/',
  title: 'Former',
  description: '👻 Amazing form adapter, write less, do much.',
  head: [
    [ 'link', { rel: 'icon', href: '/logo.png' } ],
    [ 'script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' } ],
    [ 'script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' } ],
    [ 'script', { src: 'https://cdn.jsdelivr.net/npm/@xizhouh/former/lib/vue/index.js' } ]
  ],
  themeConfig: {
    sidebarDepth: 0,
    nav: [
      { text: 'Github', link: 'https://github.com/HuangXiZhou/former' }
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: true,
        children: [
          [ '/intro/designConcept.md', 'Design Concept' ],
          [ '/intro/install.md', 'Install' ],
          [ '/intro/quickStart.md', 'Quick Start' ]
        ]
      }
    ]
  },
  plugins: [
    'vuepress-plugin-demo-block'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('.')
      }
    }
  }
}
