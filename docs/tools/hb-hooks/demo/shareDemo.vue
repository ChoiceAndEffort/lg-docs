<template>
  <el-button @click="() => refresh()"> request again </el-button>

  <div style="margin: 8px 0">{{ `loading：${loading}` }}</div>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
import { useRequest } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(String(Date.now()));
    }, 1000);
  });
}

const { data, loading, refresh } = useRequest(() => getUsername(), {
  cacheKey: "cacheKey-share",
});
</script>
