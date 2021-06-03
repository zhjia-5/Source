<template>
  <div class="div-a">
    <div class="title">当前数字</div>
    <div class="currentNumber">{{$store.state.count}}</div>
    <div class="btn">
      <button  @click="handleIncrease">增加</button>
      <button  @click="handleAsyncIncrease">异步增加</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    handleIncrease(){
      this.$store.commit("increase");
    },
    handleAsyncIncrease(){
      this.$store.dispatch("asyncIncrease");
    }
  }
}
</script>


<style  scoped>
.div-a {
  width: 200px;
  height: 200px;
  border: 1px solid;
  padding: 20px;
}
.title {
  text-align: center;
}
.currentNumber {
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.btn {
  text-align: center;
}
</style>