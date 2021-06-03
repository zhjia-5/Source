<template>
  <div class="blog-category-container">
    <h3>全部分类</h3>
    <RightList :list="list" @select="handleSelect" />
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { getBlogType } from "@/api/blog";
import Loading from "@/components/Loading";

export default {
  components: {
    RightList,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      data: [],
    };
  },
  async created() {
    this.data = await getBlogType();
    if (this.data) {
      this.isLoading = false;
    }
  },
  computed: {
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1;
      const limit = this.$route.query.limit || 10;
      return {
        categoryId,
        limit,
      };
    },
    // list[]属性: 在原有data中添加一个显示全部文章的对象,在给list每个对象添加isSelect属性
    list() {
      // 文章总数:totalArticleCount
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount, 0 //a的默认值为0
      );
      const list = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data, //展开原有属性
      ];
      // 映射：再给list数组里每个对象添加一个对象：isSelect:布尔值，
      const result = list.map((item) => ({
        ...item, // 展开自身
        currentArticleCount:`${item.articleCount}篇`,//当前文章篇数
        isSelect: item.id === this.routeInfo.categoryId,//添加激活样式
      }));
      return result; //返回最终带有全部文章对象、isSelect对象的数组
    },
  },
  methods: {
    // 点击分类使用路由跳转push:分两种情况:
    handleSelect(item) { //item为RightList所传，表示当前点击对象
      const query = {
        page: 1,//每次点击切换分类都回到第一页开始
        limit: this.routeInfo.limit,
      };
      // 没有分类，不需要params:categoryId
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 有分类
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  position: relative;
  width: 180px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
  h3 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
  }
}
@media screen and (max-width:600px) {
  .blog-category-container{
    width: 22vw;
    padding: 5vw 0 0 0;
    margin: 0;
    h3{
      display: none;
    }
  }
}
</style>