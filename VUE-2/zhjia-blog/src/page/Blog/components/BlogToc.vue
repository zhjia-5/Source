<template >
  <div class="blog-toc-container">
    <h3>博客目录</h3>
    <!-- 点击添加hash值，以达到锚链接效果 -->
    <RightList :list="tocWithSelect" @select="handleSelect"/> 
  </div>
</template>
<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  components:{
    RightList,
  },
  props:{
    toc:{
      type:Array,
      required:true,
    }
  },
  data(){
    return{
      activeAnchor:'',//控制该数据就可以控制激活状态
    }
  },
  computed:{
    // 根据toc数据以及activeAnchor递归得到带有isSelect属性的新数组
    tocWithSelect(){
      const getToc = (toc=[])=>{
        return toc.map(t=>({
          ...t,
          isSelect:this.activeAnchor === t.anchor,//添加该项的条件
          children:getToc(t.children),//如果该数组有children就递归调用自身
        }));
      }
      return getToc(this.toc);//(参数为属性)返回函数该函数返回新的数组
    },
    // 使用递归将真实的dom存储起来
    domsArr(){
      const doms = [];
      const addToDoms = (toc)=>{
        for(const t of toc){
          doms.push(document.getElementById(t.anchor));
          // 如果t有子项，并子项不为0则继续递归
          if(t.children && t.children.length){
            addToDoms(t.children);
          }
        }
      }
      addToDoms(this.toc);
      return doms;
    }
  },
  // 在创建后监听事件总线的 mainScroll 事件 
  created(){
    // 函数防抖(使用this保存 deSetSeletct,用于销毁)
    this.debSetSeletct = debounce(this.setSelect,100);
    // 当事件总线的mainScroll被触发的时候执行回调
    this.$bus.$on("mainScroll",this.debSetSeletct); 
  },
  destoryed(){
    this.$bus.$off("mainScroll",this.debSetSeletct); 
  },
   methods:{
    handleSelect(item){
      // 点击添加hash值，以达到锚链接效果
        location.hash = item.anchor;
    },
    setSelect(){
      this.activeAnchor="";
      const range =  200;//范围
      for(const dom of this.domsArr){
        // 健壮性判断，如果获取的dom不为null或undefined
        if(!dom) {continue;}
        // 获取元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if(top >=0 && top <= range){
          // 在范围内,就设置activeAnchor为dom.id，达到激活状态
          this.activeAnchor = dom.id;
          return;
        }else if(top > range){
          // 在规定的下方
          return;
        }else{
          // 在规定的上方:说明正在浏览，同样激活
          this.activeAnchor = dom.id;
        }
      }
    }
  },
};
</script>

<style lang="less" scoped>
  .blog-toc-container{
    position: relative;
    width: 200px;
    height: 100%;
    overflow-y: auto;
  }
  @media screen and (max-width:600px) {
    .blog-toc-container{
      display: none;
    }
  }
</style>