import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import News from "@/views/News.vue";
import User from "@/views/User.vue";
import Loading from "@/views/Loading.vue";
import store from "@/store";

// meta对象(鉴权)：表示进入当前路由的条件为auth，在路由守卫中判断auth的值。
// 可以在meta中配置其他属性作为访问该组件的条件
const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Login", path: "/login", component: Login },
  { name: "Loading", path: "/loading", component: Loading },
  { name: "News", path: "/news", component: News, meta: { auth: true } },
  { name: "User", path: "/user", component: User, meta: { auth: true } },
];



Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

// 路由守卫拦截
router.beforeEach((to, from, next) => {
  // 每当导航切换时（包含刷新页面的第一次），该函数会运行
  // from：之前的路由对象  (this.$route)
  // to: 即将进入的路由对象 (this.$route)
  // next: 确认导航的一个函数  调用该函数（无参），就会直接进入to， 调用该函数（传入参数），根据传入参数进入新的导航
  // 判断to的链接是否需要鉴权
  if (to.meta.auth) {
    let status = store.getters["loginUser/status"];
    if (status === "loading") {// 登陆登录中
      next({
        path: "loading",//命名路由
        query: { returnurl: to.fullPath },//将访问的地址记录到query中，当登录后可以从this.$route.query中获取
      });
    } else if (status === "login") {// 已登录
      next();
    } else {//未登陆
      alert("请登录再访问");
      next({
        name: "Login",//命名路由
        query: { returnurl: to.fullPath },//将访问的地址记录到query中，当登录后可以从this.$route.query中获取
      });
    }
  } else {
    next();// 无需鉴权
  }
});


export default router;