import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

//插件引入swiper
//import vueSwiper from 'vue-awesome-swiper';

//import 'swiper/dist/css/swiper.css';

//Vue.use(vueSwiper);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
