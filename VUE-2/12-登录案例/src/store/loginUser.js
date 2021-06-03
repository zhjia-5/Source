import * as userAPI from "../api/user";
// 用于存储用户登录信息的模块
export default {
  /**
   * 使用命名空间:
   * 使用命名空间后：在调用store里面的函数需要加上 "模块名/ "
   * 例如：this.$store.commit("loginUser/setLoading",true);
   *  mutations actions 里面的函数只能接收两个参数；
   * 
   * 读取 state.loading 
   * 
   * 不使用辅助函数：
   * 例如:this.$store.state.loginUser.loading
   * 
   * 使用mapState 辅助函数 ：
   *  import {mapState,mapGetters} from "vuex";
   * 有命名空间：
   *  computed:{
   *    ...mapState("loginUser",["user","loading"])
   *    ...mapGetters("loginUser",["status"]),
   *  }
   * 无命名空间：
   * compout:{
   *  ...mapState(["user","loading"]),
   *  ...mapGetters(["status"]),
   * }
   * 
   * 
   */
  namespaced: true,//开启命名空间

  state: {
    user: null,
    loading: false,
  },
  // 相当于计算属性
  // 组件中使用：this.$store.getters["loginUser/status"];
  // 其他js文件需要导入：import store form "/store/loginUser";   store.getters["loginUser/status"];
  getters: {
    status(state) {
      // 如果loading为true表示登录中，如果为false分两种情况：如user有值表示已登录，否则表示未登录
      return  state.loading ? "loading" : (state.user ? "login" : "unlogin");
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    // 命名空间：在自身模块内调用方法发时不需要夹文件名
    // 使用：this.$store.dispatch("loginUser/login",payload)
    // 成功返回用户对象，失败返回null;
    async login(ctx, payload) {
      ctx.commit("setLoading", true);//登陆中
      const resp = await userAPI.login(payload.loginId, payload.loginPwd);
      ctx.commit("setUser", resp)//设置用户对象
      ctx.commit("setLoading", false);//无论是否成功都设为false
      return resp;
    },
    // 使用localStore缓存登录:该方法放到main.js中，每次刷新都会从本地获取localStore来登录
    async whoAmI(ctx) {
      ctx.commit("setLoading", true);
      const resp = await userAPI.whoAmI();
      ctx.commit("setUser", resp);
      ctx.commit("setLoading", false);
    },
    // 注销
    async loginOut(ctx) {
      ctx.commit("setLoading", true);
      await userAPI.loginOut();
      ctx.commit("setUser", null);
      ctx.commit("setLoading", false);
    },
  },
}