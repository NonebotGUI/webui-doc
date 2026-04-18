# 获取插件列表

Base URL： `ws://ip:port`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | WebSocket                     |                                       |
| 入口 | `plugin/list/{id}` | `{id}` 为 Bot 的 uuid |
| 调用方式  | 异步调用                     |                                       |
| 请求格式  | 字符串 (String)              | `plugin/list/{id}&token=your_token`       |
| 返回类型  | JSON                         |                                       |

## 返回示例
```json
{
  "type": "pluginList",
  "data": [
    {
      "name": "Plugin A",
      "enabled": true
    },
    ...
  ]
}
```
