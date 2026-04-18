# 写入文件内容

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/write/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/write/{id}/{path}?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `filename` (String): 文件名称
- `content` (String): 要写入的内容

## 返回示例
```json
{
  "type": "writeFile",
  "data": {
    "status": "File written successfully!"
  }
}
```
