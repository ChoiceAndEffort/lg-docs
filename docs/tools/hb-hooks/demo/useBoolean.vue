<template>
  <div style="border: 1px solid #f0f0f0; padding: 20px; border-radius: 5px">
    <div>{{ flag }}</div>
    <br />
    <div>
      <p>
        <el-button @click="() => set(!flag)">Set</el-button>
        <el-button style="margin-left: 8px" @click="() => setTrue()">
          SetTrue
        </el-button>
        <el-button style="margin-left: 8px" @click="() => setFalse()">
          SetFalse
        </el-button>
        <el-button style="margin-left: 8px" @click="() => toggle()">
          toggle
        </el-button>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBoolean } from "@hb/hb-hooks";
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
const [flag, { set, setFalse, setTrue, toggle }] = useBoolean(true);
</script>
