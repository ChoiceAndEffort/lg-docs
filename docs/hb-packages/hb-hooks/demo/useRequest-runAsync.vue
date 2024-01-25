<!--
 * @Author: yuanjunyi
 * @Date: 2023-08-02 08:42:45
 * @LastEditors: yuanjunyi
 * @LastEditTime: 2023-08-02 10:55:19
 * @Description: this is description
-->
<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>展示内容：{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : data }}</div>
    <div style="margin-top: 8px">
      <el-input v-model="value" style="width: 200px" />
      <el-button
        style="margin-left: 8px"
        @click="handleClick"
        :loading="loading"
        >Edit</el-button
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
      if (Math.random() > 0.5) resolve(`${params.desc}`);
      reject("error");
    }, 1000);
  });
}
const value = ref("");
const {
  data: data,
  loading,
  runAsync,
} = useRequest(getUsername, {
  manual: true,
});

const handleClick = async () => {
  try {
    await runAsync({ desc: value.value });
    ElMessage.success("成功");
  } catch (error) {
    ElMessage.error(error);
  }
};

// run({ desc: 'nice' })
</script>
