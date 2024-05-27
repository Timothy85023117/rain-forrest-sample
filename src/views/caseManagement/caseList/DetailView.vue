<template>
  <div class="wrap-min-height">
    <!-- 案件內容 -->
    <div class="card w-full">
      <div class="card-title">
        <h3>案件內容</h3>
      </div>
      <el-form label-position="top" class="grid gap-4 grid-cols-5">
        <el-form-item label="平台案件編號">
          <el-input v-model="input1" size="large" disabled />
        </el-form-item>
        <el-form-item label="通路案件編號">
          <el-input v-model="input2" size="large" disabled />
        </el-form-item>
        <el-form-item label="問題分類大項">
          <el-select
            v-model="value1"
            placeholder="問題分類大項"
            size="large"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="問題分類細項">
          <el-select
            v-model="value2"
            placeholder="問題分類細項"
            size="large"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="狀態">
          <el-select v-model="value3" placeholder="狀態" size="large" disabled>
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
          <el-input
            v-model="textareaValue"
            type="textarea"
            :rows="8"
            disabled
          />
        </el-form-item>
      </el-form>
    </div>
    <!-- 指派清單 -->
    <CollapseComponent class="mt-5 mb-5">
      <template #title>
        <div class="card-title">
          <h3>指派清單</h3>
        </div>
      </template>
      <template #content>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="指派單位" width="160">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span>{{ scope.row.unit }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="指派人員" width="160">
            <template #default="scope">
              <span>{{ scope.row.member }}</span>
            </template>
          </el-table-column>
          <el-table-column label="指派時間" width="160">
            <template #default="scope">
              <span>{{ scope.row.assignDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="回覆時間" width="160">
            <template #default="scope">
              <span>{{ scope.row.replyDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="回覆內容">
            <template #default="scope">
              <span>{{ scope.row.replyContent }}</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </CollapseComponent>
    <!-- 訂單資訊 -->
    <CollapseComponent class="mt-5 mb-5">
      <template #title>
        <div class="card-title">
          <h3>訂單資訊</h3>
        </div>
      </template>
      <template #content>
        <el-form label-position="top" class="grid gap-4 grid-cols-5 mb-8">
          <el-form-item label="平台">
            <el-select
              v-model="value1"
              placeholder="問題分類大項"
              size="large"
              disabled
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="品牌">
            <el-select
              v-model="value1"
              placeholder="問題分類大項"
              size="large"
              disabled
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
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
        <el-table :data="tableData2" style="width: 100%" class="mt-5">
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
      </template>
    </CollapseComponent>
    <!-- 附件 -->
    <CollapseComponent class="mt-5 mb-5">
      <template #title>
        <div class="card-title">
          <h3>
            附件
            <span
              >檔案格式限制：PDF、PNG、JPG、JPEG，單一大小不超過
              10MB。最多10個檔案。</span
            >
          </h3>
        </div>
      </template>
      <template #content>
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
            <template #default="">
              <div class="flex items-center text-base">
                <el-icon class="icon-download icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1190_7949)">
                      <path
                        d="M10.918 6.25098C12.1867 6.25798 12.8739 6.31456 13.3219 6.76256C13.8346 7.27531 13.8346 8.10014 13.8346 9.74981V10.3331C13.8346 11.9834 13.8346 12.8082 13.3219 13.321C12.8097 13.8331 11.9843 13.8331 10.3346 13.8331H5.66797C4.0183 13.8331 3.19289 13.8331 2.68072 13.321C2.16797 12.8076 2.16797 11.9834 2.16797 10.3331V9.74981C2.16797 8.10014 2.16797 7.27531 2.68072 6.76256C3.12872 6.31456 3.81589 6.25798 5.08464 6.25098"
                        stroke="#76C144"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 2.16667L8 9.75M8 9.75L6.25 7.70833M8 9.75L9.75 7.70833"
                        stroke="#76C144"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1190_7949">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(1 1)"
                        />
                      </clipPath>
                    </defs>
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
    <!-- 客服回覆 -->
    <div class="card w-full">
      <div class="card-title">
        <h3>客服回覆</h3>
      </div>
      <el-form label-position="top" class="mt-4">
        <el-form-item label="客服回覆">
          <el-input
            v-model="textareaValue2"
            type="textarea"
            :rows="8"
            placeholder="請輸入回覆內容"
          />
        </el-form-item>
        <p class="text-describe text-right text-color-primary-gray pt-2">
          <span class="text-color-primary-green">0</span><span>/4000</span>
        </p>
      </el-form>
    </div>
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
import { useModalStatusStore } from "@/stores/modal-status";
import CollapseComponent from "@/components/CollapseComponent.vue";
import DialogPureTextModal from "@/components/modal/DialogPureTextModal.vue";

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
