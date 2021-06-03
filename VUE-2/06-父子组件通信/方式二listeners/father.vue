<template>
  <div >
    <LoadingButton @click="handleClick"  @mouseover="''"/>
  </div>
</template>
<script>
import LoadingButton from "./children.vue";
export default {
  components: {
    LoadingButton,
  },
  methods: {
    handleClick(count) {
      console.log("父组件拿到子组件的count=" + count);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("有一个未知错位"); //resolve()的参数会传到子组件$listeners.click()参数里
        }, 2000);
      });
    },
    
  }
};
</script>