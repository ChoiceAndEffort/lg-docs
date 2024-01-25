<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">窗口变化次数： {{ countRef }}</div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
  
    import { useWinResize } from '@hb/hb-hooks'
  
    const countRef = ref(0)
    useWinResize(() => (countRef.value += 1))
  </script>