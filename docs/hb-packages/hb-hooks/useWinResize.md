---
map:
  # 映射到docs的路径
  path: /useWinResize
---

# useWinResize

监听 Windows 尺寸变化的 Hook

## 代码演示
### demo演示
<br/>
<useWinResize/>

### 代码
<<< ./demo/useWinResize.vue

## API

```typescript
useWinResize(
  handler: (ev: Event) => void,
);
```

## Params

| 参数    | 说明     | 类型                  | 默认值 |
| ------- | -------- | --------------------- | ------ |
| handler | 处理函数 | `(ev: Event) => void` | -      |
<script setup>
import useWinResize from './demo/useWinResize.vue'
</script>