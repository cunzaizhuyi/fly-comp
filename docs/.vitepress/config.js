const path = require('path')

module.exports = {
  title: 'fly-comp',
  description: '长尾组件库',
  themeConfig: {
    repo: 'https://github.com/cunzaizhuyi/fly-ui',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: '介绍', link: '/' },
          { text: '开始', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          // { text: 'Component A', link: '/components/component-a' },
          // { text: 'Component B', link: '/components/component-b' },
          { text: 'MaskSwipe', link: '/components/MaskSwipe' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'fly-comp': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
    }
  }
}
