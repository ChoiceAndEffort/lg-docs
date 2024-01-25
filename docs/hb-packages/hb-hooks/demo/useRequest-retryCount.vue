<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>
      Error count： <span>{{ count }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useRequest } from "@hb/hb-hooks";

function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`error`);
    }, 1000);
  });
}

const count = ref(0);

useRequest(() => getUsername(), {
  retryCount: 3,
  retryInterval: 1000,
  onError: () => {
    count.value += 1;
  },
});
</script>
