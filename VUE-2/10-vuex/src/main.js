import Vue from 'vue';
import App from './App.vue';
import store from "./store";//导入store仓库数据
Vue.config.productionTip = false;

new Vue({
  store,//配置仓库
  render: h => h(App),
}).$mount('#app')
