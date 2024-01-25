<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <div style="margin-bottom: 16px ">
        <img id="fullscreen-img" :src="img" style="width: 320px" alt="">
      </div>
      <el-button  @click="enterFullscreen">
        enterFullscreen
      </el-button>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { useFullscreen } from '@hb/hb-hooks'
    import { ElButton } from "element-plus";
    import "element-plus/dist/index.css";
    const img = 'https://v2.cn.vuejs.org/images/logo.svg'
  
    const [, { enterFullscreen }] = useFullscreen(() => document.getElementById('fullscreen-img'))
  </script>