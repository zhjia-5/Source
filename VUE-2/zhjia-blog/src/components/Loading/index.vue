<template>
  <img class="loading-container" :src="loadingSrc" alt="数据加载中..." title="数据加载中..." >
</template>
<script>

import loadingSrc from "@/assets/loading.svg";
export default {
  data(){
    return {
      loadingSrc,//简写成loadingSrc:loadingSrc,
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
  .loading-container{
    .self-center(absolute);
  }
</style>
