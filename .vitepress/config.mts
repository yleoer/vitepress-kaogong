import { defineConfig } from 'vitepress'
import markdownItMark from 'markdown-it-mark'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "我的个人文库",
  description: "一个私人的文库",
  markdown: {
    config: (md) => {
      md.use(markdownItMark)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '公共基础', link: '/public-base/' }
    ],

    sidebar: {
      '/public-base/': {
        base: '/public-base',
        items: [
          { text: '目录', link: '/' },
          { text: '中国古代史', link: '/ancient-chinese-history' },
          { text: '中国近代史', link: '/modern-chinese-history' }
        ]
      }
    },
  }
})
