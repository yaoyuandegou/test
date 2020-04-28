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
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
  },
  data(){
    return {
        scroll:null,
    }
  },
  created(){


  },
  mounted(){

      this.scroll=new BScroll(this.$refs.scrollPart,{
          click:true,
          pullUpLoad:this.pullUpLoad,
          /* pullUpLoad:true,
          pullDownRefresh:true, */
          probeType:this.probeType,
      });
      //console.log(this.scroll);
      this.scroll.on('scroll',(position)=>{
          this.$emit('outputScrollPosition',position);
      });
       this.scroll.on('pullingUp',()=>{
         this.$emit('pullingUp');
         //这里写finishPullUp()也没问题，但逻辑好像差了一点，好像应该是emit执行结束以后，再执行才爽，这样的话，就得也在这里创建一个方法，然后home.vue里调用了，我先保留这个处理
          this.scroll.finishPullUp();
      });
/*      this.scroll.on('pullingDown',()=>{
          this.scroll.finishPullDown();
      }); */
      this.scroll.scrollTo(0,0);
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time);
    },
    refreshed(){
      this.scroll.refresh && this.scroll.refresh();
    },

/*   保留这种写法
     finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    }, */
  },
}
</script>
<style lang="less" scoped>
.wrapper{}
</style>