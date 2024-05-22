<template>
  <div class="wrap-min-height">
    <el-tabs
      v-model="activeName"
      type="card"
      class="menu-manage-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="目錄" name="contents">
        <div class="card w-full">目錄</div>
      </el-tab-pane>
      <el-tab-pane label="選單" name="menu">
        <div class="card w-full">選單</div>
      </el-tab-pane>
      <el-tab-pane label="操作" name="operate">
        <div class="card w-full">操作</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
export default {
  name: "menuManagement",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("contents");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style lang="scss" scoped>
.menu-manage-tabs {
  .card {
    border-radius: 0 12px 12px;
  }
}
</style>
