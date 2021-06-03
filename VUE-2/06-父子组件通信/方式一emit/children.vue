<template>
  <div>
    <button @click="handleClick" :disabled="isLoading">
      {{isLoading ? "提交中...":"提交"}}
    </button>
    <div class="error">{{error}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      count:0,
      isLoading:false,
      error:"",
    }
  },
  methods:{
    handleClick(){
      this.count ++;
      this.error="";
      this.isLoading = true;
      // 抛出事件（事件名，事件参数1,callback...）可以接受多个不限类型的参数.
      // 第三个callback为箭头函数，this指向定义时所处的对象.
      // callback(err)，里面的参数err是父组件所传递。
      this.$emit("submit",this.count,(err)=>{
        this.isLoading = false;
        this.error = err;
        console.log("父组件运行后把错误信息通过回调的参数返回");
      });
      
    },
  }
}
</script>
<style  scoped>
  .error{
    color:red;
  }
</style>