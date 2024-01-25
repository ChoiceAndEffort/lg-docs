---
title: computeDate 获取年/天/月/季/周/小时之前/后的时间
lang: zh-CN
---
# computeDate 获取年/天/月/季/周/小时之前的时间

计算日期的函数，接受五个参数：date为需要计算的日期对象或日期字符串，days为需要计算的时间数，key为计算单位，可选值有"Y"（年）、"Q"（季度）、"M"（月）、"W"（周）、"D"（天）、"H"（小时），format表示格式化后的日期格式，默认为'yyyy-MM-dd'；type表示计算方式，可选值为"after"（向后计算）和"before"（向前计算），默认为"after"。

函数将传入的日期对象或日期字符串进行计算，并返回计算后的日期字符串。
## 基本用法
`
computeDate (date, days,key,format,type)
`

## 示例
```Javascript
computeDate('2023-06-25', 5) // 2023/6/30

computeDate('2022-06-05 12:00:00', 5, 'H', 'yyyy-MM-dd HH:mm:ss')//2022-06-05 17:00:00

computeDate('2022-06-05 12:00:00', 5, 'H', 'yyyy-MM-dd HH:mm:ss', 'before') // 2022-06-05 07:00:00

```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date |起始时间|String| 是  |-  | -|
| days |要增减的数值 | String| 是  |-  | -|
| key | 年:'Y' / 季:'Q' / 月:'M' / 周:'w' /  天:'D'/ 小时:'H'|String| 否  |  'Y' / 'Q' / 'M' / 'w' / 'D' / 'H'  | 'D'|
| format | 输出时间的格式 | String|  否   |'YYYY-MM-DD HH:mm:ss'/ 'YYYY-MM-DD' 等| 'YYYY-MM-DD'|
| type | 当前时间之前还是之后 | String|  否   |'after'/'before' | 'after'|