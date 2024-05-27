<template>
  <el-dialog v-model="dialogChoseFormTitle" title="指派" :append-to-body="true">
    <div class="dialog-content">
      <div class="dialog-content--warn-tip mb-4">
        <p>*處理客服或是指派其他單位二擇一</p>
      </div>
      <el-form label-position="top" class="grid gap-4 grid-cols-3">
        <el-form-item label="處理客服" class="mb-0">
          <el-select
            v-model="valueSelect"
            filterable
            placeholder="請選擇客服"
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
      </el-form>
      <div class="divider-line">
        <span>或</span>
      </div>
      <el-form label-position="top" class="grid gap-4 grid-cols-3">
        <el-form-item label="指派單位" class="mb-0">
          <el-select
            v-model="valueSelect"
            filterable
            placeholder="請選擇單位"
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
        <el-form-item label="指派人員" class="mb-0">
          <el-select
            v-model="valueSelect1"
            filterable
            placeholder="請選擇人員"
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
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer flex justify-center">
        <el-button
          size="large"
          type="primary"
          @click="store.closeDialogChoseFormTitleModal"
        >
          確認
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts">
export default {
  name: "DialogChoseFormTitleModal",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useModalStatusStore } from "@/stores/modal-status";
const store = useModalStatusStore();
const { dialogChoseFormTitleModalOpen } = storeToRefs(store);

const dialogChoseFormTitle = dialogChoseFormTitleModalOpen;

const valueSelect = ref("");
const valueSelect1 = ref("");
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
</script>

<!-- <style scoped lang="scss"></style> -->
