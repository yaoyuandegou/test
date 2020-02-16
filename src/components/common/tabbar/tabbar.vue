<template>
  <div class="tab-bar">
    <slot></slot>
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

}
</script>
<style lang="less" scoped>
.tab-bar{
    position: fixed;
    left:0;right:0;bottom:0;
    display:flex;
    background-color: #f0f0f0;
    //padding:0 20px;
    box-shadow: 0px -4px 50px rgb(233, 233, 233);
    border-top: 1px solid #ddd;
    //justify-content: space-around;

}
</style>
