<template>
  <el-dialog v-model="dialogPureText" class="dialog-sm" :append-to-body="true">
    <div class="dialog-content">
      <h2 class="text-center">確認將案件狀態改為刪除？</h2>
    </div>
    <template #footer>
      <div class="dialog-footer flex justify-center">
        <el-button size="large" @click="store.closeDialogPureTextModal"
          >取消</el-button
        >
        <el-button
          size="large"
          type="primary"
          @click="store.closeDialogPureTextModal"
        >
          確認
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts">
export default {
  name: "DialogPureTextModal",
};
</script>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModalStatusStore } from "@/stores/modal-status";
const store = useModalStatusStore();
const { dialogPureTextModalOpen } = storeToRefs(store);
const dialogPureText = dialogPureTextModalOpen;
</script>

<!-- <style scoped lang="scss"></style> -->
