# 使用移动客户端进行连接（Android）

<p style="display: inline-flex">
  <a href="https://github.com/NonebotGUI/nonebot-webui-mobile">
    <img src="https://img.shields.io/badge/Github-black?logo=Github" style="margin-right: 5px" alt="Github" />
  </a>
</p>

## 这是什么？
WebUI 的移动客户端实现，用于解决 Web 版本加载缓慢的问题，同时大大提高了便携性。

## 安装
前往 [这里](https://github.com/NonebotGUI/nonebot-webui-mobile/releases)下载最新版本的对应架构的安装包并安装，一般来说选择 `arm64` 的架构，如果不确定，可以直接下载 `universal` 。<br>


::: tip
目前暂时无法提供 `iOS` 的预构建发行版，有能力的可以自行拉源码构建。
:::


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