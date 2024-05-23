<template>
  <el-dialog
    v-model="dialogPureTextTitle"
    title="保存確認"
    :append-to-body="true"
  >
    <div class="dialog-content">
      <h2 class="text-center">
        如要繼續編輯回覆內容請點選暫存，如確認內容無誤請點選確認。
      </h2>
    </div>
    <template #footer>
      <div class="dialog-footer flex justify-center">
        <el-button
          size="large"
          class="fix-width"
          @click="store.closeDialogPureTextTitleModal"
          >取消</el-button
        >
        <el-button
          size="large"
          type="primary"
          class="fix-width"
          @click="store.closeDialogPureTextTitleModal"
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
const { dialogPureTextTitleModalOpen } = storeToRefs(store);
const dialogPureTextTitle = dialogPureTextTitleModalOpen;
</script>

<!-- <style scoped lang="scss"></style> -->
