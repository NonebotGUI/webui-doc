# 创建目录

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/mkdir/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为父目录路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/mkdir/{id}/{path}?name={n}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
- `name` (String): 要创建的目录名称

## 返回示例
```json
{
  "type": "createDir",
  "data": {
    "status": "Directory created successfully!"
  }
}
```
