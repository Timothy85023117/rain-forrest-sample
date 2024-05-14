<template>
  <div class="mb-6">
    <!--保留給陰影的空間-->
    <div class="card w-full h-full">
      <!-- 判斷是否顯示title後面圓形 -->
      <div class="flex items-center mb-4">
        <p class="card__subText text-xs ml-4">首頁</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "RouteBar",
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.card {
  border: 2px solid #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgb(49 66 126 / 15%);
}
</style>
