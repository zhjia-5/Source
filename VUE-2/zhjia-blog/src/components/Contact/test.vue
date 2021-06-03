<template>
  <div class="test-contact">
    <Contact />
  </div>
</template>


<script>
/* 


# Contact

<img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" alt="iShot2020-11-30下午04.55.47" style="zoom:40%;" />

该组件需要横向撑满容器，背景色透明

> 1. 如何实现点击弹出QQ对话？
>
>    设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
>
> 2. 如何实现点击弹出发送邮件？
>
>    设置超链接为：mailto:邮件地址
 */

import Contact from "./index";
import "@/styles/global.less";//之前main.js导入的全局不能作用到该文件
export default {
  components: {
    Contact,
  },
};
</script>


<style lang="less" scoped>
.test-contact {
  width: 40vw;
  height: 50vw;
  background: #000;
  margin: 0 auto;
  border: 1px solid #ccc;
  margin: 0 auto;
  padding-top:200px;
}
</style>

