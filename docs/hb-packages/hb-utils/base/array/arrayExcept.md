---
title: arrayExcept 数组差集
lang: zh-CN
---
# arrayExcept 数组差集 


取两个数组的差集的函数，接受三个参数：arr1和arr2为两个需要取差集的数组，key为可选参数，表示对比的键名，默认为 undefined。

函数将会返回一个新数组，包含了arr1和arr2数组中仅出现一次的元素。

## 基本用法
`
arrayExcept(arr1,arr2,key)
`

## 示例
```Javascript
const arr1 =  [ { id: 1, name: '张三', age: 20 },{ id: 2, name: '李四', age: 21 }, { id: 3, name: '小二', age: 23 }]
const arr2 = [{ id: 2, name: '李四', age: 21 },{ id: 4, name: '小明', age: 24 },{ id: 5, name: '小红', age: 25 }]

arrayExcept(arr1,arr2,'id')//[{id: 1, name: "张三", age: 20},{id: 3, name: "小二", age: 23},{id: 4, name: "小明", age: 24},{id: 5, name: "小红", age: 25}]

```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| arr1 | 数组|Array| 是  |-  | -|
| arr2 |  数组 | Array|是| -|-|
| key  |根据哪个字段合并，纯数组可以不传|String|否| -|-|


