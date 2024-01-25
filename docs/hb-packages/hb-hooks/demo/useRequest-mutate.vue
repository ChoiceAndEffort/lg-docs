<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>展示的内容：{{ data }}</div>
    <div style="margin-top: 8px">
      <el-input v-model="value" style="width: 200px" />
      <el-button
        style="margin-left: 8px"
        @click="handleClick"
        :loading="loading"
        >Edit</el-button
      >
    </div>
    <div style="margin-top: 8px">
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
      if (Math.random() > 0.5) resolve(`request-${params.desc}`);
      reject("error");
    }, 2000);
  });
}
const value = ref("");
const step = ref<string[]>([]);
const {
  data: data,
  run,
  mutate,
  loading,
} = useRequest(getUsername, {
  manual: true,
  devKey: "demo5",
  rollbackOnError: true,
  onError: () => {
    alert("error");
  },
});
const handleClick = () => {
  mutate(value.value);
  run({ desc: value.value });
};
</script>
