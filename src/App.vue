<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style lang="less">
@import './assets/css/base.css';
</style>

<script>
import  MainTabBar from 'components/common/tabbar/maintabbar.vue'
export default{
  name:'app',
  components:{
    MainTabBar,
  }
}
</script>
