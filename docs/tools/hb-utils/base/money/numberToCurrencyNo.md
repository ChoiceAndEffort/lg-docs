---
title: numberToCurrencyNo 金钱转为科学计数法
lang: zh-CN
---
# numberToCurrencyNo 金钱转为科学计数法

此方法是一个将数字格式化成带有千分位分隔符的货币格式的函数，接受一个参数value为数字金额。

函数会将传入的数字金额格式化成带有千分位分隔符的货币格式，并输出格式化后的字符串。

## 基本用法
`
numberToCurrencyNo(value)
`

## 示例
```javascript
numberToCurrencyNo(452771.21) // 452,771.21

```
## 参数


| 名称  | 备注 |  类型  | 是否必传 |可接受的参数值 | 默认值 |
| ----- | --- | ------ | --------|------------- | ----- |
| value | 原始的金额 |Number/String|是 |- | -|

