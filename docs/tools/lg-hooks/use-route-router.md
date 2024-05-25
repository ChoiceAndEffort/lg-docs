<!--
 * @Author: lg
 * @Date: 2024-02-02 11:02:13
 * @LastEditors: lg
 * @LastEditTime: 2024-05-25 14:18:58
 * @Description:
 * @FilePath: \lg-docs\docs\tools\lg-hooks\use-route-router.md
-->

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

/**
 * @description:路由跳转hook
 * @return {*}
 */
export function useRouteRouter(): any {
  const router: Router = useRouter();
  const route: Route = useRoute();
  const routerPushByName = (name: string, params = {}, query = {}) => {
    try {
      router.push({ name, params, query });
    } catch (error) {
      console.log(error);
    }
  };

  const routerPushByPath = (path: string, query = {}) => {
    try {
      router.push({ path, query });
    } catch (error) {
      console.log(error);
    }
  };

  const routerReplaceByName = (name: string, params = {}, query = {}) => {
    try {
      router.replace({ name, params, query });
    } catch (error) {
      console.log(error);
    }
  };

  const routerReplaceByPath = (path: string, query = {}) => {
    try {
      router.replace({ path, query });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    router,
    route,
    routerPushByName,
    routerPushByPath,
    routerReplaceByName,
    routerReplaceByPath
  };
}
```

### 使用代码

```ts
import { useRouteRouter } from 'url';
const {
  router,
  route,
  routerPushByName,
  routerPushByPath,
  routerReplaceByName,
  routerReplaceByPath
} = useRouteRouter();
```
