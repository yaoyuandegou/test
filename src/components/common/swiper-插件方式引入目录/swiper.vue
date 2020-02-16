<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
      <img :src="item" />
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 左右箭头 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
export default {
  data() {
    return {
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      },
      carouselArr:[
          require("assets/img/carousel/a1.jpg"),
          require("assets/img/carousel/a2.jpg"),
          require("assets/img/carousel/a3.jpg"),
          require("assets/img/carousel/a4.jpg"),
      ]
    };
  },
  components:{swiper,swiperSlide}
};
</script>
<style lang="less" scoped>
.swiper {
    height: 40vh;
    .swiper-button-prev,.swiper-button-next{
        transform: scale(0.8);
    }
    .swiper-button-prev{
      left:20px;
    }
    .swiper-button-next{
      right:20px;
    }    
}

</style>