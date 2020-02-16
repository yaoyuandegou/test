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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  .left,.right{
    width:60px;
  }
  .center{
    flex:1;
  }
}
</style>