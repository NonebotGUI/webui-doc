# 安装依赖

::: warning
NoneBot WebUI 只是工具，所以并不提供 `nb-cli` 的安装，需要用户手动安装依赖
:::

## 环境要求

- Windows10 及以上
- 基于 **glibc** 的任意主流 GNU/Linux 发行版，基于 **musl** 的发行版(如 `Alpine`)可能会有些奇奇怪怪的问题
- MacOS

::: danger
`macOS`未经过测试，可能无法使用
:::
## Python

目前（2024年）， NoneBot 已经取消对 `Python 3.8` 的支持，所以请确保你安装的 Python 版本 **>=3.9**

## NoneBot CLI

即 `nb-cli`， webui 使用 nb-cli 来进行对 bot 的操作。在安装好 Python 后使用以下命令安装：

1.安装 `pipx`

```bash
python -m pip install --user pipx
python -m pipx ensurepath
```

如果在此步骤的输出中出现了`open a new terminal`或者`re-login`字样，那么请关闭当前终端并重新打开一个新的终端。


2.安装 `nb-cli`

```bash
pipx install nb-cli
```
