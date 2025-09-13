# 配置 NoneBot Agent

<p style="display: inline-flex">
  <a href="https://github.com/NonebotGUI/nonebot-agent">
    <img src="https://img.shields.io/badge/Github-black?logo=Github" style="margin-right: 5px" alt="Github" />
  </a>
</p>

## 这是什么？
NoneBot Agent 是一个与 NoneBot WebUI 配套的后端程序，WebUI 通过 Agent 与宿主机的 NoneBot 进行通信。

## 安装
前往 [这里](https://github.com/NonebotGUI/nonebot-agent/releases)下载最新版本的对应系统的 Agent 程序，并放入一个文件夹内。
![img](/guide/nba_release.webp)

::: tip
Linux 和 MacOS 需要给予文件执行权限，可以通过 `chmod +x agent-linux` 或 `chmod +x agent-macos` 给予执行权限
:::

## 配置
首次运行 Agent 会生成 `config.json` 文件，你需要进行一些必要的配置才能正常使用。<br>

生成的配置文件如下:

```json
{
  "host": "127.0.0.1", // 监听地址，如需要监听 IPv6 请改为 "::"
  "port": 2519, // 监听端口
  "token": "", // 用于 Agent 与 WebUI 通信的 Token，首次启动会随机生成
  "freeText": "Mem", // Linux 或者 MacOS 下执行 `free` 命令的关键字，具体请看下文
  "python":"default", // Python 命令路径
  "nbcli":"default",  // nbcli 命令路径
  "color":"light",  // 主题颜色，可选值为 light 和 dark
  "checkUpdate": true,  // 是否检查更新
  "wss": {  // https/wss 配置项，如果你不知道这是什么，请不要修改
  "enabled": false, // 启用状态
  "certpath": "", // 证书路径
  "keypath": "" // 私钥路径
  }
}
```
### freeText 说明

::: tip
`freeText` 在 `0.1.4` 版本已经废弃，现在 Agent 会自动修改 `free` 命令的输出语言，无需再手动配置。
:::

`freeText` 是用于 Agent 在 Linux 或 MacOS 下执行 `free` 命令时的关键字，用于获取内存信息。默认值为 `Mem`，如果你的系统中执行 `free` 命令后显示的并不是 `Mem`，请修改此值。<br>

#### e.g.
正常情况下，我执行 `free` 命令后显示的是这样的：
![img](/guide/free.webp)

这时候箭头指向的 `Mem` 就是 `freeText` 的值。
<br>
但是，有些系统执行 `free` 命令后显示的是这样的：
![img](/guide/free2.webp)

图中箭头指向的 `内存` 就是 `freeText` 的值，需要更改一下，否则 WebUI 无法获取到内存信息。


## 关于 WebSocket Token
首次启动时Agent端将随机生成一个 WebSocket Token 来确保与前端的连接安全，你将会看到类似如下的输出

```shell
2025-09-13 13:47:08 [WARN] | NoneBot Agent | Config file not found, creating a new one...
2025-09-13 13:47:08 [SUCCESS] | NoneBot Agent | Config file created successfully.
```

这时请打开你的 `config.json` 文件，复制 `token` 的值， 你会得到类似于 `1823dbcd` 的字符串，请将其填入 Dashboard 的 `config.json` 中，在配置 Dashboard 的章节中会说明。

## 启动
在配置完成后，运行 Agent 程序，如果你看到类似这样的日志，那么恭喜你，Agent 启动成功了！

```shell
2024-12-28 22:16:43 [WARN] | NoneBot Agent | NoneBot Agent will start in 3 seconds...
2024-12-28 22:16:46 [INFO] | NoneBot Agent | Welcome to NoneBot Agent!
2024-12-28 22:16:46 [INFO] | NoneBot Agent | By 【夜风】NightWind(2125714976@qq.com)
2024-12-28 22:16:46 [INFO] | NoneBot Agent | Released under the GPL-3 License.
2024-12-28 22:16:46 [INFO] | NoneBot Agent | Version: 0.1.7
2024-12-28 22:16:46 [INFO] | NoneBot Agent | HTTP server is starting...
2024-12-28 22:16:46 [INFO] | NoneBot Agent | Started server process [999287]
2024-12-28 22:16:46 [INFO] | NoneBot Agent | Serving at http://127.0.0.1:2519 (Ctrl+C to quit)
2024-12-28 22:16:46 [INFO] | NoneBot Agent | WebSocket server listening on ws://127.0.0.1:2519/nbgui/v1/ws

```