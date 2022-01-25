import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./router";
import { getUserInfoAsync } from "./store/useLoginInfo.js";

createApp(App).use(ElementPlus).use(router).mount("#app");

// 更新用户信息
getUserInfoAsync().then((data) => console.log("global data", data));
