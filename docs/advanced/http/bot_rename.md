# 重命名 Bot

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /bot/rename/{id} | {id} 为 Bot 的 uuid |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | POST                        |                                       |
| 返回类型  | JSON                         |                                       |

## 请求参数
客户端在发送请求时，应在请求的body中以JSON格式包含以下参数：
- `name` (String): 新的 Bot 名称

## 返回示例
```json
{
  "status": "Bot {id} renamed to {name}!"
}
```
