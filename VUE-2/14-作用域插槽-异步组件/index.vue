<template>
  <div class="app">
    <AsyncComponent :contentPromise="fetchGoods()">
      <template #loading></template>
      <!-- 显示商品 -->
      <template v-slot:default="{ content }">
        <ul>
          <li v-for="item in content" :key="item.name">
            品牌：{{item.name}}
            价格：{{item.price}}
          </li>
        </ul>
      </template>
      <!-- 显示错误结果 -->
      <template v-slot:error="{ error }">
        <p style="color: red">{{ error.message }}</p>
      </template>
    </AsyncComponent>
  </div>
</template>
<script>
import AsyncComponent from "./AsyncComponent";
// 模拟网路异步请求
function getGoods() {
  const goods = [
    { name: "Nike", price: 100 },
    { name: "Adidas", price: 90 },
    { name: "LiNing", price: 80 },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(goods);
      } else {
        reject(new Error("No Found:没有你想要的商品"));
      }
    }, 1000);
  });
}
export default {
  components: {
    AsyncComponent,
  },
  methods: {
    async fetchGoods() {
      return await getGoods();
    },
  },
};
</script>
<style scoped>
.app {
  width: 300px;
  height: 200px;
  border: 1px solid red;
  margin: 50px auto;
}
</style>