module.exports = {
  base: '/former/',
  title: 'Former',
  description: '👻 Amazing form adapter, write less, do much.',
  head: [
    [ 'link', { rel: 'icon', href: '/logo.png' } ],
    [ 'script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' } ],
    [ 'script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' } ],
    [ 'script', { src: 'https://unpkg.com/@xizhouh/former@1.0.4/lib/former.umd.js' } ]
  ],
  themeConfig: {
    search: false,
    sidebarDepth: 0,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Github', link: 'https://github.com/HuangXiZhou/former' }
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          [ '/intro/design-concept.md', 'Design Concept' ],
          [ '/intro/install.md', 'Install' ],
          [ '/intro/quick-start.md', 'Quick Start' ],
          [ '/intro/changelog.md', 'Change Log' ]
        ]
      }, {
        title: 'Usage',
        collapsable: false,
        children: [
          [ '/usage/slot.md', 'Control Slot' ],
          [ '/usage/linkage.md', 'Linkage' ],
          [ '/usage/conditional-render.md', 'Conditional Render' ],
          [ '/usage/validate.md', 'Validate' ],
          [ '/usage/status.md', 'Status' ],
          [ '/usage/custom.md', 'Custom' ]
        ]
      }, {
        title: 'Controls',
        collapsable: false,
        children: [
          [ '/controls/element-ui.md', 'Element UI' ],
        ]
      }
    ]
  },
  plugins: [
    require('./plugins/vuepress-plugin-demo-block/index.js')
  ]
}
