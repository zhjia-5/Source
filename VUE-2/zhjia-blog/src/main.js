import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import "./styles/global.less";
import { alertMessage } from "@/utils";
import "./eventBus";//导入事件总线
import store from "@/store";
import './mock';//导入模拟的数据,mock会拦截匹配到的axios请求
Vue.prototype.$alertMessage = alertMessage;// 将弹框方法挂载到Vue原型链上


new Vue({
  store,//配置仓库
  router,//配置路由实例
  render: h => h(App),
}).$mount('#app');




