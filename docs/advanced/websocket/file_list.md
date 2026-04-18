# 列出文件和目录

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `file/list/{id}/{path}` | `{id}` 为 Bot 的 uuid, `{path}` 为子路径 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `file/list/{id}/{path}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "fileList",
  "data": [
    {
      "name": "src",
      "isDirectory": true
    },
    {
      "name": "main.py",
      "isDirectory": false
    },
    ...
  ]
}
```
