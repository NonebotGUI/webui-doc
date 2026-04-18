# 下载文件

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /file/download/{id}/{path} | {id} 为 Bot 的 uuid, {path} 为文件相对路径 |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | GET                        |                                       |
| 返回类型  | file (octet-stream)        |                                       |

## 返回示例
返回文件的二进制流，`Content-Disposition` 将包含文件名。
