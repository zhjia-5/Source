import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 一开始就要登录
store.dispatch("loginUser/whoAmI");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
