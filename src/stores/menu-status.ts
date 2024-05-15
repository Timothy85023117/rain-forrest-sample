import { ref } from "vue";
import { defineStore } from "pinia";

export const useMenuStatusStore = defineStore("menuStatus", {
  state: () => ({
    collapse: true,
  }),
  getters: {},
  actions: {
    openMenu() {
      console.log("object", this.collapse);
      this.collapse = !this.collapse;
    },
  },
});
