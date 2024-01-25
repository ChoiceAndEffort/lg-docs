<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>Username：{{ data }}</div>
    <div>Username：{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : data1 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRequest } from "@hb/hb-hooks";

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("vue-hooks-plus useRequest");
    }, 1000);
  });
}

function getUsername1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("vue-hooks-plus useRequest A");
    }, 1000);
  });
}

const { data } = useRequest(() => getUsername());
const { data: data1, loading } = useRequest(() => getUsername1(), {
  loadingDelay: 300,
});
</script>
