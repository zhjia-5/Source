<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  />
</template>

<script>
// 在模板中使用了":"后，双引号内写的就是js表达式
export default {
  props: {
    url: {
      type: String, // 类型约束：url属性为字符串类型
      required: true, //类型约束：表示必须有url属性
    },
    width:{
     type: Number,//类型约束为number 
     default:150,//默认大小为150
    },
    height:{
      type:Number,
      default:150,
    },
  },
};
</script>
<style scoped>/* scoped:带有作用域的样式，编译完后会在类名后加该组件的编码 */
  .avatar-container{
    border-radius: 50%;
    display: block;
    object-fit: cover;/* 避免图片拉伸 */
  }
  @media screen and (max-width:600px) {
  .avatar-container{
    width:2.2em !important;
    height: 2.2em !important;
  }
}
</style>
