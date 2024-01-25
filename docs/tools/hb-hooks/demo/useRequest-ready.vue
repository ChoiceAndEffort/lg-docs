<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>ready: {{ ready }}</div>
    <el-button style="margin-top: 16px" @click="() => set(!ready)"
      >改变ready的值</el-button
    >
    <div style="margin-top: 16px">{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRequest, useBoolean } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`请求时间戳：${String(Date.now())}`);
    }, 1000);
  });
}
// const [ready, { toggle }] = useToggle(false);
const [ready, { set }] = useBoolean(false);

const { data } = useRequest(() => getUsername(), {
  ready,
});
</script>
