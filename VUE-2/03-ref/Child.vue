<template>
  <h1>Child,a:{{a}},b:{{b}}</h1>
</template>
<script>
export default {
  data(){
    return{
      a:1,
      b:2,
    }
  },
  methods:{
    func(){
      console.log("子组件的func()函数运行了。");
    }
  }
}
</script>