<template>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {swiper,swiperItem} from "components/common/swiper";
export default {
  name:"homeSwiper",
  components:{swiper,swiperItem},
  props:{
      banners:{
          type:Array,
          default(){return [];}
      }
  },
}
</script>

<style lang="less" scoped>

</style>