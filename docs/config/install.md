# 通过脚本一键安装（Linux）

::: tip
目前支持 `x86_64` `armv7/armhf` `aarch64/arm64` 的Linux设备
:::

使用如下命令进行安装

```bash
curl -fsSL https://api.nbgui.top/api/nbgui/script/install.sh | bash
```


## 用户权限相关

使用该脚本会在系统中创建一个名为 `nbwebui` 的用户作为进程用户，故建议将bot存放在 `/opt/nbwebui/` 目录下。

如果 Bot 位于其他用户目录，可使用以下指令将目录权限赋予用户 `nbwebui` 。

::: tip
如果提示 `setfacl: command not found`，请先安装 acl 包：
Debian/Ubuntu: `apt-get install acl`
CentOS/RHEL: `yum install acl`
:::

```bash
setfacl -R -m u:nbwebui:rwx /path/to/your/bot
```

如果不这么做，那么你的 Bot 会因为权限不够而跑不起来......