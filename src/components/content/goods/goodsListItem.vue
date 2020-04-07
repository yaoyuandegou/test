<template>
  <div class="goods-list-item">
      <img :src="goodsItem.show.img" alt="">
      <div>
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      goodsItem:{
          type:Object,
          default(){
              return {};
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
.goods-list-item{
    flex-shrink: 0;
    width:48%;
    img{
        border-radius: 4px;
        width:100%;
    }
}
</style>