---
title: amountFormat 金额转为科学计数法保留两位小数
lang: zh-CN
---
# amountFormat 金额转为科学计数法保留两位小数

此方法是一个金额格式化的函数，接受两个参数，分别是原始的金额num和要保留的小数位数fixedNum（默认为2）。

## 基本用法
`
amountFormat(value,fixedNum)
`

## 示例
```javascript
amountFormat('45277784511.21874') //45,277,784,511.22

```
## 参数


| 名称  | 备注 |  类型  | 是否必传 |可接受的参数值 | 默认值 |
| ----- | --- | ------ | --------|------------- | ----- |
| value |原始的金额 |Number|是 |- | -|
| fixedNum |要保留的小数位数 |Number|否 |- | 2|
