<!--
 * @Author: yuanjunyi
 * @Date: 2023-06-21 16:44:12
 * @LastEditors: yuanjunyi
 * @LastEditTime: 2023-08-04 09:23:16
 * @Description: this is description
-->
---
title: monthDayTime 时间格式处理
lang: zh-CN
---
# monthDayTime 时间格式处理

将时间格式处理成(MM-DD)展示。

:::warning 注意
此方法可能会被废弃，推荐使用showFormatTime
:::

## 基本用法
`
monthDayTime(date)
`

## 示例
```Javascript
monthDayTime(new Date()) //06-21

monthDayTime('2022/06/05') //06-05


```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date | 时间|Date/String| 是  |-  | -|