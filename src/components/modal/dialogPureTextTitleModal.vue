<template>
  <el-dialog
    v-model="dialogPureTextTitle"
    :title="props.title"
    :append-to-body="true"
  >
    <div class="dialog-content">
      <h2 class="text-center">
        {{ props.contents }}
      </h2>
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
  name: "DialogPureTextTitleModal",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useModalStatusStore } from "@/stores/modal-status";
const store = useModalStatusStore();
const { dialogPureTextTitleModalOpen } = storeToRefs(store);
const dialogPureTextTitle = dialogPureTextTitleModalOpen;

const props = defineProps({
  title: {
    type: String,
    default: "保存確認",
  },
  contents: {
    type: String,
    default: "如要繼續編輯回覆內容請點選暫存，如確認內容無誤請點選確認。",
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
  store.closeDialogPureTextTitleModal();
};
const primaryButtonFn = () => {
  console.log("primaryButtonFn", props);
  props.primaryButtonFn?.();
  store.closeDialogPureTextTitleModal();
};
</script>

<!-- <style scoped lang="scss"></style> -->
