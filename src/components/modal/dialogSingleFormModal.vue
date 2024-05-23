<template>
  <el-dialog v-model="dialogSingleFormTitle" title="指派" :append-to-body="true">
    <div class="dialog-content">
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
        <el-form-item label="指派單位" class="mb-0">
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
          class="fix-width"
          @click="store.closeDialogSingleFormModal"
        >
          確認
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useModalStatusStore } from "@/stores/modal-status";

const store = useModalStatusStore();
const { dialogSingleFormModalOpen } = storeToRefs(store);
const dialogSingleFormTitle = dialogSingleFormModalOpen;

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
