---
title: hasOwnProperties  判断一个对象自身，是否包含了给定的所有属性
lang: zh-CN
---
# hasOwnProperties  

判断对象是否包含指定属性的函数，接受两个参数：obj为需要判断的对象，prop为需要判断是否包含的属性名或属性名数组。

函数将判断传入的对象是否包含指定属性，并返回一个布尔值：true表示包含，false表示不包含。

## 基本用法
`
hasOwnProperties(Object,props)
`

## 示例
```javascript
const person = { name: '张三', age: 18, gender: 'male' };

// 判断对象是否包含指定属性
hasOwnProperties(person, 'name'); //  true
hasOwnProperties(person, ['age', 'gender']); //  true
hasOwnProperties(person, 'height'); //  false

// 参数为空或undefined
hasOwnProperties(person, null);//  false
hasOwnProperties(person, undefined);//  false
hasOwnProperties(person, '');//  false
```
## 参数


| 名称  | 备注 |  类型  | 是否必传 |可接受的参数值 | 默认值 |
| ----- | --- | ------ | --------|------------- | ----- |
| Object | 对象|Object|是 |- | -|
| props | 属性名或属性名组成的数组| string/array|是 | -|-|