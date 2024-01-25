# 简介

hb cli 是一个基于 node 进行快速开发的脚手架，提供：

- 统一编码规范
- 快速创建一个 vue2+webpack+qiankun 的模板项目
- 快速创建一个 vue2 的标准模块
- 快速初始化一个 vue3+vite 的 mockjs 服务

## 安装

- **[默认已按照首页操作切换了对应的 npm 镜像](/tools/)**

可以使用下列任一命令安装这个新的包：

```sh
npm install -g @hb/hb-cli
# OR
yarn global add @hb/hb-cli

```

安装之后，你就可以在命令行中访问 HB CLI 命令。你可以通过简单运行 HB CLI，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```sh
hb-cli --version

```

## 升级

```sh
npm update -g @hb/hb-cli
# 或者
yarn global upgrade --latest @hb/hb-cli
```

## 卸载

```sh
npm uninstall -g @hb/hb-cli
# 或者
yarn global remove  @hb/hb-cli

```

## 属性

请在项目目录下运行 hb-cli

```sh
Usage: index [options] [command]

Options:
  -v, --version                             output the version number
  -h, --help                                display help for command

Commands:
  init-encode-env                           hb-cli 初始化编码环境
  create [options] <app-name>               请输入项目目录名称
  add [options] <module-name>               请输入模块名称
  env <env-name> <env-branch> <env-system>  开始执行部署配置
  init-mock                                 开始执行mock配置
  help [command]

```

| 属性名称        |                         描述                          |
| --------------- | :---------------------------------------------------: |
| init-encode-env | [初始化编码环境](/hb-packages/hb-cli/init-encode-env) |
| create-project  |  [创建标准项目](/hb-packages/hb-cli/create-project)   |
| add-module      |    [创建标准模块](/hb-packages/hb-cli/add-module)     |
| init-mock       |   [初始化 mock 环境](/hb-packages/hb-cli/init-mock)   |
