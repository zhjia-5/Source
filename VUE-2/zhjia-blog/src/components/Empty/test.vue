<template>
  <div class="test-empty">
    <Empty :texts="'没有数据'" />
  </div>
</template>

## 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ----------| ------ | ---- | --------|
| text   | 显示的文字 | String | 否   | "无数据" |

<script>
import Empty from  "./index";
export default {
  name:"Empty-test",
  components:{
    Empty,
  }
}
</script>
<style scoped>
  .test-empty{
    position: relative;
    width: 400px;
    height: 300px;
    border: 1px solid #ccc;
  }
</style>