---
title: nonemptyFilter 空值转占位符
lang: zh-CN
---
# nonemptyFilter 空值转占位符

0返回0,其它空值返回'-'。

## 基本用法
`
nonemptyFilter (value)
`

## 示例
```javascript
nonemptyFilter(null)// -

nonemptyFilter(0) // 0

```
## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| value |需要转化的值|any| 是  |-  | -|
