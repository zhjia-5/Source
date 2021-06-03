<template>
  <div >
    <!-- 给func属性绑定一个函数，该函数可以被子组件通过属性方式获取到， -->
    <LoadingButton :func="handleFunc"/>
  </div>
</template>
<script>
import LoadingButton from "./children.vue";
export default {
  components: {
    LoadingButton,
  },
  methods: {
    handleFunc(count) {
      console.log("父组件拿到子组件的count=" + count);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("有一个未知错位"); //resolve()的参数回传到子组件$listeners.click()参数里
        }, 2000);
      });
    },
    
  }
};
</script>