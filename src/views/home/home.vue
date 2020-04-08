<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <home-feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="sticky"></tab-control>
    <!-- <button type="priamry" @click="getHomeGoods('pop')">获取数据</button> -->
    <good-list :goods="goods['pop'].list"></good-list>
    
  </div>
</template>

<script>
//导入本页面文件夹里的页面的子组件
import homeSwiper from './childcomps/homeSwiper';
import homeRecommendView from './childcomps/homeRecommendView';
import homeFeatureView from './childcomps/homeFeatureView';

//导入公共组件
import navBar from 'components/common/navbar/NavBar.vue';
import tabControl from 'components/content/tabcontrol/tabControl';
import goodList from 'components/content/goods/goodsList';


//导入其他功能性组件
import {getHomeMultidata,getHomeGoods} from "network/home";
//插件引入swiper
//import swiper from 'components/common/swiper/swiper.vue';
export default {
  name:"home",
  components:{
    homeSwiper,homeRecommendView,homeFeatureView,
    tabControl,navBar,
    goodList,
    /* swiper */
  },
  props:{},
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      result:null,
    }
  },
  created(){
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      });
    },   
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        console.log(res);
      });
    },
    


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
  .sticky{
    position: sticky;
    top:40px;
    z-index: 100;
  }
</style>