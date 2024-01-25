# @hb/hb-hooks

> 前端 utils 库 base 基层 functions 函数 plugins 插件

## 使用准备

- 切换到公司的 npm 镜像 npm set registry http://8.214.22.98:4873/
- 确认镜像 npm config get registry 输出 :http://8.214.22.98:4873/ 即为 ok
- 安装 hb-hooks 包 npm install @hb/hb-hooks -S
- 更新包 hb-hooks 包 npm install @hb/hb-hooks@latest -S
- 卸载 hb-hooks 包 npm uninstall @hb/hb-hooks

## 使用方法说明

- import { A(方法名) } from '@hb/hb-utils'

```js
import { useBoolean } from '@hb/hb-hooks';
```