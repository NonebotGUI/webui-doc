# 获取 Agent 版本信息

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `version` | 必须附带 token 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `version&token=your_token`             |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "version",
  "data": {
    "version": "1.0.0",
    "nbcli": "...",
    "python": "..."
  }
}
```
