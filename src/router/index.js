import Vue from "vue";
import Router from "vue-router";
import { routes } from "./modules";
import axios from "axios";
Vue.use(Router);
const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: routes
});
router.beforeEach((to, from, next) => {
  next();
});

axios.interceptors.response.use(
  response => {
    let msg = response.data;
    switch (msg.code) {
      case 0:
      case 2012: //用户未绑定银行卡
      case 2006:
        return response.data;
      case 2002: //请您先登录
      case 2004: //账号异常,请重新登录
      case 2005: //该账号已在其他地方登录，您被迫下线
        return response.data;
      default:
        return response.data;
        // eslint-disable-next-line no-unreachable
        break;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default router;
