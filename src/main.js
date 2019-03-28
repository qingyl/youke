import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import Vant from "vant";
import "vant/lib/index.css";
import "@/common/rem";
import "@/assets/style.less"
import clipboardCopy from "clipboard-copy";
Vue.prototype.$copy = clipboardCopy;
Vue.use(Vant);
Vue.component("Navs", () =>
    import ("components/common/nav"));
Vue.component("Tabbar", () =>
    import ("components/common/tabbar.vue"));
Vue.component("Main", () =>
    import ("components/common/main.vue"));
Vue.config.productionTip = false;
Vue.directive('title', {
    inserted: function(el, binding) {
        document.title = el.dataset.title
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");