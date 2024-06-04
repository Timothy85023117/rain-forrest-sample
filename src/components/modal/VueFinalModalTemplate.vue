<template>
  <VueFinalModal
    class="flex justify-center items-center"
    @update:model-value="(val) => emit('update:modelValue', val)"
    classes="modal"
    :content-class="[
      'modal__container modal__container--scroll',
      props.extraContentClass,
    ]"
  >
    <div class="modal__content" v-bind:class="title ? 'm-8' : 'm-5'">
      <div class="w-full flex justify-between items-center">
        <div></div>
        <div v-if="title" class="text-xl">{{ title }}</div>
        <img
          src="../../assets/images/Ic-Close.svg"
          class="cursor-pointer"
          @click="emit('update:modelValue', false)"
        />
      </div>
      <div v-bind:class="title ? 'mt-10' : 'mt-4 pt-0.5'">
        <slot
          name="body"
          :close="() => emit('update:modelValue', false)"
        ></slot>
      </div>
    </div>
  </VueFinalModal>
</template>

<script lang="ts">
export default {
  name: "VueFinalModalTemplate",
};
</script>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
const props = withDefaults(
  defineProps<{
    title?: string; //標題
    extraContentClass?: string; //外部引用component時設定class樣式
  }>(),
  {
    extraContentClass: "modal__container--small",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: boolean): void;
}>();
</script>
<!-- <style lang="scss"></style> -->
