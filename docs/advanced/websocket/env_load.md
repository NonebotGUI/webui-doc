# 读取配置

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `env/load/{id}/{file}` | `{id}` 为 Bot 的 uuid，`{file}` 仅限 `.env`, `.env.prod`, `.env.dev` |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `env/load/{id}/{file}&token=your_token`  |
| 返回类型  | JSON                         |                                       |

## 返回示例
**成功：**
```json
{
  "type": "envContent",
  "data": "BOT_TOKEN=your_token\n..."
}
```
**非法操作：**
```json
{
  "type": "envContent",
  "data": {
    "error": "Not allowed operation!"
  }
}
```
