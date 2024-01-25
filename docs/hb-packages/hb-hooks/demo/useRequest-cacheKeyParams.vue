<template>
  <div>
    <el-button @click="() => toggle()">show/hidden</el-button>
    <div v-if="state" style="padding: 16px">
      <div>{{ `loading: ${loading}` }}</div>
      <el-input type="text" v-model="id" style="width: 200px" /><el-button
        style="margin-left: 12px"
        @click="run(id)"
      >
        send
      </el-button>
      <div>params ID：{{ id }}</div>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRequest, useToggle } from "@hb/hb-hooks";
import { ElButton, ElInput } from "element-plus";
import "element-plus/dist/index.css";

const [state, { toggle }] = useToggle();

const id = ref("");

function getUsername(userId: any): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(String(Date.now()) + "-" + userId);
    }, 1000);
  });
}

const { data, params, loading, run } = useRequest(getUsername, {
  cacheKey: "cacheKey-demo3",
});

watchEffect(() => {
  // @ts-ignore
  id.value = params?.[0];
});
</script>
