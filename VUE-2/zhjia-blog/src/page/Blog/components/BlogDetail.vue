<template>
  <div class="blog-detail-container" ref="blogDetail">
    <!-- blog 来自父元素属性blog="oneBlogData" -->
    <h1>{{ blog.title }}</h1>
    <div class="content">
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览:{{ blog.scanNumber }}</span>
      <a href="#comment-container">评论:{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
      >
        {{ blog.category.name }}
      </RouterLink
      >
    </div>
    <!-- blog.htmlContent里面标签就可以被vue识别 -->
    <div v-html="blog.htmlContent" class=".markdown-body"></div>
  </div>
</template>
<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css"; //让代码显示高亮
import toTop from "@/mixins/toTop";
export default {
  mixins:[toTop("blogDetail")],//组件混入
  // blog属性约束
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.blog-detail-container {
  .content {
    font-size: 13px;
    color: @gray;
    span,
    a {
      margin-right: 10px;
    }
  }
}
</style>