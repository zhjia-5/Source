<template>
<!-- 
  事件修饰符：
      .stop : 阻止事件继续传播
      .prevent ： 阻止默认事件不再重载页面
      .capture：捕获事件
      .self : 只有点击自己才触发
      .once ：只触发一次
      .passive：不要把 .passive 和 .prevent 一起使用
      
      事件可以串联。。。

   按键修饰符：
      按下enter键才触发
      <input @keyup.enter="hadleSubmit">
 -->


  <div class="main" @click="mainClick">
    <div class="inner" @click.self="innerClick">inner- div</div>
    <a href="/" @click.stop.prevent="aClick">a标签</a>

    <input type="text" @keypress.enter="handleDown" >

  </div>
  
</template>
<script>
export default {
  methods:{
    mainClick(){
      console.log("main-div");
    },
    innerClick(){
      console.log("inner-div");
    },
    aClick(){
      console.log("a标签");
    },
    handleDown(){
      console.log('key-down');
    }
  }
}
</script>
<style scoped>
  .main{
    width: 90vw;
    height: 40vw;
    background: rgba(255, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 20vw;
    background: #f00;
     
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 20vw;
    height: 20vw;
    background: skyblue;
    
  }
</style>
