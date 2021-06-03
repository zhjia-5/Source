<template>
  <div class="project-container">
    <!-- AI 智能客服 -->
    <div class="common" v-for="item in data" :key="item.title">
      <a class="img" :href="item.link" target="_blank">
        <img :src="item.imgSrc" />
      </a>
      <div class="desc">
        <a class="title" :href="item.link" target="_blank"
          >{{ item.title }}
          <Icon type="github" />
        </a>
        <p>{{ item.lang }}</p>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import taobaoImg from "@/assets/project/taobao.jpg";
import serviceImg from "@/assets/project/AI-service.jpg";
import rotation from "@/assets/project/3Drotation.jpg";
import RubiksCube from "@/assets/project/RubiksCube.jpg";
import sport from "@/assets/project/sport.jpg";
import shoppingCar from "@/assets/project/shoppingCar.jpg";
export default {
  components: { Icon },
  data() {
    return {
      data: [
        {
          title: "智能AI客服",
          lang: "使用语言：HTML5、CSS3、原生JavaScript、Ajax。",
          desc: "项目描述：简易的在线AI智能客服，闲暇之余可与其互动。",
          imgSrc: serviceImg,
          link: "https://zhjia-5.github.io/AI-service/",
        },
        {
          title: "淘宝静态首页",
          lang: "使用语言：HTML5、CSS3、原生JavaScript。",
          desc:
            "项目描述：闲暇之余仿生淘宝静态首页,使用雪碧图，阿里字体图标库iconfont。",
          imgSrc: taobaoImg,
          link: "https://zhjia-5.github.io/taobao/",
        },
        {
          title: "3D旋转照片墙",
          lang: "使用语言：纯HTML5、CSS3。",
          desc:
            "项目描述：3D旋转效果，perspective景深高度，perspective-origin透视原点切换",
          imgSrc: rotation,
          link: "https://zhjia-5.github.io/3Drotation/",
        },
        {
          title: "3D魔方旋转效果",
          lang: "使用语言：HTML5、CSS3、原生JavaScript。",
          desc:
            "项目描述：CSS3rotation操作3D魔方旋转视觉效果，数组循环，以及前端算法。",
          imgSrc: RubiksCube,
          link: "https://zhjia-5.github.io/RubiksCube/",
        },
        {
          title: "模拟球体重力弹性运动",
          lang: "使用语言：HTML5、CSS3、原生JavaScript。",
          desc: "项目描述：模拟球体重力加速度，弹性碰球运动，基本DOM操作。",
          imgSrc: sport,
          link: "https://zhjia-5.github.io/sport/",
        },
        {
          title: "购物车",
          lang: "使用语言：HTML5、CSS3、原生JavaScript，Ajax。",
          desc:
            "项目描述：使用本地化存储localStorage模拟远程商品增删改查,以及基本的DOm操作。",
          imgSrc: shoppingCar,
          link: "https://zhjia-5.github.io/shoppingCar/",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;

  .common {
    display: flex;
    width: 100%;
    height: auto;
    border: 1px solid lighten(@gray, 10%);
    box-sizing: border-box;
    padding: 1em;
    margin-bottom: 2em;
    transition: all 0.2s;
    box-shadow: 1px 1px 3px @gray;
    &:hover {
      transform: scale(1.01);
      box-shadow: 5px 5px 15px @gray;
    }
    a.img {
      position: relative;
      width: 120px;
      height: 120px;
      flex: 0 0 120px;
      box-sizing: border-box;
      background-size: cover;
      border: 1px solid lighten(@gray, 20%);
      border-radius: 5px;
      transition: all 0.3s;
      margin-right: 1em;
      img {
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: auto;
        transition: 0.3s;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .desc {
      color: darken(@gray, 20%);
      a.title {
        font-size: 1.2rem;
        letter-spacing: 0.1em;
        font-weight: bold;
        &:hover {
          color: @primary;
        }
        .icon-container {
          color: @warn;
          font-size: 0.8em;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .project-container {
    .common {
      a.img {
        border: none;
       flex: 1 1 35vw;
       img{
         padding: 0;
       }
      }
    }
  }
}
</style>