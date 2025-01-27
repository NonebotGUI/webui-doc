# 获取 Bot 日志 <Badge> GET </Badge>


Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口   | /bot/log/&lt;id&gt;    | 其中id为Bot的uuid                                        |
| 调用方式  | 同步调用，等待软件完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | GET                        |                                       |
| 返回类型  | text                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |

## 调用示例

```http
GET http://127.0.0.1:port/nbgui/v1/bot/log/6d0d6e45d3c7486d940fe3a8867fcab1
Authorization: Bearer your_token
```

## 返回示例

```text
Using python: /media/nightwind/NightWind/workspace/测试bot/bot2/.venv/bin/python
01-08 00:18:32 [SUCCESS] nonebot | NoneBot is initializing...
01-08 00:18:32 [INFO] nonebot | Current Env: prod
01-08 00:18:32 [DEBUG] nonebot | Succeeded to load adapter "OneBot V11"
01-08 00:18:33 [SUCCESS] nonebot | Succeeded to load plugin "echo" from "nonebot.plugins.echo"
01-08 00:18:33 [SUCCESS] nonebot | Running NoneBot...
01-08 00:18:33 [SUCCESS] nonebot | Loaded adapters: OneBot V11
01-08 00:18:33 [INFO] uvicorn | Started server process [462228]
01-08 00:18:33 [INFO] uvicorn | Waiting for application startup.
01-08 00:18:33 [INFO] uvicorn | Application startup complete.
01-08 00:18:33 [INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
01-08 00:18:50 [INFO] uvicorn | Waiting for application shutdown.
01-08 00:18:50 [INFO] uvicorn | Application shutdown complete.
01-08 00:18:51 [INFO] uvicorn | Finished server process [462228]
```