<template>
  <el-button type="primary" @click="onBtnToDashBoard">Login</el-button>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const onBtnToDashBoard = () => {
  router.push({
    name: "Dashboard",
  });
};
</script>
