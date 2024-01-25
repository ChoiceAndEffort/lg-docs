<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>展示的内容：{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : data }}</div>
    <div style="margin-top: 8px">
      <el-input v-model="value" style="width: 200px" />
      <el-button style="margin-left: 8px" @click="handleClick">Edit</el-button>
      <el-button style="margin-left: 8px" @click="handleCancel"
        >Cancel</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRequest } from "@hb/hb-hooks";
import { ElButton, ElInput, ElMessage } from "element-plus";
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
const { data, loading, run, cancel } = useRequest(getUsername, {
  manual: true,
  devKey: "demo6",
  onError: () => {
    ElMessage.error("error");
  },
});

const handleClick = () => {
  run({ desc: value.value });
};

const handleCancel = () => {
  cancel();
};
</script>
