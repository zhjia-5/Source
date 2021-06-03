<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" v-model="loginPwd" autocomplete="new-password" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading.loading">
        {{ loading.loading ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>
<script>
export default {
  // 将仓库数据放到到计算属性成员：减少代码书写。
  computed:{
    loading(){
      return this.$store.state.loginUser.loading;
    }
  },
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  methods: {
    async handleSubmit() {
      const resp = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      // 登录后判断url后面有无returnurl参数,有的话进入该参数，没有进入主页
      if(resp){
        const path = this.$route.query.returnurl || "/";
        this.$router.push(path);
      }else{
        alert("用户或密码错误");
      }
    },
  },
};
</script>
<style scoped lang="less">
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}
.form-item label {
  width: 70px;
}
.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
}
button {
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
}
</style>
