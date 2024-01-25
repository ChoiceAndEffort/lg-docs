---
map:
  # 映射到docs的路径
  path: /useRequest/throttle/

---

# 节流

`useRequest` 提供了一个 `options.throttleWait` 参数，进入节流模式，此时如果频繁触发 `run` 或者 `runAsync`，则会以节流策略进行请求。
## 代码演示
### demo演示
<br/>
<useRequestThrottle/>

### 代码
<<< ./demo/useRequest-throttle.vue
## Options

throttle 所有参数用法和效果同 [lodash.throttle](https://www.lodashjs.com/docs/lodash.throttle/)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| throttleWait | 节流等待时间, 单位为毫秒，设置后，进入节流模式 | `number` | - |
| throttleLeading | 在节流开始前执行调用 | `boolean`\|`Ref<boolean>` | `true` |
| throttleTrailing | 在节流结束后执行调用 | `boolean`\|`Ref<boolean>` | `true` |

:::warning 注意

- `options.throttleWait` 支持动态变化。
- `options.throttleLeading` 支持动态变化。
- `options.throttleTrailing` 支持动态变化。
- `runAsync` 在真正执行时，会返回 `Promise`。在未被执行时，不会有任何返回。

:::
<script setup>
import useRequestThrottle from './demo/useRequest-throttle.vue'
</script>