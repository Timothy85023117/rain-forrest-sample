<template>
  <div class="wrap-min-height">
    <el-tabs
      v-model="activeName"
      type="card"
      class="caseClassification-tabs main-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="人員管理" name="first">
        <div class="flex">
          <el-input
            v-model="input"
            style="width: 262px"
            size="large"
            placeholder="輸入關鍵字"
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
          <el-table-column label="名稱" width="120">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span>{{ scope.row.name }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="使用者帳號" width="180">
            <template #default="scope">
              <span>{{ scope.row.account }}</span>
            </template>
          </el-table-column>
          <el-table-column label="電子信箱" width="250">
            <template #default="scope">
              <span>{{ scope.row.email }}</span>
            </template>
          </el-table-column>
          <el-table-column label="角色" width="100">
            <template #default="scope">
              <span class="truncate">{{ scope.row.role }}</span>
            </template>
          </el-table-column>
          <el-table-column label="狀態" width="60">
            <template #default="scope">
              <span>{{ scope.row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column label="建立日期">
            <template #default="scope">
              <span>{{ scope.row.createDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="更新日期">
            <template #default="scope">
              <span>{{ scope.row.updateDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template #default="scope">
              <div class="flex items-center">
                <el-icon class="icon-view icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 10.1838C9.32246 10.1838 10.3945 9.11176 10.3945 7.7893C10.3945 6.46684 9.32246 5.39478 8 5.39478C6.67753 5.39478 5.60547 6.46684 5.60547 7.7893C5.60547 9.11176 6.67753 10.1838 8 10.1838Z"
                      stroke="#76C144"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14.5355 6.9382C14.8452 7.31494 15 7.50251 15 7.78905C15 8.0756 14.8452 8.26317 14.5355 8.63991C13.4021 10.016 10.9022 12.5781 8 12.5781C5.09783 12.5781 2.59795 10.016 1.46454 8.63991C1.15485 8.26317 1 8.0756 1 7.78905C1 7.50251 1.15485 7.31494 1.46454 6.9382C2.59795 5.56214 5.09783 3 8 3C10.9022 3 13.4021 5.56214 14.5355 6.9382Z"
                      stroke="#76C144"
                      stroke-width="1.5"
                    />
                  </svg>
                </el-icon>
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
      <el-tab-pane label="角色管理" name="second">角色管理</el-tab-pane>
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

const input = ref("");

interface User {
  name: string;
  account: string;
  email: string;
  role: string;
  state: string;
  createDate: string;
  updateDate: string;
}
const tableData: User[] = [
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
  {
    name: "任海宏 (Tom)",
    account: "0256_Tom@rfr.com.tw",
    email: "tom_ren@rainforestretail.com.tw",
    role: "系統管理員",
    state: "啟用",
    createDate: "2024/04/22 13:20:10",
    updateDate: "2024/04/25 13:20:10",
  },
];
const deleteItem = ($event: any, index: number, row: User) => {
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
<!-- <style lang="scss" scoped></style> -->
