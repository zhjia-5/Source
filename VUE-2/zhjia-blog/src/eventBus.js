/**
 * 在Vue原型注入$bus方法
 * 
 * 事件名： mainScroll
 * 含义:主区域滚动条位置变化后触发
 * 参数一：事件名称 mainScroll
 * 参数二：滚动的dom元素，如果dom为undefined，表示dom已经不存在。
 *  
 *  监听mainScroll事件 ，可以在监听的地方将获得到触发事件时所传的参数dom。
 *  当mainScroll事件被触发会运行handleScroll函数
 *  this.$bus.$on("mainScroll",handleScroll}
 * 
 *  当某个条件（例如scroll、click）成立会触发该mainScroll事件，（并传入dom），
 *  当mainScroll事件被触发，会触发所有监听mainScroll事件的函数
 *  例如：ele.scroll  ==> this.$bus.$emit("mainScroll",this.$refs.mainContainer)
 * 
 *       
 * 使用：
 *  1 在main.js注入vue原型
 *  2 在需要的地方监听事件总线事件(blocToc组件)
 *  3 在Detail.vue中触发scroll事件时，将会触发事件总线mainScroll，并运行监听它的函数
 *  
 */
import Vue from "vue";
const app =  new Vue({});
Vue.prototype.$bus = app;
export default app;