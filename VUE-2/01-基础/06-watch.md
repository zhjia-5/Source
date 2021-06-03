## watch

利用`watch`配置，可以直接观察某个数据的变化，变化时可以做一些处理

```js
export default {
  // ... 其他配置
  watch: {
    // 观察 this.$route 的变化，变化后，会调用该函数
    $route(newVal, oldVal){
      // newVal：this.$route 新的值，等同 this.$route
      // oldVal：this.$route 旧的值
    },
    // 完整写法
    $route: {
      handler(newVal, oldVal){},
      deep: false, // 是否监听该数据内部属性的变化，默认 false
      immediate: false // 是否立即执行一次 handler，默认 false
    }
    // 观察 this.$route.params 的变化，变化后，会调用该函数
    ["$route.params"](newVal, oldVal){
      // newVal：this.$route.params 新的值，等同 this.$route.params
      // oldVal：this.$route.params 旧的值
    },
  	// 完整写法
    ["$route.params"]: {
      handler(newVal, oldVal){},
      deep: false, // 是否监听该数据内部属性的变化，默认 false
      immediate: false // 是否立即执行一次 handler，默认 false
    }
  }
}
```
