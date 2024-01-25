---
map:
  # 映射到docs的路径
  path: /useSize
---

# useSize

监听 DOM 节点尺寸变化的 Hook


### 基础用法
<br/>
<useSize/>
<br/>
传入需要监听的ref

### 代码

<<< ./demo/useSize.vue


### 传入 Dom
<br/>
<useSizeDom/>

### 代码
<<< ./demo/useSize-dom.vue

## API

```typescript
const size = useSize(target)
```

## Params

| 参数   | 说明             | 类型                                            | 默认值 |
| ------ | ---------------- | ----------------------------------------------- | ------ |
| target | DOM 节点或者 ref | `Element` \| `(() => Element)` \| `JSX.Element` | -      |

## Result

| 参数 | 说明           | 类型                                                            |
| ---- | -------------- | --------------------------------------------------------------- |
| size | DOM 节点的尺寸 | `Readonly<Ref<{ width: number, height: number } \| undefined>>` |

<script setup>
import useSize from './demo/useSize.vue'
import useSizeDom from './demo/useSize-dom.vue'
</script>