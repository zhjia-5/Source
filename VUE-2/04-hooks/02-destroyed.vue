<template>
  <div>
    <button @click="showClock = !showClock">显示时间</button>
    <Clock v-if="showClock"/>
  </div>
</template>

<script>
import Clock from "./03-Clock.vue";
export default {
  components:{
    Clock
  },
  data(){
    return {
      showClock:true,
    }
  },
}
</script>