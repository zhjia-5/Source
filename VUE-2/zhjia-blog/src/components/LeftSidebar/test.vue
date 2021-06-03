<template>
  <div class="test-left-sidebar">
    <LeftSidebar />
  </div>
</template>
<script>
import LeftSidebar from "@/components/LeftSidebar";
export default {
  components: {
    LeftSidebar,
  },
};
</script>
<style lang="less" scoped>

.test-left-sidebar {
  width: 230px;
  height: 700px;
}

</style>