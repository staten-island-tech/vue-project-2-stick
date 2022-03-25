import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import VueFire from "vuefire";

import store from "./store/index.js";
createApp(App).use(router).use(store).use(VueFire).mount("#app");
