<template>
  <div>{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : data }}</div>
</template>

<script lang="ts" setup>
import { useRequest } from "@hb/hb-hooks";

function getUsername(params: { desc: string }): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${params.desc}?  当然啦，我现在回答你 ╭☞( ￣ ▽￣)╭☞`);
    }, 3000);
  });
}

const { data, loading } = useRequest(
  () => getUsername({ desc: "我叫你一声敢答应么" })
);
</script>
<style scoped>
div {
  border: 1px solid #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}
</style>
