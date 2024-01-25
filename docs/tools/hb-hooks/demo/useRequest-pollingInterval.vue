<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    Username：<span>{{ loading ? "loading" : data }}</span>
    <br />
    <p>PollingInterval：{{ computedTime }}ms</p>
    <div style="margin-right: 8px">
      <el-button @click="start()">Start</el-button>
      <el-button @click="update()" style="margin-left: 8px"
        >time + 100ms</el-button
      >
      <el-button @click="cancel()" style="margin-left: 8px">Stop</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRequest } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(String(Date.now()));
    }, 1000);
  });
}

const time = ref(900);

const computedTime = computed(() => time.value + 100);

const { data, run, loading, cancel } = useRequest(() => getUsername(), {
  manual: true,
  pollingInterval: computedTime,
  pollingWhenHidden: false,
});

const start = () => {
  run();
};

const update = () => {
  time.value += 100;
};
</script>
