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
        text: '友链',
        items: [
          { text: 'LazyTea', link: '/friend-link/lazytea.md' },
          { text: '_RyF的雨云优惠折扣', link: '/friend-link/ryf.md'},
          { text: '哈基米的个人站', link: '/friend-link/lilyxuan.md'}
        ]
      },
      {
        text: '配置',
        items: [
          { text: 'Docker 安装(推荐)', link: '/config/docker' },
          { text: '速通', link: '/config/fast' },
          { text: '配置 NoneBot Agent', link: '/config/nba' },
          { text: '使用移动客户端进行连接（Android）', link: '/config/mobile' },
          { text: '配置 Dashboard', link: '/config/dashboard' }
        ]
      },
      {
        text: '高级玩法',
        items: [
          { text: '介绍', link: '/advanced/introduction' },
          { text: 'HTTP API', items: [
            { text: 'API 总览', link: '/advanced/http/total' },
            { text: 'ping', link: '/advanced/http/ping' },
            { text: '获取Bot列表', link: '/advanced/http/bot_list' },
            { text: '获取Bot信息', link: '/advanced/http/bot_info' },
            { text: '启动Bot', link: '/advanced/http/run_bot' },
            { text: '停止Bot', link: '/advanced/http/stop_bot' },
            { text: '重启Bot', link: '/advanced/http/restart_bot' },
            { text: '获取Bot日志', link: '/advanced/http/bot_log' },
            { text: '获取插件列表', link: '/advanced/http/plugin_list' },
            { text: '获取被禁用的插件列表', link: '/advanced/http/plugin_disabled_list' },
            { text: '获取系统占用状态', link: '/advanced/http/system_status' },
            { text: '获取系统平台', link: '/advanced/http/system_platform' },
            { text: '获取Agent端版本', link: '/advanced/http/agent_version' },
            { text: '创建Bot', link: '/advanced/http/create_bot' },
            { text: '导入Bot', link: '/advanced/http/import_bot' },
            { text: '启用插件', link: '/advanced/http/enable_plugin' },
            { text: '禁用插件', link: '/advanced/http/disable_plugin' },
            { text: '安装插件', link: '/advanced/http/install_plugin' },
            { text: '卸载插件', link: '/advanced/http/uninstall_plugin' },
            { text: '安装适配器', link: '/advanced/http/install_adapter' },
            { text: '安装驱动器', link: '/advanced/http/install_driver' },
            { text: '删除Bot', link: '/advanced/http/remove_bot' },
            { text: '永久删除Bot', link: '/advanced/http/remove_bot_forever' },
          ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NonebotGUI/nonebot-flutter-webui-dashboard' }
    ]
  }
}
)
