<template>
  <div class="wrapper" ref="scrollPart">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  components:{},
  props:{},
  data(){
    return {
        scroll:'',
    }
  },
  mounted(){
      this.scroll=new BScroll(this.$refs.scrollPart,{
          click:true,
          probetype:3,
          pullUpLoad:true,
          pullDownRefresh:true,
      });
      this.scroll.on('scroll',(position)=>{

      });
      this.scroll.on('pullingUp',()=>{
          this.scroll.finishPullUp();
      });
      this.scroll.on('pullingDown',()=>{
          this.scroll.finishPullDown();
      });
  },
}
</script>
<style lang="less" scoped>
.wrapper{}
</style>