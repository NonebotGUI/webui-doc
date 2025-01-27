# 获取 Bot 信息 <Badge> GET </Badge>


Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口   | /bot/info/&lt;id&gt;    | 其中id为Bot的uuid                                        |
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | GET                        |                                       |
| 返回类型  | json                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |

## 调用示例

```http
GET http://127.0.0.1:port/nbgui/v1/bot/info/uuid
Authorization: Bearer your_token
```

## 返回示例

```json
{
  "name": "OneBot.V11",
  "path": "/media/nightwind/NightWind/workspace/测试bot/OneBot.V11",
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
```