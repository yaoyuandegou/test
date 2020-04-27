<template>
  <div class="wrapper" @click="backtoTop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      backtoTop(){
          
      },
  },
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.wrapper{
    position: fixed;
    right:10px;
    bottom:80px;
    img{
        width:43px;height:43px;
    }
}
</style>