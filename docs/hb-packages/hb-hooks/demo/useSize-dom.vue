<template>
    <div style="border: 1px solid #f0f0f0;padding: 20px;border-radius: 5px;">
      <div>body：width:{{ size?.width }}px-----height:{{ size?.height }}px</div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { useSize } from '@hb/hb-hooks'
  
    const size = useSize(document.querySelector('body'))
  </script>