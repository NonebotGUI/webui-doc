# 永久删除Bot（删除Bot目录）<Badge type="danger"> DELETE </Badge>

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | bot/delete/&lt;id&gt; || &lt;id&gt;为Bot的uuid，该入口会一同删除Bot的目录 |
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | DELETE                        |                                       |
| 返回类型  | json                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |



## 调用示例

```http
DELETE http://127.0.0.1:port/nbgui/v1/bot/delete/58faed7acd664ceeaee526bc1c0fafa7
Authorization: Bearer your_token
```

## 返回示例

```json
{"status": "Bot 58faed7acd664ceeaee526bc1c0fafa7 deleted!"}
```