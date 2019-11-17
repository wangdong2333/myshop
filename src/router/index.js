import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
import Detail from '../views/Detail.vue'
import FooterBar from '../components/FooterBar.vue'
import Error from '../views/Error.vue'


//路由组件懒加载  进行优化  这么写只有点击徐建的时候才会加载
let Home = ()=> import('../views/Home.vue');
let Category = ()=> import('../views/Category.vue');
let Cart = ()=> import('../views/Cart.vue');
let Profile = ()=> import('../views/Profile.vue');





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
    meta:{
        keepAlive: true
      }
  },
  {
    path: '/category',
    name: 'category',
    // component: Category
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // component: Cart
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    // component: Profile
    components: {
      default: Profile,
      'footer-bar': FooterBar
    },
    meta:{
      keepAlive: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path:'*',
    name:'error',
    component:Error
  }
 
]

const router = new VueRouter({
  routes
})

export default router
