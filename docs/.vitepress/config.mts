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
          { text: '通过脚本一键安装（推荐）', link: '/config/install' },
          { text: '速通', link: '/config/fast' },
          { text: '配置 NoneBot Agent', link: '/config/nba' },
          { text: '使用移动客户端进行连接（Android）', link: '/config/mobile' },
          { text: '在手表上进行连接（Android/WearOS）', link: '/config/wearos' },
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
             { text: '重命名Bot', link: '/advanced/http/bot_rename' },
             { text: '切换自动启动', link: '/advanced/http/bot_autostart' },
             { text: '启用插件', link: '/advanced/http/enable_plugin' },
             { text: '禁用插件', link: '/advanced/http/disable_plugin' },
             { text: '安装插件', link: '/advanced/http/install_plugin' },
             { text: '卸载插件', link: '/advanced/http/uninstall_plugin' },
             { text: '安装适配器', link: '/advanced/http/install_adapter' },
             { text: '安装驱动器', link: '/advanced/http/install_driver' },
             { text: '删除Bot', link: '/advanced/http/remove_bot' },
             { text: '永久删除Bot', link: '/advanced/http/remove_bot_forever' },
             { text: '读取配置', link: '/advanced/http/env_load' },
             { text: '编辑配置', link: '/advanced/http/env_edit' },
             { text: '新增配置项', link: '/advanced/http/env_add' },
             { text: '删除配置项', link: '/advanced/http/env_delete' },
             { text: '下载文件', link: '/advanced/http/file_download' },
             { text: '上传文件', link: '/advanced/http/file_upload' },
           ] },
           { text: 'WebSocket API', items: [
             { text: 'API 总览', link: '/advanced/websocket/total' },
             { text: 'ping', link: '/advanced/websocket/ping' },
             { text: '获取版本信息', link: '/advanced/websocket/version' },
             { text: '获取系统状态', link: '/advanced/websocket/system' },
             { text: '获取系统平台', link: '/advanced/websocket/platform' },
             { text: '获取 Bot 列表', link: '/advanced/websocket/bot_list' },
             { text: '获取 Bot 信息', link: '/advanced/websocket/bot_info' },
             { text: '获取 Bot 日志', link: '/advanced/websocket/bot_log' },
             { text: '获取 stderr 日志', link: '/advanced/websocket/bot_stderr' },
             { text: '清空 stderr 日志', link: '/advanced/websocket/bot_clear_stderr' },
             { text: '启动 Bot', link: '/advanced/websocket/bot_run' },
             { text: '停止 Bot', link: '/advanced/websocket/bot_stop' },
             { text: '重启 Bot', link: '/advanced/websocket/bot_restart' },
             { text: '导入 Bot', link: '/advanced/websocket/bot_import' },
             { text: '创建 Bot', link: '/advanced/websocket/bot_create' },
             { text: '移除 Bot', link: '/advanced/websocket/bot_remove' },
             { text: '永久删除 Bot', link: '/advanced/websocket/bot_delete' },
             { text: '重命名 Bot', link: '/advanced/websocket/bot_rename' },
             { text: '切换自动启动', link: '/advanced/websocket/bot_toggle_autostart' },
             { text: '安装插件', link: '/advanced/websocket/plugin_install' },
             { text: '卸载插件', link: '/advanced/websocket/plugin_uninstall' },
             { text: '禁用插件', link: '/advanced/websocket/plugin_disable' },
             { text: '启用插件', link: '/advanced/websocket/plugin_enable' },
             { text: '获取插件列表', link: '/advanced/websocket/plugin_list' },
             { text: '获取禁用插件列表', link: '/advanced/websocket/plugin_disabled_list' },
             { text: '安装适配器', link: '/advanced/websocket/adapter_install' },
             { text: '读取配置', link: '/advanced/websocket/env_load' },
             { text: '编辑配置', link: '/advanced/websocket/env_edit' },
             { text: '新增配置项', link: '/advanced/websocket/env_add' },
             { text: '删除配置项', link: '/advanced/websocket/env_delete' },
             { text: '列出文件/目录', link: '/advanced/websocket/file_list' },
             { text: '创建目录', link: '/advanced/websocket/file_mkdir' },
             { text: '删除文件/目录', link: '/advanced/websocket/file_delete' },
             { text: '重命名文件/目录', link: '/advanced/websocket/file_rename' },
             { text: '读取文件', link: '/advanced/websocket/file_read' },
             { text: '写入文件', link: '/advanced/websocket/file_write' },
             { text: '移动文件/目录', link: '/advanced/websocket/file_move' },
             { text: '复制文件/目录', link: '/advanced/websocket/file_copy' },
             { text: '创建空文件', link: '/advanced/websocket/file_touch' },
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
