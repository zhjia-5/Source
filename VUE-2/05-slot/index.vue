<template>
  <div class="myslot-container">
    <!-- vue内部组件：插槽与具名插槽 -->
    <!-- 没有定义name,默认为name:default,对应v-slot:default -->
    <slot>默认数据：如果父组件对应的默认template模板中没有内容则显示此行文本</slot>
     <!-- 对应v-slot:header -->
    <slot name="header"></slot>
    <!-- 对应v-slot:body -->
    <slot name="body"></slot>
    <button>确定</button>
    <button>取消</button>
  </div>
</template>
