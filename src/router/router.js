import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue');
const Category = () => import('../views/category/category.vue');
const Cart = () => import('../views/cart/cart.vue');
const Profile = () => import('../views/profile/profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    //name: 'home',
    component: Home,
    meta:{
      keepAlive:false,
    }
  },
  {
    path: '/category',
    //name: 'category',
    component: Category,
  }, {
    path: '/cart',
    //name: 'cart',
    component: Cart,
  }, {
    path: '/profile',
    //name: 'profile',
    component: Profile,
  },
]

const router = new VueRouter({
  /* mode:'history', */
  routes
})

export default router