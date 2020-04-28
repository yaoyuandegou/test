<template>
  <div class="goods-list-item">
      <img :src="goodsItem.show.img" alt="" @load="imageLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
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
  computed:{
/*       ...mapState(["imgLoadFinish"]), */
  },
  methods:{
      /* ...mapMutations(["addImgLoadNum"]), */
      imageLoad(){
          //this.addImgLoadNum();
          this.$bus.$emit('itemImgLoad');
      },

  },
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.goods-list-item{
    position: relative;
    //flex-shrink: 0;
    width:49%;
    padding-bottom:40px;
    img{
        border-radius: 4px;
        width:100%;
    }
    .goods-info{
        font-size:12px;
        position:absolute;
        bottom:5px;
        left:0;
        right:0;
        overflow:hidden;
        text-align: center;
        p{
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom:3px;
        }
        .price{
            color:var(--color-high-text);
            margin-right:20px;
        }
        .collect{
            position:relative;
            &::before{
                content:'';
                position: absolute;
                left:-15px;
                top:1px;
                width:14px;
                height:14px;
                background: url("~assets/img/common/collect.svg");
                background-size: 14px 14px;
                background-repeat: no-repeat;
            }
        }
    }
}
</style>