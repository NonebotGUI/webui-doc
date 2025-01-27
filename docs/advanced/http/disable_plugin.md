# 禁用插件 <Badge type="warning"> POST </Badge>

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | plugin/disable ||
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | POST                        |                                       |
| 返回类型  | json                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |



## 请求参数
| 参数名 | 必选 | 类型   | 参数描述    |
| ---- | ---- | ---- | --------- |
| name | 是    | String  | 插件的模块名  |
| id | 是    | String  | Bot的uuid  |




## 调用示例

```http
POST http://127.0.0.1:port/nbgui/v1/plugin/disable
Content-Type: application/json
Authorization: Bearer your_token
data:{
    "name": "nonebot_plugin_status",
    "id": "58faed7acd664ceeaee526bc1c0fafa7",
}
```

## 返回示例

```json
{"status": "Plugin nonebot_plugin_status in 58faed7acd664ceeaee526bc1c0fafa7 disabled!"}
```