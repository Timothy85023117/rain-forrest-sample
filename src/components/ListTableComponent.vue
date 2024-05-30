<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @row-click="handleGotoDetail()"
  >
    <el-table-column label="平台流水編號" width="110">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span>{{ scope.row.no }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="建單日期">
      <template #default="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="平台">
      <template #default="scope">
        <span>{{ scope.row.platform }}</span>
      </template>
    </el-table-column>
    <el-table-column label="品牌">
      <template #default="scope">
        <span>{{ scope.row.brand }}</span>
      </template>
    </el-table-column>
    <el-table-column label="問題分類大項">
      <template #default="scope">
        <span>{{ scope.row.ProblemItem }}</span>
      </template>
    </el-table-column>
    <el-table-column label="問題分類細項">
      <template #default="scope">
        <span>{{ scope.row.ProblemDetail }}</span>
      </template>
    </el-table-column>
    <el-table-column label="指派單位">
      <template #default="scope">
        <span>{{ scope.row.assignedUnit }}</span>
      </template>
    </el-table-column>
    <el-table-column label="狀態">
      <template #default="scope">
        <span>{{ scope.row.state }}</span>
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
    <el-table-column label="客服指派" width="90">
      <template #default="scope">
        <!-- 若編輯icon是黃色(notice-color)，指派按鈕需要disabled -->
        <el-button
          class="sm-size auto-width"
          size="small"
          type="primary"
          @click="openModel($event, scope.$index, scope.row)"
        >
          指派
        </el-button>
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
  <DialogSingleFormModal />
  <DialogPureTextModal />
</template>
<script lang="ts">
export default {
  name: "ListTableComponent",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import DialogSingleFormModal from "@/components/modal/dialogSingleFormModal.vue";
import DialogPureTextModal from "@/components/modal/dialogPureTextModal.vue";

import { useModalStatusStore } from "@/stores/modal-status";

import { useRouter } from "vue-router";
const store = useModalStatusStore();
const router = useRouter();

interface User {
  no: string;
  date: string;
  platform: string;
  brand: string;
  ProblemItem: string;
  ProblemDetail: string;
  assignedUnit: string;
  state: string;
}

const handleGotoDetail = () => {
  router.push({
    name: "listDetail",
  });
};
const openModel = ($event: any, index: number, row: User) => {
  $event.stopImmediatePropagation();
  store.openDialogSingleFormModal();
  console.log("openModel", index, row);
};
const deleteItem = ($event: any, index: number, row: User) => {
  $event.stopImmediatePropagation();
  store.openDialogPureTextModal();
  console.log("openModel", index, row);
};

const tableData: User[] = [
  {
    no: "xxxxxxxxxx",
    date: "2024/04/18",
    platform: "MOMO",
    brand: "高露潔",
    ProblemItem: "訂單問題",
    ProblemDetail: "贈品寄送",
    assignedUnit: "客戶服務組",
    state: "已回覆",
  },
  {
    no: "xxxxxxxxxx",
    date: "2024/04/18",
    platform: "MOMO",
    brand: "高露潔",
    ProblemItem: "訂單問題",
    ProblemDetail: "贈品寄送",
    assignedUnit: "客戶服務組",
    state: "已回覆",
  },
  {
    no: "xxxxxxxxxx",
    date: "2024/04/18",
    platform: "MOMO",
    brand: "高露潔",
    ProblemItem: "訂單問題",
    ProblemDetail: "贈品寄送",
    assignedUnit: "客戶服務組",
    state: "已回覆",
  },
  {
    no: "xxxxxxxxxx",
    date: "2024/04/18",
    platform: "MOMO",
    brand: "高露潔",
    ProblemItem: "訂單問題",
    ProblemDetail: "贈品寄送",
    assignedUnit: "客戶服務組",
    state: "已回覆",
  },
  {
    no: "xxxxxxxxxx",
    date: "2024/04/18",
    platform: "MOMO",
    brand: "高露潔",
    ProblemItem: "訂單問題",
    ProblemDetail: "贈品寄送",
    assignedUnit: "客戶服務組",
    state: "已回覆",
  },
  {
    no: "xxxxxxxxxx",
    date: "2024/04/18",
    platform: "MOMO",
    brand: "高露潔",
    ProblemItem: "訂單問題",
    ProblemDetail: "贈品寄送",
    assignedUnit: "客戶服務組",
    state: "已回覆",
  },
];

const currentPage2 = ref(1); //目前頁數
const pageSize2 = ref(10); //一頁10筆
const small = ref(false);
const background = ref(true);
const disabled = ref(false);
</script>
<style lang="scss" scoped>
.icon {
  width: 16px;
  cursor: pointer;

  & + .icon {
    margin-left: 8px;
  }
}

.sm-size {
  width: 60px;
  height: 32px;
}
</style>
