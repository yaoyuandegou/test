<template>
  <div class="tab-control" ref="tab-control">
      <div v-for="(item,index) in titles" 
        class="item" 
        @click="currentHitItem=index" 
        :class="{active:currentHitItem==index}">
          <p style="font-size:16px;transform:scale(0.4)">inportant</p>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
window.addEventListener('scroll',()=>{
    let tabControl=document.querySelector('.tab-control').offsetTop;
    let tabControlTop=tabControl.offsetTop;
    if(window.scrollY>=tabControlTop){
        tabControl
    };
});
export default {
  components:{},
  props:{
      titles:{
          type:Array,
          default(){
              return [];
          }
      }
  },
  data(){
    return {
        currentHitItem:0,
    }
  },
  watch:{},
  computed:{},
  methods:{

  },
  created(){},
  mounted(){
      //console.log(this.$refs['tab-control'].offsetTop);
  }
}
</script>
<style lang="less" scoped>
.tab-control{
    display: flex;
    background-color: rgba(255, 255, 255, 0.726);
    text-align: center;
    padding: 20px 90px 10px;
    justify-content:space-between;
    &.fixed{
        position: fixed;
        top:44px;
        width:100vw;
        padding: 0 90px 0;
    }
    .item{
        flex-grow:0;
        width:60px;
        padding-bottom: 10px;
        &.active{
            border-bottom:3px solid var(--color-high-text); 
            color:var(--color-high-text); 
        }
    }
}
</style>