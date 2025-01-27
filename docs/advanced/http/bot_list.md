# 获取 Bot 列表 <Badge> GET </Badge>


Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /bot/list | 若请求端与服务端为同一机器可用127.0.0.1代替，端口号为用户自行设置 |
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | GET                        |                                       |
| 返回类型  | json                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |

## 调用示例

```http
GET http://127.0.0.1:port/nbgui/v1/bot/list
Authorization: Bearer your_token
```

## 返回示例

```json
[
  {
    "name": "bot1",
    "path": "/media/nightwind/NightWind/workspace/测试bot/bot2",
    "time": "2025年1月5日12时34分32秒",
    "id": "58faed7acd664ceeaee526bc1c0fafa7",
    "isRunning": false,
    "pid": "Null",
    "type": "default",
    "protocolPath": "none",
    "cmd": "none",
    "protocolPid": "Null",
    "protocolIsRunning": false
  },
  {
    "name": "bot2",
    "path": "/media/nightwind/NightWind/workspace/测试bot/bot3",
    "time": "2025年1月19日14时33分19秒",
    "id": "6d0d6e45d3c7486d940fe3a8867fcab1",
    "isRunning": false,
    "pid": "Null",
    "type": "imported",
    "protocolPath": "",
    "cmd": "",
    "protocolPid": "Null",
    "protocolIsRunning": false
  }
]
```