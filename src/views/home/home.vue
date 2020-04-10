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
    <good-list :goods="showGoods"></good-list>
    
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
      currentType:'pop',
      result:null,
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    },
  },
  created(){
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted(){
    // 这里写的是响应子组件的一些触发事件采取的措施
    this.$root.Bus.$on('tabClick',index=>{
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      };
    });
  },
  methods:{
    // 事件监听

    // 网络请求
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