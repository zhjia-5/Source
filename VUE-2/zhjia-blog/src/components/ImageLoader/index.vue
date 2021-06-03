<template>
  <div class="image-loader-container">
    <!-- v-if : 所有东西加载完后删除占位符 -->
    <img 
      v-if="!everythingDone" 
      class="placeholder" 
      :src="placeholder" 
    />
    <img
      @load="handleLoad"
      :src="src"
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data(){
    return {
      originLoaded:false,//原图是否加载完成
      everythingDone:false,//所有东西是否加载完成
    }
  },
  computed:{
    originOpacity(){
      return this.originLoaded ? 1 : 0;//如果原图加载完，透明度为1
    }
  },
  methods:{
    // 等到@load加载完成后，触发该函数
    handleLoad(){
      this.originLoaded = true;//将原图是否加载完改为true
      setTimeout(()=>{//等原图的opacity变为1后再执行回调函数，
        this.everythingDone = true;
        this.$emit("load");//抛出 load 事件
      },this.duration);
    }
  }
};
</script>
<style lang="less" scoped>
@import  "~@/styles/mixin.less";
.image-loader-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img{
    .self-fill(absolute);
    object-fit: cover;
  }
  .placeholder{
    fill: blur(2vw);
  }
}

</style>

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | ------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                               | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片                  | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数    | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数  | 参数类型 |
| ------ | --------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发  | 无       | 无       |