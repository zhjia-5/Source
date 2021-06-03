import { getBanner } from "../api/banner";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },

  mutations: {
    setLoading(ctx, payload) {
      ctx.loading = payload;
    },
    setData(ctx, payload) {
      ctx.data = payload;
    },
  },

  actions: {
    async fetchData(ctx) {
      // 如果仓库中的数据已经存在就直接返回，避免多次请求
      if(ctx.state.data.length ) return;
      ctx.commit('setLoading', true);
      const resp = await getBanner();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      return resp;
    }
  }
}