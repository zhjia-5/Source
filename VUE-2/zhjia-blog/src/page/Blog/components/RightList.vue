<template>
  <ul class="right-sidebar-container">
    <li v-for="item in list" :key="item.name">
      <span
        class="item-name"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </span>
      <span
        :class="{ active: item.isSelect }"
        class="currentArticleCount"
        @click="handleClick(item)"
      >
        {{ item.currentArticleCount }}
      </span>

      <!-- 递归显示自身组件 ，事件也是用自定义事件-->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  // 组件名：可以再组件自身添加自己，可以用于组件递归
  name: "RightList",

  /* li数组的每一项格式：
 [{
    name:"xxx",
    isSelect:true,
    children:[{
      name:"xxx",isSelect:true
    }],
  }] 
*/
  props: {
    list: {
      type: Array,
      default: () => [], //如果类型为数组、对象，默认值需要通过函数返回的空数组，或返回空对象
    },
  },
  methods: {
    /* 点击元素时：自身处理不了交给父组件处理，
    事件名：select，其参数为item[] */
    handleClick(item) {
      // 如果当前没被选中才抛出事件
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-sidebar-container {
  margin-left: 1em;
  cursor: pointer;
  li {
    span {
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      cursor: pointer;
      &.active {
        color: @warn;
        font-weight: bold;
      }
    }
    .currentArticleCount {
      color: @lightWords;
      font-size: 10px;
      margin-left: 5px;
    }
  }
}
@media screen and (max-width: 600px) {
  .right-sidebar-container {
    text-align: center;
    margin: 0;
    .currentArticleCount {
      display: none;
    }
  }
}
</style>