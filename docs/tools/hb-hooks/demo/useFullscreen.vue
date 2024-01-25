<template>
    <div ref="curRef" style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <div style="margin: bottom 16px;" :style="isFullscreen ? 'Fullscreen' : 'Not fullscreen'" />
      <div>
        <el-button  @click="enterFullscreen">
          进入全屏
        </el-button>
        <el-button  @click="exitFullscreen" style="margin:0 8px">
          退出全屏
        </el-button>
        <el-button  @click="toggleFullscreen">
          改变全屏状态
        </el-button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import { useFullscreen } from '@hb/hb-hooks'
    import { ElButton } from "element-plus";
    import "element-plus/dist/index.css";
  
    const curRef = ref(null)
    const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(
      curRef,
    )
  </script>