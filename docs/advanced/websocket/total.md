# WebSocket API 总览

::: tip
本章节仅列出了所有的 WebSocket API 接口，具体的使用方法请查看对应的章节。
:::

## 通信协议说明
| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 协议    | WebSocket                     |                                       |
| 字符编码  | UTF-8                        |                                       |
| 请求格式  | 字符串 (String)              | 格式为 `message_path&token=TOKEN`       |
| 响应格式  | JSON                         |                                       |
| 鉴权方式  | Token 校验                   | 必须在请求字符串中包含 `&token=your_token` |

## 接口分类

### 1. 系统与通用
| 功能 | 请求路径 | 备注 |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| Ping | `ping` | 进行客户端-服务端连通性测试 |
| 获取 Agent 版本信息 | `version` | |
| 获取系统状态 | `system` | |
| 获取系统平台 | `platform` | |

### 2. Bot 管理
| 功能 | 请求路径 | 备注 |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| 获取 Bot 列表 | `botList` | |
| 获取 Bot 信息 | `botInfo/{id}` | `{id}` 为 Bot 的 uuid |
| 获取 Bot 日志 | `bot/log/{id}` | |
| 获取 stderr 日志 | `bot/stderr/{id}` | |
| 清空 stderr 日志 | `bot/clearStderr/{id}` | |
| 启动 Bot | `bot/run/{id}` | |
| 停止 Bot | `bot/stop/{id}` | |
| 重启 Bot | `bot/restart/{id}` | |
| 导入 Bot | `bot/import` | 需要携带 `?data={json}` 参数 |
| 创建 Bot | `bot/create` | 需要携带 `?data={json}` 参数 |
| 移除 Bot | `bot/remove/{id}` | 从列表中移除 |
| 永久删除 Bot | `bot/delete/{id}` | 同时删除 Bot 目录 |
| 重命名 Bot | `bot/rename` | 需要携带 `?data={json}` 参数 |
| 切换自动启动 | `bot/toggleAutoStart/{id}` | |

### 3. 插件与适配器管理
| 功能 | 请求路径 | 备注 |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| 安装插件 | `plugin/install` | 需要携带 `?data={json}` 参数 |
| 卸载插件 | `plugin/uninstall` | 需要携带 `?data={json}` 参数 |
| 禁用插件 | `plugin/disable` | 需要携带 `?data={json}` 参数 |
| 启用插件 | `plugin/enable` | 需要携带 `?data={json}` 参数 |
| 获取插件列表 | `plugin/list/{id}` | |
| 获取禁用插件列表 | `plugin/disabledList/{id}` | |
| 安装适配器 | `adapter/install` | 需要携带 `?data={json}` 参数 |

### 4. 环境配置 (.env)
| 功能 | 请求路径 | 备注 |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| 读取配置 | `env/load/{id}/{file}` | `{file}` 仅限 `.env`, `.env.prod`, `.env.dev` |
| 编辑配置 | `env/edit` | 需要携带 `?data={json}` 参数 |
| 新增配置项 | `env/add` | 需要携带 `?data={json}` 参数 |
| 删除配置项 | `env/delete` | 需要携带 `?data={json}` 参数 |

### 5. 文件系统操作
| 功能 | 请求路径 | 备注 |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| 列出文件/目录 | `file/list/{id}/{path}` | |
| 创建目录 | `file/mkdir/{id}/{path}` | 需要携带 `?name={n}` 参数 |
| 删除文件/目录 | `file/delete/{id}/{path}` | 需要携带 `?name={n}` 参数 |
| 重命名文件/目录 | `file/rename/{id}/{path}` | 需要携带 `?data={json}` 参数 |
| 读取文件 | `file/read/{id}/{path}` | 需要携带 `?name={n}` 参数 |
| 写入文件 | `file/write/{id}/{path}` | 需要携带 `?data={json}` 参数 |
| 移动文件/目录 | `file/move/{id}/{path}` | 需要携带 `?data={json}` 参数 |
| 复制文件/目录 | `file/copy/{id}/{path}` | 需要携带 `?data={json}` 参数 |
| 创建空文件 | `file/touch/{id}/{path}` | 需要携带 `?name={n}` 参数 |
