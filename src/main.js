import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

//插件引入swiper
//import vueSwiper from 'vue-awesome-swiper';

//import 'swiper/dist/css/swiper.css';

//Vue.use(vueSwiper);

// 挂载事件总线
//const Bus=new Vue();

//创建事件总线新方法
Vue.prototype.$bus=new Vue();


Vue.config.productionTip = false

new Vue({
  data:{
    //Bus,这是 上边 const Bus=new Vue()写法，不用了麻烦
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
