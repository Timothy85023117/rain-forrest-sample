<template>
  <div class="notify-box mr-5">
    <el-badge
      :value="99"
      :max="100"
      class="item notify-box-item"
      :offset="[2, -1]"
      @click="openNotify()"
    >
      <div class="notify-img">
        <img
          src="/src/assets/images/Ic-Alert-Default.svg"
          class="notify-icon"
          alt=""
        />
      </div>
    </el-badge>
    <div
      :class="{ 'is-open': notifyOpen }"
      class="notify-menu-wrapper"
      @click.stop
    >
      <h3>系統通知</h3>
      <el-tabs v-model="activeName" class="snd-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">
          <template v-slot:label>
            <div class="flex">
              <span>待處理</span>
              <div class="tab-badge">1</div>
            </div>
          </template>
          <div
            @click="onBtnToDetail"
            class="flex notify-menu-list items-center"
          >
            <span>C202405030002</span>
            <span class="truncate">訂單問題</span>
            <span style="width: 138px">2024/05/02 15:20</span>
            <span class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="#76C144"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path>
              </svg>
            </span>
          </div>
          <div
            @click="onBtnToDetail"
            class="flex notify-menu-list items-center"
          >
            <span>C202405030002</span>
            <span class="truncate">訂單問題</span>
            <span style="width: 138px">2024/05/02 15:20</span>
            <span class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="#76C144"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path>
              </svg>
            </span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">
          <template v-slot:label>
            <div class="flex">
              <span>已回覆</span>
              <div class="tab-badge">0</div>
            </div>
          </template>
          <div
            @click="onBtnToDetail"
            class="flex notify-menu-list items-center"
          >
            <span>C202405030002</span>
            <span class="truncate">訂單問題</span>
            <span style="width: 138px">2024/05/02 15:20</span>
            <span class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="#76C144"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path>
              </svg>
            </span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Role" name="third">
          <template v-slot:label>
            <div class="flex">
              <span>超時提醒</span>
              <div class="tab-badge">21</div>
            </div>
          </template>
          <div
            @click="onBtnToDetail"
            class="flex notify-menu-list items-center"
          >
            <span>C202405030002</span>
            <span class="truncate">訂單問題</span>
            <span style="width: 138px">2024/05/02 15:20</span>
            <span class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="#76C144"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path>
              </svg>
            </span>
          </div>
          <div
            @click="onBtnToDetail"
            class="flex notify-menu-list items-center"
          >
            <span>C202405030002</span>
            <span class="truncate">訂單問題</span>
            <span style="width: 138px">2024/05/02 15:20</span>
            <span class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="#76C144"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path>
              </svg>
            </span>
          </div>
          <div
            @click="onBtnToDetail"
            class="flex notify-menu-list items-center"
          >
            <span>C202405030002</span>
            <span class="truncate">訂單問題</span>
            <span style="width: 138px">2024/05/02 15:20</span>
            <span class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path
                  fill="#76C144"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path>
              </svg>
            </span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "NotifyComponent",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

const notifyOpen = ref(false);
const openNotify = () => {
  notifyOpen.value = !notifyOpen.value;
};

const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event);
};

document.addEventListener("click", (e: Event) => {
  const eventTarget = e.target as Element; //由於EventTarget不是繼承自Element類型，所以typescript不能成功辨識class和id這些屬性。所以這裡使用型別斷言將event.target的型別明確指明為Element即可
  if (eventTarget.className !== "notify-icon") {
    notifyOpen.value = false;
  }
});
const onBtnToDetail = () => {
  router.push({
    path: "/case-management/caselist/listdetail",
  });
};
</script>
<style lang="scss" scoped>
.notify-box {
  position: relative;
  z-index: 2;
}

.notify-img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.notify-menu-wrapper {
  position: absolute;
  top: 32px;
  right: 0;
  display: none;
  width: 375px;
  border: 1px solid $color-gray-400;
  border-radius: 4px;
  background-color: $color-white;
  box-shadow: 0 0 16px 0 rgba($color: #d9d9d6, $alpha: 50%);

  &.is-open {
    display: block;
  }

  h3 {
    padding: 8px 16px 16px;
    color: $color-gray-800;
  }

  .el-tabs__header {
    margin-bottom: 0;
  }

  .el-tab-pane {
    padding: 8px 0;
  }
}

.notify-menu-list {
  color: $color-gray-800;
  font-size: 14px;
  border-bottom: 1px solid $color-gray-400;
  cursor: pointer;

  span {
    padding: 15px 8px;
  }

  .icons {
    padding: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
