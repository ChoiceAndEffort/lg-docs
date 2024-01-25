<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <el-button @click="() => toggle()">show/hidden</el-button>
    <div v-if="state" style="padding: 16px">
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRequest, useToggle } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
const [state, { toggle }] = useToggle();

function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(String(Date.now()));
    }, 1000);
  });
}

const { data } = useRequest(() => getUsername(), {
  ready: state,
  cacheKey: "cacheKey-demo",
});
</script>
