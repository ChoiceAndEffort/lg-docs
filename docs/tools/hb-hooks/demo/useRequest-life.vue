<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>展示的内容：{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : data }}</div>
    <div style="margin-top: 8px">
      <el-input v-model="value" style="width: 200px" />
      <el-button
        style="margin-left: 8px"
        @click="run({ desc: value })"
        :loading="loading"
        >Edit</el-button
      >
    </div>
    <div>
      <p v-for="msg in step" :key="msg">{{ msg }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRequest } from "@hb/hb-hooks";
import { ElButton, ElInput } from "element-plus";
import "element-plus/dist/index.css";

function getUsername(params: { desc: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve(`${params.desc}`);
      reject("error");
    }, 1000);
  });
}
const value = ref("");
const step = ref<string[]>([]);
const {
  data: data,
  loading,
  run,
} = useRequest(getUsername, {
  manual: true,
  devKey: "demo3",
  onBefore: () => {
    step.value = [];
    step.value.push("请求之前");
  },
  onSuccess: () => {
    step.value.push("请求成功");
  },
  onError: () => {
    step.value.push("请求失败");
  },
  onFinally: () => {
    step.value.push("请求完成");
  },
});
</script>
