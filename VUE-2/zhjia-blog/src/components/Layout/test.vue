<template>
  <div class="layout-test">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>
      <template #main>
        <div class="main">main</div>
      </template>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "./index";
export default {
  components: {
    Layout,
  },
};
</script>
<style lang="less" scoped>
.layout-test {
  width: 100%;
  height: 600px;
  display: flex;
  border: 1px solid;
  .left {
    flex: 0 0 auto;
    width: 200px;
    height: 100%;
    background: salmon;
    white-space: nowrap;
  }
  .main {
    flex: 1 1 auto;
    height: 100%;
    background: red;
    text-align: center;
  }
  .right {
    flex: 0 0 auto;
    width: 100px;
    height: 100%;
    background: #2d2d2d;
  }
}
</style>