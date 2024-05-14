import { createPinia } from "pinia";
import { createApp } from "vue";
import ElementUI from "element-plus"; // 暫時把全部Element-plus元件引入
import "element-plus/dist/index.css"; // 引入 Element-plus 的 CSS 樣式
import App from "./App.vue";
import "./assets/scss/main.scss";
import router from "./router";
const app = createApp(App);
app.use(createPinia());
app.use(ElementUI);
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
