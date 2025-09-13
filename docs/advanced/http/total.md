# 总览

::: tip
本章节仅列出了所有的API接口，具体的使用方法请查看对应的章节。
:::

## API说明
| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 请求URL | nbgui/v1 | 若请求端与服务端为同一机器可用127.0.0.1代替，端口号为用户自行设置 |
| 调用方式  | 同步调用，等待服务端完成执行并返回最终结果         |                                       |
| 字符编码  | UTF-8                        |                                       |
| 请求格式  | JSON                         |                                       |
| 响应格式  | JSON                         |                                       |
| 请求类型  | 见表格标题                        |                                       |
| 开发语言  | 任何能发起http请求的开发语言             |                                       |


## GET类型请求
| 功能        | 入口                | 备注                                                                   |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| Ping        | /ping             | 进行客户端-服务端连通性测试                                                       |
| 获取 Bot 列表   | /bot/list         |                                                                      |
| 获取 Bot 信息   | /bot/info/&lt;id&gt;    | 其中id为Bot的uuid                                        |
| 获取 Bot 日志   | /bot/log/&lt;id&gt;     |                                                                      |
| 启动 Bot      | /bot/run/&lt;id&gt;     | 若启动成功，返回Bot &lt;id&gt; started! <br>若已经在运行，则返回Bot &lt;id&gt; is already running! |
| 停止 Bot    | /bot/stop/&lt;id&gt;    | 若停止成功，返回Bot &lt;id&gt; stopped! <br>若没有运行/已经停止，则返回Bot &lt;id&gt; is not running! |
| 重启 Bot      | /bot/restart/&lt;id&gt; | 若重启成功，返回Bot &lt;id&gt; restarted! <br>若没有运行，则返回Bot &lt;id&gt; is not running!    |
| 获取插件列表      | /plugin/list/&lt;id&gt; | &lt;id&gt;为Bot的uuid   |
| 获取被禁用的插件列表      | plugin/disabled/&lt;id&gt; | &lt;id&gt;为Bot的uuid   |
| 获取系统状态      | /system/status    |                                                                      |
| 获取系统平台      | /system/platform  |                                                                      |
| 获取Agent版本信息 | /version          |                                                                      |

## POST类型请求
::: tip
客户端在发送请求时，应在请求的body中以JSON格式包含这些参数。
详细用法见对应章节
:::

| 功能        | 入口                | 备注                                                                   |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| 导入 Bot  | /bot/import ||
| 创建 Bot | /bot/create ||
| 启用插件 | /plugin/enable ||
| 禁用插件 | /plugin/disable ||
| 安装插件 | /plugin/install ||
| 卸载插件 | /plugin/uninstall ||
| 安装适配器 | /adapter/install ||
| 安装驱动器 | /driver/install ||
| 重命名Bot|/bot/rename/&lt;id&gt;|&lt;id&gt;为Bot的uuid|


## DELETE类型请求
| 功能        | 入口                | 备注                                                                   |
| ----------- | ----------------- | -------------------------------------------------------------------- |
| 删除 Bot | /bot/remove/&lt;id&gt; | &lt;id&gt;为Bot的uuid |
| 永久删除 Bot | /bot/delete/&lt;id&gt; | &lt;id&gt;为Bot的uuid，该入口会一同删除Bot的目录 |
