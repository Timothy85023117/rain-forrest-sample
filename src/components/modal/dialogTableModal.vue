<template>
  <el-dialog v-model="dialogTable" title="使用者詳細資訊" :append-to-body="true">
    <div class="dialog-content">
      <ul class="table-pure-table">
        <li>
          <div class="table-title">使用者帳號</div>
          <div class="table-content">0256_Tom@rfr.com.tw</div>
        </li>
        <li>
          <div class="table-title">名稱</div>
          <div class="table-content">任海宏 (Tom)</div>
        </li>
        <li>
          <div class="table-title">電子信箱</div>
          <div class="table-content">tom_ren@rainforestretail.com.tw</div>
        </li>
        <li>
          <div class="table-title">角色</div>
          <div class="table-content">系統管理者</div>
        </li>
        <li>
          <div class="table-title">狀態</div>
          <div class="table-content">
            <el-tag type="primary">啟用</el-tag>
          </div>
        </li>
        <li>
          <div class="table-title">建立時間</div>
          <div class="table-content">2024-03-19 11:28</div>
        </li>
        <li>
          <div class="table-title">更新時間</div>
          <div class="table-content">2024-03-19 11:28</div>
        </li>
        <li>
          <div class="table-title">最後登入時間</div>
          <div class="table-content">2024-03-19 11:28</div>
        </li>
      </ul>
    </div>
    <template #footer>
      <div class="dialog-footer flex justify-center">
        <el-button
          size="large"
          class="fix-width"
          @click="store.closeDialogTableModal"
          >取消</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModalStatusStore } from "@/stores/modal-status";
const store = useModalStatusStore();
const { dialogTableModalOpen } = storeToRefs(store);
const dialogTable = dialogTableModalOpen;
</script>

<!-- <style scoped lang="scss"></style> -->
