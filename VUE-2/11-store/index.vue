<template>
  <div>
    <A />
    <B />
  </div>
</template>
<script>
import A from "./a";
import B from "./b";
/**
 * 到如仓库数据，将仓库数据放到组件data(){}函数中：此时仓库数据store
 * 将会变为响应式数据，任何一方使用仓库数据将会跟随改变。
 * 优点：灵活、体积小。
 * 缺点：任何地方都可以直接改变仓库数据，不能被vue跟踪，一旦出错没法找到根源
 * 
 */
export default {
  components:{
    A,B,
  }
}
</script>