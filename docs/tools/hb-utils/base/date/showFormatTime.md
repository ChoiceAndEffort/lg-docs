---
title: showFormatTime 根据传入时间格式处理时间
lang: zh-CN
---
# showFormatTime 时间格式处理

将日期格式化成指定格式的函数，接受两个参数：currentDate为需要格式化的日期对象或日期字符串，默认为当前时间；format为格式化后的日期格式，默认为'yyyy-MM-dd HH:mm:ss'。

函数将传入的日期对象或日期字符串进行格式化，并返回格式化后的字符串。

## 基本用法
`
shortTime(date,format)
`

## 示例
```Javascript
showFormatTime(new Date(),'yyyy-MM-dd') //2023-06-25

showFormatTime('2022/06/05','yyyy年M月d日') // 2023年6月5日

showFormatTime('2022/06/05') //2022-06-05 00:00:00

showFormatTime(new Date(),'yyyy年M月d日 H时m分s秒') //2023年6月25日 11时14分3秒


```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date | 时间|Date/String| 是  |-  | -|
| format | 时间格式|String| 是  |'yyyy-mm-dd'等  | -|