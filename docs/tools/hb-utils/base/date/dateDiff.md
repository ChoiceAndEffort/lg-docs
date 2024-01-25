---
title: dateDiff 计算日期之间的天数
lang: zh-CN
---
# dateDiff 计算日期之间的天数

计算两个日期之间相差多少天的函数，接受两个参数：sDate1和sDate2为两个需要计算的日期对象或日期字符串。

:::warning 注意
 此方法可能会被废弃，推荐使用dayDif
 :::


## 基本用法
`
dateDiff(sDate1, sDate2)
`

## 示例
```Javascript
dateDiff('2022/06/05', '2022/06/08') // 4


```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| sDate1 |起始时间|String| 是  |-  | -|
| sDate2 |结束时间 | String| 是  |-  | -|