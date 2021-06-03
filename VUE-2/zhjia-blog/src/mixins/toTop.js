
export default function (refValue){
  return{
    mounted(){
      // 监听Top组件所抛出的 toTopScroll 事件，Top被点击会执行回调
      this.$bus.$on("toTopScroll",this.handleToTop);
      // 添加滚动事件，当滚动时会触发后面的回调函数
      this.$refs[refValue].addEventListener("scroll",this.handleMainScroll);
    },
    methods:{
      // 置顶，scrollTop为Top组件抛出事件时所传的参数
      handleToTop(scrollTop) {
        if(this.$refs[refValue]){//判断是否有该组件。。防止报错
          this.$refs[refValue].scrollTop = scrollTop;//置顶
        }
      },
      handleMainScroll(){
        // 触发mainScroll事件，并传入真实的dom，在Top组件中监听，用于是否显示Top组件
        this.$bus.$emit("mainScroll",this.$refs[refValue]);
      }
    },
    beforeDestroy(){
      this.$bus.$emit("mainScroll",null);//第二个参数作为Top是否显示的一个条件
      this.$bus.$off("toTopScroll", this.handleToTop);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },
  }
}