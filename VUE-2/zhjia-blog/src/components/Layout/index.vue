<template>
  <div class="layout-container">
    <!-- 
      slot：占位符，可以放任何标签元素。 
      比如放入：LeftSidebar,RouterView  
      RouterView组件又可以通过router规则放入匹配到的任意页面，例如：home,about,blog里的内容
    -->
    <div class="left"><slot name="left"></slot></div>
    <div class="main"><slot name="main"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    // 左右固定大小
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    // 主区域自动伸缩
    overflow: hidden;
    flex: 1 1 auto;
  }
}
@media screen and (max-width:600px) {
  .layout-container{
    .main{
      margin-bottom: 5vw;
    }
  }
}
</style>