<template>
  <div class="login-page w-full h-screen relative">
    <div class="login-box card text-center">
      <h3>Sign In</h3>
      <p>請使用公司Microsoft帳號進行認證登入</p>
      <el-button class="w-full el-button-login" @click="onBtnToDashBoard">
        <img src="../assets/images/microsoft.svg" alt="" />
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const onBtnToDashBoard = () => {
  router.push({
    path: "/case-management/case-overview",
  });
};
</script>
<style scoped lang="scss">
.login-page {
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: -40px;
    left: 0;
    width: 640px;
    height: 640px;
    background: url("../assets/images/LoginPage-Background-White.svg") center
      no-repeat;
    background-size: cover;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: -40px;
    right: 0;
    width: 640px;
    height: 640px;
    background: url("../assets/images/LoginPage-Background-Gray.svg") center
      no-repeat;
    background-size: cover;
  }
}

.el-button {
  width: 100%;
  padding: 8px;
  height: 49px;

  --el-button-border-color: #666464;

  transition: all 0.3s;

  img {
    max-width: 114px;
    width: 100%;
    margin: 0 auto;
  }

  &:hover {
    background-color: transparent;
    border-color: $color-gray-600;
  }
}

.login-box {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 443px;
  width: 100%;
  padding: 40px 98px;
}

h3 {
  font-size: 20px;
  color: $color-black;
  padding-bottom: 20px;
}

p {
  font-size: 14px;
  color: $color-gray-800;
  padding-bottom: 40px;
}
</style>
