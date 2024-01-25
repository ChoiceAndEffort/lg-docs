<!-- <template>
	<el-button @click="() => refresh()">
		重新发起请求:{{ `loading：${loading}` }}
	</el-button>
	<div>{{ data }}</div>
</template>

<script lang="ts" setup>
 
import { useRequest } from 'vue-hooks-plus'

function getUsername(): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(String(Date.now()))
		}, 1000)
	})
}

const { data, loading, refresh } = useRequest(() => getUsername(), {
	cacheKey: 'cacheKey-share',
})
</script>

 -->

<template>
  <div
    style="border: 1px solid #f0f0f0; padding: 0 20px 20px; border-radius: 5px"
  >
    <h3>A data</h3>
    <share-demo />
    <h3>B data</h3>
    <share-demo />
  </div>
</template>

<script lang="ts" setup>
import ShareDemo from "./shareDemo.vue";
</script>
