<template>
  <el-dialog v-model="dialogFormTitle" title="單位資訊" :append-to-body="true">
    <div class="dialog-content">
      <div class="dialog-content">
        <el-form label-position="top" class="grid gap-4 grid-cols-3">
          <div class="pure-txt-block">
            <div for="" class="pure-txt-block--title">序號</div>
            <div class="pure-txt-block--content">
              <p>1</p>
            </div>
          </div>
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
          <el-form-item label="狀態" class="mb-0">
            <el-radio-group v-model="radio1" class="w-full">
              <el-radio value="1" size="large" class="w-1/2 mr-0"
                >啟用</el-radio
              >
              <el-radio value="2" size="large" class="w-1/2">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer flex justify-center">
        <el-button
          size="large"
          class="fix-width"
          @click="store.closeDialogFormTitleModal"
          >取消</el-button
        >
        <el-button
          size="large"
          type="primary"
          class="fix-width"
          @click="store.closeDialogFormTitleModal"
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
const { dialogFormTitleModalOpen } = storeToRefs(store);
const dialogFormTitle = dialogFormTitleModalOpen;

const radio1 = ref("1");
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
