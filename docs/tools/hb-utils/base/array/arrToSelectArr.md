---
title: arrToSelectArr 数组对象转换
lang: zh-CN
---
# arrToSelectArr 数组转换 

 将数组转换成el-select options对应的数据结构，此方法不会保留原参数。
## 基本用法
`
arrToSelectArr(arr, labelName, valueName)
`

## 示例
```Javascript
arrToSelectArr(
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
            //[{ value: 0, label: '测试'},{ label: '前端'},{ value: 3, label: '后端'} ]

```
## 参数


| 名称  | 备注 | 类型 | 是否必传| 可接受的参数值 | 默认值 |
|  ---  | ----| ---- | -------|------------- | ------- |
| array | 需要转换的数组|Array| 是  |-  | -|
| labelName|需要变更的label字段名 | String|是| -|-|
| valueName|需要变更的value字段名|String|是| -|-|