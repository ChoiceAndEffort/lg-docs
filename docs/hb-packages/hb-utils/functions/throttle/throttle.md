---
title: throttle 节流
lang: zh-CN
---
# throttle 节流

节流函数，用于节流函数的执行频率，接受两个参数：fn为需要进行节流的函数，delay为节流时间，默认为1000ms。函数将在delay时间内只执行一次。

## 基本用法
`
throttle(fn, delay)
`

## 示例
```javascript
function handleScroll() {
  console.log('scroll event detected!');
}

const throttledHandleScroll = throttle(handleScroll, 500);

document.addEventListener('scroll', throttledHandleScroll);

```
在上面的示例中，我们使用 throttle 函数创建了一个节流函数 throttledHandleScroll ，它会在用户滚动窗口时，每 500 毫秒执行一次 handleScroll 函数。

我们将节流函数作为 scroll 事件的监听器添加到 document 上，这样就可以避免在用户不停地滚动窗口时频繁执行 handleScroll 函数，提高了浏览器的性能。

注意：尽管我们使用节流函数来优化响应，但仍需要注意在需要即时响应的情况下使用防抖或者不使用。


## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| fn |要执行的函数|Function| 是  |-  | -|
| delay |节流时间，默认为1000ms|Number| 是  |-  | 1000|
