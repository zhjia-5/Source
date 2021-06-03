<template>
  <div class="about-container">
    <h2>组件使用说明</h2>
    <table v-for="item in data" :key="item.component" border="2">
      <thead>
        <tr>
          <th colspan="5">{{ item.component }}</th>
        </tr>
      </thead>
      <tbody v-if="item.attr">
        <tr>
          <th>属性名</th>
          <th>含义</th>
          <th>类型</th>
          <th>必填</th>
          <th>默认值</th>
        </tr>
        <tr v-for="attrs in item.attr" :key="attrs.meaning">
          <td>{{ attrs.attrName }}</td>
          <td>{{ attrs.meaning }}</td>
          <td>{{ attrs.type }}</td>
          <td>{{ attrs.require }}</td>
          <td>{{ attrs.default }}</td>
        </tr>
      </tbody>
      <tfoot v-if="item.event">
        <tr>
          <th>事件名</th>
          <th>含义</th>
          <th>事件参数</th>
          <th>参数类型</th>
          <th>——</th>
        </tr>
        <tr v-for="events in item.event" :key="events.meaning">
          <td>{{ events.eventName }}</td>
          <td>{{ events.meaning }}</td>
          <td>{{ events.args }}</td>
          <td>{{ events.argsType }}</td>
          <td>——</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        // Avatar
        {
          component: "Avatar",
          attr: [
            {
              attrName: "url",
              meaning: "头像图片路径",
              type: "String",
              require: "是",
              default: "无",
            },
            {
              attrName: "width",
              meaning: "头像尺寸，宽",
              type: "Number",
              require: " 否",
              default: "150",
            },
            {
              attrName: "height",
              meaning: "头像尺寸，高",
              type: "Number",
              require: " 否",
              default: "150",
            },
          ],
        },
        // Icon
        {
          component: "Icon",
          attr: [
            {
              attrName: "type",
              meaning: "图标类型",
              type: "String",
              require: "是",
              default: "无",
            },
          ],
        },
        // Pager
        {
          component: "Pager",
          attr: [
            {
              attrName: "current",
              meaning: "当前页码",
              type: "Number",
              require: "否",
              default: "1",
            },
            {
              attrName: "total",
              meaning: "总数据量",
              type: "Number",
              require: " 否",
              default: "0",
            },
            {
              attrName: "limit",
              meaning: "页容量",
              type: "Number",
              require: " 否",
              default: "10",
            },
            {
              attrName: "visibleNumber",
              meaning: "可见页码数",
              type: "Number",
              require: " 否",
              default: "10",
            },
          ],
          event: [
            {
              eventName: "pageChange",
              meaning: "页码变化",
              args: "新的页码",
              argsType: "Number",
            },
          ],
        },
        // Empty
        {
          component: "Empty",
          attr: [
            {
              attrName: "text",
              meaning: "显示的文字",
              type: "String",
              require: "否",
              default: "无数据",
            },
          ],
        },
        // ImageLoader
        {
          component: "ImageLoader",
          attr: [
            {
              attrName: "src",
              meaning: "原始图片的路径",
              type: "String",
              require: "是",
              default: "无",
            },
            {
              attrName: "placeholder",
              meaning: "原始图片加载完成前的占位图片",
              type: "String",
              require: " 是",
              default: "无",
            },
            {
              attrName: "duration",
              meaning: "原始图片加载完成后触发",
              type: "Number",
              require: " 否",
              default: "500",
            },
          ],
          event: [
            {
              eventName: "load",
              meaning: "原始图片加载完成后触发",
              args: "无",
              argsType: "无",
            },
          ],
        },
        // Commnet
        {
          component: "Commnet",
          attr: [
            {
              attrName: "title",
              meaning: "列表标题",
              type: "String",
              require: "否",
              default: "无",
            },
            {
              attrName: "commentCount",
              meaning: "评论的数量",
              type: "Number",
              require: "否",
              default: "无",
            },
            {
              attrName: "list",
              meaning: "列表数据",
              type: "Array",
              require: "否",
              default: "[]",
            },
            {
              attrName: "isLoading",
              meaning: "加载更多",
              type: "Boolean",
              require: "否",
              default: "false",
            },
          ],
          event: [
            {
              eventName: "submit",
              meaning: "用户点击提交时触发",
              args: "数据对象",
              argsType: "Object",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.about-container {
  background: lighten(@dark, 10%);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  color: @gray;
  padding: 20px;
  h2 {
    text-align: center;
  }
  table {
    border-color: @gray;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 2em;
    td {
      text-align: center;
    }
  }
}
@media screen and (max-width: 600px) {
  .about-container{
     padding: 10px;
  }
}
</style>>