<template>
  <div class="wrap-min-height">
    <el-tabs
      v-model="activeName"
      type="card"
      class="caseClassification-tabs main-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="案件分類" name="first">
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
          <el-table-column label="ID" width="100">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span>{{ scope.row.id }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="名稱">
            <template #default="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="排序" width="60">
            <template #default="scope">
              <span>{{ scope.row.index }}</span>
            </template>
          </el-table-column>
          <el-table-column label="狀態" width="100">
            <template #default="scope">
              <span>{{ scope.row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column label="建立者" width="120">
            <template #default="scope">
              <span>{{ scope.row.createOwner }}</span>
            </template>
          </el-table-column>
          <el-table-column label="建立日期">
            <template #default="scope">
              <span>{{ scope.row.createDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="修改者" width="120">
            <template #default="scope">
              <span>{{ scope.row.editOwner }}</span>
            </template>
          </el-table-column>
          <el-table-column label="修改日期">
            <template #default="scope">
              <span>{{ scope.row.editDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60">
            <template #default="">
              <div class="flex items-center">
                <!-- 編輯到一半可以暫存，但icon會變成黃色(notice-color) -->
                <el-icon class="icon-edit icon">
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
      <el-tab-pane label="分類項目" name="second">分類項目</el-tab-pane>
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
  id: string;
  name: string;
  index: string;
  state: string;
  createOwner: string;
  createDate: string;
  editOwner: string;
  editDate: string;
}
const tableData: User[] = [
  {
    id: "1",
    name: "訂單問題",
    index: "1",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "2",
    name: "訂單問題",
    index: "2",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "3",
    name: "訂單問題",
    index: "3",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "4",
    name: "訂單問題",
    index: "4",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "5",
    name: "訂單問題",
    index: "5",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "6",
    name: "訂單問題",
    index: "6",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "7",
    name: "訂單問題",
    index: "7",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "8",
    name: "訂單問題",
    index: "8",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "9",
    name: "訂單問題",
    index: "9",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
  {
    id: "10",
    name: "訂單問題",
    index: "10",
    state: "啟用",
    createOwner: "0256_Tom",
    createDate: "2024/04/22 13:20:10",
    editOwner: "0256_Tom",
    editDate: "2024/04/25 13:20:10",
  },
];

const currentPage2 = ref(1); //目前頁數
const pageSize2 = ref(10); //一頁10筆
const small = ref(false);
const background = ref(true);
const disabled = ref(false);
</script>
<!-- <style lang="scss" scoped></style> -->
