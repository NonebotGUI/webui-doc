# 获取系统平台

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `platform` | 必须附带 token 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `platform&token=your_token`            |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "platformInfo",
  "data": {
    "os": "...",
    "arch": "..."
  }
}
```
