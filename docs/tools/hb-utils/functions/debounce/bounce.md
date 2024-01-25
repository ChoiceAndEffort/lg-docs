---
title: bounce 防抖
lang: zh-CN
---
# bounce 防抖

防抖函数，用来防止函数被频繁调用，返回值：一个函数，入参与 fn 相同，但返回的是一个 Promise，在一段时间后执行。

## 基本用法
`
bounce(fn, delay, ctx = window)
`

## 示例
```javascript
function handleInputChange(val) {
  console.log('input value is:', val);
}

const debouncedHandleInput = bounce(handleInputChange, 500);

const input = document.getElementById('myInput');

input.addEventlistener('input', (e) => {
  debouncedHandleInput(e.target.value)
    .then((res) => {
      console.log('Promise resolved with:', res);
    })
    .catch((err) => {
      console.error('Promise rejected with:', err);
    });
});


```

在上面的示例中，我们使用 bounce 函数创建了一个防抖函数 debouncedHandleInput ，它会在用户停止输入 500 毫秒后执行 handleInputChange 函数。

我们将防抖函数作为 input 的 input 事件监听器，就可以避免在用户不断输入时频繁调用 handleInputChange 函数，提高了网页响应速度。

注意：这个函数只能防止短时间内的频繁调用，如果你想要防止手抖式输入，需要使用 throttling 函数。


## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| fn |要执行的函数|Function| 是  |-  | -|
| delay |防抖函数在延迟多少毫秒后执行|Number| 是  |-  | -|
| ctx |上下文对象（可选，默认为 window）|Function| 否  |-  | -|