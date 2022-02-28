import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import { key } from "./store/index";

createApp(App).use(store, key).use(router).mount("#app");
