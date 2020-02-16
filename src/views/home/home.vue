<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <h1>首页</h1>

    
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue';
import homeSwiper from './childcomps/homeSwiper';
import homeRecommendView from './childcomps/homeRecommendView';

import {getHomeMultidata} from "network/home";
//插件引入swiper
//import swiper from 'components/common/swiper/swiper.vue';
export default {
  name:"home",
  components:{
    navBar,homeSwiper,homeRecommendView
    /* swiper */
  },
  props:{},
  data(){
    return {
      banners:[],
      recommends:[],
      banners:[],

      result:null,
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    });
  },
}
</script>
<style lang="less" scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:white;
  }
</style>