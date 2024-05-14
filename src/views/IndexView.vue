<template>
  <TopHeader />
  <LeftSidebar />
  <div class="content mt-5">
    <RouteBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import TopHeader from "../components/TopHeader.vue";
import LeftSidebar from "../components/LeftSidebar.vue";
import RouteBar from "../components/RouteBar.vue";
</script>
