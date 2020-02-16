<template>
  <div class="recommend">
    <template v-for="item in recommends">
      <a :href="item.link" class="cell">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </template>
  </div>
</template>

<script>
export default {
    name:'homeRecommendView',
    components:{},
    props:{
      recommends:{
        type:Array,
        default(){
          return [];
        }
      }
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
  .recommend{
    display: flex;
    padding:35px 10px 35px 10px;
    border-bottom:10px solid #eee;
    .cell{
      text-align: center;
      img{
        width:80%;
      }
    }
  }
</style>