<template>
  <div class="div-b">
    <div class="title">当前数字</div>
    <div class="currentNumber">{{$store.state.count}}</div>
    <div class="btn">
      <button  @click="handleDecrease">减少</button>
      <button @click="handleAsyncDecrease">异步减少</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    handleDecrease(){
      this.$store.commit("decrease");
    },
    handleAsyncDecrease(){
      this.$store.dispatch("asyncDecrease");
    }
  }
};
</script>
<style scoped>
.div-b {
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