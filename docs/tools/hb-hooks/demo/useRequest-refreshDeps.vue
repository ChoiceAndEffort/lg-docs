<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div style="margin-top: 16px">
      <div>
        <el-button @click="count++">count is {{ count }}</el-button>
        <div style="opacity: 0.6">count !==0 and count !==5 ready is true</div>
      </div>
      <br />
      <el-button @click="() => (id = 1)">Change ID = 1</el-button>
      <el-button @click="() => (id = 2)" style="margin-left: 16px"
        >Change ID = 2</el-button
      >
      <el-button @click="() => (store.id = 1)" style="margin-left: 16px">
        Change store ID = 1
      </el-button>
      <el-button @click="() => (store.id = 2)" style="margin-left: 16px">
        Change store ID = 2
      </el-button>
    </div>
    <div style="margin-top: 16px">
      Loading：{{ loading ? "正在努力加载中╰(⇀‸↼)╯~ ~ ~" : "" }}
    </div>

    <div style="margin-top: 16px">
      Data Value：
      <div>
        <table>
          <thead>
            <th>Time</th>
            <th>Id</th>
            <th>StoreId</th>
            <th>Count</th>
          </thead>
          <tbody>
            <tr>
              <th>{{ data?.time }}</th>
              <th>{{ data?.id }}</th>
              <th>{{ data?.storeId }}</th>
              <th>{{ data?.count }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useRequest } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";

function getUsername({
  id,
  storeId,
  count,
}: {
  id: number;
  storeId: number;
  count: number;
}): Promise<{
  time: number | string;
  id: number | string;
  storeId: number | string;
  count: number | string;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        time: Date.now(),
        id,
        storeId,
        count,
      });
    }, 1000);
  });
}
const id = ref(1);
const store = reactive({
  id: 1,
});
const count = ref(0);
const ready = computed(() => count.value !== 0 && count.value !== 5);
const { data, loading } = useRequest(
  () => getUsername({ id: id.value, storeId: store.id, count: count.value }),
  {
    initialData: {
      time: Date.now(),
      id: "-",
      count: "-",
      storeId: "-",
    },
    ready,
    refreshDeps: [id, () => store.id, count],
  }
);
</script>
