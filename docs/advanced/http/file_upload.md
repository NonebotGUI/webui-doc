# 上传文件

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | /file/upload/ | 需携带查询参数 filename, id, path |
| 调用方式  | 同步调用                     |                                       |
| 请求类型  | POST                        |                                       |
| 返回类型  | JSON                         |                                       |

## 请求参数
**查询参数 (Query Params)：**
- `filename` (String): 上传的文件名称
- `id` (String): Bot 的 uuid
- `path` (String, 可选): 保存文件的子路径

**请求体 (Body)：**
直接发送文件的二进制流。

## 返回示例
**成功：**
```json
{
  "success": true,
  "message": "File uploaded successfully",
  "filename": "test.txt",
  "path": "/home/nightwind/bots/bot1/test.txt",
  "size": 1024
}
```
**错误示例：**
```json
{
  "error": "Filename parameter is required"
}
```
