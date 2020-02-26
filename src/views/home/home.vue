<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <home-feature-view></home-feature-view>
    <h1>首页</h1>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
    
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue';
import homeSwiper from './childcomps/homeSwiper';
import homeRecommendView from './childcomps/homeRecommendView';
import homeFeatureView from './childcomps/homeFeatureView';

import {getHomeMultidata} from "network/home";
//插件引入swiper
//import swiper from 'components/common/swiper/swiper.vue';
export default {
  name:"home",
  components:{
    navBar,homeSwiper,homeRecommendView,homeFeatureView
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
  #home{
    padding-top:44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color:white;
    position: fixed;
    left:0;top:0;right:0;
    z-index: 100;
  }
</style>