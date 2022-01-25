import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./router";
import provideGlobalData from "./store/index.js";
import { useLoginInfo } from "./store/useLoginInfo";

const app = createApp(App).use(ElementPlus).use(router);
app.provide("name", "hello");
// 注入共享数据
provideGlobalData(app);

app.mount("#app");
// useLoginInfo().getUserInfoAsync();
// console.log("useLoginInfo() >> ", useLoginInfo());
