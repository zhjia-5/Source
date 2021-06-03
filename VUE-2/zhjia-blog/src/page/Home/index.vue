<template>
  <div class="home-container" ref="homeDom">
    <!-- 轮播区 -->
    <ul
      class="carousel-container"
      :style="{ marginTop: marginTop }"
      @wheel="handleWheel"
    >
      <!-- vue中使用marginTop===margin-top -->
      <li v-for="item in data" :key="item.id">
        <!-- 通过props向子组件传递数据 -->
        <Carouselitem :bannerDate="item" />
      </li>
    </ul>

    <!-- 上箭头 -->
    <div class="arrow arrowUp" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <!-- 下箭头 -->
    <div
      class="arrow arrowDown"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 导航小圆点 -->
    <ul class="nav-cir">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i === index }"
        ref="cir"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- 加载中svg图 -->
    <Loading v-if="loading" />
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import { mapState } from "vuex";
export default {
  components: {
    Carouselitem,
    Icon,
    Loading,
  },
  data() {
    return {
      index: 0, //当前显示的图片
      containerHeight: 0, //容器的高
      lock: true, //轮播图的锁
    };
  },
  // 计算属性:计算homeDom的marginTop
  computed: {
    ...mapState("banner", ["loading", "data"]),
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  // 加载时触发dispatc
  async created() {
    this.$store.dispatch("banner/fetchData");
  },
  // dom已经挂载:
  mounted() {
    // 获取容器（homeDom）的宽
    this.containerHeight = this.$refs.homeDom.clientHeight;
    // 添加监听窗口大小改变事件,当发生改变执行回调函数(记得再destroyed移除事件)
    window.addEventListener("resize", this.handleResize);
  },
  // 方法
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.lock) {
        // 进入轮播事件后把锁锁上
        this.lock = false;
        if (e.deltaY < 0) {
          //向上滚动：判断角标是否越界
          this.index === 0 ? null : this.index--;
        }
        if (e.deltaY > 0) {
          //向下滚动：判断角标是否越界
          this.index === this.data.length - 1 ? null : this.index++;
        }
      }
      // 300毫秒后再把锁打开，防止频繁滚动切换
      setTimeout(() => {
        this.lock = true;
      }, 300);
    },
    // 当窗口大小被调整时，更新 this.containerHeight 的值
    handleResize() {
      this.containerHeight = this.$refs.homeDom.clientHeight;
    },
  },
  // 组件销毁移除事件注册
  destroyed() {
    removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  // 轮播区域
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  // 导航小圆点
  .nav-cir {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    li {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      border: 1px solid;
      margin: 10px;
      background: @gray;
      border: 1px solid #fff;
      transition: 0.5s;
      cursor: pointer;
      box-sizing: border-box;
      &.active {
        background: @words;
      }
    }
  }
  // 上下箭头
  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2vw;
    font-weight: bold;
    color: @gray;
    cursor: pointer;
    animation: jump 2s infinite;
  }
  // 上箭头
  .arrowUp {
    top: 20px;
  }
  // 下箭头
  .arrowDown {
    bottom: 20px;
  }
  // 箭头动画
  @keyframes jump {
    0% {
      transform: translate(-50%, 5px);
    }
    50% {
      transform: translate(-50%, -5px);
    }
    100% {
      transform: translate(-50%, 5px);
    }
  }
}
@media screen and (max-width: 600px) {
  .home-container {
    .nav-cir{
      display: none;
    }
    .arrow {
      font-size: 7vw;
    }
    .arrowUp{
      top: 18vw;
    }
    .arrowDown{
      bottom: 18vw;
    }
  }
}
</style>