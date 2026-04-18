# 启动 Bot

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/run/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/run/{id}&token=your_token`          |
| 返回类型  | JSON                         |                                       |

## 返回示例
**启动成功：**
```json
{
  "type": "startBot",
  "data": "{\"status\": \"Bot {id} started!\"}"
}
```
**已经在运行：**
```json
{
  "type": "startBot",
  "data": "{\"code\": 1002, \"error\": \"Bot {id} is already running!\"}"
}
```
