---
map:
  # 映射到docs的路径
  path: /useVirtualList
---

# useVirtualList

快速使用虚拟列表

### 基本用法
<br/>
<useVirtualList/>

### 代码
<<< ./demo/useVirtualList.vue
<!-- <demo src="./demo/demo.vue"
  language="vue"
  title="基本用法"
  desc="渲染大量数据"> </demo> -->

### 动态元素高度
<br/>
<useVirtualListHight/>
<br/>
跳转到元素指定位置

### 代码
<<< ./demo/useVirtualList-hight.vue

## API

```ts
import { useVirtualList } from 'hb-hooks'
```

## Params

| 参数    |               说明 |       类型 | 默认值 |
| ------- | -----------------: | ---------: | -----: |
| list    | 包含大量数据的列表 | `Ref<T[]>` |   `[]` |
| options |             配置项 |  `Options` |    `-` |

## Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| wrapperTarget | 内部容器，支持 DOM 节点或者 Ref 对象 | `Ref<TargetValue<HTMLElement>>` | `-` |
| itemHeight | 行高度，静态高度可以直接写入像素值，动态高度可传入函数 | `number | ((index: number, data: T) => number)` | `-` |
| overscan | 视区上、下额外展示的 DOM 节点数量 | `number` | `5` |

## Result

| 参数     | 说明                                 | 类型                                | 默认值 |
| -------- | ------------------------------------ | ----------------------------------- | ------ |
| list     | 当前需要展示的列表内容               | `Ref<{ data: T, index: number }[]>` | `-`    |
| ref      | 外部容器，支持 DOM 节点或者 Ref 对象 | `Ref<TargetValue<HTMLElement>>`     | `-`    |
| onScroll | 外部容器滚动绑定                     | `(e: any) => void`                  | `-`    |

<script setup>
import useVirtualList from './demo/useVirtualList.vue'
import useVirtualListHight from './demo/useVirtualList-hight.vue'
</script>