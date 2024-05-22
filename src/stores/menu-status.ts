import { ref } from "vue";
import { defineStore } from "pinia";

export const useMenuStatusStore = defineStore("menuStatus", {
  state: () => ({
    collapse: false,
  }),
  getters: {},
  actions: {
    openMenu() {
      this.collapse = !this.collapse;
    },
  },
});
