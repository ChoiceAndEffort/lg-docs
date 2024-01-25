<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div style="margin-top: 16px">
      <el-input
        type="text"
        v-model="text"
        style="width: 200px"
        @input="run()"
      />
    </div>
    <div style="margin-top: 16px">value：{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRequest } from "@hb/hb-hooks";
import { ElInput } from "element-plus";
import "element-plus/dist/index.css";

function getUsername(params: { desc: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${params.desc}，时间戳：${String(Date.now())}`);
    }, 1000);
  });
}

const text = ref("");

const throttleWait = ref(500);

setTimeout(() => {
  throttleWait.value = 3000;
}, 2000);

const { data, run } = useRequest(() => getUsername({ desc: text.value }), {
  throttleWait,
  manual: true,
});
</script>
