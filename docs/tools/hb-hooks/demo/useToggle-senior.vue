<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <div>{{ flag }}</div>
      <br>
      <div>
        <p>
          <el-button style="margin-left: 16px" @click="() => toggle()">toggle</el-button>
          <el-button style="margin-left: 16px" @click="() => set('Hello')">set Hello</el-button>
          <el-button style="margin-left: 16px" @click="() => set('hb-hooks')"
          >hb-hooks</el-button
          >
          <el-button style="margin-left: 16px" @click="() => setRight()">setRight</el-button>
          <el-button style="margin-left: 16px" @click="() => setLeft()">setLeft</el-button>
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { useToggle } from '@hb/hb-hooks'
    import { ElButton } from "element-plus";
    import "element-plus/dist/index.css";
    const [flag, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'hb-hooks')
  </script>