# 重启 Bot

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/restart/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/restart/{id}&token=your_token`      |
| 返回类型  | JSON                         |                                       |

## 返回示例
**重启成功：**
```json
{
  "type": "restartBot",
  "data": "{\"status\": \"Bot {id} restarted!\"}"
}
```
**没有运行：**
```json
{
  "type": "restartBot",
  "data": "{\"code\": 1001, \"error\": \"Bot {id} is not running!\"}"
}
```
