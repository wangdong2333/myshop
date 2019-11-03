import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//vant的完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//按需引入
import { Button,Icon } from 'vant';
Vue.use(Button).use(Icon );


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
