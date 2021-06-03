<template>
  <div
    class="top-container"
    v-show="isShow"
    ref="top-container"
    @click="handleClick"
  >
    TOP
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    // 监听滚动区域的mainScroll事件，触发后执行回调
    this.$bus.$on("mainScroll", this.handleShow);
  },
  methods: {
    // 判断是否显示Top
    // dom为抛出mainScroll事件的组件所传，this.$emit("mainScroll",dom);
    // Detail组件即将卸载时再次触发该事件，，this.$emit("mainScroll",null);
    handleShow(dom) {
      if (!dom) {
        //如果dom为null就不再显示
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop > 800 ? true : false;
    },
    handleClick() {
      // 点击时抛出事件名： toTopScroll  参数：0, 回到顶部
      this.$bus.$emit("toTopScroll", 0);
    },
  },
  destoryed() {
    this.$bus.$off("mainScroll", this.handleShow);
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.top-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: @primary;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
}
@media screen and (max-width: 600px) {
  .top-container {
    right: 3vw;
    bottom: 18vw;
    width: 3em;
    height: 3em;
    line-height: 3em;
    font-size: .6em;
  }
}
</style>