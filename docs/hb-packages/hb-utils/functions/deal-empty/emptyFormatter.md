---
title: emptyFormatter 空值转占位符
lang: zh-CN
---
# emptyFormatter 空值转占位符

值如果为undefined,null,''，转换成占位符'--'，否则返回该值。

## 基本用法
`
emptyFormatter (row, column, cellValue, index)
`

## 示例
```javascript
emptyFormatter('','',null)// --

emptyFormatter('','',1) // 1


```
## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| row |传''，未用到|-| 是  |-  | -|
| column |传''，未用到|-| 是  |-  | -|
| cellValue |需要转化的值|any| 是  |-  | -|
| index |传''未用到|-| 否  |-  | -|
