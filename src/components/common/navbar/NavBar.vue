<template>
  <div class="nav-bar">
    <section class="left"><slot name="left"></slot></section>
    <section class="center"><slot name="center"></slot></section>
    <section class="right"><slot name="right"></slot></section>
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
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  height:44px;
  text-align: center;
  box-shadow: 0 2px 7px rgba(230, 25, 114, 0.4);
  .left,.right{
    width:60px;
  }
  .center{
    flex:1;
  }
}
</style>