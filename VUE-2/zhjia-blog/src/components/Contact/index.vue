<template>
  <ul class="contact-container">
    <!-- github 地址 -->
    <li>
      <a href="/" class="prevent-default">
        <div class="icon"><Icon type="github" /></div>
        <span>{{data.githubName}}</span>
      </a>
      <div class="pop">
        <img
          :src="QRcode"
        />
      </div>
    </li>
    <!-- 邮箱 -->
    <li>
      <a href="mailto:240357483@qq.com"
        ><!-- 点击弹出发送邮件的对话框，前提：需要在本地安装邮箱app -->
        <div class="icon"><Icon type="email" /></div>
        <span>{{data.mail}}</span>
      </a>
    </li>
    <!-- qq -->
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=240357483&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon"><Icon type="qq" /></div>
        <span>{{data.qq}}</span>
      </a>
    </li>
    <!-- 微信 -->
    <li>
      <a href="/" class="prevent-default">
        <div class="icon weixin"><Icon type="weixin" /></div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img
          :src="QRcode"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
import QRcode from "@/assets/QRcode.jpg";
export default {
  data(){
    return{
      QRcode
    }
  },
  components: {
    Icon,
  },
  computed:{
    ...mapState("setting",["data"]),
  },
  created(){
    this.$store.dispatch("setting/fetchData");
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.contact-container {
  list-style: none;
  color: @gray;
  @itemHeight: 20px; //定义变量
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 20px;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      display: flex;
      align-items: center;
      font-size: 13px;
      &.prevent-default{
        pointer-events:none;//阻止github 和 微信的默认样式
      }
    }
    .icon {
      font-size: 20px;
      width: 25px;
      &.weixin{ font-size: 16px; }
    }
    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 6px;
      padding: 10px 15px;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom; //旋转中心
      transition: 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: -4px;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>








