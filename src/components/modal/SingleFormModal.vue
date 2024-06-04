<template>
  <VueFinalModalTemplate
    extraContentClass="modal__container--medium"
    :title="props.title"
  >
    <template #body="{ close }">
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
      <div class="dialog-footer flex justify-center mt-10">
        <el-button
          size="large"
          type="primary"
          @click="emit('btnConfirm', close)"
        >
          確認
        </el-button>
      </div>
    </template>
  </VueFinalModalTemplate>
</template>
<script lang="ts">
export default {
  name: "SingleFormModal",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import VueFinalModalTemplate from "@/components/modal/VueFinalModalTemplate.vue";
const props = defineProps<{
  title: string; //標題
}>();
const emit = defineEmits(["btnConfirm"]); // 確認按鈕事件

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
