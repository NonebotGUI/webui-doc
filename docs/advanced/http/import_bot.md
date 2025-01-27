# 导入 Bot <Badge type="warning"> POST </Badge>

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | bot/import ||
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | POST                        |                                       |
| 返回类型  | json                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |



## 请求参数
| 参数名 | 必选 | 类型   | 参数描述    |
| ---- | ---- | ---- | --------- |
| name | 是    | String  | Bot的名称  |
| path | 是    | String  | Bot的路径  |




## 调用示例

```http
POST http://127.0.0.1:port/nbgui/v1/bot/import
Content-Type: application/json
Authorization: Bearer your_token
data:{
    "name": "myBot",
    "path": "/media/nightwind/NightWind/workspace/myBot",
}
```

## 返回示例

```json
{"status": "Bot myBot imported!"}
```