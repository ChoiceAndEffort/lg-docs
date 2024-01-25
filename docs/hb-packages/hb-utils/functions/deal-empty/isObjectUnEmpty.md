---
title: isObjectUnEmpty 判断一个对象是否都不为空
lang: zh-CN
---
# isObjectUnEmpty判断一个对象是否都不为空

判断一个对象是否都不为空,如果对象中存在空值返回false,不存在空值返回true。

## 基本用法
`
isObjectUnEmpty (object)
`

## 示例
```javascript
isObjectUnEmpty({name:'',id:1})// false

isObjectUnEmpty({name:'张三',id:1}) // true


```
## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| object |需要判断的对象|Object| 是  |-  | -|
