import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Compute from '../views/Compute.vue';
import GoodsList from '../views/GoodsList.vue';
import AddGoods from '../views/AddGoods.vue';
import FindBack from '../views/FindBack.vue';


Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta:{auth:true},//路由鉴权
    redirect: '/compute',//首次加载定向到统计组件
    children:[
      {
        name:"Compute",
        path:'compute',
        component:Compute,
      },
      {
        name:"GoodsList",
        path:'goodslist',
        component:GoodsList,
      },
      {
        name:"AddGoods",
        path:'addgoods',
        component:AddGoods,
      },
    ]
  },
  {
    name:'Login',
    path:'/login',
    component:Login,
  },
  {
    name:'Register',
    path:'/register',
    component:Register,
  },
  {
    name:'FindBack',
    path:'/findback',
    component:FindBack,
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

// 路由卫士
// router.beforeEach((to,from,next)=>{
//   if(to.meta.auth){

//   }else{
//     // 无需鉴权
//     next();
//   }
// })

export default router;
