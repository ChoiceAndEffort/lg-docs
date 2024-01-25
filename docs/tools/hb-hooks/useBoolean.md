---
map:
  # 映射到docs的路径
  path: /useBoolean
---

# useBoolean

管理 boolean 状态的 Hook

## 代码演示
### demo演示
<br/>

<useBoolean />
<script setup>
import useBoolean from './demo/useBoolean.vue'
</script>

### 代码

<<< ./demo/useBoolean.vue





## API

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

## Params

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | ------------------------ | --------- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |

## Result

| 参数    | 说明     | 类型                     |
| ------- | -------- | ------------------------ |
| state   | 状态值   | `Readonly<Ref<boolean>>` |
| actions | 操作集合 | `Actions`                |

## Actions

| 参数     | 说明         | 类型                       |
| -------- | ------------ | -------------------------- |
| toggle   | 切换 state   | `() => void`               |
| set      | 设置 state   | `(value: boolean) => void` |
| setTrue  | 设置为 true  | `() => void`               |
| setFalse | 设置为 false | `() => void`               |

## 注意事项
如果使用缓存，请确保仅在响应正常时使用缓存的响应。
如果请求较慢，则建议使用 SWR。
如果使用插件式，请确保传递正确的 axios 配置。