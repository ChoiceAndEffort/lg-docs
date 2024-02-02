# lg-services

## 简介

统一的请求封装

## 使用

```sh
npm i -g @lg/lg-services  //安装

```

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
