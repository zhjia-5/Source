<template>
<!-- 只有页数大于1才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a 
      class="firstPage"
      :class="{ disabled: current === 1 }" 
      @click="handleClick(1)"
    >First</a>
    <!-- 如果current === 1,类名就是 disabled -->
    <a 
      :class="{ disabled: current === 1 }"
      @click="handleClick(current - 1)"
    >&lt;&lt;</a>

    <a 
      v-for="(n, i) in numbers" 
      :key="i" 
      :class="{ active: n === current }"
      @click = handleClick(n)
    >
      {{ n }}
    </a>

    <a 
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current + 1)"  
    >&gt;&gt;</a>
    <a 
      class="lastPage"
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(pageNumber)"  
    >Last</a>
  </div>
</template>

<script>
export default {
  // 属性
  props: {
    current: {
      //当前页
      type: Number,
      default: 1,
    },
    total: {
      //总条数
      type: Number,
      default: 0,
    },
    limit: {
      //每页显示条数
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //实际显示的条数
      type: Number,
      default: 10,
    },
  },
  // 计算属性
  computed: {
    pageNumber() {
      //总页数 = 总条数 / 每页显示条数
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      //最小数（所显示出来的）
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      //最大数（所显示出来的）
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      // 所显示的数
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if(newPage < 1){ newPage = 1 }  //页面不能小于1
      if(newPage > this.pageNumber){ newPage = this.pageNumber }//页码不能大于最大页码数
      if(newPage === this.current) return; //如果点击当前显示的页码不做操作
      /* 抛出一个事件 
          参数一：事件的名称pageChange
          参数二：该该事件的参数，pageChange(newPage)
      */
      this.$emit("pageChange",newPage);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less"; //导入src目录下的styles/var.less
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 5vw;
  a {
    flex: 1 1 auto;
    color: @primary;
    margin: 0 1vw;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
@media screen and (max-width:600px) {
  .pager-container{
    font-size: 5vw;
    .firstPage,.lastPage{
    display:none;
  }
  }
  
}
</style>