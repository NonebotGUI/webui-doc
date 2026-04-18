# 新增配置项

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `env/add` | 需要携带 `?data={json}` 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `env/add?data={json}&token=your_token`   |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `id` (String): Bot 的 uuid
- `filename` (String): 文件名 (`.env`, `.env.prod`, `.env.dev`)
- `varName` (String): 变量名
- `varValue` (String): 变量值

## 返回示例
**成功：**
```json
{
  "type": "addEnv",
  "data": {
    "status": "Env file {filename} added!"
  }
}
```
**非法操作：**
```json
{
  "type": "addEnv",
  "data": {
    "error": "Not allowed operation!"
  }
}
```
