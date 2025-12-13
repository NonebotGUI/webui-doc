# 速通

::: tip
本文档仅为快速安装指南，详细配置请参考后面的[配置](/config/nba)章节
:::

## 准备工作
首先，你需要下载以下文件（以Windows为例）：
- [dashboard-index-canvaskit.zip](https://github.com/NonebotGUI/nonebot-flutter-webui-dashboard/releases/latest/download/dashboard-index-canvaskit.zip)
- [dashboard-windows.exe](https://github.com/NonebotGUI/nonebot-flutter-webui-dashboard/releases/latest/download/dashboard-windows.exe)
- [agent-windows.exe](https://github.com/NonebotGUI/nonebot-agent/releases/latest/download/agent-windows.exe)

## 安装
在电脑中的任意位置新建**两个**文件夹，名称随意（这里以`nbwebui`和`nbagent`为例）
- 将`dashboard-index.zip`解压到`nbwebui`文件夹中，并将`dashboard-windows.exe`同时放入该文件夹
- 将`agent-windows.exe`放入`nbagent`文件夹中
- 双击运行`dashboard-windows.exe`, 看到`config.json`出现后关闭`dashboard-windows.exe`
- 双击运行`agent-windows.exe`后你会发现无法打开，此时进入下一步

## 配置
- 在`nbagent`文件夹中，打开`config.json`，将`"token":""`的引号中设置token，保存
- 重启`agent-windows.exe`
- 在`nbwebui`文件夹中，打开`config.json`，将`"connection":{"host":"127.0.0.1","port":2519,"token":"123456"}`中的token替换为上一步中设置的token，保存
- 重启`dashboard-windows.exe`
- 如果不出意外的话你现在可以在`dashboard-windows.exe`中看到类似这一行日志：`WebSocket connection established.`

## 访问
- 打开浏览器，访问`http://127.0.0.1:8025`，如果出现了登录页面，恭喜你，安装成功

## 注意
如果你使用的网络是**IPv6**，那么则需要将`nbwebui`文件夹下的`config.json`中的`"host": "127.0.0.1"`改为`"host": "::"`, 访问地址同步改为`http://[IPv6]:8025`
