---
title: deepClone 深拷贝
lang: zh-CN
---
# deepClone 深拷贝

深度克隆对象的函数，接受一个参数obj为需要克隆的对象。

函数将传入的对象进行深度克隆，并返回一个新的对象。


## 基本用法
`
deepClone(Object)
`

## 示例
```javascript
const obj1 = { name: '张三', age: 18, children: ['小明', '小红'] };
const obj2 = { name: '李四', age: 20, children: ['小芳'] };

// 克隆对象1
const newObj1 = deepClone(obj1);
newObj1.age = 20;
newObj1.children[0] = '小明明';
console.log(obj1);
//  { name: '张三', age: 18, children: ['小明', '小红'] }

// 克隆对象2
const newObj2 = deepClone(obj2);
newObj2.children.push('小白');
console.log(obj2);
//  { name: '李四', age: 20, children: ['小芳']}

// 参数为空或undefined
deepClone(null);
deepClone(undefined);
deepClone('');
// null 或 undefined 或 ''
```
## 参数


| 名称  | 备注 |  类型  | 是否必传 |可接受的参数值 | 默认值 |
| ----- | --- | ------ | --------|------------- | ----- |
| Object | 需要克隆的对象|Array/Object|是 |- | -|
