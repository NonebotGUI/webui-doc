# 移动文件或目录

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/move/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为当前路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/move/{id}/{path}?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `name` (String): 要移动的文件/目录名称
- `target` (String): 目标路径

## 返回示例
```json
{
  "type": "movePath",
  "data": {
    "status": "Path moved successfully!"
  }
}
```
