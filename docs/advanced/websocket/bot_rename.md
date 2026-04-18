# 重命名 Bot

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/rename` | 需要携带 `?data={json}` 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/rename?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `id` (String): Bot 的 uuid
- `name` (String): 新名称

## 返回示例
```json
{
  "type": "renameBot",
  "data": {
    "status": "Bot {id} renamed to {name}!"
  }
}
```
