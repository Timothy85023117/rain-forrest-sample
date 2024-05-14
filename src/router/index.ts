import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.querySelector(".content")?.scrollTo(0, 0);
    return {};
  },
});
router.beforeEach((to) => {
  console.log(to.meta);
  if (to.meta.isRequiredLogin) {
    // 頁面需要提供參數，用來檢查是否有參數，若無帶入參數轉回至設定頁面
    // TODO:紅線問題之後改掉
    if (to.meta.requiredParams) {
      if (
        Object.keys(to.params).length === 0 &&
        Object.keys(to.query).length === 0
      ) {
        return { path: to.meta.requiredParams.backPath };
      }
    }
  }
  return true;
});
// router.afterEach(() => {});
export default router;
