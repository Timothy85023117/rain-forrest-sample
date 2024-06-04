<template>
  <VueFinalModal>
    <el-dialog
      :class="props.isSmall ? 'dialog-sm' : ''"
      :title="props.title"
      :append-to-body="true"
    >
      <div class="dialog-content">
        <slot
          name="bodycontent"
          :customParam="customParam"
          :close="() => emit('update:modelValue', false)"
        ></slot>
        <!-- 確認將案件狀態改為刪除？ -->
      </div>
      <template #footer>
        <slot
          name="footercontent"
          :close="() => emit('update:modelValue', false)"
        ></slot>
      </template>
    </el-dialog>
  </VueFinalModal>
</template>
<script lang="ts">
export default {
  name: "DialogPureTextModal",
};
</script>
<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
export interface T {
  [key: string]: any;
}
const props = withDefaults(
  defineProps<{
    title?: string; //標題
    isErrorModal?: boolean;
    isAlert?: boolean; //判斷是否為Alert大小
    extraContentClass?: string; //外部引用component時設定class樣式
    isShowFooter?: boolean; //判斷是否顯示Footer
    footerHasShadow?: boolean; //判斷是否顯示Footer上的陰影樣式
    customParam?: T;
    noFooter?: boolean;
    isSmall?: boolean;
  }>(),
  {
    isAlert: false,
    isErrorModal: false,
    extraContentClass: "modal__container--small",
    isShowFooter: true,
    footerHasShadow: false,
    noFooter: false,
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", modelValue: boolean): void;
}>();
</script>

<!-- <style scoped lang="scss"></style> -->
