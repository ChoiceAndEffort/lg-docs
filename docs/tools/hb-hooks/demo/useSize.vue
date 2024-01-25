<template>
    <div ref="divRef"  style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <div >
        当前dom的尺寸：width:{{ size?.width }}px-----height:{{ size?.height }}px
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import { useSize } from '@hb/hb-hooks'
  
    const divRef = ref()
    const size = useSize(divRef)
  </script>