# 获取 stderr 日志

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/stderr/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/stderr/{id}&token=your_token`      |
| 返回类型  | JSON                         |                                       |

## 返回示例
**有日志时：**
```json
{
  "type": "botStderr",
  "hasLog": true,
  "data": "Error log content..."
}
```
**无日志时：**
```json
{
  "type": "botStderr",
  "hasLog": false,
  "data": {
    "error": "No stderr log found!"
  }
}
```
