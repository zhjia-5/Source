import { getSetting } from "../api/setting";

export default{
  namespaced:true,
  state:{
    loading:false,
    data:[],
  },
  mutations:{
    setLoading(ctx,payload){
      ctx.loading = payload;
    },
    setData(ctx,payload){
      ctx.data = payload;
    }
  },
  actions:{
    async fetchData(ctx){
      // 如果仓库有数据，无需再去请求
      if(ctx.state.data.length) return;
      ctx.commit("setLoading",true);
      const resp = await getSetting();
      ctx.commit("setData",resp);
      ctx.commit("setLoading",false);
      return resp;
    }
  }
}