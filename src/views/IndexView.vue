<template>
  <TopHeader />
  <LeftSidebar />
  <div class="content mt-5" :class="{ '--collapse': isCollapse }">
    <RouteBar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import TopHeader from "@/components/TopHeader.vue";
import LeftSidebar from "@/components/LeftSidebar.vue";
import RouteBar from "@/components/RouteBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { useMenuStatusStore } from "@/stores/menu-status";
import { storeToRefs } from "pinia";
const store = useMenuStatusStore();
const { collapse } = storeToRefs(store);
const isCollapse = collapse;
</script>
