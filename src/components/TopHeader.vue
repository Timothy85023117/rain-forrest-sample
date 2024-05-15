<template>
  <div class="header fixed top-0">
    <div class="flex justify-between">
      <div class="l-wrap flex items-center">
        <div class="hamburger" @click="store.openMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M4 5H18C19.1046 5 20 5.89543 20 7H4V5Z" fill="black" />
            <path
              d="M4 5H18C19.1046 5 20 5.89543 20 7H4V5Z"
              fill="black"
              fill-opacity="0.2"
            />
            <rect x="10" y="11" width="10" height="2" fill="black" />
            <rect
              x="10"
              y="11"
              width="10"
              height="2"
              fill="black"
              fill-opacity="0.2"
            />
            <path d="M4 17H20C20 18.1046 19.1046 19 18 19H4V17Z" fill="black" />
            <path
              d="M4 17H20C20 18.1046 19.1046 19 18 19H4V17Z"
              fill="black"
              fill-opacity="0.2"
            />
            <path
              d="M4.64558 12.4189C4.34205 12.2217 4.34205 11.7774 4.64558 11.5803L7.22765 9.90316C7.56028 9.68711 8 9.92583 8 10.3225L8 13.6767C8 14.0733 7.56028 14.3121 7.22765 14.096L4.64558 12.4189Z"
              fill="#76C144"
            />
          </svg>
        </div>
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
import { useMenuStatusStore } from "@/stores/menu-status";
const store = useMenuStatusStore();
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
      cursor: pointer;
    }

    .logo {
      width: 166px;
      // height: 28px;
      margin-left: 24px;
      text-decoration: none;
      cursor: pointer;

      img {
        width: 100%;
        // height: 100%;
      }
    }
  }
}
</style>
