# 获取当前系统状态 <Badge> GET </Badge>


Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口   | system/status   |                                      |
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |                                     |
| 请求类型  | GET                        |                                       |
| 返回类型  | json                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |

## 调用示例

```http
GET http://127.0.0.1:port/nbgui/v1/system/status
Authorization: Bearer your_token
```

## 返回示例

```json
{"cpu_usage": "13.4%", "ram_usage": "63.6%"}
```