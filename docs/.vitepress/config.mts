import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档 | NoneBot WebUI",
  description: "新一代 NoneBot Web 管理界面",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NoneBot WebUI 文档',
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Desktop 版本', link: 'https://doc.nbgui.top' }
    ],

    sidebar: [
      {
        text: '开始之前',
        items: [
          { text: '你需要知道的一些事', link: '/before/before-start' },
          { text: '赞助', link: '/before/donate.md' },
          { text: '安装依赖', link: '/before/install-deps.md' }
        ]
      },
      {
        text: '配置',
        items: [
          { text: 'Docker 安装(推荐)', link: '/config/docker' },
          { text: '速通', link: '/config/fast' },
          { text: '配置 NoneBot Agent', link: '/config/nba' },
          { text: '配置 Dashboard', link: '/config/dashboard' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NonebotGUI/nonebot-flutter-webui-dashboard' }
    ]
  }
}
)
