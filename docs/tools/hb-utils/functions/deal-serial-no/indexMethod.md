---
title: indexMethod 序号百位补零
lang: zh-CN
---
# indexMethod 序号百位补零

小于10的数字补00，小于100的数字补0。

## 基本用法
`
indexMethod (index)
`

## 示例
```javascript
indexMethod(0)// 001

indexMethod(20)//020


```
## 参数



| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| index |传入需要转化的值|Number| 是  |-  | -|