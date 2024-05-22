<template>
  <footer class="footer">
    <!--保留給陰影的空間-->
    <p class="text-xs text-center pt-2 pb-1">© 雨林新零售股份有限公司</p>
    <p class="text-xs text-center pb-2">example@rainforestretail.com.tw</p>
  </footer>
</template>
<script lang="ts">
export default {
  name: "FooterComponent",
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.footer {
  p {
    color: $color-gray-700;
  }
}
</style>
