# 编辑配置

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /bot/env/{id}/{env} | {id} 为 Bot 的 uuid, {env} 为 .env, .env.prod 或 .env.dev |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | POST                        |                                       |
| 返回类型  | JSON                         |                                       |

## 请求参数
客户端在发送请求时，应在请求的body中以JSON格式包含以下参数：
- `content` (String): 完整的配置文件内容

## 返回示例
**成功：**
```json
{
  "status": "Env {env} updated!"
}
```
**非法操作：**
```json
{
  "code": 1005,
  "error": "Not allowed operation!"
}
```
