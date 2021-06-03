<template>
  <div>
    <button 
    @click="handleClick" 
    :disabled="isLoading"

    >
      {{ isLoading ? "提交中..." : "提交" }}
    </button>
    <div class="error">{{ error }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async handleClick() {
      this.count++;
      this.isLoading = true;
      this.error = "";
      console.log(this.$listeners);
      /**
       * this.$listeners:
       * 返回值：Object
       * 获取在父组件中在给该组件<children/>身上注册的所有事件引用
       * 该方法在vue调试工具中无法监听到
       * click: ƒ invoker()
       * mouseover: ƒ invoker()
       */
      // 判断父组件是否给子组件传递了事件函数
      if (this.$listeners.click) {
        //运行事件函数  并传参给父组件
        this.error = await this.$listeners.click(this.count);
        this.isLoading = false;
      }
    },
  },
};
</script>
<style  scoped>
.error {
  color: red;
}
</style>