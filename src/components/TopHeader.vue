<template>
  <div class="header fixed top-0">
    <div class="flex justify-between">
      <div class="l-wrap flex items-center">
        <div class="hamburger"></div>
        <router-link class="logo" :to="{ name: 'Dashboard' }">
          <img
            src="https://www.rainforestretail.com.tw/wp-content/themes/project-theme/src/img/public/logo.svg"
            alt=""
          />
        </router-link>
      </div>
      <div class="flex items-center mr-4">
        <span class="gear mr-2">
          <img src="@/assets/images/navbar-setting-fill.svg" alt="" />
        </span>
        <span class="text-sm ml-1">{{ userName }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "TopHeader",
};
</script>
<script lang="ts" setup>
const userName = "Tom (Tom)";
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 4px 20px 0 #ecebeb, 0 2px 10px 0 #efefef; //暫時放的樣式

  .l-wrap {
    height: 60px;
    padding-left: 42px;

    .hamburger {
      width: 24px;
      height: 24px;
      background-color: #333;
      cursor: pointer;
    }

    .logo {
      width: 166px;
      height: 28px;
      margin-left: 24px;
      text-decoration: none;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
