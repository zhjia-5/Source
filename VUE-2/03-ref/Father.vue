<template>
  <div>
    <h1 ref="h1">ref:演示---h1元素</h1>
    <Child ref="child"/>
    <button @click="handleClick">查看引用</button>
  </div>
</template>
<script>
import Child from "./Child";
export default {
  components:{
    Child,
  },
  methods:{
    handleClick(){
      // this.$refs:持有ref属性的所有引用
      // 里面包含h1、Child实例，和实例的所有方法属性
      console.log(this.$refs);
      // 父组件更改子组件child的数据
      this.$refs.child.a = 10;//更改子组件的数据
      this.$refs.child.b = 20;
      this.$refs.child.func();//运行子组件的方法
      this.$refs.h1.style.color = "red";//操着真实DOM元素P的样式
    }
  },
}
</script>