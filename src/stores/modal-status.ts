import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStatusStore = defineStore("modalStatus", {
  state: () => ({
    dialogChoseFormTitleModalOpen: false,
    dialogFormTitleModalOpen: false,
    dialogPureTextModalOpen: false,
    dialogPureTextTitleModalOpen: false,
    dialogSingleFormModalOpen: false,
    dialogTableModalOpen: false,
  }),
  getters: {},
  actions: {
    openDialogChoseFormTitleModal() {
      this.dialogChoseFormTitleModalOpen = true;
    },
    closeDialogChoseFormTitleModal() {
      this.dialogChoseFormTitleModalOpen = false;
    },
    openDialogFormTitleModal() {
      this.dialogFormTitleModalOpen = true;
    },
    closeDialogFormTitleModal() {
      this.dialogFormTitleModalOpen = false;
    },
    openDialogPureTextModal() {
      this.dialogPureTextModalOpen = true;
    },
    closeDialogPureTextModal() {
      this.dialogPureTextModalOpen = false;
    },
    openDialogPureTextTitleModal() {
      this.dialogPureTextTitleModalOpen = true;
    },
    closeDialogPureTextTitleModal() {
      this.dialogPureTextTitleModalOpen = false;
    },
    openDialogSingleFormModal() {
      console.log("ppp");
      this.dialogSingleFormModalOpen = true;
    },
    closeDialogSingleFormModal() {
      this.dialogSingleFormModalOpen = false;
    },
    openDialogTableModal() {
      this.dialogTableModalOpen = true;
    },
    closeDialogTableModal() {
      this.dialogTableModalOpen = false;
    },
  },
});
