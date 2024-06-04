import { useModal } from "vue-final-modal";
import SingleFormModal from "@/components/modal/SingleFormModal.vue";
export function usePopupModal() {
  const modal = {
    /**
     * 成功提示視窗
     * @param title 標題
     * @param messages 訊息
     */
    singleForm: (title: string) => {
      useModal({
        component: SingleFormModal,
        attrs: {
          title,
          onBtnConfirm: async (close: () => void) => {
            close();
          },
        },
      }).open();
    },
  };
  return { modal };
}
