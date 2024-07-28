# vue 项目目录规范

## 目录结构

```ts
my-vue-project
├── node_modules                        # 依赖包
|── public                              # 静态资源
|── src                                 # 源代码
|   |-- api                             # 接口
|   |   |-- module-name                 
|   |       └──index.ts                 # 模块接口
|   |-- assets                          # 资源
|   |   |-- images                      # 图片文件夹
|   |       └──a.webp
|   |   |-- svgs                        # svgs文件夹
|   |       └──a.svg       
|   |-- components                      # 组件
|   |   |-- component-name              # 组件文件夹
|   |        └── index.vue
|   |   └──  index.ts                   # 注册组件
|   |-- directives                      # 指令
|   |   |-- directive-name              # 指令文件夹
|   |        └── index.ts               # 指令函数
|   |   └── index.ts                    # 注册指令
|   |-- global                          # 全局参数
|   |-- hooks                           # hooks
|   |   |-- use-fn-name
|   |        └── index.ts               # hook函数
|   |-- language                        # 国际化
|   |   |--en
|   |      |-- module-name              # 模块名称
|   |        └── index.ts
|   |      └── index.ts                 # 英文入口
|   |   |--zh
|   |      |-- module-name              # 模块名称
|   |        └── index.ts
|   |      └──  index.ts                # 中文入口
|   |   |--i18n
|   |      └──  index.ts                # 语言入口
|   |-- request                         # 请求文件
|   |      └──  index.ts                # 请求
|   |-- router                          # 路由
|   |      └──  index.ts                # 路由js
|   |-- store                           # 状态管理
|   |      └──  index.ts                # storjs
|   |-- styles                          # 样式
|   |-- utils                           # 公共方法
|   |   |-- utils-name
|   |        └── index.ts               # 方法
|   |-- views                           # 页面
|   |   |-- module-name                 # 模块名称
|   |-- App.vue                         # 根组件
|   |-- main.ts                         # 入口文件
|-- .eslintignore                       # ESLint忽略配置
|-- .eslintrc                           # ESLint配置
|-- .prettierignore                     # Prettier忽略配置
|-- .prettierrc                         # Prettier配置
|-- .stylelintignore                    # StyleLint忽略配置
|-- .stylelintrc                        # StyleLint配置
|-- .gitignore                          # Git忽略配置
|-- package.json                        # 项目依赖和配置
|-- README.md                           # 项目说明
```
