import { createPinia } from "pinia";
import { createApp } from "vue";
import ElementUI from "element-plus"; // 暫時把全部Element-plus元件引入
import "element-plus/dist/index.css"; // 引入 Element-plus 的 CSS 樣式
import App from "./App.vue";
import "./assets/scss/main.scss";
import router from "./router";

import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css"; //vue-final-modal css

import HighchartsVue from "highcharts-vue";

const app = createApp(App);
const vfm = createVfm();

app.use(createPinia());
app.use(ElementUI);
app.use(router);
app.use(vfm);

app.use(HighchartsVue);
router.isReady().then(() => {
  app.mount("#app");
});
