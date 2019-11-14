import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {//不能异步操作  是改变状态池（state）里面数据的唯一路径
    changeLogin(state, status) {
      state.userInfo = status;
    }
  },
  actions: {//通过调用mutations里面的方法改变state
    loginAction({ commit }, user) {
      commit('changeLogin', user);
    }
  },
  modules: {
    
  }
})
