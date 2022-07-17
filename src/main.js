import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "./firebase";
createApp(App).use(router).mount("#app");
