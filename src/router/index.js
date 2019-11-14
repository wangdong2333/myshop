import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Detail from '../views/Detail.vue'
import FooterBar from '../components/FooterBar.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
  },
  {
    path: '/category',
    name: 'category',
    // component: Category
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
  },
  {
    path: '/cart',
    name: 'cart',
    // component: Cart
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
  },
  {
    path: '/profile',
    name: 'profile',
    // component: Profile
    components: {
      default: Profile,
      'footer-bar': FooterBar
    },
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
 
]

const router = new VueRouter({
  routes
})

export default router
