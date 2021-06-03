<template>
  <div class="empty-container">
    <Icon type="empty"/>
    <p>{{ this.texts }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components:{
    Icon,
  },
  props: {
    texts: {
      type: String,
      required: false,
      default: "空数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
  .self-center(absolute);
  color:@gray;
  text-align: center;
  .icon-container{
    font-size: 5vw;
  }
  p{
    font-size: 2vw;
  }
}

</style>