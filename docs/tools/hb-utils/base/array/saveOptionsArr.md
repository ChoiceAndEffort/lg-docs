---
title: saveOptionsArr 数组对象转换
lang: zh-CN
---
# saveOptionsArr 数组转换 


 将数组转换成el-select options对应的数据结构，此方法会保留原参数。
:::warning 注意
此方法可能会被废弃，推荐使用arrToSelectArr
:::
## 基本用法
`
saveOptionsArr(array,value,name)
`

## 示例
```Javascript
saveOptionsArr(
                [
                    {
                        text: '测试',
                        id: 0
                    },
                    {
                        text: '前端',
                        id: 2
                    },
                    { text: '后端', id: 3 }
                ],
                'id',
                'text'
            )
            //[{text: '测试', id: 0, value: 0, label: '测试'},{text: '前端', id: 2, value: 2, label: '前端'},{text: '后端', id: 3, value: 3, label: '后端'} ]

```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| array | 需要转换的数组|Array| 是  |-  | -|
| value |需要变更的value字段名 | String|是| -|-|
| name  |需要变更的name字段名|String|是| -|-|