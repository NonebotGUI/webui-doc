# 创建 Bot <Badge type="warning"> POST </Badge>

Base URL： `http://ip:port/nbgui/v1`

| 类型    | 说明                           | 备注                                    |
| ----- | ---------------------------- | ------------------------------------- |
| 方法    | http                         |                                       |
| 入口 | bot/create ||
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
| drivers | 是    | List  | 要安装的驱动器  |
| adapters | 是    | List  | 要安装的适配器  |
| template | 是    | String  | Bot的模板，有以下两种：<br> `simple(插件开发者) `<br> `bootstrap(初学者或用户)`  |
| pluginDir | 是    | String  | 存放插件的目录（当模板为`simple(插件开发者) `时生效），有以下两种： <br> `在[bot名称]/[bot名称]下` <br> `在src下` |
| venv | 是    | bool  | 是否使用虚拟环境  |
| installDep | 是    | bool  | 是否安装依赖  |




## 调用示例

```http
POST http://127.0.0.1:port/nbgui/v1/bot/create
Content-Type: application/json
Authorization: Bearer your_token
data:{
    "name": "myBot",
    "path": "/media/nightwind/NightWind/workspace/myBot",
    "drivers": ["FASTAPI"],
    "adapters": ["nonebot-adapters-qq"],
    "template": "simple(插件开发者)",
    "pluginDir": "在[bot名称]/[bot名称]下",
    "venv": true,
    "installDep": true
}
```

## 返回示例

```json
{"status": "Bot myBot start creating..."}
```