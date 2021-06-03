<template>
    <Pager 
      :total="total" 
      :current="current" 
      @pageChange="handlePageChange($event)"
    />
</template>


<script>
import Pager from "./index";//也可以写成:"./",webpack默认会找index文件
export default {
  name: "Pager-test", //如果组件没有在注册的时候指定名字，则使用改名字
  components: {
    //注册组件
    Pager,
  },
  data(){
    return {
      current:5,
      total:302,
    };
  },
  methods:{
    // 这里的newPage是通过子组件中的pageChange(newPage)所传递
  handlePageChange(newPage){
      this.current = newPage;
      console.log(newPage);
    }
  }
};
</script>

<style scoped>
</style>
