import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

//插件引入swiper
//import vueSwiper from 'vue-awesome-swiper';

//import 'swiper/dist/css/swiper.css';

//Vue.use(vueSwiper);

// 挂载事件总线
const Bus=new Vue();



Vue.config.productionTip = false

new Vue({
  data:{
    Bus,
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
