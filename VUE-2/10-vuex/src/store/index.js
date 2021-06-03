// 仓库数据
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);//使用vuex插件

const store = new Vuex.Store({
  /**
   *  仓库配置数据对象state
   *  使用：this.$store.state.count
   */
  state: {
    count: 0,
  },
  /**
    * 每个mutations是一个方法，它描述了数据在某种场景下的变化
    * mutations里面的方法只能接受两个参数
    * 同步
    * 提交：commit
    * 例如：this.$store.commit("increase");
    * 注意：实际开发中规范中mutations中不能出现异步操作，
    *  - 异步
    *  - 更改或读取外部环境的信息，例如`localStorage、location、DOM`等
    */
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    /**
     * 带参形式：
     * payload 负载,调用power时的参数
     * 例如：this.$store.commit("power",2);
     * 表示 count的2次幂
     */
    power(state, payload) {
      state.count **= payload;//count的平方
    }
  },
  /**
   * actions:用于处理副作用的方法 
    * actions 里面的方法只能接受两个参数
   * 异步
   * 触发：dispatch
   * 例如; this.$store.dispatch("asyncIncrease");
   * payload:本次异步操作的额外信息
   * context 相当于 store
   */
  actions: {
    async asyncIncrease(context) {
      await delay(1000);
      context.commit("increase");
    },
    async asyncDecrease(context) {
      await delay(1000);
      context.commit("decrease");
    },
    async asyncPower(context, payload) {
      await delay(1000);
      context.count **= payload;
    }
  }
});
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  })
}
export default store;
