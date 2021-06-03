import Vue from "vue";
import Vuex from "vuex";
import loginUser from "./loginUser";
import counter from "./counter";

Vue.use(Vuex);

// 创建仓库，使用模块化配置了两个模块对象,
const store = new Vuex.Store({
  modules:{
    loginUser,
    counter,
  },
  strict:true,//严格模式，非 mutation 函数引起的状态变更，将会抛出错误。
});

export default store;



