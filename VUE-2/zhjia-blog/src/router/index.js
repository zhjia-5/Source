import Vue from 'vue';
import VueRouter from 'vue-router';//导入路由
import Home from "@/page/Home";

/**
 * 路由懒加载，返回的是一个promise
 * 可以利用加载组件期间想用户提示一些信息，比如进度条
 * component: async ()=>{
 *   console.log("组件加载中");
 *   const comp = await import("@/page/Home");
 *   console.log("组件加载完成");
 *   return comp;
 * }
 */

// 匹配路由规则数组
const routes = [
  //匹配github首次进入网页pathname为：/myblog，所以添加该路由
  { name: "Home", path: "/myblog", component:Home },
  { name: "Home", path: "/", component: Home },
  
  { name: "About", path: "/about", component: () => import("@/page/About") },
  { name: "Blog", path: "/blog", component: () => import("@/page/Blog") },
  // 博客分类:categoryId 可以动态匹配任意字符，例如："/blog/cate/1"中的1可以匹配到:categoryId。
  { name: "CategoryBlog", path: "/blog/cate/:categoryId", component:() => import("@/page/Blog")},
  // 博客详情页:http://localhost:8080/blog/abc 访问博客详情;  :id 匹配 abc
  { name: "Detail", path: "/blog/:id", component: () => import("@/page/Blog/Detail") },
  { name: "Message", path: "/message", component: () => import("@/page/Message") },
  { name: "Project", path: "/project", component: () => import("@/page/Project") },
  // * 表示通配符，能匹配所有路由，当上的规则没有匹配到将会被*匹配到。 
  { name: "NotFound", path: "*", component: () => import("@/page/NotFound") },
];

// vue的静态方法use(),使用路由插件 
Vue.use(VueRouter);
const router = new VueRouter({
  routes,         // 配置路由规则
  mode: "history",// 路由的模式
});

export default router;