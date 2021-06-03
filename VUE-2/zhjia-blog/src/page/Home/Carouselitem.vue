<template>
  <div class="carousel-item-container">
    <div class="img">
      <ImageLoader
        :placeholder="bannerDate.midImg"
        :src="bannerDate.bigImg"
        @load="this.showWords"
      />
    </div>
    <div class="title" ref="title">{{ bannerDate.title }}</div>
    <div class="desc" ref="desc">{{ bannerDate.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props:["bannerDate"],//属性名字bannerDate,如果不做属性约束，可将它放到数组，可存放多个无约束的属性
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    };
  },
  mounted() {
/*  元素挂载后记录文字宽度, 
    +100原因：以缩小窗口打开网站后时，再放大窗口，
    导致初始化保存的titleWidth和descWidth不够而导致文字被overflow：hidden。 */
    this.titleWidth = this.$refs.title.clientWidth + 100;
    this.descWidth = this.$refs.desc.clientWidth + 100;
  },
  methods: {
    showWords() {
      // 标题 描述
      this.$refs.title.style.opacity = 1;
      this.$refs.desc.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次  reflow
      this.$refs.title.clientWidth;
      // 将宽复原
      this.$refs.title.style.transition = "3s";
      this.$refs.desc.style.transition = "3s 2s"; //延时1.5s后再显示过渡效果
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
  },
};
</script>
<style lang="less" scoped>
.carousel-item-container {
  position: relative;
  width: 100%;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
  .title,
  .desc {
    position: absolute;
    left: 3vw;
    bottom: 15vw;
    overflow: hidden;
    transform: translateY(-50%);
    white-space: nowrap;
    letter-spacing: 3px;
    text-shadow: 3px 3px 3px rgba(255, 2255, 255, 0.6);
    color: rgba(255, 2255, 255, 0.8);
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    z-index: 999;
    opacity: 0;
  }
  .title {
    font-size: 2em;
  }
  .desc {
    bottom: 10vw;
    left: 5vw;
    font-size: 1em;
  }
}
@media screen and (max-width:600px) {
  .carousel-item-container {
    .title{
       font-size: 8vw;
        bottom: 30vw;
    }
    .desc{
       font-size: 5vw;
        bottom: 23vw;
    }
  }
}
</style>
