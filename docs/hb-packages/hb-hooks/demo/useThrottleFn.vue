<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
        <div>Click Count：{{ valueRef }}</div>
      <br/>
      <el-button @click="() => run()">点爆我~</el-button>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import { useThrottleFn } from '@hb/hb-hooks'
    import { ElButton } from "element-plus";
    import "element-plus/dist/index.css";
    const valueRef = ref(0)
  
    const { run } = useThrottleFn(
      () => {
        valueRef.value += 1
      },
      {
        wait: 1000,
      },
    )
  </script>