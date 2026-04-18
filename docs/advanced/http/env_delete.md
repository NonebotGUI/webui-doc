# 删除配置项

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /bot/env/delete/{id} | {id} 为 Bot 的 uuid |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | POST                        |                                       |
| 返回类型  | JSON                         |                                       |

## 请求参数
客户端在发送请求时，应在请求的body中以JSON格式包含以下参数：
- `varName` (String): 要删除的变量名称
- `env` (String): 配置文件名 (.env, .env.prod, .env.dev)

## 返回示例
**成功：**
```json
{
  "status": "Env {env} updated!"
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
