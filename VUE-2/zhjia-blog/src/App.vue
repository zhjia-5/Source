<template>
  <div class="app-container">
    <Layout>
      <!--<LeftSidebar />：将会放到Lyout组件中<slot name="left">的地方 -->
      <template #left><LeftSidebar /></template>

      <!-- 路由占位符：路由匹配到的页面会渲染到此处， -->
      <template #main><RouterView /></template>
    </Layout>

    <Top />
  </div>
</template>
<script>
import Layout from "@/components/Layout";
import LeftSidebar from "@/components/LeftSidebar";
import Top from "@/components/Top";
export default {
  components: {
    Layout,
    LeftSidebar,
    Top,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .self-fill(fixed);
}
</style>