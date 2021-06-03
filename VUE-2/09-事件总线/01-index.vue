<template>
  <div class="div1" @click="handleClick" >div1</div>
</template>

<script>
import eventBus from "./02-模拟事件总线.js";
export default {
  /**
   * 工作原理：
   *  1，监听$on("myClick",this.callback)事件
   *  2，触发$emit("myClick",123)事件
   *  3, myClick事件被触发后会运行监听时的回调（this.callback），并将123作为该回调的参数，this.callback(123);
   *  4, eventBus.$off("myClick",this.callback);
   */
  created(){
    // 事件监听
    eventBus.$on("myClick",this.callback);
    
  },
  methods:{
    // 触发监听事件并传参数
    handleClick(){
      eventBus.$emit("myClick",12345);
    },
    callback(data){
      console.log("myClick被触发",data);
    }
  },
  destoryed(){
    //取消监听
    eventBus.$off("myClick",this.callback);
  }
}
</script>
<style scoped>
.div1 {
  width: 200px;
  height: 200px;
  background: red;
}
</style>