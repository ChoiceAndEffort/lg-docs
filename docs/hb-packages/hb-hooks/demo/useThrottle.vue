<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <el-input type="text" placeholder="input" v-model="valueRef" style="width:200px"/>
      <p>ThrottledValue：{{ throttledValue }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import { useThrottle } from '@hb/hb-hooks'
    import { ElInput } from "element-plus";
    import "element-plus/dist/index.css";
    const valueRef = ref('')
  
    const throttledValue = useThrottle(valueRef, { wait: 500 })
  </script>