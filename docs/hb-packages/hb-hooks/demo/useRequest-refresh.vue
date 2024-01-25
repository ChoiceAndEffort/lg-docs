<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <el-button style="margin-top: 16px" @click="() => refresh()"
      >refresh</el-button
    >
    <div style="margin-top: 16px">{{ loading ? "loading..." : data }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRequest } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(String(Date.now()));
    }, 1000);
  });
}
const { data, run, loading, refresh } = useRequest(() => getUsername(), {
  manual: true,
});
run();
</script>
