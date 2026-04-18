# 删除文件或目录

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/delete/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为文件/目录所在路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/delete/{id}/{path}?name={n}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
- `name` (String): 要删除的文件或目录名称

## 返回示例
```json
{
  "type": "deletePath",
  "data": {
    "status": "Path deleted successfully!"
  }
}
```
