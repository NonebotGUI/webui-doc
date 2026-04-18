# 切换 Bot 自动启动状态

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/toggleAutoStart/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/toggleAutoStart/{id}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "toggleAutoStart",
  "data": {
    "status": "Bot {id} autoStart toggled!"
  }
}
```
