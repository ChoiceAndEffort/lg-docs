# hb-cli

> 前端集成工具集

## 使用准备

- 切换到公司的 npm 镜像 npm set registry url
- 确认镜像 npm config get registry 输出 :url 即为 ok
- 安装 hb-cli 包: npm install @hb/hb-cli -g
- 更新包 hb-cli 包: npm install @hb/hb-cli@latest -g
- 卸载 hb-cli 包: npm uninstall @hb/hb-cli -g
- hb-cli -v 查看版本

## 属性

| 属性名称        |                         描述                          |
| --------------- | :---------------------------------------------------: |
| init-encode-env | [初始化编码环境](/hb-packages/hb-cli/init-encode-env) |
| create-project  |  [创建标准项目](/hb-packages/hb-cli/create-project)   |
| add-module      |    [创建标准模块](/hb-packages/hb-cli/add-module)     |
| init-mock      |    [初始化mock环境](/hb-packages/hb-cli/init-mock)     |
