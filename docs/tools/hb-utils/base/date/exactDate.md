---
title: exactDate 时间格式处理
lang: zh-CN
---
# exactDate 时间格式处理

将时间格式处理成(YYYY年MM月DD日)展示。

:::warning 注意
此方法可能会被废弃，推荐使用showFormatTime
:::

## 基本用法
`
exactDate(date)
`

## 示例
```Javascript
exactDate(new Date()) //2023年06月21日

exactDate('2022/06/05') //2022年06月05日 


```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| date | 时间|Date/String| 是  |-  | -|