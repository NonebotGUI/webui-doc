# 编辑配置

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `env/edit` | 需要携带 `?data={json}` 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `env/edit?data={json}&token=your_token`  |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `id` (String): Bot 的 uuid
- `filename` (String): 文件名 (`.env`, `.env.prod`, `.env.dev`)
- `content` (String): 完整的文件内容

## 返回示例
**成功：**
```json
{
  "type": "editEnv",
  "data": {
    "status": "Env file {filename} edited!"
  }
}
```
**非法操作：**
```json
{
  "type": "editEnv",
  "data": {
    "error": "Not allowed operation!"
  }
}
```
