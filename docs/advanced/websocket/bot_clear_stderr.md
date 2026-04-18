# 清空 stderr 日志

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/clearStderr/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/clearStderr/{id}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "clearStderr",
  "data": {
    "status": "Stderr log cleared!"
  }
}
```
