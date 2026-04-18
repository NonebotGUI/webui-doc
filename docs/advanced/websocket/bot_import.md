# 导入 Bot

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/import` | 需要携带 `?data={json}` 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/import?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `name` (String): Bot 名称
- `path` (String): Bot 路径
- `protocolPath` (String): 协议路径
- `withProtocol` (Boolean): 是否包含协议
- `cmd` (String): 启动命令

## 返回示例
```json
{
  "type": "importBot",
  "data": {
    "status": "Bot {name} imported!"
  }
}
```
