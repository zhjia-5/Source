<template>
  <div>
    <input v-model.number="money" type="number" />
    <!-- 将money作为formatMoney()的参数然后返回新的值到当前大胡子括号中 -->
    <p>{{ money | formatMoney(" ") }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 1000,
    };
  },
  // 本地定义一个过滤器：将输入数字格式化成钱币格式
  // money作为formatMoney()的第一个默认参数，同时页可以接受多个其他参数
  filters: {
    formatMoney: function (money, split = ",", fixedDigit = 2) {
      const str = money.toFixed(fixedDigit).toString();
      const parts = str.split(".");
      let part1 = parts[0]; // 左边整数
      const part2 = parts[1]; // 右边小数
      part1 = part1.replace(/(?=(\d{3})+$)/g, split);
      return `${part1}.${part2}`;
    },
  },
};
</script>