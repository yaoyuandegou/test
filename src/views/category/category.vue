<template>
  <div class="category">
      <section class="wrapper" ref="sectionScroll">
        <ul class="content">
          <li  v-for="item in 100">hello-{{item}}</li>
        </ul>
      </section>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.sectionScroll,{
      click:true,
      probeType:0,
    });
      this.scroll.on('scroll',(position)=>{
        console.log('ok');
      });
  },
}
</script>
<style lang="less" scoped>
.category{}
.wrapper{
  height:300px;
  overflow: hidden;
  background-color: #678456;
}
</style>