# 配置 Dashboard

<p style="display: inline-flex">
  <a href="https://github.com/NonebotGUI/nonebot-flutter-webui-dashboard">
    <img src="https://img.shields.io/badge/Github-black?logo=Github" style="margin-right: 5px" alt="Github" />
  </a>
</p>

## 这是什么？
WebUI 的本体，开放给用户的 Web 界面，用于管理 NoneBot 的运行。

## 安装
前往 [这里](https://github.com/NonebotGUI/nonebot-flutter-webui-dashboard/releases)下载最新版本的对应系统的 `self-host` 程序以及 `dashboard-index.zip` 文件，并将 `dashboard-index.zip` 中的 `web` 目录解压到与 `self-host` 程序同级目录内。<br>

::: tip
为了避免配置文件冲突，请不要将 dashboard 与前文的 Agent 放在同一个文件夹内。
:::

![img](/guide/dashboard_release.webp)


### 我应该下载哪个 dashboard-index.zip ?
推荐下载 `dashboard-index-canvaskit.zip`，该版本使用 `canvaskit` 作为渲染器，体验较好且性能高，但初次加载时需要较长时间。<br>
`dashboard-index-html.zip` 使用 `html` 作为渲染器，性能较低且伴随卡顿现象，但首次加载耗时较短，不推荐使用。

#### 解压完以后，你的目录结构应该是这样的：


```
dashboard/
├── web/
│   ├── assets/
│   │  ├── ...
│   └── index.html
├── secret.key
├── config.json
└── dashboard-linux

agent/
├── config.json
└── agent-linux
```



::: tip
Linux 和 MacOS 需要给予文件执行权限，可以通过 `chmod +x dashboard-linux` 或 `chmod +x dashboard-macos` 给予执行权限。
:::


## 配置
首次运行 dashboard 会生成 `config.json` 和 `secret.key` 文件，你需要在 `config.json` 进行一些必要的配置才能正常使用。<br>

生成的配置文件如下:

```json
{
  "host": "0.0.0.0",  // 监听地址，如果需要监听 IPv6 请改为 "::"
  "port": 8025,  // 开放的端口
  "password": "123456", // 访问 WebUI 的密码
  "connection": { // 连接到 Agent 的配置
    "host": "127.0.0.1", // Agent 的地址，如果是 IPv6 的地址请在前面加上方括号，如 "[::1]"
    "port": 2519, // Agent 的端口
    "token": "123456"  // Agent 的 token
  },
  "connectionMode": 2, // 连接模式，默认为 2，下文会详细说明
  "theme": {
    "color": "light", // 主题颜色，可选值为 "light" 或 "dark"
    "img": "default", // 自定义登录页图片，填入 "default" 或图片的 URL
    "text": "default", // 自定义登录页文字，填入 "default" 或文字内容
    "hitokoto": true  // 是否显示一言
  }
}
```
### connectionMode 说明
`connectionMode` 为连接模式，有以下几种模式可供选择：

- `1`：直连模式，直接通过配置的 `host` 和 `port` 连接到 Agent 的 ws 服务，需要 Agent 主机拥有公网 IP 地址并放行对应端口，对外可访问。

- `2`：代理模式，通过 WebUI 的 WebSocket 桥梁将 ws 请求转发到 Agent，需要配置好 WebUI 的 `host` 和 `port`，并确保 WebUI 的 `host` 和 `port` 对外可访问，如果 WebUI 与 Agent 在同一宿主机内，可直接将 `connection` 的 `host` 指向 `127.0.0.1` ， `port` 指向 Agent 对应端口。Agent 的 `host` 和 `port` 仅需对内可访问即可。

## 启动
在配置完成后，同时运行 `self-host` 和 Agent 即可启动 WebUI，你将会看到如下输出：

```shell
2024-12-29 11:03:54 [SUCCESS] | Dashboard | WebSocket connection established.
2024-12-29 11:03:54 [INFO] | Dashboard | Listening on http://0.0.0.0:8082
```

在 Agent 中，你将会看到如下输出：

```shell
2024-12-29 11:03:54 [SUCCESS] | NoneBot Agent | Websocket connection established. 1 connections now.
```

这代表 WebUI 与 Agent 之间的连接已经建立。

## Enjoy it!
现在你可以打开浏览器，输入 `http://ip:port` 访问 WebUI 了！

![img](/guide/webui_login.webp)

::: tip
首次加载时间较长，请耐心等待（速度取决于网络速度和服务器带宽）
:::