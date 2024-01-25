---
title: numFormatter 空值转占位符
lang: zh-CN
---
# numFormatter 空数字转化

数字如果为undefined,null,''，转换成0，否则返回该值。

## 基本用法
`
numFormatter (value)
`

## 示例
```javascript
numFormatter(null)// 0

numFormatter(1) // 1

```
## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| value |需要转化的值|any| 是  |-  | -|
