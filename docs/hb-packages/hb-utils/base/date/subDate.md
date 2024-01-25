---
title: subDate 获取年/天/月/季/周/小时之前的时间
lang: zh-CN
---
# subDate获取年/天/月/季/周/小时之前的时间


传入一个key值 获取传入时间[key]年/天/月/季/周/小时之前的时间。

:::warning 注意
此方法可能会被废弃，推荐使用computeDate
:::

## 基本用法
`
subDate (date, days,key,forChart)
`

## 示例
```Javascript
subDate('2022-06-05', 5) // 2022-05-31

subDate('2022-06-05 12:00:00', 5, 'H', 'YYYY-MM-DD HH:mm:ss') //2022-06-05 07:00:00

subDate('2022-06-05 12:00:00', 2, 'M', 'M') // 4

```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date |起始时间|String| 是  |-  | -|
| days | 要增减的数值| String| 是  |-  | -|
| key | 年:'y' / 季:'Q' / 月:'M' / 周:'w' /  天:'d'/ 小时:'h'|String| 否  |  'y' / 'Q' / 'M' / 'w' / 'd' / 'h'  | 'd'|
| forChart | 输出时间的格式 | String|  否   |'YYYY-MM-DD HH:mm:ss'/ 'YYYY-MM-DD' 等| 'YYYY-MM-DD'|