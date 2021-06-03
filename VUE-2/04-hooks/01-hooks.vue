<template>
  <div>
    <h2>beforeCreate——组件实例创建前:</h2>
    <h2>
      created——组件实例数据已注入(已生成虚拟DOM):<i>{{ text }}</i>
    </h2>
    <h2 ref="beforeMount">beforeMount——生成真实DOM之前:无法拿到真实DOM</h2>
    <h2 ref="mounted">
      mounted——生成真实DOM之后:可以拿到真实DOM，然后可以改变样式
    </h2>
    <h2>beforeUpdate——数据更新之前：<i>{{ number }}</i></h2>
    <h2>
      updated——数据更新之后：number<i>{{ number }}</i>
    </h2>
    <button @click="number++">更新number</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      number:0,
    };
  },

  // beforeCreate——组件实例创建前:
  // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
  beforeCreate() {
    console.log("beforeCreate!!!");
  },

  //  created——组件实例数据已注入(已生成虚拟DOM):
  created() {
    this.text = "组件数据已注入";
  },

  // beforeMount——生成真实DOM之前:无法拿到真实DOM
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {
    console.log(
      "beforeMount——生成真实DOM之前:无法拿到真实DOM:" + this.$refs.beforeMount
    ); //undefined
  },

  // mounted——生成真实DOM并挂载之后:可以拿到真实DOM，然后可以改变样式
  mounted() {
    this.$refs.mounted.style.color = "skyblue";
  },

  // beforeUpdate——数据更新之前
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
  beforeUpdate() {
    console.log("beforeUpdate——数据更新之前:"+this.number);
  },

  //updated——数据更新后
  updated() {
    console.log("updated——数据更新后:" + this.number);
  },

// 动画过渡效果结束运行
  transitionend(){
    console.log("动画过渡效果结束运行");
  }
  

};
</script>

<style scoped>
i {
  color: #f00;
}
</style>