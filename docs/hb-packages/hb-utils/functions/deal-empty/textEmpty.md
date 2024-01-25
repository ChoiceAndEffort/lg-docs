---
title: textEmpty 空值转占位符
lang: zh-CN
---
# textEmpty 空值转占位符

值如果为undefined,null,''，转换成占位符'--'，否则返回该值。

## 基本用法
`
textEmpty (value)
`

## 示例
```javascript
textEmpty(null)// --

textEmpty(1) // 1

```
## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| value |需要转化的值|any| 是  |-  | -|
