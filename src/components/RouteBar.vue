<template>
  <div class="mb-6">
    <!--保留給陰影的空間-->
    <div class="card w-full h-full">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }"
          >暫時導向登入頁</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/elements' }"
          >元件頁</el-breadcrumb-item
        >
        <!-- <el-breadcrumb-item>案件總覽</el-breadcrumb-item>
        <el-breadcrumb-item>回覆</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "RouteBar",
};
</script>
<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>
