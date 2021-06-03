<template>
  <div class="myslot-test">
    <MySlot>
      <!-- 
        具名插槽使用:默认值name：default；v-slot:default
        默认值default可以省略template标签：<h1>默认值</h1>
        简写：v-slot:header ——> #header
      -->
      <template>
        <h1>默认值</h1>
      </template>

      <!-- 具名插槽使用:name：header；#header -->
      <template #header>
        <h1>header</h1>
      </template>

      <!-- 具名插槽使用:name：body；#body -->
      <template #body>
        <h1>body</h1>
      </template>
    </MySlot>
  </div>
</template>
<script>
import MySlot from "./index";
export default {
  components: {
    MySlot,
  },
};
</script>

<style  scoped>
.myslot-test {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border: 1px solid;
}
</style>