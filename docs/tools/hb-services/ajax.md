# 基于 axios 多实例请求

## 操作步骤

```js
const options = {};
import { HttpRequest } from '@hb/hb-services';
const { instance: ajax } = new HttpRequest(options);
ajax.get(url, params);
ajax.post(url, data);
```

## options 属性

| 属性名称           | 说明                                         | 类型                                                                  | 可选值 | 默认值 |
| ------------------ | :------------------------------------------- | :-------------------------------------------------------------------- | :----: | :----: |
| toDealErrorCodeOut | 针对需要在业务中处理的异常状态码进行拦截处理 | array                                                                 |        |   []   |
| messageCallback    | 异常回调函数                                 | function(message,type)<br/>第一个参数提示消息,<br/>第二个参数提示类型 |        |        |
| addHeaderFn        | 给请求头添加参数的方法                       | function                                                              |        |        |
| customParams       | 自定义参数配置                               | object , customParams.jumpUrl 自定义跳转路径                          |        |        |

## 取消请求的方法
```js
let cancel;
const getList = async () => {
  try {
    let res = await ajax.post(
      'http://192.168.20.154:5055/auth/v1/user/loginPassword',
      {
        //请求参数
      },
      {
        cancelToken: new CancelToken(function executor(c: any) {
          // 这里的c就是取消当前请求的方法，这里把c赋值给cancel变量
          cancel = c;
        })
      }
    );
    console.log(res);
  } catch (error) {}
};
//调用取消请求的方法
const handleCancelSend = () => {
  cancel();
};
```
