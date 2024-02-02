# lg-services

## 简介

统一的请求封装


### 安装
```sh
npm i -g @lg/lg-services  //安装

```
### 使用
```js
import { HttpRequest } from '@lg/lg-services';

const options = {
  baseURL: '',
  timeout: ''
  //...
};
const { instance: ajax } = new HttpRequest(options);
export { ajax };
```
