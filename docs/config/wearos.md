# 在手表上进行连接（Android/WearOS）

<p style="display: inline-flex">
  <a href="https://github.com/NonebotGUI/nonebot-webui-wear">
    <img src="https://img.shields.io/badge/Github-black?logo=Github" style="margin-right: 5px" alt="Github" />
  </a>
</p>

## 这是什么？
WebUI 的手表客户端实现，用户能够在带有 WearOS 或者 Android 的手表设备上管理你的 Bot （需要互联网连接）

## 安装
前往 [这里](https://github.com/NonebotGUI/nonebot-webui-wear/releases)下载最新版本的对应架构的安装包并安装，如果不确定架构，可以直接下载 `universal`.<br>



## 配置
首次运行会进入配置界面，你需要进行一些必要的配置才能正常使用。<br>

### Agent 的主机

此处填入你运行 `Agent` 的主机的 IP 地址，如 `Agent` 端配置了证书，需要使用 `wss://` 进行连接，否则默认 `ws://`

### Agent 的端口

填入 `Agent` 端开放的端口

### Agent 的Token

填入你给 `Agent` 端设置的Token

## Enjoy it！

确认填入信息无误后，点击 `保存并连接` 按钮，将会进行连接测试，测试成功后，自动进入主界面，即可开始使用。

## Bot 控制台的使用方法

Wear 端为适配手表屏幕，去除了控制台底部的按钮，只保留日志显示，如需调出按钮，请在控制台界面双击屏幕。