<template>
  <div class="fixed sidebar">
    <el-row class="tac h-full w-full">
      <el-col :span="12" class="w-full">
        <el-menu
          active-text-color="#ffffff"
          class="el-menu-vertical h-full"
          default-active="1-1"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 10C21 6.229 21 4.343 19.828 3.172C18.657 2 16.771 2 13 2H11C7.229 2 5.343 2 4.172 3.172C3 4.343 3 6.229 3 10V14C3 17.771 3 19.657 4.172 20.828C5.343 22 7.229 22 11 22"
                    stroke="#666464"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.9083 18.4011C12.6359 17.912 12.5 17.6669 12.5 17.3997C12.5 17.1325 12.6359 16.888 12.9083 16.3988L13.6023 15.1498L14.3365 13.9239C14.6243 13.4436 14.7679 13.2032 14.9991 13.0693C15.2308 12.9359 15.5103 12.9318 16.07 12.9226L17.4997 12.8999L18.9285 12.9226C19.4886 12.9318 19.7682 12.9359 19.9994 13.0698C20.231 13.2037 20.3752 13.4436 20.6625 13.9239L21.3972 15.1498L22.0922 16.3988C22.3641 16.888 22.5 17.1325 22.5 17.3997C22.5 17.6669 22.3641 17.9115 22.0917 18.4006L21.3972 19.6496L20.663 20.8755C20.3752 21.3559 20.2316 21.5963 20.0004 21.7302C19.7687 21.8635 19.4891 21.8676 18.9295 21.8769L17.4997 21.8995L16.071 21.8769C15.5109 21.8676 15.2313 21.8635 15.0001 21.7296C14.7684 21.5958 14.6243 21.3559 14.337 20.8755L13.6023 19.6496L12.9083 18.4011Z"
                    stroke="#666464"
                    stroke-width="2"
                  />
                  <path
                    d="M17.4997 18.9443C18.3528 18.9443 19.0443 18.2528 19.0443 17.3998C19.0443 16.5467 18.3528 15.8552 17.4997 15.8552C16.6467 15.8552 15.9552 16.5467 15.9552 17.3998C15.9552 18.2528 16.6467 18.9443 17.4997 18.9443Z"
                    stroke="#666464"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7 7H15M7 11H12"
                    stroke="#666464"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </el-icon>
              <span>案件管理</span>
            </template>
            <router-link :to="{ name: 'caseOverview' }">
              <el-menu-item index="1-1">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 10C3 6.229 3 4.343 4.172 3.172C5.343 2 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C21 4.343 21 6.229 21 10V14C21 17.771 21 19.657 19.828 20.828C18.657 22 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3 19.657 3 17.771 3 14V10Z"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <path
                      d="M8 10H16M8 14H13"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </el-icon>
                <span>案件總覽</span>
              </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'caseList' }">
              <el-menu-item index="1-2">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 10C3 6.229 3 4.343 4.172 3.172C5.343 2 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C21 4.343 21 6.229 21 10V14C21 17.771 21 19.657 19.828 20.828C18.657 22 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3 19.657 3 17.771 3 14V10Z"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <path
                      d="M7 12H8"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7H8"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 7H17"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 12H17"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 17H8"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 17H17"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </el-icon>
                <span>案件列表</span>
              </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'caseCreateOrder' }">
              <el-menu-item index="1-3">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="6"
                      y="2"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <path
                      d="M2 8V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H16"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10 10H18"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14 6L14 14"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </el-icon>
                <span>建單</span>
              </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'caseClassification' }">
              <el-menu-item index="1-4">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 10.2C3 6.8061 3 5.1087 3.91156 4.0548C4.82233 3 6.28922 3 9.22222 3H10.7778C13.7108 3 15.1777 3 16.0884 4.0548C17 5.1087 17 6.8061 17 10.2V13.8C17 17.1939 17 18.8913 16.0884 19.9452C15.1777 21 13.7108 21 10.7778 21H9.22222C6.28922 21 4.82233 21 3.91156 19.9452C3 18.8913 3 17.1939 3 13.8V10.2Z"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <path
                      d="M19 4.75781C20.2036 5.14332 20.8974 5.53529 21.2524 6.30427C21.7647 7.41137 21.3742 8.86876 20.5934 11.7828L19.7651 14.8737C18.9843 17.7877 18.5938 19.2451 17.5967 19.9478C17.2304 20.2063 16.8347 20.3259 16.3602 20.3415"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10 13L10 8"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <circle cx="10" cy="16" r="1" fill="#666464" />
                  </svg>
                </el-icon>
                <span>問題分類管理</span>
              </el-menu-item>
            </router-link>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.082 13.945C2.553 12.995 2.289 12.519 2.289 12C2.289 11.481 2.553 11.006 3.082 10.056L4.43 7.63001L5.856 5.24901C6.415 4.31601 6.694 3.84901 7.143 3.58901C7.593 3.33001 8.136 3.32201 9.223 3.30401L12 3.26001L14.775 3.30401C15.863 3.32201 16.406 3.33001 16.855 3.59001C17.305 3.85001 17.585 4.31601 18.143 5.24901L19.57 7.63001L20.92 10.056C21.448 11.006 21.712 11.481 21.712 12C21.712 12.519 21.448 12.994 20.919 13.944L19.57 16.37L18.144 18.751C17.585 19.684 17.306 20.151 16.857 20.411C16.407 20.67 15.864 20.678 14.777 20.696L12 20.74L9.225 20.696C8.137 20.678 7.594 20.67 7.145 20.41C6.695 20.15 6.415 19.684 5.857 18.751L4.43 16.37L3.082 13.945Z"
                    stroke="#666464"
                    stroke-width="2"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#666464"
                    stroke-width="2"
                  />
                </svg>
              </el-icon>
              <span>系統管理</span>
            </template>
            <router-link :to="{ name: 'parameterManagement' }">
              <el-menu-item index="2-1">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 5H21"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3 5H5"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19 12H21"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3 12H15"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 19H21"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3 19H7"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="7"
                      cy="5"
                      r="2"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <circle
                      cx="17"
                      cy="12"
                      r="2"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <circle
                      cx="9"
                      cy="19"
                      r="2"
                      stroke="#666464"
                      stroke-width="2"
                    />
                  </svg>
                </el-icon>
                <span>參數管理</span>
              </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'authorityManagement' }">
              <el-menu-item index="2-2">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_165_2753)">
                      <ellipse
                        cx="10.511"
                        cy="8.04782"
                        rx="5.00614"
                        ry="5.00607"
                        stroke="#666464"
                        stroke-width="2.00244"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.5111 13.0542C6.40897 13.0542 2.94708 15.1861 1.857 18.103C1.46986 19.1389 2.39653 20.0627 3.50244 20.0627H10.5111"
                        stroke="#666464"
                        stroke-width="2.00244"
                        stroke-linecap="round"
                      />
                      <g clip-path="url(#clip1_165_2753)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.2933 15.1372C19.7326 15.1373 20.1636 15.2572 20.5399 15.4839C20.9161 15.7106 21.2235 16.0356 21.4288 16.424C21.6342 16.8123 21.7298 17.2493 21.7053 17.6879C21.6809 18.1266 21.5373 18.5502 21.2901 18.9133C21.0428 19.2765 20.7013 19.5653 20.3022 19.7488C19.903 19.9324 19.4614 20.0036 19.0248 19.9549C18.5882 19.9062 18.1731 19.7393 17.8243 19.4724C17.4754 19.2054 17.2059 18.8484 17.0448 18.4397C16.9887 18.2954 16.9035 18.1642 16.7946 18.0543L16.2771 17.5368C16.0151 17.2748 15.5898 17.2748 15.3278 17.5368L14.7287 18.1359L14.1299 17.5372C13.8679 17.2752 13.4427 17.2752 13.1807 17.5372L12.5815 18.1363L11.7299 17.2847L12.2668 16.7478L16.3336 16.7482C16.7467 16.7482 17.0839 16.5143 17.2756 16.2238C17.4956 15.8897 17.7951 15.6155 18.1473 15.4258C18.4995 15.2361 18.8933 15.1369 19.2933 15.1372ZM22.7834 17.5535C22.7835 16.8029 22.5416 16.0723 22.0936 15.4701C21.6456 14.8678 21.0154 14.4261 20.2965 14.2103C19.5776 13.9945 18.8082 14.0163 18.1027 14.2723C17.3971 14.5283 16.7928 15.005 16.3796 15.6315C16.3683 15.6499 16.3519 15.6647 16.3325 15.6741L12.1559 15.6741C12.0501 15.674 11.9453 15.6948 11.8475 15.7352C11.7497 15.7757 11.6608 15.835 11.586 15.9098L10.5946 16.9012C10.3828 17.1131 10.3828 17.4563 10.5946 17.6682L12.1069 19.1804C12.3689 19.4424 12.7942 19.4424 13.0561 19.1804L13.6553 18.5813L14.2544 19.1804C14.5164 19.4424 14.9417 19.4424 15.2037 19.1804L15.8028 18.5813L16.0344 18.8129C16.0352 18.8137 16.0397 18.8197 16.0454 18.8338C16.344 19.5894 16.8968 20.2172 17.6084 20.609C18.3201 21.0009 19.1462 21.1323 19.9444 20.9806C20.7425 20.8289 21.4628 20.4036 21.9811 19.778C22.4994 19.1524 22.7829 18.3659 22.7834 17.5535ZM19.0245 17.5535C19.0245 17.6593 19.0453 17.7641 19.0858 17.8618C19.1263 17.9596 19.1857 18.0484 19.2605 18.1232C19.3353 18.198 19.4241 18.2574 19.5219 18.2979C19.6196 18.3383 19.7244 18.3592 19.8302 18.3592C19.936 18.3592 20.0408 18.3383 20.1385 18.2979C20.2363 18.2574 20.3251 18.198 20.3999 18.1232C20.4747 18.0484 20.5341 17.9596 20.5746 17.8618C20.6151 17.7641 20.6359 17.6593 20.6359 17.5535C20.6359 17.3399 20.5511 17.135 20.4001 16.9839C20.2491 16.8328 20.0442 16.7479 19.8306 16.7478C19.6169 16.7478 19.412 16.8326 19.2609 16.9836C19.1098 17.1346 19.0245 17.3399 19.0245 17.5535Z"
                          fill="#666464"
                          stroke="#666464"
                          stroke-width="0.5"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_165_2753">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_165_2753">
                        <rect
                          width="12.0147"
                          height="12.0147"
                          fill="white"
                          transform="matrix(0.707112 0.707101 -0.707112 0.707101 17.0043 9.04932)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </el-icon>
                <span>權限管理</span>
              </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'menuManagement' }">
              <el-menu-item index="2-3">
                <el-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 4H20"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 12H8"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 20H6"
                      stroke="#666464"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.4899 16.6015C10.1631 16.0145 10 15.7204 10 15.3998C10 15.0791 10.1631 14.7857 10.4899 14.1987L11.3228 12.6999L12.2038 11.2289C12.5491 10.6524 12.7215 10.3639 12.9989 10.2033C13.2769 10.0432 13.6124 10.0383 14.284 10.0272L15.9997 10L17.7142 10.0272C18.3863 10.0383 18.7218 10.0432 18.9992 10.2039C19.2772 10.3645 19.4502 10.6524 19.795 11.2289L20.6766 12.6999L21.5107 14.1987C21.8369 14.7857 22 15.0791 22 15.3998C22 15.7204 21.8369 16.0139 21.5101 16.6008L20.6766 18.0997L19.7956 19.5707C19.4502 20.1471 19.2779 20.4357 19.0005 20.5963C18.7224 20.7563 18.387 20.7613 17.7154 20.7724L15.9997 20.7996L14.2852 20.7724C13.613 20.7613 13.2776 20.7563 13.0002 20.5957C12.7221 20.4351 12.5491 20.1471 12.2044 19.5707L11.3228 18.0997L10.4899 16.6015Z"
                      stroke="#666464"
                      stroke-width="2"
                    />
                    <path
                      d="M15.9997 17.2532C17.0233 17.2532 17.8532 16.4234 17.8532 15.3997C17.8532 14.3761 17.0233 13.5463 15.9997 13.5463C14.976 13.5463 14.1462 14.3761 14.1462 15.3997C14.1462 16.4234 14.976 17.2532 15.9997 17.2532Z"
                      stroke="#666464"
                      stroke-width="2"
                    />
                  </svg>
                </el-icon>
                <span>選單管理</span>
              </el-menu-item>
            </router-link>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
export default {
  name: "LeftSidebar",
};
</script>
<script lang="ts" setup>
import { useMenuStatusStore } from "@/stores/menu-status";
import { storeToRefs } from "pinia";
const store = useMenuStatusStore();
const { collapse } = storeToRefs(store);
const isCollapse = collapse;

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<!-- <style lang="scss" scoped></style> -->
