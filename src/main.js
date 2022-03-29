import "@/assets/sass/main.scss";
import App from "./App.vue";
import mitt from "mitt";
import smoothscroll from "smoothscroll-polyfill";
import { createApp } from "vue";

const app = createApp(App);
const emitter = mitt();

app.config.globalProperties.emitter = emitter;
app.mount("#app");

smoothscroll.polyfill();
