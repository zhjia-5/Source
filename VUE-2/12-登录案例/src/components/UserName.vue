<template>
  <div class="user-name">
    <span v-if="status==='loading'">登录中...</span>

    <!-- 添加template标签包裹span和a，达到是否显示该区域元素 -->
    <template v-else-if="status==='login'">
      <RouterLink to="/user">{{user.name}}</RouterLink>
      <a  @click.prevent="handleLoginOut">退出</a>
    </template>
    <RouterLink v-else to="/login" exact-path>请登录</RouterLink><!-- exact-path:只匹配路径path，忽略query 和hash -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser",["status"]),
    ...mapState("loginUser",["user"]),
  },
  methods:{
    async handleLoginOut(){
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>
