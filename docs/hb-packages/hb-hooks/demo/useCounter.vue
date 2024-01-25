<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <p>{{ current }} [max: 10; min: 1;]</p>
      <div class="contain">
        <el-button  @click="inc()">
          Inc()
        </el-button>
        <el-button @click="dec()" style="margin-left: 8px">
          Dec()
        </el-button>
        <el-button @click="set(3)" style="margin-left: 8px">
          Set(3)
        </el-button>
        <el-button @click="reset()" style="margin-left: 8px">
          Reset()
        </el-button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { useCounter } from '@hb/hb-hooks'
    import { ElButton } from "element-plus";
    import "element-plus/dist/index.css";
    const [current, { inc, dec, set, reset }] = useCounter(20, { min: 1, max: 10 })
  </script>