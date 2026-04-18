# 重命名文件或目录

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/rename/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/rename/{id}/{path}?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `oldName` (String): 旧名称
- `newName` (String): 新名称

## 返回示例
```json
{
  "type": "renamePath",
  "data": {
    "status": "Path renamed successfully!"
  }
}
```
