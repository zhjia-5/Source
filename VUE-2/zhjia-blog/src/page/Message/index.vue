<template>
  <div class="message" ref="messageContainer" @scroll="handleScroll" >
    <Loading v-if="!data" />
    <Comment 
      v-if="data"
      title="留言板"
      :commentCount="data.total"
      :list="data.rows"
      @submit="handleSubmit"
      :isLoading="loadingMore"
    />
    <div class="no-more-comment" v-if="data" >{{hasMore ? "加载更多评论中...":"已没有更多评论"}}</div>
  </div>
</template>


<script>
import Comment from "@/components/Comment";
import Loading from "@/components/Loading";
import {alertMessage} from "@/utils";
import { postMessage, getMessages } from "@/api/message";
import toTop from "@/mixins/toTop";
export default {
  mixins:[toTop("messageContainer")],
  components: {
    Loading,
    Comment,
  },
  data() {
    return{
      data:null,//分页获取的留言数据 
      loadingMore:false,
      page:1,
    }
  },
  computed:{
    // 是否还有更多评论:等获取到评论数据后再去判断
    hasMore(){
      if(this.data){
        return this.data.rows.length < this.data.total;
      }
    }
  },
  async created() {
    this.data = await getMessages(this.page,this.limit);//获取留言
  },
  methods: {
    // 提交评论：子组件传过来两个参数：
    async handleSubmit(formData,callBack){
      const msg = await postMessage(formData);
      this.data.rows.unshift(msg);//将返回的数据添加到原有评论的前面
      callBack();//通知子组件
      this.data.total++;//留言总数++
      alertMessage({content:"感谢留言！",type:"success",container:this.$refs.messageContainer});//弹框消息
    },
    handleScroll(){
      const dom = this.$refs.messageContainer;
      const range = dom.scrollHeight - (dom.clientHeight+dom.scrollTop);
      if(range < 50 && dom && !this.loadingMore){
        this.loadMoreComment();
      }
    },
    async loadMoreComment(){
      if(!this.hasMore){ return }
      this.page ++;
      this.loadingMore = true;
      const newComments = await getMessages(this.page,10);
      this.data.rows = this.data.rows.concat(newComments.rows);
      this.loadingMore = false;
    },
  },
};
</script>
<style lang="less" scoped>
  @import "~@/styles/var.less";
  .message{
    position: relative;
    width: 100%;
    height:100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    .no-more-comment{
    width:100%;
    height: 50px;
    font: 1.5em;
    color: @gray;
    text-align: center;
    margin-bottom: 3vw;
  }
  }
</style>