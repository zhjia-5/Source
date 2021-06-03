import Vue from 'vue';
import Vuex from 'vuex';
import banner from './banner';
import setting from './setting';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    banner,
    setting,
  },
  strict:true,//严格模式，非 mutation 函数引起的状态变更，将会抛出错误。
});
