# 🐳 Docker 安装(推荐)

<p style="display: inline-flex">
  <a href="https://github.com/NonebotGUI/nonebot-webui-docker">
    <img src="https://img.shields.io/badge/Github-black?logo=Github" style="margin-right: 5px" alt="Github" />
  </a>
</p>


## 命令行安装运行 （推荐）
```shell
sudo docker run -d  \
    -p 8025:8025 \
    -p 2519:2519 \
    -v /opt/nb-webui:/data \
    --name nonebot-webui \
    --restart=always \
    myxuebi/nonebot-webui:latest
```
镜像WebUI初始密码为 `123456`

需修改看下面配置

## Dockerfile 自构建运行
```shell
git clone https://github.com/NonebotGUI/nonebot-webui-docker
cd nonebot-webui-docker
sudo docker build -t nonebot-webui .
sudo docker run -d -p 8025:8025 -p 2519:2519 nonebot-webui
```

## 配置
### 修改密码
```shell
# 1.进入容器
sudo docker exec -it nonebot-webui /bin/bash
# 2.执行密码修改脚本
bash cpwd.sh
# 3.退出容器
exit
# 4.重启容器
sudo docker restart nonebot-webui
```

### 修改配置文件
所有配置文件皆在容器内，可进入修改或挂载

dashboard配置文件：`/app/dashboard/config.json`

agent配置文件：`/app/agent/config.json`

## 登录
WebUI地址：`http://<宿主机IP>:8025/`

![img](/guide/webui_login.webp)

::: tip
首次加载时间较长，请耐心等待（速度取决于网络速度和服务器带宽）
:::
