<template>
  <div>展示的内容：{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : data }}</div>
  <div style="margin-top: 8px">
    <el-input v-model="value" style="width: 200px" />
    <el-button style="margin-left: 8px" @click="run({ desc: value })"
      >Edit</el-button
    >
  </div>
  <br />
  <div>Params: {{ JSON.stringify(params) }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRequest } from "@hb/hb-hooks";
import { ElButton, ElInput } from "element-plus";
import "element-plus/dist/index.css";
function getUsername(params: { desc: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${params.desc}`);
    }, 1000);
  });
}
const value = ref("");
const {
  data: data,
  loading,
  run,
  params,
} = useRequest(getUsername, {
  defaultParams: [
    {
      desc: "nice",
    },
  ],
  devKey: "demo7",
});
</script>
