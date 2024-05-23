<template>
  <div class="wrap-min-height">
    <div class="card w-full">
      <div class="card-title">
        <h3>案件內容</h3>
      </div>
      <el-form label-position="top" class="grid gap-4 grid-cols-5">
        <el-form-item label="平台案件編號">
          <el-input v-model="input1" size="large" disabled />
        </el-form-item>
        <el-form-item label="通路案件編號">
          <el-input v-model="input2" size="large" disabled />
        </el-form-item>
        <el-form-item label="問題分類大項">
          <el-select
            v-model="value1"
            placeholder="問題分類大項"
            size="large"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="問題分類細項">
          <el-select
            v-model="value2"
            placeholder="問題分類細項"
            size="large"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="狀態">
          <el-select v-model="value3" placeholder="狀態" size="large" disabled>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <el-form label-position="top" class="mt-4">
        <el-form-item label="問題內容">
          <el-input
            v-model="textareaValue"
            type="textarea"
            :rows="8"
            disabled
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="card w-full">
      <div class="card-title">
        <h3>指派清單</h3>
      </div>
    </div>
    <div class="card w-full">
      <div class="card-title">
        <h3>訂單資訊</h3>
      </div>
      <el-form label-position="top" class="grid gap-4 grid-cols-5 mb-8">
        <el-form-item label="平台">
          <el-select
            v-model="value1"
            placeholder="問題分類大項"
            size="large"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="品牌">
          <el-select
            v-model="value1"
            placeholder="問題分類大項"
            size="large"
            disabled
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="出貨單號">
          <el-input v-model="input1" size="large" disabled />
        </el-form-item>
        <el-form-item label="電商平台單號">
          <el-input v-model="input1" size="large" disabled />
        </el-form-item>
        <el-form-item label="配送單號">
          <el-input v-model="input1" size="large" disabled />
        </el-form-item>
        <el-form-item label="訂單編號">
          <el-input v-model="input1" size="large" disabled />
        </el-form-item>
      </el-form>
      <div class="card-title">
        <h3>商品資訊</h3>
      </div>
    </div>
    <div class="card w-full">
      <div class="card-title">
        <h3>
          附件
          <span
            >檔案格式限制：PDF、PNG、JPG、JPEG，單一大小不超過
            10MB。最多10個檔案。</span
          >
        </h3>
      </div>
    </div>
    <div class="card w-full">
      <div class="card-title">
        <h3>客服回覆</h3>
      </div>
      <el-form label-position="top" class="mt-4">
        <el-form-item label="客服回覆">
          <el-input
            v-model="textareaValue2"
            type="textarea"
            :rows="8"
            placeholder="請輸入回覆內容"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const input1 = ref("cm20240420001");
const input2 = ref("");
const value1 = ref("訂單問題");
const value2 = ref("贈品寄送");
const value3 = ref("已回覆");
const textareaValue = ref("問題內容");
const textareaValue2 = ref("");

const options = [
  {
    value: "訂單問題",
    label: "訂單問題",
  },
  {
    value: "贈品寄送",
    label: "贈品寄送",
  },
  {
    value: "已回覆",
    label: "已回覆",
  },
];
</script>
<!-- <style lang="scss" scoped></style> -->
