import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import "./assets/main.css";
import VeeValidatePlugin from "./includes/validation";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.mount("#app");
