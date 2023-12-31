import { DefaultTheme, defineConfig } from 'vitepress'
import markdownItMark from 'markdown-it-mark'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '备考手册',
  description: '我的公考之路',

  lastUpdated: true,
  // cleanUrls: true,

  markdown: {
    math: true,
    config: (md) => {
      md.use(markdownItMark)
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', hef: 'https://river.yxuefeng.com/notebook/favicon.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://river.yxuefeng.com/notebook/favicon.png',
    outline: {
      level: [2, 3],
      label: '目录'
    },

    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/yleoer/vitepress-kaogong/edit/main/docs/:path',
      text: '在 GItHub 上修改此页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present yleoer'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '上次更新'
    },

    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Top'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '行测', link: '/行测/'},
    {
      text: '基础知识',
      items: [
        { text: '非法律部分', link: '/基础知识/非法律部分/' },
        { text: '法律部分', link: '/基础知识/法律部分/' },
      ]
    }
  ]
}

function sidebar(): DefaultTheme.SidebarMulti {
  return {
    '/行测': {
      base: '/行测',
      items: [
        { text: '数量关系', link: '/数量关系' }
      ]
    },
    '/基础知识/非法律部分/': {
      base: '/基础知识/非法律部分',
      items: [
        {
          text: '历史文化',
          items: [
            { text: '中国古代史', link: '/历史文化/中国古代史' },
            { text: '中国近代史', link: '/历史文化/中国近代史' },
            { text: '中外文化', link: '/历史文化/中外文化' },
          ]
        },
        {
          text: '政治经济',
          items: [
            { text: '马克思主义哲学', link: '/政治经济/马克思主义哲学' },
            { text: '毛泽东思想', link: '/政治经济/毛泽东思想' },
            { text: '中国特色社会主义理论体系', link: '/政治经济/中国特色社会主义理论体系' },
          ]
        }
      ]
    }
  }
}
