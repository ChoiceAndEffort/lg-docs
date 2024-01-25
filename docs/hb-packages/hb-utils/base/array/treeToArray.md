---
title: treeToArray 树数组转扁平数组
lang: zh-CN
---

# treeToArray 树数组转扁平数组

将带有children的数组对象扁平化展开处理。

## 基本用法
`
treeToArray(array)
`

## 示例
```Javascript
const treeData = [
   {   
        name: 'Node 1',
        children: [
            {
                name: 'Node 1.1',
                children: [
                    {
                        name: 'Node 1.1.1'
                    },
                    {
                        name: 'Node 1.1.2',
                        children: [
                            {
                                name: 'Node 1.1.2.1'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

treeToArray(treeData) // [{name: 'Node 1.1.1'},{name: 'Node 1.1.2.1'}, {name: 'Node 1.1.2'},{name: 'Node 1.1'},{name: 'Node 1'}

```
## 参数


| 名称  |  备注   | 类型 | 是否必传| 可接受的参数值 | 默认值 |
| ----  | ------ | ---- | --------|------------  | ------- |
| array | 带有children需要扁平化的数组|Array|是| - | -|

