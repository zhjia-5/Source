<template>
  <Layout>
    <template #main><BlogList /></template>
    <template #right><BlogCategory /></template>
  </Layout>
</template>


<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";


export default {
  data(){
    return {
      blogType:[],//博客分类的数据类型为对象
    }
  },
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>
