import { createApp } from "vue";
import "./style.css";
// 引入pinia
import { createPinia } from "pinia";
// 引入路由
import { initRouter } from "./router";
// 引入element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const router = initRouter();
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
