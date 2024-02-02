# 路由跳转

## 简介

用于项目中路由跳转传参

### hook 代码

```ts
import type {
  Router,
  RouteLocationNormalizedLoaded as Route
} from 'vue-router';

import { useRouter, useRoute } from 'vue-router';

import { ElMessage } from 'element-plus';

/**
 * @description:路由跳转hook
 * @return {*}
 */
export function useRouteRouter(): any {
  const router: Router = useRouter();
  const route: Route = useRoute();
  const handleToPush = (name: string, sendData: any = {}): void => {
    try {
      router.push({
        name,
        query: sendData
      });
    } catch (error) {
      console.log(error, '路由跳转报错');
      ElMessage({
        message: '路由跳转报错',
        type: 'warning'
      });
    }
  };
  return {
    router,
    route,
    handleToPush
  };
}
```

### 使用代码

```ts
import { useRouteRouter } from 'url';
const { router, route, handleToPush } = useRouteRouter();
```
