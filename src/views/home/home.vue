<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
    <b-scroll
      class="scroll-wrapper"
      ref="bScroll"
      :probe-type="3"
      :pull-up-load="true"
      @outputScrollPosition="outputScrollPosition"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <input type="text" />
      {{this["my-class"]}}
      <!-- {{dataName}}----{{propsName}} -->
      <home-feature-view />
      <tab-control 
      :titles="['流行','新款','精选']" 
      class="sticky"
      ref="tabControl"
      ></tab-control>
      <!-- <button type="priamry" @click="getHomeGoods('pop')">获取数据</button> -->
         <good-list :goods="showGoods"></good-list>
    </b-scroll>
    <transition name="fade">
      <back-top-icon @click.native="gotoTop" v-show="(-scrollPosition.y)>1000"></back-top-icon>
    </transition>
  </div>
</template>

<script>
//导入本页面文件夹里的页面的子组件
import homeSwiper from "./childcomps/homeSwiper";
import homeRecommendView from "./childcomps/homeRecommendView";
import homeFeatureView from "./childcomps/homeFeatureView";

//导入公共组件
import navBar from "components/common/navbar/NavBar.vue";
import tabControl from "components/content/tabcontrol/tabControl";
import goodList from "components/content/goods/goodsList";
//返回顶部小图标
import backTopIcon from "components/content/backtop/backtop";

//导入其他功能性组件
import { getHomeMultidata, getHomeGoods } from "network/home";
//导入页面滚动功能组件
import bScroll from "components/common/bscroll/bscroll";
//导入utils.js
import {debounce} from "commonjs/utils.js";


//插件引入swiper
//import swiper from 'components/common/swiper/swiper.vue';

import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    homeSwiper,
    homeRecommendView,
    homeFeatureView,
    tabControl,
    navBar,
    goodList,
    bScroll,
    backTopIcon
    /* swiper */
  },
  props: {
    "props-name":{
      type:String,
      default:"props-shi"
    }
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      result: null,
      scrollPosition: [],
      tabOffsetTop:0,
      "my-class":"this-good"
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
   /*  ...mapState(["imgLoadFinish"]) */
  },
  watch:{
/*     imgLoadFinish(){

    }, */
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");



  },
  mounted() {
    //1: 这里写的是响应子组件的一些触发事件采取的措施,用bus实现的好处是：不用再写响应函数在组件标签上了
    this.$bus.$on("tabClick", index => {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    });
    //2: 防抖关键点：闭包，闭包关键点：外边声明变量
    //对bus总线的监听，一般放这里
    const refresh=debounce(this.$refs.bScroll.refreshed,300);
    this.$bus.$on('itemImgLoad',()=>{
      refresh();
    });

    //3: 获取tabControl的offsetTop
    console.log(this.$refs.tabControl.$el);

  },
  methods: {

    // debounce防抖实用程序,封装到commonjs里的utils.js里了
/*     debounce(func,delay){
      let timer=null;
      return function (...args) {
        if(timer){ clearTimeout(timer);};
        timer=setTimeout(()=>{ func(); },delay);
      };
    }, */
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
      //可以在这里写上拉加载更多的多次作用函数
      //this.$refs.scroll.finishPullUp();
      //注意，finishPullUp函数要在bscroll.vue里写好，现在我注释掉了
    },
    gotoTop() {
      //这里没有直接获取子组件下的scroll对象，而是先在bscroll组件里封装了scrollTo方法然后调用，好处是这里拿到当前子组件对象就行，不用管子组件里的scroll对象了（万一名字不对呢））
      this.$refs.bScroll.scrollTo(0, 0, 500);
    },
    //通过bscroll里的监听scroll事件，传过来实时position数据
    outputScrollPosition(position) {
      this.scrollPosition = position;
    },
    //上拉加载更多
    pullingUp(){
      console.log('上拉加载更多...');
      this.getHomeGoods(this.currentType);
    },
  }
};
</script>
<style lang="less" scoped>
.this-good{
  font-size: 10px;
}
#home {
  //padding-top:44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
}
//由于外包的是betterscroll，所以sticky没用了
/* .sticky {
  position: sticky;
  top: 40px;
  z-index: 100;
} */
.scroll-wrapper {
  //height:100vh;
  overflow: hidden;
  //height: calc(100vh - 114px);
  //除了用calc计算，还可以用绝对定位
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 70px;
  background-color: #ffffff;
}

.fade-enter-active,.fade-leave-active{
  transition:opacity .5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>