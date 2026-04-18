# 启用插件

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `plugin/enable` | 需要携带 `?data={json}` 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `plugin/enable?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `name` (String): 插件名称
- `id` (String): Bot 的 uuid

## 返回示例
```json
{
  "type": "enablePlugin",
  "data": {
    "status": "Plugin {name} enabled!"
  }
}
```
