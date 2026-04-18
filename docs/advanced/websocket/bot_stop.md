# 停止 Bot

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/stop/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/stop/{id}&token=your_token`         |
| 返回类型  | JSON                         |                                       |

## 返回示例
**停止成功：**
```json
{
  "type": "stopBot",
  "data": "{\"status\": \"Bot {id} stopped!\"}"
}
```
**没有运行：**
```json
{
  "type": "stopBot",
  "data": "{\"code\": 1001, \"error\": \"Bot {id} is not running!\"}"
}
```
