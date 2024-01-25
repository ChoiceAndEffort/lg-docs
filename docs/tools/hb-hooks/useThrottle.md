---
map:
  # 映射到docs的路径
  path: /useThrottle
---

# useThrottle

处理节流值的 Hook。

### demo演示
<br/>
<useThrottle/>
<br/>
throttledValue 每隔 500ms 变化一次。

### 代码
<<< ./demo/useThrottle.vue

## API

```
const throttledValue = useThrottle(
  value: any,
  options? : Options
);
```

## Params

| 参数    | 说明           | 类型       | 默认值 |
| ------- | -------------- | ---------- | ------ |
| value   | 需要节流的值   | `Ref<any>` | -      |
| options | 配置节流的行为 | `Options`  | -      |

## Options

| 参数     | 说明                     | 类型      | 默认值 |
| -------- | ------------------------ | --------- | ------ |
| wait     | 等待时间，单位为毫秒     | `number`  | `1000` |
| leading  | 是否在延迟开始前调用函数 | `boolean` | `true` |
| trailing | 是否在延迟开始后调用函数 | `boolean` | `true` |

<script setup>
import useThrottle from './demo/useThrottle.vue'
</script>