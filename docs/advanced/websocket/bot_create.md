# 创建 Bot

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `bot/create` | 需要携带 `?data={json}` 参数 |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `bot/create?data={json}&token=your_token` |
| 返回类型  | JSON                         |                                       |

## 请求参数
`data` 应为 JSON 字符串，包含以下字段：
- `name` (String): Bot 名称
- `path` (String): 安装路径
- `drivers` (List): 驱动器列表
- `adapters` (List): 适配器列表
- `template` (String): 模板
- `pluginDir` (String): 插件目录
- `venv` (Boolean): 是否创建虚拟环境
- `installDep` (Boolean): 是否安装依赖

## 返回示例
```json
{
  "type": "createBot",
  "data": {
    "status": "Bot {name} start creating..."
  }
}
```
