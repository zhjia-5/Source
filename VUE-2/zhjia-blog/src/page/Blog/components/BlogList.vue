<template>
  <div class="blog-list-container" ref="blogList">
    <!-- 无数据显示Empty组件，为防止报错，先判断data.rows是否有值，再去判断data.rows.length' -->
    <Empty v-if="data.rows && data.rows.length === 0 && !isLoading" />
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <!-- 如果有缩略图就加载此div -->
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{ name: 'Detail', params: { id: item.id } }">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <!-- <div class="main"> -->
        <RouterLink :to="{ name: 'Detail', params: { id: item.id } }">
          <h2>{{ item.title }}</h2>
        </RouterLink>
        <div class="message">
          <span>日期:{{ formatDate(item.createDate) }}</span>
          <span>浏览:{{ item.scanNumber }}</span>
          <span>评论:{{ item.commentNumber }}</span>
          <RouterLink
            :to="{
              name: 'CategoryBlog',
              params: { categoryId: item.category.id },
            }"
          >
            {{ item.category.name }}
          </RouterLink>
        </div>
        <div class="desc">
          {{ item.description }}
        </div>
        <!-- </div> -->
      </li>
    </ul>
    <Loading v-if="isLoading" />
    <!-- 分页属性来自路由信息routeInfo，同时通过点击事件改变路由 -->
    <Pager
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import Loading from "@/components/Loading";
import { getBlogs } from "@/api/blog"; //网络求情获取博客
import { formatDate } from "@/utils";
import toTop from "@/mixins/toTop";
import Empty from "@/components/Empty";
export default {
  mixins: [toTop("blogList")],
  components: {
    Pager,
    Loading,
    Empty,
  },
  data() {
    return {
      data: {}, //博客的数据类型为空对象
      isLoading: true,
      formatDate, //将将时间搓转为年月日格式
    };
  },

  computed: {
    // 通过计算属性来获取url的路由信息，当路由更改，this.routeInfo会重新计算
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1; //分类id,-1:表示没有分类并获取所有分类
      const page = +this.$route.query.page || 1; //如果没有传参默认当前页为1
      const limit = +this.$route.query.limit || 10; //如果没有传参默认每页10条
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  async created() {
    // getBlogs()网络请求参数依据routInfo的值去发送请求
    this.data = await getBlogs(
      this.routeInfo.categoryId,
      this.routeInfo.page,
      this.routeInfo.limit
    );
    // console.log(this.data);
    //是否显示Loading
    if (this.data) {
      this.isLoading = false;
    }
  },
  methods: {
    // 分页的选择事件,newPage:所点击的页码
    // 命名路由跳转push()方法
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 如果没有分类
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 如果有分类：只需要改变页码page，并跳到该分类博客的所点击页码
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  //  watch 观察路由是否发生变化，
  // $route(newVal,oldVal)
  // 如果观察this.data:data(newVal,OldVal){}
  watch: {
    async $route() {
      this.$refs.blogList.scrollTop = 0; //先置顶
      this.isLoading = true; //显示loading图标
      //重新携带路由参数发送异步请求
      this.data = await getBlogs(
        this.routeInfo.categoryId,
        this.routeInfo.page,
        this.routeInfo.limit
      );
      if (this.data) {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth; //平滑滚动效果
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      float: left;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        float: left;
        margin-right: 15px;
        max-width: 200px;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
      h2 {
        margin: 0;
      }
      .message {
        font-size: 12px;
        color: @gray;
        span {
          margin-right: 15px;
        }
      }
      .desc {
        margin: 15px 0;
        font-size: 1em;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .blog-list-container {
    padding: 1.5em 0 1.5em 1em;
    li {
      .thumb {
        width: 20vw;
        height: 20vw;
      }
      h2 {
        font-size: 1em;
      }
    }
  }
}
</style>
