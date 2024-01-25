---
title: arrayIntersection 数组交集
lang: zh-CN
---
# arrayIntersection 数组交集 

此方法是一个数组交集的函数，接受三个参数，分别是两个要比较的数组arr1和arr2，以及一个可选的字符串key，表示要比较的属性名。函数返回一个由arr1和arr2数组中交集元素组成的新数组。

如果传入了key参数，函数将根据数组b的每个元素的key属性，筛选出与数组arr1中具有相同key属性值的元素；如果未传入key参数，则直接比较数组arr1和arr2中是否有相同元素。

## 基本用法
`
arrayIntersection(arr1,arr2,key)
`

## 示例
```Javascript
const arr1 =  [ { id: 1, name: '张三', age: 20 },{ id: 2, name: '李四', age: 21 }, { id: 3, name: '小二', age: 23 }]
const arr2 = [{ id: 2, name: '李四', age: 21 },{ id: 4, name: '小明', age: 24 },{ id: 5, name: '小红', age: 25 }]

arrayIntersection(arr1,arr2,'id')//[{ id: 2, name: '李四', age: 21 }]

```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| arr1 | 数组|Array| 是  |-  | -|
| arr2 |  数组 | Array|是| -|-|
| key  |根据哪个字段合并，纯数组可以不传|String|否| -|-|