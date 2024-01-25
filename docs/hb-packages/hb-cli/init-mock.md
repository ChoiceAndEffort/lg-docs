# init-mock 初始化 mock 环境

## 操作步骤

- 满足 **[首页中说明的前置条件](/hb-packages/hb-cli/)**
- 在项目中 hb-cli init-mock
- 删除项目中的 node_modules 重新安装

- 在 env.mock 中配置项目启动端口以及其它启动参数(具体以项目 env:dev 为参考)

```js
//.env.mock
...
VITE_APP_API = 'http://localhost:项目启动端口/';
```

- 启动 mock 环境: npm run serve:mock

- 在项目根目录下找到 mock 文件夹下进行 mock 数据配置,具体参考: **[项目使用 MOCK 数据操作文档](/mock/)**
