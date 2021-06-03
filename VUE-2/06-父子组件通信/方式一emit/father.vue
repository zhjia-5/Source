<template>
  <div>
    <LoadingButton @submit="handleSubmit"/>
  </div>
</template>
<script>
import LoadingButton from "./children.vue";
export default {
  components:{
    LoadingButton,
  },
  methods:{
    // count,callback：为子组件所传
   async handleSubmit(count,callback){
     setTimeout(()=>{
      //  callback的参数将传给子组件的形参（err）
      console.log("父组件拿到子组件count:"+ count);
       callback("请填写账号");
     },2000)
    }
  }
}
</script>