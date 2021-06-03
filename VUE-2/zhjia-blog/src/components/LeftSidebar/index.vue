<template>
  <div class="left-sidebar-container">
    <Avatar
      :width="100"
      :height="100"
      url="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg"
    />
    <div class="blog-name">zhjia的博客</div>
    <Menu />
    <Contact />
    <div class="record">桂ICP备20200520号</div>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.left-sidebar-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  background: @dark;
  padding: 10px 0;
  z-index: 999;
  .avatar-container {
    margin: 0 auto;
  }
  .blog-name {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    color: darken(@gray, 20%);
  }
  .record {
    position: fixed;
    bottom: 10px;
    left: 30px;
    font-size: 12px;
    color: darken(@gray, 50%);
  }
}
@media screen and (max-width: 600px) {
  .left-sidebar-container {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 15vw;
    padding: 0;
    overflow: hidden;


    .menu-container {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .blog-name,
    .avatar-container,
    .contact-container,
    .record {
      display: none;
    }
  }
}
</style>


   