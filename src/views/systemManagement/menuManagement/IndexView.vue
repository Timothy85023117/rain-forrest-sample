<template>
  <div class="wrap-min-height">
    <el-tabs
      v-model="activeName"
      type="card"
      class="caseClassification-tabs main-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="目錄" name="first">
        <div class="flex">
          <el-select
            v-model="value"
            placeholder="選擇父層"
            size="large"
            style="width: 262px"
            class="mr-4"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input
            v-model="input"
            style="width: 262px"
            size="large"
            placeholder="模糊搜尋名稱"
          />
          <el-button size="large" type="primary" class="ml-4">查詢</el-button>
        </div>
        <hr class="mt-8 mb-8" />
        <!-- 按鈕 -->
        <div class="flex justify-end mt-8 mb-4">
          <el-button size="large" type="primary">新增</el-button>
        </div>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="選單名稱">
            <template #default="scope">
              <span>{{ scope.row.meunName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="圖示">
            <template #default="scope">
              <div class="flex items-center">
                <div class="show-icon">
                  <img
                    :src="`/src/assets/images/${scope.row.meunIcon}.svg`"
                    alt=""
                  />
                </div>
                <span>{{ scope.row.meunIcon }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="排序">
            <template #default="scope">
              <span>{{ scope.row.meunIndex }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="scope">
              <div class="flex items-center">
                <!-- 編輯到一半可以暫存，但icon會變成黃色(notice-color)，且指派按鈕需要disabled -->
                <el-icon class="icon-edit icon notice-color">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.99935 3.99996L11.9993 5.99996M8.66602 13.3333H13.9993M3.33268 10.6666L2.66602 13.3333L5.33268 12.6666L13.0567 4.94263C13.3066 4.69259 13.4471 4.35351 13.4471 3.99996C13.4471 3.64641 13.3066 3.30733 13.0567 3.05729L12.942 2.94263C12.692 2.69267 12.3529 2.55225 11.9993 2.55225C11.6458 2.55225 11.3067 2.69267 11.0567 2.94263L3.33268 10.6666Z"
                      stroke="#76C144"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </el-icon>
                <el-icon
                  class="icon-delete icon"
                  @click="deleteItem($event, scope.$index, scope.row)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 4H13L12.09 13.0995C12.0389 13.6107 11.6088 14 11.095 14H4.90499C4.39124 14 3.96107 13.6107 3.90995 13.0995L3 4Z"
                      stroke="#76C144"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2 4H14"
                      stroke="#76C144"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6 2H10"
                      stroke="#76C144"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.5 7V11"
                      stroke="#76C144"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.5 7V11"
                      stroke="#76C144"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </el-icon>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-block">
          <!-- pager-count僅能設定 5~21之間的奇數 -->
          <el-pagination
            v-model:current-page="currentPage2"
            v-model:page-size="pageSize2"
            :pager-count="7"
            :page-sizes="[10, 50, 100, 200]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="sizes, prev, pager, next"
            :total="50"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="選單" name="second">選單</el-tab-pane>
      <el-tab-pane label="操作" name="third">操作</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const input = ref("");

interface MeunList {
  meunName: string;
  meunIcon: string;
  meunIndex: string;
}
const tableData: MeunList[] = [
  {
    meunName: "案件管理-案件總覽",
    meunIcon: "Ic-CaseManagement-Default",
    meunIndex: "1",
  },
  {
    meunName: "系統管理",
    meunIcon: "Ic-SystemManage-Default",
    meunIndex: "1",
  },
];
const deleteItem = ($event: any, index: number, row: MeunList) => {
  $event.stopImmediatePropagation();
  // store.openDialogPureTextModal();
  console.log("openModel", index, row);
};

const currentPage2 = ref(1); //目前頁數
const pageSize2 = ref(10); //一頁10筆
const small = ref(false);
const background = ref(true);
const disabled = ref(false);
</script>
<style lang="scss" scoped>
.show-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;

  img {
    width: 100%;
  }
}
</style>
