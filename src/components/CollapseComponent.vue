<template>
  <div class="collapse-wrapper">
    <el-collapse v-model="activeName">
      <el-collapse-item name="1">
        <template #title>
          <slot name="title"></slot>
        </template>
        <div class="collapse-content">
          <slot name="content"></slot>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script lang="ts">
export default {
  name: "CollapseComponent",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
const activeName = ref(["1"]);
</script>
<!-- <style lang="scss" scoped></style> -->
