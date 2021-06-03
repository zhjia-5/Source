<template>
  <h3>时间：{{ time }}</h3>
</template>

<script>
export default {
  data() {
    return {
      time: new Date().toLocaleString(),
      timer: null,
    };
  },
  // 
  created() {
    this.timer = setInterval(() => {
      console.log("时钟运行");
      this.time = new Date().toLocaleString();
    }, 1000);
  },
  // 销毁前
  beforeDestroy(){
    console.log("Clock组件已经被销毁");
  },

  // 组件销毁后 :当始终被销毁的时候清楚定时器，否则一直被运行
  destroyed(){
    clearInterval(this.timer);
  }
};
</script>