import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
Vue.use(Vuex);
const opiton = {
  modules: {
    user
  }
};
export default new Vuex.Store(opiton);
