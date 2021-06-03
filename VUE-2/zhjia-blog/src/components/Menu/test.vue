<template>
  <div class="test-menu">
    <Menu />
  </div>
</template>

<script>
import Menu from "./index";
export default {
  components:{
    Menu,
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.test-menu{
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  background: @dark;
  color:#fff;
}
</style>