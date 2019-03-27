import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import Vant from "vant";
import "vant/lib/index.css";
import "@/common/rem";
import clipboardCopy from "clipboard-copy";
Vue.prototype.$copy = clipboardCopy;
Vue.use(Vant);
Vue.component("Nav", () => import("components/common/nav"));
Vue.component("Tabbar", () => import("components/common/tabbar.vue"));
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
