<template>
  <div>
    <button :disabled="isLoading" @click="handleClick">
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
    }
  },
  props:{
    func:Function
  },
  methods: {
    async handleClick() {
      this.count++;
      this.isLoading = true;
      this.error = "";
      // 判读父组件是否传属性 ，如果有传就运行该函数属性
      if (this.func) {
        this.error = await this.func(this.count);
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