<template>
  <div class="div-ab">
    <A />
    <B />
  </div>
</template>
<script>

import A from "./A";
import B from "./B";

export default {
  components:{
    A,B
  },
}
</script>
<style scoped>
  .div-ab{
    width: 500px;
    height: 500px;
    display: flex;
    margin: 0 auto;
  }
</style>