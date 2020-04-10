<template>
  <div class="tab-control" ref="tab-control">
      <div v-for="(item,index) in titles" 
        class="item" 
        @click="itemClick(index)" 
        :class="{active:currentHitItem==index}">
          <p style="font-size:16px;transform:scale(0.4)">important</p>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>

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
      itemClick(index){
          this.currentHitItem=index;
          this.$root.Bus.$emit('tabClick',index);
      },
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
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    @media screen and (max-width:374px){
        padding:5px 20% 5px;
    }
    padding:5px 20% 5px;
    justify-content:space-between;

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