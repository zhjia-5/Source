<template>
  <div class="AsyncComponents-container">
    <slot name="loading" v-if="isLoading"><img :src="LoadingSvg"/></slot>
    <!--    
      子组件传递：v-bind:error="error" ——> 缩写：  :error="error"。 
      父组件接收：v-slot:error={"error"} ：第一个error为插槽名，第二个error为数据
      (父组件不能将v-slot 简写成 #error)
     -->
    <slot name="error" v-else-if="error" :error="error"></slot>
    <slot name="default" v-else :content="content"></slot>
  </div>
</template>

<script>
import LoadingSvg from './loading.svg';
export default {
  props: {
    contentPromise: Promise, //属性类型为Promise
  },
  data() {
    return {
      isLoading: true,
      content: null,
      error: null,
      LoadingSvg,
    };
  },
  async created() {
    // 根据contentPromise属性返回值来操作数据
    try {
      this.content = await this.contentPromise;
      this.error = null;
    } catch (err) {
      this.content = null;
      this.error = err;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
<style scoped>
.AsyncComponents-container{
  text-align: center;
  margin: 50px auto;
}
</style>