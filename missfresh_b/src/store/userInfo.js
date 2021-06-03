import axios from 'axios';
import alertMessage from '@/utils/alertMessage';
export default {
  namespaced: true,
  state: {
    user: null,//用户对象
    appkey: null,
    loading: false,
  },
  getters: {
    status(state) {
      return state.loading ? "loading" : (state.user ? "login" : "unlogin");
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    // 登录
    async login(ctx, payload) {
      ctx.commit('setLoading', true);
      const resp = await axios.post("https://mallapi.duyiedu.com/passport/login", {
        email: payload.email,
        password: payload.password
      });
      ctx.commit("setUser", resp)//设置用户对象
      ctx.commit("setLoading", false);//无论是否成功都设为false
      // push  未定义
      
      // if (resp.data.status === "success") {
      //   this.$router.push({ name: "Compute" });
      // }
      alertMessage({ content: resp.data.msg, type: resp.data.status, });
      console.log(resp.data.data);
      return resp;
    }
  }

}
