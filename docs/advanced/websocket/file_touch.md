# 创建空文件

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/touch/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/touch/{id}/{path}?name={n}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
- `name` (String): 要创建的文件名称

## 返回示例
```json
{
  "type": "createFile",
  "data": {
    "status": "File created successfully!"
  }
}
```
