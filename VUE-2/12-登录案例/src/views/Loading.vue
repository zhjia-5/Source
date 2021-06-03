<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  computed:{
    status(){
      return this.$store.getters["loginUser/status"];
    }
  },
  // 监控计算属性：status,该属性来自this.$store.getters["loginUser/status"]
  // 当属性变化就跳转到之前存放到 query 中的 returnurl 中。
  watch:{
    status(){
      if(this.status !== "loading") {
        this.$router.push(this.$route.query.returnurl || "/").catch(() => {});//捕获重定向异常
      } 
    }
  }
};
</script>

