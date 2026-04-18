# 读取文件内容

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/read/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/read/{id}/{path}?name={n}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
- `name` (String): 要读取的文件名称

## 返回示例
```json
{
  "type": "fileContent",
  "data": "File content here..."
}
```
