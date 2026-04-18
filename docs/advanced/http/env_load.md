# 读取配置

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /bot/env/{id}/{env} | {id} 为 Bot 的 uuid, {env} 为 .env, .env.prod 或 .env.dev |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | GET                        |                                       |
| 返回类型  | JSON                         |                                       |

## 返回示例
**成功：**
```json
{
  "content": "BOT_TOKEN=your_token\n..."
}
```
**文件未找到：**
```json
{
  "code": 1004,
  "error": "Env {env} not found!"
}
```
**非法操作：**
```json
{
  "code": 1005,
  "error": "Not allowed operation!"
}
```
