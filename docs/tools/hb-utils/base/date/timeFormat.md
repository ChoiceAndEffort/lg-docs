---
title: timeFormat 时间格式处理
lang: zh-CN
---
# timeFormat 时间格式处理

将时间格式处理成(YYYY-MM-DD HH:mm:)展示。

:::warning 注意
此方法可能会被废弃，推荐使用showFormatTime
:::

## 基本用法
`
timeFormat(date)
`

## 示例
```Javascript
timeFormat(new Date()) //2023-06-21 16:15

timeFormat('2022/06/05') //2022-06-05 00:00


```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date | 时间|Date/String| 是  |-  | -|
