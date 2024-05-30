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
        <el-form
          label-position="top"
          class="grid gap-4 grid-cols-4 mb-8"
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
        >
          <el-form-item label="平台" prop="platform" required>
            <el-select
              v-model="ruleForm.platform"
              placeholder="請選擇"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="品牌" prop="brand" required>
            <el-select
              v-model="ruleForm.brand"
              placeholder="請選擇"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="單號類型" prop="orderNumberType">
            <el-select
              v-model="ruleForm.orderNumberType"
              placeholder="選擇查詢條件"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="配送單號" prop="deliveryOrderNumber">
            <el-input
              v-model="ruleForm.deliveryOrderNumber"
              size="large"
              placeholder="請填寫配送單號"
            />
          </el-form-item>
        </el-form>
        <!-- 按鈕 -->
        <div class="flex justify-end mt-5">
          <el-button size="large" @click="openError(), resetForm(ruleFormRef)"
            >重置條件</el-button
          >
          <el-button
            size="large"
            type="primary"
            @click="
              openSuccess(), submitForm(ruleFormRef), (searchResult = true)
            "
            >查詢</el-button
          >
        </div>
        <template v-if="searchResult">
          <div class="card-title mt-8">
            <h3>訂單明細</h3>
          </div>
          <el-form
            label-position="top"
            class="grid gap-4 grid-cols-4 mb-8 mt-5"
          >
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
          <el-form-item label="案件分類" required>
            <el-select v-model="value1" placeholder="案件分類" size="large">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="分類項目" required>
            <el-select v-model="value2" placeholder="分類項目" size="large">
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
          <el-form-item label="問題內容" required>
            <el-input
              v-model="textareaValue"
              type="textarea"
              placeholder="請輸入問題內容"
              :rows="8"
            />
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
import { ref, reactive } from "vue";
import { ElTable, ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { useModalStatusStore } from "@/stores/modal-status";
import CollapseComponent from "@/components/CollapseComponent.vue";
import DialogPureTextModal from "@/components/modal/dialogPureTextModal.vue";

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const store = useModalStatusStore();

interface RuleForm {
  platform: string;
  brand: string;
  orderNumberType: string;
  deliveryOrderNumber: string;
}
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  platform: "",
  brand: "",
  orderNumberType: "",
  deliveryOrderNumber: "",
});
const rules = reactive<FormRules<RuleForm>>({
  platform: [{ required: true, message: "請選擇平台", trigger: "blur" }],
  brand: [{ required: true, message: "請選擇品牌", trigger: "blur" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  console.log("formEl", formEl);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const searchResult = ref(false);
const input1 = ref("");
const input2 = ref("");
const value1 = ref("");
const value2 = ref("");
const textareaValue = ref("");

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
const tableData3: filesInfo[] = [];

const deleteItem = ($event: any, index: number, row: filesInfo) => {
  $event.stopImmediatePropagation();
  store.openDialogPureTextModal();
  console.log("openModel", index, row);
};

//toast
const openSuccess = () => {
  const messageTitle = "查詢成功";
  const messageContent = "訂單資訊查詢成功";
  const messageStr = `<div><div class="message-title">${messageTitle}</div></div>`;
  const messageStrContent = `<div><div class="message-title">${messageTitle}</div><div class="message-content">${messageContent}</div></div>`;
  ElMessage({
    duration: 0,
    showClose: true,
    dangerouslyUseHTMLString: true,
    message: messageContent.length == 0 ? messageStr : messageStrContent,
    type: "success",
  });
};
const openNotice = () => {
  const messageTitle = "暫存成功";
  const messageContent = "暫存成功";
  const messageStr = `<div><div class="message-title">${messageTitle}</div></div>`;
  const messageStrContent = `<div><div class="message-title">${messageTitle}</div><div class="message-content">${messageContent}</div></div>`;
  ElMessage({
    duration: 0,
    showClose: true,
    dangerouslyUseHTMLString: true,
    message: messageContent.length == 0 ? messageStr : messageStrContent,
    type: "warning",
  });
};
const openError = () => {
  const messageTitle = "查無資料";
  const messageContent = "請嘗試更換條件或自行手動輸入";
  const messageStr = `<div><div class="message-title">${messageTitle}</div></div>`;
  const messageStrContent = `<div><div class="message-title">${messageTitle}</div><div class="message-content">${messageContent}</div></div>`;
  ElMessage({
    duration: 0,
    showClose: true,
    dangerouslyUseHTMLString: true,
    message: messageContent.length == 0 ? messageStr : messageStrContent,
    type: "error",
  });
};
</script>
<!-- <style lang="scss" scoped></style> -->
