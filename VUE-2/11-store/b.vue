
<template>
<div>
  <p>B商品：{{data.shoes}}</p>
  <p>B数量{{data.num}}</p>
  <button  @click="data.num ++">改变store的num</button>
</div>
</template>
<script>
/**
 * 到如仓库数据，将仓库数据放到组件data(){}函数中：此时仓库数据store
 * 将会变为响应式数据，任何一方使用仓库数据将会跟随改变。
 * 优点：灵活、体积小。
 * 缺点：任何地方都可以直接改变仓库数据，不能被vue跟踪，一旦出错没法找到根源
 * 
 */
import store from "./store";
export default {
  data(){
    return{
      data:store.shoppingCar,//引入仓库数store
    }
  }
}
</script>