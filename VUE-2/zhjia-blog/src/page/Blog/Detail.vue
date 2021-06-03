<template>
<!-- 该组件包含BlogDetail Comment BlogToc Loading 组件 -->
  <Layout>
    <template #main>
      <div class="main-container" ref="mainContainer" @scroll="handleScroll">
        <!-- 等博客数据请求过来完后才加载组件,否则报错 -->
        <BlogDetail v-if="detailData" :blog="detailData" />
        <Comment
          v-if="commentsData"
          title="评论列表"
          :commentCount="commentsData.total"
          :list="commentsData.rows"
          @submit="handleSubmit"
          :isLoading="isLoadMore"
        /> 
        <div>
          <Loading v-if="isLoading" /><!-- main-container的loading图 -->
          <div class="no-more-comment" v-if="commentsData" >{{hasMore ? "加载更多评论中...":"已没有更多评论"}}</div>
        </div>
      </div>
    </template>

    <template #right>
      <BlogToc v-if="detailData" :toc="detailData.toc" />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout"; //layout布局
import BlogDetail from "./components/BlogDetail"; //博客详情组件
import BlogToc from "./components/BlogToc"; //博客目录组件
import Comment from "@/components/Comment"; //评论组件
import Loading from "@/components/Loading";
import { getOneBlog, getComments, postComment } from "@/api/blog";
import alertMessage from "@/utils/alertMessage";
import toTop from "@/mixins/toTop";
export default {
  mixins:[toTop("mainContainer")],//组件混入
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    Comment,
    Loading,
  },
  data() {
    return {
      detailData: null, //单个博客的数据
      commentsData: null, //分页获取评论数据
      page:1,//获取评论的页码
      isLoading: true,//加载博客内容的loading
      isLoadMore:false,//加载评论的loading
    };
  },
  computed:{
    // 是否还有更多评论:等获取到评论数据后再去判断
    hasMore(){
      if(this.commentsData){
        return this.commentsData.rows.length < this.commentsData.total;
      }
    }
  },
  async created() {
    this.detailData = await getOneBlog(this.$route.params.id); //获取单个博客数据
    // 如果文章不存在,跳到 /404，将会被通配符 "*" 匹配到，从而跳到NotFound页面。
    if(!this.detailData){
      this.$router.push("/404");
      return;
    }
    // 得到博客详情数据后将loading移除，再去加载评论数据
    if (this.detailData) {
      this.isLoading = false;
      this.commentsData = await getComments(this.$route.params.id, this.page, 10); //获取该博客的评论数据
    }
  },
  methods: {
    handleScroll(){
      const dom = this.$refs.mainContainer;
      // 如果正在加载更多时，就不要重新请求。如果dom已经不存在也直接返回
      if(this.isLoadMore || ! dom) {return}
      // 接近最底部的时候加载更多评论（50px）
      if(dom.scrollHeight - (dom.scrollTop + dom.clientHeight) < 50 ){
        this.loadMoreComment();
      }
    },
    async loadMoreComment(){
      if(!this.hasMore) { return } ;//如果没有更多评论则直接返回，不再去请求数据
      this.isLoadMore = true;
      this.page ++;//获取下一页评论
      const newComments = await getComments(this.$route.params.id,this.page,10);
      // 将加载更多的评论数据与原来的数据相加
      this.commentsData.rows =this.commentsData.rows.concat(newComments.rows);
      this.commentsData.total = newComments.total;//更新总数total
      this.isLoadMore = false;
    },
    // 提交评论：子组件抛过来的submit事件,带有两个参数。
    async handleSubmit(formData, callBack) {
      const msg = await postComment({ ...formData,blogId:this.$route.params.id });
      this.commentsData.rows.unshift(msg);//添加所评论的数据对象
      this.commentsData.total ++;//总的评论数++。
      callBack(); //通知子组件
      alertMessage({ content: "评论成功！", type: "success" });//弹框
    },
  },
};
</script>
<style scoped lang='less'>
@import "~@/styles/var.less";
.main-container {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  scroll-behavior: smooth;
  .no-more-comment{
    width:100%;
    height: 50px;
    font: 1.5em;
    color: @gray;
    text-align: center;
    margin-bottom: 5vw;
  }
}
@media screen and (max-width:600px) {
  .main-container{
    .comment-container{
      padding: 0;
    }
  }
}
</style>