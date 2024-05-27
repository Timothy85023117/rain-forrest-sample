<template>
  <div class="wrap-min-height">
    <!-- 訂單資訊 -->
    <CollapseComponent class="mt-5 mb-5">
      <template #title>
        <div class="card-title">
          <h3>訂單資訊</h3>
        </div>
      </template>
      <template #content>
        <el-form label-position="top" class="grid gap-4 grid-cols-4 mb-8">
          <el-form-item label="平台">
            <el-select v-model="value1" placeholder="請選擇" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="品牌">
            <el-select v-model="value1" placeholder="請選擇" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="單號類型">
            <el-select v-model="value1" placeholder="配送單號" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="配送單號">
            <el-input
              v-model="input1"
              size="large"
              placeholder="000000000000"
            />
          </el-form-item>
        </el-form>
        <!-- 按鈕 -->
        <div class="flex justify-end mt-5 mb-8">
          <el-button size="large">重置條件</el-button>
          <el-button size="large" type="primary">查詢</el-button>
        </div>
        <div class="card-title">
          <h3>訂單明細</h3>
        </div>
        <el-form label-position="top" class="grid gap-4 grid-cols-4 mb-8 mt-5">
          <el-form-item label="出貨單號">
            <el-input v-model="input1" size="large" disabled />
          </el-form-item>
          <el-form-item label="電商平台單號">
            <el-input v-model="input1" size="large" disabled />
          </el-form-item>
          <el-form-item label="配送單號">
            <el-input v-model="input1" size="large" disabled />
          </el-form-item>
          <el-form-item label="訂單編號">
            <el-input v-model="input1" size="large" disabled />
          </el-form-item>
        </el-form>
        <div class="card-title">
          <h3>商品資訊</h3>
        </div>
        <el-table
          :data="tableData2"
          style="width: 100%"
          class="mt-5"
          ref="multipleTableRef"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="QC">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span>{{ scope.row.qc }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="商品名稱">
            <template #default="scope">
              <span>{{ scope.row.productName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="數量">
            <template #default="scope">
              <span>{{ scope.row.replyContent }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 按鈕 -->
        <div class="flex justify-end mt-5 mb-8">
          <el-button size="large" class="notice-button">刪除</el-button>
          <el-button size="large" type="primary">新增</el-button>
        </div>
      </template>
    </CollapseComponent>
    <!-- 指派清單 -->
    <CollapseComponent class="mt-5 mb-5">
      <template #title>
        <div class="card-title">
          <h3>指派清單 <span>處理客服或是指派其他單位二擇一</span></h3>
        </div>
      </template>
      <template #content>
        <el-form label-position="top" class="grid gap-4 grid-cols-4 mb-8">
          <el-form-item label="處理客服">
            <el-select v-model="value1" placeholder="請選擇" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="指派單位">
            <el-select v-model="value1" placeholder="請選擇" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="指派人員">
            <el-select v-model="value1" placeholder="配送單號" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
    </CollapseComponent>
    <!-- 案件內容 -->
    <CollapseComponent class="mt-5 mb-5">
      <template #title>
        <div class="card-title">
          <h3>案件內容</h3>
        </div>
      </template>
      <template #content>
        <el-form label-position="top" class="grid gap-4 grid-cols-4">
          <el-form-item label="通路案件編號">
            <el-input v-model="input2" size="large" />
          </el-form-item>
          <el-form-item label="問題分類大項" required>
            <el-select v-model="value1" placeholder="問題分類大項" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="問題分類細項" required>
            <el-select v-model="value2" placeholder="問題分類細項" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <el-form label-position="top" class="mt-4">
          <el-form-item label="問題內容">
            <el-input v-model="textareaValue" type="textarea" :rows="8" />
          </el-form-item>
          <p class="text-describe text-right text-color-primary-gray pt-2">
            <span class="text-color-primary-green">0</span><span>/4000</span>
          </p>
        </el-form>
        <div class="card-title">
          <h3>
            附件
            <span
              >檔案格式限制：PDF、PNG、JPG、JPEG，單一大小不超過
              10MB。最多10個檔案。</span
            >
          </h3>
        </div>
        <el-table :data="tableData3" style="width: 100%">
          <el-table-column label="檔案名稱" width="320">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span>{{ scope.row.fileName }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="檔案說明">
            <template #default="scope">
              <span class="truncate">{{ scope.row.fileInfo }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template #default="scope">
              <div class="flex items-center text-base">
                <el-icon
                  class="icon-delete icon mr-2"
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
        <div class="text-right mt-5">
          <el-button size="large" type="primary">新增附件</el-button>
        </div>
      </template>
    </CollapseComponent>
    <!-- 按鈕 -->
    <div class="flex justify-center mt-5 mb-8">
      <el-button size="large">取消</el-button>
      <el-button size="large" type="primary">保存</el-button>
    </div>
  </div>
  <DialogPureTextModal />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ElTable } from "element-plus";
import { useModalStatusStore } from "@/stores/modal-status";
import CollapseComponent from "@/components/CollapseComponent.vue";
import DialogPureTextModal from "@/components/modal/DialogPureTextModal.vue";

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const store = useModalStatusStore();

const input1 = ref("cm20240420001");
const input2 = ref("");
const value1 = ref("訂單問題");
const value2 = ref("贈品寄送");
const value3 = ref("已回覆");
const textareaValue = ref("問題內容");
const textareaValue2 = ref("");

const options = [
  {
    value: "訂單問題",
    label: "訂單問題",
  },
  {
    value: "贈品寄送",
    label: "贈品寄送",
  },
  {
    value: "已回覆",
    label: "已回覆",
  },
];

//table
interface assignList {
  unit: string;
  member: string;
  assignDate: string;
  replyDate: string;
  replyContent: string;
}
const tableData: assignList[] = [
  {
    unit: "品牌經營A組",
    member: "xxx",
    assignDate: "2024/04/24 11:42:30 ",
    replyDate: "-",
    replyContent: "尚未回覆",
  },
];
interface productInfo {
  qc: string;
  productName: string;
  replyContent: string;
}
const tableData2: productInfo[] = [
  {
    qc: "xxxxxxxxx",
    productName: "xxxxxxxxx",
    replyContent: "xx",
  },
  {
    qc: "xxxxxxxxx",
    productName: "xxxxxxxxx",
    replyContent: "xx",
  },
];
interface filesInfo {
  fileName: string;
  fileInfo: string;
}
const tableData3: filesInfo[] = [
  {
    fileName: "附件一.png",
    fileInfo:
      "檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明檔案說明",
  },
];

const deleteItem = ($event: any, index: number, row: filesInfo) => {
  $event.stopImmediatePropagation();
  store.openDialogPureTextModal();
  console.log("openModel", index, row);
};
</script>
<!-- <style lang="scss" scoped></style> -->
