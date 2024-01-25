---
title: monthTime 时间格式处理
lang: zh-CN
---
# monthTime 时间格式处理

将时间格式处理成(YYYY-MM)展示。

:::warning 注意
此方法可能会被废弃，推荐使用showFormatTime
:::

## 基本用法
`
monthTime(date)
`

## 示例
```Javascript
monthTime(new Date()) //2023-06

monthTime('2022/06/05') //2022-06


```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date | 时间|Date/String| 是  |-  | -|