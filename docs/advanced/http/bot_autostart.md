# 切换 Bot 自动启动状态

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /bot/autostart/{id} | {id} 为 Bot 的 uuid |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | POST                        |                                       |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "status": "Succeed!"
}
```
