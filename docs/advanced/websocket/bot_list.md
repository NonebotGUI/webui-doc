# 获取 Bot 列表

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `botList` | 必须附带 token 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `botList&token=your_token`             |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "botList",
  "data": [
    {
      "id": "uuid-1",
      "name": "Bot 1",
      "status": "running"
    },
    ...
  ]
}
```
