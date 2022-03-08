import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style.css"
/* import VueTilt from "vue-tilt.js";
VueTilt.use(VueTilt); */

createApp(App).use(router).mount('#app')
