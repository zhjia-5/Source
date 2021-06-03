<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.title"
      :to="item.link"
      :exact="item.exact"
    >
      <Icon :type="item.icon" />
      <span class="title">{{ item.title }}</span>
    </RouterLink>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
          exact: true, //首页只有一个 "/" 需要精确匹配,其他不需要
        },
        {
          link: "/blog",
          title: "博客",
          icon: "blog",
          exact: false, // 文章不要精确匹配，因为需要在当前文章导航到当前页的其它地方
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: false, 
        },
        {
          link: "/project",
          title: "案例 & 效果",
          icon: "code",
          exact: false, 
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: false, 
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/global.less";
.menu-container {
  width: 100%;
  color: @gray;
  margin-top: 20px;
  background: @dark;
  a {
    &.router-link-active {
      background: darken(@words, 3%); //路由选中的背景颜色比 @word 浅3%
    }
    font-size: 15px;
    font-weight: bold;
    padding-left: 30px;
    text-align: center;
    height: 40px;
    display: flex;
    align-items: center;
    .icon-container {
      width: 20px;
      margin-right: 8px;
    }
  }
}
@media screen and (max-width: 600px) {
  .menu-container {
    display: flex;
    margin: 0;
    z-index: 999;
    a {
      flex: 1 1 auto;
      height: 100%;
      padding-left: 0;
      .icon-container {
        font-size: 1.3rem;
        margin: 0 auto;
      }
      .title {
        display: none;
      }
    }
  }
}
</style>