import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./router";
import store from "./store";

createApp(App).use(ElementPlus).use(router).use(store).mount("#app");

// 更新用户信息
store
  .dispatch("userStore/getUserInfoAsync")
  .then((data) => console.log("data", data));
