<template>
  <el-dialog v-model="dialogPureText" class="dialog-sm" :append-to-body="true">
    <div class="dialog-content">
      <!-- 確認將案件狀態改為刪除？ -->
      <h2 class="text-center">{{ props.contents }}</h2>
    </div>
    <template #footer>
      <div class="dialog-footer flex justify-center">
        <el-button size="large" @click="subButtonFn">取消</el-button>
        <el-button size="large" type="primary" @click="primaryButtonFn">
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

const props = defineProps({
  contents: {
    type: String,
    default: "確認將案件狀態改為刪除？",
  },
  subButtonFn: {
    type: Function,
  },
  primaryButtonFn: {
    type: Function,
  },
});

const subButtonFn = () => {
  console.log("subButtonFn", props);
  props.subButtonFn?.();
  store.closeDialogPureTextModal();
};
const primaryButtonFn = () => {
  console.log("primaryButtonFn", props);
  props.primaryButtonFn?.();
  store.closeDialogPureTextModal();
};
</script>

<!-- <style scoped lang="scss"></style> -->
