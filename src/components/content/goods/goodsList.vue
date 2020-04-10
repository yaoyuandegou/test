<template>
  <div class="goods-list">
     <goods-list-item v-for="item,index in goods" :goods-item="item">
     </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem';
export default {
  components:{goodsListItem,},
  props:{
      goods:{
          type:Array,
          default(){
              return [];
          },
      },
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.goods-list{
    padding:0px 8px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;   
}


</style>