import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import '@/mock/mock.js';


//vant的完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//按需引入
import {toast, Button,Icon,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Tab,Tabs,Field,CellGroup} from 'vant';
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem);
Vue.use(toast).use(Lazyload).use(Tab).use(Tabs).use(Field).use(CellGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
