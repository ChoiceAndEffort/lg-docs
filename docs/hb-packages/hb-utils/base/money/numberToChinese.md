---
title: numberToChinese 数字金额转化成人民币的中文
lang: zh-CN
---
# numberToChinese 数字金额转化成人民币的中文

函数将传入的数字金额转换为中文的大写形式，并输出格式化后的字符串。

## 基本用法
`
numberToChinese(value)
`

## 示例
```javascript
numberToChinese(5841541) //伍佰捌拾肆万壹仟伍佰肆拾壹元整

numberToChinese(1285300.54)// 壹佰贰拾捌万伍仟叁佰元伍角肆分

numberToChinese(null);//  ''

numberToChinese(undefined);//  ''

numberToChinese('');//  ''
```
## 参数


| 名称  | 备注 |  类型  | 是否必传 |可接受的参数值 | 默认值 |
| ----- | --- | ------ | --------|------------- | ----- |
| value | 原始的金额 |Number/String|是 |- | -|